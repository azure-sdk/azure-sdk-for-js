// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ScVmmClient } = require("@azure/arm-scvmm");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to deletes an inventoryItem.
 *
 * @summary deletes an inventoryItem.
 * x-ms-original-file: 2025-03-13/InventoryItems_Delete_MaximumSet_Gen.json
 */
async function inventoryItemsDeleteMaximumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  await client.inventoryItems.delete("rgscvmm", "b", "EcECadfd-Eaaa-e5Ce-ebdA-badeEd3c6af1");
}

/**
 * This sample demonstrates how to deletes an inventoryItem.
 *
 * @summary deletes an inventoryItem.
 * x-ms-original-file: 2025-03-13/InventoryItems_Delete_MinimumSet_Gen.json
 */
async function inventoryItemsDeleteMinimumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  await client.inventoryItems.delete("rgscvmm", "_", "cDBcbae6-BC3d-52fe-CedC-7eFeaBFabb82");
}

async function main() {
  await inventoryItemsDeleteMaximumSet();
  await inventoryItemsDeleteMinimumSet();
}

main().catch(console.error);
