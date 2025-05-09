// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatadogClient } from "@azure/arm-datadog";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to delete a monitor resource.
 *
 * @summary delete a monitor resource.
 * x-ms-original-file: 2023-10-20/Monitors_Delete.json
 */
async function monitorsDelete(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DatadogClient(credential, subscriptionId);
  await client.datadogMonitorResources.delete("myResourceGroup", "myMonitor");
}

async function main(): Promise<void> {
  await monitorsDelete();
}

main().catch(console.error);
