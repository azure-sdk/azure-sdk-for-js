// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AstroClient } from "@azure/arm-astro";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list OrganizationResource resources by subscription ID
 *
 * @summary list OrganizationResource resources by subscription ID
 * x-ms-original-file: 2024-08-27/Organizations_ListBySubscription_MaximumSet_Gen.json
 */
async function organizationsListBySubscriptionGeneratedByMaximumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "A4679760-5C37-44EA-A4B8-8A7628B13824";
  const client = new AstroClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.organizations.listBySubscription()) {
    resArray.push(item);
  }

  console.log(resArray);
}

/**
 * This sample demonstrates how to list OrganizationResource resources by subscription ID
 *
 * @summary list OrganizationResource resources by subscription ID
 * x-ms-original-file: 2024-08-27/Organizations_ListBySubscription_MinimumSet_Gen.json
 */
async function organizationsListBySubscriptionGeneratedByMinimumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "A4679760-5C37-44EA-A4B8-8A7628B13824";
  const client = new AstroClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.organizations.listBySubscription()) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  organizationsListBySubscriptionGeneratedByMaximumSetRule();
  organizationsListBySubscriptionGeneratedByMinimumSetRule();
}

main().catch(console.error);
