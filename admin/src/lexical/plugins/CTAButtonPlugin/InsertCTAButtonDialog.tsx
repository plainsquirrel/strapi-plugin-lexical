import { LexicalEditor } from 'lexical';
import { useState } from 'react';
import { useIntl } from 'react-intl';

import Button from '../../ui/Button';
import { DialogActions } from '../../ui/Dialog';
import DropDown, { DropDownItem } from '../../ui/DropDown';
import TextInput from '../../ui/TextInput';

import { CTAButtonPayload } from '../../nodes/CTAButtonNode';
import { INSERT_CTA_BUTTON_COMMAND } from './index';

export interface InsertCTAButtonDialogProps {
  activeEditor: LexicalEditor;
  onClose: () => void;
}

export function InsertCTAButtonDialog({
  activeEditor,
  onClose,
}: InsertCTAButtonDialogProps): JSX.Element {
  const { formatMessage } = useIntl();
  const [text, setText] = useState('');
  const [url, setUrl] = useState('');
  const [variant, setVariant] = useState<CTAButtonPayload['variant']>('primary');
  const [size, setSize] = useState<CTAButtonPayload['size']>('medium');

  const onClick = () => {
    if (text.trim() && url.trim()) {
      activeEditor.dispatchCommand(INSERT_CTA_BUTTON_COMMAND, {
        text: text.trim(),
        url: url.trim(),
        variant,
        size,
      });
      onClose();
    }
  };

  const isDisabled = !text.trim() || !url.trim();

  const variantOptions = [
    {
      value: 'primary',
      label: formatMessage({
        id: 'lexical.plugin.cta-button.variant.primary',
        defaultMessage: 'Primary',
      }),
    },
    {
      value: 'secondary',
      label: formatMessage({
        id: 'lexical.plugin.cta-button.variant.secondary',
        defaultMessage: 'Secondary',
      }),
    },
    {
      value: 'outline',
      label: formatMessage({
        id: 'lexical.plugin.cta-button.variant.outline',
        defaultMessage: 'Outline',
      }),
    },
  ];

  const sizeOptions = [
    {
      value: 'small',
      label: formatMessage({ id: 'lexical.plugin.cta-button.size.small', defaultMessage: 'Small' }),
    },
    {
      value: 'medium',
      label: formatMessage({
        id: 'lexical.plugin.cta-button.size.medium',
        defaultMessage: 'Medium',
      }),
    },
    {
      value: 'large',
      label: formatMessage({ id: 'lexical.plugin.cta-button.size.large', defaultMessage: 'Large' }),
    },
  ];

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
      <div style={{ display: 'flex', gap: '16px' }}>
        <div style={{ flex: 1 }}>
          <label className="Input__label">
            {formatMessage({
              id: 'lexical.plugin.cta-button.insert.variant.label',
              defaultMessage: 'Style',
            })}
          </label>
          <DropDown
            buttonClassName="toolbar-item"
            buttonLabel={variantOptions.find((opt) => opt.value === variant)?.label || 'Primary'}
            buttonAriaLabel="Select button style"
          >
            {variantOptions.map((option) => (
              <DropDownItem
                key={option.value}
                onClick={() => setVariant(option.value as CTAButtonPayload['variant'])}
                className={variant === option.value ? 'active' : ''}
              >
                {option.label}
              </DropDownItem>
            ))}
          </DropDown>
        </div>
        <div style={{ flex: 1 }}>
          <label className="Input__label">
            {formatMessage({
              id: 'lexical.plugin.cta-button.insert.size.label',
              defaultMessage: 'Size',
            })}
          </label>
          <DropDown
            buttonClassName="toolbar-item"
            buttonLabel={sizeOptions.find((opt) => opt.value === size)?.label || 'Medium'}
            buttonAriaLabel="Select button size"
          >
            {sizeOptions.map((option) => (
              <DropDownItem
                key={option.value}
                onClick={() => setSize(option.value as CTAButtonPayload['size'])}
                className={size === option.value ? 'active' : ''}
              >
                {option.label}
              </DropDownItem>
            ))}
          </DropDown>
        </div>
      </div>
      <DialogActions data-test-id="cta-button-modal-confirm-insert">
        <Button disabled={isDisabled} onClick={onClick}>
          {formatMessage({
            id: 'lexical.plugin.cta-button.insert.confirm',
            defaultMessage: 'Insert CTA Button',
          })}
        </Button>
      </DialogActions>
    </>
  );
}
