// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  informaticaServerlessRuntimePropertiesSerializer,
  serverlessRuntimePropertiesCustomUpdateSerializer,
  InformaticaServerlessRuntimeResource,
  InformaticaServerlessRuntimeResourceUpdate,
  CheckDependenciesResponse,
  _InformaticaServerlessRuntimeResourceListResult,
} from "../../models/models.js";
import { DataManagementContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  ServerlessRuntimesGetOptionalParams,
  ServerlessRuntimesCreateOrUpdateOptionalParams,
  ServerlessRuntimesDeleteOptionalParams,
  ServerlessRuntimesListByInformaticaOrganizationResourceOptionalParams,
  ServerlessRuntimesUpdateOptionalParams,
  ServerlessRuntimesCheckDependenciesOptionalParams,
  ServerlessRuntimesStartFailedServerlessRuntimeOptionalParams,
  ServerlessRuntimesServerlessResourceByIdOptionalParams,
} from "../../models/options.js";

export function _serverlessRuntimesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  serverlessRuntimeName: string,
  options: ServerlessRuntimesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations/{organizationName}/serverlessRuntimes/{serverlessRuntimeName}",
      subscriptionId,
      resourceGroupName,
      organizationName,
      serverlessRuntimeName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _serverlessRuntimesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<InformaticaServerlessRuntimeResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
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
          provisioningState: result.body.properties?.["provisioningState"],
          description: result.body.properties?.["description"],
          platform: result.body.properties?.["platform"],
          applicationType: result.body.properties?.["applicationType"],
          computeUnits: result.body.properties?.["computeUnits"],
          executionTimeout: result.body.properties?.["executionTimeout"],
          serverlessAccountLocation:
            result.body.properties?.["serverlessAccountLocation"],
          serverlessRuntimeNetworkProfile: !result.body.properties
            ?.serverlessRuntimeNetworkProfile
            ? undefined
            : {
                networkInterfaceConfiguration: {
                  vnetId:
                    result.body.properties?.serverlessRuntimeNetworkProfile
                      ?.networkInterfaceConfiguration["vnetId"],
                  subnetId:
                    result.body.properties?.serverlessRuntimeNetworkProfile
                      ?.networkInterfaceConfiguration["subnetId"],
                  vnetResourceGuid:
                    result.body.properties?.serverlessRuntimeNetworkProfile
                      ?.networkInterfaceConfiguration["vnetResourceGuid"],
                },
              },
          advancedCustomProperties:
            result.body.properties?.["advancedCustomProperties"] === undefined
              ? result.body.properties?.["advancedCustomProperties"]
              : result.body.properties?.["advancedCustomProperties"].map(
                  (p: any) => {
                    return { key: p["key"], value: p["value"] };
                  },
                ),
          supplementaryFileLocation:
            result.body.properties?.["supplementaryFileLocation"],
          serverlessRuntimeConfig: !result.body.properties
            ?.serverlessRuntimeConfig
            ? undefined
            : {
                cdiConfigProps:
                  result.body.properties?.serverlessRuntimeConfig?.[
                    "cdiConfigProps"
                  ] === undefined
                    ? result.body.properties?.serverlessRuntimeConfig?.[
                        "cdiConfigProps"
                      ]
                    : result.body.properties?.serverlessRuntimeConfig?.[
                        "cdiConfigProps"
                      ].map((p: any) => {
                        return {
                          engineName: p["engineName"],
                          engineVersion: p["engineVersion"],
                          applicationConfigs: p["applicationConfigs"].map(
                            (p: any) => {
                              return {
                                type: p["type"],
                                name: p["name"],
                                value: p["value"],
                                platform: p["platform"],
                                customized: p["customized"],
                                defaultValue: p["defaultValue"],
                              };
                            },
                          ),
                        };
                      }),
                cdieConfigProps:
                  result.body.properties?.serverlessRuntimeConfig?.[
                    "cdieConfigProps"
                  ] === undefined
                    ? result.body.properties?.serverlessRuntimeConfig?.[
                        "cdieConfigProps"
                      ]
                    : result.body.properties?.serverlessRuntimeConfig?.[
                        "cdieConfigProps"
                      ].map((p: any) => {
                        return {
                          engineName: p["engineName"],
                          engineVersion: p["engineVersion"],
                          applicationConfigs: p["applicationConfigs"].map(
                            (p: any) => {
                              return {
                                type: p["type"],
                                name: p["name"],
                                value: p["value"],
                                platform: p["platform"],
                                customized: p["customized"],
                                defaultValue: p["defaultValue"],
                              };
                            },
                          ),
                        };
                      }),
              },
          serverlessRuntimeTags:
            result.body.properties?.["serverlessRuntimeTags"] === undefined
              ? result.body.properties?.["serverlessRuntimeTags"]
              : result.body.properties?.["serverlessRuntimeTags"].map(
                  (p: any) => {
                    return { name: p["name"], value: p["value"] };
                  },
                ),
          serverlessRuntimeUserContextProperties: !result.body.properties
            ?.serverlessRuntimeUserContextProperties
            ? undefined
            : {
                userContextToken:
                  result.body.properties
                    ?.serverlessRuntimeUserContextProperties?.[
                    "userContextToken"
                  ],
              },
        },
  };
}

