// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseClient } from "@azure/arm-oracledatabase";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list AutonomousDatabaseBackup resources by AutonomousDatabase
 *
 * @summary list AutonomousDatabaseBackup resources by AutonomousDatabase
 * x-ms-original-file: 2024-06-01/autonomousDatabaseBackup_listByParent.json
 */
async function autonomousDatabaseBackupsListByAutonomousDatabase() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DatabaseClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.autonomousDatabaseBackups.listByAutonomousDatabase(
    "rg000",
    "databasedb1",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  autonomousDatabaseBackupsListByAutonomousDatabase();
}

main().catch(console.error);
