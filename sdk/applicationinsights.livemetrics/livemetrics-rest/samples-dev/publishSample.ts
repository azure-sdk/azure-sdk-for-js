// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createLiveMetricsClient from "@azure-rest/livemetrics-rest";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Publish
 *
 * @summary call operation Publish
 */
async function publishSample() {
  const credential = new DefaultAzureCredential();
  const client = createLiveMetricsClient(credential);
  const result = await client
    .path("/QuickPulseService.svc/post")
    .post({
      body: [
        {
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
      ],
      queryParameters: { ikey: "{Your ikey}" },
      headers: {
        "x-ms-qps-configuration-etag": "{Your x-ms-qps-configuration-etag}",
        "x-ms-qps-transmission-time": 123,
      },
    });
  console.log(result);
}

async function main() {
  publishSample();
}

main().catch(console.error);
