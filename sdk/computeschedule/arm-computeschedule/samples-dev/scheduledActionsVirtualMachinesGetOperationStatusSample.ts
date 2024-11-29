// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeScheduleClient } from "@azure/arm-computeschedule";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to virtualMachinesGetOperationStatus: getOperationStatus for a virtual machine
 *
 * @summary virtualMachinesGetOperationStatus: getOperationStatus for a virtual machine
 * x-ms-original-file: 2024-10-01/ScheduledActions_VirtualMachinesGetOperationStatus_MaximumSet_Gen.json
 */
async function scheduledActionsVirtualMachinesGetOperationStatusMaximumSetGenGeneratedByMaximumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "D8E30CC0-2763-4FCC-84A8-3C5659281032";
  const client = new ComputeScheduleClient(credential, subscriptionId);
  const result =
    await client.scheduledActions.virtualMachinesGetOperationStatus("n", {
      operationIds: ["bybstwzkfypdufgxvvtaf"],
      correlationid: "qdwuijwcpstvx",
    });
  console.log(result);
}

/**
 * This sample demonstrates how to virtualMachinesGetOperationStatus: getOperationStatus for a virtual machine
 *
 * @summary virtualMachinesGetOperationStatus: getOperationStatus for a virtual machine
 * x-ms-original-file: 2024-10-01/ScheduledActions_VirtualMachinesGetOperationStatus_MinimumSet_Gen.json
 */
async function scheduledActionsVirtualMachinesGetOperationStatusMaximumSetGenGeneratedByMinimumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "D8E30CC0-2763-4FCC-84A8-3C5659281032";
  const client = new ComputeScheduleClient(credential, subscriptionId);
  const result =
    await client.scheduledActions.virtualMachinesGetOperationStatus("doypjz", {
      operationIds: ["bybstwzkfypdufgxvvtaf"],
      correlationid: "qdwuijwcpstvx",
    });
  console.log(result);
}

async function main() {
  scheduledActionsVirtualMachinesGetOperationStatusMaximumSetGenGeneratedByMaximumSetRule();
  scheduledActionsVirtualMachinesGetOperationStatusMaximumSetGenGeneratedByMinimumSetRule();
}

main().catch(console.error);
