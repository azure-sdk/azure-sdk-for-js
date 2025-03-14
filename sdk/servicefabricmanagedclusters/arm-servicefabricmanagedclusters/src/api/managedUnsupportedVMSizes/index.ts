// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ServiceFabricContext as Client,
  ManagedUnsupportedVMSizesGetOptionalParams,
  ManagedUnsupportedVMSizesListOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  ManagedVMSize,
  managedVMSizeDeserializer,
  _ManagedVMSizesResult,
  _managedVMSizesResultDeserializer,
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

export function _managedUnsupportedVMSizesListSend(
  context: Client,
  location: string,
  options: ManagedUnsupportedVMSizesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/managedUnsupportedVMSizes{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      "api-version": context.apiVersion,
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

export async function _managedUnsupportedVMSizesListDeserialize(
  result: PathUncheckedResponse,
): Promise<_ManagedVMSizesResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _managedVMSizesResultDeserializer(result.body);
}

/** Get the lists of unsupported vm sizes for Service Fabric Managed Clusters. */
export function managedUnsupportedVMSizesList(
  context: Client,
  location: string,
  options: ManagedUnsupportedVMSizesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ManagedVMSize> {
  return buildPagedAsyncIterator(
    context,
    () => _managedUnsupportedVMSizesListSend(context, location, options),
    _managedUnsupportedVMSizesListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _managedUnsupportedVMSizesGetSend(
  context: Client,
  location: string,
  vmSize: string,
  options: ManagedUnsupportedVMSizesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/managedUnsupportedVMSizes/{vmSize}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      vmSize: vmSize,
      "api-version": context.apiVersion,
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

export async function _managedUnsupportedVMSizesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ManagedVMSize> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return managedVMSizeDeserializer(result.body);
}

/** Get unsupported vm size for Service Fabric Managed Clusters. */
export async function managedUnsupportedVMSizesGet(
  context: Client,
  location: string,
  vmSize: string,
  options: ManagedUnsupportedVMSizesGetOptionalParams = { requestOptions: {} },
): Promise<ManagedVMSize> {
  const result = await _managedUnsupportedVMSizesGetSend(context, location, vmSize, options);
  return _managedUnsupportedVMSizesGetDeserialize(result);
}
