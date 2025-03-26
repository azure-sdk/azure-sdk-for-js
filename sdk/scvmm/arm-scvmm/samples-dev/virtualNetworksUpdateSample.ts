// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmClient } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to updates the VirtualNetworks resource.
 *
 * @summary updates the VirtualNetworks resource.
 * x-ms-original-file: 2024-06-01/VirtualNetworks_Update_MaximumSet_Gen.json
 */
async function virtualNetworksUpdateMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.virtualNetworks.update("rgscvmm", "S", {
    tags: { key9516: "oxduo" },
  });
  console.log(result);
}

/**
 * This sample demonstrates how to updates the VirtualNetworks resource.
 *
 * @summary updates the VirtualNetworks resource.
 * x-ms-original-file: 2024-06-01/VirtualNetworks_Update_MinimumSet_Gen.json
 */
async function virtualNetworksUpdateMinimumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.virtualNetworks.update("rgscvmm", "-", {});
  console.log(result);
}

async function main(): Promise<void> {
  await virtualNetworksUpdateMaximumSet();
  await virtualNetworksUpdateMinimumSet();
}

main().catch(console.error);
