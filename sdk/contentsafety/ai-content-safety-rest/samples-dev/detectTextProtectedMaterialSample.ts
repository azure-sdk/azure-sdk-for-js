// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createContentSafetyClient from "@azure-rest/ai-content-safety";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation DetectTextProtectedMaterial
 *
 * @summary call operation DetectTextProtectedMaterial
 */
async function detectTextProtectedMaterialSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createContentSafetyClient(endpointParam, credential);
  const result = await client
    .path("/text:detectProtectedMaterial")
    .post({ body: { text: "{Your text}" } });
  console.log(result);
}

async function main() {
  detectTextProtectedMaterialSample();
}

main().catch(console.error);
