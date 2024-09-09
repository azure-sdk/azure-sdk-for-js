// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAzureLoadTestingClient from "@azure-rest/load-testing";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation CreateOrUpdateTestProfileRun
 *
 * @summary call operation CreateOrUpdateTestProfileRun
 */
async function testProfileRunAdministrationCreateOrUpdateTestProfileRunSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpointParam, credential);
  const testProfileRunId = "{Your testProfileRunId}";
  const result = await client
    .path("/test-profile-runs/{testProfileRunId}", testProfileRunId)
    .patch({
      body: {
        displayName: "{Your displayName}",
        description: "{Your description}",
        testProfileId: "{Your testProfileId}",
      },
      contentType: "application/merge-patch+json",
    });
  console.log(result);
}

async function main() {
  testProfileRunAdministrationCreateOrUpdateTestProfileRunSample();
}

main().catch(console.error);
