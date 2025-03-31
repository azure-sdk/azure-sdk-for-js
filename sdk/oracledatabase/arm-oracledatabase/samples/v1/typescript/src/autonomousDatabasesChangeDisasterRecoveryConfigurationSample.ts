// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseClient } from "@azure/arm-oracledatabase";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to perform ChangeDisasterRecoveryConfiguration action on Autonomous Database
 *
 * @summary perform ChangeDisasterRecoveryConfiguration action on Autonomous Database
 * x-ms-original-file: 2024-10-01-preview/autonomousDatabase_changeDisasterRecoveryConfiguration.json
 */
async function autonomousDatabasesChangeDisasterRecoveryConfiguration(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DatabaseClient(credential, subscriptionId);
  const result = await client.autonomousDatabases.changeDisasterRecoveryConfiguration(
    "rg000",
    "databasedb1",
    { disasterRecoveryType: "Adg", isReplicateAutomaticBackups: false },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await autonomousDatabasesChangeDisasterRecoveryConfiguration();
}

main().catch(console.error);
