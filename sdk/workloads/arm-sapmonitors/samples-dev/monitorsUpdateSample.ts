// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsClient } from "@azure/arm-sapmonitors";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to patches the Tags field of a SAP monitor for the specified subscription, resource group, and SAP monitor name.
 *
 * @summary patches the Tags field of a SAP monitor for the specified subscription, resource group, and SAP monitor name.
 * x-ms-original-file: 2024-02-01-preview/Monitors_Update_Delete_Tags_Field_Of_A_Sap_Monitor.json
 */
async function deleteTagsFieldOfASAPMonitor(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.monitors.update("myResourceGroup", "mySapMonitor", {
    identity: { type: "None" },
    tags: {},
  });
  console.log(result);
}

/**
 * This sample demonstrates how to patches the Tags field of a SAP monitor for the specified subscription, resource group, and SAP monitor name.
 *
 * @summary patches the Tags field of a SAP monitor for the specified subscription, resource group, and SAP monitor name.
 * x-ms-original-file: 2024-02-01-preview/Monitors_Update_Update_Tags_Field_Of_A_Sap_Monitor.json
 */
async function updateTagsFieldOfASAPMonitor(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.monitors.update("myResourceGroup", "mySapMonitor", {
    identity: { type: "SystemAssigned" },
    tags: { testkey: "testvalue" },
  });
  console.log(result);
}

async function main(): Promise<void> {
  await deleteTagsFieldOfASAPMonitor();
  await updateTagsFieldOfASAPMonitor();
}

main().catch(console.error);
