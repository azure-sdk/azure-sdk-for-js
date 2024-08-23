// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DefaultAzureCredential } from "@azure/identity";
import createBatchClient, { paginate } from "@azure-rest/batch";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ListPoolUsageMetrics
 *
 * @summary call operation ListPoolUsageMetrics
 */
async function listPoolUsageMetricsSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createBatchClient(endpointParam, credential);
  const initialResponse = await client
    .path("/poolusagemetrics")
    .get({
      queryParameters: {
        timeOut: 123,
        maxresults: 123,
        startTime: new Date(),
        endtime: new Date(),
        $filter: "{Your $filter}",
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
  listPoolUsageMetricsSample();
}

main().catch(console.error);
