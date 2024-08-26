// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createTextTranslationClient from "@azure-rest/ai-translation-text";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation LookupDictionaryEntries
 *
 * @summary call operation LookupDictionaryEntries
 */
async function lookupDictionaryEntriesSample() {
  const endpointParam = "{Your endpointParam}";
  const client = createTextTranslationClient(endpointParam);
  const result = await client
    .path("/dictionary/lookup")
    .post({
      body: [{ text: "{Your text}" }],
      queryParameters: { from: "{Your from}", to: "{Your to}" },
      headers: { "X-ClientTraceId": "{Your X-ClientTraceId}" },
    });
  console.log(result);
}

async function main() {
  lookupDictionaryEntriesSample();
}

main().catch(console.error);
