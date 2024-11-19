// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationClient } from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to update an exiting AppComplianceAutomation report.
 *
 * @summary update an exiting AppComplianceAutomation report.
 * x-ms-original-file: 2024-06-27/Report_Update.json
 */
async function reportUpdate() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new AppComplianceAutomationClient(credential, subscriptionId);
  const result = await client.report.update("testReportName");
  console.log(result);
}

async function main() {
  reportUpdate();
}

main().catch(console.error);
