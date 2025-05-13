// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { IoTOperationsContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  AkriConnectorResource,
  akriConnectorResourceSerializer,
  akriConnectorResourceDeserializer,
  _AkriConnectorResourceListResult,
  _akriConnectorResourceListResultDeserializer,
} from "../../models/models.js";
import {
  AkriConnectorListByTemplateOptionalParams,
  AkriConnectorDeleteOptionalParams,
  AkriConnectorCreateOrUpdateOptionalParams,
  AkriConnectorGetOptionalParams,
} from "./options.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
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
import { PollerLike, OperationState } from "@azure/core-lro";

export function _listByTemplateSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  akriConnectorTemplateName: string,
  options: AkriConnectorListByTemplateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriConnectorTemplates/{akriConnectorTemplateName}/akriConnectors{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      instanceName: instanceName,
      akriConnectorTemplateName: akriConnectorTemplateName,
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

export async function _listByTemplateDeserialize(
  result: PathUncheckedResponse,
): Promise<_AkriConnectorResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _akriConnectorResourceListResultDeserializer(result.body);
}

/** List AkriConnectorResource resources by AkriConnectorTemplateResource */
export function listByTemplate(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  akriConnectorTemplateName: string,
  options: AkriConnectorListByTemplateOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<AkriConnectorResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByTemplateSend(
        context,
        resourceGroupName,
        instanceName,
        akriConnectorTemplateName,
        options,
      ),
    _listByTemplateDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  akriConnectorTemplateName: string,
  akriConnectorName: string,
  options: AkriConnectorDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriConnectorTemplates/{akriConnectorTemplateName}/akriConnectors/{akriConnectorName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      instanceName: instanceName,
      akriConnectorTemplateName: akriConnectorTemplateName,
      akriConnectorName: akriConnectorName,
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
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a AkriConnectorResource */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  akriConnectorTemplateName: string,
  akriConnectorName: string,
  options: AkriConnectorDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(
        context,
        resourceGroupName,
        instanceName,
        akriConnectorTemplateName,
        akriConnectorName,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  akriConnectorTemplateName: string,
  akriConnectorName: string,
  resource: AkriConnectorResource,
  options: AkriConnectorCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriConnectorTemplates/{akriConnectorTemplateName}/akriConnectors/{akriConnectorName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      instanceName: instanceName,
      akriConnectorTemplateName: akriConnectorTemplateName,
      akriConnectorName: akriConnectorName,
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
    body: akriConnectorResourceSerializer(resource),
  });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<AkriConnectorResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return akriConnectorResourceDeserializer(result.body);
}

/** Create a AkriConnectorResource */
export function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  akriConnectorTemplateName: string,
  akriConnectorName: string,
  resource: AkriConnectorResource,
  options: AkriConnectorCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<AkriConnectorResource>, AkriConnectorResource> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        resourceGroupName,
        instanceName,
        akriConnectorTemplateName,
        akriConnectorName,
        resource,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<AkriConnectorResource>, AkriConnectorResource>;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  akriConnectorTemplateName: string,
  akriConnectorName: string,
  options: AkriConnectorGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriConnectorTemplates/{akriConnectorTemplateName}/akriConnectors/{akriConnectorName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      instanceName: instanceName,
      akriConnectorTemplateName: akriConnectorTemplateName,
      akriConnectorName: akriConnectorName,
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
): Promise<AkriConnectorResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return akriConnectorResourceDeserializer(result.body);
}

/** Get a AkriConnectorResource */
export async function get(
  context: Client,
  resourceGroupName: string,
  instanceName: string,
  akriConnectorTemplateName: string,
  akriConnectorName: string,
  options: AkriConnectorGetOptionalParams = { requestOptions: {} },
): Promise<AkriConnectorResource> {
  const result = await _getSend(
    context,
    resourceGroupName,
    instanceName,
    akriConnectorTemplateName,
    akriConnectorName,
    options,
  );
  return _getDeserialize(result);
}
