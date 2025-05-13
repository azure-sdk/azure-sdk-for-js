// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticClient } from "@azure/arm-elastic";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create or update a OpenAI integration rule for a given monitor resource.
 *
 * @summary create or update a OpenAI integration rule for a given monitor resource.
 * x-ms-original-file: 2025-01-15-preview/OpenAI_CreateOrUpdate.json
 */
async function openAICreateOrUpdate(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ElasticClient(credential, subscriptionId);
  const result = await client.openAIIntegrationRPModels.createOrUpdate(
    "myResourceGroup",
    "myMonitor",
    "default",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await openAICreateOrUpdate();
}

main().catch(console.error);
