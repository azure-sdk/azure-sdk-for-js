// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { MonitorClient } = require("@azure/arm-monitor");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to lists all workspaces in the specified subscription
 *
 * @summary lists all workspaces in the specified subscription
 * x-ms-original-file: 2023-10-01-preview/PipelineGroupListBySubscription.json
 */
async function listPipelineGroupsBySubscription() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new MonitorClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.pipelineGroups.listBySubscription()) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  await listPipelineGroupsBySubscription();
}

main().catch(console.error);
