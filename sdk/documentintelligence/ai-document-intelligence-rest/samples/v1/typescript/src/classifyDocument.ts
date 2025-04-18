// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This sample shows how to use a custom classifier to get the document type (class) of a document.
 *
 * @summary use a custom classifier to classify a document
 */

import type { AnalyzeOperationOutput } from "@azure-rest/ai-document-intelligence";
import DocumentIntelligence, {
  getLongRunningPoller,
  isUnexpected,
} from "@azure-rest/ai-document-intelligence";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

async function main(): Promise<void> {
  const client = DocumentIntelligence(
    process.env["DOCUMENT_INTELLIGENCE_ENDPOINT"] || "<cognitive services endpoint>",
    new DefaultAzureCredential(),
  );
  const documentUrl =
    "https://raw.githubusercontent.com/Azure/azure-sdk-for-js/main/sdk/formrecognizer/ai-form-recognizer/assets/invoice/Invoice_1.pdf";

  const classifierId = process.env.CUSTOM_CLASSIFIER_ID ?? "<classifier id>";
  const initialResponse = await client
    .path("/documentClassifiers/{classifierId}:analyze", classifierId)
    .post({
      contentType: "application/json",
      body: {
        urlSource: documentUrl,
      },
    });

  if (isUnexpected(initialResponse)) {
    throw initialResponse.body.error;
  }

  const poller = getLongRunningPoller(client, initialResponse);
  const analyzeResult = ((await poller.pollUntilDone()).body as AnalyzeOperationOutput)
    .analyzeResult;

  if (analyzeResult?.documents === undefined || analyzeResult.documents.length === 0) {
    throw new Error("Failed to extract any documents.");
  }

  for (const document of analyzeResult.documents) {
    console.log(
      `Extracted a document with type '${document.docType}' on page ${document.boundingRegions?.[0].pageNumber} (confidence: ${document.confidence})`,
    );
  }
}

main().catch((error) => {
  console.error("An error occurred:", error);
  process.exit(1);
});
