// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticContext as Client } from "../index.js";
import {
  resourceProviderDefaultErrorResponseDeserializer,
  OpenAIIntegrationRPModel,
  openAIIntegrationRPModelSerializer,
  openAIIntegrationRPModelDeserializer,
  _OpenAIIntegrationRPModelListResponse,
  _openAIIntegrationRPModelListResponseDeserializer,
  OpenAIIntegrationStatusResponse,
  openAIIntegrationStatusResponseDeserializer,
} from "../../models/models.js";
import {
  OpenAIIntegrationRPModelsGetStatusOptionalParams,
  OpenAIIntegrationRPModelsListOptionalParams,
  OpenAIIntegrationRPModelsDeleteOptionalParams,
  OpenAIIntegrationRPModelsCreateOrUpdateOptionalParams,
  OpenAIIntegrationRPModelsGetOptionalParams,
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

export function _getStatusSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  integrationName: string,
  options: OpenAIIntegrationRPModelsGetStatusOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/openAIIntegrations/{integrationName}/getStatus{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      integrationName: integrationName,
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

export async function _getStatusDeserialize(
  result: PathUncheckedResponse,
): Promise<OpenAIIntegrationStatusResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = resourceProviderDefaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return openAIIntegrationStatusResponseDeserializer(result.body);
}

/** Get OpenAI integration status for a given integration. */
export async function getStatus(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  integrationName: string,
  options: OpenAIIntegrationRPModelsGetStatusOptionalParams = {
    requestOptions: {},
  },
): Promise<OpenAIIntegrationStatusResponse> {
  const result = await _getStatusSend(
    context,
    resourceGroupName,
    monitorName,
    integrationName,
    options,
  );
  return _getStatusDeserialize(result);
}

export function _listSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: OpenAIIntegrationRPModelsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/openAIIntegrations{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
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

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_OpenAIIntegrationRPModelListResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = resourceProviderDefaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return _openAIIntegrationRPModelListResponseDeserializer(result.body);
}

/** List OpenAI integration rule for a given monitor resource. */
export function list(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: OpenAIIntegrationRPModelsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<OpenAIIntegrationRPModel> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, resourceGroupName, monitorName, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  integrationName: string,
  options: OpenAIIntegrationRPModelsDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/openAIIntegrations/{integrationName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      integrationName: integrationName,
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
    error.details = resourceProviderDefaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete OpenAI integration rule for a given monitor resource. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  integrationName: string,
  options: OpenAIIntegrationRPModelsDeleteOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _$deleteSend(
    context,
    resourceGroupName,
    monitorName,
    integrationName,
    options,
  );
  return _$deleteDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  integrationName: string,
  body: OpenAIIntegrationRPModel,
  options: OpenAIIntegrationRPModelsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/openAIIntegrations/{integrationName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      integrationName: integrationName,
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
    body: openAIIntegrationRPModelSerializer(body),
  });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<OpenAIIntegrationRPModel> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = resourceProviderDefaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return openAIIntegrationRPModelDeserializer(result.body);
}

/** Create or update a OpenAI integration rule for a given monitor resource. */
export async function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  integrationName: string,
  body: OpenAIIntegrationRPModel,
  options: OpenAIIntegrationRPModelsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): Promise<OpenAIIntegrationRPModel> {
  const result = await _createOrUpdateSend(
    context,
    resourceGroupName,
    monitorName,
    integrationName,
    body,
    options,
  );
  return _createOrUpdateDeserialize(result);
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  integrationName: string,
  options: OpenAIIntegrationRPModelsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/openAIIntegrations/{integrationName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      integrationName: integrationName,
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
): Promise<OpenAIIntegrationRPModel> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = resourceProviderDefaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return openAIIntegrationRPModelDeserializer(result.body);
}

/** Get OpenAI integration rule for a given monitor resource. */
export async function get(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  integrationName: string,
  options: OpenAIIntegrationRPModelsGetOptionalParams = { requestOptions: {} },
): Promise<OpenAIIntegrationRPModel> {
  const result = await _getSend(context, resourceGroupName, monitorName, integrationName, options);
  return _getDeserialize(result);
}
