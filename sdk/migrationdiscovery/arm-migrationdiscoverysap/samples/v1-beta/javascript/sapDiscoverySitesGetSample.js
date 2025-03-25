// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { WorkloadsClient } = require("@azure/arm-migrationdiscoverysap");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to gets a SAP Migration discovery site resource.
 *
 * @summary gets a SAP Migration discovery site resource.
 * x-ms-original-file: 2023-10-01-preview/SAPDiscoverySites_Get.json
 */
async function getASAPMigrationDiscoverySiteResource() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "6d875e77-e412-4d7d-9af4-8895278b4443";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sapDiscoverySites.get("test-rg", "SampleSite");
  console.log(result);
}

async function main() {
  await getASAPMigrationDiscoverySiteResource();
}

main().catch(console.error);
