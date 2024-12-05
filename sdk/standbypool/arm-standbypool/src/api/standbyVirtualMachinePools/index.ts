// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  StandbyPoolManagementContext as Client,
  StandbyVirtualMachinePoolsCreateOrUpdateOptionalParams,
  StandbyVirtualMachinePoolsDeleteOptionalParams,
  StandbyVirtualMachinePoolsGetOptionalParams,
  StandbyVirtualMachinePoolsListByResourceGroupOptionalParams,
  StandbyVirtualMachinePoolsListBySubscriptionOptionalParams,
  StandbyVirtualMachinePoolsUpdateOptionalParams,
} from "../index.js";
import {
  StandbyVirtualMachinePoolResource,
  standbyVirtualMachinePoolResourceSerializer,
  standbyVirtualMachinePoolResourceDeserializer,
  StandbyVirtualMachinePoolResourceUpdate,
  standbyVirtualMachinePoolResourceUpdateSerializer,
  _StandbyVirtualMachinePoolResourceListResult,
  _standbyVirtualMachinePoolResourceListResultDeserializer,
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

export function _standbyVirtualMachinePoolsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  options: StandbyVirtualMachinePoolsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}",
      subscriptionId,
      resourceGroupName,
      standbyVirtualMachinePoolName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _standbyVirtualMachinePoolsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<StandbyVirtualMachinePoolResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return standbyVirtualMachinePoolResourceDeserializer(result.body);
}

/** Get a StandbyVirtualMachinePoolResource */
export async function standbyVirtualMachinePoolsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  options: StandbyVirtualMachinePoolsGetOptionalParams = { requestOptions: {} },
): Promise<StandbyVirtualMachinePoolResource> {
  const result = await _standbyVirtualMachinePoolsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    standbyVirtualMachinePoolName,
    options,
  );
  return _standbyVirtualMachinePoolsGetDeserialize(result);
}

export function _standbyVirtualMachinePoolsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  resource: StandbyVirtualMachinePoolResource,
  options: StandbyVirtualMachinePoolsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}",
      subscriptionId,
      resourceGroupName,
      standbyVirtualMachinePoolName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: standbyVirtualMachinePoolResourceSerializer(resource),
    });
}

export async function _standbyVirtualMachinePoolsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<StandbyVirtualMachinePoolResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return standbyVirtualMachinePoolResourceDeserializer(result.body);
}

/** Create a StandbyVirtualMachinePoolResource */
export function standbyVirtualMachinePoolsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  resource: StandbyVirtualMachinePoolResource,
  options: StandbyVirtualMachinePoolsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<StandbyVirtualMachinePoolResource>,
  StandbyVirtualMachinePoolResource
> {
  return getLongRunningPoller(
    context,
    _standbyVirtualMachinePoolsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _standbyVirtualMachinePoolsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          standbyVirtualMachinePoolName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<
    OperationState<StandbyVirtualMachinePoolResource>,
    StandbyVirtualMachinePoolResource
  >;
}

export function _standbyVirtualMachinePoolsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  options: StandbyVirtualMachinePoolsDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}",
      subscriptionId,
      resourceGroupName,
      standbyVirtualMachinePoolName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _standbyVirtualMachinePoolsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a StandbyVirtualMachinePoolResource */
export function standbyVirtualMachinePoolsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  options: StandbyVirtualMachinePoolsDeleteOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _standbyVirtualMachinePoolsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _standbyVirtualMachinePoolsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          standbyVirtualMachinePoolName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _standbyVirtualMachinePoolsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  properties: StandbyVirtualMachinePoolResourceUpdate,
  options: StandbyVirtualMachinePoolsUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}",
      subscriptionId,
      resourceGroupName,
      standbyVirtualMachinePoolName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: standbyVirtualMachinePoolResourceUpdateSerializer(properties),
    });
}

export async function _standbyVirtualMachinePoolsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<StandbyVirtualMachinePoolResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return standbyVirtualMachinePoolResourceDeserializer(result.body);
}

/** Update a StandbyVirtualMachinePoolResource */
export async function standbyVirtualMachinePoolsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  properties: StandbyVirtualMachinePoolResourceUpdate,
  options: StandbyVirtualMachinePoolsUpdateOptionalParams = {
    requestOptions: {},
  },
): Promise<StandbyVirtualMachinePoolResource> {
  const result = await _standbyVirtualMachinePoolsUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    standbyVirtualMachinePoolName,
    properties,
    options,
  );
  return _standbyVirtualMachinePoolsUpdateDeserialize(result);
}

export function _standbyVirtualMachinePoolsListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: StandbyVirtualMachinePoolsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _standbyVirtualMachinePoolsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_StandbyVirtualMachinePoolResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _standbyVirtualMachinePoolResourceListResultDeserializer(result.body);
}

/** List StandbyVirtualMachinePoolResource resources by resource group */
export function standbyVirtualMachinePoolsListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: StandbyVirtualMachinePoolsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<StandbyVirtualMachinePoolResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _standbyVirtualMachinePoolsListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _standbyVirtualMachinePoolsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _standbyVirtualMachinePoolsListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: StandbyVirtualMachinePoolsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _standbyVirtualMachinePoolsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_StandbyVirtualMachinePoolResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _standbyVirtualMachinePoolResourceListResultDeserializer(result.body);
}

/** List StandbyVirtualMachinePoolResource resources by subscription ID */
export function standbyVirtualMachinePoolsListBySubscription(
  context: Client,
  subscriptionId: string,
  options: StandbyVirtualMachinePoolsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<StandbyVirtualMachinePoolResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _standbyVirtualMachinePoolsListBySubscriptionSend(
        context,
        subscriptionId,
        options,
      ),
    _standbyVirtualMachinePoolsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
