// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticClient } from "@azure/arm-elastic";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to delete traffic filter from the account.
 *
 * @summary delete traffic filter from the account.
 * x-ms-original-file: 2025-01-15-preview/TrafficFilters_Delete.json
 */
async function trafficFiltersDelete(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ElasticClient(credential, subscriptionId);
  await client.elasticMonitorResources.trafficFiltersDelete("myResourceGroup", "myMonitor", {
    rulesetId: "31d91b5afb6f4c2eaaf104c97b1991dd",
  });
}

async function main(): Promise<void> {
  await trafficFiltersDelete();
}

main().catch(console.error);
