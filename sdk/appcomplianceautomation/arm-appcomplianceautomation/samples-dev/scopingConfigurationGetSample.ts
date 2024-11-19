// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationClient } from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get the AppComplianceAutomation scoping configuration of the specific report.
 *
 * @summary get the AppComplianceAutomation scoping configuration of the specific report.
 * x-ms-original-file: 2024-06-27/ScopingConfiguration_Get.json
 */
async function scopingConfiguration() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new AppComplianceAutomationClient(credential, subscriptionId);
  const result = await client.scopingConfiguration.get(
    "testReportName",
    "default",
  );
  console.log(result);
}

async function main() {
  scopingConfiguration();
}

main().catch(console.error);
