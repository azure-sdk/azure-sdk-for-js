// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ComputeScheduleClient } = require("@azure/arm-computeschedule");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to virtualMachinesSubmitHibernate: Schedule hibernate operation for a batch of virtual machines at datetime in future.
 *
 * @summary virtualMachinesSubmitHibernate: Schedule hibernate operation for a batch of virtual machines at datetime in future.
 * x-ms-original-file: 2025-05-01/ScheduledActions_VirtualMachinesSubmitHibernate_MaximumSet_Gen.json
 */
async function scheduledActionsVirtualMachinesSubmitHibernate() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "7EA018A3-C331-40FB-9A0D-DDD9FB4FDEF5";
  const client = new ComputeScheduleClient(credential, subscriptionId);
  const result = await client.scheduledActions.virtualMachinesSubmitHibernate(
    "gbuoeotacdqmfpuranhzra",
    {
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
      correlationId: "dwxgvhjwuezth",
    },
  );
  console.log(result);
}

async function main() {
  await scheduledActionsVirtualMachinesSubmitHibernate();
}

main().catch(console.error);
