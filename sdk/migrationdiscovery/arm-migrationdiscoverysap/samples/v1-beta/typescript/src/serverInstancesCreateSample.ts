// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsClient } from "@azure/arm-migrationdiscoverysap";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to creates the Server Instance resource. <br><br>;This will be used by service only. PUT operation on this resource by end user will return a Bad Request error.
 *
 * @summary creates the Server Instance resource. <br><br>;This will be used by service only. PUT operation on this resource by end user will return a Bad Request error.
 * x-ms-original-file: 2023-10-01-preview/ServerInstances_Create.json
 */
async function createsTheServerInstanceResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "6d875e77-e412-4d7d-9af4-8895278b4443";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.serverInstances.create(
    "test-rg",
    "SampleSite",
    "MPP_MPP",
    "APP_SapServer1",
    {},
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createsTheServerInstanceResource();
}

main().catch(console.error);
