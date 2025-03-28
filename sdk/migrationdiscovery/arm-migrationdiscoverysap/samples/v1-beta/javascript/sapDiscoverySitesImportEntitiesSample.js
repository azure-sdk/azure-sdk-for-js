// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { WorkloadsClient } = require("@azure/arm-migrationdiscoverysap");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to import your SAP systems' inventory using the [Discovery template](https://go.microsoft.com/fwlink/?linkid=2249111) into your SAP Migration discovery site resource and it's child resources, the SAP instances and Server instances.
 *
 * @summary import your SAP systems' inventory using the [Discovery template](https://go.microsoft.com/fwlink/?linkid=2249111) into your SAP Migration discovery site resource and it's child resources, the SAP instances and Server instances.
 * x-ms-original-file: 2023-10-01-preview/SAPDiscoverySites_ImportEntities.json
 */
async function importASAPMigrationDiscoverySiteResourceAndItChildResources() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "6d875e77-e412-4d7d-9af4-8895278b4443";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sapDiscoverySites.importEntities("test-rg", "SampleSite");
  console.log(result);
}

async function main() {
  await importASAPMigrationDiscoverySiteResourceAndItChildResources();
}

main().catch(console.error);
