// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationClient } from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to update an exiting AppComplianceAutomation webhook.
 *
 * @summary update an exiting AppComplianceAutomation webhook.
 * x-ms-original-file: 2024-06-27/Webhook_Update.json
 */
async function webhookUpdate(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new AppComplianceAutomationClient(credential, subscriptionId);
  const result = await client.webhook.update("testReportName", "testWebhookName");
  console.log(result);
}

async function main(): Promise<void> {
  await webhookUpdate();
}

main().catch(console.error);
