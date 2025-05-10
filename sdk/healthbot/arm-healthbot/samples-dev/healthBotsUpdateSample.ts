// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HealthBotClient } from "@azure/arm-healthbot";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to patch a HealthBot.
 *
 * @summary patch a HealthBot.
 * x-ms-original-file: 2024-02-01/ResourceUpdatePatch.json
 */
async function botUpdate(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HealthBotClient(credential, subscriptionId);
  await client.healthBots.update("healthbotClient", "samplebotname");
}

async function main(): Promise<void> {
  await botUpdate();
}

main().catch(console.error);
