// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AvsContext as Client,
  IscsiPathsCreateOrUpdateOptionalParams,
  IscsiPathsDeleteOptionalParams,
  IscsiPathsGetOptionalParams,
  IscsiPathsListByPrivateCloudOptionalParams,
} from "../index.js";
import {
  _IscsiPathListResult,
  _iscsiPathListResultDeserializer,
  IscsiPath,
  iscsiPathSerializer,
  iscsiPathDeserializer,
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

export function _iscsiPathsListByPrivateCloudSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: IscsiPathsListByPrivateCloudOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/iscsiPaths",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _iscsiPathsListByPrivateCloudDeserialize(
  result: PathUncheckedResponse,
): Promise<_IscsiPathListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _iscsiPathListResultDeserializer(result.body);
}

/** List IscsiPath resources by PrivateCloud */
export function iscsiPathsListByPrivateCloud(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: IscsiPathsListByPrivateCloudOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<IscsiPath> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _iscsiPathsListByPrivateCloudSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _iscsiPathsListByPrivateCloudDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _iscsiPathsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  iscsiPathName: string,
  options: IscsiPathsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/iscsiPaths/{iscsiPathName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      iscsiPathName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _iscsiPathsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<IscsiPath> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return iscsiPathDeserializer(result.body);
}

/** Get a IscsiPath */
export async function iscsiPathsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  iscsiPathName: string,
  options: IscsiPathsGetOptionalParams = { requestOptions: {} },
): Promise<IscsiPath> {
  const result = await _iscsiPathsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    iscsiPathName,
    options,
  );
  return _iscsiPathsGetDeserialize(result);
}

export function _iscsiPathsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  iscsiPathName: string,
  resource: IscsiPath,
  options: IscsiPathsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/iscsiPaths/{iscsiPathName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      iscsiPathName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: iscsiPathSerializer(resource),
    });
}

export async function _iscsiPathsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<IscsiPath> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return iscsiPathDeserializer(result.body);
}

/** Create a IscsiPath */
export function iscsiPathsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  iscsiPathName: string,
  resource: IscsiPath,
  options: IscsiPathsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<IscsiPath>, IscsiPath> {
  return getLongRunningPoller(
    context,
    _iscsiPathsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _iscsiPathsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          iscsiPathName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<IscsiPath>, IscsiPath>;
}

export function _iscsiPathsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  iscsiPathName: string,
  options: IscsiPathsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/iscsiPaths/{iscsiPathName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      iscsiPathName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _iscsiPathsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a IscsiPath */
export function iscsiPathsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  iscsiPathName: string,
  options: IscsiPathsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _iscsiPathsDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _iscsiPathsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          iscsiPathName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}
