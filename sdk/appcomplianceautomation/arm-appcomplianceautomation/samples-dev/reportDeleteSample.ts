// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationClient } from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to delete an AppComplianceAutomation report.
 *
 * @summary delete an AppComplianceAutomation report.
 * x-ms-original-file: 2024-06-27/Report_Delete.json
 */
async function reportDelete(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new AppComplianceAutomationClient(credential, subscriptionId);
  await client.report.delete("testReportName");
}

async function main(): Promise<void> {
  await reportDelete();
}

main().catch(console.error);
