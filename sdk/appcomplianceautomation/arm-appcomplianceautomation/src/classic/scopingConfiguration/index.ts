// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationContext } from "../../api/appComplianceAutomationContext.js";
import { ScopingConfigurationResource } from "../../models/models.js";
import {
  ScopingConfigurationListOptionalParams,
  ScopingConfigurationDeleteOptionalParams,
  ScopingConfigurationCreateOrUpdateOptionalParams,
  ScopingConfigurationGetOptionalParams,
} from "../../api/scopingConfiguration/options.js";
import { list, $delete, createOrUpdate, get } from "../../api/scopingConfiguration/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a ScopingConfiguration operations. */
export interface ScopingConfigurationOperations {
  /** Returns a list format of the singleton scopingConfiguration for a specified report. */
  list: (
    reportName: string,
    options?: ScopingConfigurationListOptionalParams,
  ) => PagedAsyncIterableIterator<ScopingConfigurationResource>;
  /** Clean the AppComplianceAutomation scoping configuration of the specific report. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    reportName: string,
    scopingConfigurationName: string,
    options?: ScopingConfigurationDeleteOptionalParams,
  ) => Promise<void>;
  /** Get the AppComplianceAutomation scoping configuration of the specific report. */
  createOrUpdate: (
    reportName: string,
    scopingConfigurationName: string,
    properties: ScopingConfigurationResource,
    options?: ScopingConfigurationCreateOrUpdateOptionalParams,
  ) => Promise<ScopingConfigurationResource>;
  /** Get the AppComplianceAutomation scoping configuration of the specific report. */
  get: (
    reportName: string,
    scopingConfigurationName: string,
    options?: ScopingConfigurationGetOptionalParams,
  ) => Promise<ScopingConfigurationResource>;
}

function _getScopingConfiguration(context: AppComplianceAutomationContext) {
  return {
    list: (reportName: string, options?: ScopingConfigurationListOptionalParams) =>
      list(context, reportName, options),
    delete: (
      reportName: string,
      scopingConfigurationName: string,
      options?: ScopingConfigurationDeleteOptionalParams,
    ) => $delete(context, reportName, scopingConfigurationName, options),
    createOrUpdate: (
      reportName: string,
      scopingConfigurationName: string,
      properties: ScopingConfigurationResource,
      options?: ScopingConfigurationCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, reportName, scopingConfigurationName, properties, options),
    get: (
      reportName: string,
      scopingConfigurationName: string,
      options?: ScopingConfigurationGetOptionalParams,
    ) => get(context, reportName, scopingConfigurationName, options),
  };
}

export function _getScopingConfigurationOperations(
  context: AppComplianceAutomationContext,
): ScopingConfigurationOperations {
  return {
    ..._getScopingConfiguration(context),
  };
}
