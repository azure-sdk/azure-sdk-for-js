// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeScheduleClient } from "@azure/arm-computeschedule";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to virtualMachinesExecuteDeallocate: executeDeallocate for a virtual machine
 *
 * @summary virtualMachinesExecuteDeallocate: executeDeallocate for a virtual machine
 * x-ms-original-file: 2024-10-01/ScheduledActions_VirtualMachinesExecuteDeallocate_MaximumSet_Gen.json
 */
async function scheduledActionsVirtualMachinesExecuteDeallocateMaximumSetGenGeneratedByMaximumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "D8E30CC0-2763-4FCC-84A8-3C5659281032";
  const client = new ComputeScheduleClient(credential, subscriptionId);
  const result = await client.scheduledActions.virtualMachinesExecuteDeallocate(
    "emghzcdjeqqjwibfeklrsnsrcwbg",
    {
      executionParameters: {
        optimizationPreference: "Cost",
        retryPolicy: { retryCount: 27, retryWindowInMinutes: 27 },
      },
      resources: {
        ids: [
          "/subscriptions/YourSubscriptionId/resourceGroups/YourResourceGroupName/providers/Microsoft.Compute/virtualMachines/testResource3",
        ],
      },
      correlationid: "exoxgqdgcfiszehwxixjkkgitmnu",
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to virtualMachinesExecuteDeallocate: executeDeallocate for a virtual machine
 *
 * @summary virtualMachinesExecuteDeallocate: executeDeallocate for a virtual machine
 * x-ms-original-file: 2024-10-01/ScheduledActions_VirtualMachinesExecuteDeallocate_MinimumSet_Gen.json
 */
async function scheduledActionsVirtualMachinesExecuteDeallocateMaximumSetGenGeneratedByMinimumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "D8E30CC0-2763-4FCC-84A8-3C5659281032";
  const client = new ComputeScheduleClient(credential, subscriptionId);
  const result = await client.scheduledActions.virtualMachinesExecuteDeallocate(
    "t",
    {
      executionParameters: {},
      resources: {
        ids: [
          "/subscriptions/YourSubscriptionId/resourceGroups/YourResourceGroupName/providers/Microsoft.Compute/virtualMachines/testResource3",
        ],
      },
      correlationid: "exoxgqdgcfiszehwxixjkkgitmnu",
    },
  );
  console.log(result);
}

async function main() {
  scheduledActionsVirtualMachinesExecuteDeallocateMaximumSetGenGeneratedByMaximumSetRule();
  scheduledActionsVirtualMachinesExecuteDeallocateMaximumSetGenGeneratedByMinimumSetRule();
}

main().catch(console.error);
