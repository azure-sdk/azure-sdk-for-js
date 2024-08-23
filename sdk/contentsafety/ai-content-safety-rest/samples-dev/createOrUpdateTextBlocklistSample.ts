// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createContentSafetyClient from "@azure-rest/ai-content-safety";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation CreateOrUpdateTextBlocklist
 *
 * @summary call operation CreateOrUpdateTextBlocklist
 */
async function createOrUpdateTextBlocklistSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createContentSafetyClient(endpointParam, credential);
  const blocklistName = "{Your blocklistName}";
  const result = await client
    .path("/text/blocklists/{blocklistName}", blocklistName)
    .patch({
      body: {
        blocklistName: "{Your blocklistName}",
        description: "{Your description}",
      },
      contentType: "application/merge-patch+json",
    });
  console.log(result);
}

async function main() {
  createOrUpdateTextBlocklistSample();
}

main().catch(console.error);
