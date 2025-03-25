// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmClient } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to lists all of the virtual machine instances within the specified parent resource.
 *
 * @summary lists all of the virtual machine instances within the specified parent resource.
 * x-ms-original-file: 2024-06-01/VirtualMachineInstances_List_MaximumSet_Gen.json
 */
async function virtualMachineInstancesListMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.virtualMachineInstances.list("gtgclehcbsyave")) {
    resArray.push(item);
  }

  console.log(resArray);
}

/**
 * This sample demonstrates how to lists all of the virtual machine instances within the specified parent resource.
 *
 * @summary lists all of the virtual machine instances within the specified parent resource.
 * x-ms-original-file: 2024-06-01/VirtualMachineInstances_List_MinimumSet_Gen.json
 */
async function virtualMachineInstancesListMinimumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.virtualMachineInstances.list("gtgclehcbsyave")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await virtualMachineInstancesListMaximumSet();
  await virtualMachineInstancesListMinimumSet();
}

main().catch(console.error);
