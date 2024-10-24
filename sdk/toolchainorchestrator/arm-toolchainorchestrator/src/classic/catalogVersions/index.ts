// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ToolchainOrchestratorContext } from "../../api/toolchainOrchestratorContext.js";
import {
  CatalogVersion,
  CatalogVersionTagsUpdate,
  EvalExpressionResponse,
} from "../../models/models.js";
import {
  catalogVersionsGet,
  catalogVersionsCreateOrUpdate,
  catalogVersionsUpdate,
  catalogVersionsDelete,
  catalogVersionsListByCatalog,
  catalogVersionsEvalExpression,
} from "../../api/catalogVersions/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  CatalogVersionsGetOptionalParams,
  CatalogVersionsCreateOrUpdateOptionalParams,
  CatalogVersionsUpdateOptionalParams,
  CatalogVersionsDeleteOptionalParams,
  CatalogVersionsListByCatalogOptionalParams,
  CatalogVersionsEvalExpressionOptionalParams,
} from "../../models/options.js";

/** Interface representing a CatalogVersions operations. */
export interface CatalogVersionsOperations {
  /** Returns the details of the CatalogVersion. */
  get: (
    resourceGroupName: string,
    catalogName: string,
    versionName: string,
    options?: CatalogVersionsGetOptionalParams,
  ) => Promise<CatalogVersion>;
  /** Creates new or updates a CatalogVersion. */
  createOrUpdate: (
    resourceGroupName: string,
    catalogName: string,
    versionName: string,
    resource: CatalogVersion,
    options?: CatalogVersionsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<CatalogVersion>, CatalogVersion>;
  /** Updates the existing CatalogVersion. */
  update: (
    resourceGroupName: string,
    catalogName: string,
    versionName: string,
    properties: CatalogVersionTagsUpdate,
    options?: CatalogVersionsUpdateOptionalParams,
  ) => PollerLike<OperationState<CatalogVersion>, CatalogVersion>;
  /** Deletes the specified CatalogVersion. */
  delete: (
    resourceGroupName: string,
    catalogName: string,
    versionName: string,
    options?: CatalogVersionsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Lists CatalogVersions within a Catalog. */
  listByCatalog: (
    resourceGroupName: string,
    catalogName: string,
    options?: CatalogVersionsListByCatalogOptionalParams,
  ) => PagedAsyncIterableIterator<CatalogVersion>;
  /** Evaluate the CatalogVersion's properties */
  evalExpression: (
    resourceGroupName: string,
    catalogName: string,
    versionName: string,
    options?: CatalogVersionsEvalExpressionOptionalParams,
  ) => PollerLike<
    OperationState<EvalExpressionResponse>,
    EvalExpressionResponse
  >;
}

export function getCatalogVersions(
  context: ToolchainOrchestratorContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      catalogName: string,
      versionName: string,
      options?: CatalogVersionsGetOptionalParams,
    ) =>
      catalogVersionsGet(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        versionName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      catalogName: string,
      versionName: string,
      resource: CatalogVersion,
      options?: CatalogVersionsCreateOrUpdateOptionalParams,
    ) =>
      catalogVersionsCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        versionName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      catalogName: string,
      versionName: string,
      properties: CatalogVersionTagsUpdate,
      options?: CatalogVersionsUpdateOptionalParams,
    ) =>
      catalogVersionsUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        versionName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      catalogName: string,
      versionName: string,
      options?: CatalogVersionsDeleteOptionalParams,
    ) =>
      catalogVersionsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        versionName,
        options,
      ),
    listByCatalog: (
      resourceGroupName: string,
      catalogName: string,
      options?: CatalogVersionsListByCatalogOptionalParams,
    ) =>
      catalogVersionsListByCatalog(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        options,
      ),
    evalExpression: (
      resourceGroupName: string,
      catalogName: string,
      versionName: string,
      options?: CatalogVersionsEvalExpressionOptionalParams,
    ) =>
      catalogVersionsEvalExpression(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        versionName,
        options,
      ),
  };
}

export function getCatalogVersionsOperations(
  context: ToolchainOrchestratorContext,
  subscriptionId: string,
): CatalogVersionsOperations {
  return {
    ...getCatalogVersions(context, subscriptionId),
  };
}
