/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  InformationProtectionPolicy,
  SecurityCenter,
} from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Details of the information protection policy.
 *
 * @summary Details of the information protection policy.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2017-08-01-preview/examples/InformationProtectionPolicies/CreateOrUpdateInformationProtectionPolicy_example.json
 */
async function createOrUpdateAnInformationProtectionPolicyForAManagementGroup(): Promise<void> {
  const scope =
    "providers/Microsoft.Management/managementGroups/148059f7-faf3-49a6-ba35-85122112291e";
  const informationProtectionPolicyName = "custom";
  const informationProtectionPolicy: InformationProtectionPolicy = {
    informationTypes: {
      "3bf3549199b841f286d5C1200a7df658": {
        custom: true,
        displayName: "Custom",
        enabled: true,
        keywords: [{ canBeNumeric: true, custom: true, pattern: "%custom%" }],
        order: 1400,
        recommendedLabelId: "7aa516c7-5a53-4857-bc6e-6808c6acd542",
      },
      "7fb9419d24734ad88e11B25cc8cf6a07": {
        custom: false,
        displayName: "Networking",
        enabled: true,
        keywords: [
          { canBeNumeric: false, custom: true, pattern: "%networking%" },
        ],
        order: 100,
        recommendedLabelId: "575739d2-3d53-4df0-9042-4c7772d5c7b1",
      },
    },
    labels: {
      "1345da73Bc5a4a8fB7dd3820eb713da8": {
        displayName: "Public",
        enabled: true,
        order: 100,
      },
      "575739d23d534df090424c7772d5c7b1": {
        displayName: "Confidential",
        enabled: true,
        order: 300,
      },
      "7aa516c75a534857Bc6e6808c6acd542": {
        displayName: "General",
        enabled: true,
        order: 200,
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential);
  const result = await client.informationProtectionPolicies.createOrUpdate(
    scope,
    informationProtectionPolicyName,
    informationProtectionPolicy,
  );
  console.log(result);
}

async function main(): Promise<void> {
  createOrUpdateAnInformationProtectionPolicyForAManagementGroup();
}

main().catch(console.error);
