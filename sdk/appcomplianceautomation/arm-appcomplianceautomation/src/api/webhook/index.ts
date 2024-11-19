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
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _webhookGetSend(
  context: Client,
  reportName: string,
  webhookName: string,
  options: WebhookGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}",
      reportName,
      webhookName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _webhookGetDeserialize(
  result: PathUncheckedResponse,
): Promise<WebhookResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
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
  const result = await _webhookGetSend(
    context,
    reportName,
    webhookName,
    options,
  );
  return _webhookGetDeserialize(result);
}

export function _webhookCreateOrUpdateSend(
  context: Client,
  reportName: string,
  webhookName: string,
  properties: WebhookResource,
  options: WebhookCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}",
      reportName,
      webhookName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: webhookResourceSerializer(properties),
    });
}

export async function _webhookCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<WebhookResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
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

export function _webhookUpdateSend(
  context: Client,
  reportName: string,
  webhookName: string,
  properties: WebhookResourcePatch,
  options: WebhookUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}",
      reportName,
      webhookName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: webhookResourcePatchSerializer(properties),
    });
}

export async function _webhookUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<WebhookResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
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
  const result = await _webhookUpdateSend(
    context,
    reportName,
    webhookName,
    properties,
    options,
  );
  return _webhookUpdateDeserialize(result);
}

export function _webhookDeleteSend(
  context: Client,
  reportName: string,
  webhookName: string,
  options: WebhookDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}",
      reportName,
      webhookName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _webhookDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
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
  const result = await _webhookDeleteSend(
    context,
    reportName,
    webhookName,
    options,
  );
  return _webhookDeleteDeserialize(result);
}

export function _webhookListSend(
  context: Client,
  reportName: string,
  options: WebhookListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks",
      reportName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        $skipToken: options?.skipToken,
        $top: options?.top,
        $select: options?.select,
        $filter: options?.filter,
        $orderby: options?.orderby,
        offerGuid: options?.offerGuid,
        reportCreatorTenantId: options?.reportCreatorTenantId,
      },
    });
}

export async function _webhookListDeserialize(
  result: PathUncheckedResponse,
): Promise<_WebhookResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
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
