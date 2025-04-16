// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ScVmmClient } = require("@azure/arm-scvmm");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to retrieves information about a virtual machine instance.
 *
 * @summary retrieves information about a virtual machine instance.
 * x-ms-original-file: 2025-03-13/VirtualMachineInstances_Get_MaximumSet_Gen.json
 */
async function virtualMachineInstancesGetMaximumSet() {
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
 * x-ms-original-file: 2025-03-13/VirtualMachineInstances_Get_MinimumSet_Gen.json
 */
async function virtualMachineInstancesGetMinimumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.virtualMachineInstances.get("gtgclehcbsyave");
  console.log(result);
}

async function main() {
  await virtualMachineInstancesGetMaximumSet();
  await virtualMachineInstancesGetMinimumSet();
}

main().catch(console.error);
