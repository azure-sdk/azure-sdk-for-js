// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BotServiceClient } from "@azure/arm-botservice";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to creates a Bot Service. Bot Service is a resource group wide resource type.
 *
 * @summary creates a Bot Service. Bot Service is a resource group wide resource type.
 * x-ms-original-file: 2023-09-15-preview/CreateBot.json
 */
async function createBot(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subscription-id";
  const client = new BotServiceClient(credential, subscriptionId);
  const result = await client.bots.create("OneResourceGroupName", "samplebotname");
  console.log(result);
}

async function main(): Promise<void> {
  await createBot();
}

main().catch(console.error);
