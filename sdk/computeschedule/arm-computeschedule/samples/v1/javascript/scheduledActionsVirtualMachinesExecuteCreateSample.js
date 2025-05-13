// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ComputeScheduleClient } = require("@azure/arm-computeschedule");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to virtualMachinesExecuteCreate: Execute create operation for a batch of virtual machines, this operation is triggered as soon as Computeschedule receives it.
 *
 * @summary virtualMachinesExecuteCreate: Execute create operation for a batch of virtual machines, this operation is triggered as soon as Computeschedule receives it.
 * x-ms-original-file: 2025-05-01/ScheduledActions_VirtualMachinesExecuteCreate_MaximumSet_Gen.json
 */
async function scheduledActionsVirtualMachinesExecuteCreateMaximumSetGenGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "0505D8E4-D41A-48FB-9CA5-4AF8D93BE75F";
  const client = new ComputeScheduleClient(credential, subscriptionId);
  const result = await client.scheduledActions.virtualMachinesExecuteCreate("nxbiupqfkijjq", {
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
    correlationid: "erpswvxajdpqgxfpgmzy",
  });
  console.log(result);
}

/**
 * This sample demonstrates how to virtualMachinesExecuteCreate: Execute create operation for a batch of virtual machines, this operation is triggered as soon as Computeschedule receives it.
 *
 * @summary virtualMachinesExecuteCreate: Execute create operation for a batch of virtual machines, this operation is triggered as soon as Computeschedule receives it.
 * x-ms-original-file: 2025-05-01/ScheduledActions_VirtualMachinesExecuteCreate_MinimumSet_Gen.json
 */
async function scheduledActionsVirtualMachinesExecuteCreateMaximumSetGenGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMinimumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "0505D8E4-D41A-48FB-9CA5-4AF8D93BE75F";
  const client = new ComputeScheduleClient(credential, subscriptionId);
  const result = await client.scheduledActions.virtualMachinesExecuteCreate(
    "aiqyytlqsikciuxzocihxb",
    {
      resourceConfigParameters: { resourceCount: 28 },
      executionParameters: {},
    },
  );
  console.log(result);
}

async function main() {
  await scheduledActionsVirtualMachinesExecuteCreateMaximumSetGenGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRule();
  await scheduledActionsVirtualMachinesExecuteCreateMaximumSetGenGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMinimumSetRule();
}

main().catch(console.error);
