// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { WorkloadsClient } = require("@azure/arm-sapmonitors");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to gets properties of a SAP monitor for the specified subscription, resource group, and resource name.
 *
 * @summary gets properties of a SAP monitor for the specified subscription, resource group, and resource name.
 * x-ms-original-file: 2024-02-01-preview/Monitors_Get.json
 */
async function getPropertiesOfASAPMonitor() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.monitors.get("myResourceGroup", "mySapMonitor");
  console.log(result);
}

async function main() {
  await getPropertiesOfASAPMonitor();
}

main().catch(console.error);
