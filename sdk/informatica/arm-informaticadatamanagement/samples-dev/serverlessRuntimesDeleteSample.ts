// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DataManagementClient } from "@azure/arm-informaticadatamanagement";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to delete a InformaticaServerlessRuntimeResource
 *
 * @summary delete a InformaticaServerlessRuntimeResource
 * x-ms-original-file: 2024-05-08/ServerlessRuntimes_Delete_MaximumSet_Gen.json
 */
async function serverlessRuntimesDelete() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "3599DA28-E346-4D9F-811E-189C0445F0FE";
  const client = new DataManagementClient(credential, subscriptionId);
  await client.serverlessRuntimes.delete(
    "rgopenapi",
    "orgName",
    "serverlessRuntimeName",
  );
}

async function main() {
  serverlessRuntimesDelete();
}

main().catch(console.error);
