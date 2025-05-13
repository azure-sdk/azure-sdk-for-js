// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationClient } from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to synchronize attestation record from app compliance.
 *
 * @summary synchronize attestation record from app compliance.
 * x-ms-original-file: 2024-06-27/Report_SyncCertRecord.json
 */
async function reportSyncCertRecord(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new AppComplianceAutomationClient(credential, subscriptionId);
  const result = await client.report.syncCertRecord("testReportName");
  console.log(result);
}

async function main(): Promise<void> {
  await reportSyncCertRecord();
}

main().catch(console.error);
