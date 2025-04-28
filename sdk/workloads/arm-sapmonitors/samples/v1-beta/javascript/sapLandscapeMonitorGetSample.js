// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { WorkloadsClient } = require("@azure/arm-sapmonitors");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to gets configuration values for Single Pane Of Glass for SAP monitor for the specified subscription, resource group, and resource name.
 *
 * @summary gets configuration values for Single Pane Of Glass for SAP monitor for the specified subscription, resource group, and resource name.
 * x-ms-original-file: 2024-02-01-preview/SapLandscapeMonitor_Get.json
 */
async function getPropertiesOfSAPLandscapeMonitor() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sapLandscapeMonitor.get("myResourceGroup", "mySapMonitor");
  console.log(result);
}

async function main() {
  await getPropertiesOfSAPLandscapeMonitor();
}

main().catch(console.error);