/** Get a InformaticaServerlessRuntimeResource */
export async function serverlessRuntimesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  serverlessRuntimeName: string,
  options: ServerlessRuntimesGetOptionalParams = { requestOptions: {} },
): Promise<InformaticaServerlessRuntimeResource> {
  const result = await _serverlessRuntimesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    organizationName,
    serverlessRuntimeName,
    options,
  );
  return _serverlessRuntimesGetDeserialize(result);
}

export function _serverlessRuntimesCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  serverlessRuntimeName: string,
  resource: InformaticaServerlessRuntimeResource,
  options: ServerlessRuntimesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations/{organizationName}/serverlessRuntimes/{serverlessRuntimeName}",
      subscriptionId,
      resourceGroupName,
      organizationName,
      serverlessRuntimeName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? resource.properties
          : informaticaServerlessRuntimePropertiesSerializer(
              resource.properties,
            ),
      },
    });
}

export async function _serverlessRuntimesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<InformaticaServerlessRuntimeResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
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
          provisioningState: result.body.properties?.["provisioningState"],
          description: result.body.properties?.["description"],
          platform: result.body.properties?.["platform"],
          applicationType: result.body.properties?.["applicationType"],
          computeUnits: result.body.properties?.["computeUnits"],
          executionTimeout: result.body.properties?.["executionTimeout"],
          serverlessAccountLocation:
            result.body.properties?.["serverlessAccountLocation"],
          serverlessRuntimeNetworkProfile: !result.body.properties
            ?.serverlessRuntimeNetworkProfile
            ? undefined
            : {
                networkInterfaceConfiguration: {
                  vnetId:
                    result.body.properties?.serverlessRuntimeNetworkProfile
                      ?.networkInterfaceConfiguration["vnetId"],
                  subnetId:
                    result.body.properties?.serverlessRuntimeNetworkProfile
                      ?.networkInterfaceConfiguration["subnetId"],
                  vnetResourceGuid:
                    result.body.properties?.serverlessRuntimeNetworkProfile
                      ?.networkInterfaceConfiguration["vnetResourceGuid"],
                },
              },
          advancedCustomProperties:
            result.body.properties?.["advancedCustomProperties"] === undefined
              ? result.body.properties?.["advancedCustomProperties"]
              : result.body.properties?.["advancedCustomProperties"].map(
                  (p: any) => {
                    return { key: p["key"], value: p["value"] };
                  },
                ),
          supplementaryFileLocation:
            result.body.properties?.["supplementaryFileLocation"],
          serverlessRuntimeConfig: !result.body.properties
            ?.serverlessRuntimeConfig
            ? undefined
            : {
                cdiConfigProps:
                  result.body.properties?.serverlessRuntimeConfig?.[
                    "cdiConfigProps"
                  ] === undefined
                    ? result.body.properties?.serverlessRuntimeConfig?.[
                        "cdiConfigProps"
                      ]
                    : result.body.properties?.serverlessRuntimeConfig?.[
                        "cdiConfigProps"
                      ].map((p: any) => {
                        return {
                          engineName: p["engineName"],
                          engineVersion: p["engineVersion"],
                          applicationConfigs: p["applicationConfigs"].map(
                            (p: any) => {
                              return {
                                type: p["type"],
                                name: p["name"],
                                value: p["value"],
                                platform: p["platform"],
                                customized: p["customized"],
                                defaultValue: p["defaultValue"],
                              };
                            },
                          ),
                        };
                      }),
                cdieConfigProps:
                  result.body.properties?.serverlessRuntimeConfig?.[
                    "cdieConfigProps"
                  ] === undefined
                    ? result.body.properties?.serverlessRuntimeConfig?.[
                        "cdieConfigProps"
                      ]
                    : result.body.properties?.serverlessRuntimeConfig?.[
                        "cdieConfigProps"
                      ].map((p: any) => {
                        return {
                          engineName: p["engineName"],
                          engineVersion: p["engineVersion"],
                          applicationConfigs: p["applicationConfigs"].map(
                            (p: any) => {
                              return {
                                type: p["type"],
                                name: p["name"],
                                value: p["value"],
                                platform: p["platform"],
                                customized: p["customized"],
                                defaultValue: p["defaultValue"],
                              };
                            },
                          ),
                        };
                      }),
              },
          serverlessRuntimeTags:
            result.body.properties?.["serverlessRuntimeTags"] === undefined
              ? result.body.properties?.["serverlessRuntimeTags"]
              : result.body.properties?.["serverlessRuntimeTags"].map(
                  (p: any) => {
                    return { name: p["name"], value: p["value"] };
                  },
                ),
          serverlessRuntimeUserContextProperties: !result.body.properties
            ?.serverlessRuntimeUserContextProperties
            ? undefined
            : {
                userContextToken:
                  result.body.properties
                    ?.serverlessRuntimeUserContextProperties?.[
                    "userContextToken"
                  ],
              },
        },
  };
}

