// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ScVmmClient } = require("@azure/arm-scvmm");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to the operation to start a virtual machine instance.
 *
 * @summary the operation to start a virtual machine instance.
 * x-ms-original-file: 2025-03-13/VirtualMachineInstances_Start_MaximumSet_Gen.json
 */
async function virtualMachineInstancesStartMaximumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  await client.virtualMachineInstances.start("gtgclehcbsyave");
}

/**
 * This sample demonstrates how to the operation to start a virtual machine instance.
 *
 * @summary the operation to start a virtual machine instance.
 * x-ms-original-file: 2025-03-13/VirtualMachineInstances_Start_MinimumSet_Gen.json
 */
async function virtualMachineInstancesStartMinimumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  await client.virtualMachineInstances.start("gtgclehcbsyave");
}

async function main() {
  await virtualMachineInstancesStartMaximumSet();
  await virtualMachineInstancesStartMinimumSet();
}

main().catch(console.error);
