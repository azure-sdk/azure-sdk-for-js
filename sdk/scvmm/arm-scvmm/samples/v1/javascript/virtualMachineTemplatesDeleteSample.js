// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ScVmmClient } = require("@azure/arm-scvmm");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to deregisters the ScVmm VM Template from Azure.
 *
 * @summary deregisters the ScVmm VM Template from Azure.
 * x-ms-original-file: 2025-03-13/VirtualMachineTemplates_Delete_MaximumSet_Gen.json
 */
async function virtualMachineTemplatesDeleteMaximumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  await client.virtualMachineTemplates.delete("rgscvmm", "6", {
    force: "true",
  });
}

/**
 * This sample demonstrates how to deregisters the ScVmm VM Template from Azure.
 *
 * @summary deregisters the ScVmm VM Template from Azure.
 * x-ms-original-file: 2025-03-13/VirtualMachineTemplates_Delete_MinimumSet_Gen.json
 */
async function virtualMachineTemplatesDeleteMinimumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  await client.virtualMachineTemplates.delete("rgscvmm", "5");
}

async function main() {
  await virtualMachineTemplatesDeleteMaximumSet();
  await virtualMachineTemplatesDeleteMinimumSet();
}

main().catch(console.error);
