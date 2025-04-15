// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { WorkloadsClient } = require("@azure/arm-migrationdiscoverysap");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to gets the Server Instance resource.
 *
 * @summary gets the Server Instance resource.
 * x-ms-original-file: 2023-10-01-preview/ServerInstances_Get.json
 */
async function getAServerInstanceResource() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "6d875e77-e412-4d7d-9af4-8895278b4443";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.serverInstances.get(
    "test-rg",
    "SampleSite",
    "MPP_MPP",
    "APP_SapServer1",
  );
  console.log(result);
}

async function main() {
  await getAServerInstanceResource();
}

main().catch(console.error);
