// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmClient } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to returns the list of HybridIdentityMetadata of the given VM.
 *
 * @summary returns the list of HybridIdentityMetadata of the given VM.
 * x-ms-original-file: 2024-06-01/VmInstanceHybridIdentityMetadatas_ListByVirtualMachineInstance_MaximumSet_Gen.json
 */
async function vmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceMaximumSet(): Promise<void> {
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
 * x-ms-original-file: 2024-06-01/VmInstanceHybridIdentityMetadatas_ListByVirtualMachineInstance_MinimumSet_Gen.json
 */
async function vmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceMinimumSet(): Promise<void> {
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

async function main(): Promise<void> {
  await vmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceMaximumSet();
  await vmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceMinimumSet();
}

main().catch(console.error);
