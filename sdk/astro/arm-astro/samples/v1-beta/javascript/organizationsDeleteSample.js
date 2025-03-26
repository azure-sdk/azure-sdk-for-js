// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { AstroClient } = require("@azure/arm-astro");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to delete a OrganizationResource
 *
 * @summary delete a OrganizationResource
 * x-ms-original-file: 2024-08-27/Organizations_Delete_MaximumSet_Gen.json
 */
async function organizationsDeleteGeneratedByMaximumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "A4679760-5C37-44EA-A4B8-8A7628B13824";
  const client = new AstroClient(credential, subscriptionId);
  await client.organizations.delete("rgastronomer", "U.1-:7");
}

async function main() {
  await organizationsDeleteGeneratedByMaximumSetRule();
}

main().catch(console.error);
