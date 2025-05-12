// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MaintenanceContext } from "../../api/maintenanceContext.js";
import { ConfigurationAssignment } from "../../models/models.js";
import {
  ConfigurationAssignmentsForSubscriptionsListOptionalParams,
  ConfigurationAssignmentsForSubscriptionsDeleteOptionalParams,
  ConfigurationAssignmentsForSubscriptionsUpdateOptionalParams,
  ConfigurationAssignmentsForSubscriptionsCreateOrUpdateOptionalParams,
  ConfigurationAssignmentsForSubscriptionsGetOptionalParams,
} from "../../api/configurationAssignmentsForSubscriptions/options.js";
import {
  list,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/configurationAssignmentsForSubscriptions/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a ConfigurationAssignmentsForSubscriptions operations. */
export interface ConfigurationAssignmentsForSubscriptionsOperations {
  /** [UNSUPPORTED] Get configuration assignment within a subscription. This API is not implemented yet. */
  list: (
    options?: ConfigurationAssignmentsForSubscriptionsListOptionalParams,
  ) => PagedAsyncIterableIterator<ConfigurationAssignment>;
  /** Unregister configuration for resource. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    configurationAssignmentName: string,
    options?: ConfigurationAssignmentsForSubscriptionsDeleteOptionalParams,
  ) => Promise<ConfigurationAssignment | null>;
  /** Register configuration for resource. */
  update: (
    configurationAssignmentName: string,
    configurationAssignment: ConfigurationAssignment,
    options?: ConfigurationAssignmentsForSubscriptionsUpdateOptionalParams,
  ) => Promise<ConfigurationAssignment>;
  /** Register configuration for resource. */
  createOrUpdate: (
    configurationAssignmentName: string,
    configurationAssignment: ConfigurationAssignment,
    options?: ConfigurationAssignmentsForSubscriptionsCreateOrUpdateOptionalParams,
  ) => Promise<ConfigurationAssignment>;
  /** Get configuration assignment for resource. */
  get: (
    configurationAssignmentName: string,
    options?: ConfigurationAssignmentsForSubscriptionsGetOptionalParams,
  ) => Promise<ConfigurationAssignment>;
}

function _getConfigurationAssignmentsForSubscriptions(context: MaintenanceContext) {
  return {
    list: (options?: ConfigurationAssignmentsForSubscriptionsListOptionalParams) =>
      list(context, options),
    delete: (
      configurationAssignmentName: string,
      options?: ConfigurationAssignmentsForSubscriptionsDeleteOptionalParams,
    ) => $delete(context, configurationAssignmentName, options),
    update: (
      configurationAssignmentName: string,
      configurationAssignment: ConfigurationAssignment,
      options?: ConfigurationAssignmentsForSubscriptionsUpdateOptionalParams,
    ) => update(context, configurationAssignmentName, configurationAssignment, options),
    createOrUpdate: (
      configurationAssignmentName: string,
      configurationAssignment: ConfigurationAssignment,
      options?: ConfigurationAssignmentsForSubscriptionsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, configurationAssignmentName, configurationAssignment, options),
    get: (
      configurationAssignmentName: string,
      options?: ConfigurationAssignmentsForSubscriptionsGetOptionalParams,
    ) => get(context, configurationAssignmentName, options),
  };
}

export function _getConfigurationAssignmentsForSubscriptionsOperations(
  context: MaintenanceContext,
): ConfigurationAssignmentsForSubscriptionsOperations {
  return {
    ..._getConfigurationAssignmentsForSubscriptions(context),
  };
}
