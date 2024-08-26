// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureLoadTestingClient from "@azure-rest/load-testing";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation DeleteTestProfileRun
 *
 * @summary call operation DeleteTestProfileRun
 */
async function testProfileRunAdministrationDeleteTestProfileRunSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpointParam, credential);
  const testProfileRunId = "{Your testProfileRunId}";
  const result = await client
    .path("/test-profile-runs/{testProfileRunId}", testProfileRunId)
    .delete();
  console.log(result);
}

async function main() {
  testProfileRunAdministrationDeleteTestProfileRunSample();
}

main().catch(console.error);
