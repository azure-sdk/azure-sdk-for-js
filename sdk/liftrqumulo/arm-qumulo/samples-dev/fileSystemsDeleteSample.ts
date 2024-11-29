// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { StorageClient } from "@azure/arm-qumulo";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to delete a FileSystemResource
 *
 * @summary delete a FileSystemResource
 * x-ms-original-file: 2024-06-19/FileSystems_Delete_MaximumSet_Gen.json
 */
async function fileSystemsDelete() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "382E8C7A-AC80-4D70-8580-EFE99537B9B7";
  const client = new StorageClient(credential, subscriptionId);
  await client.fileSystems.delete("rgQumulo", "xoschzkccroahrykedlvbbnsddq");
}

/**
 * This sample demonstrates how to delete a FileSystemResource
 *
 * @summary delete a FileSystemResource
 * x-ms-original-file: 2024-06-19/FileSystems_Delete_MinimumSet_Gen.json
 */
async function fileSystemsDeleteMinimumSetGen() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "382E8C7A-AC80-4D70-8580-EFE99537B9B7";
  const client = new StorageClient(credential, subscriptionId);
  await client.fileSystems.delete("rgQumulo", "jgtskkiplquyrlkaxvhdg");
}

async function main() {
  fileSystemsDelete();
  fileSystemsDeleteMinimumSetGen();
}

main().catch(console.error);
