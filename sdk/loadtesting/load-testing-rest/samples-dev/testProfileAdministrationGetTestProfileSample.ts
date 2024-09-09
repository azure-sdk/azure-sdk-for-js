// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAzureLoadTestingClient from "@azure-rest/load-testing";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetTestProfile
 *
 * @summary call operation GetTestProfile
 */
async function testProfileAdministrationGetTestProfileSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpointParam, credential);
  const testProfileId = "{Your testProfileId}";
  const result = await client
    .path("/test-profiles/{testProfileId}", testProfileId)
    .get();
  console.log(result);
}

async function main() {
  testProfileAdministrationGetTestProfileSample();
}

main().catch(console.error);
