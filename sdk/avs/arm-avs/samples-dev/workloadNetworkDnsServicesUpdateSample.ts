// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIClient } from "@azure/arm-avs";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to update a WorkloadNetworkDnsService
 *
 * @summary update a WorkloadNetworkDnsService
 * x-ms-original-file: 2023-09-01/WorkloadNetworks_UpdateDnsService.json
 */
async function workloadNetworksUpdateDnsService(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new AzureVMwareSolutionAPIClient(credential, subscriptionId);
  const result = await client.workloadNetworkDnsServices.update("group1", "cloud1", "dnsService1");
  console.log(result);
}

async function main(): Promise<void> {
  await workloadNetworksUpdateDnsService();
}

main().catch(console.error);
