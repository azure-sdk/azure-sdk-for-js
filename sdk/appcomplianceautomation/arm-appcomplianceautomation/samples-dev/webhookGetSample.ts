// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationClient } from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get the AppComplianceAutomation webhook and its properties.
 *
 * @summary get the AppComplianceAutomation webhook and its properties.
 * x-ms-original-file: 2024-06-27/Webhook_Get.json
 */
async function webhookGet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new AppComplianceAutomationClient(credential, subscriptionId);
  const result = await client.webhook.get("testReportName", "testWebhookName");
  console.log(result);
}

async function main(): Promise<void> {
  await webhookGet();
}

main().catch(console.error);
