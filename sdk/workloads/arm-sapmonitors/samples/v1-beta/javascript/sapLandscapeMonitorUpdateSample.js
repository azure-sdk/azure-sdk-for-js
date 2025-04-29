// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { WorkloadsClient } = require("@azure/arm-sapmonitors");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to patches the SAP Landscape Monitor Dashboard for the specified subscription, resource group, and SAP monitor name.
 *
 * @summary patches the SAP Landscape Monitor Dashboard for the specified subscription, resource group, and SAP monitor name.
 * x-ms-original-file: 2024-02-01-preview/SapLandscapeMonitor_Update.json
 */
async function updateSAPLandscapeMonitor() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sapLandscapeMonitor.update("myResourceGroup", "mySapMonitor", {
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

async function main() {
  await updateSAPLandscapeMonitor();
}

main().catch(console.error);
