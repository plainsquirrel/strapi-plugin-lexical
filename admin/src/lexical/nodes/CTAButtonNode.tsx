import type {
  DOMConversionMap,
  DOMConversionOutput,
  DOMExportOutput,
  EditorConfig,
  ElementFormatType,
  LexicalEditor,
  LexicalNode,
  NodeKey,
  Spread,
} from 'lexical';
import type { JSX } from 'react';

import { BlockWithAlignableContents } from '@lexical/react/LexicalBlockWithAlignableContents';
import {
  DecoratorBlockNode,
  SerializedDecoratorBlockNode,
} from '@lexical/react/LexicalDecoratorBlockNode';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $getNodeByKey } from 'lexical';
import { useState, useRef, useEffect } from 'react';

import './CTAButtonNode.css';

export interface CTAButtonPayload {
  text: string;
  subText?: string;
  url: string;
  color: string;
  key?: NodeKey;
}

type CTAButtonComponentProps = Readonly<{
  className: Readonly<{
    base: string;
    focus: string;
  }>;
  format: ElementFormatType | null;
  nodeKey: NodeKey;
  text: string;
  subText?: string;
  url: string;
  color: string;
}>;

function CTAButtonComponent({
  className,
  format,
  nodeKey,
  text,
  subText,
  url,
  color,
}: CTAButtonComponentProps) {
  const [editor] = useLexicalComposerContext();
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const buttonStyle = {
    backgroundColor: color,
    borderColor: color,
    color: '#ffffff',
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setContextMenuPosition({ x: e.clientX, y: e.clientY });
    setShowContextMenu(true);
  };

  const handleEdit = () => {
    editor.update(() => {
      const node = $getNodeByKey(nodeKey);
      if (node && $isCTAButtonNode(node)) {
        // Dispatch custom event to open edit modal
        const event = new CustomEvent('editCTAButton', {
          detail: {
            nodeKey,
            text: node.getText(),
            subText: node.getSubText(),
            url: node.getURL(),
            color: node.getColor(),
          },
        });
        window.dispatchEvent(event);
      }
    });
    setShowContextMenu(false);
  };

  const handleDelete = () => {
    editor.update(() => {
      const node = $getNodeByKey(nodeKey);
      if (node) {
        node.remove();
      }
    });
    setShowContextMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = () => {
      setShowContextMenu(false);
    };

    if (showContextMenu) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [showContextMenu]);

  return (
    <BlockWithAlignableContents className={className} format={format} nodeKey={nodeKey}>
      <div className="cta-button-container">
        <a
          ref={buttonRef}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
          style={buttonStyle}
          onContextMenu={handleContextMenu}
        >
          <div className="cta-button-content">
            <span className="cta-button-text">{text}</span>
            {subText && <span className="cta-button-subtext">{subText}</span>}
          </div>
        </a>

        {showContextMenu && (
          <div
            className="cta-button-context-menu"
            style={{
              position: 'fixed',
              left: contextMenuPosition.x,
              top: contextMenuPosition.y,
            }}
          >
            <button className="cta-button-context-menu-item" onClick={handleEdit}>
              Edit
            </button>
            <button className="cta-button-context-menu-item" onClick={handleDelete}>
              Delete
            </button>
          </div>
        )}
      </div>
    </BlockWithAlignableContents>
  );
}

export type SerializedCTAButtonNode = Spread<
  {
    text: string;
    subText?: string;
    url: string;
    color: string;
  },
  SerializedDecoratorBlockNode
>;

function $convertCTAButtonElement(domNode: HTMLElement): null | DOMConversionOutput {
  const text = domNode.textContent || '';
  const url = domNode.getAttribute('data-url') || '';
  const subText = domNode.getAttribute('data-subtext') || undefined;
  const color = domNode.getAttribute('data-color') || '#3b82f6';

  if (text && url) {
    const node = $createCTAButtonNode({ text, subText, url, color });
    return { node };
  }
  return null;
}

export class CTAButtonNode extends DecoratorBlockNode {
  __text: string;
  __subText?: string;
  __url: string;
  __color: string;

  static getType(): string {
    return 'cta-button';
  }

  static clone(node: CTAButtonNode): CTAButtonNode {
    return new CTAButtonNode(
      node.__text,
      node.__subText,
      node.__url,
      node.__color,
      node.__format,
      node.__key
    );
  }

  static importJSON(serializedNode: SerializedCTAButtonNode): CTAButtonNode {
    const { text, subText, url, color } = serializedNode;
    const node = $createCTAButtonNode({
      text,
      subText,
      url,
      color,
    });
    return node.updateFromJSON(serializedNode);
  }

  exportJSON(): SerializedCTAButtonNode {
    return {
      ...super.exportJSON(),
      text: this.getText(),
      subText: this.getSubText(),
      url: this.getURL(),
      color: this.getColor(),
    };
  }

  constructor(
    text: string,
    subText: string | undefined,
    url: string,
    color: string,
    format?: ElementFormatType,
    key?: NodeKey
  ) {
    super(format, key);
    this.__text = text;
    this.__subText = subText;
    this.__url = url;
    this.__color = color;
  }

  exportDOM(): DOMExportOutput {
    const element = document.createElement('div');
    element.setAttribute('data-lexical-cta-button', 'true');
    element.setAttribute('data-url', this.__url);
    element.setAttribute('data-color', this.__color);
    if (this.__subText) {
      element.setAttribute('data-subtext', this.__subText);
    }
    element.textContent = this.__text;
    return { element };
  }

  static importDOM(): DOMConversionMap | null {
    return {
      div: (domNode: HTMLElement) => {
        if (!domNode.hasAttribute('data-lexical-cta-button')) {
          return null;
        }
        return {
          conversion: $convertCTAButtonElement,
          priority: 1,
        };
      },
    };
  }

  updateDOM(): false {
    return false;
  }

  getText(): string {
    return this.__text;
  }

  getSubText(): string | undefined {
    return this.__subText;
  }

  getURL(): string {
    return this.__url;
  }

  getColor(): string {
    return this.__color;
  }

  setTextContent(text: string): void {
    const writable = this.getWritable();
    writable.__text = text;
  }

  setSubText(subText: string | undefined): void {
    const writable = this.getWritable();
    writable.__subText = subText;
  }

  setURL(url: string): void {
    const writable = this.getWritable();
    writable.__url = url;
  }

  setColor(color: string): void {
    const writable = this.getWritable();
    writable.__color = color;
  }

  getTextContent(
    _includeInert?: boolean | undefined,
    _includeDirectionless?: false | undefined
  ): string {
    return `${this.__text}${this.__subText ? ` - ${this.__subText}` : ''} (${this.__url})`;
  }

  decorate(_editor: LexicalEditor, config: EditorConfig): JSX.Element {
    const embedBlockTheme = config.theme.embedBlock || {};
    const className = {
      base: embedBlockTheme.base || '',
      focus: embedBlockTheme.focus || '',
    };
    return (
      <CTAButtonComponent
        className={className}
        format={this.__format}
        nodeKey={this.getKey()}
        text={this.__text}
        subText={this.__subText}
        url={this.__url}
        color={this.__color}
      />
    );
  }
}

export function $createCTAButtonNode({
  text,
  subText,
  url,
  color = '#3b82f6',
}: CTAButtonPayload): CTAButtonNode {
  return new CTAButtonNode(text, subText, url, color);
}

export function $isCTAButtonNode(
  node: CTAButtonNode | LexicalNode | null | undefined
): node is CTAButtonNode {
  return node instanceof CTAButtonNode;
}
