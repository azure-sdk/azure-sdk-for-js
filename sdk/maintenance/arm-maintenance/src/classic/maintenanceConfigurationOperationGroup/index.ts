// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MaintenanceContext } from "../../api/maintenanceContext.js";
import { MaintenanceConfiguration } from "../../models/models.js";
import {
  MaintenanceConfigurationOperationGroupMaintenanceConfigurationsListOptionalParams,
  MaintenanceConfigurationOperationGroupListOptionalParams,
  MaintenanceConfigurationOperationGroupDeleteOptionalParams,
  MaintenanceConfigurationOperationGroupUpdateOptionalParams,
  MaintenanceConfigurationOperationGroupCreateOrUpdateOptionalParams,
  MaintenanceConfigurationOperationGroupGetOptionalParams,
} from "../../api/maintenanceConfigurationOperationGroup/options.js";
import {
  maintenanceConfigurationsList,
  list,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/maintenanceConfigurationOperationGroup/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a MaintenanceConfigurationOperationGroup operations. */
export interface MaintenanceConfigurationOperationGroupOperations {
  /** Get Configuration records within a subscription */
  maintenanceConfigurationsList: (
    options?: MaintenanceConfigurationOperationGroupMaintenanceConfigurationsListOptionalParams,
  ) => PagedAsyncIterableIterator<MaintenanceConfiguration>;
  /** Get Configuration records within a subscription and resource group */
  list: (
    resourceGroupName: string,
    options?: MaintenanceConfigurationOperationGroupListOptionalParams,
  ) => PagedAsyncIterableIterator<MaintenanceConfiguration>;
  /** Delete Configuration record */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    resourceName: string,
    options?: MaintenanceConfigurationOperationGroupDeleteOptionalParams,
  ) => Promise<MaintenanceConfiguration | null>;
  /** Patch configuration record */
  update: (
    resourceGroupName: string,
    resourceName: string,
    configuration: MaintenanceConfiguration,
    options?: MaintenanceConfigurationOperationGroupUpdateOptionalParams,
  ) => Promise<MaintenanceConfiguration>;
  /** Create or Update configuration record */
  createOrUpdate: (
    resourceGroupName: string,
    resourceName: string,
    configuration: MaintenanceConfiguration,
    options?: MaintenanceConfigurationOperationGroupCreateOrUpdateOptionalParams,
  ) => Promise<MaintenanceConfiguration>;
  /** Get Configuration record */
  get: (
    resourceGroupName: string,
    resourceName: string,
    options?: MaintenanceConfigurationOperationGroupGetOptionalParams,
  ) => Promise<MaintenanceConfiguration>;
}

function _getMaintenanceConfigurationOperationGroup(context: MaintenanceContext) {
  return {
    maintenanceConfigurationsList: (
      options?: MaintenanceConfigurationOperationGroupMaintenanceConfigurationsListOptionalParams,
    ) => maintenanceConfigurationsList(context, options),
    list: (
      resourceGroupName: string,
      options?: MaintenanceConfigurationOperationGroupListOptionalParams,
    ) => list(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      resourceName: string,
      options?: MaintenanceConfigurationOperationGroupDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, resourceName, options),
    update: (
      resourceGroupName: string,
      resourceName: string,
      configuration: MaintenanceConfiguration,
      options?: MaintenanceConfigurationOperationGroupUpdateOptionalParams,
    ) => update(context, resourceGroupName, resourceName, configuration, options),
    createOrUpdate: (
      resourceGroupName: string,
      resourceName: string,
      configuration: MaintenanceConfiguration,
      options?: MaintenanceConfigurationOperationGroupCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, resourceName, configuration, options),
    get: (
      resourceGroupName: string,
      resourceName: string,
      options?: MaintenanceConfigurationOperationGroupGetOptionalParams,
    ) => get(context, resourceGroupName, resourceName, options),
  };
}

export function _getMaintenanceConfigurationOperationGroupOperations(
  context: MaintenanceContext,
): MaintenanceConfigurationOperationGroupOperations {
  return {
    ..._getMaintenanceConfigurationOperationGroup(context),
  };
}
