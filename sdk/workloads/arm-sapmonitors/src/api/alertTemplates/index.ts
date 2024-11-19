// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AlertTemplatesGetOptionalParams,
  AlertTemplatesListOptionalParams,
  WorkloadsContext as Client,
} from "../index.js";
import {
  AlertTemplate,
  alertTemplateDeserializer,
  _AlertTemplateListResult,
  _alertTemplateListResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _alertTemplatesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  alertTemplateName: string,
  options: AlertTemplatesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/alertTemplates/{alertTemplateName}",
      subscriptionId,
      resourceGroupName,
      monitorName,
      alertTemplateName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _alertTemplatesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<AlertTemplate> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return alertTemplateDeserializer(result.body);
}

/** Gets properties of an alert template for the specified subscription, resource group, SAP monitor name, and resource name. */
export async function alertTemplatesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  alertTemplateName: string,
  options: AlertTemplatesGetOptionalParams = { requestOptions: {} },
): Promise<AlertTemplate> {
  const result = await _alertTemplatesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    monitorName,
    alertTemplateName,
    options,
  );
  return _alertTemplatesGetDeserialize(result);
}

export function _alertTemplatesListSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  options: AlertTemplatesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/alertTemplates",
      subscriptionId,
      resourceGroupName,
      monitorName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { providerType: options?.providerType },
    });
}

export async function _alertTemplatesListDeserialize(
  result: PathUncheckedResponse,
): Promise<_AlertTemplateListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _alertTemplateListResultDeserializer(result.body);
}

/** Gets a list of alert templates in the specified SAP monitor. The operations returns various properties of each alert template. */
export function alertTemplatesList(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  options: AlertTemplatesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<AlertTemplate> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _alertTemplatesListSend(
        context,
        subscriptionId,
        resourceGroupName,
        monitorName,
        options,
      ),
    _alertTemplatesListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
