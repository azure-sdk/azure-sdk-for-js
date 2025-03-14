// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationClient } from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get the resource overview status.
 *
 * @summary get the resource overview status.
 * x-ms-original-file: 2024-06-27/Report_GetOverviewStatus.json
 */
async function reportGetOverviewStatus(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new AppComplianceAutomationClient(credential, subscriptionId);
  const result = await client.providerActions.getOverviewStatus();
  console.log(result);
}

async function main(): Promise<void> {
  await reportGetOverviewStatus();
}

main().catch(console.error);
