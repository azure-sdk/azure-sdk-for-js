// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { WorkloadsClient } = require("@azure/arm-sapmonitors");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to gets properties of an alert template for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * @summary gets properties of an alert template for the specified subscription, resource group, SAP monitor name, and resource name.
 * x-ms-original-file: 2024-02-01-preview/AlertTemplates_Get.json
 */
async function getPropertiesOfAnAlertTemplate() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.alertTemplates.get(
    "myResourceGroup",
    "mySapMonitor",
    "saphana-cpu-memory-health",
  );
  console.log(result);
}

async function main() {
  await getPropertiesOfAnAlertTemplate();
}

main().catch(console.error);