/** Create a InformaticaServerlessRuntimeResource */
export function serverlessRuntimesCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  serverlessRuntimeName: string,
  resource: InformaticaServerlessRuntimeResource,
  options: ServerlessRuntimesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<InformaticaServerlessRuntimeResource>,
  InformaticaServerlessRuntimeResource
> {
  return getLongRunningPoller(
    context,
    _serverlessRuntimesCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _serverlessRuntimesCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          organizationName,
          serverlessRuntimeName,
          resource,
          options,
        ),
    },
  ) as PollerLike<
    OperationState<InformaticaServerlessRuntimeResource>,
    InformaticaServerlessRuntimeResource
  >;
}

export function _serverlessRuntimesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  serverlessRuntimeName: string,
  options: ServerlessRuntimesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations/{organizationName}/serverlessRuntimes/{serverlessRuntimeName}",
      subscriptionId,
      resourceGroupName,
      organizationName,
      serverlessRuntimeName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _serverlessRuntimesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a InformaticaServerlessRuntimeResource */
export function serverlessRuntimesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  serverlessRuntimeName: string,
  options: ServerlessRuntimesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _serverlessRuntimesDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _serverlessRuntimesDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          organizationName,
          serverlessRuntimeName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _serverlessRuntimesListByInformaticaOrganizationResourceSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  options: ServerlessRuntimesListByInformaticaOrganizationResourceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations/{organizationName}/serverlessRuntimes",
      subscriptionId,
      resourceGroupName,
      organizationName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _serverlessRuntimesListByInformaticaOrganizationResourceDeserialize(
  result: PathUncheckedResponse,
): Promise<_InformaticaServerlessRuntimeResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
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
              provisioningState: p.properties?.["provisioningState"],
              description: p.properties?.["description"],
              platform: p.properties?.["platform"],
              applicationType: p.properties?.["applicationType"],
              computeUnits: p.properties?.["computeUnits"],
              executionTimeout: p.properties?.["executionTimeout"],
              serverlessAccountLocation:
                p.properties?.["serverlessAccountLocation"],
              serverlessRuntimeNetworkProfile: !p.properties
                ?.serverlessRuntimeNetworkProfile
                ? undefined
                : {
                    networkInterfaceConfiguration: {
                      vnetId:
                        p.properties?.serverlessRuntimeNetworkProfile
                          ?.networkInterfaceConfiguration["vnetId"],
                      subnetId:
                        p.properties?.serverlessRuntimeNetworkProfile
                          ?.networkInterfaceConfiguration["subnetId"],
                      vnetResourceGuid:
                        p.properties?.serverlessRuntimeNetworkProfile
                          ?.networkInterfaceConfiguration["vnetResourceGuid"],
                    },
                  },
              advancedCustomProperties:
                p.properties?.["advancedCustomProperties"] === undefined
                  ? p.properties?.["advancedCustomProperties"]
                  : p.properties?.["advancedCustomProperties"].map((p: any) => {
                      return { key: p["key"], value: p["value"] };
                    }),
              supplementaryFileLocation:
                p.properties?.["supplementaryFileLocation"],
              serverlessRuntimeConfig: !p.properties?.serverlessRuntimeConfig
                ? undefined
                : {
                    cdiConfigProps:
                      p.properties?.serverlessRuntimeConfig?.[
                        "cdiConfigProps"
                      ] === undefined
                        ? p.properties?.serverlessRuntimeConfig?.[
                            "cdiConfigProps"
                          ]
                        : p.properties?.serverlessRuntimeConfig?.[
                            "cdiConfigProps"
                          ].map((p: any) => {
                            return {
                              engineName: p["engineName"],
                              engineVersion: p["engineVersion"],
                              applicationConfigs: p["applicationConfigs"].map(
                                (p: any) => {
                                  return {
                                    type: p["type"],
                                    name: p["name"],
                                    value: p["value"],
                                    platform: p["platform"],
                                    customized: p["customized"],
                                    defaultValue: p["defaultValue"],
                                  };
                                },
                              ),
                            };
                          }),
                    cdieConfigProps:
                      p.properties?.serverlessRuntimeConfig?.[
                        "cdieConfigProps"
                      ] === undefined
                        ? p.properties?.serverlessRuntimeConfig?.[
                            "cdieConfigProps"
                          ]
                        : p.properties?.serverlessRuntimeConfig?.[
                            "cdieConfigProps"
                          ].map((p: any) => {
                            return {
                              engineName: p["engineName"],
                              engineVersion: p["engineVersion"],
                              applicationConfigs: p["applicationConfigs"].map(
                                (p: any) => {
                                  return {
                                    type: p["type"],
                                    name: p["name"],
                                    value: p["value"],
                                    platform: p["platform"],
                                    customized: p["customized"],
                                    defaultValue: p["defaultValue"],
                                  };
                                },
                              ),
                            };
                          }),
                  },
              serverlessRuntimeTags:
                p.properties?.["serverlessRuntimeTags"] === undefined
                  ? p.properties?.["serverlessRuntimeTags"]
                  : p.properties?.["serverlessRuntimeTags"].map((p: any) => {
                      return { name: p["name"], value: p["value"] };
                    }),
              serverlessRuntimeUserContextProperties: !p.properties
                ?.serverlessRuntimeUserContextProperties
                ? undefined
                : {
                    userContextToken:
                      p.properties?.serverlessRuntimeUserContextProperties?.[
                        "userContextToken"
                      ],
                  },
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List InformaticaServerlessRuntimeResource resources by InformaticaOrganizationResource */
export function serverlessRuntimesListByInformaticaOrganizationResource(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  options: ServerlessRuntimesListByInformaticaOrganizationResourceOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<InformaticaServerlessRuntimeResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _serverlessRuntimesListByInformaticaOrganizationResourceSend(
        context,
        subscriptionId,
        resourceGroupName,
        organizationName,
        options,
      ),
    _serverlessRuntimesListByInformaticaOrganizationResourceDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _serverlessRuntimesUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  serverlessRuntimeName: string,
  properties: InformaticaServerlessRuntimeResourceUpdate,
  options: ServerlessRuntimesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations/{organizationName}/serverlessRuntimes/{serverlessRuntimeName}",
      subscriptionId,
      resourceGroupName,
      organizationName,
      serverlessRuntimeName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !properties.properties
          ? properties.properties
          : serverlessRuntimePropertiesCustomUpdateSerializer(
              properties.properties,
            ),
      },
    });
}

