// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HealthBotClient } from "@azure/arm-healthbot";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to returns all the resources of a particular type belonging to a subscription.
 *
 * @summary returns all the resources of a particular type belonging to a subscription.
 * x-ms-original-file: 2024-02-01/ListBotsBySubscription.json
 */
async function listBotsBySubscription(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subscription-id";
  const client = new HealthBotClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.healthBots.list()) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await listBotsBySubscription();
}

main().catch(console.error);
