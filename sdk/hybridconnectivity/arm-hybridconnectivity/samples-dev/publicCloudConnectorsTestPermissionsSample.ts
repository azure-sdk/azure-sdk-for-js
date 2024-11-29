// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridConnectivityClient } from "@azure/arm-hybridconnectivity";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to a long-running resource action.
 *
 * @summary a long-running resource action.
 * x-ms-original-file: 2024-12-01/PublicCloudConnectors_TestPermissions.json
 */
async function publicCloudConnectorsTestPermissions() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "5ACC4579-DB34-4C2F-8F8C-25061168F342";
  const client = new HybridConnectivityClient(credential, subscriptionId);
  const result = await client.publicCloudConnectors.testPermissions(
    "rgpublicCloud",
    "rzygvnpsnrdylwzdbsscjazvamyxmh",
  );
  console.log(result);
}

async function main() {
  publicCloudConnectorsTestPermissions();
}

main().catch(console.error);
