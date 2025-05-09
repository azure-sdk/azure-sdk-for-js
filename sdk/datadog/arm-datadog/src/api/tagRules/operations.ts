// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatadogContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  MonitoringTagRules,
  monitoringTagRulesSerializer,
  monitoringTagRulesDeserializer,
  _MonitoringTagRulesListResponse,
  _monitoringTagRulesListResponseDeserializer,
} from "../../models/models.js";
import {
  TagRulesListOptionalParams,
  TagRulesCreateOrUpdateOptionalParams,
  TagRulesGetOptionalParams,
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

export function _listSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: TagRulesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/tagRules{?api%2Dversion}",
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
): Promise<_MonitoringTagRulesListResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _monitoringTagRulesListResponseDeserializer(result.body);
}

/** List the tag rules for a given monitor resource. */
export function list(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: TagRulesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<MonitoringTagRules> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, resourceGroupName, monitorName, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  ruleSetName: string,
  body: MonitoringTagRules,
  options: TagRulesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/tagRules/{ruleSetName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      ruleSetName: ruleSetName,
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
    body: monitoringTagRulesSerializer(body),
  });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<MonitoringTagRules> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return monitoringTagRulesDeserializer(result.body);
}

/** Create or update a tag rule set for a given monitor resource. */
export async function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  ruleSetName: string,
  body: MonitoringTagRules,
  options: TagRulesCreateOrUpdateOptionalParams = { requestOptions: {} },
): Promise<MonitoringTagRules> {
  const result = await _createOrUpdateSend(
    context,
    resourceGroupName,
    monitorName,
    ruleSetName,
    body,
    options,
  );
  return _createOrUpdateDeserialize(result);
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  ruleSetName: string,
  options: TagRulesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/tagRules/{ruleSetName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      ruleSetName: ruleSetName,
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

export async function _getDeserialize(result: PathUncheckedResponse): Promise<MonitoringTagRules> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return monitoringTagRulesDeserializer(result.body);
}

/** Get a tag rule set for a given monitor resource. */
export async function get(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  ruleSetName: string,
  options: TagRulesGetOptionalParams = { requestOptions: {} },
): Promise<MonitoringTagRules> {
  const result = await _getSend(context, resourceGroupName, monitorName, ruleSetName, options);
  return _getDeserialize(result);
}
