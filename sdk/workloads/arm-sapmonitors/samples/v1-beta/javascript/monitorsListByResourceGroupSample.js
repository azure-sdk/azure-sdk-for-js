// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { WorkloadsClient } = require("@azure/arm-sapmonitors");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to gets a list of SAP monitors in the specified resource group.
 *
 * @summary gets a list of SAP monitors in the specified resource group.
 * x-ms-original-file: 2024-02-01-preview/Monitors_ListByResourceGroup.json
 */
async function listAllSAPMonitorsInAResourceGroup() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.monitors.listByResourceGroup("example-rg")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  await listAllSAPMonitorsInAResourceGroup();
}

main().catch(console.error);
