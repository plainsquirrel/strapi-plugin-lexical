/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { BaseSelection, LexicalCommand, LexicalEditor, NodeKey } from 'lexical';
import type { JSX } from 'react';

import './StrapiImageNode.css';

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useLexicalEditable } from '@lexical/react/useLexicalEditable';
import { useLexicalNodeSelection } from '@lexical/react/useLexicalNodeSelection';
import { mergeRegister } from '@lexical/utils';
import {
  $getNodeByKey,
  $getSelection,
  $isNodeSelection,
  $isRangeSelection,
  $setSelection,
  CLICK_COMMAND,
  COMMAND_PRIORITY_LOW,
  createCommand,
  DRAGSTART_COMMAND,
  KEY_BACKSPACE_COMMAND,
  KEY_DELETE_COMMAND,
  KEY_ENTER_COMMAND,
  KEY_ESCAPE_COMMAND,
  SELECTION_CHANGE_COMMAND,
} from 'lexical';
import { Suspense, useCallback, useEffect, useRef, useState } from 'react';

import brokenImage from '../images/image-broken.svg';
import { $isImageNode } from './ImageNode';
import { $isStrapiImageNode, StrapiImageNode } from './StrapiImageNode';

const imageCache = new Set();

export const RIGHT_CLICK_STRAPI_IMAGE_COMMAND: LexicalCommand<MouseEvent> = createCommand(
  'RIGHT_CLICK_STRAPI_IMAGE_COMMAND'
);

import { useIntl } from 'react-intl';

function useSuspenseImage(src: string) {
  if (!imageCache.has(src)) {
    throw new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        imageCache.add(src);
        resolve(null);
      };
      img.onerror = () => {
        imageCache.add(src);
      };
    });
  }
}

function LazyImage({
  className,
  src,
  onError,
}: {
  className: string | null;
  imageRef: { current: null | HTMLImageElement };
  src: string;
  onError: () => void;
}): JSX.Element {
  const { formatMessage } = useIntl();
  useSuspenseImage(src);
  return (
    <img
      className={className || undefined}
      src={src}
      onError={onError}
      draggable="false"
      alt={formatMessage({
        id: 'lexical.nodes.image.strapi.alt',
        defaultMessage: 'Strapi media library image',
      })}
    />
  );
}

function BrokenImage(): JSX.Element {
  const { formatMessage } = useIntl();
  return (
    <img
      src={brokenImage}
      style={{
        height: 200,
        opacity: 0.2,
        width: 200,
      }}
      draggable="false"
      alt={formatMessage({ id: 'lexical.nodes.image.broken.alt', defaultMessage: 'Broken image' })}
    />
  );
}

