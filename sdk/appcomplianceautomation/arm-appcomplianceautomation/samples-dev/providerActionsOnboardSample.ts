// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationClient } from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to onboard given subscriptions to Microsoft.AppComplianceAutomation provider.
 *
 * @summary onboard given subscriptions to Microsoft.AppComplianceAutomation provider.
 * x-ms-original-file: 2024-06-27/Onboard.json
 */
async function onboard() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new AppComplianceAutomationClient(credential, subscriptionId);
  await client.providerActions.onboard();
}

async function main() {
  onboard();
}

main().catch(console.error);
