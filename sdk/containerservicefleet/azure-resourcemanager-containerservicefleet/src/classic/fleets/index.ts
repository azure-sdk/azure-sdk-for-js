// Licensed under the MIT License.

import { ContainerServiceContext } from "../../api/containerServiceContext.js";
import {
  Fleet,
  FleetPatch,
  FleetCredentialResults,
} from "../../models/models.js";
import {
  FleetsListCredentialsOptionalParams,
  FleetsListBySubscriptionOptionalParams,
  FleetsListByResourceGroupOptionalParams,
  FleetsDeleteOptionalParams,
  FleetsUpdateAsyncOptionalParams,
  FleetsCreateOptionalParams,
  FleetsGetOptionalParams,
} from "../../api/fleets/options.js";
import {
  listCredentials,
  listBySubscription,
  listByResourceGroup,
  $delete,
  updateAsync,
  create,
  get,
} from "../../api/fleets/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a Fleets operations. */
export interface FleetsOperations {
  /** Lists the user credentials of a Fleet. */
  listCredentials: (
    resourceGroupName: string,
    fleetName: string,
    options?: FleetsListCredentialsOptionalParams,
  ) => Promise<FleetCredentialResults>;
  /** Lists fleets in the specified subscription. */
  listBySubscription: (
    options?: FleetsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<Fleet>;
  /** Lists fleets in the specified subscription and resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: FleetsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Fleet>;
  /** Delete a Fleet */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    fleetName: string,
    options?: FleetsDeleteOptionalParams,
  ) => __PLACEHOLDER_o122__<__PLACEHOLDER_o123__<void>, void>;
  /** Update a Fleet */
  updateAsync: (
    resourceGroupName: string,
    fleetName: string,
    properties: FleetPatch,
    options?: FleetsUpdateAsyncOptionalParams,
  ) => __PLACEHOLDER_o122__<__PLACEHOLDER_o123__<Fleet>, Fleet>;
  /** Creates or updates a Fleet. */
  create: (
    resourceGroupName: string,
    fleetName: string,
    resource: Fleet,
    options?: FleetsCreateOptionalParams,
  ) => __PLACEHOLDER_o122__<__PLACEHOLDER_o123__<Fleet>, Fleet>;
  /** Gets a Fleet. */
  get: (
    resourceGroupName: string,
    fleetName: string,
    options?: FleetsGetOptionalParams,
  ) => Promise<Fleet>;
}

function _getFleets(context: ContainerServiceContext) {
  return {
    listCredentials: (
      resourceGroupName: string,
      fleetName: string,
      options?: FleetsListCredentialsOptionalParams,
    ) => listCredentials(context, resourceGroupName, fleetName, options),
    listBySubscription: (options?: FleetsListBySubscriptionOptionalParams) =>
      listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: FleetsListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      fleetName: string,
      options?: FleetsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, fleetName, options),
    updateAsync: (
      resourceGroupName: string,
      fleetName: string,
      properties: FleetPatch,
      options?: FleetsUpdateAsyncOptionalParams,
    ) =>
      updateAsync(context, resourceGroupName, fleetName, properties, options),
    create: (
      resourceGroupName: string,
      fleetName: string,
      resource: Fleet,
      options?: FleetsCreateOptionalParams,
    ) => create(context, resourceGroupName, fleetName, resource, options),
    get: (
      resourceGroupName: string,
      fleetName: string,
      options?: FleetsGetOptionalParams,
    ) => get(context, resourceGroupName, fleetName, options),
  };
}

export function _getFleetsOperations(
  context: ContainerServiceContext,
): FleetsOperations {
  return {
    ..._getFleets(context),
  };
}
