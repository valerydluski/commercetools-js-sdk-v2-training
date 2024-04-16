const {
  createClient,
  createHttpClient,
  createAuthForClientCredentialsFlow,
  createAuthForPasswordFlow,
} = require('@commercetools/sdk-client-v2');
const { createApiBuilderFromCtpClient } = require('@commercetools/platform-sdk');

const {
  createApiBuilderFromCtpClient: createApiBuilderFromCtpClientOnlyForImports,
} = require('@commercetools/importapi-sdk');
require('dotenv').config();

const fetch = require('node-fetch');

const projectKey = process.env.CTP_PROJECT_KEY;

const getClient = () => {
  const authMiddleWare = createAuthForClientCredentialsFlow({
    host: process.env.CTP_AUTH_URL,
    projectKey: process.env.CTP_PROJECT_KEY,
    credentials: {
      clientId: process.env.CTP_CLIENT_ID,
      clientSecret: process.env.CTP_CLIENT_SECRET,
    },
    fetch,
  });
  const httpMiddleWare = createHttpClient({
    host: process.env.CTP_API_URL,
    fetch,
  });

  const client = createClient({
    middlewares: [authMiddleWare, httpMiddleWare],
  });

  return client;
};

const getImportClient = () => {};

const getStoreClient = () => {};

const getMLClient = () => {};

module.exports.apiRoot = createApiBuilderFromCtpClient(getClient());

// module.exports.importApiRoot = createApiBuilderFromCtpClientOnlyForImports(
//   getImportClient()
// );

// module.exports.storeApiRoot = createApiBuilderFromCtpClient(getStoreClient());

// module.exports.myApiRoot = createApiBuilderFromCtpClient(getMyAPIClient());
module.exports.projectKey = projectKey;
