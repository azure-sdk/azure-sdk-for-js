// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { DatabaseClient } = require("@azure/arm-oracledatabase");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to list AutonomousDatabaseBackup resources by AutonomousDatabase
 *
 * @summary list AutonomousDatabaseBackup resources by AutonomousDatabase
 * x-ms-original-file: 2024-10-01-preview/autonomousDatabaseBackup_listByParent.json
 */
async function autonomousDatabaseBackupsListByAutonomousDatabase() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DatabaseClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.autonomousDatabaseBackups.listByAutonomousDatabase(
    "rg000",
    "databasedb1",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  await autonomousDatabaseBackupsListByAutonomousDatabase();
}

main().catch(console.error);
