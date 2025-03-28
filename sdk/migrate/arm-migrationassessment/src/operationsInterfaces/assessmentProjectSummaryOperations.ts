/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  AssessmentProjectSummary,
  AssessmentProjectSummaryOperationsListByAssessmentProjectOptionalParams,
  AssessmentProjectSummaryOperationsGetOptionalParams,
  AssessmentProjectSummaryOperationsGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AssessmentProjectSummaryOperations. */
export interface AssessmentProjectSummaryOperations {
  /**
   * List AssessmentProjectSummary resources by AssessmentProject
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param options The options parameters.
   */
  listByAssessmentProject(
    resourceGroupName: string,
    projectName: string,
    options?: AssessmentProjectSummaryOperationsListByAssessmentProjectOptionalParams,
  ): PagedAsyncIterableIterator<AssessmentProjectSummary>;
  /**
   * Get a AssessmentProjectSummary
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param projectSummaryName Group ARM name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    projectName: string,
    projectSummaryName: string,
    options?: AssessmentProjectSummaryOperationsGetOptionalParams,
  ): Promise<AssessmentProjectSummaryOperationsGetResponse>;
}
