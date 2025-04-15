// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationClient } from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to returns a paginated list of evidences for a specified report.
 *
 * @summary returns a paginated list of evidences for a specified report.
 * x-ms-original-file: 2024-06-27/Evidence_ListByReport.json
 */
async function evidenceListByReport(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new AppComplianceAutomationClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.evidence.listByReport("reportName")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await evidenceListByReport();
}

main().catch(console.error);
