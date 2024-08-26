// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureLoadTestingClient from "@azure-rest/load-testing";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation CreateOrUpdateTestProfile
 *
 * @summary call operation CreateOrUpdateTestProfile
 */
async function testProfileAdministrationCreateOrUpdateTestProfileSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpointParam, credential);
  const testProfileId = "{Your testProfileId}";
  const result = await client
    .path("/test-profiles/{testProfileId}", testProfileId)
    .patch({
      body: {
        displayName: "{Your displayName}",
        description: "{Your description}",
        testId: "{Your testId}",
        targetResourceId: "{Your targetResourceId}",
        targetResourceConfigurations: { kind: "FunctionsFlexConsumption" },
      },
      contentType: "application/merge-patch+json",
    });
  console.log(result);
}

async function main() {
  testProfileAdministrationCreateOrUpdateTestProfileSample();
}

main().catch(console.error);
