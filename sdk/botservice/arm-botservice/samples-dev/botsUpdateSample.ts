// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BotServiceClient } from "@azure/arm-botservice";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to updates a Bot Service
 *
 * @summary updates a Bot Service
 * x-ms-original-file: 2023-09-15-preview/UpdateBot.json
 */
async function updateBot(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subscription-id";
  const client = new BotServiceClient(credential, subscriptionId);
  const result = await client.bots.update("OneResourceGroupName", "samplebotname");
  console.log(result);
}

async function main(): Promise<void> {
  await updateBot();
}

main().catch(console.error);
