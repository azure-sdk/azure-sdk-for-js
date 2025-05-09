// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatadogClient } from "@azure/arm-datadog";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list the api keys for a given monitor resource.
 *
 * @summary list the api keys for a given monitor resource.
 * x-ms-original-file: 2023-10-20/ApiKeys_List.json
 */
async function monitorsListApiKeys(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DatadogClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.datadogMonitorResources.listApiKeys(
    "myResourceGroup",
    "myMonitor",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await monitorsListApiKeys();
}

main().catch(console.error);
