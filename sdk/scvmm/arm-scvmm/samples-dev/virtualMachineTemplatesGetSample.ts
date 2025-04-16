// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmClient } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to implements VirtualMachineTemplate GET method.
 *
 * @summary implements VirtualMachineTemplate GET method.
 * x-ms-original-file: 2025-03-13/VirtualMachineTemplates_Get_MaximumSet_Gen.json
 */
async function virtualMachineTemplatesGetMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.virtualMachineTemplates.get("rgscvmm", "4");
  console.log(result);
}

/**
 * This sample demonstrates how to implements VirtualMachineTemplate GET method.
 *
 * @summary implements VirtualMachineTemplate GET method.
 * x-ms-original-file: 2025-03-13/VirtualMachineTemplates_Get_MinimumSet_Gen.json
 */
async function virtualMachineTemplatesGetMinimumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.virtualMachineTemplates.get("rgscvmm", "m");
  console.log(result);
}

async function main(): Promise<void> {
  await virtualMachineTemplatesGetMaximumSet();
  await virtualMachineTemplatesGetMinimumSet();
}

main().catch(console.error);
