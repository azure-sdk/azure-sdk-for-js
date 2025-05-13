// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MigrateContext } from "../../api/migrateContext.js";
import { AvsAssessmentV2, DownloadUrl } from "../../models/models.js";
import {
  AvsAssessmentsV2OperationsDownloadUrlOptionalParams,
  AvsAssessmentsV2OperationsDeleteOptionalParams,
  AvsAssessmentsV2OperationsCreateOptionalParams,
  AvsAssessmentsV2OperationsListByParentOptionalParams,
  AvsAssessmentsV2OperationsGetOptionalParams,
} from "../../api/avsAssessmentsV2Operations/options.js";
import {
  downloadUrl,
  $delete,
  create,
  listByParent,
  get,
} from "../../api/avsAssessmentsV2Operations/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a AvsAssessmentsV2Operations operations. */
export interface AvsAssessmentsV2OperationsOperations {
  /** Get the URL for downloading the assessment in a report format. */
  downloadUrl: (
    resourceGroupName: string,
    projectName: string,
    assessmentName: string,
    body: Record<string, any>,
    options?: AvsAssessmentsV2OperationsDownloadUrlOptionalParams,
  ) => PollerLike<OperationState<DownloadUrl>, DownloadUrl>;
  /** Delete a AvsAssessmentV2 */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    projectName: string,
    assessmentName: string,
    options?: AvsAssessmentsV2OperationsDeleteOptionalParams,
  ) => Promise<void>;
  /** Create a AvsAssessmentV2 */
  create: (
    resourceGroupName: string,
    projectName: string,
    assessmentName: string,
    resource: AvsAssessmentV2,
    options?: AvsAssessmentsV2OperationsCreateOptionalParams,
  ) => PollerLike<OperationState<AvsAssessmentV2>, AvsAssessmentV2>;
  /** List AvsAssessmentV2 resources by AssessmentProject */
  listByParent: (
    resourceGroupName: string,
    projectName: string,
    options?: AvsAssessmentsV2OperationsListByParentOptionalParams,
  ) => PagedAsyncIterableIterator<AvsAssessmentV2>;
  /** Get a AvsAssessmentV2 */
  get: (
    resourceGroupName: string,
    projectName: string,
    assessmentName: string,
    options?: AvsAssessmentsV2OperationsGetOptionalParams,
  ) => Promise<AvsAssessmentV2>;
}

function _getAvsAssessmentsV2Operations(context: MigrateContext) {
  return {
    downloadUrl: (
      resourceGroupName: string,
      projectName: string,
      assessmentName: string,
      body: Record<string, any>,
      options?: AvsAssessmentsV2OperationsDownloadUrlOptionalParams,
    ) => downloadUrl(context, resourceGroupName, projectName, assessmentName, body, options),
    delete: (
      resourceGroupName: string,
      projectName: string,
      assessmentName: string,
      options?: AvsAssessmentsV2OperationsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, projectName, assessmentName, options),
    create: (
      resourceGroupName: string,
      projectName: string,
      assessmentName: string,
      resource: AvsAssessmentV2,
      options?: AvsAssessmentsV2OperationsCreateOptionalParams,
    ) => create(context, resourceGroupName, projectName, assessmentName, resource, options),
    listByParent: (
      resourceGroupName: string,
      projectName: string,
      options?: AvsAssessmentsV2OperationsListByParentOptionalParams,
    ) => listByParent(context, resourceGroupName, projectName, options),
    get: (
      resourceGroupName: string,
      projectName: string,
      assessmentName: string,
      options?: AvsAssessmentsV2OperationsGetOptionalParams,
    ) => get(context, resourceGroupName, projectName, assessmentName, options),
  };
}

export function _getAvsAssessmentsV2OperationsOperations(
  context: MigrateContext,
): AvsAssessmentsV2OperationsOperations {
  return {
    ..._getAvsAssessmentsV2Operations(context),
  };
}
