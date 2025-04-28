// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { WorkloadsClient } = require("@azure/arm-sapmonitors");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to gets properties of an alert for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * @summary gets properties of an alert for the specified subscription, resource group, SAP monitor name, and resource name.
 * x-ms-original-file: 2024-02-01-preview/Alerts_Get.json
 */
async function getPropertiesOfAnAlert() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.alerts.get("myResourceGroup", "mySapMonitor", "myAlert");
  console.log(result);
}

async function main() {
  await getPropertiesOfAnAlert();
}

main().catch(console.error);
