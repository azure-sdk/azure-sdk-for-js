// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PlaywrightManagementClient } from "@azure/arm-playwright";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list quota resources for a given Playwright workspace resource.
 *
 * @summary list quota resources for a given Playwright workspace resource.
 * x-ms-original-file: 2025-07-01-preview/PlaywrightWorkspaceQuotas_ListByPlaywrightWorkspace.json
 */
async function playwrightWorkspaceQuotasListByPlaywrightWorkspace(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new PlaywrightManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.playwrightWorkspaceQuotas.listByPlaywrightWorkspace(
    "dummyrg",
    "myWorkspace",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await playwrightWorkspaceQuotasListByPlaywrightWorkspace();
}

main().catch(console.error);
