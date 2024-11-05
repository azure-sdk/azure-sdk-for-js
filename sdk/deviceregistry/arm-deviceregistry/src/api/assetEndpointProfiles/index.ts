// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  assetEndpointProfilePropertiesSerializer,
  extendedLocationSerializer,
  assetEndpointProfileUpdatePropertiesSerializer,
  AssetEndpointProfile,
  AssetEndpointProfileUpdate,
  _AssetEndpointProfileListResult,
} from "../../models/models.js";
import { DeviceRegistryContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  AssetEndpointProfilesGetOptionalParams,
  AssetEndpointProfilesCreateOrReplaceOptionalParams,
  AssetEndpointProfilesUpdateOptionalParams,
  AssetEndpointProfilesDeleteOptionalParams,
  AssetEndpointProfilesListByResourceGroupOptionalParams,
  AssetEndpointProfilesListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _assetEndpointProfilesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetEndpointProfileName: string,
  options: AssetEndpointProfilesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assetEndpointProfiles/{assetEndpointProfileName}",
      subscriptionId,
      resourceGroupName,
      assetEndpointProfileName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _assetEndpointProfilesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<AssetEndpointProfile> {
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
          uuid: result.body.properties?.["uuid"],
          targetAddress: result.body.properties?.["targetAddress"],
          endpointProfileType: result.body.properties?.["endpointProfileType"],
          authentication: !result.body.properties?.authentication
            ? undefined
            : {
                method: result.body.properties?.authentication?.["method"],
                usernamePasswordCredentials: !result.body.properties
                  ?.authentication?.usernamePasswordCredentials
                  ? undefined
                  : {
                      usernameSecretName:
                        result.body.properties?.authentication
                          ?.usernamePasswordCredentials?.["usernameSecretName"],
                      passwordSecretName:
                        result.body.properties?.authentication
                          ?.usernamePasswordCredentials?.["passwordSecretName"],
                    },
                x509Credentials: !result.body.properties?.authentication
                  ?.x509Credentials
                  ? undefined
                  : {
                      certificateSecretName:
                        result.body.properties?.authentication
                          ?.x509Credentials?.["certificateSecretName"],
                    },
              },
          additionalConfiguration:
            result.body.properties?.["additionalConfiguration"],
          discoveredAssetEndpointProfileRef:
            result.body.properties?.["discoveredAssetEndpointProfileRef"],
          status: !result.body.properties?.status
            ? undefined
            : {
                errors:
                  result.body.properties?.status?.["errors"] === undefined
                    ? result.body.properties?.status?.["errors"]
                    : result.body.properties?.status?.["errors"].map(
                        (p: any) => {
                          return { code: p["code"], message: p["message"] };
                        },
                      ),
              },
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Get a AssetEndpointProfile */
export async function assetEndpointProfilesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetEndpointProfileName: string,
  options: AssetEndpointProfilesGetOptionalParams = { requestOptions: {} },
): Promise<AssetEndpointProfile> {
  const result = await _assetEndpointProfilesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    assetEndpointProfileName,
    options,
  );
  return _assetEndpointProfilesGetDeserialize(result);
}

export function _assetEndpointProfilesCreateOrReplaceSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetEndpointProfileName: string,
  resource: AssetEndpointProfile,
  options: AssetEndpointProfilesCreateOrReplaceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assetEndpointProfiles/{assetEndpointProfileName}",
      subscriptionId,
      resourceGroupName,
      assetEndpointProfileName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !resource.tags
          ? resource.tags
          : (serializeRecord(resource.tags as any) as any),
        location: resource["location"],
        properties: !resource.properties
          ? resource.properties
          : assetEndpointProfilePropertiesSerializer(resource.properties),
        extendedLocation: extendedLocationSerializer(resource.extendedLocation),
      },
    });
}

