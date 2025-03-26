// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ServiceFabricContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  ApplicationTypeResource,
  applicationTypeResourceSerializer,
  applicationTypeResourceDeserializer,
  ApplicationTypeUpdateParameters,
  applicationTypeUpdateParametersSerializer,
  _ApplicationTypeResourceList,
  _applicationTypeResourceListDeserializer,
} from "../../models/models.js";
import {
  ApplicationTypesListOptionalParams,
  ApplicationTypesDeleteOptionalParams,
  ApplicationTypesUpdateOptionalParams,
  ApplicationTypesCreateOrUpdateOptionalParams,
  ApplicationTypesGetOptionalParams,
} from "./options.js";
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

export function _applicationTypesListSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  options: ApplicationTypesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applicationTypes{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
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

export async function _applicationTypesListDeserialize(
  result: PathUncheckedResponse,
): Promise<_ApplicationTypeResourceList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _applicationTypeResourceListDeserializer(result.body);
}

/** Gets all application type name resources created or in the process of being created in the Service Fabric managed cluster resource. */
export function applicationTypesList(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  options: ApplicationTypesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ApplicationTypeResource> {
  return buildPagedAsyncIterator(
    context,
    () => _applicationTypesListSend(context, resourceGroupName, clusterName, options),
    _applicationTypesListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _applicationTypesDeleteSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  applicationTypeName: string,
  options: ApplicationTypesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applicationTypes/{applicationTypeName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
      applicationTypeName: applicationTypeName,
      "api-version": context.apiVersion,
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

export async function _applicationTypesDeleteDeserialize(
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

/** Delete a Service Fabric managed application type name resource with the specified name. */
export function applicationTypesDelete(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  applicationTypeName: string,
  options: ApplicationTypesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _applicationTypesDeleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _applicationTypesDeleteSend(
        context,
        resourceGroupName,
        clusterName,
        applicationTypeName,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _applicationTypesUpdateSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  applicationTypeName: string,
  parameters: ApplicationTypeUpdateParameters,
  options: ApplicationTypesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applicationTypes/{applicationTypeName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
      applicationTypeName: applicationTypeName,
      "api-version": context.apiVersion,
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
    body: applicationTypeUpdateParametersSerializer(parameters),
  });
}

export async function _applicationTypesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ApplicationTypeResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return applicationTypeResourceDeserializer(result.body);
}

/** Updates the tags of an application type resource of a given managed cluster. */
export async function applicationTypesUpdate(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  applicationTypeName: string,
  parameters: ApplicationTypeUpdateParameters,
  options: ApplicationTypesUpdateOptionalParams = { requestOptions: {} },
): Promise<ApplicationTypeResource> {
  const result = await _applicationTypesUpdateSend(
    context,
    resourceGroupName,
    clusterName,
    applicationTypeName,
    parameters,
    options,
  );
  return _applicationTypesUpdateDeserialize(result);
}

export function _applicationTypesCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  applicationTypeName: string,
  parameters: ApplicationTypeResource,
  options: ApplicationTypesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applicationTypes/{applicationTypeName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
      applicationTypeName: applicationTypeName,
      "api-version": context.apiVersion,
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
    body: applicationTypeResourceSerializer(parameters),
  });
}

export async function _applicationTypesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ApplicationTypeResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return applicationTypeResourceDeserializer(result.body);
}

/** Create or update a Service Fabric managed application type name resource with the specified name. */
export async function applicationTypesCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  applicationTypeName: string,
  parameters: ApplicationTypeResource,
  options: ApplicationTypesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): Promise<ApplicationTypeResource> {
  const result = await _applicationTypesCreateOrUpdateSend(
    context,
    resourceGroupName,
    clusterName,
    applicationTypeName,
    parameters,
    options,
  );
  return _applicationTypesCreateOrUpdateDeserialize(result);
}

export function _applicationTypesGetSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  applicationTypeName: string,
  options: ApplicationTypesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applicationTypes/{applicationTypeName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
      applicationTypeName: applicationTypeName,
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

export async function _applicationTypesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ApplicationTypeResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return applicationTypeResourceDeserializer(result.body);
}

/** Get a Service Fabric application type name resource created or in the process of being created in the Service Fabric managed cluster resource. */
export async function applicationTypesGet(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  applicationTypeName: string,
  options: ApplicationTypesGetOptionalParams = { requestOptions: {} },
): Promise<ApplicationTypeResource> {
  const result = await _applicationTypesGetSend(
    context,
    resourceGroupName,
    clusterName,
    applicationTypeName,
    options,
  );
  return _applicationTypesGetDeserialize(result);
}
