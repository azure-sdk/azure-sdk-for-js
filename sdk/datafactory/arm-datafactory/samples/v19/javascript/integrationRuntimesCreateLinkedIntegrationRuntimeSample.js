/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { DataFactoryManagementClient } = require("@azure/arm-datafactory");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv/config");

/**
 * This sample demonstrates how to Create a linked integration runtime entry in a shared integration runtime.
 *
 * @summary Create a linked integration runtime entry in a shared integration runtime.
 * x-ms-original-file: specification/datafactory/resource-manager/Microsoft.DataFactory/stable/2018-06-01/examples/IntegrationRuntimes_CreateLinkedIntegrationRuntime.json
 */
async function integrationRuntimesCreateLinkedIntegrationRuntime() {
  const subscriptionId =
    process.env["DATAFACTORY_SUBSCRIPTION_ID"] || "12345678-1234-1234-1234-12345678abc";
  const resourceGroupName = process.env["DATAFACTORY_RESOURCE_GROUP"] || "exampleResourceGroup";
  const factoryName = "exampleFactoryName";
  const integrationRuntimeName = "exampleIntegrationRuntime";
  const createLinkedIntegrationRuntimeRequest = {
    name: "bfa92911-9fb6-4fbe-8f23-beae87bc1c83",
    dataFactoryLocation: "West US",
    dataFactoryName: "e9955d6d-56ea-4be3-841c-52a12c1a9981",
    subscriptionId: "061774c7-4b5a-4159-a55b-365581830283",
  };
  const credential = new DefaultAzureCredential();
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  const result = await client.integrationRuntimes.createLinkedIntegrationRuntime(
    resourceGroupName,
    factoryName,
    integrationRuntimeName,
    createLinkedIntegrationRuntimeRequest,
  );
  console.log(result);
}

async function main() {
  await integrationRuntimesCreateLinkedIntegrationRuntime();
}

main().catch(console.error);
