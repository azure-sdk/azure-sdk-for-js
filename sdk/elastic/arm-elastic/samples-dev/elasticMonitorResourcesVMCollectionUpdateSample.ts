// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticClient } from "@azure/arm-elastic";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to update the vm details that will be monitored by the Elastic monitor resource.
 *
 * @summary update the vm details that will be monitored by the Elastic monitor resource.
 * x-ms-original-file: 2025-01-15-preview/VMCollection_Update.json
 */
async function vmCollectionUpdate(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ElasticClient(credential, subscriptionId);
  await client.elasticMonitorResources.vMCollectionUpdate("myResourceGroup", "myMonitor");
}

async function main(): Promise<void> {
  await vmCollectionUpdate();
}

main().catch(console.error);
