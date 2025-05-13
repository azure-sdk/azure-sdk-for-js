// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MigrateClient } from "@azure/arm-migrate";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list AvsAssessmentV2Summary resources by AvsAssessmentV2
 *
 * @summary list AvsAssessmentV2Summary resources by AvsAssessmentV2
 * x-ms-original-file: 2024-03-03-preview/AvsAssessmentV2SummaryOperations_ListByParent_MaximumSet_Gen.json
 */
async function avsAssessmentV2SummaryOperationsListByParentMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "BF03674C-B4D0-4FC9-B964-175F4C6CBFDD";
  const client = new MigrateClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.avsAssessmentV2SummaryOperations.listByParent(
    "rgavsAssessments",
    "contosoProject",
    "assessmentName",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await avsAssessmentV2SummaryOperationsListByParentMaximumSet();
}

main().catch(console.error);
