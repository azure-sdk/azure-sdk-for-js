// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmClient } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to returns the list of GuestAgent of the given vm.
 *
 * @summary returns the list of GuestAgent of the given vm.
 * x-ms-original-file: 2024-06-01/GuestAgents_ListByVirtualMachineInstance_MaximumSet_Gen.json
 */
async function guestAgentsListByVirtualMachineInstanceMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.guestAgents.listByVirtualMachineInstance("gtgclehcbsyave")) {
    resArray.push(item);
  }

  console.log(resArray);
}

/**
 * This sample demonstrates how to returns the list of GuestAgent of the given vm.
 *
 * @summary returns the list of GuestAgent of the given vm.
 * x-ms-original-file: 2024-06-01/GuestAgents_ListByVirtualMachineInstance_MinimumSet_Gen.json
 */
async function guestAgentsListByVirtualMachineInstanceMinimumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.guestAgents.listByVirtualMachineInstance("gtgclehcbsyave")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await guestAgentsListByVirtualMachineInstanceMaximumSet();
  await guestAgentsListByVirtualMachineInstanceMinimumSet();
}

main().catch(console.error);
