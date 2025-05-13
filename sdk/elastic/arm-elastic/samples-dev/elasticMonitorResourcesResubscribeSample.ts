// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticClient } from "@azure/arm-elastic";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to resubscribe the Elasticsearch Organization.
 *
 * @summary resubscribe the Elasticsearch Organization.
 * x-ms-original-file: 2025-01-15-preview/Organizations_Resubscribe.json
 */
async function organizationsResubscribe(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ElasticClient(credential, subscriptionId);
  const result = await client.elasticMonitorResources.resubscribe("myResourceGroup", "myMonitor");
  console.log(result);
}

async function main(): Promise<void> {
  await organizationsResubscribe();
}

main().catch(console.error);
