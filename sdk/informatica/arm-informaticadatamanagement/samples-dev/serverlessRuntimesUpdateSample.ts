// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DataManagementClient } from "@azure/arm-informaticadatamanagement";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to update a InformaticaServerlessRuntimeResource
 *
 * @summary update a InformaticaServerlessRuntimeResource
 * x-ms-original-file: 2024-05-08/ServerlessRuntimes_Update_MaximumSet_Gen.json
 */
async function serverlessRuntimesUpdate(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "3599DA28-E346-4D9F-811E-189C0445F0FE";
  const client = new DataManagementClient(credential, subscriptionId);
  const result = await client.serverlessRuntimes.update(
    "rgopenapi",
    "W5",
    "t_",
    {
      properties: {
        description: "ocprslpljoikxyduackzqnkuhyzrh",
        platform: "AZURE",
        applicationType: "CDI",
        computeUnits: "uncwbpu",
        executionTimeout: "tjyfytuywriabt",
        serverlessAccountLocation: "goaugkyfanqfnvcmntreibqrswfpis",
        serverlessRuntimeNetworkProfile: {
          networkInterfaceConfiguration: {
            vnetId:
              "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/HypernetVnet1",
            subnetId:
              "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/subnet1",
            vnetResourceGuid: "5328d299-1462-4be0-bef1-303a28e556a0",
          },
        },
        advancedCustomProperties: [{ key: "qcmc", value: "unraxmnohdmvutt" }],
        supplementaryFileLocation: "csxaqzpxu",
        serverlessRuntimeConfig: {
          cdiConfigProps: [
            {
              engineName: "hngsdqvtjdhwqlbqfotipaiwjuys",
              engineVersion: "zlrlbg",
              applicationConfigs: [
                {
                  type: "lw",
                  name: "upfvjrqcrwwedfujkmsodeinw",
                  value: "mozgsetpwjmtyl",
                  platform: "dixfyeobngivyvf",
                  customized: "j",
                  defaultValue: "zvgkqwmi",
                },
              ],
            },
          ],
          cdieConfigProps: [
            {
              engineName: "hngsdqvtjdhwqlbqfotipaiwjuys",
              engineVersion: "zlrlbg",
              applicationConfigs: [
                {
                  type: "lw",
                  name: "upfvjrqcrwwedfujkmsodeinw",
                  value: "mozgsetpwjmtyl",
                  platform: "dixfyeobngivyvf",
                  customized: "j",
                  defaultValue: "zvgkqwmi",
                },
              ],
            },
          ],
        },
        serverlessRuntimeTags: [{ name: "korveuycuwhs", value: "uyiuegxnkgp" }],
        serverlessRuntimeUserContextProperties: {
          userContextToken: "ctgebtvjhwh",
        },
      },
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to update a InformaticaServerlessRuntimeResource
 *
 * @summary update a InformaticaServerlessRuntimeResource
 * x-ms-original-file: 2024-05-08/ServerlessRuntimes_Update_MinimumSet_Gen.json
 */
async function serverlessRuntimesUpdateMin(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "3599DA28-E346-4D9F-811E-189C0445F0FE";
  const client = new DataManagementClient(credential, subscriptionId);
  const result = await client.serverlessRuntimes.update(
    "rgopenapi",
    "_f--",
    "8Zr__",
    {},
  );
  console.log(result);
}

async function main(): Promise<void> {
  await serverlessRuntimesUpdate();
  await serverlessRuntimesUpdateMin();
}

main().catch(console.error);
