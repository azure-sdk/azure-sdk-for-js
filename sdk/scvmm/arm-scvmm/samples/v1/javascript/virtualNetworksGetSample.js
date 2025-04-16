// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ScVmmClient } = require("@azure/arm-scvmm");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to implements VirtualNetwork GET method.
 *
 * @summary implements VirtualNetwork GET method.
 * x-ms-original-file: 2025-03-13/VirtualNetworks_Get_MaximumSet_Gen.json
 */
async function virtualNetworksGetMaximumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.virtualNetworks.get("rgscvmm", "2");
  console.log(result);
}

/**
 * This sample demonstrates how to implements VirtualNetwork GET method.
 *
 * @summary implements VirtualNetwork GET method.
 * x-ms-original-file: 2025-03-13/VirtualNetworks_Get_MinimumSet_Gen.json
 */
async function virtualNetworksGetMinimumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.virtualNetworks.get("rgscvmm", "-");
  console.log(result);
}

async function main() {
  await virtualNetworksGetMaximumSet();
  await virtualNetworksGetMinimumSet();
}

main().catch(console.error);
