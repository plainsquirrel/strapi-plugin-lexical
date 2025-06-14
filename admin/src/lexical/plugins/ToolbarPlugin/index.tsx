/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { JSX } from 'react';
import { useIntl } from 'react-intl';

import {
  $isCodeNode,
  CODE_LANGUAGE_FRIENDLY_NAME_MAP,
  CODE_LANGUAGE_MAP,
  getLanguageFriendlyName,
} from '@lexical/code';
import { $isLinkNode, TOGGLE_LINK_COMMAND } from '@lexical/link';
import { $isListNode, ListNode } from '@lexical/list';
import { INSERT_EMBED_COMMAND } from '@lexical/react/LexicalAutoEmbedPlugin';
import { INSERT_HORIZONTAL_RULE_COMMAND } from '@lexical/react/LexicalHorizontalRuleNode';
import { $isHeadingNode } from '@lexical/rich-text';
import {
  $getSelectionStyleValueForProperty,
  $isParentElementRTL,
  $patchStyleText,
} from '@lexical/selection';
import { $isTableNode, $isTableSelection } from '@lexical/table';
import {
  $findMatchingParent,
  $getNearestNodeOfType,
  $isEditorIsNestedEditor,
  mergeRegister,
} from '@lexical/utils';
import {
  $getNodeByKey,
  $getRoot,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  $isRootOrShadowRoot,
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  COMMAND_PRIORITY_CRITICAL,
  ElementFormatType,
  FORMAT_ELEMENT_COMMAND,
  FORMAT_TEXT_COMMAND,
  INDENT_CONTENT_COMMAND,
  LexicalEditor,
  NodeKey,
  OUTDENT_CONTENT_COMMAND,
  REDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  UNDO_COMMAND,
} from 'lexical';
import * as React from 'react';
import { Dispatch, useCallback, useEffect, useState } from 'react';
import { IS_APPLE } from '../../utils/environment';

import { useStrapiApp } from '@strapi/strapi/admin';
import { blockTypeToBlockName, useToolbarState } from '../../context/ToolbarContext';
import useModal from '../../hooks/useModal';
// import { $createStickyNode } from '../../nodes/StickyNode';
import DropDown, { DropDownItem } from '../../ui/DropDown';
import { getSelectedNode } from '../../utils/getSelectedNode';
import { sanitizeUrl } from '../../utils/url';
import { EmbedConfigs } from '../AutoEmbedPlugin';
import { INSERT_COLLAPSIBLE_COMMAND } from '../CollapsiblePlugin';
// import { InsertEquationDialog } from '../EquationsPlugin';
// import { INSERT_IMAGE_COMMAND, InsertImageDialog, InsertImagePayload } from '../ImagesPlugin';
// import { InsertInlineImageDialog } from '../InlineImagePlugin';
import InsertLayoutDialog from '../LayoutPlugin/InsertLayoutDialog';
// import { INSERT_PAGE_BREAK } from '../PageBreakPlugin';
// import { InsertPollDialog } from '../PollPlugin';
import { SHORTCUTS } from '../ShortcutsPlugin/shortcuts';
import { InsertStrapiImageDialog } from '../StrapiImagePlugin';
import { InsertTableDialog } from '../TablePlugin';
import { InsertCTAButtonDialog } from '../CTAButtonPlugin/InsertCTAButtonDialog';
import {
  clearFormatting,
  formatBulletList,
  formatCheckList,
  formatCode,
  formatHeading,
  formatNumberedList,
  formatParagraph,
  formatQuote,
} from './utils';
import { triggerImageUpload } from '../StrapiImageUploadPlugin';

const rootTypeToRootName = {
  root: 'Root',
  table: 'Table',
};

function getCodeLanguageOptions(): [string, string][] {
  const options: [string, string][] = [];

  for (const [lang, friendlyName] of Object.entries(CODE_LANGUAGE_FRIENDLY_NAME_MAP)) {
    options.push([lang, friendlyName]);
  }

  return options;
}

const CODE_LANGUAGE_OPTIONS = getCodeLanguageOptions();

const FONT_FAMILY_OPTIONS: [string, string][] = [
  ['Arial', 'Arial'],
  ['Courier New', 'Courier New'],
  ['Georgia', 'Georgia'],
  ['Times New Roman', 'Times New Roman'],
  ['Trebuchet MS', 'Trebuchet MS'],
  ['Verdana', 'Verdana'],
];

const FONT_SIZE_OPTIONS: [string, string][] = [
  ['10px', '10px'],
  ['11px', '11px'],
  ['12px', '12px'],
  ['13px', '13px'],
  ['14px', '14px'],
  ['15px', '15px'],
  ['16px', '16px'],
  ['17px', '17px'],
  ['18px', '18px'],
  ['19px', '19px'],
  ['20px', '20px'],
];

const ELEMENT_FORMAT_OPTIONS: {
  [key in Exclude<ElementFormatType, ''>]: {
    icon: string;
    iconRTL: string;
    name: string;
  };
} = {
  center: {
    icon: 'center-align',
    iconRTL: 'center-align',
    name: 'Center Align',
  },
  end: {
    icon: 'right-align',
    iconRTL: 'left-align',
    name: 'End Align',
  },
  justify: {
    icon: 'justify-align',
    iconRTL: 'justify-align',
    name: 'Justify Align',
  },
  left: {
    icon: 'left-align',
    iconRTL: 'left-align',
    name: 'Left Align',
  },
  right: {
    icon: 'right-align',
    iconRTL: 'right-align',
    name: 'Right Align',
  },
  start: {
    icon: 'left-align',
    iconRTL: 'right-align',
    name: 'Start Align',
  },
};

function dropDownActiveClass(active: boolean) {
  if (active) {
    return 'active dropdown-item-active';
  } else {
    return '';
  }
}

