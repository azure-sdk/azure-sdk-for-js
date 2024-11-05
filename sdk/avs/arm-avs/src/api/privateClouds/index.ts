// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  privateCloudPropertiesSerializer,
  skuSerializer,
  systemAssignedServiceIdentitySerializer,
  privateCloudUpdatePropertiesSerializer,
  PrivateCloud,
  PrivateCloudUpdate,
  AdminCredentials,
  _PrivateCloudList,
} from "../../models/models.js";
import { AVSContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  PrivateCloudsListOptionalParams,
  PrivateCloudsListInSubscriptionOptionalParams,
  PrivateCloudsGetOptionalParams,
  PrivateCloudsCreateOrUpdateOptionalParams,
  PrivateCloudsUpdateOptionalParams,
  PrivateCloudsDeleteOptionalParams,
  PrivateCloudsRotateVcenterPasswordOptionalParams,
  PrivateCloudsRotateNsxtPasswordOptionalParams,
  PrivateCloudsListAdminCredentialsOptionalParams,
} from "../../models/options.js";

export function _privateCloudsListSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: PrivateCloudsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _privateCloudsListDeserialize(
  result: PathUncheckedResponse,
): Promise<_PrivateCloudList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        tags: p["tags"],
        location: p["location"],
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"],
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.["lastModifiedByType"],
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        properties: !p.properties
          ? undefined
          : {
              managementCluster: {
                clusterSize: p.properties?.managementCluster["clusterSize"],
                provisioningState:
                  p.properties?.managementCluster["provisioningState"],
                clusterId: p.properties?.managementCluster["clusterId"],
                hosts: p.properties?.managementCluster["hosts"],
                vsanDatastoreName:
                  p.properties?.managementCluster["vsanDatastoreName"],
              },
              internet: p.properties?.["internet"],
              identitySources:
                p.properties?.["identitySources"] === undefined
                  ? p.properties?.["identitySources"]
                  : p.properties?.["identitySources"].map((p: any) => {
                      return {
                        name: p["name"],
                        alias: p["alias"],
                        domain: p["domain"],
                        baseUserDN: p["baseUserDN"],
                        baseGroupDN: p["baseGroupDN"],
                        primaryServer: p["primaryServer"],
                        secondaryServer: p["secondaryServer"],
                        ssl: p["ssl"],
                        username: p["username"],
                        password: p["password"],
                      };
                    }),
              availability: !p.properties?.availability
                ? undefined
                : {
                    strategy: p.properties?.availability?.["strategy"],
                    zone: p.properties?.availability?.["zone"],
                    secondaryZone:
                      p.properties?.availability?.["secondaryZone"],
                  },
              encryption: !p.properties?.encryption
                ? undefined
                : {
                    status: p.properties?.encryption?.["status"],
                    keyVaultProperties: !p.properties?.encryption
                      ?.keyVaultProperties
                      ? undefined
                      : {
                          keyName:
                            p.properties?.encryption?.keyVaultProperties?.[
                              "keyName"
                            ],
                          keyVersion:
                            p.properties?.encryption?.keyVaultProperties?.[
                              "keyVersion"
                            ],
                          autoDetectedKeyVersion:
                            p.properties?.encryption?.keyVaultProperties?.[
                              "autoDetectedKeyVersion"
                            ],
                          keyVaultUrl:
                            p.properties?.encryption?.keyVaultProperties?.[
                              "keyVaultUrl"
                            ],
                          keyState:
                            p.properties?.encryption?.keyVaultProperties?.[
                              "keyState"
                            ],
                          versionType:
                            p.properties?.encryption?.keyVaultProperties?.[
                              "versionType"
                            ],
                        },
                  },
              extendedNetworkBlocks: p.properties?.["extendedNetworkBlocks"],
              provisioningState: p.properties?.["provisioningState"],
              circuit: !p.properties?.circuit
                ? undefined
                : {
                    primarySubnet: p.properties?.circuit?.["primarySubnet"],
                    secondarySubnet: p.properties?.circuit?.["secondarySubnet"],
                    expressRouteID: p.properties?.circuit?.["expressRouteID"],
                    expressRoutePrivatePeeringID:
                      p.properties?.circuit?.["expressRoutePrivatePeeringID"],
                  },
              endpoints: !p.properties?.endpoints
                ? undefined
                : {
                    nsxtManager: p.properties?.endpoints?.["nsxtManager"],
                    vcsa: p.properties?.endpoints?.["vcsa"],
                    hcxCloudManager:
                      p.properties?.endpoints?.["hcxCloudManager"],
                    nsxtManagerIp: p.properties?.endpoints?.["nsxtManagerIp"],
                    vcenterIp: p.properties?.endpoints?.["vcenterIp"],
                    hcxCloudManagerIp:
                      p.properties?.endpoints?.["hcxCloudManagerIp"],
                  },
              networkBlock: p.properties?.["networkBlock"],
              managementNetwork: p.properties?.["managementNetwork"],
              provisioningNetwork: p.properties?.["provisioningNetwork"],
              vmotionNetwork: p.properties?.["vmotionNetwork"],
              vcenterPassword: p.properties?.["vcenterPassword"],
              nsxtPassword: p.properties?.["nsxtPassword"],
              vcenterCertificateThumbprint:
                p.properties?.["vcenterCertificateThumbprint"],
              nsxtCertificateThumbprint:
                p.properties?.["nsxtCertificateThumbprint"],
              externalCloudLinks: p.properties?.["externalCloudLinks"],
              secondaryCircuit: !p.properties?.secondaryCircuit
                ? undefined
                : {
                    primarySubnet:
                      p.properties?.secondaryCircuit?.["primarySubnet"],
                    secondarySubnet:
                      p.properties?.secondaryCircuit?.["secondarySubnet"],
                    expressRouteID:
                      p.properties?.secondaryCircuit?.["expressRouteID"],
                    expressRoutePrivatePeeringID:
                      p.properties?.secondaryCircuit?.[
                        "expressRoutePrivatePeeringID"
                      ],
                  },
              nsxPublicIpQuotaRaised: p.properties?.["nsxPublicIpQuotaRaised"],
              virtualNetworkId: p.properties?.["virtualNetworkId"],
              dnsZoneType: p.properties?.["dnsZoneType"],
            },
        sku: {
          name: p.sku["name"],
          tier: p.sku["tier"],
          size: p.sku["size"],
          family: p.sku["family"],
          capacity: p.sku["capacity"],
        },
        identity: !p.identity
          ? undefined
          : {
              principalId: p.identity?.["principalId"],
              tenantId: p.identity?.["tenantId"],
              type: p.identity?.["type"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List PrivateCloud resources by resource group */
export function privateCloudsList(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: PrivateCloudsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<PrivateCloud> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _privateCloudsListSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _privateCloudsListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _privateCloudsListInSubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: PrivateCloudsListInSubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.AVS/privateClouds",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _privateCloudsListInSubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_PrivateCloudList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        tags: p["tags"],
        location: p["location"],
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"],
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.["lastModifiedByType"],
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        properties: !p.properties
          ? undefined
          : {
              managementCluster: {
                clusterSize: p.properties?.managementCluster["clusterSize"],
                provisioningState:
                  p.properties?.managementCluster["provisioningState"],
                clusterId: p.properties?.managementCluster["clusterId"],
                hosts: p.properties?.managementCluster["hosts"],
                vsanDatastoreName:
                  p.properties?.managementCluster["vsanDatastoreName"],
              },
              internet: p.properties?.["internet"],
              identitySources:
                p.properties?.["identitySources"] === undefined
                  ? p.properties?.["identitySources"]
                  : p.properties?.["identitySources"].map((p: any) => {
                      return {
                        name: p["name"],
                        alias: p["alias"],
                        domain: p["domain"],
                        baseUserDN: p["baseUserDN"],
                        baseGroupDN: p["baseGroupDN"],
                        primaryServer: p["primaryServer"],
                        secondaryServer: p["secondaryServer"],
                        ssl: p["ssl"],
                        username: p["username"],
                        password: p["password"],
                      };
                    }),
              availability: !p.properties?.availability
                ? undefined
                : {
                    strategy: p.properties?.availability?.["strategy"],
                    zone: p.properties?.availability?.["zone"],
                    secondaryZone:
                      p.properties?.availability?.["secondaryZone"],
                  },
              encryption: !p.properties?.encryption
                ? undefined
                : {
                    status: p.properties?.encryption?.["status"],
                    keyVaultProperties: !p.properties?.encryption
                      ?.keyVaultProperties
                      ? undefined
                      : {
                          keyName:
                            p.properties?.encryption?.keyVaultProperties?.[
                              "keyName"
                            ],
                          keyVersion:
                            p.properties?.encryption?.keyVaultProperties?.[
                              "keyVersion"
                            ],
                          autoDetectedKeyVersion:
                            p.properties?.encryption?.keyVaultProperties?.[
                              "autoDetectedKeyVersion"
                            ],
                          keyVaultUrl:
                            p.properties?.encryption?.keyVaultProperties?.[
                              "keyVaultUrl"
                            ],
                          keyState:
                            p.properties?.encryption?.keyVaultProperties?.[
                              "keyState"
                            ],
                          versionType:
                            p.properties?.encryption?.keyVaultProperties?.[
                              "versionType"
                            ],
                        },
                  },
              extendedNetworkBlocks: p.properties?.["extendedNetworkBlocks"],
              provisioningState: p.properties?.["provisioningState"],
              circuit: !p.properties?.circuit
                ? undefined
                : {
                    primarySubnet: p.properties?.circuit?.["primarySubnet"],
                    secondarySubnet: p.properties?.circuit?.["secondarySubnet"],
                    expressRouteID: p.properties?.circuit?.["expressRouteID"],
                    expressRoutePrivatePeeringID:
                      p.properties?.circuit?.["expressRoutePrivatePeeringID"],
                  },
              endpoints: !p.properties?.endpoints
                ? undefined
                : {
                    nsxtManager: p.properties?.endpoints?.["nsxtManager"],
                    vcsa: p.properties?.endpoints?.["vcsa"],
                    hcxCloudManager:
                      p.properties?.endpoints?.["hcxCloudManager"],
                    nsxtManagerIp: p.properties?.endpoints?.["nsxtManagerIp"],
                    vcenterIp: p.properties?.endpoints?.["vcenterIp"],
                    hcxCloudManagerIp:
                      p.properties?.endpoints?.["hcxCloudManagerIp"],
                  },
              networkBlock: p.properties?.["networkBlock"],
              managementNetwork: p.properties?.["managementNetwork"],
              provisioningNetwork: p.properties?.["provisioningNetwork"],
              vmotionNetwork: p.properties?.["vmotionNetwork"],
              vcenterPassword: p.properties?.["vcenterPassword"],
              nsxtPassword: p.properties?.["nsxtPassword"],
              vcenterCertificateThumbprint:
                p.properties?.["vcenterCertificateThumbprint"],
              nsxtCertificateThumbprint:
                p.properties?.["nsxtCertificateThumbprint"],
              externalCloudLinks: p.properties?.["externalCloudLinks"],
              secondaryCircuit: !p.properties?.secondaryCircuit
                ? undefined
                : {
                    primarySubnet:
                      p.properties?.secondaryCircuit?.["primarySubnet"],
                    secondarySubnet:
                      p.properties?.secondaryCircuit?.["secondarySubnet"],
                    expressRouteID:
                      p.properties?.secondaryCircuit?.["expressRouteID"],
                    expressRoutePrivatePeeringID:
                      p.properties?.secondaryCircuit?.[
                        "expressRoutePrivatePeeringID"
                      ],
                  },
              nsxPublicIpQuotaRaised: p.properties?.["nsxPublicIpQuotaRaised"],
              virtualNetworkId: p.properties?.["virtualNetworkId"],
              dnsZoneType: p.properties?.["dnsZoneType"],
            },
        sku: {
          name: p.sku["name"],
          tier: p.sku["tier"],
          size: p.sku["size"],
          family: p.sku["family"],
          capacity: p.sku["capacity"],
        },
        identity: !p.identity
          ? undefined
          : {
              principalId: p.identity?.["principalId"],
              tenantId: p.identity?.["tenantId"],
              type: p.identity?.["type"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List PrivateCloud resources by subscription ID */
export function privateCloudsListInSubscription(
  context: Client,
  subscriptionId: string,
  options: PrivateCloudsListInSubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<PrivateCloud> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _privateCloudsListInSubscriptionSend(context, subscriptionId, options),
    _privateCloudsListInSubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _privateCloudsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _privateCloudsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<PrivateCloud> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    tags: result.body["tags"],
    location: result.body["location"],
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          managementCluster: {
            clusterSize:
              result.body.properties?.managementCluster["clusterSize"],
            provisioningState:
              result.body.properties?.managementCluster["provisioningState"],
            clusterId: result.body.properties?.managementCluster["clusterId"],
            hosts: result.body.properties?.managementCluster["hosts"],
            vsanDatastoreName:
              result.body.properties?.managementCluster["vsanDatastoreName"],
          },
          internet: result.body.properties?.["internet"],
          identitySources:
            result.body.properties?.["identitySources"] === undefined
              ? result.body.properties?.["identitySources"]
              : result.body.properties?.["identitySources"].map((p: any) => {
                  return {
                    name: p["name"],
                    alias: p["alias"],
                    domain: p["domain"],
                    baseUserDN: p["baseUserDN"],
                    baseGroupDN: p["baseGroupDN"],
                    primaryServer: p["primaryServer"],
                    secondaryServer: p["secondaryServer"],
                    ssl: p["ssl"],
                    username: p["username"],
                    password: p["password"],
                  };
                }),
          availability: !result.body.properties?.availability
            ? undefined
            : {
                strategy: result.body.properties?.availability?.["strategy"],
                zone: result.body.properties?.availability?.["zone"],
                secondaryZone:
                  result.body.properties?.availability?.["secondaryZone"],
              },
          encryption: !result.body.properties?.encryption
            ? undefined
            : {
                status: result.body.properties?.encryption?.["status"],
                keyVaultProperties: !result.body.properties?.encryption
                  ?.keyVaultProperties
                  ? undefined
                  : {
                      keyName:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["keyName"],
                      keyVersion:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["keyVersion"],
                      autoDetectedKeyVersion:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["autoDetectedKeyVersion"],
                      keyVaultUrl:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["keyVaultUrl"],
                      keyState:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["keyState"],
                      versionType:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["versionType"],
                    },
              },
          extendedNetworkBlocks:
            result.body.properties?.["extendedNetworkBlocks"],
          provisioningState: result.body.properties?.["provisioningState"],
          circuit: !result.body.properties?.circuit
            ? undefined
            : {
                primarySubnet:
                  result.body.properties?.circuit?.["primarySubnet"],
                secondarySubnet:
                  result.body.properties?.circuit?.["secondarySubnet"],
                expressRouteID:
                  result.body.properties?.circuit?.["expressRouteID"],
                expressRoutePrivatePeeringID:
                  result.body.properties?.circuit?.[
                    "expressRoutePrivatePeeringID"
                  ],
              },
          endpoints: !result.body.properties?.endpoints
            ? undefined
            : {
                nsxtManager: result.body.properties?.endpoints?.["nsxtManager"],
                vcsa: result.body.properties?.endpoints?.["vcsa"],
                hcxCloudManager:
                  result.body.properties?.endpoints?.["hcxCloudManager"],
                nsxtManagerIp:
                  result.body.properties?.endpoints?.["nsxtManagerIp"],
                vcenterIp: result.body.properties?.endpoints?.["vcenterIp"],
                hcxCloudManagerIp:
                  result.body.properties?.endpoints?.["hcxCloudManagerIp"],
              },
          networkBlock: result.body.properties?.["networkBlock"],
          managementNetwork: result.body.properties?.["managementNetwork"],
          provisioningNetwork: result.body.properties?.["provisioningNetwork"],
          vmotionNetwork: result.body.properties?.["vmotionNetwork"],
          vcenterPassword: result.body.properties?.["vcenterPassword"],
          nsxtPassword: result.body.properties?.["nsxtPassword"],
          vcenterCertificateThumbprint:
            result.body.properties?.["vcenterCertificateThumbprint"],
          nsxtCertificateThumbprint:
            result.body.properties?.["nsxtCertificateThumbprint"],
          externalCloudLinks: result.body.properties?.["externalCloudLinks"],
          secondaryCircuit: !result.body.properties?.secondaryCircuit
            ? undefined
            : {
                primarySubnet:
                  result.body.properties?.secondaryCircuit?.["primarySubnet"],
                secondarySubnet:
                  result.body.properties?.secondaryCircuit?.["secondarySubnet"],
                expressRouteID:
                  result.body.properties?.secondaryCircuit?.["expressRouteID"],
                expressRoutePrivatePeeringID:
                  result.body.properties?.secondaryCircuit?.[
                    "expressRoutePrivatePeeringID"
                  ],
              },
          nsxPublicIpQuotaRaised:
            result.body.properties?.["nsxPublicIpQuotaRaised"],
          virtualNetworkId: result.body.properties?.["virtualNetworkId"],
          dnsZoneType: result.body.properties?.["dnsZoneType"],
        },
    sku: {
      name: result.body.sku["name"],
      tier: result.body.sku["tier"],
      size: result.body.sku["size"],
      family: result.body.sku["family"],
      capacity: result.body.sku["capacity"],
    },
    identity: !result.body.identity
      ? undefined
      : {
          principalId: result.body.identity?.["principalId"],
          tenantId: result.body.identity?.["tenantId"],
          type: result.body.identity?.["type"],
        },
  };
}

/** Get a PrivateCloud */
export async function privateCloudsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsGetOptionalParams = { requestOptions: {} },
): Promise<PrivateCloud> {
  const result = await _privateCloudsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    options,
  );
  return _privateCloudsGetDeserialize(result);
}

export function _privateCloudsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  privateCloud: PrivateCloud,
  options: PrivateCloudsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !privateCloud.tags
          ? privateCloud.tags
          : (serializeRecord(privateCloud.tags as any) as any),
        location: privateCloud["location"],
        properties: !privateCloud.properties
          ? privateCloud.properties
          : privateCloudPropertiesSerializer(privateCloud.properties),
        sku: skuSerializer(privateCloud.sku),
        identity: !privateCloud.identity
          ? privateCloud.identity
          : systemAssignedServiceIdentitySerializer(privateCloud.identity),
      },
    });
}

