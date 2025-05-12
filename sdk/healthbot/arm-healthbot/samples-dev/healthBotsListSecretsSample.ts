// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HealthBotClient } from "@azure/arm-healthbot";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list all secrets of a HealthBot.
 *
 * @summary list all secrets of a HealthBot.
 * x-ms-original-file: 2024-02-01/ListSecrets.json
 */
async function botListSecrets(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HealthBotClient(credential, subscriptionId);
  const result = await client.healthBots.listSecrets("healthbotClient", "samplebotname");
  console.log(result);
}

async function main(): Promise<void> {
  await botListSecrets();
}

main().catch(console.error);
