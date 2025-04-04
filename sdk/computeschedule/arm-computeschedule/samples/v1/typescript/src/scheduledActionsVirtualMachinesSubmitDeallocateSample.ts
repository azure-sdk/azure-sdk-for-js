// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeScheduleClient } from "@azure/arm-computeschedule";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to virtualMachinesSubmitDeallocate: Schedule deallocate operation for a batch of virtual machines at datetime in future.
 *
 * @summary virtualMachinesSubmitDeallocate: Schedule deallocate operation for a batch of virtual machines at datetime in future.
 * x-ms-original-file: 2025-05-01/ScheduledActions_VirtualMachinesSubmitDeallocate_MaximumSet_Gen.json
 */
async function scheduledActionsVirtualMachinesSubmitDeallocate(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "7EA018A3-C331-40FB-9A0D-DDD9FB4FDEF5";
  const client = new ComputeScheduleClient(credential, subscriptionId);
  const result = await client.scheduledActions.virtualMachinesSubmitDeallocate("lawcyjjebyry", {
    schedule: {
      deadline: "2025-04-04T20:33:27.504Z",
      userRequestDeadline: "2025-04-04T20:33:27.504Z",
      timezone: "vnmijvfoqyplvcttbjdl",
      userRequestTimezone: "ahowpd",
      deadlineType: "Unknown",
    },
    executionParameters: {
      optimizationPreference: "Cost",
      retryPolicy: { retryCount: 1, retryWindowInMinutes: 8 },
    },
    resources: { ids: ["npfmjea"] },
    correlationId: "yecdtyugquymakkxgzrrplbrx",
  });
  console.log(result);
}

async function main(): Promise<void> {
  await scheduledActionsVirtualMachinesSubmitDeallocate();
}

main().catch(console.error);
