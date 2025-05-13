// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseFleetManagerClient } from "@azure/arm-databasefleetmanager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets fleetspace resource.
 *
 * @summary gets fleetspace resource.
 * x-ms-original-file: 2025-02-01-preview/Fleetspaces_Get_MaximumSet_Gen.json
 */
async function fleetspacesGetMaximumSetGenGeneratedByMaximumSetRule(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "C3897315-3847-4D8A-B2FC-7307B066AD63";
  const client = new DatabaseFleetManagerClient(credential, subscriptionId);
  const result = await client.fleetspaces.get(
    "rgdatabasefleetmanager",
    "production-fleet",
    "primary-space",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await fleetspacesGetMaximumSetGenGeneratedByMaximumSetRule();
}

main().catch(console.error);
