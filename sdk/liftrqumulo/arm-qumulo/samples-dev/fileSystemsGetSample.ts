// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { StorageClient } from "@azure/arm-qumulo";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get a FileSystemResource
 *
 * @summary get a FileSystemResource
 * x-ms-original-file: 2024-06-19/FileSystems_Get_MaximumSet_Gen.json
 */
async function fileSystemsGet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "382E8C7A-AC80-4D70-8580-EFE99537B9B7";
  const client = new StorageClient(credential, subscriptionId);
  const result = await client.fileSystems.get(
    "rgQumulo",
    "sihbehcisdqtqqyfiewiiaphgh",
  );
  console.log(result);
}

/**
 * This sample demonstrates how to get a FileSystemResource
 *
 * @summary get a FileSystemResource
 * x-ms-original-file: 2024-06-19/FileSystems_Get_MinimumSet_Gen.json
 */
async function fileSystemsGetMinimumSetGen() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "aaaaaaa";
  const client = new StorageClient(credential, subscriptionId);
  const result = await client.fileSystems.get("rgQumulo", "aaaaaaaaaaaaaaaaa");
  console.log(result);
}

async function main() {
  fileSystemsGet();
  fileSystemsGetMinimumSetGen();
}

main().catch(console.error);
