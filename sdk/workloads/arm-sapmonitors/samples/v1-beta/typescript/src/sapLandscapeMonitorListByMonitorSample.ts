// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsClient } from "@azure/arm-sapmonitors";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets configuration values for Single Pane Of Glass for SAP monitor for the specified subscription, resource group, and resource name.
 *
 * @summary gets configuration values for Single Pane Of Glass for SAP monitor for the specified subscription, resource group, and resource name.
 * x-ms-original-file: 2024-02-01-preview/SapLandscapeMonitor_List.json
 */
async function listTheSAPLandscapeMonitorS(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.sapLandscapeMonitor.listByMonitor(
    "myResourceGroup",
    "mySapMonitor",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await listTheSAPLandscapeMonitorS();
}

main().catch(console.error);
