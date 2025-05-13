// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AstroClient } from "@azure/arm-astro";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get a OrganizationResource
 *
 * @summary get a OrganizationResource
 * x-ms-original-file: 2024-08-27/Organizations_Get_MaximumSet_Gen.json
 */
async function organizationsGetGeneratedByMaximumSetRule(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "A4679760-5C37-44EA-A4B8-8A7628B13824";
  const client = new AstroClient(credential, subscriptionId);
  const result = await client.organizations.get("rgastronomer", "U.1-:7");
  console.log(result);
}

async function main(): Promise<void> {
  await organizationsGetGeneratedByMaximumSetRule();
}

main().catch(console.error);
