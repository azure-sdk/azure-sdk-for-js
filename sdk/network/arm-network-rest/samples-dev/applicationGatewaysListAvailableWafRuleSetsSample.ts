// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type { ApplicationGatewaysListAvailableWafRuleSetsParameters } from "@azure-rest/arm-network";
import createNetworkManagementClient from "@azure-rest/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Lists all available web application firewall rule sets.
 *
 * @summary Lists all available web application firewall rule sets.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/ApplicationGatewayAvailableWafRuleSetsGet.json
 */
async function getAvailableWafRuleSets(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const client = createNetworkManagementClient(credential);
  const subscriptionId = "";
  const options: ApplicationGatewaysListAvailableWafRuleSetsParameters = {
    queryParameters: { "api-version": "2022-05-01" },
  };
  const result = await client
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Network/applicationGatewayAvailableWafRuleSets",
      subscriptionId,
    )
    .get(options);
  console.log(result);
}

getAvailableWafRuleSets().catch(console.error);
