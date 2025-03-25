// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsContext as Client } from "../index.js";
import {
  AlertTemplate,
  alertTemplateDeserializer,
  errorResponseDeserializer,
  _AlertTemplateListResult,
  _alertTemplateListResultDeserializer,
} from "../../models/models.js";
import { AlertTemplatesListOptionalParams, AlertTemplatesGetOptionalParams } from "./options.js";
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
  options: AlertTemplatesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/alertTemplates{?api-version,providerType}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api-version": context.apiVersion,
      providerType: options?.providerType,
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
): Promise<_AlertTemplateListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _alertTemplateListResultDeserializer(result.body);
}

/** Gets a list of alert templates in the specified SAP monitor. The operations returns various properties of each alert template. */
export function list(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: AlertTemplatesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<AlertTemplate> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, resourceGroupName, monitorName, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  alertTemplateName: string,
  options: AlertTemplatesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/alertTemplates/{alertTemplateName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      alertTemplateName: alertTemplateName,
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

export async function _getDeserialize(result: PathUncheckedResponse): Promise<AlertTemplate> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return alertTemplateDeserializer(result.body);
}

/** Gets properties of an alert template for the specified subscription, resource group, SAP monitor name, and resource name. */
export async function get(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  alertTemplateName: string,
  options: AlertTemplatesGetOptionalParams = { requestOptions: {} },
): Promise<AlertTemplate> {
  const result = await _getSend(
    context,
    resourceGroupName,
    monitorName,
    alertTemplateName,
    options,
  );
  return _getDeserialize(result);
}
