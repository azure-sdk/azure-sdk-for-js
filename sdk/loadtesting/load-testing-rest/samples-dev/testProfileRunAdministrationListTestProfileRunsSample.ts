// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DefaultAzureCredential } from "@azure/identity";
import createAzureLoadTestingClient, {
  paginate,
} from "@azure-rest/load-testing";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ListTestProfileRuns
 *
 * @summary call operation ListTestProfileRuns
 */
async function testProfileRunAdministrationListTestProfileRunsSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpointParam, credential);
  const initialResponse = await client
    .path("/test-profile-runs")
    .get({
      queryParameters: {
        maxpagesize: 123,
        minStartDateTime: new Date(),
        maxStartDateTime: new Date(),
        minEndDateTime: new Date(),
        maxEndDateTime: new Date(),
        createdDateStartTime: new Date(),
        createdDateEndTime: new Date(),
        testProfileRunIds: "{Your testProfileRunIds}",
        testProfileIds: "{Your testProfileIds}",
        statuses: "{Your statuses}",
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
  testProfileRunAdministrationListTestProfileRunsSample();
}

main().catch(console.error);
