// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ComputeScheduleClient } = require("@azure/arm-computeschedule");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to virtualMachinesSubmitDeallocate: Schedule deallocate operation for a batch of virtual machines at datetime in future.
 *
 * @summary virtualMachinesSubmitDeallocate: Schedule deallocate operation for a batch of virtual machines at datetime in future.
 * x-ms-original-file: 2025-05-01/ScheduledActions_VirtualMachinesSubmitDeallocate_MaximumSet_Gen.json
 */
async function scheduledActionsVirtualMachinesSubmitDeallocateMaximumSetGenGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "0505D8E4-D41A-48FB-9CA5-4AF8D93BE75F";
  const client = new ComputeScheduleClient(credential, subscriptionId);
  const result = await client.scheduledActions.virtualMachinesSubmitDeallocate(
    "mqlftjjfnzubxpricsgstgjojaoah",
    {
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
      correlationId: "evmwonebfzxenjdpucgcwdjdya",
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to virtualMachinesSubmitDeallocate: Schedule deallocate operation for a batch of virtual machines at datetime in future.
 *
 * @summary virtualMachinesSubmitDeallocate: Schedule deallocate operation for a batch of virtual machines at datetime in future.
 * x-ms-original-file: 2025-05-01/ScheduledActions_VirtualMachinesSubmitDeallocate_MinimumSet_Gen.json
 */
async function scheduledActionsVirtualMachinesSubmitDeallocateMaximumSetGenGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMinimumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "0505D8E4-D41A-48FB-9CA5-4AF8D93BE75F";
  const client = new ComputeScheduleClient(credential, subscriptionId);
  const result = await client.scheduledActions.virtualMachinesSubmitDeallocate("xrcabowpojl", {
    schedule: { deadlineType: "Unknown" },
    executionParameters: {},
    resources: {
      ids: [
        "/subscriptions/YourSubscriptionId/resourceGroups/YourResourceGroupName/providers/Microsoft.Compute/virtualMachines/testResource3",
      ],
    },
    correlationId: "evmwonebfzxenjdpucgcwdjdya",
  });
  console.log(result);
}

async function main() {
  await scheduledActionsVirtualMachinesSubmitDeallocateMaximumSetGenGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRule();
  await scheduledActionsVirtualMachinesSubmitDeallocateMaximumSetGenGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMinimumSetRule();
}

main().catch(console.error);
