// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationClient } from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to clean the AppComplianceAutomation scoping configuration of the specific report.
 *
 * @summary clean the AppComplianceAutomation scoping configuration of the specific report.
 * x-ms-original-file: 2024-06-27/ScopingConfiguration_Delete.json
 */
async function scopingConfigurationDelete(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new AppComplianceAutomationClient(credential, subscriptionId);
  await client.scopingConfiguration.delete("testReportName", "default");
}

async function main(): Promise<void> {
  await scopingConfigurationDelete();
}

main().catch(console.error);
