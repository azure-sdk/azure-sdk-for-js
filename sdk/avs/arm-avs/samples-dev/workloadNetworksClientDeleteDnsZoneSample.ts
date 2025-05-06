// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Client } from "@azure/arm-avs";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to delete a WorkloadNetworkDnsZone
 *
 * @summary delete a WorkloadNetworkDnsZone
 * x-ms-original-file: 2024-09-01/WorkloadNetworks_DeleteDnsZone.json
 */
async function workloadNetworksDeleteDnsZone(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new Client(credential, subscriptionId);
  await client.workloadNetworksClient.deleteDnsZone("group1", "dnsZone1", "cloud1");
}

async function main(): Promise<void> {
  await workloadNetworksDeleteDnsZone();
}

main().catch(console.error);
