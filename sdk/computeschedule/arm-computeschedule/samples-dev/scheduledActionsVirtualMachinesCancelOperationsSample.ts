// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeScheduleClient } from "@azure/arm-computeschedule";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to virtualMachinesCancelOperations: cancelOperations for a virtual machine
 *
 * @summary virtualMachinesCancelOperations: cancelOperations for a virtual machine
 * x-ms-original-file: 2024-10-01/ScheduledActions_VirtualMachinesCancelOperations_MaximumSet_Gen.json
 */
async function scheduledActionsVirtualMachinesCancelOperationsMaximumSetGenGeneratedByMaximumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "D8E30CC0-2763-4FCC-84A8-3C5659281032";
  const client = new ComputeScheduleClient(credential, subscriptionId);
  const result = await client.scheduledActions.virtualMachinesCancelOperations(
    "crnpkkzzulnvaauupoolqnsgpcfdgr",
    {
      operationIds: ["nvynvzydoyplsngbkhpw"],
      correlationid: "wkzyavvbrovkgoxdddfcprnvll",
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to virtualMachinesCancelOperations: cancelOperations for a virtual machine
 *
 * @summary virtualMachinesCancelOperations: cancelOperations for a virtual machine
 * x-ms-original-file: 2024-10-01/ScheduledActions_VirtualMachinesCancelOperations_MinimumSet_Gen.json
 */
async function scheduledActionsVirtualMachinesCancelOperationsMaximumSetGenGeneratedByMinimumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "D8E30CC0-2763-4FCC-84A8-3C5659281032";
  const client = new ComputeScheduleClient(credential, subscriptionId);
  const result = await client.scheduledActions.virtualMachinesCancelOperations(
    "inquvldntqixydxjaf",
    {
      operationIds: ["nvynvzydoyplsngbkhpw"],
      correlationid: "wkzyavvbrovkgoxdddfcprnvll",
    },
  );
  console.log(result);
}

async function main() {
  scheduledActionsVirtualMachinesCancelOperationsMaximumSetGenGeneratedByMaximumSetRule();
  scheduledActionsVirtualMachinesCancelOperationsMaximumSetGenGeneratedByMinimumSetRule();
}

main().catch(console.error);
