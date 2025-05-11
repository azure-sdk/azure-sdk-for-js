// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BotServiceClient } from "@azure/arm-botservice";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to creates a Channel registration for a Bot Service
 *
 * @summary creates a Channel registration for a Bot Service
 * x-ms-original-file: 2023-09-15-preview/PutAlexaChannel.json
 */
async function createAlexaChannel(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subscription-id";
  const client = new BotServiceClient(credential, subscriptionId);
  const result = await client.botChannels.create(
    "OneResourceGroupName",
    "samplebotname",
    "AlexaChannel",
  );
  console.log(result);
}

/**
 * This sample demonstrates how to creates a Channel registration for a Bot Service
 *
 * @summary creates a Channel registration for a Bot Service
 * x-ms-original-file: 2023-09-15-preview/PutChannel.json
 */
async function createChannel(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subscription-id";
  const client = new BotServiceClient(credential, subscriptionId);
  const result = await client.botChannels.create(
    "OneResourceGroupName",
    "samplebotname",
    "EmailChannel",
  );
  console.log(result);
}

/**
 * This sample demonstrates how to creates a Channel registration for a Bot Service
 *
 * @summary creates a Channel registration for a Bot Service
 * x-ms-original-file: 2023-09-15-preview/PutDirectLineSpeechChannel.json
 */
async function createDirectLineSpeechChannel(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subscription-id";
  const client = new BotServiceClient(credential, subscriptionId);
  const result = await client.botChannels.create(
    "OneResourceGroupName",
    "samplebotname",
    "DirectLineSpeechChannel",
  );
  console.log(result);
}

/**
 * This sample demonstrates how to creates a Channel registration for a Bot Service
 *
 * @summary creates a Channel registration for a Bot Service
 * x-ms-original-file: 2023-09-15-preview/PutEmailChannel.json
 */
async function createEmailChannel(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subscription-id";
  const client = new BotServiceClient(credential, subscriptionId);
  const result = await client.botChannels.create(
    "OneResourceGroupName",
    "samplebotname",
    "EmailChannel",
  );
  console.log(result);
}

/**
 * This sample demonstrates how to creates a Channel registration for a Bot Service
 *
 * @summary creates a Channel registration for a Bot Service
 * x-ms-original-file: 2023-09-15-preview/PutLineChannel.json
 */
async function createLineChannel(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subscription-id";
  const client = new BotServiceClient(credential, subscriptionId);
  const result = await client.botChannels.create(
    "OneResourceGroupName",
    "samplebotname",
    "LineChannel",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createAlexaChannel();
  await createChannel();
  await createDirectLineSpeechChannel();
  await createEmailChannel();
  await createLineChannel();
}

main().catch(console.error);
