import { ResourceManagementClient } from "@azure/arm-resources-profile-hybrid-2019-03-01";
import * as msRest from "@azure/ms-rest-js";

const credentials = new msRest.TokenCredentials(process.env.TOKEN || '');
const subscriptionId = process.env.SUBSCRIPTION_ID || ''; //run npm i --save-dev @types/node
const resourceGroup = "myjstest1";
const location = "eastus";
const client = new ResourceManagementClient(credentials, subscriptionId);

async function test() {
  const result = await client.resourceGroups.createOrUpdate(
    resourceGroup,
    { location }
  );
  console.log(result);
}

test();