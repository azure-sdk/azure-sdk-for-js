// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureLoadTestingClient from "@azure-rest/load-testing";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetServerMetricsConfig
 *
 * @summary call operation GetServerMetricsConfig
 */
async function loadTestRunGetServerMetricsConfigSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpointParam, credential);
  const testRunId = "{Your testRunId}";
  const result = await client
    .path("/test-runs/{testRunId}/server-metrics-config", testRunId)
    .get();
  console.log(result);
}

async function main() {
  loadTestRunGetServerMetricsConfigSample();
}

main().catch(console.error);
