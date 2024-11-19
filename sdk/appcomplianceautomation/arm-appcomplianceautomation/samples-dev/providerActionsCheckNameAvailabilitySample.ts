// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationClient } from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to check if the given name is available for a report.
 *
 * @summary check if the given name is available for a report.
 * x-ms-original-file: 2024-06-27/Report_CheckNameAvailability.json
 */
async function reportCheckNameAvailability() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new AppComplianceAutomationClient(credential, subscriptionId);
  const result = await client.providerActions.checkNameAvailability();
  console.log(result);
}

async function main() {
  reportCheckNameAvailability();
}

main().catch(console.error);
