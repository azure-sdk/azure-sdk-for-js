// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ScVmmClient } = require("@azure/arm-scvmm");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to deregisters the ScVmm availability set from Azure.
 *
 * @summary deregisters the ScVmm availability set from Azure.
 * x-ms-original-file: 2025-03-13/AvailabilitySets_Delete_MaximumSet_Gen.json
 */
async function availabilitySetsDeleteMaximumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  await client.availabilitySets.delete("rgscvmm", "_", { force: "true" });
}

/**
 * This sample demonstrates how to deregisters the ScVmm availability set from Azure.
 *
 * @summary deregisters the ScVmm availability set from Azure.
 * x-ms-original-file: 2025-03-13/AvailabilitySets_Delete_MinimumSet_Gen.json
 */
async function availabilitySetsDeleteMinimumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  await client.availabilitySets.delete("rgscvmm", "6");
}

async function main() {
  await availabilitySetsDeleteMaximumSet();
  await availabilitySetsDeleteMinimumSet();
}

main().catch(console.error);
