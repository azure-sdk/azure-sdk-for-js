// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ComputeScheduleClient } = require("@azure/arm-computeschedule");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to virtualMachinesExecuteCreate: Execute delete operation for a batch of virtual machines, this operation is triggered as soon as Computeschedule receives it.
 *
 * @summary virtualMachinesExecuteCreate: Execute delete operation for a batch of virtual machines, this operation is triggered as soon as Computeschedule receives it.
 * x-ms-original-file: 2025-05-01/ScheduledActions_VirtualMachinesExecuteDelete_MaximumSet_Gen.json
 */
async function scheduledActionsVirtualMachinesExecuteDeleteMaximumSetGenGeneratedByMaximumSetRuleGeneratedByMaximumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "0505D8E4-D41A-48FB-9CA5-4AF8D93BE75F";
  const client = new ComputeScheduleClient(credential, subscriptionId);
  const result = await client.scheduledActions.virtualMachinesExecuteDelete("p", {
    executionParameters: {
      optimizationPreference: "Cost",
      retryPolicy: { retryCount: 25, retryWindowInMinutes: 4 },
    },
    resources: {
      ids: [
        "/subscriptions/YourSubscriptionId/resourceGroups/YourResourceGroupName/providers/Microsoft.Compute/virtualMachines/testResource3",
      ],
    },
    correlationid: "lgxsiioaybtjexssjzw",
    forceDeletion: true,
  });
  console.log(result);
}

/**
 * This sample demonstrates how to virtualMachinesExecuteCreate: Execute delete operation for a batch of virtual machines, this operation is triggered as soon as Computeschedule receives it.
 *
 * @summary virtualMachinesExecuteCreate: Execute delete operation for a batch of virtual machines, this operation is triggered as soon as Computeschedule receives it.
 * x-ms-original-file: 2025-05-01/ScheduledActions_VirtualMachinesExecuteDelete_MinimumSet_Gen.json
 */
async function scheduledActionsVirtualMachinesExecuteDeleteMaximumSetGenGeneratedByMaximumSetRuleGeneratedByMinimumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "0505D8E4-D41A-48FB-9CA5-4AF8D93BE75F";
  const client = new ComputeScheduleClient(credential, subscriptionId);
  const result = await client.scheduledActions.virtualMachinesExecuteDelete("wryneytejyvrj", {
    executionParameters: {},
    resources: {
      ids: [
        "/subscriptions/YourSubscriptionId/resourceGroups/YourResourceGroupName/providers/Microsoft.Compute/virtualMachines/testResource3",
      ],
    },
  });
  console.log(result);
}

async function main() {
  await scheduledActionsVirtualMachinesExecuteDeleteMaximumSetGenGeneratedByMaximumSetRuleGeneratedByMaximumSetRule();
  await scheduledActionsVirtualMachinesExecuteDeleteMaximumSetGenGeneratedByMaximumSetRuleGeneratedByMinimumSetRule();
}

main().catch(console.error);
