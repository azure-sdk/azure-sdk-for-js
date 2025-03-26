// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmClient } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to the operation to delete a virtual machine instance.
 *
 * @summary the operation to delete a virtual machine instance.
 * x-ms-original-file: 2024-06-01/VirtualMachineInstances_Delete_MaximumSet_Gen.json
 */
async function virtualMachineInstancesDeleteMaximumSet(): Promise<void> {
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
 * x-ms-original-file: 2024-06-01/VirtualMachineInstances_Delete_MinimumSet_Gen.json
 */
async function virtualMachineInstancesDeleteMinimumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  await client.virtualMachineInstances.delete("gtgclehcbsyave");
}

async function main(): Promise<void> {
  await virtualMachineInstancesDeleteMaximumSet();
  await virtualMachineInstancesDeleteMinimumSet();
}

main().catch(console.error);
