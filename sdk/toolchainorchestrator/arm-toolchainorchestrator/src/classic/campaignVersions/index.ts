// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ToolchainOrchestratorContext } from "../../api/toolchainOrchestratorContext.js";
import {
  CampaignVersion,
  CampaignVersionTagsUpdate,
} from "../../models/models.js";
import {
  campaignVersionsGet,
  campaignVersionsCreateOrUpdate,
  campaignVersionsUpdate,
  campaignVersionsDelete,
  campaignVersionsListByCampaign,
} from "../../api/campaignVersions/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  CampaignVersionsGetOptionalParams,
  CampaignVersionsCreateOrUpdateOptionalParams,
  CampaignVersionsUpdateOptionalParams,
  CampaignVersionsDeleteOptionalParams,
  CampaignVersionsListByCampaignOptionalParams,
} from "../../models/options.js";

/** Interface representing a CampaignVersions operations. */
export interface CampaignVersionsOperations {
  /** Returns the details of the campaignVersion. */
  get: (
    resourceGroupName: string,
    campaignName: string,
    versionName: string,
    options?: CampaignVersionsGetOptionalParams,
  ) => Promise<CampaignVersion>;
  /** Creates a new or updates an existing campaignVersion. */
  createOrUpdate: (
    resourceGroupName: string,
    campaignName: string,
    versionName: string,
    resource: CampaignVersion,
    options?: CampaignVersionsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<CampaignVersion>, CampaignVersion>;
  /** Updates an existing campaignVersion. */
  update: (
    resourceGroupName: string,
    campaignName: string,
    versionName: string,
    properties: CampaignVersionTagsUpdate,
    options?: CampaignVersionsUpdateOptionalParams,
  ) => PollerLike<OperationState<CampaignVersion>, CampaignVersion>;
  /** Deletes a specified campaignVersion. */
  delete: (
    resourceGroupName: string,
    campaignName: string,
    versionName: string,
    options?: CampaignVersionsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Lists CampaignVersions within a Campaign. */
  listByCampaign: (
    resourceGroupName: string,
    campaignName: string,
    options?: CampaignVersionsListByCampaignOptionalParams,
  ) => PagedAsyncIterableIterator<CampaignVersion>;
}

export function getCampaignVersions(
  context: ToolchainOrchestratorContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      campaignName: string,
      versionName: string,
      options?: CampaignVersionsGetOptionalParams,
    ) =>
      campaignVersionsGet(
        context,
        subscriptionId,
        resourceGroupName,
        campaignName,
        versionName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      campaignName: string,
      versionName: string,
      resource: CampaignVersion,
      options?: CampaignVersionsCreateOrUpdateOptionalParams,
    ) =>
      campaignVersionsCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        campaignName,
        versionName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      campaignName: string,
      versionName: string,
      properties: CampaignVersionTagsUpdate,
      options?: CampaignVersionsUpdateOptionalParams,
    ) =>
      campaignVersionsUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        campaignName,
        versionName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      campaignName: string,
      versionName: string,
      options?: CampaignVersionsDeleteOptionalParams,
    ) =>
      campaignVersionsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        campaignName,
        versionName,
        options,
      ),
    listByCampaign: (
      resourceGroupName: string,
      campaignName: string,
      options?: CampaignVersionsListByCampaignOptionalParams,
    ) =>
      campaignVersionsListByCampaign(
        context,
        subscriptionId,
        resourceGroupName,
        campaignName,
        options,
      ),
  };
}

export function getCampaignVersionsOperations(
  context: ToolchainOrchestratorContext,
  subscriptionId: string,
): CampaignVersionsOperations {
  return {
    ...getCampaignVersions(context, subscriptionId),
  };
}
