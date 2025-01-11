// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ChaosManagementContext as Client,
  TargetsCreateOrUpdateOptionalParams,
  TargetsDeleteOptionalParams,
  TargetsGetOptionalParams,
  TargetsListOptionalParams,
} from "../index.js";
import {
  Target,
  targetSerializer,
  targetDeserializer,
  _TargetListResult,
  _targetListResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _targetsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  targetName: string,
  options: TargetsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{parentProviderNamespace}/{parentResourceType}/{parentResourceName}/providers/Microsoft.Chaos/targets/{targetName}",
      subscriptionId,
      resourceGroupName,
      parentProviderNamespace,
      parentResourceType,
      parentResourceName,
      targetName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _targetsGetDeserialize(result: PathUncheckedResponse): Promise<Target> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return targetDeserializer(result.body);
}

/** Get a Target resource that extends a tracked regional resource. */
export async function targetsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  targetName: string,
  options: TargetsGetOptionalParams = { requestOptions: {} },
): Promise<Target> {
  const result = await _targetsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    parentProviderNamespace,
    parentResourceType,
    parentResourceName,
    targetName,
    options,
  );
  return _targetsGetDeserialize(result);
}

export function _targetsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  targetName: string,
  resource: Target,
  options: TargetsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{parentProviderNamespace}/{parentResourceType}/{parentResourceName}/providers/Microsoft.Chaos/targets/{targetName}",
      subscriptionId,
      resourceGroupName,
      parentProviderNamespace,
      parentResourceType,
      parentResourceName,
      targetName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: targetSerializer(resource),
    });
}

export async function _targetsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Target> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return targetDeserializer(result.body);
}

/** Create or update a Target resource that extends a tracked regional resource. */
export async function targetsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  targetName: string,
  resource: Target,
  options: TargetsCreateOrUpdateOptionalParams = { requestOptions: {} },
): Promise<Target> {
  const result = await _targetsCreateOrUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    parentProviderNamespace,
    parentResourceType,
    parentResourceName,
    targetName,
    resource,
    options,
  );
  return _targetsCreateOrUpdateDeserialize(result);
}

export function _targetsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  targetName: string,
  options: TargetsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{parentProviderNamespace}/{parentResourceType}/{parentResourceName}/providers/Microsoft.Chaos/targets/{targetName}",
      subscriptionId,
      resourceGroupName,
      parentProviderNamespace,
      parentResourceType,
      parentResourceName,
      targetName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _targetsDeleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a Target resource that extends a tracked regional resource. */
export async function targetsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  targetName: string,
  options: TargetsDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _targetsDeleteSend(
    context,
    subscriptionId,
    resourceGroupName,
    parentProviderNamespace,
    parentResourceType,
    parentResourceName,
    targetName,
    options,
  );
  return _targetsDeleteDeserialize(result);
}

export function _targetsListSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  options: TargetsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{parentProviderNamespace}/{parentResourceType}/{parentResourceName}/providers/Microsoft.Chaos/targets",
      subscriptionId,
      resourceGroupName,
      parentProviderNamespace,
      parentResourceType,
      parentResourceName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { continuationToken: options?.continuationToken },
    });
}

export async function _targetsListDeserialize(
  result: PathUncheckedResponse,
): Promise<_TargetListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _targetListResultDeserializer(result.body);
}

/** Get a list of Target resources that extend a tracked regional resource. */
export function targetsList(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  options: TargetsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Target> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _targetsListSend(
        context,
        subscriptionId,
        resourceGroupName,
        parentProviderNamespace,
        parentResourceType,
        parentResourceName,
        options,
      ),
    _targetsListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
