// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createTextTranslationClient from "@azure-rest/ai-translation-text";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetSupportedLanguages
 *
 * @summary call operation GetSupportedLanguages
 */
async function getSupportedLanguagesSample() {
  const endpointParam = "{Your endpointParam}";
  const client = createTextTranslationClient(endpointParam);
  const result = await client
    .path("/languages")
    .get({
      queryParameters: { scope: "{Your scope}" },
      headers: {
        "X-ClientTraceId": "{Your X-ClientTraceId}",
        "Accept-Language": "{Your Accept-Language}",
        "If-None-Match": "{Your If-None-Match}",
      },
    });
  console.log(result);
}

async function main() {
  getSupportedLanguagesSample();
}

main().catch(console.error);
