// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridConnectivityClient } from "@azure/arm-hybridconnectivity";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get a PublicCloudConnector
 *
 * @summary get a PublicCloudConnector
 * x-ms-original-file: 2024-12-01/PublicCloudConnectors_Get.json
 */
async function publicCloudConnectorsGet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "5ACC4579-DB34-4C2F-8F8C-25061168F342";
  const client = new HybridConnectivityClient(credential, subscriptionId);
  const result = await client.publicCloudConnectors.get(
    "rgpublicCloud",
    "rzygvnpsnrdylwzdbsscjazvamyxmh",
  );
  console.log(result);
}

async function main() {
  publicCloudConnectorsGet();
}

main().catch(console.error);
