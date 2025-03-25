// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { WorkloadsClient } = require("@azure/arm-migrationdiscoverysap");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to deletes the SAP Instance resource. <br><br>This will be used by service only. Delete operation on this resource by end user will return a Bad Request error. You can delete the parent resource, which is the SAP Migration discovery site resource, using the delete operation on it.
 *
 * @summary deletes the SAP Instance resource. <br><br>This will be used by service only. Delete operation on this resource by end user will return a Bad Request error. You can delete the parent resource, which is the SAP Migration discovery site resource, using the delete operation on it.
 * x-ms-original-file: 2023-10-01-preview/SAPInstances_Delete.json
 */
async function deletesTheSAPInstanceResource() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "6d875e77-e412-4d7d-9af4-8895278b4443";
  const client = new WorkloadsClient(credential, subscriptionId);
  await client.sapInstances.delete("test-rg", "SampleSite", "MPP_MPP");
}

async function main() {
  await deletesTheSAPInstanceResource();
}

main().catch(console.error);
