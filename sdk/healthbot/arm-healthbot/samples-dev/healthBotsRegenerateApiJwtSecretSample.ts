// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HealthBotClient } from "@azure/arm-healthbot";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to regenerate the API JWT Secret of a HealthBot.
 *
 * @summary regenerate the API JWT Secret of a HealthBot.
 * x-ms-original-file: 2024-02-01/RegenerateApiJwtSecret.json
 */
async function botRegenerateAPIJWTSecret(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HealthBotClient(credential, subscriptionId);
  const result = await client.healthBots.regenerateApiJwtSecret("healthbotClient", "samplebotname");
  console.log(result);
}

async function main(): Promise<void> {
  await botRegenerateAPIJWTSecret();
}

main().catch(console.error);
