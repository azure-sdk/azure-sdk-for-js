// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatadogClient } from "@azure/arm-datadog";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to set the default api key.
 *
 * @summary set the default api key.
 * x-ms-original-file: 2023-10-20/ApiKeys_SetDefaultKey.json
 */
async function monitorsSetDefaultKey(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DatadogClient(credential, subscriptionId);
  await client.datadogMonitorResources.setDefaultKey("myResourceGroup", "myMonitor", {
    body: { key: "1111111111111111aaaaaaaaaaaaaaaa" },
  });
}

async function main(): Promise<void> {
  await monitorsSetDefaultKey();
}

main().catch(console.error);
