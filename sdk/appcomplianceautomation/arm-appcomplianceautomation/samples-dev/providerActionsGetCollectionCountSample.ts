// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationClient } from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get the count of reports.
 *
 * @summary get the count of reports.
 * x-ms-original-file: 2024-06-27/Report_GetCollectionCount.json
 */
async function reportGetCollectionCount() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new AppComplianceAutomationClient(credential, subscriptionId);
  const result = await client.providerActions.getCollectionCount();
  console.log(result);
}

async function main() {
  reportGetCollectionCount();
}

main().catch(console.error);
