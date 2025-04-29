// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIClient } from "@azure/arm-avs";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list WorkloadNetworkGateway resources by WorkloadNetwork
 *
 * @summary list WorkloadNetworkGateway resources by WorkloadNetwork
 * x-ms-original-file: 2024-09-01/WorkloadNetworks_ListGateways.json
 */
async function workloadNetworksListGateways(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new AzureVMwareSolutionAPIClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.workloadNetworkGateways.list("group1", "cloud1")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await workloadNetworksListGateways();
}

main().catch(console.error);
