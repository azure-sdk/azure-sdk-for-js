// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatadogClient } from "@azure/arm-datadog";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create a monitor resource.
 *
 * @summary create a monitor resource.
 * x-ms-original-file: 2023-10-20/Monitors_Create.json
 */
async function monitorsCreate(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DatadogClient(credential, subscriptionId);
  const result = await client.datadogMonitorResources.create("myResourceGroup", "myMonitor");
  console.log(result);
}

async function main(): Promise<void> {
  await monitorsCreate();
}

main().catch(console.error);
