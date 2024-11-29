// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeScheduleClient } from "@azure/arm-computeschedule";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to virtualMachinesExecuteHibernate: executeHibernate for a virtual machine
 *
 * @summary virtualMachinesExecuteHibernate: executeHibernate for a virtual machine
 * x-ms-original-file: 2024-10-01/ScheduledActions_VirtualMachinesExecuteHibernate_MaximumSet_Gen.json
 */
async function scheduledActionsVirtualMachinesExecuteHibernateMaximumSetGenGeneratedByMaximumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "D8E30CC0-2763-4FCC-84A8-3C5659281032";
  const client = new ComputeScheduleClient(credential, subscriptionId);
  const result = await client.scheduledActions.virtualMachinesExecuteHibernate(
    "cjlwfuuanpzptgvnzyjthdgajrpp",
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
      correlationid: "vyhi",
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to virtualMachinesExecuteHibernate: executeHibernate for a virtual machine
 *
 * @summary virtualMachinesExecuteHibernate: executeHibernate for a virtual machine
 * x-ms-original-file: 2024-10-01/ScheduledActions_VirtualMachinesExecuteHibernate_MinimumSet_Gen.json
 */
async function scheduledActionsVirtualMachinesExecuteHibernateMaximumSetGenGeneratedByMinimumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "D8E30CC0-2763-4FCC-84A8-3C5659281032";
  const client = new ComputeScheduleClient(credential, subscriptionId);
  const result = await client.scheduledActions.virtualMachinesExecuteHibernate(
    "zzrmqofhzmxvuhcd",
    {
      executionParameters: {},
      resources: {
        ids: [
          "/subscriptions/YourSubscriptionId/resourceGroups/YourResourceGroupName/providers/Microsoft.Compute/virtualMachines/testResource3",
        ],
      },
      correlationid: "vyhi",
    },
  );
  console.log(result);
}

async function main() {
  scheduledActionsVirtualMachinesExecuteHibernateMaximumSetGenGeneratedByMaximumSetRule();
  scheduledActionsVirtualMachinesExecuteHibernateMaximumSetGenGeneratedByMinimumSetRule();
}

main().catch(console.error);
