// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmClient } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list of VirtualMachineTemplates in a subscription.
 *
 * @summary list of VirtualMachineTemplates in a subscription.
 * x-ms-original-file: 2025-03-13/VirtualMachineTemplates_ListBySubscription_MaximumSet_Gen.json
 */
async function virtualMachineTemplatesListBySubscriptionMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.virtualMachineTemplates.listBySubscription()) {
    resArray.push(item);
  }

  console.log(resArray);
}

/**
 * This sample demonstrates how to list of VirtualMachineTemplates in a subscription.
 *
 * @summary list of VirtualMachineTemplates in a subscription.
 * x-ms-original-file: 2025-03-13/VirtualMachineTemplates_ListBySubscription_MinimumSet_Gen.json
 */
async function virtualMachineTemplatesListBySubscriptionMinimumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.virtualMachineTemplates.listBySubscription()) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await virtualMachineTemplatesListBySubscriptionMaximumSet();
  await virtualMachineTemplatesListBySubscriptionMinimumSet();
}

main().catch(console.error);
