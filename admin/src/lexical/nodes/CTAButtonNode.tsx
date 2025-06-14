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

import './CTAButtonNode.css';

export interface CTAButtonPayload {
  text: string;
  url: string;
  variant: 'primary' | 'secondary' | 'outline';
  size: 'small' | 'medium' | 'large';
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
  url: string;
  variant: 'primary' | 'secondary' | 'outline';
  size: 'small' | 'medium' | 'large';
}>;

function CTAButtonComponent({
  className,
  format,
  nodeKey,
  text,
  url,
  variant,
  size,
}: CTAButtonComponentProps) {
  const buttonClasses = ['cta-button', `cta-button--${variant}`, `cta-button--${size}`].join(' ');

  return (
    <BlockWithAlignableContents className={className} format={format} nodeKey={nodeKey}>
      <div className="cta-button-container">
        <a href={url} target="_blank" rel="noopener noreferrer" className={buttonClasses}>
          {text}
        </a>
      </div>
    </BlockWithAlignableContents>
  );
}

export type SerializedCTAButtonNode = Spread<
  {
    text: string;
    url: string;
    variant: 'primary' | 'secondary' | 'outline';
    size: 'small' | 'medium' | 'large';
  },
  SerializedDecoratorBlockNode
>;

function $convertCTAButtonElement(domNode: HTMLElement): null | DOMConversionOutput {
  const text = domNode.textContent || '';
  const url = domNode.getAttribute('data-url') || '';
  const variant =
    (domNode.getAttribute('data-variant') as CTAButtonPayload['variant']) || 'primary';
  const size = (domNode.getAttribute('data-size') as CTAButtonPayload['size']) || 'medium';

  if (text && url) {
    const node = $createCTAButtonNode({ text, url, variant, size });
    return { node };
  }
  return null;
}

export class CTAButtonNode extends DecoratorBlockNode {
  __text: string;
  __url: string;
  __variant: 'primary' | 'secondary' | 'outline';
  __size: 'small' | 'medium' | 'large';

  static getType(): string {
    return 'cta-button';
  }

  static clone(node: CTAButtonNode): CTAButtonNode {
    return new CTAButtonNode(
      node.__text,
      node.__url,
      node.__variant,
      node.__size,
      node.__format,
      node.__key
    );
  }

  static importJSON(serializedNode: SerializedCTAButtonNode): CTAButtonNode {
    const { text, url, variant, size } = serializedNode;
    const node = $createCTAButtonNode({
      text,
      url,
      variant,
      size,
    });
    return node.updateFromJSON(serializedNode);
  }

  exportJSON(): SerializedCTAButtonNode {
    return {
      ...super.exportJSON(),
      text: this.getText(),
      url: this.getURL(),
      variant: this.getVariant(),
      size: this.getSize(),
    };
  }

  constructor(
    text: string,
    url: string,
    variant: 'primary' | 'secondary' | 'outline',
    size: 'small' | 'medium' | 'large',
    format?: ElementFormatType,
    key?: NodeKey
  ) {
    super(format, key);
    this.__text = text;
    this.__url = url;
    this.__variant = variant;
    this.__size = size;
  }

  exportDOM(): DOMExportOutput {
    const element = document.createElement('div');
    element.setAttribute('data-lexical-cta-button', 'true');
    element.setAttribute('data-url', this.__url);
    element.setAttribute('data-variant', this.__variant);
    element.setAttribute('data-size', this.__size);
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

  getURL(): string {
    return this.__url;
  }

  getVariant(): 'primary' | 'secondary' | 'outline' {
    return this.__variant;
  }

  getSize(): 'small' | 'medium' | 'large' {
    return this.__size;
  }

  setTextContent(text: string): void {
    const writable = this.getWritable();
    writable.__text = text;
  }

  setURL(url: string): void {
    const writable = this.getWritable();
    writable.__url = url;
  }

  setVariant(variant: 'primary' | 'secondary' | 'outline'): void {
    const writable = this.getWritable();
    writable.__variant = variant;
  }

  setSize(size: 'small' | 'medium' | 'large'): void {
    const writable = this.getWritable();
    writable.__size = size;
  }

  getTextContent(
    _includeInert?: boolean | undefined,
    _includeDirectionless?: false | undefined
  ): string {
    return `${this.__text} (${this.__url})`;
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
        url={this.__url}
        variant={this.__variant}
        size={this.__size}
      />
    );
  }
}

export function $createCTAButtonNode({
  text,
  url,
  variant = 'primary',
  size = 'medium',
}: CTAButtonPayload): CTAButtonNode {
  return new CTAButtonNode(text, url, variant, size);
}

export function $isCTAButtonNode(
  node: CTAButtonNode | LexicalNode | null | undefined
): node is CTAButtonNode {
  return node instanceof CTAButtonNode;
}
