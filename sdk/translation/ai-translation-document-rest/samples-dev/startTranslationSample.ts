// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzureKeyCredential } from "@azure/core-auth";
import createDocumentTranslationClient, {
  getLongRunningPoller,
} from "@azure-rest/ai-translation-document";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation StartTranslation
 *
 * @summary call operation StartTranslation
 */
async function startTranslationSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createDocumentTranslationClient(endpointParam, credential);
  const initialResponse = await client
    .path("/document/batches")
    .post({
      body: {
        inputs: [
          {
            source: {
              sourceUrl: "{Your sourceUrl}",
              filter: { prefix: "{Your prefix}", suffix: "{Your suffix}" },
              language: "{Your language}",
              storageSource: "AzureBlob",
            },
            targets: [
              {
                targetUrl: "{Your targetUrl}",
                category: "{Your category}",
                language: "{Your language}",
                glossaries: [
                  {
                    glossaryUrl: "{Your glossaryUrl}",
                    format: "{Your format}",
                    version: "{Your version}",
                    storageSource: "AzureBlob",
                  },
                ],
                storageSource: "AzureBlob",
              },
            ],
            storageType: "Folder",
          },
        ],
      },
    });
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  startTranslationSample();
}

main().catch(console.error);
