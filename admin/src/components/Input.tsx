import * as React from "react";

import {
  Field,
  Flex
} from '@strapi/design-system';
import { unstable_useContentManagerContext as useContentManagerContext, useStrapiApp, useFetchClient } from '@strapi/strapi/admin';

import { MessageDescriptor } from "react-intl";

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { LexicalNode, SerializedEditorState, SerializedElementNode, SerializedLexicalNode } from "lexical";

import LexicalEditor from "../lexical/Editor";
import { FlashMessageContext } from '../lexical/context/FlashMessageContext';
import { TableContext } from '../lexical/plugins/TablePlugin';
import { ToolbarContext } from '../lexical/context/ToolbarContext';
import PlaygroundEditorTheme from '../lexical/themes/PlaygroundEditorTheme';

import Nodes from "../lexical/nodes";


import { createGlobalStyle } from 'styled-components';
import { InputProps } from "@strapi/strapi/admin";
import { SerializedStrapiImageNode, StrapiImageNode } from "src/lexical/nodes/StrapiImageNode";


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
  const { attribute, disabled, name, onChange, required, value, error, hint, labelAction, label, ...rest } =
    props;

  const { get } = useFetchClient()

  const handleChange = async (newValue: SerializedEditorState<SerializedLexicalNode>) => {
    // @todo add throtteling
    // Set value for lexical editor
    onChange({
      target: { name, type: attribute.type, value: newValue },
    });

    // @todo make sure to run all of this link parsing and setting logic only when the field is available
    // @todo make real map
    const linkComponentsLookupMap = {
      strapiImage: "lexical-links.media"
    }

    // @todo make set
    const mediaDocumentsIds: string[] = []
    const gatherStrapiImages = (nodes: SerializedElementNode[]) => {
      for (const node of nodes) {
        if (Object.keys(linkComponentsLookupMap).includes(node.type)) {
          const imageNode = node as unknown as SerializedStrapiImageNode
          mediaDocumentsIds.push(imageNode.documentId)
        }

        if (node.children) {
          gatherStrapiImages(node.children as SerializedElementNode[])
        }
      }
    }

    gatherStrapiImages(newValue.root.children as SerializedElementNode[])

    const dynamicZoneValue = []

    if (mediaDocumentsIds.length > 0) {
      const resultFetchClient = await get(`/upload/files`, {
        params: {
          filters: {
            documentId: {
              $in: mediaDocumentsIds,
            },
          }
        }
      });

      dynamicZoneValue.push({
        __component: 'lexical-links.media',
        links: resultFetchClient.data.results
      },)
    }

    // Set value for dynamic zone field
    onChange({
      target: {
        name: `${name}Links`, type: "dynamiczone", value: dynamicZoneValue
      },
    });
  };

  const initialConfig = React.useMemo(() => ({
    editorState: value && value.root ? JSON.stringify(value) : null,
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