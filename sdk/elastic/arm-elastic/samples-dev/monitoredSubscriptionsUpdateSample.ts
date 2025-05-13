// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticClient } from "@azure/arm-elastic";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to updates the subscriptions that are being monitored by the Elastic monitor resource
 *
 * @summary updates the subscriptions that are being monitored by the Elastic monitor resource
 * x-ms-original-file: 2025-01-15-preview/MonitoredSubscriptions_Update.json
 */
async function monitorsUpdateMonitoredSubscriptions(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ElasticClient(credential, subscriptionId);
  const result = await client.monitoredSubscriptions.update(
    "myResourceGroup",
    "myMonitor",
    "default",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await monitorsUpdateMonitoredSubscriptions();
}

main().catch(console.error);
