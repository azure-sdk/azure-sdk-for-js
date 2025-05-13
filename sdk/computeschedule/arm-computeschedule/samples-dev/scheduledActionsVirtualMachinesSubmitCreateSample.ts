// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeScheduleClient } from "@azure/arm-computeschedule";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to virtualMachinesSubmitCreate: submit create operation for a batch of virtual machines, at datetime in future.
 *
 * @summary virtualMachinesSubmitCreate: submit create operation for a batch of virtual machines, at datetime in future.
 * x-ms-original-file: 2025-05-01/ScheduledActions_VirtualMachinesSubmitCreate_MaximumSet_Gen.json
 */
async function scheduledActionsVirtualMachinesSubmitCreateGeneratedByMaximumSetRule(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "0505D8E4-D41A-48FB-9CA5-4AF8D93BE75F";
  const client = new ComputeScheduleClient(credential, subscriptionId);
  const result = await client.scheduledActions.virtualMachinesSubmitCreate("msbmrhcjsqsydsq", {
    schedule: {
      deadline: "2025-04-15T19:47:04.403Z",
      userRequestDeadline: "2025-04-15T19:47:04.403Z",
      timezone: "qacufsmctpgjozovlsihrzoctatcsj",
      userRequestTimezone: "upnmayfebiadztdktxzq",
      deadlineType: "Unknown",
    },
    resourceConfigParameters: {
      baseProfile: "tfgrulcuneopmbdjydzofmhpa",
      resourceOverrides: ["hsqtjgsobjaffl"],
      resourceCount: 28,
      resourcePrefix: "rqlxavviucrxfjj",
    },
    executionParameters: {
      optimizationPreference: "Cost",
      retryPolicy: { retryCount: 25, retryWindowInMinutes: 4 },
    },
    correlationid: "muxopzmvkxlowegf",
  });
  console.log(result);
}

/**
 * This sample demonstrates how to virtualMachinesSubmitCreate: submit create operation for a batch of virtual machines, at datetime in future.
 *
 * @summary virtualMachinesSubmitCreate: submit create operation for a batch of virtual machines, at datetime in future.
 * x-ms-original-file: 2025-05-01/ScheduledActions_VirtualMachinesSubmitCreate_MinimumSet_Gen.json
 */
async function scheduledActionsVirtualMachinesSubmitCreateGeneratedByMinimumSetRule(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "0505D8E4-D41A-48FB-9CA5-4AF8D93BE75F";
  const client = new ComputeScheduleClient(credential, subscriptionId);
  const result = await client.scheduledActions.virtualMachinesSubmitCreate(
    "hrktusuzoncwpnwohurwlmxfbndt",
    {
      schedule: { deadlineType: "Unknown" },
      resourceConfigParameters: { resourceCount: 28 },
    },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await scheduledActionsVirtualMachinesSubmitCreateGeneratedByMaximumSetRule();
  await scheduledActionsVirtualMachinesSubmitCreateGeneratedByMinimumSetRule();
}

main().catch(console.error);
