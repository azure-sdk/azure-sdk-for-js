// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationClient } from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to delete an existent evidence from a specified report
 *
 * @summary delete an existent evidence from a specified report
 * x-ms-original-file: 2024-06-27/Evidence_Delete.json
 */
async function evidenceDelete() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new AppComplianceAutomationClient(credential, subscriptionId);
  await client.evidence.delete("testReportName", "evidence1");
}

async function main() {
  evidenceDelete();
}

main().catch(console.error);
