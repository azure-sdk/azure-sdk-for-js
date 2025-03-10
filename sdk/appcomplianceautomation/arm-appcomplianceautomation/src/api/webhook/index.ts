// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AppComplianceAutomationContext as Client,
  WebhookCreateOrUpdateOptionalParams,
  WebhookDeleteOptionalParams,
  WebhookGetOptionalParams,
  WebhookListOptionalParams,
  WebhookUpdateOptionalParams,
} from "../index.js";
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

export function _webhookListSend(
  context: Client,
  reportName: string,
  options: WebhookListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks{?api-version,$skipToken,$top,$select,$filter,$orderby,offerGuid,reportCreatorTenantId}",
    {
      reportName: reportName,
      "api-version": context.apiVersion,
      $skipToken: options?.skipToken,
      $top: options?.top,
      $select: options?.select,
      $filter: options?.filter,
      $orderby: options?.orderby,
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

export async function _webhookListDeserialize(
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
export function webhookList(
  context: Client,
  reportName: string,
  options: WebhookListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<WebhookResource> {
  return buildPagedAsyncIterator(
    context,
    () => _webhookListSend(context, reportName, options),
    _webhookListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _webhookDeleteSend(
  context: Client,
  reportName: string,
  webhookName: string,
  options: WebhookDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}{?api-version}",
    {
      reportName: reportName,
      webhookName: webhookName,
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

export async function _webhookDeleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete an AppComplianceAutomation webhook. */
export async function webhookDelete(
  context: Client,
  reportName: string,
  webhookName: string,
  options: WebhookDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _webhookDeleteSend(context, reportName, webhookName, options);
  return _webhookDeleteDeserialize(result);
}

export function _webhookUpdateSend(
  context: Client,
  reportName: string,
  webhookName: string,
  properties: WebhookResourcePatch,
  options: WebhookUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}{?api-version}",
    {
      reportName: reportName,
      webhookName: webhookName,
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
    body: webhookResourcePatchSerializer(properties),
  });
}

export async function _webhookUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<WebhookResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return webhookResourceDeserializer(result.body);
}

/** Update an exiting AppComplianceAutomation webhook. */
export async function webhookUpdate(
  context: Client,
  reportName: string,
  webhookName: string,
  properties: WebhookResourcePatch,
  options: WebhookUpdateOptionalParams = { requestOptions: {} },
): Promise<WebhookResource> {
  const result = await _webhookUpdateSend(context, reportName, webhookName, properties, options);
  return _webhookUpdateDeserialize(result);
}

export function _webhookCreateOrUpdateSend(
  context: Client,
  reportName: string,
  webhookName: string,
  properties: WebhookResource,
  options: WebhookCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}{?api-version}",
    {
      reportName: reportName,
      webhookName: webhookName,
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
    body: webhookResourceSerializer(properties),
  });
}

export async function _webhookCreateOrUpdateDeserialize(
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
export async function webhookCreateOrUpdate(
  context: Client,
  reportName: string,
  webhookName: string,
  properties: WebhookResource,
  options: WebhookCreateOrUpdateOptionalParams = { requestOptions: {} },
): Promise<WebhookResource> {
  const result = await _webhookCreateOrUpdateSend(
    context,
    reportName,
    webhookName,
    properties,
    options,
  );
  return _webhookCreateOrUpdateDeserialize(result);
}

export function _webhookGetSend(
  context: Client,
  reportName: string,
  webhookName: string,
  options: WebhookGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}{?api-version}",
    {
      reportName: reportName,
      webhookName: webhookName,
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

export async function _webhookGetDeserialize(
  result: PathUncheckedResponse,
): Promise<WebhookResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return webhookResourceDeserializer(result.body);
}

/** Get the AppComplianceAutomation webhook and its properties. */
export async function webhookGet(
  context: Client,
  reportName: string,
  webhookName: string,
  options: WebhookGetOptionalParams = { requestOptions: {} },
): Promise<WebhookResource> {
  const result = await _webhookGetSend(context, reportName, webhookName, options);
  return _webhookGetDeserialize(result);
}
