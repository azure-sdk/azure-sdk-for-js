// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ComputeScheduleClient } = require("@azure/arm-computeschedule");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to virtualMachinesGetOperationStatus: Polling endpoint to read status of operations performed on virtual machines
 *
 * @summary virtualMachinesGetOperationStatus: Polling endpoint to read status of operations performed on virtual machines
 * x-ms-original-file: 2025-05-01/ScheduledActions_VirtualMachinesGetOperationStatus_MaximumSet_Gen.json
 */
async function scheduledActionsVirtualMachinesGetOperationStatus() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "7EA018A3-C331-40FB-9A0D-DDD9FB4FDEF5";
  const client = new ComputeScheduleClient(credential, subscriptionId);
  const result = await client.scheduledActions.virtualMachinesGetOperationStatus("rboizuorywnykz", {
    operationIds: ["ziuci"],
    correlationId: "dommasl",
  });
  console.log(result);
}

async function main() {
  await scheduledActionsVirtualMachinesGetOperationStatus();
}

main().catch(console.error);
