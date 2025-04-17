// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeScheduleClient } from "@azure/arm-computeschedule";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to virtualMachinesExecuteCreate: Execute create operation for a batch of virtual machines, this operation is triggered as soon as Computeschedule receives it.
 *
 * @summary virtualMachinesExecuteCreate: Execute create operation for a batch of virtual machines, this operation is triggered as soon as Computeschedule receives it.
 * x-ms-original-file: 2025-05-01/ScheduledActions_VirtualMachinesExecuteCreate_MaximumSet_Gen.json
 */
async function scheduledActionsVirtualMachinesExecuteCreateMaximumSetGenGeneratedByMaximumSetRuleGeneratedByMaximumSetRule(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "0505D8E4-D41A-48FB-9CA5-4AF8D93BE75F";
  const client = new ComputeScheduleClient(credential, subscriptionId);
  const result = await client.scheduledActions.virtualMachinesExecuteCreate("egiw", {
    resourceConfigParameters: {
      baseProfile: "tfgrulcuneopmbdjydzofmhpa",
      resourceOverrides: ["hsqtjgsobjaffl"],
      vmExtensions: [
        {
          name: "xnymtvrxgddnppywidgkxcsrcthx",
          location: "daubzmbqetankmfvcc",
          properties: {},
          tags: {},
        },
      ],
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
async function scheduledActionsVirtualMachinesExecuteCreateMaximumSetGenGeneratedByMaximumSetRuleGeneratedByMinimumSetRule(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "0505D8E4-D41A-48FB-9CA5-4AF8D93BE75F";
  const client = new ComputeScheduleClient(credential, subscriptionId);
  const result = await client.scheduledActions.virtualMachinesExecuteCreate("nrpuchctpj", {
    resourceConfigParameters: { resourceCount: 28 },
    executionParameters: {},
  });
  console.log(result);
}

async function main(): Promise<void> {
  await scheduledActionsVirtualMachinesExecuteCreateMaximumSetGenGeneratedByMaximumSetRuleGeneratedByMaximumSetRule();
  await scheduledActionsVirtualMachinesExecuteCreateMaximumSetGenGeneratedByMaximumSetRuleGeneratedByMinimumSetRule();
}

main().catch(console.error);
