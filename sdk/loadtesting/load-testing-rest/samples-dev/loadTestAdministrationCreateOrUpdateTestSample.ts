// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAzureLoadTestingClient from "@azure-rest/load-testing";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation CreateOrUpdateTest
 *
 * @summary call operation CreateOrUpdateTest
 */
async function loadTestAdministrationCreateOrUpdateTestSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpointParam, credential);
  const testId = "{Your testId}";
  const result = await client
    .path("/tests/{testId}", testId)
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
        baselineTestRunId: "{Your baselineTestRunId}",
        description: "{Your description}",
        displayName: "{Your displayName}",
        subnetId: "{Your subnetId}",
        kind: "URL",
        publicIPDisabled: true,
        keyvaultReferenceIdentityType: "{Your keyvaultReferenceIdentityType}",
        keyvaultReferenceIdentityId: "{Your keyvaultReferenceIdentityId}",
      },
      contentType: "application/merge-patch+json",
    });
  console.log(result);
}

async function main() {
  loadTestAdministrationCreateOrUpdateTestSample();
}

main().catch(console.error);
