// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Client } from "@azure/arm-avs";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to delete a WorkloadNetworkSegment
 *
 * @summary delete a WorkloadNetworkSegment
 * x-ms-original-file: 2024-09-01/WorkloadNetworks_DeleteSegment.json
 */
async function workloadNetworksDeleteSegment(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new Client(credential, subscriptionId);
  await client.workloadNetworksClient.deleteSegment("group1", "cloud1", "segment1");
}

async function main(): Promise<void> {
  await workloadNetworksDeleteSegment();
}

main().catch(console.error);
