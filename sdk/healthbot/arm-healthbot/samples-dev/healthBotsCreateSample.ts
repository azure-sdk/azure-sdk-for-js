// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HealthBotClient } from "@azure/arm-healthbot";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create a new Azure Health Bot.
 *
 * @summary create a new Azure Health Bot.
 * x-ms-original-file: 2024-02-01/ResourceCreationPut.json
 */
async function botCreate(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HealthBotClient(credential, subscriptionId);
  const result = await client.healthBots.create("healthbotClient", "samplebotname");
  console.log(result);
}

async function main(): Promise<void> {
  await botCreate();
}

main().catch(console.error);
