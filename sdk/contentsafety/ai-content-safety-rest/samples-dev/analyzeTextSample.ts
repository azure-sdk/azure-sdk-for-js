// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createContentSafetyClient from "@azure-rest/ai-content-safety";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation AnalyzeText
 *
 * @summary call operation AnalyzeText
 */
async function analyzeTextSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createContentSafetyClient(endpointParam, credential);
  const result = await client
    .path("/text:analyze")
    .post({
      body: {
        text: "{Your text}",
        categories: ["Hate"],
        blocklistNames: ["{Your blocklistNames}"],
        haltOnBlocklistHit: true,
        outputType: "FourSeverityLevels",
      },
    });
  console.log(result);
}

async function main() {
  analyzeTextSample();
}

main().catch(console.error);
