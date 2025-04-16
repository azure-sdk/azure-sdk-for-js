// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmClient } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to updates the VirtualMachineTemplate resource.
 *
 * @summary updates the VirtualMachineTemplate resource.
 * x-ms-original-file: 2025-03-13/VirtualMachineTemplates_Update_MaximumSet_Gen.json
 */
async function virtualMachineTemplatesUpdateMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.virtualMachineTemplates.update("rgscvmm", "g", {
    tags: { key6634: "wwfhrg" },
  });
  console.log(result);
}

/**
 * This sample demonstrates how to updates the VirtualMachineTemplate resource.
 *
 * @summary updates the VirtualMachineTemplate resource.
 * x-ms-original-file: 2025-03-13/VirtualMachineTemplates_Update_MinimumSet_Gen.json
 */
async function virtualMachineTemplatesUpdateMinimumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.virtualMachineTemplates.update("rgscvmm", "-", {});
  console.log(result);
}

async function main(): Promise<void> {
  await virtualMachineTemplatesUpdateMaximumSet();
  await virtualMachineTemplatesUpdateMinimumSet();
}

main().catch(console.error);
