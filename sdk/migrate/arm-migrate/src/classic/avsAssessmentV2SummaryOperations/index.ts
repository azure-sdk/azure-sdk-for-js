// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MigrateContext } from "../../api/migrateContext.js";
import { AvsAssessmentV2Summary } from "../../models/models.js";
import {
  AvsAssessmentV2SummaryOperationsListByParentOptionalParams,
  AvsAssessmentV2SummaryOperationsGetOptionalParams,
} from "../../api/avsAssessmentV2SummaryOperations/options.js";
import { listByParent, get } from "../../api/avsAssessmentV2SummaryOperations/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a AvsAssessmentV2SummaryOperations operations. */
export interface AvsAssessmentV2SummaryOperationsOperations {
  /** List AvsAssessmentV2Summary resources by AvsAssessmentV2 */
  listByParent: (
    resourceGroupName: string,
    projectName: string,
    assessmentName: string,
    options?: AvsAssessmentV2SummaryOperationsListByParentOptionalParams,
  ) => PagedAsyncIterableIterator<AvsAssessmentV2Summary>;
  /** Get a AvsAssessmentV2Summary */
  get: (
    resourceGroupName: string,
    projectName: string,
    assessmentName: string,
    summaryName: string,
    options?: AvsAssessmentV2SummaryOperationsGetOptionalParams,
  ) => Promise<AvsAssessmentV2Summary>;
}

function _getAvsAssessmentV2SummaryOperations(context: MigrateContext) {
  return {
    listByParent: (
      resourceGroupName: string,
      projectName: string,
      assessmentName: string,
      options?: AvsAssessmentV2SummaryOperationsListByParentOptionalParams,
    ) => listByParent(context, resourceGroupName, projectName, assessmentName, options),
    get: (
      resourceGroupName: string,
      projectName: string,
      assessmentName: string,
      summaryName: string,
      options?: AvsAssessmentV2SummaryOperationsGetOptionalParams,
    ) => get(context, resourceGroupName, projectName, assessmentName, summaryName, options),
  };
}

export function _getAvsAssessmentV2SummaryOperationsOperations(
  context: MigrateContext,
): AvsAssessmentV2SummaryOperationsOperations {
  return {
    ..._getAvsAssessmentV2SummaryOperations(context),
  };
}
