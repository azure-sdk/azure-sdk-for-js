// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmClient } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to the operation to start a virtual machine instance.
 *
 * @summary the operation to start a virtual machine instance.
 * x-ms-original-file: 2025-03-13/VirtualMachineInstances_Start_MaximumSet_Gen.json
 */
async function virtualMachineInstancesStartMaximumSet(): Promise<void> {
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
async function virtualMachineInstancesStartMinimumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  await client.virtualMachineInstances.start("gtgclehcbsyave");
}

async function main(): Promise<void> {
  await virtualMachineInstancesStartMaximumSet();
  await virtualMachineInstancesStartMinimumSet();
}

main().catch(console.error);
