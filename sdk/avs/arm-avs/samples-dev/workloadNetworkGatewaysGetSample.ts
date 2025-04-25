// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIClient } from "@azure/arm-avs";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get a WorkloadNetworkGateway
 *
 * @summary get a WorkloadNetworkGateway
 * x-ms-original-file: 2024-09-01/WorkloadNetworks_GetGateway.json
 */
async function workloadNetworksGetGateway(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new AzureVMwareSolutionAPIClient(credential, subscriptionId);
  const result = await client.workloadNetworkGateways.get("group1", "cloud1", "gateway1");
  console.log(result);
}

async function main(): Promise<void> {
  await workloadNetworksGetGateway();
}

main().catch(console.error);
