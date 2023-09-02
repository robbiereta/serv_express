// in src/admin/index.tsx
import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

var OpenapiJsClient = require('openapi-js-client');

var defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix['Authorization'] = "Token"

var api = new OpenapiJsClient.DefaultApi()
var opts = {
  'all': "all_example" // {String} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.all(opts, callback);



const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={ListGuesser} />
    <Resource name="comments" list={ListGuesser} />
  </Admin>
);

export default App;