export async function _serverlessRuntimesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<InformaticaServerlessRuntimeResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
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
          provisioningState: result.body.properties?.["provisioningState"],
          description: result.body.properties?.["description"],
          platform: result.body.properties?.["platform"],
          applicationType: result.body.properties?.["applicationType"],
          computeUnits: result.body.properties?.["computeUnits"],
          executionTimeout: result.body.properties?.["executionTimeout"],
          serverlessAccountLocation:
            result.body.properties?.["serverlessAccountLocation"],
          serverlessRuntimeNetworkProfile: !result.body.properties
            ?.serverlessRuntimeNetworkProfile
            ? undefined
            : {
                networkInterfaceConfiguration: {
                  vnetId:
                    result.body.properties?.serverlessRuntimeNetworkProfile
                      ?.networkInterfaceConfiguration["vnetId"],
                  subnetId:
                    result.body.properties?.serverlessRuntimeNetworkProfile
                      ?.networkInterfaceConfiguration["subnetId"],
                  vnetResourceGuid:
                    result.body.properties?.serverlessRuntimeNetworkProfile
                      ?.networkInterfaceConfiguration["vnetResourceGuid"],
                },
              },
          advancedCustomProperties:
            result.body.properties?.["advancedCustomProperties"] === undefined
              ? result.body.properties?.["advancedCustomProperties"]
              : result.body.properties?.["advancedCustomProperties"].map(
                  (p: any) => {
                    return { key: p["key"], value: p["value"] };
                  },
                ),
          supplementaryFileLocation:
            result.body.properties?.["supplementaryFileLocation"],
          serverlessRuntimeConfig: !result.body.properties
            ?.serverlessRuntimeConfig
            ? undefined
            : {
                cdiConfigProps:
                  result.body.properties?.serverlessRuntimeConfig?.[
                    "cdiConfigProps"
                  ] === undefined
                    ? result.body.properties?.serverlessRuntimeConfig?.[
                        "cdiConfigProps"
                      ]
                    : result.body.properties?.serverlessRuntimeConfig?.[
                        "cdiConfigProps"
                      ].map((p: any) => {
                        return {
                          engineName: p["engineName"],
                          engineVersion: p["engineVersion"],
                          applicationConfigs: p["applicationConfigs"].map(
                            (p: any) => {
                              return {
                                type: p["type"],
                                name: p["name"],
                                value: p["value"],
                                platform: p["platform"],
                                customized: p["customized"],
                                defaultValue: p["defaultValue"],
                              };
                            },
                          ),
                        };
                      }),
                cdieConfigProps:
                  result.body.properties?.serverlessRuntimeConfig?.[
                    "cdieConfigProps"
                  ] === undefined
                    ? result.body.properties?.serverlessRuntimeConfig?.[
                        "cdieConfigProps"
                      ]
                    : result.body.properties?.serverlessRuntimeConfig?.[
                        "cdieConfigProps"
                      ].map((p: any) => {
                        return {
                          engineName: p["engineName"],
                          engineVersion: p["engineVersion"],
                          applicationConfigs: p["applicationConfigs"].map(
                            (p: any) => {
                              return {
                                type: p["type"],
                                name: p["name"],
                                value: p["value"],
                                platform: p["platform"],
                                customized: p["customized"],
                                defaultValue: p["defaultValue"],
                              };
                            },
                          ),
                        };
                      }),
              },
          serverlessRuntimeTags:
            result.body.properties?.["serverlessRuntimeTags"] === undefined
              ? result.body.properties?.["serverlessRuntimeTags"]
              : result.body.properties?.["serverlessRuntimeTags"].map(
                  (p: any) => {
                    return { name: p["name"], value: p["value"] };
                  },
                ),
          serverlessRuntimeUserContextProperties: !result.body.properties
            ?.serverlessRuntimeUserContextProperties
            ? undefined
            : {
                userContextToken:
                  result.body.properties
                    ?.serverlessRuntimeUserContextProperties?.[
                    "userContextToken"
                  ],
              },
        },
  };
}

