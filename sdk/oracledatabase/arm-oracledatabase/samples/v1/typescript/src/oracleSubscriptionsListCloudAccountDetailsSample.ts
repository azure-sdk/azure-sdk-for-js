// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseClient } from "@azure/arm-oracledatabase";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list Cloud Account Details
 *
 * @summary list Cloud Account Details
 * x-ms-original-file: 2025-03-01/oracleSubscriptions_listCloudAccountDetails.json
 */
async function oracleSubscriptionsListCloudAccountDetails(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DatabaseClient(credential, subscriptionId);
  await client.oracleSubscriptions.listCloudAccountDetails();
}

async function main(): Promise<void> {
  await oracleSubscriptionsListCloudAccountDetails();
}

main().catch(console.error);
