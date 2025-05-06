// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FileSharesClient } from "@azure/arm-fileshares";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list FileShareSnapshot by FileShare.
 *
 * @summary list FileShareSnapshot by FileShare.
 * x-ms-original-file: 2024-01-01-preview/FileShares_ListByFileShare_MaximumSet_Gen.json
 */
async function fileSharesListByFileShareMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "09A2620A-99C9-4A63-A89E-AB06AA59A998";
  const client = new FileSharesClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.fileShares.listByFileShare(
    "rgfileshares",
    "testfilesharesnapshot",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await fileSharesListByFileShareMaximumSet();
}

main().catch(console.error);
