// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationClient } from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to delete an AppComplianceAutomation webhook.
 *
 * @summary delete an AppComplianceAutomation webhook.
 * x-ms-original-file: 2024-06-27/Webhook_Delete.json
 */
async function webhookDelete(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new AppComplianceAutomationClient(credential, subscriptionId);
  await client.webhook.delete("testReportName", "testWebhookName");
}

async function main(): Promise<void> {
  await webhookDelete();
}

main().catch(console.error);
