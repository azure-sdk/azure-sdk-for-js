// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationClient } from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to trigger quick evaluation for the given subscriptions.
 *
 * @summary trigger quick evaluation for the given subscriptions.
 * x-ms-original-file: 2024-06-27/TriggerEvaluation.json
 */
async function triggerEvaluation() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new AppComplianceAutomationClient(credential, subscriptionId);
  await client.providerActions.triggerEvaluation();
}

async function main() {
  triggerEvaluation();
}

main().catch(console.error);
