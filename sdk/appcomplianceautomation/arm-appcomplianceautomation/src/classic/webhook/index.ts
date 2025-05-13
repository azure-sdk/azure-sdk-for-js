// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationContext } from "../../api/appComplianceAutomationContext.js";
import { WebhookResource, WebhookResourcePatch } from "../../models/models.js";
import {
  WebhookListOptionalParams,
  WebhookDeleteOptionalParams,
  WebhookUpdateOptionalParams,
  WebhookCreateOrUpdateOptionalParams,
  WebhookGetOptionalParams,
} from "../../api/webhook/options.js";
import { list, $delete, update, createOrUpdate, get } from "../../api/webhook/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a Webhook operations. */
export interface WebhookOperations {
  /** Get the AppComplianceAutomation webhook list. */
  list: (
    reportName: string,
    options?: WebhookListOptionalParams,
  ) => PagedAsyncIterableIterator<WebhookResource>;
  /** Delete an AppComplianceAutomation webhook. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    reportName: string,
    webhookName: string,
    options?: WebhookDeleteOptionalParams,
  ) => Promise<void>;
  /** Update an exiting AppComplianceAutomation webhook. */
  update: (
    reportName: string,
    webhookName: string,
    properties: WebhookResourcePatch,
    options?: WebhookUpdateOptionalParams,
  ) => Promise<WebhookResource>;
  /** Create a new AppComplianceAutomation webhook or update an exiting AppComplianceAutomation webhook. */
  createOrUpdate: (
    reportName: string,
    webhookName: string,
    properties: WebhookResource,
    options?: WebhookCreateOrUpdateOptionalParams,
  ) => Promise<WebhookResource>;
  /** Get the AppComplianceAutomation webhook and its properties. */
  get: (
    reportName: string,
    webhookName: string,
    options?: WebhookGetOptionalParams,
  ) => Promise<WebhookResource>;
}

function _getWebhook(context: AppComplianceAutomationContext) {
  return {
    list: (reportName: string, options?: WebhookListOptionalParams) =>
      list(context, reportName, options),
    delete: (reportName: string, webhookName: string, options?: WebhookDeleteOptionalParams) =>
      $delete(context, reportName, webhookName, options),
    update: (
      reportName: string,
      webhookName: string,
      properties: WebhookResourcePatch,
      options?: WebhookUpdateOptionalParams,
    ) => update(context, reportName, webhookName, properties, options),
    createOrUpdate: (
      reportName: string,
      webhookName: string,
      properties: WebhookResource,
      options?: WebhookCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, reportName, webhookName, properties, options),
    get: (reportName: string, webhookName: string, options?: WebhookGetOptionalParams) =>
      get(context, reportName, webhookName, options),
  };
}

export function _getWebhookOperations(context: AppComplianceAutomationContext): WebhookOperations {
  return {
    ..._getWebhook(context),
  };
}
