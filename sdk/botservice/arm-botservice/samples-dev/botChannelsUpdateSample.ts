// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BotServiceClient } from "@azure/arm-botservice";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to updates a Channel registration for a Bot Service
 *
 * @summary updates a Channel registration for a Bot Service
 * x-ms-original-file: 2023-09-15-preview/UpdateAlexaChannel.json
 */
async function updateAlexaChannel(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subscription-id";
  const client = new BotServiceClient(credential, subscriptionId);
  const result = await client.botChannels.update(
    "OneResourceGroupName",
    "samplebotname",
    "AlexaChannel",
  );
  console.log(result);
}

/**
 * This sample demonstrates how to updates a Channel registration for a Bot Service
 *
 * @summary updates a Channel registration for a Bot Service
 * x-ms-original-file: 2023-09-15-preview/UpdateChannel.json
 */
async function updateChannel(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subscription-id";
  const client = new BotServiceClient(credential, subscriptionId);
  const result = await client.botChannels.update(
    "OneResourceGroupName",
    "samplebotname",
    "EmailChannel",
  );
  console.log(result);
}

/**
 * This sample demonstrates how to updates a Channel registration for a Bot Service
 *
 * @summary updates a Channel registration for a Bot Service
 * x-ms-original-file: 2023-09-15-preview/UpdateDirectLineSpeechChannel.json
 */
async function updateDirectLineSpeechChannel(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subscription-id";
  const client = new BotServiceClient(credential, subscriptionId);
  const result = await client.botChannels.update(
    "OneResourceGroupName",
    "samplebotname",
    "DirectLineSpeechChannel",
  );
  console.log(result);
}

/**
 * This sample demonstrates how to updates a Channel registration for a Bot Service
 *
 * @summary updates a Channel registration for a Bot Service
 * x-ms-original-file: 2023-09-15-preview/UpdateLineChannel.json
 */
async function updateLineChannel(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subscription-id";
  const client = new BotServiceClient(credential, subscriptionId);
  const result = await client.botChannels.update(
    "OneResourceGroupName",
    "samplebotname",
    "LineChannel",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await updateAlexaChannel();
  await updateChannel();
  await updateDirectLineSpeechChannel();
  await updateLineChannel();
}

main().catch(console.error);
