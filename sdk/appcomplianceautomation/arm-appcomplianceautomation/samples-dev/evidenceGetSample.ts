// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationClient } from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get the evidence metadata
 *
 * @summary get the evidence metadata
 * x-ms-original-file: 2024-06-27/Evidence_Get.json
 */
async function evidenceGet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new AppComplianceAutomationClient(credential, subscriptionId);
  const result = await client.evidence.get("testReportName", "evidence1");
  console.log(result);
}

async function main(): Promise<void> {
  await evidenceGet();
}

main().catch(console.error);
