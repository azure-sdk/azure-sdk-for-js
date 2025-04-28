// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SecretsStoreExtensionManagementClient } from "@azure/arm-secretsstoreextension";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to lists the AzureKeyVaultSecretProviderClass instances within a resource group.
 *
 * @summary lists the AzureKeyVaultSecretProviderClass instances within a resource group.
 * x-ms-original-file: 2024-08-21-preview/AzureKeyVaultSecretProviderClasses_ListByResourceGroup_MaximumSet_Gen.json
 */
async function azureKeyVaultSecretProviderClassesListByResourceGroup(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new SecretsStoreExtensionManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.azureKeyVaultSecretProviderClasses.listByResourceGroup(
    "rg-ssc-example",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await azureKeyVaultSecretProviderClassesListByResourceGroup();
}

main().catch(console.error);
