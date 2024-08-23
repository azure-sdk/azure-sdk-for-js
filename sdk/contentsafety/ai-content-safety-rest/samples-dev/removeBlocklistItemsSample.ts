// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createContentSafetyClient from "@azure-rest/ai-content-safety";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation RemoveBlocklistItems
 *
 * @summary call operation RemoveBlocklistItems
 */
async function removeBlocklistItemsSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createContentSafetyClient(endpointParam, credential);
  const blocklistName = "{Your blocklistName}";
  const result = await client
    .path(
      "/text/blocklists/{blocklistName}:removeBlocklistItems",
      blocklistName,
    )
    .post({ body: { blocklistItemIds: ["{Your blocklistItemIds}"] } });
  console.log(result);
}

async function main() {
  removeBlocklistItemsSample();
}

main().catch(console.error);
