// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DataManagementClient } from "@azure/arm-informaticadatamanagement";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to returns a serverless runtime resource by ID
 *
 * @summary returns a serverless runtime resource by ID
 * x-ms-original-file: 2024-05-08/ServerlessRuntimes_ServerlessResourceById_MaximumSet_Gen.json
 */
async function serverlessRuntimesServerlessResourceById(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "3599DA28-E346-4D9F-811E-189C0445F0FE";
  const client = new DataManagementClient(credential, subscriptionId);
  const result = await client.serverlessRuntimes.serverlessResourceById(
    "rgopenapi",
    "_RD_R",
    "serverlessRuntimeName159",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await serverlessRuntimesServerlessResourceById();
}

main().catch(console.error);
