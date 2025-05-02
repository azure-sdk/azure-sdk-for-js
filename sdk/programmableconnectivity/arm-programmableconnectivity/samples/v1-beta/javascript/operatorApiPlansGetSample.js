// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ProgrammableConnectivityClient } = require("@azure/arm-programmableconnectivity");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to get an OperatorApiPlan resource by name.
 *
 * @summary get an OperatorApiPlan resource by name.
 * x-ms-original-file: 2025-03-30-preview/OperatorApiPlans_Get_MaximumSet_Gen.json
 */
async function operatorApiPlansGetMaximumSetGeneratedByMaximumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "93519EA0-206F-42A3-8126-A234F19328E0";
  const client = new ProgrammableConnectivityClient(credential, subscriptionId);
  const result = await client.operatorApiPlans.get("operatorApiPlanName");
  console.log(result);
}

async function main() {
  await operatorApiPlansGetMaximumSetGeneratedByMaximumSetRule();
}

main().catch(console.error);
