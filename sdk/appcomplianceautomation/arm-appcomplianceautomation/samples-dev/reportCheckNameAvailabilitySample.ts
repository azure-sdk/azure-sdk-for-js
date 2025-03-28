// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationClient } from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to checks the report's nested resource name availability, e.g: Webhooks, Evidences, Snapshots.
 *
 * @summary checks the report's nested resource name availability, e.g: Webhooks, Evidences, Snapshots.
 * x-ms-original-file: 2024-06-27/Report_NestedResourceCheckNameAvailability_Report_Evidence_Check_Name_Availability.json
 */
async function reportEvidenceCheckNameAvailability(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new AppComplianceAutomationClient(credential, subscriptionId);
  const result = await client.report.checkNameAvailability("reportABC");
  console.log(result);
}

/**
 * This sample demonstrates how to checks the report's nested resource name availability, e.g: Webhooks, Evidences, Snapshots.
 *
 * @summary checks the report's nested resource name availability, e.g: Webhooks, Evidences, Snapshots.
 * x-ms-original-file: 2024-06-27/Report_NestedResourceCheckNameAvailability_Report_Snapshot_Check_Name_Availability.json
 */
async function reportSnapshotCheckNameAvailability(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new AppComplianceAutomationClient(credential, subscriptionId);
  const result = await client.report.checkNameAvailability("reportABC");
  console.log(result);
}

/**
 * This sample demonstrates how to checks the report's nested resource name availability, e.g: Webhooks, Evidences, Snapshots.
 *
 * @summary checks the report's nested resource name availability, e.g: Webhooks, Evidences, Snapshots.
 * x-ms-original-file: 2024-06-27/Report_NestedResourceCheckNameAvailability_Report_Webhook_Check_Name_Availability.json
 */
async function reportWebhookCheckNameAvailability(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new AppComplianceAutomationClient(credential, subscriptionId);
  const result = await client.report.checkNameAvailability("reportABC");
  console.log(result);
}

async function main(): Promise<void> {
  await reportEvidenceCheckNameAvailability();
  await reportSnapshotCheckNameAvailability();
  await reportWebhookCheckNameAvailability();
}

main().catch(console.error);
