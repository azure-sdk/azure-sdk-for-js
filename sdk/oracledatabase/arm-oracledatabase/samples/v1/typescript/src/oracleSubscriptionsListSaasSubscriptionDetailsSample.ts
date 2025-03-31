// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseClient } from "@azure/arm-oracledatabase";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list Saas Subscription Details
 *
 * @summary list Saas Subscription Details
 * x-ms-original-file: 2024-10-01-preview/oracleSubscriptions_listSaasSubscriptionDetails.json
 */
async function oracleSubscriptionsListSaasSubscriptionDetails(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DatabaseClient(credential, subscriptionId);
  await client.oracleSubscriptions.listSaasSubscriptionDetails();
}

async function main(): Promise<void> {
  await oracleSubscriptionsListSaasSubscriptionDetails();
}

main().catch(console.error);
