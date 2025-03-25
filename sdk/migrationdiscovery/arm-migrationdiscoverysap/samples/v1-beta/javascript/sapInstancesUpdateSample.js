// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { WorkloadsClient } = require("@azure/arm-migrationdiscoverysap");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to updates the SAP Instance resource.
 *
 * @summary updates the SAP Instance resource.
 * x-ms-original-file: 2023-10-01-preview/SAPInstances_Update.json
 */
async function updatesTheSAPInstanceResource() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "6d875e77-e412-4d7d-9af4-8895278b4443";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sapInstances.update("test-rg", "SampleSite", "MPP_MPP", {
    tags: { tag1: "value1" },
  });
  console.log(result);
}

async function main() {
  await updatesTheSAPInstanceResource();
}

main().catch(console.error);
