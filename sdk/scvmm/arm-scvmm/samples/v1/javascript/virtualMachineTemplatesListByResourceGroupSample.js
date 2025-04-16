// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ScVmmClient } = require("@azure/arm-scvmm");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to list of VirtualMachineTemplates in a resource group.
 *
 * @summary list of VirtualMachineTemplates in a resource group.
 * x-ms-original-file: 2025-03-13/VirtualMachineTemplates_ListByResourceGroup_MaximumSet_Gen.json
 */
async function virtualMachineTemplatesListByResourceGroupMaximumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.virtualMachineTemplates.listByResourceGroup("rgscvmm")) {
    resArray.push(item);
  }

  console.log(resArray);
}

/**
 * This sample demonstrates how to list of VirtualMachineTemplates in a resource group.
 *
 * @summary list of VirtualMachineTemplates in a resource group.
 * x-ms-original-file: 2025-03-13/VirtualMachineTemplates_ListByResourceGroup_MinimumSet_Gen.json
 */
async function virtualMachineTemplatesListByResourceGroupMinimumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.virtualMachineTemplates.listByResourceGroup("rgscvmm")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  await virtualMachineTemplatesListByResourceGroupMaximumSet();
  await virtualMachineTemplatesListByResourceGroupMinimumSet();
}

main().catch(console.error);
