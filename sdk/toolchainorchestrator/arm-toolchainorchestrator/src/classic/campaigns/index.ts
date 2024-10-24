// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ToolchainOrchestratorContext } from "../../api/toolchainOrchestratorContext.js";
import { Campaign, CampaignTagsUpdate } from "../../models/models.js";
import {
  campaignsGet,
  campaignsCreateOrUpdate,
  campaignsUpdate,
  campaignsDelete,
  campaignsListByResourceGroup,
  campaignsListBySubscription,
} from "../../api/campaigns/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  CampaignsGetOptionalParams,
  CampaignsCreateOrUpdateOptionalParams,
  CampaignsUpdateOptionalParams,
  CampaignsDeleteOptionalParams,
  CampaignsListByResourceGroupOptionalParams,
  CampaignsListBySubscriptionOptionalParams,
} from "../../models/options.js";

/** Interface representing a Campaigns operations. */
export interface CampaignsOperations {
  /** Returns the details of the campaign. */
  get: (
    resourceGroupName: string,
    campaignName: string,
    options?: CampaignsGetOptionalParams,
  ) => Promise<Campaign>;
  /** Creates a new or updates an existing campaign. */
  createOrUpdate: (
    resourceGroupName: string,
    campaignName: string,
    resource: Campaign,
    options?: CampaignsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Campaign>, Campaign>;
  /** Updates an existing campaign. */
  update: (
    resourceGroupName: string,
    campaignName: string,
    properties: CampaignTagsUpdate,
    options?: CampaignsUpdateOptionalParams,
  ) => PollerLike<OperationState<Campaign>, Campaign>;
  /** Deletes a specified campaign. */
  delete: (
    resourceGroupName: string,
    campaignName: string,
    options?: CampaignsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Returns a collection of campaigns within the resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: CampaignsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Campaign>;
  /** Lists campaigns within an Azure subscription. */
  listBySubscription: (
    options?: CampaignsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<Campaign>;
}

export function getCampaigns(
  context: ToolchainOrchestratorContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      campaignName: string,
      options?: CampaignsGetOptionalParams,
    ) =>
      campaignsGet(
        context,
        subscriptionId,
        resourceGroupName,
        campaignName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      campaignName: string,
      resource: Campaign,
      options?: CampaignsCreateOrUpdateOptionalParams,
    ) =>
      campaignsCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        campaignName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      campaignName: string,
      properties: CampaignTagsUpdate,
      options?: CampaignsUpdateOptionalParams,
    ) =>
      campaignsUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        campaignName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      campaignName: string,
      options?: CampaignsDeleteOptionalParams,
    ) =>
      campaignsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        campaignName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: CampaignsListByResourceGroupOptionalParams,
    ) =>
      campaignsListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listBySubscription: (options?: CampaignsListBySubscriptionOptionalParams) =>
      campaignsListBySubscription(context, subscriptionId, options),
  };
}

export function getCampaignsOperations(
  context: ToolchainOrchestratorContext,
  subscriptionId: string,
): CampaignsOperations {
  return {
    ...getCampaigns(context, subscriptionId),
  };
}
