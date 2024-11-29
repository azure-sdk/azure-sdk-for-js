// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EdgeContext } from "../../api/edgeContext.js";
import {
  SitesGetOptionalParams,
  SitesCreateOrUpdateOptionalParams,
  SitesUpdateOptionalParams,
  SitesDeleteOptionalParams,
  SitesListByResourceGroupOptionalParams,
} from "../../api/options.js";
import {
  sitesGet,
  sitesCreateOrUpdate,
  sitesUpdate,
  sitesDelete,
  sitesListByResourceGroup,
} from "../../api/sites/index.js";
import { Site, SiteUpdate } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Sites operations. */
export interface SitesOperations {
  /** Get a Site */
  get: (
    resourceGroupName: string,
    siteName: string,
    options?: SitesGetOptionalParams,
  ) => Promise<Site>;
  /** Create a Site */
  createOrUpdate: (
    resourceGroupName: string,
    siteName: string,
    resource: Site,
    options?: SitesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Site>, Site>;
  /** Update a Site */
  update: (
    resourceGroupName: string,
    siteName: string,
    properties: SiteUpdate,
    options?: SitesUpdateOptionalParams,
  ) => Promise<Site>;
  /** Delete a Site */
  delete: (
    resourceGroupName: string,
    siteName: string,
    options?: SitesDeleteOptionalParams,
  ) => Promise<void>;
  /** List Site resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: SitesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Site>;
}

export function getSites(context: EdgeContext, subscriptionId: string) {
  return {
    get: (
      resourceGroupName: string,
      siteName: string,
      options?: SitesGetOptionalParams,
    ) =>
      sitesGet(context, subscriptionId, resourceGroupName, siteName, options),
    createOrUpdate: (
      resourceGroupName: string,
      siteName: string,
      resource: Site,
      options?: SitesCreateOrUpdateOptionalParams,
    ) =>
      sitesCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        siteName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      siteName: string,
      properties: SiteUpdate,
      options?: SitesUpdateOptionalParams,
    ) =>
      sitesUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        siteName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      siteName: string,
      options?: SitesDeleteOptionalParams,
    ) =>
      sitesDelete(
        context,
        subscriptionId,
        resourceGroupName,
        siteName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: SitesListByResourceGroupOptionalParams,
    ) =>
      sitesListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
  };
}

export function getSitesOperations(
  context: EdgeContext,
  subscriptionId: string,
): SitesOperations {
  return {
    ...getSites(context, subscriptionId),
  };
}
