// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ScVmmClient } = require("@azure/arm-scvmm");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to lists all of the virtual machine instances within the specified parent resource.
 *
 * @summary lists all of the virtual machine instances within the specified parent resource.
 * x-ms-original-file: 2025-03-13/VirtualMachineInstances_List_MaximumSet_Gen.json
 */
async function virtualMachineInstancesListMaximumSet() {
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
 * x-ms-original-file: 2025-03-13/VirtualMachineInstances_List_MinimumSet_Gen.json
 */
async function virtualMachineInstancesListMinimumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.virtualMachineInstances.list("gtgclehcbsyave")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  await virtualMachineInstancesListMaximumSet();
  await virtualMachineInstancesListMinimumSet();
}

main().catch(console.error);
