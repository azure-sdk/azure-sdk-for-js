// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  expressRouteAuthorizationPropertiesSerializer,
  ExpressRouteAuthorization,
  _ExpressRouteAuthorizationList,
} from "../../models/models.js";
import { AVSContext as Client } from "../index.js";
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
  AuthorizationsListOptionalParams,
  AuthorizationsGetOptionalParams,
  AuthorizationsCreateOrUpdateOptionalParams,
  AuthorizationsDeleteOptionalParams,
} from "../../models/options.js";

export function _authorizationsListSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: AuthorizationsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _authorizationsListDeserialize(
  result: PathUncheckedResponse,
): Promise<_ExpressRouteAuthorizationList> {
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
              expressRouteAuthorizationId:
                p.properties?.["expressRouteAuthorizationId"],
              expressRouteAuthorizationKey:
                p.properties?.["expressRouteAuthorizationKey"],
              expressRouteId: p.properties?.["expressRouteId"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List ExpressRouteAuthorization resources by PrivateCloud */
export function authorizationsList(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: AuthorizationsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ExpressRouteAuthorization> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _authorizationsListSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _authorizationsListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _authorizationsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  authorizationName: string,
  options: AuthorizationsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations/{authorizationName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      authorizationName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _authorizationsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ExpressRouteAuthorization> {
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
          expressRouteAuthorizationId:
            result.body.properties?.["expressRouteAuthorizationId"],
          expressRouteAuthorizationKey:
            result.body.properties?.["expressRouteAuthorizationKey"],
          expressRouteId: result.body.properties?.["expressRouteId"],
        },
  };
}

/** Get a ExpressRouteAuthorization */
export async function authorizationsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  authorizationName: string,
  options: AuthorizationsGetOptionalParams = { requestOptions: {} },
): Promise<ExpressRouteAuthorization> {
  const result = await _authorizationsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    authorizationName,
    options,
  );
  return _authorizationsGetDeserialize(result);
}

export function _authorizationsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  authorizationName: string,
  authorization: ExpressRouteAuthorization,
  options: AuthorizationsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations/{authorizationName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      authorizationName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !authorization.properties
          ? authorization.properties
          : expressRouteAuthorizationPropertiesSerializer(
              authorization.properties,
            ),
      },
    });
}

export async function _authorizationsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ExpressRouteAuthorization> {
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
          expressRouteAuthorizationId:
            result.body.properties?.["expressRouteAuthorizationId"],
          expressRouteAuthorizationKey:
            result.body.properties?.["expressRouteAuthorizationKey"],
          expressRouteId: result.body.properties?.["expressRouteId"],
        },
  };
}

/** Create a ExpressRouteAuthorization */
export function authorizationsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  authorizationName: string,
  authorization: ExpressRouteAuthorization,
  options: AuthorizationsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<
  OperationState<ExpressRouteAuthorization>,
  ExpressRouteAuthorization
> {
  return getLongRunningPoller(
    context,
    _authorizationsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _authorizationsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          authorizationName,
          authorization,
          options,
        ),
    },
  ) as PollerLike<
    OperationState<ExpressRouteAuthorization>,
    ExpressRouteAuthorization
  >;
}

export function _authorizationsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  authorizationName: string,
  options: AuthorizationsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations/{authorizationName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      authorizationName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _authorizationsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a ExpressRouteAuthorization */
export function authorizationsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  authorizationName: string,
  options: AuthorizationsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _authorizationsDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _authorizationsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          authorizationName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}
