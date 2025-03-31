// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmClient } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to shows an inventory item.
 *
 * @summary shows an inventory item.
 * x-ms-original-file: 2024-06-01/InventoryItems_Get_MaximumSet_Gen.json
 */
async function inventoryItemsGetMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.inventoryItems.get(
    "rgscvmm",
    "1",
    "2bFBede6-EEf8-becB-dBbd-B96DbBFdB3f3",
  );
  console.log(result);
}

/**
 * This sample demonstrates how to shows an inventory item.
 *
 * @summary shows an inventory item.
 * x-ms-original-file: 2024-06-01/InventoryItems_Get_MinimumSet_Gen.json
 */
async function inventoryItemsGetMinimumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.inventoryItems.get(
    "rgscvmm",
    "_",
    "cacb8Ceb-efAC-bebb-ae7C-dec8C5Bb7100",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await inventoryItemsGetMaximumSet();
  await inventoryItemsGetMinimumSet();
}

main().catch(console.error);
