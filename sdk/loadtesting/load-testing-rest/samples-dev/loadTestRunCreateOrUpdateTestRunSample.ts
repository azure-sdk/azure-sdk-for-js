// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureLoadTestingClient from "@azure-rest/load-testing";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation CreateOrUpdateTestRun
 *
 * @summary call operation CreateOrUpdateTestRun
 */
async function loadTestRunCreateOrUpdateTestRunSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpointParam, credential);
  const testRunId = "{Your testRunId}";
  const result = await client
    .path("/test-runs/{testRunId}", testRunId)
    .patch({
      body: {
        passFailCriteria: {
          passFailMetrics: {
            key: {
              clientMetric: "response_time_ms",
              aggregate: "count",
              condition: "{Your condition}",
              requestName: "{Your requestName}",
              value: 123,
              action: "continue",
            },
          },
        },
        autoStopCriteria: {
          autoStopDisabled: true,
          errorRate: 123,
          errorRateTimeWindowInSeconds: 123,
        },
        secrets: { key: { value: "{Your value}", type: "AKV_SECRET_URI" } },
        certificate: {
          value: "{Your value}",
          type: "AKV_CERT_URI",
          name: "{Your name}",
        },
        environmentVariables: { key: "{Your environmentVariables}" },
        loadTestConfiguration: {
          engineInstances: 123,
          splitAllCSVs: true,
          quickStartTest: true,
          optionalLoadTestConfig: {
            endpointUrl: "{Your endpointUrl}",
            requestsPerSecond: 123,
            maxResponseTimeInMs: 123,
            virtualUsers: 123,
            rampUpTime: 123,
            duration: 123,
          },
          regionalLoadTestConfig: [
            { engineInstances: 123, region: "{Your region}" },
          ],
        },
        displayName: "{Your displayName}",
        testId: "{Your testId}",
        description: "{Your description}",
        requestDataLevel: "NONE",
        debugLogsEnabled: true,
      },
      queryParameters: { oldTestRunId: "{Your oldTestRunId}" },
      contentType: "application/merge-patch+json",
    });
  console.log(result);
}

async function main() {
  loadTestRunCreateOrUpdateTestRunSample();
}

main().catch(console.error);
