// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmClient } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to retrieves information about a virtual machine instance.
 *
 * @summary retrieves information about a virtual machine instance.
 * x-ms-original-file: 2024-06-01/VirtualMachineInstances_Get_MaximumSet_Gen.json
 */
async function virtualMachineInstancesGetMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.virtualMachineInstances.get("gtgclehcbsyave");
  console.log(result);
}

/**
 * This sample demonstrates how to retrieves information about a virtual machine instance.
 *
 * @summary retrieves information about a virtual machine instance.
 * x-ms-original-file: 2024-06-01/VirtualMachineInstances_Get_MinimumSet_Gen.json
 */
async function virtualMachineInstancesGetMinimumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.virtualMachineInstances.get("gtgclehcbsyave");
  console.log(result);
}

async function main(): Promise<void> {
  await virtualMachineInstancesGetMaximumSet();
  await virtualMachineInstancesGetMinimumSet();
}

main().catch(console.error);
