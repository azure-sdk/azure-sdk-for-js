// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridConnectivityClient } from "@azure/arm-hybridconnectivity";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to delete a PublicCloudConnector
 *
 * @summary delete a PublicCloudConnector
 * x-ms-original-file: 2024-12-01/PublicCloudConnectors_Delete.json
 */
async function publicCloudConnectorsDelete() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "5ACC4579-DB34-4C2F-8F8C-25061168F342";
  const client = new HybridConnectivityClient(credential, subscriptionId);
  await client.publicCloudConnectors.delete(
    "rgpublicCloud",
    "skcfyjvflkhibdywjay",
  );
}

async function main() {
  publicCloudConnectorsDelete();
}

main().catch(console.error);
