// Licensed under the MIT License.

import { ContainerServiceContext } from "../../api/containerServiceContext.js";
import { AutoUpgradeProfile } from "../../models/models.js";
import {
  AutoUpgradeProfilesListByFleetOptionalParams,
  AutoUpgradeProfilesDeleteOptionalParams,
  AutoUpgradeProfilesCreateOrUpdateOptionalParams,
  AutoUpgradeProfilesGetOptionalParams,
} from "../../api/autoUpgradeProfiles/options.js";
import {
  listByFleet,
  $delete,
  createOrUpdate,
  get,
} from "../../api/autoUpgradeProfiles/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a AutoUpgradeProfiles operations. */
export interface AutoUpgradeProfilesOperations {
  /** List AutoUpgradeProfile resources by Fleet */
  listByFleet: (
    resourceGroupName: string,
    fleetName: string,
    options?: AutoUpgradeProfilesListByFleetOptionalParams,
  ) => PagedAsyncIterableIterator<AutoUpgradeProfile>;
  /** Delete a AutoUpgradeProfile */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    fleetName: string,
    autoUpgradeProfileName: string,
    options?: AutoUpgradeProfilesDeleteOptionalParams,
  ) => __PLACEHOLDER_o122__<__PLACEHOLDER_o123__<void>, void>;
  /** Create a AutoUpgradeProfile */
  createOrUpdate: (
    resourceGroupName: string,
    fleetName: string,
    autoUpgradeProfileName: string,
    resource: AutoUpgradeProfile,
    options?: AutoUpgradeProfilesCreateOrUpdateOptionalParams,
  ) => __PLACEHOLDER_o122__<
    __PLACEHOLDER_o123__<AutoUpgradeProfile>,
    AutoUpgradeProfile
  >;
  /** Get a AutoUpgradeProfile */
  get: (
    resourceGroupName: string,
    fleetName: string,
    autoUpgradeProfileName: string,
    options?: AutoUpgradeProfilesGetOptionalParams,
  ) => Promise<AutoUpgradeProfile>;
}

function _getAutoUpgradeProfiles(context: ContainerServiceContext) {
  return {
    listByFleet: (
      resourceGroupName: string,
      fleetName: string,
      options?: AutoUpgradeProfilesListByFleetOptionalParams,
    ) => listByFleet(context, resourceGroupName, fleetName, options),
    delete: (
      resourceGroupName: string,
      fleetName: string,
      autoUpgradeProfileName: string,
      options?: AutoUpgradeProfilesDeleteOptionalParams,
    ) =>
      $delete(
        context,
        resourceGroupName,
        fleetName,
        autoUpgradeProfileName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      fleetName: string,
      autoUpgradeProfileName: string,
      resource: AutoUpgradeProfile,
      options?: AutoUpgradeProfilesCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        fleetName,
        autoUpgradeProfileName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      fleetName: string,
      autoUpgradeProfileName: string,
      options?: AutoUpgradeProfilesGetOptionalParams,
    ) =>
      get(
        context,
        resourceGroupName,
        fleetName,
        autoUpgradeProfileName,
        options,
      ),
  };
}

export function _getAutoUpgradeProfilesOperations(
  context: ContainerServiceContext,
): AutoUpgradeProfilesOperations {
  return {
    ..._getAutoUpgradeProfiles(context),
  };
}
