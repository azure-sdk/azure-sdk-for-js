// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIClient } from "@azure/arm-avs";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create a PrivateCloud
 *
 * @summary create a PrivateCloud
 * x-ms-original-file: 2023-09-01/PrivateClouds_CreateOrUpdate.json
 */
async function privateCloudsCreateOrUpdate(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new AzureVMwareSolutionAPIClient(credential, subscriptionId);
  const result = await client.privateClouds.createOrUpdate("group1", "cloud1");
  console.log(result);
}

/**
 * This sample demonstrates how to create a PrivateCloud
 *
 * @summary create a PrivateCloud
 * x-ms-original-file: 2023-09-01/PrivateClouds_CreateOrUpdate_Stretched.json
 */
async function privateCloudsCreateOrUpdateStretched(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new AzureVMwareSolutionAPIClient(credential, subscriptionId);
  const result = await client.privateClouds.createOrUpdate("group1", "cloud1");
  console.log(result);
}

async function main(): Promise<void> {
  await privateCloudsCreateOrUpdate();
  await privateCloudsCreateOrUpdateStretched();
}

main().catch(console.error);
