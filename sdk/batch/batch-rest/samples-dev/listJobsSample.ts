// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DefaultAzureCredential } from "@azure/identity";
import createBatchClient, { paginate } from "@azure-rest/batch";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ListJobs
 *
 * @summary call operation ListJobs
 */
async function listJobsSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createBatchClient(endpointParam, credential);
  const initialResponse = await client
    .path("/jobs")
    .get({
      queryParameters: {
        timeOut: 123,
        maxresults: 123,
        $filter: "{Your $filter}",
        $select: ["{Your $select}"],
        $expand: ["{Your $expand}"],
      },
      headers: {
        "client-request-id": "{Your client-request-id}",
        "return-client-request-id": true,
        "ocp-date": "{Your ocp-date}",
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
  listJobsSample();
}

main().catch(console.error);
