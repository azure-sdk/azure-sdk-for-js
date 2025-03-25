// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { DatabaseClient } = require("@azure/arm-oracledatabase");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to update a AutonomousDatabaseBackup
 *
 * @summary update a AutonomousDatabaseBackup
 * x-ms-original-file: 2024-10-01-preview/autonomousDatabaseBackup_patch.json
 */
async function autonomousDatabaseBackupsUpdate() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DatabaseClient(credential, subscriptionId);
  const result = await client.autonomousDatabaseBackups.update(
    "rg000",
    "databasedb1",
    "1711644130",
    {},
  );
  console.log(result);
}

async function main() {
  await autonomousDatabaseBackupsUpdate();
}

main().catch(console.error);
