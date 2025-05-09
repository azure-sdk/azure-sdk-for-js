// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HealthBotClient } from "@azure/arm-healthbot";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to delete a HealthBot.
 *
 * @summary delete a HealthBot.
 * x-ms-original-file: 2024-02-01/ResourceDeletionDelete.json
 */
async function botDelete(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HealthBotClient(credential, subscriptionId);
  await client.healthBots.delete("healthbotClient", "samplebotname");
}

async function main(): Promise<void> {
  await botDelete();
}

main().catch(console.error);
