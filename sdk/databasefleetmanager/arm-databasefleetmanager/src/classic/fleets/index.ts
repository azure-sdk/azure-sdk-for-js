// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseFleetManagerContext } from "../../api/databaseFleetManagerContext.js";
import { Fleet, FleetUpdate } from "../../models/models.js";
import {
  FleetsListOptionalParams,
  FleetsListByResourceGroupOptionalParams,
  FleetsDeleteOptionalParams,
  FleetsUpdateOptionalParams,
  FleetsCreateOrUpdateOptionalParams,
  FleetsGetOptionalParams,
} from "../../api/fleets/options.js";
import {
  list,
  listByResourceGroup,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/fleets/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Fleets operations. */
export interface FleetsOperations {
  /** Gets all fleets in a subscription. */
  list: (options?: FleetsListOptionalParams) => PagedAsyncIterableIterator<Fleet>;
  /** Gets all fleets in a resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: FleetsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Fleet>;
  /** Deletes a fleet. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    fleetName: string,
    options?: FleetsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Modifies a fleet resource. */
  update: (
    resourceGroupName: string,
    fleetName: string,
    properties: FleetUpdate,
    options?: FleetsUpdateOptionalParams,
  ) => PollerLike<OperationState<Fleet>, Fleet>;
  /** Creates or updates a fleet resource. */
  createOrUpdate: (
    resourceGroupName: string,
    fleetName: string,
    resource: Fleet,
    options?: FleetsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Fleet>, Fleet>;
  /** Gets a fleet resource. */
  get: (
    resourceGroupName: string,
    fleetName: string,
    options?: FleetsGetOptionalParams,
  ) => Promise<Fleet>;
}

function _getFleets(context: DatabaseFleetManagerContext) {
  return {
    list: (options?: FleetsListOptionalParams) => list(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: FleetsListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (resourceGroupName: string, fleetName: string, options?: FleetsDeleteOptionalParams) =>
      $delete(context, resourceGroupName, fleetName, options),
    update: (
      resourceGroupName: string,
      fleetName: string,
      properties: FleetUpdate,
      options?: FleetsUpdateOptionalParams,
    ) => update(context, resourceGroupName, fleetName, properties, options),
    createOrUpdate: (
      resourceGroupName: string,
      fleetName: string,
      resource: Fleet,
      options?: FleetsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, fleetName, resource, options),
    get: (resourceGroupName: string, fleetName: string, options?: FleetsGetOptionalParams) =>
      get(context, resourceGroupName, fleetName, options),
  };
}

export function _getFleetsOperations(context: DatabaseFleetManagerContext): FleetsOperations {
  return {
    ..._getFleets(context),
  };
}
