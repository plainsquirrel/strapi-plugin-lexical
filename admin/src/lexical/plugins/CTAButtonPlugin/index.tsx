import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $insertNodeToNearestRoot } from '@lexical/utils';
import { COMMAND_PRIORITY_EDITOR, createCommand, LexicalCommand } from 'lexical';
import { useEffect, useState } from 'react';

import { $createCTAButtonNode, CTAButtonNode, CTAButtonPayload } from '../../nodes/CTAButtonNode';
import useModal from '../../hooks/useModal';
import { InsertCTAButtonDialog } from './InsertCTAButtonDialog';

export const INSERT_CTA_BUTTON_COMMAND: LexicalCommand<CTAButtonPayload> = createCommand(
  'INSERT_CTA_BUTTON_COMMAND'
);

export default function CTAButtonPlugin(): JSX.Element | null {
  const [editor] = useLexicalComposerContext();
  const [modal, showModal] = useModal();

  useEffect(() => {
    if (!editor.hasNodes([CTAButtonNode])) {
      throw new Error('CTAButtonPlugin: CTAButtonNode not registered on editor');
    }

    const handleEditCTAButton = (event: CustomEvent) => {
      const { nodeKey, text, subText, url, color } = event.detail;
      showModal('Edit CTA Button', (onClose) => (
        <InsertCTAButtonDialog
          activeEditor={editor}
          onClose={onClose}
          initialData={{ nodeKey, text, subText, url, color }}
        />
      ));
    };

    window.addEventListener('editCTAButton', handleEditCTAButton as EventListener);

    const unregisterCommand = editor.registerCommand<CTAButtonPayload>(
      INSERT_CTA_BUTTON_COMMAND,
      (payload) => {
        const ctaButtonNode = $createCTAButtonNode(payload);
        $insertNodeToNearestRoot(ctaButtonNode);
        return true;
      },
      COMMAND_PRIORITY_EDITOR
    );

    return () => {
      window.removeEventListener('editCTAButton', handleEditCTAButton as EventListener);
      unregisterCommand();
    };
  }, [editor, showModal]);

  return <>{modal}</>;
}