/** Update a InformaticaServerlessRuntimeResource */
export async function serverlessRuntimesUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  serverlessRuntimeName: string,
  properties: InformaticaServerlessRuntimeResourceUpdate,
  options: ServerlessRuntimesUpdateOptionalParams = { requestOptions: {} },
): Promise<InformaticaServerlessRuntimeResource> {
  const result = await _serverlessRuntimesUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    organizationName,
    serverlessRuntimeName,
    properties,
    options,
  );
  return _serverlessRuntimesUpdateDeserialize(result);
}

export function _serverlessRuntimesCheckDependenciesSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  serverlessRuntimeName: string,
  options: ServerlessRuntimesCheckDependenciesOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations/{organizationName}/serverlessRuntimes/{serverlessRuntimeName}/checkDependencies",
      subscriptionId,
      resourceGroupName,
      organizationName,
      serverlessRuntimeName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _serverlessRuntimesCheckDependenciesDeserialize(
  result: PathUncheckedResponse,
): Promise<CheckDependenciesResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    count: result.body["count"],
    id: result.body["id"],
    references: result.body["references"].map((p: any) => {
      return {
        id: p["id"],
        appContextId: p["appContextId"],
        path: p["path"],
        documentType: p["documentType"],
        description: p["description"],
        lastUpdatedTime: p["lastUpdatedTime"],
      };
    }),
  };
}

