// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticClient } from "@azure/arm-elastic";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get the list of all associated traffic filters for the given deployment.
 *
 * @summary get the list of all associated traffic filters for the given deployment.
 * x-ms-original-file: 2025-01-15-preview/AssociatedFiltersForDeployment_list.json
 */
async function listAssociatedTrafficFiltersList(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ElasticClient(credential, subscriptionId);
  const result = await client.elasticMonitorResources.listAssociatedTrafficFiltersList(
    "myResourceGroup",
    "myMonitor",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await listAssociatedTrafficFiltersList();
}

main().catch(console.error);
