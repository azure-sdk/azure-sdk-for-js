// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MigrateClient } from "@azure/arm-migrate";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list AvsAssessmentV2 resources by AssessmentProject
 *
 * @summary list AvsAssessmentV2 resources by AssessmentProject
 * x-ms-original-file: 2024-03-03-preview/AvsAssessmentsV2Operations_ListByParent_MaximumSet_Gen.json
 */
async function avsAssessmentsV2OperationsListByParentMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "BF03674C-B4D0-4FC9-B964-175F4C6CBFDD";
  const client = new MigrateClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.avsAssessmentsV2Operations.listByParent(
    "rgavsAssessments",
    "contosoProject",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await avsAssessmentsV2OperationsListByParentMaximumSet();
}

main().catch(console.error);
