// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatadogClient } from "@azure/arm-datadog";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create Datadog marketplace agreement in the subscription.
 *
 * @summary create Datadog marketplace agreement in the subscription.
 * x-ms-original-file: 2023-10-20/MarketplaceAgreements_Create.json
 */
async function marketplaceAgreementsCreateOrUpdate(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DatadogClient(credential, subscriptionId);
  const result = await client.marketplaceAgreementsOperationGroup.createOrUpdate({
    properties: { accepted: true },
  });
  console.log(result);
}

async function main(): Promise<void> {
  await marketplaceAgreementsCreateOrUpdate();
}

main().catch(console.error);
