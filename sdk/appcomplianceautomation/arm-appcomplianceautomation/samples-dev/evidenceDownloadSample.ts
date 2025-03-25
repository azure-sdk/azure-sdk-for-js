// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationClient } from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to download evidence file.
 *
 * @summary download evidence file.
 * x-ms-original-file: 2024-06-27/Evidence_Download.json
 */
async function evidenceDownload(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new AppComplianceAutomationClient(credential, subscriptionId);
  const result = await client.evidence.download("testReportName", "evidence1");
  console.log(result);
}

async function main(): Promise<void> {
  await evidenceDownload();
}

main().catch(console.error);
