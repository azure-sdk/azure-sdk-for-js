// Licensed under the MIT License.

import { ContainerServiceContext } from "../../api/containerServiceContext.js";
import { UpdateRun, SkipProperties } from "../../models/models.js";
import {
  UpdateRunsSkipOptionalParams,
  UpdateRunsStopOptionalParams,
  UpdateRunsStartOptionalParams,
  UpdateRunsListByFleetOptionalParams,
  UpdateRunsDeleteOptionalParams,
  UpdateRunsCreateOrUpdateOptionalParams,
  UpdateRunsGetOptionalParams,
} from "../../api/updateRuns/options.js";
import {
  skip,
  stop,
  start,
  listByFleet,
  $delete,
  createOrUpdate,
  get,
} from "../../api/updateRuns/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a UpdateRuns operations. */
export interface UpdateRunsOperations {
  /** Skips one or a combination of member/group/stage/afterStageWait(s) of an update run. */
  skip: (
    resourceGroupName: string,
    fleetName: string,
    updateRunName: string,
    body: SkipProperties,
    options?: UpdateRunsSkipOptionalParams,
  ) => __PLACEHOLDER_o122__<__PLACEHOLDER_o123__<UpdateRun>, UpdateRun>;
  /** Stops an UpdateRun. */
  stop: (
    resourceGroupName: string,
    fleetName: string,
    updateRunName: string,
    options?: UpdateRunsStopOptionalParams,
  ) => __PLACEHOLDER_o122__<__PLACEHOLDER_o123__<UpdateRun>, UpdateRun>;
  /** Starts an UpdateRun. */
  start: (
    resourceGroupName: string,
    fleetName: string,
    updateRunName: string,
    options?: UpdateRunsStartOptionalParams,
  ) => __PLACEHOLDER_o122__<__PLACEHOLDER_o123__<UpdateRun>, UpdateRun>;
  /** List UpdateRun resources by Fleet */
  listByFleet: (
    resourceGroupName: string,
    fleetName: string,
    options?: UpdateRunsListByFleetOptionalParams,
  ) => PagedAsyncIterableIterator<UpdateRun>;
  /** Delete a UpdateRun */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    fleetName: string,
    updateRunName: string,
    options?: UpdateRunsDeleteOptionalParams,
  ) => __PLACEHOLDER_o122__<__PLACEHOLDER_o123__<void>, void>;
  /** Create a UpdateRun */
  createOrUpdate: (
    resourceGroupName: string,
    fleetName: string,
    updateRunName: string,
    resource: UpdateRun,
    options?: UpdateRunsCreateOrUpdateOptionalParams,
  ) => __PLACEHOLDER_o122__<__PLACEHOLDER_o123__<UpdateRun>, UpdateRun>;
  /** Get a UpdateRun */
  get: (
    resourceGroupName: string,
    fleetName: string,
    updateRunName: string,
    options?: UpdateRunsGetOptionalParams,
  ) => Promise<UpdateRun>;
}

function _getUpdateRuns(context: ContainerServiceContext) {
  return {
    skip: (
      resourceGroupName: string,
      fleetName: string,
      updateRunName: string,
      body: SkipProperties,
      options?: UpdateRunsSkipOptionalParams,
    ) =>
      skip(context, resourceGroupName, fleetName, updateRunName, body, options),
    stop: (
      resourceGroupName: string,
      fleetName: string,
      updateRunName: string,
      options?: UpdateRunsStopOptionalParams,
    ) => stop(context, resourceGroupName, fleetName, updateRunName, options),
    start: (
      resourceGroupName: string,
      fleetName: string,
      updateRunName: string,
      options?: UpdateRunsStartOptionalParams,
    ) => start(context, resourceGroupName, fleetName, updateRunName, options),
    listByFleet: (
      resourceGroupName: string,
      fleetName: string,
      options?: UpdateRunsListByFleetOptionalParams,
    ) => listByFleet(context, resourceGroupName, fleetName, options),
    delete: (
      resourceGroupName: string,
      fleetName: string,
      updateRunName: string,
      options?: UpdateRunsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, fleetName, updateRunName, options),
    createOrUpdate: (
      resourceGroupName: string,
      fleetName: string,
      updateRunName: string,
      resource: UpdateRun,
      options?: UpdateRunsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        fleetName,
        updateRunName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      fleetName: string,
      updateRunName: string,
      options?: UpdateRunsGetOptionalParams,
    ) => get(context, resourceGroupName, fleetName, updateRunName, options),
  };
}

export function _getUpdateRunsOperations(
  context: ContainerServiceContext,
): UpdateRunsOperations {
  return {
    ..._getUpdateRuns(context),
  };
}
