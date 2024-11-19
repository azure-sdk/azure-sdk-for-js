// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationClient } from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create or Update an evidence a specified report
 *
 * @summary create or Update an evidence a specified report
 * x-ms-original-file: 2024-06-27/Evidence_CreateOrUpdate.json
 */
async function evidenceCreateOrUpdate() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new AppComplianceAutomationClient(credential, subscriptionId);
  const result = await client.evidence.createOrUpdate(
    "testReportName",
    "evidence1",
  );
  console.log(result);
}

async function main() {
  evidenceCreateOrUpdate();
}

main().catch(console.error);
