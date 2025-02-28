// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  KubernetesRuntimeContext as Client,
  ServicesCreateOrUpdateOptionalParams,
  ServicesDeleteOptionalParams,
  ServicesGetOptionalParams,
  ServicesListOptionalParams,
} from "../index.js";
import {
  ServiceResource,
  serviceResourceSerializer,
  serviceResourceDeserializer,
  errorResponseDeserializer,
  _ServiceResourceListResult,
  _serviceResourceListResultDeserializer,
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

export function _servicesListSend(
  context: Client,
  resourceUri: string,
  options: ServicesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/{resourceUri}/providers/Microsoft.KubernetesRuntime/services", {
      value: resourceUri,
      allowReserved: true,
    })
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _servicesListDeserialize(
  result: PathUncheckedResponse,
): Promise<_ServiceResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _serviceResourceListResultDeserializer(result.body);
}

/** List ServiceResource resources by parent */
export function servicesList(
  context: Client,
  resourceUri: string,
  options: ServicesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ServiceResource> {
  return buildPagedAsyncIterator(
    context,
    () => _servicesListSend(context, resourceUri, options),
    _servicesListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _servicesDeleteSend(
  context: Client,
  resourceUri: string,
  serviceName: string,
  options: ServicesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.KubernetesRuntime/services/{serviceName}",
      { value: resourceUri, allowReserved: true },
      serviceName,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _servicesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a ServiceResource */
export async function servicesDelete(
  context: Client,
  resourceUri: string,
  serviceName: string,
  options: ServicesDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _servicesDeleteSend(
    context,
    resourceUri,
    serviceName,
    options,
  );
  return _servicesDeleteDeserialize(result);
}

export function _servicesCreateOrUpdateSend(
  context: Client,
  resourceUri: string,
  serviceName: string,
  resource: ServiceResource,
  options: ServicesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.KubernetesRuntime/services/{serviceName}",
      { value: resourceUri, allowReserved: true },
      serviceName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: serviceResourceSerializer(resource),
    });
}

export async function _servicesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ServiceResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return serviceResourceDeserializer(result.body);
}

/** Create a ServiceResource */
export async function servicesCreateOrUpdate(
  context: Client,
  resourceUri: string,
  serviceName: string,
  resource: ServiceResource,
  options: ServicesCreateOrUpdateOptionalParams = { requestOptions: {} },
): Promise<ServiceResource> {
  const result = await _servicesCreateOrUpdateSend(
    context,
    resourceUri,
    serviceName,
    resource,
    options,
  );
  return _servicesCreateOrUpdateDeserialize(result);
}

export function _servicesGetSend(
  context: Client,
  resourceUri: string,
  serviceName: string,
  options: ServicesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.KubernetesRuntime/services/{serviceName}",
      { value: resourceUri, allowReserved: true },
      serviceName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _servicesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ServiceResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return serviceResourceDeserializer(result.body);
}

/** Get a ServiceResource */
export async function servicesGet(
  context: Client,
  resourceUri: string,
  serviceName: string,
  options: ServicesGetOptionalParams = { requestOptions: {} },
): Promise<ServiceResource> {
  const result = await _servicesGetSend(
    context,
    resourceUri,
    serviceName,
    options,
  );
  return _servicesGetDeserialize(result);
}
