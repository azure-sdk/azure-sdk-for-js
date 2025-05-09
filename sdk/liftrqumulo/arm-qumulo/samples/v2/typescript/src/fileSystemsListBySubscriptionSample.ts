// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { StorageClient } from "@azure/arm-qumulo";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list FileSystemResource resources by subscription ID
 *
 * @summary list FileSystemResource resources by subscription ID
 * x-ms-original-file: 2024-06-19/FileSystems_ListBySubscription_MaximumSet_Gen.json
 */
async function fileSystemsListBySubscription(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "382E8C7A-AC80-4D70-8580-EFE99537B9B7";
  const client = new StorageClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.fileSystems.listBySubscription()) {
    resArray.push(item);
  }

  console.log(resArray);
}

/**
 * This sample demonstrates how to list FileSystemResource resources by subscription ID
 *
 * @summary list FileSystemResource resources by subscription ID
 * x-ms-original-file: 2024-06-19/FileSystems_ListBySubscription_MinimumSet_Gen.json
 */
async function fileSystemsListBySubscriptionMinimumSetGen(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "aaaaaaa";
  const client = new StorageClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.fileSystems.listBySubscription()) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await fileSystemsListBySubscription();
  await fileSystemsListBySubscriptionMinimumSetGen();
}

main().catch(console.error);
