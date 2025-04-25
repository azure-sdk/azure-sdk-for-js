// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIClient } from "@azure/arm-avs";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get a WorkloadNetwork
 *
 * @summary get a WorkloadNetwork
 * x-ms-original-file: 2024-09-01/WorkloadNetworks_Get.json
 */
async function workloadNetworksGet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new AzureVMwareSolutionAPIClient(credential, subscriptionId);
  const result = await client.workloadNetworks.get("group1", "cloud1");
  console.log(result);
}

async function main(): Promise<void> {
  await workloadNetworksGet();
}

main().catch(console.error);
