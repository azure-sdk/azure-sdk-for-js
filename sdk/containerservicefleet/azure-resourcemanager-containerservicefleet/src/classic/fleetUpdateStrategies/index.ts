// Licensed under the MIT License.

import { ContainerServiceContext } from "../../api/containerServiceContext.js";
import { FleetUpdateStrategy } from "../../models/models.js";
import {
  FleetUpdateStrategiesListByFleetOptionalParams,
  FleetUpdateStrategiesDeleteOptionalParams,
  FleetUpdateStrategiesCreateOrUpdateOptionalParams,
  FleetUpdateStrategiesGetOptionalParams,
} from "../../api/fleetUpdateStrategies/options.js";
import {
  listByFleet,
  $delete,
  createOrUpdate,
  get,
} from "../../api/fleetUpdateStrategies/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a FleetUpdateStrategies operations. */
export interface FleetUpdateStrategiesOperations {
  /** List FleetUpdateStrategy resources by Fleet */
  listByFleet: (
    resourceGroupName: string,
    fleetName: string,
    options?: FleetUpdateStrategiesListByFleetOptionalParams,
  ) => PagedAsyncIterableIterator<FleetUpdateStrategy>;
  /** Delete a FleetUpdateStrategy */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    fleetName: string,
    updateStrategyName: string,
    options?: FleetUpdateStrategiesDeleteOptionalParams,
  ) => __PLACEHOLDER_o122__<__PLACEHOLDER_o123__<void>, void>;
  /** Create a FleetUpdateStrategy */
  createOrUpdate: (
    resourceGroupName: string,
    fleetName: string,
    updateStrategyName: string,
    resource: FleetUpdateStrategy,
    options?: FleetUpdateStrategiesCreateOrUpdateOptionalParams,
  ) => __PLACEHOLDER_o122__<
    __PLACEHOLDER_o123__<FleetUpdateStrategy>,
    FleetUpdateStrategy
  >;
  /** Get a FleetUpdateStrategy */
  get: (
    resourceGroupName: string,
    fleetName: string,
    updateStrategyName: string,
    options?: FleetUpdateStrategiesGetOptionalParams,
  ) => Promise<FleetUpdateStrategy>;
}

function _getFleetUpdateStrategies(context: ContainerServiceContext) {
  return {
    listByFleet: (
      resourceGroupName: string,
      fleetName: string,
      options?: FleetUpdateStrategiesListByFleetOptionalParams,
    ) => listByFleet(context, resourceGroupName, fleetName, options),
    delete: (
      resourceGroupName: string,
      fleetName: string,
      updateStrategyName: string,
      options?: FleetUpdateStrategiesDeleteOptionalParams,
    ) =>
      $delete(
        context,
        resourceGroupName,
        fleetName,
        updateStrategyName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      fleetName: string,
      updateStrategyName: string,
      resource: FleetUpdateStrategy,
      options?: FleetUpdateStrategiesCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        fleetName,
        updateStrategyName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      fleetName: string,
      updateStrategyName: string,
      options?: FleetUpdateStrategiesGetOptionalParams,
    ) =>
      get(context, resourceGroupName, fleetName, updateStrategyName, options),
  };
}

export function _getFleetUpdateStrategiesOperations(
  context: ContainerServiceContext,
): FleetUpdateStrategiesOperations {
  return {
    ..._getFleetUpdateStrategies(context),
  };
}
