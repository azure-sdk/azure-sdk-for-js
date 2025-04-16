// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmClient } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list of Clouds in a subscription.
 *
 * @summary list of Clouds in a subscription.
 * x-ms-original-file: 2025-03-13/Clouds_ListBySubscription_MaximumSet_Gen.json
 */
async function cloudsListBySubscriptionMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.clouds.listBySubscription()) {
    resArray.push(item);
  }

  console.log(resArray);
}

/**
 * This sample demonstrates how to list of Clouds in a subscription.
 *
 * @summary list of Clouds in a subscription.
 * x-ms-original-file: 2025-03-13/Clouds_ListBySubscription_MinimumSet_Gen.json
 */
async function cloudsListBySubscriptionMinimumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.clouds.listBySubscription()) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await cloudsListBySubscriptionMaximumSet();
  await cloudsListBySubscriptionMinimumSet();
}

main().catch(console.error);
