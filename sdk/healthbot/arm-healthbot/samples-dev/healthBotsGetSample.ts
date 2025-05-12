// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HealthBotClient } from "@azure/arm-healthbot";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get a HealthBot.
 *
 * @summary get a HealthBot.
 * x-ms-original-file: 2024-02-01/ResourceInfoGet.json
 */
async function resourceInfoGet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HealthBotClient(credential, subscriptionId);
  const result = await client.healthBots.get("healthbotClient", "samplebotname");
  console.log(result);
}

async function main(): Promise<void> {
  await resourceInfoGet();
}

main().catch(console.error);
