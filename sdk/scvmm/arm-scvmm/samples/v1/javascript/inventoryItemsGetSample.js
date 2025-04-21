// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ScVmmClient } = require("@azure/arm-scvmm");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to shows an inventory item.
 *
 * @summary shows an inventory item.
 * x-ms-original-file: 2025-03-13/InventoryItems_Get_MaximumSet_Gen.json
 */
async function inventoryItemsGetMaximumSet() {
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
 * x-ms-original-file: 2025-03-13/InventoryItems_Get_MinimumSet_Gen.json
 */
async function inventoryItemsGetMinimumSet() {
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

async function main() {
  await inventoryItemsGetMaximumSet();
  await inventoryItemsGetMinimumSet();
}

main().catch(console.error);
