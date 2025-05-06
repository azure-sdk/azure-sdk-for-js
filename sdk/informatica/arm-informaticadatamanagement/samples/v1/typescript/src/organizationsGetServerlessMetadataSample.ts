// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DataManagementClient } from "@azure/arm-informaticadatamanagement";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets Metadata of the serverless runtime environment.
 *
 * @summary gets Metadata of the serverless runtime environment.
 * x-ms-original-file: 2024-05-08/Organizations_GetServerlessMetadata_MaximumSet_Gen.json
 */
async function organizationsGetServerlessMetadata(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "3599DA28-E346-4D9F-811E-189C0445F0FE";
  const client = new DataManagementClient(credential, subscriptionId);
  const result = await client.organizations.getServerlessMetadata("rgopenapi", "3_UC");
  console.log(result);
}

/**
 * This sample demonstrates how to gets Metadata of the serverless runtime environment.
 *
 * @summary gets Metadata of the serverless runtime environment.
 * x-ms-original-file: 2024-05-08/Organizations_GetServerlessMetadata_MinimumSet_Gen.json
 */
async function organizationsGetServerlessMetadataMin(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "3599DA28-E346-4D9F-811E-189C0445F0FE";
  const client = new DataManagementClient(credential, subscriptionId);
  const result = await client.organizations.getServerlessMetadata("rgopenapi", "A");
  console.log(result);
}

async function main(): Promise<void> {
  await organizationsGetServerlessMetadata();
  await organizationsGetServerlessMetadataMin();
}

main().catch(console.error);
