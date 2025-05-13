// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AstroClient } from "@azure/arm-astro";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create a OrganizationResource
 *
 * @summary create a OrganizationResource
 * x-ms-original-file: 2024-08-27/Organizations_CreateOrUpdate_MaximumSet_Gen.json
 */
async function organizationsCreateOrUpdateGeneratedByMaximumSetRule(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "A4679760-5C37-44EA-A4B8-8A7628B13824";
  const client = new AstroClient(credential, subscriptionId);
  const result = await client.organizations.createOrUpdate("rgastronomer", "U.1-:7", {
    properties: {
      marketplace: {
        subscriptionId: "emasc",
        subscriptionStatus: "PendingFulfillmentStart",
        offerDetails: {
          publisherId: "kt",
          offerId: "tvidibzbxevtvnrdp",
          planId: "lwcvzdqecwkeracahmixnh",
          planName: "d",
          termUnit: "rs",
          termId: "kopnnjsp",
          renewalMode: "Auto",
        },
      },
      user: {
        firstName: "ucowvrccqpqpkdg",
        lastName: "fwwtnwggrtibghoijfzajrhgyo",
        emailAddress: ".K_@e7N-g1.xjqnbPs",
        upn: "zbdgbbqg",
        phoneNumber: "brnngpezmqecvflklbhsibq",
      },
      provisioningState: "Succeeded",
      partnerOrganizationProperties: {
        organizationId: "juomtfzwkjwnhhpodfnrqdv",
        workspaceId: "nnryjcmiohmkbvhngfgxigpodvhl",
        organizationName: "U.1-:7",
        workspaceName: "9.:06",
        singleSignOnProperties: {
          singleSignOnState: "Initial",
          enterpriseAppId: "srkwxktx",
          singleSignOnUrl: "l",
          aadDomains: ["fcnqoizqxcdclmy"],
          provisioningState: "Succeeded",
        },
      },
    },
    identity: { type: "None", userAssignedIdentities: {} },
    tags: {},
    location: "pgfkugslgnsxeqpjs",
  });
  console.log(result);
}

async function main(): Promise<void> {
  await organizationsCreateOrUpdateGeneratedByMaximumSetRule();
}

main().catch(console.error);
