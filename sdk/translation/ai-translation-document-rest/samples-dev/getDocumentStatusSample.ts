// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createDocumentTranslationClient from "@azure-rest/ai-translation-document";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetDocumentStatus
 *
 * @summary call operation GetDocumentStatus
 */
async function getDocumentStatusSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createDocumentTranslationClient(endpointParam, credential);
  const id = "{Your id}";
  const documentId = "{Your documentId}";
  const result = await client
    .path("/document/batches/{id}/documents/{documentId}", id, documentId)
    .get();
  console.log(result);
}

async function main() {
  getDocumentStatusSample();
}

main().catch(console.error);
