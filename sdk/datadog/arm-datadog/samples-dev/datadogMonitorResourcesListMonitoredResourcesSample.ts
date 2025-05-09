// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatadogClient } from "@azure/arm-datadog";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list the resources currently being monitored by the Datadog monitor resource.
 *
 * @summary list the resources currently being monitored by the Datadog monitor resource.
 * x-ms-original-file: 2023-10-20/MonitoredResources_List.json
 */
async function monitorsListMonitoredResources(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DatadogClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.datadogMonitorResources.listMonitoredResources(
    "myResourceGroup",
    "myMonitor",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await monitorsListMonitoredResources();
}

main().catch(console.error);
