// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createDocumentTranslationClient from "@azure-rest/ai-translation-document";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation DocumentTranslate
 *
 * @summary call operation DocumentTranslate
 */
async function documentTranslateSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createDocumentTranslationClient(endpointParam, credential);
  const result = await client
    .path("/document:translate")
    .post({
      body: { document: "{Your document}", glossary: ["{Your glossary}"] },
      queryParameters: {
        sourceLanguage: "{Your sourceLanguage}",
        targetLanguage: "{Your targetLanguage}",
        category: "{Your category}",
        allowFallback: true,
      },
      headers: { "x-ms-client-request-id": "{Your x-ms-client-request-id}" },
      contentType: "multipart/form-data",
    });
  console.log(result);
}

async function main() {
  documentTranslateSample();
}

main().catch(console.error);
