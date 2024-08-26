// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzureKeyCredential } from "@azure/core-auth";
import createContentSafetyClient, {
  paginate,
} from "@azure-rest/ai-content-safety";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ListTextBlocklistItems
 *
 * @summary call operation ListTextBlocklistItems
 */
async function listTextBlocklistItemsSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createContentSafetyClient(endpointParam, credential);
  const blocklistName = "{Your blocklistName}";
  const initialResponse = await client
    .path("/text/blocklists/{blocklistName}/blocklistItems", blocklistName)
    .get({ queryParameters: { top: 123, skip: 123, maxpagesize: 123 } });
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  listTextBlocklistItemsSample();
}

main().catch(console.error);
