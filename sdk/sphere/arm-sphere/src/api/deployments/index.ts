// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AzureSphereContext as Client,
  DeploymentsCreateOrUpdateOptionalParams,
  DeploymentsDeleteOptionalParams,
  DeploymentsGetOptionalParams,
  DeploymentsListByDeviceGroupOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  Deployment,
  deploymentSerializer,
  deploymentDeserializer,
  _DeploymentListResult,
  _deploymentListResultDeserializer,
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

export function _deploymentsListByDeviceGroupSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  options: DeploymentsListByDeviceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/deployments{?api-version,$filter,$top,$skip,$maxpagesize}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      productName: productName,
      deviceGroupName: deviceGroupName,
      "api-version": context.apiVersion,
      $filter: options?.filter,
      $top: options?.top,
      $skip: options?.skip,
      $maxpagesize: options?.maxpagesize,
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

export async function _deploymentsListByDeviceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_DeploymentListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _deploymentListResultDeserializer(result.body);
}

/** List Deployment resources by DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export function deploymentsListByDeviceGroup(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  options: DeploymentsListByDeviceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Deployment> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _deploymentsListByDeviceGroupSend(
        context,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        options,
      ),
    _deploymentsListByDeviceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _deploymentsDeleteSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deploymentName: string,
  options: DeploymentsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/deployments/{deploymentName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      productName: productName,
      deviceGroupName: deviceGroupName,
      deploymentName: deploymentName,
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

export async function _deploymentsDeleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a Deployment. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export function deploymentsDelete(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deploymentName: string,
  options: DeploymentsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _deploymentsDeleteDeserialize, ["200", "202", "204"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _deploymentsDeleteSend(
        context,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        deploymentName,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _deploymentsCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deploymentName: string,
  resource: Deployment,
  options: DeploymentsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/deployments/{deploymentName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      productName: productName,
      deviceGroupName: deviceGroupName,
      deploymentName: deploymentName,
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
    body: deploymentSerializer(resource),
  });
}

export async function _deploymentsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Deployment> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return deploymentDeserializer(result.body);
}

/** Create a Deployment. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export function deploymentsCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deploymentName: string,
  resource: Deployment,
  options: DeploymentsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Deployment>, Deployment> {
  return getLongRunningPoller(context, _deploymentsCreateOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _deploymentsCreateOrUpdateSend(
        context,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        deploymentName,
        resource,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<Deployment>, Deployment>;
}

export function _deploymentsGetSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deploymentName: string,
  options: DeploymentsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/deployments/{deploymentName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      productName: productName,
      deviceGroupName: deviceGroupName,
      deploymentName: deploymentName,
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

export async function _deploymentsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Deployment> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return deploymentDeserializer(result.body);
}

/** Get a Deployment. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export async function deploymentsGet(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deploymentName: string,
  options: DeploymentsGetOptionalParams = { requestOptions: {} },
): Promise<Deployment> {
  const result = await _deploymentsGetSend(
    context,
    resourceGroupName,
    catalogName,
    productName,
    deviceGroupName,
    deploymentName,
    options,
  );
  return _deploymentsGetDeserialize(result);
}
