// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  KubernetesRuntimeContext as Client,
  StorageClassCreateOrUpdateOptionalParams,
  StorageClassDeleteOptionalParams,
  StorageClassGetOptionalParams,
  StorageClassListOptionalParams,
  StorageClassUpdateOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  StorageClassResource,
  storageClassResourceSerializer,
  storageClassResourceDeserializer,
  StorageClassResourceUpdate,
  storageClassResourceUpdateSerializer,
  _StorageClassResourceListResult,
  _storageClassResourceListResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _storageClassListSend(
  context: Client,
  resourceUri: string,
  options: StorageClassListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+resourceUri}/providers/Microsoft.KubernetesRuntime/storageClasses{?api-version}",
    {
      resourceUri: resourceUri,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _storageClassListDeserialize(
  result: PathUncheckedResponse,
): Promise<_StorageClassResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _storageClassResourceListResultDeserializer(result.body);
}

/** List StorageClassResource resources by parent */
export function storageClassList(
  context: Client,
  resourceUri: string,
  options: StorageClassListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<StorageClassResource> {
  return buildPagedAsyncIterator(
    context,
    () => _storageClassListSend(context, resourceUri, options),
    _storageClassListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _storageClassDeleteSend(
  context: Client,
  resourceUri: string,
  storageClassName: string,
  options: StorageClassDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+resourceUri}/providers/Microsoft.KubernetesRuntime/storageClasses/{storageClassName}{?api-version}",
    {
      resourceUri: resourceUri,
      storageClassName: storageClassName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _storageClassDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a StorageClassResource */
export function storageClassDelete(
  context: Client,
  resourceUri: string,
  storageClassName: string,
  options: StorageClassDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _storageClassDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _storageClassDeleteSend(
          context,
          resourceUri,
          storageClassName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _storageClassUpdateSend(
  context: Client,
  resourceUri: string,
  storageClassName: string,
  properties: StorageClassResourceUpdate,
  options: StorageClassUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+resourceUri}/providers/Microsoft.KubernetesRuntime/storageClasses/{storageClassName}{?api-version}",
    {
      resourceUri: resourceUri,
      storageClassName: storageClassName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: storageClassResourceUpdateSerializer(properties),
    });
}

export async function _storageClassUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<StorageClassResource> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return storageClassResourceDeserializer(result.body);
}

/** Update a StorageClassResource */
export function storageClassUpdate(
  context: Client,
  resourceUri: string,
  storageClassName: string,
  properties: StorageClassResourceUpdate,
  options: StorageClassUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<StorageClassResource>, StorageClassResource> {
  return getLongRunningPoller(
    context,
    _storageClassUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _storageClassUpdateSend(
          context,
          resourceUri,
          storageClassName,
          properties,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<StorageClassResource>, StorageClassResource>;
}

export function _storageClassCreateOrUpdateSend(
  context: Client,
  resourceUri: string,
  storageClassName: string,
  resource: StorageClassResource,
  options: StorageClassCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+resourceUri}/providers/Microsoft.KubernetesRuntime/storageClasses/{storageClassName}{?api-version}",
    {
      resourceUri: resourceUri,
      storageClassName: storageClassName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: storageClassResourceSerializer(resource),
    });
}

export async function _storageClassCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<StorageClassResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return storageClassResourceDeserializer(result.body);
}

/** Create a StorageClassResource */
export function storageClassCreateOrUpdate(
  context: Client,
  resourceUri: string,
  storageClassName: string,
  resource: StorageClassResource,
  options: StorageClassCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<StorageClassResource>, StorageClassResource> {
  return getLongRunningPoller(
    context,
    _storageClassCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _storageClassCreateOrUpdateSend(
          context,
          resourceUri,
          storageClassName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<StorageClassResource>, StorageClassResource>;
}

export function _storageClassGetSend(
  context: Client,
  resourceUri: string,
  storageClassName: string,
  options: StorageClassGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+resourceUri}/providers/Microsoft.KubernetesRuntime/storageClasses/{storageClassName}{?api-version}",
    {
      resourceUri: resourceUri,
      storageClassName: storageClassName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _storageClassGetDeserialize(
  result: PathUncheckedResponse,
): Promise<StorageClassResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return storageClassResourceDeserializer(result.body);
}

/** Get a StorageClassResource */
export async function storageClassGet(
  context: Client,
  resourceUri: string,
  storageClassName: string,
  options: StorageClassGetOptionalParams = { requestOptions: {} },
): Promise<StorageClassResource> {
  const result = await _storageClassGetSend(
    context,
    resourceUri,
    storageClassName,
    options,
  );
  return _storageClassGetDeserialize(result);
}
