import { LexicalEditor } from 'lexical';
import { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { $getNodeByKey } from 'lexical';

import Button from '../../ui/Button';
import { DialogActions } from '../../ui/Dialog';
import TextInput from '../../ui/TextInput';
import SimpleColorPicker from '../../ui/SimpleColorPicker';

import { CTAButtonPayload, $isCTAButtonNode } from '../../nodes/CTAButtonNode';
import { INSERT_CTA_BUTTON_COMMAND } from './index';

export interface InsertCTAButtonDialogProps {
  activeEditor: LexicalEditor;
  onClose: () => void;
  initialData?: {
    nodeKey?: string;
    text: string;
    subText?: string;
    url: string;
    color: string;
  };
}

export function InsertCTAButtonDialog({
  activeEditor,
  onClose,
  initialData,
}: InsertCTAButtonDialogProps): JSX.Element {
  const { formatMessage } = useIntl();
  const [text, setText] = useState(initialData?.text || '');
  const [subText, setSubText] = useState(initialData?.subText || '');
  const [url, setUrl] = useState(initialData?.url || '');
  const [color, setColor] = useState(initialData?.color || '#3b82f6');

  const onClick = () => {
    if (text.trim() && url.trim()) {
      if (initialData?.nodeKey) {
        // Edit existing button
        activeEditor.update(() => {
          const node = $getNodeByKey(initialData.nodeKey);
          if (node && $isCTAButtonNode(node)) {
            node.setTextContent(text.trim());
            node.setSubText(subText.trim() || undefined);
            node.setURL(url.trim());
            node.setColor(color);
          }
        });
      } else {
        // Create new button
        activeEditor.dispatchCommand(INSERT_CTA_BUTTON_COMMAND, {
          text: text.trim(),
          subText: subText.trim() || undefined,
          url: url.trim(),
          color,
        });
      }
      onClose();
    }
  };

  const isDisabled = !text.trim() || !url.trim();

  return (
    <>
      <TextInput
        label={formatMessage({
          id: 'lexical.plugin.cta-button.insert.text.label',
          defaultMessage: 'Button Text',
        })}
        placeholder={formatMessage({
          id: 'lexical.plugin.cta-button.insert.text.placeholder',
          defaultMessage: 'Enter button text...',
        })}
        value={text}
        onChange={setText}
        data-test-id="cta-button-text"
      />
      <TextInput
        label={formatMessage({
          id: 'lexical.plugin.cta-button.insert.subtext.label',
          defaultMessage: 'Sub Text (Optional)',
        })}
        placeholder={formatMessage({
          id: 'lexical.plugin.cta-button.insert.subtext.placeholder',
          defaultMessage: 'Enter sub text...',
        })}
        value={subText}
        onChange={setSubText}
        data-test-id="cta-button-subtext"
      />
      <TextInput
        label={formatMessage({
          id: 'lexical.plugin.cta-button.insert.url.label',
          defaultMessage: 'URL',
        })}
        placeholder={formatMessage({
          id: 'lexical.plugin.cta-button.insert.url.placeholder',
          defaultMessage: 'https://example.com',
        })}
        value={url}
        onChange={setUrl}
        data-test-id="cta-button-url"
      />
      <div style={{ marginBottom: '16px' }}>
        <SimpleColorPicker
          color={color}
          onChange={setColor}
          label={formatMessage({
            id: 'lexical.plugin.cta-button.insert.color.label',
            defaultMessage: 'Button Color',
          })}
        />
      </div>
      <DialogActions data-test-id="cta-button-modal-confirm-insert">
        <Button disabled={isDisabled} onClick={onClick}>
          {formatMessage({
            id: initialData?.nodeKey
              ? 'lexical.plugin.cta-button.update.confirm'
              : 'lexical.plugin.cta-button.insert.confirm',
            defaultMessage: initialData?.nodeKey ? 'Update CTA Button' : 'Insert CTA Button',
          })}
        </Button>
      </DialogActions>
    </>
  );
}
