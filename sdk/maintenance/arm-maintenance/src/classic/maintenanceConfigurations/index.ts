// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MaintenanceContext } from "../../api/maintenanceContext.js";
import { MaintenanceConfiguration } from "../../models/models.js";
import {
  MaintenanceConfigurationsListOptionalParams,
  MaintenanceConfigurationsGetOptionalParams,
} from "../../api/maintenanceConfigurations/options.js";
import { list, get } from "../../api/maintenanceConfigurations/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a MaintenanceConfigurations operations. */
export interface MaintenanceConfigurationsOperations {
  /** Get Public Maintenance Configuration records */
  list: (
    options?: MaintenanceConfigurationsListOptionalParams,
  ) => PagedAsyncIterableIterator<MaintenanceConfiguration>;
  /** Get Public Maintenance Configuration record */
  get: (
    resourceName: string,
    options?: MaintenanceConfigurationsGetOptionalParams,
  ) => Promise<MaintenanceConfiguration>;
}

function _getMaintenanceConfigurations(context: MaintenanceContext) {
  return {
    list: (options?: MaintenanceConfigurationsListOptionalParams) => list(context, options),
    get: (resourceName: string, options?: MaintenanceConfigurationsGetOptionalParams) =>
      get(context, resourceName, options),
  };
}

export function _getMaintenanceConfigurationsOperations(
  context: MaintenanceContext,
): MaintenanceConfigurationsOperations {
  return {
    ..._getMaintenanceConfigurations(context),
  };
}
