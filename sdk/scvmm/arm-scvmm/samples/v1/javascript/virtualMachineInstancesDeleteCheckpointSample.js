// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ScVmmClient } = require("@azure/arm-scvmm");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to deletes a checkpoint in virtual machine instance.
 *
 * @summary deletes a checkpoint in virtual machine instance.
 * x-ms-original-file: 2025-03-13/VirtualMachineInstances_DeleteCheckpoint_MaximumSet_Gen.json
 */
async function virtualMachineInstancesDeleteCheckpointMaximumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  await client.virtualMachineInstances.deleteCheckpoint("gtgclehcbsyave", {
    id: "eenfflimcbgqfsebdusophahjpk",
  });
}

/**
 * This sample demonstrates how to deletes a checkpoint in virtual machine instance.
 *
 * @summary deletes a checkpoint in virtual machine instance.
 * x-ms-original-file: 2025-03-13/VirtualMachineInstances_DeleteCheckpoint_MinimumSet_Gen.json
 */
async function virtualMachineInstancesDeleteCheckpointMinimumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  await client.virtualMachineInstances.deleteCheckpoint("gtgclehcbsyave", {});
}

async function main() {
  await virtualMachineInstancesDeleteCheckpointMaximumSet();
  await virtualMachineInstancesDeleteCheckpointMinimumSet();
}

main().catch(console.error);