export async function _privateCloudsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<PrivateCloud> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    tags: result.body["tags"],
    location: result.body["location"],
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          managementCluster: {
            clusterSize:
              result.body.properties?.managementCluster["clusterSize"],
            provisioningState:
              result.body.properties?.managementCluster["provisioningState"],
            clusterId: result.body.properties?.managementCluster["clusterId"],
            hosts: result.body.properties?.managementCluster["hosts"],
            vsanDatastoreName:
              result.body.properties?.managementCluster["vsanDatastoreName"],
          },
          internet: result.body.properties?.["internet"],
          identitySources:
            result.body.properties?.["identitySources"] === undefined
              ? result.body.properties?.["identitySources"]
              : result.body.properties?.["identitySources"].map((p: any) => {
                  return {
                    name: p["name"],
                    alias: p["alias"],
                    domain: p["domain"],
                    baseUserDN: p["baseUserDN"],
                    baseGroupDN: p["baseGroupDN"],
                    primaryServer: p["primaryServer"],
                    secondaryServer: p["secondaryServer"],
                    ssl: p["ssl"],
                    username: p["username"],
                    password: p["password"],
                  };
                }),
          availability: !result.body.properties?.availability
            ? undefined
            : {
                strategy: result.body.properties?.availability?.["strategy"],
                zone: result.body.properties?.availability?.["zone"],
                secondaryZone:
                  result.body.properties?.availability?.["secondaryZone"],
              },
          encryption: !result.body.properties?.encryption
            ? undefined
            : {
                status: result.body.properties?.encryption?.["status"],
                keyVaultProperties: !result.body.properties?.encryption
                  ?.keyVaultProperties
                  ? undefined
                  : {
                      keyName:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["keyName"],
                      keyVersion:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["keyVersion"],
                      autoDetectedKeyVersion:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["autoDetectedKeyVersion"],
                      keyVaultUrl:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["keyVaultUrl"],
                      keyState:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["keyState"],
                      versionType:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["versionType"],
                    },
              },
          extendedNetworkBlocks:
            result.body.properties?.["extendedNetworkBlocks"],
          provisioningState: result.body.properties?.["provisioningState"],
          circuit: !result.body.properties?.circuit
            ? undefined
            : {
                primarySubnet:
                  result.body.properties?.circuit?.["primarySubnet"],
                secondarySubnet:
                  result.body.properties?.circuit?.["secondarySubnet"],
                expressRouteID:
                  result.body.properties?.circuit?.["expressRouteID"],
                expressRoutePrivatePeeringID:
                  result.body.properties?.circuit?.[
                    "expressRoutePrivatePeeringID"
                  ],
              },
          endpoints: !result.body.properties?.endpoints
            ? undefined
            : {
                nsxtManager: result.body.properties?.endpoints?.["nsxtManager"],
                vcsa: result.body.properties?.endpoints?.["vcsa"],
                hcxCloudManager:
                  result.body.properties?.endpoints?.["hcxCloudManager"],
                nsxtManagerIp:
                  result.body.properties?.endpoints?.["nsxtManagerIp"],
                vcenterIp: result.body.properties?.endpoints?.["vcenterIp"],
                hcxCloudManagerIp:
                  result.body.properties?.endpoints?.["hcxCloudManagerIp"],
              },
          networkBlock: result.body.properties?.["networkBlock"],
          managementNetwork: result.body.properties?.["managementNetwork"],
          provisioningNetwork: result.body.properties?.["provisioningNetwork"],
          vmotionNetwork: result.body.properties?.["vmotionNetwork"],
          vcenterPassword: result.body.properties?.["vcenterPassword"],
          nsxtPassword: result.body.properties?.["nsxtPassword"],
          vcenterCertificateThumbprint:
            result.body.properties?.["vcenterCertificateThumbprint"],
          nsxtCertificateThumbprint:
            result.body.properties?.["nsxtCertificateThumbprint"],
          externalCloudLinks: result.body.properties?.["externalCloudLinks"],
          secondaryCircuit: !result.body.properties?.secondaryCircuit
            ? undefined
            : {
                primarySubnet:
                  result.body.properties?.secondaryCircuit?.["primarySubnet"],
                secondarySubnet:
                  result.body.properties?.secondaryCircuit?.["secondarySubnet"],
                expressRouteID:
                  result.body.properties?.secondaryCircuit?.["expressRouteID"],
                expressRoutePrivatePeeringID:
                  result.body.properties?.secondaryCircuit?.[
                    "expressRoutePrivatePeeringID"
                  ],
              },
          nsxPublicIpQuotaRaised:
            result.body.properties?.["nsxPublicIpQuotaRaised"],
          virtualNetworkId: result.body.properties?.["virtualNetworkId"],
          dnsZoneType: result.body.properties?.["dnsZoneType"],
        },
    sku: {
      name: result.body.sku["name"],
      tier: result.body.sku["tier"],
      size: result.body.sku["size"],
      family: result.body.sku["family"],
      capacity: result.body.sku["capacity"],
    },
    identity: !result.body.identity
      ? undefined
      : {
          principalId: result.body.identity?.["principalId"],
          tenantId: result.body.identity?.["tenantId"],
          type: result.body.identity?.["type"],
        },
  };
}

