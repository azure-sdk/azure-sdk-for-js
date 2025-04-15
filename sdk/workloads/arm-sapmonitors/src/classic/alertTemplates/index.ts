// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsContext } from "../../api/workloadsContext.js";
import { AlertTemplate } from "../../models/models.js";
import {
  AlertTemplatesListOptionalParams,
  AlertTemplatesGetOptionalParams,
} from "../../api/alertTemplates/options.js";
import { list, get } from "../../api/alertTemplates/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a AlertTemplates operations. */
export interface AlertTemplatesOperations {
  /** Gets a list of alert templates in the specified SAP monitor. The operations returns various properties of each alert template. */
  list: (
    resourceGroupName: string,
    monitorName: string,
    options?: AlertTemplatesListOptionalParams,
  ) => PagedAsyncIterableIterator<AlertTemplate>;
  /** Gets properties of an alert template for the specified subscription, resource group, SAP monitor name, and resource name. */
  get: (
    resourceGroupName: string,
    monitorName: string,
    alertTemplateName: string,
    options?: AlertTemplatesGetOptionalParams,
  ) => Promise<AlertTemplate>;
}

function _getAlertTemplates(context: WorkloadsContext) {
  return {
    list: (
      resourceGroupName: string,
      monitorName: string,
      options?: AlertTemplatesListOptionalParams,
    ) => list(context, resourceGroupName, monitorName, options),
    get: (
      resourceGroupName: string,
      monitorName: string,
      alertTemplateName: string,
      options?: AlertTemplatesGetOptionalParams,
    ) => get(context, resourceGroupName, monitorName, alertTemplateName, options),
  };
}

export function _getAlertTemplatesOperations(context: WorkloadsContext): AlertTemplatesOperations {
  return {
    ..._getAlertTemplates(context),
  };
}
