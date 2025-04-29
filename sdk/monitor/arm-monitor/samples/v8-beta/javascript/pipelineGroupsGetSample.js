// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { MonitorClient } = require("@azure/arm-monitor");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to returns the specific pipeline group instance.
 *
 * @summary returns the specific pipeline group instance.
 * x-ms-original-file: 2023-10-01-preview/PipelineGroupGet.json
 */
async function retrievesAPipelineGroupInstanceByName() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.pipelineGroups.get("myResourceGroup", "plGroup1");
  console.log(result);
}

async function main() {
  await retrievesAPipelineGroupInstanceByName();
}

main().catch(console.error);