/** Create a PrivateCloud */
export function privateCloudsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  privateCloud: PrivateCloud,
  options: PrivateCloudsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<PrivateCloud>, PrivateCloud> {
  return getLongRunningPoller(
    context,
    _privateCloudsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _privateCloudsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          privateCloud,
          options,
        ),
    },
  ) as PollerLike<OperationState<PrivateCloud>, PrivateCloud>;
}

export function _privateCloudsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  privateCloudUpdate: PrivateCloudUpdate,
  options: PrivateCloudsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !privateCloudUpdate.tags
          ? privateCloudUpdate.tags
          : (serializeRecord(privateCloudUpdate.tags as any) as any),
        sku: !privateCloudUpdate.sku
          ? privateCloudUpdate.sku
          : skuSerializer(privateCloudUpdate.sku),
        identity: !privateCloudUpdate.identity
          ? privateCloudUpdate.identity
          : systemAssignedServiceIdentitySerializer(
              privateCloudUpdate.identity,
            ),
        properties: !privateCloudUpdate.properties
          ? privateCloudUpdate.properties
          : privateCloudUpdatePropertiesSerializer(
              privateCloudUpdate.properties,
            ),
      },
    });
}

export async function _privateCloudsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<PrivateCloud> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    tags: result.body["tags"],
    location: result.body["location"],
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          managementCluster: {
            clusterSize:
              result.body.properties?.managementCluster["clusterSize"],
            provisioningState:
              result.body.properties?.managementCluster["provisioningState"],
            clusterId: result.body.properties?.managementCluster["clusterId"],
            hosts: result.body.properties?.managementCluster["hosts"],
            vsanDatastoreName:
              result.body.properties?.managementCluster["vsanDatastoreName"],
          },
          internet: result.body.properties?.["internet"],
          identitySources:
            result.body.properties?.["identitySources"] === undefined
              ? result.body.properties?.["identitySources"]
              : result.body.properties?.["identitySources"].map((p: any) => {
                  return {
                    name: p["name"],
                    alias: p["alias"],
                    domain: p["domain"],
                    baseUserDN: p["baseUserDN"],
                    baseGroupDN: p["baseGroupDN"],
                    primaryServer: p["primaryServer"],
                    secondaryServer: p["secondaryServer"],
                    ssl: p["ssl"],
                    username: p["username"],
                    password: p["password"],
                  };
                }),
          availability: !result.body.properties?.availability
            ? undefined
            : {
                strategy: result.body.properties?.availability?.["strategy"],
                zone: result.body.properties?.availability?.["zone"],
                secondaryZone:
                  result.body.properties?.availability?.["secondaryZone"],
              },
          encryption: !result.body.properties?.encryption
            ? undefined
            : {
                status: result.body.properties?.encryption?.["status"],
                keyVaultProperties: !result.body.properties?.encryption
                  ?.keyVaultProperties
                  ? undefined
                  : {
                      keyName:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["keyName"],
                      keyVersion:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["keyVersion"],
                      autoDetectedKeyVersion:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["autoDetectedKeyVersion"],
                      keyVaultUrl:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["keyVaultUrl"],
                      keyState:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["keyState"],
                      versionType:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["versionType"],
                    },
              },
          extendedNetworkBlocks:
            result.body.properties?.["extendedNetworkBlocks"],
          provisioningState: result.body.properties?.["provisioningState"],
          circuit: !result.body.properties?.circuit
            ? undefined
            : {
                primarySubnet:
                  result.body.properties?.circuit?.["primarySubnet"],
                secondarySubnet:
                  result.body.properties?.circuit?.["secondarySubnet"],
                expressRouteID:
                  result.body.properties?.circuit?.["expressRouteID"],
                expressRoutePrivatePeeringID:
                  result.body.properties?.circuit?.[
                    "expressRoutePrivatePeeringID"
                  ],
              },
          endpoints: !result.body.properties?.endpoints
            ? undefined
            : {
                nsxtManager: result.body.properties?.endpoints?.["nsxtManager"],
                vcsa: result.body.properties?.endpoints?.["vcsa"],
                hcxCloudManager:
                  result.body.properties?.endpoints?.["hcxCloudManager"],
                nsxtManagerIp:
                  result.body.properties?.endpoints?.["nsxtManagerIp"],
                vcenterIp: result.body.properties?.endpoints?.["vcenterIp"],
                hcxCloudManagerIp:
                  result.body.properties?.endpoints?.["hcxCloudManagerIp"],
              },
          networkBlock: result.body.properties?.["networkBlock"],
          managementNetwork: result.body.properties?.["managementNetwork"],
          provisioningNetwork: result.body.properties?.["provisioningNetwork"],
          vmotionNetwork: result.body.properties?.["vmotionNetwork"],
          vcenterPassword: result.body.properties?.["vcenterPassword"],
          nsxtPassword: result.body.properties?.["nsxtPassword"],
          vcenterCertificateThumbprint:
            result.body.properties?.["vcenterCertificateThumbprint"],
          nsxtCertificateThumbprint:
            result.body.properties?.["nsxtCertificateThumbprint"],
          externalCloudLinks: result.body.properties?.["externalCloudLinks"],
          secondaryCircuit: !result.body.properties?.secondaryCircuit
            ? undefined
            : {
                primarySubnet:
                  result.body.properties?.secondaryCircuit?.["primarySubnet"],
                secondarySubnet:
                  result.body.properties?.secondaryCircuit?.["secondarySubnet"],
                expressRouteID:
                  result.body.properties?.secondaryCircuit?.["expressRouteID"],
                expressRoutePrivatePeeringID:
                  result.body.properties?.secondaryCircuit?.[
                    "expressRoutePrivatePeeringID"
                  ],
              },
          nsxPublicIpQuotaRaised:
            result.body.properties?.["nsxPublicIpQuotaRaised"],
          virtualNetworkId: result.body.properties?.["virtualNetworkId"],
          dnsZoneType: result.body.properties?.["dnsZoneType"],
        },
    sku: {
      name: result.body.sku["name"],
      tier: result.body.sku["tier"],
      size: result.body.sku["size"],
      family: result.body.sku["family"],
      capacity: result.body.sku["capacity"],
    },
    identity: !result.body.identity
      ? undefined
      : {
          principalId: result.body.identity?.["principalId"],
          tenantId: result.body.identity?.["tenantId"],
          type: result.body.identity?.["type"],
        },
  };
}

