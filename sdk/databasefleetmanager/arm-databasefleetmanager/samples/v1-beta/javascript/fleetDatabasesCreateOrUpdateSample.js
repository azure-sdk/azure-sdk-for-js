// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { DatabaseFleetManagerClient } = require("@azure/arm-databasefleetmanager");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to creates or updates a fleet database.
 *
 * @summary creates or updates a fleet database.
 * x-ms-original-file: 2025-02-01-preview/FleetDatabases_CreateOrUpdate_MaximumSet_Gen.json
 */
async function createOrUpdateDatabaseInFleetGeneratedByPolicy() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "C3897315-3847-4D8A-B2FC-7307B066AD63";
  const client = new DatabaseFleetManagerClient(credential, subscriptionId);
  const result = await client.fleetDatabases.createOrUpdate(
    "rg-database-operations",
    "data-fleet-01",
    "prod-environment",
    "customer-db-prod",
    {
      properties: {
        createMode: "Default",
        tierName: "Premium",
        restoreFromTime: new Date("2024-11-06T09:16:05.048Z"),
        sourceDatabaseName: "existing-db-prod",
        resourceTags: { project: "Customer Data" },
        identity: {
          identityType: "None",
          userAssignedIdentities: [
            {
              resourceId:
                "/subscriptions/12345678-90ab-cdef-1234-567890abcdef/resourceGroups/rg-database-operations/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity-01",
              principalId: "a2b3c4d5-6789-0123-4567-89abcdef1234",
              clientId: "a2b3c4d5-6789-0123-4567-89abcdef1234",
            },
          ],
          federatedClientId: "a2b3c4d5-6789-0123-4567-89abcdef1234",
        },
        transparentDataEncryption: {
          keyUri: "https://keyvaultname.vault.azure.net/keys/myKey/12345",
          keys: ["key1"],
          enableAutoRotation: true,
        },
      },
    },
  );
  console.log(result);
}

async function main() {
  await createOrUpdateDatabaseInFleetGeneratedByPolicy();
}

main().catch(console.error);
