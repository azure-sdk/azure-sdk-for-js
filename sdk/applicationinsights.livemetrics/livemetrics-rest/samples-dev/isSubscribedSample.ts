// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createLiveMetricsClient from "@azure-rest/livemetrics-rest";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation IsSubscribed
 *
 * @summary call operation IsSubscribed
 */
async function isSubscribedSample() {
  const credential = new DefaultAzureCredential();
  const client = createLiveMetricsClient(credential);
  const result = await client
    .path("/QuickPulseService.svc/ping")
    .post({
      body: {
        Version: "{Your Version}",
        InvariantVersion: 123,
        Instance: "{Your Instance}",
        RoleName: "{Your RoleName}",
        MachineName: "{Your MachineName}",
        StreamId: "{Your StreamId}",
        Timestamp: new Date(),
        TransmissionTime: new Date(),
        IsWebApp: true,
        PerformanceCollectionSupported: true,
        Metrics: [{ Name: "{Your Name}", Value: 123, Weight: 123 }],
        Documents: [
          {
            DocumentType: "Request",
            DocumentStreamIds: ["{Your DocumentStreamIds}"],
            Properties: [{ key: "{Your key}", value: "{Your value}" }],
          },
        ],
        TopCpuProcesses: [
          { ProcessName: "{Your ProcessName}", CpuPercentage: 123 },
        ],
        CollectionConfigurationErrors: [
          {
            CollectionConfigurationErrorType: "Unknown",
            Message: "{Your Message}",
            FullException: "{Your FullException}",
            Data: [{ key: "{Your key}", value: "{Your value}" }],
          },
        ],
      },
      queryParameters: { ikey: "{Your ikey}" },
      headers: {
        "x-ms-qps-transmission-time": 123,
        "x-ms-qps-machine-name": "{Your x-ms-qps-machine-name}",
        "x-ms-qps-instance-name": "{Your x-ms-qps-instance-name}",
        "x-ms-qps-stream-id": "{Your x-ms-qps-stream-id}",
        "x-ms-qps-role-name": "{Your x-ms-qps-role-name}",
        "x-ms-qps-invariant-version": "{Your x-ms-qps-invariant-version}",
        "x-ms-qps-configuration-etag": "{Your x-ms-qps-configuration-etag}",
      },
    });
  console.log(result);
}

async function main() {
  isSubscribedSample();
}

main().catch(console.error);
