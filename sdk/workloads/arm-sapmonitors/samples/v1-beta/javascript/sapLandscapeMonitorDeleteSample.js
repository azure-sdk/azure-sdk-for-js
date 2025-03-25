// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { WorkloadsClient } = require("@azure/arm-sapmonitors");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to deletes a SAP Landscape Monitor Dashboard with the specified subscription, resource group, and SAP monitor name.
 *
 * @summary deletes a SAP Landscape Monitor Dashboard with the specified subscription, resource group, and SAP monitor name.
 * x-ms-original-file: 2024-02-01-preview/SapLandscapeMonitor_Delete.json
 */
async function deletesSAPLandscapeMonitor() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  await client.sapLandscapeMonitor.delete("myResourceGroup", "mySapMonitor");
}

async function main() {
  await deletesSAPLandscapeMonitor();
}

main().catch(console.error);
