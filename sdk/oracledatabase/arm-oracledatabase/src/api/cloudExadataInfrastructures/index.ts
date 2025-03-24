// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  DatabaseContext as Client,
  CloudExadataInfrastructuresAddStorageCapacityOptionalParams,
  CloudExadataInfrastructuresCreateOrUpdateOptionalParams,
  CloudExadataInfrastructuresDeleteOptionalParams,
  CloudExadataInfrastructuresGetOptionalParams,
  CloudExadataInfrastructuresListByResourceGroupOptionalParams,
  CloudExadataInfrastructuresListBySubscriptionOptionalParams,
  CloudExadataInfrastructuresUpdateOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  _CloudExadataInfrastructureListResult,
  _cloudExadataInfrastructureListResultDeserializer,
  CloudExadataInfrastructure,
  cloudExadataInfrastructureSerializer,
  cloudExadataInfrastructureDeserializer,
  CloudExadataInfrastructureUpdate,
  cloudExadataInfrastructureUpdateSerializer,
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

export function _cloudExadataInfrastructuresAddStorageCapacitySend(
  context: Client,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  options: CloudExadataInfrastructuresAddStorageCapacityOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}/addStorageCapacity{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      cloudexadatainfrastructurename: cloudexadatainfrastructurename,
      "api-version": context.apiVersion,
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

export async function _cloudExadataInfrastructuresAddStorageCapacityDeserialize(
  result: PathUncheckedResponse,
): Promise<CloudExadataInfrastructure> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return cloudExadataInfrastructureDeserializer(result.body);
}

/** Perform add storage capacity on exadata infra */
export function cloudExadataInfrastructuresAddStorageCapacity(
  context: Client,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  options: CloudExadataInfrastructuresAddStorageCapacityOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<CloudExadataInfrastructure>, CloudExadataInfrastructure> {
  return getLongRunningPoller(
    context,
    _cloudExadataInfrastructuresAddStorageCapacityDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _cloudExadataInfrastructuresAddStorageCapacitySend(
          context,
          resourceGroupName,
          cloudexadatainfrastructurename,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<CloudExadataInfrastructure>, CloudExadataInfrastructure>;
}

export function _cloudExadataInfrastructuresListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: CloudExadataInfrastructuresListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
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

export async function _cloudExadataInfrastructuresListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_CloudExadataInfrastructureListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _cloudExadataInfrastructureListResultDeserializer(result.body);
}

/** List CloudExadataInfrastructure resources by resource group */
export function cloudExadataInfrastructuresListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: CloudExadataInfrastructuresListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<CloudExadataInfrastructure> {
  return buildPagedAsyncIterator(
    context,
    () => _cloudExadataInfrastructuresListByResourceGroupSend(context, resourceGroupName, options),
    _cloudExadataInfrastructuresListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _cloudExadataInfrastructuresCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  resource: CloudExadataInfrastructure,
  options: CloudExadataInfrastructuresCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      cloudexadatainfrastructurename: cloudexadatainfrastructurename,
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
    body: cloudExadataInfrastructureSerializer(resource),
  });
}

export async function _cloudExadataInfrastructuresCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<CloudExadataInfrastructure> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return cloudExadataInfrastructureDeserializer(result.body);
}

/** Create a CloudExadataInfrastructure */
export function cloudExadataInfrastructuresCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  resource: CloudExadataInfrastructure,
  options: CloudExadataInfrastructuresCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<CloudExadataInfrastructure>, CloudExadataInfrastructure> {
  return getLongRunningPoller(
    context,
    _cloudExadataInfrastructuresCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _cloudExadataInfrastructuresCreateOrUpdateSend(
          context,
          resourceGroupName,
          cloudexadatainfrastructurename,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<CloudExadataInfrastructure>, CloudExadataInfrastructure>;
}

export function _cloudExadataInfrastructuresDeleteSend(
  context: Client,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  options: CloudExadataInfrastructuresDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      cloudexadatainfrastructurename: cloudexadatainfrastructurename,
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

export async function _cloudExadataInfrastructuresDeleteDeserialize(
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

/** Delete a CloudExadataInfrastructure */
export function cloudExadataInfrastructuresDelete(
  context: Client,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  options: CloudExadataInfrastructuresDeleteOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _cloudExadataInfrastructuresDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _cloudExadataInfrastructuresDeleteSend(
          context,
          resourceGroupName,
          cloudexadatainfrastructurename,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _cloudExadataInfrastructuresUpdateSend(
  context: Client,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  properties: CloudExadataInfrastructureUpdate,
  options: CloudExadataInfrastructuresUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      cloudexadatainfrastructurename: cloudexadatainfrastructurename,
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
    body: cloudExadataInfrastructureUpdateSerializer(properties),
  });
}

export async function _cloudExadataInfrastructuresUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<CloudExadataInfrastructure> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return cloudExadataInfrastructureDeserializer(result.body);
}

/** Update a CloudExadataInfrastructure */
export function cloudExadataInfrastructuresUpdate(
  context: Client,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  properties: CloudExadataInfrastructureUpdate,
  options: CloudExadataInfrastructuresUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<CloudExadataInfrastructure>, CloudExadataInfrastructure> {
  return getLongRunningPoller(
    context,
    _cloudExadataInfrastructuresUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _cloudExadataInfrastructuresUpdateSend(
          context,
          resourceGroupName,
          cloudexadatainfrastructurename,
          properties,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<CloudExadataInfrastructure>, CloudExadataInfrastructure>;
}

export function _cloudExadataInfrastructuresGetSend(
  context: Client,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  options: CloudExadataInfrastructuresGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      cloudexadatainfrastructurename: cloudexadatainfrastructurename,
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

export async function _cloudExadataInfrastructuresGetDeserialize(
  result: PathUncheckedResponse,
): Promise<CloudExadataInfrastructure> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return cloudExadataInfrastructureDeserializer(result.body);
}

/** Get a CloudExadataInfrastructure */
export async function cloudExadataInfrastructuresGet(
  context: Client,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  options: CloudExadataInfrastructuresGetOptionalParams = {
    requestOptions: {},
  },
): Promise<CloudExadataInfrastructure> {
  const result = await _cloudExadataInfrastructuresGetSend(
    context,
    resourceGroupName,
    cloudexadatainfrastructurename,
    options,
  );
  return _cloudExadataInfrastructuresGetDeserialize(result);
}

export function _cloudExadataInfrastructuresListBySubscriptionSend(
  context: Client,
  options: CloudExadataInfrastructuresListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Oracle.Database/cloudExadataInfrastructures{?api-version}",
    {
      subscriptionId: context.subscriptionId,
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

export async function _cloudExadataInfrastructuresListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_CloudExadataInfrastructureListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _cloudExadataInfrastructureListResultDeserializer(result.body);
}

/** List CloudExadataInfrastructure resources by subscription ID */
export function cloudExadataInfrastructuresListBySubscription(
  context: Client,
  options: CloudExadataInfrastructuresListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<CloudExadataInfrastructure> {
  return buildPagedAsyncIterator(
    context,
    () => _cloudExadataInfrastructuresListBySubscriptionSend(context, options),
    _cloudExadataInfrastructuresListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
