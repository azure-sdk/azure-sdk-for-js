// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzureKeyCredential } from "@azure/core-auth";
import createDocumentTranslationClient, {
  paginate,
} from "@azure-rest/ai-translation-document";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetTranslationsStatus
 *
 * @summary call operation GetTranslationsStatus
 */
async function getTranslationsStatusSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createDocumentTranslationClient(endpointParam, credential);
  const initialResponse = await client
    .path("/document/batches")
    .get({
      queryParameters: {
        top: 123,
        skip: 123,
        maxpagesize: 123,
        ids: ["{Your ids}"],
        statuses: ["{Your statuses}"],
        createdDateTimeUtcStart: new Date(),
        createdDateTimeUtcEnd: new Date(),
        orderby: ["{Your orderby}"],
      },
    });
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  getTranslationsStatusSample();
}

main().catch(console.error);
