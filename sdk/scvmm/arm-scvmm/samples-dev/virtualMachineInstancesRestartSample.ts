// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmClient } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to the operation to restart a virtual machine instance.
 *
 * @summary the operation to restart a virtual machine instance.
 * x-ms-original-file: 2024-06-01/VirtualMachineInstances_Restart_MaximumSet_Gen.json
 */
async function virtualMachineInstancesRestartMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  await client.virtualMachineInstances.restart("gtgclehcbsyave");
}

/**
 * This sample demonstrates how to the operation to restart a virtual machine instance.
 *
 * @summary the operation to restart a virtual machine instance.
 * x-ms-original-file: 2024-06-01/VirtualMachineInstances_Restart_MinimumSet_Gen.json
 */
async function virtualMachineInstancesRestartMinimumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  await client.virtualMachineInstances.restart("gtgclehcbsyave");
}

async function main(): Promise<void> {
  await virtualMachineInstancesRestartMaximumSet();
  await virtualMachineInstancesRestartMinimumSet();
}

main().catch(console.error);
