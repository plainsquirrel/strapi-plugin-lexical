import * as React from 'react';

import { Field, Flex } from '@strapi/design-system';
import { useFetchClient } from '@strapi/strapi/admin';
import { debounce } from 'lodash';
import { MessageDescriptor } from 'react-intl';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { SerializedEditorState, SerializedElementNode, SerializedLexicalNode } from 'lexical';

import LexicalEditor from '../lexical/Editor';
import { FlashMessageContext } from '../lexical/context/FlashMessageContext';
import { TableContext } from '../lexical/plugins/TablePlugin';
import { ToolbarContext } from '../lexical/context/ToolbarContext';
import PlaygroundEditorTheme from '../lexical/themes/PlaygroundEditorTheme';

import Nodes from '../lexical/nodes';

import { createGlobalStyle } from 'styled-components';
import { InputProps } from '@strapi/strapi/admin';
import { SerializedStrapiImageNode } from 'src/lexical/nodes/StrapiImageNode';
import { SerializedLinkNode } from '@lexical/link';

const GlobalStyleVariables = createGlobalStyle`
    :root {
        /* colors */
        --lexical-border: ${({ theme }) => theme.colors.neutral150};
        --lexical-text: ${({ theme }) => theme.colors.neutral0};
        --lexical-bg: ${({ theme }) => theme.colors.neutral800};
    }
`;
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

const Input = React.forwardRef<HTMLDivElement, CustomFieldsComponentProps & InputProps>(
  (props, ref) => {
    const { attribute, name, onChange, required, value, error, hint, labelAction, label } = props;

    const { get } = useFetchClient();

    const handleChange = async (newValue: SerializedEditorState<SerializedLexicalNode>) => {
      // Avoid unnessecary draft/modified status of entry
      if (JSON.stringify(value) === JSON.stringify(newValue)) {
        return;
      }

      // Set value for lexical editor
      onChange({
        target: { name, type: attribute.type, value: newValue },
      });

      const mediaNodes = ['strapiImage'];
      const linkNodes = ['link'];

      const mediaDocumentsIds: Set<string> = new Set();
      const collectionLinks: Map<string, Set<string>> = new Map();
      const gatherStrapiRelations = (nodes: SerializedElementNode[]) => {
        for (const node of nodes) {
          if (mediaNodes.includes(node.type)) {
            const imageNode = node as unknown as SerializedStrapiImageNode;
            mediaDocumentsIds.add(imageNode.documentId);
          }

          if (linkNodes.includes(node.type)) {
            const linkNode = node as unknown as SerializedLinkNode;
            const [collectionName, documentId] = linkNode.url.replace('strapi://', '').split('/');
            const currentLinksSet: Set<string> = collectionLinks.get(collectionName) || new Set();
            currentLinksSet.add(documentId);
            collectionLinks.set(collectionName, currentLinksSet);
          }

          if (node.children) {
            gatherStrapiRelations(node.children as SerializedElementNode[]);
          }
        }
      };

      gatherStrapiRelations(newValue.root.children as SerializedElementNode[]);

      const dynamicZoneValue = [];
      let keyCounter = 0;

      if (mediaDocumentsIds.size > 0) {
        try {
          const resultFetchClient = await get(`/upload/files`, {
            params: {
              filters: {
                documentId: {
                  $in: [...mediaDocumentsIds.values()],
                },
              },
            },
          });

          dynamicZoneValue.push({
            __component: 'lexical-links.media',
            __temp_key__: `l${keyCounter}`,
            links: resultFetchClient.data.results,
          });
          keyCounter++;
        } catch (err) {
          alert(
            'Failed to locate media used in the rich text. This may be due to a permission issue. Please contact your administrator or developer for assistance.'
          );
          console.error(err);
        }
      }

      try {
        for (const [collectionName, documentIds] of collectionLinks.entries()) {
          const resultIdentify = await get(`/lexical/identify/${collectionName}`);
          const resultFetchClient = await get(
            `/content-manager/collection-types/${resultIdentify.data.collectionUID}`,
            {
              params: {
                filters: {
                  documentId: {
                    $in: [...documentIds.values()],
                  },
                },
              },
            }
          );

          dynamicZoneValue.push({
            __component: `lexical-links.${collectionName}`,
            __temp_key__: `l${keyCounter}`,
            links: {
              connect: resultFetchClient.data.results.map(
                (result: { id: number; documentId: string; [key: string]: unknown }) => ({
                  apiData: result,
                  label: result['name'] || result['title'] || result['label'] || result['headline'],
                  id: result.id,
                  status: result.status,
                  href: `/content-manager/collection-types/${resultIdentify.data.collectionUID}/${result.documentId}`,
                })
              ),
              // @todo we probably have to maintain disconnect array as well to avoid issues on long term. No time right now for that ;)
            },
          });
          keyCounter++;
        }
      } catch (err) {
        alert(
          'Failed to locate linked collection entries in the rich text. This may be due to a permission issue. Please contact your administrator or developer for assistance.'
        );
        console.error(err);
      }

      // Set value for dynamic zone field
      onChange({
        target: {
          name: `${name}Links`,
          type: 'dynamiczone',
          value: dynamicZoneValue,
        },
      });
    };

    const handleChangeCb = React.useCallback(
      debounce(
        async (newValue: SerializedEditorState<SerializedLexicalNode>) => {
          await handleChange(newValue);
        },
        300,
        { maxWait: 1500 }
      ),
      [handleChange]
    );

    const initialConfig = React.useMemo(
      () => ({
        editorState: value && value.root ? JSON.stringify(value) : null,
        namespace: 'Lexical',
        nodes: [...Nodes],
        onError: (error: Error) => {
          throw error;
        },
        theme: PlaygroundEditorTheme,
      }),
      []
    );

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
                    <LexicalEditor onChange={handleChangeCb} ref={ref} fieldName={name} />
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
  }
);

export default Input;
