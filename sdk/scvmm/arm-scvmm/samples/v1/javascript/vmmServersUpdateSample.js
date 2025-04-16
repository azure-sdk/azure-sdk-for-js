// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ScVmmClient } = require("@azure/arm-scvmm");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to updates the VmmServers resource.
 *
 * @summary updates the VmmServers resource.
 * x-ms-original-file: 2025-03-13/VmmServers_Update_MaximumSet_Gen.json
 */
async function vmmServersUpdateMaximumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.vmmServers.update("rgscvmm", "Y", {
    tags: { key7187: "oktnfvklfchnquelzzdagtpwfskzc" },
  });
  console.log(result);
}

/**
 * This sample demonstrates how to updates the VmmServers resource.
 *
 * @summary updates the VmmServers resource.
 * x-ms-original-file: 2025-03-13/VmmServers_Update_MinimumSet_Gen.json
 */
async function vmmServersUpdateMinimumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.vmmServers.update("rgscvmm", "_", {});
  console.log(result);
}

async function main() {
  await vmmServersUpdateMaximumSet();
  await vmmServersUpdateMinimumSet();
}

main().catch(console.error);
