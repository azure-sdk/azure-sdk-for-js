// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DataManagementClient } from "@azure/arm-informaticadatamanagement";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets all serverless runtime resources in a given informatica organization resource.
 *
 * @summary gets all serverless runtime resources in a given informatica organization resource.
 * x-ms-original-file: 2024-05-08/Organizations_GetAllServerlessRuntimes_MaximumSet_Gen.json
 */
async function organizationsGetAllServerlessRuntimes(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "3599DA28-E346-4D9F-811E-189C0445F0FE";
  const client = new DataManagementClient(credential, subscriptionId);
  const result = await client.organizations.getAllServerlessRuntimes("rgopenapi", "t");
  console.log(result);
}

/**
 * This sample demonstrates how to gets all serverless runtime resources in a given informatica organization resource.
 *
 * @summary gets all serverless runtime resources in a given informatica organization resource.
 * x-ms-original-file: 2024-05-08/Organizations_GetAllServerlessRuntimes_MinimumSet_Gen.json
 */
async function organizationsGetAllServerlessRuntimesMin(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "3599DA28-E346-4D9F-811E-189C0445F0FE";
  const client = new DataManagementClient(credential, subscriptionId);
  const result = await client.organizations.getAllServerlessRuntimes("rgopenapi", "0");
  console.log(result);
}

async function main(): Promise<void> {
  await organizationsGetAllServerlessRuntimes();
  await organizationsGetAllServerlessRuntimesMin();
}

main().catch(console.error);
