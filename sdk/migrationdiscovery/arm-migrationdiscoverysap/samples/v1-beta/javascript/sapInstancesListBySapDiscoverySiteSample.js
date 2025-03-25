// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { WorkloadsClient } = require("@azure/arm-migrationdiscoverysap");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to lists the SAP Instance resources for the given SAP Migration discovery site resource.
 *
 * @summary lists the SAP Instance resources for the given SAP Migration discovery site resource.
 * x-ms-original-file: 2023-10-01-preview/SAPInstances_List.json
 */
async function listsTheSAPInstanceResourcesForTheGivenSAPMigrationDiscoverySiteResource() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "6d875e77-e412-4d7d-9af4-8895278b4443";
  const client = new WorkloadsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.sapInstances.listBySapDiscoverySite("test-rg", "SampleSite")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  await listsTheSAPInstanceResourcesForTheGivenSAPMigrationDiscoverySiteResource();
}

main().catch(console.error);
