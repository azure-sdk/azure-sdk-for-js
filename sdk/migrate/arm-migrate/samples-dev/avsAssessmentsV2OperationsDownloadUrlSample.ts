// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MigrateClient } from "@azure/arm-migrate";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get the URL for downloading the assessment in a report format.
 *
 * @summary get the URL for downloading the assessment in a report format.
 * x-ms-original-file: 2024-03-03-preview/AvsAssessmentsV2Operations_DownloadUrl_MaximumSet_Gen.json
 */
async function getDownloadURLForTheAssessmentReport(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "BF03674C-B4D0-4FC9-B964-175F4C6CBFDD";
  const client = new MigrateClient(credential, subscriptionId);
  const result = await client.avsAssessmentsV2Operations.downloadUrl(
    "rgavsAssessments",
    "contosoProject",
    "assessmentName",
    {},
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getDownloadURLForTheAssessmentReport();
}

main().catch(console.error);
