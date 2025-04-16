// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ScVmmClient } = require("@azure/arm-scvmm");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to the operation to power off (stop) a virtual machine instance.
 *
 * @summary the operation to power off (stop) a virtual machine instance.
 * x-ms-original-file: 2025-03-13/VirtualMachineInstances_Stop_MaximumSet_Gen.json
 */
async function virtualMachineInstancesStopMaximumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  await client.virtualMachineInstances.stop("gtgclehcbsyave", {
    body: { skipShutdown: "true" },
  });
}

/**
 * This sample demonstrates how to the operation to power off (stop) a virtual machine instance.
 *
 * @summary the operation to power off (stop) a virtual machine instance.
 * x-ms-original-file: 2025-03-13/VirtualMachineInstances_Stop_MinimumSet_Gen.json
 */
async function virtualMachineInstancesStopMinimumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  await client.virtualMachineInstances.stop("gtgclehcbsyave", { body: {} });
}

async function main() {
  await virtualMachineInstancesStopMaximumSet();
  await virtualMachineInstancesStopMinimumSet();
}

main().catch(console.error);
