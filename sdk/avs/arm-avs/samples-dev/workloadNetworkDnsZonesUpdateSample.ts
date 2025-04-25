// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIClient } from "@azure/arm-avs";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to update a WorkloadNetworkDnsZone
 *
 * @summary update a WorkloadNetworkDnsZone
 * x-ms-original-file: 2024-09-01/WorkloadNetworks_UpdateDnsZone.json
 */
async function workloadNetworksUpdateDnsZone(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new AzureVMwareSolutionAPIClient(credential, subscriptionId);
  const result = await client.workloadNetworkDnsZones.update("group1", "cloud1", "dnsZone1");
  console.log(result);
}

async function main(): Promise<void> {
  await workloadNetworksUpdateDnsZone();
}

main().catch(console.error);
