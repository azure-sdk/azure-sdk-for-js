// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationClient } from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create a new AppComplianceAutomation report or update an exiting AppComplianceAutomation report.
 *
 * @summary create a new AppComplianceAutomation report or update an exiting AppComplianceAutomation report.
 * x-ms-original-file: 2024-06-27/Report_CreateOrUpdate.json
 */
async function reportCreateOrUpdate() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new AppComplianceAutomationClient(credential, subscriptionId);
  const result = await client.report.createOrUpdate("testReportName");
  console.log(result);
}

async function main() {
  reportCreateOrUpdate();
}

main().catch(console.error);