// @todo: extract to external file
function BlockFormatDropDown({
  editor,
  blockType,
  rootType,
  disabled = false,
}: {
  blockType: keyof typeof blockTypeToBlockName;
  rootType: keyof typeof rootTypeToRootName;
  editor: LexicalEditor;
  disabled?: boolean;
}): JSX.Element {
  const { formatMessage } = useIntl();

  return (
    <DropDown
      disabled={disabled}
      buttonClassName="toolbar-item block-controls"
      buttonIconClassName={'icon block-type ' + blockType}
      buttonLabel={formatMessage({
        id: `lexical.content.block.type.${blockType}`,
        defaultMessage: blockTypeToBlockName[blockType],
      })}
      buttonAriaLabel={formatMessage({
        id: 'lexical.plugin.toolbar.block.aria',
        defaultMessage: 'Formatting options for text style',
      })}
    >
      <DropDownItem
        className={'item wide ' + dropDownActiveClass(blockType === 'paragraph')}
        onClick={() => formatParagraph(editor)}
      >
        <div className="icon-text-container">
          <i className="icon paragraph" />
          <span className="text">
            {formatMessage({
              id: 'lexical.plugin.toolbar.block.paragraph',
              defaultMessage: 'Paragraph',
            })}
          </span>
        </div>
        <span className="shortcut">{SHORTCUTS.NORMAL}</span>
      </DropDownItem>
      <DropDownItem
        className={'item wide ' + dropDownActiveClass(blockType === 'h1')}
        onClick={() => formatHeading(editor, blockType, 'h1')}
      >
        <div className="icon-text-container">
          <i className="icon h1" />
          <span className="text">
            {formatMessage({
              id: 'lexical.plugin.toolbar.block.h1',
              defaultMessage: 'Heading 1',
            })}
          </span>
        </div>
        <span className="shortcut">{SHORTCUTS.HEADING1}</span>
      </DropDownItem>
      <DropDownItem
        className={'item wide ' + dropDownActiveClass(blockType === 'h2')}
        onClick={() => formatHeading(editor, blockType, 'h2')}
      >
        <div className="icon-text-container">
          <i className="icon h2" />
          <span className="text">
            {formatMessage({
              id: 'lexical.plugin.toolbar.block.h2',
              defaultMessage: 'Heading 2',
            })}
          </span>
        </div>
        <span className="shortcut">{SHORTCUTS.HEADING2}</span>
      </DropDownItem>
      <DropDownItem
        className={'item wide ' + dropDownActiveClass(blockType === 'h3')}
        onClick={() => formatHeading(editor, blockType, 'h3')}
      >
        <div className="icon-text-container">
          <i className="icon h3" />
          <span className="text">
            {formatMessage({
              id: 'lexical.plugin.toolbar.block.h3',
              defaultMessage: 'Heading 3',
            })}
          </span>
        </div>
        <span className="shortcut">{SHORTCUTS.HEADING3}</span>
      </DropDownItem>
      <DropDownItem
        className={'item wide ' + dropDownActiveClass(blockType === 'bullet')}
        onClick={() => formatBulletList(editor, blockType)}
      >
        <div className="icon-text-container">
          <i className="icon bullet-list" />
          <span className="text">
            {formatMessage({
              id: 'lexical.plugin.toolbar.block.bullet',
              defaultMessage: 'Bullet List',
            })}
          </span>
        </div>
        <span className="shortcut">{SHORTCUTS.BULLET_LIST}</span>
      </DropDownItem>
      <DropDownItem
        className={'item wide ' + dropDownActiveClass(blockType === 'number')}
        onClick={() => formatNumberedList(editor, blockType)}
      >
        <div className="icon-text-container">
          <i className="icon numbered-list" />
          <span className="text">
            {formatMessage({
              id: 'lexical.plugin.toolbar.block.number',
              defaultMessage: 'Numbered List',
            })}
          </span>
        </div>
        <span className="shortcut">{SHORTCUTS.NUMBERED_LIST}</span>
      </DropDownItem>
      <DropDownItem
        className={'item wide ' + dropDownActiveClass(blockType === 'check')}
        onClick={() => formatCheckList(editor, blockType)}
      >
        <div className="icon-text-container">
          <i className="icon check-list" />
          <span className="text">
            {formatMessage({
              id: 'lexical.plugin.toolbar.block.check',
              defaultMessage: 'Check List',
            })}
          </span>
        </div>
        <span className="shortcut">{SHORTCUTS.CHECK_LIST}</span>
      </DropDownItem>
      <DropDownItem
        className={'item wide ' + dropDownActiveClass(blockType === 'quote')}
        onClick={() => formatQuote(editor, blockType)}
      >
        <div className="icon-text-container">
          <i className="icon quote" />
          <span className="text">
            {formatMessage({
              id: 'lexical.plugin.toolbar.block.quote',
              defaultMessage: 'Quote',
            })}
          </span>
        </div>
        <span className="shortcut">{SHORTCUTS.QUOTE}</span>
      </DropDownItem>
      <DropDownItem
        className={'item wide ' + dropDownActiveClass(blockType === 'code')}
        onClick={() => formatCode(editor, blockType)}
      >
        <div className="icon-text-container">
          <i className="icon code" />
          <span className="text">
            {formatMessage({
              id: 'lexical.plugin.toolbar.block.code',
              defaultMessage: 'Code Block',
            })}
          </span>
        </div>
        <span className="shortcut">{SHORTCUTS.CODE_BLOCK}</span>
      </DropDownItem>
    </DropDown>
  );
}

function Divider(): JSX.Element {
  return <div className="divider" />;
}

