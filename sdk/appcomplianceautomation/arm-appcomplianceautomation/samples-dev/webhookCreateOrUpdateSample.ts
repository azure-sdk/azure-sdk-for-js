// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationClient } from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create a new AppComplianceAutomation webhook or update an exiting AppComplianceAutomation webhook.
 *
 * @summary create a new AppComplianceAutomation webhook or update an exiting AppComplianceAutomation webhook.
 * x-ms-original-file: 2024-06-27/Webhook_CreateOrUpdate.json
 */
async function webhookCreateOrUpdate() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new AppComplianceAutomationClient(credential, subscriptionId);
  const result = await client.webhook.createOrUpdate(
    "testReportName",
    "testWebhookName",
  );
  console.log(result);
}

async function main() {
  webhookCreateOrUpdate();
}

main().catch(console.error);
