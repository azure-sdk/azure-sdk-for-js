// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MigrateContext } from "../../api/migrateContext.js";
import { AvsGraphAssessmentOptions } from "../../models/models.js";
import {
  AvsGraphAssessmentOptionsOperationsListByParentOptionalParams,
  AvsGraphAssessmentOptionsOperationsGetOptionalParams,
} from "../../api/avsGraphAssessmentOptionsOperations/options.js";
import { listByParent, get } from "../../api/avsGraphAssessmentOptionsOperations/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a AvsGraphAssessmentOptionsOperations operations. */
export interface AvsGraphAssessmentOptionsOperationsOperations {
  /** List AvsGraphAssessmentOptions resources by AssessmentProject */
  listByParent: (
    resourceGroupName: string,
    projectName: string,
    options?: AvsGraphAssessmentOptionsOperationsListByParentOptionalParams,
  ) => PagedAsyncIterableIterator<AvsGraphAssessmentOptions>;
  /** Get a AvsGraphAssessmentOptions */
  get: (
    resourceGroupName: string,
    projectName: string,
    options?: AvsGraphAssessmentOptionsOperationsGetOptionalParams,
  ) => Promise<AvsGraphAssessmentOptions>;
}

function _getAvsGraphAssessmentOptionsOperations(context: MigrateContext) {
  return {
    listByParent: (
      resourceGroupName: string,
      projectName: string,
      options?: AvsGraphAssessmentOptionsOperationsListByParentOptionalParams,
    ) => listByParent(context, resourceGroupName, projectName, options),
    get: (
      resourceGroupName: string,
      projectName: string,
      options?: AvsGraphAssessmentOptionsOperationsGetOptionalParams,
    ) => get(context, resourceGroupName, projectName, options),
  };
}

export function _getAvsGraphAssessmentOptionsOperationsOperations(
  context: MigrateContext,
): AvsGraphAssessmentOptionsOperationsOperations {
  return {
    ..._getAvsGraphAssessmentOptionsOperations(context),
  };
}