// @todo: extract to external file
function FontDropDown({
  editor,
  value,
  style,
  disabled = false,
}: {
  editor: LexicalEditor;
  value: string;
  style: string;
  disabled?: boolean;
}): JSX.Element {
  const { formatMessage } = useIntl();

  const handleClick = useCallback(
    (option: string) => {
      editor.update(() => {
        const selection = $getSelection();
        if (selection !== null) {
          $patchStyleText(selection, {
            [style]: option,
          });
        }
      });
    },
    [editor, style]
  );

  const buttonAriaLabel = formatMessage(
    {
      id: `lexical.plugin.toolbar.font.button.title`,
      defaultMessage: 'Formatting options for font {property}',
    },
    { property: style === 'font-family' ? 'family' : 'style' }
  );

  return (
    <DropDown
      disabled={disabled}
      buttonClassName={'toolbar-item ' + style}
      buttonLabel={value}
      buttonIconClassName={style === 'font-family' ? 'icon block-type font-family' : ''}
      buttonAriaLabel={buttonAriaLabel}
    >
      {(style === 'font-family' ? FONT_FAMILY_OPTIONS : FONT_SIZE_OPTIONS).map(([option, text]) => (
        <DropDownItem
          className={`item ${dropDownActiveClass(value === option)} ${
            style === 'font-size' ? 'fontsize-item' : ''
          }`}
          onClick={() => handleClick(option)}
          key={option}
        >
          <span className="text">{text}</span>
        </DropDownItem>
      ))}
    </DropDown>
  );
}

// @todo: extract to external file
function ElementFormatDropdown({
  editor,
  value,
  isRTL,
  disabled = false,
}: {
  editor: LexicalEditor;
  value: ElementFormatType;
  isRTL: boolean;
  disabled: boolean;
}) {
  const { formatMessage } = useIntl();
  const formatOption = ELEMENT_FORMAT_OPTIONS[value || 'left'];

  return (
    <DropDown
      disabled={disabled}
      buttonLabel={formatMessage({
        id: `lexical.plugin.toolbar.align.${value || 'left'}`,
        defaultMessage: formatOption.name,
      })}
      buttonIconClassName={`icon ${isRTL ? formatOption.iconRTL : formatOption.icon}`}
      buttonClassName="toolbar-item spaced alignment"
      buttonAriaLabel={formatMessage({
        id: 'lexical.plugin.toolbar.align.aria',
        defaultMessage: 'Formatting options for text alignment',
      })}
    >
      <DropDownItem
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left');
        }}
        className="item wide"
      >
        <div className="icon-text-container">
          <i className="icon left-align" />
          <span className="text">
            {formatMessage({
              id: 'lexical.plugin.toolbar.align.left',
              defaultMessage: 'Left Align',
            })}
          </span>
        </div>
        <span className="shortcut">{SHORTCUTS.LEFT_ALIGN}</span>
      </DropDownItem>
      <DropDownItem
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center');
        }}
        className="item wide"
      >
        <div className="icon-text-container">
          <i className="icon center-align" />
          <span className="text">
            {formatMessage({
              id: 'lexical.plugin.toolbar.align.center',
              defaultMessage: 'Center Align',
            })}
          </span>
        </div>
        <span className="shortcut">{SHORTCUTS.CENTER_ALIGN}</span>
      </DropDownItem>
      <DropDownItem
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right');
        }}
        className="item wide"
      >
        <div className="icon-text-container">
          <i className="icon right-align" />
          <span className="text">
            {formatMessage({
              id: 'lexical.plugin.toolbar.align.right',
              defaultMessage: 'Right Align',
            })}
          </span>
        </div>
        <span className="shortcut">{SHORTCUTS.RIGHT_ALIGN}</span>
      </DropDownItem>
      <DropDownItem
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'justify');
        }}
        className="item wide"
      >
        <div className="icon-text-container">
          <i className="icon justify-align" />
          <span className="text">
            {formatMessage({
              id: 'lexical.plugin.toolbar.align.justify',
              defaultMessage: 'Justify Align',
            })}
          </span>
        </div>
        <span className="shortcut">{SHORTCUTS.JUSTIFY_ALIGN}</span>
      </DropDownItem>
      <DropDownItem
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'start');
        }}
        className="item wide"
      >
        <i
          className={`icon ${
            isRTL ? ELEMENT_FORMAT_OPTIONS.start.iconRTL : ELEMENT_FORMAT_OPTIONS.start.icon
          }`}
        />
        <span className="text">
          {formatMessage({
            id: 'lexical.plugin.toolbar.align.start',
            defaultMessage: 'Start Align',
          })}
        </span>
      </DropDownItem>
      <DropDownItem
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'end');
        }}
        className="item wide"
      >
        <i
          className={`icon ${
            isRTL ? ELEMENT_FORMAT_OPTIONS.end.iconRTL : ELEMENT_FORMAT_OPTIONS.end.icon
          }`}
        />
        <span className="text">
          {formatMessage({
            id: 'lexical.plugin.toolbar.align.end',
            defaultMessage: 'End Align',
          })}
        </span>
      </DropDownItem>
      <Divider />
      <DropDownItem
        onClick={() => {
          editor.dispatchCommand(OUTDENT_CONTENT_COMMAND, undefined);
        }}
        className="item wide"
      >
        <div className="icon-text-container">
          <i className={'icon ' + (isRTL ? 'indent' : 'outdent')} />
          <span className="text">
            {formatMessage({
              id: 'lexical.plugin.toolbar.indent.outdent',
              defaultMessage: 'Outdent',
            })}
          </span>
        </div>
        <span className="shortcut">{SHORTCUTS.OUTDENT}</span>
      </DropDownItem>
      <DropDownItem
        onClick={() => {
          editor.dispatchCommand(INDENT_CONTENT_COMMAND, undefined);
        }}
        className="item wide"
      >
        <div className="icon-text-container">
          <i className={'icon ' + (isRTL ? 'outdent' : 'indent')} />
          <span className="text">
            {formatMessage({
              id: 'lexical.plugin.toolbar.indent.indent',
              defaultMessage: 'Indent',
            })}
          </span>
        </div>
        <span className="shortcut">{SHORTCUTS.INDENT}</span>
      </DropDownItem>
    </DropDown>
  );
}

