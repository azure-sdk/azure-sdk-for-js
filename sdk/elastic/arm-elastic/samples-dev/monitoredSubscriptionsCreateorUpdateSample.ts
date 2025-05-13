// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticClient } from "@azure/arm-elastic";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to add the subscriptions that should be monitored by the Elastic monitor resource.
 *
 * @summary add the subscriptions that should be monitored by the Elastic monitor resource.
 * x-ms-original-file: 2025-01-15-preview/MonitoredSubscriptions_CreateorUpdate.json
 */
async function monitorsAddMonitoredSubscriptions(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ElasticClient(credential, subscriptionId);
  await client.monitoredSubscriptions.createorUpdate("myResourceGroup", "myMonitor", "default");
}

async function main(): Promise<void> {
  await monitorsAddMonitoredSubscriptions();
}

main().catch(console.error);
