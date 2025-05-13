// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticClient } from "@azure/arm-elastic";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get the list of all traffic filters for the account.
 *
 * @summary get the list of all traffic filters for the account.
 * x-ms-original-file: 2025-01-15-preview/AllTrafficFilters_list.json
 */
async function allTrafficFiltersList(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ElasticClient(credential, subscriptionId);
  const result = await client.elasticMonitorResources.allTrafficFiltersList(
    "myResourceGroup",
    "myMonitor",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await allTrafficFiltersList();
}

main().catch(console.error);
