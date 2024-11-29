// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeScheduleClient } from "@azure/arm-computeschedule";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to virtualMachinesSubmitStart: submitStart for a virtual machine
 *
 * @summary virtualMachinesSubmitStart: submitStart for a virtual machine
 * x-ms-original-file: 2024-10-01/ScheduledActions_VirtualMachinesSubmitStart_MaximumSet_Gen.json
 */
async function scheduledActionsVirtualMachinesSubmitStartMaximumSetGenGeneratedByMaximumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "D8E30CC0-2763-4FCC-84A8-3C5659281032";
  const client = new ComputeScheduleClient(credential, subscriptionId);
  const result = await client.scheduledActions.virtualMachinesSubmitStart(
    "wqmhcqilzhjtgphyrtmxd",
    {
      schedule: {
        deadline: "2024-11-01T17:52:54.215Z",
        timezone: "csrtkjccrazescylvjzn",
        deadlineType: "Unknown",
      },
      executionParameters: {
        optimizationPreference: "Cost",
        retryPolicy: { retryCount: 27, retryWindowInMinutes: 27 },
      },
      resources: {
        ids: [
          "/subscriptions/YourSubscriptionId/resourceGroups/YourResourceGroupName/providers/Microsoft.Compute/virtualMachines/testResource3",
        ],
      },
      correlationid: "rtz",
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to virtualMachinesSubmitStart: submitStart for a virtual machine
 *
 * @summary virtualMachinesSubmitStart: submitStart for a virtual machine
 * x-ms-original-file: 2024-10-01/ScheduledActions_VirtualMachinesSubmitStart_MinimumSet_Gen.json
 */
async function scheduledActionsVirtualMachinesSubmitStartMaximumSetGenGeneratedByMinimumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "D8E30CC0-2763-4FCC-84A8-3C5659281032";
  const client = new ComputeScheduleClient(credential, subscriptionId);
  const result = await client.scheduledActions.virtualMachinesSubmitStart(
    "qgxm",
    {
      schedule: {
        deadline: "2024-11-01T17:52:54.215Z",
        timezone: "csrtkjccrazescylvjzn",
        deadlineType: "Unknown",
      },
      executionParameters: {},
      resources: {
        ids: [
          "/subscriptions/YourSubscriptionId/resourceGroups/YourResourceGroupName/providers/Microsoft.Compute/virtualMachines/testResource3",
        ],
      },
      correlationid: "rtz",
    },
  );
  console.log(result);
}

async function main() {
  scheduledActionsVirtualMachinesSubmitStartMaximumSetGenGeneratedByMaximumSetRule();
  scheduledActionsVirtualMachinesSubmitStartMaximumSetGenGeneratedByMinimumSetRule();
}

main().catch(console.error);
