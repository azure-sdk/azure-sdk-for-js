// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createContentSafetyClient from "@azure-rest/ai-content-safety";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation AnalyzeImage
 *
 * @summary call operation AnalyzeImage
 */
async function analyzeImageSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createContentSafetyClient(endpointParam, credential);
  const result = await client
    .path("/image:analyze")
    .post({
      body: {
        image: { content: "{Your content}", blobUrl: "{Your blobUrl}" },
        categories: ["Hate"],
        outputType: "FourSeverityLevels",
      },
    });
  console.log(result);
}

async function main() {
  analyzeImageSample();
}

main().catch(console.error);
