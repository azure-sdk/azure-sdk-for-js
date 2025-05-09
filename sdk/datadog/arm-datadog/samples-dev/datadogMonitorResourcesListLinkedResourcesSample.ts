// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatadogClient } from "@azure/arm-datadog";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list all Azure resources associated to the same Datadog organization as the target resource.
 *
 * @summary list all Azure resources associated to the same Datadog organization as the target resource.
 * x-ms-original-file: 2023-10-20/LinkedResources_List.json
 */
async function monitorsListLinkedResources(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DatadogClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.datadogMonitorResources.listLinkedResources(
    "myResourceGroup",
    "myMonitor",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await monitorsListLinkedResources();
}

main().catch(console.error);
