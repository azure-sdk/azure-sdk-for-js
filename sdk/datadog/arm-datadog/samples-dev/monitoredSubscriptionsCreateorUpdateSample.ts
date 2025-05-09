// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatadogClient } from "@azure/arm-datadog";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to add the subscriptions that should be monitored by the Datadog monitor resource.
 *
 * @summary add the subscriptions that should be monitored by the Datadog monitor resource.
 * x-ms-original-file: 2023-10-20/MonitoredSubscriptions_CreateorUpdate.json
 */
async function monitorsAddMonitoredSubscriptions(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DatadogClient(credential, subscriptionId);
  await client.monitoredSubscriptions.createorUpdate("myResourceGroup", "myMonitor", "default");
}

async function main(): Promise<void> {
  await monitorsAddMonitoredSubscriptions();
}

main().catch(console.error);
