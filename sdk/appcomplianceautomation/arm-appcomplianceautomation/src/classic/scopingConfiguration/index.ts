// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationContext } from "../../api/appComplianceAutomationContext.js";
import {
  ScopingConfigurationGetOptionalParams,
  ScopingConfigurationCreateOrUpdateOptionalParams,
  ScopingConfigurationDeleteOptionalParams,
  ScopingConfigurationListOptionalParams,
} from "../../api/options.js";
import {
  scopingConfigurationGet,
  scopingConfigurationCreateOrUpdate,
  scopingConfigurationDelete,
  scopingConfigurationList,
} from "../../api/scopingConfiguration/index.js";
import { ScopingConfigurationResource } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a ScopingConfiguration operations. */
export interface ScopingConfigurationOperations {
  /** Get the AppComplianceAutomation scoping configuration of the specific report. */
  get: (
    reportName: string,
    scopingConfigurationName: string,
    options?: ScopingConfigurationGetOptionalParams,
  ) => Promise<ScopingConfigurationResource>;
  /** Get the AppComplianceAutomation scoping configuration of the specific report. */
  createOrUpdate: (
    reportName: string,
    scopingConfigurationName: string,
    properties: ScopingConfigurationResource,
    options?: ScopingConfigurationCreateOrUpdateOptionalParams,
  ) => Promise<ScopingConfigurationResource>;
  /** Clean the AppComplianceAutomation scoping configuration of the specific report. */
  delete: (
    reportName: string,
    scopingConfigurationName: string,
    options?: ScopingConfigurationDeleteOptionalParams,
  ) => Promise<void>;
  /** Returns a list format of the singleton scopingConfiguration for a specified report. */
  list: (
    reportName: string,
    options?: ScopingConfigurationListOptionalParams,
  ) => PagedAsyncIterableIterator<ScopingConfigurationResource>;
}

export function getScopingConfiguration(
  context: AppComplianceAutomationContext,
) {
  return {
    get: (
      reportName: string,
      scopingConfigurationName: string,
      options?: ScopingConfigurationGetOptionalParams,
    ) =>
      scopingConfigurationGet(
        context,
        reportName,
        scopingConfigurationName,
        options,
      ),
    createOrUpdate: (
      reportName: string,
      scopingConfigurationName: string,
      properties: ScopingConfigurationResource,
      options?: ScopingConfigurationCreateOrUpdateOptionalParams,
    ) =>
      scopingConfigurationCreateOrUpdate(
        context,
        reportName,
        scopingConfigurationName,
        properties,
        options,
      ),
    delete: (
      reportName: string,
      scopingConfigurationName: string,
      options?: ScopingConfigurationDeleteOptionalParams,
    ) =>
      scopingConfigurationDelete(
        context,
        reportName,
        scopingConfigurationName,
        options,
      ),
    list: (
      reportName: string,
      options?: ScopingConfigurationListOptionalParams,
    ) => scopingConfigurationList(context, reportName, options),
  };
}

export function getScopingConfigurationOperations(
  context: AppComplianceAutomationContext,
): ScopingConfigurationOperations {
  return {
    ...getScopingConfiguration(context),
  };
}
