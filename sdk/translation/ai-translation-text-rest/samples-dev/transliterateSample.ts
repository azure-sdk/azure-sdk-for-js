// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createTextTranslationClient from "@azure-rest/ai-translation-text";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Transliterate
 *
 * @summary call operation Transliterate
 */
async function transliterateSample() {
  const endpointParam = "{Your endpointParam}";
  const client = createTextTranslationClient(endpointParam);
  const result = await client
    .path("/transliterate")
    .post({
      body: [{ text: "{Your text}" }],
      queryParameters: {
        language: "{Your language}",
        fromScript: "{Your fromScript}",
        toScript: "{Your toScript}",
      },
      headers: { "X-ClientTraceId": "{Your X-ClientTraceId}" },
    });
  console.log(result);
}

async function main() {
  transliterateSample();
}

main().catch(console.error);
