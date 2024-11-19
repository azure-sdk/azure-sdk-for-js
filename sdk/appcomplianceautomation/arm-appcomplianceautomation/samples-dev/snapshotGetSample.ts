// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationClient } from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get the AppComplianceAutomation snapshot and its properties.
 *
 * @summary get the AppComplianceAutomation snapshot and its properties.
 * x-ms-original-file: 2024-06-27/Snapshot_Get.json
 */
async function snapshotGet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new AppComplianceAutomationClient(credential, subscriptionId);
  const result = await client.snapshot.get("testReportName", "testSnapshot");
  console.log(result);
}

async function main() {
  snapshotGet();
}

main().catch(console.error);
