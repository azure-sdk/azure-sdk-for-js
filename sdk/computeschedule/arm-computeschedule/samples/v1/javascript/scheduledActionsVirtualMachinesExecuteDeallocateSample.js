// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ComputeScheduleClient } = require("@azure/arm-computeschedule");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to virtualMachinesExecuteDeallocate: Execute deallocate operation for a batch of virtual machines, this operation is triggered as soon as Computeschedule receives it.
 *
 * @summary virtualMachinesExecuteDeallocate: Execute deallocate operation for a batch of virtual machines, this operation is triggered as soon as Computeschedule receives it.
 * x-ms-original-file: 2025-05-01/ScheduledActions_VirtualMachinesExecuteDeallocate_MaximumSet_Gen.json
 */
async function scheduledActionsVirtualMachinesExecuteDeallocate() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "7EA018A3-C331-40FB-9A0D-DDD9FB4FDEF5";
  const client = new ComputeScheduleClient(credential, subscriptionId);
  const result = await client.scheduledActions.virtualMachinesExecuteDeallocate("lqbea", {
    executionParameters: {
      optimizationPreference: "Cost",
      retryPolicy: { retryCount: 1, retryWindowInMinutes: 8 },
    },
    resources: { ids: ["npfmjea"] },
    correlationId: "wmfrxicixogubeuvikqzrry",
  });
  console.log(result);
}

async function main() {
  await scheduledActionsVirtualMachinesExecuteDeallocate();
}

main().catch(console.error);
