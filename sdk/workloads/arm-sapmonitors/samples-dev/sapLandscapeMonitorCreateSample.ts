// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsClient } from "@azure/arm-sapmonitors";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to creates a SAP Landscape Monitor Dashboard for the specified subscription, resource group, and resource name.
 *
 * @summary creates a SAP Landscape Monitor Dashboard for the specified subscription, resource group, and resource name.
 * x-ms-original-file: 2024-02-01-preview/SapLandscapeMonitor_Create.json
 */
async function createSAPLandscapeMonitor(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sapLandscapeMonitor.create("myResourceGroup", "mySapMonitor", {
    properties: {
      grouping: {
        landscape: [{ name: "Prod", topSid: ["SID1", "SID2"] }],
        sapApplication: [{ name: "ERP1", topSid: ["SID1", "SID2"] }],
      },
      topMetricsThresholds: [{ name: "Instance Availability", green: 90, red: 50, yellow: 75 }],
    },
  });
  console.log(result);
}

async function main(): Promise<void> {
  await createSAPLandscapeMonitor();
}

main().catch(console.error);
