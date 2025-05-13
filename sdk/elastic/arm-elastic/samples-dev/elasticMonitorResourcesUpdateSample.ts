// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticClient } from "@azure/arm-elastic";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to update a monitor resource.
 *
 * @summary update a monitor resource.
 * x-ms-original-file: 2025-01-15-preview/Monitors_Update.json
 */
async function monitorsUpdate(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ElasticClient(credential, subscriptionId);
  await client.elasticMonitorResources.update("myResourceGroup", "myMonitor");
}

async function main(): Promise<void> {
  await monitorsUpdate();
}

main().catch(console.error);
