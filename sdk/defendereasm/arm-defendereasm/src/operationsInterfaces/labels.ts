/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  LabelResource,
  LabelsListByWorkspaceOptionalParams,
  LabelsGetByWorkspaceOptionalParams,
  LabelsGetByWorkspaceResponse,
  LabelsCreateAndUpdateOptionalParams,
  LabelsCreateAndUpdateResponse,
  LabelsUpdateOptionalParams,
  LabelsUpdateResponse,
  LabelsDeleteOptionalParams
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Labels. */
export interface Labels {
  /**
   * Returns a list of labels in the given workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the Workspace.
   * @param options The options parameters.
   */
  listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: LabelsListByWorkspaceOptionalParams
  ): PagedAsyncIterableIterator<LabelResource>;
  /**
   * Returns a label in the given workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the Workspace.
   * @param labelName The name of the Label.
   * @param options The options parameters.
   */
  getByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    labelName: string,
    options?: LabelsGetByWorkspaceOptionalParams
  ): Promise<LabelsGetByWorkspaceResponse>;
  /**
   * Create or update a Label.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the Workspace.
   * @param labelName The name of the Label.
   * @param options The options parameters.
   */
  beginCreateAndUpdate(
    resourceGroupName: string,
    workspaceName: string,
    labelName: string,
    options?: LabelsCreateAndUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<LabelsCreateAndUpdateResponse>,
      LabelsCreateAndUpdateResponse
    >
  >;
  /**
   * Create or update a Label.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the Workspace.
   * @param labelName The name of the Label.
   * @param options The options parameters.
   */
  beginCreateAndUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    labelName: string,
    options?: LabelsCreateAndUpdateOptionalParams
  ): Promise<LabelsCreateAndUpdateResponse>;
  /**
   * Update a Label.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the Workspace.
   * @param labelName The name of the Label.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    workspaceName: string,
    labelName: string,
    options?: LabelsUpdateOptionalParams
  ): Promise<LabelsUpdateResponse>;
  /**
   * Delete a Label.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the Workspace.
   * @param labelName The name of the Label.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    workspaceName: string,
    labelName: string,
    options?: LabelsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete a Label.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the Workspace.
   * @param labelName The name of the Label.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    workspaceName: string,
    labelName: string,
    options?: LabelsDeleteOptionalParams
  ): Promise<void>;
}
