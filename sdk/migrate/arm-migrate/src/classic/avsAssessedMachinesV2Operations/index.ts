// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MigrateContext } from "../../api/migrateContext.js";
import { AvsAssessedMachineV2 } from "../../models/models.js";
import {
  AvsAssessedMachinesV2OperationsListByParentOptionalParams,
  AvsAssessedMachinesV2OperationsGetOptionalParams,
} from "../../api/avsAssessedMachinesV2Operations/options.js";
import { listByParent, get } from "../../api/avsAssessedMachinesV2Operations/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a AvsAssessedMachinesV2Operations operations. */
export interface AvsAssessedMachinesV2OperationsOperations {
  /** List AvsAssessedMachineV2 resources by AvsAssessmentV2 */
  listByParent: (
    resourceGroupName: string,
    projectName: string,
    assessmentName: string,
    options?: AvsAssessedMachinesV2OperationsListByParentOptionalParams,
  ) => PagedAsyncIterableIterator<AvsAssessedMachineV2>;
  /** Get a AvsAssessedMachineV2 */
  get: (
    resourceGroupName: string,
    projectName: string,
    assessmentName: string,
    avsAssessedMachineName: string,
    options?: AvsAssessedMachinesV2OperationsGetOptionalParams,
  ) => Promise<AvsAssessedMachineV2>;
}

function _getAvsAssessedMachinesV2Operations(context: MigrateContext) {
  return {
    listByParent: (
      resourceGroupName: string,
      projectName: string,
      assessmentName: string,
      options?: AvsAssessedMachinesV2OperationsListByParentOptionalParams,
    ) => listByParent(context, resourceGroupName, projectName, assessmentName, options),
    get: (
      resourceGroupName: string,
      projectName: string,
      assessmentName: string,
      avsAssessedMachineName: string,
      options?: AvsAssessedMachinesV2OperationsGetOptionalParams,
    ) =>
      get(context, resourceGroupName, projectName, assessmentName, avsAssessedMachineName, options),
  };
}

export function _getAvsAssessedMachinesV2OperationsOperations(
  context: MigrateContext,
): AvsAssessedMachinesV2OperationsOperations {
  return {
    ..._getAvsAssessedMachinesV2Operations(context),
  };
}
