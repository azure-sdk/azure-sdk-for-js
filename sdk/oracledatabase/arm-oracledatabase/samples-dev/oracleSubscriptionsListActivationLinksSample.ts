// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseClient } from "@azure/arm-oracledatabase";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list Activation Links
 *
 * @summary list Activation Links
 * x-ms-original-file: 2024-06-01/oracleSubscriptions_listActivationLinks.json
 */
async function oracleSubscriptionsListActivationLinks() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DatabaseClient(credential, subscriptionId);
  await client.oracleSubscriptions.listActivationLinks();
}

async function main() {
  oracleSubscriptionsListActivationLinks();
}

main().catch(console.error);
