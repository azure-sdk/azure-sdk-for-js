// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { WorkloadsClient } = require("@azure/arm-migrationdiscoverysap");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to deletes a SAP Migration discovery site resource and its child resources, that is the associated SAP Instances and Server Instances.
 *
 * @summary deletes a SAP Migration discovery site resource and its child resources, that is the associated SAP Instances and Server Instances.
 * x-ms-original-file: 2023-10-01-preview/SAPDiscoverySites_Delete.json
 */
async function deletesASAPMigrationDiscoverySiteResource() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "6d875e77-e412-4d7d-9af4-8895278b4443";
  const client = new WorkloadsClient(credential, subscriptionId);
  await client.sapDiscoverySites.delete("test-rg", "SampleSite");
}

async function main() {
  await deletesASAPMigrationDiscoverySiteResource();
}

main().catch(console.error);
