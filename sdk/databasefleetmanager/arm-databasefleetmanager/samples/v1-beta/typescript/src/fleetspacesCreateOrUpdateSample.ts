// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseFleetManagerClient } from "@azure/arm-databasefleetmanager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to creates or updates a fleetspace resource.
 *
 * @summary creates or updates a fleetspace resource.
 * x-ms-original-file: 2025-02-01-preview/Fleetspaces_CreateOrUpdate_MaximumSet_Gen.json
 */
async function createOrUpdateFleetspaceGeneratedByPolicy(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "C3897315-3847-4D8A-B2FC-7307B066AD63";
  const client = new DatabaseFleetManagerClient(credential, subscriptionId);
  const result = await client.fleetspaces.createOrUpdate(
    "rgdatabasefleetmanager",
    "production-fleet",
    "primary-space",
    {
      properties: {
        capacityMax: 150000,
        mainPrincipal: {
          login: "adminUser",
          applicationId: "d2d8b19e-c4f7-4c62-8e8d-7f0f96d94e39",
          objectId: "f8b7c2d3-b9c4-4f3b-85cd-3d56c6e49f92",
          tenantId: "bde45d44-ec42-45b8-a5a2-c5b998c65ef6",
          principalType: "Application",
        },
      },
    },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createOrUpdateFleetspaceGeneratedByPolicy();
}

main().catch(console.error);
