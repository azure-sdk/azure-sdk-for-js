// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmClient } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to deregisters the ScVmm VM Template from Azure.
 *
 * @summary deregisters the ScVmm VM Template from Azure.
 * x-ms-original-file: 2024-06-01/VirtualMachineTemplates_Delete_MaximumSet_Gen.json
 */
async function virtualMachineTemplatesDeleteMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  await client.virtualMachineTemplates.delete("rgscvmm", "6", {
    force: "true",
  });
}

/**
 * This sample demonstrates how to deregisters the ScVmm VM Template from Azure.
 *
 * @summary deregisters the ScVmm VM Template from Azure.
 * x-ms-original-file: 2024-06-01/VirtualMachineTemplates_Delete_MinimumSet_Gen.json
 */
async function virtualMachineTemplatesDeleteMinimumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  await client.virtualMachineTemplates.delete("rgscvmm", "5");
}

async function main(): Promise<void> {
  await virtualMachineTemplatesDeleteMaximumSet();
  await virtualMachineTemplatesDeleteMinimumSet();
}

main().catch(console.error);
