// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { DataManagementClient } = require("@azure/arm-informaticadatamanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to get a InformaticaServerlessRuntimeResource
 *
 * @summary get a InformaticaServerlessRuntimeResource
 * x-ms-original-file: 2024-05-08/ServerlessRuntimes_Get_MaximumSet_Gen.json
 */
async function serverlessRuntimesGet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "3599DA28-E346-4D9F-811E-189C0445F0FE";
  const client = new DataManagementClient(credential, subscriptionId);
  const result = await client.serverlessRuntimes.get("rgopenapi", "e3Y", "48-");
  console.log(result);
}

/**
 * This sample demonstrates how to get a InformaticaServerlessRuntimeResource
 *
 * @summary get a InformaticaServerlessRuntimeResource
 * x-ms-original-file: 2024-05-08/ServerlessRuntimes_Get_MinimumSet_Gen.json
 */
async function serverlessRuntimesGetMin() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "3599DA28-E346-4D9F-811E-189C0445F0FE";
  const client = new DataManagementClient(credential, subscriptionId);
  const result = await client.serverlessRuntimes.get("rgopenapi", "YC", "___");
  console.log(result);
}

async function main() {
  await serverlessRuntimesGet();
  await serverlessRuntimesGetMin();
}

main().catch(console.error);
