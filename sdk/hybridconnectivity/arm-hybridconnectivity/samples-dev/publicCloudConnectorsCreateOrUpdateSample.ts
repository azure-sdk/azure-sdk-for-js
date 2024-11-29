// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridConnectivityClient } from "@azure/arm-hybridconnectivity";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create a PublicCloudConnector
 *
 * @summary create a PublicCloudConnector
 * x-ms-original-file: 2024-12-01/PublicCloudConnectors_CreateOrUpdate.json
 */
async function publicCloudConnectorsCreateOrUpdate() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "5ACC4579-DB34-4C2F-8F8C-25061168F342";
  const client = new HybridConnectivityClient(credential, subscriptionId);
  const result = await client.publicCloudConnectors.createOrUpdate(
    "rgpublicCloud",
    "advjwoakdusalamomg",
    {
      properties: {
        awsCloudProfile: {
          accountId: "snbnuxckevyqpm",
          excludedAccounts: ["rwgqpukglvbqmogqcliqolucp"],
          isOrganizationalAccount: true,
        },
        hostType: "AWS",
      },
      tags: {},
      location: "jpiglusfxynfcewcjwvvnn",
    },
  );
  console.log(result);
}

async function main() {
  publicCloudConnectorsCreateOrUpdate();
}

main().catch(console.error);
