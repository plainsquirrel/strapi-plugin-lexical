import * as React from "react";

import {
  Field,
  Flex} from '@strapi/design-system';
import { useFetchClient } from '@strapi/strapi/admin';

import { MessageDescriptor } from "react-intl";

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { SerializedEditorState, SerializedElementNode, SerializedLexicalNode } from "lexical";

import LexicalEditor from "../lexical/Editor";
import { FlashMessageContext } from '../lexical/context/FlashMessageContext';
import { TableContext } from '../lexical/plugins/TablePlugin';
import { ToolbarContext } from '../lexical/context/ToolbarContext';
import PlaygroundEditorTheme from '../lexical/themes/PlaygroundEditorTheme';

import Nodes from "../lexical/nodes";

import { createGlobalStyle } from 'styled-components';
import { InputProps } from "@strapi/strapi/admin";
import { SerializedStrapiImageNode } from "src/lexical/nodes/StrapiImageNode";
import { SerializedLinkNode } from "@lexical/link";

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

    const mediaNodes = ["strapiImage"]
    const linkNodes = ["link"]

    const mediaDocumentsIds: string[] = []
    const collectionLinks: Map<string, string[]>= new Map()
    const gatherStrapiRelations = (nodes: SerializedElementNode[]) => {
      for (const node of nodes) {
        if (mediaNodes.includes(node.type)) {
          const imageNode = node as unknown as SerializedStrapiImageNode
          mediaDocumentsIds.push(imageNode.documentId)
        }

        if (linkNodes.includes(node.type)) {
          const linkNode = node as unknown as SerializedLinkNode
          const [collectionName, documentId] = linkNode.url.replace("strapi://", "").split("/")
          const currentLinks = collectionLinks.get(collectionName) || []
          currentLinks.push(documentId)
          collectionLinks.set(collectionName, currentLinks)
        }

        if (node.children) {
          gatherStrapiRelations(node.children as SerializedElementNode[])
        }
      }
    }

    gatherStrapiRelations(newValue.root.children as SerializedElementNode[])

    console.dir({mediaDocumentsIds, collectionLinks})

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

    for (const [collectionName, documentIds] of collectionLinks.entries()) {
      const resultFetchClient = await get(`/api/${collectionName}`, {
        params: {
          filters: {
            documentId: {
              $in: documentIds,
            },
          }
        }
      });

      dynamicZoneValue.push({
        __component: `lexical-links.${collectionName}`,
        links: resultFetchClient.data.results
      },)
    }

    console.dir({dynamicZoneValue})

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
    <Field.Root name={name} id={name} error={error as string} hint={hint} required={required}>
      <Flex direction="column" alignItems="stretch" gap={1}>
        <Field.Label action={labelAction}>{label}</Field.Label>
        <div>
          <GlobalStyleVariables />
          <FlashMessageContext>
            <LexicalComposer initialConfig={initialConfig}>
              <TableContext>
                <ToolbarContext>
                  <LexicalEditor onChange={handleChange} ref={ref} fieldName={name} />
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