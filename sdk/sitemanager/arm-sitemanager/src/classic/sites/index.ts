// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EdgeContext } from "../../api/edgeContext.js";
import {
  SitesListByResourceGroupOptionalParams,
  SitesDeleteOptionalParams,
  SitesUpdateOptionalParams,
  SitesCreateOrUpdateOptionalParams,
  SitesGetOptionalParams,
} from "../../api/options.js";
import {
  sitesListByResourceGroup,
  sitesDelete,
  sitesUpdate,
  sitesCreateOrUpdate,
  sitesGet,
} from "../../api/sites/index.js";
import { Site, SiteUpdate } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Sites operations. */
export interface SitesOperations {
  /** List Site resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: SitesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Site>;
  /** Delete a Site */
  delete: (
    resourceGroupName: string,
    siteName: string,
    options?: SitesDeleteOptionalParams,
  ) => Promise<void>;
  /** Update a Site */
  update: (
    resourceGroupName: string,
    siteName: string,
    properties: SiteUpdate,
    options?: SitesUpdateOptionalParams,
  ) => Promise<Site>;
  /** Create a Site */
  createOrUpdate: (
    resourceGroupName: string,
    siteName: string,
    resource: Site,
    options?: SitesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Site>, Site>;
  /** Get a Site */
  get: (
    resourceGroupName: string,
    siteName: string,
    options?: SitesGetOptionalParams,
  ) => Promise<Site>;
}

function _getSites(context: EdgeContext) {
  return {
    listByResourceGroup: (
      resourceGroupName: string,
      options?: SitesListByResourceGroupOptionalParams,
    ) => sitesListByResourceGroup(context, resourceGroupName, options),
    delete: (resourceGroupName: string, siteName: string, options?: SitesDeleteOptionalParams) =>
      sitesDelete(context, resourceGroupName, siteName, options),
    update: (
      resourceGroupName: string,
      siteName: string,
      properties: SiteUpdate,
      options?: SitesUpdateOptionalParams,
    ) => sitesUpdate(context, resourceGroupName, siteName, properties, options),
    createOrUpdate: (
      resourceGroupName: string,
      siteName: string,
      resource: Site,
      options?: SitesCreateOrUpdateOptionalParams,
    ) => sitesCreateOrUpdate(context, resourceGroupName, siteName, resource, options),
    get: (resourceGroupName: string, siteName: string, options?: SitesGetOptionalParams) =>
      sitesGet(context, resourceGroupName, siteName, options),
  };
}

export function _getSitesOperations(context: EdgeContext): SitesOperations {
  return {
    ..._getSites(context),
  };
}