export async function _assetEndpointProfilesCreateOrReplaceDeserialize(
  result: PathUncheckedResponse,
): Promise<AssetEndpointProfile> {
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
          uuid: result.body.properties?.["uuid"],
          targetAddress: result.body.properties?.["targetAddress"],
          endpointProfileType: result.body.properties?.["endpointProfileType"],
          authentication: !result.body.properties?.authentication
            ? undefined
            : {
                method: result.body.properties?.authentication?.["method"],
                usernamePasswordCredentials: !result.body.properties
                  ?.authentication?.usernamePasswordCredentials
                  ? undefined
                  : {
                      usernameSecretName:
                        result.body.properties?.authentication
                          ?.usernamePasswordCredentials?.["usernameSecretName"],
                      passwordSecretName:
                        result.body.properties?.authentication
                          ?.usernamePasswordCredentials?.["passwordSecretName"],
                    },
                x509Credentials: !result.body.properties?.authentication
                  ?.x509Credentials
                  ? undefined
                  : {
                      certificateSecretName:
                        result.body.properties?.authentication
                          ?.x509Credentials?.["certificateSecretName"],
                    },
              },
          additionalConfiguration:
            result.body.properties?.["additionalConfiguration"],
          discoveredAssetEndpointProfileRef:
            result.body.properties?.["discoveredAssetEndpointProfileRef"],
          status: !result.body.properties?.status
            ? undefined
            : {
                errors:
                  result.body.properties?.status?.["errors"] === undefined
                    ? result.body.properties?.status?.["errors"]
                    : result.body.properties?.status?.["errors"].map(
                        (p: any) => {
                          return { code: p["code"], message: p["message"] };
                        },
                      ),
              },
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Create a AssetEndpointProfile */
export function assetEndpointProfilesCreateOrReplace(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetEndpointProfileName: string,
  resource: AssetEndpointProfile,
  options: AssetEndpointProfilesCreateOrReplaceOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<AssetEndpointProfile>, AssetEndpointProfile> {
  return getLongRunningPoller(
    context,
    _assetEndpointProfilesCreateOrReplaceDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _assetEndpointProfilesCreateOrReplaceSend(
          context,
          subscriptionId,
          resourceGroupName,
          assetEndpointProfileName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<AssetEndpointProfile>, AssetEndpointProfile>;
}

export function _assetEndpointProfilesUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetEndpointProfileName: string,
  properties: AssetEndpointProfileUpdate,
  options: AssetEndpointProfilesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assetEndpointProfiles/{assetEndpointProfileName}",
      subscriptionId,
      resourceGroupName,
      assetEndpointProfileName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !properties.tags
          ? properties.tags
          : (serializeRecord(properties.tags as any) as any),
        properties: !properties.properties
          ? properties.properties
          : assetEndpointProfileUpdatePropertiesSerializer(
              properties.properties,
            ),
      },
    });
}

export async function _assetEndpointProfilesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<AssetEndpointProfile> {
  const expectedStatuses = ["200", "202"];
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
          uuid: result.body.properties?.["uuid"],
          targetAddress: result.body.properties?.["targetAddress"],
          endpointProfileType: result.body.properties?.["endpointProfileType"],
          authentication: !result.body.properties?.authentication
            ? undefined
            : {
                method: result.body.properties?.authentication?.["method"],
                usernamePasswordCredentials: !result.body.properties
                  ?.authentication?.usernamePasswordCredentials
                  ? undefined
                  : {
                      usernameSecretName:
                        result.body.properties?.authentication
                          ?.usernamePasswordCredentials?.["usernameSecretName"],
                      passwordSecretName:
                        result.body.properties?.authentication
                          ?.usernamePasswordCredentials?.["passwordSecretName"],
                    },
                x509Credentials: !result.body.properties?.authentication
                  ?.x509Credentials
                  ? undefined
                  : {
                      certificateSecretName:
                        result.body.properties?.authentication
                          ?.x509Credentials?.["certificateSecretName"],
                    },
              },
          additionalConfiguration:
            result.body.properties?.["additionalConfiguration"],
          discoveredAssetEndpointProfileRef:
            result.body.properties?.["discoveredAssetEndpointProfileRef"],
          status: !result.body.properties?.status
            ? undefined
            : {
                errors:
                  result.body.properties?.status?.["errors"] === undefined
                    ? result.body.properties?.status?.["errors"]
                    : result.body.properties?.status?.["errors"].map(
                        (p: any) => {
                          return { code: p["code"], message: p["message"] };
                        },
                      ),
              },
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Update a AssetEndpointProfile */
export function assetEndpointProfilesUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetEndpointProfileName: string,
  properties: AssetEndpointProfileUpdate,
  options: AssetEndpointProfilesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<AssetEndpointProfile>, AssetEndpointProfile> {
  return getLongRunningPoller(
    context,
    _assetEndpointProfilesUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _assetEndpointProfilesUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          assetEndpointProfileName,
          properties,
          options,
        ),
    },
  ) as PollerLike<OperationState<AssetEndpointProfile>, AssetEndpointProfile>;
}

export function _assetEndpointProfilesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetEndpointProfileName: string,
  options: AssetEndpointProfilesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assetEndpointProfiles/{assetEndpointProfileName}",
      subscriptionId,
      resourceGroupName,
      assetEndpointProfileName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _assetEndpointProfilesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a AssetEndpointProfile */
