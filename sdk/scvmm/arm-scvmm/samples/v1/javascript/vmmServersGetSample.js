// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ScVmmClient } = require("@azure/arm-scvmm");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to implements VmmServer GET method.
 *
 * @summary implements VmmServer GET method.
 * x-ms-original-file: 2025-03-13/VmmServers_Get_MaximumSet_Gen.json
 */
async function vmmServersGetMaximumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.vmmServers.get("rgscvmm", ".");
  console.log(result);
}

/**
 * This sample demonstrates how to implements VmmServer GET method.
 *
 * @summary implements VmmServer GET method.
 * x-ms-original-file: 2025-03-13/VmmServers_Get_MinimumSet_Gen.json
 */
async function vmmServersGetMinimumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.vmmServers.get("rgscvmm", "D");
  console.log(result);
}

async function main() {
  await vmmServersGetMaximumSet();
  await vmmServersGetMinimumSet();
}

main().catch(console.error);
