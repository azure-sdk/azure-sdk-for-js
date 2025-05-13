// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MigrateClient } from "@azure/arm-migrate";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to delete a AvsAssessmentV2
 *
 * @summary delete a AvsAssessmentV2
 * x-ms-original-file: 2024-03-03-preview/AvsAssessmentsV2Operations_Delete_MaximumSet_Gen.json
 */
async function avsAssessmentsV2OperationsDeleteMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "BF03674C-B4D0-4FC9-B964-175F4C6CBFDD";
  const client = new MigrateClient(credential, subscriptionId);
  await client.avsAssessmentsV2Operations.delete(
    "rgavsAssessments",
    "contosoProject",
    "assessmentName",
  );
}

async function main(): Promise<void> {
  await avsAssessmentsV2OperationsDeleteMaximumSet();
}

main().catch(console.error);
