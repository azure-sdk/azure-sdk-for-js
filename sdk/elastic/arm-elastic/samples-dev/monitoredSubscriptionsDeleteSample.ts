// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticClient } from "@azure/arm-elastic";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to updates the subscriptions that are being monitored by the Elastic monitor resource
 *
 * @summary updates the subscriptions that are being monitored by the Elastic monitor resource
 * x-ms-original-file: 2025-01-15-preview/MonitoredSubscriptions_Delete.json
 */
async function monitorsDeleteMonitoredSubscriptions(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ElasticClient(credential, subscriptionId);
  await client.monitoredSubscriptions.delete("myResourceGroup", "myMonitor", "default");
}

async function main(): Promise<void> {
  await monitorsDeleteMonitoredSubscriptions();
}

main().catch(console.error);
