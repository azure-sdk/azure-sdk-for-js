// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createContentSafetyClient from "@azure-rest/ai-content-safety";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetTextBlocklist
 *
 * @summary call operation GetTextBlocklist
 */
async function getTextBlocklistSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createContentSafetyClient(endpointParam, credential);
  const blocklistName = "{Your blocklistName}";
  const result = await client
    .path("/text/blocklists/{blocklistName}", blocklistName)
    .get();
  console.log(result);
}

async function main() {
  getTextBlocklistSample();
}

main().catch(console.error);
