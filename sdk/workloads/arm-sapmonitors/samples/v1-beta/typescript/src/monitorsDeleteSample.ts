// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsClient } from "@azure/arm-sapmonitors";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to deletes a SAP monitor with the specified subscription, resource group, and SAP monitor name.
 *
 * @summary deletes a SAP monitor with the specified subscription, resource group, and SAP monitor name.
 * x-ms-original-file: 2024-02-01-preview/Monitors_Delete.json
 */
async function deletesASAPMonitor(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  await client.monitors.delete("myResourceGroup", "mySapMonitor");
}

async function main(): Promise<void> {
  await deletesASAPMonitor();
}

main().catch(console.error);
