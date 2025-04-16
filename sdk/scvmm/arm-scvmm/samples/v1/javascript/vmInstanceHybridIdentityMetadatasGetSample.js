// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ScVmmClient } = require("@azure/arm-scvmm");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to implements HybridIdentityMetadata GET method.
 *
 * @summary implements HybridIdentityMetadata GET method.
 * x-ms-original-file: 2025-03-13/VmInstanceHybridIdentityMetadatas_Get_MaximumSet_Gen.json
 */
async function vmInstanceHybridIdentityMetadatasGetMaximumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.vmInstanceHybridIdentityMetadatas.get("gtgclehcbsyave");
  console.log(result);
}

/**
 * This sample demonstrates how to implements HybridIdentityMetadata GET method.
 *
 * @summary implements HybridIdentityMetadata GET method.
 * x-ms-original-file: 2025-03-13/VmInstanceHybridIdentityMetadatas_Get_MinimumSet_Gen.json
 */
async function vmInstanceHybridIdentityMetadatasGetMinimumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.vmInstanceHybridIdentityMetadatas.get("gtgclehcbsyave");
  console.log(result);
}

async function main() {
  await vmInstanceHybridIdentityMetadatasGetMaximumSet();
  await vmInstanceHybridIdentityMetadatasGetMinimumSet();
}

main().catch(console.error);
