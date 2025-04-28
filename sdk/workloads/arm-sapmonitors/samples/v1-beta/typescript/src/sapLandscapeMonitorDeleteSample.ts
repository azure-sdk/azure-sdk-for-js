// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsClient } from "@azure/arm-sapmonitors";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to deletes a SAP Landscape Monitor Dashboard with the specified subscription, resource group, and SAP monitor name.
 *
 * @summary deletes a SAP Landscape Monitor Dashboard with the specified subscription, resource group, and SAP monitor name.
 * x-ms-original-file: 2024-02-01-preview/SapLandscapeMonitor_Delete.json
 */
async function deletesSAPLandscapeMonitor(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  await client.sapLandscapeMonitor.delete("myResourceGroup", "mySapMonitor");
}

async function main(): Promise<void> {
  await deletesSAPLandscapeMonitor();
}

main().catch(console.error);
