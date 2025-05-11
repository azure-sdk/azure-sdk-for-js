// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BotServiceClient } from "@azure/arm-botservice";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to register a new Auth Connection for a Bot Service
 *
 * @summary register a new Auth Connection for a Bot Service
 * x-ms-original-file: 2023-09-15-preview/PutConnection.json
 */
async function createConnectionSetting(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subscription-id";
  const client = new BotServiceClient(credential, subscriptionId);
  const result = await client.connectionSettings.create(
    "OneResourceGroupName",
    "samplebotname",
    "sampleConnection",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createConnectionSetting();
}

main().catch(console.error);
