// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  webhookPropertiesSerializer,
  WebhookResource,
  WebhookResourcePatch,
  _WebhookResourceListResult,
} from "../../models/models.js";
import { AppComplianceAutomationContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  WebhookGetOptionalParams,
  WebhookCreateOrUpdateOptionalParams,
  WebhookUpdateOptionalParams,
  WebhookDeleteOptionalParams,
  WebhookListOptionalParams,
} from "../../models/options.js";

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

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: {
      webhookId: result.body.properties["webhookId"],
      status: result.body.properties["status"],
      tenantId: result.body.properties["tenantId"],
      sendAllEvents: result.body.properties["sendAllEvents"],
      events: result.body.properties["events"],
      payloadUrl: result.body.properties["payloadUrl"],
      contentType: result.body.properties["contentType"],
      webhookKey: result.body.properties["webhookKey"],
      updateWebhookKey: result.body.properties["updateWebhookKey"],
      webhookKeyEnabled: result.body.properties["webhookKeyEnabled"],
      enableSslVerification: result.body.properties["enableSslVerification"],
      deliveryStatus: result.body.properties["deliveryStatus"],
      provisioningState: result.body.properties["provisioningState"],
    },
  };
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
      body: { properties: webhookPropertiesSerializer(properties.properties) },
    });
}

export async function _webhookCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<WebhookResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: {
      webhookId: result.body.properties["webhookId"],
      status: result.body.properties["status"],
      tenantId: result.body.properties["tenantId"],
      sendAllEvents: result.body.properties["sendAllEvents"],
      events: result.body.properties["events"],
      payloadUrl: result.body.properties["payloadUrl"],
      contentType: result.body.properties["contentType"],
      webhookKey: result.body.properties["webhookKey"],
      updateWebhookKey: result.body.properties["updateWebhookKey"],
      webhookKeyEnabled: result.body.properties["webhookKeyEnabled"],
      enableSslVerification: result.body.properties["enableSslVerification"],
      deliveryStatus: result.body.properties["deliveryStatus"],
      provisioningState: result.body.properties["provisioningState"],
    },
  };
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
      body: {
        properties: !properties.properties
          ? properties.properties
          : webhookPropertiesSerializer(properties.properties),
      },
    });
}

export async function _webhookUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<WebhookResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: {
      webhookId: result.body.properties["webhookId"],
      status: result.body.properties["status"],
      tenantId: result.body.properties["tenantId"],
      sendAllEvents: result.body.properties["sendAllEvents"],
      events: result.body.properties["events"],
      payloadUrl: result.body.properties["payloadUrl"],
      contentType: result.body.properties["contentType"],
      webhookKey: result.body.properties["webhookKey"],
      updateWebhookKey: result.body.properties["updateWebhookKey"],
      webhookKeyEnabled: result.body.properties["webhookKeyEnabled"],
      enableSslVerification: result.body.properties["enableSslVerification"],
      deliveryStatus: result.body.properties["deliveryStatus"],
      provisioningState: result.body.properties["provisioningState"],
    },
  };
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

  return {
    value: result.body["value"].map((p: any) => {
      return {
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"],
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.["lastModifiedByType"],
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        properties: {
          webhookId: p.properties["webhookId"],
          status: p.properties["status"],
          tenantId: p.properties["tenantId"],
          sendAllEvents: p.properties["sendAllEvents"],
          events: p.properties["events"],
          payloadUrl: p.properties["payloadUrl"],
          contentType: p.properties["contentType"],
          webhookKey: p.properties["webhookKey"],
          updateWebhookKey: p.properties["updateWebhookKey"],
          webhookKeyEnabled: p.properties["webhookKeyEnabled"],
          enableSslVerification: p.properties["enableSslVerification"],
          deliveryStatus: p.properties["deliveryStatus"],
          provisioningState: p.properties["provisioningState"],
        },
      };
    }),
    nextLink: result.body["nextLink"],
  };
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
