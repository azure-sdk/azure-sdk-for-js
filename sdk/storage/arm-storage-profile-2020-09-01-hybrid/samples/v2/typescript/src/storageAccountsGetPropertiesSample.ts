/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { StorageManagementClient } from "@azure/arm-storage-profile-2020-09-01-hybrid";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Returns the properties for the specified storage account including but not limited to name, SKU name, location, and account status. The ListKeys operation should be used to retrieve storage keys.
 *
 * @summary Returns the properties for the specified storage account including but not limited to name, SKU name, location, and account status. The ListKeys operation should be used to retrieve storage keys.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2019-06-01/examples/StorageAccountGetProperties.json
 */
async function storageAccountGetProperties(): Promise<void> {
  const subscriptionId =
    process.env["STORAGE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["STORAGE_RESOURCE_GROUP"] || "res9407";
  const accountName = "sto8596";
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.storageAccounts.getProperties(
    resourceGroupName,
    accountName
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Returns the properties for the specified storage account including but not limited to name, SKU name, location, and account status. The ListKeys operation should be used to retrieve storage keys.
 *
 * @summary Returns the properties for the specified storage account including but not limited to name, SKU name, location, and account status. The ListKeys operation should be used to retrieve storage keys.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2019-06-01/examples/StorageAccountGetPropertiesCMKEnabled.json
 */
async function storageAccountGetPropertiesCmkEnabled(): Promise<void> {
  const subscriptionId =
    process.env["STORAGE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["STORAGE_RESOURCE_GROUP"] || "res9407";
  const accountName = "sto8596";
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.storageAccounts.getProperties(
    resourceGroupName,
    accountName
  );
  console.log(result);
}

async function main(): Promise<void> {
  storageAccountGetProperties();
  storageAccountGetPropertiesCmkEnabled();
}

main().catch(console.error);
