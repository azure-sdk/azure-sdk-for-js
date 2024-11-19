// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationClient } from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to fix the AppComplianceAutomation report error. e.g: App Compliance Automation Tool service unregistered, automation removed.
 *
 * @summary fix the AppComplianceAutomation report error. e.g: App Compliance Automation Tool service unregistered, automation removed.
 * x-ms-original-file: 2024-06-27/Report_GetScopingQuestions.json
 */
async function reportGetScopingQuestions() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new AppComplianceAutomationClient(credential, subscriptionId);
  const result = await client.report.getScopingQuestions("testReportName");
  console.log(result);
}

async function main() {
  reportGetScopingQuestions();
}

main().catch(console.error);
