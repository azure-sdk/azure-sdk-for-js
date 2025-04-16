// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ScVmmClient } = require("@azure/arm-scvmm");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to removes the SCVmm fabric from Azure.
 *
 * @summary removes the SCVmm fabric from Azure.
 * x-ms-original-file: 2025-03-13/VmmServers_Delete_MaximumSet_Gen.json
 */
async function vmmServersDeleteMaximumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  await client.vmmServers.delete("rgscvmm", ".", { force: "true" });
}

/**
 * This sample demonstrates how to removes the SCVmm fabric from Azure.
 *
 * @summary removes the SCVmm fabric from Azure.
 * x-ms-original-file: 2025-03-13/VmmServers_Delete_MinimumSet_Gen.json
 */
async function vmmServersDeleteMinimumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  await client.vmmServers.delete("rgscvmm", "8");
}

async function main() {
  await vmmServersDeleteMaximumSet();
  await vmmServersDeleteMinimumSet();
}

main().catch(console.error);
