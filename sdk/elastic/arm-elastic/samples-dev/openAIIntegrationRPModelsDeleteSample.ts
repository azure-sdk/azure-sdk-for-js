// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticClient } from "@azure/arm-elastic";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to delete OpenAI integration rule for a given monitor resource.
 *
 * @summary delete OpenAI integration rule for a given monitor resource.
 * x-ms-original-file: 2025-01-15-preview/OpenAI_Delete.json
 */
async function openAIDelete(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ElasticClient(credential, subscriptionId);
  await client.openAIIntegrationRPModels.delete("myResourceGroup", "myMonitor", "default");
}

async function main(): Promise<void> {
  await openAIDelete();
}

main().catch(console.error);
