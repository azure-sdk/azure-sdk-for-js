// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatadogClient } from "@azure/arm-datadog";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list all monitors under the specified resource group.
 *
 * @summary list all monitors under the specified resource group.
 * x-ms-original-file: 2023-10-20/Monitors_ListByResourceGroup.json
 */
async function monitorsListByResourceGroup(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DatadogClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.datadogMonitorResources.listByResourceGroup("myResourceGroup")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await monitorsListByResourceGroup();
}

main().catch(console.error);
