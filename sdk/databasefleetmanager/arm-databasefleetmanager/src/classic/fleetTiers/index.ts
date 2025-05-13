// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseFleetManagerContext } from "../../api/databaseFleetManagerContext.js";
import { FleetTier } from "../../models/models.js";
import {
  FleetTiersDisableOptionalParams,
  FleetTiersListByFleetOptionalParams,
  FleetTiersDeleteOptionalParams,
  FleetTiersUpdateOptionalParams,
  FleetTiersCreateOrUpdateOptionalParams,
  FleetTiersGetOptionalParams,
} from "../../api/fleetTiers/options.js";
import {
  disable,
  listByFleet,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/fleetTiers/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a FleetTiers operations. */
export interface FleetTiersOperations {
  /** Disables a tier. */
  disable: (
    resourceGroupName: string,
    fleetName: string,
    tierName: string,
    options?: FleetTiersDisableOptionalParams,
  ) => Promise<FleetTier>;
  /** List tiers in a fleet. */
  listByFleet: (
    resourceGroupName: string,
    fleetName: string,
    options?: FleetTiersListByFleetOptionalParams,
  ) => PagedAsyncIterableIterator<FleetTier>;
  /** Deletes a tier. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    fleetName: string,
    tierName: string,
    options?: FleetTiersDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Updates a tier. */
  update: (
    resourceGroupName: string,
    fleetName: string,
    tierName: string,
    properties: FleetTier,
    options?: FleetTiersUpdateOptionalParams,
  ) => PollerLike<OperationState<FleetTier>, FleetTier>;
  /** Creates or updates a tier. */
  createOrUpdate: (
    resourceGroupName: string,
    fleetName: string,
    tierName: string,
    resource: FleetTier,
    options?: FleetTiersCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<FleetTier>, FleetTier>;
  /** Gets a tier resource. */
  get: (
    resourceGroupName: string,
    fleetName: string,
    tierName: string,
    options?: FleetTiersGetOptionalParams,
  ) => Promise<FleetTier>;
}

function _getFleetTiers(context: DatabaseFleetManagerContext) {
  return {
    disable: (
      resourceGroupName: string,
      fleetName: string,
      tierName: string,
      options?: FleetTiersDisableOptionalParams,
    ) => disable(context, resourceGroupName, fleetName, tierName, options),
    listByFleet: (
      resourceGroupName: string,
      fleetName: string,
      options?: FleetTiersListByFleetOptionalParams,
    ) => listByFleet(context, resourceGroupName, fleetName, options),
    delete: (
      resourceGroupName: string,
      fleetName: string,
      tierName: string,
      options?: FleetTiersDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, fleetName, tierName, options),
    update: (
      resourceGroupName: string,
      fleetName: string,
      tierName: string,
      properties: FleetTier,
      options?: FleetTiersUpdateOptionalParams,
    ) => update(context, resourceGroupName, fleetName, tierName, properties, options),
    createOrUpdate: (
      resourceGroupName: string,
      fleetName: string,
      tierName: string,
      resource: FleetTier,
      options?: FleetTiersCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, fleetName, tierName, resource, options),
    get: (
      resourceGroupName: string,
      fleetName: string,
      tierName: string,
      options?: FleetTiersGetOptionalParams,
    ) => get(context, resourceGroupName, fleetName, tierName, options),
  };
}

export function _getFleetTiersOperations(
  context: DatabaseFleetManagerContext,
): FleetTiersOperations {
  return {
    ..._getFleetTiers(context),
  };
}
