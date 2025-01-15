// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  HybridConnectivityManagementAPIContext as Client,
  PublicCloudConnectorsCreateOrUpdateOptionalParams,
  PublicCloudConnectorsDeleteOptionalParams,
  PublicCloudConnectorsGetOptionalParams,
  PublicCloudConnectorsListByResourceGroupOptionalParams,
  PublicCloudConnectorsListBySubscriptionOptionalParams,
  PublicCloudConnectorsTestPermissionsOptionalParams,
  PublicCloudConnectorsUpdateOptionalParams,
} from "../index.js";
import {
  OperationStatusResult,
  operationStatusResultDeserializer,
  PublicCloudConnector,
  publicCloudConnectorSerializer,
  publicCloudConnectorDeserializer,
  _PublicCloudConnectorListResult,
  _publicCloudConnectorListResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

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

  return publicCloudConnectorDeserializer(result.body);
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
      body: publicCloudConnectorSerializer(resource),
    });
}

export async function _publicCloudConnectorsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<PublicCloudConnector> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return publicCloudConnectorDeserializer(result.body);
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
      resourceLocationConfig: "azure-async-operation",
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
      body: publicCloudConnectorSerializer(properties),
    });
}

export async function _publicCloudConnectorsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<PublicCloudConnector> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return publicCloudConnectorDeserializer(result.body);
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

  return _publicCloudConnectorListResultDeserializer(result.body);
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

  return _publicCloudConnectorListResultDeserializer(result.body);
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
    () => _publicCloudConnectorsListBySubscriptionSend(context, subscriptionId, options),
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

  return operationStatusResultDeserializer(result.body);
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
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<OperationStatusResult>, OperationStatusResult>;
}
