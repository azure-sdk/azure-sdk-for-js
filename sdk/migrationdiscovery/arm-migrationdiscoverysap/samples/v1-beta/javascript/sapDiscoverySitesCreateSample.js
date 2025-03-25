// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { WorkloadsClient } = require("@azure/arm-migrationdiscoverysap");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to creates a discovery site resource for SAP Migration. This resource will be used to run system discovery and assessment with Azure Migrate.
 *
 * @summary creates a discovery site resource for SAP Migration. This resource will be used to run system discovery and assessment with Azure Migrate.
 * x-ms-original-file: 2023-10-01-preview/SAPDiscoverySites_Create.json
 */
async function createResourceForImportBasedInput() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "6d875e77-e412-4d7d-9af4-8895278b4443";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sapDiscoverySites.create("test-rg", "SampleSite", {
    location: "eastus",
    properties: {
      masterSiteId: "MasterSiteIdResourceId",
      migrateProjectId: "MigrateProjectId",
    },
    tags: { property1: "value1", property2: "value2" },
  });
  console.log(result);
}

async function main() {
  await createResourceForImportBasedInput();
}

main().catch(console.error);
