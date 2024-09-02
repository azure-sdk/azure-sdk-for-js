// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzureKeyCredential } from "@azure/core-auth";
import createContentSafetyClient, {
  paginate,
} from "@azure-rest/ai-content-safety";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ListTextBlocklists
 *
 * @summary call operation ListTextBlocklists
 */
async function listTextBlocklistsSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createContentSafetyClient(endpointParam, credential);
  const initialResponse = await client.path("/text/blocklists").get();
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  listTextBlocklistsSample();
}

main().catch(console.error);
