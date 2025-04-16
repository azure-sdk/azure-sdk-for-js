// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ScVmmClient } = require("@azure/arm-scvmm");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to returns the list of HybridIdentityMetadata of the given VM.
 *
 * @summary returns the list of HybridIdentityMetadata of the given VM.
 * x-ms-original-file: 2025-03-13/VmInstanceHybridIdentityMetadatas_ListByVirtualMachineInstance_MaximumSet_Gen.json
 */
async function vmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceMaximumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.vmInstanceHybridIdentityMetadatas.listByVirtualMachineInstance(
    "gtgclehcbsyave",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

/**
 * This sample demonstrates how to returns the list of HybridIdentityMetadata of the given VM.
 *
 * @summary returns the list of HybridIdentityMetadata of the given VM.
 * x-ms-original-file: 2025-03-13/VmInstanceHybridIdentityMetadatas_ListByVirtualMachineInstance_MinimumSet_Gen.json
 */
async function vmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceMinimumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.vmInstanceHybridIdentityMetadatas.listByVirtualMachineInstance(
    "gtgclehcbsyave",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  await vmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceMaximumSet();
  await vmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceMinimumSet();
}

main().catch(console.error);
