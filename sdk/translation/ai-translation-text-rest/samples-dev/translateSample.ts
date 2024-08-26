// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createTextTranslationClient from "@azure-rest/ai-translation-text";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Translate
 *
 * @summary call operation Translate
 */
async function translateSample() {
  const endpointParam = "{Your endpointParam}";
  const client = createTextTranslationClient(endpointParam);
  const result = await client
    .path("/translate")
    .post({
      body: [{ text: "{Your text}" }],
      queryParameters: {
        to: "{Your to}",
        from: "{Your from}",
        textType: "Plain",
        category: "{Your category}",
        profanityAction: "NoAction",
        profanityMarker: "Asterisk",
        includeAlignment: true,
        includeSentenceLength: true,
        suggestedFrom: "{Your suggestedFrom}",
        fromScript: "{Your fromScript}",
        toScript: "{Your toScript}",
        allowFallback: true,
      },
      headers: { "X-ClientTraceId": "{Your X-ClientTraceId}" },
    });
  console.log(result);
}

async function main() {
  translateSample();
}

main().catch(console.error);
