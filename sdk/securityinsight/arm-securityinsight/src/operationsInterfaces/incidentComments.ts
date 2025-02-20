/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  IncidentComment,
  IncidentCommentsListOptionalParams,
  IncidentCommentsGetOptionalParams,
  IncidentCommentsGetResponse,
  IncidentCommentsCreateOrUpdateOptionalParams,
  IncidentCommentsCreateOrUpdateResponse,
  IncidentCommentsDeleteOptionalParams
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a IncidentComments. */
export interface IncidentComments {
  /**
   * Gets all incident comments.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param incidentId Incident ID
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    incidentId: string,
    options?: IncidentCommentsListOptionalParams
  ): PagedAsyncIterableIterator<IncidentComment>;
  /**
   * Gets an incident comment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param incidentId Incident ID
   * @param incidentCommentId Incident comment ID
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    incidentId: string,
    incidentCommentId: string,
    options?: IncidentCommentsGetOptionalParams
  ): Promise<IncidentCommentsGetResponse>;
  /**
   * Creates or updates the incident comment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param incidentId Incident ID
   * @param incidentCommentId Incident comment ID
   * @param incidentComment The incident comment
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    incidentId: string,
    incidentCommentId: string,
    incidentComment: IncidentComment,
    options?: IncidentCommentsCreateOrUpdateOptionalParams
  ): Promise<IncidentCommentsCreateOrUpdateResponse>;
  /**
   * Delete the incident comment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param incidentId Incident ID
   * @param incidentCommentId Incident comment ID
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    incidentId: string,
    incidentCommentId: string,
    options?: IncidentCommentsDeleteOptionalParams
  ): Promise<void>;
}
