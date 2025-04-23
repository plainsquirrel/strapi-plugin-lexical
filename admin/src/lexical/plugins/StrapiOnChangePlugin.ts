import { EditorState, SerializedEditorState, SerializedLexicalNode } from 'lexical';
import { useEffect } from 'react';

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import equal from 'fast-deep-equal';

function StrapiOnChangePlugin({
  onChange,
  expectedEditorState,
}: {
  onChange: (editorState: EditorState) => void;
  expectedEditorState?: SerializedEditorState<SerializedLexicalNode>;
}) {
  const [editor] = useLexicalComposerContext();

  // Update strapi when lexical editor changes
  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      onChange(editorState);
    });
  }, [editor, onChange]);

  // Update lexical editor when strapi changes
  useEffect(() => {
    if (expectedEditorState && !equal(expectedEditorState, editor.getEditorState().toJSON())) {
      const parsedEditorState = editor.parseEditorState(expectedEditorState);
      editor.setEditorState(parsedEditorState);
    }
  }, [editor, expectedEditorState]);

  return null;
}

export default StrapiOnChangePlugin;
