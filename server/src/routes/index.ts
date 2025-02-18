export default [
  {
    method: 'GET',
    path: '/search/:model/:field',
    handler: 'lexical.search',
    config: {
      auth: false, // Set to true if authentication is required
    },
  },
];
