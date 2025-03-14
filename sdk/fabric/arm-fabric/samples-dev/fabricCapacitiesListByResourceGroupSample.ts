// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FabricClient } from "@azure/arm-fabric";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list FabricCapacity resources by resource group
 *
 * @summary list FabricCapacity resources by resource group
 * x-ms-original-file: 2025-01-15-preview/FabricCapacities_ListByResourceGroup.json
 */
async function listCapacitiesByResourceGroup(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "548B7FB7-3B2A-4F46-BB02-66473F1FC22C";
  const client = new FabricClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.fabricCapacities.listByResourceGroup("TestRG")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await listCapacitiesByResourceGroup();
}

main().catch(console.error);
