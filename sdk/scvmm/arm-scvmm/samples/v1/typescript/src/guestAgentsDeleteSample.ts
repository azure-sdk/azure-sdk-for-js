// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmClient } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to implements GuestAgent DELETE method.
 *
 * @summary implements GuestAgent DELETE method.
 * x-ms-original-file: 2025-03-13/GuestAgents_Delete_MaximumSet_Gen.json
 */
async function guestAgentsDeleteMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  await client.guestAgents.delete("gtgclehcbsyave");
}

/**
 * This sample demonstrates how to implements GuestAgent DELETE method.
 *
 * @summary implements GuestAgent DELETE method.
 * x-ms-original-file: 2025-03-13/GuestAgents_Delete_MinimumSet_Gen.json
 */
async function guestAgentsDeleteMinimumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  await client.guestAgents.delete("gtgclehcbsyave");
}

async function main(): Promise<void> {
  await guestAgentsDeleteMaximumSet();
  await guestAgentsDeleteMinimumSet();
}

main().catch(console.error);
