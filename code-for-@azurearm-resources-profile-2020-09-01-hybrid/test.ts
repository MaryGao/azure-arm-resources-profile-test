import { DefaultAzureCredential } from "@azure/identity";
import { ResourceManagementClient } from "@azure/arm-resources-profile-2020-09-01-hybrid";

const subscriptionId = process.env.SUBSCRIPTION_ID || '';
const credential = new DefaultAzureCredential();
const resourceGroup = "myjstest12";
const location = "eastus";
const client = new ResourceManagementClient(credential, subscriptionId);

async function test() {
  const result = await client.resourceGroups.createOrUpdate(
    resourceGroup,
    { location }
  );
  console.log(result);
}

test();