// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { DatabaseClient } = require("@azure/arm-oracledatabase");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to list Cloud Account Details
 *
 * @summary list Cloud Account Details
 * x-ms-original-file: 2024-10-01-preview/oracleSubscriptions_listCloudAccountDetails.json
 */
async function oracleSubscriptionsListCloudAccountDetails() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DatabaseClient(credential, subscriptionId);
  await client.oracleSubscriptions.listCloudAccountDetails();
}

async function main() {
  await oracleSubscriptionsListCloudAccountDetails();
}

main().catch(console.error);
