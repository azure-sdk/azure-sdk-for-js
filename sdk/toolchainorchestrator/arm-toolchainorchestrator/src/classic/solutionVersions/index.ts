// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ToolchainOrchestratorContext } from "../../api/toolchainOrchestratorContext.js";
import {
  SolutionVersion,
  SolutionVersionTagsUpdate,
} from "../../models/models.js";
import {
  solutionVersionsGet,
  solutionVersionsCreateOrUpdate,
  solutionVersionsUpdate,
  solutionVersionsDelete,
  solutionVersionsListBySolution,
} from "../../api/solutionVersions/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  SolutionVersionsGetOptionalParams,
  SolutionVersionsCreateOrUpdateOptionalParams,
  SolutionVersionsUpdateOptionalParams,
  SolutionVersionsDeleteOptionalParams,
  SolutionVersionsListBySolutionOptionalParams,
} from "../../models/options.js";

/** Interface representing a SolutionVersions operations. */
export interface SolutionVersionsOperations {
  /** Returns details of specified SolutionVersion resource. */
  get: (
    resourceGroupName: string,
    solutionName: string,
    versionName: string,
    options?: SolutionVersionsGetOptionalParams,
  ) => Promise<SolutionVersion>;
  /** Creates new or updates existing SolutionVersion resource. */
  createOrUpdate: (
    resourceGroupName: string,
    solutionName: string,
    versionName: string,
    resource: SolutionVersion,
    options?: SolutionVersionsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<SolutionVersion>, SolutionVersion>;
  /** Updates existing SolutionVersion resource. */
  update: (
    resourceGroupName: string,
    solutionName: string,
    versionName: string,
    properties: SolutionVersionTagsUpdate,
    options?: SolutionVersionsUpdateOptionalParams,
  ) => PollerLike<OperationState<SolutionVersion>, SolutionVersion>;
  /** Deletes specified SolutionVersion resource. */
  delete: (
    resourceGroupName: string,
    solutionName: string,
    versionName: string,
    options?: SolutionVersionsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Returns a collection of SolutionVersion resources belonging to a Solution resource. */
  listBySolution: (
    resourceGroupName: string,
    solutionName: string,
    options?: SolutionVersionsListBySolutionOptionalParams,
  ) => PagedAsyncIterableIterator<SolutionVersion>;
}

export function getSolutionVersions(
  context: ToolchainOrchestratorContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      solutionName: string,
      versionName: string,
      options?: SolutionVersionsGetOptionalParams,
    ) =>
      solutionVersionsGet(
        context,
        subscriptionId,
        resourceGroupName,
        solutionName,
        versionName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      solutionName: string,
      versionName: string,
      resource: SolutionVersion,
      options?: SolutionVersionsCreateOrUpdateOptionalParams,
    ) =>
      solutionVersionsCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        solutionName,
        versionName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      solutionName: string,
      versionName: string,
      properties: SolutionVersionTagsUpdate,
      options?: SolutionVersionsUpdateOptionalParams,
    ) =>
      solutionVersionsUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        solutionName,
        versionName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      solutionName: string,
      versionName: string,
      options?: SolutionVersionsDeleteOptionalParams,
    ) =>
      solutionVersionsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        solutionName,
        versionName,
        options,
      ),
    listBySolution: (
      resourceGroupName: string,
      solutionName: string,
      options?: SolutionVersionsListBySolutionOptionalParams,
    ) =>
      solutionVersionsListBySolution(
        context,
        subscriptionId,
        resourceGroupName,
        solutionName,
        options,
      ),
  };
}

export function getSolutionVersionsOperations(
  context: ToolchainOrchestratorContext,
  subscriptionId: string,
): SolutionVersionsOperations {
  return {
    ...getSolutionVersions(context, subscriptionId),
  };
}
