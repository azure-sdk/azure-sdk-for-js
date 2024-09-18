// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createContentSafetyClient from "@azure-rest/ai-content-safety";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetTextBlocklistItem
 *
 * @summary call operation GetTextBlocklistItem
 */
async function getTextBlocklistItemSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createContentSafetyClient(endpointParam, credential);
  const blocklistName = "{Your blocklistName}";
  const blocklistItemId = "{Your blocklistItemId}";
  const result = await client
    .path(
      "/text/blocklists/{blocklistName}/blocklistItems/{blocklistItemId}",
      blocklistName,
      blocklistItemId,
    )
    .get();
  console.log(result);
}

async function main() {
  getTextBlocklistItemSample();
}

main().catch(console.error);
