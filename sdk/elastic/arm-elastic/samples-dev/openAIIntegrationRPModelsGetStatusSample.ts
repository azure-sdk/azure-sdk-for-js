// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticClient } from "@azure/arm-elastic";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get OpenAI integration status for a given integration.
 *
 * @summary get OpenAI integration status for a given integration.
 * x-ms-original-file: 2025-01-15-preview/OpenAI_GetStatus.json
 */
async function openAIGetStatus(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ElasticClient(credential, subscriptionId);
  const result = await client.openAIIntegrationRPModels.getStatus(
    "myResourceGroup",
    "myMonitor",
    "default",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await openAIGetStatus();
}

main().catch(console.error);
