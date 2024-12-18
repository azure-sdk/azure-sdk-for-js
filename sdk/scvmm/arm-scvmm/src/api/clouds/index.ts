// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ScVmmContext as Client,
  CloudsCreateOrUpdateOptionalParams,
  CloudsDeleteOptionalParams,
  CloudsGetOptionalParams,
  CloudsListByResourceGroupOptionalParams,
  CloudsListBySubscriptionOptionalParams,
  CloudsUpdateOptionalParams,
} from "../index.js";
import {
  Cloud,
  cloudSerializer,
  cloudDeserializer,
  CloudTagsUpdate,
  cloudTagsUpdateSerializer,
  _CloudListResult,
  _cloudListResultDeserializer,
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

export function _cloudsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudResourceName: string,
  options: CloudsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}",
      subscriptionId,
      resourceGroupName,
      cloudResourceName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _cloudsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Cloud> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return cloudDeserializer(result.body);
}

/** Implements Cloud GET method. */
export async function cloudsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudResourceName: string,
  options: CloudsGetOptionalParams = { requestOptions: {} },
): Promise<Cloud> {
  const result = await _cloudsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    cloudResourceName,
    options,
  );
  return _cloudsGetDeserialize(result);
}

export function _cloudsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudResourceName: string,
  resource: Cloud,
  options: CloudsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}",
      subscriptionId,
      resourceGroupName,
      cloudResourceName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: cloudSerializer(resource),
    });
}

export async function _cloudsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Cloud> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return cloudDeserializer(result.body);
}

/** Onboards the ScVmm fabric cloud as an Azure cloud resource. */
export function cloudsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudResourceName: string,
  resource: Cloud,
  options: CloudsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Cloud>, Cloud> {
  return getLongRunningPoller(
    context,
    _cloudsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _cloudsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          cloudResourceName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<Cloud>, Cloud>;
}

export function _cloudsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudResourceName: string,
  properties: CloudTagsUpdate,
  options: CloudsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}",
      subscriptionId,
      resourceGroupName,
      cloudResourceName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: cloudTagsUpdateSerializer(properties),
    });
}

export async function _cloudsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Cloud> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return cloudDeserializer(result.body);
}

/** Updates the Clouds resource. */
export function cloudsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudResourceName: string,
  properties: CloudTagsUpdate,
  options: CloudsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Cloud>, Cloud> {
  return getLongRunningPoller(
    context,
    _cloudsUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _cloudsUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          cloudResourceName,
          properties,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<Cloud>, Cloud>;
}

export function _cloudsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudResourceName: string,
  options: CloudsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}",
      subscriptionId,
      resourceGroupName,
      cloudResourceName,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { force: options?.force },
    });
}

export async function _cloudsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Deregisters the ScVmm fabric cloud from Azure. */
export function cloudsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudResourceName: string,
  options: CloudsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _cloudsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _cloudsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          cloudResourceName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _cloudsListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: CloudsListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _cloudsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_CloudListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _cloudListResultDeserializer(result.body);
}

/** List of Clouds in a resource group. */
export function cloudsListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: CloudsListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Cloud> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _cloudsListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _cloudsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _cloudsListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: CloudsListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/clouds",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _cloudsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_CloudListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _cloudListResultDeserializer(result.body);
}

/** List of Clouds in a subscription. */
export function cloudsListBySubscription(
  context: Client,
  subscriptionId: string,
  options: CloudsListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Cloud> {
  return buildPagedAsyncIterator(
    context,
    () => _cloudsListBySubscriptionSend(context, subscriptionId, options),
    _cloudsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
