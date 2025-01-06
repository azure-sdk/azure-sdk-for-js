// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AddonsCreateOrUpdateOptionalParams,
  AddonsDeleteOptionalParams,
  AddonsGetOptionalParams,
  AddonsListOptionalParams,
  AvsContext as Client,
} from "../index.js";
import {
  _AddonList,
  _addonListDeserializer,
  Addon,
  addonSerializer,
  addonDeserializer,
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

export function _addonsListSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: AddonsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _addonsListDeserialize(
  result: PathUncheckedResponse,
): Promise<_AddonList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _addonListDeserializer(result.body);
}

/** List Addon resources by PrivateCloud */
export function addonsList(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: AddonsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Addon> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _addonsListSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _addonsListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _addonsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  addonName: string,
  options: AddonsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons/{addonName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      addonName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _addonsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Addon> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return addonDeserializer(result.body);
}

/** Get a Addon */
export async function addonsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  addonName: string,
  options: AddonsGetOptionalParams = { requestOptions: {} },
): Promise<Addon> {
  const result = await _addonsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    addonName,
    options,
  );
  return _addonsGetDeserialize(result);
}

export function _addonsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  addonName: string,
  addon: Addon,
  options: AddonsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons/{addonName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      addonName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: addonSerializer(addon),
    });
}

export async function _addonsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Addon> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return addonDeserializer(result.body);
}

/** Create a Addon */
export function addonsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  addonName: string,
  addon: Addon,
  options: AddonsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Addon>, Addon> {
  return getLongRunningPoller(
    context,
    _addonsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _addonsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          addonName,
          addon,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<Addon>, Addon>;
}

export function _addonsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  addonName: string,
  options: AddonsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons/{addonName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      addonName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _addonsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a Addon */
export function addonsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  addonName: string,
  options: AddonsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _addonsDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _addonsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          addonName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}
