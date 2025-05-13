// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  WebhookResource,
  webhookResourceSerializer,
  webhookResourceDeserializer,
  WebhookResourcePatch,
  webhookResourcePatchSerializer,
  _WebhookResourceListResult,
  _webhookResourceListResultDeserializer,
} from "../../models/models.js";
import {
  WebhookListOptionalParams,
  WebhookDeleteOptionalParams,
  WebhookUpdateOptionalParams,
  WebhookCreateOrUpdateOptionalParams,
  WebhookGetOptionalParams,
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
  reportName: string,
  options: WebhookListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks{?api%2Dversion,%24skipToken,%24top,%24select,%24filter,%24orderby,offerGuid,reportCreatorTenantId}",
    {
      reportName: reportName,
      "api%2Dversion": context.apiVersion,
      "%24skipToken": options?.skipToken,
      "%24top": options?.top,
      "%24select": options?.select,
      "%24filter": options?.filter,
      "%24orderby": options?.orderby,
      offerGuid: options?.offerGuid,
      reportCreatorTenantId: options?.reportCreatorTenantId,
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
): Promise<_WebhookResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _webhookResourceListResultDeserializer(result.body);
}

/** Get the AppComplianceAutomation webhook list. */
export function list(
  context: Client,
  reportName: string,
  options: WebhookListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<WebhookResource> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, reportName, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _$deleteSend(
  context: Client,
  reportName: string,
  webhookName: string,
  options: WebhookDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}{?api%2Dversion}",
    {
      reportName: reportName,
      webhookName: webhookName,
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
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete an AppComplianceAutomation webhook. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  reportName: string,
  webhookName: string,
  options: WebhookDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _$deleteSend(context, reportName, webhookName, options);
  return _$deleteDeserialize(result);
}

export function _updateSend(
  context: Client,
  reportName: string,
  webhookName: string,
  properties: WebhookResourcePatch,
  options: WebhookUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}{?api%2Dversion}",
    {
      reportName: reportName,
      webhookName: webhookName,
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
    body: webhookResourcePatchSerializer(properties),
  });
}

export async function _updateDeserialize(result: PathUncheckedResponse): Promise<WebhookResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return webhookResourceDeserializer(result.body);
}

/** Update an exiting AppComplianceAutomation webhook. */
export async function update(
  context: Client,
  reportName: string,
  webhookName: string,
  properties: WebhookResourcePatch,
  options: WebhookUpdateOptionalParams = { requestOptions: {} },
): Promise<WebhookResource> {
  const result = await _updateSend(context, reportName, webhookName, properties, options);
  return _updateDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  reportName: string,
  webhookName: string,
  properties: WebhookResource,
  options: WebhookCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}{?api%2Dversion}",
    {
      reportName: reportName,
      webhookName: webhookName,
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
    body: webhookResourceSerializer(properties),
  });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<WebhookResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return webhookResourceDeserializer(result.body);
}

/** Create a new AppComplianceAutomation webhook or update an exiting AppComplianceAutomation webhook. */
export async function createOrUpdate(
  context: Client,
  reportName: string,
  webhookName: string,
  properties: WebhookResource,
  options: WebhookCreateOrUpdateOptionalParams = { requestOptions: {} },
): Promise<WebhookResource> {
  const result = await _createOrUpdateSend(context, reportName, webhookName, properties, options);
  return _createOrUpdateDeserialize(result);
}

export function _getSend(
  context: Client,
  reportName: string,
  webhookName: string,
  options: WebhookGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}{?api%2Dversion}",
    {
      reportName: reportName,
      webhookName: webhookName,
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

export async function _getDeserialize(result: PathUncheckedResponse): Promise<WebhookResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return webhookResourceDeserializer(result.body);
}

/** Get the AppComplianceAutomation webhook and its properties. */
export async function get(
  context: Client,
  reportName: string,
  webhookName: string,
  options: WebhookGetOptionalParams = { requestOptions: {} },
): Promise<WebhookResource> {
  const result = await _getSend(context, reportName, webhookName, options);
  return _getDeserialize(result);
}