export default function ToolbarPlugin({
  editor,
  activeEditor,
  setActiveEditor,
  setIsLinkEditMode,
}: {
  editor: LexicalEditor;
  activeEditor: LexicalEditor;
  setActiveEditor: Dispatch<LexicalEditor>;
  setIsLinkEditMode: Dispatch<boolean>;
}): JSX.Element {
  const { formatMessage } = useIntl();

  const [selectedElementKey, setSelectedElementKey] = useState<NodeKey | null>(null);
  const [modal, showModal] = useModal();
  const [isEditable, setIsEditable] = useState(() => editor.isEditable());
  const { toolbarState, updateToolbarState } = useToolbarState();

  const $updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      if (activeEditor !== editor && $isEditorIsNestedEditor(activeEditor)) {
        const rootElement = activeEditor.getRootElement();
        updateToolbarState(
          'isImageCaption',
          !!rootElement?.parentElement?.classList.contains('image-caption-container')
        );
      } else {
        updateToolbarState('isImageCaption', false);
      }

      const anchorNode = selection.anchor.getNode();
      let element =
        anchorNode.getKey() === 'root'
          ? anchorNode
          : $findMatchingParent(anchorNode, (e) => {
              const parent = e.getParent();
              return parent !== null && $isRootOrShadowRoot(parent);
            });

      if (element === null) {
        element = anchorNode.getTopLevelElementOrThrow();
      }

      const elementKey = element.getKey();
      const elementDOM = activeEditor.getElementByKey(elementKey);

      updateToolbarState('isRTL', $isParentElementRTL(selection));

      // Update links
      const node = getSelectedNode(selection);
      const parent = node.getParent();
      const isLink = $isLinkNode(parent) || $isLinkNode(node);
      updateToolbarState('isLink', isLink);

      const tableNode = $findMatchingParent(node, $isTableNode);
      if ($isTableNode(tableNode)) {
        updateToolbarState('rootType', 'table');
      } else {
        updateToolbarState('rootType', 'root');
      }

      if (elementDOM !== null) {
        setSelectedElementKey(elementKey);
        if ($isListNode(element)) {
          const parentList = $getNearestNodeOfType<ListNode>(anchorNode, ListNode);
          const type = parentList ? parentList.getListType() : element.getListType();

          updateToolbarState('blockType', type);
        } else {
          const type = $isHeadingNode(element) ? element.getTag() : element.getType();
          if (type in blockTypeToBlockName) {
            updateToolbarState('blockType', type as keyof typeof blockTypeToBlockName);
          }
          if ($isCodeNode(element)) {
            const language = element.getLanguage() as keyof typeof CODE_LANGUAGE_MAP;
            updateToolbarState(
              'codeLanguage',
              language ? CODE_LANGUAGE_MAP[language] || language : ''
            );
            return;
          }
        }
      }
      // Handle buttons
      updateToolbarState(
        'fontColor',
        $getSelectionStyleValueForProperty(selection, 'color', '#000')
      );
      updateToolbarState(
        'bgColor',
        $getSelectionStyleValueForProperty(selection, 'background-color', '#fff')
      );
      updateToolbarState(
        'fontFamily',
        $getSelectionStyleValueForProperty(selection, 'font-family', 'Arial')
      );
      let matchingParent;
      if ($isLinkNode(parent)) {
        // If node is a link, we need to fetch the parent paragraph node to set format
        matchingParent = $findMatchingParent(
          node,
          (parentNode) => $isElementNode(parentNode) && !parentNode.isInline()
        );
      }

      // If matchingParent is a valid node, pass it's format type
      updateToolbarState(
        'elementFormat',
        $isElementNode(matchingParent)
          ? matchingParent.getFormatType()
          : $isElementNode(node)
            ? node.getFormatType()
            : parent?.getFormatType() || 'left'
      );
    }
    if ($isRangeSelection(selection) || $isTableSelection(selection)) {
      // Update text format
      updateToolbarState('isBold', selection.hasFormat('bold'));
      updateToolbarState('isItalic', selection.hasFormat('italic'));
      updateToolbarState('isUnderline', selection.hasFormat('underline'));
      updateToolbarState('isStrikethrough', selection.hasFormat('strikethrough'));
      updateToolbarState('isSubscript', selection.hasFormat('subscript'));
      updateToolbarState('isSuperscript', selection.hasFormat('superscript'));
      updateToolbarState('isCode', selection.hasFormat('code'));
      updateToolbarState(
        'fontSize',
        $getSelectionStyleValueForProperty(selection, 'font-size', '15px')
      );
      updateToolbarState('isLowercase', selection.hasFormat('lowercase'));
      updateToolbarState('isUppercase', selection.hasFormat('uppercase'));
      updateToolbarState('isCapitalize', selection.hasFormat('capitalize'));
    }
  }, [activeEditor, editor, updateToolbarState]);

  useEffect(() => {
    return editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      (_payload, newEditor) => {
        setActiveEditor(newEditor);
        $updateToolbar();
        return false;
      },
      COMMAND_PRIORITY_CRITICAL
    );
  }, [editor, $updateToolbar, setActiveEditor]);

  useEffect(() => {
    activeEditor.getEditorState().read(() => {
      $updateToolbar();
    });
  }, [activeEditor, $updateToolbar]);

  useEffect(() => {
    return mergeRegister(
      editor.registerEditableListener((editable) => {
        setIsEditable(editable);
      }),
      activeEditor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          $updateToolbar();
        });
      }),
      activeEditor.registerCommand<boolean>(
        CAN_UNDO_COMMAND,
        (payload) => {
          updateToolbarState('canUndo', payload);
          return false;
        },
        COMMAND_PRIORITY_CRITICAL
      ),
      activeEditor.registerCommand<boolean>(
        CAN_REDO_COMMAND,
        (payload) => {
          updateToolbarState('canRedo', payload);
          return false;
        },
        COMMAND_PRIORITY_CRITICAL
      )
    );
  }, [$updateToolbar, activeEditor, editor, updateToolbarState]);

  const applyStyleText = useCallback(
    (styles: Record<string, string>, skipHistoryStack?: boolean) => {
      activeEditor.update(
        () => {
          const selection = $getSelection();
          if (selection !== null) {
            $patchStyleText(selection, styles);
          }
        },
        skipHistoryStack ? { tag: 'historic' } : {}
      );
    },
    [activeEditor]
  );

  const onFontColorSelect = useCallback(
    (value: string, skipHistoryStack: boolean) => {
      applyStyleText({ color: value }, skipHistoryStack);
    },
    [applyStyleText]
  );

  const onBgColorSelect = useCallback(
    (value: string, skipHistoryStack: boolean) => {
      applyStyleText({ 'background-color': value }, skipHistoryStack);
    },
    [applyStyleText]
  );

  const insertLink = useCallback(() => {
    if (!toolbarState.isLink) {
      setIsLinkEditMode(true);
      activeEditor.dispatchCommand(TOGGLE_LINK_COMMAND, sanitizeUrl('https://'));
    } else {
      setIsLinkEditMode(false);
      activeEditor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
    }
  }, [activeEditor, setIsLinkEditMode, toolbarState.isLink]);

  const onCodeLanguageSelect = useCallback(
    (value: string) => {
      activeEditor.update(() => {
        if (selectedElementKey !== null) {
          const node = $getNodeByKey(selectedElementKey);
          if ($isCodeNode(node)) {
            node.setLanguage(value);
          }
        }
      });
    },
    [activeEditor, selectedElementKey]
  );

  // const insertGifOnClick = (payload: InsertImagePayload) => {
  //   activeEditor.dispatchCommand(INSERT_IMAGE_COMMAND, payload);
  // };

  const canViewerSeeInsertDropdown = !toolbarState.isImageCaption;
  const canViewerSeeInsertCodeButton = !toolbarState.isImageCaption;

  const [isStrapiImageDialogOpen, setIsStrapiImageDialogOpen] = useState(false);

  const components = useStrapiApp('ImageDialog', (state) => state.components);

  const MediaLibraryDialog = components['media-library'] as React.ComponentType<{
    allowedTypes: string[];
    onClose: () => void;
    onSelectAssets: (assets: any[]) => void;
  }>;

  return (
    <div className="toolbar">
      <button
        disabled={!toolbarState.canUndo || !isEditable}
        onClick={() => {
          activeEditor.dispatchCommand(UNDO_COMMAND, undefined);
        }}
        title={formatMessage(
          { id: 'lexical.plugin.toolbar.undo.title', defaultMessage: 'Undo ({shortcut})' },
          { shortcut: IS_APPLE ? '⌘Z' : 'Ctrl+Z' }
        )}
        type="button"
        className="toolbar-item spaced"
        aria-label={formatMessage({
          id: 'lexical.plugin.toolbar.undo.aria',
          defaultMessage: 'Undo',
        })}
      >
        <i className="format undo" />
      </button>
      <button
        disabled={!toolbarState.canRedo || !isEditable}
        onClick={() => {
          activeEditor.dispatchCommand(REDO_COMMAND, undefined);
        }}
        title={formatMessage(
          { id: 'lexical.plugin.toolbar.redo.title', defaultMessage: 'Redo ({shortcut})' },
          { shortcut: IS_APPLE ? '⇧⌘Z' : 'Ctrl+Y' }
        )}
        type="button"
        className="toolbar-item"
        aria-label={formatMessage({
          id: 'lexical.plugin.toolbar.redo.aria',
          defaultMessage: 'Redo',
        })}
      >
        <i className="format redo" />
      </button>
      {isStrapiImageDialogOpen && (
        <InsertStrapiImageDialog
          MediaLibraryDialog={MediaLibraryDialog}
          activeEditor={activeEditor}
          onClose={() => setIsStrapiImageDialogOpen(false)}
        />
      )}
      <Divider />
      {toolbarState.blockType in blockTypeToBlockName && activeEditor === editor && (
        <>
          <BlockFormatDropDown
            disabled={!isEditable}
            blockType={toolbarState.blockType}
            rootType={toolbarState.rootType}
            editor={activeEditor}
          />
          <Divider />
        </>
      )}
      {toolbarState.blockType === 'code' ? (
        <DropDown
          disabled={!isEditable}
          buttonClassName="toolbar-item code-language"
          buttonLabel={getLanguageFriendlyName(toolbarState.codeLanguage)}
          buttonAriaLabel="Select language"
        >
          {CODE_LANGUAGE_OPTIONS.map(([value, name]) => {
            return (
              <DropDownItem
                className={`item ${dropDownActiveClass(value === toolbarState.codeLanguage)}`}
                onClick={() => onCodeLanguageSelect(value)}
                key={value}
              >
                <span className="text">{name}</span>
              </DropDownItem>
            );
          })}
        </DropDown>
      ) : (
        <>
          {/* <FontDropDown
            disabled={!isEditable}
            style={'font-family'}
            value={toolbarState.fontFamily}
            editor={activeEditor}
          />
          <Divider />
          <FontSize
            selectionFontSize={toolbarState.fontSize.slice(0, -2)}
            editor={activeEditor}
            disabled={!isEditable}
          />
          <Divider /> */}
          <button
            disabled={!isEditable}
            onClick={() => {
              activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
            }}
            className={'toolbar-item spaced ' + (toolbarState.isBold ? 'active' : '')}
            title={formatMessage(
              {
                id: 'lexical.plugin.toolbar.format.bold.title',
                defaultMessage: 'Bold ({shortcut})',
              },
              { shortcut: SHORTCUTS.BOLD }
            )}
            type="button"
            aria-label={formatMessage({
              id: 'lexical.plugin.toolbar.format.bold.aria',
              defaultMessage: 'Format text as bold',
            })}
          >
            <i className="format bold" />
          </button>
          <button
            disabled={!isEditable}
            onClick={() => {
              activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
            }}
            className={'toolbar-item spaced ' + (toolbarState.isItalic ? 'active' : '')}
            title={formatMessage(
              {
                id: 'lexical.plugin.toolbar.format.italic.title',
                defaultMessage: 'Italic ({shortcut})',
              },
              { shortcut: SHORTCUTS.ITALIC }
            )}
            type="button"
            aria-label={formatMessage({
              id: 'lexical.plugin.toolbar.format.italic.aria',
              defaultMessage: 'Format text as italics',
            })}
          >
            <i className="format italic" />
          </button>
          <button
            disabled={!isEditable}
            onClick={() => {
              activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
            }}
            className={'toolbar-item spaced ' + (toolbarState.isUnderline ? 'active' : '')}
            title={formatMessage(
              {
                id: 'lexical.plugin.toolbar.format.underline.title',
                defaultMessage: 'Underline ({shortcut})',
              },
              { shortcut: SHORTCUTS.UNDERLINE }
            )}
            type="button"
            aria-label={formatMessage({
              id: 'lexical.plugin.toolbar.format.underline.aria',
              defaultMessage: 'Format text to underlined',
            })}
          >
            <i className="format underline" />
          </button>
          {canViewerSeeInsertCodeButton && (
            <button
              disabled={!isEditable}
              onClick={() => {
                activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, 'code');
              }}
              className={'toolbar-item spaced ' + (toolbarState.isCode ? 'active' : '')}
              title={formatMessage(
                {
                  id: 'lexical.plugin.toolbar.format.code.title',
                  defaultMessage: 'Insert code block ({shortcut})',
                },
                { shortcut: SHORTCUTS.INSERT_CODE_BLOCK }
              )}
              type="button"
              aria-label={formatMessage({
                id: 'lexical.plugin.toolbar.format.code.aria',
                defaultMessage: 'Insert code block',
              })}
            >
              <i className="format code" />
            </button>
          )}
          {/* <DropdownColorPicker
            disabled={!isEditable}
            buttonClassName="toolbar-item color-picker"
            buttonAriaLabel="Formatting text color"
            buttonIconClassName="icon font-color"
            color={toolbarState.fontColor}
            onChange={onFontColorSelect}
            title="text color"
          />
          <DropdownColorPicker
            disabled={!isEditable}
            buttonClassName="toolbar-item color-picker"
            buttonAriaLabel="Formatting background color"
            buttonIconClassName="icon bg-color"
            color={toolbarState.bgColor}
            onChange={onBgColorSelect}
            title="bg color"
          /> */}
          <DropDown
            disabled={!isEditable}
            buttonClassName="toolbar-item spaced"
            buttonLabel=""
            buttonAriaLabel={formatMessage({
              id: 'lexical.plugin.toolbar.format.more.aria',
              defaultMessage: 'Formatting options for additional text styles',
            })}
            buttonIconClassName="icon dropdown-more"
          >
            <DropDownItem
              onClick={() => {
                activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, 'lowercase');
              }}
              className={'item wide ' + dropDownActiveClass(toolbarState.isLowercase)}
              title={formatMessage({
                id: 'lexical.plugin.toolbar.format.lowercase.title',
                defaultMessage: 'Lowercase',
              })}
              aria-label={formatMessage({
                id: 'lexical.plugin.toolbar.format.lowercase.aria',
                defaultMessage: 'Format text to lowercase',
              })}
            >
              <div className="icon-text-container">
                <i className="icon lowercase" />
                <span className="text">
                  {formatMessage({
                    id: 'lexical.plugin.toolbar.format.lowercase.text',
                    defaultMessage: 'Lowercase',
                  })}
                </span>
              </div>
              <span className="shortcut">{SHORTCUTS.LOWERCASE}</span>
            </DropDownItem>
            <DropDownItem
              onClick={() => {
                activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, 'uppercase');
              }}
              className={'item wide ' + dropDownActiveClass(toolbarState.isUppercase)}
              title={formatMessage({
                id: 'lexical.plugin.toolbar.format.uppercase.title',
                defaultMessage: 'Uppercase',
              })}
              aria-label={formatMessage({
                id: 'lexical.plugin.toolbar.format.uppercase.aria',
                defaultMessage: 'Format text to uppercase',
              })}
            >
              <div className="icon-text-container">
                <i className="icon uppercase" />
                <span className="text">
                  {formatMessage({
                    id: 'lexical.plugin.toolbar.format.uppercase.text',
                    defaultMessage: 'Uppercase',
                  })}
                </span>
              </div>
              <span className="shortcut">{SHORTCUTS.UPPERCASE}</span>
            </DropDownItem>
            <DropDownItem
              onClick={() => {
                activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, 'capitalize');
              }}
              className={'item wide ' + dropDownActiveClass(toolbarState.isCapitalize)}
              title={formatMessage({
                id: 'lexical.plugin.toolbar.format.capitalize.title',
                defaultMessage: 'Capitalize',
              })}
              aria-label={formatMessage({
                id: 'lexical.plugin.toolbar.format.capitalize.aria',
                defaultMessage: 'Format text to capitalize',
              })}
            >
              <div className="icon-text-container">
                <i className="icon capitalize" />
                <span className="text">
                  {formatMessage({
                    id: 'lexical.plugin.toolbar.format.capitalize.text',
                    defaultMessage: 'Capitalize',
                  })}
                </span>
              </div>
              <span className="shortcut">{SHORTCUTS.CAPITALIZE}</span>
            </DropDownItem>
            <DropDownItem
              onClick={() => {
                activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough');
              }}
              className={'item wide ' + dropDownActiveClass(toolbarState.isStrikethrough)}
              title={formatMessage({
                id: 'lexical.plugin.toolbar.format.strikethrough.title',
                defaultMessage: 'Strikethrough',
              })}
              aria-label={formatMessage({
                id: 'lexical.plugin.toolbar.format.strikethrough.aria',
                defaultMessage: 'Format text with a strikethrough',
              })}
            >
              <div className="icon-text-container">
                <i className="icon strikethrough" />
                <span className="text">
                  {formatMessage({
                    id: 'lexical.plugin.toolbar.format.strikethrough.text',
                    defaultMessage: 'Strikethrough',
                  })}
                </span>
              </div>
              <span className="shortcut">{SHORTCUTS.STRIKETHROUGH}</span>
            </DropDownItem>
            <DropDownItem
              onClick={() => {
                activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, 'subscript');
              }}
              className={'item wide ' + dropDownActiveClass(toolbarState.isSubscript)}
              title={formatMessage({
                id: 'lexical.plugin.toolbar.format.subscript.title',
                defaultMessage: 'Subscript',
              })}
              aria-label={formatMessage({
                id: 'lexical.plugin.toolbar.format.subscript.aria',
                defaultMessage: 'Format text with a subscript',
              })}
            >
              <div className="icon-text-container">
                <i className="icon subscript" />
                <span className="text">
                  {formatMessage({
                    id: 'lexical.plugin.toolbar.format.subscript.text',
                    defaultMessage: 'Subscript',
                  })}
                </span>
              </div>
              <span className="shortcut">{SHORTCUTS.SUBSCRIPT}</span>
            </DropDownItem>
            <DropDownItem
              onClick={() => {
                activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, 'superscript');
              }}
              className={'item wide ' + dropDownActiveClass(toolbarState.isSuperscript)}
              title={formatMessage({
                id: 'lexical.plugin.toolbar.format.superscript.title',
                defaultMessage: 'Superscript',
              })}
              aria-label={formatMessage({
                id: 'lexical.plugin.toolbar.format.superscript.aria',
                defaultMessage: 'Format text with a superscript',
              })}
            >
              <div className="icon-text-container">
                <i className="icon superscript" />
                <span className="text">
                  {formatMessage({
                    id: 'lexical.plugin.toolbar.format.superscript.text',
                    defaultMessage: 'Superscript',
                  })}
                </span>
              </div>
              <span className="shortcut">{SHORTCUTS.SUPERSCRIPT}</span>
            </DropDownItem>
            <DropDownItem
              onClick={() => clearFormatting(activeEditor)}
              className="item wide"
              title={formatMessage({
                id: 'lexical.plugin.toolbar.format.clear.title',
                defaultMessage: 'Clear text formatting',
              })}
              aria-label={formatMessage({
                id: 'lexical.plugin.toolbar.format.clear.aria',
                defaultMessage: 'Clear all text formatting',
              })}
            >
              <div className="icon-text-container">
                <i className="icon clear" />
                <span className="text">
                  {formatMessage({
                    id: 'lexical.plugin.toolbar.format.clear.text',
                    defaultMessage: 'Clear Formatting',
                  })}
                </span>
              </div>
              <span className="shortcut">{SHORTCUTS.CLEAR_FORMATTING}</span>
            </DropDownItem>
          </DropDown>

          <Divider />

          <button
            disabled={!isEditable}
            onClick={insertLink}
            className={'toolbar-item spaced ' + (toolbarState.isLink ? 'active' : '')}
            aria-label={formatMessage({
              id: 'lexical.plugin.toolbar.insert.link.aria',
              defaultMessage: 'Insert link',
            })}
            title={formatMessage(
              {
                id: 'lexical.plugin.toolbar.insert.link.title',
                defaultMessage: 'Insert link ({shortcut})',
              },
              { shortcut: SHORTCUTS.INSERT_LINK }
            )}
            type="button"
          >
            <i className="format link" />
          </button>
          <button
            onClick={() => setIsStrapiImageDialogOpen(true)}
            title={formatMessage({
              id: 'lexical.plugin.toolbar.insert.strapiimage.title',
              defaultMessage: 'Strapi Image',
            })}
            type="button"
            className="toolbar-item"
            aria-label={formatMessage({
              id: 'lexical.plugin.toolbar.insert.strapiimage.aria',
              defaultMessage: 'Insert Strapi Image',
            })}
          >
            <i className="format image" />
          </button>
          <button
            disabled={!isEditable}
            onClick={triggerImageUpload}
            title={formatMessage({
              id: 'lexical.plugin.toolbar.upload.image.title',
              defaultMessage: 'Upload Image',
            })}
            type="button"
            className="toolbar-item"
            aria-label={formatMessage({
              id: 'lexical.plugin.toolbar.upload.image.aria',
              defaultMessage: 'Upload Image',
            })}
          >
            <i className="format upload" />
          </button>

          <Divider />

          <ElementFormatDropdown
            disabled={!isEditable}
            value={toolbarState.elementFormat}
            editor={activeEditor}
            isRTL={toolbarState.isRTL}
          />
          {canViewerSeeInsertDropdown && (
            <>
              <Divider />
              <DropDown
                disabled={!isEditable}
                buttonClassName="toolbar-item spaced"
                buttonLabel={formatMessage({
                  id: 'lexical.plugin.toolbar.insert.button.text',
                  defaultMessage: 'Insert',
                })}
                buttonAriaLabel={formatMessage({
                  id: 'lexical.plugin.toolbar.insert.button.aria',
                  defaultMessage: 'Insert specialized editor node',
                })}
                buttonIconClassName="icon plus"
              >
                <DropDownItem
                  onClick={() => {
                    activeEditor.dispatchCommand(INSERT_HORIZONTAL_RULE_COMMAND, undefined);
                  }}
                  className="item"
                >
                  <i className="icon horizontal-rule" />
                  <span className="text">
                    {formatMessage({
                      id: 'lexical.plugin.toolbar.insert.horizontalrule.text',
                      defaultMessage: 'Horizontal Rule',
                    })}
                  </span>
                </DropDownItem>
                {/* <DropDownItem
                  onClick={() => {
                    activeEditor.dispatchCommand(INSERT_PAGE_BREAK, undefined);
                  }}
                  className="item"
                >
                  <i className="icon page-break" />
                  <span className="text">
                    {formatMessage({
                      id: 'lexical.plugin.toolbar.insert.pagebreak.text',
                      defaultMessage: 'Page Break',
                    })}
                  </span>
                </DropDownItem> */}
                <DropDownItem
                  onClick={() => {
                    showModal(
                      formatMessage({
                        id: 'lexical.plugin.toolbar.insert.table.modal.title',
                        defaultMessage: 'Insert Table',
                      }),
                      (onClose) => (
                        <InsertTableDialog activeEditor={activeEditor} onClose={onClose} />
                      )
                    );
                  }}
                  className="item"
                >
                  <i className="icon table" />
                  <span className="text">
                    {formatMessage({
                      id: 'lexical.plugin.toolbar.insert.table.text',
                      defaultMessage: 'Table',
                    })}
                  </span>
                </DropDownItem>
                <DropDownItem
                  onClick={() => {
                    showModal(
                      formatMessage({
                        id: 'lexical.plugin.toolbar.insert.cta-button.modal.title',
                        defaultMessage: 'Insert CTA Button',
                      }),
                      (onClose) => (
                        <InsertCTAButtonDialog activeEditor={activeEditor} onClose={onClose} />
                      )
                    );
                  }}
                  className="item"
                >
                  <i className="icon link" />
                  <span className="text">
                    {formatMessage({
                      id: 'lexical.plugin.toolbar.insert.cta-button.text',
                      defaultMessage: 'CTA Button',
                    })}
                  </span>
                </DropDownItem>
                {/* <DropDownItem
                  onClick={() => {
                    showModal(
                      formatMessage({
                        id: 'lexical.plugin.toolbar.insert.poll.modal.title',
                        defaultMessage: 'Insert Poll',
                      }),
                      (onClose) => (
                        <InsertPollDialog activeEditor={activeEditor} onClose={onClose} />
                      )
                    );
                  }}
                  className="item"
                >
                  <i className="icon poll" />
                  <span className="text">
                    {formatMessage({
                      id: 'lexical.plugin.toolbar.insert.poll.text',
                      defaultMessage: 'Poll',
                    })}
                  </span>
                </DropDownItem> */}
                <DropDownItem
                  onClick={() => {
                    showModal(
                      formatMessage({
                        id: 'lexical.plugin.toolbar.insert.columns.modal.title',
                        defaultMessage: 'Insert Columns Layout',
                      }),
                      (onClose) => (
                        <InsertLayoutDialog activeEditor={activeEditor} onClose={onClose} />
                      )
                    );
                  }}
                  className="item"
                >
                  <i className="icon columns" />
                  <span className="text">
                    {formatMessage({
                      id: 'lexical.plugin.toolbar.insert.columns.text',
                      defaultMessage: 'Columns Layout',
                    })}
                  </span>
                </DropDownItem>
                {/* <DropDownItem
                  onClick={() => {
                    showModal(
                      formatMessage({
                        id: 'lexical.plugin.toolbar.insert.equation.modal.title',
                        defaultMessage: 'Insert Equation',
                      }),
                      (onClose) => (
                        <InsertEquationDialog activeEditor={activeEditor} onClose={onClose} />
                      )
                    );
                  }}
                  className="item"
                >
                  <i className="icon equation" />
                  <span className="text">
                    {formatMessage({
                      id: 'lexical.plugin.toolbar.insert.equation.text',
                      defaultMessage: 'Equation',
                    })}
                  </span>
                </DropDownItem> */}
                {/* <DropDownItem
                  onClick={() => {
                    editor.update(() => {
                      const root = $getRoot();
                      const stickyNode = $createStickyNode(0, 0);
                      root.append(stickyNode);
                    });
                  }}
                  className="item"
                >
                  <i className="icon sticky" />
                  <span className="text">
                    {formatMessage({
                      id: 'lexical.plugin.toolbar.insert.stickynote.text',
                      defaultMessage: 'Sticky Note',
                    })}
                  </span>
                </DropDownItem> */}
                <DropDownItem
                  onClick={() => {
                    editor.dispatchCommand(INSERT_COLLAPSIBLE_COMMAND, undefined);
                  }}
                  className="item"
                >
                  <i className="icon caret-right" />
                  <span className="text">
                    {formatMessage({
                      id: 'lexical.plugin.toolbar.insert.collapsible.text',
                      defaultMessage: 'Collapsible container',
                    })}
                  </span>
                </DropDownItem>
                {EmbedConfigs.map((embedConfig) => (
                  <DropDownItem
                    key={embedConfig.type}
                    onClick={() => {
                      activeEditor.dispatchCommand(INSERT_EMBED_COMMAND, embedConfig.type);
                    }}
                    className="item"
                  >
                    {embedConfig.icon}
                    <span className="text">{embedConfig.contentName}</span>
                  </DropDownItem>
                ))}
              </DropDown>
            </>
          )}
        </>
      )}
      {modal}
    </div>
  );
}
