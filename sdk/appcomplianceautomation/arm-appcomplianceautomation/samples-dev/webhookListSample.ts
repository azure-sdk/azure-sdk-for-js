// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationClient } from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get the AppComplianceAutomation webhook list.
 *
 * @summary get the AppComplianceAutomation webhook list.
 * x-ms-original-file: 2024-06-27/Webhook_List.json
 */
async function webhookList() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new AppComplianceAutomationClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.webhook.list("testReportName", {
    skipToken: "1",
  })) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  webhookList();
}

main().catch(console.error);
