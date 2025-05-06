// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIClient } from "@azure/arm-avs";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list the admin credentials for the private cloud
 *
 * @summary list the admin credentials for the private cloud
 * x-ms-original-file: 2023-09-01/PrivateClouds_ListAdminCredentials.json
 */
async function privateCloudsListAdminCredentials(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new AzureVMwareSolutionAPIClient(credential, subscriptionId);
  const result = await client.privateClouds.listAdminCredentials("group1", "cloud1");
  console.log(result);
}

async function main(): Promise<void> {
  await privateCloudsListAdminCredentials();
}

main().catch(console.error);
