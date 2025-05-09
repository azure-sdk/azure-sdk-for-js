// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HelpClient } from "@azure/arm-help";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to search for relevant Azure Diagnostics, Solutions and Troubleshooters using a natural language issue summary and subscription.
 *
 * @summary search for relevant Azure Diagnostics, Solutions and Troubleshooters using a natural language issue summary and subscription.
 * x-ms-original-file: 2024-03-01-preview/DiscoverSolutionsAtSubscriptionScope.json
 */
async function discoverySolutionsUsingIssueSummaryAndServiceId(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "0d0fcd2e-c4fd-4349-8497-200edb3923c6";
  const client = new HelpClient(credential, subscriptionId);
  const result =
    await client.discoverySolutionNLPOperationGroup.discoverSolutionsBySubscription();
  console.log(result);
}

async function main(): Promise<void> {
  await discoverySolutionsUsingIssueSummaryAndServiceId();
}

main().catch(console.error);
