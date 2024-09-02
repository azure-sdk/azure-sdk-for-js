// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createDocumentTranslationClient from "@azure-rest/ai-translation-document";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetTranslationStatus
 *
 * @summary call operation GetTranslationStatus
 */
async function getTranslationStatusSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createDocumentTranslationClient(endpointParam, credential);
  const id = "{Your id}";
  const result = await client.path("/document/batches/{id}", id).get();
  console.log(result);
}

async function main() {
  getTranslationStatusSample();
}

main().catch(console.error);
