// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DataManagementClient } from "@azure/arm-informaticadatamanagement";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to checks all dependencies for a serverless runtime resource
 *
 * @summary checks all dependencies for a serverless runtime resource
 * x-ms-original-file: 2024-05-08/ServerlessRuntimes_CheckDependencies_MaximumSet_Gen.json
 */
async function serverlessRuntimesCheckDependencies(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "3599DA28-E346-4D9F-811E-189C0445F0FE";
  const client = new DataManagementClient(credential, subscriptionId);
  const result = await client.serverlessRuntimes.checkDependencies("rgopenapi", "3P", "M");
  console.log(result);
}

/**
 * This sample demonstrates how to checks all dependencies for a serverless runtime resource
 *
 * @summary checks all dependencies for a serverless runtime resource
 * x-ms-original-file: 2024-05-08/ServerlessRuntimes_CheckDependencies_MinimumSet_Gen.json
 */
async function serverlessRuntimesCheckDependenciesMin(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "3599DA28-E346-4D9F-811E-189C0445F0FE";
  const client = new DataManagementClient(credential, subscriptionId);
  const result = await client.serverlessRuntimes.checkDependencies("rgopenapi", "_-", "_2_");
  console.log(result);
}

async function main(): Promise<void> {
  await serverlessRuntimesCheckDependencies();
  await serverlessRuntimesCheckDependenciesMin();
}

main().catch(console.error);
