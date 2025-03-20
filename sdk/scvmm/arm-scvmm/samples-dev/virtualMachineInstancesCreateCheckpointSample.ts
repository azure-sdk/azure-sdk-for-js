// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmClient } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to creates a checkpoint in virtual machine instance.
 *
 * @summary creates a checkpoint in virtual machine instance.
 * x-ms-original-file: 2024-06-01/VirtualMachineInstances_CreateCheckpoint_MaximumSet_Gen.json
 */
async function virtualMachineInstancesCreateCheckpointMaximumSet(): Promise<void> {
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
 * x-ms-original-file: 2024-06-01/VirtualMachineInstances_CreateCheckpoint_MinimumSet_Gen.json
 */
async function virtualMachineInstancesCreateCheckpointMinimumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  await client.virtualMachineInstances.createCheckpoint("gtgclehcbsyave", {});
}

async function main(): Promise<void> {
  await virtualMachineInstancesCreateCheckpointMaximumSet();
  await virtualMachineInstancesCreateCheckpointMinimumSet();
}

main().catch(console.error);
