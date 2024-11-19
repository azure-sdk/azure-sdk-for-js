// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsContext } from "../../api/workloadsContext.js";
import {
  alertTemplatesGet,
  alertTemplatesList,
} from "../../api/alertTemplates/index.js";
import { AlertTemplate } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  AlertTemplatesGetOptionalParams,
  AlertTemplatesListOptionalParams,
} from "../../api/options.js";

/** Interface representing a AlertTemplates operations. */
export interface AlertTemplatesOperations {
  /** Gets properties of an alert template for the specified subscription, resource group, SAP monitor name, and resource name. */
  get: (
    resourceGroupName: string,
    monitorName: string,
    alertTemplateName: string,
    options?: AlertTemplatesGetOptionalParams,
  ) => Promise<AlertTemplate>;
  /** Gets a list of alert templates in the specified SAP monitor. The operations returns various properties of each alert template. */
  list: (
    resourceGroupName: string,
    monitorName: string,
    options?: AlertTemplatesListOptionalParams,
  ) => PagedAsyncIterableIterator<AlertTemplate>;
}

export function getAlertTemplates(
  context: WorkloadsContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      monitorName: string,
      alertTemplateName: string,
      options?: AlertTemplatesGetOptionalParams,
    ) =>
      alertTemplatesGet(
        context,
        subscriptionId,
        resourceGroupName,
        monitorName,
        alertTemplateName,
        options,
      ),
    list: (
      resourceGroupName: string,
      monitorName: string,
      options?: AlertTemplatesListOptionalParams,
    ) =>
      alertTemplatesList(
        context,
        subscriptionId,
        resourceGroupName,
        monitorName,
        options,
      ),
  };
}

export function getAlertTemplatesOperations(
  context: WorkloadsContext,
  subscriptionId: string,
): AlertTemplatesOperations {
  return {
    ...getAlertTemplates(context, subscriptionId),
  };
}
