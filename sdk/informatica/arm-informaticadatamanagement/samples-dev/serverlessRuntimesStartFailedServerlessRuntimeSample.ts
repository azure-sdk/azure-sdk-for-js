// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DataManagementClient } from "@azure/arm-informaticadatamanagement";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to starts a failed runtime resource
 *
 * @summary starts a failed runtime resource
 * x-ms-original-file: 2024-05-08/ServerlessRuntimes_StartFailedServerlessRuntime_MaximumSet_Gen.json
 */
async function serverlessRuntimesStartFailedServerlessRuntime() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "3599DA28-E346-4D9F-811E-189C0445F0FE";
  const client = new DataManagementClient(credential, subscriptionId);
  await client.serverlessRuntimes.startFailedServerlessRuntime(
    "rgopenapi",
    "9M4",
    "-25-G_",
  );
}

async function main() {
  serverlessRuntimesStartFailedServerlessRuntime();
}

main().catch(console.error);
