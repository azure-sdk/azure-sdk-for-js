// Licensed under the MIT License.

import { ContainerServiceContext } from "../../api/containerServiceContext.js";
import { AutoUpgradeProfileOperationsGenerateUpdateRunOptionalParams } from "../../api/autoUpgradeProfileOperations/options.js";
import { generateUpdateRun } from "../../api/autoUpgradeProfileOperations/operations.js";

/** Interface representing a AutoUpgradeProfileOperations operations. */
export interface AutoUpgradeProfileOperationsOperations {
  /** Generates an update run for a given auto upgrade profile. */
  generateUpdateRun: (
    resourceGroupName: string,
    fleetName: string,
    autoUpgradeProfileName: string,
    options?: AutoUpgradeProfileOperationsGenerateUpdateRunOptionalParams,
  ) => __PLACEHOLDER_o122__<__PLACEHOLDER_o123__<void>, void>;
}

function _getAutoUpgradeProfileOperations(context: ContainerServiceContext) {
  return {
    generateUpdateRun: (
      resourceGroupName: string,
      fleetName: string,
      autoUpgradeProfileName: string,
      options?: AutoUpgradeProfileOperationsGenerateUpdateRunOptionalParams,
    ) =>
      generateUpdateRun(
        context,
        resourceGroupName,
        fleetName,
        autoUpgradeProfileName,
        options,
      ),
  };
}

export function _getAutoUpgradeProfileOperationsOperations(
  context: ContainerServiceContext,
): AutoUpgradeProfileOperationsOperations {
  return {
    ..._getAutoUpgradeProfileOperations(context),
  };
}
