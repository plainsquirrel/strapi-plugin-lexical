/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type {
  DOMExportOutput,
  EditorConfig,
  LexicalNode,
  LexicalUpdateJSON,
  NodeKey,
  SerializedLexicalNode,
  Spread,
} from 'lexical';
import type { JSX } from 'react';

import { $applyNodeReplacement, DecoratorNode } from 'lexical';
import * as React from 'react';
import { Suspense } from 'react';

const StrapiImageComponent = React.lazy(() => import('./StrapiImageComponent'));

export interface StrapiImagePayload {
  documentId: string;
  src: string;
  caption?: string;
}

export type SerializedStrapiImageNode = Spread<
  {
    documentId: string;
    src: string;
    caption?: string;
  },
  SerializedLexicalNode
>;

export type SerializedLinkNode = Spread<
  {
    url: string;
  },
  SerializedLexicalNode
>;

export class StrapiImageNode extends DecoratorNode<JSX.Element> {
  __documentId: string;
  __src: string;
  __caption: string;

  static getType(): string {
    return 'strapi-image';
  }

  static clone(node: StrapiImageNode): StrapiImageNode {
    return new StrapiImageNode(node.__documentId, node.__src, node.__caption, node.__key);
  }

  static importJSON(serializedNode: SerializedStrapiImageNode): StrapiImageNode {
    const { documentId, src, caption = '' } = serializedNode;
    return $createStrapiImageNode({
      documentId,
      src,
      caption,
    }).updateFromJSON(serializedNode);
  }

  updateFromJSON(serializedNode: LexicalUpdateJSON<SerializedStrapiImageNode>): this {
    const node = super.updateFromJSON(serializedNode);
    return node;
  }

  exportDOM(): DOMExportOutput {
    const element = document.createElement('img');
    element.setAttribute('src', this.__src);
    if (this.__caption) {
      element.setAttribute('alt', this.__caption);
    }
    return { element };
  }

  constructor(documentId: string, src: string, caption?: string, key?: NodeKey) {
    super(key);
    this.__documentId = documentId;
    this.__src = src;
    this.__caption = caption || '';
  }

  exportJSON(): SerializedStrapiImageNode {
    return {
      ...super.exportJSON(),
      documentId: this.__documentId,
      src: this.__src,
      caption: this.__caption,
    };
  }

  setCaption(caption: string): void {
    const writable = this.getWritable();
    writable.__caption = caption;
  }

  getCaption(): string {
    return this.__caption;
  }

  // View

  createDOM(config: EditorConfig): HTMLElement {
    const div = document.createElement('div');
    const theme = config.theme;
    const className = theme.image;
    if (className !== undefined) {
      div.className = className;
    }
    div.style.display = 'block';
    div.style.width = '100%';
    return div;
  }

  updateDOM(): false {
    return false;
  }

  decorate(): JSX.Element {
    return (
      <Suspense fallback={null}>
        <StrapiImageComponent
          documentId={this.__documentId}
          src={this.__src}
          caption={this.__caption}
          nodeKey={this.__key}
        />
      </Suspense>
    );
  }
}

export function $createStrapiImageNode({
  documentId,
  src,
  caption,
}: StrapiImagePayload): StrapiImageNode {
  return $applyNodeReplacement(new StrapiImageNode(documentId, src, caption));
}

export function $isStrapiImageNode(node: LexicalNode | null | undefined): node is StrapiImageNode {
  return node instanceof StrapiImageNode;
}
