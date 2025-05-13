// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationClient } from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list the storage accounts which are in use by related reports
 *
 * @summary list the storage accounts which are in use by related reports
 * x-ms-original-file: 2024-06-27/ListInUseStorageAccountsWithSubscriptions.json
 */
async function listInUseStorageAccountsWithSubscriptions(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new AppComplianceAutomationClient(credential, subscriptionId);
  const result = await client.providerActions.listInUseStorageAccounts();
  console.log(result);
}

/**
 * This sample demonstrates how to list the storage accounts which are in use by related reports
 *
 * @summary list the storage accounts which are in use by related reports
 * x-ms-original-file: 2024-06-27/ListInUseStorageAccountsWithoutSubscriptions.json
 */
async function listInUseStorageAccountsWithoutSubscriptions(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new AppComplianceAutomationClient(credential, subscriptionId);
  const result = await client.providerActions.listInUseStorageAccounts();
  console.log(result);
}

async function main(): Promise<void> {
  await listInUseStorageAccountsWithSubscriptions();
  await listInUseStorageAccountsWithoutSubscriptions();
}

main().catch(console.error);
