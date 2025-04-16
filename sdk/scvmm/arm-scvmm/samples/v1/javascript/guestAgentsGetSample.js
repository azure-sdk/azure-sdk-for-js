// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ScVmmClient } = require("@azure/arm-scvmm");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to implements GuestAgent GET method.
 *
 * @summary implements GuestAgent GET method.
 * x-ms-original-file: 2025-03-13/GuestAgents_Get_MaximumSet_Gen.json
 */
async function guestAgentsGetMaximumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.guestAgents.get("gtgclehcbsyave");
  console.log(result);
}

/**
 * This sample demonstrates how to implements GuestAgent GET method.
 *
 * @summary implements GuestAgent GET method.
 * x-ms-original-file: 2025-03-13/GuestAgents_Get_MinimumSet_Gen.json
 */
async function guestAgentsGetMinimumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.guestAgents.get("gtgclehcbsyave");
  console.log(result);
}

async function main() {
  await guestAgentsGetMaximumSet();
  await guestAgentsGetMinimumSet();
}

main().catch(console.error);
