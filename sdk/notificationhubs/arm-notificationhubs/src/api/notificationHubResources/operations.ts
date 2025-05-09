// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NotificationHubsContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  NotificationHubResource,
  notificationHubResourceSerializer,
  notificationHubResourceDeserializer,
  NotificationHubPatchParameters,
  notificationHubPatchParametersSerializer,
  _NotificationHubListResult,
  _notificationHubListResultDeserializer,
  DebugSendResponse,
  debugSendResponseDeserializer,
  PnsCredentialsResource,
  pnsCredentialsResourceDeserializer,
} from "../../models/models.js";
import {
  NotificationHubResourcesGetPnsCredentialsOptionalParams,
  NotificationHubResourcesDebugSendOptionalParams,
  NotificationHubResourcesListOptionalParams,
  NotificationHubResourcesDeleteOptionalParams,
  NotificationHubResourcesUpdateOptionalParams,
  NotificationHubResourcesCreateOrUpdateOptionalParams,
  NotificationHubResourcesGetOptionalParams,
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

export function _getPnsCredentialsSend(
  context: Client,
  resourceGroupName: string,
  namespaceName: string,
  notificationHubName: string,
  options: NotificationHubResourcesGetPnsCredentialsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/notificationHubs/{notificationHubName}/pnsCredentials{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      namespaceName: namespaceName,
      notificationHubName: notificationHubName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _getPnsCredentialsDeserialize(
  result: PathUncheckedResponse,
): Promise<PnsCredentialsResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return pnsCredentialsResourceDeserializer(result.body);
}

/** Lists the PNS Credentials associated with a notification hub. */
export async function getPnsCredentials(
  context: Client,
  resourceGroupName: string,
  namespaceName: string,
  notificationHubName: string,
  options: NotificationHubResourcesGetPnsCredentialsOptionalParams = {
    requestOptions: {},
  },
): Promise<PnsCredentialsResource> {
  const result = await _getPnsCredentialsSend(
    context,
    resourceGroupName,
    namespaceName,
    notificationHubName,
    options,
  );
  return _getPnsCredentialsDeserialize(result);
}

export function _debugSendSend(
  context: Client,
  resourceGroupName: string,
  namespaceName: string,
  notificationHubName: string,
  options: NotificationHubResourcesDebugSendOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/notificationHubs/{notificationHubName}/debugsend{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      namespaceName: namespaceName,
      notificationHubName: notificationHubName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _debugSendDeserialize(
  result: PathUncheckedResponse,
): Promise<DebugSendResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return debugSendResponseDeserializer(result.body);
}

/** Test send a push notification. */
export async function debugSend(
  context: Client,
  resourceGroupName: string,
  namespaceName: string,
  notificationHubName: string,
  options: NotificationHubResourcesDebugSendOptionalParams = {
    requestOptions: {},
  },
): Promise<DebugSendResponse> {
  const result = await _debugSendSend(
    context,
    resourceGroupName,
    namespaceName,
    notificationHubName,
    options,
  );
  return _debugSendDeserialize(result);
}

export function _listSend(
  context: Client,
  resourceGroupName: string,
  namespaceName: string,
  options: NotificationHubResourcesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/notificationHubs{?api%2Dversion,%24skipToken,%24top}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      namespaceName: namespaceName,
      "api%2Dversion": context.apiVersion,
      "%24skipToken": options?.skipToken,
      "%24top": options?.top,
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

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_NotificationHubListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _notificationHubListResultDeserializer(result.body);
}

/** Lists the notification hubs associated with a namespace. */
export function list(
  context: Client,
  resourceGroupName: string,
  namespaceName: string,
  options: NotificationHubResourcesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<NotificationHubResource> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, resourceGroupName, namespaceName, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  namespaceName: string,
  notificationHubName: string,
  options: NotificationHubResourcesDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/notificationHubs/{notificationHubName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      namespaceName: namespaceName,
      notificationHubName: notificationHubName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).delete({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _$deleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Deletes a notification hub associated with a namespace. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  resourceGroupName: string,
  namespaceName: string,
  notificationHubName: string,
  options: NotificationHubResourcesDeleteOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _$deleteSend(
    context,
    resourceGroupName,
    namespaceName,
    notificationHubName,
    options,
  );
  return _$deleteDeserialize(result);
}

export function _updateSend(
  context: Client,
  resourceGroupName: string,
  namespaceName: string,
  notificationHubName: string,
  parameters: NotificationHubPatchParameters,
  options: NotificationHubResourcesUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/notificationHubs/{notificationHubName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      namespaceName: namespaceName,
      notificationHubName: notificationHubName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).patch({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: notificationHubPatchParametersSerializer(parameters),
  });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<NotificationHubResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return notificationHubResourceDeserializer(result.body);
}

/** Patch a NotificationHub in a namespace. */
export async function update(
  context: Client,
  resourceGroupName: string,
  namespaceName: string,
  notificationHubName: string,
  parameters: NotificationHubPatchParameters,
  options: NotificationHubResourcesUpdateOptionalParams = {
    requestOptions: {},
  },
): Promise<NotificationHubResource> {
  const result = await _updateSend(
    context,
    resourceGroupName,
    namespaceName,
    notificationHubName,
    parameters,
    options,
  );
  return _updateDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  namespaceName: string,
  notificationHubName: string,
  parameters: NotificationHubResource,
  options: NotificationHubResourcesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/notificationHubs/{notificationHubName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      namespaceName: namespaceName,
      notificationHubName: notificationHubName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).put({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: notificationHubResourceSerializer(parameters),
  });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<NotificationHubResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return notificationHubResourceDeserializer(result.body);
}

/** Creates/Update a NotificationHub in a namespace. */
export async function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  namespaceName: string,
  notificationHubName: string,
  parameters: NotificationHubResource,
  options: NotificationHubResourcesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): Promise<NotificationHubResource> {
  const result = await _createOrUpdateSend(
    context,
    resourceGroupName,
    namespaceName,
    notificationHubName,
    parameters,
    options,
  );
  return _createOrUpdateDeserialize(result);
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  namespaceName: string,
  notificationHubName: string,
  options: NotificationHubResourcesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/notificationHubs/{notificationHubName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      namespaceName: namespaceName,
      notificationHubName: notificationHubName,
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

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<NotificationHubResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return notificationHubResourceDeserializer(result.body);
}

/** Gets the notification hub. */
export async function get(
  context: Client,
  resourceGroupName: string,
  namespaceName: string,
  notificationHubName: string,
  options: NotificationHubResourcesGetOptionalParams = { requestOptions: {} },
): Promise<NotificationHubResource> {
  const result = await _getSend(
    context,
    resourceGroupName,
    namespaceName,
    notificationHubName,
    options,
  );
  return _getDeserialize(result);
}
