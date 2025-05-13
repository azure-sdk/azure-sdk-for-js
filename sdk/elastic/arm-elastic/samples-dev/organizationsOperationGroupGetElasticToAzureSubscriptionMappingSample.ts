// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticClient } from "@azure/arm-elastic";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to >;
 *   /**
 * Get Elastic Organization To Azure Subscription Mapping details for the logged-in user.
 *
 * @summary >;
 *   /**
 * Get Elastic Organization To Azure Subscription Mapping details for the logged-in user.
 * x-ms-original-file: 2025-01-15-preview/Organizations_GetElasticToAzureSubscriptionMapping.json
 */
async function organizationsGetElasticToAzureSubscriptionMapping(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ElasticClient(credential, subscriptionId);
  const result = await client.organizationsOperationGroup.getElasticToAzureSubscriptionMapping();
  console.log(result);
}

async function main(): Promise<void> {
  await organizationsGetElasticToAzureSubscriptionMapping();
}

main().catch(console.error);