export function assetEndpointProfilesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetEndpointProfileName: string,
  options: AssetEndpointProfilesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _assetEndpointProfilesDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _assetEndpointProfilesDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          assetEndpointProfileName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _assetEndpointProfilesListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: AssetEndpointProfilesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assetEndpointProfiles",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _assetEndpointProfilesListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_AssetEndpointProfileListResult> {
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
              uuid: p.properties?.["uuid"],
              targetAddress: p.properties?.["targetAddress"],
              endpointProfileType: p.properties?.["endpointProfileType"],
              authentication: !p.properties?.authentication
                ? undefined
                : {
                    method: p.properties?.authentication?.["method"],
                    usernamePasswordCredentials: !p.properties?.authentication
                      ?.usernamePasswordCredentials
                      ? undefined
                      : {
                          usernameSecretName:
                            p.properties?.authentication
                              ?.usernamePasswordCredentials?.[
                              "usernameSecretName"
                            ],
                          passwordSecretName:
                            p.properties?.authentication
                              ?.usernamePasswordCredentials?.[
                              "passwordSecretName"
                            ],
                        },
                    x509Credentials: !p.properties?.authentication
                      ?.x509Credentials
                      ? undefined
                      : {
                          certificateSecretName:
                            p.properties?.authentication?.x509Credentials?.[
                              "certificateSecretName"
                            ],
                        },
                  },
              additionalConfiguration:
                p.properties?.["additionalConfiguration"],
              discoveredAssetEndpointProfileRef:
                p.properties?.["discoveredAssetEndpointProfileRef"],
              status: !p.properties?.status
                ? undefined
                : {
                    errors:
                      p.properties?.status?.["errors"] === undefined
                        ? p.properties?.status?.["errors"]
                        : p.properties?.status?.["errors"].map((p: any) => {
                            return { code: p["code"], message: p["message"] };
                          }),
                  },
              provisioningState: p.properties?.["provisioningState"],
            },
        extendedLocation: {
          type: p.extendedLocation["type"],
          name: p.extendedLocation["name"],
        },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List AssetEndpointProfile resources by resource group */
export function assetEndpointProfilesListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: AssetEndpointProfilesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AssetEndpointProfile> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _assetEndpointProfilesListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _assetEndpointProfilesListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _assetEndpointProfilesListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: AssetEndpointProfilesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.DeviceRegistry/assetEndpointProfiles",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _assetEndpointProfilesListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_AssetEndpointProfileListResult> {
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
              uuid: p.properties?.["uuid"],
              targetAddress: p.properties?.["targetAddress"],
              endpointProfileType: p.properties?.["endpointProfileType"],
              authentication: !p.properties?.authentication
                ? undefined
                : {
                    method: p.properties?.authentication?.["method"],
                    usernamePasswordCredentials: !p.properties?.authentication
                      ?.usernamePasswordCredentials
                      ? undefined
                      : {
                          usernameSecretName:
                            p.properties?.authentication
                              ?.usernamePasswordCredentials?.[
                              "usernameSecretName"
                            ],
                          passwordSecretName:
                            p.properties?.authentication
                              ?.usernamePasswordCredentials?.[
                              "passwordSecretName"
                            ],
                        },
                    x509Credentials: !p.properties?.authentication
                      ?.x509Credentials
                      ? undefined
                      : {
                          certificateSecretName:
                            p.properties?.authentication?.x509Credentials?.[
                              "certificateSecretName"
                            ],
                        },
                  },
              additionalConfiguration:
                p.properties?.["additionalConfiguration"],
              discoveredAssetEndpointProfileRef:
                p.properties?.["discoveredAssetEndpointProfileRef"],
              status: !p.properties?.status
                ? undefined
                : {
                    errors:
                      p.properties?.status?.["errors"] === undefined
                        ? p.properties?.status?.["errors"]
                        : p.properties?.status?.["errors"].map((p: any) => {
                            return { code: p["code"], message: p["message"] };
                          }),
                  },
              provisioningState: p.properties?.["provisioningState"],
            },
        extendedLocation: {
          type: p.extendedLocation["type"],
          name: p.extendedLocation["name"],
        },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List AssetEndpointProfile resources by subscription ID */
export function assetEndpointProfilesListBySubscription(
  context: Client,
  subscriptionId: string,
  options: AssetEndpointProfilesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AssetEndpointProfile> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _assetEndpointProfilesListBySubscriptionSend(
        context,
        subscriptionId,
        options,
      ),
    _assetEndpointProfilesListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
