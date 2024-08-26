// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureLoadTestingClient from "@azure-rest/load-testing";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation DeleteTestProfile
 *
 * @summary call operation DeleteTestProfile
 */
async function testProfileAdministrationDeleteTestProfileSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpointParam, credential);
  const testProfileId = "{Your testProfileId}";
  const result = await client
    .path("/test-profiles/{testProfileId}", testProfileId)
    .delete();
  console.log(result);
}

async function main() {
  testProfileAdministrationDeleteTestProfileSample();
}

main().catch(console.error);
