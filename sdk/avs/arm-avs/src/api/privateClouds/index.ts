// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AvsContext as Client,
  PrivateCloudsCreateOrUpdateOptionalParams,
  PrivateCloudsDeleteOptionalParams,
  PrivateCloudsGetOptionalParams,
  PrivateCloudsListAdminCredentialsOptionalParams,
  PrivateCloudsListInSubscriptionOptionalParams,
  PrivateCloudsListOptionalParams,
  PrivateCloudsRotateNsxtPasswordOptionalParams,
  PrivateCloudsRotateVcenterPasswordOptionalParams,
  PrivateCloudsUpdateOptionalParams,
} from "../index.js";
import {
  _PrivateCloudList,
  _privateCloudListDeserializer,
  PrivateCloud,
  privateCloudSerializer,
  privateCloudDeserializer,
  PrivateCloudUpdate,
  privateCloudUpdateSerializer,
  AdminCredentials,
  adminCredentialsDeserializer,
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

export function _privateCloudsListSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: PrivateCloudsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _privateCloudsListDeserialize(
  result: PathUncheckedResponse,
): Promise<_PrivateCloudList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _privateCloudListDeserializer(result.body);
}

/** List PrivateCloud resources by resource group */
export function privateCloudsList(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: PrivateCloudsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<PrivateCloud> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _privateCloudsListSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _privateCloudsListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _privateCloudsListInSubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: PrivateCloudsListInSubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.AVS/privateClouds",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _privateCloudsListInSubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_PrivateCloudList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _privateCloudListDeserializer(result.body);
}

/** List PrivateCloud resources by subscription ID */
export function privateCloudsListInSubscription(
  context: Client,
  subscriptionId: string,
  options: PrivateCloudsListInSubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<PrivateCloud> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _privateCloudsListInSubscriptionSend(context, subscriptionId, options),
    _privateCloudsListInSubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _privateCloudsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _privateCloudsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<PrivateCloud> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return privateCloudDeserializer(result.body);
}

/** Get a PrivateCloud */
export async function privateCloudsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsGetOptionalParams = { requestOptions: {} },
): Promise<PrivateCloud> {
  const result = await _privateCloudsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    options,
  );
  return _privateCloudsGetDeserialize(result);
}

export function _privateCloudsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  privateCloud: PrivateCloud,
  options: PrivateCloudsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: privateCloudSerializer(privateCloud),
    });
}

export async function _privateCloudsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<PrivateCloud> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return privateCloudDeserializer(result.body);
}

/** Create a PrivateCloud */
export function privateCloudsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  privateCloud: PrivateCloud,
  options: PrivateCloudsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<PrivateCloud>, PrivateCloud> {
  return getLongRunningPoller(
    context,
    _privateCloudsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _privateCloudsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          privateCloud,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<PrivateCloud>, PrivateCloud>;
}

export function _privateCloudsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  privateCloudUpdate: PrivateCloudUpdate,
  options: PrivateCloudsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: privateCloudUpdateSerializer(privateCloudUpdate),
    });
}

export async function _privateCloudsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Update a PrivateCloud */
export function privateCloudsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  privateCloudUpdate: PrivateCloudUpdate,
  options: PrivateCloudsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _privateCloudsUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _privateCloudsUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          privateCloudUpdate,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _privateCloudsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _privateCloudsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a PrivateCloud */
export function privateCloudsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _privateCloudsDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _privateCloudsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _privateCloudsRotateVcenterPasswordSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsRotateVcenterPasswordOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/rotateVcenterPassword",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _privateCloudsRotateVcenterPasswordDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Rotate the vCenter password */
export function privateCloudsRotateVcenterPassword(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsRotateVcenterPasswordOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _privateCloudsRotateVcenterPasswordDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _privateCloudsRotateVcenterPasswordSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _privateCloudsRotateNsxtPasswordSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsRotateNsxtPasswordOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/rotateNsxtPassword",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _privateCloudsRotateNsxtPasswordDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Rotate the NSX-T Manager password */
export function privateCloudsRotateNsxtPassword(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsRotateNsxtPasswordOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _privateCloudsRotateNsxtPasswordDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _privateCloudsRotateNsxtPasswordSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _privateCloudsListAdminCredentialsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsListAdminCredentialsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/listAdminCredentials",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _privateCloudsListAdminCredentialsDeserialize(
  result: PathUncheckedResponse,
): Promise<AdminCredentials> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return adminCredentialsDeserializer(result.body);
}

/** List the admin credentials for the private cloud */
export async function privateCloudsListAdminCredentials(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsListAdminCredentialsOptionalParams = {
    requestOptions: {},
  },
): Promise<AdminCredentials> {
  const result = await _privateCloudsListAdminCredentialsSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    options,
  );
  return _privateCloudsListAdminCredentialsDeserialize(result);
}
