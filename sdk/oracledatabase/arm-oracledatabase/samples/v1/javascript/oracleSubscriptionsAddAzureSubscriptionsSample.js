// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { DatabaseClient } = require("@azure/arm-oracledatabase");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to add Azure Subscriptions
 *
 * @summary add Azure Subscriptions
 * x-ms-original-file: 2024-10-01-preview/oracleSubscriptions_addAzureSubscriptions.json
 */
async function oracleSubscriptionsAddAzureSubscriptions() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DatabaseClient(credential, subscriptionId);
  await client.oracleSubscriptions.addAzureSubscriptions({
    azureSubscriptionIds: ["00000000-0000-0000-0000-000000000001"],
  });
}

async function main() {
  await oracleSubscriptionsAddAzureSubscriptions();
}

main().catch(console.error);
