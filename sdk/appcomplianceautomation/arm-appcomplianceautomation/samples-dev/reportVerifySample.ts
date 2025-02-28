// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationClient } from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to verify the AppComplianceAutomation report health status.
 *
 * @summary verify the AppComplianceAutomation report health status.
 * x-ms-original-file: 2024-06-27/Report_Verify.json
 */
async function reportVerify(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new AppComplianceAutomationClient(credential, subscriptionId);
  const result = await client.report.verify("testReport");
  console.log(result);
}

async function main(): Promise<void> {
  await reportVerify();
}

main().catch(console.error);
