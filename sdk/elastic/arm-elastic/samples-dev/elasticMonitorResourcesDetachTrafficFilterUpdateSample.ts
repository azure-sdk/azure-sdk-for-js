// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticClient } from "@azure/arm-elastic";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to detach traffic filter for the given deployment.
 *
 * @summary detach traffic filter for the given deployment.
 * x-ms-original-file: 2025-01-15-preview/DetachTrafficFilters_Update.json
 */
async function detachTrafficFilterUpdate(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ElasticClient(credential, subscriptionId);
  await client.elasticMonitorResources.detachTrafficFilterUpdate("myResourceGroup", "myMonitor", {
    rulesetId: "31d91b5afb6f4c2eaaf104c97b1991dd",
  });
}

async function main(): Promise<void> {
  await detachTrafficFilterUpdate();
}

main().catch(console.error);
