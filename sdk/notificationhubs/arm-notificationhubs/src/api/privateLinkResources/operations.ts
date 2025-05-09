// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NotificationHubsContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  PrivateLinkResource,
  privateLinkResourceDeserializer,
  _PrivateLinkResourceListResult,
  _privateLinkResourceListResultDeserializer,
} from "../../models/models.js";
import {
  PrivateLinkResourcesListGroupIdsOptionalParams,
  PrivateLinkResourcesGetGroupIdOptionalParams,
} from "./options.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _listGroupIdsSend(
  context: Client,
  resourceGroupName: string,
  namespaceName: string,
  options: PrivateLinkResourcesListGroupIdsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/privateLinkResources{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      namespaceName: namespaceName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _listGroupIdsDeserialize(
  result: PathUncheckedResponse,
): Promise<_PrivateLinkResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _privateLinkResourceListResultDeserializer(result.body);
}

/**
 * Even though this namespace requires subscription id, resource group and namespace name, it returns a constant payload (for a given namespacE) every time it's called.
 * That's why we don't send it to the sibling RP, but process it directly in the scale unit that received the request.
 */
export function listGroupIds(
  context: Client,
  resourceGroupName: string,
  namespaceName: string,
  options: PrivateLinkResourcesListGroupIdsOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<PrivateLinkResource> {
  return buildPagedAsyncIterator(
    context,
    () => _listGroupIdsSend(context, resourceGroupName, namespaceName, options),
    _listGroupIdsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getGroupIdSend(
  context: Client,
  resourceGroupName: string,
  namespaceName: string,
  subResourceName: string,
  options: PrivateLinkResourcesGetGroupIdOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/privateLinkResources/{subResourceName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      namespaceName: namespaceName,
      subResourceName: subResourceName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _getGroupIdDeserialize(
  result: PathUncheckedResponse,
): Promise<PrivateLinkResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return privateLinkResourceDeserializer(result.body);
}

/**
 * Even though this namespace requires subscription id, resource group and namespace name, it returns a constant payload (for a given namespacE) every time it's called.
 * That's why we don't send it to the sibling RP, but process it directly in the scale unit that received the request.
 */
export async function getGroupId(
  context: Client,
  resourceGroupName: string,
  namespaceName: string,
  subResourceName: string,
  options: PrivateLinkResourcesGetGroupIdOptionalParams = {
    requestOptions: {},
  },
): Promise<PrivateLinkResource> {
  const result = await _getGroupIdSend(
    context,
    resourceGroupName,
    namespaceName,
    subResourceName,
    options,
  );
  return _getGroupIdDeserialize(result);
}
