// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { MigrateClient } = require("@azure/arm-migrate");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to create a AvsAssessmentV2
 *
 * @summary create a AvsAssessmentV2
 * x-ms-original-file: 2024-03-03-preview/AvsAssessmentsV2Operations_Create_MaximumSet_Gen.json
 */
async function avsAssessmentsV2OperationsCreateMaximumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "BF03674C-B4D0-4FC9-B964-175F4C6CBFDD";
  const client = new MigrateClient(credential, subscriptionId);
  const result = await client.avsAssessmentsV2Operations.create(
    "rgavsAssessments",
    "contosoProject",
    "assessmentName",
    {
      properties: {
        scope: {
          scopeType: "ServerGroupId",
          serverGroupId: "fxonspfmzfuiaepr",
          azureResourceGraphQuery: "ylnfwgptlyzwzkotmunbx",
        },
        settings: {
          azureLocation: "actuloeieva",
          currency: "Unknown",
          scalingFactor: 28,
          discountPercentage: 27,
          sizingCriterion: "PerformanceBased",
          performanceData: {
            percentile: "Unknown",
            timeRange: "Day",
            perfDataStartTime: new Date("2025-02-21T05:36:34.751Z"),
            perfDataEndTime: new Date("2025-02-21T05:36:34.751Z"),
          },
          savingsSettings: {
            savingsOptions: "None",
            azureOfferCode: "Unknown",
          },
          billingSettings: {
            licensingProgram: "Retail",
            subscriptionId: "xvtuenxmmjuqlhgmvev",
          },
          environmentType: "Production",
          failuresToTolerateAndRaidLevelList: ["Unknown"],
          vcpuOversubscription: 25,
          nodeTypes: ["Unknown"],
          avsAssessmentScenario: "Unknown",
          externalStorageTypes: ["Unknown"],
          cpuHeadroom: 27,
          isVcfByolEnabled: true,
          memOvercommit: 11,
          dedupeCompression: 26,
          isStretchClusterEnabled: true,
        },
        details: { status: "Created" },
        fallbackMachineAssessmentArmId: "tpjvxfcyxsgngqdxyrrfh",
      },
    },
  );
  console.log(result);
}

async function main() {
  await avsAssessmentsV2OperationsCreateMaximumSet();
}

main().catch(console.error);
