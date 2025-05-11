// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BotServiceContext as Client } from "../index.js";
import {
  errorDeserializer,
  Bot,
  botSerializer,
  botDeserializer,
  _BotResponseList,
  _botResponseListDeserializer,
  CreateEmailSignInUrlResponse,
  createEmailSignInUrlResponseDeserializer,
  PrivateLinkResourceListResult,
  privateLinkResourceListResultDeserializer,
} from "../../models/models.js";
import {
  BotsListByBotResourceOptionalParams,
  BotsCreateSignInUrlOptionalParams,
  BotsListOptionalParams,
  BotsListByResourceGroupOptionalParams,
  BotsDeleteOptionalParams,
  BotsUpdateOptionalParams,
  BotsCreateOptionalParams,
  BotsGetOptionalParams,
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

export function _listByBotResourceSend(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  options: BotsListByBotResourceOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/privateLinkResources{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      resourceName: resourceName,
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

export async function _listByBotResourceDeserialize(
  result: PathUncheckedResponse,
): Promise<PrivateLinkResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return privateLinkResourceListResultDeserializer(result.body);
}

/** Gets the private link resources that need to be created for a Bot. */
export async function listByBotResource(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  options: BotsListByBotResourceOptionalParams = { requestOptions: {} },
): Promise<PrivateLinkResourceListResult> {
  const result = await _listByBotResourceSend(context, resourceGroupName, resourceName, options);
  return _listByBotResourceDeserialize(result);
}

export function _createSignInUrlSend(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  options: BotsCreateSignInUrlOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/createEmailSignInUrl{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      resourceName: resourceName,
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

export async function _createSignInUrlDeserialize(
  result: PathUncheckedResponse,
): Promise<CreateEmailSignInUrlResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return createEmailSignInUrlResponseDeserializer(result.body);
}

/** Creates an email channel sign in url for a Bot Service */
export async function createSignInUrl(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  options: BotsCreateSignInUrlOptionalParams = { requestOptions: {} },
): Promise<CreateEmailSignInUrlResponse> {
  const result = await _createSignInUrlSend(context, resourceGroupName, resourceName, options);
  return _createSignInUrlDeserialize(result);
}

export function _listSend(
  context: Client,
  options: BotsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.BotService/botServices{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
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

export async function _listDeserialize(result: PathUncheckedResponse): Promise<_BotResponseList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return _botResponseListDeserializer(result.body);
}

/** Returns all the resources of a particular type belonging to a subscription. */
export function list(
  context: Client,
  options: BotsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Bot> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: BotsListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
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

export async function _listByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_BotResponseList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return _botResponseListDeserializer(result.body);
}

/** Returns all the resources of a particular type belonging to a resource group */
export function listByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: BotsListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Bot> {
  return buildPagedAsyncIterator(
    context,
    () => _listByResourceGroupSend(context, resourceGroupName, options),
    _listByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  options: BotsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      resourceName: resourceName,
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
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return;
}

/** Deletes a Bot Service from the resource group. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  options: BotsDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _$deleteSend(context, resourceGroupName, resourceName, options);
  return _$deleteDeserialize(result);
}

export function _updateSend(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  parameters: Bot,
  options: BotsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      resourceName: resourceName,
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
    body: botSerializer(parameters),
  });
}

export async function _updateDeserialize(result: PathUncheckedResponse): Promise<Bot> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return botDeserializer(result.body);
}

/** Updates a Bot Service */
export async function update(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  parameters: Bot,
  options: BotsUpdateOptionalParams = { requestOptions: {} },
): Promise<Bot> {
  const result = await _updateSend(context, resourceGroupName, resourceName, parameters, options);
  return _updateDeserialize(result);
}

export function _createSend(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  parameters: Bot,
  options: BotsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      resourceName: resourceName,
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
    body: botSerializer(parameters),
  });
}

export async function _createDeserialize(result: PathUncheckedResponse): Promise<Bot> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return botDeserializer(result.body);
}

/** Creates a Bot Service. Bot Service is a resource group wide resource type. */
export async function create(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  parameters: Bot,
  options: BotsCreateOptionalParams = { requestOptions: {} },
): Promise<Bot> {
  const result = await _createSend(context, resourceGroupName, resourceName, parameters, options);
  return _createDeserialize(result);
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  options: BotsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      resourceName: resourceName,
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

export async function _getDeserialize(result: PathUncheckedResponse): Promise<Bot> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return botDeserializer(result.body);
}

/** Returns a BotService specified by the parameters. */
export async function get(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  options: BotsGetOptionalParams = { requestOptions: {} },
): Promise<Bot> {
  const result = await _getSend(context, resourceGroupName, resourceName, options);
  return _getDeserialize(result);
}
