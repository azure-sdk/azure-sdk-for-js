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
async function scheduledActionsVirtualMachinesExecuteCreate(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "7EA018A3-C331-40FB-9A0D-DDD9FB4FDEF5";
  const client = new ComputeScheduleClient(credential, subscriptionId);
  const result = await client.scheduledActions.virtualMachinesExecuteCreate(
    "hwhriqxufntnszxshwjtbhou",
    {
      resourceConfigParameters: {
        baseProfile: "hwgtzdafsbnogpykejd",
        resourceOverrides: ["hayhiqbpqezhquiceha"],
        vmExtensions: [
          {
            name: "qrptgusfvzxfaczhex",
            location: "jntxjvecxcdshemmcocck",
            properties: {},
            tags: {},
          },
        ],
        resourceCount: 16,
        resourcePrefix: "wdoeue",
      },
      executionParameters: {
        optimizationPreference: "Cost",
        retryPolicy: { retryCount: 1, retryWindowInMinutes: 8 },
      },
      correlationid: "inwslrqaqbcatbgezhxbuubq",
    },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await scheduledActionsVirtualMachinesExecuteCreate();
}

main().catch(console.error);