/** Update a PrivateCloud */
export async function privateCloudsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  privateCloudUpdate: PrivateCloudUpdate,
  options: PrivateCloudsUpdateOptionalParams = { requestOptions: {} },
): Promise<PrivateCloud> {
  const result = await _privateCloudsUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    privateCloudUpdate,
    options,
  );
  return _privateCloudsUpdateDeserialize(result);
}

export function _privateCloudsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _privateCloudsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a PrivateCloud */
export function privateCloudsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _privateCloudsDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _privateCloudsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _privateCloudsRotateVcenterPasswordSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsRotateVcenterPasswordOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/rotateVcenterPassword",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _privateCloudsRotateVcenterPasswordDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Rotate the vCenter password */
export function privateCloudsRotateVcenterPassword(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsRotateVcenterPasswordOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _privateCloudsRotateVcenterPasswordDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _privateCloudsRotateVcenterPasswordSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _privateCloudsRotateNsxtPasswordSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsRotateNsxtPasswordOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/rotateNsxtPassword",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _privateCloudsRotateNsxtPasswordDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Rotate the NSX-T Manager password */
export function privateCloudsRotateNsxtPassword(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsRotateNsxtPasswordOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _privateCloudsRotateNsxtPasswordDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _privateCloudsRotateNsxtPasswordSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _privateCloudsListAdminCredentialsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsListAdminCredentialsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/listAdminCredentials",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _privateCloudsListAdminCredentialsDeserialize(
  result: PathUncheckedResponse,
): Promise<AdminCredentials> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    nsxtUsername: result.body["nsxtUsername"],
    nsxtPassword: result.body["nsxtPassword"],
    vcenterUsername: result.body["vcenterUsername"],
    vcenterPassword: result.body["vcenterPassword"],
  };
}

/** List the admin credentials for the private cloud */
export async function privateCloudsListAdminCredentials(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsListAdminCredentialsOptionalParams = {
    requestOptions: {},
  },
): Promise<AdminCredentials> {
  const result = await _privateCloudsListAdminCredentialsSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    options,
  );
  return _privateCloudsListAdminCredentialsDeserialize(result);
}
