// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIClient } from "@azure/arm-avs";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create a WorkloadNetworkSegment
 *
 * @summary create a WorkloadNetworkSegment
 * x-ms-original-file: 2024-09-01/WorkloadNetworks_CreateSegments.json
 */
async function workloadNetworksCreateSegments(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new AzureVMwareSolutionAPIClient(credential, subscriptionId);
  const result = await client.workloadNetworkSegments.create("group1", "cloud1", "segment1");
  console.log(result);
}

async function main(): Promise<void> {
  await workloadNetworksCreateSegments();
}

main().catch(console.error);
