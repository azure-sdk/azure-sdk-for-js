// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseFleetManagerContext } from "../../api/databaseFleetManagerContext.js";
import {
  fleetspacesUnregister,
  fleetspacesRegisterServer,
  fleetspacesListByFleet,
  fleetspacesDelete,
  fleetspacesUpdate,
  fleetspacesCreateOrUpdate,
  fleetspacesGet,
} from "../../api/fleetspaces/index.js";
import {
  FleetspacesUnregisterOptionalParams,
  FleetspacesRegisterServerOptionalParams,
  FleetspacesListByFleetOptionalParams,
  FleetspacesDeleteOptionalParams,
  FleetspacesUpdateOptionalParams,
  FleetspacesCreateOrUpdateOptionalParams,
  FleetspacesGetOptionalParams,
} from "../../api/options.js";
import { Fleetspace, RegisterServerProperties } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Fleetspaces operations. */
export interface FleetspacesOperations {
  /** Unregisters all databases from a fleetspace */
  unregister: (
    resourceGroupName: string,
    fleetName: string,
    fleetspaceName: string,
    options?: FleetspacesUnregisterOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Migrates an existing logical server into fleet. */
  registerServer: (
    resourceGroupName: string,
    fleetName: string,
    fleetspaceName: string,
    body: RegisterServerProperties,
    options?: FleetspacesRegisterServerOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Lists fleetspaces in a fleet. */
  listByFleet: (
    resourceGroupName: string,
    fleetName: string,
    options?: FleetspacesListByFleetOptionalParams,
  ) => PagedAsyncIterableIterator<Fleetspace>;
  /** Deletes a fleetspace. */
  delete: (
    resourceGroupName: string,
    fleetName: string,
    fleetspaceName: string,
    options?: FleetspacesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Modifies a fleetspace resource. */
  update: (
    resourceGroupName: string,
    fleetName: string,
    fleetspaceName: string,
    properties: Fleetspace,
    options?: FleetspacesUpdateOptionalParams,
  ) => PollerLike<OperationState<Fleetspace>, Fleetspace>;
  /** Creates or updates a fleetspace resource. */
  createOrUpdate: (
    resourceGroupName: string,
    fleetName: string,
    fleetspaceName: string,
    resource: Fleetspace,
    options?: FleetspacesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Fleetspace>, Fleetspace>;
  /** Gets fleetspace resource. */
  get: (
    resourceGroupName: string,
    fleetName: string,
    fleetspaceName: string,
    options?: FleetspacesGetOptionalParams,
  ) => Promise<Fleetspace>;
}

function _getFleetspaces(context: DatabaseFleetManagerContext) {
  return {
    unregister: (
      resourceGroupName: string,
      fleetName: string,
      fleetspaceName: string,
      options?: FleetspacesUnregisterOptionalParams,
    ) => fleetspacesUnregister(context, resourceGroupName, fleetName, fleetspaceName, options),
    registerServer: (
      resourceGroupName: string,
      fleetName: string,
      fleetspaceName: string,
      body: RegisterServerProperties,
      options?: FleetspacesRegisterServerOptionalParams,
    ) =>
      fleetspacesRegisterServer(
        context,
        resourceGroupName,
        fleetName,
        fleetspaceName,
        body,
        options,
      ),
    listByFleet: (
      resourceGroupName: string,
      fleetName: string,
      options?: FleetspacesListByFleetOptionalParams,
    ) => fleetspacesListByFleet(context, resourceGroupName, fleetName, options),
    delete: (
      resourceGroupName: string,
      fleetName: string,
      fleetspaceName: string,
      options?: FleetspacesDeleteOptionalParams,
    ) => fleetspacesDelete(context, resourceGroupName, fleetName, fleetspaceName, options),
    update: (
      resourceGroupName: string,
      fleetName: string,
      fleetspaceName: string,
      properties: Fleetspace,
      options?: FleetspacesUpdateOptionalParams,
    ) =>
      fleetspacesUpdate(context, resourceGroupName, fleetName, fleetspaceName, properties, options),
    createOrUpdate: (
      resourceGroupName: string,
      fleetName: string,
      fleetspaceName: string,
      resource: Fleetspace,
      options?: FleetspacesCreateOrUpdateOptionalParams,
    ) =>
      fleetspacesCreateOrUpdate(
        context,
        resourceGroupName,
        fleetName,
        fleetspaceName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      fleetName: string,
      fleetspaceName: string,
      options?: FleetspacesGetOptionalParams,
    ) => fleetspacesGet(context, resourceGroupName, fleetName, fleetspaceName, options),
  };
}

export function _getFleetspacesOperations(
  context: DatabaseFleetManagerContext,
): FleetspacesOperations {
  return {
    ..._getFleetspaces(context),
  };
}
