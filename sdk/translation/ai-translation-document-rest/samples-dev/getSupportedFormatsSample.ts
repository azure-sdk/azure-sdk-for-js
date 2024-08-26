// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createDocumentTranslationClient from "@azure-rest/ai-translation-document";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetSupportedFormats
 *
 * @summary call operation GetSupportedFormats
 */
async function getSupportedFormatsSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createDocumentTranslationClient(endpointParam, credential);
  const result = await client
    .path("/document/formats")
    .get({ queryParameters: { type: "document" } });
  console.log(result);
}

async function main() {
  getSupportedFormatsSample();
}

main().catch(console.error);
