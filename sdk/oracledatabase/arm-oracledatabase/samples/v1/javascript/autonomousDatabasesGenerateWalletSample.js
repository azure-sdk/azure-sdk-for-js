// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { DatabaseClient } = require("@azure/arm-oracledatabase");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to generate wallet action on Autonomous Database
 *
 * @summary generate wallet action on Autonomous Database
 * x-ms-original-file: 2024-10-01-preview/autonomousDatabase_generateWallet.json
 */
async function autonomousDatabasesGenerateWallet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DatabaseClient(credential, subscriptionId);
  const result = await client.autonomousDatabases.generateWallet("rg000", "databasedb1", {
    generateType: "Single",
    isRegional: false,
    password: "********",
  });
  console.log(result);
}

async function main() {
  await autonomousDatabasesGenerateWallet();
}

main().catch(console.error);
