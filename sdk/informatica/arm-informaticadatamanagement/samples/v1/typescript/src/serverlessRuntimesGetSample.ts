// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DataManagementClient } from "@azure/arm-informaticadatamanagement";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get a InformaticaServerlessRuntimeResource
 *
 * @summary get a InformaticaServerlessRuntimeResource
 * x-ms-original-file: 2024-05-08/ServerlessRuntimes_Get_MaximumSet_Gen.json
 */
async function serverlessRuntimesGet(): Promise<void> {
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
async function serverlessRuntimesGetMin(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "3599DA28-E346-4D9F-811E-189C0445F0FE";
  const client = new DataManagementClient(credential, subscriptionId);
  const result = await client.serverlessRuntimes.get("rgopenapi", "YC", "___");
  console.log(result);
}

async function main(): Promise<void> {
  await serverlessRuntimesGet();
  await serverlessRuntimesGetMin();
}

main().catch(console.error);
