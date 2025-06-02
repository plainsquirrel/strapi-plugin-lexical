/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { JSX } from 'react';

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { mergeRegister } from '@lexical/utils';
import {
  $createRangeSelection,
  $getSelection,
  $insertNodes,
  $isNodeSelection,
  $isRangeSelection,
  $setSelection,
  COMMAND_PRIORITY_EDITOR,
  COMMAND_PRIORITY_HIGH,
  COMMAND_PRIORITY_LOW,
  createCommand,
  DRAGOVER_COMMAND,
  DRAGSTART_COMMAND,
  DROP_COMMAND,
  getDOMSelectionFromTarget,
  isHTMLElement,
  LexicalCommand,
  LexicalEditor,
} from 'lexical';
import { useEffect } from 'react';
import * as React from 'react';

import {
  $createStrapiImageNode,
  $isStrapiImageNode,
  StrapiImageNode,
  StrapiImagePayload,
} from '../nodes/StrapiImageNode';

export type InsertStrapiImagePayload = Readonly<StrapiImagePayload>;

export const INSERT_STRAPI_IMAGE_COMMAND: LexicalCommand<InsertStrapiImagePayload> = createCommand(
  'INSERT_STRAPI_IMAGE_COMMAND'
);

export function InsertStrapiImageDialog({
  activeEditor,
  onClose,
  MediaLibraryDialog,
}: {
  activeEditor: LexicalEditor;
  onClose: () => void;
  MediaLibraryDialog: React.ComponentType<{
    allowedTypes: string[];
    onClose: () => void;
    onSelectAssets: (assets: any[]) => void;
  }>;
}) {
  const handleSelectAssets = (assets: any[]) => {
    try {
      if (assets.length > 0) {
        for (const asset of assets) {
          const imagePayload: InsertStrapiImagePayload = {
            documentId: asset.documentId,
            src: asset.url || asset.formats?.thumbnail?.url,
          };
          activeEditor.dispatchCommand(INSERT_STRAPI_IMAGE_COMMAND, imagePayload);
        }
        onClose();
      }
    } catch (err) {
      console.log('Unable to insert images:');
      console.log(err);
    }
  };

  return (
    <MediaLibraryDialog
      allowedTypes={['images']}
      onClose={onClose}
      onSelectAssets={handleSelectAssets}
    />
  );
}

export default function StrapiImagePlugin(): JSX.Element | null {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (!editor.hasNodes([StrapiImageNode])) {
      throw new Error('StrapiImagePlugin:  StrapiImageNode not registered on editor');
    }

    return mergeRegister(
      editor.registerCommand<InsertStrapiImagePayload>(
        INSERT_STRAPI_IMAGE_COMMAND,
        (payload) => {
          const selection = $getSelection();
          const strapiImageNode = $createStrapiImageNode(payload);
          if ($isRangeSelection(selection)) {
            selection.insertParagraph();
            $insertNodes([strapiImageNode]);
            selection.insertParagraph();
          } else {
            $insertNodes([strapiImageNode]);
          }
          return true;
        },
        COMMAND_PRIORITY_EDITOR
      ),
      editor.registerCommand<DragEvent>(
        DRAGSTART_COMMAND,
        (event) => {
          return $onDragStart(event);
        },
        COMMAND_PRIORITY_HIGH
      ),
      editor.registerCommand<DragEvent>(
        DRAGOVER_COMMAND,
        (event) => {
          return $onDragover(event);
        },
        COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand<DragEvent>(
        DROP_COMMAND,
        (event) => {
          return $onDrop(event, editor);
        },
        COMMAND_PRIORITY_HIGH
      )
    );
  }, [editor]);

  return null;
}

const TRANSPARENT_IMAGE =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
const img = document.createElement('img');
img.src = TRANSPARENT_IMAGE;

function $onDragStart(event: DragEvent): boolean {
  const node = $getImageNodeInSelection();
  if (!node) {
    return false;
  }
  const dataTransfer = event.dataTransfer;
  if (!dataTransfer) {
    return false;
  }
  dataTransfer.setData('text/plain', '_');
  dataTransfer.setDragImage(img, 0, 0);
  dataTransfer.setData(
    'application/x-lexical-drag',
    JSON.stringify({
      data: {
        key: node.getKey(),
        src: node.__src,
        documentId: node.__documentId,
      },
      type: 'image',
    })
  );

  return true;
}

function $onDragover(event: DragEvent): boolean {
  const node = $getImageNodeInSelection();
  if (!node) {
    return false;
  }
  if (!canDropImage(event)) {
    event.preventDefault();
  }
  return true;
}

function $onDrop(event: DragEvent, editor: LexicalEditor): boolean {
  const node = $getImageNodeInSelection();
  if (!node) {
    return false;
  }
  const data = getDragImageData(event);
  if (!data) {
    return false;
  }
  event.preventDefault();
  if (canDropImage(event)) {
    const range = getDragSelection(event);
    node.remove();
    const rangeSelection = $createRangeSelection();
    if (range !== null && range !== undefined) {
      rangeSelection.applyDOMRange(range);
    }
    $setSelection(rangeSelection);
    editor.dispatchCommand(INSERT_STRAPI_IMAGE_COMMAND, data);
  }
  return true;
}

function $getImageNodeInSelection(): StrapiImageNode | null {
  const selection = $getSelection();
  if (!$isNodeSelection(selection)) {
    return null;
  }
  const nodes = selection.getNodes();
  const node = nodes[0];
  return $isStrapiImageNode(node) ? node : null;
}

function getDragImageData(event: DragEvent): null | InsertStrapiImagePayload {
  const dragData = event.dataTransfer?.getData('application/x-lexical-drag');
  if (!dragData) {
    return null;
  }
  const { type, data } = JSON.parse(dragData);
  if (type !== 'image') {
    return null;
  }

  return data;
}

declare global {
  interface DragEvent {
    rangeOffset?: number;
    rangeParent?: Node;
  }
}

function canDropImage(event: DragEvent): boolean {
  const target = event.target;
  return !!(
    isHTMLElement(target) &&
    !target.closest('code, span.editor-image') &&
    isHTMLElement(target.parentElement) &&
    target.parentElement.closest('div.ContentEditable__root')
  );
}

function getDragSelection(event: DragEvent): Range | null | undefined {
  let range;
  const domSelection = getDOMSelectionFromTarget(event.target);
  if (document.caretRangeFromPoint) {
    range = document.caretRangeFromPoint(event.clientX, event.clientY);
  } else if (event.rangeParent && domSelection !== null) {
    domSelection.collapse(event.rangeParent, event.rangeOffset || 0);
    range = domSelection.getRangeAt(0);
  } else {
    throw Error(`Cannot get the selection when dragging`);
  }

  return range;
}
