// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  publicCloudConnectorPropertiesSerializer,
  OperationStatusResult,
  PublicCloudConnector,
  _PublicCloudConnectorListResult,
} from "../../models/models.js";
import { HybridConnectivityContext as Client } from "../index.js";
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
  PublicCloudConnectorsGetOptionalParams,
  PublicCloudConnectorsCreateOrUpdateOptionalParams,
  PublicCloudConnectorsUpdateOptionalParams,
  PublicCloudConnectorsDeleteOptionalParams,
  PublicCloudConnectorsListByResourceGroupOptionalParams,
  PublicCloudConnectorsListBySubscriptionOptionalParams,
  PublicCloudConnectorsTestPermissionsOptionalParams,
} from "../../models/options.js";

export function _publicCloudConnectorsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  publicCloudConnector: string,
  options: PublicCloudConnectorsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridConnectivity/publicCloudConnectors/{publicCloudConnector}",
      subscriptionId,
      resourceGroupName,
      publicCloudConnector,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _publicCloudConnectorsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<PublicCloudConnector> {
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
          awsCloudProfile: {
            accountId: result.body.properties?.awsCloudProfile["accountId"],
            excludedAccounts:
              result.body.properties?.awsCloudProfile["excludedAccounts"],
            isOrganizationalAccount:
              result.body.properties?.awsCloudProfile[
                "isOrganizationalAccount"
              ],
          },
          hostType: result.body.properties?.["hostType"],
          provisioningState: result.body.properties?.["provisioningState"],
          connectorPrimaryIdentifier:
            result.body.properties?.["connectorPrimaryIdentifier"],
        },
  };
}

/** Get a PublicCloudConnector */
export async function publicCloudConnectorsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  publicCloudConnector: string,
  options: PublicCloudConnectorsGetOptionalParams = { requestOptions: {} },
): Promise<PublicCloudConnector> {
  const result = await _publicCloudConnectorsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    publicCloudConnector,
    options,
  );
  return _publicCloudConnectorsGetDeserialize(result);
}

export function _publicCloudConnectorsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  publicCloudConnector: string,
  resource: PublicCloudConnector,
  options: PublicCloudConnectorsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridConnectivity/publicCloudConnectors/{publicCloudConnector}",
      subscriptionId,
      resourceGroupName,
      publicCloudConnector,
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
          : publicCloudConnectorPropertiesSerializer(resource.properties),
      },
    });
}

export async function _publicCloudConnectorsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<PublicCloudConnector> {
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
          awsCloudProfile: {
            accountId: result.body.properties?.awsCloudProfile["accountId"],
            excludedAccounts:
              result.body.properties?.awsCloudProfile["excludedAccounts"],
            isOrganizationalAccount:
              result.body.properties?.awsCloudProfile[
                "isOrganizationalAccount"
              ],
          },
          hostType: result.body.properties?.["hostType"],
          provisioningState: result.body.properties?.["provisioningState"],
          connectorPrimaryIdentifier:
            result.body.properties?.["connectorPrimaryIdentifier"],
        },
  };
}

/** Create a PublicCloudConnector */
export function publicCloudConnectorsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  publicCloudConnector: string,
  resource: PublicCloudConnector,
  options: PublicCloudConnectorsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<PublicCloudConnector>, PublicCloudConnector> {
  return getLongRunningPoller(
    context,
    _publicCloudConnectorsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _publicCloudConnectorsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          publicCloudConnector,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<PublicCloudConnector>, PublicCloudConnector>;
}

export function _publicCloudConnectorsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  publicCloudConnector: string,
  properties: PublicCloudConnector,
  options: PublicCloudConnectorsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridConnectivity/publicCloudConnectors/{publicCloudConnector}",
      subscriptionId,
      resourceGroupName,
      publicCloudConnector,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !properties.tags
          ? properties.tags
          : (serializeRecord(properties.tags as any) as any),
        location: properties["location"],
        properties: !properties.properties
          ? properties.properties
          : publicCloudConnectorPropertiesSerializer(properties.properties),
      },
    });
}

export async function _publicCloudConnectorsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<PublicCloudConnector> {
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
          awsCloudProfile: {
            accountId: result.body.properties?.awsCloudProfile["accountId"],
            excludedAccounts:
              result.body.properties?.awsCloudProfile["excludedAccounts"],
            isOrganizationalAccount:
              result.body.properties?.awsCloudProfile[
                "isOrganizationalAccount"
              ],
          },
          hostType: result.body.properties?.["hostType"],
          provisioningState: result.body.properties?.["provisioningState"],
          connectorPrimaryIdentifier:
            result.body.properties?.["connectorPrimaryIdentifier"],
        },
  };
}

/** Update a PublicCloudConnector */
export async function publicCloudConnectorsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  publicCloudConnector: string,
  properties: PublicCloudConnector,
  options: PublicCloudConnectorsUpdateOptionalParams = { requestOptions: {} },
): Promise<PublicCloudConnector> {
  const result = await _publicCloudConnectorsUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    publicCloudConnector,
    properties,
    options,
  );
  return _publicCloudConnectorsUpdateDeserialize(result);
}

export function _publicCloudConnectorsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  publicCloudConnector: string,
  options: PublicCloudConnectorsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridConnectivity/publicCloudConnectors/{publicCloudConnector}",
      subscriptionId,
      resourceGroupName,
      publicCloudConnector,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _publicCloudConnectorsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a PublicCloudConnector */
export async function publicCloudConnectorsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  publicCloudConnector: string,
  options: PublicCloudConnectorsDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _publicCloudConnectorsDeleteSend(
    context,
    subscriptionId,
    resourceGroupName,
    publicCloudConnector,
    options,
  );
  return _publicCloudConnectorsDeleteDeserialize(result);
}

