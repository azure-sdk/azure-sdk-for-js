// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticClient } from "@azure/arm-elastic";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to fetch User API Key from internal database, if it was generated and stored while creating the Elasticsearch Organization.
 *
 * @summary fetch User API Key from internal database, if it was generated and stored while creating the Elasticsearch Organization.
 * x-ms-original-file: 2025-01-15-preview/Organizations_GetApiKey.json
 */
async function organizationsGetApiKey(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ElasticClient(credential, subscriptionId);
  const result = await client.organizationsOperationGroup.getApiKey();
  console.log(result);
}

async function main(): Promise<void> {
  await organizationsGetApiKey();
}

main().catch(console.error);
