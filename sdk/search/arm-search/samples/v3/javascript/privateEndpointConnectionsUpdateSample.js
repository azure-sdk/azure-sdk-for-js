/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

const { SearchManagementClient } = require("@azure/arm-search");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv/config");

/**
 * This sample demonstrates how to Updates a private endpoint connection to the search service in the given resource group.
 *
 * @summary Updates a private endpoint connection to the search service in the given resource group.
 * x-ms-original-file: specification/search/resource-manager/Microsoft.Search/stable/2025-05-01/examples/UpdatePrivateEndpointConnection.json
 */
async function privateEndpointConnectionUpdate() {
  const subscriptionId = process.env["SEARCH_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["SEARCH_RESOURCE_GROUP"] || "rg1";
  const searchServiceName = "mysearchservice";
  const privateEndpointConnectionName = "testEndpoint.50bf4fbe-d7c1-4b48-a642-4f5892642546";
  const privateEndpointConnection = {
    properties: {
      privateLinkServiceConnectionState: {
        description: "Rejected for some reason.",
        status: "Rejected",
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new SearchManagementClient(credential, subscriptionId);
  const result = await client.privateEndpointConnections.update(
    resourceGroupName,
    searchServiceName,
    privateEndpointConnectionName,
    privateEndpointConnection,
  );
  console.log(result);
}

async function main() {
  await privateEndpointConnectionUpdate();
}

main().catch(console.error);
