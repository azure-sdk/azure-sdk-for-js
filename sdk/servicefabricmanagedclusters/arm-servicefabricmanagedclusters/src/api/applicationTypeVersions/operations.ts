// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ServiceFabricContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  ApplicationTypeVersionResource,
  applicationTypeVersionResourceSerializer,
  applicationTypeVersionResourceDeserializer,
  ApplicationTypeVersionUpdateParameters,
  applicationTypeVersionUpdateParametersSerializer,
  _ApplicationTypeVersionResourceList,
  _applicationTypeVersionResourceListDeserializer,
} from "../../models/models.js";
import {
  ApplicationTypeVersionsListByApplicationTypesOptionalParams,
  ApplicationTypeVersionsDeleteOptionalParams,
  ApplicationTypeVersionsUpdateOptionalParams,
  ApplicationTypeVersionsCreateOrUpdateOptionalParams,
  ApplicationTypeVersionsGetOptionalParams,
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

export function _applicationTypeVersionsListByApplicationTypesSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  applicationTypeName: string,
  options: ApplicationTypeVersionsListByApplicationTypesOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applicationTypes/{applicationTypeName}/versions{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
      applicationTypeName: applicationTypeName,
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

export async function _applicationTypeVersionsListByApplicationTypesDeserialize(
  result: PathUncheckedResponse,
): Promise<_ApplicationTypeVersionResourceList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _applicationTypeVersionResourceListDeserializer(result.body);
}

/** Gets all application type version resources created or in the process of being created in the Service Fabric managed application type name resource. */
export function applicationTypeVersionsListByApplicationTypes(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  applicationTypeName: string,
  options: ApplicationTypeVersionsListByApplicationTypesOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<ApplicationTypeVersionResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _applicationTypeVersionsListByApplicationTypesSend(
        context,
        resourceGroupName,
        clusterName,
        applicationTypeName,
        options,
      ),
    _applicationTypeVersionsListByApplicationTypesDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _applicationTypeVersionsDeleteSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  applicationTypeName: string,
  version: string,
  options: ApplicationTypeVersionsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applicationTypes/{applicationTypeName}/versions/{version}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
      applicationTypeName: applicationTypeName,
      version: version,
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

export async function _applicationTypeVersionsDeleteDeserialize(
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

/** Delete a Service Fabric managed application type version resource with the specified name. */
export function applicationTypeVersionsDelete(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  applicationTypeName: string,
  version: string,
  options: ApplicationTypeVersionsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _applicationTypeVersionsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _applicationTypeVersionsDeleteSend(
          context,
          resourceGroupName,
          clusterName,
          applicationTypeName,
          version,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _applicationTypeVersionsUpdateSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  applicationTypeName: string,
  version: string,
  parameters: ApplicationTypeVersionUpdateParameters,
  options: ApplicationTypeVersionsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applicationTypes/{applicationTypeName}/versions/{version}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
      applicationTypeName: applicationTypeName,
      version: version,
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
    body: applicationTypeVersionUpdateParametersSerializer(parameters),
  });
}

export async function _applicationTypeVersionsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ApplicationTypeVersionResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return applicationTypeVersionResourceDeserializer(result.body);
}

/** Updates the tags of an application type version resource of a given managed cluster. */
export async function applicationTypeVersionsUpdate(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  applicationTypeName: string,
  version: string,
  parameters: ApplicationTypeVersionUpdateParameters,
  options: ApplicationTypeVersionsUpdateOptionalParams = { requestOptions: {} },
): Promise<ApplicationTypeVersionResource> {
  const result = await _applicationTypeVersionsUpdateSend(
    context,
    resourceGroupName,
    clusterName,
    applicationTypeName,
    version,
    parameters,
    options,
  );
  return _applicationTypeVersionsUpdateDeserialize(result);
}

export function _applicationTypeVersionsCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  applicationTypeName: string,
  version: string,
  parameters: ApplicationTypeVersionResource,
  options: ApplicationTypeVersionsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applicationTypes/{applicationTypeName}/versions/{version}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
      applicationTypeName: applicationTypeName,
      version: version,
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
    body: applicationTypeVersionResourceSerializer(parameters),
  });
}

export async function _applicationTypeVersionsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ApplicationTypeVersionResource> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return applicationTypeVersionResourceDeserializer(result.body);
}

/** Create or update a Service Fabric managed application type version resource with the specified name. */
export function applicationTypeVersionsCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  applicationTypeName: string,
  version: string,
  parameters: ApplicationTypeVersionResource,
  options: ApplicationTypeVersionsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<ApplicationTypeVersionResource>, ApplicationTypeVersionResource> {
  return getLongRunningPoller(
    context,
    _applicationTypeVersionsCreateOrUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _applicationTypeVersionsCreateOrUpdateSend(
          context,
          resourceGroupName,
          clusterName,
          applicationTypeName,
          version,
          parameters,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<ApplicationTypeVersionResource>, ApplicationTypeVersionResource>;
}

export function _applicationTypeVersionsGetSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  applicationTypeName: string,
  version: string,
  options: ApplicationTypeVersionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applicationTypes/{applicationTypeName}/versions/{version}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
      applicationTypeName: applicationTypeName,
      version: version,
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

export async function _applicationTypeVersionsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ApplicationTypeVersionResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return applicationTypeVersionResourceDeserializer(result.body);
}

/** Get a Service Fabric managed application type version resource created or in the process of being created in the Service Fabric managed application type name resource. */
export async function applicationTypeVersionsGet(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  applicationTypeName: string,
  version: string,
  options: ApplicationTypeVersionsGetOptionalParams = { requestOptions: {} },
): Promise<ApplicationTypeVersionResource> {
  const result = await _applicationTypeVersionsGetSend(
    context,
    resourceGroupName,
    clusterName,
    applicationTypeName,
    version,
    options,
  );
  return _applicationTypeVersionsGetDeserialize(result);
}
