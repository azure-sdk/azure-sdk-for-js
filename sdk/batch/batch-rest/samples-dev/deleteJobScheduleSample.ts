// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createBatchClient from "@azure-rest/batch";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation DeleteJobSchedule
 *
 * @summary call operation DeleteJobSchedule
 */
async function deleteJobScheduleSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createBatchClient(endpointParam, credential);
  const jobScheduleId = "{Your jobScheduleId}";
  const result = await client
    .path("/jobschedules/{jobScheduleId}", jobScheduleId)
    .delete({
      queryParameters: { timeOut: 123 },
      headers: {
        "client-request-id": "{Your client-request-id}",
        "return-client-request-id": true,
        "ocp-date": "{Your ocp-date}",
        "If-Modified-Since": "{Your If-Modified-Since}",
        "If-Unmodified-Since": "{Your If-Unmodified-Since}",
        "If-Match": "{Your If-Match}",
        "If-None-Match": "{Your If-None-Match}",
      },
    });
  console.log(result);
}

async function main() {
  deleteJobScheduleSample();
}

main().catch(console.error);
