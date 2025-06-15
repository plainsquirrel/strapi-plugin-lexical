"use strict";
const jsxRuntime = require("react/jsx-runtime");
const React = require("react");
const designSystem = require("@strapi/design-system");
const admin = require("@strapi/strapi/admin");
const lodash = require("lodash");
const reactIntl = require("react-intl");
const LexicalComposer = require("@lexical/react/LexicalComposer");
const LexicalAutoFocusPlugin = require("@lexical/react/LexicalAutoFocusPlugin");
require("@lexical/react/LexicalCharacterLimitPlugin");
const LexicalCheckListPlugin = require("@lexical/react/LexicalCheckListPlugin");
const LexicalClearEditorPlugin = require("@lexical/react/LexicalClearEditorPlugin");
const LexicalClickableLinkPlugin = require("@lexical/react/LexicalClickableLinkPlugin");
const LexicalComposerContext = require("@lexical/react/LexicalComposerContext");
const LexicalErrorBoundary = require("@lexical/react/LexicalErrorBoundary");
const LexicalHashtagPlugin = require("@lexical/react/LexicalHashtagPlugin");
const LexicalHistoryPlugin = require("@lexical/react/LexicalHistoryPlugin");
const LexicalHorizontalRulePlugin = require("@lexical/react/LexicalHorizontalRulePlugin");
const LexicalListPlugin = require("@lexical/react/LexicalListPlugin");
require("@lexical/react/LexicalPlainTextPlugin");
const LexicalRichTextPlugin = require("@lexical/react/LexicalRichTextPlugin");
require("@lexical/react/LexicalSelectionAlwaysOnDisplay");
const LexicalTabIndentationPlugin = require("@lexical/react/LexicalTabIndentationPlugin");
const LexicalTablePlugin = require("@lexical/react/LexicalTablePlugin");
const useLexicalEditable = require("@lexical/react/useLexicalEditable");
const selection = require("@lexical/selection");
const utils = require("@lexical/utils");
const lexical = require("lexical");
const LexicalAutoEmbedPlugin = require("@lexical/react/LexicalAutoEmbedPlugin");
const ReactDOM = require("react-dom");
const LexicalBlockWithAlignableContents = require("@lexical/react/LexicalBlockWithAlignableContents");
const LexicalDecoratorBlockNode = require("@lexical/react/LexicalDecoratorBlockNode");
const LexicalAutoLinkPlugin$1 = require("@lexical/react/LexicalAutoLinkPlugin");
const code = require("@lexical/code");
const lodashEs = require("lodash-es");
const list = require("@lexical/list");
const LexicalHorizontalRuleNode = require("@lexical/react/LexicalHorizontalRuleNode");
const LexicalTypeaheadMenuPlugin = require("@lexical/react/LexicalTypeaheadMenuPlugin");
const richText = require("@lexical/rich-text");
const table = require("@lexical/table");
const link = require("@lexical/link");
require("@lexical/react/LexicalContextMenuPlugin");
const LexicalDraggableBlockPlugin = require("@lexical/react/LexicalDraggableBlockPlugin");
const useLexicalTextEntity = require("@lexical/react/useLexicalTextEntity");
const LexicalLinkPlugin = require("@lexical/react/LexicalLinkPlugin");
const LexicalMarkdownShortcutPlugin = require("@lexical/react/LexicalMarkdownShortcutPlugin");
const markdown = require("@lexical/markdown");
const katex = require("katex");
const equal = require("fast-deep-equal");
require("@lexical/react/LexicalTableOfContentsPlugin");
require("@lexical/react/LexicalTreeView");
const LexicalContentEditable$1 = require("@lexical/react/LexicalContentEditable");
const hashtag = require("@lexical/hashtag");
const mark = require("@lexical/mark");
const overflow = require("@lexical/overflow");
const useLexicalNodeSelection = require("@lexical/react/useLexicalNodeSelection");
const _interopDefault = (e) => e && e.__esModule ? e : { default: e };
function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const React__namespace = /* @__PURE__ */ _interopNamespace(React);
const ReactDOM__namespace = /* @__PURE__ */ _interopNamespace(ReactDOM);
const katex__default = /* @__PURE__ */ _interopDefault(katex);
const equal__default = /* @__PURE__ */ _interopDefault(equal);
const CAN_USE_DOM = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const IS_APPLE = CAN_USE_DOM && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const IS_CHROME = CAN_USE_DOM && /^(?=.*Chrome).*/i.test(navigator.userAgent);
const Context$2 = React.createContext({});
const useSharedHistoryContext = () => {
  return React.useContext(Context$2);
};
const MIN_ALLOWED_FONT_SIZE = 8;
const MAX_ALLOWED_FONT_SIZE = 72;
const DEFAULT_FONT_SIZE = 15;
const blockTypeToBlockName = {
  bullet: "lexical.content.block.type.bullet",
  check: "lexical.content.block.type.check",
  code: "lexical.content.block.type.code",
  h1: "lexical.content.block.type.h1",
  h2: "lexical.content.block.type.h2",
  h3: "lexical.content.block.type.h3",
  h4: "lexical.content.block.type.h4",
  h5: "lexical.content.block.type.h5",
  h6: "lexical.content.block.type.h6",
  number: "lexical.content.block.type.number",
  paragraph: "lexical.content.block.type.paragraph",
  quote: "lexical.content.block.type.quote"
};
const INITIAL_TOOLBAR_STATE = {
  bgColor: "#fff",
  blockType: "paragraph",
  canRedo: false,
  canUndo: false,
  codeLanguage: "",
  elementFormat: "left",
  fontColor: "#000",
  fontFamily: "Arial",
  // Current font size in px
  fontSize: `${DEFAULT_FONT_SIZE}px`,
  // Font size input value - for controlled input
  fontSizeInputValue: `${DEFAULT_FONT_SIZE}`,
  isBold: false,
  isCode: false,
  isImageCaption: false,
  isItalic: false,
  isLink: false,
  isRTL: false,
  isStrikethrough: false,
  isSubscript: false,
  isSuperscript: false,
  isUnderline: false,
  isLowercase: false,
  isUppercase: false,
  isCapitalize: false,
  rootType: "root"
};
const Context$1 = React.createContext(void 0);
const ToolbarContext = ({ children }) => {
  const [toolbarState, setToolbarState] = React.useState(INITIAL_TOOLBAR_STATE);
  const selectionFontSize = toolbarState.fontSize;
  const updateToolbarState = React.useCallback(
    (key, value) => {
      setToolbarState((prev) => ({
        ...prev,
        [key]: value
      }));
    },
    []
  );
  React.useEffect(() => {
    updateToolbarState("fontSizeInputValue", selectionFontSize.slice(0, -2));
  }, [selectionFontSize, updateToolbarState]);
  const contextValue = React.useMemo(() => {
    return {
      toolbarState,
      updateToolbarState
    };
  }, [toolbarState, updateToolbarState]);
  return /* @__PURE__ */ jsxRuntime.jsx(Context$1.Provider, { value: contextValue, children });
};
const useToolbarState = () => {
  const context = React.useContext(Context$1);
  if (context === void 0) {
    throw new Error("useToolbarState must be used within a ToolbarProvider");
  }
  return context;
};
class AutocompleteNode extends lexical.TextNode {
  /**
   * A unique uuid is generated for each session and assigned to the instance.
   * This helps to:
   * - Ensures max one Autocomplete node per session.
   * - Ensure that when collaboration is enabled, this node is not shown in
   *   other sessions.
   * See https://github.com/facebook/lexical/blob/master/packages/lexical-playground/src/plugins/AutocompletePlugin/index.tsx#L39
   */
  __uuid;
  static clone(node) {
    return new AutocompleteNode(node.__text, node.__uuid, node.__key);
  }
  static getType() {
    return "autocomplete";
  }
  static importJSON(serializedNode) {
    return $createAutocompleteNode(serializedNode.text, serializedNode.uuid).updateFromJSON(
      serializedNode
    );
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      uuid: this.__uuid
    };
  }
  constructor(text, uuid2, key) {
    super(text, key);
    this.__uuid = uuid2;
  }
  updateDOM(prevNode, dom, config) {
    return false;
  }
  exportDOM(_) {
    return { element: null };
  }
  excludeFromCopy() {
    return true;
  }
  createDOM(config) {
    const dom = super.createDOM(config);
    dom.classList.add(config.theme.autocomplete);
    if (this.__uuid !== uuid) {
      dom.style.display = "none";
    }
    return dom;
  }
}
function $createAutocompleteNode(text, uuid2) {
  return new AutocompleteNode(text, uuid2).setMode("token");
}
const uuid = Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
function PortalImpl({
  onClose,
  children,
  title,
  closeOnClickOutside
}) {
  const { formatMessage } = reactIntl.useIntl();
  const modalRef = React.useRef(null);
  React.useEffect(() => {
    if (modalRef.current !== null) {
      modalRef.current.focus();
    }
  }, []);
  React.useEffect(() => {
    let modalOverlayElement = null;
    const handler = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    const clickOutsideHandler = (event) => {
      const target = event.target;
      if (modalRef.current !== null && lexical.isDOMNode(target) && !modalRef.current.contains(target) && closeOnClickOutside) {
        onClose();
      }
    };
    const modelElement = modalRef.current;
    if (modelElement !== null) {
      modalOverlayElement = modelElement.parentElement;
      if (modalOverlayElement !== null) {
        modalOverlayElement.addEventListener("click", clickOutsideHandler);
      }
    }
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
      if (modalOverlayElement !== null) {
        modalOverlayElement?.removeEventListener("click", clickOutsideHandler);
      }
    };
  }, [closeOnClickOutside, onClose]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: "Modal__overlay",
      role: "dialog",
      "aria-label": formatMessage({
        id: "lexical.ui.modal.dialog.aria",
        defaultMessage: "Modal dialog"
      }),
      children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "Modal__modal", tabIndex: -1, ref: modalRef, children: [
        /* @__PURE__ */ jsxRuntime.jsx("h2", { className: "Modal__title", children: title }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            className: "Modal__closeButton",
            "aria-label": formatMessage({
              id: "lexical.ui.modal.close.aria",
              defaultMessage: "Close modal"
            }),
            type: "button",
            onClick: onClose,
            children: "X"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "Modal__content", children })
      ] })
    }
  );
}
function Modal({
  onClose,
  children,
  title,
  closeOnClickOutside = false
}) {
  return ReactDOM.createPortal(
    /* @__PURE__ */ jsxRuntime.jsx(PortalImpl, { onClose, title, closeOnClickOutside, children }),
    document.body
  );
}
function useModal() {
  const [modalContent, setModalContent] = React.useState(null);
  const onClose = React.useCallback(() => {
    setModalContent(null);
  }, []);
  const modal = React.useMemo(() => {
    if (modalContent === null) {
      return null;
    }
    const { title, content, closeOnClickOutside } = modalContent;
    return /* @__PURE__ */ jsxRuntime.jsx(Modal, { onClose, title, closeOnClickOutside, children: content });
  }, [modalContent, onClose]);
  const showModal = React.useCallback(
    (title, getContent, closeOnClickOutside = false) => {
      setModalContent({
        closeOnClickOutside,
        content: getContent(onClose),
        title
      });
    },
    [onClose]
  );
  return [modal, showModal];
}
function joinClasses(...args) {
  return args.filter(Boolean).join(" ");
}
function Button({
  "data-test-id": dataTestId,
  children,
  className,
  onClick,
  disabled,
  small,
  title
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      disabled,
      className: joinClasses(
        "Button__root",
        disabled && "Button__disabled",
        small && "Button__small",
        className
      ),
      onClick,
      title,
      "aria-label": title,
      ...dataTestId && { "data-test-id": dataTestId },
      children
    }
  );
}
function DialogActions({ "data-test-id": dataTestId, children }) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "DialogActions", "data-test-id": dataTestId, children });
}
function YouTubeComponent({ className, format, nodeKey, videoID }) {
  const { formatMessage } = reactIntl.useIntl();
  return /* @__PURE__ */ jsxRuntime.jsx(LexicalBlockWithAlignableContents.BlockWithAlignableContents, { className, format, nodeKey, children: /* @__PURE__ */ jsxRuntime.jsx(
    "iframe",
    {
      width: "560",
      height: "315",
      src: `https://www.youtube-nocookie.com/embed/${videoID}`,
      frameBorder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true,
      title: formatMessage({
        id: "lexical.nodes.youtube.iframe.title",
        defaultMessage: "YouTube video"
      })
    }
  ) });
}
function $convertYoutubeElement(domNode) {
  const videoID = domNode.getAttribute("data-lexical-youtube");
  if (videoID) {
    const node = $createYouTubeNode(videoID);
    return { node };
  }
  return null;
}
class YouTubeNode extends LexicalDecoratorBlockNode.DecoratorBlockNode {
  __id;
  static getType() {
    return "youtube";
  }
  static clone(node) {
    return new YouTubeNode(node.__id, node.__format, node.__key);
  }
  static importJSON(serializedNode) {
    return $createYouTubeNode(serializedNode.videoID).updateFromJSON(serializedNode);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      videoID: this.__id
    };
  }
  constructor(id, format, key) {
    super(format, key);
    this.__id = id;
  }
  exportDOM() {
    const element = document.createElement("iframe");
    element.setAttribute("data-lexical-youtube", this.__id);
    element.setAttribute("width", "560");
    element.setAttribute("height", "315");
    element.setAttribute("src", `https://www.youtube-nocookie.com/embed/${this.__id}`);
    element.setAttribute("frameborder", "0");
    element.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    );
    element.setAttribute("allowfullscreen", "true");
    element.setAttribute("title", "YouTube video");
    return { element };
  }
  static importDOM() {
    return {
      iframe: (domNode) => {
        if (!domNode.hasAttribute("data-lexical-youtube")) {
          return null;
        }
        return {
          conversion: $convertYoutubeElement,
          priority: 1
        };
      }
    };
  }
  updateDOM() {
    return false;
  }
  getId() {
    return this.__id;
  }
  getTextContent(_includeInert, _includeDirectionless) {
    return `https://www.youtube.com/watch?v=${this.__id}`;
  }
  decorate(_editor, config) {
    const embedBlockTheme = config.theme.embedBlock || {};
    const className = {
      base: embedBlockTheme.base || "",
      focus: embedBlockTheme.focus || ""
    };
    return /* @__PURE__ */ jsxRuntime.jsx(
      YouTubeComponent,
      {
        className,
        format: this.__format,
        nodeKey: this.getKey(),
        videoID: this.__id
      }
    );
  }
}
function $createYouTubeNode(videoID) {
  return new YouTubeNode(videoID);
}
const INSERT_YOUTUBE_COMMAND = lexical.createCommand("INSERT_YOUTUBE_COMMAND");
function YouTubePlugin() {
  const [editor] = LexicalComposerContext.useLexicalComposerContext();
  React.useEffect(() => {
    if (!editor.hasNodes([YouTubeNode])) {
      throw new Error("YouTubePlugin: YouTubeNode not registered on editor");
    }
    return editor.registerCommand(
      INSERT_YOUTUBE_COMMAND,
      (payload) => {
        const youTubeNode = $createYouTubeNode(payload);
        utils.$insertNodeToNearestRoot(youTubeNode);
        return true;
      },
      lexical.COMMAND_PRIORITY_EDITOR
    );
  }, [editor]);
  return null;
}
const YoutubeEmbedConfig = {
  contentName: "Youtube Video",
  exampleUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
  // Icon for display.
  icon: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon youtube" }),
  insertNode: (editor, result) => {
    editor.dispatchCommand(INSERT_YOUTUBE_COMMAND, result.id);
  },
  keywords: ["youtube", "video"],
  // Determine if a given URL is a match and return url data.
  parseUrl: async (url) => {
    const match = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/.exec(url);
    const id = match ? match?.[2].length === 11 ? match[2] : null : null;
    if (id != null) {
      return {
        id,
        url
      };
    }
    return null;
  },
  type: "youtube-video"
};
const EmbedConfigs = [YoutubeEmbedConfig];
function AutoEmbedMenuItem({
  index,
  isSelected,
  onClick,
  onMouseEnter,
  option
}) {
  let className = "item";
  if (isSelected) {
    className += " selected";
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    "li",
    {
      tabIndex: -1,
      className,
      ref: option.setRefElement,
      role: "option",
      "aria-selected": isSelected,
      id: "typeahead-item-" + index,
      onMouseEnter,
      onClick,
      children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: option.title })
    },
    option.key
  );
}
function AutoEmbedMenu({
  options,
  selectedItemIndex,
  onOptionClick,
  onOptionMouseEnter
}) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "typeahead-popover", children: /* @__PURE__ */ jsxRuntime.jsx("ul", { children: options.map((option, i) => /* @__PURE__ */ jsxRuntime.jsx(
    AutoEmbedMenuItem,
    {
      index: i,
      isSelected: selectedItemIndex === i,
      onClick: () => onOptionClick(option, i),
      onMouseEnter: () => onOptionMouseEnter(i),
      option
    },
    option.key
  )) }) });
}
const debounce = (callback, delay) => {
  let timeoutId;
  return (text) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback(text);
    }, delay);
  };
};
function AutoEmbedDialog({
  embedConfig,
  onClose
}) {
  const { formatMessage } = reactIntl.useIntl();
  const [text, setText] = React.useState("");
  const [editor] = LexicalComposerContext.useLexicalComposerContext();
  const [embedResult, setEmbedResult] = React.useState(null);
  const validateText = React.useMemo(
    () => debounce((inputText) => {
      const urlMatch = LexicalAutoEmbedPlugin.URL_MATCHER.exec(inputText);
      if (embedConfig != null && inputText != null && urlMatch != null) {
        Promise.resolve(embedConfig.parseUrl(inputText)).then((parseResult) => {
          setEmbedResult(parseResult);
        });
      } else if (embedResult != null) {
        setEmbedResult(null);
      }
    }, 200),
    [embedConfig, embedResult]
  );
  const onClick = () => {
    if (embedResult != null) {
      embedConfig.insertNode(editor, embedResult);
      onClose();
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { width: "600px" }, children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "Input__wrapper", children: /* @__PURE__ */ jsxRuntime.jsx(
      "input",
      {
        type: "text",
        className: "Input__input",
        placeholder: embedConfig.exampleUrl,
        value: text,
        "data-test-id": `${embedConfig.type}-embed-modal-url`,
        onChange: (e) => {
          const { value } = e.target;
          setText(value);
          validateText(value);
        }
      }
    ) }),
    /* @__PURE__ */ jsxRuntime.jsx(DialogActions, { children: /* @__PURE__ */ jsxRuntime.jsx(
      Button,
      {
        disabled: !embedResult,
        onClick,
        "data-test-id": `${embedConfig.type}-embed-modal-submit-btn`,
        children: formatMessage({ id: "lexical.plugin.embed.button.embed", defaultMessage: "Embed" })
      }
    ) })
  ] });
}
function AutoEmbedPlugin() {
  const [modal, showModal] = useModal();
  const { formatMessage } = reactIntl.useIntl();
  const openEmbedModal = (embedConfig) => {
    showModal(
      formatMessage(
        { id: "lexical.plugin.embed.modal.title", defaultMessage: "Embed {contentType}" },
        { contentType: embedConfig.contentName }
      ),
      (onClose) => /* @__PURE__ */ jsxRuntime.jsx(AutoEmbedDialog, { embedConfig, onClose })
    );
  };
  const getMenuOptions = (activeEmbedConfig, embedFn, dismissFn) => {
    return [
      new LexicalAutoEmbedPlugin.AutoEmbedOption(
        formatMessage({ id: "lexical.plugin.embed.menu.dismiss", defaultMessage: "Dismiss" }),
        { onSelect: dismissFn }
      ),
      new LexicalAutoEmbedPlugin.AutoEmbedOption(
        formatMessage(
          { id: "lexical.plugin.embed.menu.embed", defaultMessage: "Embed {contentType}" },
          { contentType: activeEmbedConfig.contentName }
        ),
        { onSelect: embedFn }
      )
    ];
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    modal,
    /* @__PURE__ */ jsxRuntime.jsx(
      LexicalAutoEmbedPlugin.LexicalAutoEmbedPlugin,
      {
        embedConfigs: EmbedConfigs,
        onOpenEmbedModalForConfig: openEmbedModal,
        getMenuOptions,
        menuRenderFn: (anchorElementRef, { selectedIndex, options, selectOptionAndCleanUp, setHighlightedIndex }) => anchorElementRef.current ? ReactDOM__namespace.createPortal(
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: "typeahead-popover auto-embed-menu",
              style: {
                marginLeft: `${Math.max(
                  parseFloat(anchorElementRef.current.style.width) - 200,
                  0
                )}px`,
                width: 200
              },
              children: /* @__PURE__ */ jsxRuntime.jsx(
                AutoEmbedMenu,
                {
                  options,
                  selectedItemIndex: selectedIndex,
                  onOptionClick: (option, index) => {
                    setHighlightedIndex(index);
                    selectOptionAndCleanUp(option);
                  },
                  onOptionMouseEnter: (index) => {
                    setHighlightedIndex(index);
                  }
                }
              )
            }
          ),
          anchorElementRef.current
        ) : null
      }
    )
  ] });
}
const URL_REGEX = /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)(?<![-.+():%])/;
const EMAIL_REGEX = /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
const MATCHERS = [
  LexicalAutoLinkPlugin$1.createLinkMatcherWithRegExp(URL_REGEX, (text) => {
    return text.startsWith("http") ? text : `https://${text}`;
  }),
  LexicalAutoLinkPlugin$1.createLinkMatcherWithRegExp(EMAIL_REGEX, (text) => {
    return `mailto:${text}`;
  })
];
function LexicalAutoLinkPlugin() {
  return /* @__PURE__ */ jsxRuntime.jsx(LexicalAutoLinkPlugin$1.AutoLinkPlugin, { matchers: MATCHERS });
}
function useDebounce(fn, ms, maxWait) {
  const funcRef = React.useRef(null);
  funcRef.current = fn;
  const debounceFn = React.useMemo(
    () => lodashEs.debounce(
      (...args) => {
        if (funcRef.current) {
          funcRef.current(...args);
        }
      },
      ms,
      { maxWait }
    ),
    [ms, maxWait]
  );
  React.useEffect(() => {
    return () => {
      debounceFn.cancel();
    };
  }, [debounceFn]);
  return debounceFn;
}
function CopyButton({ editor, getCodeDOMNode }) {
  const [isCopyCompleted, setCopyCompleted] = React.useState(false);
  const removeSuccessIcon = useDebounce(() => {
    setCopyCompleted(false);
  }, 1e3);
  async function handleClick() {
    const codeDOMNode = getCodeDOMNode();
    if (!codeDOMNode) {
      return;
    }
    let content = "";
    editor.update(() => {
      const codeNode = lexical.$getNearestNodeFromDOMNode(codeDOMNode);
      if (code.$isCodeNode(codeNode)) {
        content = codeNode.getTextContent();
      }
      const selection2 = lexical.$getSelection();
      lexical.$setSelection(selection2);
    });
    try {
      await navigator.clipboard.writeText(content);
      setCopyCompleted(true);
      removeSuccessIcon();
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  }
  return /* @__PURE__ */ jsxRuntime.jsx("button", { className: "menu-item", onClick: handleClick, "aria-label": "copy", children: isCopyCompleted ? /* @__PURE__ */ jsxRuntime.jsx("i", { className: "format success" }) : /* @__PURE__ */ jsxRuntime.jsx("i", { className: "format copy" }) });
}
const PRETTIER_PARSER_MODULES = {
  css: [() => Promise.resolve().then(() => require("./postcss-BuUsxkkO.js")).then((n) => n.postcss)],
  html: [() => Promise.resolve().then(() => require("./html-CGlKon-k.js")).then((n) => n.html)],
  js: [() => Promise.resolve().then(() => require("./babel-DPZlFoCm.js")).then((n) => n.babel), () => Promise.resolve().then(() => require("./estree-BN5paFI9.js"))],
  markdown: [() => Promise.resolve().then(() => require("./markdown-DVqKfkek.js")).then((n) => n.markdown)],
  typescript: [() => Promise.resolve().then(() => require("./typescript-DhvJmnKO.js")).then((n) => n.typescript), () => Promise.resolve().then(() => require("./estree-BN5paFI9.js"))]
};
async function loadPrettierParserByLang(lang) {
  const dynamicImports = PRETTIER_PARSER_MODULES[lang];
  const modules = await Promise.all(dynamicImports.map((dynamicImport) => dynamicImport()));
  return modules;
}
async function loadPrettierFormat() {
  const { format } = await Promise.resolve().then(() => require("./standalone-CP_4WDCP.js"));
  return format;
}
const PRETTIER_OPTIONS_BY_LANG = {
  css: { parser: "css" },
  html: { parser: "html" },
  js: { parser: "babel" },
  markdown: { parser: "markdown" },
  typescript: { parser: "typescript" }
};
const LANG_CAN_BE_PRETTIER = Object.keys(PRETTIER_OPTIONS_BY_LANG);
function canBePrettier(lang) {
  return LANG_CAN_BE_PRETTIER.includes(lang);
}
function getPrettierOptions(lang) {
  const options = PRETTIER_OPTIONS_BY_LANG[lang];
  if (!options) {
    throw new Error(`CodeActionMenuPlugin: Prettier does not support this language: ${lang}`);
  }
  return options;
}
function PrettierButton({ lang, editor, getCodeDOMNode }) {
  const [syntaxError, setSyntaxError] = React.useState("");
  const [tipsVisible, setTipsVisible] = React.useState(false);
  async function handleClick() {
    const codeDOMNode = getCodeDOMNode();
    if (!codeDOMNode) {
      return;
    }
    let content = "";
    editor.update(() => {
      const codeNode = lexical.$getNearestNodeFromDOMNode(codeDOMNode);
      if (code.$isCodeNode(codeNode)) {
        content = codeNode.getTextContent();
      }
    });
    if (content === "") {
      return;
    }
    try {
      const format = await loadPrettierFormat();
      const options = getPrettierOptions(lang);
      const prettierParsers = await loadPrettierParserByLang(lang);
      options.plugins = prettierParsers.map((parser) => parser.default || parser);
      const formattedCode = await format(content, options);
      editor.update(() => {
        const codeNode = lexical.$getNearestNodeFromDOMNode(codeDOMNode);
        if (code.$isCodeNode(codeNode)) {
          const selection2 = codeNode.select(0);
          selection2.insertText(formattedCode);
          setSyntaxError("");
          setTipsVisible(false);
        }
      });
    } catch (error) {
      setError(error);
    }
  }
  function setError(error) {
    if (error instanceof Error) {
      setSyntaxError(error.message);
      setTipsVisible(true);
    } else {
      console.error("Unexpected error: ", error);
    }
  }
  function handleMouseEnter() {
    if (syntaxError !== "") {
      setTipsVisible(true);
    }
  }
  function handleMouseLeave() {
    if (syntaxError !== "") {
      setTipsVisible(false);
    }
  }
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "prettier-wrapper", children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "button",
      {
        className: "menu-item",
        onClick: handleClick,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        "aria-label": "prettier",
        children: syntaxError ? /* @__PURE__ */ jsxRuntime.jsx("i", { className: "format prettier-error" }) : /* @__PURE__ */ jsxRuntime.jsx("i", { className: "format prettier" })
      }
    ),
    tipsVisible ? /* @__PURE__ */ jsxRuntime.jsx("pre", { className: "code-error-tips", children: syntaxError }) : null
  ] });
}
const CODE_PADDING = 8;
function CodeActionMenuContainer({ anchorElem }) {
  const [editor] = LexicalComposerContext.useLexicalComposerContext();
  const [lang, setLang] = React.useState("");
  const [isShown, setShown] = React.useState(false);
  const [shouldListenMouseMove, setShouldListenMouseMove] = React.useState(false);
  const [position, setPosition] = React.useState({
    right: "0",
    top: "0"
  });
  const codeSetRef = React.useRef(/* @__PURE__ */ new Set());
  const codeDOMNodeRef = React.useRef(null);
  function getCodeDOMNode() {
    return codeDOMNodeRef.current;
  }
  const debouncedOnMouseMove = useDebounce(
    (event) => {
      const { codeDOMNode, isOutside } = getMouseInfo$1(event);
      if (isOutside) {
        setShown(false);
        return;
      }
      if (!codeDOMNode) {
        return;
      }
      codeDOMNodeRef.current = codeDOMNode;
      let codeNode = null;
      let _lang = "";
      editor.update(() => {
        const maybeCodeNode = lexical.$getNearestNodeFromDOMNode(codeDOMNode);
        if (code.$isCodeNode(maybeCodeNode)) {
          codeNode = maybeCodeNode;
          _lang = codeNode.getLanguage() || "";
        }
      });
      if (codeNode) {
        const { y: editorElemY, right: editorElemRight } = anchorElem.getBoundingClientRect();
        const { y, right } = codeDOMNode.getBoundingClientRect();
        setLang(_lang);
        setShown(true);
        setPosition({
          right: `${editorElemRight - right + CODE_PADDING}px`,
          top: `${y - editorElemY}px`
        });
      }
    },
    50,
    1e3
  );
  React.useEffect(() => {
    if (!shouldListenMouseMove) {
      return;
    }
    document.addEventListener("mousemove", debouncedOnMouseMove);
    return () => {
      setShown(false);
      debouncedOnMouseMove.cancel();
      document.removeEventListener("mousemove", debouncedOnMouseMove);
    };
  }, [shouldListenMouseMove, debouncedOnMouseMove]);
  React.useEffect(() => {
    return editor.registerMutationListener(
      code.CodeNode,
      (mutations) => {
        editor.getEditorState().read(() => {
          for (const [key, type] of mutations) {
            switch (type) {
              case "created":
                codeSetRef.current.add(key);
                break;
              case "destroyed":
                codeSetRef.current.delete(key);
                break;
            }
          }
        });
        setShouldListenMouseMove(codeSetRef.current.size > 0);
      },
      { skipInitialization: false }
    );
  }, [editor]);
  const normalizedLang = code.normalizeCodeLang(lang);
  const codeFriendlyName = code.getLanguageFriendlyName(lang);
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: isShown ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "code-action-menu-container", style: { ...position }, children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "code-highlight-language", children: codeFriendlyName }),
    /* @__PURE__ */ jsxRuntime.jsx(CopyButton, { editor, getCodeDOMNode }),
    canBePrettier(normalizedLang) ? /* @__PURE__ */ jsxRuntime.jsx(PrettierButton, { editor, getCodeDOMNode, lang: normalizedLang }) : null
  ] }) : null });
}
function getMouseInfo$1(event) {
  const target = event.target;
  if (lexical.isHTMLElement(target)) {
    const codeDOMNode = target.closest("code.PlaygroundEditorTheme__code");
    const isOutside = !(codeDOMNode || target.closest("div.code-action-menu-container"));
    return { codeDOMNode, isOutside };
  } else {
    return { codeDOMNode: null, isOutside: true };
  }
}
function CodeActionMenuPlugin({
  anchorElem = document.body
}) {
  return ReactDOM.createPortal(/* @__PURE__ */ jsxRuntime.jsx(CodeActionMenuContainer, { anchorElem }), anchorElem);
}
function CodeHighlightPlugin() {
  const [editor] = LexicalComposerContext.useLexicalComposerContext();
  React.useEffect(() => {
    return code.registerCodeHighlighting(editor);
  }, [editor]);
  return null;
}
function invariant(cond, message, ...args) {
  if (cond) {
    return;
  }
  throw new Error(
    "Internal Lexical error: invariant() is meant to be replaced at compile time. There is no runtime version. Error: " + message
  );
}
function setDomHiddenUntilFound(dom) {
  dom.hidden = "until-found";
}
function domOnBeforeMatch(dom, callback) {
  dom.onbeforematch = callback;
}
function $convertDetailsElement(domNode) {
  const isOpen = domNode.open !== void 0 ? domNode.open : true;
  const node = $createCollapsibleContainerNode(isOpen);
  return {
    node
  };
}
class CollapsibleContainerNode extends lexical.ElementNode {
  __open;
  constructor(open, key) {
    super(key);
    this.__open = open;
  }
  static getType() {
    return "collapsible-container";
  }
  static clone(node) {
    return new CollapsibleContainerNode(node.__open, node.__key);
  }
  createDOM(config, editor) {
    let dom;
    if (IS_CHROME) {
      dom = document.createElement("div");
      dom.setAttribute("open", "");
    } else {
      const detailsDom = document.createElement("details");
      detailsDom.open = this.__open;
      detailsDom.addEventListener("toggle", () => {
        const open = editor.getEditorState().read(() => this.getOpen());
        if (open !== detailsDom.open) {
          editor.update(() => this.toggleOpen());
        }
      });
      dom = detailsDom;
    }
    dom.classList.add("Collapsible__container");
    return dom;
  }
  updateDOM(prevNode, dom) {
    const currentOpen = this.__open;
    if (prevNode.__open !== currentOpen) {
      if (IS_CHROME) {
        const contentDom = dom.children[1];
        invariant(lexical.isHTMLElement(contentDom), "Expected contentDom to be an HTMLElement");
        if (currentOpen) {
          dom.setAttribute("open", "");
          contentDom.hidden = false;
        } else {
          dom.removeAttribute("open");
          setDomHiddenUntilFound(contentDom);
        }
      } else {
        dom.open = this.__open;
      }
    }
    return false;
  }
  static importDOM() {
    return {
      details: (domNode) => {
        return {
          conversion: $convertDetailsElement,
          priority: 1
        };
      }
    };
  }
  static importJSON(serializedNode) {
    return $createCollapsibleContainerNode(serializedNode.open).updateFromJSON(serializedNode);
  }
  exportDOM() {
    const element = document.createElement("details");
    element.classList.add("Collapsible__container");
    element.setAttribute("open", this.__open.toString());
    return { element };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      open: this.__open
    };
  }
  setOpen(open) {
    const writable = this.getWritable();
    writable.__open = open;
  }
  getOpen() {
    return this.getLatest().__open;
  }
  toggleOpen() {
    this.setOpen(!this.getOpen());
  }
}
function $createCollapsibleContainerNode(isOpen) {
  return new CollapsibleContainerNode(isOpen);
}
function $isCollapsibleContainerNode(node) {
  return node instanceof CollapsibleContainerNode;
}
function $convertCollapsibleContentElement(domNode) {
  const node = $createCollapsibleContentNode();
  return {
    node
  };
}
class CollapsibleContentNode extends lexical.ElementNode {
  static getType() {
    return "collapsible-content";
  }
  static clone(node) {
    return new CollapsibleContentNode(node.__key);
  }
  createDOM(config, editor) {
    const dom = document.createElement("div");
    dom.classList.add("Collapsible__content");
    if (IS_CHROME) {
      editor.getEditorState().read(() => {
        const containerNode = this.getParentOrThrow();
        invariant(
          $isCollapsibleContainerNode(containerNode),
          "Expected parent node to be a CollapsibleContainerNode"
        );
        if (!containerNode.__open) {
          setDomHiddenUntilFound(dom);
        }
      });
      domOnBeforeMatch(dom, () => {
        editor.update(() => {
          const containerNode = this.getParentOrThrow().getLatest();
          invariant(
            $isCollapsibleContainerNode(containerNode),
            "Expected parent node to be a CollapsibleContainerNode"
          );
          if (!containerNode.__open) {
            containerNode.toggleOpen();
          }
        });
      });
    }
    return dom;
  }
  updateDOM(prevNode, dom) {
    return false;
  }
  static importDOM() {
    return {
      div: (domNode) => {
        if (!domNode.hasAttribute("data-lexical-collapsible-content")) {
          return null;
        }
        return {
          conversion: $convertCollapsibleContentElement,
          priority: 2
        };
      }
    };
  }
  exportDOM() {
    const element = document.createElement("div");
    element.classList.add("Collapsible__content");
    element.setAttribute("data-lexical-collapsible-content", "true");
    return { element };
  }
  static importJSON(serializedNode) {
    return $createCollapsibleContentNode().updateFromJSON(serializedNode);
  }
  isShadowRoot() {
    return true;
  }
}
function $createCollapsibleContentNode() {
  return new CollapsibleContentNode();
}
function $isCollapsibleContentNode(node) {
  return node instanceof CollapsibleContentNode;
}
function $convertSummaryElement(domNode) {
  const node = $createCollapsibleTitleNode();
  return {
    node
  };
}
class CollapsibleTitleNode extends lexical.ElementNode {
  static getType() {
    return "collapsible-title";
  }
  static clone(node) {
    return new CollapsibleTitleNode(node.__key);
  }
  createDOM(config, editor) {
    const dom = document.createElement("summary");
    dom.classList.add("Collapsible__title");
    if (IS_CHROME) {
      dom.addEventListener("click", () => {
        editor.update(() => {
          const collapsibleContainer = this.getLatest().getParentOrThrow();
          invariant(
            $isCollapsibleContainerNode(collapsibleContainer),
            "Expected parent node to be a CollapsibleContainerNode"
          );
          collapsibleContainer.toggleOpen();
        });
      });
    }
    return dom;
  }
  updateDOM(prevNode, dom) {
    return false;
  }
  static importDOM() {
    return {
      summary: (domNode) => {
        return {
          conversion: $convertSummaryElement,
          priority: 1
        };
      }
    };
  }
  static importJSON(serializedNode) {
    return $createCollapsibleTitleNode().updateFromJSON(serializedNode);
  }
  collapseAtStart(_selection) {
    this.getParentOrThrow().insertBefore(this);
    return true;
  }
  static transform() {
    return (node) => {
      invariant($isCollapsibleTitleNode(node), "node is not a CollapsibleTitleNode");
      if (node.isEmpty()) {
        node.remove();
      }
    };
  }
  insertNewAfter(_, restoreSelection = true) {
    const containerNode = this.getParentOrThrow();
    if (!$isCollapsibleContainerNode(containerNode)) {
      throw new Error("CollapsibleTitleNode expects to be child of CollapsibleContainerNode");
    }
    if (containerNode.getOpen()) {
      const contentNode = this.getNextSibling();
      if (!$isCollapsibleContentNode(contentNode)) {
        throw new Error("CollapsibleTitleNode expects to have CollapsibleContentNode sibling");
      }
      const firstChild = contentNode.getFirstChild();
      if (lexical.$isElementNode(firstChild)) {
        return firstChild;
      } else {
        const paragraph = lexical.$createParagraphNode();
        contentNode.append(paragraph);
        return paragraph;
      }
    } else {
      const paragraph = lexical.$createParagraphNode();
      containerNode.insertAfter(paragraph, restoreSelection);
      return paragraph;
    }
  }
}
function $createCollapsibleTitleNode() {
  return new CollapsibleTitleNode();
}
function $isCollapsibleTitleNode(node) {
  return node instanceof CollapsibleTitleNode;
}
const INSERT_COLLAPSIBLE_COMMAND = lexical.createCommand();
function CollapsiblePlugin() {
  const [editor] = LexicalComposerContext.useLexicalComposerContext();
  React.useEffect(() => {
    if (!editor.hasNodes([CollapsibleContainerNode, CollapsibleTitleNode, CollapsibleContentNode])) {
      throw new Error(
        "CollapsiblePlugin: CollapsibleContainerNode, CollapsibleTitleNode, or CollapsibleContentNode not registered on editor"
      );
    }
    const $onEscapeUp = () => {
      const selection2 = lexical.$getSelection();
      if (lexical.$isRangeSelection(selection2) && selection2.isCollapsed() && selection2.anchor.offset === 0) {
        const container = utils.$findMatchingParent(
          selection2.anchor.getNode(),
          $isCollapsibleContainerNode
        );
        if ($isCollapsibleContainerNode(container)) {
          const parent = container.getParent();
          if (parent !== null && parent.getFirstChild() === container && selection2.anchor.key === container.getFirstDescendant()?.getKey()) {
            container.insertBefore(lexical.$createParagraphNode());
          }
        }
      }
      return false;
    };
    const $onEscapeDown = () => {
      const selection2 = lexical.$getSelection();
      if (lexical.$isRangeSelection(selection2) && selection2.isCollapsed()) {
        const container = utils.$findMatchingParent(
          selection2.anchor.getNode(),
          $isCollapsibleContainerNode
        );
        if ($isCollapsibleContainerNode(container)) {
          const parent = container.getParent();
          if (parent !== null && parent.getLastChild() === container) {
            const titleParagraph = container.getFirstDescendant();
            const contentParagraph = container.getLastDescendant();
            if (contentParagraph !== null && selection2.anchor.key === contentParagraph.getKey() && selection2.anchor.offset === contentParagraph.getTextContentSize() || titleParagraph !== null && selection2.anchor.key === titleParagraph.getKey() && selection2.anchor.offset === titleParagraph.getTextContentSize()) {
              container.insertAfter(lexical.$createParagraphNode());
            }
          }
        }
      }
      return false;
    };
    return utils.mergeRegister(
      // Structure enforcing transformers for each node type. In case nesting structure is not
      // "Container > Title + Content" it'll unwrap nodes and convert it back
      // to regular content.
      editor.registerNodeTransform(CollapsibleContentNode, (node) => {
        const parent = node.getParent();
        if (!$isCollapsibleContainerNode(parent)) {
          const children = node.getChildren();
          for (const child of children) {
            node.insertBefore(child);
          }
          node.remove();
        }
      }),
      editor.registerNodeTransform(CollapsibleTitleNode, (node) => {
        const parent = node.getParent();
        if (!$isCollapsibleContainerNode(parent)) {
          node.replace(lexical.$createParagraphNode().append(...node.getChildren()));
          return;
        }
      }),
      editor.registerNodeTransform(CollapsibleContainerNode, (node) => {
        const children = node.getChildren();
        if (children.length !== 2 || !$isCollapsibleTitleNode(children[0]) || !$isCollapsibleContentNode(children[1])) {
          for (const child of children) {
            node.insertBefore(child);
          }
          node.remove();
        }
      }),
      // This handles the case when container is collapsed and we delete its previous sibling
      // into it, it would cause collapsed content deleted (since it's display: none, and selection
      // swallows it when deletes single char). Instead we expand container, which is although
      // not perfect, but avoids bigger problem
      editor.registerCommand(
        lexical.DELETE_CHARACTER_COMMAND,
        () => {
          const selection2 = lexical.$getSelection();
          if (!lexical.$isRangeSelection(selection2) || !selection2.isCollapsed() || selection2.anchor.offset !== 0) {
            return false;
          }
          const anchorNode = selection2.anchor.getNode();
          const topLevelElement = anchorNode.getTopLevelElement();
          if (topLevelElement === null) {
            return false;
          }
          const container = topLevelElement.getPreviousSibling();
          if (!$isCollapsibleContainerNode(container) || container.getOpen()) {
            return false;
          }
          container.setOpen(true);
          return true;
        },
        lexical.COMMAND_PRIORITY_LOW
      ),
      // When collapsible is the last child pressing down/right arrow will insert paragraph
      // below it to allow adding more content. It's similar what $insertBlockNode
      // (mainly for decorators), except it'll always be possible to continue adding
      // new content even if trailing paragraph is accidentally deleted
      editor.registerCommand(lexical.KEY_ARROW_DOWN_COMMAND, $onEscapeDown, lexical.COMMAND_PRIORITY_LOW),
      editor.registerCommand(lexical.KEY_ARROW_RIGHT_COMMAND, $onEscapeDown, lexical.COMMAND_PRIORITY_LOW),
      // When collapsible is the first child pressing up/left arrow will insert paragraph
      // above it to allow adding more content. It's similar what $insertBlockNode
      // (mainly for decorators), except it'll always be possible to continue adding
      // new content even if leading paragraph is accidentally deleted
      editor.registerCommand(lexical.KEY_ARROW_UP_COMMAND, $onEscapeUp, lexical.COMMAND_PRIORITY_LOW),
      editor.registerCommand(lexical.KEY_ARROW_LEFT_COMMAND, $onEscapeUp, lexical.COMMAND_PRIORITY_LOW),
      // Enter goes from Title to Content rather than a new line inside Title
      editor.registerCommand(
        lexical.INSERT_PARAGRAPH_COMMAND,
        () => {
          const selection2 = lexical.$getSelection();
          if (lexical.$isRangeSelection(selection2)) {
            const titleNode = utils.$findMatchingParent(
              selection2.anchor.getNode(),
              (node) => $isCollapsibleTitleNode(node)
            );
            if ($isCollapsibleTitleNode(titleNode)) {
              const container = titleNode.getParent();
              if (container && $isCollapsibleContainerNode(container)) {
                if (!container.getOpen()) {
                  container.toggleOpen();
                }
                titleNode.getNextSibling()?.selectEnd();
                return true;
              }
            }
          }
          return false;
        },
        lexical.COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        INSERT_COLLAPSIBLE_COMMAND,
        () => {
          editor.update(() => {
            const title = $createCollapsibleTitleNode();
            const paragraph = lexical.$createParagraphNode();
            utils.$insertNodeToNearestRoot(
              $createCollapsibleContainerNode(true).append(
                title.append(paragraph),
                $createCollapsibleContentNode().append(lexical.$createParagraphNode())
              )
            );
            paragraph.select();
          });
          return true;
        },
        lexical.COMMAND_PRIORITY_LOW
      )
    );
  }, [editor]);
  return null;
}
function TextInput({
  label,
  value,
  onChange,
  placeholder = "",
  "data-test-id": dataTestId,
  type = "text"
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "Input__wrapper", children: [
    /* @__PURE__ */ jsxRuntime.jsx("label", { className: "Input__label", children: label }),
    /* @__PURE__ */ jsxRuntime.jsx(
      "input",
      {
        type,
        className: "Input__input",
        placeholder,
        value,
        onChange: (e) => {
          onChange(e.target.value);
        },
        "data-test-id": dataTestId
      }
    )
  ] });
}
const PRESET_COLORS$1 = [
  "#3b82f6",
  // Blue
  "#ef4444",
  // Red
  "#10b981",
  // Green
  "#f59e0b",
  // Yellow
  "#8b5cf6",
  // Purple
  "#f97316",
  // Orange
  "#06b6d4",
  // Cyan
  "#84cc16",
  // Lime
  "#ec4899",
  // Pink
  "#6b7280",
  // Gray
  "#1f2937",
  // Dark Gray
  "#000000"
  // Black
];
function SimpleColorPicker({ color, onChange, label }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [customColor, setCustomColor] = React.useState(color);
  const handleColorSelect = (selectedColor) => {
    onChange(selectedColor);
    setCustomColor(selectedColor);
    setIsOpen(false);
  };
  const handleCustomColorChange = (e) => {
    const newColor = e.target.value;
    setCustomColor(newColor);
    onChange(newColor);
  };
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "simple-color-picker", children: [
    label && /* @__PURE__ */ jsxRuntime.jsx("label", { className: "simple-color-picker__label", children: label }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "simple-color-picker__container", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          type: "button",
          className: "simple-color-picker__trigger",
          onClick: () => setIsOpen(!isOpen),
          style: { backgroundColor: color },
          "aria-label": "Select color",
          children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "simple-color-picker__preview", style: { backgroundColor: color } })
        }
      ),
      isOpen && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "simple-color-picker__dropdown", children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "simple-color-picker__presets", children: PRESET_COLORS$1.map((presetColor) => /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            type: "button",
            className: `simple-color-picker__preset ${color === presetColor ? "simple-color-picker__preset--active" : ""}`,
            style: { backgroundColor: presetColor },
            onClick: () => handleColorSelect(presetColor),
            "aria-label": `Select ${presetColor}`
          },
          presetColor
        )) }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "simple-color-picker__custom", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "input",
            {
              type: "color",
              value: customColor,
              onChange: handleCustomColorChange,
              className: "simple-color-picker__input"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "simple-color-picker__custom-label", children: "Custom" })
        ] })
      ] })
    ] }),
    isOpen && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "simple-color-picker__overlay", onClick: () => setIsOpen(false) })
  ] });
}
function CTAButtonComponent({
  className,
  format,
  nodeKey,
  text,
  subText,
  url,
  color
}) {
  const [editor] = LexicalComposerContext.useLexicalComposerContext();
  const [showContextMenu, setShowContextMenu] = React.useState(false);
  const [contextMenuPosition, setContextMenuPosition] = React.useState({ x: 0, y: 0 });
  const buttonRef = React.useRef(null);
  const buttonStyle = {
    backgroundColor: color,
    borderColor: color,
    color: "#ffffff"
  };
  const handleContextMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setContextMenuPosition({ x: e.clientX, y: e.clientY });
    setShowContextMenu(true);
  };
  const handleEdit = () => {
    editor.update(() => {
      const node = lexical.$getNodeByKey(nodeKey);
      if (node && $isCTAButtonNode(node)) {
        const event = new CustomEvent("editCTAButton", {
          detail: {
            nodeKey,
            text: node.getText(),
            subText: node.getSubText(),
            url: node.getURL(),
            color: node.getColor()
          }
        });
        window.dispatchEvent(event);
      }
    });
    setShowContextMenu(false);
  };
  const handleDelete = () => {
    editor.update(() => {
      const node = lexical.$getNodeByKey(nodeKey);
      if (node) {
        node.remove();
      }
    });
    setShowContextMenu(false);
  };
  React.useEffect(() => {
    const handleClickOutside = () => {
      setShowContextMenu(false);
    };
    if (showContextMenu) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [showContextMenu]);
  return /* @__PURE__ */ jsxRuntime.jsx(LexicalBlockWithAlignableContents.BlockWithAlignableContents, { className, format, nodeKey, children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "cta-button-container", children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "a",
      {
        ref: buttonRef,
        href: url,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "cta-button",
        style: buttonStyle,
        onContextMenu: handleContextMenu,
        children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "cta-button-content", children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "cta-button-text", children: text }),
          subText && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "cta-button-subtext", children: subText })
        ] })
      }
    ),
    showContextMenu && /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        className: "cta-button-context-menu",
        style: {
          position: "fixed",
          left: contextMenuPosition.x,
          top: contextMenuPosition.y
        },
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("button", { className: "cta-button-context-menu-item", onClick: handleEdit, children: "Edit" }),
          /* @__PURE__ */ jsxRuntime.jsx("button", { className: "cta-button-context-menu-item", onClick: handleDelete, children: "Delete" })
        ]
      }
    )
  ] }) });
}
function $convertCTAButtonElement(domNode) {
  const text = domNode.textContent || "";
  const url = domNode.getAttribute("data-url") || "";
  const subText = domNode.getAttribute("data-subtext") || void 0;
  const color = domNode.getAttribute("data-color") || "#3b82f6";
  if (text && url) {
    const node = $createCTAButtonNode({ text, subText, url, color });
    return { node };
  }
  return null;
}
class CTAButtonNode extends LexicalDecoratorBlockNode.DecoratorBlockNode {
  __text;
  __subText;
  __url;
  __color;
  static getType() {
    return "cta-button";
  }
  static clone(node) {
    return new CTAButtonNode(
      node.__text,
      node.__subText,
      node.__url,
      node.__color,
      node.__format,
      node.__key
    );
  }
  static importJSON(serializedNode) {
    const { text, subText, url, color } = serializedNode;
    const node = $createCTAButtonNode({
      text,
      subText,
      url,
      color
    });
    return node.updateFromJSON(serializedNode);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      text: this.getText(),
      subText: this.getSubText(),
      url: this.getURL(),
      color: this.getColor()
    };
  }
  constructor(text, subText, url, color, format, key) {
    super(format, key);
    this.__text = text;
    this.__subText = subText;
    this.__url = url;
    this.__color = color;
  }
  exportDOM() {
    const element = document.createElement("div");
    element.setAttribute("data-lexical-cta-button", "true");
    element.setAttribute("data-url", this.__url);
    element.setAttribute("data-color", this.__color);
    if (this.__subText) {
      element.setAttribute("data-subtext", this.__subText);
    }
    element.textContent = this.__text;
    return { element };
  }
  static importDOM() {
    return {
      div: (domNode) => {
        if (!domNode.hasAttribute("data-lexical-cta-button")) {
          return null;
        }
        return {
          conversion: $convertCTAButtonElement,
          priority: 1
        };
      }
    };
  }
  updateDOM() {
    return false;
  }
  getText() {
    return this.__text;
  }
  getSubText() {
    return this.__subText;
  }
  getURL() {
    return this.__url;
  }
  getColor() {
    return this.__color;
  }
  setTextContent(text) {
    const writable = this.getWritable();
    writable.__text = text;
  }
  setSubText(subText) {
    const writable = this.getWritable();
    writable.__subText = subText;
  }
  setURL(url) {
    const writable = this.getWritable();
    writable.__url = url;
  }
  setColor(color) {
    const writable = this.getWritable();
    writable.__color = color;
  }
  getTextContent(_includeInert, _includeDirectionless) {
    return `${this.__text}${this.__subText ? ` - ${this.__subText}` : ""} (${this.__url})`;
  }
  decorate(_editor, config) {
    const embedBlockTheme = config.theme.embedBlock || {};
    const className = {
      base: embedBlockTheme.base || "",
      focus: embedBlockTheme.focus || ""
    };
    return /* @__PURE__ */ jsxRuntime.jsx(
      CTAButtonComponent,
      {
        className,
        format: this.__format,
        nodeKey: this.getKey(),
        text: this.__text,
        subText: this.__subText,
        url: this.__url,
        color: this.__color
      }
    );
  }
}
function $createCTAButtonNode({
  text,
  subText,
  url,
  color = "#3b82f6"
}) {
  return new CTAButtonNode(text, subText, url, color);
}
function $isCTAButtonNode(node) {
  return node instanceof CTAButtonNode;
}
const INSERT_CTA_BUTTON_COMMAND = lexical.createCommand(
  "INSERT_CTA_BUTTON_COMMAND"
);
function CTAButtonPlugin() {
  const [editor] = LexicalComposerContext.useLexicalComposerContext();
  const [modal, showModal] = useModal();
  React.useEffect(() => {
    if (!editor.hasNodes([CTAButtonNode])) {
      throw new Error("CTAButtonPlugin: CTAButtonNode not registered on editor");
    }
    const handleEditCTAButton = (event) => {
      const { nodeKey, text, subText, url, color } = event.detail;
      showModal("Edit CTA Button", (onClose) => /* @__PURE__ */ jsxRuntime.jsx(
        InsertCTAButtonDialog,
        {
          activeEditor: editor,
          onClose,
          initialData: { nodeKey, text, subText, url, color }
        }
      ));
    };
    window.addEventListener("editCTAButton", handleEditCTAButton);
    const unregisterCommand = editor.registerCommand(
      INSERT_CTA_BUTTON_COMMAND,
      (payload) => {
        const ctaButtonNode = $createCTAButtonNode(payload);
        utils.$insertNodeToNearestRoot(ctaButtonNode);
        return true;
      },
      lexical.COMMAND_PRIORITY_EDITOR
    );
    return () => {
      window.removeEventListener("editCTAButton", handleEditCTAButton);
      unregisterCommand();
    };
  }, [editor, showModal]);
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: modal });
}
function InsertCTAButtonDialog({
  activeEditor,
  onClose,
  initialData
}) {
  const { formatMessage } = reactIntl.useIntl();
  const [text, setText] = React.useState(initialData?.text || "");
  const [subText, setSubText] = React.useState(initialData?.subText || "");
  const [url, setUrl] = React.useState(initialData?.url || "");
  const [color, setColor] = React.useState(initialData?.color || "#3b82f6");
  const onClick = () => {
    if (text.trim() && url.trim()) {
      if (initialData?.nodeKey) {
        activeEditor.update(() => {
          const node = lexical.$getNodeByKey(initialData.nodeKey);
          if (node && $isCTAButtonNode(node)) {
            node.setTextContent(text.trim());
            node.setSubText(subText.trim() || void 0);
            node.setURL(url.trim());
            node.setColor(color);
          }
        });
      } else {
        activeEditor.dispatchCommand(INSERT_CTA_BUTTON_COMMAND, {
          text: text.trim(),
          subText: subText.trim() || void 0,
          url: url.trim(),
          color
        });
      }
      onClose();
    }
  };
  const isDisabled = !text.trim() || !url.trim();
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      TextInput,
      {
        label: formatMessage({
          id: "lexical.plugin.cta-button.insert.text.label",
          defaultMessage: "Button Text"
        }),
        placeholder: formatMessage({
          id: "lexical.plugin.cta-button.insert.text.placeholder",
          defaultMessage: "Enter button text..."
        }),
        value: text,
        onChange: setText,
        "data-test-id": "cta-button-text"
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      TextInput,
      {
        label: formatMessage({
          id: "lexical.plugin.cta-button.insert.subtext.label",
          defaultMessage: "Sub Text (Optional)"
        }),
        placeholder: formatMessage({
          id: "lexical.plugin.cta-button.insert.subtext.placeholder",
          defaultMessage: "Enter sub text..."
        }),
        value: subText,
        onChange: setSubText,
        "data-test-id": "cta-button-subtext"
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      TextInput,
      {
        label: formatMessage({
          id: "lexical.plugin.cta-button.insert.url.label",
          defaultMessage: "URL"
        }),
        placeholder: formatMessage({
          id: "lexical.plugin.cta-button.insert.url.placeholder",
          defaultMessage: "https://example.com"
        }),
        value: url,
        onChange: setUrl,
        "data-test-id": "cta-button-url"
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx("div", { style: { marginBottom: "16px" }, children: /* @__PURE__ */ jsxRuntime.jsx(
      SimpleColorPicker,
      {
        color,
        onChange: setColor,
        label: formatMessage({
          id: "lexical.plugin.cta-button.insert.color.label",
          defaultMessage: "Button Color"
        })
      }
    ) }),
    /* @__PURE__ */ jsxRuntime.jsx(DialogActions, { "data-test-id": "cta-button-modal-confirm-insert", children: /* @__PURE__ */ jsxRuntime.jsx(Button, { disabled: isDisabled, onClick, children: formatMessage({
      id: initialData?.nodeKey ? "lexical.plugin.cta-button.update.confirm" : "lexical.plugin.cta-button.insert.confirm",
      defaultMessage: initialData?.nodeKey ? "Update CTA Button" : "Insert CTA Button"
    }) }) })
  ] });
}
const DropDownContext = React__namespace.createContext(null);
const dropDownPadding = 4;
function DropDownItem({
  children,
  className,
  onClick,
  title
}) {
  const ref = React.useRef(null);
  const dropDownContext = React__namespace.useContext(DropDownContext);
  if (dropDownContext === null) {
    throw new Error("DropDownItem must be used within a DropDown");
  }
  const { registerItem } = dropDownContext;
  React.useEffect(() => {
    if (ref && ref.current) {
      registerItem(ref);
    }
  }, [ref, registerItem]);
  return /* @__PURE__ */ jsxRuntime.jsx("button", { className, onClick, ref, title, type: "button", children });
}
function DropDownItems({
  children,
  dropDownRef,
  onClose
}) {
  const [items, setItems] = React.useState();
  const [highlightedItem, setHighlightedItem] = React.useState();
  const registerItem = React.useCallback(
    (itemRef) => {
      setItems((prev) => prev ? [...prev, itemRef] : [itemRef]);
    },
    [setItems]
  );
  const handleKeyDown = (event) => {
    if (!items) {
      return;
    }
    const key = event.key;
    if (["Escape", "ArrowUp", "ArrowDown", "Tab"].includes(key)) {
      event.preventDefault();
    }
    if (key === "Escape" || key === "Tab") {
      onClose();
    } else if (key === "ArrowUp") {
      setHighlightedItem((prev) => {
        if (!prev) {
          return items[0];
        }
        const index = items.indexOf(prev) - 1;
        return items[index === -1 ? items.length - 1 : index];
      });
    } else if (key === "ArrowDown") {
      setHighlightedItem((prev) => {
        if (!prev) {
          return items[0];
        }
        return items[items.indexOf(prev) + 1];
      });
    }
  };
  const contextValue = React.useMemo(
    () => ({
      registerItem
    }),
    [registerItem]
  );
  React.useEffect(() => {
    if (items && !highlightedItem) {
      setHighlightedItem(items[0]);
    }
    if (highlightedItem && highlightedItem.current) {
      highlightedItem.current.focus();
    }
  }, [items, highlightedItem]);
  return /* @__PURE__ */ jsxRuntime.jsx(DropDownContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "dropdown", ref: dropDownRef, onKeyDown: handleKeyDown, children }) });
}
function DropDown({
  disabled = false,
  buttonLabel,
  buttonAriaLabel,
  buttonClassName,
  buttonIconClassName,
  children,
  stopCloseOnClickSelf
}) {
  const dropDownRef = React.useRef(null);
  const buttonRef = React.useRef(null);
  const [showDropDown, setShowDropDown] = React.useState(false);
  const handleClose = () => {
    setShowDropDown(false);
    if (buttonRef && buttonRef.current) {
      buttonRef.current.focus();
    }
  };
  React.useEffect(() => {
    const button = buttonRef.current;
    const dropDown = dropDownRef.current;
    if (showDropDown && button !== null && dropDown !== null) {
      const { top, left } = button.getBoundingClientRect();
      dropDown.style.top = `${top + button.offsetHeight + dropDownPadding}px`;
      dropDown.style.left = `${Math.min(left, window.innerWidth - dropDown.offsetWidth - 20)}px`;
    }
  }, [dropDownRef, buttonRef, showDropDown]);
  React.useEffect(() => {
    const button = buttonRef.current;
    if (button !== null && showDropDown) {
      const handle = (event) => {
        const target = event.target;
        if (!lexical.isDOMNode(target)) {
          return;
        }
        if (stopCloseOnClickSelf) {
          if (dropDownRef.current && dropDownRef.current.contains(target)) {
            return;
          }
        }
        if (!button.contains(target)) {
          setShowDropDown(false);
        }
      };
      document.addEventListener("click", handle);
      return () => {
        document.removeEventListener("click", handle);
      };
    }
  }, [dropDownRef, buttonRef, showDropDown, stopCloseOnClickSelf]);
  React.useEffect(() => {
    const handleButtonPositionUpdate = () => {
      if (showDropDown) {
        const button = buttonRef.current;
        const dropDown = dropDownRef.current;
        if (button !== null && dropDown !== null) {
          const { top } = button.getBoundingClientRect();
          const newPosition = top + button.offsetHeight + dropDownPadding;
          if (newPosition !== dropDown.getBoundingClientRect().top) {
            dropDown.style.top = `${newPosition}px`;
          }
        }
      }
    };
    document.addEventListener("scroll", handleButtonPositionUpdate);
    return () => {
      document.removeEventListener("scroll", handleButtonPositionUpdate);
    };
  }, [buttonRef, dropDownRef, showDropDown]);
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      "button",
      {
        type: "button",
        disabled,
        "aria-label": buttonAriaLabel || buttonLabel,
        className: buttonClassName,
        onClick: () => setShowDropDown(!showDropDown),
        ref: buttonRef,
        children: [
          buttonIconClassName && /* @__PURE__ */ jsxRuntime.jsx("span", { className: buttonIconClassName }),
          buttonLabel && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text dropdown-button-text", children: buttonLabel }),
          /* @__PURE__ */ jsxRuntime.jsx("i", { className: "chevron-down" })
        ]
      }
    ),
    showDropDown && ReactDOM.createPortal(
      /* @__PURE__ */ jsxRuntime.jsx(DropDownItems, { dropDownRef, onClose: handleClose, children }),
      document.body
    )
  ] });
}
function $convertLayoutContainerElement(domNode) {
  const styleAttributes = window.getComputedStyle(domNode);
  const templateColumns = styleAttributes.getPropertyValue("grid-template-columns");
  if (templateColumns) {
    const node = $createLayoutContainerNode(templateColumns);
    return { node };
  }
  return null;
}
class LayoutContainerNode extends lexical.ElementNode {
  __templateColumns;
  constructor(templateColumns, key) {
    super(key);
    this.__templateColumns = templateColumns;
  }
  static getType() {
    return "layout-container";
  }
  static clone(node) {
    return new LayoutContainerNode(node.__templateColumns, node.__key);
  }
  createDOM(config) {
    const dom = document.createElement("div");
    dom.style.gridTemplateColumns = this.__templateColumns;
    if (typeof config.theme.layoutContainer === "string") {
      utils.addClassNamesToElement(dom, config.theme.layoutContainer);
    }
    return dom;
  }
  exportDOM() {
    const element = document.createElement("div");
    element.style.gridTemplateColumns = this.__templateColumns;
    element.setAttribute("data-lexical-layout-container", "true");
    return { element };
  }
  updateDOM(prevNode, dom) {
    if (prevNode.__templateColumns !== this.__templateColumns) {
      dom.style.gridTemplateColumns = this.__templateColumns;
    }
    return false;
  }
  static importDOM() {
    return {
      div: (domNode) => {
        if (!domNode.hasAttribute("data-lexical-layout-container")) {
          return null;
        }
        return {
          conversion: $convertLayoutContainerElement,
          priority: 2
        };
      }
    };
  }
  static importJSON(json) {
    return $createLayoutContainerNode().updateFromJSON(json);
  }
  updateFromJSON(serializedNode) {
    return super.updateFromJSON(serializedNode).setTemplateColumns(serializedNode.templateColumns);
  }
  isShadowRoot() {
    return true;
  }
  canBeEmpty() {
    return false;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      templateColumns: this.__templateColumns
    };
  }
  getTemplateColumns() {
    return this.getLatest().__templateColumns;
  }
  setTemplateColumns(templateColumns) {
    const self = this.getWritable();
    self.__templateColumns = templateColumns;
    return self;
  }
}
function $createLayoutContainerNode(templateColumns = "") {
  return new LayoutContainerNode(templateColumns);
}
function $isLayoutContainerNode(node) {
  return node instanceof LayoutContainerNode;
}
function $convertLayoutItemElement() {
  return { node: $createLayoutItemNode() };
}
class LayoutItemNode extends lexical.ElementNode {
  static getType() {
    return "layout-item";
  }
  static clone(node) {
    return new LayoutItemNode(node.__key);
  }
  createDOM(config) {
    const dom = document.createElement("div");
    dom.setAttribute("data-lexical-layout-item", "true");
    if (typeof config.theme.layoutItem === "string") {
      utils.addClassNamesToElement(dom, config.theme.layoutItem);
    }
    return dom;
  }
  updateDOM() {
    return false;
  }
  static importDOM() {
    return {
      div: (domNode) => {
        if (!domNode.hasAttribute("data-lexical-layout-item")) {
          return null;
        }
        return {
          conversion: $convertLayoutItemElement,
          priority: 2
        };
      }
    };
  }
  static importJSON(serializedNode) {
    return $createLayoutItemNode().updateFromJSON(serializedNode);
  }
  isShadowRoot() {
    return true;
  }
}
function $createLayoutItemNode() {
  return new LayoutItemNode();
}
function $isLayoutItemNode(node) {
  return node instanceof LayoutItemNode;
}
const INSERT_LAYOUT_COMMAND = lexical.createCommand();
const UPDATE_LAYOUT_COMMAND = lexical.createCommand();
function LayoutPlugin() {
  const [editor] = LexicalComposerContext.useLexicalComposerContext();
  React.useEffect(() => {
    if (!editor.hasNodes([LayoutContainerNode, LayoutItemNode])) {
      throw new Error(
        "LayoutPlugin: LayoutContainerNode, or LayoutItemNode not registered on editor"
      );
    }
    const $onEscape = (before) => {
      const selection2 = lexical.$getSelection();
      if (lexical.$isRangeSelection(selection2) && selection2.isCollapsed() && selection2.anchor.offset === 0) {
        const container = utils.$findMatchingParent(selection2.anchor.getNode(), $isLayoutContainerNode);
        if ($isLayoutContainerNode(container)) {
          const parent = container.getParent();
          const child = parent && (before ? parent.getFirstChild() : parent?.getLastChild());
          const descendant = before ? container.getFirstDescendant()?.getKey() : container.getLastDescendant()?.getKey();
          if (parent !== null && child === container && selection2.anchor.key === descendant) {
            if (before) {
              container.insertBefore(lexical.$createParagraphNode());
            } else {
              container.insertAfter(lexical.$createParagraphNode());
            }
          }
        }
      }
      return false;
    };
    const $fillLayoutItemIfEmpty = (node) => {
      if (node.isEmpty()) {
        node.append(lexical.$createParagraphNode());
      }
    };
    const $removeIsolatedLayoutItem = (node) => {
      const parent = node.getParent();
      if (!$isLayoutContainerNode(parent)) {
        const children = node.getChildren();
        for (const child of children) {
          node.insertBefore(child);
        }
        node.remove();
        return true;
      }
      return false;
    };
    return utils.mergeRegister(
      // When layout is the last child pressing down/right arrow will insert paragraph
      // below it to allow adding more content. It's similar what $insertBlockNode
      // (mainly for decorators), except it'll always be possible to continue adding
      // new content even if trailing paragraph is accidentally deleted
      editor.registerCommand(lexical.KEY_ARROW_DOWN_COMMAND, () => $onEscape(false), lexical.COMMAND_PRIORITY_LOW),
      editor.registerCommand(lexical.KEY_ARROW_RIGHT_COMMAND, () => $onEscape(false), lexical.COMMAND_PRIORITY_LOW),
      // When layout is the first child pressing up/left arrow will insert paragraph
      // above it to allow adding more content. It's similar what $insertBlockNode
      // (mainly for decorators), except it'll always be possible to continue adding
      // new content even if leading paragraph is accidentally deleted
      editor.registerCommand(lexical.KEY_ARROW_UP_COMMAND, () => $onEscape(true), lexical.COMMAND_PRIORITY_LOW),
      editor.registerCommand(lexical.KEY_ARROW_LEFT_COMMAND, () => $onEscape(true), lexical.COMMAND_PRIORITY_LOW),
      editor.registerCommand(
        INSERT_LAYOUT_COMMAND,
        (template) => {
          editor.update(() => {
            const container = $createLayoutContainerNode(template);
            const itemsCount = getItemsCountFromTemplate(template);
            for (let i = 0; i < itemsCount; i++) {
              container.append($createLayoutItemNode().append(lexical.$createParagraphNode()));
            }
            utils.$insertNodeToNearestRoot(container);
            container.selectStart();
          });
          return true;
        },
        lexical.COMMAND_PRIORITY_EDITOR
      ),
      editor.registerCommand(
        UPDATE_LAYOUT_COMMAND,
        ({ template, nodeKey }) => {
          editor.update(() => {
            const container = lexical.$getNodeByKey(nodeKey);
            if (!$isLayoutContainerNode(container)) {
              return;
            }
            const itemsCount = getItemsCountFromTemplate(template);
            const prevItemsCount = getItemsCountFromTemplate(container.getTemplateColumns());
            if (itemsCount > prevItemsCount) {
              for (let i = prevItemsCount; i < itemsCount; i++) {
                container.append($createLayoutItemNode().append(lexical.$createParagraphNode()));
              }
            } else if (itemsCount < prevItemsCount) {
              for (let i = prevItemsCount - 1; i >= itemsCount; i--) {
                const layoutItem = container.getChildAtIndex(i);
                if ($isLayoutItemNode(layoutItem)) {
                  layoutItem.remove();
                }
              }
            }
            container.setTemplateColumns(template);
          });
          return true;
        },
        lexical.COMMAND_PRIORITY_EDITOR
      ),
      editor.registerNodeTransform(LayoutItemNode, (node) => {
        const isRemoved = $removeIsolatedLayoutItem(node);
        if (!isRemoved) {
          $fillLayoutItemIfEmpty(node);
        }
      }),
      editor.registerNodeTransform(LayoutContainerNode, (node) => {
        const children = node.getChildren();
        if (!children.every($isLayoutItemNode)) {
          for (const child of children) {
            node.insertBefore(child);
          }
          node.remove();
        }
      })
    );
  }, [editor]);
  return null;
}
function getItemsCountFromTemplate(template) {
  return template.trim().split(/\s+/).length;
}
const LAYOUTS = [
  {
    label: "lexical.plugin.layout.columns.two.equal",
    defaultMessage: "2 columns (equal width)",
    value: "1fr 1fr"
  },
  {
    label: "lexical.plugin.layout.columns.two.split",
    defaultMessage: "2 columns (25% - 75%)",
    value: "1fr 3fr"
  },
  {
    label: "lexical.plugin.layout.columns.three.equal",
    defaultMessage: "3 columns (equal width)",
    value: "1fr 1fr 1fr"
  },
  {
    label: "lexical.plugin.layout.columns.three.split",
    defaultMessage: "3 columns (25% - 50% - 25%)",
    value: "1fr 2fr 1fr"
  },
  {
    label: "lexical.plugin.layout.columns.four.equal",
    defaultMessage: "4 columns (equal width)",
    value: "1fr 1fr 1fr 1fr"
  }
];
function InsertLayoutDialog({
  activeEditor,
  onClose
}) {
  const { formatMessage } = reactIntl.useIntl();
  const [layout, setLayout] = React.useState(LAYOUTS[0].value);
  const selectedLayout = LAYOUTS.find((item) => item.value === layout);
  const buttonLabel = selectedLayout ? formatMessage({
    id: selectedLayout.label,
    defaultMessage: selectedLayout.defaultMessage
  }) : "";
  const onClick = () => {
    activeEditor.dispatchCommand(INSERT_LAYOUT_COMMAND, layout);
    onClose();
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(DropDown, { buttonClassName: "toolbar-item dialog-dropdown", buttonLabel, children: LAYOUTS.map(({ label, defaultMessage, value }) => /* @__PURE__ */ jsxRuntime.jsx(DropDownItem, { className: "item", onClick: () => setLayout(value), children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({ id: label, defaultMessage }) }) }, value)) }),
    /* @__PURE__ */ jsxRuntime.jsx(Button, { onClick, children: formatMessage({
      id: "lexical.plugin.layout.button.insert",
      defaultMessage: "Insert"
    }) })
  ] });
}
const CellContext = React.createContext({
  cellEditorConfig: null,
  cellEditorPlugins: null,
  set: () => {
  }
});
function TableContext({ children }) {
  const [contextValue, setContextValue] = React.useState({
    cellEditorConfig: null,
    cellEditorPlugins: null
  });
  return /* @__PURE__ */ jsxRuntime.jsx(
    CellContext.Provider,
    {
      value: React.useMemo(
        () => ({
          cellEditorConfig: contextValue.cellEditorConfig,
          cellEditorPlugins: contextValue.cellEditorPlugins,
          set: (cellEditorConfig, cellEditorPlugins) => {
            setContextValue({ cellEditorConfig, cellEditorPlugins });
          }
        }),
        [contextValue.cellEditorConfig, contextValue.cellEditorPlugins]
      ),
      children
    }
  );
}
function InsertTableDialog({
  activeEditor,
  onClose
}) {
  const { formatMessage } = reactIntl.useIntl();
  const [rows, setRows] = React.useState("5");
  const [columns, setColumns] = React.useState("5");
  const [isDisabled, setIsDisabled] = React.useState(true);
  React.useEffect(() => {
    const row = Number(rows);
    const column = Number(columns);
    if (row && row > 0 && row <= 500 && column && column > 0 && column <= 50) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [rows, columns]);
  const onClick = () => {
    activeEditor.dispatchCommand(table.INSERT_TABLE_COMMAND, {
      columns,
      rows
    });
    onClose();
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      TextInput,
      {
        placeholder: formatMessage({
          id: "lexical.plugin.table.rows.placeholder",
          defaultMessage: "# of rows (1-500)"
        }),
        label: formatMessage({
          id: "lexical.plugin.table.rows.label",
          defaultMessage: "Rows"
        }),
        onChange: setRows,
        value: rows,
        "data-test-id": "table-modal-rows",
        type: "number"
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      TextInput,
      {
        placeholder: formatMessage({
          id: "lexical.plugin.table.columns.placeholder",
          defaultMessage: "# of columns (1-50)"
        }),
        label: formatMessage({
          id: "lexical.plugin.table.columns.label",
          defaultMessage: "Columns"
        }),
        onChange: setColumns,
        value: columns,
        "data-test-id": "table-modal-columns",
        type: "number"
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(DialogActions, { "data-test-id": "table-model-confirm-insert", children: /* @__PURE__ */ jsxRuntime.jsx(Button, { disabled: isDisabled, onClick, children: formatMessage({
      id: "lexical.plugin.table.confirm.button",
      defaultMessage: "Confirm"
    }) }) })
  ] });
}
class ComponentPickerOption extends LexicalTypeaheadMenuPlugin.MenuOption {
  // What shows up in the editor
  title;
  // Icon for display
  icon;
  // For extra searching.
  keywords;
  // TBD
  keyboardShortcut;
  // What happens when you select this option?
  onSelect;
  constructor(title, options) {
    super(title);
    this.title = title;
    this.keywords = options.keywords || [];
    this.icon = options.icon;
    this.keyboardShortcut = options.keyboardShortcut;
    this.onSelect = options.onSelect.bind(this);
  }
}
function ComponentPickerMenuItem({
  index,
  isSelected,
  onClick,
  onMouseEnter,
  option
}) {
  let className = "item";
  if (isSelected) {
    className += " selected";
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "li",
    {
      tabIndex: -1,
      className,
      ref: option.setRefElement,
      role: "option",
      "aria-selected": isSelected,
      id: "typeahead-item-" + index,
      onMouseEnter,
      onClick,
      children: [
        option.icon,
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: option.title })
      ]
    },
    option.key
  );
}
function getDynamicOptions(editor, queryString) {
  const options = [];
  if (queryString == null) {
    return options;
  }
  const tableMatch = queryString.match(/^([1-9]\d?)(?:x([1-9]\d?)?)?$/);
  if (tableMatch !== null) {
    const rows = tableMatch[1];
    const colOptions = tableMatch[2] ? [tableMatch[2]] : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(String);
    options.push(
      ...colOptions.map(
        (columns) => new ComponentPickerOption(`${rows}x${columns} Table`, {
          icon: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon table" }),
          keywords: ["table"],
          onSelect: () => editor.dispatchCommand(table.INSERT_TABLE_COMMAND, { columns, rows })
        })
      )
    );
  }
  return options;
}
function getBaseOptions(editor, showModal) {
  return [
    new ComponentPickerOption("Paragraph", {
      icon: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon paragraph" }),
      keywords: ["normal", "paragraph", "p", "text"],
      onSelect: () => editor.update(() => {
        const selection$1 = lexical.$getSelection();
        if (lexical.$isRangeSelection(selection$1)) {
          selection.$setBlocksType(selection$1, () => lexical.$createParagraphNode());
        }
      })
    }),
    ...[1, 2, 3].map(
      (n) => new ComponentPickerOption(`Heading ${n}`, {
        icon: /* @__PURE__ */ jsxRuntime.jsx("i", { className: `icon h${n}` }),
        keywords: ["heading", "header", `h${n}`],
        onSelect: () => editor.update(() => {
          const selection$1 = lexical.$getSelection();
          if (lexical.$isRangeSelection(selection$1)) {
            selection.$setBlocksType(selection$1, () => richText.$createHeadingNode(`h${n}`));
          }
        })
      })
    ),
    new ComponentPickerOption("Table", {
      icon: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon table" }),
      keywords: ["table", "grid", "spreadsheet", "rows", "columns"],
      onSelect: () => showModal("Insert Table", (onClose) => /* @__PURE__ */ jsxRuntime.jsx(InsertTableDialog, { activeEditor: editor, onClose }))
    }),
    new ComponentPickerOption("Numbered List", {
      icon: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon number" }),
      keywords: ["numbered list", "ordered list", "ol"],
      onSelect: () => editor.dispatchCommand(list.INSERT_ORDERED_LIST_COMMAND, void 0)
    }),
    new ComponentPickerOption("Bulleted List", {
      icon: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon bullet" }),
      keywords: ["bulleted list", "unordered list", "ul"],
      onSelect: () => editor.dispatchCommand(list.INSERT_UNORDERED_LIST_COMMAND, void 0)
    }),
    new ComponentPickerOption("Check List", {
      icon: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon check" }),
      keywords: ["check list", "todo list"],
      onSelect: () => editor.dispatchCommand(list.INSERT_CHECK_LIST_COMMAND, void 0)
    }),
    new ComponentPickerOption("Quote", {
      icon: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon quote" }),
      keywords: ["block quote"],
      onSelect: () => editor.update(() => {
        const selection$1 = lexical.$getSelection();
        if (lexical.$isRangeSelection(selection$1)) {
          selection.$setBlocksType(selection$1, () => richText.$createQuoteNode());
        }
      })
    }),
    new ComponentPickerOption("Code", {
      icon: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon code" }),
      keywords: ["javascript", "python", "js", "codeblock"],
      onSelect: () => editor.update(() => {
        const selection$1 = lexical.$getSelection();
        if (lexical.$isRangeSelection(selection$1)) {
          if (selection$1.isCollapsed()) {
            selection.$setBlocksType(selection$1, () => code.$createCodeNode());
          } else {
            const textContent = selection$1.getTextContent();
            const codeNode = code.$createCodeNode();
            selection$1.insertNodes([codeNode]);
            selection$1.insertRawText(textContent);
          }
        }
      })
    }),
    new ComponentPickerOption("Divider", {
      icon: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon horizontal-rule" }),
      keywords: ["horizontal rule", "divider", "hr"],
      onSelect: () => editor.dispatchCommand(LexicalHorizontalRuleNode.INSERT_HORIZONTAL_RULE_COMMAND, void 0)
    }),
    // new ComponentPickerOption('Page Break', {
    //   icon: <i className="icon page-break" />,
    //   keywords: ['page break', 'divider'],
    //   onSelect: () => editor.dispatchCommand(INSERT_PAGE_BREAK, undefined),
    // }),
    // new ComponentPickerOption('Poll', {
    //   icon: <i className="icon poll" />,
    //   keywords: ['poll', 'vote'],
    //   onSelect: () =>
    //     showModal('Insert Poll', (onClose) => (
    //       <InsertPollDialog activeEditor={editor} onClose={onClose} />
    //     )),
    // }),
    ...EmbedConfigs.map(
      (embedConfig) => new ComponentPickerOption(`Embed ${embedConfig.contentName}`, {
        icon: embedConfig.icon,
        keywords: [...embedConfig.keywords, "embed"],
        onSelect: () => editor.dispatchCommand(LexicalAutoEmbedPlugin.INSERT_EMBED_COMMAND, embedConfig.type)
      })
    ),
    // new ComponentPickerOption('Equation', {
    //   icon: <i className="icon equation" />,
    //   keywords: ['equation', 'latex', 'math'],
    //   onSelect: () =>
    //     showModal('Insert Equation', (onClose) => (
    //       <InsertEquationDialog activeEditor={editor} onClose={onClose} />
    //     )),
    // }),
    // new ComponentPickerOption('GIF', {
    //   icon: <i className="icon gif" />,
    //   keywords: ['gif', 'animate', 'image', 'file'],
    //   onSelect: () =>
    //     editor.dispatchCommand(INSERT_IMAGE_COMMAND, {
    //       altText: 'Cat typing on a laptop',
    //       src: catTypingGif,
    //     }),
    // }),
    // new ComponentPickerOption('Image', {
    //   icon: <i className="icon image" />,
    //   keywords: ['image', 'photo', 'picture', 'file'],
    //   onSelect: () =>
    //     showModal('Insert Image', (onClose) => (
    //       <InsertImageDialog activeEditor={editor} onClose={onClose} />
    //     )),
    // }),
    new ComponentPickerOption("Collapsible", {
      icon: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon caret-right" }),
      keywords: ["collapse", "collapsible", "toggle"],
      onSelect: () => editor.dispatchCommand(INSERT_COLLAPSIBLE_COMMAND, void 0)
    }),
    new ComponentPickerOption("CTA Button", {
      icon: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon link" }),
      keywords: ["cta", "button", "call to action", "link"],
      onSelect: () => showModal("Insert CTA Button", (onClose) => /* @__PURE__ */ jsxRuntime.jsx(InsertCTAButtonDialog, { activeEditor: editor, onClose }))
    }),
    new ComponentPickerOption("Columns Layout", {
      icon: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon columns" }),
      keywords: ["columns", "layout", "grid"],
      onSelect: () => showModal("Insert Columns Layout", (onClose) => /* @__PURE__ */ jsxRuntime.jsx(InsertLayoutDialog, { activeEditor: editor, onClose }))
    }),
    ...["left", "center", "right", "justify"].map(
      (alignment) => new ComponentPickerOption(`Align ${alignment}`, {
        icon: /* @__PURE__ */ jsxRuntime.jsx("i", { className: `icon ${alignment}-align` }),
        keywords: ["align", "justify", alignment],
        onSelect: () => editor.dispatchCommand(lexical.FORMAT_ELEMENT_COMMAND, alignment)
      })
    )
  ];
}
function ComponentPickerMenuPlugin() {
  const [editor] = LexicalComposerContext.useLexicalComposerContext();
  const [modal, showModal] = useModal();
  const [queryString, setQueryString] = React.useState(null);
  const checkForTriggerMatch = LexicalTypeaheadMenuPlugin.useBasicTypeaheadTriggerMatch("/", {
    minLength: 0
  });
  const options = React.useMemo(() => {
    const baseOptions = getBaseOptions(editor, showModal);
    if (!queryString) {
      return baseOptions;
    }
    const regex = new RegExp(queryString, "i");
    return [
      ...getDynamicOptions(editor, queryString),
      ...baseOptions.filter(
        (option) => regex.test(option.title) || option.keywords.some((keyword) => regex.test(keyword))
      )
    ];
  }, [editor, queryString, showModal]);
  const onSelectOption = React.useCallback(
    (selectedOption, nodeToRemove, closeMenu, matchingString) => {
      editor.update(() => {
        nodeToRemove?.remove();
        selectedOption.onSelect(matchingString);
        closeMenu();
      });
    },
    [editor]
  );
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    modal,
    /* @__PURE__ */ jsxRuntime.jsx(
      LexicalTypeaheadMenuPlugin.LexicalTypeaheadMenuPlugin,
      {
        onQueryChange: setQueryString,
        onSelectOption,
        triggerFn: checkForTriggerMatch,
        options,
        menuRenderFn: (anchorElementRef, { selectedIndex, selectOptionAndCleanUp, setHighlightedIndex }) => anchorElementRef.current && options.length ? ReactDOM__namespace.createPortal(
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "typeahead-popover component-picker-menu", children: /* @__PURE__ */ jsxRuntime.jsx("ul", { children: options.map((option, i) => /* @__PURE__ */ jsxRuntime.jsx(
            ComponentPickerMenuItem,
            {
              index: i,
              isSelected: selectedIndex === i,
              onClick: () => {
                setHighlightedIndex(i);
                selectOptionAndCleanUp(option);
              },
              onMouseEnter: () => {
                setHighlightedIndex(i);
              },
              option
            },
            option.key
          )) }) }),
          anchorElementRef.current
        ) : null
      }
    )
  ] });
}
const StrapiImageComponent = React__namespace.lazy(() => Promise.resolve().then(() => require("./StrapiImageComponent-XX_h-Mdn.js")));
class StrapiImageNode extends lexical.DecoratorNode {
  __documentId;
  __src;
  __caption;
  static getType() {
    return "strapi-image";
  }
  static clone(node) {
    return new StrapiImageNode(node.__documentId, node.__src, node.__caption, node.__key);
  }
  static importJSON(serializedNode) {
    const { documentId, src, caption = "" } = serializedNode;
    return $createStrapiImageNode({
      documentId,
      src,
      caption
    }).updateFromJSON(serializedNode);
  }
  updateFromJSON(serializedNode) {
    const node = super.updateFromJSON(serializedNode);
    return node;
  }
  exportDOM() {
    const element = document.createElement("img");
    element.setAttribute("src", this.__src);
    if (this.__caption) {
      element.setAttribute("alt", this.__caption);
    }
    return { element };
  }
  constructor(documentId, src, caption, key) {
    super(key);
    this.__documentId = documentId;
    this.__src = src;
    this.__caption = caption || "";
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      documentId: this.__documentId,
      src: this.__src,
      caption: this.__caption
    };
  }
  setCaption(caption) {
    const writable = this.getWritable();
    writable.__caption = caption;
  }
  getCaption() {
    return this.__caption;
  }
  // View
  createDOM(config) {
    const div = document.createElement("div");
    const theme2 = config.theme;
    const className = theme2.image;
    if (className !== void 0) {
      div.className = className;
    }
    div.style.display = "block";
    div.style.width = "100%";
    return div;
  }
  updateDOM() {
    return false;
  }
  decorate() {
    return /* @__PURE__ */ jsxRuntime.jsx(React.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntime.jsx(
      StrapiImageComponent,
      {
        documentId: this.__documentId,
        src: this.__src,
        caption: this.__caption,
        nodeKey: this.__key
      }
    ) });
  }
}
function $createStrapiImageNode({
  documentId,
  src,
  caption
}) {
  return lexical.$applyNodeReplacement(new StrapiImageNode(documentId, src, caption));
}
function $isStrapiImageNode(node) {
  return node instanceof StrapiImageNode;
}
const INSERT_STRAPI_IMAGE_COMMAND = lexical.createCommand(
  "INSERT_STRAPI_IMAGE_COMMAND"
);
function InsertStrapiImageDialog({
  activeEditor,
  onClose,
  MediaLibraryDialog
}) {
  const handleSelectAssets = (assets) => {
    try {
      if (assets.length > 0) {
        for (const asset of assets) {
          const imagePayload = {
            documentId: asset.documentId,
            src: asset.url || asset.formats?.thumbnail?.url,
            caption: asset.alternativeText || asset.name?.split(".")[0] || ""
          };
          activeEditor.dispatchCommand(INSERT_STRAPI_IMAGE_COMMAND, imagePayload);
        }
        onClose();
      }
    } catch (err) {
      console.log("Unable to insert images:");
      console.log(err);
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    MediaLibraryDialog,
    {
      allowedTypes: ["images"],
      onClose,
      onSelectAssets: handleSelectAssets
    }
  );
}
function StrapiImagePlugin() {
  const [editor] = LexicalComposerContext.useLexicalComposerContext();
  React.useEffect(() => {
    if (!editor.hasNodes([StrapiImageNode])) {
      throw new Error("StrapiImagePlugin:  StrapiImageNode not registered on editor");
    }
    return utils.mergeRegister(
      editor.registerCommand(
        INSERT_STRAPI_IMAGE_COMMAND,
        (payload) => {
          const selection2 = lexical.$getSelection();
          const strapiImageNode = $createStrapiImageNode(payload);
          if (lexical.$isRangeSelection(selection2)) {
            lexical.$insertNodes([strapiImageNode]);
          } else {
            lexical.$insertNodes([strapiImageNode]);
          }
          return true;
        },
        lexical.COMMAND_PRIORITY_EDITOR
      ),
      editor.registerCommand(
        lexical.DRAGSTART_COMMAND,
        (event) => {
          return $onDragStart(event);
        },
        lexical.COMMAND_PRIORITY_HIGH
      ),
      editor.registerCommand(
        lexical.DRAGOVER_COMMAND,
        (event) => {
          return $onDragover(event);
        },
        lexical.COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        lexical.DROP_COMMAND,
        (event) => {
          return $onDrop(event, editor);
        },
        lexical.COMMAND_PRIORITY_HIGH
      )
    );
  }, [editor]);
  return null;
}
const TRANSPARENT_IMAGE = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
const img = document.createElement("img");
img.src = TRANSPARENT_IMAGE;
function $onDragStart(event) {
  const node = $getImageNodeInSelection();
  if (!node) {
    return false;
  }
  const dataTransfer = event.dataTransfer;
  if (!dataTransfer) {
    return false;
  }
  dataTransfer.setData("text/plain", "_");
  dataTransfer.setDragImage(img, 0, 0);
  dataTransfer.setData(
    "application/x-lexical-drag",
    JSON.stringify({
      data: {
        key: node.getKey(),
        src: node.__src,
        documentId: node.__documentId
      },
      type: "image"
    })
  );
  return true;
}
function $onDragover(event) {
  const node = $getImageNodeInSelection();
  if (!node) {
    return false;
  }
  if (!canDropImage(event)) {
    event.preventDefault();
  }
  return true;
}
function $onDrop(event, editor) {
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
    const rangeSelection = lexical.$createRangeSelection();
    if (range !== null && range !== void 0) {
      rangeSelection.applyDOMRange(range);
    }
    lexical.$setSelection(rangeSelection);
    editor.dispatchCommand(INSERT_STRAPI_IMAGE_COMMAND, data);
  }
  return true;
}
function $getImageNodeInSelection() {
  const selection2 = lexical.$getSelection();
  if (!lexical.$isNodeSelection(selection2)) {
    return null;
  }
  const nodes = selection2.getNodes();
  const node = nodes[0];
  return $isStrapiImageNode(node) ? node : null;
}
function getDragImageData(event) {
  const dragData = event.dataTransfer?.getData("application/x-lexical-drag");
  if (!dragData) {
    return null;
  }
  const { type, data } = JSON.parse(dragData);
  if (type !== "image") {
    return null;
  }
  return data;
}
function canDropImage(event) {
  const target = event.target;
  return !!(lexical.isHTMLElement(target) && !target.closest("code, span.editor-image") && lexical.isHTMLElement(target.parentElement) && target.parentElement.closest("div.ContentEditable__root"));
}
function getDragSelection(event) {
  let range;
  const domSelection = lexical.getDOMSelectionFromTarget(event.target);
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
function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
}
function getFileExtension(file) {
  const nameExtension = file.name.split(".").pop()?.toLowerCase();
  if (nameExtension && nameExtension !== file.name) {
    return nameExtension;
  }
  const mimeTypeMap = {
    "image/jpeg": "jpg",
    "image/jpg": "jpg",
    "image/png": "png",
    "image/gif": "gif",
    "image/webp": "webp",
    "image/svg+xml": "svg"
  };
  return mimeTypeMap[file.type] || "jpg";
}
function generateImageFilename(file) {
  const extension = getFileExtension(file);
  const uuid2 = generateUUID();
  return `${uuid2}.${extension}`;
}
function getAuthHeaders() {
  const headers = {};
  const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute("content");
  if (csrfToken) {
    headers["X-CSRF-Token"] = csrfToken;
  }
  let authToken = null;
  if (document.cookie) {
    const cookies = document.cookie.split(";").reduce(
      (acc, cookie) => {
        const [name, value] = cookie.trim().split("=");
        if (name && value) {
          acc[name] = decodeURIComponent(value);
        }
        return acc;
      },
      {}
    );
    const cookieKeys = ["jwtToken", "strapi-jwt", "jwt", "token", "authToken"];
    for (const key of cookieKeys) {
      if (cookies[key]) {
        authToken = cookies[key];
        console.log(`🍪 Found auth token in cookie: ${key}`);
        break;
      }
    }
    if (!authToken) {
      for (const [cookieName, cookieValue] of Object.entries(cookies)) {
        if (cookieValue && cookieValue.startsWith("eyJ")) {
          authToken = cookieValue;
          console.log(`🍪 Found JWT token in cookie: ${cookieName}`);
          break;
        }
      }
    }
  }
  if (authToken) {
    authToken = authToken.replace(/^["']|["']$/g, "").trim();
    headers["Authorization"] = `Bearer ${authToken}`;
    console.log("✅ Auth header set successfully");
  } else {
    console.warn("❌ No authentication token found in cookies");
  }
  return headers;
}
async function uploadImageToStrapi(options) {
  const { file, folder = "post", alternativeText } = options;
  try {
    let uploadFile = file;
    if (!file.name || file.name === "image.png" || file.name === "blob" || file.name.startsWith("image")) {
      const newFilename = generateImageFilename(file);
      uploadFile = new File([file], newFilename, { type: file.type });
      console.log(`📝 Generated new filename: ${newFilename}`);
    }
    const formData = new FormData();
    formData.append("files", uploadFile);
    if (folder) {
      formData.append("path", folder);
    }
    if (alternativeText) {
      formData.append(
        "fileInfo",
        JSON.stringify({
          alternativeText
        })
      );
    }
    const authHeaders = getAuthHeaders();
    const uploadUrl = "/upload";
    console.log("Upload request headers:", authHeaders);
    console.log("Upload request URL:", uploadUrl);
    console.log("Upload file info:", {
      name: uploadFile.name,
      size: uploadFile.size,
      type: uploadFile.type
    });
    const response = await fetch(uploadUrl, {
      method: "POST",
      body: formData,
      headers: {
        // Include authentication headers
        ...authHeaders
        // Don't set Content-Type header, let browser set it with boundary for FormData
      },
      credentials: "include"
      // Include cookies for session authentication
    });
    console.log("Upload response status:", response.status);
    console.log("Upload response headers:", Object.fromEntries(response.headers.entries()));
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Upload response error:", response.status, response.statusText, errorText);
      throw new Error(`Upload failed: ${response.status} ${response.statusText} - ${errorText}`);
    }
    const uploadedFiles = await response.json();
    console.log("Upload successful:", uploadedFiles);
    if (!uploadedFiles || uploadedFiles.length === 0) {
      throw new Error("No files were uploaded");
    }
    const uploadedFile = uploadedFiles[0];
    return {
      documentId: uploadedFile.documentId,
      url: uploadedFile.url,
      name: uploadedFile.name,
      alternativeText: uploadedFile.alternativeText,
      width: uploadedFile.width,
      height: uploadedFile.height
    };
  } catch (error) {
    console.error("Error uploading image to Strapi:", error);
    throw error;
  }
}
async function uploadMultipleImagesToStrapi(files, folder) {
  const uploadPromises = files.map(
    (file) => uploadImageToStrapi({
      file,
      folder,
      alternativeText: file.name.split(".")[0]
      // Use filename without extension as alt text
    })
  );
  return Promise.all(uploadPromises);
}
function isValidImageFile(file) {
  const validTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/gif",
    "image/webp",
    "image/svg+xml"
  ];
  return validTypes.includes(file.type);
}
function debugStrapiAuth() {
  console.log("=== Strapi Cookie Auth Debug ===");
  let foundToken = false;
  if (document.cookie) {
    const cookies = document.cookie.split(";").reduce(
      (acc, cookie) => {
        const [name, value] = cookie.trim().split("=");
        if (name && value) {
          acc[name] = decodeURIComponent(value);
        }
        return acc;
      },
      {}
    );
    console.log("🍪 Checking for auth tokens in cookies:");
    const cookieKeys = ["jwtToken", "strapi-jwt", "jwt", "token", "authToken"];
    for (const key of cookieKeys) {
      if (cookies[key]) {
        console.log(`  ✅ ${key}: Found`);
        foundToken = true;
      } else {
        console.log(`  ❌ ${key}: Not found`);
      }
    }
    if (!foundToken) {
      for (const [name, value] of Object.entries(cookies)) {
        if (value && value.startsWith("eyJ")) {
          console.log(`  🎫 ${name}: JWT pattern found`);
          foundToken = true;
          break;
        }
      }
    }
  } else {
    console.log("❌ No cookies found");
  }
  console.log("\n📍 API Info: Using Admin API (/upload)");
  if (foundToken) {
    console.log("✅ Authentication token found - Upload should work");
  } else {
    console.log("❌ No auth token found - Please re-login to Strapi admin");
  }
}
if (typeof window !== "undefined") {
  window.debugStrapiAuth = debugStrapiAuth;
}
const ACCEPTABLE_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/svg+xml"
];
const UPLOAD_IMAGE_COMMAND = lexical.createCommand("UPLOAD_IMAGE_COMMAND");
function StrapiImageUploadPlugin({
  folder = "post"
}) {
  const [editor] = LexicalComposerContext.useLexicalComposerContext();
  const fileInputRef = React.useRef(null);
  const [isUploading, setIsUploading] = React.useState(false);
  React.useEffect(() => {
    return editor.registerCommand(
      richText.DRAG_DROP_PASTE,
      (files) => {
        handleFileUpload(files);
        return true;
      },
      lexical.COMMAND_PRIORITY_HIGH
    );
  }, [editor, folder]);
  React.useEffect(() => {
    return editor.registerCommand(
      lexical.PASTE_COMMAND,
      (event) => {
        const clipboardData = event.clipboardData;
        if (clipboardData && clipboardData.files.length > 0) {
          const files = Array.from(clipboardData.files);
          const imageFiles = files.filter(isValidImageFile);
          if (imageFiles.length > 0) {
            event.preventDefault();
            handleFileUpload(imageFiles);
            return true;
          }
        }
        return false;
      },
      lexical.COMMAND_PRIORITY_HIGH
    );
  }, [editor, folder]);
  React.useEffect(() => {
    return editor.registerCommand(
      UPLOAD_IMAGE_COMMAND,
      (files) => {
        handleFileUpload(files);
        return true;
      },
      lexical.COMMAND_PRIORITY_LOW
    );
  }, [editor, folder]);
  const handleFileUpload = async (files) => {
    const fileArray = Array.from(files);
    const imageFiles = fileArray.filter(isValidImageFile);
    if (imageFiles.length === 0) {
      console.warn("No valid image files found");
      return;
    }
    if (isUploading) {
      console.warn("Upload already in progress");
      return;
    }
    setIsUploading(true);
    try {
      console.log(`Uploading ${imageFiles.length} image(s)...`);
      const uploadedImages = await uploadMultipleImagesToStrapi(imageFiles, folder);
      uploadedImages.forEach((uploadedImage) => {
        const imagePayload = {
          documentId: uploadedImage.documentId,
          src: uploadedImage.url,
          caption: uploadedImage.alternativeText || uploadedImage.name.split(".")[0] || ""
        };
        editor.dispatchCommand(INSERT_STRAPI_IMAGE_COMMAND, imagePayload);
      });
      console.log(`Successfully uploaded ${uploadedImages.length} image(s)`);
    } catch (error) {
      console.error("Failed to upload images:", error);
      let errorMessage = "이미지 업로드에 실패했습니다.";
      if (error instanceof Error) {
        if (error.message.includes("413")) {
          errorMessage = "파일 크기가 너무 큽니다. 더 작은 이미지를 선택해주세요.";
        } else if (error.message.includes("401") || error.message.includes("403")) {
          errorMessage = "업로드 권한이 없습니다. 관리자에게 문의하세요.";
        } else if (error.message.includes("415")) {
          errorMessage = "지원하지 않는 파일 형식입니다.";
        }
      }
      alert(errorMessage);
    } finally {
      setIsUploading(false);
    }
  };
  const handleFileInputChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      handleFileUpload(files);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  const triggerFileInput = () => {
    if (isUploading) {
      console.warn("Upload in progress, please wait...");
      return;
    }
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  React.useEffect(() => {
    window.__strapiImageUploadTrigger = triggerFileInput;
    return () => {
      delete window.__strapiImageUploadTrigger;
    };
  }, [isUploading]);
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: /* @__PURE__ */ jsxRuntime.jsx(
    "input",
    {
      ref: fileInputRef,
      type: "file",
      accept: ACCEPTABLE_IMAGE_TYPES.join(","),
      multiple: true,
      style: { display: "none" },
      onChange: handleFileInputChange,
      disabled: isUploading
    }
  ) });
}
const triggerImageUpload = () => {
  if (window.__strapiImageUploadTrigger) {
    window.__strapiImageUploadTrigger();
  }
};
function DragDropPaste() {
  const [editor] = LexicalComposerContext.useLexicalComposerContext();
  React.useEffect(() => {
    return editor.registerCommand(
      richText.DRAG_DROP_PASTE,
      (files) => {
        const fileArray = Array.from(files);
        const imageFiles = fileArray.filter(isValidImageFile);
        if (imageFiles.length > 0) {
          editor.dispatchCommand(UPLOAD_IMAGE_COMMAND, imageFiles);
          return true;
        }
        return false;
      },
      lexical.COMMAND_PRIORITY_LOW
    );
  }, [editor]);
  return null;
}
const DRAGGABLE_BLOCK_MENU_CLASSNAME = "draggable-block-menu";
function isOnMenu(element) {
  return !!element.closest(`.${DRAGGABLE_BLOCK_MENU_CLASSNAME}`);
}
function DraggableBlockPlugin({
  anchorElem = document.body
}) {
  const menuRef = React.useRef(null);
  const targetLineRef = React.useRef(null);
  return /* @__PURE__ */ jsxRuntime.jsx(
    LexicalDraggableBlockPlugin.DraggableBlockPlugin_EXPERIMENTAL,
    {
      anchorElem,
      menuRef,
      targetLineRef,
      menuComponent: /* @__PURE__ */ jsxRuntime.jsx("div", { ref: menuRef, className: "icon draggable-block-menu", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "icon" }) }),
      targetLineComponent: /* @__PURE__ */ jsxRuntime.jsx("div", { ref: targetLineRef, className: "draggable-block-target-line" }),
      isOnMenu
    }
  );
}
class EmojiOption extends LexicalTypeaheadMenuPlugin.MenuOption {
  title;
  emoji;
  keywords;
  constructor(title, emoji, options) {
    super(title);
    this.title = title;
    this.emoji = emoji;
    this.keywords = options.keywords || [];
  }
}
function EmojiMenuItem({
  index,
  isSelected,
  onClick,
  onMouseEnter,
  option
}) {
  let className = "item";
  if (isSelected) {
    className += " selected";
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    "li",
    {
      tabIndex: -1,
      className,
      ref: option.setRefElement,
      role: "option",
      "aria-selected": isSelected,
      id: "typeahead-item-" + index,
      onMouseEnter,
      onClick,
      children: /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text", children: [
        option.emoji,
        " ",
        option.title
      ] })
    },
    option.key
  );
}
const MAX_EMOJI_SUGGESTION_COUNT = 10;
function EmojiPickerPlugin() {
  const [editor] = LexicalComposerContext.useLexicalComposerContext();
  const [queryString, setQueryString] = React.useState(null);
  const [emojis2, setEmojis] = React.useState([]);
  React.useEffect(() => {
    Promise.resolve().then(() => emojiList$1).then((file) => setEmojis(file.default));
  }, []);
  const emojiOptions = React.useMemo(
    () => emojis2 != null ? emojis2.map(
      ({ emoji, aliases, tags }) => new EmojiOption(aliases[0], emoji, {
        keywords: [...aliases, ...tags]
      })
    ) : [],
    [emojis2]
  );
  const checkForTriggerMatch = LexicalTypeaheadMenuPlugin.useBasicTypeaheadTriggerMatch(":", {
    minLength: 0
  });
  const options = React.useMemo(() => {
    return emojiOptions.filter((option) => {
      return queryString != null ? new RegExp(queryString, "gi").exec(option.title) || option.keywords != null ? option.keywords.some((keyword) => new RegExp(queryString, "gi").exec(keyword)) : false : emojiOptions;
    }).slice(0, MAX_EMOJI_SUGGESTION_COUNT);
  }, [emojiOptions, queryString]);
  const onSelectOption = React.useCallback(
    (selectedOption, nodeToRemove, closeMenu) => {
      editor.update(() => {
        const selection2 = lexical.$getSelection();
        if (!lexical.$isRangeSelection(selection2) || selectedOption == null) {
          return;
        }
        if (nodeToRemove) {
          nodeToRemove.remove();
        }
        selection2.insertNodes([lexical.$createTextNode(selectedOption.emoji)]);
        closeMenu();
      });
    },
    [editor]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(
    LexicalTypeaheadMenuPlugin.LexicalTypeaheadMenuPlugin,
    {
      onQueryChange: setQueryString,
      onSelectOption,
      triggerFn: checkForTriggerMatch,
      options,
      menuRenderFn: (anchorElementRef, { selectedIndex, selectOptionAndCleanUp, setHighlightedIndex }) => {
        if (anchorElementRef.current == null || options.length === 0) {
          return null;
        }
        return anchorElementRef.current && options.length ? ReactDOM__namespace.createPortal(
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "typeahead-popover emoji-menu", children: /* @__PURE__ */ jsxRuntime.jsx("ul", { children: options.map((option, index) => /* @__PURE__ */ jsxRuntime.jsx(
            EmojiMenuItem,
            {
              index,
              isSelected: selectedIndex === index,
              onClick: () => {
                setHighlightedIndex(index);
                selectOptionAndCleanUp(option);
              },
              onMouseEnter: () => {
                setHighlightedIndex(index);
              },
              option
            },
            option.key
          )) }) }),
          anchorElementRef.current
        ) : null;
      }
    }
  );
}
class EmojiNode extends lexical.TextNode {
  __className;
  static getType() {
    return "emoji";
  }
  static clone(node) {
    return new EmojiNode(node.__className, node.__text, node.__key);
  }
  constructor(className, text, key) {
    super(text, key);
    this.__className = className;
  }
  createDOM(config) {
    const dom = document.createElement("span");
    const inner = super.createDOM(config);
    dom.className = this.__className;
    inner.className = "emoji-inner";
    dom.appendChild(inner);
    return dom;
  }
  updateDOM(prevNode, dom, config) {
    const inner = dom.firstChild;
    if (inner === null) {
      return true;
    }
    super.updateDOM(prevNode, inner, config);
    return false;
  }
  static importJSON(serializedNode) {
    return $createEmojiNode(serializedNode.className, serializedNode.text).updateFromJSON(
      serializedNode
    );
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      className: this.getClassName()
    };
  }
  getClassName() {
    const self = this.getLatest();
    return self.__className;
  }
}
function $createEmojiNode(className, emojiText) {
  const node = new EmojiNode(className, emojiText).setMode("token");
  return lexical.$applyNodeReplacement(node);
}
const emojis = /* @__PURE__ */ new Map([
  [":)", ["emoji happysmile", "🙂"]],
  [":D", ["emoji veryhappysmile", "😀"]],
  [":(", ["emoji unhappysmile", "🙁"]],
  ["<3", ["emoji heart", "❤"]]
]);
function $findAndTransformEmoji(node) {
  const text = node.getTextContent();
  for (let i = 0; i < text.length; i++) {
    const emojiData = emojis.get(text[i]) || emojis.get(text.slice(i, i + 2));
    if (emojiData !== void 0) {
      const [emojiStyle, emojiText] = emojiData;
      let targetNode;
      if (i === 0) {
        [targetNode] = node.splitText(i + 2);
      } else {
        [, targetNode] = node.splitText(i, i + 2);
      }
      const emojiNode = $createEmojiNode(emojiStyle, emojiText);
      targetNode.replace(emojiNode);
      return emojiNode;
    }
  }
  return null;
}
function $textNodeTransform(node) {
  let targetNode = node;
  while (targetNode !== null) {
    if (!targetNode.isSimpleText()) {
      return;
    }
    targetNode = $findAndTransformEmoji(targetNode);
  }
}
function useEmojis(editor) {
  React.useEffect(() => {
    if (!editor.hasNodes([EmojiNode])) {
      throw new Error("EmojisPlugin: EmojiNode not registered on editor");
    }
    return editor.registerNodeTransform(lexical.TextNode, $textNodeTransform);
  }, [editor]);
}
function EmojisPlugin() {
  const [editor] = LexicalComposerContext.useLexicalComposerContext();
  useEmojis(editor);
  return null;
}
function getSelectedNode(selection$1) {
  const anchor = selection$1.anchor;
  const focus = selection$1.focus;
  const anchorNode = selection$1.anchor.getNode();
  const focusNode = selection$1.focus.getNode();
  if (anchorNode === focusNode) {
    return anchorNode;
  }
  const isBackward = selection$1.isBackward();
  if (isBackward) {
    return selection.$isAtNodeEnd(focus) ? anchorNode : focusNode;
  } else {
    return selection.$isAtNodeEnd(anchor) ? anchorNode : focusNode;
  }
}
const VERTICAL_GAP$1 = 10;
const HORIZONTAL_OFFSET$1 = 5;
function setFloatingElemPositionForLinkEditor(targetRect, floatingElem, anchorElem, verticalGap = VERTICAL_GAP$1, horizontalOffset = HORIZONTAL_OFFSET$1) {
  const scrollerElem = anchorElem.parentElement;
  if (targetRect === null || !scrollerElem) {
    floatingElem.style.opacity = "0";
    floatingElem.style.transform = "translate(-10000px, -10000px)";
    return;
  }
  const floatingElemRect = floatingElem.getBoundingClientRect();
  const anchorElementRect = anchorElem.getBoundingClientRect();
  const editorScrollerRect = scrollerElem.getBoundingClientRect();
  let top = targetRect.top - verticalGap;
  let left = targetRect.left - horizontalOffset;
  if (top < editorScrollerRect.top) {
    top += floatingElemRect.height + targetRect.height + verticalGap * 2;
  }
  if (left + floatingElemRect.width > editorScrollerRect.right) {
    left = editorScrollerRect.right - floatingElemRect.width - horizontalOffset;
  }
  top -= anchorElementRect.top;
  left -= anchorElementRect.left;
  floatingElem.style.opacity = "1";
  floatingElem.style.transform = `translate(${left}px, ${top}px)`;
}
const SUPPORTED_URL_PROTOCOLS = /* @__PURE__ */ new Set([
  "strapi:",
  "http:",
  "https:",
  "mailto:",
  "sms:",
  "tel:",
  "ws:",
  "wss:",
  "geo:",
  "maps:",
  "whatsapp:",
  "facetime:",
  "facetime-audio:",
  "skype:",
  "sip:",
  "sips:"
]);
function sanitizeUrl(url) {
  try {
    const parsedUrl = new URL(url);
    if (!SUPPORTED_URL_PROTOCOLS.has(parsedUrl.protocol)) {
      return "about:blank";
    }
  } catch {
    return url;
  }
  return url;
}
const urlRegExp = new RegExp(
  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/
);
function validateUrl(url) {
  return url === "https://" || urlRegExp.test(url);
}
const highlightText = (text, q) => {
  if (!q.trim().length) return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: text });
  const regex = new RegExp(`(${q})`, "gi");
  const parts = text.split(regex);
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: parts.map(
    (part, index) => part.toLowerCase() === q.toLowerCase() ? /* @__PURE__ */ jsxRuntime.jsx("strong", { children: part }, index) : part
  ) });
};
const linkRegex = /^(https?|ftp|mailto|tel|ws|wss|sms|geo|maps|whatsapp|facetime|facetime-audio|skype|sip|sips):\/\/?/i;
const LinkModal = ({
  fieldName,
  currentValue,
  setValue,
  open,
  setOpen
}) => {
  const { locale, formatMessage } = reactIntl.useIntl();
  const { get } = admin.useFetchClient();
  const { model } = admin.unstable_useContentManagerContext();
  const currentType = React__namespace.useMemo(
    () => currentValue.startsWith("strapi://") ? "internal" : "external",
    [currentValue]
  );
  const defaultTab = React__namespace.useMemo(
    () => currentType === "external" && currentValue.length ? "external" : "internal",
    [currentValue, currentType]
  );
  const [activeTab, setActiveTab] = React__namespace.useState(defaultTab);
  const [searchResults, setSearchResults] = React__namespace.useState([]);
  const [q, setQ] = React__namespace.useState("");
  React__namespace.useEffect(() => {
    const loadCurrentSelected = async (currentSelectedItem) => {
      try {
        const resultCurrentItem = await get(`/lexical/get/${currentSelectedItem}`);
        if (resultCurrentItem.data) {
          setSearchResults([resultCurrentItem.data]);
          return;
        }
      } catch (err) {
        console.log("Failed to load selected item:");
        console.error(err);
      }
      setSearchResults([]);
    };
    if (currentValue.startsWith("strapi://")) {
      loadCurrentSelected(currentValue.replace("strapi://", ""));
    }
  }, [currentValue]);
  const handleSearch = React__namespace.useCallback(async (e) => {
    const userQuery = e.target.value.trim();
    if (userQuery.length) {
      setQ(userQuery);
      try {
        const resultSearchLinkables = await get(
          `/lexical/search/${model}/${fieldName}?q=${userQuery}&locale=${locale}`
        );
        if (resultSearchLinkables.status && resultSearchLinkables.status !== 200) {
          throw new Error(`Search failed:
${JSON.stringify(resultSearchLinkables.data, null, 2)}`);
        }
        setSearchResults(resultSearchLinkables.data);
        return;
      } catch (err) {
        console.error(err);
      }
    }
    setSearchResults([]);
  }, []);
  const [internalError, setInternalError] = React__namespace.useState("");
  const [externalError, setExternalError] = React__namespace.useState("");
  const onSubmitCb = React__namespace.useCallback(
    (e) => {
      const formData = new FormData(e.currentTarget);
      const value = formData.get(activeTab)?.toString();
      if (activeTab === "internal" && !value) {
        setInternalError("Please select an internal content item to link to.");
        return;
      }
      if (activeTab === "external") {
        if (!value || !value.trim().length) {
          setExternalError("Please enter a valid URL or URI.");
          return;
        }
        if (!value.match(linkRegex)) {
          setExternalError(
            "Invalid URL or URI. Ensure it starts with 'https://', 'mailto:', or another supported protocol."
          );
          return;
        }
      }
      if (!value) {
        console.error("This shouldn't happen!", { activeTab, value });
        return;
      }
      setInternalError("");
      setExternalError("");
      setValue(value.toString());
    },
    [activeTab, setValue, setInternalError, externalError]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Modal.Root, { open, onOpenChange: setOpen, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Modal.Content, { children: /* @__PURE__ */ jsxRuntime.jsxs("form", { onSubmit: onSubmitCb, children: [
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Modal.Header, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Modal.Title, { children: formatMessage({
      id: "lexical.components.link-modal.title",
      defaultMessage: "Link Content"
    }) }) }),
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Tabs.Root, { defaultValue: defaultTab, onValueChange: setActiveTab, children: [
      /* @__PURE__ */ jsxRuntime.jsxs(
        designSystem.Tabs.List,
        {
          "aria-label": formatMessage({
            id: "lexical.components.link-modal.tab-list.aria-label",
            defaultMessage: "Do you want to link internal or external content?"
          }),
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Tabs.Trigger, { value: "internal", children: formatMessage({
              id: "lexical.components.link-modal.tabs.title.internal-link",
              defaultMessage: "Internal Link"
            }) }),
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Tabs.Trigger, { value: "external", children: formatMessage({
              id: "lexical.components.link-modal.tabs.title.external-link",
              defaultMessage: "External Link"
            }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Tabs.Content, { value: "internal", children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { padding: 4, style: { minHeight: "60vh", overflowY: "scroll" }, children: [
        /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Field.Root, { error: internalError, onChange: handleSearch, required: true, children: [
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Field.Label, { children: formatMessage({
            id: "lexical.components.link-modal.tabs.content.internal.label",
            defaultMessage: "Search for content within Strapi to link to"
          }) }),
          /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.Field.Input,
            {
              type: "search",
              placeholder: formatMessage({
                id: "lexical.components.link-modal.tabs.content.internal.placeholder",
                defaultMessage: "Search..."
              }),
              size: "M"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Field.Error, {})
        ] }),
        searchResults.length > 0 && /* @__PURE__ */ jsxRuntime.jsx(
          designSystem.Radio.Group,
          {
            name: "internal",
            defaultValue: currentType === "internal" ? currentValue : void 0,
            children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Table, { colCount: 2, rowCount: 1, style: { marginTop: "0.5rem" }, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Tbody, { children: searchResults.map((result) => /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Tr, { children: [
              /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(
                designSystem.Radio.Item,
                {
                  value: `strapi://${result.collectionName}/${result.documentId}`,
                  id: result.documentId
                }
              ) }),
              /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx("label", { htmlFor: result.documentId, children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { children: [
                highlightText(result.label, q),
                " (",
                result.collectionName,
                ":",
                result.id,
                ")"
              ] }) }) })
            ] }, result.documentId)) }) })
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Tabs.Content, { value: "external", children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { padding: 4, style: { minHeight: "60vh", overflowY: "scroll" }, children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Field.Root, { error: externalError, name: "external", required: true, children: [
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Field.Label, { children: formatMessage({
          id: "lexical.components.link-modal.tabs.content.external.label",
          defaultMessage: "Enter URI to external content"
        }) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          designSystem.Field.Input,
          {
            placeholder: formatMessage({
              id: "lexical.components.link-modal.tabs.content.external.placeholder",
              defaultMessage: "Enter external URL..."
            }),
            size: "M",
            type: "url",
            defaultValue: currentType === "external" ? currentValue : ""
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Field.Error, {})
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Modal.Footer, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Modal.Close, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { variant: "tertiary", onClick: () => setOpen(false), children: formatMessage({
        id: "lexical.components.link-modal.button.cancel",
        defaultMessage: "Cancel"
      }) }) }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { type: "submit", children: formatMessage({
        id: "lexical.components.link-modal.button.set-link",
        defaultMessage: "Set Link"
      }) })
    ] })
  ] }) }) });
};
function preventDefault(event) {
  event.preventDefault();
}
function FloatingLinkEditor({
  editor,
  isLink,
  setIsLink,
  anchorElem,
  isLinkEditMode,
  setIsLinkEditMode,
  fieldName
}) {
  const { get } = admin.useFetchClient();
  const editorRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const [linkUrl, setLinkUrl] = React.useState("");
  const [editedLinkUrl, setEditedLinkUrl] = React.useState("https://");
  const [lastSelection, setLastSelection] = React.useState(null);
  const $updateLinkEditor = React.useCallback(() => {
    const selection2 = lexical.$getSelection();
    if (lexical.$isRangeSelection(selection2)) {
      const node = getSelectedNode(selection2);
      const linkParent = utils.$findMatchingParent(node, link.$isLinkNode);
      if (linkParent) {
        setLinkUrl(linkParent.getURL());
      } else if (link.$isLinkNode(node)) {
        setLinkUrl(node.getURL());
      } else {
        setLinkUrl("");
      }
      if (isLinkEditMode) {
        setEditedLinkUrl(linkUrl);
      }
    }
    const editorElem = editorRef.current;
    const nativeSelection = lexical.getDOMSelection(editor._window);
    const activeElement = document.activeElement;
    if (editorElem === null) {
      return;
    }
    const rootElement = editor.getRootElement();
    if (selection2 !== null && nativeSelection !== null && rootElement !== null && rootElement.contains(nativeSelection.anchorNode) && editor.isEditable()) {
      const domRect = nativeSelection.focusNode?.parentElement?.getBoundingClientRect();
      if (domRect) {
        domRect.y += 40;
        setFloatingElemPositionForLinkEditor(domRect, editorElem, anchorElem);
      }
      setLastSelection(selection2);
    } else if (!activeElement || activeElement.className !== "link-input") {
      if (rootElement !== null) {
        setFloatingElemPositionForLinkEditor(null, editorElem, anchorElem);
      }
      setLastSelection(null);
      setIsLinkEditMode(false);
      setLinkUrl("");
    }
    return true;
  }, [anchorElem, editor, setIsLinkEditMode, isLinkEditMode, linkUrl]);
  React.useEffect(() => {
    const scrollerElem = anchorElem.parentElement;
    const update = () => {
      editor.getEditorState().read(() => {
        $updateLinkEditor();
      });
    };
    window.addEventListener("resize", update);
    if (scrollerElem) {
      scrollerElem.addEventListener("scroll", update);
    }
    return () => {
      window.removeEventListener("resize", update);
      if (scrollerElem) {
        scrollerElem.removeEventListener("scroll", update);
      }
    };
  }, [anchorElem.parentElement, editor, $updateLinkEditor]);
  React.useEffect(() => {
    return utils.mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          $updateLinkEditor();
        });
      }),
      editor.registerCommand(
        lexical.SELECTION_CHANGE_COMMAND,
        () => {
          $updateLinkEditor();
          return true;
        },
        lexical.COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        lexical.KEY_ESCAPE_COMMAND,
        () => {
          if (isLink) {
            setIsLink(false);
            return true;
          }
          return false;
        },
        lexical.COMMAND_PRIORITY_HIGH
      )
    );
  }, [editor, $updateLinkEditor, setIsLink, isLink]);
  React.useEffect(() => {
    editor.getEditorState().read(() => {
      $updateLinkEditor();
    });
  }, [editor, $updateLinkEditor]);
  React.useEffect(() => {
    if (isLinkEditMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isLinkEditMode, isLink]);
  const handleLinkSubmission = (newValue) => {
    if (lastSelection !== null) {
      if (newValue !== "") {
        setEditedLinkUrl(newValue);
        editor.update(() => {
          editor.dispatchCommand(link.TOGGLE_LINK_COMMAND, sanitizeUrl(newValue));
          const selection2 = lexical.$getSelection();
          if (lexical.$isRangeSelection(selection2)) {
            const parent = getSelectedNode(selection2).getParent();
            if (link.$isAutoLinkNode(parent)) {
              const linkNode = link.$createLinkNode(parent.getURL(), {
                rel: parent.__rel,
                target: parent.__target,
                title: parent.__title
              });
              parent.replace(linkNode, true);
            }
          }
          setLinkUrl(newValue);
        });
      }
      setIsLinkEditMode(false);
    }
  };
  const [linkHref, setLinkHref] = React__namespace.useState("about:blank");
  React__namespace.useEffect(() => {
    const findStrapiLink = async (strapiURI) => {
      const [collectionName, documentId] = strapiURI.replace("strapi://", "").split("/");
      try {
        const resultIdentify = await get(`/lexical/identify/${collectionName}`);
        setLinkHref(
          `/admin/content-manager/collection-types/${resultIdentify.data.collectionUID}/${documentId}`
        );
      } catch (err) {
        console.info(`Unable to identify this public collection name: ${collectionName}`);
        console.error(err);
      }
    };
    const sanitized = sanitizeUrl(linkUrl);
    if (sanitized.indexOf("strapi://") === 0) {
      findStrapiLink(sanitized);
      return;
    }
    setLinkHref(sanitized);
  }, [linkUrl]);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ref: editorRef, className: "link-editor", children: !isLink ? null : isLinkEditMode ? /* @__PURE__ */ jsxRuntime.jsx(
    LinkModal,
    {
      open: isLinkEditMode,
      setOpen: (v) => !v && setIsLinkEditMode(false),
      fieldName,
      currentValue: editedLinkUrl,
      setValue: handleLinkSubmission
    }
  ) : /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "link-view", children: [
    /* @__PURE__ */ jsxRuntime.jsx("a", { href: linkHref, target: "_blank", rel: "noopener noreferrer", children: linkUrl }),
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: "link-edit",
        role: "button",
        tabIndex: 0,
        onMouseDown: preventDefault,
        onClick: (event) => {
          event.preventDefault();
          setEditedLinkUrl(linkUrl);
          setIsLinkEditMode(true);
        }
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: "link-trash",
        role: "button",
        tabIndex: 0,
        onMouseDown: preventDefault,
        onClick: () => {
          editor.dispatchCommand(link.TOGGLE_LINK_COMMAND, null);
        }
      }
    )
  ] }) });
}
function useFloatingLinkEditorToolbar(editor, anchorElem, isLinkEditMode, setIsLinkEditMode, fieldName) {
  const [activeEditor, setActiveEditor] = React.useState(editor);
  const [isLink, setIsLink] = React.useState(false);
  React.useEffect(() => {
    function $updateToolbar() {
      const selection2 = lexical.$getSelection();
      if (lexical.$isRangeSelection(selection2)) {
        const focusNode = getSelectedNode(selection2);
        const focusLinkNode = utils.$findMatchingParent(focusNode, link.$isLinkNode);
        const focusAutoLinkNode = utils.$findMatchingParent(focusNode, link.$isAutoLinkNode);
        if (!(focusLinkNode || focusAutoLinkNode)) {
          setIsLink(false);
          return;
        }
        const badNode = selection2.getNodes().filter((node) => !lexical.$isLineBreakNode(node)).find((node) => {
          const linkNode = utils.$findMatchingParent(node, link.$isLinkNode);
          const autoLinkNode = utils.$findMatchingParent(node, link.$isAutoLinkNode);
          return focusLinkNode && !focusLinkNode.is(linkNode) || linkNode && !linkNode.is(focusLinkNode) || focusAutoLinkNode && !focusAutoLinkNode.is(autoLinkNode) || autoLinkNode && (!autoLinkNode.is(focusAutoLinkNode) || autoLinkNode.getIsUnlinked());
        });
        if (!badNode) {
          setIsLink(true);
        } else {
          setIsLink(false);
        }
      }
    }
    return utils.mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          $updateToolbar();
        });
      }),
      editor.registerCommand(
        lexical.SELECTION_CHANGE_COMMAND,
        (_payload, newEditor) => {
          $updateToolbar();
          setActiveEditor(newEditor);
          return false;
        },
        lexical.COMMAND_PRIORITY_CRITICAL
      ),
      editor.registerCommand(
        lexical.CLICK_COMMAND,
        (payload) => {
          const selection2 = lexical.$getSelection();
          if (lexical.$isRangeSelection(selection2)) {
            const node = getSelectedNode(selection2);
            const linkNode = utils.$findMatchingParent(node, link.$isLinkNode);
            if (link.$isLinkNode(linkNode) && (payload.metaKey || payload.ctrlKey)) {
              window.open(linkNode.getURL(), "_blank");
              return true;
            }
          }
          return false;
        },
        lexical.COMMAND_PRIORITY_LOW
      )
    );
  }, [editor]);
  return ReactDOM.createPortal(
    /* @__PURE__ */ jsxRuntime.jsx(
      FloatingLinkEditor,
      {
        editor: activeEditor,
        isLink,
        anchorElem,
        setIsLink,
        isLinkEditMode,
        setIsLinkEditMode,
        fieldName
      }
    ),
    anchorElem
  );
}
function FloatingLinkEditorPlugin({
  anchorElem = document.body,
  isLinkEditMode,
  setIsLinkEditMode,
  fieldName
}) {
  const [editor] = LexicalComposerContext.useLexicalComposerContext();
  return useFloatingLinkEditorToolbar(
    editor,
    anchorElem,
    isLinkEditMode,
    setIsLinkEditMode,
    fieldName
  );
}
function getDOMRangeRect(nativeSelection, rootElement) {
  const domRange = nativeSelection.getRangeAt(0);
  let rect;
  if (nativeSelection.anchorNode === rootElement) {
    let inner = rootElement;
    while (inner.firstElementChild != null) {
      inner = inner.firstElementChild;
    }
    rect = inner.getBoundingClientRect();
  } else {
    rect = domRange.getBoundingClientRect();
  }
  return rect;
}
const VERTICAL_GAP = 10;
const HORIZONTAL_OFFSET = 5;
function setFloatingElemPosition(targetRect, floatingElem, anchorElem, isLink = false, verticalGap = VERTICAL_GAP, horizontalOffset = HORIZONTAL_OFFSET) {
  const scrollerElem = anchorElem.parentElement;
  if (targetRect === null || !scrollerElem) {
    floatingElem.style.opacity = "0";
    floatingElem.style.transform = "translate(-10000px, -10000px)";
    return;
  }
  const floatingElemRect = floatingElem.getBoundingClientRect();
  const anchorElementRect = anchorElem.getBoundingClientRect();
  const editorScrollerRect = scrollerElem.getBoundingClientRect();
  let top = targetRect.top - floatingElemRect.height - verticalGap;
  let left = targetRect.left - horizontalOffset;
  if (top < editorScrollerRect.top) {
    top += floatingElemRect.height + targetRect.height + verticalGap * (isLink ? 9 : 2);
  }
  if (left + floatingElemRect.width > editorScrollerRect.right) {
    left = editorScrollerRect.right - floatingElemRect.width - horizontalOffset;
  }
  top -= anchorElementRect.top;
  left -= anchorElementRect.left;
  floatingElem.style.opacity = "1";
  floatingElem.style.transform = `translate(${left}px, ${top}px)`;
}
function TextFormatFloatingToolbar({
  editor,
  anchorElem,
  isLink,
  isBold,
  isItalic,
  isUnderline,
  isUppercase: isUppercase2,
  isLowercase: isLowercase2,
  isCapitalize: isCapitalize2,
  isCode,
  isStrikethrough,
  isSubscript: isSubscript2,
  isSuperscript: isSuperscript2,
  setIsLinkEditMode
}) {
  const { formatMessage } = reactIntl.useIntl();
  const popupCharStylesEditorRef = React.useRef(null);
  const insertLink = React.useCallback(() => {
    if (!isLink) {
      setIsLinkEditMode(true);
      editor.dispatchCommand(link.TOGGLE_LINK_COMMAND, "https://");
    } else {
      setIsLinkEditMode(false);
      editor.dispatchCommand(link.TOGGLE_LINK_COMMAND, null);
    }
  }, [editor, isLink, setIsLinkEditMode]);
  function mouseMoveListener(e) {
    if (popupCharStylesEditorRef?.current && (e.buttons === 1 || e.buttons === 3)) {
      if (popupCharStylesEditorRef.current.style.pointerEvents !== "none") {
        const x = e.clientX;
        const y = e.clientY;
        const elementUnderMouse = document.elementFromPoint(x, y);
        if (!popupCharStylesEditorRef.current.contains(elementUnderMouse)) {
          popupCharStylesEditorRef.current.style.pointerEvents = "none";
        }
      }
    }
  }
  function mouseUpListener(e) {
    if (popupCharStylesEditorRef?.current) {
      if (popupCharStylesEditorRef.current.style.pointerEvents !== "auto") {
        popupCharStylesEditorRef.current.style.pointerEvents = "auto";
      }
    }
  }
  React.useEffect(() => {
    if (popupCharStylesEditorRef?.current) {
      document.addEventListener("mousemove", mouseMoveListener);
      document.addEventListener("mouseup", mouseUpListener);
      return () => {
        document.removeEventListener("mousemove", mouseMoveListener);
        document.removeEventListener("mouseup", mouseUpListener);
      };
    }
  }, [popupCharStylesEditorRef]);
  const $updateTextFormatFloatingToolbar = React.useCallback(() => {
    const selection2 = lexical.$getSelection();
    const popupCharStylesEditorElem = popupCharStylesEditorRef.current;
    const nativeSelection = lexical.getDOMSelection(editor._window);
    if (popupCharStylesEditorElem === null) {
      return;
    }
    const rootElement = editor.getRootElement();
    if (selection2 !== null && nativeSelection !== null && !nativeSelection.isCollapsed && rootElement !== null && rootElement.contains(nativeSelection.anchorNode)) {
      const rangeRect = getDOMRangeRect(nativeSelection, rootElement);
      setFloatingElemPosition(rangeRect, popupCharStylesEditorElem, anchorElem, isLink);
    }
  }, [editor, anchorElem, isLink]);
  React.useEffect(() => {
    const scrollerElem = anchorElem.parentElement;
    const update = () => {
      editor.getEditorState().read(() => {
        $updateTextFormatFloatingToolbar();
      });
    };
    window.addEventListener("resize", update);
    if (scrollerElem) {
      scrollerElem.addEventListener("scroll", update);
    }
    return () => {
      window.removeEventListener("resize", update);
      if (scrollerElem) {
        scrollerElem.removeEventListener("scroll", update);
      }
    };
  }, [editor, $updateTextFormatFloatingToolbar, anchorElem]);
  React.useEffect(() => {
    editor.getEditorState().read(() => {
      $updateTextFormatFloatingToolbar();
    });
    return utils.mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          $updateTextFormatFloatingToolbar();
        });
      }),
      editor.registerCommand(
        lexical.SELECTION_CHANGE_COMMAND,
        () => {
          $updateTextFormatFloatingToolbar();
          return false;
        },
        lexical.COMMAND_PRIORITY_LOW
      )
    );
  }, [editor, $updateTextFormatFloatingToolbar]);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ref: popupCharStylesEditorRef, className: "floating-text-format-popup", children: editor.isEditable() && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "button",
      {
        type: "button",
        onClick: () => {
          editor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, "bold");
        },
        className: "popup-item spaced " + (isBold ? "active" : ""),
        title: formatMessage({
          id: "lexical.plugin.format.bold.title",
          defaultMessage: "Bold"
        }),
        "aria-label": formatMessage({
          id: "lexical.plugin.format.bold.aria",
          defaultMessage: "Format text as bold"
        }),
        children: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "format bold" })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "button",
      {
        type: "button",
        onClick: () => {
          editor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, "italic");
        },
        className: "popup-item spaced " + (isItalic ? "active" : ""),
        title: formatMessage({
          id: "lexical.plugin.format.italic.title",
          defaultMessage: "Italic"
        }),
        "aria-label": formatMessage({
          id: "lexical.plugin.format.italic.aria",
          defaultMessage: "Format text as italics"
        }),
        children: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "format italic" })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "button",
      {
        type: "button",
        onClick: () => {
          editor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, "underline");
        },
        className: "popup-item spaced " + (isUnderline ? "active" : ""),
        title: formatMessage({
          id: "lexical.plugin.format.underline.title",
          defaultMessage: "Underline"
        }),
        "aria-label": formatMessage({
          id: "lexical.plugin.format.underline.aria",
          defaultMessage: "Format text to underlined"
        }),
        children: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "format underline" })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "button",
      {
        type: "button",
        onClick: () => {
          editor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, "strikethrough");
        },
        className: "popup-item spaced " + (isStrikethrough ? "active" : ""),
        title: formatMessage({
          id: "lexical.plugin.format.strikethrough.title",
          defaultMessage: "Strikethrough"
        }),
        "aria-label": formatMessage({
          id: "lexical.plugin.format.strikethrough.aria",
          defaultMessage: "Format text with a strikethrough"
        }),
        children: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "format strikethrough" })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "button",
      {
        type: "button",
        onClick: () => {
          editor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, "subscript");
        },
        className: "popup-item spaced " + (isSubscript2 ? "active" : ""),
        title: formatMessage({
          id: "lexical.plugin.format.subscript.title",
          defaultMessage: "Subscript"
        }),
        "aria-label": formatMessage({
          id: "lexical.plugin.format.subscript.aria",
          defaultMessage: "Format Subscript"
        }),
        children: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "format subscript" })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "button",
      {
        type: "button",
        onClick: () => {
          editor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, "superscript");
        },
        className: "popup-item spaced " + (isSuperscript2 ? "active" : ""),
        title: formatMessage({
          id: "lexical.plugin.format.superscript.title",
          defaultMessage: "Superscript"
        }),
        "aria-label": formatMessage({
          id: "lexical.plugin.format.superscript.aria",
          defaultMessage: "Format Superscript"
        }),
        children: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "format superscript" })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "button",
      {
        type: "button",
        onClick: () => {
          editor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, "uppercase");
        },
        className: "popup-item spaced " + (isUppercase2 ? "active" : ""),
        title: formatMessage({
          id: "lexical.plugin.format.uppercase.title",
          defaultMessage: "Uppercase"
        }),
        "aria-label": formatMessage({
          id: "lexical.plugin.format.uppercase.aria",
          defaultMessage: "Format text to uppercase"
        }),
        children: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "format uppercase" })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "button",
      {
        type: "button",
        onClick: () => {
          editor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, "lowercase");
        },
        className: "popup-item spaced " + (isLowercase2 ? "active" : ""),
        title: formatMessage({
          id: "lexical.plugin.format.lowercase.title",
          defaultMessage: "Lowercase"
        }),
        "aria-label": formatMessage({
          id: "lexical.plugin.format.lowercase.aria",
          defaultMessage: "Format text to lowercase"
        }),
        children: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "format lowercase" })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "button",
      {
        type: "button",
        onClick: () => {
          editor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, "capitalize");
        },
        className: "popup-item spaced " + (isCapitalize2 ? "active" : ""),
        title: formatMessage({
          id: "lexical.plugin.format.capitalize.title",
          defaultMessage: "Capitalize"
        }),
        "aria-label": formatMessage({
          id: "lexical.plugin.format.capitalize.aria",
          defaultMessage: "Format text to capitalize"
        }),
        children: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "format capitalize" })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "button",
      {
        type: "button",
        onClick: () => {
          editor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, "code");
        },
        className: "popup-item spaced " + (isCode ? "active" : ""),
        title: formatMessage({
          id: "lexical.plugin.format.code.title",
          defaultMessage: "Insert code block"
        }),
        "aria-label": formatMessage({
          id: "lexical.plugin.format.code.aria",
          defaultMessage: "Insert code block"
        }),
        children: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "format code" })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "button",
      {
        type: "button",
        onClick: insertLink,
        className: "popup-item spaced " + (isLink ? "active" : ""),
        title: formatMessage({
          id: "lexical.plugin.format.link.title",
          defaultMessage: "Insert link"
        }),
        "aria-label": formatMessage({
          id: "lexical.plugin.format.link.aria",
          defaultMessage: "Insert link"
        }),
        children: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "format link" })
      }
    )
  ] }) });
}
function useFloatingTextFormatToolbar(editor, anchorElem, setIsLinkEditMode) {
  const [isText, setIsText] = React.useState(false);
  const [isLink, setIsLink] = React.useState(false);
  const [isBold, setIsBold] = React.useState(false);
  const [isItalic, setIsItalic] = React.useState(false);
  const [isUnderline, setIsUnderline] = React.useState(false);
  const [isUppercase2, setIsUppercase] = React.useState(false);
  const [isLowercase2, setIsLowercase] = React.useState(false);
  const [isCapitalize2, setIsCapitalize] = React.useState(false);
  const [isStrikethrough, setIsStrikethrough] = React.useState(false);
  const [isSubscript2, setIsSubscript] = React.useState(false);
  const [isSuperscript2, setIsSuperscript] = React.useState(false);
  const [isCode, setIsCode] = React.useState(false);
  const updatePopup = React.useCallback(() => {
    editor.getEditorState().read(() => {
      if (editor.isComposing()) {
        return;
      }
      const selection2 = lexical.$getSelection();
      const nativeSelection = lexical.getDOMSelection(editor._window);
      const rootElement = editor.getRootElement();
      if (nativeSelection !== null && (!lexical.$isRangeSelection(selection2) || rootElement === null || !rootElement.contains(nativeSelection.anchorNode))) {
        setIsText(false);
        return;
      }
      if (!lexical.$isRangeSelection(selection2)) {
        return;
      }
      const node = getSelectedNode(selection2);
      setIsBold(selection2.hasFormat("bold"));
      setIsItalic(selection2.hasFormat("italic"));
      setIsUnderline(selection2.hasFormat("underline"));
      setIsUppercase(selection2.hasFormat("uppercase"));
      setIsLowercase(selection2.hasFormat("lowercase"));
      setIsCapitalize(selection2.hasFormat("capitalize"));
      setIsStrikethrough(selection2.hasFormat("strikethrough"));
      setIsSubscript(selection2.hasFormat("subscript"));
      setIsSuperscript(selection2.hasFormat("superscript"));
      setIsCode(selection2.hasFormat("code"));
      const parent = node.getParent();
      if (link.$isLinkNode(parent) || link.$isLinkNode(node)) {
        setIsLink(true);
      } else {
        setIsLink(false);
      }
      if (!code.$isCodeHighlightNode(selection2.anchor.getNode()) && selection2.getTextContent() !== "") {
        setIsText(lexical.$isTextNode(node) || lexical.$isParagraphNode(node));
      } else {
        setIsText(false);
      }
      const rawTextContent = selection2.getTextContent().replace(/\n/g, "");
      if (!selection2.isCollapsed() && rawTextContent === "") {
        setIsText(false);
        return;
      }
    });
  }, [editor]);
  React.useEffect(() => {
    document.addEventListener("selectionchange", updatePopup);
    return () => {
      document.removeEventListener("selectionchange", updatePopup);
    };
  }, [updatePopup]);
  React.useEffect(() => {
    return utils.mergeRegister(
      editor.registerUpdateListener(() => {
        updatePopup();
      }),
      editor.registerRootListener(() => {
        if (editor.getRootElement() === null) {
          setIsText(false);
        }
      })
    );
  }, [editor, updatePopup]);
  if (!isText) {
    return null;
  }
  return ReactDOM.createPortal(
    /* @__PURE__ */ jsxRuntime.jsx(
      TextFormatFloatingToolbar,
      {
        editor,
        anchorElem,
        isLink,
        isBold,
        isItalic,
        isUppercase: isUppercase2,
        isLowercase: isLowercase2,
        isCapitalize: isCapitalize2,
        isStrikethrough,
        isSubscript: isSubscript2,
        isSuperscript: isSuperscript2,
        isUnderline,
        isCode,
        setIsLinkEditMode
      }
    ),
    anchorElem
  );
}
function FloatingTextFormatToolbarPlugin({
  anchorElem = document.body,
  setIsLinkEditMode
}) {
  const [editor] = LexicalComposerContext.useLexicalComposerContext();
  return useFloatingTextFormatToolbar(editor, anchorElem, setIsLinkEditMode);
}
class KeywordNode extends lexical.TextNode {
  static getType() {
    return "keyword";
  }
  static clone(node) {
    return new KeywordNode(node.__text, node.__key);
  }
  static importJSON(serializedNode) {
    return $createKeywordNode().updateFromJSON(serializedNode);
  }
  createDOM(config) {
    const dom = super.createDOM(config);
    dom.style.cursor = "default";
    dom.className = "keyword";
    return dom;
  }
  canInsertTextBefore() {
    return false;
  }
  canInsertTextAfter() {
    return false;
  }
  isTextEntity() {
    return true;
  }
}
function $createKeywordNode(keyword = "") {
  return lexical.$applyNodeReplacement(new KeywordNode(keyword));
}
const KEYWORDS_REGEX = /(^|$|[^A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ])(congrats|congratulations|gratuluju|gratuluji|gratulujeme|blahopřeju|blahopřeji|blahopřejeme|Til lykke|Tillykke|Glückwunsch|Gratuliere|felicitaciones|enhorabuena|paljon onnea|onnittelut|Félicitations|gratula|gratulálok|gratulálunk|congratulazioni|complimenti|おめでとう|おめでとうございます|축하해|축하해요|gratulerer|Gefeliciteerd|gratulacje|Parabéns|parabéns|felicitações|felicitări|мои поздравления|поздравляем|поздравляю|gratulujem|blahoželám|ยินดีด้วย|ขอแสดงความยินดี|tebrikler|tebrik ederim|恭喜|祝贺你|恭喜你|恭喜|恭喜|baie geluk|veels geluk|অভিনন্দন|Čestitam|Čestitke|Čestitamo|Συγχαρητήρια|Μπράβο|અભિનંદન|badhai|बधाई|अभिनंदन|Честитам|Свака част|hongera|வாழ்த்துகள்|வாழ்த்துக்கள்|అభినందనలు|അഭിനന്ദനങ്ങൾ|Chúc mừng|מזל טוב|mazel tov|mazal tov)(^|$|[^A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ])/i;
function KeywordsPlugin() {
  const [editor] = LexicalComposerContext.useLexicalComposerContext();
  React.useEffect(() => {
    if (!editor.hasNodes([KeywordNode])) {
      throw new Error("KeywordsPlugin: KeywordNode not registered on editor");
    }
  }, [editor]);
  const $createKeywordNode_ = React.useCallback((textNode) => {
    return $createKeywordNode(textNode.getTextContent());
  }, []);
  const getKeywordMatch = React.useCallback((text) => {
    const matchArr = KEYWORDS_REGEX.exec(text);
    if (matchArr === null) {
      return null;
    }
    const hashtagLength = matchArr[2].length;
    const startOffset = matchArr.index + matchArr[1].length;
    const endOffset = startOffset + hashtagLength;
    return {
      end: endOffset,
      start: startOffset
    };
  }, []);
  useLexicalTextEntity.useLexicalTextEntity(getKeywordMatch, KeywordNode, $createKeywordNode_);
  return null;
}
function LinkPlugin({ hasLinkAttributes = false }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    LexicalLinkPlugin.LinkPlugin,
    {
      validateUrl,
      attributes: hasLinkAttributes ? {
        rel: "noopener noreferrer",
        target: "_blank"
      } : void 0
    }
  );
}
const EquationComponent = React__namespace.lazy(() => Promise.resolve().then(() => require("./EquationComponent-R3vMfIH7.js")));
function $convertEquationElement(domNode) {
  let equation = domNode.getAttribute("data-lexical-equation");
  const inline = domNode.getAttribute("data-lexical-inline") === "true";
  equation = atob(equation || "");
  if (equation) {
    const node = $createEquationNode(equation, inline);
    return { node };
  }
  return null;
}
class EquationNode extends lexical.DecoratorNode {
  __equation;
  __inline;
  static getType() {
    return "equation";
  }
  static clone(node) {
    return new EquationNode(node.__equation, node.__inline, node.__key);
  }
  constructor(equation, inline, key) {
    super(key);
    this.__equation = equation;
    this.__inline = inline ?? false;
  }
  static importJSON(serializedNode) {
    return $createEquationNode(serializedNode.equation, serializedNode.inline).updateFromJSON(
      serializedNode
    );
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      equation: this.getEquation(),
      inline: this.__inline
    };
  }
  createDOM(_config) {
    const element = document.createElement(this.__inline ? "span" : "div");
    element.className = "editor-equation";
    return element;
  }
  exportDOM() {
    const element = document.createElement(this.__inline ? "span" : "div");
    const equation = btoa(this.__equation);
    element.setAttribute("data-lexical-equation", equation);
    element.setAttribute("data-lexical-inline", `${this.__inline}`);
    katex__default.default.render(this.__equation, element, {
      displayMode: !this.__inline,
      // true === block display //
      errorColor: "#cc0000",
      output: "html",
      strict: "warn",
      throwOnError: false,
      trust: false
    });
    return { element };
  }
  static importDOM() {
    return {
      div: (domNode) => {
        if (!domNode.hasAttribute("data-lexical-equation")) {
          return null;
        }
        return {
          conversion: $convertEquationElement,
          priority: 2
        };
      },
      span: (domNode) => {
        if (!domNode.hasAttribute("data-lexical-equation")) {
          return null;
        }
        return {
          conversion: $convertEquationElement,
          priority: 1
        };
      }
    };
  }
  updateDOM(prevNode) {
    return this.__inline !== prevNode.__inline;
  }
  getTextContent() {
    return this.__equation;
  }
  getEquation() {
    return this.__equation;
  }
  setEquation(equation) {
    const writable = this.getWritable();
    writable.__equation = equation;
  }
  decorate() {
    return /* @__PURE__ */ jsxRuntime.jsx(React.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntime.jsx(EquationComponent, { equation: this.__equation, inline: this.__inline, nodeKey: this.__key }) });
  }
}
function $createEquationNode(equation = "", inline = false) {
  const equationNode = new EquationNode(equation, inline);
  return lexical.$applyNodeReplacement(equationNode);
}
function $isEquationNode(node) {
  return node instanceof EquationNode;
}
const ImageComponent = React__namespace.lazy(() => Promise.resolve().then(() => require("./ImageComponent-COQzx1qJ.js")));
function isGoogleDocCheckboxImg(img2) {
  return img2.parentElement != null && img2.parentElement.tagName === "LI" && img2.previousSibling === null && img2.getAttribute("aria-roledescription") === "checkbox";
}
function $convertImageElement(domNode) {
  const img2 = domNode;
  if (img2.src.startsWith("file:///") || isGoogleDocCheckboxImg(img2)) {
    return null;
  }
  const { alt: altText, src, width, height } = img2;
  const node = $createImageNode({ altText, height, src, width });
  return { node };
}
class ImageNode extends lexical.DecoratorNode {
  __src;
  __altText;
  __width;
  __height;
  __maxWidth;
  __showCaption;
  __caption;
  // Captions cannot yet be used within editor cells
  __captionsEnabled;
  static getType() {
    return "image";
  }
  static clone(node) {
    return new ImageNode(
      node.__src,
      node.__altText,
      node.__maxWidth,
      node.__width,
      node.__height,
      node.__showCaption,
      node.__caption,
      node.__captionsEnabled,
      node.__key
    );
  }
  static importJSON(serializedNode) {
    const { altText, height, width, maxWidth, src, showCaption } = serializedNode;
    return $createImageNode({
      altText,
      height,
      maxWidth,
      showCaption,
      src,
      width
    }).updateFromJSON(serializedNode);
  }
  updateFromJSON(serializedNode) {
    const node = super.updateFromJSON(serializedNode);
    const { caption } = serializedNode;
    const nestedEditor = node.__caption;
    const editorState = nestedEditor.parseEditorState(caption.editorState);
    if (!editorState.isEmpty()) {
      nestedEditor.setEditorState(editorState);
    }
    return node;
  }
  exportDOM() {
    const element = document.createElement("img");
    element.setAttribute("src", this.__src);
    element.setAttribute("alt", this.__altText);
    element.setAttribute("width", this.__width.toString());
    element.setAttribute("height", this.__height.toString());
    return { element };
  }
  static importDOM() {
    return {
      img: (node) => ({
        conversion: $convertImageElement,
        priority: 0
      })
    };
  }
  constructor(src, altText, maxWidth, width, height, showCaption, caption, captionsEnabled, key) {
    super(key);
    this.__src = src;
    this.__altText = altText;
    this.__maxWidth = maxWidth;
    this.__width = width || "inherit";
    this.__height = height || "inherit";
    this.__showCaption = showCaption || false;
    this.__caption = caption || lexical.createEditor({
      nodes: []
    });
    this.__captionsEnabled = captionsEnabled || captionsEnabled === void 0;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      altText: this.getAltText(),
      caption: this.__caption.toJSON(),
      height: this.__height === "inherit" ? 0 : this.__height,
      maxWidth: this.__maxWidth,
      showCaption: this.__showCaption,
      src: this.getSrc(),
      width: this.__width === "inherit" ? 0 : this.__width
    };
  }
  setWidthAndHeight(width, height) {
    const writable = this.getWritable();
    writable.__width = width;
    writable.__height = height;
  }
  setShowCaption(showCaption) {
    const writable = this.getWritable();
    writable.__showCaption = showCaption;
  }
  // View
  createDOM(config) {
    const span = document.createElement("span");
    const theme2 = config.theme;
    const className = theme2.image;
    if (className !== void 0) {
      span.className = className;
    }
    return span;
  }
  updateDOM() {
    return false;
  }
  getSrc() {
    return this.__src;
  }
  getAltText() {
    return this.__altText;
  }
  decorate() {
    return /* @__PURE__ */ jsxRuntime.jsx(React.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntime.jsx(
      ImageComponent,
      {
        src: this.__src,
        altText: this.__altText,
        width: this.__width,
        height: this.__height,
        maxWidth: this.__maxWidth,
        nodeKey: this.getKey(),
        showCaption: this.__showCaption,
        caption: this.__caption,
        captionsEnabled: this.__captionsEnabled,
        resizable: true
      }
    ) });
  }
}
function $createImageNode({
  altText,
  height,
  maxWidth = 500,
  captionsEnabled,
  src,
  width,
  showCaption,
  caption,
  key
}) {
  return lexical.$applyNodeReplacement(
    new ImageNode(src, altText, maxWidth, width, height, showCaption, caption, captionsEnabled, key)
  );
}
function $isImageNode(node) {
  return node instanceof ImageNode;
}
const WIDGET_SCRIPT_URL = "https://platform.twitter.com/widgets.js";
function $convertTweetElement(domNode) {
  const id = domNode.getAttribute("data-lexical-tweet-id");
  if (id) {
    const node = $createTweetNode(id);
    return { node };
  }
  return null;
}
let isTwitterScriptLoading = true;
function TweetComponent({
  className,
  format,
  loadingComponent,
  nodeKey,
  onError,
  onLoad,
  tweetID
}) {
  const containerRef = React.useRef(null);
  const previousTweetIDRef = React.useRef("");
  const [isTweetLoading, setIsTweetLoading] = React.useState(false);
  const createTweet = React.useCallback(async () => {
    try {
      await window.twttr.widgets.createTweet(tweetID, containerRef.current);
      setIsTweetLoading(false);
      isTwitterScriptLoading = false;
      if (onLoad) {
        onLoad();
      }
    } catch (error) {
      if (onError) {
        onError(String(error));
      }
    }
  }, [onError, onLoad, tweetID]);
  React.useEffect(() => {
    if (tweetID !== previousTweetIDRef.current) {
      setIsTweetLoading(true);
      if (isTwitterScriptLoading) {
        const script = document.createElement("script");
        script.src = WIDGET_SCRIPT_URL;
        script.async = true;
        document.body?.appendChild(script);
        script.onload = createTweet;
        if (onError) {
          script.onerror = onError;
        }
      } else {
        createTweet();
      }
      if (previousTweetIDRef) {
        previousTweetIDRef.current = tweetID;
      }
    }
  }, [createTweet, onError, tweetID]);
  return /* @__PURE__ */ jsxRuntime.jsxs(LexicalBlockWithAlignableContents.BlockWithAlignableContents, { className, format, nodeKey, children: [
    isTweetLoading ? loadingComponent : null,
    /* @__PURE__ */ jsxRuntime.jsx("div", { style: { display: "inline-block", width: "550px" }, ref: containerRef })
  ] });
}
class TweetNode extends LexicalDecoratorBlockNode.DecoratorBlockNode {
  __id;
  static getType() {
    return "tweet";
  }
  static clone(node) {
    return new TweetNode(node.__id, node.__format, node.__key);
  }
  static importJSON(serializedNode) {
    return $createTweetNode(serializedNode.id).updateFromJSON(serializedNode);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      id: this.getId()
    };
  }
  static importDOM() {
    return {
      div: (domNode) => {
        if (!domNode.hasAttribute("data-lexical-tweet-id")) {
          return null;
        }
        return {
          conversion: $convertTweetElement,
          priority: 2
        };
      }
    };
  }
  exportDOM() {
    const element = document.createElement("div");
    element.setAttribute("data-lexical-tweet-id", this.__id);
    const text = document.createTextNode(this.getTextContent());
    element.append(text);
    return { element };
  }
  constructor(id, format, key) {
    super(format, key);
    this.__id = id;
  }
  getId() {
    return this.__id;
  }
  getTextContent(_includeInert, _includeDirectionless) {
    return `https://x.com/i/web/status/${this.__id}`;
  }
  decorate(editor, config) {
    const embedBlockTheme = config.theme.embedBlock || {};
    const className = {
      base: embedBlockTheme.base || "",
      focus: embedBlockTheme.focus || ""
    };
    return /* @__PURE__ */ jsxRuntime.jsx(
      TweetComponent,
      {
        className,
        format: this.__format,
        loadingComponent: "Loading...",
        nodeKey: this.getKey(),
        tweetID: this.__id
      }
    );
  }
}
function $createTweetNode(tweetID) {
  return new TweetNode(tweetID);
}
function $isTweetNode(node) {
  return node instanceof TweetNode;
}
const emojiList = [
  {
    description: "grinning face",
    emoji: "😀",
    category: "Smileys & Emotion",
    aliases: ["grinning"],
    tags: ["smile", "happy"],
    unicode_version: "6.1",
    ios_version: "6.0"
  },
  {
    emoji: "😃",
    description: "grinning face with big eyes",
    category: "Smileys & Emotion",
    aliases: ["smiley"],
    tags: ["happy", "joy", "haha"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😄",
    description: "grinning face with smiling eyes",
    category: "Smileys & Emotion",
    aliases: ["smile"],
    tags: ["happy", "joy", "laugh", "pleased"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😁",
    description: "beaming face with smiling eyes",
    category: "Smileys & Emotion",
    aliases: ["grin"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😆",
    description: "grinning squinting face",
    category: "Smileys & Emotion",
    aliases: ["laughing", "satisfied"],
    tags: ["happy", "haha"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😅",
    description: "grinning face with sweat",
    category: "Smileys & Emotion",
    aliases: ["sweat_smile"],
    tags: ["hot"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🤣",
    description: "rolling on the floor laughing",
    category: "Smileys & Emotion",
    aliases: ["rofl"],
    tags: ["lol", "laughing"],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "😂",
    description: "face with tears of joy",
    category: "Smileys & Emotion",
    aliases: ["joy"],
    tags: ["tears"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🙂",
    description: "slightly smiling face",
    category: "Smileys & Emotion",
    aliases: ["slightly_smiling_face"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🙃",
    description: "upside-down face",
    category: "Smileys & Emotion",
    aliases: ["upside_down_face"],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "😉",
    description: "winking face",
    category: "Smileys & Emotion",
    aliases: ["wink"],
    tags: ["flirt"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😊",
    description: "smiling face with smiling eyes",
    category: "Smileys & Emotion",
    aliases: ["blush"],
    tags: ["proud"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😇",
    description: "smiling face with halo",
    category: "Smileys & Emotion",
    aliases: ["innocent"],
    tags: ["angel"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🥰",
    description: "smiling face with hearts",
    category: "Smileys & Emotion",
    aliases: ["smiling_face_with_three_hearts"],
    tags: ["love"],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "😍",
    description: "smiling face with heart-eyes",
    category: "Smileys & Emotion",
    aliases: ["heart_eyes"],
    tags: ["love", "crush"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🤩",
    description: "star-struck",
    category: "Smileys & Emotion",
    aliases: ["star_struck"],
    tags: ["eyes"],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "😘",
    description: "face blowing a kiss",
    category: "Smileys & Emotion",
    aliases: ["kissing_heart"],
    tags: ["flirt"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😗",
    description: "kissing face",
    category: "Smileys & Emotion",
    aliases: ["kissing"],
    tags: [],
    unicode_version: "6.1",
    ios_version: "6.0"
  },
  {
    emoji: "☺️",
    description: "smiling face",
    category: "Smileys & Emotion",
    aliases: ["relaxed"],
    tags: ["blush", "pleased"],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "😚",
    description: "kissing face with closed eyes",
    category: "Smileys & Emotion",
    aliases: ["kissing_closed_eyes"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😙",
    description: "kissing face with smiling eyes",
    category: "Smileys & Emotion",
    aliases: ["kissing_smiling_eyes"],
    tags: [],
    unicode_version: "6.1",
    ios_version: "6.0"
  },
  {
    emoji: "🥲",
    description: "smiling face with tear",
    category: "Smileys & Emotion",
    aliases: ["smiling_face_with_tear"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "😋",
    description: "face savoring food",
    category: "Smileys & Emotion",
    aliases: ["yum"],
    tags: ["tongue", "lick"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😛",
    description: "face with tongue",
    category: "Smileys & Emotion",
    aliases: ["stuck_out_tongue"],
    tags: [],
    unicode_version: "6.1",
    ios_version: "6.0"
  },
  {
    emoji: "😜",
    description: "winking face with tongue",
    category: "Smileys & Emotion",
    aliases: ["stuck_out_tongue_winking_eye"],
    tags: ["prank", "silly"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🤪",
    description: "zany face",
    category: "Smileys & Emotion",
    aliases: ["zany_face"],
    tags: ["goofy", "wacky"],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "😝",
    description: "squinting face with tongue",
    category: "Smileys & Emotion",
    aliases: ["stuck_out_tongue_closed_eyes"],
    tags: ["prank"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🤑",
    description: "money-mouth face",
    category: "Smileys & Emotion",
    aliases: ["money_mouth_face"],
    tags: ["rich"],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🤗",
    description: "hugging face",
    category: "Smileys & Emotion",
    aliases: ["hugs"],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🤭",
    description: "face with hand over mouth",
    category: "Smileys & Emotion",
    aliases: ["hand_over_mouth"],
    tags: ["quiet", "whoops"],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🤫",
    description: "shushing face",
    category: "Smileys & Emotion",
    aliases: ["shushing_face"],
    tags: ["silence", "quiet"],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🤔",
    description: "thinking face",
    category: "Smileys & Emotion",
    aliases: ["thinking"],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🤐",
    description: "zipper-mouth face",
    category: "Smileys & Emotion",
    aliases: ["zipper_mouth_face"],
    tags: ["silence", "hush"],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🤨",
    description: "face with raised eyebrow",
    category: "Smileys & Emotion",
    aliases: ["raised_eyebrow"],
    tags: ["suspicious"],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "😐",
    description: "neutral face",
    category: "Smileys & Emotion",
    aliases: ["neutral_face"],
    tags: ["meh"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😑",
    description: "expressionless face",
    category: "Smileys & Emotion",
    aliases: ["expressionless"],
    tags: [],
    unicode_version: "6.1",
    ios_version: "6.0"
  },
  {
    emoji: "😶",
    description: "face without mouth",
    category: "Smileys & Emotion",
    aliases: ["no_mouth"],
    tags: ["mute", "silence"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😶‍🌫️",
    description: "face in clouds",
    category: "Smileys & Emotion",
    aliases: ["face_in_clouds"],
    tags: [],
    unicode_version: "13.1",
    ios_version: "14.0"
  },
  {
    emoji: "😏",
    description: "smirking face",
    category: "Smileys & Emotion",
    aliases: ["smirk"],
    tags: ["smug"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😒",
    description: "unamused face",
    category: "Smileys & Emotion",
    aliases: ["unamused"],
    tags: ["meh"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🙄",
    description: "face with rolling eyes",
    category: "Smileys & Emotion",
    aliases: ["roll_eyes"],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "😬",
    description: "grimacing face",
    category: "Smileys & Emotion",
    aliases: ["grimacing"],
    tags: [],
    unicode_version: "6.1",
    ios_version: "6.0"
  },
  {
    emoji: "😮‍💨",
    description: "face exhaling",
    category: "Smileys & Emotion",
    aliases: ["face_exhaling"],
    tags: [],
    unicode_version: "13.1",
    ios_version: "14.0"
  },
  {
    emoji: "🤥",
    description: "lying face",
    category: "Smileys & Emotion",
    aliases: ["lying_face"],
    tags: ["liar"],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "😌",
    description: "relieved face",
    category: "Smileys & Emotion",
    aliases: ["relieved"],
    tags: ["whew"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😔",
    description: "pensive face",
    category: "Smileys & Emotion",
    aliases: ["pensive"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😪",
    description: "sleepy face",
    category: "Smileys & Emotion",
    aliases: ["sleepy"],
    tags: ["tired"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🤤",
    description: "drooling face",
    category: "Smileys & Emotion",
    aliases: ["drooling_face"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "😴",
    description: "sleeping face",
    category: "Smileys & Emotion",
    aliases: ["sleeping"],
    tags: ["zzz"],
    unicode_version: "6.1",
    ios_version: "6.0"
  },
  {
    emoji: "😷",
    description: "face with medical mask",
    category: "Smileys & Emotion",
    aliases: ["mask"],
    tags: ["sick", "ill"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🤒",
    description: "face with thermometer",
    category: "Smileys & Emotion",
    aliases: ["face_with_thermometer"],
    tags: ["sick"],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🤕",
    description: "face with head-bandage",
    category: "Smileys & Emotion",
    aliases: ["face_with_head_bandage"],
    tags: ["hurt"],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🤢",
    description: "nauseated face",
    category: "Smileys & Emotion",
    aliases: ["nauseated_face"],
    tags: ["sick", "barf", "disgusted"],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🤮",
    description: "face vomiting",
    category: "Smileys & Emotion",
    aliases: ["vomiting_face"],
    tags: ["barf", "sick"],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🤧",
    description: "sneezing face",
    category: "Smileys & Emotion",
    aliases: ["sneezing_face"],
    tags: ["achoo", "sick"],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🥵",
    description: "hot face",
    category: "Smileys & Emotion",
    aliases: ["hot_face"],
    tags: ["heat", "sweating"],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🥶",
    description: "cold face",
    category: "Smileys & Emotion",
    aliases: ["cold_face"],
    tags: ["freezing", "ice"],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🥴",
    description: "woozy face",
    category: "Smileys & Emotion",
    aliases: ["woozy_face"],
    tags: ["groggy"],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "😵",
    description: "knocked-out face",
    category: "Smileys & Emotion",
    aliases: ["dizzy_face"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😵‍💫",
    description: "face with spiral eyes",
    category: "Smileys & Emotion",
    aliases: ["face_with_spiral_eyes"],
    tags: [],
    unicode_version: "13.1",
    ios_version: "14.0"
  },
  {
    emoji: "🤯",
    description: "exploding head",
    category: "Smileys & Emotion",
    aliases: ["exploding_head"],
    tags: ["mind", "blown"],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🤠",
    description: "cowboy hat face",
    category: "Smileys & Emotion",
    aliases: ["cowboy_hat_face"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🥳",
    description: "partying face",
    category: "Smileys & Emotion",
    aliases: ["partying_face"],
    tags: ["celebration", "birthday"],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🥸",
    description: "disguised face",
    category: "Smileys & Emotion",
    aliases: ["disguised_face"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "😎",
    description: "smiling face with sunglasses",
    category: "Smileys & Emotion",
    aliases: ["sunglasses"],
    tags: ["cool"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🤓",
    description: "nerd face",
    category: "Smileys & Emotion",
    aliases: ["nerd_face"],
    tags: ["geek", "glasses"],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🧐",
    description: "face with monocle",
    category: "Smileys & Emotion",
    aliases: ["monocle_face"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "😕",
    description: "confused face",
    category: "Smileys & Emotion",
    aliases: ["confused"],
    tags: [],
    unicode_version: "6.1",
    ios_version: "6.0"
  },
  {
    emoji: "😟",
    description: "worried face",
    category: "Smileys & Emotion",
    aliases: ["worried"],
    tags: ["nervous"],
    unicode_version: "6.1",
    ios_version: "6.0"
  },
  {
    emoji: "🙁",
    description: "slightly frowning face",
    category: "Smileys & Emotion",
    aliases: ["slightly_frowning_face"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "☹️",
    description: "frowning face",
    category: "Smileys & Emotion",
    aliases: ["frowning_face"],
    tags: [],
    unicode_version: "",
    ios_version: "9.1"
  },
  {
    emoji: "😮",
    description: "face with open mouth",
    category: "Smileys & Emotion",
    aliases: ["open_mouth"],
    tags: ["surprise", "impressed", "wow"],
    unicode_version: "6.1",
    ios_version: "6.0"
  },
  {
    emoji: "😯",
    description: "hushed face",
    category: "Smileys & Emotion",
    aliases: ["hushed"],
    tags: ["silence", "speechless"],
    unicode_version: "6.1",
    ios_version: "6.0"
  },
  {
    emoji: "😲",
    description: "astonished face",
    category: "Smileys & Emotion",
    aliases: ["astonished"],
    tags: ["amazed", "gasp"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😳",
    description: "flushed face",
    category: "Smileys & Emotion",
    aliases: ["flushed"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🥺",
    description: "pleading face",
    category: "Smileys & Emotion",
    aliases: ["pleading_face"],
    tags: ["puppy", "eyes"],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "😦",
    description: "frowning face with open mouth",
    category: "Smileys & Emotion",
    aliases: ["frowning"],
    tags: [],
    unicode_version: "6.1",
    ios_version: "6.0"
  },
  {
    emoji: "😧",
    description: "anguished face",
    category: "Smileys & Emotion",
    aliases: ["anguished"],
    tags: ["stunned"],
    unicode_version: "6.1",
    ios_version: "6.0"
  },
  {
    emoji: "😨",
    description: "fearful face",
    category: "Smileys & Emotion",
    aliases: ["fearful"],
    tags: ["scared", "shocked", "oops"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😰",
    description: "anxious face with sweat",
    category: "Smileys & Emotion",
    aliases: ["cold_sweat"],
    tags: ["nervous"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😥",
    description: "sad but relieved face",
    category: "Smileys & Emotion",
    aliases: ["disappointed_relieved"],
    tags: ["phew", "sweat", "nervous"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😢",
    description: "crying face",
    category: "Smileys & Emotion",
    aliases: ["cry"],
    tags: ["sad", "tear"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😭",
    description: "loudly crying face",
    category: "Smileys & Emotion",
    aliases: ["sob"],
    tags: ["sad", "cry", "bawling"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😱",
    description: "face screaming in fear",
    category: "Smileys & Emotion",
    aliases: ["scream"],
    tags: ["horror", "shocked"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😖",
    description: "confounded face",
    category: "Smileys & Emotion",
    aliases: ["confounded"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😣",
    description: "persevering face",
    category: "Smileys & Emotion",
    aliases: ["persevere"],
    tags: ["struggling"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😞",
    description: "disappointed face",
    category: "Smileys & Emotion",
    aliases: ["disappointed"],
    tags: ["sad"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😓",
    description: "downcast face with sweat",
    category: "Smileys & Emotion",
    aliases: ["sweat"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😩",
    description: "weary face",
    category: "Smileys & Emotion",
    aliases: ["weary"],
    tags: ["tired"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😫",
    description: "tired face",
    category: "Smileys & Emotion",
    aliases: ["tired_face"],
    tags: ["upset", "whine"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🥱",
    description: "yawning face",
    category: "Smileys & Emotion",
    aliases: ["yawning_face"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "😤",
    description: "face with steam from nose",
    category: "Smileys & Emotion",
    aliases: ["triumph"],
    tags: ["smug"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😡",
    description: "pouting face",
    category: "Smileys & Emotion",
    aliases: ["rage", "pout"],
    tags: ["angry"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😠",
    description: "angry face",
    category: "Smileys & Emotion",
    aliases: ["angry"],
    tags: ["mad", "annoyed"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🤬",
    description: "face with symbols on mouth",
    category: "Smileys & Emotion",
    aliases: ["cursing_face"],
    tags: ["foul"],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "😈",
    description: "smiling face with horns",
    category: "Smileys & Emotion",
    aliases: ["smiling_imp"],
    tags: ["devil", "evil", "horns"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👿",
    description: "angry face with horns",
    category: "Smileys & Emotion",
    aliases: ["imp"],
    tags: ["angry", "devil", "evil", "horns"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💀",
    description: "skull",
    category: "Smileys & Emotion",
    aliases: ["skull"],
    tags: ["dead", "danger", "poison"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "☠️",
    description: "skull and crossbones",
    category: "Smileys & Emotion",
    aliases: ["skull_and_crossbones"],
    tags: ["danger", "pirate"],
    unicode_version: "",
    ios_version: "9.1"
  },
  {
    emoji: "💩",
    description: "pile of poo",
    category: "Smileys & Emotion",
    aliases: ["hankey", "poop", "shit"],
    tags: ["crap"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🤡",
    description: "clown face",
    category: "Smileys & Emotion",
    aliases: ["clown_face"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "👹",
    description: "ogre",
    category: "Smileys & Emotion",
    aliases: ["japanese_ogre"],
    tags: ["monster"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👺",
    description: "goblin",
    category: "Smileys & Emotion",
    aliases: ["japanese_goblin"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👻",
    description: "ghost",
    category: "Smileys & Emotion",
    aliases: ["ghost"],
    tags: ["halloween"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👽",
    description: "alien",
    category: "Smileys & Emotion",
    aliases: ["alien"],
    tags: ["ufo"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👾",
    description: "alien monster",
    category: "Smileys & Emotion",
    aliases: ["space_invader"],
    tags: ["game", "retro"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🤖",
    description: "robot",
    category: "Smileys & Emotion",
    aliases: ["robot"],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "😺",
    description: "grinning cat",
    category: "Smileys & Emotion",
    aliases: ["smiley_cat"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😸",
    description: "grinning cat with smiling eyes",
    category: "Smileys & Emotion",
    aliases: ["smile_cat"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😹",
    description: "cat with tears of joy",
    category: "Smileys & Emotion",
    aliases: ["joy_cat"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😻",
    description: "smiling cat with heart-eyes",
    category: "Smileys & Emotion",
    aliases: ["heart_eyes_cat"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😼",
    description: "cat with wry smile",
    category: "Smileys & Emotion",
    aliases: ["smirk_cat"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😽",
    description: "kissing cat",
    category: "Smileys & Emotion",
    aliases: ["kissing_cat"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🙀",
    description: "weary cat",
    category: "Smileys & Emotion",
    aliases: ["scream_cat"],
    tags: ["horror"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😿",
    description: "crying cat",
    category: "Smileys & Emotion",
    aliases: ["crying_cat_face"],
    tags: ["sad", "tear"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😾",
    description: "pouting cat",
    category: "Smileys & Emotion",
    aliases: ["pouting_cat"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🙈",
    description: "see-no-evil monkey",
    category: "Smileys & Emotion",
    aliases: ["see_no_evil"],
    tags: ["monkey", "blind", "ignore"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🙉",
    description: "hear-no-evil monkey",
    category: "Smileys & Emotion",
    aliases: ["hear_no_evil"],
    tags: ["monkey", "deaf"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🙊",
    description: "speak-no-evil monkey",
    category: "Smileys & Emotion",
    aliases: ["speak_no_evil"],
    tags: ["monkey", "mute", "hush"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💋",
    description: "kiss mark",
    category: "Smileys & Emotion",
    aliases: ["kiss"],
    tags: ["lipstick"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💌",
    description: "love letter",
    category: "Smileys & Emotion",
    aliases: ["love_letter"],
    tags: ["email", "envelope"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💘",
    description: "heart with arrow",
    category: "Smileys & Emotion",
    aliases: ["cupid"],
    tags: ["love", "heart"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💝",
    description: "heart with ribbon",
    category: "Smileys & Emotion",
    aliases: ["gift_heart"],
    tags: ["chocolates"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💖",
    description: "sparkling heart",
    category: "Smileys & Emotion",
    aliases: ["sparkling_heart"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💗",
    description: "growing heart",
    category: "Smileys & Emotion",
    aliases: ["heartpulse"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💓",
    description: "beating heart",
    category: "Smileys & Emotion",
    aliases: ["heartbeat"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💞",
    description: "revolving hearts",
    category: "Smileys & Emotion",
    aliases: ["revolving_hearts"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💕",
    description: "two hearts",
    category: "Smileys & Emotion",
    aliases: ["two_hearts"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💟",
    description: "heart decoration",
    category: "Smileys & Emotion",
    aliases: ["heart_decoration"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "❣️",
    description: "heart exclamation",
    category: "Smileys & Emotion",
    aliases: ["heavy_heart_exclamation"],
    tags: [],
    unicode_version: "",
    ios_version: "9.1"
  },
  {
    emoji: "💔",
    description: "broken heart",
    category: "Smileys & Emotion",
    aliases: ["broken_heart"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "❤️‍🔥",
    description: "heart on fire",
    category: "Smileys & Emotion",
    aliases: ["heart_on_fire"],
    tags: [],
    unicode_version: "13.1",
    ios_version: "14.0"
  },
  {
    emoji: "❤️‍🩹",
    description: "mending heart",
    category: "Smileys & Emotion",
    aliases: ["mending_heart"],
    tags: [],
    unicode_version: "13.1",
    ios_version: "14.0"
  },
  {
    emoji: "❤️",
    description: "red heart",
    category: "Smileys & Emotion",
    aliases: ["heart"],
    tags: ["love"],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "🧡",
    description: "orange heart",
    category: "Smileys & Emotion",
    aliases: ["orange_heart"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "💛",
    description: "yellow heart",
    category: "Smileys & Emotion",
    aliases: ["yellow_heart"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💚",
    description: "green heart",
    category: "Smileys & Emotion",
    aliases: ["green_heart"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💙",
    description: "blue heart",
    category: "Smileys & Emotion",
    aliases: ["blue_heart"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💜",
    description: "purple heart",
    category: "Smileys & Emotion",
    aliases: ["purple_heart"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🤎",
    description: "brown heart",
    category: "Smileys & Emotion",
    aliases: ["brown_heart"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🖤",
    description: "black heart",
    category: "Smileys & Emotion",
    aliases: ["black_heart"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🤍",
    description: "white heart",
    category: "Smileys & Emotion",
    aliases: ["white_heart"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "💯",
    description: "hundred points",
    category: "Smileys & Emotion",
    aliases: ["100"],
    tags: ["score", "perfect"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💢",
    description: "anger symbol",
    category: "Smileys & Emotion",
    aliases: ["anger"],
    tags: ["angry"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💥",
    description: "collision",
    category: "Smileys & Emotion",
    aliases: ["boom", "collision"],
    tags: ["explode"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💫",
    description: "dizzy",
    category: "Smileys & Emotion",
    aliases: ["dizzy"],
    tags: ["star"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💦",
    description: "sweat droplets",
    category: "Smileys & Emotion",
    aliases: ["sweat_drops"],
    tags: ["water", "workout"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💨",
    description: "dashing away",
    category: "Smileys & Emotion",
    aliases: ["dash"],
    tags: ["wind", "blow", "fast"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕳️",
    description: "hole",
    category: "Smileys & Emotion",
    aliases: ["hole"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "💣",
    description: "bomb",
    category: "Smileys & Emotion",
    aliases: ["bomb"],
    tags: ["boom"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💬",
    description: "speech balloon",
    category: "Smileys & Emotion",
    aliases: ["speech_balloon"],
    tags: ["comment"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👁️‍🗨️",
    description: "eye in speech bubble",
    category: "Smileys & Emotion",
    aliases: ["eye_speech_bubble"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🗨️",
    description: "left speech bubble",
    category: "Smileys & Emotion",
    aliases: ["left_speech_bubble"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🗯️",
    description: "right anger bubble",
    category: "Smileys & Emotion",
    aliases: ["right_anger_bubble"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "💭",
    description: "thought balloon",
    category: "Smileys & Emotion",
    aliases: ["thought_balloon"],
    tags: ["thinking"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💤",
    description: "zzz",
    category: "Smileys & Emotion",
    aliases: ["zzz"],
    tags: ["sleeping"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👋",
    description: "waving hand",
    category: "People & Body",
    aliases: ["wave"],
    tags: ["goodbye"],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "🤚",
    description: "raised back of hand",
    category: "People & Body",
    aliases: ["raised_back_of_hand"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "🖐️",
    description: "hand with fingers splayed",
    category: "People & Body",
    aliases: ["raised_hand_with_fingers_splayed"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1",
    skin_tones: true
  },
  {
    emoji: "✋",
    description: "raised hand",
    category: "People & Body",
    aliases: ["hand", "raised_hand"],
    tags: ["highfive", "stop"],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "🖖",
    description: "vulcan salute",
    category: "People & Body",
    aliases: ["vulcan_salute"],
    tags: ["prosper", "spock"],
    unicode_version: "7.0",
    ios_version: "8.3",
    skin_tones: true
  },
  {
    emoji: "👌",
    description: "OK hand",
    category: "People & Body",
    aliases: ["ok_hand"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "🤌",
    description: "pinched fingers",
    category: "People & Body",
    aliases: ["pinched_fingers"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0",
    skin_tones: true
  },
  {
    emoji: "🤏",
    description: "pinching hand",
    category: "People & Body",
    aliases: ["pinching_hand"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: true
  },
  {
    emoji: "✌️",
    description: "victory hand",
    category: "People & Body",
    aliases: ["v"],
    tags: ["victory", "peace"],
    unicode_version: "",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "🤞",
    description: "crossed fingers",
    category: "People & Body",
    aliases: ["crossed_fingers"],
    tags: ["luck", "hopeful"],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "🤟",
    description: "love-you gesture",
    category: "People & Body",
    aliases: ["love_you_gesture"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🤘",
    description: "sign of the horns",
    category: "People & Body",
    aliases: ["metal"],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1",
    skin_tones: true
  },
  {
    emoji: "🤙",
    description: "call me hand",
    category: "People & Body",
    aliases: ["call_me_hand"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "👈",
    description: "backhand index pointing left",
    category: "People & Body",
    aliases: ["point_left"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "👉",
    description: "backhand index pointing right",
    category: "People & Body",
    aliases: ["point_right"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "👆",
    description: "backhand index pointing up",
    category: "People & Body",
    aliases: ["point_up_2"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "🖕",
    description: "middle finger",
    category: "People & Body",
    aliases: ["middle_finger", "fu"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1",
    skin_tones: true
  },
  {
    emoji: "👇",
    description: "backhand index pointing down",
    category: "People & Body",
    aliases: ["point_down"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "☝️",
    description: "index pointing up",
    category: "People & Body",
    aliases: ["point_up"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "👍",
    description: "thumbs up",
    category: "People & Body",
    aliases: ["+1", "thumbsup"],
    tags: ["approve", "ok"],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "👎",
    description: "thumbs down",
    category: "People & Body",
    aliases: ["-1", "thumbsdown"],
    tags: ["disapprove", "bury"],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "✊",
    description: "raised fist",
    category: "People & Body",
    aliases: ["fist_raised", "fist"],
    tags: ["power"],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "👊",
    description: "oncoming fist",
    category: "People & Body",
    aliases: ["fist_oncoming", "facepunch", "punch"],
    tags: ["attack"],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "🤛",
    description: "left-facing fist",
    category: "People & Body",
    aliases: ["fist_left"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "🤜",
    description: "right-facing fist",
    category: "People & Body",
    aliases: ["fist_right"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "👏",
    description: "clapping hands",
    category: "People & Body",
    aliases: ["clap"],
    tags: ["praise", "applause"],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "🙌",
    description: "raising hands",
    category: "People & Body",
    aliases: ["raised_hands"],
    tags: ["hooray"],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "👐",
    description: "open hands",
    category: "People & Body",
    aliases: ["open_hands"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "🤲",
    description: "palms up together",
    category: "People & Body",
    aliases: ["palms_up_together"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🤝",
    description: "handshake",
    category: "People & Body",
    aliases: ["handshake"],
    tags: ["deal"],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🙏",
    description: "folded hands",
    category: "People & Body",
    aliases: ["pray"],
    tags: ["please", "hope", "wish"],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "✍️",
    description: "writing hand",
    category: "People & Body",
    aliases: ["writing_hand"],
    tags: [],
    unicode_version: "",
    ios_version: "9.1",
    skin_tones: true
  },
  {
    emoji: "💅",
    description: "nail polish",
    category: "People & Body",
    aliases: ["nail_care"],
    tags: ["beauty", "manicure"],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "🤳",
    description: "selfie",
    category: "People & Body",
    aliases: ["selfie"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "💪",
    description: "flexed biceps",
    category: "People & Body",
    aliases: ["muscle"],
    tags: ["flex", "bicep", "strong", "workout"],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "🦾",
    description: "mechanical arm",
    category: "People & Body",
    aliases: ["mechanical_arm"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🦿",
    description: "mechanical leg",
    category: "People & Body",
    aliases: ["mechanical_leg"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🦵",
    description: "leg",
    category: "People & Body",
    aliases: ["leg"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🦶",
    description: "foot",
    category: "People & Body",
    aliases: ["foot"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "👂",
    description: "ear",
    category: "People & Body",
    aliases: ["ear"],
    tags: ["hear", "sound", "listen"],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "🦻",
    description: "ear with hearing aid",
    category: "People & Body",
    aliases: ["ear_with_hearing_aid"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: true
  },
  {
    emoji: "👃",
    description: "nose",
    category: "People & Body",
    aliases: ["nose"],
    tags: ["smell"],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "🧠",
    description: "brain",
    category: "People & Body",
    aliases: ["brain"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🫀",
    description: "anatomical heart",
    category: "People & Body",
    aliases: ["anatomical_heart"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🫁",
    description: "lungs",
    category: "People & Body",
    aliases: ["lungs"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🦷",
    description: "tooth",
    category: "People & Body",
    aliases: ["tooth"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🦴",
    description: "bone",
    category: "People & Body",
    aliases: ["bone"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "👀",
    description: "eyes",
    category: "People & Body",
    aliases: ["eyes"],
    tags: ["look", "see", "watch"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👁️",
    description: "eye",
    category: "People & Body",
    aliases: ["eye"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "👅",
    description: "tongue",
    category: "People & Body",
    aliases: ["tongue"],
    tags: ["taste"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👄",
    description: "mouth",
    category: "People & Body",
    aliases: ["lips"],
    tags: ["kiss"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👶",
    description: "baby",
    category: "People & Body",
    aliases: ["baby"],
    tags: ["child", "newborn"],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "🧒",
    description: "child",
    category: "People & Body",
    aliases: ["child"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "👦",
    description: "boy",
    category: "People & Body",
    aliases: ["boy"],
    tags: ["child"],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "👧",
    description: "girl",
    category: "People & Body",
    aliases: ["girl"],
    tags: ["child"],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "🧑",
    description: "person",
    category: "People & Body",
    aliases: ["adult"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "👱",
    description: "person: blond hair",
    category: "People & Body",
    aliases: ["blond_haired_person"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "👨",
    description: "man",
    category: "People & Body",
    aliases: ["man"],
    tags: ["mustache", "father", "dad"],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "🧔",
    description: "person: beard",
    category: "People & Body",
    aliases: ["bearded_person"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🧔‍♂️",
    description: "man: beard",
    category: "People & Body",
    aliases: ["man_beard"],
    tags: [],
    unicode_version: "13.1",
    ios_version: "14.0",
    skin_tones: true
  },
  {
    emoji: "🧔‍♀️",
    description: "woman: beard",
    category: "People & Body",
    aliases: ["woman_beard"],
    tags: [],
    unicode_version: "13.1",
    ios_version: "14.0",
    skin_tones: true
  },
  {
    emoji: "👨‍🦰",
    description: "man: red hair",
    category: "People & Body",
    aliases: ["red_haired_man"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "👨‍🦱",
    description: "man: curly hair",
    category: "People & Body",
    aliases: ["curly_haired_man"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "👨‍🦳",
    description: "man: white hair",
    category: "People & Body",
    aliases: ["white_haired_man"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "👨‍🦲",
    description: "man: bald",
    category: "People & Body",
    aliases: ["bald_man"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "👩",
    description: "woman",
    category: "People & Body",
    aliases: ["woman"],
    tags: ["girls"],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "👩‍🦰",
    description: "woman: red hair",
    category: "People & Body",
    aliases: ["red_haired_woman"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🧑‍🦰",
    description: "person: red hair",
    category: "People & Body",
    aliases: ["person_red_hair"],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: true
  },
  {
    emoji: "👩‍🦱",
    description: "woman: curly hair",
    category: "People & Body",
    aliases: ["curly_haired_woman"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🧑‍🦱",
    description: "person: curly hair",
    category: "People & Body",
    aliases: ["person_curly_hair"],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: true
  },
  {
    emoji: "👩‍🦳",
    description: "woman: white hair",
    category: "People & Body",
    aliases: ["white_haired_woman"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🧑‍🦳",
    description: "person: white hair",
    category: "People & Body",
    aliases: ["person_white_hair"],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: true
  },
  {
    emoji: "👩‍🦲",
    description: "woman: bald",
    category: "People & Body",
    aliases: ["bald_woman"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🧑‍🦲",
    description: "person: bald",
    category: "People & Body",
    aliases: ["person_bald"],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: true
  },
  {
    emoji: "👱‍♀️",
    description: "woman: blond hair",
    category: "People & Body",
    aliases: ["blond_haired_woman", "blonde_woman"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: true
  },
  {
    emoji: "👱‍♂️",
    description: "man: blond hair",
    category: "People & Body",
    aliases: ["blond_haired_man"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🧓",
    description: "older person",
    category: "People & Body",
    aliases: ["older_adult"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "👴",
    description: "old man",
    category: "People & Body",
    aliases: ["older_man"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "👵",
    description: "old woman",
    category: "People & Body",
    aliases: ["older_woman"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "🙍",
    description: "person frowning",
    category: "People & Body",
    aliases: ["frowning_person"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "🙍‍♂️",
    description: "man frowning",
    category: "People & Body",
    aliases: ["frowning_man"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: true
  },
  {
    emoji: "🙍‍♀️",
    description: "woman frowning",
    category: "People & Body",
    aliases: ["frowning_woman"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🙎",
    description: "person pouting",
    category: "People & Body",
    aliases: ["pouting_face"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "🙎‍♂️",
    description: "man pouting",
    category: "People & Body",
    aliases: ["pouting_man"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: true
  },
  {
    emoji: "🙎‍♀️",
    description: "woman pouting",
    category: "People & Body",
    aliases: ["pouting_woman"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🙅",
    description: "person gesturing NO",
    category: "People & Body",
    aliases: ["no_good"],
    tags: ["stop", "halt", "denied"],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "🙅‍♂️",
    description: "man gesturing NO",
    category: "People & Body",
    aliases: ["no_good_man", "ng_man"],
    tags: ["stop", "halt", "denied"],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: true
  },
  {
    emoji: "🙅‍♀️",
    description: "woman gesturing NO",
    category: "People & Body",
    aliases: ["no_good_woman", "ng_woman"],
    tags: ["stop", "halt", "denied"],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🙆",
    description: "person gesturing OK",
    category: "People & Body",
    aliases: ["ok_person"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "🙆‍♂️",
    description: "man gesturing OK",
    category: "People & Body",
    aliases: ["ok_man"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: true
  },
  {
    emoji: "🙆‍♀️",
    description: "woman gesturing OK",
    category: "People & Body",
    aliases: ["ok_woman"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "💁",
    description: "person tipping hand",
    category: "People & Body",
    aliases: ["tipping_hand_person", "information_desk_person"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "💁‍♂️",
    description: "man tipping hand",
    category: "People & Body",
    aliases: ["tipping_hand_man", "sassy_man"],
    tags: ["information"],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: true
  },
  {
    emoji: "💁‍♀️",
    description: "woman tipping hand",
    category: "People & Body",
    aliases: ["tipping_hand_woman", "sassy_woman"],
    tags: ["information"],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🙋",
    description: "person raising hand",
    category: "People & Body",
    aliases: ["raising_hand"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "🙋‍♂️",
    description: "man raising hand",
    category: "People & Body",
    aliases: ["raising_hand_man"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: true
  },
  {
    emoji: "🙋‍♀️",
    description: "woman raising hand",
    category: "People & Body",
    aliases: ["raising_hand_woman"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🧏",
    description: "deaf person",
    category: "People & Body",
    aliases: ["deaf_person"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: true
  },
  {
    emoji: "🧏‍♂️",
    description: "deaf man",
    category: "People & Body",
    aliases: ["deaf_man"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: true
  },
  {
    emoji: "🧏‍♀️",
    description: "deaf woman",
    category: "People & Body",
    aliases: ["deaf_woman"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: true
  },
  {
    emoji: "🙇",
    description: "person bowing",
    category: "People & Body",
    aliases: ["bow"],
    tags: ["respect", "thanks"],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "🙇‍♂️",
    description: "man bowing",
    category: "People & Body",
    aliases: ["bowing_man"],
    tags: ["respect", "thanks"],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🙇‍♀️",
    description: "woman bowing",
    category: "People & Body",
    aliases: ["bowing_woman"],
    tags: ["respect", "thanks"],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: true
  },
  {
    emoji: "🤦",
    description: "person facepalming",
    category: "People & Body",
    aliases: ["facepalm"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🤦‍♂️",
    description: "man facepalming",
    category: "People & Body",
    aliases: ["man_facepalming"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "🤦‍♀️",
    description: "woman facepalming",
    category: "People & Body",
    aliases: ["woman_facepalming"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "🤷",
    description: "person shrugging",
    category: "People & Body",
    aliases: ["shrug"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🤷‍♂️",
    description: "man shrugging",
    category: "People & Body",
    aliases: ["man_shrugging"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "🤷‍♀️",
    description: "woman shrugging",
    category: "People & Body",
    aliases: ["woman_shrugging"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "🧑‍⚕️",
    description: "health worker",
    category: "People & Body",
    aliases: ["health_worker"],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: true
  },
  {
    emoji: "👨‍⚕️",
    description: "man health worker",
    category: "People & Body",
    aliases: ["man_health_worker"],
    tags: ["doctor", "nurse"],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "👩‍⚕️",
    description: "woman health worker",
    category: "People & Body",
    aliases: ["woman_health_worker"],
    tags: ["doctor", "nurse"],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "🧑‍🎓",
    description: "student",
    category: "People & Body",
    aliases: ["student"],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: true
  },
  {
    emoji: "👨‍🎓",
    description: "man student",
    category: "People & Body",
    aliases: ["man_student"],
    tags: ["graduation"],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "👩‍🎓",
    description: "woman student",
    category: "People & Body",
    aliases: ["woman_student"],
    tags: ["graduation"],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "🧑‍🏫",
    description: "teacher",
    category: "People & Body",
    aliases: ["teacher"],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: true
  },
  {
    emoji: "👨‍🏫",
    description: "man teacher",
    category: "People & Body",
    aliases: ["man_teacher"],
    tags: ["school", "professor"],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "👩‍🏫",
    description: "woman teacher",
    category: "People & Body",
    aliases: ["woman_teacher"],
    tags: ["school", "professor"],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "🧑‍⚖️",
    description: "judge",
    category: "People & Body",
    aliases: ["judge"],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: true
  },
  {
    emoji: "👨‍⚖️",
    description: "man judge",
    category: "People & Body",
    aliases: ["man_judge"],
    tags: ["justice"],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "👩‍⚖️",
    description: "woman judge",
    category: "People & Body",
    aliases: ["woman_judge"],
    tags: ["justice"],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "🧑‍🌾",
    description: "farmer",
    category: "People & Body",
    aliases: ["farmer"],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: true
  },
  {
    emoji: "👨‍🌾",
    description: "man farmer",
    category: "People & Body",
    aliases: ["man_farmer"],
    tags: [],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "👩‍🌾",
    description: "woman farmer",
    category: "People & Body",
    aliases: ["woman_farmer"],
    tags: [],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "🧑‍🍳",
    description: "cook",
    category: "People & Body",
    aliases: ["cook"],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: true
  },
  {
    emoji: "👨‍🍳",
    description: "man cook",
    category: "People & Body",
    aliases: ["man_cook"],
    tags: ["chef"],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "👩‍🍳",
    description: "woman cook",
    category: "People & Body",
    aliases: ["woman_cook"],
    tags: ["chef"],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "🧑‍🔧",
    description: "mechanic",
    category: "People & Body",
    aliases: ["mechanic"],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: true
  },
  {
    emoji: "👨‍🔧",
    description: "man mechanic",
    category: "People & Body",
    aliases: ["man_mechanic"],
    tags: [],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "👩‍🔧",
    description: "woman mechanic",
    category: "People & Body",
    aliases: ["woman_mechanic"],
    tags: [],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "🧑‍🏭",
    description: "factory worker",
    category: "People & Body",
    aliases: ["factory_worker"],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: true
  },
  {
    emoji: "👨‍🏭",
    description: "man factory worker",
    category: "People & Body",
    aliases: ["man_factory_worker"],
    tags: [],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "👩‍🏭",
    description: "woman factory worker",
    category: "People & Body",
    aliases: ["woman_factory_worker"],
    tags: [],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "🧑‍💼",
    description: "office worker",
    category: "People & Body",
    aliases: ["office_worker"],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: true
  },
  {
    emoji: "👨‍💼",
    description: "man office worker",
    category: "People & Body",
    aliases: ["man_office_worker"],
    tags: ["business"],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "👩‍💼",
    description: "woman office worker",
    category: "People & Body",
    aliases: ["woman_office_worker"],
    tags: ["business"],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "🧑‍🔬",
    description: "scientist",
    category: "People & Body",
    aliases: ["scientist"],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: true
  },
  {
    emoji: "👨‍🔬",
    description: "man scientist",
    category: "People & Body",
    aliases: ["man_scientist"],
    tags: ["research"],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "👩‍🔬",
    description: "woman scientist",
    category: "People & Body",
    aliases: ["woman_scientist"],
    tags: ["research"],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "🧑‍💻",
    description: "technologist",
    category: "People & Body",
    aliases: ["technologist"],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: true
  },
  {
    emoji: "👨‍💻",
    description: "man technologist",
    category: "People & Body",
    aliases: ["man_technologist"],
    tags: ["coder"],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "👩‍💻",
    description: "woman technologist",
    category: "People & Body",
    aliases: ["woman_technologist"],
    tags: ["coder"],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "🧑‍🎤",
    description: "singer",
    category: "People & Body",
    aliases: ["singer"],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: true
  },
  {
    emoji: "👨‍🎤",
    description: "man singer",
    category: "People & Body",
    aliases: ["man_singer"],
    tags: ["rockstar"],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "👩‍🎤",
    description: "woman singer",
    category: "People & Body",
    aliases: ["woman_singer"],
    tags: ["rockstar"],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "🧑‍🎨",
    description: "artist",
    category: "People & Body",
    aliases: ["artist"],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: true
  },
  {
    emoji: "👨‍🎨",
    description: "man artist",
    category: "People & Body",
    aliases: ["man_artist"],
    tags: ["painter"],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "👩‍🎨",
    description: "woman artist",
    category: "People & Body",
    aliases: ["woman_artist"],
    tags: ["painter"],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "🧑‍✈️",
    description: "pilot",
    category: "People & Body",
    aliases: ["pilot"],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: true
  },
  {
    emoji: "👨‍✈️",
    description: "man pilot",
    category: "People & Body",
    aliases: ["man_pilot"],
    tags: [],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "👩‍✈️",
    description: "woman pilot",
    category: "People & Body",
    aliases: ["woman_pilot"],
    tags: [],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "🧑‍🚀",
    description: "astronaut",
    category: "People & Body",
    aliases: ["astronaut"],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: true
  },
  {
    emoji: "👨‍🚀",
    description: "man astronaut",
    category: "People & Body",
    aliases: ["man_astronaut"],
    tags: ["space"],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "👩‍🚀",
    description: "woman astronaut",
    category: "People & Body",
    aliases: ["woman_astronaut"],
    tags: ["space"],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "🧑‍🚒",
    description: "firefighter",
    category: "People & Body",
    aliases: ["firefighter"],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: true
  },
  {
    emoji: "👨‍🚒",
    description: "man firefighter",
    category: "People & Body",
    aliases: ["man_firefighter"],
    tags: [],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "👩‍🚒",
    description: "woman firefighter",
    category: "People & Body",
    aliases: ["woman_firefighter"],
    tags: [],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "👮",
    description: "police officer",
    category: "People & Body",
    aliases: ["police_officer", "cop"],
    tags: ["law"],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "👮‍♂️",
    description: "man police officer",
    category: "People & Body",
    aliases: ["policeman"],
    tags: ["law", "cop"],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "👮‍♀️",
    description: "woman police officer",
    category: "People & Body",
    aliases: ["policewoman"],
    tags: ["law", "cop"],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: true
  },
  {
    emoji: "🕵️",
    description: "detective",
    category: "People & Body",
    aliases: ["detective"],
    tags: ["sleuth"],
    unicode_version: "7.0",
    ios_version: "9.1",
    skin_tones: true
  },
  {
    emoji: "🕵️‍♂️",
    description: "man detective",
    category: "People & Body",
    aliases: ["male_detective"],
    tags: ["sleuth"],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🕵️‍♀️",
    description: "woman detective",
    category: "People & Body",
    aliases: ["female_detective"],
    tags: ["sleuth"],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: true
  },
  {
    emoji: "💂",
    description: "guard",
    category: "People & Body",
    aliases: ["guard"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "💂‍♂️",
    description: "man guard",
    category: "People & Body",
    aliases: ["guardsman"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "💂‍♀️",
    description: "woman guard",
    category: "People & Body",
    aliases: ["guardswoman"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: true
  },
  {
    emoji: "🥷",
    description: "ninja",
    category: "People & Body",
    aliases: ["ninja"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0",
    skin_tones: true
  },
  {
    emoji: "👷",
    description: "construction worker",
    category: "People & Body",
    aliases: ["construction_worker"],
    tags: ["helmet"],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "👷‍♂️",
    description: "man construction worker",
    category: "People & Body",
    aliases: ["construction_worker_man"],
    tags: ["helmet"],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "👷‍♀️",
    description: "woman construction worker",
    category: "People & Body",
    aliases: ["construction_worker_woman"],
    tags: ["helmet"],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: true
  },
  {
    emoji: "🤴",
    description: "prince",
    category: "People & Body",
    aliases: ["prince"],
    tags: ["crown", "royal"],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "👸",
    description: "princess",
    category: "People & Body",
    aliases: ["princess"],
    tags: ["crown", "royal"],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "👳",
    description: "person wearing turban",
    category: "People & Body",
    aliases: ["person_with_turban"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "👳‍♂️",
    description: "man wearing turban",
    category: "People & Body",
    aliases: ["man_with_turban"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "👳‍♀️",
    description: "woman wearing turban",
    category: "People & Body",
    aliases: ["woman_with_turban"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: true
  },
  {
    emoji: "👲",
    description: "person with skullcap",
    category: "People & Body",
    aliases: ["man_with_gua_pi_mao"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "🧕",
    description: "woman with headscarf",
    category: "People & Body",
    aliases: ["woman_with_headscarf"],
    tags: ["hijab"],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🤵",
    description: "person in tuxedo",
    category: "People & Body",
    aliases: ["person_in_tuxedo"],
    tags: ["groom", "marriage", "wedding"],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "🤵‍♂️",
    description: "man in tuxedo",
    category: "People & Body",
    aliases: ["man_in_tuxedo"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0",
    skin_tones: true
  },
  {
    emoji: "🤵‍♀️",
    description: "woman in tuxedo",
    category: "People & Body",
    aliases: ["woman_in_tuxedo"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0",
    skin_tones: true
  },
  {
    emoji: "👰",
    description: "person with veil",
    category: "People & Body",
    aliases: ["person_with_veil"],
    tags: ["marriage", "wedding"],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "👰‍♂️",
    description: "man with veil",
    category: "People & Body",
    aliases: ["man_with_veil"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0",
    skin_tones: true
  },
  {
    emoji: "👰‍♀️",
    description: "woman with veil",
    category: "People & Body",
    aliases: ["woman_with_veil", "bride_with_veil"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0",
    skin_tones: true
  },
  {
    emoji: "🤰",
    description: "pregnant woman",
    category: "People & Body",
    aliases: ["pregnant_woman"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "🤱",
    description: "breast-feeding",
    category: "People & Body",
    aliases: ["breast_feeding"],
    tags: ["nursing"],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "👩‍🍼",
    description: "woman feeding baby",
    category: "People & Body",
    aliases: ["woman_feeding_baby"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0",
    skin_tones: true
  },
  {
    emoji: "👨‍🍼",
    description: "man feeding baby",
    category: "People & Body",
    aliases: ["man_feeding_baby"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0",
    skin_tones: true
  },
  {
    emoji: "🧑‍🍼",
    description: "person feeding baby",
    category: "People & Body",
    aliases: ["person_feeding_baby"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0",
    skin_tones: true
  },
  {
    emoji: "👼",
    description: "baby angel",
    category: "People & Body",
    aliases: ["angel"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "🎅",
    description: "Santa Claus",
    category: "People & Body",
    aliases: ["santa"],
    tags: ["christmas"],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "🤶",
    description: "Mrs. Claus",
    category: "People & Body",
    aliases: ["mrs_claus"],
    tags: ["santa"],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "🧑‍🎄",
    description: "mx claus",
    category: "People & Body",
    aliases: ["mx_claus"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0",
    skin_tones: true
  },
  {
    emoji: "🦸",
    description: "superhero",
    category: "People & Body",
    aliases: ["superhero"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🦸‍♂️",
    description: "man superhero",
    category: "People & Body",
    aliases: ["superhero_man"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🦸‍♀️",
    description: "woman superhero",
    category: "People & Body",
    aliases: ["superhero_woman"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🦹",
    description: "supervillain",
    category: "People & Body",
    aliases: ["supervillain"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🦹‍♂️",
    description: "man supervillain",
    category: "People & Body",
    aliases: ["supervillain_man"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🦹‍♀️",
    description: "woman supervillain",
    category: "People & Body",
    aliases: ["supervillain_woman"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🧙",
    description: "mage",
    category: "People & Body",
    aliases: ["mage"],
    tags: ["wizard"],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🧙‍♂️",
    description: "man mage",
    category: "People & Body",
    aliases: ["mage_man"],
    tags: ["wizard"],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🧙‍♀️",
    description: "woman mage",
    category: "People & Body",
    aliases: ["mage_woman"],
    tags: ["wizard"],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🧚",
    description: "fairy",
    category: "People & Body",
    aliases: ["fairy"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🧚‍♂️",
    description: "man fairy",
    category: "People & Body",
    aliases: ["fairy_man"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🧚‍♀️",
    description: "woman fairy",
    category: "People & Body",
    aliases: ["fairy_woman"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🧛",
    description: "vampire",
    category: "People & Body",
    aliases: ["vampire"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🧛‍♂️",
    description: "man vampire",
    category: "People & Body",
    aliases: ["vampire_man"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🧛‍♀️",
    description: "woman vampire",
    category: "People & Body",
    aliases: ["vampire_woman"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🧜",
    description: "merperson",
    category: "People & Body",
    aliases: ["merperson"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🧜‍♂️",
    description: "merman",
    category: "People & Body",
    aliases: ["merman"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🧜‍♀️",
    description: "mermaid",
    category: "People & Body",
    aliases: ["mermaid"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🧝",
    description: "elf",
    category: "People & Body",
    aliases: ["elf"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🧝‍♂️",
    description: "man elf",
    category: "People & Body",
    aliases: ["elf_man"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🧝‍♀️",
    description: "woman elf",
    category: "People & Body",
    aliases: ["elf_woman"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🧞",
    description: "genie",
    category: "People & Body",
    aliases: ["genie"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧞‍♂️",
    description: "man genie",
    category: "People & Body",
    aliases: ["genie_man"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧞‍♀️",
    description: "woman genie",
    category: "People & Body",
    aliases: ["genie_woman"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧟",
    description: "zombie",
    category: "People & Body",
    aliases: ["zombie"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧟‍♂️",
    description: "man zombie",
    category: "People & Body",
    aliases: ["zombie_man"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧟‍♀️",
    description: "woman zombie",
    category: "People & Body",
    aliases: ["zombie_woman"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "💆",
    description: "person getting massage",
    category: "People & Body",
    aliases: ["massage"],
    tags: ["spa"],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "💆‍♂️",
    description: "man getting massage",
    category: "People & Body",
    aliases: ["massage_man"],
    tags: ["spa"],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: true
  },
  {
    emoji: "💆‍♀️",
    description: "woman getting massage",
    category: "People & Body",
    aliases: ["massage_woman"],
    tags: ["spa"],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "💇",
    description: "person getting haircut",
    category: "People & Body",
    aliases: ["haircut"],
    tags: ["beauty"],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "💇‍♂️",
    description: "man getting haircut",
    category: "People & Body",
    aliases: ["haircut_man"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: true
  },
  {
    emoji: "💇‍♀️",
    description: "woman getting haircut",
    category: "People & Body",
    aliases: ["haircut_woman"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🚶",
    description: "person walking",
    category: "People & Body",
    aliases: ["walking"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "🚶‍♂️",
    description: "man walking",
    category: "People & Body",
    aliases: ["walking_man"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🚶‍♀️",
    description: "woman walking",
    category: "People & Body",
    aliases: ["walking_woman"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: true
  },
  {
    emoji: "🧍",
    description: "person standing",
    category: "People & Body",
    aliases: ["standing_person"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: true
  },
  {
    emoji: "🧍‍♂️",
    description: "man standing",
    category: "People & Body",
    aliases: ["standing_man"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: true
  },
  {
    emoji: "🧍‍♀️",
    description: "woman standing",
    category: "People & Body",
    aliases: ["standing_woman"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: true
  },
  {
    emoji: "🧎",
    description: "person kneeling",
    category: "People & Body",
    aliases: ["kneeling_person"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: true
  },
  {
    emoji: "🧎‍♂️",
    description: "man kneeling",
    category: "People & Body",
    aliases: ["kneeling_man"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: true
  },
  {
    emoji: "🧎‍♀️",
    description: "woman kneeling",
    category: "People & Body",
    aliases: ["kneeling_woman"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: true
  },
  {
    emoji: "🧑‍🦯",
    description: "person with white cane",
    category: "People & Body",
    aliases: ["person_with_probing_cane"],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: true
  },
  {
    emoji: "👨‍🦯",
    description: "man with white cane",
    category: "People & Body",
    aliases: ["man_with_probing_cane"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: true
  },
  {
    emoji: "👩‍🦯",
    description: "woman with white cane",
    category: "People & Body",
    aliases: ["woman_with_probing_cane"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: true
  },
  {
    emoji: "🧑‍🦼",
    description: "person in motorized wheelchair",
    category: "People & Body",
    aliases: ["person_in_motorized_wheelchair"],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: true
  },
  {
    emoji: "👨‍🦼",
    description: "man in motorized wheelchair",
    category: "People & Body",
    aliases: ["man_in_motorized_wheelchair"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: true
  },
  {
    emoji: "👩‍🦼",
    description: "woman in motorized wheelchair",
    category: "People & Body",
    aliases: ["woman_in_motorized_wheelchair"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: true
  },
  {
    emoji: "🧑‍🦽",
    description: "person in manual wheelchair",
    category: "People & Body",
    aliases: ["person_in_manual_wheelchair"],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: true
  },
  {
    emoji: "👨‍🦽",
    description: "man in manual wheelchair",
    category: "People & Body",
    aliases: ["man_in_manual_wheelchair"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: true
  },
  {
    emoji: "👩‍🦽",
    description: "woman in manual wheelchair",
    category: "People & Body",
    aliases: ["woman_in_manual_wheelchair"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: true
  },
  {
    emoji: "🏃",
    description: "person running",
    category: "People & Body",
    aliases: ["runner", "running"],
    tags: ["exercise", "workout", "marathon"],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "🏃‍♂️",
    description: "man running",
    category: "People & Body",
    aliases: ["running_man"],
    tags: ["exercise", "workout", "marathon"],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🏃‍♀️",
    description: "woman running",
    category: "People & Body",
    aliases: ["running_woman"],
    tags: ["exercise", "workout", "marathon"],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: true
  },
  {
    emoji: "💃",
    description: "woman dancing",
    category: "People & Body",
    aliases: ["woman_dancing", "dancer"],
    tags: ["dress"],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "🕺",
    description: "man dancing",
    category: "People & Body",
    aliases: ["man_dancing"],
    tags: ["dancer"],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "🕴️",
    description: "person in suit levitating",
    category: "People & Body",
    aliases: ["business_suit_levitating"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1",
    skin_tones: true
  },
  {
    emoji: "👯",
    description: "people with bunny ears",
    category: "People & Body",
    aliases: ["dancers"],
    tags: ["bunny"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👯‍♂️",
    description: "men with bunny ears",
    category: "People & Body",
    aliases: ["dancing_men"],
    tags: ["bunny"],
    unicode_version: "6.0",
    ios_version: "10.0"
  },
  {
    emoji: "👯‍♀️",
    description: "women with bunny ears",
    category: "People & Body",
    aliases: ["dancing_women"],
    tags: ["bunny"],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧖",
    description: "person in steamy room",
    category: "People & Body",
    aliases: ["sauna_person"],
    tags: ["steamy"],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🧖‍♂️",
    description: "man in steamy room",
    category: "People & Body",
    aliases: ["sauna_man"],
    tags: ["steamy"],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🧖‍♀️",
    description: "woman in steamy room",
    category: "People & Body",
    aliases: ["sauna_woman"],
    tags: ["steamy"],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🧗",
    description: "person climbing",
    category: "People & Body",
    aliases: ["climbing"],
    tags: ["bouldering"],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🧗‍♂️",
    description: "man climbing",
    category: "People & Body",
    aliases: ["climbing_man"],
    tags: ["bouldering"],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🧗‍♀️",
    description: "woman climbing",
    category: "People & Body",
    aliases: ["climbing_woman"],
    tags: ["bouldering"],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🤺",
    description: "person fencing",
    category: "People & Body",
    aliases: ["person_fencing"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🏇",
    description: "horse racing",
    category: "People & Body",
    aliases: ["horse_racing"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "⛷️",
    description: "skier",
    category: "People & Body",
    aliases: ["skier"],
    tags: [],
    unicode_version: "5.2",
    ios_version: "9.1"
  },
  {
    emoji: "🏂",
    description: "snowboarder",
    category: "People & Body",
    aliases: ["snowboarder"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "🏌️",
    description: "person golfing",
    category: "People & Body",
    aliases: ["golfing"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1",
    skin_tones: true
  },
  {
    emoji: "🏌️‍♂️",
    description: "man golfing",
    category: "People & Body",
    aliases: ["golfing_man"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🏌️‍♀️",
    description: "woman golfing",
    category: "People & Body",
    aliases: ["golfing_woman"],
    tags: [],
    unicode_version: "",
    ios_version: "10.0",
    skin_tones: true
  },
  {
    emoji: "🏄",
    description: "person surfing",
    category: "People & Body",
    aliases: ["surfer"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "🏄‍♂️",
    description: "man surfing",
    category: "People & Body",
    aliases: ["surfing_man"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🏄‍♀️",
    description: "woman surfing",
    category: "People & Body",
    aliases: ["surfing_woman"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "10.0",
    skin_tones: true
  },
  {
    emoji: "🚣",
    description: "person rowing boat",
    category: "People & Body",
    aliases: ["rowboat"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "🚣‍♂️",
    description: "man rowing boat",
    category: "People & Body",
    aliases: ["rowing_man"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🚣‍♀️",
    description: "woman rowing boat",
    category: "People & Body",
    aliases: ["rowing_woman"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: true
  },
  {
    emoji: "🏊",
    description: "person swimming",
    category: "People & Body",
    aliases: ["swimmer"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "🏊‍♂️",
    description: "man swimming",
    category: "People & Body",
    aliases: ["swimming_man"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🏊‍♀️",
    description: "woman swimming",
    category: "People & Body",
    aliases: ["swimming_woman"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: true
  },
  {
    emoji: "⛹️",
    description: "person bouncing ball",
    category: "People & Body",
    aliases: ["bouncing_ball_person"],
    tags: ["basketball"],
    unicode_version: "5.2",
    ios_version: "9.1",
    skin_tones: true
  },
  {
    emoji: "⛹️‍♂️",
    description: "man bouncing ball",
    category: "People & Body",
    aliases: ["bouncing_ball_man", "basketball_man"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "⛹️‍♀️",
    description: "woman bouncing ball",
    category: "People & Body",
    aliases: ["bouncing_ball_woman", "basketball_woman"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "10.0",
    skin_tones: true
  },
  {
    emoji: "🏋️",
    description: "person lifting weights",
    category: "People & Body",
    aliases: ["weight_lifting"],
    tags: ["gym", "workout"],
    unicode_version: "7.0",
    ios_version: "9.1",
    skin_tones: true
  },
  {
    emoji: "🏋️‍♂️",
    description: "man lifting weights",
    category: "People & Body",
    aliases: ["weight_lifting_man"],
    tags: ["gym", "workout"],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🏋️‍♀️",
    description: "woman lifting weights",
    category: "People & Body",
    aliases: ["weight_lifting_woman"],
    tags: ["gym", "workout"],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: true
  },
  {
    emoji: "🚴",
    description: "person biking",
    category: "People & Body",
    aliases: ["bicyclist"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "🚴‍♂️",
    description: "man biking",
    category: "People & Body",
    aliases: ["biking_man"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🚴‍♀️",
    description: "woman biking",
    category: "People & Body",
    aliases: ["biking_woman"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: true
  },
  {
    emoji: "🚵",
    description: "person mountain biking",
    category: "People & Body",
    aliases: ["mountain_bicyclist"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "🚵‍♂️",
    description: "man mountain biking",
    category: "People & Body",
    aliases: ["mountain_biking_man"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🚵‍♀️",
    description: "woman mountain biking",
    category: "People & Body",
    aliases: ["mountain_biking_woman"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: true
  },
  {
    emoji: "🤸",
    description: "person cartwheeling",
    category: "People & Body",
    aliases: ["cartwheeling"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🤸‍♂️",
    description: "man cartwheeling",
    category: "People & Body",
    aliases: ["man_cartwheeling"],
    tags: [],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "🤸‍♀️",
    description: "woman cartwheeling",
    category: "People & Body",
    aliases: ["woman_cartwheeling"],
    tags: [],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "🤼",
    description: "people wrestling",
    category: "People & Body",
    aliases: ["wrestling"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🤼‍♂️",
    description: "men wrestling",
    category: "People & Body",
    aliases: ["men_wrestling"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🤼‍♀️",
    description: "women wrestling",
    category: "People & Body",
    aliases: ["women_wrestling"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🤽",
    description: "person playing water polo",
    category: "People & Body",
    aliases: ["water_polo"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🤽‍♂️",
    description: "man playing water polo",
    category: "People & Body",
    aliases: ["man_playing_water_polo"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "🤽‍♀️",
    description: "woman playing water polo",
    category: "People & Body",
    aliases: ["woman_playing_water_polo"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "🤾",
    description: "person playing handball",
    category: "People & Body",
    aliases: ["handball_person"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🤾‍♂️",
    description: "man playing handball",
    category: "People & Body",
    aliases: ["man_playing_handball"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "🤾‍♀️",
    description: "woman playing handball",
    category: "People & Body",
    aliases: ["woman_playing_handball"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "🤹",
    description: "person juggling",
    category: "People & Body",
    aliases: ["juggling_person"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🤹‍♂️",
    description: "man juggling",
    category: "People & Body",
    aliases: ["man_juggling"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "🤹‍♀️",
    description: "woman juggling",
    category: "People & Body",
    aliases: ["woman_juggling"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: true
  },
  {
    emoji: "🧘",
    description: "person in lotus position",
    category: "People & Body",
    aliases: ["lotus_position"],
    tags: ["meditation"],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🧘‍♂️",
    description: "man in lotus position",
    category: "People & Body",
    aliases: ["lotus_position_man"],
    tags: ["meditation"],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🧘‍♀️",
    description: "woman in lotus position",
    category: "People & Body",
    aliases: ["lotus_position_woman"],
    tags: ["meditation"],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "🛀",
    description: "person taking bath",
    category: "People & Body",
    aliases: ["bath"],
    tags: ["shower"],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "🛌",
    description: "person in bed",
    category: "People & Body",
    aliases: ["sleeping_bed"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1",
    skin_tones: true
  },
  {
    emoji: "🧑‍🤝‍🧑",
    description: "people holding hands",
    category: "People & Body",
    aliases: ["people_holding_hands"],
    tags: ["couple", "date"],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: true
  },
  {
    emoji: "👭",
    description: "women holding hands",
    category: "People & Body",
    aliases: ["two_women_holding_hands"],
    tags: ["couple", "date"],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "👫",
    description: "woman and man holding hands",
    category: "People & Body",
    aliases: ["couple"],
    tags: ["date"],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "👬",
    description: "men holding hands",
    category: "People & Body",
    aliases: ["two_men_holding_hands"],
    tags: ["couple", "date"],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "💏",
    description: "kiss",
    category: "People & Body",
    aliases: ["couplekiss"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "👩‍❤️‍💋‍👨",
    description: "kiss: woman, man",
    category: "People & Body",
    aliases: ["couplekiss_man_woman"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "👨‍❤️‍💋‍👨",
    description: "kiss: man, man",
    category: "People & Body",
    aliases: ["couplekiss_man_man"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3",
    skin_tones: true
  },
  {
    emoji: "👩‍❤️‍💋‍👩",
    description: "kiss: woman, woman",
    category: "People & Body",
    aliases: ["couplekiss_woman_woman"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3",
    skin_tones: true
  },
  {
    emoji: "💑",
    description: "couple with heart",
    category: "People & Body",
    aliases: ["couple_with_heart"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: true
  },
  {
    emoji: "👩‍❤️‍👨",
    description: "couple with heart: woman, man",
    category: "People & Body",
    aliases: ["couple_with_heart_woman_man"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: true
  },
  {
    emoji: "👨‍❤️‍👨",
    description: "couple with heart: man, man",
    category: "People & Body",
    aliases: ["couple_with_heart_man_man"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3",
    skin_tones: true
  },
  {
    emoji: "👩‍❤️‍👩",
    description: "couple with heart: woman, woman",
    category: "People & Body",
    aliases: ["couple_with_heart_woman_woman"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3",
    skin_tones: true
  },
  {
    emoji: "👪",
    description: "family",
    category: "People & Body",
    aliases: ["family"],
    tags: ["home", "parents", "child"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👨‍👩‍👦",
    description: "family: man, woman, boy",
    category: "People & Body",
    aliases: ["family_man_woman_boy"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "👨‍👩‍👧",
    description: "family: man, woman, girl",
    category: "People & Body",
    aliases: ["family_man_woman_girl"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "👨‍👩‍👧‍👦",
    description: "family: man, woman, girl, boy",
    category: "People & Body",
    aliases: ["family_man_woman_girl_boy"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "👨‍👩‍👦‍👦",
    description: "family: man, woman, boy, boy",
    category: "People & Body",
    aliases: ["family_man_woman_boy_boy"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "👨‍👩‍👧‍👧",
    description: "family: man, woman, girl, girl",
    category: "People & Body",
    aliases: ["family_man_woman_girl_girl"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "👨‍👨‍👦",
    description: "family: man, man, boy",
    category: "People & Body",
    aliases: ["family_man_man_boy"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "👨‍👨‍👧",
    description: "family: man, man, girl",
    category: "People & Body",
    aliases: ["family_man_man_girl"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "👨‍👨‍👧‍👦",
    description: "family: man, man, girl, boy",
    category: "People & Body",
    aliases: ["family_man_man_girl_boy"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "👨‍👨‍👦‍👦",
    description: "family: man, man, boy, boy",
    category: "People & Body",
    aliases: ["family_man_man_boy_boy"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "👨‍👨‍👧‍👧",
    description: "family: man, man, girl, girl",
    category: "People & Body",
    aliases: ["family_man_man_girl_girl"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "👩‍👩‍👦",
    description: "family: woman, woman, boy",
    category: "People & Body",
    aliases: ["family_woman_woman_boy"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "👩‍👩‍👧",
    description: "family: woman, woman, girl",
    category: "People & Body",
    aliases: ["family_woman_woman_girl"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "👩‍👩‍👧‍👦",
    description: "family: woman, woman, girl, boy",
    category: "People & Body",
    aliases: ["family_woman_woman_girl_boy"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "👩‍👩‍👦‍👦",
    description: "family: woman, woman, boy, boy",
    category: "People & Body",
    aliases: ["family_woman_woman_boy_boy"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "👩‍👩‍👧‍👧",
    description: "family: woman, woman, girl, girl",
    category: "People & Body",
    aliases: ["family_woman_woman_girl_girl"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "👨‍👦",
    description: "family: man, boy",
    category: "People & Body",
    aliases: ["family_man_boy"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0"
  },
  {
    emoji: "👨‍👦‍👦",
    description: "family: man, boy, boy",
    category: "People & Body",
    aliases: ["family_man_boy_boy"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0"
  },
  {
    emoji: "👨‍👧",
    description: "family: man, girl",
    category: "People & Body",
    aliases: ["family_man_girl"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0"
  },
  {
    emoji: "👨‍👧‍👦",
    description: "family: man, girl, boy",
    category: "People & Body",
    aliases: ["family_man_girl_boy"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0"
  },
  {
    emoji: "👨‍👧‍👧",
    description: "family: man, girl, girl",
    category: "People & Body",
    aliases: ["family_man_girl_girl"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0"
  },
  {
    emoji: "👩‍👦",
    description: "family: woman, boy",
    category: "People & Body",
    aliases: ["family_woman_boy"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0"
  },
  {
    emoji: "👩‍👦‍👦",
    description: "family: woman, boy, boy",
    category: "People & Body",
    aliases: ["family_woman_boy_boy"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0"
  },
  {
    emoji: "👩‍👧",
    description: "family: woman, girl",
    category: "People & Body",
    aliases: ["family_woman_girl"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0"
  },
  {
    emoji: "👩‍👧‍👦",
    description: "family: woman, girl, boy",
    category: "People & Body",
    aliases: ["family_woman_girl_boy"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0"
  },
  {
    emoji: "👩‍👧‍👧",
    description: "family: woman, girl, girl",
    category: "People & Body",
    aliases: ["family_woman_girl_girl"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0"
  },
  {
    emoji: "🗣️",
    description: "speaking head",
    category: "People & Body",
    aliases: ["speaking_head"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "👤",
    description: "bust in silhouette",
    category: "People & Body",
    aliases: ["bust_in_silhouette"],
    tags: ["user"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👥",
    description: "busts in silhouette",
    category: "People & Body",
    aliases: ["busts_in_silhouette"],
    tags: ["users", "group", "team"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🫂",
    description: "people hugging",
    category: "People & Body",
    aliases: ["people_hugging"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "👣",
    description: "footprints",
    category: "People & Body",
    aliases: ["footprints"],
    tags: ["feet", "tracks"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐵",
    description: "monkey face",
    category: "Animals & Nature",
    aliases: ["monkey_face"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐒",
    description: "monkey",
    category: "Animals & Nature",
    aliases: ["monkey"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🦍",
    description: "gorilla",
    category: "Animals & Nature",
    aliases: ["gorilla"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🦧",
    description: "orangutan",
    category: "Animals & Nature",
    aliases: ["orangutan"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🐶",
    description: "dog face",
    category: "Animals & Nature",
    aliases: ["dog"],
    tags: ["pet"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐕",
    description: "dog",
    category: "Animals & Nature",
    aliases: ["dog2"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🦮",
    description: "guide dog",
    category: "Animals & Nature",
    aliases: ["guide_dog"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🐕‍🦺",
    description: "service dog",
    category: "Animals & Nature",
    aliases: ["service_dog"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🐩",
    description: "poodle",
    category: "Animals & Nature",
    aliases: ["poodle"],
    tags: ["dog"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐺",
    description: "wolf",
    category: "Animals & Nature",
    aliases: ["wolf"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🦊",
    description: "fox",
    category: "Animals & Nature",
    aliases: ["fox_face"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🦝",
    description: "raccoon",
    category: "Animals & Nature",
    aliases: ["raccoon"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🐱",
    description: "cat face",
    category: "Animals & Nature",
    aliases: ["cat"],
    tags: ["pet"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐈",
    description: "cat",
    category: "Animals & Nature",
    aliases: ["cat2"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐈‍⬛",
    description: "black cat",
    category: "Animals & Nature",
    aliases: ["black_cat"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🦁",
    description: "lion",
    category: "Animals & Nature",
    aliases: ["lion"],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🐯",
    description: "tiger face",
    category: "Animals & Nature",
    aliases: ["tiger"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐅",
    description: "tiger",
    category: "Animals & Nature",
    aliases: ["tiger2"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐆",
    description: "leopard",
    category: "Animals & Nature",
    aliases: ["leopard"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐴",
    description: "horse face",
    category: "Animals & Nature",
    aliases: ["horse"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐎",
    description: "horse",
    category: "Animals & Nature",
    aliases: ["racehorse"],
    tags: ["speed"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🦄",
    description: "unicorn",
    category: "Animals & Nature",
    aliases: ["unicorn"],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🦓",
    description: "zebra",
    category: "Animals & Nature",
    aliases: ["zebra"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🦌",
    description: "deer",
    category: "Animals & Nature",
    aliases: ["deer"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🦬",
    description: "bison",
    category: "Animals & Nature",
    aliases: ["bison"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🐮",
    description: "cow face",
    category: "Animals & Nature",
    aliases: ["cow"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐂",
    description: "ox",
    category: "Animals & Nature",
    aliases: ["ox"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐃",
    description: "water buffalo",
    category: "Animals & Nature",
    aliases: ["water_buffalo"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐄",
    description: "cow",
    category: "Animals & Nature",
    aliases: ["cow2"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐷",
    description: "pig face",
    category: "Animals & Nature",
    aliases: ["pig"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐖",
    description: "pig",
    category: "Animals & Nature",
    aliases: ["pig2"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐗",
    description: "boar",
    category: "Animals & Nature",
    aliases: ["boar"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐽",
    description: "pig nose",
    category: "Animals & Nature",
    aliases: ["pig_nose"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐏",
    description: "ram",
    category: "Animals & Nature",
    aliases: ["ram"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐑",
    description: "ewe",
    category: "Animals & Nature",
    aliases: ["sheep"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐐",
    description: "goat",
    category: "Animals & Nature",
    aliases: ["goat"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐪",
    description: "camel",
    category: "Animals & Nature",
    aliases: ["dromedary_camel"],
    tags: ["desert"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐫",
    description: "two-hump camel",
    category: "Animals & Nature",
    aliases: ["camel"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🦙",
    description: "llama",
    category: "Animals & Nature",
    aliases: ["llama"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🦒",
    description: "giraffe",
    category: "Animals & Nature",
    aliases: ["giraffe"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🐘",
    description: "elephant",
    category: "Animals & Nature",
    aliases: ["elephant"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🦣",
    description: "mammoth",
    category: "Animals & Nature",
    aliases: ["mammoth"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🦏",
    description: "rhinoceros",
    category: "Animals & Nature",
    aliases: ["rhinoceros"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🦛",
    description: "hippopotamus",
    category: "Animals & Nature",
    aliases: ["hippopotamus"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🐭",
    description: "mouse face",
    category: "Animals & Nature",
    aliases: ["mouse"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐁",
    description: "mouse",
    category: "Animals & Nature",
    aliases: ["mouse2"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐀",
    description: "rat",
    category: "Animals & Nature",
    aliases: ["rat"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐹",
    description: "hamster",
    category: "Animals & Nature",
    aliases: ["hamster"],
    tags: ["pet"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐰",
    description: "rabbit face",
    category: "Animals & Nature",
    aliases: ["rabbit"],
    tags: ["bunny"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐇",
    description: "rabbit",
    category: "Animals & Nature",
    aliases: ["rabbit2"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐿️",
    description: "chipmunk",
    category: "Animals & Nature",
    aliases: ["chipmunk"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🦫",
    description: "beaver",
    category: "Animals & Nature",
    aliases: ["beaver"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🦔",
    description: "hedgehog",
    category: "Animals & Nature",
    aliases: ["hedgehog"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🦇",
    description: "bat",
    category: "Animals & Nature",
    aliases: ["bat"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🐻",
    description: "bear",
    category: "Animals & Nature",
    aliases: ["bear"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐻‍❄️",
    description: "polar bear",
    category: "Animals & Nature",
    aliases: ["polar_bear"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🐨",
    description: "koala",
    category: "Animals & Nature",
    aliases: ["koala"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐼",
    description: "panda",
    category: "Animals & Nature",
    aliases: ["panda_face"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🦥",
    description: "sloth",
    category: "Animals & Nature",
    aliases: ["sloth"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🦦",
    description: "otter",
    category: "Animals & Nature",
    aliases: ["otter"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🦨",
    description: "skunk",
    category: "Animals & Nature",
    aliases: ["skunk"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🦘",
    description: "kangaroo",
    category: "Animals & Nature",
    aliases: ["kangaroo"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🦡",
    description: "badger",
    category: "Animals & Nature",
    aliases: ["badger"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🐾",
    description: "paw prints",
    category: "Animals & Nature",
    aliases: ["feet", "paw_prints"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🦃",
    description: "turkey",
    category: "Animals & Nature",
    aliases: ["turkey"],
    tags: ["thanksgiving"],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🐔",
    description: "chicken",
    category: "Animals & Nature",
    aliases: ["chicken"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐓",
    description: "rooster",
    category: "Animals & Nature",
    aliases: ["rooster"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐣",
    description: "hatching chick",
    category: "Animals & Nature",
    aliases: ["hatching_chick"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐤",
    description: "baby chick",
    category: "Animals & Nature",
    aliases: ["baby_chick"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐥",
    description: "front-facing baby chick",
    category: "Animals & Nature",
    aliases: ["hatched_chick"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐦",
    description: "bird",
    category: "Animals & Nature",
    aliases: ["bird"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐧",
    description: "penguin",
    category: "Animals & Nature",
    aliases: ["penguin"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕊️",
    description: "dove",
    category: "Animals & Nature",
    aliases: ["dove"],
    tags: ["peace"],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🦅",
    description: "eagle",
    category: "Animals & Nature",
    aliases: ["eagle"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🦆",
    description: "duck",
    category: "Animals & Nature",
    aliases: ["duck"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🦢",
    description: "swan",
    category: "Animals & Nature",
    aliases: ["swan"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🦉",
    description: "owl",
    category: "Animals & Nature",
    aliases: ["owl"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🦤",
    description: "dodo",
    category: "Animals & Nature",
    aliases: ["dodo"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🪶",
    description: "feather",
    category: "Animals & Nature",
    aliases: ["feather"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🦩",
    description: "flamingo",
    category: "Animals & Nature",
    aliases: ["flamingo"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🦚",
    description: "peacock",
    category: "Animals & Nature",
    aliases: ["peacock"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🦜",
    description: "parrot",
    category: "Animals & Nature",
    aliases: ["parrot"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🐸",
    description: "frog",
    category: "Animals & Nature",
    aliases: ["frog"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐊",
    description: "crocodile",
    category: "Animals & Nature",
    aliases: ["crocodile"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐢",
    description: "turtle",
    category: "Animals & Nature",
    aliases: ["turtle"],
    tags: ["slow"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🦎",
    description: "lizard",
    category: "Animals & Nature",
    aliases: ["lizard"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🐍",
    description: "snake",
    category: "Animals & Nature",
    aliases: ["snake"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐲",
    description: "dragon face",
    category: "Animals & Nature",
    aliases: ["dragon_face"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐉",
    description: "dragon",
    category: "Animals & Nature",
    aliases: ["dragon"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🦕",
    description: "sauropod",
    category: "Animals & Nature",
    aliases: ["sauropod"],
    tags: ["dinosaur"],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🦖",
    description: "T-Rex",
    category: "Animals & Nature",
    aliases: ["t-rex"],
    tags: ["dinosaur"],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🐳",
    description: "spouting whale",
    category: "Animals & Nature",
    aliases: ["whale"],
    tags: ["sea"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐋",
    description: "whale",
    category: "Animals & Nature",
    aliases: ["whale2"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐬",
    description: "dolphin",
    category: "Animals & Nature",
    aliases: ["dolphin", "flipper"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🦭",
    description: "seal",
    category: "Animals & Nature",
    aliases: ["seal"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🐟",
    description: "fish",
    category: "Animals & Nature",
    aliases: ["fish"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐠",
    description: "tropical fish",
    category: "Animals & Nature",
    aliases: ["tropical_fish"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐡",
    description: "blowfish",
    category: "Animals & Nature",
    aliases: ["blowfish"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🦈",
    description: "shark",
    category: "Animals & Nature",
    aliases: ["shark"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🐙",
    description: "octopus",
    category: "Animals & Nature",
    aliases: ["octopus"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐚",
    description: "spiral shell",
    category: "Animals & Nature",
    aliases: ["shell"],
    tags: ["sea", "beach"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐌",
    description: "snail",
    category: "Animals & Nature",
    aliases: ["snail"],
    tags: ["slow"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🦋",
    description: "butterfly",
    category: "Animals & Nature",
    aliases: ["butterfly"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🐛",
    description: "bug",
    category: "Animals & Nature",
    aliases: ["bug"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐜",
    description: "ant",
    category: "Animals & Nature",
    aliases: ["ant"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐝",
    description: "honeybee",
    category: "Animals & Nature",
    aliases: ["bee", "honeybee"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪲",
    description: "beetle",
    category: "Animals & Nature",
    aliases: ["beetle"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🐞",
    description: "lady beetle",
    category: "Animals & Nature",
    aliases: ["lady_beetle"],
    tags: ["bug"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🦗",
    description: "cricket",
    category: "Animals & Nature",
    aliases: ["cricket"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🪳",
    description: "cockroach",
    category: "Animals & Nature",
    aliases: ["cockroach"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🕷️",
    description: "spider",
    category: "Animals & Nature",
    aliases: ["spider"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🕸️",
    description: "spider web",
    category: "Animals & Nature",
    aliases: ["spider_web"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🦂",
    description: "scorpion",
    category: "Animals & Nature",
    aliases: ["scorpion"],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🦟",
    description: "mosquito",
    category: "Animals & Nature",
    aliases: ["mosquito"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🪰",
    description: "fly",
    category: "Animals & Nature",
    aliases: ["fly"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🪱",
    description: "worm",
    category: "Animals & Nature",
    aliases: ["worm"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🦠",
    description: "microbe",
    category: "Animals & Nature",
    aliases: ["microbe"],
    tags: ["germ"],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "💐",
    description: "bouquet",
    category: "Animals & Nature",
    aliases: ["bouquet"],
    tags: ["flowers"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌸",
    description: "cherry blossom",
    category: "Animals & Nature",
    aliases: ["cherry_blossom"],
    tags: ["flower", "spring"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💮",
    description: "white flower",
    category: "Animals & Nature",
    aliases: ["white_flower"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏵️",
    description: "rosette",
    category: "Animals & Nature",
    aliases: ["rosette"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🌹",
    description: "rose",
    category: "Animals & Nature",
    aliases: ["rose"],
    tags: ["flower"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🥀",
    description: "wilted flower",
    category: "Animals & Nature",
    aliases: ["wilted_flower"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🌺",
    description: "hibiscus",
    category: "Animals & Nature",
    aliases: ["hibiscus"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌻",
    description: "sunflower",
    category: "Animals & Nature",
    aliases: ["sunflower"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌼",
    description: "blossom",
    category: "Animals & Nature",
    aliases: ["blossom"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌷",
    description: "tulip",
    category: "Animals & Nature",
    aliases: ["tulip"],
    tags: ["flower"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌱",
    description: "seedling",
    category: "Animals & Nature",
    aliases: ["seedling"],
    tags: ["plant"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪴",
    description: "potted plant",
    category: "Animals & Nature",
    aliases: ["potted_plant"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🌲",
    description: "evergreen tree",
    category: "Animals & Nature",
    aliases: ["evergreen_tree"],
    tags: ["wood"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌳",
    description: "deciduous tree",
    category: "Animals & Nature",
    aliases: ["deciduous_tree"],
    tags: ["wood"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌴",
    description: "palm tree",
    category: "Animals & Nature",
    aliases: ["palm_tree"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌵",
    description: "cactus",
    category: "Animals & Nature",
    aliases: ["cactus"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌾",
    description: "sheaf of rice",
    category: "Animals & Nature",
    aliases: ["ear_of_rice"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌿",
    description: "herb",
    category: "Animals & Nature",
    aliases: ["herb"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "☘️",
    description: "shamrock",
    category: "Animals & Nature",
    aliases: ["shamrock"],
    tags: [],
    unicode_version: "4.1",
    ios_version: "9.1"
  },
  {
    emoji: "🍀",
    description: "four leaf clover",
    category: "Animals & Nature",
    aliases: ["four_leaf_clover"],
    tags: ["luck"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍁",
    description: "maple leaf",
    category: "Animals & Nature",
    aliases: ["maple_leaf"],
    tags: ["canada"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍂",
    description: "fallen leaf",
    category: "Animals & Nature",
    aliases: ["fallen_leaf"],
    tags: ["autumn"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍃",
    description: "leaf fluttering in wind",
    category: "Animals & Nature",
    aliases: ["leaves"],
    tags: ["leaf"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍇",
    description: "grapes",
    category: "Food & Drink",
    aliases: ["grapes"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍈",
    description: "melon",
    category: "Food & Drink",
    aliases: ["melon"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍉",
    description: "watermelon",
    category: "Food & Drink",
    aliases: ["watermelon"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍊",
    description: "tangerine",
    category: "Food & Drink",
    aliases: ["tangerine", "orange", "mandarin"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍋",
    description: "lemon",
    category: "Food & Drink",
    aliases: ["lemon"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍌",
    description: "banana",
    category: "Food & Drink",
    aliases: ["banana"],
    tags: ["fruit"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍍",
    description: "pineapple",
    category: "Food & Drink",
    aliases: ["pineapple"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🥭",
    description: "mango",
    category: "Food & Drink",
    aliases: ["mango"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🍎",
    description: "red apple",
    category: "Food & Drink",
    aliases: ["apple"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍏",
    description: "green apple",
    category: "Food & Drink",
    aliases: ["green_apple"],
    tags: ["fruit"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍐",
    description: "pear",
    category: "Food & Drink",
    aliases: ["pear"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍑",
    description: "peach",
    category: "Food & Drink",
    aliases: ["peach"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍒",
    description: "cherries",
    category: "Food & Drink",
    aliases: ["cherries"],
    tags: ["fruit"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍓",
    description: "strawberry",
    category: "Food & Drink",
    aliases: ["strawberry"],
    tags: ["fruit"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🫐",
    description: "blueberries",
    category: "Food & Drink",
    aliases: ["blueberries"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🥝",
    description: "kiwi fruit",
    category: "Food & Drink",
    aliases: ["kiwi_fruit"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🍅",
    description: "tomato",
    category: "Food & Drink",
    aliases: ["tomato"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🫒",
    description: "olive",
    category: "Food & Drink",
    aliases: ["olive"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🥥",
    description: "coconut",
    category: "Food & Drink",
    aliases: ["coconut"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🥑",
    description: "avocado",
    category: "Food & Drink",
    aliases: ["avocado"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🍆",
    description: "eggplant",
    category: "Food & Drink",
    aliases: ["eggplant"],
    tags: ["aubergine"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🥔",
    description: "potato",
    category: "Food & Drink",
    aliases: ["potato"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🥕",
    description: "carrot",
    category: "Food & Drink",
    aliases: ["carrot"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🌽",
    description: "ear of corn",
    category: "Food & Drink",
    aliases: ["corn"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌶️",
    description: "hot pepper",
    category: "Food & Drink",
    aliases: ["hot_pepper"],
    tags: ["spicy"],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🫑",
    description: "bell pepper",
    category: "Food & Drink",
    aliases: ["bell_pepper"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🥒",
    description: "cucumber",
    category: "Food & Drink",
    aliases: ["cucumber"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🥬",
    description: "leafy green",
    category: "Food & Drink",
    aliases: ["leafy_green"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🥦",
    description: "broccoli",
    category: "Food & Drink",
    aliases: ["broccoli"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧄",
    description: "garlic",
    category: "Food & Drink",
    aliases: ["garlic"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🧅",
    description: "onion",
    category: "Food & Drink",
    aliases: ["onion"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🍄",
    description: "mushroom",
    category: "Food & Drink",
    aliases: ["mushroom"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🥜",
    description: "peanuts",
    category: "Food & Drink",
    aliases: ["peanuts"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🌰",
    description: "chestnut",
    category: "Food & Drink",
    aliases: ["chestnut"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍞",
    description: "bread",
    category: "Food & Drink",
    aliases: ["bread"],
    tags: ["toast"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🥐",
    description: "croissant",
    category: "Food & Drink",
    aliases: ["croissant"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🥖",
    description: "baguette bread",
    category: "Food & Drink",
    aliases: ["baguette_bread"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🫓",
    description: "flatbread",
    category: "Food & Drink",
    aliases: ["flatbread"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🥨",
    description: "pretzel",
    category: "Food & Drink",
    aliases: ["pretzel"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🥯",
    description: "bagel",
    category: "Food & Drink",
    aliases: ["bagel"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🥞",
    description: "pancakes",
    category: "Food & Drink",
    aliases: ["pancakes"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🧇",
    description: "waffle",
    category: "Food & Drink",
    aliases: ["waffle"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🧀",
    description: "cheese wedge",
    category: "Food & Drink",
    aliases: ["cheese"],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🍖",
    description: "meat on bone",
    category: "Food & Drink",
    aliases: ["meat_on_bone"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍗",
    description: "poultry leg",
    category: "Food & Drink",
    aliases: ["poultry_leg"],
    tags: ["meat", "chicken"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🥩",
    description: "cut of meat",
    category: "Food & Drink",
    aliases: ["cut_of_meat"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🥓",
    description: "bacon",
    category: "Food & Drink",
    aliases: ["bacon"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🍔",
    description: "hamburger",
    category: "Food & Drink",
    aliases: ["hamburger"],
    tags: ["burger"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍟",
    description: "french fries",
    category: "Food & Drink",
    aliases: ["fries"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍕",
    description: "pizza",
    category: "Food & Drink",
    aliases: ["pizza"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌭",
    description: "hot dog",
    category: "Food & Drink",
    aliases: ["hotdog"],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🥪",
    description: "sandwich",
    category: "Food & Drink",
    aliases: ["sandwich"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🌮",
    description: "taco",
    category: "Food & Drink",
    aliases: ["taco"],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🌯",
    description: "burrito",
    category: "Food & Drink",
    aliases: ["burrito"],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🫔",
    description: "tamale",
    category: "Food & Drink",
    aliases: ["tamale"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🥙",
    description: "stuffed flatbread",
    category: "Food & Drink",
    aliases: ["stuffed_flatbread"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🧆",
    description: "falafel",
    category: "Food & Drink",
    aliases: ["falafel"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🥚",
    description: "egg",
    category: "Food & Drink",
    aliases: ["egg"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🍳",
    description: "cooking",
    category: "Food & Drink",
    aliases: ["fried_egg"],
    tags: ["breakfast"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🥘",
    description: "shallow pan of food",
    category: "Food & Drink",
    aliases: ["shallow_pan_of_food"],
    tags: ["paella", "curry"],
    unicode_version: "",
    ios_version: "10.2"
  },
  {
    emoji: "🍲",
    description: "pot of food",
    category: "Food & Drink",
    aliases: ["stew"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🫕",
    description: "fondue",
    category: "Food & Drink",
    aliases: ["fondue"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🥣",
    description: "bowl with spoon",
    category: "Food & Drink",
    aliases: ["bowl_with_spoon"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🥗",
    description: "green salad",
    category: "Food & Drink",
    aliases: ["green_salad"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🍿",
    description: "popcorn",
    category: "Food & Drink",
    aliases: ["popcorn"],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🧈",
    description: "butter",
    category: "Food & Drink",
    aliases: ["butter"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🧂",
    description: "salt",
    category: "Food & Drink",
    aliases: ["salt"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🥫",
    description: "canned food",
    category: "Food & Drink",
    aliases: ["canned_food"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🍱",
    description: "bento box",
    category: "Food & Drink",
    aliases: ["bento"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍘",
    description: "rice cracker",
    category: "Food & Drink",
    aliases: ["rice_cracker"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍙",
    description: "rice ball",
    category: "Food & Drink",
    aliases: ["rice_ball"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍚",
    description: "cooked rice",
    category: "Food & Drink",
    aliases: ["rice"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍛",
    description: "curry rice",
    category: "Food & Drink",
    aliases: ["curry"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍜",
    description: "steaming bowl",
    category: "Food & Drink",
    aliases: ["ramen"],
    tags: ["noodle"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍝",
    description: "spaghetti",
    category: "Food & Drink",
    aliases: ["spaghetti"],
    tags: ["pasta"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍠",
    description: "roasted sweet potato",
    category: "Food & Drink",
    aliases: ["sweet_potato"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍢",
    description: "oden",
    category: "Food & Drink",
    aliases: ["oden"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍣",
    description: "sushi",
    category: "Food & Drink",
    aliases: ["sushi"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍤",
    description: "fried shrimp",
    category: "Food & Drink",
    aliases: ["fried_shrimp"],
    tags: ["tempura"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍥",
    description: "fish cake with swirl",
    category: "Food & Drink",
    aliases: ["fish_cake"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🥮",
    description: "moon cake",
    category: "Food & Drink",
    aliases: ["moon_cake"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🍡",
    description: "dango",
    category: "Food & Drink",
    aliases: ["dango"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🥟",
    description: "dumpling",
    category: "Food & Drink",
    aliases: ["dumpling"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🥠",
    description: "fortune cookie",
    category: "Food & Drink",
    aliases: ["fortune_cookie"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🥡",
    description: "takeout box",
    category: "Food & Drink",
    aliases: ["takeout_box"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🦀",
    description: "crab",
    category: "Food & Drink",
    aliases: ["crab"],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🦞",
    description: "lobster",
    category: "Food & Drink",
    aliases: ["lobster"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🦐",
    description: "shrimp",
    category: "Food & Drink",
    aliases: ["shrimp"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🦑",
    description: "squid",
    category: "Food & Drink",
    aliases: ["squid"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🦪",
    description: "oyster",
    category: "Food & Drink",
    aliases: ["oyster"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🍦",
    description: "soft ice cream",
    category: "Food & Drink",
    aliases: ["icecream"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍧",
    description: "shaved ice",
    category: "Food & Drink",
    aliases: ["shaved_ice"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍨",
    description: "ice cream",
    category: "Food & Drink",
    aliases: ["ice_cream"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍩",
    description: "doughnut",
    category: "Food & Drink",
    aliases: ["doughnut"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍪",
    description: "cookie",
    category: "Food & Drink",
    aliases: ["cookie"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎂",
    description: "birthday cake",
    category: "Food & Drink",
    aliases: ["birthday"],
    tags: ["party"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍰",
    description: "shortcake",
    category: "Food & Drink",
    aliases: ["cake"],
    tags: ["dessert"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🧁",
    description: "cupcake",
    category: "Food & Drink",
    aliases: ["cupcake"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🥧",
    description: "pie",
    category: "Food & Drink",
    aliases: ["pie"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🍫",
    description: "chocolate bar",
    category: "Food & Drink",
    aliases: ["chocolate_bar"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍬",
    description: "candy",
    category: "Food & Drink",
    aliases: ["candy"],
    tags: ["sweet"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍭",
    description: "lollipop",
    category: "Food & Drink",
    aliases: ["lollipop"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍮",
    description: "custard",
    category: "Food & Drink",
    aliases: ["custard"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍯",
    description: "honey pot",
    category: "Food & Drink",
    aliases: ["honey_pot"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍼",
    description: "baby bottle",
    category: "Food & Drink",
    aliases: ["baby_bottle"],
    tags: ["milk"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🥛",
    description: "glass of milk",
    category: "Food & Drink",
    aliases: ["milk_glass"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "☕",
    description: "hot beverage",
    category: "Food & Drink",
    aliases: ["coffee"],
    tags: ["cafe", "espresso"],
    unicode_version: "4.0",
    ios_version: "6.0"
  },
  {
    emoji: "🫖",
    description: "teapot",
    category: "Food & Drink",
    aliases: ["teapot"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🍵",
    description: "teacup without handle",
    category: "Food & Drink",
    aliases: ["tea"],
    tags: ["green", "breakfast"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍶",
    description: "sake",
    category: "Food & Drink",
    aliases: ["sake"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍾",
    description: "bottle with popping cork",
    category: "Food & Drink",
    aliases: ["champagne"],
    tags: ["bottle", "bubbly", "celebration"],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🍷",
    description: "wine glass",
    category: "Food & Drink",
    aliases: ["wine_glass"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍸",
    description: "cocktail glass",
    category: "Food & Drink",
    aliases: ["cocktail"],
    tags: ["drink"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍹",
    description: "tropical drink",
    category: "Food & Drink",
    aliases: ["tropical_drink"],
    tags: ["summer", "vacation"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍺",
    description: "beer mug",
    category: "Food & Drink",
    aliases: ["beer"],
    tags: ["drink"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍻",
    description: "clinking beer mugs",
    category: "Food & Drink",
    aliases: ["beers"],
    tags: ["drinks"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🥂",
    description: "clinking glasses",
    category: "Food & Drink",
    aliases: ["clinking_glasses"],
    tags: ["cheers", "toast"],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🥃",
    description: "tumbler glass",
    category: "Food & Drink",
    aliases: ["tumbler_glass"],
    tags: ["whisky"],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🥤",
    description: "cup with straw",
    category: "Food & Drink",
    aliases: ["cup_with_straw"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧋",
    description: "bubble tea",
    category: "Food & Drink",
    aliases: ["bubble_tea"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🧃",
    description: "beverage box",
    category: "Food & Drink",
    aliases: ["beverage_box"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🧉",
    description: "mate",
    category: "Food & Drink",
    aliases: ["mate"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🧊",
    description: "ice",
    category: "Food & Drink",
    aliases: ["ice_cube"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🥢",
    description: "chopsticks",
    category: "Food & Drink",
    aliases: ["chopsticks"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🍽️",
    description: "fork and knife with plate",
    category: "Food & Drink",
    aliases: ["plate_with_cutlery"],
    tags: ["dining", "dinner"],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🍴",
    description: "fork and knife",
    category: "Food & Drink",
    aliases: ["fork_and_knife"],
    tags: ["cutlery"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🥄",
    description: "spoon",
    category: "Food & Drink",
    aliases: ["spoon"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🔪",
    description: "kitchen knife",
    category: "Food & Drink",
    aliases: ["hocho", "knife"],
    tags: ["cut", "chop"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏺",
    description: "amphora",
    category: "Food & Drink",
    aliases: ["amphora"],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🌍",
    description: "globe showing Europe-Africa",
    category: "Travel & Places",
    aliases: ["earth_africa"],
    tags: ["globe", "world", "international"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌎",
    description: "globe showing Americas",
    category: "Travel & Places",
    aliases: ["earth_americas"],
    tags: ["globe", "world", "international"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌏",
    description: "globe showing Asia-Australia",
    category: "Travel & Places",
    aliases: ["earth_asia"],
    tags: ["globe", "world", "international"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌐",
    description: "globe with meridians",
    category: "Travel & Places",
    aliases: ["globe_with_meridians"],
    tags: ["world", "global", "international"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🗺️",
    description: "world map",
    category: "Travel & Places",
    aliases: ["world_map"],
    tags: ["travel"],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🗾",
    description: "map of Japan",
    category: "Travel & Places",
    aliases: ["japan"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🧭",
    description: "compass",
    category: "Travel & Places",
    aliases: ["compass"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🏔️",
    description: "snow-capped mountain",
    category: "Travel & Places",
    aliases: ["mountain_snow"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "⛰️",
    description: "mountain",
    category: "Travel & Places",
    aliases: ["mountain"],
    tags: [],
    unicode_version: "5.2",
    ios_version: "9.1"
  },
  {
    emoji: "🌋",
    description: "volcano",
    category: "Travel & Places",
    aliases: ["volcano"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🗻",
    description: "mount fuji",
    category: "Travel & Places",
    aliases: ["mount_fuji"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏕️",
    description: "camping",
    category: "Travel & Places",
    aliases: ["camping"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🏖️",
    description: "beach with umbrella",
    category: "Travel & Places",
    aliases: ["beach_umbrella"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🏜️",
    description: "desert",
    category: "Travel & Places",
    aliases: ["desert"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🏝️",
    description: "desert island",
    category: "Travel & Places",
    aliases: ["desert_island"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🏞️",
    description: "national park",
    category: "Travel & Places",
    aliases: ["national_park"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🏟️",
    description: "stadium",
    category: "Travel & Places",
    aliases: ["stadium"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🏛️",
    description: "classical building",
    category: "Travel & Places",
    aliases: ["classical_building"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🏗️",
    description: "building construction",
    category: "Travel & Places",
    aliases: ["building_construction"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🧱",
    description: "brick",
    category: "Travel & Places",
    aliases: ["bricks"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🪨",
    description: "rock",
    category: "Travel & Places",
    aliases: ["rock"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🪵",
    description: "wood",
    category: "Travel & Places",
    aliases: ["wood"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🛖",
    description: "hut",
    category: "Travel & Places",
    aliases: ["hut"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🏘️",
    description: "houses",
    category: "Travel & Places",
    aliases: ["houses"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🏚️",
    description: "derelict house",
    category: "Travel & Places",
    aliases: ["derelict_house"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🏠",
    description: "house",
    category: "Travel & Places",
    aliases: ["house"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏡",
    description: "house with garden",
    category: "Travel & Places",
    aliases: ["house_with_garden"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏢",
    description: "office building",
    category: "Travel & Places",
    aliases: ["office"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏣",
    description: "Japanese post office",
    category: "Travel & Places",
    aliases: ["post_office"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏤",
    description: "post office",
    category: "Travel & Places",
    aliases: ["european_post_office"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏥",
    description: "hospital",
    category: "Travel & Places",
    aliases: ["hospital"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏦",
    description: "bank",
    category: "Travel & Places",
    aliases: ["bank"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏨",
    description: "hotel",
    category: "Travel & Places",
    aliases: ["hotel"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏩",
    description: "love hotel",
    category: "Travel & Places",
    aliases: ["love_hotel"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏪",
    description: "convenience store",
    category: "Travel & Places",
    aliases: ["convenience_store"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏫",
    description: "school",
    category: "Travel & Places",
    aliases: ["school"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏬",
    description: "department store",
    category: "Travel & Places",
    aliases: ["department_store"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏭",
    description: "factory",
    category: "Travel & Places",
    aliases: ["factory"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏯",
    description: "Japanese castle",
    category: "Travel & Places",
    aliases: ["japanese_castle"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏰",
    description: "castle",
    category: "Travel & Places",
    aliases: ["european_castle"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💒",
    description: "wedding",
    category: "Travel & Places",
    aliases: ["wedding"],
    tags: ["marriage"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🗼",
    description: "Tokyo tower",
    category: "Travel & Places",
    aliases: ["tokyo_tower"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🗽",
    description: "Statue of Liberty",
    category: "Travel & Places",
    aliases: ["statue_of_liberty"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "⛪",
    description: "church",
    category: "Travel & Places",
    aliases: ["church"],
    tags: [],
    unicode_version: "5.2",
    ios_version: "6.0"
  },
  {
    emoji: "🕌",
    description: "mosque",
    category: "Travel & Places",
    aliases: ["mosque"],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🛕",
    description: "hindu temple",
    category: "Travel & Places",
    aliases: ["hindu_temple"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🕍",
    description: "synagogue",
    category: "Travel & Places",
    aliases: ["synagogue"],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "⛩️",
    description: "shinto shrine",
    category: "Travel & Places",
    aliases: ["shinto_shrine"],
    tags: [],
    unicode_version: "5.2",
    ios_version: "9.1"
  },
  {
    emoji: "🕋",
    description: "kaaba",
    category: "Travel & Places",
    aliases: ["kaaba"],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "⛲",
    description: "fountain",
    category: "Travel & Places",
    aliases: ["fountain"],
    tags: [],
    unicode_version: "5.2",
    ios_version: "6.0"
  },
  {
    emoji: "⛺",
    description: "tent",
    category: "Travel & Places",
    aliases: ["tent"],
    tags: ["camping"],
    unicode_version: "5.2",
    ios_version: "6.0"
  },
  {
    emoji: "🌁",
    description: "foggy",
    category: "Travel & Places",
    aliases: ["foggy"],
    tags: ["karl"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌃",
    description: "night with stars",
    category: "Travel & Places",
    aliases: ["night_with_stars"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏙️",
    description: "cityscape",
    category: "Travel & Places",
    aliases: ["cityscape"],
    tags: ["skyline"],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🌄",
    description: "sunrise over mountains",
    category: "Travel & Places",
    aliases: ["sunrise_over_mountains"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌅",
    description: "sunrise",
    category: "Travel & Places",
    aliases: ["sunrise"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌆",
    description: "cityscape at dusk",
    category: "Travel & Places",
    aliases: ["city_sunset"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌇",
    description: "sunset",
    category: "Travel & Places",
    aliases: ["city_sunrise"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌉",
    description: "bridge at night",
    category: "Travel & Places",
    aliases: ["bridge_at_night"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "♨️",
    description: "hot springs",
    category: "Travel & Places",
    aliases: ["hotsprings"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "🎠",
    description: "carousel horse",
    category: "Travel & Places",
    aliases: ["carousel_horse"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎡",
    description: "ferris wheel",
    category: "Travel & Places",
    aliases: ["ferris_wheel"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎢",
    description: "roller coaster",
    category: "Travel & Places",
    aliases: ["roller_coaster"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💈",
    description: "barber pole",
    category: "Travel & Places",
    aliases: ["barber"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎪",
    description: "circus tent",
    category: "Travel & Places",
    aliases: ["circus_tent"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚂",
    description: "locomotive",
    category: "Travel & Places",
    aliases: ["steam_locomotive"],
    tags: ["train"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚃",
    description: "railway car",
    category: "Travel & Places",
    aliases: ["railway_car"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚄",
    description: "high-speed train",
    category: "Travel & Places",
    aliases: ["bullettrain_side"],
    tags: ["train"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚅",
    description: "bullet train",
    category: "Travel & Places",
    aliases: ["bullettrain_front"],
    tags: ["train"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚆",
    description: "train",
    category: "Travel & Places",
    aliases: ["train2"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚇",
    description: "metro",
    category: "Travel & Places",
    aliases: ["metro"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚈",
    description: "light rail",
    category: "Travel & Places",
    aliases: ["light_rail"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚉",
    description: "station",
    category: "Travel & Places",
    aliases: ["station"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚊",
    description: "tram",
    category: "Travel & Places",
    aliases: ["tram"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚝",
    description: "monorail",
    category: "Travel & Places",
    aliases: ["monorail"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚞",
    description: "mountain railway",
    category: "Travel & Places",
    aliases: ["mountain_railway"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚋",
    description: "tram car",
    category: "Travel & Places",
    aliases: ["train"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚌",
    description: "bus",
    category: "Travel & Places",
    aliases: ["bus"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚍",
    description: "oncoming bus",
    category: "Travel & Places",
    aliases: ["oncoming_bus"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚎",
    description: "trolleybus",
    category: "Travel & Places",
    aliases: ["trolleybus"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚐",
    description: "minibus",
    category: "Travel & Places",
    aliases: ["minibus"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚑",
    description: "ambulance",
    category: "Travel & Places",
    aliases: ["ambulance"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚒",
    description: "fire engine",
    category: "Travel & Places",
    aliases: ["fire_engine"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚓",
    description: "police car",
    category: "Travel & Places",
    aliases: ["police_car"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚔",
    description: "oncoming police car",
    category: "Travel & Places",
    aliases: ["oncoming_police_car"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚕",
    description: "taxi",
    category: "Travel & Places",
    aliases: ["taxi"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚖",
    description: "oncoming taxi",
    category: "Travel & Places",
    aliases: ["oncoming_taxi"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚗",
    description: "automobile",
    category: "Travel & Places",
    aliases: ["car", "red_car"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚘",
    description: "oncoming automobile",
    category: "Travel & Places",
    aliases: ["oncoming_automobile"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚙",
    description: "sport utility vehicle",
    category: "Travel & Places",
    aliases: ["blue_car"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🛻",
    description: "pickup truck",
    category: "Travel & Places",
    aliases: ["pickup_truck"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🚚",
    description: "delivery truck",
    category: "Travel & Places",
    aliases: ["truck"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚛",
    description: "articulated lorry",
    category: "Travel & Places",
    aliases: ["articulated_lorry"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚜",
    description: "tractor",
    category: "Travel & Places",
    aliases: ["tractor"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏎️",
    description: "racing car",
    category: "Travel & Places",
    aliases: ["racing_car"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🏍️",
    description: "motorcycle",
    category: "Travel & Places",
    aliases: ["motorcycle"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🛵",
    description: "motor scooter",
    category: "Travel & Places",
    aliases: ["motor_scooter"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🦽",
    description: "manual wheelchair",
    category: "Travel & Places",
    aliases: ["manual_wheelchair"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🦼",
    description: "motorized wheelchair",
    category: "Travel & Places",
    aliases: ["motorized_wheelchair"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🛺",
    description: "auto rickshaw",
    category: "Travel & Places",
    aliases: ["auto_rickshaw"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🚲",
    description: "bicycle",
    category: "Travel & Places",
    aliases: ["bike"],
    tags: ["bicycle"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🛴",
    description: "kick scooter",
    category: "Travel & Places",
    aliases: ["kick_scooter"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🛹",
    description: "skateboard",
    category: "Travel & Places",
    aliases: ["skateboard"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🛼",
    description: "roller skate",
    category: "Travel & Places",
    aliases: ["roller_skate"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🚏",
    description: "bus stop",
    category: "Travel & Places",
    aliases: ["busstop"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🛣️",
    description: "motorway",
    category: "Travel & Places",
    aliases: ["motorway"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🛤️",
    description: "railway track",
    category: "Travel & Places",
    aliases: ["railway_track"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🛢️",
    description: "oil drum",
    category: "Travel & Places",
    aliases: ["oil_drum"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "⛽",
    description: "fuel pump",
    category: "Travel & Places",
    aliases: ["fuelpump"],
    tags: [],
    unicode_version: "5.2",
    ios_version: "6.0"
  },
  {
    emoji: "🚨",
    description: "police car light",
    category: "Travel & Places",
    aliases: ["rotating_light"],
    tags: ["911", "emergency"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚥",
    description: "horizontal traffic light",
    category: "Travel & Places",
    aliases: ["traffic_light"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚦",
    description: "vertical traffic light",
    category: "Travel & Places",
    aliases: ["vertical_traffic_light"],
    tags: ["semaphore"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🛑",
    description: "stop sign",
    category: "Travel & Places",
    aliases: ["stop_sign"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🚧",
    description: "construction",
    category: "Travel & Places",
    aliases: ["construction"],
    tags: ["wip"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "⚓",
    description: "anchor",
    category: "Travel & Places",
    aliases: ["anchor"],
    tags: ["ship"],
    unicode_version: "4.1",
    ios_version: "6.0"
  },
  {
    emoji: "⛵",
    description: "sailboat",
    category: "Travel & Places",
    aliases: ["boat", "sailboat"],
    tags: [],
    unicode_version: "5.2",
    ios_version: "6.0"
  },
  {
    emoji: "🛶",
    description: "canoe",
    category: "Travel & Places",
    aliases: ["canoe"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🚤",
    description: "speedboat",
    category: "Travel & Places",
    aliases: ["speedboat"],
    tags: ["ship"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🛳️",
    description: "passenger ship",
    category: "Travel & Places",
    aliases: ["passenger_ship"],
    tags: ["cruise"],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "⛴️",
    description: "ferry",
    category: "Travel & Places",
    aliases: ["ferry"],
    tags: [],
    unicode_version: "5.2",
    ios_version: "9.1"
  },
  {
    emoji: "🛥️",
    description: "motor boat",
    category: "Travel & Places",
    aliases: ["motor_boat"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🚢",
    description: "ship",
    category: "Travel & Places",
    aliases: ["ship"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "✈️",
    description: "airplane",
    category: "Travel & Places",
    aliases: ["airplane"],
    tags: ["flight"],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "🛩️",
    description: "small airplane",
    category: "Travel & Places",
    aliases: ["small_airplane"],
    tags: ["flight"],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🛫",
    description: "airplane departure",
    category: "Travel & Places",
    aliases: ["flight_departure"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🛬",
    description: "airplane arrival",
    category: "Travel & Places",
    aliases: ["flight_arrival"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🪂",
    description: "parachute",
    category: "Travel & Places",
    aliases: ["parachute"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "💺",
    description: "seat",
    category: "Travel & Places",
    aliases: ["seat"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚁",
    description: "helicopter",
    category: "Travel & Places",
    aliases: ["helicopter"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚟",
    description: "suspension railway",
    category: "Travel & Places",
    aliases: ["suspension_railway"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚠",
    description: "mountain cableway",
    category: "Travel & Places",
    aliases: ["mountain_cableway"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚡",
    description: "aerial tramway",
    category: "Travel & Places",
    aliases: ["aerial_tramway"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🛰️",
    description: "satellite",
    category: "Travel & Places",
    aliases: ["artificial_satellite"],
    tags: ["orbit", "space"],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🚀",
    description: "rocket",
    category: "Travel & Places",
    aliases: ["rocket"],
    tags: ["ship", "launch"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🛸",
    description: "flying saucer",
    category: "Travel & Places",
    aliases: ["flying_saucer"],
    tags: ["ufo"],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🛎️",
    description: "bellhop bell",
    category: "Travel & Places",
    aliases: ["bellhop_bell"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🧳",
    description: "luggage",
    category: "Travel & Places",
    aliases: ["luggage"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "⌛",
    description: "hourglass done",
    category: "Travel & Places",
    aliases: ["hourglass"],
    tags: ["time"],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "⏳",
    description: "hourglass not done",
    category: "Travel & Places",
    aliases: ["hourglass_flowing_sand"],
    tags: ["time"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "⌚",
    description: "watch",
    category: "Travel & Places",
    aliases: ["watch"],
    tags: ["time"],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "⏰",
    description: "alarm clock",
    category: "Travel & Places",
    aliases: ["alarm_clock"],
    tags: ["morning"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "⏱️",
    description: "stopwatch",
    category: "Travel & Places",
    aliases: ["stopwatch"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.1"
  },
  {
    emoji: "⏲️",
    description: "timer clock",
    category: "Travel & Places",
    aliases: ["timer_clock"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.1"
  },
  {
    emoji: "🕰️",
    description: "mantelpiece clock",
    category: "Travel & Places",
    aliases: ["mantelpiece_clock"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🕛",
    description: "twelve o’clock",
    category: "Travel & Places",
    aliases: ["clock12"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕧",
    description: "twelve-thirty",
    category: "Travel & Places",
    aliases: ["clock1230"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕐",
    description: "one o’clock",
    category: "Travel & Places",
    aliases: ["clock1"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕜",
    description: "one-thirty",
    category: "Travel & Places",
    aliases: ["clock130"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕑",
    description: "two o’clock",
    category: "Travel & Places",
    aliases: ["clock2"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕝",
    description: "two-thirty",
    category: "Travel & Places",
    aliases: ["clock230"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕒",
    description: "three o’clock",
    category: "Travel & Places",
    aliases: ["clock3"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕞",
    description: "three-thirty",
    category: "Travel & Places",
    aliases: ["clock330"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕓",
    description: "four o’clock",
    category: "Travel & Places",
    aliases: ["clock4"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕟",
    description: "four-thirty",
    category: "Travel & Places",
    aliases: ["clock430"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕔",
    description: "five o’clock",
    category: "Travel & Places",
    aliases: ["clock5"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕠",
    description: "five-thirty",
    category: "Travel & Places",
    aliases: ["clock530"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕕",
    description: "six o’clock",
    category: "Travel & Places",
    aliases: ["clock6"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕡",
    description: "six-thirty",
    category: "Travel & Places",
    aliases: ["clock630"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕖",
    description: "seven o’clock",
    category: "Travel & Places",
    aliases: ["clock7"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕢",
    description: "seven-thirty",
    category: "Travel & Places",
    aliases: ["clock730"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕗",
    description: "eight o’clock",
    category: "Travel & Places",
    aliases: ["clock8"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕣",
    description: "eight-thirty",
    category: "Travel & Places",
    aliases: ["clock830"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕘",
    description: "nine o’clock",
    category: "Travel & Places",
    aliases: ["clock9"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕤",
    description: "nine-thirty",
    category: "Travel & Places",
    aliases: ["clock930"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕙",
    description: "ten o’clock",
    category: "Travel & Places",
    aliases: ["clock10"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕥",
    description: "ten-thirty",
    category: "Travel & Places",
    aliases: ["clock1030"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕚",
    description: "eleven o’clock",
    category: "Travel & Places",
    aliases: ["clock11"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕦",
    description: "eleven-thirty",
    category: "Travel & Places",
    aliases: ["clock1130"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌑",
    description: "new moon",
    category: "Travel & Places",
    aliases: ["new_moon"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌒",
    description: "waxing crescent moon",
    category: "Travel & Places",
    aliases: ["waxing_crescent_moon"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌓",
    description: "first quarter moon",
    category: "Travel & Places",
    aliases: ["first_quarter_moon"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌔",
    description: "waxing gibbous moon",
    category: "Travel & Places",
    aliases: ["moon", "waxing_gibbous_moon"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌕",
    description: "full moon",
    category: "Travel & Places",
    aliases: ["full_moon"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌖",
    description: "waning gibbous moon",
    category: "Travel & Places",
    aliases: ["waning_gibbous_moon"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌗",
    description: "last quarter moon",
    category: "Travel & Places",
    aliases: ["last_quarter_moon"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌘",
    description: "waning crescent moon",
    category: "Travel & Places",
    aliases: ["waning_crescent_moon"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌙",
    description: "crescent moon",
    category: "Travel & Places",
    aliases: ["crescent_moon"],
    tags: ["night"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌚",
    description: "new moon face",
    category: "Travel & Places",
    aliases: ["new_moon_with_face"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌛",
    description: "first quarter moon face",
    category: "Travel & Places",
    aliases: ["first_quarter_moon_with_face"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌜",
    description: "last quarter moon face",
    category: "Travel & Places",
    aliases: ["last_quarter_moon_with_face"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌡️",
    description: "thermometer",
    category: "Travel & Places",
    aliases: ["thermometer"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "☀️",
    description: "sun",
    category: "Travel & Places",
    aliases: ["sunny"],
    tags: ["weather"],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "🌝",
    description: "full moon face",
    category: "Travel & Places",
    aliases: ["full_moon_with_face"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌞",
    description: "sun with face",
    category: "Travel & Places",
    aliases: ["sun_with_face"],
    tags: ["summer"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪐",
    description: "ringed planet",
    category: "Travel & Places",
    aliases: ["ringed_planet"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "⭐",
    description: "star",
    category: "Travel & Places",
    aliases: ["star"],
    tags: [],
    unicode_version: "5.1",
    ios_version: "6.0"
  },
  {
    emoji: "🌟",
    description: "glowing star",
    category: "Travel & Places",
    aliases: ["star2"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌠",
    description: "shooting star",
    category: "Travel & Places",
    aliases: ["stars"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌌",
    description: "milky way",
    category: "Travel & Places",
    aliases: ["milky_way"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "☁️",
    description: "cloud",
    category: "Travel & Places",
    aliases: ["cloud"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "⛅",
    description: "sun behind cloud",
    category: "Travel & Places",
    aliases: ["partly_sunny"],
    tags: ["weather", "cloud"],
    unicode_version: "5.2",
    ios_version: "6.0"
  },
  {
    emoji: "⛈️",
    description: "cloud with lightning and rain",
    category: "Travel & Places",
    aliases: ["cloud_with_lightning_and_rain"],
    tags: [],
    unicode_version: "5.2",
    ios_version: "9.1"
  },
  {
    emoji: "🌤️",
    description: "sun behind small cloud",
    category: "Travel & Places",
    aliases: ["sun_behind_small_cloud"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🌥️",
    description: "sun behind large cloud",
    category: "Travel & Places",
    aliases: ["sun_behind_large_cloud"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🌦️",
    description: "sun behind rain cloud",
    category: "Travel & Places",
    aliases: ["sun_behind_rain_cloud"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🌧️",
    description: "cloud with rain",
    category: "Travel & Places",
    aliases: ["cloud_with_rain"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🌨️",
    description: "cloud with snow",
    category: "Travel & Places",
    aliases: ["cloud_with_snow"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🌩️",
    description: "cloud with lightning",
    category: "Travel & Places",
    aliases: ["cloud_with_lightning"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🌪️",
    description: "tornado",
    category: "Travel & Places",
    aliases: ["tornado"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🌫️",
    description: "fog",
    category: "Travel & Places",
    aliases: ["fog"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🌬️",
    description: "wind face",
    category: "Travel & Places",
    aliases: ["wind_face"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🌀",
    description: "cyclone",
    category: "Travel & Places",
    aliases: ["cyclone"],
    tags: ["swirl"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌈",
    description: "rainbow",
    category: "Travel & Places",
    aliases: ["rainbow"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌂",
    description: "closed umbrella",
    category: "Travel & Places",
    aliases: ["closed_umbrella"],
    tags: ["weather", "rain"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "☂️",
    description: "umbrella",
    category: "Travel & Places",
    aliases: ["open_umbrella"],
    tags: [],
    unicode_version: "",
    ios_version: "9.1"
  },
  {
    emoji: "☔",
    description: "umbrella with rain drops",
    category: "Travel & Places",
    aliases: ["umbrella"],
    tags: ["rain", "weather"],
    unicode_version: "4.0",
    ios_version: "6.0"
  },
  {
    emoji: "⛱️",
    description: "umbrella on ground",
    category: "Travel & Places",
    aliases: ["parasol_on_ground"],
    tags: ["beach_umbrella"],
    unicode_version: "5.2",
    ios_version: "9.1"
  },
  {
    emoji: "⚡",
    description: "high voltage",
    category: "Travel & Places",
    aliases: ["zap"],
    tags: ["lightning", "thunder"],
    unicode_version: "4.0",
    ios_version: "6.0"
  },
  {
    emoji: "❄️",
    description: "snowflake",
    category: "Travel & Places",
    aliases: ["snowflake"],
    tags: ["winter", "cold", "weather"],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "☃️",
    description: "snowman",
    category: "Travel & Places",
    aliases: ["snowman_with_snow"],
    tags: ["winter", "christmas"],
    unicode_version: "",
    ios_version: "9.1"
  },
  {
    emoji: "⛄",
    description: "snowman without snow",
    category: "Travel & Places",
    aliases: ["snowman"],
    tags: ["winter"],
    unicode_version: "5.2",
    ios_version: "6.0"
  },
  {
    emoji: "☄️",
    description: "comet",
    category: "Travel & Places",
    aliases: ["comet"],
    tags: [],
    unicode_version: "",
    ios_version: "9.1"
  },
  {
    emoji: "🔥",
    description: "fire",
    category: "Travel & Places",
    aliases: ["fire"],
    tags: ["burn"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💧",
    description: "droplet",
    category: "Travel & Places",
    aliases: ["droplet"],
    tags: ["water"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌊",
    description: "water wave",
    category: "Travel & Places",
    aliases: ["ocean"],
    tags: ["sea"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎃",
    description: "jack-o-lantern",
    category: "Activities",
    aliases: ["jack_o_lantern"],
    tags: ["halloween"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎄",
    description: "Christmas tree",
    category: "Activities",
    aliases: ["christmas_tree"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎆",
    description: "fireworks",
    category: "Activities",
    aliases: ["fireworks"],
    tags: ["festival", "celebration"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎇",
    description: "sparkler",
    category: "Activities",
    aliases: ["sparkler"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🧨",
    description: "firecracker",
    category: "Activities",
    aliases: ["firecracker"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "✨",
    description: "sparkles",
    category: "Activities",
    aliases: ["sparkles"],
    tags: ["shiny"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎈",
    description: "balloon",
    category: "Activities",
    aliases: ["balloon"],
    tags: ["party", "birthday"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎉",
    description: "party popper",
    category: "Activities",
    aliases: ["tada"],
    tags: ["hooray", "party"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎊",
    description: "confetti ball",
    category: "Activities",
    aliases: ["confetti_ball"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎋",
    description: "tanabata tree",
    category: "Activities",
    aliases: ["tanabata_tree"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎍",
    description: "pine decoration",
    category: "Activities",
    aliases: ["bamboo"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎎",
    description: "Japanese dolls",
    category: "Activities",
    aliases: ["dolls"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎏",
    description: "carp streamer",
    category: "Activities",
    aliases: ["flags"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎐",
    description: "wind chime",
    category: "Activities",
    aliases: ["wind_chime"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎑",
    description: "moon viewing ceremony",
    category: "Activities",
    aliases: ["rice_scene"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🧧",
    description: "red envelope",
    category: "Activities",
    aliases: ["red_envelope"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🎀",
    description: "ribbon",
    category: "Activities",
    aliases: ["ribbon"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎁",
    description: "wrapped gift",
    category: "Activities",
    aliases: ["gift"],
    tags: ["present", "birthday", "christmas"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎗️",
    description: "reminder ribbon",
    category: "Activities",
    aliases: ["reminder_ribbon"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🎟️",
    description: "admission tickets",
    category: "Activities",
    aliases: ["tickets"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🎫",
    description: "ticket",
    category: "Activities",
    aliases: ["ticket"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎖️",
    description: "military medal",
    category: "Activities",
    aliases: ["medal_military"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🏆",
    description: "trophy",
    category: "Activities",
    aliases: ["trophy"],
    tags: ["award", "contest", "winner"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏅",
    description: "sports medal",
    category: "Activities",
    aliases: ["medal_sports"],
    tags: ["gold", "winner"],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🥇",
    description: "1st place medal",
    category: "Activities",
    aliases: ["1st_place_medal"],
    tags: ["gold"],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🥈",
    description: "2nd place medal",
    category: "Activities",
    aliases: ["2nd_place_medal"],
    tags: ["silver"],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🥉",
    description: "3rd place medal",
    category: "Activities",
    aliases: ["3rd_place_medal"],
    tags: ["bronze"],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "⚽",
    description: "soccer ball",
    category: "Activities",
    aliases: ["soccer"],
    tags: ["sports"],
    unicode_version: "5.2",
    ios_version: "6.0"
  },
  {
    emoji: "⚾",
    description: "baseball",
    category: "Activities",
    aliases: ["baseball"],
    tags: ["sports"],
    unicode_version: "5.2",
    ios_version: "6.0"
  },
  {
    emoji: "🥎",
    description: "softball",
    category: "Activities",
    aliases: ["softball"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🏀",
    description: "basketball",
    category: "Activities",
    aliases: ["basketball"],
    tags: ["sports"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏐",
    description: "volleyball",
    category: "Activities",
    aliases: ["volleyball"],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🏈",
    description: "american football",
    category: "Activities",
    aliases: ["football"],
    tags: ["sports"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏉",
    description: "rugby football",
    category: "Activities",
    aliases: ["rugby_football"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎾",
    description: "tennis",
    category: "Activities",
    aliases: ["tennis"],
    tags: ["sports"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🥏",
    description: "flying disc",
    category: "Activities",
    aliases: ["flying_disc"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🎳",
    description: "bowling",
    category: "Activities",
    aliases: ["bowling"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏏",
    description: "cricket game",
    category: "Activities",
    aliases: ["cricket_game"],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🏑",
    description: "field hockey",
    category: "Activities",
    aliases: ["field_hockey"],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🏒",
    description: "ice hockey",
    category: "Activities",
    aliases: ["ice_hockey"],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🥍",
    description: "lacrosse",
    category: "Activities",
    aliases: ["lacrosse"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🏓",
    description: "ping pong",
    category: "Activities",
    aliases: ["ping_pong"],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🏸",
    description: "badminton",
    category: "Activities",
    aliases: ["badminton"],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🥊",
    description: "boxing glove",
    category: "Activities",
    aliases: ["boxing_glove"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🥋",
    description: "martial arts uniform",
    category: "Activities",
    aliases: ["martial_arts_uniform"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🥅",
    description: "goal net",
    category: "Activities",
    aliases: ["goal_net"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "⛳",
    description: "flag in hole",
    category: "Activities",
    aliases: ["golf"],
    tags: [],
    unicode_version: "5.2",
    ios_version: "6.0"
  },
  {
    emoji: "⛸️",
    description: "ice skate",
    category: "Activities",
    aliases: ["ice_skate"],
    tags: ["skating"],
    unicode_version: "5.2",
    ios_version: "9.1"
  },
  {
    emoji: "🎣",
    description: "fishing pole",
    category: "Activities",
    aliases: ["fishing_pole_and_fish"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🤿",
    description: "diving mask",
    category: "Activities",
    aliases: ["diving_mask"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🎽",
    description: "running shirt",
    category: "Activities",
    aliases: ["running_shirt_with_sash"],
    tags: ["marathon"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎿",
    description: "skis",
    category: "Activities",
    aliases: ["ski"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🛷",
    description: "sled",
    category: "Activities",
    aliases: ["sled"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🥌",
    description: "curling stone",
    category: "Activities",
    aliases: ["curling_stone"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🎯",
    description: "bullseye",
    category: "Activities",
    aliases: ["dart"],
    tags: ["target"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪀",
    description: "yo-yo",
    category: "Activities",
    aliases: ["yo_yo"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🪁",
    description: "kite",
    category: "Activities",
    aliases: ["kite"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🎱",
    description: "pool 8 ball",
    category: "Activities",
    aliases: ["8ball"],
    tags: ["pool", "billiards"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔮",
    description: "crystal ball",
    category: "Activities",
    aliases: ["crystal_ball"],
    tags: ["fortune"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪄",
    description: "magic wand",
    category: "Activities",
    aliases: ["magic_wand"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🧿",
    description: "nazar amulet",
    category: "Activities",
    aliases: ["nazar_amulet"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🎮",
    description: "video game",
    category: "Activities",
    aliases: ["video_game"],
    tags: ["play", "controller", "console"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕹️",
    description: "joystick",
    category: "Activities",
    aliases: ["joystick"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🎰",
    description: "slot machine",
    category: "Activities",
    aliases: ["slot_machine"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎲",
    description: "game die",
    category: "Activities",
    aliases: ["game_die"],
    tags: ["dice", "gambling"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🧩",
    description: "puzzle piece",
    category: "Activities",
    aliases: ["jigsaw"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧸",
    description: "teddy bear",
    category: "Activities",
    aliases: ["teddy_bear"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🪅",
    description: "piñata",
    category: "Activities",
    aliases: ["pinata"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🪆",
    description: "nesting dolls",
    category: "Activities",
    aliases: ["nesting_dolls"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "♠️",
    description: "spade suit",
    category: "Activities",
    aliases: ["spades"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "♥️",
    description: "heart suit",
    category: "Activities",
    aliases: ["hearts"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "♦️",
    description: "diamond suit",
    category: "Activities",
    aliases: ["diamonds"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "♣️",
    description: "club suit",
    category: "Activities",
    aliases: ["clubs"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "♟️",
    description: "chess pawn",
    category: "Activities",
    aliases: ["chess_pawn"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🃏",
    description: "joker",
    category: "Activities",
    aliases: ["black_joker"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🀄",
    description: "mahjong red dragon",
    category: "Activities",
    aliases: ["mahjong"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "🎴",
    description: "flower playing cards",
    category: "Activities",
    aliases: ["flower_playing_cards"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎭",
    description: "performing arts",
    category: "Activities",
    aliases: ["performing_arts"],
    tags: ["theater", "drama"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🖼️",
    description: "framed picture",
    category: "Activities",
    aliases: ["framed_picture"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🎨",
    description: "artist palette",
    category: "Activities",
    aliases: ["art"],
    tags: ["design", "paint"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🧵",
    description: "thread",
    category: "Activities",
    aliases: ["thread"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🪡",
    description: "sewing needle",
    category: "Activities",
    aliases: ["sewing_needle"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🧶",
    description: "yarn",
    category: "Activities",
    aliases: ["yarn"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🪢",
    description: "knot",
    category: "Activities",
    aliases: ["knot"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "👓",
    description: "glasses",
    category: "Objects",
    aliases: ["eyeglasses"],
    tags: ["glasses"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕶️",
    description: "sunglasses",
    category: "Objects",
    aliases: ["dark_sunglasses"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🥽",
    description: "goggles",
    category: "Objects",
    aliases: ["goggles"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🥼",
    description: "lab coat",
    category: "Objects",
    aliases: ["lab_coat"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🦺",
    description: "safety vest",
    category: "Objects",
    aliases: ["safety_vest"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "👔",
    description: "necktie",
    category: "Objects",
    aliases: ["necktie"],
    tags: ["shirt", "formal"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👕",
    description: "t-shirt",
    category: "Objects",
    aliases: ["shirt", "tshirt"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👖",
    description: "jeans",
    category: "Objects",
    aliases: ["jeans"],
    tags: ["pants"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🧣",
    description: "scarf",
    category: "Objects",
    aliases: ["scarf"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧤",
    description: "gloves",
    category: "Objects",
    aliases: ["gloves"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧥",
    description: "coat",
    category: "Objects",
    aliases: ["coat"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧦",
    description: "socks",
    category: "Objects",
    aliases: ["socks"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "👗",
    description: "dress",
    category: "Objects",
    aliases: ["dress"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👘",
    description: "kimono",
    category: "Objects",
    aliases: ["kimono"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🥻",
    description: "sari",
    category: "Objects",
    aliases: ["sari"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🩱",
    description: "one-piece swimsuit",
    category: "Objects",
    aliases: ["one_piece_swimsuit"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🩲",
    description: "briefs",
    category: "Objects",
    aliases: ["swim_brief"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🩳",
    description: "shorts",
    category: "Objects",
    aliases: ["shorts"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "👙",
    description: "bikini",
    category: "Objects",
    aliases: ["bikini"],
    tags: ["beach"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👚",
    description: "woman’s clothes",
    category: "Objects",
    aliases: ["womans_clothes"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👛",
    description: "purse",
    category: "Objects",
    aliases: ["purse"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👜",
    description: "handbag",
    category: "Objects",
    aliases: ["handbag"],
    tags: ["bag"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👝",
    description: "clutch bag",
    category: "Objects",
    aliases: ["pouch"],
    tags: ["bag"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🛍️",
    description: "shopping bags",
    category: "Objects",
    aliases: ["shopping"],
    tags: ["bags"],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🎒",
    description: "backpack",
    category: "Objects",
    aliases: ["school_satchel"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🩴",
    description: "thong sandal",
    category: "Objects",
    aliases: ["thong_sandal"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "👞",
    description: "man’s shoe",
    category: "Objects",
    aliases: ["mans_shoe", "shoe"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👟",
    description: "running shoe",
    category: "Objects",
    aliases: ["athletic_shoe"],
    tags: ["sneaker", "sport", "running"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🥾",
    description: "hiking boot",
    category: "Objects",
    aliases: ["hiking_boot"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🥿",
    description: "flat shoe",
    category: "Objects",
    aliases: ["flat_shoe"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "👠",
    description: "high-heeled shoe",
    category: "Objects",
    aliases: ["high_heel"],
    tags: ["shoe"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👡",
    description: "woman’s sandal",
    category: "Objects",
    aliases: ["sandal"],
    tags: ["shoe"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🩰",
    description: "ballet shoes",
    category: "Objects",
    aliases: ["ballet_shoes"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "👢",
    description: "woman’s boot",
    category: "Objects",
    aliases: ["boot"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👑",
    description: "crown",
    category: "Objects",
    aliases: ["crown"],
    tags: ["king", "queen", "royal"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👒",
    description: "woman’s hat",
    category: "Objects",
    aliases: ["womans_hat"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎩",
    description: "top hat",
    category: "Objects",
    aliases: ["tophat"],
    tags: ["hat", "classy"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎓",
    description: "graduation cap",
    category: "Objects",
    aliases: ["mortar_board"],
    tags: ["education", "college", "university", "graduation"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🧢",
    description: "billed cap",
    category: "Objects",
    aliases: ["billed_cap"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🪖",
    description: "military helmet",
    category: "Objects",
    aliases: ["military_helmet"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "⛑️",
    description: "rescue worker’s helmet",
    category: "Objects",
    aliases: ["rescue_worker_helmet"],
    tags: [],
    unicode_version: "5.2",
    ios_version: "9.1"
  },
  {
    emoji: "📿",
    description: "prayer beads",
    category: "Objects",
    aliases: ["prayer_beads"],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "💄",
    description: "lipstick",
    category: "Objects",
    aliases: ["lipstick"],
    tags: ["makeup"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💍",
    description: "ring",
    category: "Objects",
    aliases: ["ring"],
    tags: ["wedding", "marriage", "engaged"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💎",
    description: "gem stone",
    category: "Objects",
    aliases: ["gem"],
    tags: ["diamond"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔇",
    description: "muted speaker",
    category: "Objects",
    aliases: ["mute"],
    tags: ["sound", "volume"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔈",
    description: "speaker low volume",
    category: "Objects",
    aliases: ["speaker"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔉",
    description: "speaker medium volume",
    category: "Objects",
    aliases: ["sound"],
    tags: ["volume"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔊",
    description: "speaker high volume",
    category: "Objects",
    aliases: ["loud_sound"],
    tags: ["volume"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📢",
    description: "loudspeaker",
    category: "Objects",
    aliases: ["loudspeaker"],
    tags: ["announcement"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📣",
    description: "megaphone",
    category: "Objects",
    aliases: ["mega"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📯",
    description: "postal horn",
    category: "Objects",
    aliases: ["postal_horn"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔔",
    description: "bell",
    category: "Objects",
    aliases: ["bell"],
    tags: ["sound", "notification"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔕",
    description: "bell with slash",
    category: "Objects",
    aliases: ["no_bell"],
    tags: ["volume", "off"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎼",
    description: "musical score",
    category: "Objects",
    aliases: ["musical_score"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎵",
    description: "musical note",
    category: "Objects",
    aliases: ["musical_note"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎶",
    description: "musical notes",
    category: "Objects",
    aliases: ["notes"],
    tags: ["music"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎙️",
    description: "studio microphone",
    category: "Objects",
    aliases: ["studio_microphone"],
    tags: ["podcast"],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🎚️",
    description: "level slider",
    category: "Objects",
    aliases: ["level_slider"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🎛️",
    description: "control knobs",
    category: "Objects",
    aliases: ["control_knobs"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🎤",
    description: "microphone",
    category: "Objects",
    aliases: ["microphone"],
    tags: ["sing"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎧",
    description: "headphone",
    category: "Objects",
    aliases: ["headphones"],
    tags: ["music", "earphones"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📻",
    description: "radio",
    category: "Objects",
    aliases: ["radio"],
    tags: ["podcast"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎷",
    description: "saxophone",
    category: "Objects",
    aliases: ["saxophone"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪗",
    description: "accordion",
    category: "Objects",
    aliases: ["accordion"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🎸",
    description: "guitar",
    category: "Objects",
    aliases: ["guitar"],
    tags: ["rock"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎹",
    description: "musical keyboard",
    category: "Objects",
    aliases: ["musical_keyboard"],
    tags: ["piano"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎺",
    description: "trumpet",
    category: "Objects",
    aliases: ["trumpet"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎻",
    description: "violin",
    category: "Objects",
    aliases: ["violin"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪕",
    description: "banjo",
    category: "Objects",
    aliases: ["banjo"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🥁",
    description: "drum",
    category: "Objects",
    aliases: ["drum"],
    tags: [],
    unicode_version: "",
    ios_version: "10.2"
  },
  {
    emoji: "🪘",
    description: "long drum",
    category: "Objects",
    aliases: ["long_drum"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "📱",
    description: "mobile phone",
    category: "Objects",
    aliases: ["iphone"],
    tags: ["smartphone", "mobile"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📲",
    description: "mobile phone with arrow",
    category: "Objects",
    aliases: ["calling"],
    tags: ["call", "incoming"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "☎️",
    description: "telephone",
    category: "Objects",
    aliases: ["phone", "telephone"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "📞",
    description: "telephone receiver",
    category: "Objects",
    aliases: ["telephone_receiver"],
    tags: ["phone", "call"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📟",
    description: "pager",
    category: "Objects",
    aliases: ["pager"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📠",
    description: "fax machine",
    category: "Objects",
    aliases: ["fax"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔋",
    description: "battery",
    category: "Objects",
    aliases: ["battery"],
    tags: ["power"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔌",
    description: "electric plug",
    category: "Objects",
    aliases: ["electric_plug"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💻",
    description: "laptop",
    category: "Objects",
    aliases: ["computer"],
    tags: ["desktop", "screen"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🖥️",
    description: "desktop computer",
    category: "Objects",
    aliases: ["desktop_computer"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🖨️",
    description: "printer",
    category: "Objects",
    aliases: ["printer"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "⌨️",
    description: "keyboard",
    category: "Objects",
    aliases: ["keyboard"],
    tags: [],
    unicode_version: "",
    ios_version: "9.1"
  },
  {
    emoji: "🖱️",
    description: "computer mouse",
    category: "Objects",
    aliases: ["computer_mouse"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🖲️",
    description: "trackball",
    category: "Objects",
    aliases: ["trackball"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "💽",
    description: "computer disk",
    category: "Objects",
    aliases: ["minidisc"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💾",
    description: "floppy disk",
    category: "Objects",
    aliases: ["floppy_disk"],
    tags: ["save"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💿",
    description: "optical disk",
    category: "Objects",
    aliases: ["cd"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📀",
    description: "dvd",
    category: "Objects",
    aliases: ["dvd"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🧮",
    description: "abacus",
    category: "Objects",
    aliases: ["abacus"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🎥",
    description: "movie camera",
    category: "Objects",
    aliases: ["movie_camera"],
    tags: ["film", "video"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎞️",
    description: "film frames",
    category: "Objects",
    aliases: ["film_strip"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "📽️",
    description: "film projector",
    category: "Objects",
    aliases: ["film_projector"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🎬",
    description: "clapper board",
    category: "Objects",
    aliases: ["clapper"],
    tags: ["film"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📺",
    description: "television",
    category: "Objects",
    aliases: ["tv"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📷",
    description: "camera",
    category: "Objects",
    aliases: ["camera"],
    tags: ["photo"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📸",
    description: "camera with flash",
    category: "Objects",
    aliases: ["camera_flash"],
    tags: ["photo"],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "📹",
    description: "video camera",
    category: "Objects",
    aliases: ["video_camera"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📼",
    description: "videocassette",
    category: "Objects",
    aliases: ["vhs"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔍",
    description: "magnifying glass tilted left",
    category: "Objects",
    aliases: ["mag"],
    tags: ["search", "zoom"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔎",
    description: "magnifying glass tilted right",
    category: "Objects",
    aliases: ["mag_right"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕯️",
    description: "candle",
    category: "Objects",
    aliases: ["candle"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "💡",
    description: "light bulb",
    category: "Objects",
    aliases: ["bulb"],
    tags: ["idea", "light"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔦",
    description: "flashlight",
    category: "Objects",
    aliases: ["flashlight"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏮",
    description: "red paper lantern",
    category: "Objects",
    aliases: ["izakaya_lantern", "lantern"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪔",
    description: "diya lamp",
    category: "Objects",
    aliases: ["diya_lamp"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "📔",
    description: "notebook with decorative cover",
    category: "Objects",
    aliases: ["notebook_with_decorative_cover"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📕",
    description: "closed book",
    category: "Objects",
    aliases: ["closed_book"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📖",
    description: "open book",
    category: "Objects",
    aliases: ["book", "open_book"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📗",
    description: "green book",
    category: "Objects",
    aliases: ["green_book"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📘",
    description: "blue book",
    category: "Objects",
    aliases: ["blue_book"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📙",
    description: "orange book",
    category: "Objects",
    aliases: ["orange_book"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📚",
    description: "books",
    category: "Objects",
    aliases: ["books"],
    tags: ["library"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📓",
    description: "notebook",
    category: "Objects",
    aliases: ["notebook"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📒",
    description: "ledger",
    category: "Objects",
    aliases: ["ledger"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📃",
    description: "page with curl",
    category: "Objects",
    aliases: ["page_with_curl"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📜",
    description: "scroll",
    category: "Objects",
    aliases: ["scroll"],
    tags: ["document"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📄",
    description: "page facing up",
    category: "Objects",
    aliases: ["page_facing_up"],
    tags: ["document"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📰",
    description: "newspaper",
    category: "Objects",
    aliases: ["newspaper"],
    tags: ["press"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🗞️",
    description: "rolled-up newspaper",
    category: "Objects",
    aliases: ["newspaper_roll"],
    tags: ["press"],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "📑",
    description: "bookmark tabs",
    category: "Objects",
    aliases: ["bookmark_tabs"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔖",
    description: "bookmark",
    category: "Objects",
    aliases: ["bookmark"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏷️",
    description: "label",
    category: "Objects",
    aliases: ["label"],
    tags: ["tag"],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "💰",
    description: "money bag",
    category: "Objects",
    aliases: ["moneybag"],
    tags: ["dollar", "cream"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪙",
    description: "coin",
    category: "Objects",
    aliases: ["coin"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "💴",
    description: "yen banknote",
    category: "Objects",
    aliases: ["yen"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💵",
    description: "dollar banknote",
    category: "Objects",
    aliases: ["dollar"],
    tags: ["money"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💶",
    description: "euro banknote",
    category: "Objects",
    aliases: ["euro"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💷",
    description: "pound banknote",
    category: "Objects",
    aliases: ["pound"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💸",
    description: "money with wings",
    category: "Objects",
    aliases: ["money_with_wings"],
    tags: ["dollar"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💳",
    description: "credit card",
    category: "Objects",
    aliases: ["credit_card"],
    tags: ["subscription"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🧾",
    description: "receipt",
    category: "Objects",
    aliases: ["receipt"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "💹",
    description: "chart increasing with yen",
    category: "Objects",
    aliases: ["chart"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "✉️",
    description: "envelope",
    category: "Objects",
    aliases: ["envelope"],
    tags: ["letter", "email"],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "📧",
    description: "e-mail",
    category: "Objects",
    aliases: ["email", "e-mail"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📨",
    description: "incoming envelope",
    category: "Objects",
    aliases: ["incoming_envelope"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📩",
    description: "envelope with arrow",
    category: "Objects",
    aliases: ["envelope_with_arrow"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📤",
    description: "outbox tray",
    category: "Objects",
    aliases: ["outbox_tray"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📥",
    description: "inbox tray",
    category: "Objects",
    aliases: ["inbox_tray"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📦",
    description: "package",
    category: "Objects",
    aliases: ["package"],
    tags: ["shipping"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📫",
    description: "closed mailbox with raised flag",
    category: "Objects",
    aliases: ["mailbox"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📪",
    description: "closed mailbox with lowered flag",
    category: "Objects",
    aliases: ["mailbox_closed"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📬",
    description: "open mailbox with raised flag",
    category: "Objects",
    aliases: ["mailbox_with_mail"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📭",
    description: "open mailbox with lowered flag",
    category: "Objects",
    aliases: ["mailbox_with_no_mail"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📮",
    description: "postbox",
    category: "Objects",
    aliases: ["postbox"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🗳️",
    description: "ballot box with ballot",
    category: "Objects",
    aliases: ["ballot_box"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "✏️",
    description: "pencil",
    category: "Objects",
    aliases: ["pencil2"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "✒️",
    description: "black nib",
    category: "Objects",
    aliases: ["black_nib"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "🖋️",
    description: "fountain pen",
    category: "Objects",
    aliases: ["fountain_pen"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🖊️",
    description: "pen",
    category: "Objects",
    aliases: ["pen"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🖌️",
    description: "paintbrush",
    category: "Objects",
    aliases: ["paintbrush"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🖍️",
    description: "crayon",
    category: "Objects",
    aliases: ["crayon"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "📝",
    description: "memo",
    category: "Objects",
    aliases: ["memo", "pencil"],
    tags: ["document", "note"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💼",
    description: "briefcase",
    category: "Objects",
    aliases: ["briefcase"],
    tags: ["business"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📁",
    description: "file folder",
    category: "Objects",
    aliases: ["file_folder"],
    tags: ["directory"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📂",
    description: "open file folder",
    category: "Objects",
    aliases: ["open_file_folder"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🗂️",
    description: "card index dividers",
    category: "Objects",
    aliases: ["card_index_dividers"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "📅",
    description: "calendar",
    category: "Objects",
    aliases: ["date"],
    tags: ["calendar", "schedule"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📆",
    description: "tear-off calendar",
    category: "Objects",
    aliases: ["calendar"],
    tags: ["schedule"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🗒️",
    description: "spiral notepad",
    category: "Objects",
    aliases: ["spiral_notepad"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🗓️",
    description: "spiral calendar",
    category: "Objects",
    aliases: ["spiral_calendar"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "📇",
    description: "card index",
    category: "Objects",
    aliases: ["card_index"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📈",
    description: "chart increasing",
    category: "Objects",
    aliases: ["chart_with_upwards_trend"],
    tags: ["graph", "metrics"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📉",
    description: "chart decreasing",
    category: "Objects",
    aliases: ["chart_with_downwards_trend"],
    tags: ["graph", "metrics"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📊",
    description: "bar chart",
    category: "Objects",
    aliases: ["bar_chart"],
    tags: ["stats", "metrics"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📋",
    description: "clipboard",
    category: "Objects",
    aliases: ["clipboard"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📌",
    description: "pushpin",
    category: "Objects",
    aliases: ["pushpin"],
    tags: ["location"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📍",
    description: "round pushpin",
    category: "Objects",
    aliases: ["round_pushpin"],
    tags: ["location"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📎",
    description: "paperclip",
    category: "Objects",
    aliases: ["paperclip"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🖇️",
    description: "linked paperclips",
    category: "Objects",
    aliases: ["paperclips"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "📏",
    description: "straight ruler",
    category: "Objects",
    aliases: ["straight_ruler"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📐",
    description: "triangular ruler",
    category: "Objects",
    aliases: ["triangular_ruler"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "✂️",
    description: "scissors",
    category: "Objects",
    aliases: ["scissors"],
    tags: ["cut"],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "🗃️",
    description: "card file box",
    category: "Objects",
    aliases: ["card_file_box"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🗄️",
    description: "file cabinet",
    category: "Objects",
    aliases: ["file_cabinet"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🗑️",
    description: "wastebasket",
    category: "Objects",
    aliases: ["wastebasket"],
    tags: ["trash"],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🔒",
    description: "locked",
    category: "Objects",
    aliases: ["lock"],
    tags: ["security", "private"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔓",
    description: "unlocked",
    category: "Objects",
    aliases: ["unlock"],
    tags: ["security"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔏",
    description: "locked with pen",
    category: "Objects",
    aliases: ["lock_with_ink_pen"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔐",
    description: "locked with key",
    category: "Objects",
    aliases: ["closed_lock_with_key"],
    tags: ["security"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔑",
    description: "key",
    category: "Objects",
    aliases: ["key"],
    tags: ["lock", "password"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🗝️",
    description: "old key",
    category: "Objects",
    aliases: ["old_key"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🔨",
    description: "hammer",
    category: "Objects",
    aliases: ["hammer"],
    tags: ["tool"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪓",
    description: "axe",
    category: "Objects",
    aliases: ["axe"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "⛏️",
    description: "pick",
    category: "Objects",
    aliases: ["pick"],
    tags: [],
    unicode_version: "5.2",
    ios_version: "9.1"
  },
  {
    emoji: "⚒️",
    description: "hammer and pick",
    category: "Objects",
    aliases: ["hammer_and_pick"],
    tags: [],
    unicode_version: "4.1",
    ios_version: "9.1"
  },
  {
    emoji: "🛠️",
    description: "hammer and wrench",
    category: "Objects",
    aliases: ["hammer_and_wrench"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🗡️",
    description: "dagger",
    category: "Objects",
    aliases: ["dagger"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "⚔️",
    description: "crossed swords",
    category: "Objects",
    aliases: ["crossed_swords"],
    tags: [],
    unicode_version: "4.1",
    ios_version: "9.1"
  },
  {
    emoji: "🔫",
    description: "water pistol",
    category: "Objects",
    aliases: ["gun"],
    tags: ["shoot", "weapon"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪃",
    description: "boomerang",
    category: "Objects",
    aliases: ["boomerang"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🏹",
    description: "bow and arrow",
    category: "Objects",
    aliases: ["bow_and_arrow"],
    tags: ["archery"],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🛡️",
    description: "shield",
    category: "Objects",
    aliases: ["shield"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🪚",
    description: "carpentry saw",
    category: "Objects",
    aliases: ["carpentry_saw"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🔧",
    description: "wrench",
    category: "Objects",
    aliases: ["wrench"],
    tags: ["tool"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪛",
    description: "screwdriver",
    category: "Objects",
    aliases: ["screwdriver"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🔩",
    description: "nut and bolt",
    category: "Objects",
    aliases: ["nut_and_bolt"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "⚙️",
    description: "gear",
    category: "Objects",
    aliases: ["gear"],
    tags: [],
    unicode_version: "4.1",
    ios_version: "9.1"
  },
  {
    emoji: "🗜️",
    description: "clamp",
    category: "Objects",
    aliases: ["clamp"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "⚖️",
    description: "balance scale",
    category: "Objects",
    aliases: ["balance_scale"],
    tags: [],
    unicode_version: "4.1",
    ios_version: "9.1"
  },
  {
    emoji: "🦯",
    description: "white cane",
    category: "Objects",
    aliases: ["probing_cane"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🔗",
    description: "link",
    category: "Objects",
    aliases: ["link"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "⛓️",
    description: "chains",
    category: "Objects",
    aliases: ["chains"],
    tags: [],
    unicode_version: "5.2",
    ios_version: "9.1"
  },
  {
    emoji: "🪝",
    description: "hook",
    category: "Objects",
    aliases: ["hook"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🧰",
    description: "toolbox",
    category: "Objects",
    aliases: ["toolbox"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧲",
    description: "magnet",
    category: "Objects",
    aliases: ["magnet"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🪜",
    description: "ladder",
    category: "Objects",
    aliases: ["ladder"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "⚗️",
    description: "alembic",
    category: "Objects",
    aliases: ["alembic"],
    tags: [],
    unicode_version: "4.1",
    ios_version: "9.1"
  },
  {
    emoji: "🧪",
    description: "test tube",
    category: "Objects",
    aliases: ["test_tube"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧫",
    description: "petri dish",
    category: "Objects",
    aliases: ["petri_dish"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧬",
    description: "dna",
    category: "Objects",
    aliases: ["dna"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🔬",
    description: "microscope",
    category: "Objects",
    aliases: ["microscope"],
    tags: ["science", "laboratory", "investigate"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔭",
    description: "telescope",
    category: "Objects",
    aliases: ["telescope"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📡",
    description: "satellite antenna",
    category: "Objects",
    aliases: ["satellite"],
    tags: ["signal"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💉",
    description: "syringe",
    category: "Objects",
    aliases: ["syringe"],
    tags: ["health", "hospital", "needle"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🩸",
    description: "drop of blood",
    category: "Objects",
    aliases: ["drop_of_blood"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "💊",
    description: "pill",
    category: "Objects",
    aliases: ["pill"],
    tags: ["health", "medicine"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🩹",
    description: "adhesive bandage",
    category: "Objects",
    aliases: ["adhesive_bandage"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🩺",
    description: "stethoscope",
    category: "Objects",
    aliases: ["stethoscope"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🚪",
    description: "door",
    category: "Objects",
    aliases: ["door"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🛗",
    description: "elevator",
    category: "Objects",
    aliases: ["elevator"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🪞",
    description: "mirror",
    category: "Objects",
    aliases: ["mirror"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🪟",
    description: "window",
    category: "Objects",
    aliases: ["window"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🛏️",
    description: "bed",
    category: "Objects",
    aliases: ["bed"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🛋️",
    description: "couch and lamp",
    category: "Objects",
    aliases: ["couch_and_lamp"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🪑",
    description: "chair",
    category: "Objects",
    aliases: ["chair"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🚽",
    description: "toilet",
    category: "Objects",
    aliases: ["toilet"],
    tags: ["wc"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪠",
    description: "plunger",
    category: "Objects",
    aliases: ["plunger"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🚿",
    description: "shower",
    category: "Objects",
    aliases: ["shower"],
    tags: ["bath"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🛁",
    description: "bathtub",
    category: "Objects",
    aliases: ["bathtub"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪤",
    description: "mouse trap",
    category: "Objects",
    aliases: ["mouse_trap"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🪒",
    description: "razor",
    category: "Objects",
    aliases: ["razor"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🧴",
    description: "lotion bottle",
    category: "Objects",
    aliases: ["lotion_bottle"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧷",
    description: "safety pin",
    category: "Objects",
    aliases: ["safety_pin"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧹",
    description: "broom",
    category: "Objects",
    aliases: ["broom"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧺",
    description: "basket",
    category: "Objects",
    aliases: ["basket"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧻",
    description: "roll of paper",
    category: "Objects",
    aliases: ["roll_of_paper"],
    tags: ["toilet"],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🪣",
    description: "bucket",
    category: "Objects",
    aliases: ["bucket"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🧼",
    description: "soap",
    category: "Objects",
    aliases: ["soap"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🪥",
    description: "toothbrush",
    category: "Objects",
    aliases: ["toothbrush"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🧽",
    description: "sponge",
    category: "Objects",
    aliases: ["sponge"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧯",
    description: "fire extinguisher",
    category: "Objects",
    aliases: ["fire_extinguisher"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🛒",
    description: "shopping cart",
    category: "Objects",
    aliases: ["shopping_cart"],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🚬",
    description: "cigarette",
    category: "Objects",
    aliases: ["smoking"],
    tags: ["cigarette"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "⚰️",
    description: "coffin",
    category: "Objects",
    aliases: ["coffin"],
    tags: ["funeral"],
    unicode_version: "4.1",
    ios_version: "9.1"
  },
  {
    emoji: "🪦",
    description: "headstone",
    category: "Objects",
    aliases: ["headstone"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "⚱️",
    description: "funeral urn",
    category: "Objects",
    aliases: ["funeral_urn"],
    tags: [],
    unicode_version: "4.1",
    ios_version: "9.1"
  },
  {
    emoji: "🗿",
    description: "moai",
    category: "Objects",
    aliases: ["moyai"],
    tags: ["stone"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪧",
    description: "placard",
    category: "Objects",
    aliases: ["placard"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🏧",
    description: "ATM sign",
    category: "Symbols",
    aliases: ["atm"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚮",
    description: "litter in bin sign",
    category: "Symbols",
    aliases: ["put_litter_in_its_place"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚰",
    description: "potable water",
    category: "Symbols",
    aliases: ["potable_water"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "♿",
    description: "wheelchair symbol",
    category: "Symbols",
    aliases: ["wheelchair"],
    tags: ["accessibility"],
    unicode_version: "4.1",
    ios_version: "6.0"
  },
  {
    emoji: "🚹",
    description: "men’s room",
    category: "Symbols",
    aliases: ["mens"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚺",
    description: "women’s room",
    category: "Symbols",
    aliases: ["womens"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚻",
    description: "restroom",
    category: "Symbols",
    aliases: ["restroom"],
    tags: ["toilet"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚼",
    description: "baby symbol",
    category: "Symbols",
    aliases: ["baby_symbol"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚾",
    description: "water closet",
    category: "Symbols",
    aliases: ["wc"],
    tags: ["toilet", "restroom"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🛂",
    description: "passport control",
    category: "Symbols",
    aliases: ["passport_control"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🛃",
    description: "customs",
    category: "Symbols",
    aliases: ["customs"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🛄",
    description: "baggage claim",
    category: "Symbols",
    aliases: ["baggage_claim"],
    tags: ["airport"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🛅",
    description: "left luggage",
    category: "Symbols",
    aliases: ["left_luggage"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "⚠️",
    description: "warning",
    category: "Symbols",
    aliases: ["warning"],
    tags: ["wip"],
    unicode_version: "4.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚸",
    description: "children crossing",
    category: "Symbols",
    aliases: ["children_crossing"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "⛔",
    description: "no entry",
    category: "Symbols",
    aliases: ["no_entry"],
    tags: ["limit"],
    unicode_version: "5.2",
    ios_version: "6.0"
  },
  {
    emoji: "🚫",
    description: "prohibited",
    category: "Symbols",
    aliases: ["no_entry_sign"],
    tags: ["block", "forbidden"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚳",
    description: "no bicycles",
    category: "Symbols",
    aliases: ["no_bicycles"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚭",
    description: "no smoking",
    category: "Symbols",
    aliases: ["no_smoking"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚯",
    description: "no littering",
    category: "Symbols",
    aliases: ["do_not_litter"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚱",
    description: "non-potable water",
    category: "Symbols",
    aliases: ["non-potable_water"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚷",
    description: "no pedestrians",
    category: "Symbols",
    aliases: ["no_pedestrians"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📵",
    description: "no mobile phones",
    category: "Symbols",
    aliases: ["no_mobile_phones"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔞",
    description: "no one under eighteen",
    category: "Symbols",
    aliases: ["underage"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "☢️",
    description: "radioactive",
    category: "Symbols",
    aliases: ["radioactive"],
    tags: [],
    unicode_version: "",
    ios_version: "9.1"
  },
  {
    emoji: "☣️",
    description: "biohazard",
    category: "Symbols",
    aliases: ["biohazard"],
    tags: [],
    unicode_version: "",
    ios_version: "9.1"
  },
  {
    emoji: "⬆️",
    description: "up arrow",
    category: "Symbols",
    aliases: ["arrow_up"],
    tags: [],
    unicode_version: "4.0",
    ios_version: "6.0"
  },
  {
    emoji: "↗️",
    description: "up-right arrow",
    category: "Symbols",
    aliases: ["arrow_upper_right"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "➡️",
    description: "right arrow",
    category: "Symbols",
    aliases: ["arrow_right"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "↘️",
    description: "down-right arrow",
    category: "Symbols",
    aliases: ["arrow_lower_right"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "⬇️",
    description: "down arrow",
    category: "Symbols",
    aliases: ["arrow_down"],
    tags: [],
    unicode_version: "4.0",
    ios_version: "6.0"
  },
  {
    emoji: "↙️",
    description: "down-left arrow",
    category: "Symbols",
    aliases: ["arrow_lower_left"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "⬅️",
    description: "left arrow",
    category: "Symbols",
    aliases: ["arrow_left"],
    tags: [],
    unicode_version: "4.0",
    ios_version: "6.0"
  },
  {
    emoji: "↖️",
    description: "up-left arrow",
    category: "Symbols",
    aliases: ["arrow_upper_left"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "↕️",
    description: "up-down arrow",
    category: "Symbols",
    aliases: ["arrow_up_down"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "↔️",
    description: "left-right arrow",
    category: "Symbols",
    aliases: ["left_right_arrow"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "↩️",
    description: "right arrow curving left",
    category: "Symbols",
    aliases: ["leftwards_arrow_with_hook"],
    tags: ["return"],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "↪️",
    description: "left arrow curving right",
    category: "Symbols",
    aliases: ["arrow_right_hook"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "⤴️",
    description: "right arrow curving up",
    category: "Symbols",
    aliases: ["arrow_heading_up"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "⤵️",
    description: "right arrow curving down",
    category: "Symbols",
    aliases: ["arrow_heading_down"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "🔃",
    description: "clockwise vertical arrows",
    category: "Symbols",
    aliases: ["arrows_clockwise"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔄",
    description: "counterclockwise arrows button",
    category: "Symbols",
    aliases: ["arrows_counterclockwise"],
    tags: ["sync"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔙",
    description: "BACK arrow",
    category: "Symbols",
    aliases: ["back"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔚",
    description: "END arrow",
    category: "Symbols",
    aliases: ["end"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔛",
    description: "ON! arrow",
    category: "Symbols",
    aliases: ["on"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔜",
    description: "SOON arrow",
    category: "Symbols",
    aliases: ["soon"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔝",
    description: "TOP arrow",
    category: "Symbols",
    aliases: ["top"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🛐",
    description: "place of worship",
    category: "Symbols",
    aliases: ["place_of_worship"],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "⚛️",
    description: "atom symbol",
    category: "Symbols",
    aliases: ["atom_symbol"],
    tags: [],
    unicode_version: "4.1",
    ios_version: "9.1"
  },
  {
    emoji: "🕉️",
    description: "om",
    category: "Symbols",
    aliases: ["om"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "✡️",
    description: "star of David",
    category: "Symbols",
    aliases: ["star_of_david"],
    tags: [],
    unicode_version: "",
    ios_version: "9.1"
  },
  {
    emoji: "☸️",
    description: "wheel of dharma",
    category: "Symbols",
    aliases: ["wheel_of_dharma"],
    tags: [],
    unicode_version: "",
    ios_version: "9.1"
  },
  {
    emoji: "☯️",
    description: "yin yang",
    category: "Symbols",
    aliases: ["yin_yang"],
    tags: [],
    unicode_version: "",
    ios_version: "9.1"
  },
  {
    emoji: "✝️",
    description: "latin cross",
    category: "Symbols",
    aliases: ["latin_cross"],
    tags: [],
    unicode_version: "",
    ios_version: "9.1"
  },
  {
    emoji: "☦️",
    description: "orthodox cross",
    category: "Symbols",
    aliases: ["orthodox_cross"],
    tags: [],
    unicode_version: "",
    ios_version: "9.1"
  },
  {
    emoji: "☪️",
    description: "star and crescent",
    category: "Symbols",
    aliases: ["star_and_crescent"],
    tags: [],
    unicode_version: "",
    ios_version: "9.1"
  },
  {
    emoji: "☮️",
    description: "peace symbol",
    category: "Symbols",
    aliases: ["peace_symbol"],
    tags: [],
    unicode_version: "",
    ios_version: "9.1"
  },
  {
    emoji: "🕎",
    description: "menorah",
    category: "Symbols",
    aliases: ["menorah"],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🔯",
    description: "dotted six-pointed star",
    category: "Symbols",
    aliases: ["six_pointed_star"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "♈",
    description: "Aries",
    category: "Symbols",
    aliases: ["aries"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "♉",
    description: "Taurus",
    category: "Symbols",
    aliases: ["taurus"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "♊",
    description: "Gemini",
    category: "Symbols",
    aliases: ["gemini"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "♋",
    description: "Cancer",
    category: "Symbols",
    aliases: ["cancer"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "♌",
    description: "Leo",
    category: "Symbols",
    aliases: ["leo"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "♍",
    description: "Virgo",
    category: "Symbols",
    aliases: ["virgo"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "♎",
    description: "Libra",
    category: "Symbols",
    aliases: ["libra"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "♏",
    description: "Scorpio",
    category: "Symbols",
    aliases: ["scorpius"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "♐",
    description: "Sagittarius",
    category: "Symbols",
    aliases: ["sagittarius"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "♑",
    description: "Capricorn",
    category: "Symbols",
    aliases: ["capricorn"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "♒",
    description: "Aquarius",
    category: "Symbols",
    aliases: ["aquarius"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "♓",
    description: "Pisces",
    category: "Symbols",
    aliases: ["pisces"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "⛎",
    description: "Ophiuchus",
    category: "Symbols",
    aliases: ["ophiuchus"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔀",
    description: "shuffle tracks button",
    category: "Symbols",
    aliases: ["twisted_rightwards_arrows"],
    tags: ["shuffle"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔁",
    description: "repeat button",
    category: "Symbols",
    aliases: ["repeat"],
    tags: ["loop"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔂",
    description: "repeat single button",
    category: "Symbols",
    aliases: ["repeat_one"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "▶️",
    description: "play button",
    category: "Symbols",
    aliases: ["arrow_forward"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "⏩",
    description: "fast-forward button",
    category: "Symbols",
    aliases: ["fast_forward"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "⏭️",
    description: "next track button",
    category: "Symbols",
    aliases: ["next_track_button"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.1"
  },
  {
    emoji: "⏯️",
    description: "play or pause button",
    category: "Symbols",
    aliases: ["play_or_pause_button"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.1"
  },
  {
    emoji: "◀️",
    description: "reverse button",
    category: "Symbols",
    aliases: ["arrow_backward"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "⏪",
    description: "fast reverse button",
    category: "Symbols",
    aliases: ["rewind"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "⏮️",
    description: "last track button",
    category: "Symbols",
    aliases: ["previous_track_button"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.1"
  },
  {
    emoji: "🔼",
    description: "upwards button",
    category: "Symbols",
    aliases: ["arrow_up_small"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "⏫",
    description: "fast up button",
    category: "Symbols",
    aliases: ["arrow_double_up"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔽",
    description: "downwards button",
    category: "Symbols",
    aliases: ["arrow_down_small"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "⏬",
    description: "fast down button",
    category: "Symbols",
    aliases: ["arrow_double_down"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "⏸️",
    description: "pause button",
    category: "Symbols",
    aliases: ["pause_button"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "⏹️",
    description: "stop button",
    category: "Symbols",
    aliases: ["stop_button"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "⏺️",
    description: "record button",
    category: "Symbols",
    aliases: ["record_button"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "⏏️",
    description: "eject button",
    category: "Symbols",
    aliases: ["eject_button"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🎦",
    description: "cinema",
    category: "Symbols",
    aliases: ["cinema"],
    tags: ["film", "movie"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔅",
    description: "dim button",
    category: "Symbols",
    aliases: ["low_brightness"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔆",
    description: "bright button",
    category: "Symbols",
    aliases: ["high_brightness"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📶",
    description: "antenna bars",
    category: "Symbols",
    aliases: ["signal_strength"],
    tags: ["wifi"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📳",
    description: "vibration mode",
    category: "Symbols",
    aliases: ["vibration_mode"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📴",
    description: "mobile phone off",
    category: "Symbols",
    aliases: ["mobile_phone_off"],
    tags: ["mute", "off"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "♀️",
    description: "female sign",
    category: "Symbols",
    aliases: ["female_sign"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "♂️",
    description: "male sign",
    category: "Symbols",
    aliases: ["male_sign"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "⚧️",
    description: "transgender symbol",
    category: "Symbols",
    aliases: ["transgender_symbol"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "✖️",
    description: "multiply",
    category: "Symbols",
    aliases: ["heavy_multiplication_x"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "➕",
    description: "plus",
    category: "Symbols",
    aliases: ["heavy_plus_sign"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "➖",
    description: "minus",
    category: "Symbols",
    aliases: ["heavy_minus_sign"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "➗",
    description: "divide",
    category: "Symbols",
    aliases: ["heavy_division_sign"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "♾️",
    description: "infinity",
    category: "Symbols",
    aliases: ["infinity"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "‼️",
    description: "double exclamation mark",
    category: "Symbols",
    aliases: ["bangbang"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "⁉️",
    description: "exclamation question mark",
    category: "Symbols",
    aliases: ["interrobang"],
    tags: [],
    unicode_version: "3.0",
    ios_version: "6.0"
  },
  {
    emoji: "❓",
    description: "red question mark",
    category: "Symbols",
    aliases: ["question"],
    tags: ["confused"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "❔",
    description: "white question mark",
    category: "Symbols",
    aliases: ["grey_question"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "❕",
    description: "white exclamation mark",
    category: "Symbols",
    aliases: ["grey_exclamation"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "❗",
    description: "red exclamation mark",
    category: "Symbols",
    aliases: ["exclamation", "heavy_exclamation_mark"],
    tags: ["bang"],
    unicode_version: "5.2",
    ios_version: "6.0"
  },
  {
    emoji: "〰️",
    description: "wavy dash",
    category: "Symbols",
    aliases: ["wavy_dash"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "💱",
    description: "currency exchange",
    category: "Symbols",
    aliases: ["currency_exchange"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💲",
    description: "heavy dollar sign",
    category: "Symbols",
    aliases: ["heavy_dollar_sign"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "⚕️",
    description: "medical symbol",
    category: "Symbols",
    aliases: ["medical_symbol"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "♻️",
    description: "recycling symbol",
    category: "Symbols",
    aliases: ["recycle"],
    tags: ["environment", "green"],
    unicode_version: "3.2",
    ios_version: "6.0"
  },
  {
    emoji: "⚜️",
    description: "fleur-de-lis",
    category: "Symbols",
    aliases: ["fleur_de_lis"],
    tags: [],
    unicode_version: "4.1",
    ios_version: "9.1"
  },
  {
    emoji: "🔱",
    description: "trident emblem",
    category: "Symbols",
    aliases: ["trident"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📛",
    description: "name badge",
    category: "Symbols",
    aliases: ["name_badge"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔰",
    description: "Japanese symbol for beginner",
    category: "Symbols",
    aliases: ["beginner"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "⭕",
    description: "hollow red circle",
    category: "Symbols",
    aliases: ["o"],
    tags: [],
    unicode_version: "5.2",
    ios_version: "6.0"
  },
  {
    emoji: "✅",
    description: "check mark button",
    category: "Symbols",
    aliases: ["white_check_mark"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "☑️",
    description: "check box with check",
    category: "Symbols",
    aliases: ["ballot_box_with_check"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "✔️",
    description: "check mark",
    category: "Symbols",
    aliases: ["heavy_check_mark"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "❌",
    description: "cross mark",
    category: "Symbols",
    aliases: ["x"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "❎",
    description: "cross mark button",
    category: "Symbols",
    aliases: ["negative_squared_cross_mark"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "➰",
    description: "curly loop",
    category: "Symbols",
    aliases: ["curly_loop"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "➿",
    description: "double curly loop",
    category: "Symbols",
    aliases: ["loop"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "〽️",
    description: "part alternation mark",
    category: "Symbols",
    aliases: ["part_alternation_mark"],
    tags: [],
    unicode_version: "3.2",
    ios_version: "6.0"
  },
  {
    emoji: "✳️",
    description: "eight-spoked asterisk",
    category: "Symbols",
    aliases: ["eight_spoked_asterisk"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "✴️",
    description: "eight-pointed star",
    category: "Symbols",
    aliases: ["eight_pointed_black_star"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "❇️",
    description: "sparkle",
    category: "Symbols",
    aliases: ["sparkle"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "©️",
    description: "copyright",
    category: "Symbols",
    aliases: ["copyright"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "®️",
    description: "registered",
    category: "Symbols",
    aliases: ["registered"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "™️",
    description: "trade mark",
    category: "Symbols",
    aliases: ["tm"],
    tags: ["trademark"],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "#️⃣",
    description: "keycap: #",
    category: "Symbols",
    aliases: ["hash"],
    tags: ["number"],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "*️⃣",
    description: "keycap: *",
    category: "Symbols",
    aliases: ["asterisk"],
    tags: [],
    unicode_version: "",
    ios_version: "9.1"
  },
  {
    emoji: "0️⃣",
    description: "keycap: 0",
    category: "Symbols",
    aliases: ["zero"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "1️⃣",
    description: "keycap: 1",
    category: "Symbols",
    aliases: ["one"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "2️⃣",
    description: "keycap: 2",
    category: "Symbols",
    aliases: ["two"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "3️⃣",
    description: "keycap: 3",
    category: "Symbols",
    aliases: ["three"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "4️⃣",
    description: "keycap: 4",
    category: "Symbols",
    aliases: ["four"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "5️⃣",
    description: "keycap: 5",
    category: "Symbols",
    aliases: ["five"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "6️⃣",
    description: "keycap: 6",
    category: "Symbols",
    aliases: ["six"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "7️⃣",
    description: "keycap: 7",
    category: "Symbols",
    aliases: ["seven"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "8️⃣",
    description: "keycap: 8",
    category: "Symbols",
    aliases: ["eight"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "9️⃣",
    description: "keycap: 9",
    category: "Symbols",
    aliases: ["nine"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "🔟",
    description: "keycap: 10",
    category: "Symbols",
    aliases: ["keycap_ten"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔠",
    description: "input latin uppercase",
    category: "Symbols",
    aliases: ["capital_abcd"],
    tags: ["letters"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔡",
    description: "input latin lowercase",
    category: "Symbols",
    aliases: ["abcd"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔢",
    description: "input numbers",
    category: "Symbols",
    aliases: ["1234"],
    tags: ["numbers"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔣",
    description: "input symbols",
    category: "Symbols",
    aliases: ["symbols"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔤",
    description: "input latin letters",
    category: "Symbols",
    aliases: ["abc"],
    tags: ["alphabet"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🅰️",
    description: "A button (blood type)",
    category: "Symbols",
    aliases: ["a"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🆎",
    description: "AB button (blood type)",
    category: "Symbols",
    aliases: ["ab"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🅱️",
    description: "B button (blood type)",
    category: "Symbols",
    aliases: ["b"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🆑",
    description: "CL button",
    category: "Symbols",
    aliases: ["cl"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🆒",
    description: "COOL button",
    category: "Symbols",
    aliases: ["cool"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🆓",
    description: "FREE button",
    category: "Symbols",
    aliases: ["free"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "ℹ️",
    description: "information",
    category: "Symbols",
    aliases: ["information_source"],
    tags: [],
    unicode_version: "3.0",
    ios_version: "6.0"
  },
  {
    emoji: "🆔",
    description: "ID button",
    category: "Symbols",
    aliases: ["id"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "Ⓜ️",
    description: "circled M",
    category: "Symbols",
    aliases: ["m"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "🆕",
    description: "NEW button",
    category: "Symbols",
    aliases: ["new"],
    tags: ["fresh"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🆖",
    description: "NG button",
    category: "Symbols",
    aliases: ["ng"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🅾️",
    description: "O button (blood type)",
    category: "Symbols",
    aliases: ["o2"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🆗",
    description: "OK button",
    category: "Symbols",
    aliases: ["ok"],
    tags: ["yes"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🅿️",
    description: "P button",
    category: "Symbols",
    aliases: ["parking"],
    tags: [],
    unicode_version: "5.2",
    ios_version: "6.0"
  },
  {
    emoji: "🆘",
    description: "SOS button",
    category: "Symbols",
    aliases: ["sos"],
    tags: ["help", "emergency"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🆙",
    description: "UP! button",
    category: "Symbols",
    aliases: ["up"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🆚",
    description: "VS button",
    category: "Symbols",
    aliases: ["vs"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🈁",
    description: "Japanese “here” button",
    category: "Symbols",
    aliases: ["koko"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🈂️",
    description: "Japanese “service charge” button",
    category: "Symbols",
    aliases: ["sa"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🈷️",
    description: "Japanese “monthly amount” button",
    category: "Symbols",
    aliases: ["u6708"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🈶",
    description: "Japanese “not free of charge” button",
    category: "Symbols",
    aliases: ["u6709"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🈯",
    description: "Japanese “reserved” button",
    category: "Symbols",
    aliases: ["u6307"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "🉐",
    description: "Japanese “bargain” button",
    category: "Symbols",
    aliases: ["ideograph_advantage"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🈹",
    description: "Japanese “discount” button",
    category: "Symbols",
    aliases: ["u5272"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🈚",
    description: "Japanese “free of charge” button",
    category: "Symbols",
    aliases: ["u7121"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "🈲",
    description: "Japanese “prohibited” button",
    category: "Symbols",
    aliases: ["u7981"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🉑",
    description: "Japanese “acceptable” button",
    category: "Symbols",
    aliases: ["accept"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🈸",
    description: "Japanese “application” button",
    category: "Symbols",
    aliases: ["u7533"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🈴",
    description: "Japanese “passing grade” button",
    category: "Symbols",
    aliases: ["u5408"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🈳",
    description: "Japanese “vacancy” button",
    category: "Symbols",
    aliases: ["u7a7a"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "㊗️",
    description: "Japanese “congratulations” button",
    category: "Symbols",
    aliases: ["congratulations"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "㊙️",
    description: "Japanese “secret” button",
    category: "Symbols",
    aliases: ["secret"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "🈺",
    description: "Japanese “open for business” button",
    category: "Symbols",
    aliases: ["u55b6"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🈵",
    description: "Japanese “no vacancy” button",
    category: "Symbols",
    aliases: ["u6e80"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔴",
    description: "red circle",
    category: "Symbols",
    aliases: ["red_circle"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🟠",
    description: "orange circle",
    category: "Symbols",
    aliases: ["orange_circle"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🟡",
    description: "yellow circle",
    category: "Symbols",
    aliases: ["yellow_circle"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🟢",
    description: "green circle",
    category: "Symbols",
    aliases: ["green_circle"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🔵",
    description: "blue circle",
    category: "Symbols",
    aliases: ["large_blue_circle"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🟣",
    description: "purple circle",
    category: "Symbols",
    aliases: ["purple_circle"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🟤",
    description: "brown circle",
    category: "Symbols",
    aliases: ["brown_circle"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "⚫",
    description: "black circle",
    category: "Symbols",
    aliases: ["black_circle"],
    tags: [],
    unicode_version: "4.1",
    ios_version: "6.0"
  },
  {
    emoji: "⚪",
    description: "white circle",
    category: "Symbols",
    aliases: ["white_circle"],
    tags: [],
    unicode_version: "4.1",
    ios_version: "6.0"
  },
  {
    emoji: "🟥",
    description: "red square",
    category: "Symbols",
    aliases: ["red_square"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🟧",
    description: "orange square",
    category: "Symbols",
    aliases: ["orange_square"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🟨",
    description: "yellow square",
    category: "Symbols",
    aliases: ["yellow_square"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🟩",
    description: "green square",
    category: "Symbols",
    aliases: ["green_square"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🟦",
    description: "blue square",
    category: "Symbols",
    aliases: ["blue_square"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🟪",
    description: "purple square",
    category: "Symbols",
    aliases: ["purple_square"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🟫",
    description: "brown square",
    category: "Symbols",
    aliases: ["brown_square"],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "⬛",
    description: "black large square",
    category: "Symbols",
    aliases: ["black_large_square"],
    tags: [],
    unicode_version: "5.1",
    ios_version: "6.0"
  },
  {
    emoji: "⬜",
    description: "white large square",
    category: "Symbols",
    aliases: ["white_large_square"],
    tags: [],
    unicode_version: "5.1",
    ios_version: "6.0"
  },
  {
    emoji: "◼️",
    description: "black medium square",
    category: "Symbols",
    aliases: ["black_medium_square"],
    tags: [],
    unicode_version: "3.2",
    ios_version: "6.0"
  },
  {
    emoji: "◻️",
    description: "white medium square",
    category: "Symbols",
    aliases: ["white_medium_square"],
    tags: [],
    unicode_version: "3.2",
    ios_version: "6.0"
  },
  {
    emoji: "◾",
    description: "black medium-small square",
    category: "Symbols",
    aliases: ["black_medium_small_square"],
    tags: [],
    unicode_version: "3.2",
    ios_version: "6.0"
  },
  {
    emoji: "◽",
    description: "white medium-small square",
    category: "Symbols",
    aliases: ["white_medium_small_square"],
    tags: [],
    unicode_version: "3.2",
    ios_version: "6.0"
  },
  {
    emoji: "▪️",
    description: "black small square",
    category: "Symbols",
    aliases: ["black_small_square"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "▫️",
    description: "white small square",
    category: "Symbols",
    aliases: ["white_small_square"],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "🔶",
    description: "large orange diamond",
    category: "Symbols",
    aliases: ["large_orange_diamond"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔷",
    description: "large blue diamond",
    category: "Symbols",
    aliases: ["large_blue_diamond"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔸",
    description: "small orange diamond",
    category: "Symbols",
    aliases: ["small_orange_diamond"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔹",
    description: "small blue diamond",
    category: "Symbols",
    aliases: ["small_blue_diamond"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔺",
    description: "red triangle pointed up",
    category: "Symbols",
    aliases: ["small_red_triangle"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔻",
    description: "red triangle pointed down",
    category: "Symbols",
    aliases: ["small_red_triangle_down"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💠",
    description: "diamond with a dot",
    category: "Symbols",
    aliases: ["diamond_shape_with_a_dot_inside"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔘",
    description: "radio button",
    category: "Symbols",
    aliases: ["radio_button"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔳",
    description: "white square button",
    category: "Symbols",
    aliases: ["white_square_button"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔲",
    description: "black square button",
    category: "Symbols",
    aliases: ["black_square_button"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏁",
    description: "chequered flag",
    category: "Flags",
    aliases: ["checkered_flag"],
    tags: ["milestone", "finish"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚩",
    description: "triangular flag",
    category: "Flags",
    aliases: ["triangular_flag_on_post"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎌",
    description: "crossed flags",
    category: "Flags",
    aliases: ["crossed_flags"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏴",
    description: "black flag",
    category: "Flags",
    aliases: ["black_flag"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🏳️",
    description: "white flag",
    category: "Flags",
    aliases: ["white_flag"],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🏳️‍🌈",
    description: "rainbow flag",
    category: "Flags",
    aliases: ["rainbow_flag"],
    tags: ["pride"],
    unicode_version: "6.0",
    ios_version: "10.0"
  },
  {
    emoji: "🏳️‍⚧️",
    description: "transgender flag",
    category: "Flags",
    aliases: ["transgender_flag"],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🏴‍☠️",
    description: "pirate flag",
    category: "Flags",
    aliases: ["pirate_flag"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🇦🇨",
    description: "flag: Ascension Island",
    category: "Flags",
    aliases: ["ascension_island"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🇦🇩",
    description: "flag: Andorra",
    category: "Flags",
    aliases: ["andorra"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇦🇪",
    description: "flag: United Arab Emirates",
    category: "Flags",
    aliases: ["united_arab_emirates"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇦🇫",
    description: "flag: Afghanistan",
    category: "Flags",
    aliases: ["afghanistan"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇦🇬",
    description: "flag: Antigua & Barbuda",
    category: "Flags",
    aliases: ["antigua_barbuda"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇦🇮",
    description: "flag: Anguilla",
    category: "Flags",
    aliases: ["anguilla"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇦🇱",
    description: "flag: Albania",
    category: "Flags",
    aliases: ["albania"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇦🇲",
    description: "flag: Armenia",
    category: "Flags",
    aliases: ["armenia"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇦🇴",
    description: "flag: Angola",
    category: "Flags",
    aliases: ["angola"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇦🇶",
    description: "flag: Antarctica",
    category: "Flags",
    aliases: ["antarctica"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇦🇷",
    description: "flag: Argentina",
    category: "Flags",
    aliases: ["argentina"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇦🇸",
    description: "flag: American Samoa",
    category: "Flags",
    aliases: ["american_samoa"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇦🇹",
    description: "flag: Austria",
    category: "Flags",
    aliases: ["austria"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇦🇺",
    description: "flag: Australia",
    category: "Flags",
    aliases: ["australia"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇦🇼",
    description: "flag: Aruba",
    category: "Flags",
    aliases: ["aruba"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇦🇽",
    description: "flag: Åland Islands",
    category: "Flags",
    aliases: ["aland_islands"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇦🇿",
    description: "flag: Azerbaijan",
    category: "Flags",
    aliases: ["azerbaijan"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇦",
    description: "flag: Bosnia & Herzegovina",
    category: "Flags",
    aliases: ["bosnia_herzegovina"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇧",
    description: "flag: Barbados",
    category: "Flags",
    aliases: ["barbados"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇩",
    description: "flag: Bangladesh",
    category: "Flags",
    aliases: ["bangladesh"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇪",
    description: "flag: Belgium",
    category: "Flags",
    aliases: ["belgium"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇫",
    description: "flag: Burkina Faso",
    category: "Flags",
    aliases: ["burkina_faso"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇬",
    description: "flag: Bulgaria",
    category: "Flags",
    aliases: ["bulgaria"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇭",
    description: "flag: Bahrain",
    category: "Flags",
    aliases: ["bahrain"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇮",
    description: "flag: Burundi",
    category: "Flags",
    aliases: ["burundi"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇯",
    description: "flag: Benin",
    category: "Flags",
    aliases: ["benin"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇱",
    description: "flag: St. Barthélemy",
    category: "Flags",
    aliases: ["st_barthelemy"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇧🇲",
    description: "flag: Bermuda",
    category: "Flags",
    aliases: ["bermuda"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇳",
    description: "flag: Brunei",
    category: "Flags",
    aliases: ["brunei"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇴",
    description: "flag: Bolivia",
    category: "Flags",
    aliases: ["bolivia"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇶",
    description: "flag: Caribbean Netherlands",
    category: "Flags",
    aliases: ["caribbean_netherlands"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇧🇷",
    description: "flag: Brazil",
    category: "Flags",
    aliases: ["brazil"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇸",
    description: "flag: Bahamas",
    category: "Flags",
    aliases: ["bahamas"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇹",
    description: "flag: Bhutan",
    category: "Flags",
    aliases: ["bhutan"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇻",
    description: "flag: Bouvet Island",
    category: "Flags",
    aliases: ["bouvet_island"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🇧🇼",
    description: "flag: Botswana",
    category: "Flags",
    aliases: ["botswana"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇾",
    description: "flag: Belarus",
    category: "Flags",
    aliases: ["belarus"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇿",
    description: "flag: Belize",
    category: "Flags",
    aliases: ["belize"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇨🇦",
    description: "flag: Canada",
    category: "Flags",
    aliases: ["canada"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇨🇨",
    description: "flag: Cocos (Keeling) Islands",
    category: "Flags",
    aliases: ["cocos_islands"],
    tags: ["keeling"],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇨🇩",
    description: "flag: Congo - Kinshasa",
    category: "Flags",
    aliases: ["congo_kinshasa"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇨🇫",
    description: "flag: Central African Republic",
    category: "Flags",
    aliases: ["central_african_republic"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇨🇬",
    description: "flag: Congo - Brazzaville",
    category: "Flags",
    aliases: ["congo_brazzaville"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇨🇭",
    description: "flag: Switzerland",
    category: "Flags",
    aliases: ["switzerland"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇨🇮",
    description: "flag: Côte d’Ivoire",
    category: "Flags",
    aliases: ["cote_divoire"],
    tags: ["ivory"],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇨🇰",
    description: "flag: Cook Islands",
    category: "Flags",
    aliases: ["cook_islands"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇨🇱",
    description: "flag: Chile",
    category: "Flags",
    aliases: ["chile"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇨🇲",
    description: "flag: Cameroon",
    category: "Flags",
    aliases: ["cameroon"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇨🇳",
    description: "flag: China",
    category: "Flags",
    aliases: ["cn"],
    tags: ["china"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🇨🇴",
    description: "flag: Colombia",
    category: "Flags",
    aliases: ["colombia"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇨🇵",
    description: "flag: Clipperton Island",
    category: "Flags",
    aliases: ["clipperton_island"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🇨🇷",
    description: "flag: Costa Rica",
    category: "Flags",
    aliases: ["costa_rica"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇨🇺",
    description: "flag: Cuba",
    category: "Flags",
    aliases: ["cuba"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇨🇻",
    description: "flag: Cape Verde",
    category: "Flags",
    aliases: ["cape_verde"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇨🇼",
    description: "flag: Curaçao",
    category: "Flags",
    aliases: ["curacao"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇨🇽",
    description: "flag: Christmas Island",
    category: "Flags",
    aliases: ["christmas_island"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇨🇾",
    description: "flag: Cyprus",
    category: "Flags",
    aliases: ["cyprus"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇨🇿",
    description: "flag: Czechia",
    category: "Flags",
    aliases: ["czech_republic"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇩🇪",
    description: "flag: Germany",
    category: "Flags",
    aliases: ["de"],
    tags: ["flag", "germany"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🇩🇬",
    description: "flag: Diego Garcia",
    category: "Flags",
    aliases: ["diego_garcia"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🇩🇯",
    description: "flag: Djibouti",
    category: "Flags",
    aliases: ["djibouti"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇩🇰",
    description: "flag: Denmark",
    category: "Flags",
    aliases: ["denmark"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇩🇲",
    description: "flag: Dominica",
    category: "Flags",
    aliases: ["dominica"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇩🇴",
    description: "flag: Dominican Republic",
    category: "Flags",
    aliases: ["dominican_republic"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇩🇿",
    description: "flag: Algeria",
    category: "Flags",
    aliases: ["algeria"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇪🇦",
    description: "flag: Ceuta & Melilla",
    category: "Flags",
    aliases: ["ceuta_melilla"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🇪🇨",
    description: "flag: Ecuador",
    category: "Flags",
    aliases: ["ecuador"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇪🇪",
    description: "flag: Estonia",
    category: "Flags",
    aliases: ["estonia"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇪🇬",
    description: "flag: Egypt",
    category: "Flags",
    aliases: ["egypt"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇪🇭",
    description: "flag: Western Sahara",
    category: "Flags",
    aliases: ["western_sahara"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇪🇷",
    description: "flag: Eritrea",
    category: "Flags",
    aliases: ["eritrea"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇪🇸",
    description: "flag: Spain",
    category: "Flags",
    aliases: ["es"],
    tags: ["spain"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🇪🇹",
    description: "flag: Ethiopia",
    category: "Flags",
    aliases: ["ethiopia"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇪🇺",
    description: "flag: European Union",
    category: "Flags",
    aliases: ["eu", "european_union"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇫🇮",
    description: "flag: Finland",
    category: "Flags",
    aliases: ["finland"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇫🇯",
    description: "flag: Fiji",
    category: "Flags",
    aliases: ["fiji"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇫🇰",
    description: "flag: Falkland Islands",
    category: "Flags",
    aliases: ["falkland_islands"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇫🇲",
    description: "flag: Micronesia",
    category: "Flags",
    aliases: ["micronesia"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇫🇴",
    description: "flag: Faroe Islands",
    category: "Flags",
    aliases: ["faroe_islands"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇫🇷",
    description: "flag: France",
    category: "Flags",
    aliases: ["fr"],
    tags: ["france", "french"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🇬🇦",
    description: "flag: Gabon",
    category: "Flags",
    aliases: ["gabon"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇬🇧",
    description: "flag: United Kingdom",
    category: "Flags",
    aliases: ["gb", "uk"],
    tags: ["flag", "british"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🇬🇩",
    description: "flag: Grenada",
    category: "Flags",
    aliases: ["grenada"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇬🇪",
    description: "flag: Georgia",
    category: "Flags",
    aliases: ["georgia"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇬🇫",
    description: "flag: French Guiana",
    category: "Flags",
    aliases: ["french_guiana"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇬🇬",
    description: "flag: Guernsey",
    category: "Flags",
    aliases: ["guernsey"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇬🇭",
    description: "flag: Ghana",
    category: "Flags",
    aliases: ["ghana"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇬🇮",
    description: "flag: Gibraltar",
    category: "Flags",
    aliases: ["gibraltar"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇬🇱",
    description: "flag: Greenland",
    category: "Flags",
    aliases: ["greenland"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇬🇲",
    description: "flag: Gambia",
    category: "Flags",
    aliases: ["gambia"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇬🇳",
    description: "flag: Guinea",
    category: "Flags",
    aliases: ["guinea"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇬🇵",
    description: "flag: Guadeloupe",
    category: "Flags",
    aliases: ["guadeloupe"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇬🇶",
    description: "flag: Equatorial Guinea",
    category: "Flags",
    aliases: ["equatorial_guinea"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇬🇷",
    description: "flag: Greece",
    category: "Flags",
    aliases: ["greece"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇬🇸",
    description: "flag: South Georgia & South Sandwich Islands",
    category: "Flags",
    aliases: ["south_georgia_south_sandwich_islands"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇬🇹",
    description: "flag: Guatemala",
    category: "Flags",
    aliases: ["guatemala"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇬🇺",
    description: "flag: Guam",
    category: "Flags",
    aliases: ["guam"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇬🇼",
    description: "flag: Guinea-Bissau",
    category: "Flags",
    aliases: ["guinea_bissau"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇬🇾",
    description: "flag: Guyana",
    category: "Flags",
    aliases: ["guyana"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇭🇰",
    description: "flag: Hong Kong SAR China",
    category: "Flags",
    aliases: ["hong_kong"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇭🇲",
    description: "flag: Heard & McDonald Islands",
    category: "Flags",
    aliases: ["heard_mcdonald_islands"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🇭🇳",
    description: "flag: Honduras",
    category: "Flags",
    aliases: ["honduras"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇭🇷",
    description: "flag: Croatia",
    category: "Flags",
    aliases: ["croatia"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇭🇹",
    description: "flag: Haiti",
    category: "Flags",
    aliases: ["haiti"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇭🇺",
    description: "flag: Hungary",
    category: "Flags",
    aliases: ["hungary"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇮🇨",
    description: "flag: Canary Islands",
    category: "Flags",
    aliases: ["canary_islands"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇮🇩",
    description: "flag: Indonesia",
    category: "Flags",
    aliases: ["indonesia"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇮🇪",
    description: "flag: Ireland",
    category: "Flags",
    aliases: ["ireland"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇮🇱",
    description: "flag: Israel",
    category: "Flags",
    aliases: ["israel"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇮🇲",
    description: "flag: Isle of Man",
    category: "Flags",
    aliases: ["isle_of_man"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇮🇳",
    description: "flag: India",
    category: "Flags",
    aliases: ["india"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇮🇴",
    description: "flag: British Indian Ocean Territory",
    category: "Flags",
    aliases: ["british_indian_ocean_territory"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇮🇶",
    description: "flag: Iraq",
    category: "Flags",
    aliases: ["iraq"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇮🇷",
    description: "flag: Iran",
    category: "Flags",
    aliases: ["iran"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇮🇸",
    description: "flag: Iceland",
    category: "Flags",
    aliases: ["iceland"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇮🇹",
    description: "flag: Italy",
    category: "Flags",
    aliases: ["it"],
    tags: ["italy"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🇯🇪",
    description: "flag: Jersey",
    category: "Flags",
    aliases: ["jersey"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇯🇲",
    description: "flag: Jamaica",
    category: "Flags",
    aliases: ["jamaica"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇯🇴",
    description: "flag: Jordan",
    category: "Flags",
    aliases: ["jordan"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇯🇵",
    description: "flag: Japan",
    category: "Flags",
    aliases: ["jp"],
    tags: ["japan"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🇰🇪",
    description: "flag: Kenya",
    category: "Flags",
    aliases: ["kenya"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇰🇬",
    description: "flag: Kyrgyzstan",
    category: "Flags",
    aliases: ["kyrgyzstan"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇰🇭",
    description: "flag: Cambodia",
    category: "Flags",
    aliases: ["cambodia"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇰🇮",
    description: "flag: Kiribati",
    category: "Flags",
    aliases: ["kiribati"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇰🇲",
    description: "flag: Comoros",
    category: "Flags",
    aliases: ["comoros"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇰🇳",
    description: "flag: St. Kitts & Nevis",
    category: "Flags",
    aliases: ["st_kitts_nevis"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇰🇵",
    description: "flag: North Korea",
    category: "Flags",
    aliases: ["north_korea"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇰🇷",
    description: "flag: South Korea",
    category: "Flags",
    aliases: ["kr"],
    tags: ["korea"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🇰🇼",
    description: "flag: Kuwait",
    category: "Flags",
    aliases: ["kuwait"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇰🇾",
    description: "flag: Cayman Islands",
    category: "Flags",
    aliases: ["cayman_islands"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇰🇿",
    description: "flag: Kazakhstan",
    category: "Flags",
    aliases: ["kazakhstan"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇱🇦",
    description: "flag: Laos",
    category: "Flags",
    aliases: ["laos"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇱🇧",
    description: "flag: Lebanon",
    category: "Flags",
    aliases: ["lebanon"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇱🇨",
    description: "flag: St. Lucia",
    category: "Flags",
    aliases: ["st_lucia"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇱🇮",
    description: "flag: Liechtenstein",
    category: "Flags",
    aliases: ["liechtenstein"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇱🇰",
    description: "flag: Sri Lanka",
    category: "Flags",
    aliases: ["sri_lanka"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇱🇷",
    description: "flag: Liberia",
    category: "Flags",
    aliases: ["liberia"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇱🇸",
    description: "flag: Lesotho",
    category: "Flags",
    aliases: ["lesotho"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇱🇹",
    description: "flag: Lithuania",
    category: "Flags",
    aliases: ["lithuania"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇱🇺",
    description: "flag: Luxembourg",
    category: "Flags",
    aliases: ["luxembourg"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇱🇻",
    description: "flag: Latvia",
    category: "Flags",
    aliases: ["latvia"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇱🇾",
    description: "flag: Libya",
    category: "Flags",
    aliases: ["libya"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇦",
    description: "flag: Morocco",
    category: "Flags",
    aliases: ["morocco"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇨",
    description: "flag: Monaco",
    category: "Flags",
    aliases: ["monaco"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇲🇩",
    description: "flag: Moldova",
    category: "Flags",
    aliases: ["moldova"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇪",
    description: "flag: Montenegro",
    category: "Flags",
    aliases: ["montenegro"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇫",
    description: "flag: St. Martin",
    category: "Flags",
    aliases: ["st_martin"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🇲🇬",
    description: "flag: Madagascar",
    category: "Flags",
    aliases: ["madagascar"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇭",
    description: "flag: Marshall Islands",
    category: "Flags",
    aliases: ["marshall_islands"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇲🇰",
    description: "flag: North Macedonia",
    category: "Flags",
    aliases: ["macedonia"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇱",
    description: "flag: Mali",
    category: "Flags",
    aliases: ["mali"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇲",
    description: "flag: Myanmar (Burma)",
    category: "Flags",
    aliases: ["myanmar"],
    tags: ["burma"],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇳",
    description: "flag: Mongolia",
    category: "Flags",
    aliases: ["mongolia"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇴",
    description: "flag: Macao SAR China",
    category: "Flags",
    aliases: ["macau"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇵",
    description: "flag: Northern Mariana Islands",
    category: "Flags",
    aliases: ["northern_mariana_islands"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇶",
    description: "flag: Martinique",
    category: "Flags",
    aliases: ["martinique"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇲🇷",
    description: "flag: Mauritania",
    category: "Flags",
    aliases: ["mauritania"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇸",
    description: "flag: Montserrat",
    category: "Flags",
    aliases: ["montserrat"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇹",
    description: "flag: Malta",
    category: "Flags",
    aliases: ["malta"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇺",
    description: "flag: Mauritius",
    category: "Flags",
    aliases: ["mauritius"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇲🇻",
    description: "flag: Maldives",
    category: "Flags",
    aliases: ["maldives"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇼",
    description: "flag: Malawi",
    category: "Flags",
    aliases: ["malawi"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇽",
    description: "flag: Mexico",
    category: "Flags",
    aliases: ["mexico"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇾",
    description: "flag: Malaysia",
    category: "Flags",
    aliases: ["malaysia"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇿",
    description: "flag: Mozambique",
    category: "Flags",
    aliases: ["mozambique"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇳🇦",
    description: "flag: Namibia",
    category: "Flags",
    aliases: ["namibia"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇳🇨",
    description: "flag: New Caledonia",
    category: "Flags",
    aliases: ["new_caledonia"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇳🇪",
    description: "flag: Niger",
    category: "Flags",
    aliases: ["niger"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇳🇫",
    description: "flag: Norfolk Island",
    category: "Flags",
    aliases: ["norfolk_island"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇳🇬",
    description: "flag: Nigeria",
    category: "Flags",
    aliases: ["nigeria"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇳🇮",
    description: "flag: Nicaragua",
    category: "Flags",
    aliases: ["nicaragua"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇳🇱",
    description: "flag: Netherlands",
    category: "Flags",
    aliases: ["netherlands"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇳🇴",
    description: "flag: Norway",
    category: "Flags",
    aliases: ["norway"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇳🇵",
    description: "flag: Nepal",
    category: "Flags",
    aliases: ["nepal"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇳🇷",
    description: "flag: Nauru",
    category: "Flags",
    aliases: ["nauru"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇳🇺",
    description: "flag: Niue",
    category: "Flags",
    aliases: ["niue"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇳🇿",
    description: "flag: New Zealand",
    category: "Flags",
    aliases: ["new_zealand"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇴🇲",
    description: "flag: Oman",
    category: "Flags",
    aliases: ["oman"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇵🇦",
    description: "flag: Panama",
    category: "Flags",
    aliases: ["panama"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇵🇪",
    description: "flag: Peru",
    category: "Flags",
    aliases: ["peru"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇵🇫",
    description: "flag: French Polynesia",
    category: "Flags",
    aliases: ["french_polynesia"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇵🇬",
    description: "flag: Papua New Guinea",
    category: "Flags",
    aliases: ["papua_new_guinea"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇵🇭",
    description: "flag: Philippines",
    category: "Flags",
    aliases: ["philippines"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇵🇰",
    description: "flag: Pakistan",
    category: "Flags",
    aliases: ["pakistan"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇵🇱",
    description: "flag: Poland",
    category: "Flags",
    aliases: ["poland"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇵🇲",
    description: "flag: St. Pierre & Miquelon",
    category: "Flags",
    aliases: ["st_pierre_miquelon"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇵🇳",
    description: "flag: Pitcairn Islands",
    category: "Flags",
    aliases: ["pitcairn_islands"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇵🇷",
    description: "flag: Puerto Rico",
    category: "Flags",
    aliases: ["puerto_rico"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇵🇸",
    description: "flag: Palestinian Territories",
    category: "Flags",
    aliases: ["palestinian_territories"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇵🇹",
    description: "flag: Portugal",
    category: "Flags",
    aliases: ["portugal"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇵🇼",
    description: "flag: Palau",
    category: "Flags",
    aliases: ["palau"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇵🇾",
    description: "flag: Paraguay",
    category: "Flags",
    aliases: ["paraguay"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇶🇦",
    description: "flag: Qatar",
    category: "Flags",
    aliases: ["qatar"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇷🇪",
    description: "flag: Réunion",
    category: "Flags",
    aliases: ["reunion"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇷🇴",
    description: "flag: Romania",
    category: "Flags",
    aliases: ["romania"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇷🇸",
    description: "flag: Serbia",
    category: "Flags",
    aliases: ["serbia"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇷🇺",
    description: "flag: Russia",
    category: "Flags",
    aliases: ["ru"],
    tags: ["russia"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🇷🇼",
    description: "flag: Rwanda",
    category: "Flags",
    aliases: ["rwanda"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇦",
    description: "flag: Saudi Arabia",
    category: "Flags",
    aliases: ["saudi_arabia"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇧",
    description: "flag: Solomon Islands",
    category: "Flags",
    aliases: ["solomon_islands"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇨",
    description: "flag: Seychelles",
    category: "Flags",
    aliases: ["seychelles"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇩",
    description: "flag: Sudan",
    category: "Flags",
    aliases: ["sudan"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇪",
    description: "flag: Sweden",
    category: "Flags",
    aliases: ["sweden"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇬",
    description: "flag: Singapore",
    category: "Flags",
    aliases: ["singapore"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇭",
    description: "flag: St. Helena",
    category: "Flags",
    aliases: ["st_helena"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇸🇮",
    description: "flag: Slovenia",
    category: "Flags",
    aliases: ["slovenia"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇯",
    description: "flag: Svalbard & Jan Mayen",
    category: "Flags",
    aliases: ["svalbard_jan_mayen"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🇸🇰",
    description: "flag: Slovakia",
    category: "Flags",
    aliases: ["slovakia"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇱",
    description: "flag: Sierra Leone",
    category: "Flags",
    aliases: ["sierra_leone"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇲",
    description: "flag: San Marino",
    category: "Flags",
    aliases: ["san_marino"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇳",
    description: "flag: Senegal",
    category: "Flags",
    aliases: ["senegal"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇴",
    description: "flag: Somalia",
    category: "Flags",
    aliases: ["somalia"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇷",
    description: "flag: Suriname",
    category: "Flags",
    aliases: ["suriname"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇸",
    description: "flag: South Sudan",
    category: "Flags",
    aliases: ["south_sudan"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇹",
    description: "flag: São Tomé & Príncipe",
    category: "Flags",
    aliases: ["sao_tome_principe"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇻",
    description: "flag: El Salvador",
    category: "Flags",
    aliases: ["el_salvador"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇽",
    description: "flag: Sint Maarten",
    category: "Flags",
    aliases: ["sint_maarten"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇾",
    description: "flag: Syria",
    category: "Flags",
    aliases: ["syria"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇿",
    description: "flag: Eswatini",
    category: "Flags",
    aliases: ["swaziland"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇹🇦",
    description: "flag: Tristan da Cunha",
    category: "Flags",
    aliases: ["tristan_da_cunha"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🇹🇨",
    description: "flag: Turks & Caicos Islands",
    category: "Flags",
    aliases: ["turks_caicos_islands"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇹🇩",
    description: "flag: Chad",
    category: "Flags",
    aliases: ["chad"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇹🇫",
    description: "flag: French Southern Territories",
    category: "Flags",
    aliases: ["french_southern_territories"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇹🇬",
    description: "flag: Togo",
    category: "Flags",
    aliases: ["togo"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇹🇭",
    description: "flag: Thailand",
    category: "Flags",
    aliases: ["thailand"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇹🇯",
    description: "flag: Tajikistan",
    category: "Flags",
    aliases: ["tajikistan"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇹🇰",
    description: "flag: Tokelau",
    category: "Flags",
    aliases: ["tokelau"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇹🇱",
    description: "flag: Timor-Leste",
    category: "Flags",
    aliases: ["timor_leste"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇹🇲",
    description: "flag: Turkmenistan",
    category: "Flags",
    aliases: ["turkmenistan"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇹🇳",
    description: "flag: Tunisia",
    category: "Flags",
    aliases: ["tunisia"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇹🇴",
    description: "flag: Tonga",
    category: "Flags",
    aliases: ["tonga"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇹🇷",
    description: "flag: Turkey",
    category: "Flags",
    aliases: ["tr"],
    tags: ["turkey"],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🇹🇹",
    description: "flag: Trinidad & Tobago",
    category: "Flags",
    aliases: ["trinidad_tobago"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇹🇻",
    description: "flag: Tuvalu",
    category: "Flags",
    aliases: ["tuvalu"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇹🇼",
    description: "flag: Taiwan",
    category: "Flags",
    aliases: ["taiwan"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇹🇿",
    description: "flag: Tanzania",
    category: "Flags",
    aliases: ["tanzania"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇺🇦",
    description: "flag: Ukraine",
    category: "Flags",
    aliases: ["ukraine"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇺🇬",
    description: "flag: Uganda",
    category: "Flags",
    aliases: ["uganda"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇺🇲",
    description: "flag: U.S. Outlying Islands",
    category: "Flags",
    aliases: ["us_outlying_islands"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🇺🇳",
    description: "flag: United Nations",
    category: "Flags",
    aliases: ["united_nations"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🇺🇸",
    description: "flag: United States",
    category: "Flags",
    aliases: ["us"],
    tags: ["flag", "united", "america"],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🇺🇾",
    description: "flag: Uruguay",
    category: "Flags",
    aliases: ["uruguay"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇺🇿",
    description: "flag: Uzbekistan",
    category: "Flags",
    aliases: ["uzbekistan"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇻🇦",
    description: "flag: Vatican City",
    category: "Flags",
    aliases: ["vatican_city"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇻🇨",
    description: "flag: St. Vincent & Grenadines",
    category: "Flags",
    aliases: ["st_vincent_grenadines"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇻🇪",
    description: "flag: Venezuela",
    category: "Flags",
    aliases: ["venezuela"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇻🇬",
    description: "flag: British Virgin Islands",
    category: "Flags",
    aliases: ["british_virgin_islands"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇻🇮",
    description: "flag: U.S. Virgin Islands",
    category: "Flags",
    aliases: ["us_virgin_islands"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇻🇳",
    description: "flag: Vietnam",
    category: "Flags",
    aliases: ["vietnam"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇻🇺",
    description: "flag: Vanuatu",
    category: "Flags",
    aliases: ["vanuatu"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇼🇫",
    description: "flag: Wallis & Futuna",
    category: "Flags",
    aliases: ["wallis_futuna"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇼🇸",
    description: "flag: Samoa",
    category: "Flags",
    aliases: ["samoa"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇽🇰",
    description: "flag: Kosovo",
    category: "Flags",
    aliases: ["kosovo"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇾🇪",
    description: "flag: Yemen",
    category: "Flags",
    aliases: ["yemen"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇾🇹",
    description: "flag: Mayotte",
    category: "Flags",
    aliases: ["mayotte"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇿🇦",
    description: "flag: South Africa",
    category: "Flags",
    aliases: ["south_africa"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇿🇲",
    description: "flag: Zambia",
    category: "Flags",
    aliases: ["zambia"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇿🇼",
    description: "flag: Zimbabwe",
    category: "Flags",
    aliases: ["zimbabwe"],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    description: "flag: England",
    category: "Flags",
    aliases: ["england"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    description: "flag: Scotland",
    category: "Flags",
    aliases: ["scotland"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    description: "flag: Wales",
    category: "Flags",
    aliases: ["wales"],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  }
];
const emojiList$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: emojiList
}, Symbol.toStringTag, { value: "Module" }));
const HR = {
  dependencies: [LexicalHorizontalRuleNode.HorizontalRuleNode],
  export: (node) => {
    return LexicalHorizontalRuleNode.$isHorizontalRuleNode(node) ? "***" : null;
  },
  regExp: /^(---|\*\*\*|___)\s?$/,
  replace: (parentNode, _1, _2, isImport) => {
    const line = LexicalHorizontalRuleNode.$createHorizontalRuleNode();
    if (isImport || parentNode.getNextSibling() != null) {
      parentNode.replace(line);
    } else {
      parentNode.insertBefore(line);
    }
    line.selectNext();
  },
  type: "element"
};
const IMAGE = {
  dependencies: [ImageNode],
  export: (node) => {
    if (!$isImageNode(node)) {
      return null;
    }
    return `![${node.getAltText()}](${node.getSrc()})`;
  },
  importRegExp: /!(?:\[([^[]*)\])(?:\(([^(]+)\))/,
  regExp: /!(?:\[([^[]*)\])(?:\(([^(]+)\))$/,
  replace: (textNode, match) => {
    const [, altText, src] = match;
    const imageNode = $createImageNode({
      altText,
      maxWidth: 800,
      src
    });
    textNode.replace(imageNode);
  },
  trigger: ")",
  type: "text-match"
};
const EMOJI = {
  dependencies: [],
  export: () => null,
  importRegExp: /:([a-z0-9_]+):/,
  regExp: /:([a-z0-9_]+):$/,
  replace: (textNode, [, name]) => {
    const emoji = emojiList.find((e) => e.aliases.includes(name))?.emoji;
    if (emoji) {
      textNode.replace(lexical.$createTextNode(emoji));
    }
  },
  trigger: ":",
  type: "text-match"
};
const EQUATION = {
  dependencies: [EquationNode],
  export: (node) => {
    if (!$isEquationNode(node)) {
      return null;
    }
    return `$${node.getEquation()}$`;
  },
  importRegExp: /\$([^$]+?)\$/,
  regExp: /\$([^$]+?)\$$/,
  replace: (textNode, match) => {
    const [, equation] = match;
    const equationNode = $createEquationNode(equation, true);
    textNode.replace(equationNode);
  },
  trigger: "$",
  type: "text-match"
};
const TWEET = {
  dependencies: [TweetNode],
  export: (node) => {
    if (!$isTweetNode(node)) {
      return null;
    }
    return `<tweet id="${node.getId()}" />`;
  },
  regExp: /<tweet id="([^"]+?)"\s?\/>\s?$/,
  replace: (textNode, _1, match) => {
    const [, id] = match;
    const tweetNode = $createTweetNode(id);
    textNode.replace(tweetNode);
  },
  type: "element"
};
const TABLE_ROW_REG_EXP = /^(?:\|)(.+)(?:\|)\s?$/;
const TABLE_ROW_DIVIDER_REG_EXP = /^(\| ?:?-*:? ?)+\|\s?$/;
const TABLE = {
  dependencies: [table.TableNode, table.TableRowNode, table.TableCellNode],
  export: (node) => {
    if (!table.$isTableNode(node)) {
      return null;
    }
    const output = [];
    for (const row of node.getChildren()) {
      const rowOutput = [];
      if (!table.$isTableRowNode(row)) {
        continue;
      }
      let isHeaderRow = false;
      for (const cell of row.getChildren()) {
        if (table.$isTableCellNode(cell)) {
          rowOutput.push(
            markdown.$convertToMarkdownString(PLAYGROUND_TRANSFORMERS, cell).replace(/\n/g, "\\n").trim()
          );
          if (cell.__headerState === table.TableCellHeaderStates.ROW) {
            isHeaderRow = true;
          }
        }
      }
      output.push(`| ${rowOutput.join(" | ")} |`);
      if (isHeaderRow) {
        output.push(`| ${rowOutput.map((_) => "---").join(" | ")} |`);
      }
    }
    return output.join("\n");
  },
  regExp: TABLE_ROW_REG_EXP,
  replace: (parentNode, _1, match) => {
    if (TABLE_ROW_DIVIDER_REG_EXP.test(match[0])) {
      const table2 = parentNode.getPreviousSibling();
      if (!table2 || !table.$isTableNode(table2)) {
        return;
      }
      const rows2 = table2.getChildren();
      const lastRow = rows2[rows2.length - 1];
      if (!lastRow || !table.$isTableRowNode(lastRow)) {
        return;
      }
      lastRow.getChildren().forEach((cell) => {
        if (!table.$isTableCellNode(cell)) {
          return;
        }
        cell.setHeaderStyles(table.TableCellHeaderStates.ROW, table.TableCellHeaderStates.ROW);
      });
      parentNode.remove();
      return;
    }
    const matchCells = mapToTableCells(match[0]);
    if (matchCells == null) {
      return;
    }
    const rows = [matchCells];
    let sibling = parentNode.getPreviousSibling();
    let maxCells = matchCells.length;
    while (sibling) {
      if (!lexical.$isParagraphNode(sibling)) {
        break;
      }
      if (sibling.getChildrenSize() !== 1) {
        break;
      }
      const firstChild = sibling.getFirstChild();
      if (!lexical.$isTextNode(firstChild)) {
        break;
      }
      const cells = mapToTableCells(firstChild.getTextContent());
      if (cells == null) {
        break;
      }
      maxCells = Math.max(maxCells, cells.length);
      rows.unshift(cells);
      const previousSibling2 = sibling.getPreviousSibling();
      sibling.remove();
      sibling = previousSibling2;
    }
    const table$1 = table.$createTableNode();
    for (const cells of rows) {
      const tableRow = table.$createTableRowNode();
      table$1.append(tableRow);
      for (let i = 0; i < maxCells; i++) {
        tableRow.append(i < cells.length ? cells[i] : $createTableCell(""));
      }
    }
    const previousSibling = parentNode.getPreviousSibling();
    if (table.$isTableNode(previousSibling) && getTableColumnsSize(previousSibling) === maxCells) {
      previousSibling.append(...table$1.getChildren());
      parentNode.remove();
    } else {
      parentNode.replace(table$1);
    }
    table$1.selectEnd();
  },
  type: "element"
};
function getTableColumnsSize(table$1) {
  const row = table$1.getFirstChild();
  return table.$isTableRowNode(row) ? row.getChildrenSize() : 0;
}
const $createTableCell = (textContent) => {
  textContent = textContent.replace(/\\n/g, "\n");
  const cell = table.$createTableCellNode(table.TableCellHeaderStates.NO_STATUS);
  markdown.$convertFromMarkdownString(textContent, PLAYGROUND_TRANSFORMERS, cell);
  return cell;
};
const mapToTableCells = (textContent) => {
  const match = textContent.match(TABLE_ROW_REG_EXP);
  if (!match || !match[1]) {
    return null;
  }
  return match[1].split("|").map((text) => $createTableCell(text));
};
const PLAYGROUND_TRANSFORMERS = [
  TABLE,
  HR,
  IMAGE,
  EMOJI,
  EQUATION,
  TWEET,
  markdown.CHECK_LIST,
  ...markdown.ELEMENT_TRANSFORMERS,
  ...markdown.MULTILINE_ELEMENT_TRANSFORMERS,
  ...markdown.TEXT_FORMAT_TRANSFORMERS,
  ...markdown.TEXT_MATCH_TRANSFORMERS
];
function MarkdownPlugin() {
  return /* @__PURE__ */ jsxRuntime.jsx(LexicalMarkdownShortcutPlugin.MarkdownShortcutPlugin, { transformers: PLAYGROUND_TRANSFORMERS });
}
function $convertMentionElement(domNode) {
  const textContent = domNode.textContent;
  const mentionName = domNode.getAttribute("data-lexical-mention-name");
  if (textContent !== null) {
    const node = $createMentionNode(
      typeof mentionName === "string" ? mentionName : textContent
    );
    return {
      node
    };
  }
  return null;
}
const mentionStyle = "background-color: rgba(24, 119, 232, 0.2)";
class MentionNode extends lexical.TextNode {
  __mention;
  static getType() {
    return "mention";
  }
  static clone(node) {
    return new MentionNode(node.__mention, node.__text, node.__key);
  }
  static importJSON(serializedNode) {
    return $createMentionNode(serializedNode.mentionName).updateFromJSON(serializedNode);
  }
  constructor(mentionName, text, key) {
    super(text ?? mentionName, key);
    this.__mention = mentionName;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      mentionName: this.__mention
    };
  }
  createDOM(config) {
    const dom = super.createDOM(config);
    dom.style.cssText = mentionStyle;
    dom.className = "mention";
    dom.spellcheck = false;
    return dom;
  }
  exportDOM() {
    const element = document.createElement("span");
    element.setAttribute("data-lexical-mention", "true");
    if (this.__text !== this.__mention) {
      element.setAttribute("data-lexical-mention-name", this.__mention);
    }
    element.textContent = this.__text;
    return { element };
  }
  static importDOM() {
    return {
      span: (domNode) => {
        if (!domNode.hasAttribute("data-lexical-mention")) {
          return null;
        }
        return {
          conversion: $convertMentionElement,
          priority: 1
        };
      }
    };
  }
  isTextEntity() {
    return true;
  }
  canInsertTextBefore() {
    return false;
  }
  canInsertTextAfter() {
    return false;
  }
}
function $createMentionNode(mentionName, textContent) {
  const mentionNode = new MentionNode(mentionName, mentionName);
  mentionNode.setMode("segmented").toggleDirectionless();
  return lexical.$applyNodeReplacement(mentionNode);
}
const PUNCTUATION = `\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'"~=<>_:;`;
const NAME = "\\b[A-Z][^\\s" + PUNCTUATION + "]";
const DocumentMentionsRegex = {
  NAME,
  PUNCTUATION
};
const PUNC = DocumentMentionsRegex.PUNCTUATION;
const TRIGGERS = ["@"].join("");
const VALID_CHARS = "[^" + TRIGGERS + PUNC + "\\s]";
const VALID_JOINS = "(?:\\.[ |$]| |[" + PUNC + "]|)";
const LENGTH_LIMIT = 75;
const AtSignMentionsRegex = new RegExp(
  "(^|\\s|\\()([" + TRIGGERS + "]((?:" + VALID_CHARS + VALID_JOINS + "){0," + LENGTH_LIMIT + "}))$"
);
const ALIAS_LENGTH_LIMIT = 50;
const AtSignMentionsRegexAliasRegex = new RegExp(
  "(^|\\s|\\()([" + TRIGGERS + "]((?:" + VALID_CHARS + "){0," + ALIAS_LENGTH_LIMIT + "}))$"
);
const SUGGESTION_LIST_LENGTH_LIMIT = 5;
const mentionsCache = /* @__PURE__ */ new Map();
const dummyMentionsData = [
  "Aayla Secura",
  "Adi Gallia",
  "Admiral Dodd Rancit",
  "Admiral Firmus Piett",
  "Admiral Gial Ackbar",
  "Admiral Ozzel",
  "Admiral Raddus",
  "Admiral Terrinald Screed",
  "Admiral Trench",
  "Admiral U.O. Statura",
  "Agen Kolar",
  "Agent Kallus",
  "Aiolin and Morit Astarte",
  "Aks Moe",
  "Almec",
  "Alton Kastle",
  "Amee",
  "AP-5",
  "Armitage Hux",
  "Artoo",
  "Arvel Crynyd",
  "Asajj Ventress",
  "Aurra Sing",
  "AZI-3",
  "Bala-Tik",
  "Barada",
  "Bargwill Tomder",
  "Baron Papanoida",
  "Barriss Offee",
  "Baze Malbus",
  "Bazine Netal",
  "BB-8",
  "BB-9E",
  "Ben Quadinaros",
  "Berch Teller",
  "Beru Lars",
  "Bib Fortuna",
  "Biggs Darklighter",
  "Black Krrsantan",
  "Bo-Katan Kryze",
  "Boba Fett",
  "Bobbajo",
  "Bodhi Rook",
  "Borvo the Hutt",
  "Boss Nass",
  "Bossk",
  "Breha Antilles-Organa",
  "Bren Derlin",
  "Brendol Hux",
  "BT-1",
  "C-3PO",
  "C1-10P",
  "Cad Bane",
  "Caluan Ematt",
  "Captain Gregor",
  "Captain Phasma",
  "Captain Quarsh Panaka",
  "Captain Rex",
  "Carlist Rieekan",
  "Casca Panzoro",
  "Cassian Andor",
  "Cassio Tagge",
  "Cham Syndulla",
  "Che Amanwe Papanoida",
  "Chewbacca",
  "Chi Eekway Papanoida",
  "Chief Chirpa",
  "Chirrut Îmwe",
  "Ciena Ree",
  "Cin Drallig",
  "Clegg Holdfast",
  "Cliegg Lars",
  "Coleman Kcaj",
  "Coleman Trebor",
  "Colonel Kaplan",
  "Commander Bly",
  "Commander Cody (CC-2224)",
  "Commander Fil (CC-3714)",
  "Commander Fox",
  "Commander Gree",
  "Commander Jet",
  "Commander Wolffe",
  "Conan Antonio Motti",
  "Conder Kyl",
  "Constable Zuvio",
  "Cordé",
  "Cpatain Typho",
  "Crix Madine",
  "Cut Lawquane",
  "Dak Ralter",
  "Dapp",
  "Darth Bane",
  "Darth Maul",
  "Darth Tyranus",
  "Daultay Dofine",
  "Del Meeko",
  "Delian Mors",
  "Dengar",
  "Depa Billaba",
  "Derek Klivian",
  "Dexter Jettster",
  "Dineé Ellberger",
  "DJ",
  "Doctor Aphra",
  "Doctor Evazan",
  "Dogma",
  "Dormé",
  "Dr. Cylo",
  "Droidbait",
  "Droopy McCool",
  "Dryden Vos",
  "Dud Bolt",
  "Ebe E. Endocott",
  "Echuu Shen-Jon",
  "Eeth Koth",
  "Eighth Brother",
  "Eirtaé",
  "Eli Vanto",
  "Ellé",
  "Ello Asty",
  "Embo",
  "Eneb Ray",
  "Enfys Nest",
  "EV-9D9",
  "Evaan Verlaine",
  "Even Piell",
  "Ezra Bridger",
  "Faro Argyus",
  "Feral",
  "Fifth Brother",
  "Finis Valorum",
  "Finn",
  "Fives",
  "FN-1824",
  "FN-2003",
  "Fodesinbeed Annodue",
  "Fulcrum",
  "FX-7",
  "GA-97",
  "Galen Erso",
  "Gallius Rax",
  'Garazeb "Zeb" Orrelios',
  "Gardulla the Hutt",
  "Garrick Versio",
  "Garven Dreis",
  "Gavyn Sykes",
  "Gideon Hask",
  "Gizor Dellso",
  "Gonk droid",
  "Grand Inquisitor",
  "Greeata Jendowanian",
  "Greedo",
  "Greer Sonnel",
  "Grievous",
  "Grummgar",
  "Gungi",
  "Hammerhead",
  "Han Solo",
  "Harter Kalonia",
  "Has Obbit",
  "Hera Syndulla",
  "Hevy",
  "Hondo Ohnaka",
  "Huyang",
  "Iden Versio",
  "IG-88",
  "Ima-Gun Di",
  "Inquisitors",
  "Inspector Thanoth",
  "Jabba",
  "Jacen Syndulla",
  "Jan Dodonna",
  "Jango Fett",
  "Janus Greejatus",
  "Jar Jar Binks",
  "Jas Emari",
  "Jaxxon",
  "Jek Tono Porkins",
  "Jeremoch Colton",
  "Jira",
  "Jobal Naberrie",
  "Jocasta Nu",
  "Joclad Danva",
  "Joh Yowza",
  "Jom Barell",
  "Joph Seastriker",
  "Jova Tarkin",
  "Jubnuk",
  "Jyn Erso",
  "K-2SO",
  "Kanan Jarrus",
  "Karbin",
  "Karina the Great",
  "Kes Dameron",
  "Ketsu Onyo",
  "Ki-Adi-Mundi",
  "King Katuunko",
  "Kit Fisto",
  "Kitster Banai",
  "Klaatu",
  "Klik-Klak",
  "Korr Sella",
  "Kylo Ren",
  "L3-37",
  "Lama Su",
  "Lando Calrissian",
  "Lanever Villecham",
  "Leia Organa",
  "Letta Turmond",
  "Lieutenant Kaydel Ko Connix",
  "Lieutenant Thire",
  "Lobot",
  "Logray",
  "Lok Durd",
  "Longo Two-Guns",
  "Lor San Tekka",
  "Lorth Needa",
  "Lott Dod",
  "Luke Skywalker",
  "Lumat",
  "Luminara Unduli",
  "Lux Bonteri",
  "Lyn Me",
  "Lyra Erso",
  "Mace Windu",
  "Malakili",
  "Mama the Hutt",
  "Mars Guo",
  "Mas Amedda",
  "Mawhonic",
  "Max Rebo",
  "Maximilian Veers",
  "Maz Kanata",
  "ME-8D9",
  "Meena Tills",
  "Mercurial Swift",
  "Mina Bonteri",
  "Miraj Scintel",
  "Mister Bones",
  "Mod Terrik",
  "Moden Canady",
  "Mon Mothma",
  "Moradmin Bast",
  "Moralo Eval",
  "Morley",
  "Mother Talzin",
  "Nahdar Vebb",
  "Nahdonnis Praji",
  "Nien Nunb",
  "Niima the Hutt",
  "Nines",
  "Norra Wexley",
  "Nute Gunray",
  "Nuvo Vindi",
  "Obi-Wan Kenobi",
  "Odd Ball",
  "Ody Mandrell",
  "Omi",
  "Onaconda Farr",
  "Oola",
  "OOM-9",
  "Oppo Rancisis",
  "Orn Free Taa",
  "Oro Dassyne",
  "Orrimarko",
  "Osi Sobeck",
  "Owen Lars",
  "Pablo-Jill",
  "Padmé Amidala",
  "Pagetti Rook",
  "Paige Tico",
  "Paploo",
  "Petty Officer Thanisson",
  "Pharl McQuarrie",
  "Plo Koon",
  "Po Nudo",
  "Poe Dameron",
  "Poggle the Lesser",
  "Pong Krell",
  "Pooja Naberrie",
  "PZ-4CO",
  "Quarrie",
  "Quay Tolsite",
  "Queen Apailana",
  "Queen Jamillia",
  "Queen Neeyutnee",
  "Qui-Gon Jinn",
  "Quiggold",
  "Quinlan Vos",
  "R2-D2",
  "R2-KT",
  "R3-S6",
  "R4-P17",
  "R5-D4",
  "RA-7",
  "Rabé",
  "Rako Hardeen",
  "Ransolm Casterfo",
  "Rappertunie",
  "Ratts Tyerell",
  "Raymus Antilles",
  "Ree-Yees",
  "Reeve Panzoro",
  "Rey",
  "Ric Olié",
  "Riff Tamson",
  "Riley",
  "Rinnriyin Di",
  "Rio Durant",
  "Rogue Squadron",
  "Romba",
  "Roos Tarpals",
  "Rose Tico",
  "Rotta the Hutt",
  "Rukh",
  "Rune Haako",
  "Rush Clovis",
  "Ruwee Naberrie",
  "Ryoo Naberrie",
  "Sabé",
  "Sabine Wren",
  "Saché",
  "Saelt-Marae",
  "Saesee Tiin",
  "Salacious B. Crumb",
  "San Hill",
  "Sana Starros",
  "Sarco Plank",
  "Sarkli",
  "Satine Kryze",
  "Savage Opress",
  "Sebulba",
  "Senator Organa",
  "Sergeant Kreel",
  "Seventh Sister",
  "Shaak Ti",
  "Shara Bey",
  "Shmi Skywalker",
  "Shu Mai",
  "Sidon Ithano",
  "Sifo-Dyas",
  "Sim Aloo",
  "Siniir Rath Velus",
  "Sio Bibble",
  "Sixth Brother",
  "Slowen Lo",
  "Sly Moore",
  "Snaggletooth",
  "Snap Wexley",
  "Snoke",
  "Sola Naberrie",
  "Sora Bulq",
  "Strono Tuggs",
  "Sy Snootles",
  "Tallissan Lintra",
  "Tarfful",
  "Tasu Leech",
  "Taun We",
  "TC-14",
  "Tee Watt Kaa",
  "Teebo",
  "Teedo",
  "Teemto Pagalies",
  "Temiri Blagg",
  "Tessek",
  "Tey How",
  "Thane Kyrell",
  "The Bendu",
  "The Smuggler",
  "Thrawn",
  "Tiaan Jerjerrod",
  "Tion Medon",
  "Tobias Beckett",
  "Tulon Voidgazer",
  "Tup",
  "U9-C4",
  "Unkar Plutt",
  "Val Beckett",
  "Vanden Willard",
  "Vice Admiral Amilyn Holdo",
  "Vober Dand",
  "WAC-47",
  "Wag Too",
  "Wald",
  "Walrus Man",
  "Warok",
  "Wat Tambor",
  "Watto",
  "Wedge Antilles",
  "Wes Janson",
  "Wicket W. Warrick",
  "Wilhuff Tarkin",
  "Wollivan",
  "Wuher",
  "Wullf Yularen",
  "Xamuel Lennox",
  "Yaddle",
  "Yarael Poof",
  "Yoda",
  "Zam Wesell",
  "Zev Senesca",
  "Ziro the Hutt",
  "Zuckuss"
];
const dummyLookupService = {
  search(string, callback) {
    setTimeout(() => {
      const results = dummyMentionsData.filter(
        (mention) => mention.toLowerCase().includes(string.toLowerCase())
      );
      callback(results);
    }, 500);
  }
};
function useMentionLookupService(mentionString) {
  const [results, setResults] = React.useState([]);
  React.useEffect(() => {
    const cachedResults = mentionsCache.get(mentionString);
    if (mentionString == null) {
      setResults([]);
      return;
    }
    if (cachedResults === null) {
      return;
    } else if (cachedResults !== void 0) {
      setResults(cachedResults);
      return;
    }
    mentionsCache.set(mentionString, null);
    dummyLookupService.search(mentionString, (newResults) => {
      mentionsCache.set(mentionString, newResults);
      setResults(newResults);
    });
  }, [mentionString]);
  return results;
}
function checkForAtSignMentions(text, minMatchLength) {
  let match = AtSignMentionsRegex.exec(text);
  if (match === null) {
    match = AtSignMentionsRegexAliasRegex.exec(text);
  }
  if (match !== null) {
    const maybeLeadingWhitespace = match[1];
    const matchingString = match[3];
    if (matchingString.length >= minMatchLength) {
      return {
        leadOffset: match.index + maybeLeadingWhitespace.length,
        matchingString,
        replaceableString: match[2]
      };
    }
  }
  return null;
}
function getPossibleQueryMatch(text) {
  return checkForAtSignMentions(text, 1);
}
class MentionTypeaheadOption extends LexicalTypeaheadMenuPlugin.MenuOption {
  name;
  picture;
  constructor(name, picture) {
    super(name);
    this.name = name;
    this.picture = picture;
  }
}
function MentionsTypeaheadMenuItem({
  index,
  isSelected,
  onClick,
  onMouseEnter,
  option
}) {
  let className = "item";
  if (isSelected) {
    className += " selected";
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "li",
    {
      tabIndex: -1,
      className,
      ref: option.setRefElement,
      role: "option",
      "aria-selected": isSelected,
      id: "typeahead-item-" + index,
      onMouseEnter,
      onClick,
      children: [
        option.picture,
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: option.name })
      ]
    },
    option.key
  );
}
function NewMentionsPlugin() {
  const [editor] = LexicalComposerContext.useLexicalComposerContext();
  const [queryString, setQueryString] = React.useState(null);
  const results = useMentionLookupService(queryString);
  const checkForSlashTriggerMatch = LexicalTypeaheadMenuPlugin.useBasicTypeaheadTriggerMatch("/", {
    minLength: 0
  });
  const options = React.useMemo(
    () => results.map((result) => new MentionTypeaheadOption(result, /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon user" }))).slice(0, SUGGESTION_LIST_LENGTH_LIMIT),
    [results]
  );
  const onSelectOption = React.useCallback(
    (selectedOption, nodeToReplace, closeMenu) => {
      editor.update(() => {
        const mentionNode = $createMentionNode(selectedOption.name);
        if (nodeToReplace) {
          nodeToReplace.replace(mentionNode);
        }
        mentionNode.select();
        closeMenu();
      });
    },
    [editor]
  );
  const checkForMentionMatch = React.useCallback(
    (text) => {
      const slashMatch = checkForSlashTriggerMatch(text, editor);
      if (slashMatch !== null) {
        return null;
      }
      return getPossibleQueryMatch(text);
    },
    [checkForSlashTriggerMatch, editor]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(
    LexicalTypeaheadMenuPlugin.LexicalTypeaheadMenuPlugin,
    {
      onQueryChange: setQueryString,
      onSelectOption,
      triggerFn: checkForMentionMatch,
      options,
      menuRenderFn: (anchorElementRef, { selectedIndex, selectOptionAndCleanUp, setHighlightedIndex }) => anchorElementRef.current && results.length ? ReactDOM__namespace.createPortal(
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "typeahead-popover mentions-menu", children: /* @__PURE__ */ jsxRuntime.jsx("ul", { children: options.map((option, i) => /* @__PURE__ */ jsxRuntime.jsx(
          MentionsTypeaheadMenuItem,
          {
            index: i,
            isSelected: selectedIndex === i,
            onClick: () => {
              setHighlightedIndex(i);
              selectOptionAndCleanUp(option);
            },
            onMouseEnter: () => {
              setHighlightedIndex(i);
            },
            option
          },
          option.key
        )) }) }),
        anchorElementRef.current
      ) : null
    }
  );
}
var UpdateFontSizeType = /* @__PURE__ */ ((UpdateFontSizeType2) => {
  UpdateFontSizeType2[UpdateFontSizeType2["increment"] = 1] = "increment";
  UpdateFontSizeType2[UpdateFontSizeType2["decrement"] = 2] = "decrement";
  return UpdateFontSizeType2;
})(UpdateFontSizeType || {});
const calculateNextFontSize = (currentFontSize, updateType) => {
  if (!updateType) {
    return currentFontSize;
  }
  let updatedFontSize = currentFontSize;
  switch (updateType) {
    case 2:
      switch (true) {
        case currentFontSize > MAX_ALLOWED_FONT_SIZE:
          updatedFontSize = MAX_ALLOWED_FONT_SIZE;
          break;
        case currentFontSize >= 48:
          updatedFontSize -= 12;
          break;
        case currentFontSize >= 24:
          updatedFontSize -= 4;
          break;
        case currentFontSize >= 14:
          updatedFontSize -= 2;
          break;
        case currentFontSize >= 9:
          updatedFontSize -= 1;
          break;
        default:
          updatedFontSize = MIN_ALLOWED_FONT_SIZE;
          break;
      }
      break;
    case 1:
      switch (true) {
        case currentFontSize < MIN_ALLOWED_FONT_SIZE:
          updatedFontSize = MIN_ALLOWED_FONT_SIZE;
          break;
        case currentFontSize < 12:
          updatedFontSize += 1;
          break;
        case currentFontSize < 20:
          updatedFontSize += 2;
          break;
        case currentFontSize < 36:
          updatedFontSize += 4;
          break;
        case currentFontSize <= 60:
          updatedFontSize += 12;
          break;
        default:
          updatedFontSize = MAX_ALLOWED_FONT_SIZE;
          break;
      }
      break;
  }
  return updatedFontSize;
};
const updateFontSizeInSelection = (editor, newFontSize, updateType) => {
  const getNextFontSize = (prevFontSize) => {
    if (!prevFontSize) {
      prevFontSize = `${DEFAULT_FONT_SIZE}px`;
    }
    prevFontSize = prevFontSize.slice(0, -2);
    const nextFontSize = calculateNextFontSize(Number(prevFontSize), updateType);
    return `${nextFontSize}px`;
  };
  editor.update(() => {
    if (editor.isEditable()) {
      const selection$1 = lexical.$getSelection();
      if (selection$1 !== null) {
        selection.$patchStyleText(selection$1, {
          "font-size": newFontSize || getNextFontSize
        });
      }
    }
  });
};
const updateFontSize = (editor, updateType, inputValue) => {
  if (inputValue !== "") {
    const nextFontSize = calculateNextFontSize(Number(inputValue), updateType);
    updateFontSizeInSelection(editor, String(nextFontSize) + "px", null);
  } else {
    updateFontSizeInSelection(editor, null, updateType);
  }
};
const formatParagraph = (editor) => {
  editor.update(() => {
    const selection$1 = lexical.$getSelection();
    if (lexical.$isRangeSelection(selection$1)) {
      selection.$setBlocksType(selection$1, () => lexical.$createParagraphNode());
    }
  });
};
const formatHeading = (editor, blockType, headingSize) => {
  if (blockType !== headingSize) {
    editor.update(() => {
      const selection$1 = lexical.$getSelection();
      selection.$setBlocksType(selection$1, () => richText.$createHeadingNode(headingSize));
    });
  }
};
const formatBulletList = (editor, blockType) => {
  if (blockType !== "bullet") {
    editor.dispatchCommand(list.INSERT_UNORDERED_LIST_COMMAND, void 0);
  } else {
    formatParagraph(editor);
  }
};
const formatCheckList = (editor, blockType) => {
  if (blockType !== "check") {
    editor.dispatchCommand(list.INSERT_CHECK_LIST_COMMAND, void 0);
  } else {
    formatParagraph(editor);
  }
};
const formatNumberedList = (editor, blockType) => {
  if (blockType !== "number") {
    editor.dispatchCommand(list.INSERT_ORDERED_LIST_COMMAND, void 0);
  } else {
    formatParagraph(editor);
  }
};
const formatQuote = (editor, blockType) => {
  if (blockType !== "quote") {
    editor.update(() => {
      const selection$1 = lexical.$getSelection();
      selection.$setBlocksType(selection$1, () => richText.$createQuoteNode());
    });
  }
};
const formatCode = (editor, blockType) => {
  if (blockType !== "code") {
    editor.update(() => {
      let selection$1 = lexical.$getSelection();
      if (selection$1 !== null) {
        if (selection$1.isCollapsed()) {
          selection.$setBlocksType(selection$1, () => code.$createCodeNode());
        } else {
          const textContent = selection$1.getTextContent();
          const codeNode = code.$createCodeNode();
          selection$1.insertNodes([codeNode]);
          selection$1 = lexical.$getSelection();
          if (lexical.$isRangeSelection(selection$1)) {
            selection$1.insertRawText(textContent);
          }
        }
      }
    });
  }
};
const clearFormatting = (editor) => {
  editor.update(() => {
    const selection2 = lexical.$getSelection();
    if (lexical.$isRangeSelection(selection2) || table.$isTableSelection(selection2)) {
      const anchor = selection2.anchor;
      const focus = selection2.focus;
      const nodes = selection2.getNodes();
      const extractedNodes = selection2.extract();
      if (anchor.key === focus.key && anchor.offset === focus.offset) {
        return;
      }
      nodes.forEach((node, idx) => {
        if (lexical.$isTextNode(node)) {
          let textNode = node;
          if (idx === 0 && anchor.offset !== 0) {
            textNode = textNode.splitText(anchor.offset)[1] || textNode;
          }
          if (idx === nodes.length - 1) {
            textNode = textNode.splitText(focus.offset)[0] || textNode;
          }
          const extractedTextNode = extractedNodes[0];
          if (nodes.length === 1 && lexical.$isTextNode(extractedTextNode)) {
            textNode = extractedTextNode;
          }
          if (textNode.__style !== "") {
            textNode.setStyle("");
          }
          if (textNode.__format !== 0) {
            textNode.setFormat(0);
            utils.$getNearestBlockElementAncestorOrThrow(textNode).setFormat("");
          }
          node = textNode;
        } else if (richText.$isHeadingNode(node) || richText.$isQuoteNode(node)) {
          node.replace(lexical.$createParagraphNode(), true);
        } else if (LexicalDecoratorBlockNode.$isDecoratorBlockNode(node)) {
          node.setFormat("");
        }
      });
    }
  });
};
const SHORTCUTS = Object.freeze({
  // (Ctrl|⌘) + (Alt|Option) + <key> shortcuts
  NORMAL: IS_APPLE ? "⌘+Opt+0" : "Ctrl+Alt+0",
  HEADING1: IS_APPLE ? "⌘+Opt+1" : "Ctrl+Alt+1",
  HEADING2: IS_APPLE ? "⌘+Opt+2" : "Ctrl+Alt+2",
  HEADING3: IS_APPLE ? "⌘+Opt+3" : "Ctrl+Alt+3",
  BULLET_LIST: IS_APPLE ? "⌘+Opt+4" : "Ctrl+Alt+4",
  NUMBERED_LIST: IS_APPLE ? "⌘+Opt+5" : "Ctrl+Alt+5",
  CHECK_LIST: IS_APPLE ? "⌘+Opt+6" : "Ctrl+Alt+6",
  CODE_BLOCK: IS_APPLE ? "⌘+Opt+C" : "Ctrl+Alt+C",
  QUOTE: IS_APPLE ? "⌘+Opt+Q" : "Ctrl+Alt+Q",
  // (Ctrl|⌘) + Shift + <key> shortcuts
  INCREASE_FONT_SIZE: IS_APPLE ? "⌘+Shift+." : "Ctrl+Shift+.",
  DECREASE_FONT_SIZE: IS_APPLE ? "⌘+Shift+," : "Ctrl+Shift+,",
  INSERT_CODE_BLOCK: IS_APPLE ? "⌘+Shift+C" : "Ctrl+Shift+C",
  STRIKETHROUGH: IS_APPLE ? "⌘+Shift+S" : "Ctrl+Shift+S",
  LOWERCASE: IS_APPLE ? "⌘+Shift+1" : "Ctrl+Shift+1",
  UPPERCASE: IS_APPLE ? "⌘+Shift+2" : "Ctrl+Shift+2",
  CAPITALIZE: IS_APPLE ? "⌘+Shift+3" : "Ctrl+Shift+3",
  CENTER_ALIGN: IS_APPLE ? "⌘+Shift+E" : "Ctrl+Shift+E",
  JUSTIFY_ALIGN: IS_APPLE ? "⌘+Shift+J" : "Ctrl+Shift+J",
  LEFT_ALIGN: IS_APPLE ? "⌘+Shift+L" : "Ctrl+Shift+L",
  RIGHT_ALIGN: IS_APPLE ? "⌘+Shift+R" : "Ctrl+Shift+R",
  // (Ctrl|⌘) + <key> shortcuts
  SUBSCRIPT: IS_APPLE ? "⌘+," : "Ctrl+,",
  SUPERSCRIPT: IS_APPLE ? "⌘+." : "Ctrl+.",
  INDENT: IS_APPLE ? "⌘+]" : "Ctrl+]",
  OUTDENT: IS_APPLE ? "⌘+[" : "Ctrl+[",
  CLEAR_FORMATTING: IS_APPLE ? "⌘+\\" : "Ctrl+\\",
  REDO: IS_APPLE ? "⌘+Shift+Z" : "Ctrl+Y",
  UNDO: IS_APPLE ? "⌘+Z" : "Ctrl+Z",
  BOLD: IS_APPLE ? "⌘+B" : "Ctrl+B",
  ITALIC: IS_APPLE ? "⌘+I" : "Ctrl+I",
  UNDERLINE: IS_APPLE ? "⌘+U" : "Ctrl+U",
  INSERT_LINK: IS_APPLE ? "⌘+K" : "Ctrl+K"
});
function controlOrMeta(metaKey, ctrlKey) {
  return IS_APPLE ? metaKey : ctrlKey;
}
function isFormatParagraph(event) {
  const { code: code2, shiftKey, altKey, metaKey, ctrlKey } = event;
  return (code2 === "Numpad0" || code2 === "Digit0") && !shiftKey && altKey && controlOrMeta(metaKey, ctrlKey);
}
function isFormatHeading(event) {
  const { code: code2, shiftKey, altKey, metaKey, ctrlKey } = event;
  const keyNumber = code2[code2.length - 1];
  return ["1", "2", "3"].includes(keyNumber) && !shiftKey && altKey && controlOrMeta(metaKey, ctrlKey);
}
function isFormatBulletList(event) {
  const { code: code2, shiftKey, altKey, metaKey, ctrlKey } = event;
  return (code2 === "Numpad4" || code2 === "Digit4") && !shiftKey && altKey && controlOrMeta(metaKey, ctrlKey);
}
function isFormatNumberedList(event) {
  const { code: code2, shiftKey, altKey, metaKey, ctrlKey } = event;
  return (code2 === "Numpad5" || code2 === "Digit5") && !shiftKey && altKey && controlOrMeta(metaKey, ctrlKey);
}
function isFormatCheckList(event) {
  const { code: code2, shiftKey, altKey, metaKey, ctrlKey } = event;
  return (code2 === "Numpad6" || code2 === "Digit6") && !shiftKey && altKey && controlOrMeta(metaKey, ctrlKey);
}
function isFormatCode(event) {
  const { code: code2, shiftKey, altKey, metaKey, ctrlKey } = event;
  return code2 === "KeyC" && !shiftKey && altKey && controlOrMeta(metaKey, ctrlKey);
}
function isFormatQuote(event) {
  const { code: code2, shiftKey, altKey, metaKey, ctrlKey } = event;
  return code2 === "KeyQ" && !shiftKey && altKey && controlOrMeta(metaKey, ctrlKey);
}
function isLowercase(event) {
  const { code: code2, shiftKey, altKey, metaKey, ctrlKey } = event;
  return (code2 === "Numpad1" || code2 === "Digit1") && shiftKey && !altKey && controlOrMeta(metaKey, ctrlKey);
}
function isUppercase(event) {
  const { code: code2, shiftKey, altKey, metaKey, ctrlKey } = event;
  return (code2 === "Numpad2" || code2 === "Digit2") && shiftKey && !altKey && controlOrMeta(metaKey, ctrlKey);
}
function isCapitalize(event) {
  const { code: code2, shiftKey, altKey, metaKey, ctrlKey } = event;
  return (code2 === "Numpad3" || code2 === "Digit3") && shiftKey && !altKey && controlOrMeta(metaKey, ctrlKey);
}
function isStrikeThrough(event) {
  const { code: code2, shiftKey, altKey, metaKey, ctrlKey } = event;
  return code2 === "KeyS" && shiftKey && !altKey && controlOrMeta(metaKey, ctrlKey);
}
function isIndent(event) {
  const { code: code2, shiftKey, altKey, metaKey, ctrlKey } = event;
  return code2 === "BracketRight" && !shiftKey && !altKey && controlOrMeta(metaKey, ctrlKey);
}
function isOutdent(event) {
  const { code: code2, shiftKey, altKey, metaKey, ctrlKey } = event;
  return code2 === "BracketLeft" && !shiftKey && !altKey && controlOrMeta(metaKey, ctrlKey);
}
function isCenterAlign(event) {
  const { code: code2, shiftKey, altKey, metaKey, ctrlKey } = event;
  return code2 === "KeyE" && shiftKey && !altKey && controlOrMeta(metaKey, ctrlKey);
}
function isLeftAlign(event) {
  const { code: code2, shiftKey, altKey, metaKey, ctrlKey } = event;
  return code2 === "KeyL" && shiftKey && !altKey && controlOrMeta(metaKey, ctrlKey);
}
function isRightAlign(event) {
  const { code: code2, shiftKey, altKey, metaKey, ctrlKey } = event;
  return code2 === "KeyR" && shiftKey && !altKey && controlOrMeta(metaKey, ctrlKey);
}
function isJustifyAlign(event) {
  const { code: code2, shiftKey, altKey, metaKey, ctrlKey } = event;
  return code2 === "KeyJ" && shiftKey && !altKey && controlOrMeta(metaKey, ctrlKey);
}
function isSubscript(event) {
  const { code: code2, shiftKey, altKey, metaKey, ctrlKey } = event;
  return code2 === "Comma" && !shiftKey && !altKey && controlOrMeta(metaKey, ctrlKey);
}
function isSuperscript(event) {
  const { code: code2, shiftKey, altKey, metaKey, ctrlKey } = event;
  return code2 === "Period" && !shiftKey && !altKey && controlOrMeta(metaKey, ctrlKey);
}
function isInsertCodeBlock(event) {
  const { code: code2, shiftKey, altKey, metaKey, ctrlKey } = event;
  return code2 === "KeyC" && shiftKey && !altKey && controlOrMeta(metaKey, ctrlKey);
}
function isIncreaseFontSize(event) {
  const { code: code2, shiftKey, altKey, metaKey, ctrlKey } = event;
  return code2 === "Period" && shiftKey && !altKey && controlOrMeta(metaKey, ctrlKey);
}
function isDecreaseFontSize(event) {
  const { code: code2, shiftKey, altKey, metaKey, ctrlKey } = event;
  return code2 === "Comma" && shiftKey && !altKey && controlOrMeta(metaKey, ctrlKey);
}
function isClearFormatting(event) {
  const { code: code2, shiftKey, altKey, metaKey, ctrlKey } = event;
  return code2 === "Backslash" && !shiftKey && !altKey && controlOrMeta(metaKey, ctrlKey);
}
function isInsertLink(event) {
  const { code: code2, shiftKey, altKey, metaKey, ctrlKey } = event;
  return code2 === "KeyK" && !shiftKey && !altKey && controlOrMeta(metaKey, ctrlKey);
}
function ShortcutsPlugin({
  editor,
  setIsLinkEditMode
}) {
  const { toolbarState } = useToolbarState();
  React.useEffect(() => {
    const keyboardShortcutsHandler = (payload) => {
      const event = payload;
      if (isFormatParagraph(event)) {
        event.preventDefault();
        formatParagraph(editor);
      } else if (isFormatHeading(event)) {
        event.preventDefault();
        const { code: code2 } = event;
        const headingSize = `h${code2[code2.length - 1]}`;
        formatHeading(editor, toolbarState.blockType, headingSize);
      } else if (isFormatBulletList(event)) {
        event.preventDefault();
        formatBulletList(editor, toolbarState.blockType);
      } else if (isFormatNumberedList(event)) {
        event.preventDefault();
        formatNumberedList(editor, toolbarState.blockType);
      } else if (isFormatCheckList(event)) {
        event.preventDefault();
        formatCheckList(editor, toolbarState.blockType);
      } else if (isFormatCode(event)) {
        event.preventDefault();
        formatCode(editor, toolbarState.blockType);
      } else if (isFormatQuote(event)) {
        event.preventDefault();
        formatQuote(editor, toolbarState.blockType);
      } else if (isStrikeThrough(event)) {
        event.preventDefault();
        editor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, "strikethrough");
      } else if (isLowercase(event)) {
        event.preventDefault();
        editor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, "lowercase");
      } else if (isUppercase(event)) {
        event.preventDefault();
        editor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, "uppercase");
      } else if (isCapitalize(event)) {
        event.preventDefault();
        editor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, "capitalize");
      } else if (isIndent(event)) {
        event.preventDefault();
        editor.dispatchCommand(lexical.INDENT_CONTENT_COMMAND, void 0);
      } else if (isOutdent(event)) {
        event.preventDefault();
        editor.dispatchCommand(lexical.OUTDENT_CONTENT_COMMAND, void 0);
      } else if (isCenterAlign(event)) {
        event.preventDefault();
        editor.dispatchCommand(lexical.FORMAT_ELEMENT_COMMAND, "center");
      } else if (isLeftAlign(event)) {
        event.preventDefault();
        editor.dispatchCommand(lexical.FORMAT_ELEMENT_COMMAND, "left");
      } else if (isRightAlign(event)) {
        event.preventDefault();
        editor.dispatchCommand(lexical.FORMAT_ELEMENT_COMMAND, "right");
      } else if (isJustifyAlign(event)) {
        event.preventDefault();
        editor.dispatchCommand(lexical.FORMAT_ELEMENT_COMMAND, "justify");
      } else if (isSubscript(event)) {
        event.preventDefault();
        editor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, "subscript");
      } else if (isSuperscript(event)) {
        event.preventDefault();
        editor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, "superscript");
      } else if (isInsertCodeBlock(event)) {
        event.preventDefault();
        editor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, "code");
      } else if (isIncreaseFontSize(event)) {
        event.preventDefault();
        updateFontSize(editor, UpdateFontSizeType.increment, toolbarState.fontSizeInputValue);
      } else if (isDecreaseFontSize(event)) {
        event.preventDefault();
        updateFontSize(editor, UpdateFontSizeType.decrement, toolbarState.fontSizeInputValue);
      } else if (isClearFormatting(event)) {
        event.preventDefault();
        clearFormatting(editor);
      } else if (isInsertLink(event)) {
        event.preventDefault();
        const url = toolbarState.isLink ? null : sanitizeUrl("https://");
        setIsLinkEditMode(!toolbarState.isLink);
        editor.dispatchCommand(link.TOGGLE_LINK_COMMAND, url);
      }
      return false;
    };
    return editor.registerCommand(
      lexical.KEY_MODIFIER_COMMAND,
      keyboardShortcutsHandler,
      lexical.COMMAND_PRIORITY_NORMAL
    );
  }, [
    editor,
    toolbarState.isLink,
    toolbarState.blockType,
    toolbarState.fontSizeInputValue,
    setIsLinkEditMode
  ]);
  return null;
}
class SpecialTextNode extends lexical.TextNode {
  static getType() {
    return "specialText";
  }
  static clone(node) {
    return new SpecialTextNode(node.__text, node.__key);
  }
  createDOM(config) {
    const dom = document.createElement("span");
    utils.addClassNamesToElement(dom, config.theme.specialText);
    dom.textContent = this.getTextContent();
    return dom;
  }
  updateDOM(prevNode, dom, config) {
    if (prevNode.__text.startsWith("[") && prevNode.__text.endsWith("]")) {
      const strippedText = this.__text.substring(1, this.__text.length - 1);
      dom.textContent = strippedText;
    }
    utils.addClassNamesToElement(dom, config.theme.specialText);
    return false;
  }
  static importJSON(serializedNode) {
    return $createSpecialTextNode().updateFromJSON(serializedNode);
  }
  isTextEntity() {
    return true;
  }
  canInsertTextAfter() {
    return false;
  }
}
function $createSpecialTextNode(text = "") {
  return lexical.$applyNodeReplacement(new SpecialTextNode(text));
}
function StrapiOnChangePlugin({
  onChange,
  expectedEditorState
}) {
  const [editor] = LexicalComposerContext.useLexicalComposerContext();
  React.useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      onChange(editorState);
    });
  }, [editor, onChange]);
  React.useEffect(() => {
    if (expectedEditorState && !equal__default.default(expectedEditorState, editor.getEditorState().toJSON())) {
      const parsedEditorState = editor.parseEditorState(expectedEditorState);
      editor.setEditorState(parsedEditorState);
    }
  }, [editor, expectedEditorState]);
  return null;
}
const COMMAND_PRIORITY_LOW = 1;
const TAB_TO_FOCUS_INTERVAL = 100;
let lastTabKeyDownTimestamp = 0;
let hasRegisteredKeyDownListener = false;
function registerKeyTimeStampTracker() {
  window.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Tab") {
        lastTabKeyDownTimestamp = event.timeStamp;
      }
    },
    true
  );
}
function TabFocusPlugin() {
  const [editor] = LexicalComposerContext.useLexicalComposerContext();
  React.useEffect(() => {
    if (!hasRegisteredKeyDownListener) {
      registerKeyTimeStampTracker();
      hasRegisteredKeyDownListener = true;
    }
    return editor.registerCommand(
      lexical.FOCUS_COMMAND,
      (event) => {
        const selection2 = lexical.$getSelection();
        if (lexical.$isRangeSelection(selection2)) {
          if (lastTabKeyDownTimestamp + TAB_TO_FOCUS_INTERVAL > event.timeStamp) {
            lexical.$setSelection(selection2.clone());
          }
        }
        return false;
      },
      COMMAND_PRIORITY_LOW
    );
  }, [editor]);
  return null;
}
let skipAddingToHistoryStack = false;
const WIDTH = 214;
const HEIGHT = 150;
const PRESET_COLORS = [
  "#3b82f6",
  // Blue
  "#ef4444",
  // Red
  "#10b981",
  // Green
  "#f59e0b",
  // Yellow
  "#8b5cf6",
  // Purple
  "#f97316",
  // Orange
  "#06b6d4",
  // Cyan
  "#84cc16",
  // Lime
  "#ec4899",
  // Pink
  "#6b7280",
  // Gray
  "#1f2937",
  // Dark Gray
  "#000000"
  // Black
];
function ColorPicker({ color, onChange, label }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [customColor, setCustomColor] = React.useState(color);
  const [selfColor, setSelfColor] = React.useState(transformColor("hex", color));
  const [inputColor, setInputColor] = React.useState(color);
  React.useRef(null);
  React.useMemo(
    () => ({
      x: selfColor.hsv.s / 100 * WIDTH,
      y: (100 - selfColor.hsv.v) / 100 * HEIGHT
    }),
    [selfColor.hsv.s, selfColor.hsv.v]
  );
  React.useMemo(
    () => ({
      x: selfColor.hsv.h / 360 * WIDTH
    }),
    [selfColor.hsv]
  );
  const handleColorSelect = (selectedColor) => {
    onChange?.(selectedColor, skipAddingToHistoryStack);
    setCustomColor(selectedColor);
    setIsOpen(false);
  };
  const handleCustomColorChange = (e) => {
    const newColor = e.target.value;
    setCustomColor(newColor);
    onChange?.(newColor, skipAddingToHistoryStack);
  };
  React.useEffect(() => {
    if (color === void 0) {
      return;
    }
    const newColor = transformColor("hex", color);
    setSelfColor(newColor);
    setInputColor(newColor.hex);
  }, [color]);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "color-picker", children: [
    label && /* @__PURE__ */ jsxRuntime.jsx("label", { className: "color-picker__label", children: label }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "color-picker__container", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          type: "button",
          className: "color-picker__trigger",
          onClick: () => setIsOpen(!isOpen),
          style: { backgroundColor: color },
          "aria-label": "Select color",
          children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "color-picker__preview", style: { backgroundColor: color } })
        }
      ),
      isOpen && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "color-picker__dropdown", children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "color-picker__presets", children: PRESET_COLORS.map((presetColor) => /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            type: "button",
            className: `color-picker__preset ${color === presetColor ? "color-picker__preset--active" : ""}`,
            style: { backgroundColor: presetColor },
            onClick: () => handleColorSelect(presetColor),
            "aria-label": `Select ${presetColor}`
          },
          presetColor
        )) }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "color-picker__custom", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "input",
            {
              type: "color",
              value: customColor,
              onChange: handleCustomColorChange,
              className: "color-picker__input"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "color-picker__custom-label", children: "Custom" })
        ] })
      ] })
    ] }),
    isOpen && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "color-picker__overlay", onClick: () => setIsOpen(false) })
  ] });
}
function toHex(value) {
  if (!value.startsWith("#")) {
    const ctx = document.createElement("canvas").getContext("2d");
    if (!ctx) {
      throw new Error("2d context not supported or canvas already initialized");
    }
    ctx.fillStyle = value;
    return ctx.fillStyle;
  } else if (value.length === 4 || value.length === 5) {
    value = value.split("").map((v, i) => i ? v + v : "#").join("");
    return value;
  } else if (value.length === 7 || value.length === 9) {
    return value;
  }
  return "#000000";
}
function hex2rgb(hex) {
  const rbgArr = (hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => "#" + r + r + g + g + b + b).substring(1).match(/.{2}/g) || []).map((x) => parseInt(x, 16));
  return {
    b: rbgArr[2],
    g: rbgArr[1],
    r: rbgArr[0]
  };
}
function rgb2hsv({ r, g, b }) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const d = max - Math.min(r, g, b);
  const h = d ? (max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? 2 + (b - r) / d : 4 + (r - g) / d) * 60 : 0;
  const s = max ? d / max * 100 : 0;
  const v = max * 100;
  return { h, s, v };
}
function transformColor(format, color) {
  let hex = toHex("#121212");
  let rgb = hex2rgb(hex);
  let hsv = rgb2hsv(rgb);
  {
    const value = color;
    hex = toHex(value);
    rgb = hex2rgb(hex);
    hsv = rgb2hsv(rgb);
  }
  return { hex, hsv, rgb };
}
function computeSelectionCount(selection2) {
  const selectionShape = selection2.getShape();
  return {
    columns: selectionShape.toX - selectionShape.fromX + 1,
    rows: selectionShape.toY - selectionShape.fromY + 1
  };
}
function $canUnmerge() {
  const selection2 = lexical.$getSelection();
  if (lexical.$isRangeSelection(selection2) && !selection2.isCollapsed() || table.$isTableSelection(selection2) && !selection2.anchor.is(selection2.focus) || !lexical.$isRangeSelection(selection2) && !table.$isTableSelection(selection2)) {
    return false;
  }
  const [cell] = table.$getNodeTriplet(selection2.anchor);
  return cell.__colSpan > 1 || cell.__rowSpan > 1;
}
function $cellContainsEmptyParagraph(cell) {
  if (cell.getChildrenSize() !== 1) {
    return false;
  }
  const firstChild = cell.getFirstChildOrThrow();
  if (!lexical.$isParagraphNode(firstChild) || !firstChild.isEmpty()) {
    return false;
  }
  return true;
}
function $selectLastDescendant(node) {
  const lastDescendant = node.getLastDescendant();
  if (lexical.$isTextNode(lastDescendant)) {
    lastDescendant.select();
  } else if (lexical.$isElementNode(lastDescendant)) {
    lastDescendant.selectEnd();
  } else if (lastDescendant !== null) {
    lastDescendant.selectNext();
  }
}
function currentCellBackgroundColor(editor) {
  return editor.getEditorState().read(() => {
    const selection2 = lexical.$getSelection();
    if (lexical.$isRangeSelection(selection2) || table.$isTableSelection(selection2)) {
      const [cell] = table.$getNodeTriplet(selection2.anchor);
      if (table.$isTableCellNode(cell)) {
        return cell.getBackgroundColor();
      }
    }
    return null;
  });
}
function TableActionMenu({
  onClose,
  tableCellNode: _tableCellNode,
  setIsMenuOpen,
  contextRef,
  cellMerge,
  showColorPickerModal
}) {
  const { formatMessage } = reactIntl.useIntl();
  const [editor] = LexicalComposerContext.useLexicalComposerContext();
  const dropDownRef = React.useRef(null);
  const [tableCellNode, updateTableCellNode] = React.useState(_tableCellNode);
  const [selectionCounts, updateSelectionCounts] = React.useState({
    columns: 1,
    rows: 1
  });
  const [canMergeCells, setCanMergeCells] = React.useState(false);
  const [canUnmergeCell, setCanUnmergeCell] = React.useState(false);
  const [backgroundColor, setBackgroundColor] = React.useState(
    () => currentCellBackgroundColor(editor) || ""
  );
  React.useEffect(() => {
    return editor.registerMutationListener(
      table.TableCellNode,
      (nodeMutations) => {
        const nodeUpdated = nodeMutations.get(tableCellNode.getKey()) === "updated";
        if (nodeUpdated) {
          editor.getEditorState().read(() => {
            updateTableCellNode(tableCellNode.getLatest());
          });
          setBackgroundColor(currentCellBackgroundColor(editor) || "");
        }
      },
      { skipInitialization: true }
    );
  }, [editor, tableCellNode]);
  React.useEffect(() => {
    editor.getEditorState().read(() => {
      const selection2 = lexical.$getSelection();
      if (table.$isTableSelection(selection2)) {
        const currentSelectionCounts = computeSelectionCount(selection2);
        updateSelectionCounts(computeSelectionCount(selection2));
        setCanMergeCells(currentSelectionCounts.columns > 1 || currentSelectionCounts.rows > 1);
      }
      setCanUnmergeCell($canUnmerge());
    });
  }, [editor]);
  React.useEffect(() => {
    const menuButtonElement = contextRef.current;
    const dropDownElement = dropDownRef.current;
    const rootElement = editor.getRootElement();
    if (menuButtonElement != null && dropDownElement != null && rootElement != null) {
      const rootEleRect = rootElement.getBoundingClientRect();
      const menuButtonRect = menuButtonElement.getBoundingClientRect();
      dropDownElement.style.opacity = "1";
      const dropDownElementRect = dropDownElement.getBoundingClientRect();
      const margin = 5;
      let leftPosition = menuButtonRect.right + margin;
      if (leftPosition + dropDownElementRect.width > window.innerWidth || leftPosition + dropDownElementRect.width > rootEleRect.right) {
        const position = menuButtonRect.left - dropDownElementRect.width - margin;
        leftPosition = (position < 0 ? margin : position) + window.pageXOffset;
      }
      dropDownElement.style.left = `${leftPosition + window.pageXOffset}px`;
      let topPosition = menuButtonRect.top;
      if (topPosition + dropDownElementRect.height > window.innerHeight) {
        const position = menuButtonRect.bottom - dropDownElementRect.height;
        topPosition = (position < 0 ? margin : position) + window.pageYOffset;
      }
      dropDownElement.style.top = `${topPosition + +window.pageYOffset}px`;
    }
  }, [contextRef, dropDownRef, editor]);
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (dropDownRef.current != null && contextRef.current != null && lexical.isDOMNode(event.target) && !dropDownRef.current.contains(event.target) && !contextRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [setIsMenuOpen, contextRef]);
  const clearTableSelection = React.useCallback(() => {
    editor.update(() => {
      if (tableCellNode.isAttached()) {
        const tableNode = table.$getTableNodeFromLexicalNodeOrThrow(tableCellNode);
        const tableElement = table.getTableElement(tableNode, editor.getElementByKey(tableNode.getKey()));
        invariant(tableElement !== null, "TableActionMenu: Expected to find tableElement in DOM");
        if (!tableElement) {
          return;
        }
        const tableObserver = table.getTableObserverFromTableElement(tableElement);
        if (tableObserver !== null) {
          tableObserver.$clearHighlight();
        }
        tableNode.markDirty();
        updateTableCellNode(tableCellNode.getLatest());
      }
      const rootNode = lexical.$getRoot();
      rootNode.selectStart();
    });
  }, [editor, tableCellNode]);
  const mergeTableCellsAtSelection = () => {
    editor.update(() => {
      const selection2 = lexical.$getSelection();
      if (table.$isTableSelection(selection2)) {
        const { columns, rows } = computeSelectionCount(selection2);
        const nodes = selection2.getNodes();
        let firstCell = null;
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];
          if (table.$isTableCellNode(node)) {
            if (firstCell === null) {
              node.setColSpan(columns).setRowSpan(rows);
              firstCell = node;
              const isEmpty = $cellContainsEmptyParagraph(node);
              let firstChild;
              if (isEmpty && lexical.$isParagraphNode(firstChild = node.getFirstChild())) {
                firstChild.remove();
              }
            } else if (table.$isTableCellNode(firstCell)) {
              const isEmpty = $cellContainsEmptyParagraph(node);
              if (!isEmpty) {
                firstCell.append(...node.getChildren());
              }
              node.remove();
            }
          }
        }
        if (firstCell !== null) {
          if (firstCell.getChildrenSize() === 0) {
            firstCell.append(lexical.$createParagraphNode());
          }
          $selectLastDescendant(firstCell);
        }
        onClose();
      }
    });
  };
  const unmergeTableCellsAtSelection = () => {
    editor.update(() => {
      table.$unmergeCell();
    });
  };
  const insertTableRowAtSelection = React.useCallback(
    (shouldInsertAfter) => {
      editor.update(() => {
        for (let i = 0; i < selectionCounts.rows; i++) {
          table.$insertTableRow__EXPERIMENTAL(shouldInsertAfter);
        }
        onClose();
      });
    },
    [editor, onClose, selectionCounts.rows]
  );
  const insertTableColumnAtSelection = React.useCallback(
    (shouldInsertAfter) => {
      editor.update(() => {
        for (let i = 0; i < selectionCounts.columns; i++) {
          table.$insertTableColumn__EXPERIMENTAL(shouldInsertAfter);
        }
        onClose();
      });
    },
    [editor, onClose, selectionCounts.columns]
  );
  const deleteTableRowAtSelection = React.useCallback(() => {
    editor.update(() => {
      table.$deleteTableRow__EXPERIMENTAL();
      onClose();
    });
  }, [editor, onClose]);
  const deleteTableAtSelection = React.useCallback(() => {
    editor.update(() => {
      const tableNode = table.$getTableNodeFromLexicalNodeOrThrow(tableCellNode);
      tableNode.remove();
      clearTableSelection();
      onClose();
    });
  }, [editor, tableCellNode, clearTableSelection, onClose]);
  const deleteTableColumnAtSelection = React.useCallback(() => {
    editor.update(() => {
      table.$deleteTableColumn__EXPERIMENTAL();
      onClose();
    });
  }, [editor, onClose]);
  const toggleTableRowIsHeader = React.useCallback(() => {
    editor.update(() => {
      const tableNode = table.$getTableNodeFromLexicalNodeOrThrow(tableCellNode);
      const tableRowIndex = table.$getTableRowIndexFromTableCellNode(tableCellNode);
      const tableRows = tableNode.getChildren();
      if (tableRowIndex >= tableRows.length || tableRowIndex < 0) {
        throw new Error("Expected table cell to be inside of table row.");
      }
      const tableRow = tableRows[tableRowIndex];
      if (!table.$isTableRowNode(tableRow)) {
        throw new Error("Expected table row");
      }
      const newStyle = tableCellNode.getHeaderStyles() ^ table.TableCellHeaderStates.ROW;
      tableRow.getChildren().forEach((tableCell) => {
        if (!table.$isTableCellNode(tableCell)) {
          throw new Error("Expected table cell");
        }
        tableCell.setHeaderStyles(newStyle, table.TableCellHeaderStates.ROW);
      });
      clearTableSelection();
      onClose();
    });
  }, [editor, tableCellNode, clearTableSelection, onClose]);
  const toggleTableColumnIsHeader = React.useCallback(() => {
    editor.update(() => {
      const tableNode = table.$getTableNodeFromLexicalNodeOrThrow(tableCellNode);
      const tableColumnIndex = table.$getTableColumnIndexFromTableCellNode(tableCellNode);
      const tableRows = tableNode.getChildren();
      const maxRowsLength = Math.max(...tableRows.map((row) => row.getChildren().length));
      if (tableColumnIndex >= maxRowsLength || tableColumnIndex < 0) {
        throw new Error("Expected table cell to be inside of table row.");
      }
      const newStyle = tableCellNode.getHeaderStyles() ^ table.TableCellHeaderStates.COLUMN;
      for (let r = 0; r < tableRows.length; r++) {
        const tableRow = tableRows[r];
        if (!table.$isTableRowNode(tableRow)) {
          throw new Error("Expected table row");
        }
        const tableCells = tableRow.getChildren();
        if (tableColumnIndex >= tableCells.length) {
          continue;
        }
        const tableCell = tableCells[tableColumnIndex];
        if (!table.$isTableCellNode(tableCell)) {
          throw new Error("Expected table cell");
        }
        tableCell.setHeaderStyles(newStyle, table.TableCellHeaderStates.COLUMN);
      }
      clearTableSelection();
      onClose();
    });
  }, [editor, tableCellNode, clearTableSelection, onClose]);
  const toggleRowStriping = React.useCallback(() => {
    editor.update(() => {
      if (tableCellNode.isAttached()) {
        const tableNode = table.$getTableNodeFromLexicalNodeOrThrow(tableCellNode);
        if (tableNode) {
          tableNode.setRowStriping(!tableNode.getRowStriping());
        }
      }
      clearTableSelection();
      onClose();
    });
  }, [editor, tableCellNode, clearTableSelection, onClose]);
  const handleCellBackgroundColor = React.useCallback(
    (value) => {
      editor.update(() => {
        const selection2 = lexical.$getSelection();
        if (lexical.$isRangeSelection(selection2) || table.$isTableSelection(selection2)) {
          const [cell] = table.$getNodeTriplet(selection2.anchor);
          if (table.$isTableCellNode(cell)) {
            cell.setBackgroundColor(value);
          }
          if (table.$isTableSelection(selection2)) {
            const nodes = selection2.getNodes();
            for (let i = 0; i < nodes.length; i++) {
              const node = nodes[i];
              if (table.$isTableCellNode(node)) {
                node.setBackgroundColor(value);
              }
            }
          }
        }
      });
    },
    [editor]
  );
  let mergeCellButton = null;
  if (cellMerge) {
    if (canMergeCells) {
      mergeCellButton = /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          type: "button",
          className: "item",
          onClick: () => mergeTableCellsAtSelection(),
          "data-test-id": "table-merge-cells",
          children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
            id: "lexical.plugin.table.merge.cells",
            defaultMessage: "Merge cells"
          }) })
        }
      );
    } else if (canUnmergeCell) {
      mergeCellButton = /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          type: "button",
          className: "item",
          onClick: () => unmergeTableCellsAtSelection(),
          "data-test-id": "table-unmerge-cells",
          children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
            id: "lexical.plugin.table.unmerge.cells",
            defaultMessage: "Unmerge cells"
          }) })
        }
      );
    }
  }
  return ReactDOM.createPortal(
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        className: "dropdown",
        ref: dropDownRef,
        onClick: (e) => {
          e.stopPropagation();
        },
        children: [
          mergeCellButton,
          /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              type: "button",
              className: "item",
              onClick: () => showColorPickerModal(
                formatMessage({
                  id: "lexical.plugin.table.background.title",
                  defaultMessage: "Cell background color"
                }),
                () => /* @__PURE__ */ jsxRuntime.jsx(ColorPicker, { color: backgroundColor, onChange: handleCellBackgroundColor })
              ),
              "data-test-id": "table-background-color",
              children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
                id: "lexical.plugin.table.background.label",
                defaultMessage: "Background color"
              }) })
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              type: "button",
              className: "item",
              onClick: () => toggleRowStriping(),
              "data-test-id": "table-row-striping",
              children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
                id: "lexical.plugin.table.striping.toggle",
                defaultMessage: "Toggle Row Striping"
              }) })
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("hr", {}),
          /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              type: "button",
              className: "item",
              onClick: () => insertTableRowAtSelection(false),
              "data-test-id": "table-insert-row-above",
              children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage(
                {
                  id: "lexical.plugin.table.row.insert.above",
                  defaultMessage: "Insert {count} {count, plural, one {row} other {rows}} above"
                },
                { count: selectionCounts.rows }
              ) })
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              type: "button",
              className: "item",
              onClick: () => insertTableRowAtSelection(true),
              "data-test-id": "table-insert-row-below",
              children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage(
                {
                  id: "lexical.plugin.table.row.insert.below",
                  defaultMessage: "Insert {count} {count, plural, one {row} other {rows}} below"
                },
                { count: selectionCounts.rows }
              ) })
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("hr", {}),
          /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              type: "button",
              className: "item",
              onClick: () => insertTableColumnAtSelection(false),
              "data-test-id": "table-insert-column-before",
              children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage(
                {
                  id: "lexical.plugin.table.column.insert.left",
                  defaultMessage: "Insert {count} {count, plural, one {column} other {columns}} left"
                },
                { count: selectionCounts.columns }
              ) })
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              type: "button",
              className: "item",
              onClick: () => insertTableColumnAtSelection(true),
              "data-test-id": "table-insert-column-after",
              children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage(
                {
                  id: "lexical.plugin.table.column.insert.right",
                  defaultMessage: "Insert {count} {count, plural, one {column} other {columns}} right"
                },
                { count: selectionCounts.columns }
              ) })
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("hr", {}),
          /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              type: "button",
              className: "item",
              onClick: () => deleteTableColumnAtSelection(),
              "data-test-id": "table-delete-columns",
              children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
                id: "lexical.plugin.table.column.delete",
                defaultMessage: "Delete column"
              }) })
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              type: "button",
              className: "item",
              onClick: () => deleteTableRowAtSelection(),
              "data-test-id": "table-delete-rows",
              children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
                id: "lexical.plugin.table.row.delete",
                defaultMessage: "Delete row"
              }) })
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              type: "button",
              className: "item",
              onClick: () => deleteTableAtSelection(),
              "data-test-id": "table-delete",
              children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
                id: "lexical.plugin.table.delete",
                defaultMessage: "Delete table"
              }) })
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("hr", {}),
          /* @__PURE__ */ jsxRuntime.jsx("button", { type: "button", className: "item", onClick: () => toggleTableRowIsHeader(), children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage(
            {
              id: "lexical.plugin.table.row.header",
              defaultMessage: "{action} row header"
            },
            {
              action: (tableCellNode.__headerState & table.TableCellHeaderStates.ROW) === table.TableCellHeaderStates.ROW ? formatMessage({
                id: "lexical.plugin.table.header.remove",
                defaultMessage: "Remove"
              }) : formatMessage({ id: "lexical.plugin.table.header.add", defaultMessage: "Add" })
            }
          ) }) }),
          /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              type: "button",
              className: "item",
              onClick: () => toggleTableColumnIsHeader(),
              "data-test-id": "table-column-header",
              children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage(
                {
                  id: "lexical.plugin.table.column.header",
                  defaultMessage: "{action} column header"
                },
                {
                  action: (tableCellNode.__headerState & table.TableCellHeaderStates.COLUMN) === table.TableCellHeaderStates.COLUMN ? formatMessage({
                    id: "lexical.plugin.table.header.remove",
                    defaultMessage: "Remove"
                  }) : formatMessage({ id: "lexical.plugin.table.header.add", defaultMessage: "Add" })
                }
              ) })
            }
          )
        ]
      }
    ),
    document.body
  );
}
function TableCellActionMenuContainer({
  anchorElem,
  cellMerge
}) {
  const [editor] = LexicalComposerContext.useLexicalComposerContext();
  const menuButtonRef = React.useRef(null);
  const menuRootRef = React.useRef(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [tableCellNode, setTableMenuCellNode] = React.useState(null);
  const [colorPickerModal, showColorPickerModal] = useModal();
  const $moveMenu = React.useCallback(() => {
    const menu = menuButtonRef.current;
    const selection2 = lexical.$getSelection();
    const nativeSelection = lexical.getDOMSelection(editor._window);
    const activeElement = document.activeElement;
    function disable() {
      if (menu) {
        menu.classList.remove("table-cell-action-button-container--active");
        menu.classList.add("table-cell-action-button-container--inactive");
      }
      setTableMenuCellNode(null);
    }
    if (selection2 == null || menu == null) {
      return disable();
    }
    const rootElement = editor.getRootElement();
    let tableObserver = null;
    let tableCellParentNodeDOM = null;
    if (lexical.$isRangeSelection(selection2) && rootElement !== null && nativeSelection !== null && rootElement.contains(nativeSelection.anchorNode)) {
      const tableCellNodeFromSelection = table.$getTableCellNodeFromLexicalNode(
        selection2.anchor.getNode()
      );
      if (tableCellNodeFromSelection == null) {
        return disable();
      }
      tableCellParentNodeDOM = editor.getElementByKey(tableCellNodeFromSelection.getKey());
      if (tableCellParentNodeDOM == null || !tableCellNodeFromSelection.isAttached()) {
        return disable();
      }
      const tableNode = table.$getTableNodeFromLexicalNodeOrThrow(tableCellNodeFromSelection);
      const tableElement = table.getTableElement(tableNode, editor.getElementByKey(tableNode.getKey()));
      invariant(tableElement !== null, "TableActionMenu: Expected to find tableElement in DOM");
      if (!tableElement) {
        return;
      }
      tableObserver = table.getTableObserverFromTableElement(tableElement);
      setTableMenuCellNode(tableCellNodeFromSelection);
    } else if (table.$isTableSelection(selection2)) {
      const anchorNode = table.$getTableCellNodeFromLexicalNode(selection2.anchor.getNode());
      invariant(table.$isTableCellNode(anchorNode), "TableSelection anchorNode must be a TableCellNode");
      if (!anchorNode) {
        return;
      }
      const tableNode = table.$getTableNodeFromLexicalNodeOrThrow(anchorNode);
      const tableElement = table.getTableElement(tableNode, editor.getElementByKey(tableNode.getKey()));
      invariant(tableElement !== null, "TableActionMenu: Expected to find tableElement in DOM");
      if (!tableElement) {
        return;
      }
      tableObserver = table.getTableObserverFromTableElement(tableElement);
      tableCellParentNodeDOM = editor.getElementByKey(anchorNode.getKey());
    } else if (!activeElement) {
      return disable();
    }
    if (tableObserver === null || tableCellParentNodeDOM === null) {
      return disable();
    }
    const enabled = !tableObserver || !tableObserver.isSelecting;
    menu.classList.toggle("table-cell-action-button-container--active", enabled);
    menu.classList.toggle("table-cell-action-button-container--inactive", !enabled);
    if (enabled) {
      const tableCellRect = tableCellParentNodeDOM.getBoundingClientRect();
      const anchorRect = anchorElem.getBoundingClientRect();
      const top = tableCellRect.top - anchorRect.top;
      const left = tableCellRect.right - anchorRect.left;
      menu.style.transform = `translate(${left}px, ${top}px)`;
    }
  }, [editor, anchorElem]);
  React.useEffect(() => {
    let timeoutId = void 0;
    const callback = () => {
      timeoutId = void 0;
      editor.getEditorState().read($moveMenu);
    };
    const delayedCallback = () => {
      if (timeoutId === void 0) {
        timeoutId = setTimeout(callback, 0);
      }
      return false;
    };
    return utils.mergeRegister(
      editor.registerUpdateListener(delayedCallback),
      editor.registerCommand(lexical.SELECTION_CHANGE_COMMAND, delayedCallback, lexical.COMMAND_PRIORITY_CRITICAL),
      editor.registerRootListener((rootElement, prevRootElement) => {
        if (prevRootElement) {
          prevRootElement.removeEventListener("mouseup", delayedCallback);
        }
        if (rootElement) {
          rootElement.addEventListener("mouseup", delayedCallback);
          delayedCallback();
        }
      }),
      () => clearTimeout(timeoutId)
    );
  });
  const prevTableCellDOM = React.useRef(tableCellNode);
  React.useEffect(() => {
    if (prevTableCellDOM.current !== tableCellNode) {
      setIsMenuOpen(false);
    }
    prevTableCellDOM.current = tableCellNode;
  }, [prevTableCellDOM, tableCellNode]);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "table-cell-action-button-container", ref: menuButtonRef, children: tableCellNode != null && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "button",
      {
        type: "button",
        className: "table-cell-action-button chevron-down",
        onClick: (e) => {
          e.stopPropagation();
          setIsMenuOpen(!isMenuOpen);
        },
        ref: menuRootRef,
        children: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "chevron-down" })
      }
    ),
    colorPickerModal,
    isMenuOpen && /* @__PURE__ */ jsxRuntime.jsx(
      TableActionMenu,
      {
        contextRef: menuRootRef,
        setIsMenuOpen,
        onClose: () => setIsMenuOpen(false),
        tableCellNode,
        cellMerge,
        showColorPickerModal
      }
    )
  ] }) });
}
function TableActionMenuPlugin({
  anchorElem = document.body,
  cellMerge = false
}) {
  const isEditable = useLexicalEditable.useLexicalEditable();
  return ReactDOM.createPortal(
    isEditable ? /* @__PURE__ */ jsxRuntime.jsx(TableCellActionMenuContainer, { anchorElem, cellMerge }) : null,
    anchorElem
  );
}
const MIN_ROW_HEIGHT = 33;
const MIN_COLUMN_WIDTH = 92;
function TableCellResizer({ editor }) {
  const targetRef = React.useRef(null);
  const resizerRef = React.useRef(null);
  const tableRectRef = React.useRef(null);
  const mouseStartPosRef = React.useRef(null);
  const [mouseCurrentPos, updateMouseCurrentPos] = React.useState(null);
  const [activeCell, updateActiveCell] = React.useState(null);
  const [isMouseDown, updateIsMouseDown] = React.useState(false);
  const [draggingDirection, updateDraggingDirection] = React.useState(
    null
  );
  const resetState = React.useCallback(() => {
    updateActiveCell(null);
    targetRef.current = null;
    updateDraggingDirection(null);
    mouseStartPosRef.current = null;
    tableRectRef.current = null;
  }, []);
  const isMouseDownOnEvent = (event) => {
    return (event.buttons & 1) === 1;
  };
  React.useEffect(() => {
    return editor.registerNodeTransform(table.TableNode, (tableNode) => {
      if (tableNode.getColWidths()) {
        return tableNode;
      }
      const numColumns = tableNode.getColumnCount();
      const columnWidth = MIN_COLUMN_WIDTH;
      tableNode.setColWidths(Array(numColumns).fill(columnWidth));
      return tableNode;
    });
  }, [editor]);
  React.useEffect(() => {
    const onMouseMove = (event) => {
      const target = event.target;
      if (!lexical.isHTMLElement(target)) {
        return;
      }
      if (draggingDirection) {
        updateMouseCurrentPos({
          x: event.clientX,
          y: event.clientY
        });
        return;
      }
      updateIsMouseDown(isMouseDownOnEvent(event));
      if (resizerRef.current && resizerRef.current.contains(target)) {
        return;
      }
      if (targetRef.current !== target) {
        targetRef.current = target;
        const cell = table.getDOMCellFromTarget(target);
        if (cell && activeCell !== cell) {
          editor.getEditorState().read(
            () => {
              const tableCellNode = lexical.$getNearestNodeFromDOMNode(cell.elem);
              if (!tableCellNode) {
                throw new Error("TableCellResizer: Table cell node not found.");
              }
              const tableNode = table.$getTableNodeFromLexicalNodeOrThrow(tableCellNode);
              const tableElement = table.getTableElement(
                tableNode,
                editor.getElementByKey(tableNode.getKey())
              );
              if (!tableElement) {
                throw new Error("TableCellResizer: Table element not found.");
              }
              targetRef.current = target;
              tableRectRef.current = tableElement.getBoundingClientRect();
              updateActiveCell(cell);
            },
            { editor }
          );
        } else if (cell == null) {
          resetState();
        }
      }
    };
    const onMouseDown = (event) => {
      updateIsMouseDown(true);
    };
    const onMouseUp = (event) => {
      updateIsMouseDown(false);
    };
    const removeRootListener = editor.registerRootListener((rootElement, prevRootElement) => {
      prevRootElement?.removeEventListener("mousemove", onMouseMove);
      prevRootElement?.removeEventListener("mousedown", onMouseDown);
      prevRootElement?.removeEventListener("mouseup", onMouseUp);
      rootElement?.addEventListener("mousemove", onMouseMove);
      rootElement?.addEventListener("mousedown", onMouseDown);
      rootElement?.addEventListener("mouseup", onMouseUp);
    });
    return () => {
      removeRootListener();
    };
  }, [activeCell, draggingDirection, editor, resetState]);
  const isHeightChanging = (direction) => {
    if (direction === "bottom") {
      return true;
    }
    return false;
  };
  const updateRowHeight = React.useCallback(
    (heightChange) => {
      if (!activeCell) {
        throw new Error("TableCellResizer: Expected active cell.");
      }
      editor.update(
        () => {
          const tableCellNode = lexical.$getNearestNodeFromDOMNode(activeCell.elem);
          if (!table.$isTableCellNode(tableCellNode)) {
            throw new Error("TableCellResizer: Table cell node not found.");
          }
          const tableNode = table.$getTableNodeFromLexicalNodeOrThrow(tableCellNode);
          const tableRowIndex = table.$getTableRowIndexFromTableCellNode(tableCellNode) + tableCellNode.getRowSpan() - 1;
          const tableRows = tableNode.getChildren();
          if (tableRowIndex >= tableRows.length || tableRowIndex < 0) {
            throw new Error("Expected table cell to be inside of table row.");
          }
          const tableRow = tableRows[tableRowIndex];
          if (!table.$isTableRowNode(tableRow)) {
            throw new Error("Expected table row");
          }
          let height = tableRow.getHeight();
          if (height === void 0) {
            const rowCells = tableRow.getChildren();
            height = Math.min(
              ...rowCells.map((cell) => getCellNodeHeight(cell, editor) ?? Infinity)
            );
          }
          const newHeight = Math.max(height + heightChange, MIN_ROW_HEIGHT);
          tableRow.setHeight(newHeight);
        },
        { tag: "skip-scroll-into-view" }
      );
    },
    [activeCell, editor]
  );
  const getCellNodeHeight = (cell, activeEditor) => {
    const domCellNode = activeEditor.getElementByKey(cell.getKey());
    return domCellNode?.clientHeight;
  };
  const getCellColumnIndex = (tableCellNode, tableMap) => {
    for (let row = 0; row < tableMap.length; row++) {
      for (let column = 0; column < tableMap[row].length; column++) {
        if (tableMap[row][column].cell === tableCellNode) {
          return column;
        }
      }
    }
  };
  const updateColumnWidth = React.useCallback(
    (widthChange) => {
      if (!activeCell) {
        throw new Error("TableCellResizer: Expected active cell.");
      }
      editor.update(
        () => {
          const tableCellNode = lexical.$getNearestNodeFromDOMNode(activeCell.elem);
          if (!table.$isTableCellNode(tableCellNode)) {
            throw new Error("TableCellResizer: Table cell node not found.");
          }
          const tableNode = table.$getTableNodeFromLexicalNodeOrThrow(tableCellNode);
          const [tableMap] = table.$computeTableMapSkipCellCheck(tableNode, null, null);
          const columnIndex = getCellColumnIndex(tableCellNode, tableMap);
          if (columnIndex === void 0) {
            throw new Error("TableCellResizer: Table column not found.");
          }
          const colWidths = tableNode.getColWidths();
          if (!colWidths) {
            return;
          }
          const width = colWidths[columnIndex];
          if (width === void 0) {
            return;
          }
          const newColWidths = [...colWidths];
          const newWidth = Math.max(width + widthChange, MIN_COLUMN_WIDTH);
          newColWidths[columnIndex] = newWidth;
          tableNode.setColWidths(newColWidths);
        },
        { tag: "skip-scroll-into-view" }
      );
    },
    [activeCell, editor]
  );
  const mouseUpHandler = React.useCallback(
    (direction) => {
      const handler = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (!activeCell) {
          throw new Error("TableCellResizer: Expected active cell.");
        }
        if (mouseStartPosRef.current) {
          const { x, y } = mouseStartPosRef.current;
          if (activeCell === null) {
            return;
          }
          const zoom = utils.calculateZoomLevel(event.target);
          if (isHeightChanging(direction)) {
            const heightChange = (event.clientY - y) / zoom;
            updateRowHeight(heightChange);
          } else {
            const widthChange = (event.clientX - x) / zoom;
            updateColumnWidth(widthChange);
          }
          resetState();
          document.removeEventListener("mouseup", handler);
        }
      };
      return handler;
    },
    [activeCell, resetState, updateColumnWidth, updateRowHeight]
  );
  const toggleResize = React.useCallback(
    (direction) => (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (!activeCell) {
        throw new Error("TableCellResizer: Expected active cell.");
      }
      mouseStartPosRef.current = {
        x: event.clientX,
        y: event.clientY
      };
      updateMouseCurrentPos(mouseStartPosRef.current);
      updateDraggingDirection(direction);
      document.addEventListener("mouseup", mouseUpHandler(direction));
    },
    [activeCell, mouseUpHandler]
  );
  const getResizers = React.useCallback(() => {
    if (activeCell) {
      const { height, width, top, left } = activeCell.elem.getBoundingClientRect();
      const zoom = utils.calculateZoomLevel(activeCell.elem);
      const zoneWidth = 10;
      const styles = {
        bottom: {
          backgroundColor: "none",
          cursor: "row-resize",
          height: `${zoneWidth}px`,
          left: `${window.pageXOffset + left}px`,
          top: `${window.pageYOffset + top + height - zoneWidth / 2}px`,
          width: `${width}px`
        },
        right: {
          backgroundColor: "none",
          cursor: "col-resize",
          height: `${height}px`,
          left: `${window.pageXOffset + left + width - zoneWidth / 2}px`,
          top: `${window.pageYOffset + top}px`,
          width: `${zoneWidth}px`
        }
      };
      const tableRect = tableRectRef.current;
      if (draggingDirection && mouseCurrentPos && tableRect) {
        if (isHeightChanging(draggingDirection)) {
          styles[draggingDirection].left = `${window.pageXOffset + tableRect.left}px`;
          styles[draggingDirection].top = `${window.pageYOffset + mouseCurrentPos.y / zoom}px`;
          styles[draggingDirection].height = "3px";
          styles[draggingDirection].width = `${tableRect.width}px`;
        } else {
          styles[draggingDirection].top = `${window.pageYOffset + tableRect.top}px`;
          styles[draggingDirection].left = `${window.pageXOffset + mouseCurrentPos.x / zoom}px`;
          styles[draggingDirection].width = "3px";
          styles[draggingDirection].height = `${tableRect.height}px`;
        }
        styles[draggingDirection].backgroundColor = "#adf";
      }
      return styles;
    }
    return {
      bottom: null,
      left: null,
      right: null,
      top: null
    };
  }, [activeCell, draggingDirection, mouseCurrentPos]);
  const resizerStyles = getResizers();
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ref: resizerRef, children: activeCell != null && !isMouseDown && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: "TableCellResizer__resizer TableCellResizer__ui",
        style: resizerStyles.right || void 0,
        onMouseDown: toggleResize("right")
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: "TableCellResizer__resizer TableCellResizer__ui",
        style: resizerStyles.bottom || void 0,
        onMouseDown: toggleResize("bottom")
      }
    )
  ] }) });
}
function TableCellResizerPlugin() {
  const [editor] = LexicalComposerContext.useLexicalComposerContext();
  const isEditable = useLexicalEditable.useLexicalEditable();
  return React.useMemo(
    () => isEditable ? ReactDOM.createPortal(/* @__PURE__ */ jsxRuntime.jsx(TableCellResizer, { editor }), document.body) : null,
    [editor, isEditable]
  );
}
const BUTTON_WIDTH_PX = 20;
function TableHoverActionsContainer({
  anchorElem
}) {
  const [editor] = LexicalComposerContext.useLexicalComposerContext();
  const isEditable = useLexicalEditable.useLexicalEditable();
  const [isShownRow, setShownRow] = React.useState(false);
  const [isShownColumn, setShownColumn] = React.useState(false);
  const [shouldListenMouseMove, setShouldListenMouseMove] = React.useState(false);
  const [position, setPosition] = React.useState({});
  const tableSetRef = React.useRef(/* @__PURE__ */ new Set());
  const tableCellDOMNodeRef = React.useRef(null);
  const debouncedOnMouseMove = useDebounce(
    (event) => {
      const { isOutside, tableDOMNode } = getMouseInfo(event);
      if (isOutside) {
        setShownRow(false);
        setShownColumn(false);
        return;
      }
      if (!tableDOMNode) {
        return;
      }
      tableCellDOMNodeRef.current = tableDOMNode;
      let hoveredRowNode = null;
      let hoveredColumnNode = null;
      let tableDOMElement = null;
      editor.getEditorState().read(
        () => {
          const maybeTableCell = lexical.$getNearestNodeFromDOMNode(tableDOMNode);
          if (table.$isTableCellNode(maybeTableCell)) {
            const table$1 = utils.$findMatchingParent(maybeTableCell, (node) => table.$isTableNode(node));
            if (!table.$isTableNode(table$1)) {
              return;
            }
            tableDOMElement = table.getTableElement(table$1, editor.getElementByKey(table$1.getKey()));
            if (tableDOMElement) {
              const rowCount = table$1.getChildrenSize();
              const colCount = table$1.getChildAtIndex(0)?.getChildrenSize();
              const rowIndex = table.$getTableRowIndexFromTableCellNode(maybeTableCell);
              const colIndex = table.$getTableColumnIndexFromTableCellNode(maybeTableCell);
              if (rowIndex === rowCount - 1) {
                hoveredRowNode = maybeTableCell;
              } else if (colIndex === colCount - 1) {
                hoveredColumnNode = maybeTableCell;
              }
            }
          }
        },
        { editor }
      );
      if (tableDOMElement) {
        const {
          width: tableElemWidth,
          y: tableElemY,
          right: tableElemRight,
          left: tableElemLeft,
          bottom: tableElemBottom,
          height: tableElemHeight
        } = tableDOMElement.getBoundingClientRect();
        const parentElement = tableDOMElement.parentElement;
        let tableHasScroll = false;
        if (parentElement && parentElement.classList.contains("PlaygroundEditorTheme__tableScrollableWrapper")) {
          tableHasScroll = parentElement.scrollWidth > parentElement.clientWidth;
        }
        const { y: editorElemY, left: editorElemLeft } = anchorElem.getBoundingClientRect();
        if (hoveredRowNode) {
          setShownColumn(false);
          setShownRow(true);
          setPosition({
            height: BUTTON_WIDTH_PX,
            left: tableHasScroll && parentElement ? parentElement.offsetLeft : tableElemLeft - editorElemLeft,
            top: tableElemBottom - editorElemY + 5,
            width: tableHasScroll && parentElement ? parentElement.offsetWidth : tableElemWidth
          });
        } else if (hoveredColumnNode) {
          setShownColumn(true);
          setShownRow(false);
          setPosition({
            height: tableElemHeight,
            left: tableElemRight - editorElemLeft + 5,
            top: tableElemY - editorElemY,
            width: BUTTON_WIDTH_PX
          });
        }
      }
    },
    50,
    250
  );
  const tableResizeObserver = React.useMemo(() => {
    return new ResizeObserver(() => {
      setShownRow(false);
      setShownColumn(false);
    });
  }, []);
  React.useEffect(() => {
    if (!shouldListenMouseMove) {
      return;
    }
    document.addEventListener("mousemove", debouncedOnMouseMove);
    return () => {
      setShownRow(false);
      setShownColumn(false);
      debouncedOnMouseMove.cancel();
      document.removeEventListener("mousemove", debouncedOnMouseMove);
    };
  }, [shouldListenMouseMove, debouncedOnMouseMove]);
  React.useEffect(() => {
    return utils.mergeRegister(
      editor.registerMutationListener(
        table.TableNode,
        (mutations) => {
          editor.getEditorState().read(
            () => {
              let resetObserver = false;
              for (const [key, type] of mutations) {
                switch (type) {
                  case "created": {
                    tableSetRef.current.add(key);
                    resetObserver = true;
                    break;
                  }
                  case "destroyed": {
                    tableSetRef.current.delete(key);
                    resetObserver = true;
                    break;
                  }
                }
              }
              if (resetObserver) {
                tableResizeObserver.disconnect();
                for (const tableKey of tableSetRef.current) {
                  const { tableElement } = table.$getTableAndElementByKey(tableKey);
                  tableResizeObserver.observe(tableElement);
                }
                setShouldListenMouseMove(tableSetRef.current.size > 0);
              }
            },
            { editor }
          );
        },
        { skipInitialization: false }
      )
    );
  }, [editor, tableResizeObserver]);
  const insertAction = (insertRow) => {
    editor.update(() => {
      if (tableCellDOMNodeRef.current) {
        const maybeTableNode = lexical.$getNearestNodeFromDOMNode(tableCellDOMNodeRef.current);
        maybeTableNode?.selectEnd();
        if (insertRow) {
          table.$insertTableRow__EXPERIMENTAL();
          setShownRow(false);
        } else {
          table.$insertTableColumn__EXPERIMENTAL();
          setShownColumn(false);
        }
      }
    });
  };
  if (!isEditable) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    isShownRow && /* @__PURE__ */ jsxRuntime.jsx(
      "button",
      {
        className: "PlaygroundEditorTheme__tableAddRows",
        style: { ...position },
        onClick: () => insertAction(true)
      }
    ),
    isShownColumn && /* @__PURE__ */ jsxRuntime.jsx(
      "button",
      {
        className: "PlaygroundEditorTheme__tableAddColumns",
        style: { ...position },
        onClick: () => insertAction(false)
      }
    )
  ] });
}
function getMouseInfo(event) {
  const target = event.target;
  if (lexical.isHTMLElement(target)) {
    const tableDOMNode = target.closest(
      "td.PlaygroundEditorTheme__tableCell, th.PlaygroundEditorTheme__tableCell"
    );
    const isOutside = !(tableDOMNode || target.closest("button.PlaygroundEditorTheme__tableAddRows") || target.closest("button.PlaygroundEditorTheme__tableAddColumns") || target.closest("div.TableCellResizer__resizer"));
    return { isOutside, tableDOMNode };
  } else {
    return { isOutside: true, tableDOMNode: null };
  }
}
function TableHoverActionsPlugin({
  anchorElem = document.body
}) {
  const isEditable = useLexicalEditable.useLexicalEditable();
  return isEditable ? ReactDOM.createPortal(/* @__PURE__ */ jsxRuntime.jsx(TableHoverActionsContainer, { anchorElem }), anchorElem) : null;
}
function getCodeLanguageOptions() {
  const options = [];
  for (const [lang, friendlyName] of Object.entries(code.CODE_LANGUAGE_FRIENDLY_NAME_MAP)) {
    options.push([lang, friendlyName]);
  }
  return options;
}
const CODE_LANGUAGE_OPTIONS = getCodeLanguageOptions();
const ELEMENT_FORMAT_OPTIONS = {
  center: {
    icon: "center-align",
    iconRTL: "center-align",
    name: "Center Align"
  },
  end: {
    icon: "right-align",
    iconRTL: "left-align",
    name: "End Align"
  },
  justify: {
    icon: "justify-align",
    iconRTL: "justify-align",
    name: "Justify Align"
  },
  left: {
    icon: "left-align",
    iconRTL: "left-align",
    name: "Left Align"
  },
  right: {
    icon: "right-align",
    iconRTL: "right-align",
    name: "Right Align"
  },
  start: {
    icon: "left-align",
    iconRTL: "right-align",
    name: "Start Align"
  }
};
function dropDownActiveClass(active) {
  if (active) {
    return "active dropdown-item-active";
  } else {
    return "";
  }
}
function BlockFormatDropDown({
  editor,
  blockType,
  rootType,
  disabled = false
}) {
  const { formatMessage } = reactIntl.useIntl();
  return /* @__PURE__ */ jsxRuntime.jsxs(
    DropDown,
    {
      disabled,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-type " + blockType,
      buttonLabel: formatMessage({
        id: `lexical.content.block.type.${blockType}`,
        defaultMessage: blockTypeToBlockName[blockType]
      }),
      buttonAriaLabel: formatMessage({
        id: "lexical.plugin.toolbar.block.aria",
        defaultMessage: "Formatting options for text style"
      }),
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(
          DropDownItem,
          {
            className: "item wide " + dropDownActiveClass(blockType === "paragraph"),
            onClick: () => formatParagraph(editor),
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "icon-text-container", children: [
                /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon paragraph" }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
                  id: "lexical.plugin.toolbar.block.paragraph",
                  defaultMessage: "Paragraph"
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shortcut", children: SHORTCUTS.NORMAL })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          DropDownItem,
          {
            className: "item wide " + dropDownActiveClass(blockType === "h1"),
            onClick: () => formatHeading(editor, blockType, "h1"),
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "icon-text-container", children: [
                /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon h1" }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
                  id: "lexical.plugin.toolbar.block.h1",
                  defaultMessage: "Heading 1"
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shortcut", children: SHORTCUTS.HEADING1 })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          DropDownItem,
          {
            className: "item wide " + dropDownActiveClass(blockType === "h2"),
            onClick: () => formatHeading(editor, blockType, "h2"),
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "icon-text-container", children: [
                /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon h2" }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
                  id: "lexical.plugin.toolbar.block.h2",
                  defaultMessage: "Heading 2"
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shortcut", children: SHORTCUTS.HEADING2 })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          DropDownItem,
          {
            className: "item wide " + dropDownActiveClass(blockType === "h3"),
            onClick: () => formatHeading(editor, blockType, "h3"),
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "icon-text-container", children: [
                /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon h3" }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
                  id: "lexical.plugin.toolbar.block.h3",
                  defaultMessage: "Heading 3"
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shortcut", children: SHORTCUTS.HEADING3 })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          DropDownItem,
          {
            className: "item wide " + dropDownActiveClass(blockType === "bullet"),
            onClick: () => formatBulletList(editor, blockType),
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "icon-text-container", children: [
                /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon bullet-list" }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
                  id: "lexical.plugin.toolbar.block.bullet",
                  defaultMessage: "Bullet List"
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shortcut", children: SHORTCUTS.BULLET_LIST })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          DropDownItem,
          {
            className: "item wide " + dropDownActiveClass(blockType === "number"),
            onClick: () => formatNumberedList(editor, blockType),
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "icon-text-container", children: [
                /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon numbered-list" }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
                  id: "lexical.plugin.toolbar.block.number",
                  defaultMessage: "Numbered List"
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shortcut", children: SHORTCUTS.NUMBERED_LIST })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          DropDownItem,
          {
            className: "item wide " + dropDownActiveClass(blockType === "check"),
            onClick: () => formatCheckList(editor, blockType),
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "icon-text-container", children: [
                /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon check-list" }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
                  id: "lexical.plugin.toolbar.block.check",
                  defaultMessage: "Check List"
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shortcut", children: SHORTCUTS.CHECK_LIST })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          DropDownItem,
          {
            className: "item wide " + dropDownActiveClass(blockType === "quote"),
            onClick: () => formatQuote(editor, blockType),
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "icon-text-container", children: [
                /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon quote" }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
                  id: "lexical.plugin.toolbar.block.quote",
                  defaultMessage: "Quote"
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shortcut", children: SHORTCUTS.QUOTE })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          DropDownItem,
          {
            className: "item wide " + dropDownActiveClass(blockType === "code"),
            onClick: () => formatCode(editor, blockType),
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "icon-text-container", children: [
                /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon code" }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
                  id: "lexical.plugin.toolbar.block.code",
                  defaultMessage: "Code Block"
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shortcut", children: SHORTCUTS.CODE_BLOCK })
            ]
          }
        )
      ]
    }
  );
}
function Divider() {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "divider" });
}
function ElementFormatDropdown({
  editor,
  value,
  isRTL,
  disabled = false
}) {
  const { formatMessage } = reactIntl.useIntl();
  const formatOption = ELEMENT_FORMAT_OPTIONS[value || "left"];
  return /* @__PURE__ */ jsxRuntime.jsxs(
    DropDown,
    {
      disabled,
      buttonLabel: formatMessage({
        id: `lexical.plugin.toolbar.align.${value || "left"}`,
        defaultMessage: formatOption.name
      }),
      buttonIconClassName: `icon ${isRTL ? formatOption.iconRTL : formatOption.icon}`,
      buttonClassName: "toolbar-item spaced alignment",
      buttonAriaLabel: formatMessage({
        id: "lexical.plugin.toolbar.align.aria",
        defaultMessage: "Formatting options for text alignment"
      }),
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(
          DropDownItem,
          {
            onClick: () => {
              editor.dispatchCommand(lexical.FORMAT_ELEMENT_COMMAND, "left");
            },
            className: "item wide",
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "icon-text-container", children: [
                /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon left-align" }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
                  id: "lexical.plugin.toolbar.align.left",
                  defaultMessage: "Left Align"
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shortcut", children: SHORTCUTS.LEFT_ALIGN })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          DropDownItem,
          {
            onClick: () => {
              editor.dispatchCommand(lexical.FORMAT_ELEMENT_COMMAND, "center");
            },
            className: "item wide",
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "icon-text-container", children: [
                /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon center-align" }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
                  id: "lexical.plugin.toolbar.align.center",
                  defaultMessage: "Center Align"
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shortcut", children: SHORTCUTS.CENTER_ALIGN })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          DropDownItem,
          {
            onClick: () => {
              editor.dispatchCommand(lexical.FORMAT_ELEMENT_COMMAND, "right");
            },
            className: "item wide",
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "icon-text-container", children: [
                /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon right-align" }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
                  id: "lexical.plugin.toolbar.align.right",
                  defaultMessage: "Right Align"
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shortcut", children: SHORTCUTS.RIGHT_ALIGN })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          DropDownItem,
          {
            onClick: () => {
              editor.dispatchCommand(lexical.FORMAT_ELEMENT_COMMAND, "justify");
            },
            className: "item wide",
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "icon-text-container", children: [
                /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon justify-align" }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
                  id: "lexical.plugin.toolbar.align.justify",
                  defaultMessage: "Justify Align"
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shortcut", children: SHORTCUTS.JUSTIFY_ALIGN })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          DropDownItem,
          {
            onClick: () => {
              editor.dispatchCommand(lexical.FORMAT_ELEMENT_COMMAND, "start");
            },
            className: "item wide",
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                "i",
                {
                  className: `icon ${isRTL ? ELEMENT_FORMAT_OPTIONS.start.iconRTL : ELEMENT_FORMAT_OPTIONS.start.icon}`
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
                id: "lexical.plugin.toolbar.align.start",
                defaultMessage: "Start Align"
              }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          DropDownItem,
          {
            onClick: () => {
              editor.dispatchCommand(lexical.FORMAT_ELEMENT_COMMAND, "end");
            },
            className: "item wide",
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                "i",
                {
                  className: `icon ${isRTL ? ELEMENT_FORMAT_OPTIONS.end.iconRTL : ELEMENT_FORMAT_OPTIONS.end.icon}`
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
                id: "lexical.plugin.toolbar.align.end",
                defaultMessage: "End Align"
              }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(Divider, {}),
        /* @__PURE__ */ jsxRuntime.jsxs(
          DropDownItem,
          {
            onClick: () => {
              editor.dispatchCommand(lexical.OUTDENT_CONTENT_COMMAND, void 0);
            },
            className: "item wide",
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "icon-text-container", children: [
                /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon " + (isRTL ? "indent" : "outdent") }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
                  id: "lexical.plugin.toolbar.indent.outdent",
                  defaultMessage: "Outdent"
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shortcut", children: SHORTCUTS.OUTDENT })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          DropDownItem,
          {
            onClick: () => {
              editor.dispatchCommand(lexical.INDENT_CONTENT_COMMAND, void 0);
            },
            className: "item wide",
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "icon-text-container", children: [
                /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon " + (isRTL ? "outdent" : "indent") }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
                  id: "lexical.plugin.toolbar.indent.indent",
                  defaultMessage: "Indent"
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shortcut", children: SHORTCUTS.INDENT })
            ]
          }
        )
      ]
    }
  );
}
function ToolbarPlugin({
  editor,
  activeEditor,
  setActiveEditor,
  setIsLinkEditMode
}) {
  const { formatMessage } = reactIntl.useIntl();
  const [selectedElementKey, setSelectedElementKey] = React.useState(null);
  const [modal, showModal] = useModal();
  const [isEditable, setIsEditable] = React.useState(() => editor.isEditable());
  const { toolbarState, updateToolbarState } = useToolbarState();
  const $updateToolbar = React.useCallback(() => {
    const selection$1 = lexical.$getSelection();
    if (lexical.$isRangeSelection(selection$1)) {
      if (activeEditor !== editor && utils.$isEditorIsNestedEditor(activeEditor)) {
        const rootElement = activeEditor.getRootElement();
        updateToolbarState(
          "isImageCaption",
          !!rootElement?.parentElement?.classList.contains("image-caption-container")
        );
      } else {
        updateToolbarState("isImageCaption", false);
      }
      const anchorNode = selection$1.anchor.getNode();
      let element = anchorNode.getKey() === "root" ? anchorNode : utils.$findMatchingParent(anchorNode, (e) => {
        const parent2 = e.getParent();
        return parent2 !== null && lexical.$isRootOrShadowRoot(parent2);
      });
      if (element === null) {
        element = anchorNode.getTopLevelElementOrThrow();
      }
      const elementKey = element.getKey();
      const elementDOM = activeEditor.getElementByKey(elementKey);
      updateToolbarState("isRTL", selection.$isParentElementRTL(selection$1));
      const node = getSelectedNode(selection$1);
      const parent = node.getParent();
      const isLink = link.$isLinkNode(parent) || link.$isLinkNode(node);
      updateToolbarState("isLink", isLink);
      const tableNode = utils.$findMatchingParent(node, table.$isTableNode);
      if (table.$isTableNode(tableNode)) {
        updateToolbarState("rootType", "table");
      } else {
        updateToolbarState("rootType", "root");
      }
      if (elementDOM !== null) {
        setSelectedElementKey(elementKey);
        if (list.$isListNode(element)) {
          const parentList = utils.$getNearestNodeOfType(anchorNode, list.ListNode);
          const type = parentList ? parentList.getListType() : element.getListType();
          updateToolbarState("blockType", type);
        } else {
          const type = richText.$isHeadingNode(element) ? element.getTag() : element.getType();
          if (type in blockTypeToBlockName) {
            updateToolbarState("blockType", type);
          }
          if (code.$isCodeNode(element)) {
            const language = element.getLanguage();
            updateToolbarState(
              "codeLanguage",
              language ? code.CODE_LANGUAGE_MAP[language] || language : ""
            );
            return;
          }
        }
      }
      updateToolbarState(
        "fontColor",
        selection.$getSelectionStyleValueForProperty(selection$1, "color", "#000")
      );
      updateToolbarState(
        "bgColor",
        selection.$getSelectionStyleValueForProperty(selection$1, "background-color", "#fff")
      );
      updateToolbarState(
        "fontFamily",
        selection.$getSelectionStyleValueForProperty(selection$1, "font-family", "Arial")
      );
      let matchingParent;
      if (link.$isLinkNode(parent)) {
        matchingParent = utils.$findMatchingParent(
          node,
          (parentNode) => lexical.$isElementNode(parentNode) && !parentNode.isInline()
        );
      }
      updateToolbarState(
        "elementFormat",
        lexical.$isElementNode(matchingParent) ? matchingParent.getFormatType() : lexical.$isElementNode(node) ? node.getFormatType() : parent?.getFormatType() || "left"
      );
    }
    if (lexical.$isRangeSelection(selection$1) || table.$isTableSelection(selection$1)) {
      updateToolbarState("isBold", selection$1.hasFormat("bold"));
      updateToolbarState("isItalic", selection$1.hasFormat("italic"));
      updateToolbarState("isUnderline", selection$1.hasFormat("underline"));
      updateToolbarState("isStrikethrough", selection$1.hasFormat("strikethrough"));
      updateToolbarState("isSubscript", selection$1.hasFormat("subscript"));
      updateToolbarState("isSuperscript", selection$1.hasFormat("superscript"));
      updateToolbarState("isCode", selection$1.hasFormat("code"));
      updateToolbarState(
        "fontSize",
        selection.$getSelectionStyleValueForProperty(selection$1, "font-size", "15px")
      );
      updateToolbarState("isLowercase", selection$1.hasFormat("lowercase"));
      updateToolbarState("isUppercase", selection$1.hasFormat("uppercase"));
      updateToolbarState("isCapitalize", selection$1.hasFormat("capitalize"));
    }
  }, [activeEditor, editor, updateToolbarState]);
  React.useEffect(() => {
    return editor.registerCommand(
      lexical.SELECTION_CHANGE_COMMAND,
      (_payload, newEditor) => {
        setActiveEditor(newEditor);
        $updateToolbar();
        return false;
      },
      lexical.COMMAND_PRIORITY_CRITICAL
    );
  }, [editor, $updateToolbar, setActiveEditor]);
  React.useEffect(() => {
    activeEditor.getEditorState().read(() => {
      $updateToolbar();
    });
  }, [activeEditor, $updateToolbar]);
  React.useEffect(() => {
    return utils.mergeRegister(
      editor.registerEditableListener((editable) => {
        setIsEditable(editable);
      }),
      activeEditor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          $updateToolbar();
        });
      }),
      activeEditor.registerCommand(
        lexical.CAN_UNDO_COMMAND,
        (payload) => {
          updateToolbarState("canUndo", payload);
          return false;
        },
        lexical.COMMAND_PRIORITY_CRITICAL
      ),
      activeEditor.registerCommand(
        lexical.CAN_REDO_COMMAND,
        (payload) => {
          updateToolbarState("canRedo", payload);
          return false;
        },
        lexical.COMMAND_PRIORITY_CRITICAL
      )
    );
  }, [$updateToolbar, activeEditor, editor, updateToolbarState]);
  const applyStyleText = React.useCallback(
    (styles, skipHistoryStack) => {
      activeEditor.update(
        () => {
          const selection$1 = lexical.$getSelection();
          if (selection$1 !== null) {
            selection.$patchStyleText(selection$1, styles);
          }
        },
        skipHistoryStack ? { tag: "historic" } : {}
      );
    },
    [activeEditor]
  );
  React.useCallback(
    (value, skipHistoryStack) => {
      applyStyleText({ color: value }, skipHistoryStack);
    },
    [applyStyleText]
  );
  React.useCallback(
    (value, skipHistoryStack) => {
      applyStyleText({ "background-color": value }, skipHistoryStack);
    },
    [applyStyleText]
  );
  const insertLink = React.useCallback(() => {
    if (!toolbarState.isLink) {
      setIsLinkEditMode(true);
      activeEditor.dispatchCommand(link.TOGGLE_LINK_COMMAND, sanitizeUrl("https://"));
    } else {
      setIsLinkEditMode(false);
      activeEditor.dispatchCommand(link.TOGGLE_LINK_COMMAND, null);
    }
  }, [activeEditor, setIsLinkEditMode, toolbarState.isLink]);
  const onCodeLanguageSelect = React.useCallback(
    (value) => {
      activeEditor.update(() => {
        if (selectedElementKey !== null) {
          const node = lexical.$getNodeByKey(selectedElementKey);
          if (code.$isCodeNode(node)) {
            node.setLanguage(value);
          }
        }
      });
    },
    [activeEditor, selectedElementKey]
  );
  const canViewerSeeInsertDropdown = !toolbarState.isImageCaption;
  const canViewerSeeInsertCodeButton = !toolbarState.isImageCaption;
  const [isStrapiImageDialogOpen, setIsStrapiImageDialogOpen] = React.useState(false);
  const components = admin.useStrapiApp("ImageDialog", (state) => state.components);
  const MediaLibraryDialog = components["media-library"];
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "toolbar", children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "button",
      {
        disabled: !toolbarState.canUndo || !isEditable,
        onClick: () => {
          activeEditor.dispatchCommand(lexical.UNDO_COMMAND, void 0);
        },
        title: formatMessage(
          { id: "lexical.plugin.toolbar.undo.title", defaultMessage: "Undo ({shortcut})" },
          { shortcut: IS_APPLE ? "⌘Z" : "Ctrl+Z" }
        ),
        type: "button",
        className: "toolbar-item spaced",
        "aria-label": formatMessage({
          id: "lexical.plugin.toolbar.undo.aria",
          defaultMessage: "Undo"
        }),
        children: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "format undo" })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "button",
      {
        disabled: !toolbarState.canRedo || !isEditable,
        onClick: () => {
          activeEditor.dispatchCommand(lexical.REDO_COMMAND, void 0);
        },
        title: formatMessage(
          { id: "lexical.plugin.toolbar.redo.title", defaultMessage: "Redo ({shortcut})" },
          { shortcut: IS_APPLE ? "⇧⌘Z" : "Ctrl+Y" }
        ),
        type: "button",
        className: "toolbar-item",
        "aria-label": formatMessage({
          id: "lexical.plugin.toolbar.redo.aria",
          defaultMessage: "Redo"
        }),
        children: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "format redo" })
      }
    ),
    isStrapiImageDialogOpen && /* @__PURE__ */ jsxRuntime.jsx(
      InsertStrapiImageDialog,
      {
        MediaLibraryDialog,
        activeEditor,
        onClose: () => setIsStrapiImageDialogOpen(false)
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(Divider, {}),
    toolbarState.blockType in blockTypeToBlockName && activeEditor === editor && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        BlockFormatDropDown,
        {
          disabled: !isEditable,
          blockType: toolbarState.blockType,
          rootType: toolbarState.rootType,
          editor: activeEditor
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(Divider, {})
    ] }),
    toolbarState.blockType === "code" ? /* @__PURE__ */ jsxRuntime.jsx(
      DropDown,
      {
        disabled: !isEditable,
        buttonClassName: "toolbar-item code-language",
        buttonLabel: code.getLanguageFriendlyName(toolbarState.codeLanguage),
        buttonAriaLabel: "Select language",
        children: CODE_LANGUAGE_OPTIONS.map(([value, name]) => {
          return /* @__PURE__ */ jsxRuntime.jsx(
            DropDownItem,
            {
              className: `item ${dropDownActiveClass(value === toolbarState.codeLanguage)}`,
              onClick: () => onCodeLanguageSelect(value),
              children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: name })
            },
            value
          );
        })
      }
    ) : /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          disabled: !isEditable,
          onClick: () => {
            activeEditor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, "bold");
          },
          className: "toolbar-item spaced " + (toolbarState.isBold ? "active" : ""),
          title: formatMessage(
            {
              id: "lexical.plugin.toolbar.format.bold.title",
              defaultMessage: "Bold ({shortcut})"
            },
            { shortcut: SHORTCUTS.BOLD }
          ),
          type: "button",
          "aria-label": formatMessage({
            id: "lexical.plugin.toolbar.format.bold.aria",
            defaultMessage: "Format text as bold"
          }),
          children: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "format bold" })
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          disabled: !isEditable,
          onClick: () => {
            activeEditor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, "italic");
          },
          className: "toolbar-item spaced " + (toolbarState.isItalic ? "active" : ""),
          title: formatMessage(
            {
              id: "lexical.plugin.toolbar.format.italic.title",
              defaultMessage: "Italic ({shortcut})"
            },
            { shortcut: SHORTCUTS.ITALIC }
          ),
          type: "button",
          "aria-label": formatMessage({
            id: "lexical.plugin.toolbar.format.italic.aria",
            defaultMessage: "Format text as italics"
          }),
          children: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "format italic" })
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          disabled: !isEditable,
          onClick: () => {
            activeEditor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, "underline");
          },
          className: "toolbar-item spaced " + (toolbarState.isUnderline ? "active" : ""),
          title: formatMessage(
            {
              id: "lexical.plugin.toolbar.format.underline.title",
              defaultMessage: "Underline ({shortcut})"
            },
            { shortcut: SHORTCUTS.UNDERLINE }
          ),
          type: "button",
          "aria-label": formatMessage({
            id: "lexical.plugin.toolbar.format.underline.aria",
            defaultMessage: "Format text to underlined"
          }),
          children: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "format underline" })
        }
      ),
      canViewerSeeInsertCodeButton && /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          disabled: !isEditable,
          onClick: () => {
            activeEditor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, "code");
          },
          className: "toolbar-item spaced " + (toolbarState.isCode ? "active" : ""),
          title: formatMessage(
            {
              id: "lexical.plugin.toolbar.format.code.title",
              defaultMessage: "Insert code block ({shortcut})"
            },
            { shortcut: SHORTCUTS.INSERT_CODE_BLOCK }
          ),
          type: "button",
          "aria-label": formatMessage({
            id: "lexical.plugin.toolbar.format.code.aria",
            defaultMessage: "Insert code block"
          }),
          children: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "format code" })
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsxs(
        DropDown,
        {
          disabled: !isEditable,
          buttonClassName: "toolbar-item spaced",
          buttonLabel: "",
          buttonAriaLabel: formatMessage({
            id: "lexical.plugin.toolbar.format.more.aria",
            defaultMessage: "Formatting options for additional text styles"
          }),
          buttonIconClassName: "icon dropdown-more",
          children: [
            /* @__PURE__ */ jsxRuntime.jsxs(
              DropDownItem,
              {
                onClick: () => {
                  activeEditor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, "lowercase");
                },
                className: "item wide " + dropDownActiveClass(toolbarState.isLowercase),
                title: formatMessage({
                  id: "lexical.plugin.toolbar.format.lowercase.title",
                  defaultMessage: "Lowercase"
                }),
                "aria-label": formatMessage({
                  id: "lexical.plugin.toolbar.format.lowercase.aria",
                  defaultMessage: "Format text to lowercase"
                }),
                children: [
                  /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "icon-text-container", children: [
                    /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon lowercase" }),
                    /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
                      id: "lexical.plugin.toolbar.format.lowercase.text",
                      defaultMessage: "Lowercase"
                    }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shortcut", children: SHORTCUTS.LOWERCASE })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsxs(
              DropDownItem,
              {
                onClick: () => {
                  activeEditor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, "uppercase");
                },
                className: "item wide " + dropDownActiveClass(toolbarState.isUppercase),
                title: formatMessage({
                  id: "lexical.plugin.toolbar.format.uppercase.title",
                  defaultMessage: "Uppercase"
                }),
                "aria-label": formatMessage({
                  id: "lexical.plugin.toolbar.format.uppercase.aria",
                  defaultMessage: "Format text to uppercase"
                }),
                children: [
                  /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "icon-text-container", children: [
                    /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon uppercase" }),
                    /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
                      id: "lexical.plugin.toolbar.format.uppercase.text",
                      defaultMessage: "Uppercase"
                    }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shortcut", children: SHORTCUTS.UPPERCASE })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsxs(
              DropDownItem,
              {
                onClick: () => {
                  activeEditor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, "capitalize");
                },
                className: "item wide " + dropDownActiveClass(toolbarState.isCapitalize),
                title: formatMessage({
                  id: "lexical.plugin.toolbar.format.capitalize.title",
                  defaultMessage: "Capitalize"
                }),
                "aria-label": formatMessage({
                  id: "lexical.plugin.toolbar.format.capitalize.aria",
                  defaultMessage: "Format text to capitalize"
                }),
                children: [
                  /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "icon-text-container", children: [
                    /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon capitalize" }),
                    /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
                      id: "lexical.plugin.toolbar.format.capitalize.text",
                      defaultMessage: "Capitalize"
                    }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shortcut", children: SHORTCUTS.CAPITALIZE })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsxs(
              DropDownItem,
              {
                onClick: () => {
                  activeEditor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, "strikethrough");
                },
                className: "item wide " + dropDownActiveClass(toolbarState.isStrikethrough),
                title: formatMessage({
                  id: "lexical.plugin.toolbar.format.strikethrough.title",
                  defaultMessage: "Strikethrough"
                }),
                "aria-label": formatMessage({
                  id: "lexical.plugin.toolbar.format.strikethrough.aria",
                  defaultMessage: "Format text with a strikethrough"
                }),
                children: [
                  /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "icon-text-container", children: [
                    /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon strikethrough" }),
                    /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
                      id: "lexical.plugin.toolbar.format.strikethrough.text",
                      defaultMessage: "Strikethrough"
                    }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shortcut", children: SHORTCUTS.STRIKETHROUGH })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsxs(
              DropDownItem,
              {
                onClick: () => {
                  activeEditor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, "subscript");
                },
                className: "item wide " + dropDownActiveClass(toolbarState.isSubscript),
                title: formatMessage({
                  id: "lexical.plugin.toolbar.format.subscript.title",
                  defaultMessage: "Subscript"
                }),
                "aria-label": formatMessage({
                  id: "lexical.plugin.toolbar.format.subscript.aria",
                  defaultMessage: "Format text with a subscript"
                }),
                children: [
                  /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "icon-text-container", children: [
                    /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon subscript" }),
                    /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
                      id: "lexical.plugin.toolbar.format.subscript.text",
                      defaultMessage: "Subscript"
                    }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shortcut", children: SHORTCUTS.SUBSCRIPT })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsxs(
              DropDownItem,
              {
                onClick: () => {
                  activeEditor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, "superscript");
                },
                className: "item wide " + dropDownActiveClass(toolbarState.isSuperscript),
                title: formatMessage({
                  id: "lexical.plugin.toolbar.format.superscript.title",
                  defaultMessage: "Superscript"
                }),
                "aria-label": formatMessage({
                  id: "lexical.plugin.toolbar.format.superscript.aria",
                  defaultMessage: "Format text with a superscript"
                }),
                children: [
                  /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "icon-text-container", children: [
                    /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon superscript" }),
                    /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
                      id: "lexical.plugin.toolbar.format.superscript.text",
                      defaultMessage: "Superscript"
                    }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shortcut", children: SHORTCUTS.SUPERSCRIPT })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsxs(
              DropDownItem,
              {
                onClick: () => clearFormatting(activeEditor),
                className: "item wide",
                title: formatMessage({
                  id: "lexical.plugin.toolbar.format.clear.title",
                  defaultMessage: "Clear text formatting"
                }),
                "aria-label": formatMessage({
                  id: "lexical.plugin.toolbar.format.clear.aria",
                  defaultMessage: "Clear all text formatting"
                }),
                children: [
                  /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "icon-text-container", children: [
                    /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon clear" }),
                    /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
                      id: "lexical.plugin.toolbar.format.clear.text",
                      defaultMessage: "Clear Formatting"
                    }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shortcut", children: SHORTCUTS.CLEAR_FORMATTING })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(Divider, {}),
      /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          disabled: !isEditable,
          onClick: insertLink,
          className: "toolbar-item spaced " + (toolbarState.isLink ? "active" : ""),
          "aria-label": formatMessage({
            id: "lexical.plugin.toolbar.insert.link.aria",
            defaultMessage: "Insert link"
          }),
          title: formatMessage(
            {
              id: "lexical.plugin.toolbar.insert.link.title",
              defaultMessage: "Insert link ({shortcut})"
            },
            { shortcut: SHORTCUTS.INSERT_LINK }
          ),
          type: "button",
          children: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "format link" })
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          onClick: () => setIsStrapiImageDialogOpen(true),
          title: formatMessage({
            id: "lexical.plugin.toolbar.insert.strapiimage.title",
            defaultMessage: "Strapi Image"
          }),
          type: "button",
          className: "toolbar-item",
          "aria-label": formatMessage({
            id: "lexical.plugin.toolbar.insert.strapiimage.aria",
            defaultMessage: "Insert Strapi Image"
          }),
          children: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "format image" })
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          disabled: !isEditable,
          onClick: triggerImageUpload,
          title: formatMessage({
            id: "lexical.plugin.toolbar.upload.image.title",
            defaultMessage: "Upload Image"
          }),
          type: "button",
          className: "toolbar-item",
          "aria-label": formatMessage({
            id: "lexical.plugin.toolbar.upload.image.aria",
            defaultMessage: "Upload Image"
          }),
          children: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "format upload" })
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(Divider, {}),
      /* @__PURE__ */ jsxRuntime.jsx(
        ElementFormatDropdown,
        {
          disabled: !isEditable,
          value: toolbarState.elementFormat,
          editor: activeEditor,
          isRTL: toolbarState.isRTL
        }
      ),
      canViewerSeeInsertDropdown && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(Divider, {}),
        /* @__PURE__ */ jsxRuntime.jsxs(
          DropDown,
          {
            disabled: !isEditable,
            buttonClassName: "toolbar-item spaced",
            buttonLabel: formatMessage({
              id: "lexical.plugin.toolbar.insert.button.text",
              defaultMessage: "Insert"
            }),
            buttonAriaLabel: formatMessage({
              id: "lexical.plugin.toolbar.insert.button.aria",
              defaultMessage: "Insert specialized editor node"
            }),
            buttonIconClassName: "icon plus",
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs(
                DropDownItem,
                {
                  onClick: () => {
                    activeEditor.dispatchCommand(LexicalHorizontalRuleNode.INSERT_HORIZONTAL_RULE_COMMAND, void 0);
                  },
                  className: "item",
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon horizontal-rule" }),
                    /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
                      id: "lexical.plugin.toolbar.insert.horizontalrule.text",
                      defaultMessage: "Horizontal Rule"
                    }) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsxs(
                DropDownItem,
                {
                  onClick: () => {
                    showModal(
                      formatMessage({
                        id: "lexical.plugin.toolbar.insert.table.modal.title",
                        defaultMessage: "Insert Table"
                      }),
                      (onClose) => /* @__PURE__ */ jsxRuntime.jsx(InsertTableDialog, { activeEditor, onClose })
                    );
                  },
                  className: "item",
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon table" }),
                    /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
                      id: "lexical.plugin.toolbar.insert.table.text",
                      defaultMessage: "Table"
                    }) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsxs(
                DropDownItem,
                {
                  onClick: () => {
                    showModal(
                      formatMessage({
                        id: "lexical.plugin.toolbar.insert.cta-button.modal.title",
                        defaultMessage: "Insert CTA Button"
                      }),
                      (onClose) => /* @__PURE__ */ jsxRuntime.jsx(InsertCTAButtonDialog, { activeEditor, onClose })
                    );
                  },
                  className: "item",
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon link" }),
                    /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
                      id: "lexical.plugin.toolbar.insert.cta-button.text",
                      defaultMessage: "CTA Button"
                    }) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsxs(
                DropDownItem,
                {
                  onClick: () => {
                    showModal(
                      formatMessage({
                        id: "lexical.plugin.toolbar.insert.columns.modal.title",
                        defaultMessage: "Insert Columns Layout"
                      }),
                      (onClose) => /* @__PURE__ */ jsxRuntime.jsx(InsertLayoutDialog, { activeEditor, onClose })
                    );
                  },
                  className: "item",
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon columns" }),
                    /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
                      id: "lexical.plugin.toolbar.insert.columns.text",
                      defaultMessage: "Columns Layout"
                    }) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsxs(
                DropDownItem,
                {
                  onClick: () => {
                    editor.dispatchCommand(INSERT_COLLAPSIBLE_COMMAND, void 0);
                  },
                  className: "item",
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx("i", { className: "icon caret-right" }),
                    /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: formatMessage({
                      id: "lexical.plugin.toolbar.insert.collapsible.text",
                      defaultMessage: "Collapsible container"
                    }) })
                  ]
                }
              ),
              EmbedConfigs.map((embedConfig) => /* @__PURE__ */ jsxRuntime.jsxs(
                DropDownItem,
                {
                  onClick: () => {
                    activeEditor.dispatchCommand(LexicalAutoEmbedPlugin.INSERT_EMBED_COMMAND, embedConfig.type);
                  },
                  className: "item",
                  children: [
                    embedConfig.icon,
                    /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text", children: embedConfig.contentName })
                  ]
                },
                embedConfig.type
              ))
            ]
          }
        )
      ] })
    ] }),
    modal
  ] });
}
function LexicalContentEditable({
  className,
  placeholder,
  placeholderClassName,
  ref
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    LexicalContentEditable$1.ContentEditable,
    {
      ref,
      className: className ?? "ContentEditable__root",
      "aria-placeholder": placeholder,
      placeholder: /* @__PURE__ */ jsxRuntime.jsx("div", { className: placeholderClassName ?? "ContentEditable__placeholder", children: placeholder })
    }
  );
}
function Editor(props) {
  const { formatMessage } = reactIntl.useIntl();
  const { historyState } = useSharedHistoryContext();
  const isAutocomplete = false;
  const isMaxLength = false;
  const hasLinkAttributes = false;
  const isCharLimitUtf8 = false;
  const showTreeView = false;
  const showTableOfContents = false;
  const shouldUseLexicalContextMenu = false;
  const tableCellMerge = false;
  const tableCellBackgroundColor = false;
  const tableHorizontalScroll = false;
  const shouldAllowHighlightingWithBrackets = false;
  const selectionAlwaysOnDisplay = false;
  const isEditable = useLexicalEditable.useLexicalEditable();
  const placeholder = formatMessage(
    {
      id: "lexical.editor.placeholder",
      defaultMessage: "Enter some {state, select, collab {collaborative rich} rich {rich} other {plain}} text..."
    },
    { state: "rich" }
  );
  const [floatingAnchorElem, setFloatingAnchorElem] = React.useState(null);
  const [isSmallWidthViewport, setIsSmallWidthViewport] = React.useState(false);
  const [editor] = LexicalComposerContext.useLexicalComposerContext();
  const [activeEditor, setActiveEditor] = React.useState(editor);
  const [isLinkEditMode, setIsLinkEditMode] = React.useState(false);
  const onRef = (_floatingAnchorElem) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem);
    }
  };
  React.useEffect(() => {
    const updateViewPortWidth = () => {
      const isNextSmallWidthViewport = CAN_USE_DOM && window.matchMedia("(max-width: 1025px)").matches;
      if (isNextSmallWidthViewport !== isSmallWidthViewport) {
        setIsSmallWidthViewport(isNextSmallWidthViewport);
      }
    };
    updateViewPortWidth();
    window.addEventListener("resize", updateViewPortWidth);
    return () => {
      window.removeEventListener("resize", updateViewPortWidth);
    };
  }, [isSmallWidthViewport]);
  function onChange(editorState) {
    const editorStateJSON = editorState.toJSON();
    props.onChange(editorStateJSON);
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      ToolbarPlugin,
      {
        editor,
        activeEditor,
        setActiveEditor,
        setIsLinkEditMode
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(ShortcutsPlugin, { editor: activeEditor, setIsLinkEditMode }),
    /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        className: `editor-container ${""} ${""}`,
        children: [
          isMaxLength,
          /* @__PURE__ */ jsxRuntime.jsx(DragDropPaste, {}),
          /* @__PURE__ */ jsxRuntime.jsx(LexicalAutoFocusPlugin.AutoFocusPlugin, {}),
          selectionAlwaysOnDisplay,
          /* @__PURE__ */ jsxRuntime.jsx(LexicalClearEditorPlugin.ClearEditorPlugin, {}),
          /* @__PURE__ */ jsxRuntime.jsx(ComponentPickerMenuPlugin, {}),
          /* @__PURE__ */ jsxRuntime.jsx(EmojiPickerPlugin, {}),
          /* @__PURE__ */ jsxRuntime.jsx(AutoEmbedPlugin, {}),
          /* @__PURE__ */ jsxRuntime.jsx(NewMentionsPlugin, {}),
          /* @__PURE__ */ jsxRuntime.jsx(EmojisPlugin, {}),
          /* @__PURE__ */ jsxRuntime.jsx(LexicalHashtagPlugin.HashtagPlugin, {}),
          /* @__PURE__ */ jsxRuntime.jsx(KeywordsPlugin, {}),
          /* @__PURE__ */ jsxRuntime.jsx(LexicalAutoLinkPlugin, {}),
          /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
            /* @__PURE__ */ jsxRuntime.jsx(LexicalHistoryPlugin.HistoryPlugin, { externalHistoryState: historyState }),
            /* @__PURE__ */ jsxRuntime.jsx(
              LexicalRichTextPlugin.RichTextPlugin,
              {
                contentEditable: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "editor-scroller", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "editor", ref: onRef, children: /* @__PURE__ */ jsxRuntime.jsx(LexicalContentEditable, { placeholder, ref: props.ref }) }) }),
                ErrorBoundary: LexicalErrorBoundary.LexicalErrorBoundary
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(MarkdownPlugin, {}),
            /* @__PURE__ */ jsxRuntime.jsx(CodeHighlightPlugin, {}),
            /* @__PURE__ */ jsxRuntime.jsx(LexicalListPlugin.ListPlugin, {}),
            /* @__PURE__ */ jsxRuntime.jsx(LexicalCheckListPlugin.CheckListPlugin, {}),
            /* @__PURE__ */ jsxRuntime.jsx(
              LexicalTablePlugin.TablePlugin,
              {
                hasCellMerge: tableCellMerge,
                hasCellBackgroundColor: tableCellBackgroundColor,
                hasHorizontalScroll: tableHorizontalScroll
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(TableCellResizerPlugin, {}),
            /* @__PURE__ */ jsxRuntime.jsx(LinkPlugin, { hasLinkAttributes }),
            /* @__PURE__ */ jsxRuntime.jsx(YouTubePlugin, {}),
            /* @__PURE__ */ jsxRuntime.jsx(LexicalClickableLinkPlugin.ClickableLinkPlugin, { disabled: isEditable }),
            /* @__PURE__ */ jsxRuntime.jsx(LexicalHorizontalRulePlugin.HorizontalRulePlugin, {}),
            /* @__PURE__ */ jsxRuntime.jsx(TabFocusPlugin, {}),
            /* @__PURE__ */ jsxRuntime.jsx(LexicalTabIndentationPlugin.TabIndentationPlugin, { maxIndent: 7 }),
            /* @__PURE__ */ jsxRuntime.jsx(CollapsiblePlugin, {}),
            /* @__PURE__ */ jsxRuntime.jsx(LayoutPlugin, {}),
            /* @__PURE__ */ jsxRuntime.jsx(CTAButtonPlugin, {}),
            floatingAnchorElem && !isSmallWidthViewport && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
              /* @__PURE__ */ jsxRuntime.jsx(DraggableBlockPlugin, { anchorElem: floatingAnchorElem }),
              /* @__PURE__ */ jsxRuntime.jsx(CodeActionMenuPlugin, { anchorElem: floatingAnchorElem }),
              /* @__PURE__ */ jsxRuntime.jsx(
                FloatingLinkEditorPlugin,
                {
                  anchorElem: floatingAnchorElem,
                  isLinkEditMode,
                  setIsLinkEditMode,
                  fieldName: props.fieldName
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(TableActionMenuPlugin, { anchorElem: floatingAnchorElem, cellMerge: true }),
              /* @__PURE__ */ jsxRuntime.jsx(TableHoverActionsPlugin, { anchorElem: floatingAnchorElem }),
              /* @__PURE__ */ jsxRuntime.jsx(
                FloatingTextFormatToolbarPlugin,
                {
                  anchorElem: floatingAnchorElem,
                  setIsLinkEditMode
                }
              )
            ] })
          ] }),
          isCharLimitUtf8,
          isAutocomplete,
          /* @__PURE__ */ jsxRuntime.jsx("div", { children: showTableOfContents }),
          shouldUseLexicalContextMenu,
          shouldAllowHighlightingWithBrackets
        ]
      }
    ),
    showTreeView,
    /* @__PURE__ */ jsxRuntime.jsx(StrapiOnChangePlugin, { onChange, expectedEditorState: props.expectedEditorState }),
    /* @__PURE__ */ jsxRuntime.jsx(StrapiImagePlugin, {}),
    /* @__PURE__ */ jsxRuntime.jsx(StrapiImageUploadPlugin, { folder: "post" })
  ] });
}
function FlashMessage({ children }) {
  return ReactDOM.createPortal(
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "FlashMessage__overlay", role: "dialog", children: /* @__PURE__ */ jsxRuntime.jsx("p", { className: "FlashMessage__alert", role: "alert", children }) }),
    document.body
  );
}
const Context = React.createContext(void 0);
const INITIAL_STATE = {};
const DEFAULT_DURATION = 1e3;
const FlashMessageContext = ({ children }) => {
  const [props, setProps] = React.useState(INITIAL_STATE);
  const showFlashMessage = React.useCallback(
    (message, duration) => setProps(message ? { duration, message } : INITIAL_STATE),
    []
  );
  React.useEffect(() => {
    if (props.message) {
      const timeoutId = setTimeout(
        () => setProps(INITIAL_STATE),
        props.duration ?? DEFAULT_DURATION
      );
      return () => clearTimeout(timeoutId);
    }
  }, [props]);
  return /* @__PURE__ */ jsxRuntime.jsxs(Context.Provider, { value: showFlashMessage, children: [
    children,
    props.message && /* @__PURE__ */ jsxRuntime.jsx(FlashMessage, { children: props.message })
  ] });
};
const theme = {
  autocomplete: "PlaygroundEditorTheme__autocomplete",
  blockCursor: "PlaygroundEditorTheme__blockCursor",
  characterLimit: "PlaygroundEditorTheme__characterLimit",
  code: "PlaygroundEditorTheme__code",
  codeHighlight: {
    atrule: "PlaygroundEditorTheme__tokenAttr",
    attr: "PlaygroundEditorTheme__tokenAttr",
    boolean: "PlaygroundEditorTheme__tokenProperty",
    builtin: "PlaygroundEditorTheme__tokenSelector",
    cdata: "PlaygroundEditorTheme__tokenComment",
    char: "PlaygroundEditorTheme__tokenSelector",
    class: "PlaygroundEditorTheme__tokenFunction",
    "class-name": "PlaygroundEditorTheme__tokenFunction",
    comment: "PlaygroundEditorTheme__tokenComment",
    constant: "PlaygroundEditorTheme__tokenProperty",
    deleted: "PlaygroundEditorTheme__tokenProperty",
    doctype: "PlaygroundEditorTheme__tokenComment",
    entity: "PlaygroundEditorTheme__tokenOperator",
    function: "PlaygroundEditorTheme__tokenFunction",
    important: "PlaygroundEditorTheme__tokenVariable",
    inserted: "PlaygroundEditorTheme__tokenSelector",
    keyword: "PlaygroundEditorTheme__tokenAttr",
    namespace: "PlaygroundEditorTheme__tokenVariable",
    number: "PlaygroundEditorTheme__tokenProperty",
    operator: "PlaygroundEditorTheme__tokenOperator",
    prolog: "PlaygroundEditorTheme__tokenComment",
    property: "PlaygroundEditorTheme__tokenProperty",
    punctuation: "PlaygroundEditorTheme__tokenPunctuation",
    regex: "PlaygroundEditorTheme__tokenVariable",
    selector: "PlaygroundEditorTheme__tokenSelector",
    string: "PlaygroundEditorTheme__tokenSelector",
    symbol: "PlaygroundEditorTheme__tokenProperty",
    tag: "PlaygroundEditorTheme__tokenProperty",
    url: "PlaygroundEditorTheme__tokenOperator",
    variable: "PlaygroundEditorTheme__tokenVariable"
  },
  embedBlock: {
    base: "PlaygroundEditorTheme__embedBlock",
    focus: "PlaygroundEditorTheme__embedBlockFocus"
  },
  hashtag: "PlaygroundEditorTheme__hashtag",
  heading: {
    h1: "PlaygroundEditorTheme__h1",
    h2: "PlaygroundEditorTheme__h2",
    h3: "PlaygroundEditorTheme__h3",
    h4: "PlaygroundEditorTheme__h4",
    h5: "PlaygroundEditorTheme__h5",
    h6: "PlaygroundEditorTheme__h6"
  },
  hr: "PlaygroundEditorTheme__hr",
  image: "editor-image",
  indent: "PlaygroundEditorTheme__indent",
  inlineImage: "inline-editor-image",
  layoutContainer: "PlaygroundEditorTheme__layoutContainer",
  layoutItem: "PlaygroundEditorTheme__layoutItem",
  link: "PlaygroundEditorTheme__link",
  list: {
    checklist: "PlaygroundEditorTheme__checklist",
    listitem: "PlaygroundEditorTheme__listItem",
    listitemChecked: "PlaygroundEditorTheme__listItemChecked",
    listitemUnchecked: "PlaygroundEditorTheme__listItemUnchecked",
    nested: {
      listitem: "PlaygroundEditorTheme__nestedListItem"
    },
    olDepth: [
      "PlaygroundEditorTheme__ol1",
      "PlaygroundEditorTheme__ol2",
      "PlaygroundEditorTheme__ol3",
      "PlaygroundEditorTheme__ol4",
      "PlaygroundEditorTheme__ol5"
    ],
    ul: "PlaygroundEditorTheme__ul"
  },
  ltr: "PlaygroundEditorTheme__ltr",
  mark: "PlaygroundEditorTheme__mark",
  markOverlap: "PlaygroundEditorTheme__markOverlap",
  paragraph: "PlaygroundEditorTheme__paragraph",
  quote: "PlaygroundEditorTheme__quote",
  rtl: "PlaygroundEditorTheme__rtl",
  specialText: "PlaygroundEditorTheme__specialText",
  tab: "PlaygroundEditorTheme__tabNode",
  table: "PlaygroundEditorTheme__table",
  tableAlignment: {
    center: "PlaygroundEditorTheme__tableAlignmentCenter",
    right: "PlaygroundEditorTheme__tableAlignmentRight"
  },
  tableCell: "PlaygroundEditorTheme__tableCell",
  tableCellActionButton: "PlaygroundEditorTheme__tableCellActionButton",
  tableCellActionButtonContainer: "PlaygroundEditorTheme__tableCellActionButtonContainer",
  tableCellHeader: "PlaygroundEditorTheme__tableCellHeader",
  tableCellResizer: "PlaygroundEditorTheme__tableCellResizer",
  tableCellSelected: "PlaygroundEditorTheme__tableCellSelected",
  tableRowStriping: "PlaygroundEditorTheme__tableRowStriping",
  tableScrollableWrapper: "PlaygroundEditorTheme__tableScrollableWrapper",
  tableSelected: "PlaygroundEditorTheme__tableSelected",
  tableSelection: "PlaygroundEditorTheme__tableSelection",
  text: {
    bold: "PlaygroundEditorTheme__textBold",
    capitalize: "PlaygroundEditorTheme__textCapitalize",
    code: "PlaygroundEditorTheme__textCode",
    italic: "PlaygroundEditorTheme__textItalic",
    lowercase: "PlaygroundEditorTheme__textLowercase",
    strikethrough: "PlaygroundEditorTheme__textStrikethrough",
    subscript: "PlaygroundEditorTheme__textSubscript",
    superscript: "PlaygroundEditorTheme__textSuperscript",
    underline: "PlaygroundEditorTheme__textUnderline",
    underlineStrikethrough: "PlaygroundEditorTheme__textUnderlineStrikethrough",
    uppercase: "PlaygroundEditorTheme__textUppercase"
  }
};
function FigmaComponent({ className, format, nodeKey, documentID }) {
  return /* @__PURE__ */ jsxRuntime.jsx(LexicalBlockWithAlignableContents.BlockWithAlignableContents, { className, format, nodeKey, children: /* @__PURE__ */ jsxRuntime.jsx(
    "iframe",
    {
      width: "560",
      height: "315",
      src: `https://www.figma.com/embed?embed_host=lexical&url=        https://www.figma.com/file/${documentID}`,
      allowFullScreen: true
    }
  ) });
}
class FigmaNode extends LexicalDecoratorBlockNode.DecoratorBlockNode {
  __id;
  static getType() {
    return "figma";
  }
  static clone(node) {
    return new FigmaNode(node.__id, node.__format, node.__key);
  }
  static importJSON(serializedNode) {
    return $createFigmaNode(serializedNode.documentID).updateFromJSON(serializedNode);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      documentID: this.__id
    };
  }
  constructor(id, format, key) {
    super(format, key);
    this.__id = id;
  }
  updateDOM() {
    return false;
  }
  getId() {
    return this.__id;
  }
  getTextContent(_includeInert, _includeDirectionless) {
    return `https://www.figma.com/file/${this.__id}`;
  }
  decorate(_editor, config) {
    const embedBlockTheme = config.theme.embedBlock || {};
    const className = {
      base: embedBlockTheme.base || "",
      focus: embedBlockTheme.focus || ""
    };
    return /* @__PURE__ */ jsxRuntime.jsx(
      FigmaComponent,
      {
        className,
        format: this.__format,
        nodeKey: this.getKey(),
        documentID: this.__id
      }
    );
  }
}
function $createFigmaNode(documentID) {
  return new FigmaNode(documentID);
}
const InlineImageComponent = React__namespace.lazy(() => Promise.resolve().then(() => require("./InlineImageComponent-C6IG8-jX.js")));
function $convertInlineImageElement(domNode) {
  if (lexical.isHTMLElement(domNode) && domNode.nodeName === "IMG") {
    const { alt: altText, src, width, height } = domNode;
    const node = $createInlineImageNode({ altText, height, src, width });
    return { node };
  }
  return null;
}
class InlineImageNode extends lexical.DecoratorNode {
  __src;
  __altText;
  __width;
  __height;
  __showCaption;
  __caption;
  __position;
  static getType() {
    return "inline-image";
  }
  static clone(node) {
    return new InlineImageNode(
      node.__src,
      node.__altText,
      node.__position,
      node.__width,
      node.__height,
      node.__showCaption,
      node.__caption,
      node.__key
    );
  }
  static importJSON(serializedNode) {
    const { altText, height, width, src, showCaption, position } = serializedNode;
    return $createInlineImageNode({
      altText,
      height,
      position,
      showCaption,
      src,
      width
    }).updateFromJSON(serializedNode);
  }
  updateFromJSON(serializedNode) {
    const { caption } = serializedNode;
    const node = super.updateFromJSON(serializedNode);
    const nestedEditor = node.__caption;
    const editorState = nestedEditor.parseEditorState(caption.editorState);
    if (!editorState.isEmpty()) {
      nestedEditor.setEditorState(editorState);
    }
    return node;
  }
  static importDOM() {
    return {
      img: (node) => ({
        conversion: $convertInlineImageElement,
        priority: 0
      })
    };
  }
  constructor(src, altText, position, width, height, showCaption, caption, key) {
    super(key);
    this.__src = src;
    this.__altText = altText;
    this.__width = width || "inherit";
    this.__height = height || "inherit";
    this.__showCaption = showCaption || false;
    this.__caption = caption || lexical.createEditor();
    this.__position = position;
  }
  exportDOM() {
    const element = document.createElement("img");
    element.setAttribute("src", this.__src);
    element.setAttribute("alt", this.__altText);
    element.setAttribute("width", this.__width.toString());
    element.setAttribute("height", this.__height.toString());
    return { element };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      altText: this.getAltText(),
      caption: this.__caption.toJSON(),
      height: this.__height === "inherit" ? 0 : this.__height,
      position: this.__position,
      showCaption: this.__showCaption,
      src: this.getSrc(),
      width: this.__width === "inherit" ? 0 : this.__width
    };
  }
  getSrc() {
    return this.__src;
  }
  getAltText() {
    return this.__altText;
  }
  setAltText(altText) {
    const writable = this.getWritable();
    writable.__altText = altText;
  }
  setWidthAndHeight(width, height) {
    const writable = this.getWritable();
    writable.__width = width;
    writable.__height = height;
  }
  getShowCaption() {
    return this.__showCaption;
  }
  setShowCaption(showCaption) {
    const writable = this.getWritable();
    writable.__showCaption = showCaption;
  }
  getPosition() {
    return this.__position;
  }
  setPosition(position) {
    const writable = this.getWritable();
    writable.__position = position;
  }
  update(payload) {
    const writable = this.getWritable();
    const { altText, showCaption, position } = payload;
    if (altText !== void 0) {
      writable.__altText = altText;
    }
    if (showCaption !== void 0) {
      writable.__showCaption = showCaption;
    }
    if (position !== void 0) {
      writable.__position = position;
    }
  }
  // View
  createDOM(config) {
    const span = document.createElement("span");
    const className = `${config.theme.inlineImage} position-${this.__position}`;
    if (className !== void 0) {
      span.className = className;
    }
    return span;
  }
  updateDOM(prevNode, dom, config) {
    const position = this.__position;
    if (position !== prevNode.__position) {
      const className = `${config.theme.inlineImage} position-${position}`;
      if (className !== void 0) {
        dom.className = className;
      }
    }
    return false;
  }
  decorate() {
    return /* @__PURE__ */ jsxRuntime.jsx(React.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntime.jsx(
      InlineImageComponent,
      {
        src: this.__src,
        altText: this.__altText,
        width: this.__width,
        height: this.__height,
        nodeKey: this.getKey(),
        showCaption: this.__showCaption,
        caption: this.__caption,
        position: this.__position
      }
    ) });
  }
}
function $createInlineImageNode({
  altText,
  position,
  height,
  src,
  width,
  showCaption,
  caption,
  key
}) {
  return lexical.$applyNodeReplacement(
    new InlineImageNode(src, altText, position, width, height, showCaption, caption, key)
  );
}
function $isInlineImageNode(node) {
  return node instanceof InlineImageNode;
}
function PageBreakComponent({ nodeKey }) {
  const [editor] = LexicalComposerContext.useLexicalComposerContext();
  const [isSelected, setSelected, clearSelection] = useLexicalNodeSelection.useLexicalNodeSelection(nodeKey);
  const $onDelete = React.useCallback(
    (event) => {
      event.preventDefault();
      const deleteSelection = lexical.$getSelection();
      if (isSelected && lexical.$isNodeSelection(deleteSelection)) {
        deleteSelection.getNodes().forEach((node) => {
          if ($isPageBreakNode(node)) {
            node.remove();
          }
        });
      }
      return false;
    },
    [isSelected]
  );
  React.useEffect(() => {
    return utils.mergeRegister(
      editor.registerCommand(
        lexical.CLICK_COMMAND,
        (event) => {
          const pbElem = editor.getElementByKey(nodeKey);
          if (event.target === pbElem) {
            if (!event.shiftKey) {
              clearSelection();
            }
            setSelected(!isSelected);
            return true;
          }
          return false;
        },
        lexical.COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(lexical.KEY_DELETE_COMMAND, $onDelete, lexical.COMMAND_PRIORITY_LOW),
      editor.registerCommand(lexical.KEY_BACKSPACE_COMMAND, $onDelete, lexical.COMMAND_PRIORITY_LOW)
    );
  }, [clearSelection, editor, isSelected, nodeKey, $onDelete, setSelected]);
  React.useEffect(() => {
    const pbElem = editor.getElementByKey(nodeKey);
    if (pbElem !== null) {
      pbElem.className = isSelected ? "selected" : "";
    }
  }, [editor, isSelected, nodeKey]);
  return null;
}
class PageBreakNode extends lexical.DecoratorNode {
  static getType() {
    return "page-break";
  }
  static clone(node) {
    return new PageBreakNode(node.__key);
  }
  static importJSON(serializedNode) {
    return $createPageBreakNode().updateFromJSON(serializedNode);
  }
  static importDOM() {
    return {
      figure: (domNode) => {
        const tp = domNode.getAttribute("type");
        if (tp !== this.getType()) {
          return null;
        }
        return {
          conversion: $convertPageBreakElement,
          priority: lexical.COMMAND_PRIORITY_HIGH
        };
      }
    };
  }
  createDOM() {
    const el = document.createElement("figure");
    el.style.pageBreakAfter = "always";
    el.setAttribute("type", this.getType());
    return el;
  }
  getTextContent() {
    return "\n";
  }
  isInline() {
    return false;
  }
  updateDOM() {
    return false;
  }
  decorate() {
    return /* @__PURE__ */ jsxRuntime.jsx(PageBreakComponent, { nodeKey: this.__key });
  }
}
function $convertPageBreakElement() {
  return { node: $createPageBreakNode() };
}
function $createPageBreakNode() {
  return new PageBreakNode();
}
function $isPageBreakNode(node) {
  return node instanceof PageBreakNode;
}
const PollComponent = React__namespace.lazy(() => Promise.resolve().then(() => require("./PollComponent-DrhRO6iv.js")));
function createUID() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").slice(0, 5);
}
function createPollOption(text = "") {
  return {
    text,
    uid: createUID(),
    votes: []
  };
}
function cloneOption(option, text, votes) {
  return {
    text,
    uid: option.uid,
    votes: votes || Array.from(option.votes)
  };
}
function $convertPollElement(domNode) {
  const question = domNode.getAttribute("data-lexical-poll-question");
  const options = domNode.getAttribute("data-lexical-poll-options");
  if (question !== null && options !== null) {
    const node = $createPollNode(question, JSON.parse(options));
    return { node };
  }
  return null;
}
class PollNode extends lexical.DecoratorNode {
  __question;
  __options;
  static getType() {
    return "poll";
  }
  static clone(node) {
    return new PollNode(node.__question, node.__options, node.__key);
  }
  static importJSON(serializedNode) {
    return $createPollNode(serializedNode.question, serializedNode.options).updateFromJSON(
      serializedNode
    );
  }
  constructor(question, options, key) {
    super(key);
    this.__question = question;
    this.__options = options;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      options: this.__options,
      question: this.__question
    };
  }
  addOption(option) {
    const self = this.getWritable();
    const options = Array.from(self.__options);
    options.push(option);
    self.__options = options;
  }
  deleteOption(option) {
    const self = this.getWritable();
    const options = Array.from(self.__options);
    const index = options.indexOf(option);
    options.splice(index, 1);
    self.__options = options;
  }
  setOptionText(option, text) {
    const self = this.getWritable();
    const clonedOption = cloneOption(option, text);
    const options = Array.from(self.__options);
    const index = options.indexOf(option);
    options[index] = clonedOption;
    self.__options = options;
  }
  toggleVote(option, clientID) {
    const self = this.getWritable();
    const votes = option.votes;
    const votesClone = Array.from(votes);
    const voteIndex = votes.indexOf(clientID);
    if (voteIndex === -1) {
      votesClone.push(clientID);
    } else {
      votesClone.splice(voteIndex, 1);
    }
    const clonedOption = cloneOption(option, option.text, votesClone);
    const options = Array.from(self.__options);
    const index = options.indexOf(option);
    options[index] = clonedOption;
    self.__options = options;
  }
  static importDOM() {
    return {
      span: (domNode) => {
        if (!domNode.hasAttribute("data-lexical-poll-question")) {
          return null;
        }
        return {
          conversion: $convertPollElement,
          priority: 2
        };
      }
    };
  }
  exportDOM() {
    const element = document.createElement("span");
    element.setAttribute("data-lexical-poll-question", this.__question);
    element.setAttribute("data-lexical-poll-options", JSON.stringify(this.__options));
    return { element };
  }
  createDOM() {
    const elem = document.createElement("span");
    elem.style.display = "inline-block";
    return elem;
  }
  updateDOM() {
    return false;
  }
  decorate() {
    return /* @__PURE__ */ jsxRuntime.jsx(React.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntime.jsx(PollComponent, { question: this.__question, options: this.__options, nodeKey: this.__key }) });
  }
}
function $createPollNode(question, options) {
  return new PollNode(question, options);
}
function $isPollNode(node) {
  return node instanceof PollNode;
}
const StickyComponent = React__namespace.lazy(() => Promise.resolve().then(() => require("./StickyComponent-DyuIIq2g.js")));
class StickyNode extends lexical.DecoratorNode {
  __x;
  __y;
  __color;
  __caption;
  static getType() {
    return "sticky";
  }
  static clone(node) {
    return new StickyNode(node.__x, node.__y, node.__color, node.__caption, node.__key);
  }
  static importJSON(serializedNode) {
    return new StickyNode(
      serializedNode.xOffset,
      serializedNode.yOffset,
      serializedNode.color
    ).updateFromJSON(serializedNode);
  }
  updateFromJSON(serializedNode) {
    const stickyNode = super.updateFromJSON(serializedNode);
    const caption = serializedNode.caption;
    const nestedEditor = stickyNode.__caption;
    const editorState = nestedEditor.parseEditorState(caption.editorState);
    if (!editorState.isEmpty()) {
      nestedEditor.setEditorState(editorState);
    }
    return stickyNode;
  }
  constructor(x, y, color, caption, key) {
    super(key);
    this.__x = x;
    this.__y = y;
    this.__caption = caption || lexical.createEditor();
    this.__color = color;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      caption: this.__caption.toJSON(),
      color: this.__color,
      xOffset: this.__x,
      yOffset: this.__y
    };
  }
  createDOM(config) {
    const div = document.createElement("div");
    div.style.display = "contents";
    return div;
  }
  updateDOM() {
    return false;
  }
  setPosition(x, y) {
    const writable = this.getWritable();
    writable.__x = x;
    writable.__y = y;
    lexical.$setSelection(null);
  }
  toggleColor() {
    const writable = this.getWritable();
    writable.__color = writable.__color === "pink" ? "yellow" : "pink";
  }
  decorate(editor, config) {
    return ReactDOM.createPortal(
      /* @__PURE__ */ jsxRuntime.jsx(React.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntime.jsx(
        StickyComponent,
        {
          color: this.__color,
          x: this.__x,
          y: this.__y,
          nodeKey: this.getKey(),
          caption: this.__caption
        }
      ) }),
      document.body
    );
  }
  isIsolated() {
    return true;
  }
}
function $isStickyNode(node) {
  return node instanceof StickyNode;
}
const Nodes = [
  richText.HeadingNode,
  list.ListNode,
  list.ListItemNode,
  richText.QuoteNode,
  code.CodeNode,
  table.TableNode,
  table.TableCellNode,
  table.TableRowNode,
  hashtag.HashtagNode,
  code.CodeHighlightNode,
  link.AutoLinkNode,
  link.LinkNode,
  overflow.OverflowNode,
  PollNode,
  StickyNode,
  ImageNode,
  InlineImageNode,
  MentionNode,
  EmojiNode,
  EquationNode,
  AutocompleteNode,
  KeywordNode,
  LexicalHorizontalRuleNode.HorizontalRuleNode,
  TweetNode,
  YouTubeNode,
  FigmaNode,
  mark.MarkNode,
  CollapsibleContainerNode,
  CollapsibleContentNode,
  CollapsibleTitleNode,
  PageBreakNode,
  LayoutContainerNode,
  LayoutItemNode,
  SpecialTextNode,
  StrapiImageNode,
  CTAButtonNode
];
const Input = React__namespace.forwardRef(
  (props, ref) => {
    const { attribute, name, onChange, required, value, error, hint, labelAction, label } = props;
    const { formatMessage } = reactIntl.useIntl();
    const { get } = admin.useFetchClient();
    const [expectedEditorState, setExpectedEditorState] = React__namespace.useState(void 0);
    const [flagUserInput, setFlagUserInput] = React__namespace.useState(false);
    const [lastValue, setLastValue] = React__namespace.useState(value);
    React__namespace.useEffect(() => {
      if (!equal__default.default(value, lastValue)) {
        setLastValue(value);
        if (flagUserInput) {
          setFlagUserInput(false);
          setExpectedEditorState(void 0);
        } else {
          setExpectedEditorState(value);
        }
      }
    }, [value]);
    const handleChange = async (newValue) => {
      if (equal__default.default(value, newValue)) {
        return;
      }
      onChange({
        target: { name, type: attribute.type, value: newValue }
      });
      setFlagUserInput(true);
      const mediaNodes = ["strapi-image"];
      const linkNodes = ["link"];
      const mediaDocumentsIds = /* @__PURE__ */ new Set();
      const collectionLinks = /* @__PURE__ */ new Map();
      const gatherStrapiRelations = (nodes) => {
        for (const node of nodes) {
          if (mediaNodes.includes(node.type)) {
            const imageNode = node;
            mediaDocumentsIds.add(imageNode.documentId);
          }
          if (linkNodes.includes(node.type)) {
            const linkNode = node;
            if (linkNode.url.indexOf("strapi://") === 0) {
              const [collectionName, documentId] = linkNode.url.replace("strapi://", "").split("/");
              const currentLinksSet = collectionLinks.get(collectionName) || /* @__PURE__ */ new Set();
              currentLinksSet.add(documentId);
              collectionLinks.set(collectionName, currentLinksSet);
            }
          }
          if (node.children) {
            gatherStrapiRelations(node.children);
          }
        }
      };
      gatherStrapiRelations(newValue.root.children);
      if (mediaDocumentsIds.size > 0) {
        try {
          const resultFetchClient = await get(`/upload/files`, {
            params: {
              filters: {
                documentId: {
                  $in: [...mediaDocumentsIds.values()]
                }
              },
              pagination: {
                page: 1,
                pageSize: mediaDocumentsIds.size
              }
            }
          });
          onChange({
            target: {
              name: `${name}Media`,
              type: "media",
              value: resultFetchClient.data.results
            }
          });
        } catch (err) {
          alert(
            formatMessage({
              id: "lexical.components.input.alert.media-failure",
              defaultMessage: "Failed to locate media used in the rich text. This may be due to a permission issue. Please contact your administrator or developer for assistance."
            })
          );
          console.error(err);
        }
      } else {
        onChange({
          target: {
            name: `${name}Media`,
            type: "media",
            value: []
          }
        });
      }
      try {
        const links = {};
        for (const [collectionName, documentIds] of collectionLinks.entries()) {
          const resultIdentify = await get(`/lexical/identify/${collectionName}`);
          const resultFetchClient = await get(
            `/content-manager/collection-types/${resultIdentify.data.collectionUID}`,
            {
              params: {
                filters: {
                  documentId: {
                    $in: [...documentIds.values()]
                  }
                },
                pagination: {
                  page: 1,
                  pageSize: documentIds.size
                }
              }
            }
          );
          links[collectionName] = {
            connect: resultFetchClient.data.results.map(
              (result) => ({
                apiData: result,
                label: result["name"] || result["title"] || result["label"] || result["headline"],
                id: result.id,
                status: result.status,
                href: `/content-manager/collection-types/${resultIdentify.data.collectionUID}/${result.documentId}`
              })
            )
            // @todo we probably have to maintain disconnect array as well to avoid issues on long term. No time right now for that ;)
          };
        }
        onChange({
          target: {
            name: `${name}Links`,
            type: "component",
            value: links
          }
        });
      } catch (err) {
        alert(
          formatMessage({
            id: "lexical.components.input.alert.links-failure",
            defaultMessage: "Failed to locate linked collection entries in the rich text. This may be due to a permission issue. Please contact your administrator or developer for assistance."
          })
        );
        console.error(err);
      }
    };
    const handleChangeCb = React__namespace.useCallback(
      lodash.debounce(
        async (newValue) => {
          await handleChange(newValue);
        },
        300,
        { maxWait: 1500 }
      ),
      [handleChange]
    );
    const initialConfig = React__namespace.useMemo(
      () => ({
        editorState: value && value.root && value.root.children.length ? JSON.stringify(value) : void 0,
        namespace: "Lexical",
        nodes: [...Nodes],
        onError: (error2) => {
          throw error2;
        },
        theme
      }),
      []
    );
    return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Field.Root, { name, id: name, error, hint, required, children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 1, children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Field.Label, { action: labelAction, children: label }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { children: /* @__PURE__ */ jsxRuntime.jsx(FlashMessageContext, { children: /* @__PURE__ */ jsxRuntime.jsx(LexicalComposer.LexicalComposer, { initialConfig, children: /* @__PURE__ */ jsxRuntime.jsx(TableContext, { children: /* @__PURE__ */ jsxRuntime.jsx(ToolbarContext, { children: /* @__PURE__ */ jsxRuntime.jsx(
        Editor,
        {
          onChange: handleChangeCb,
          ref,
          fieldName: name,
          expectedEditorState
        }
      ) }) }) }) }) }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Field.Hint, {}),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Field.Error, {})
    ] }) });
  }
);
const Input$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Input
}, Symbol.toStringTag, { value: "Module" }));
exports.$isEquationNode = $isEquationNode;
exports.$isImageNode = $isImageNode;
exports.$isInlineImageNode = $isInlineImageNode;
exports.$isPollNode = $isPollNode;
exports.$isStickyNode = $isStickyNode;
exports.$isStrapiImageNode = $isStrapiImageNode;
exports.Button = Button;
exports.CAN_USE_DOM = CAN_USE_DOM;
exports.DialogActions = DialogActions;
exports.EmojiNode = EmojiNode;
exports.EmojisPlugin = EmojisPlugin;
exports.Input = Input$1;
exports.KeywordNode = KeywordNode;
exports.KeywordsPlugin = KeywordsPlugin;
exports.LexicalContentEditable = LexicalContentEditable;
exports.LinkPlugin = LinkPlugin;
exports.NewMentionsPlugin = NewMentionsPlugin;
exports.TextInput = TextInput;
exports.createPollOption = createPollOption;
exports.joinClasses = joinClasses;
exports.theme = theme;
exports.useModal = useModal;
exports.useSharedHistoryContext = useSharedHistoryContext;
