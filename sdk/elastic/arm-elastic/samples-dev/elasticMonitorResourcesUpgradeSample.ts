// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticClient } from "@azure/arm-elastic";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to upgradable version for a monitor resource.
 *
 * @summary upgradable version for a monitor resource.
 * x-ms-original-file: 2025-01-15-preview/Monitor_Upgrade.json
 */
async function monitorUpgrade(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ElasticClient(credential, subscriptionId);
  await client.elasticMonitorResources.upgrade("myResourceGroup", "myMonitor");
}

async function main(): Promise<void> {
  await monitorUpgrade();
}

main().catch(console.error);
