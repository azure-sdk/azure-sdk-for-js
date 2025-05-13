// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeScheduleClient } from "@azure/arm-computeschedule";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to virtualMachinesSubmitDelete: submit delete operation for a batch of virtual machines, at datetime in future.
 *
 * @summary virtualMachinesSubmitDelete: submit delete operation for a batch of virtual machines, at datetime in future.
 * x-ms-original-file: 2025-05-01/ScheduledActions_VirtualMachinesSubmitDelete_MaximumSet_Gen.json
 */
async function scheduledActionsVirtualMachinesSubmitDeleteGeneratedByMaximumSetRule(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "0505D8E4-D41A-48FB-9CA5-4AF8D93BE75F";
  const client = new ComputeScheduleClient(credential, subscriptionId);
  const result = await client.scheduledActions.virtualMachinesSubmitDelete("ppjqysfqumddvzzs", {
    schedule: {
      deadline: "2025-04-15T19:47:04.403Z",
      userRequestDeadline: "2025-04-15T19:47:04.403Z",
      timezone: "qacufsmctpgjozovlsihrzoctatcsj",
      userRequestTimezone: "upnmayfebiadztdktxzq",
      deadlineType: "Unknown",
    },
    executionParameters: {
      optimizationPreference: "Cost",
      retryPolicy: { retryCount: 25, retryWindowInMinutes: 4 },
    },
    resources: {
      ids: [
        "/subscriptions/YourSubscriptionId/resourceGroups/YourResourceGroupName/providers/Microsoft.Compute/virtualMachines/testResource3",
      ],
    },
    correlationid: "e",
    forceDeletion: true,
  });
  console.log(result);
}

/**
 * This sample demonstrates how to virtualMachinesSubmitDelete: submit delete operation for a batch of virtual machines, at datetime in future.
 *
 * @summary virtualMachinesSubmitDelete: submit delete operation for a batch of virtual machines, at datetime in future.
 * x-ms-original-file: 2025-05-01/ScheduledActions_VirtualMachinesSubmitDelete_MinimumSet_Gen.json
 */
async function scheduledActionsVirtualMachinesSubmitDeleteGeneratedByMinimumSetRule(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "0505D8E4-D41A-48FB-9CA5-4AF8D93BE75F";
  const client = new ComputeScheduleClient(credential, subscriptionId);
  const result = await client.scheduledActions.virtualMachinesSubmitDelete("xsllpkyjquhhumdidsl", {
    schedule: { deadlineType: "Unknown" },
    executionParameters: {},
    resources: {
      ids: [
        "/subscriptions/YourSubscriptionId/resourceGroups/YourResourceGroupName/providers/Microsoft.Compute/virtualMachines/testResource3",
      ],
    },
  });
  console.log(result);
}

async function main(): Promise<void> {
  await scheduledActionsVirtualMachinesSubmitDeleteGeneratedByMaximumSetRule();
  await scheduledActionsVirtualMachinesSubmitDeleteGeneratedByMinimumSetRule();
}

main().catch(console.error);
