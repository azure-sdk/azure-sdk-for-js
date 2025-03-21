// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmClient } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to returns the list of inventoryItems in the given VmmServer.
 *
 * @summary returns the list of inventoryItems in the given VmmServer.
 * x-ms-original-file: 2025-03-13/InventoryItems_ListByVmmServer_MaximumSet_Gen.json
 */
async function inventoryItemsListByVmmServerMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.inventoryItems.listByVmmServer("rgscvmm", "X")) {
    resArray.push(item);
  }

  console.log(resArray);
}

/**
 * This sample demonstrates how to returns the list of inventoryItems in the given VmmServer.
 *
 * @summary returns the list of inventoryItems in the given VmmServer.
 * x-ms-original-file: 2025-03-13/InventoryItems_ListByVmmServer_MinimumSet_Gen.json
 */
async function inventoryItemsListByVmmServerMinimumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.inventoryItems.listByVmmServer("rgscvmm", "H")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await inventoryItemsListByVmmServerMaximumSet();
  await inventoryItemsListByVmmServerMinimumSet();
}

main().catch(console.error);
