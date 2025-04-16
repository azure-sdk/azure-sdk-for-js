// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmClient } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create Or Update InventoryItem.
 *
 * @summary create Or Update InventoryItem.
 * x-ms-original-file: 2025-03-13/InventoryItems_Create_MaximumSet_Gen.json
 */
async function inventoryItemsCreateMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.inventoryItems.create(
    "rgscvmm",
    "O",
    "1BdDc2Ab-bDd9-Ebd6-bfdb-C0dbbdB5DEDf",
    { kind: "M\\d_,V." },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to create Or Update InventoryItem.
 *
 * @summary create Or Update InventoryItem.
 * x-ms-original-file: 2025-03-13/InventoryItems_Create_MinimumSet_Gen.json
 */
async function inventoryItemsCreateMinimumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.inventoryItems.create(
    "rgscvmm",
    ".",
    "bbFb0cBb-50ce-4bfc-3eeD-bC26AbCC257a",
    {},
  );
  console.log(result);
}

async function main(): Promise<void> {
  await inventoryItemsCreateMaximumSet();
  await inventoryItemsCreateMinimumSet();
}

main().catch(console.error);
