// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmClient } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to implements VirtualNetwork GET method.
 *
 * @summary implements VirtualNetwork GET method.
 * x-ms-original-file: 2024-06-01/VirtualNetworks_Get_MaximumSet_Gen.json
 */
async function virtualNetworksGetMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.virtualNetworks.get("rgscvmm", "2");
  console.log(result);
}

/**
 * This sample demonstrates how to implements VirtualNetwork GET method.
 *
 * @summary implements VirtualNetwork GET method.
 * x-ms-original-file: 2024-06-01/VirtualNetworks_Get_MinimumSet_Gen.json
 */
async function virtualNetworksGetMinimumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.virtualNetworks.get("rgscvmm", "-");
  console.log(result);
}

async function main(): Promise<void> {
  await virtualNetworksGetMaximumSet();
  await virtualNetworksGetMinimumSet();
}

main().catch(console.error);
