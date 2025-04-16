// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ScVmmClient } = require("@azure/arm-scvmm");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to restores to a checkpoint in virtual machine instance.
 *
 * @summary restores to a checkpoint in virtual machine instance.
 * x-ms-original-file: 2025-03-13/VirtualMachineInstances_RestoreCheckpoint_MaximumSet_Gen.json
 */
async function virtualMachineInstancesRestoreCheckpointMaximumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  await client.virtualMachineInstances.restoreCheckpoint("gtgclehcbsyave", {
    id: "rweqduwzsn",
  });
}

/**
 * This sample demonstrates how to restores to a checkpoint in virtual machine instance.
 *
 * @summary restores to a checkpoint in virtual machine instance.
 * x-ms-original-file: 2025-03-13/VirtualMachineInstances_RestoreCheckpoint_MinimumSet_Gen.json
 */
async function virtualMachineInstancesRestoreCheckpointMinimumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  await client.virtualMachineInstances.restoreCheckpoint("gtgclehcbsyave", {});
}

async function main() {
  await virtualMachineInstancesRestoreCheckpointMaximumSet();
  await virtualMachineInstancesRestoreCheckpointMinimumSet();
}

main().catch(console.error);
