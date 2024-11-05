// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  authorityPropertiesSerializer,
  Authority,
  AuthorityUpdate,
  _AuthorityListResult,
} from "../../models/models.js";
import { VerifiedIdContext as Client } from "../index.js";
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
  AuthoritiesGetOptionalParams,
  AuthoritiesCreateOrUpdateOptionalParams,
  AuthoritiesUpdateOptionalParams,
  AuthoritiesDeleteOptionalParams,
  AuthoritiesListByResourceGroupOptionalParams,
  AuthoritiesListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _authoritiesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  authorityName: string,
  options: AuthoritiesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VerifiedId/authorities/{authorityName}",
      subscriptionId,
      resourceGroupName,
      authorityName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _authoritiesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Authority> {
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
      : { provisioningState: result.body.properties?.["provisioningState"] },
  };
}

/** Get a Authority */
export async function authoritiesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  authorityName: string,
  options: AuthoritiesGetOptionalParams = { requestOptions: {} },
): Promise<Authority> {
  const result = await _authoritiesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    authorityName,
    options,
  );
  return _authoritiesGetDeserialize(result);
}

export function _authoritiesCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  authorityName: string,
  resource: Authority,
  options: AuthoritiesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VerifiedId/authorities/{authorityName}",
      subscriptionId,
      resourceGroupName,
      authorityName,
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
          : authorityPropertiesSerializer(resource.properties),
      },
    });
}

export async function _authoritiesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Authority> {
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
      : { provisioningState: result.body.properties?.["provisioningState"] },
  };
}

/** Create a Authority */
export function authoritiesCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  authorityName: string,
  resource: Authority,
  options: AuthoritiesCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Authority>, Authority> {
  return getLongRunningPoller(
    context,
    _authoritiesCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _authoritiesCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          authorityName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<Authority>, Authority>;
}

export function _authoritiesUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  authorityName: string,
  properties: AuthorityUpdate,
  options: AuthoritiesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VerifiedId/authorities/{authorityName}",
      subscriptionId,
      resourceGroupName,
      authorityName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !properties.tags
          ? properties.tags
          : (serializeRecord(properties.tags as any) as any),
      },
    });
}

export async function _authoritiesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Authority> {
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
      : { provisioningState: result.body.properties?.["provisioningState"] },
  };
}

/** Update a Authority */
export async function authoritiesUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  authorityName: string,
  properties: AuthorityUpdate,
  options: AuthoritiesUpdateOptionalParams = { requestOptions: {} },
): Promise<Authority> {
  const result = await _authoritiesUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    authorityName,
    properties,
    options,
  );
  return _authoritiesUpdateDeserialize(result);
}

export function _authoritiesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  authorityName: string,
  options: AuthoritiesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VerifiedId/authorities/{authorityName}",
      subscriptionId,
      resourceGroupName,
      authorityName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _authoritiesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a Authority */
export async function authoritiesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  authorityName: string,
  options: AuthoritiesDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _authoritiesDeleteSend(
    context,
    subscriptionId,
    resourceGroupName,
    authorityName,
    options,
  );
  return _authoritiesDeleteDeserialize(result);
}

export function _authoritiesListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: AuthoritiesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VerifiedId/authorities",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _authoritiesListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_AuthorityListResult> {
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
          : { provisioningState: p.properties?.["provisioningState"] },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List Authority resources by resource group */
export function authoritiesListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: AuthoritiesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<Authority> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _authoritiesListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _authoritiesListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _authoritiesListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: AuthoritiesListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.VerifiedId/authorities",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _authoritiesListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_AuthorityListResult> {
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
          : { provisioningState: p.properties?.["provisioningState"] },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List Authority resources by subscription ID */
export function authoritiesListBySubscription(
  context: Client,
  subscriptionId: string,
  options: AuthoritiesListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Authority> {
  return buildPagedAsyncIterator(
    context,
    () => _authoritiesListBySubscriptionSend(context, subscriptionId, options),
    _authoritiesListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
