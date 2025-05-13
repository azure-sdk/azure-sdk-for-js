// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationClient } from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get the AppComplianceAutomation report list for the tenant.
 *
 * @summary get the AppComplianceAutomation report list for the tenant.
 * x-ms-original-file: 2024-06-27/Report_List.json
 */
async function reportList(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new AppComplianceAutomationClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.report.list({
    skipToken: "1",
    offerGuid: "00000000-0000-0000-0000-000000000000",
    reportCreatorTenantId: "00000000-0000-0000-0000-000000000000",
  })) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await reportList();
}

main().catch(console.error);
