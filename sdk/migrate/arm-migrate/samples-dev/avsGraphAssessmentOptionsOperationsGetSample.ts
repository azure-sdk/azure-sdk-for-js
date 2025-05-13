// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MigrateClient } from "@azure/arm-migrate";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get a AvsGraphAssessmentOptions
 *
 * @summary get a AvsGraphAssessmentOptions
 * x-ms-original-file: 2024-03-03-preview/AvsGraphAssessmentOptionsOperations_Get_MaximumSet_Gen.json
 */
async function avsGraphAssessmentOptionsOperationsGetMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "BF03674C-B4D0-4FC9-B964-175F4C6CBFDD";
  const client = new MigrateClient(credential, subscriptionId);
  const result = await client.avsGraphAssessmentOptionsOperations.get(
    "rgavsAssessments",
    "contosoProject",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await avsGraphAssessmentOptionsOperationsGetMaximumSet();
}

main().catch(console.error);
