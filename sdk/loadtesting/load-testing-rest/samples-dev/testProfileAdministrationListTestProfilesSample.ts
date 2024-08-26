// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DefaultAzureCredential } from "@azure/identity";
import createAzureLoadTestingClient, {
  paginate,
} from "@azure-rest/load-testing";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ListTestProfiles
 *
 * @summary call operation ListTestProfiles
 */
async function testProfileAdministrationListTestProfilesSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpointParam, credential);
  const initialResponse = await client
    .path("/test-profiles")
    .get({
      queryParameters: {
        maxpagesize: 123,
        lastModifiedStartTime: new Date(),
        lastModifiedEndTime: new Date(),
        testProfileIds: "{Your testProfileIds}",
        testIds: "{Your testIds}",
      },
    });
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  testProfileAdministrationListTestProfilesSample();
}

main().catch(console.error);
