/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Assessment,
  AssessmentsListByGroupOptionalParams,
  AssessmentsListByProjectOptionalParams,
  AssessmentsGetOptionalParams,
  AssessmentsGetResponse,
  AssessmentsCreateOptionalParams,
  AssessmentsCreateResponse,
  AssessmentsDeleteOptionalParams,
  AssessmentsDeleteResponse,
  AssessmentsGetReportDownloadUrlOptionalParams,
  AssessmentsGetReportDownloadUrlResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Assessments. */
export interface Assessments {
  /**
   * Get all assessments created for the specified group.
   *
   * Returns a json array of objects of type 'assessment' as specified in Models section.
   *
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param options The options parameters.
   */
  listByGroup(
    resourceGroupName: string,
    projectName: string,
    groupName: string,
    options?: AssessmentsListByGroupOptionalParams
  ): PagedAsyncIterableIterator<Assessment>;
  /**
   * Get all assessments created in the project.
   *
   * Returns a json array of objects of type 'assessment' as specified in Models section.
   *
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param options The options parameters.
   */
  listByProject(
    resourceGroupName: string,
    projectName: string,
    options?: AssessmentsListByProjectOptionalParams
  ): PagedAsyncIterableIterator<Assessment>;
  /**
   * Get an existing assessment with the specified name. Returns a json object of type 'assessment' as
   * specified in Models section.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param assessmentName Unique name of an assessment within a project.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    projectName: string,
    groupName: string,
    assessmentName: string,
    options?: AssessmentsGetOptionalParams
  ): Promise<AssessmentsGetResponse>;
  /**
   * Create a new assessment with the given name and the specified settings. Since name of an assessment
   * in a project is a unique identifier, if an assessment with the name provided already exists, then
   * the existing assessment is updated.
   *
   * Any PUT operation, resulting in either create or update on an assessment, will cause the assessment
   * to go in a "InProgress" state. This will be indicated by the field 'computationState' on the
   * Assessment object. During this time no other PUT operation will be allowed on that assessment
   * object, nor will a Delete operation. Once the computation for the assessment is complete, the field
   * 'computationState' will be updated to 'Ready', and then other PUT or DELETE operations can happen on
   * the assessment.
   *
   * When assessment is under computation, any PUT will lead to a 400 - Bad Request error.
   *
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param assessmentName Unique name of an assessment within a project.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    projectName: string,
    groupName: string,
    assessmentName: string,
    options?: AssessmentsCreateOptionalParams
  ): Promise<AssessmentsCreateResponse>;
  /**
   * Delete an assessment from the project. The machines remain in the assessment. Deleting a
   * non-existent assessment results in a no-operation.
   *
   * When an assessment is under computation, as indicated by the 'computationState' field, it cannot be
   * deleted. Any such attempt will return a 400 - Bad Request.
   *
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param assessmentName Unique name of an assessment within a project.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    projectName: string,
    groupName: string,
    assessmentName: string,
    options?: AssessmentsDeleteOptionalParams
  ): Promise<AssessmentsDeleteResponse>;
  /**
   * Get the URL for downloading the assessment in a report format.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param assessmentName Unique name of an assessment within a project.
   * @param options The options parameters.
   */
  getReportDownloadUrl(
    resourceGroupName: string,
    projectName: string,
    groupName: string,
    assessmentName: string,
    options?: AssessmentsGetReportDownloadUrlOptionalParams
  ): Promise<AssessmentsGetReportDownloadUrlResponse>;
}
