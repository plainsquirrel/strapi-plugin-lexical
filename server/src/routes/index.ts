export default [
  {
    method: 'GET',
    path: '/search/:model/:field',
    handler: 'lexicalSearch.search',
    config: {
      auth: false, // Set to true if authentication is required
    },
  },
  {
    method: 'GET',
    path: '/get/:collectionName/:documentId',
    handler: 'lexicalSearch.get',
    config: {
      auth: false, // Set to true if authentication is required
    },
  },
  {
    method: 'GET',
    path: '/identify/:collectionName',
    handler: 'lexicalSearch.identify',
    config: {
      auth: false, // Set to true if authentication is required
    },
  },
];
