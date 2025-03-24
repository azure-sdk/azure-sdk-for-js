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
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
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
  const path = expandUrlTemplate(
    "/{+resourceUri}/providers/Microsoft.KubernetesRuntime/services{?api-version}",
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
  const path = expandUrlTemplate(
    "/{+resourceUri}/providers/Microsoft.KubernetesRuntime/services/{serviceName}{?api-version}",
    {
      resourceUri: resourceUri,
      serviceName: serviceName,
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
  const path = expandUrlTemplate(
    "/{+resourceUri}/providers/Microsoft.KubernetesRuntime/services/{serviceName}{?api-version}",
    {
      resourceUri: resourceUri,
      serviceName: serviceName,
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
  const path = expandUrlTemplate(
    "/{+resourceUri}/providers/Microsoft.KubernetesRuntime/services/{serviceName}{?api-version}",
    {
      resourceUri: resourceUri,
      serviceName: serviceName,
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
