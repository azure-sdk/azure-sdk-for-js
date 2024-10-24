// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ToolchainOrchestratorContext } from "../../api/toolchainOrchestratorContext.js";
import { Catalog, CatalogTagsUpdate } from "../../models/models.js";
import {
  catalogsGet,
  catalogsCreateOrUpdate,
  catalogsUpdate,
  catalogsDelete,
  catalogsListByResourceGroup,
  catalogsListBySubscription,
} from "../../api/catalogs/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  CatalogsGetOptionalParams,
  CatalogsCreateOrUpdateOptionalParams,
  CatalogsUpdateOptionalParams,
  CatalogsDeleteOptionalParams,
  CatalogsListByResourceGroupOptionalParams,
  CatalogsListBySubscriptionOptionalParams,
} from "../../models/options.js";

/** Interface representing a Catalogs operations. */
export interface CatalogsOperations {
  /** Returns details of the Catalog. */
  get: (
    resourceGroupName: string,
    catalogName: string,
    options?: CatalogsGetOptionalParams,
  ) => Promise<Catalog>;
  /** Creates new or updates the Catalog. */
  createOrUpdate: (
    resourceGroupName: string,
    catalogName: string,
    resource: Catalog,
    options?: CatalogsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Catalog>, Catalog>;
  /** Updates the existing Catalog. */
  update: (
    resourceGroupName: string,
    catalogName: string,
    properties: CatalogTagsUpdate,
    options?: CatalogsUpdateOptionalParams,
  ) => PollerLike<OperationState<Catalog>, Catalog>;
  /** Deletes specified Catalog. */
  delete: (
    resourceGroupName: string,
    catalogName: string,
    options?: CatalogsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Returns a collection of Catalogs within the resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: CatalogsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Catalog>;
  /** Lists Catalogs within an Azure subscription. */
  listBySubscription: (
    options?: CatalogsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<Catalog>;
}

export function getCatalogs(
  context: ToolchainOrchestratorContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      catalogName: string,
      options?: CatalogsGetOptionalParams,
    ) =>
      catalogsGet(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      catalogName: string,
      resource: Catalog,
      options?: CatalogsCreateOrUpdateOptionalParams,
    ) =>
      catalogsCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      catalogName: string,
      properties: CatalogTagsUpdate,
      options?: CatalogsUpdateOptionalParams,
    ) =>
      catalogsUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      catalogName: string,
      options?: CatalogsDeleteOptionalParams,
    ) =>
      catalogsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: CatalogsListByResourceGroupOptionalParams,
    ) =>
      catalogsListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listBySubscription: (options?: CatalogsListBySubscriptionOptionalParams) =>
      catalogsListBySubscription(context, subscriptionId, options),
  };
}

export function getCatalogsOperations(
  context: ToolchainOrchestratorContext,
  subscriptionId: string,
): CatalogsOperations {
  return {
    ...getCatalogs(context, subscriptionId),
  };
}
