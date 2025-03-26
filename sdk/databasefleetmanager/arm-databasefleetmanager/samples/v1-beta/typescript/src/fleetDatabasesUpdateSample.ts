// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseFleetManagerClient } from "@azure/arm-databasefleetmanager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to updates a fleet database.
 *
 * @summary updates a fleet database.
 * x-ms-original-file: 2025-02-01-preview/FleetDatabases_Update_MaximumSet_Gen.json
 */
async function updateDatabaseInFleetspaceGeneratedByPolicy(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "C3897315-3847-4D8A-B2FC-7307B066AD63";
  const client = new DatabaseFleetManagerClient(credential, subscriptionId);
  const result = await client.fleetDatabases.update(
    "rgdatabasefleetmanager",
    "production-fleet",
    "primary-space",
    "customer-database-prod",
    {
      properties: {
        createMode: "Default",
        tierName: "Standard",
        restoreFromTime: new Date("2024-11-06T09:16:05.048Z"),
        sourceDatabaseName: "customer-database-staging",
        resourceTags: { environment: "production", owner: "database-team" },
        identity: {
          identityType: "UserAssigned",
          userAssignedIdentities: [
            {
              resourceId:
                "/subscriptions/C3897315-3847-4D8A-B2FC-7307B066AD63/resourcegroups/rgdatabasefleetmanager/providers/Microsoft.ManagedIdentity/userAssignedIdentities/db-identity",
              principalId: "f8b7c2d3-b9c4-4f3b-85cd-3d56c6e49f92",
              clientId: "d2d8b19e-c4f7-4c62-8e8d-7f0f96d94e39",
            },
          ],
          federatedClientId: "a2b3c4d5-6789-0123-4567-89abcdef1234",
        },
        transparentDataEncryption: {
          keyUri: "https://keyvault-contoso.vault.azure.net/keys/db-encryption-key/abc123",
          keys: ["abc123", "xyz789"],
          enableAutoRotation: true,
        },
      },
    },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await updateDatabaseInFleetspaceGeneratedByPolicy();
}

main().catch(console.error);
