import * as React from "react";

import {
  Field,
  Flex
} from '@strapi/design-system';

import { useIntl, MessageDescriptor } from "react-intl";

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { SerializedEditorState, SerializedLexicalNode } from "lexical";

import LexicalEditor from "../lexical/Editor";
import { FlashMessageContext } from '../lexical/context/FlashMessageContext';
import { TableContext } from '../lexical/plugins/TablePlugin';
import { ToolbarContext } from '../lexical/context/ToolbarContext';
import PlaygroundEditorTheme from '../lexical/themes/PlaygroundEditorTheme';

import Nodes from "../lexical/nodes";


import { createGlobalStyle, css } from 'styled-components';
import { InputProps } from "@strapi/strapi/admin";


const GlobalStyleVariables = createGlobalStyle`
    :root {
        /* colors */
        --lexical-border: ${({ theme }) => theme.colors.neutral150};
        --lexical-text: ${({ theme }) => theme.colors.neutral0};
        --lexical-bg: ${({ theme }) => theme.colors.neutral800};
    }
`
interface CustomFieldsComponentProps {
  attribute: {
    type: string;
    customField: string;
  };
  description: MessageDescriptor;
  placeholder: MessageDescriptor;
  onChange: (event: { target: { name: string; value: unknown; type: string } }) => void;
  value: SerializedEditorState<SerializedLexicalNode>;
  error: MessageDescriptor;
}

const Input = React.forwardRef<HTMLDivElement, CustomFieldsComponentProps & InputProps>((props, ref) => {
  const { attribute, disabled, name, onChange, required, value, error, hint, labelAction, label } =
    props;

  const handleChange = (newValue: SerializedEditorState<SerializedLexicalNode>) => {
    onChange({
      target: { name, type: attribute.type, value: newValue },
    });
  };

  const initialConfig = React.useMemo(() => ({
    editorState: value ? JSON.stringify(value) : null,
    namespace: 'Lexical',
    nodes: [...Nodes],
    onError: (error: Error) => {
      throw error;
    },
    theme: PlaygroundEditorTheme,
  }), []);

  return (
    <Field.Root name={name} id={name} error={error} hint={hint} required={required}>
      <Flex direction="column" alignItems="stretch" gap={1}>
        <Field.Label action={labelAction}>{label}</Field.Label>
        <div>
          <GlobalStyleVariables />
          <FlashMessageContext>
            <LexicalComposer initialConfig={initialConfig}>
              <TableContext>
                <ToolbarContext>
                  <LexicalEditor onChange={handleChange} ref={ref} />
                </ToolbarContext>
              </TableContext>
            </LexicalComposer>
          </FlashMessageContext>
        </div>
        <Field.Hint />
        <Field.Error />
      </Flex>
    </Field.Root>
  );
});

export default Input;