export default function StrapiImageComponent({
  documentId,
  src,
  caption,
  nodeKey,
}: {
  documentId: string;
  nodeKey: NodeKey;
  src: string;
  caption: string;
}): JSX.Element {
  const imageRef = useRef<null | HTMLImageElement>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const captionInputRef = useRef<HTMLInputElement | null>(null);
  const [isSelected, setSelected, clearSelection] = useLexicalNodeSelection(nodeKey);
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [isEditingCaption, setIsEditingCaption] = useState<boolean>(false);
  const [captionText, setCaptionText] = useState<string>(caption);
  const [editor] = useLexicalComposerContext();
  const [selection, setSelection] = useState<BaseSelection | null>(null);
  const activeEditorRef = useRef<LexicalEditor | null>(null);
  const [isLoadError, setIsLoadError] = useState<boolean>(false);
  const isEditable = useLexicalEditable();
  const { formatMessage } = useIntl();

  // Update caption text when prop changes
  useEffect(() => {
    setCaptionText(caption);
  }, [caption]);

  const updateCaptionInNode = useCallback(
    (newCaption: string) => {
      editor.update(() => {
        const node = $getNodeByKey(nodeKey);
        if ($isStrapiImageNode(node)) {
          node.setCaption(newCaption);
        }
      });
    },
    [editor, nodeKey]
  );

  const handleCaptionSubmit = useCallback(() => {
    updateCaptionInNode(captionText);
    setIsEditingCaption(false);
  }, [captionText, updateCaptionInNode]);

  const handleCaptionChange = useCallback(
    (value: string) => {
      setCaptionText(value);
      updateCaptionInNode(value);
    },
    [updateCaptionInNode]
  );

  const handleCaptionKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setIsEditingCaption(false);
      captionInputRef.current?.blur();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setIsEditingCaption(false);
      captionInputRef.current?.blur();
    }
  }, []);

  const handleCaptionBlur = useCallback(() => {
    setIsEditingCaption(false);
  }, []);

  const $onDelete = useCallback(
    (payload: KeyboardEvent) => {
      const deleteSelection = $getSelection();
      if (isSelected && $isNodeSelection(deleteSelection)) {
        const event: KeyboardEvent = payload;
        event.preventDefault();
        deleteSelection.getNodes().forEach((node) => {
          if ($isImageNode(node) || $isStrapiImageNode(node)) {
            node.remove();
          }
        });
      }
      return false;
    },
    [isSelected]
  );

  const $onEnter = useCallback(
    (event: KeyboardEvent) => {
      const latestSelection = $getSelection();
      const buttonElem = buttonRef.current;
      if (
        isSelected &&
        $isNodeSelection(latestSelection) &&
        latestSelection.getNodes().length === 1
      ) {
        if (buttonElem !== null && buttonElem !== document.activeElement) {
          event.preventDefault();
          buttonElem.focus();
          return true;
        }
      }
      return false;
    },
    [isSelected]
  );

  const $onEscape = useCallback(
    (event: KeyboardEvent) => {
      if (buttonRef.current === event.target) {
        $setSelection(null);
        editor.update(() => {
          setSelected(true);
          const parentRootElement = editor.getRootElement();
          if (parentRootElement !== null) {
            parentRootElement.focus();
          }
        });
        return true;
      }
      return false;
    },
    [editor, setSelected]
  );

  const onClick = useCallback(
    (payload: MouseEvent) => {
      const event = payload;

      if (isResizing) {
        return true;
      }
      if (event.target === imageRef.current) {
        if (event.shiftKey) {
          setSelected(!isSelected);
        } else {
          clearSelection();
          setSelected(true);
        }
        return true;
      }

      return false;
    },
    [isResizing, isSelected, setSelected, clearSelection]
  );

  const onRightClick = useCallback(
    (event: MouseEvent): void => {
      editor.getEditorState().read(() => {
        const latestSelection = $getSelection();
        const domElement = event.target as HTMLElement;
        if (
          domElement.tagName === 'IMG' &&
          $isRangeSelection(latestSelection) &&
          latestSelection.getNodes().length === 1
        ) {
          editor.dispatchCommand(RIGHT_CLICK_STRAPI_IMAGE_COMMAND, event as MouseEvent);
        }
      });
    },
    [editor]
  );

  // Focus caption input when editing starts
  useEffect(() => {
    if (isEditingCaption && captionInputRef.current) {
      captionInputRef.current.focus();
      captionInputRef.current.select();
    }
  }, [isEditingCaption]);

  useEffect(() => {
    let isMounted = true;
    const rootElement = editor.getRootElement();
    const unregister = mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        if (isMounted) {
          setSelection(editorState.read(() => $getSelection()));
        }
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_, activeEditor) => {
          activeEditorRef.current = activeEditor;
          return false;
        },
        COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand<MouseEvent>(CLICK_COMMAND, onClick, COMMAND_PRIORITY_LOW),
      editor.registerCommand<MouseEvent>(
        RIGHT_CLICK_STRAPI_IMAGE_COMMAND,
        onClick,
        COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        DRAGSTART_COMMAND,
        (event) => {
          if (event.target === imageRef.current) {
            // TODO This is just a temporary workaround for FF to behave like other browsers.
            // Ideally, this handles drag & drop too (and all browsers).
            event.preventDefault();
            return true;
          }
          return false;
        },
        COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(KEY_DELETE_COMMAND, $onDelete, COMMAND_PRIORITY_LOW),
      editor.registerCommand(KEY_BACKSPACE_COMMAND, $onDelete, COMMAND_PRIORITY_LOW),
      editor.registerCommand(KEY_ENTER_COMMAND, $onEnter, COMMAND_PRIORITY_LOW),
      editor.registerCommand(KEY_ESCAPE_COMMAND, $onEscape, COMMAND_PRIORITY_LOW)
    );

    rootElement?.addEventListener('contextmenu', onRightClick);

    return () => {
      isMounted = false;
      unregister();
      rootElement?.removeEventListener('contextmenu', onRightClick);
    };
  }, [
    clearSelection,
    editor,
    isResizing,
    isSelected,
    nodeKey,
    $onDelete,
    $onEnter,
    $onEscape,
    onClick,
    onRightClick,
    setSelected,
  ]);

  const draggable = isSelected && $isNodeSelection(selection) && !isResizing;
  const isFocused = (isSelected || isResizing) && isEditable;

  return (
    <Suspense fallback={null}>
      <div className="strapi-image-container">
        <div draggable={draggable}>
          {isLoadError ? (
            <BrokenImage />
          ) : (
            <LazyImage
              className={
                isFocused ? `focused ${$isNodeSelection(selection) ? 'draggable' : ''}` : null
              }
              src={src}
              imageRef={imageRef}
              onError={() => setIsLoadError(true)}
            />
          )}
        </div>

        {/* Caption section */}
        <div className="strapi-image-caption-container">
          {isEditingCaption ? (
            <div className="caption-edit-container">
              <input
                ref={captionInputRef}
                type="text"
                value={captionText}
                onChange={(e) => handleCaptionChange(e.target.value)}
                onKeyDown={handleCaptionKeyDown}
                onBlur={handleCaptionBlur}
                placeholder={formatMessage({
                  id: 'lexical.nodes.image.caption.placeholder',
                  defaultMessage: 'Enter caption...',
                })}
                className="caption-input"
              />
            </div>
          ) : (
            <div
              className={`caption-display ${captionText ? 'has-caption' : 'no-caption'}`}
              onClick={() => isEditable && setIsEditingCaption(true)}
              title={
                isEditable
                  ? formatMessage({
                      id: 'lexical.nodes.image.caption.edit',
                      defaultMessage: 'Click to edit caption',
                    })
                  : undefined
              }
            >
              {captionText ||
                (isEditable
                  ? formatMessage({
                      id: 'lexical.nodes.image.caption.add',
                      defaultMessage: 'Add caption...',
                    })
                  : '')}
            </div>
          )}
        </div>
      </div>
    </Suspense>
  );
}