/** Checks all dependencies for a serverless runtime resource */
export async function serverlessRuntimesCheckDependencies(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  serverlessRuntimeName: string,
  options: ServerlessRuntimesCheckDependenciesOptionalParams = {
    requestOptions: {},
  },
): Promise<CheckDependenciesResponse> {
  const result = await _serverlessRuntimesCheckDependenciesSend(
    context,
    subscriptionId,
    resourceGroupName,
    organizationName,
    serverlessRuntimeName,
    options,
  );
  return _serverlessRuntimesCheckDependenciesDeserialize(result);
}

export function _serverlessRuntimesStartFailedServerlessRuntimeSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  serverlessRuntimeName: string,
  options: ServerlessRuntimesStartFailedServerlessRuntimeOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations/{organizationName}/serverlessRuntimes/{serverlessRuntimeName}/startFailedServerlessRuntime",
      subscriptionId,
      resourceGroupName,
      organizationName,
      serverlessRuntimeName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _serverlessRuntimesStartFailedServerlessRuntimeDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Starts a failed runtime resource */
export async function serverlessRuntimesStartFailedServerlessRuntime(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  serverlessRuntimeName: string,
  options: ServerlessRuntimesStartFailedServerlessRuntimeOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _serverlessRuntimesStartFailedServerlessRuntimeSend(
    context,
    subscriptionId,
    resourceGroupName,
    organizationName,
    serverlessRuntimeName,
    options,
  );
  return _serverlessRuntimesStartFailedServerlessRuntimeDeserialize(result);
}

