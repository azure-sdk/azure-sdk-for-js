// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AvsContext as Client,
  CloudLinksCreateOrUpdateOptionalParams,
  CloudLinksDeleteOptionalParams,
  CloudLinksGetOptionalParams,
  CloudLinksListOptionalParams,
} from "../index.js";
import {
  _CloudLinkList,
  _cloudLinkListDeserializer,
  CloudLink,
  cloudLinkSerializer,
  cloudLinkDeserializer,
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

export function _cloudLinksListSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: CloudLinksListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _cloudLinksListDeserialize(
  result: PathUncheckedResponse,
): Promise<_CloudLinkList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _cloudLinkListDeserializer(result.body);
}

/** List CloudLink resources by PrivateCloud */
export function cloudLinksList(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: CloudLinksListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<CloudLink> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _cloudLinksListSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _cloudLinksListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _cloudLinksGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  cloudLinkName: string,
  options: CloudLinksGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks/{cloudLinkName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      cloudLinkName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _cloudLinksGetDeserialize(
  result: PathUncheckedResponse,
): Promise<CloudLink> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return cloudLinkDeserializer(result.body);
}

/** Get a CloudLink */
export async function cloudLinksGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  cloudLinkName: string,
  options: CloudLinksGetOptionalParams = { requestOptions: {} },
): Promise<CloudLink> {
  const result = await _cloudLinksGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    cloudLinkName,
    options,
  );
  return _cloudLinksGetDeserialize(result);
}

export function _cloudLinksCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  cloudLinkName: string,
  cloudLink: CloudLink,
  options: CloudLinksCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks/{cloudLinkName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      cloudLinkName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: cloudLinkSerializer(cloudLink),
    });
}

export async function _cloudLinksCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<CloudLink> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return cloudLinkDeserializer(result.body);
}

/** Create a CloudLink */
export function cloudLinksCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  cloudLinkName: string,
  cloudLink: CloudLink,
  options: CloudLinksCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<CloudLink>, CloudLink> {
  return getLongRunningPoller(
    context,
    _cloudLinksCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _cloudLinksCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          cloudLinkName,
          cloudLink,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<CloudLink>, CloudLink>;
}

export function _cloudLinksDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  cloudLinkName: string,
  options: CloudLinksDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks/{cloudLinkName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      cloudLinkName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _cloudLinksDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a CloudLink */
export function cloudLinksDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  cloudLinkName: string,
  options: CloudLinksDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _cloudLinksDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _cloudLinksDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          cloudLinkName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}
