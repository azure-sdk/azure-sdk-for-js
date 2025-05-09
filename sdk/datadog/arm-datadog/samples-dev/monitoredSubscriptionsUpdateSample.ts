// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatadogClient } from "@azure/arm-datadog";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to updates the subscriptions that are being monitored by the Datadog monitor resource
 *
 * @summary updates the subscriptions that are being monitored by the Datadog monitor resource
 * x-ms-original-file: 2023-10-20/MonitoredSubscriptions_Update.json
 */
async function monitorsUpdateMonitoredSubscriptions(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DatadogClient(credential, subscriptionId);
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
