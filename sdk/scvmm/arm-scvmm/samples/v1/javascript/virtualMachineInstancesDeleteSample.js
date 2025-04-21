// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ScVmmClient } = require("@azure/arm-scvmm");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to the operation to delete a virtual machine instance.
 *
 * @summary the operation to delete a virtual machine instance.
 * x-ms-original-file: 2025-03-13/VirtualMachineInstances_Delete_MaximumSet_Gen.json
 */
async function virtualMachineInstancesDeleteMaximumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  await client.virtualMachineInstances.delete("gtgclehcbsyave", {
    force: "true",
    deleteFromHost: "true",
  });
}

/**
 * This sample demonstrates how to the operation to delete a virtual machine instance.
 *
 * @summary the operation to delete a virtual machine instance.
 * x-ms-original-file: 2025-03-13/VirtualMachineInstances_Delete_MinimumSet_Gen.json
 */
async function virtualMachineInstancesDeleteMinimumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  await client.virtualMachineInstances.delete("gtgclehcbsyave");
}

async function main() {
  await virtualMachineInstancesDeleteMaximumSet();
  await virtualMachineInstancesDeleteMinimumSet();
}

main().catch(console.error);
