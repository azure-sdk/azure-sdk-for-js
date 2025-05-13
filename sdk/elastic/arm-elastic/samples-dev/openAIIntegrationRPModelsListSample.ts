// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticClient } from "@azure/arm-elastic";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list OpenAI integration rule for a given monitor resource.
 *
 * @summary list OpenAI integration rule for a given monitor resource.
 * x-ms-original-file: 2025-01-15-preview/OpenAI_List.json
 */
async function openAIList(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ElasticClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.openAIIntegrationRPModels.list("myResourceGroup", "myMonitor")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await openAIList();
}

main().catch(console.error);
