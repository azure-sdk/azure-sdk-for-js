// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createTextTranslationClient from "@azure-rest/ai-translation-text";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation FindSentenceBoundaries
 *
 * @summary call operation FindSentenceBoundaries
 */
async function findSentenceBoundariesSample() {
  const endpointParam = "{Your endpointParam}";
  const client = createTextTranslationClient(endpointParam);
  const result = await client
    .path("/breaksentence")
    .post({
      body: [{ text: "{Your text}" }],
      queryParameters: { language: "{Your language}", script: "{Your script}" },
      headers: { "X-ClientTraceId": "{Your X-ClientTraceId}" },
    });
  console.log(result);
}

async function main() {
  findSentenceBoundariesSample();
}

main().catch(console.error);
