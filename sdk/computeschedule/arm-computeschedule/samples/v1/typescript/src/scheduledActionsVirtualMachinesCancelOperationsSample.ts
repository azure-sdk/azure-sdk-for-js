// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeScheduleClient } from "@azure/arm-computeschedule";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to virtualMachinesCancelOperations: Cancel a previously submitted (start/deallocate/hibernate) request
 *
 * @summary virtualMachinesCancelOperations: Cancel a previously submitted (start/deallocate/hibernate) request
 * x-ms-original-file: 2025-05-01/ScheduledActions_VirtualMachinesCancelOperations_MaximumSet_Gen.json
 */
async function scheduledActionsVirtualMachinesCancelOperations(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "7EA018A3-C331-40FB-9A0D-DDD9FB4FDEF5";
  const client = new ComputeScheduleClient(credential, subscriptionId);
  const result = await client.scheduledActions.virtualMachinesCancelOperations("rqftdooona", {
    operationIds: ["lmgwkjlng"],
    correlationId: "vhgqpkvmxkzusevudcelljti",
  });
  console.log(result);
}

async function main(): Promise<void> {
  await scheduledActionsVirtualMachinesCancelOperations();
}

main().catch(console.error);
