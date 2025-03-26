// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmClient } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list of Clouds in a resource group.
 *
 * @summary list of Clouds in a resource group.
 * x-ms-original-file: 2024-06-01/Clouds_ListByResourceGroup_MaximumSet_Gen.json
 */
async function cloudsListByResourceGroupMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.clouds.listByResourceGroup("rgscvmm")) {
    resArray.push(item);
  }

  console.log(resArray);
}

/**
 * This sample demonstrates how to list of Clouds in a resource group.
 *
 * @summary list of Clouds in a resource group.
 * x-ms-original-file: 2024-06-01/Clouds_ListByResourceGroup_MinimumSet_Gen.json
 */
async function cloudsListByResourceGroupMinimumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.clouds.listByResourceGroup("rgscvmm")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await cloudsListByResourceGroupMaximumSet();
  await cloudsListByResourceGroupMinimumSet();
}

main().catch(console.error);
