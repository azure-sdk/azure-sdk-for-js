// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AvsContext } from "../../api/avsContext.js";
import {
  hcxEnterpriseSitesList,
  hcxEnterpriseSitesGet,
  hcxEnterpriseSitesCreateOrUpdate,
  hcxEnterpriseSitesDelete,
} from "../../api/hcxEnterpriseSites/index.js";
import {
  HcxEnterpriseSitesListOptionalParams,
  HcxEnterpriseSitesGetOptionalParams,
  HcxEnterpriseSitesCreateOrUpdateOptionalParams,
  HcxEnterpriseSitesDeleteOptionalParams,
} from "../../api/options.js";
import { HcxEnterpriseSite } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a HcxEnterpriseSites operations. */
export interface HcxEnterpriseSitesOperations {
  /** List HcxEnterpriseSite resources by PrivateCloud */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: HcxEnterpriseSitesListOptionalParams,
  ) => PagedAsyncIterableIterator<HcxEnterpriseSite>;
  /** Get a HcxEnterpriseSite */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    hcxEnterpriseSiteName: string,
    options?: HcxEnterpriseSitesGetOptionalParams,
  ) => Promise<HcxEnterpriseSite>;
  /** Create a HcxEnterpriseSite */
  createOrUpdate: (
    resourceGroupName: string,
    privateCloudName: string,
    hcxEnterpriseSiteName: string,
    hcxEnterpriseSite: HcxEnterpriseSite,
    options?: HcxEnterpriseSitesCreateOrUpdateOptionalParams,
  ) => Promise<HcxEnterpriseSite>;
  /** Delete a HcxEnterpriseSite */
  delete: (
    resourceGroupName: string,
    privateCloudName: string,
    hcxEnterpriseSiteName: string,
    options?: HcxEnterpriseSitesDeleteOptionalParams,
  ) => Promise<void>;
}

export function getHcxEnterpriseSites(
  context: AvsContext,
  subscriptionId: string,
) {
  return {
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: HcxEnterpriseSitesListOptionalParams,
    ) =>
      hcxEnterpriseSitesList(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      hcxEnterpriseSiteName: string,
      options?: HcxEnterpriseSitesGetOptionalParams,
    ) =>
      hcxEnterpriseSitesGet(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        hcxEnterpriseSiteName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      privateCloudName: string,
      hcxEnterpriseSiteName: string,
      hcxEnterpriseSite: HcxEnterpriseSite,
      options?: HcxEnterpriseSitesCreateOrUpdateOptionalParams,
    ) =>
      hcxEnterpriseSitesCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        hcxEnterpriseSiteName,
        hcxEnterpriseSite,
        options,
      ),
    delete: (
      resourceGroupName: string,
      privateCloudName: string,
      hcxEnterpriseSiteName: string,
      options?: HcxEnterpriseSitesDeleteOptionalParams,
    ) =>
      hcxEnterpriseSitesDelete(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        hcxEnterpriseSiteName,
        options,
      ),
  };
}

export function getHcxEnterpriseSitesOperations(
  context: AvsContext,
  subscriptionId: string,
): HcxEnterpriseSitesOperations {
  return {
    ...getHcxEnterpriseSites(context, subscriptionId),
  };
}
