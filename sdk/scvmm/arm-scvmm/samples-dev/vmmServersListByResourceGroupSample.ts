// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmClient } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list of VmmServers in a resource group.
 *
 * @summary list of VmmServers in a resource group.
 * x-ms-original-file: 2025-03-13/VmmServers_ListByResourceGroup_MaximumSet_Gen.json
 */
async function vmmServersListByResourceGroupMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.vmmServers.listByResourceGroup("rgscvmm")) {
    resArray.push(item);
  }

  console.log(resArray);
}

/**
 * This sample demonstrates how to list of VmmServers in a resource group.
 *
 * @summary list of VmmServers in a resource group.
 * x-ms-original-file: 2025-03-13/VmmServers_ListByResourceGroup_MinimumSet_Gen.json
 */
async function vmmServersListByResourceGroupMinimumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.vmmServers.listByResourceGroup("rgscvmm")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await vmmServersListByResourceGroupMaximumSet();
  await vmmServersListByResourceGroupMinimumSet();
}

main().catch(console.error);
