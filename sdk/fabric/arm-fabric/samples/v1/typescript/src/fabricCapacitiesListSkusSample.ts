// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FabricClient } from "@azure/arm-fabric";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list eligible SKUs for Microsoft Fabric resource provider
 *
 * @summary list eligible SKUs for Microsoft Fabric resource provider
 * x-ms-original-file: 2023-11-01/FabricCapacities_ListSkus.json
 */
async function listEligibleSKUsForANewCapacity(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "548B7FB7-3B2A-4F46-BB02-66473F1FC22C";
  const client = new FabricClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.fabricCapacities.listSkus()) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  listEligibleSKUsForANewCapacity();
}

main().catch(console.error);
