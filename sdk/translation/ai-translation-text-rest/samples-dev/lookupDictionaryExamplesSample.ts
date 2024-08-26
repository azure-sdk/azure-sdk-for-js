// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createTextTranslationClient from "@azure-rest/ai-translation-text";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation LookupDictionaryExamples
 *
 * @summary call operation LookupDictionaryExamples
 */
async function lookupDictionaryExamplesSample() {
  const endpointParam = "{Your endpointParam}";
  const client = createTextTranslationClient(endpointParam);
  const result = await client
    .path("/dictionary/examples")
    .post({
      body: [{ text: "{Your text}", translation: "{Your translation}" }],
      queryParameters: { from: "{Your from}", to: "{Your to}" },
      headers: { "X-ClientTraceId": "{Your X-ClientTraceId}" },
    });
  console.log(result);
}

async function main() {
  lookupDictionaryExamplesSample();
}

main().catch(console.error);