export function _publicCloudConnectorsListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: PublicCloudConnectorsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridConnectivity/publicCloudConnectors",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _publicCloudConnectorsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_PublicCloudConnectorListResult> {
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
              awsCloudProfile: {
                accountId: p.properties?.awsCloudProfile["accountId"],
                excludedAccounts:
                  p.properties?.awsCloudProfile["excludedAccounts"],
                isOrganizationalAccount:
                  p.properties?.awsCloudProfile["isOrganizationalAccount"],
              },
              hostType: p.properties?.["hostType"],
              provisioningState: p.properties?.["provisioningState"],
              connectorPrimaryIdentifier:
                p.properties?.["connectorPrimaryIdentifier"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List PublicCloudConnector resources by resource group */
export function publicCloudConnectorsListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: PublicCloudConnectorsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<PublicCloudConnector> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _publicCloudConnectorsListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _publicCloudConnectorsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _publicCloudConnectorsListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: PublicCloudConnectorsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.HybridConnectivity/publicCloudConnectors",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _publicCloudConnectorsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_PublicCloudConnectorListResult> {
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
              awsCloudProfile: {
                accountId: p.properties?.awsCloudProfile["accountId"],
                excludedAccounts:
                  p.properties?.awsCloudProfile["excludedAccounts"],
                isOrganizationalAccount:
                  p.properties?.awsCloudProfile["isOrganizationalAccount"],
              },
              hostType: p.properties?.["hostType"],
              provisioningState: p.properties?.["provisioningState"],
              connectorPrimaryIdentifier:
                p.properties?.["connectorPrimaryIdentifier"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List PublicCloudConnector resources by subscription ID */
export function publicCloudConnectorsListBySubscription(
  context: Client,
  subscriptionId: string,
  options: PublicCloudConnectorsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<PublicCloudConnector> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _publicCloudConnectorsListBySubscriptionSend(
        context,
        subscriptionId,
        options,
      ),
    _publicCloudConnectorsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _publicCloudConnectorsTestPermissionsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  publicCloudConnector: string,
  options: PublicCloudConnectorsTestPermissionsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridConnectivity/publicCloudConnectors/{publicCloudConnector}/testPermissions",
      subscriptionId,
      resourceGroupName,
      publicCloudConnector,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _publicCloudConnectorsTestPermissionsDeserialize(
  result: PathUncheckedResponse,
): Promise<OperationStatusResult> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    status: result.body["status"],
    percentComplete: result.body["percentComplete"],
    startTime:
      result.body["startTime"] !== undefined
        ? new Date(result.body["startTime"])
        : undefined,
    endTime:
      result.body["endTime"] !== undefined
        ? new Date(result.body["endTime"])
        : undefined,
    operations:
      result.body["operations"] === undefined
        ? result.body["operations"]
        : result.body["operations"].map((p: any) => {
            return {
              id: p["id"],
              name: p["name"],
              status: p["status"],
              percentComplete: p["percentComplete"],
              startTime:
                p["startTime"] !== undefined
                  ? new Date(p["startTime"])
                  : undefined,
              endTime:
                p["endTime"] !== undefined ? new Date(p["endTime"]) : undefined,
              operations: !p.operations ? undefined : (p.operations as any),
              error: !p.error
                ? undefined
                : {
                    code: p.error?.["code"],
                    message: p.error?.["message"],
                    target: p.error?.["target"],
                    details:
                      p.error?.["details"] === undefined
                        ? p.error?.["details"]
                        : p.error?.["details"].map((p: any) => {
                            return {
                              code: p["code"],
                              message: p["message"],
                              target: p["target"],
                              details: !p.details ? undefined : p.details,
                              additionalInfo:
                                p["additionalInfo"] === undefined
                                  ? p["additionalInfo"]
                                  : p["additionalInfo"].map((p: any) => {
                                      return {
                                        type: p["type"],
                                        info: p["info"],
                                      };
                                    }),
                            };
                          }),
                    additionalInfo:
                      p.error?.["additionalInfo"] === undefined
                        ? p.error?.["additionalInfo"]
                        : p.error?.["additionalInfo"].map((p: any) => {
                            return { type: p["type"], info: p["info"] };
                          }),
                  },
            };
          }),
    error: !result.body.error
      ? undefined
      : {
          code: result.body.error?.["code"],
          message: result.body.error?.["message"],
          target: result.body.error?.["target"],
          details:
            result.body.error?.["details"] === undefined
              ? result.body.error?.["details"]
              : result.body.error?.["details"].map((p: any) => {
                  return {
                    code: p["code"],
                    message: p["message"],
                    target: p["target"],
                    details: !p.details ? undefined : p.details,
                    additionalInfo:
                      p["additionalInfo"] === undefined
                        ? p["additionalInfo"]
                        : p["additionalInfo"].map((p: any) => {
                            return { type: p["type"], info: p["info"] };
                          }),
                  };
                }),
          additionalInfo:
            result.body.error?.["additionalInfo"] === undefined
              ? result.body.error?.["additionalInfo"]
              : result.body.error?.["additionalInfo"].map((p: any) => {
                  return { type: p["type"], info: p["info"] };
                }),
        },
  };
}

/** A long-running resource action. */
export function publicCloudConnectorsTestPermissions(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  publicCloudConnector: string,
  options: PublicCloudConnectorsTestPermissionsOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<OperationStatusResult>, OperationStatusResult> {
  return getLongRunningPoller(
    context,
    _publicCloudConnectorsTestPermissionsDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _publicCloudConnectorsTestPermissionsSend(
          context,
          subscriptionId,
          resourceGroupName,
          publicCloudConnector,
          options,
        ),
    },
  ) as PollerLike<OperationState<OperationStatusResult>, OperationStatusResult>;
}
