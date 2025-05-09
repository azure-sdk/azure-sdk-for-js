// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatadogClient } from "@azure/arm-datadog";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get the default api key.
 *
 * @summary get the default api key.
 * x-ms-original-file: 2023-10-20/ApiKeys_GetDefaultKey.json
 */
async function monitorsGetDefaultKey(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DatadogClient(credential, subscriptionId);
  const result = await client.datadogMonitorResources.getDefaultKey("myResourceGroup", "myMonitor");
  console.log(result);
}

async function main(): Promise<void> {
  await monitorsGetDefaultKey();
}

main().catch(console.error);
