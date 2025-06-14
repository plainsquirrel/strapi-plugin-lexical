import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $insertNodeToNearestRoot } from '@lexical/utils';
import { COMMAND_PRIORITY_EDITOR, createCommand, LexicalCommand } from 'lexical';
import { useEffect } from 'react';

import { $createCTAButtonNode, CTAButtonNode, CTAButtonPayload } from '../../nodes/CTAButtonNode';

export const INSERT_CTA_BUTTON_COMMAND: LexicalCommand<CTAButtonPayload> = createCommand(
  'INSERT_CTA_BUTTON_COMMAND'
);

export default function CTAButtonPlugin(): JSX.Element | null {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (!editor.hasNodes([CTAButtonNode])) {
      throw new Error('CTAButtonPlugin: CTAButtonNode not registered on editor');
    }

    return editor.registerCommand<CTAButtonPayload>(
      INSERT_CTA_BUTTON_COMMAND,
      (payload) => {
        const ctaButtonNode = $createCTAButtonNode(payload);
        $insertNodeToNearestRoot(ctaButtonNode);
        return true;
      },
      COMMAND_PRIORITY_EDITOR
    );
  }, [editor]);

  return null;
}
