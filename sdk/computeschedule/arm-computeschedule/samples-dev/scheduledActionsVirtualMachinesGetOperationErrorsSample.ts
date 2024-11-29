// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeScheduleClient } from "@azure/arm-computeschedule";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to virtualMachinesGetOperationErrors: getOperationErrors associated with an operation on a virtual machine
 *
 * @summary virtualMachinesGetOperationErrors: getOperationErrors associated with an operation on a virtual machine
 * x-ms-original-file: 2024-10-01/ScheduledActions_VirtualMachinesGetOperationErrors_MaximumSet_Gen.json
 */
async function scheduledActionsVirtualMachinesGetOperationErrorsMaximumSetGenGeneratedByMaximumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "D8E30CC0-2763-4FCC-84A8-3C5659281032";
  const client = new ComputeScheduleClient(credential, subscriptionId);
  const result =
    await client.scheduledActions.virtualMachinesGetOperationErrors(
      "mravjxzqficqzyifzpk",
      { operationIds: ["yrldpeepjdodnbwfgr"] },
    );
  console.log(result);
}

/**
 * This sample demonstrates how to virtualMachinesGetOperationErrors: getOperationErrors associated with an operation on a virtual machine
 *
 * @summary virtualMachinesGetOperationErrors: getOperationErrors associated with an operation on a virtual machine
 * x-ms-original-file: 2024-10-01/ScheduledActions_VirtualMachinesGetOperationErrors_MinimumSet_Gen.json
 */
async function scheduledActionsVirtualMachinesGetOperationErrorsMaximumSetGenGeneratedByMinimumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "D8E30CC0-2763-4FCC-84A8-3C5659281032";
  const client = new ComputeScheduleClient(credential, subscriptionId);
  const result =
    await client.scheduledActions.virtualMachinesGetOperationErrors(
      "xtcsapbyrdpphsq",
      { operationIds: ["yrldpeepjdodnbwfgr"] },
    );
  console.log(result);
}

async function main() {
  scheduledActionsVirtualMachinesGetOperationErrorsMaximumSetGenGeneratedByMaximumSetRule();
  scheduledActionsVirtualMachinesGetOperationErrorsMaximumSetGenGeneratedByMinimumSetRule();
}

main().catch(console.error);
