// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIClient } from "@azure/arm-avs";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to rotate the vCenter password
 *
 * @summary rotate the vCenter password
 * x-ms-original-file: 2023-09-01/PrivateClouds_RotateVcenterPassword.json
 */
async function privateCloudsRotateVcenterPassword(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new AzureVMwareSolutionAPIClient(credential, subscriptionId);
  await client.privateClouds.rotateVcenterPassword("group1", "cloud1");
}

async function main(): Promise<void> {
  await privateCloudsRotateVcenterPassword();
}

main().catch(console.error);
