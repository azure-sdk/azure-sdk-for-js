// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationContext } from "../../api/appComplianceAutomationContext.js";
import {
  WebhookGetOptionalParams,
  WebhookCreateOrUpdateOptionalParams,
  WebhookUpdateOptionalParams,
  WebhookDeleteOptionalParams,
  WebhookListOptionalParams,
} from "../../api/options.js";
import {
  webhookGet,
  webhookCreateOrUpdate,
  webhookUpdate,
  webhookDelete,
  webhookList,
} from "../../api/webhook/index.js";
import { WebhookResource, WebhookResourcePatch } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a Webhook operations. */
export interface WebhookOperations {
  /** Get the AppComplianceAutomation webhook and its properties. */
  get: (
    reportName: string,
    webhookName: string,
    options?: WebhookGetOptionalParams,
  ) => Promise<WebhookResource>;
  /** Create a new AppComplianceAutomation webhook or update an exiting AppComplianceAutomation webhook. */
  createOrUpdate: (
    reportName: string,
    webhookName: string,
    properties: WebhookResource,
    options?: WebhookCreateOrUpdateOptionalParams,
  ) => Promise<WebhookResource>;
  /** Update an exiting AppComplianceAutomation webhook. */
  update: (
    reportName: string,
    webhookName: string,
    properties: WebhookResourcePatch,
    options?: WebhookUpdateOptionalParams,
  ) => Promise<WebhookResource>;
  /** Delete an AppComplianceAutomation webhook. */
  delete: (
    reportName: string,
    webhookName: string,
    options?: WebhookDeleteOptionalParams,
  ) => Promise<void>;
  /** Get the AppComplianceAutomation webhook list. */
  list: (
    reportName: string,
    options?: WebhookListOptionalParams,
  ) => PagedAsyncIterableIterator<WebhookResource>;
}

export function getWebhook(context: AppComplianceAutomationContext) {
  return {
    get: (
      reportName: string,
      webhookName: string,
      options?: WebhookGetOptionalParams,
    ) => webhookGet(context, reportName, webhookName, options),
    createOrUpdate: (
      reportName: string,
      webhookName: string,
      properties: WebhookResource,
      options?: WebhookCreateOrUpdateOptionalParams,
    ) =>
      webhookCreateOrUpdate(
        context,
        reportName,
        webhookName,
        properties,
        options,
      ),
    update: (
      reportName: string,
      webhookName: string,
      properties: WebhookResourcePatch,
      options?: WebhookUpdateOptionalParams,
    ) => webhookUpdate(context, reportName, webhookName, properties, options),
    delete: (
      reportName: string,
      webhookName: string,
      options?: WebhookDeleteOptionalParams,
    ) => webhookDelete(context, reportName, webhookName, options),
    list: (reportName: string, options?: WebhookListOptionalParams) =>
      webhookList(context, reportName, options),
  };
}

export function getWebhookOperations(
  context: AppComplianceAutomationContext,
): WebhookOperations {
  return {
    ...getWebhook(context),
  };
}
