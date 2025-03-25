// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { WorkloadsClient } = require("@azure/arm-migrationdiscoverysap");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to updates a SAP Migration discovery site resource.
 *
 * @summary updates a SAP Migration discovery site resource.
 * x-ms-original-file: 2023-10-01-preview/SAPDiscoverySites_Update.json
 */
async function updatesASAPMigrationDiscoverySiteResource() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "6d875e77-e412-4d7d-9af4-8895278b4443";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sapDiscoverySites.update("test-rg", "SampleSite", {
    tags: { tag1: "value1" },
  });
  console.log(result);
}

async function main() {
  await updatesASAPMigrationDiscoverySiteResource();
}

main().catch(console.error);
