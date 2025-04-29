// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIClient } from "@azure/arm-avs";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to delete a WorkloadNetworkDnsService
 *
 * @summary delete a WorkloadNetworkDnsService
 * x-ms-original-file: 2024-09-01/WorkloadNetworks_DeleteDnsService.json
 */
async function workloadNetworksDeleteDnsService(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new AzureVMwareSolutionAPIClient(credential, subscriptionId);
  await client.workloadNetworkDnsServices.delete("group1", "dnsService1", "cloud1");
}

async function main(): Promise<void> {
  await workloadNetworksDeleteDnsService();
}

main().catch(console.error);
