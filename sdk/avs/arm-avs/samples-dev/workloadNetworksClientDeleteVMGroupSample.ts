// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Client } from "@azure/arm-avs";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to delete a WorkloadNetworkVMGroup
 *
 * @summary delete a WorkloadNetworkVMGroup
 * x-ms-original-file: 2024-09-01/WorkloadNetworks_DeleteVMGroup.json
 */
async function workloadNetworksDeleteVMGroup(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new Client(credential, subscriptionId);
  await client.workloadNetworksClient.deleteVMGroup("group1", "vmGroup1", "cloud1");
}

async function main(): Promise<void> {
  await workloadNetworksDeleteVMGroup();
}

main().catch(console.error);
