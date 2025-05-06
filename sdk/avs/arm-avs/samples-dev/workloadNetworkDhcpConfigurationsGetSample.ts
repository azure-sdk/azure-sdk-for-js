// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIClient } from "@azure/arm-avs";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get a WorkloadNetworkDhcp
 *
 * @summary get a WorkloadNetworkDhcp
 * x-ms-original-file: 2023-09-01/WorkloadNetworks_GetDhcp.json
 */
async function workloadNetworksGetDhcp(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new AzureVMwareSolutionAPIClient(credential, subscriptionId);
  const result = await client.workloadNetworkDhcpConfigurations.get("group1", "dhcp1", "cloud1");
  console.log(result);
}

async function main(): Promise<void> {
  await workloadNetworksGetDhcp();
}

main().catch(console.error);
