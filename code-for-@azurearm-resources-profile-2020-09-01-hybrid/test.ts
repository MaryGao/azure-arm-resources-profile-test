import { AzureAuthorityHosts, DefaultAzureCredential } from "@azure/identity";
import { ResourceManagementClient } from "@azure/arm-resources-profile-2020-09-01-hybrid";

const subscriptionId = process.env.SUBSCRIPTION_ID || '';
// Read the link for more information about ClientSecretCredential - https://github.com/Azure/azure-sdk-for-js/blob/main/documentation/MIGRATION-guide-for-next-generation-management-libraries.md#authentication

// const credentials = new ClientSecretCredential(tenantId, clientId, clientSecrat);
const resourceGroup = "myjstest12";
const location = "eastus";

const endpoint = "https://management.usgovcloudapi.net";
const credential = new DefaultAzureCredential({authorityHost: AzureAuthorityHosts.AzureGovernment});
const client = new ResourceManagementClient(credential, subscriptionId, {
  credentialScopes: [`"${endpoint}/.default`],
});

async function test() {
  const result = await client.resourceGroups.createOrUpdate(
    resourceGroup,
    { location }
  );
  console.log(result);
}

test();
