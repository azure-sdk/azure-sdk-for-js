// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createContentSafetyClient from "@azure-rest/ai-content-safety";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ShieldPrompt
 *
 * @summary call operation ShieldPrompt
 */
async function shieldPromptSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createContentSafetyClient(endpointParam, credential);
  const result = await client
    .path("/text:shieldPrompt")
    .post({
      body: {
        userPrompt: "{Your userPrompt}",
        documents: ["{Your documents}"],
      },
    });
  console.log(result);
}

async function main() {
  shieldPromptSample();
}

main().catch(console.error);
