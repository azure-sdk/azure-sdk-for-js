// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ScVmmClient } = require("@azure/arm-scvmm");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to creates a checkpoint in virtual machine instance.
 *
 * @summary creates a checkpoint in virtual machine instance.
 * x-ms-original-file: 2025-03-13/VirtualMachineInstances_CreateCheckpoint_MaximumSet_Gen.json
 */
async function virtualMachineInstancesCreateCheckpointMaximumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  await client.virtualMachineInstances.createCheckpoint("gtgclehcbsyave", {
    name: "ilvltf",
    description: "zoozhfbepldrgpjqsbhpqebtodrhvy",
  });
}

/**
 * This sample demonstrates how to creates a checkpoint in virtual machine instance.
 *
 * @summary creates a checkpoint in virtual machine instance.
 * x-ms-original-file: 2025-03-13/VirtualMachineInstances_CreateCheckpoint_MinimumSet_Gen.json
 */
async function virtualMachineInstancesCreateCheckpointMinimumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  await client.virtualMachineInstances.createCheckpoint("gtgclehcbsyave", {});
}

async function main() {
  await virtualMachineInstancesCreateCheckpointMaximumSet();
  await virtualMachineInstancesCreateCheckpointMinimumSet();
}

main().catch(console.error);
