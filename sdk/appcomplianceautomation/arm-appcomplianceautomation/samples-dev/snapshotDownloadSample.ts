// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationClient } from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to download compliance needs from snapshot, like: Compliance Report, Resource List.
 *
 * @summary download compliance needs from snapshot, like: Compliance Report, Resource List.
 * x-ms-original-file: 2024-06-27/Snapshot_Download_Snapshot_Download_Compliance_Detailed_Pdf_Report.json
 */
async function snapshotDownloadComplianceDetailedPdfReport(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new AppComplianceAutomationClient(credential, subscriptionId);
  const result = await client.snapshot.download("testReportName", "testSnapshotName");
  console.log(result);
}

/**
 * This sample demonstrates how to download compliance needs from snapshot, like: Compliance Report, Resource List.
 *
 * @summary download compliance needs from snapshot, like: Compliance Report, Resource List.
 * x-ms-original-file: 2024-06-27/Snapshot_Download_Snapshot_Download_Compliance_Pdf_Report.json
 */
async function snapshotDownloadCompliancePdfReport(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new AppComplianceAutomationClient(credential, subscriptionId);
  const result = await client.snapshot.download("testReportName", "testSnapshotName");
  console.log(result);
}

/**
 * This sample demonstrates how to download compliance needs from snapshot, like: Compliance Report, Resource List.
 *
 * @summary download compliance needs from snapshot, like: Compliance Report, Resource List.
 * x-ms-original-file: 2024-06-27/Snapshot_Download_Snapshot_Download_Compliance_Report.json
 */
async function snapshotDownloadComplianceReport(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new AppComplianceAutomationClient(credential, subscriptionId);
  const result = await client.snapshot.download("testReportName", "testSnapshotName");
  console.log(result);
}

/**
 * This sample demonstrates how to download compliance needs from snapshot, like: Compliance Report, Resource List.
 *
 * @summary download compliance needs from snapshot, like: Compliance Report, Resource List.
 * x-ms-original-file: 2024-06-27/Snapshot_Download_Snapshot_Download_Resource_List.json
 */
async function snapshotDownloadResourceList(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new AppComplianceAutomationClient(credential, subscriptionId);
  const result = await client.snapshot.download("testReportName", "testSnapshotName");
  console.log(result);
}

async function main(): Promise<void> {
  await snapshotDownloadComplianceDetailedPdfReport();
  await snapshotDownloadCompliancePdfReport();
  await snapshotDownloadComplianceReport();
  await snapshotDownloadResourceList();
}

main().catch(console.error);
