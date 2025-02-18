import * as React from "react";
import { useIntl } from "react-intl";

import {
  Field,
  Modal,
  Button,
  TextInput,
  Tabs,
  Box,
  Typography,
  Table,
  Tbody,
  Td,
  Tr
} from '@strapi/design-system';

import { unstable_useContentManagerContext as useContentManagerContext, useFetchClient } from '@strapi/strapi/admin';

const LinkModal = ({ fieldName }: { fieldName: string }) => {

  const { locale } = useIntl()

  const { get } = useFetchClient()

  const { model } = useContentManagerContext();

  const [linkModalOpen, setLinkModalOpen] = React.useState(true)


  const [searchResults, setSearchResults] = React.useState<any>(null)

  const handleSearch = React.useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const resultSearchLinkables = await get(`/lexical/search/${model}/${fieldName}?q=${e.target.value.trim()}&locale=${locale}`);
    setSearchResults(resultSearchLinkables.data)
  }, [])


  return <Modal.Root open={linkModalOpen} onOpenChange={setLinkModalOpen} >
    <Modal.Content>
      <Modal.Header>
        <Modal.Title>Link Content</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs.Root defaultValue="internal">
          <Tabs.List aria-label="Do you want to link internal or external content?">
            <Tabs.Trigger value="internal">Internal Link</Tabs.Trigger>
            <Tabs.Trigger value="external">External Link</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="internal">
            <Box padding={4}>
              {/* <Typography tag="p">The default settings for your attribute</Typography> */}
              <Field.Root>
                <Field.Label>Search within Strapi</Field.Label>
                <TextInput
                  placeholder="Search..."
                  size="M"
                  type="search"
                  onChange={handleSearch}
                />
              </Field.Root>
              {
                searchResults && Object.keys(searchResults).map((collectionUID) => <div key={collectionUID}>
                  <Typography textColor="neutral800">{collectionUID.split('.')[1]}</Typography>
                  <Table colCount={2} rowCount={searchResults[collectionUID].length}>
                    <Tbody>
                      {searchResults[collectionUID].map((result: { documentId: string; id: number; label: string }) =>
                        <Tr key={result.documentId}>
                          <Td>{result.label} ({result.id})</Td>
                          <Td><Button onClick={() => alert(`@todo now let set the link node to strapi://${result.documentId}`)}>Link</Button></Td>
                        </Tr>)}
                    </Tbody>
                  </Table>
                </div>)
              }
            </Box>
          </Tabs.Content>
          <Tabs.Content value="external">
            <Box padding={4}>
              <TextInput
                placeholder="Enter external URL..."
                size="M"
                type="url"
              />
              <Button>Set Link</Button>
            </Box>
          </Tabs.Content>
        </Tabs.Root>
      </Modal.Body>
    </Modal.Content>
  </Modal.Root>
}

export default LinkModal