// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAzureLoadTestingClient from "@azure-rest/load-testing";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetTestProfileRun
 *
 * @summary call operation GetTestProfileRun
 */
async function testProfileRunAdministrationGetTestProfileRunSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpointParam, credential);
  const testProfileRunId = "{Your testProfileRunId}";
  const result = await client
    .path("/test-profile-runs/{testProfileRunId}", testProfileRunId)
    .get();
  console.log(result);
}

async function main() {
  testProfileRunAdministrationGetTestProfileRunSample();
}

main().catch(console.error);
