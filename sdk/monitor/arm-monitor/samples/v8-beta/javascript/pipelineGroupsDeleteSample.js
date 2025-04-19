// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { MonitorClient } = require("@azure/arm-monitor");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to delete a pipeline group instance.
 *
 * @summary delete a pipeline group instance.
 * x-ms-original-file: 2023-10-01-preview/PipelineGroupDelete.json
 */
async function deletesAPipelineGroupInstance() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new MonitorClient(credential, subscriptionId);
  await client.pipelineGroups.delete("myResourceGroup", "plGroup1");
}

async function main() {
  await deletesAPipelineGroupInstance();
}

main().catch(console.error);