export function _serverlessRuntimesServerlessResourceByIdSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  serverlessRuntimeName: string,
  options: ServerlessRuntimesServerlessResourceByIdOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations/{organizationName}/serverlessRuntimes/{serverlessRuntimeName}/serverlessResourceById",
      subscriptionId,
      resourceGroupName,
      organizationName,
      serverlessRuntimeName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _serverlessRuntimesServerlessResourceByIdDeserialize(
  result: PathUncheckedResponse,
): Promise<InformaticaServerlessRuntimeResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
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
          provisioningState: result.body.properties?.["provisioningState"],
          description: result.body.properties?.["description"],
          platform: result.body.properties?.["platform"],
          applicationType: result.body.properties?.["applicationType"],
          computeUnits: result.body.properties?.["computeUnits"],
          executionTimeout: result.body.properties?.["executionTimeout"],
          serverlessAccountLocation:
            result.body.properties?.["serverlessAccountLocation"],
          serverlessRuntimeNetworkProfile: !result.body.properties
            ?.serverlessRuntimeNetworkProfile
            ? undefined
            : {
                networkInterfaceConfiguration: {
                  vnetId:
                    result.body.properties?.serverlessRuntimeNetworkProfile
                      ?.networkInterfaceConfiguration["vnetId"],
                  subnetId:
                    result.body.properties?.serverlessRuntimeNetworkProfile
                      ?.networkInterfaceConfiguration["subnetId"],
                  vnetResourceGuid:
                    result.body.properties?.serverlessRuntimeNetworkProfile
                      ?.networkInterfaceConfiguration["vnetResourceGuid"],
                },
              },
          advancedCustomProperties:
            result.body.properties?.["advancedCustomProperties"] === undefined
              ? result.body.properties?.["advancedCustomProperties"]
              : result.body.properties?.["advancedCustomProperties"].map(
                  (p: any) => {
                    return { key: p["key"], value: p["value"] };
                  },
                ),
          supplementaryFileLocation:
            result.body.properties?.["supplementaryFileLocation"],
          serverlessRuntimeConfig: !result.body.properties
            ?.serverlessRuntimeConfig
            ? undefined
            : {
                cdiConfigProps:
                  result.body.properties?.serverlessRuntimeConfig?.[
                    "cdiConfigProps"
                  ] === undefined
                    ? result.body.properties?.serverlessRuntimeConfig?.[
                        "cdiConfigProps"
                      ]
                    : result.body.properties?.serverlessRuntimeConfig?.[
                        "cdiConfigProps"
                      ].map((p: any) => {
                        return {
                          engineName: p["engineName"],
                          engineVersion: p["engineVersion"],
                          applicationConfigs: p["applicationConfigs"].map(
                            (p: any) => {
                              return {
                                type: p["type"],
                                name: p["name"],
                                value: p["value"],
                                platform: p["platform"],
                                customized: p["customized"],
                                defaultValue: p["defaultValue"],
                              };
                            },
                          ),
                        };
                      }),
                cdieConfigProps:
                  result.body.properties?.serverlessRuntimeConfig?.[
                    "cdieConfigProps"
                  ] === undefined
                    ? result.body.properties?.serverlessRuntimeConfig?.[
                        "cdieConfigProps"
                      ]
                    : result.body.properties?.serverlessRuntimeConfig?.[
                        "cdieConfigProps"
                      ].map((p: any) => {
                        return {
                          engineName: p["engineName"],
                          engineVersion: p["engineVersion"],
                          applicationConfigs: p["applicationConfigs"].map(
                            (p: any) => {
                              return {
                                type: p["type"],
                                name: p["name"],
                                value: p["value"],
                                platform: p["platform"],
                                customized: p["customized"],
                                defaultValue: p["defaultValue"],
                              };
                            },
                          ),
                        };
                      }),
              },
          serverlessRuntimeTags:
            result.body.properties?.["serverlessRuntimeTags"] === undefined
              ? result.body.properties?.["serverlessRuntimeTags"]
              : result.body.properties?.["serverlessRuntimeTags"].map(
                  (p: any) => {
                    return { name: p["name"], value: p["value"] };
                  },
                ),
          serverlessRuntimeUserContextProperties: !result.body.properties
            ?.serverlessRuntimeUserContextProperties
            ? undefined
            : {
                userContextToken:
                  result.body.properties
                    ?.serverlessRuntimeUserContextProperties?.[
                    "userContextToken"
                  ],
              },
        },
  };
}

/** Returns a serverless runtime resource by ID */
export async function serverlessRuntimesServerlessResourceById(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  serverlessRuntimeName: string,
  options: ServerlessRuntimesServerlessResourceByIdOptionalParams = {
    requestOptions: {},
  },
): Promise<InformaticaServerlessRuntimeResource> {
  const result = await _serverlessRuntimesServerlessResourceByIdSend(
    context,
    subscriptionId,
    resourceGroupName,
    organizationName,
    serverlessRuntimeName,
    options,
  );
  return _serverlessRuntimesServerlessResourceByIdDeserialize(result);
}
