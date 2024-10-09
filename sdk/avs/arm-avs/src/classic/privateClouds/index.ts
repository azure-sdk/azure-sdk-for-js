// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AVSContext } from "../../api/azureVMwareSolutionAPIContext.js";
import {
  PrivateCloud,
  PrivateCloudUpdate,
  AdminCredentials,
} from "../../models/models.js";
import {
  privateCloudsList,
  privateCloudsListInSubscription,
  privateCloudsGet,
  privateCloudsCreateOrUpdate,
  privateCloudsUpdate,
  privateCloudsDelete,
  privateCloudsRotateVcenterPassword,
  privateCloudsRotateNsxtPassword,
  privateCloudsListAdminCredentials,
} from "../../api/privateClouds/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  PrivateCloudsListOptionalParams,
  PrivateCloudsListInSubscriptionOptionalParams,
  PrivateCloudsGetOptionalParams,
  PrivateCloudsCreateOrUpdateOptionalParams,
  PrivateCloudsUpdateOptionalParams,
  PrivateCloudsDeleteOptionalParams,
  PrivateCloudsRotateVcenterPasswordOptionalParams,
  PrivateCloudsRotateNsxtPasswordOptionalParams,
  PrivateCloudsListAdminCredentialsOptionalParams,
} from "../../models/options.js";

/** Interface representing a PrivateClouds operations. */
export interface PrivateCloudsOperations {
  /** List PrivateCloud resources by resource group */
  list: (
    resourceGroupName: string,
    options?: PrivateCloudsListOptionalParams,
  ) => PagedAsyncIterableIterator<PrivateCloud>;
  /** List PrivateCloud resources by subscription ID */
  listInSubscription: (
    options?: PrivateCloudsListInSubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<PrivateCloud>;
  /** Get a PrivateCloud */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: PrivateCloudsGetOptionalParams,
  ) => Promise<PrivateCloud>;
  /** Create a PrivateCloud */
  createOrUpdate: (
    resourceGroupName: string,
    privateCloudName: string,
    privateCloud: PrivateCloud,
    options?: PrivateCloudsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<PrivateCloud>, PrivateCloud>;
  /** Update a PrivateCloud */
  update: (
    resourceGroupName: string,
    privateCloudName: string,
    privateCloudUpdate: PrivateCloudUpdate,
    options?: PrivateCloudsUpdateOptionalParams,
  ) => Promise<PrivateCloud>;
  /** Delete a PrivateCloud */
  delete: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: PrivateCloudsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Rotate the vCenter password */
  rotateVcenterPassword: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: PrivateCloudsRotateVcenterPasswordOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Rotate the NSX-T Manager password */
  rotateNsxtPassword: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: PrivateCloudsRotateNsxtPasswordOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List the admin credentials for the private cloud */
  listAdminCredentials: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: PrivateCloudsListAdminCredentialsOptionalParams,
  ) => Promise<AdminCredentials>;
}

export function getPrivateClouds(context: AVSContext, subscriptionId: string) {
  return {
    list: (
      resourceGroupName: string,
      options?: PrivateCloudsListOptionalParams,
    ) => privateCloudsList(context, subscriptionId, resourceGroupName, options),
    listInSubscription: (
      options?: PrivateCloudsListInSubscriptionOptionalParams,
    ) => privateCloudsListInSubscription(context, subscriptionId, options),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: PrivateCloudsGetOptionalParams,
    ) =>
      privateCloudsGet(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      privateCloudName: string,
      privateCloud: PrivateCloud,
      options?: PrivateCloudsCreateOrUpdateOptionalParams,
    ) =>
      privateCloudsCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        privateCloud,
        options,
      ),
    update: (
      resourceGroupName: string,
      privateCloudName: string,
      privateCloudUpdate: PrivateCloudUpdate,
      options?: PrivateCloudsUpdateOptionalParams,
    ) =>
      privateCloudsUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        privateCloudUpdate,
        options,
      ),
    delete: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: PrivateCloudsDeleteOptionalParams,
    ) =>
      privateCloudsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    rotateVcenterPassword: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: PrivateCloudsRotateVcenterPasswordOptionalParams,
    ) =>
      privateCloudsRotateVcenterPassword(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    rotateNsxtPassword: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: PrivateCloudsRotateNsxtPasswordOptionalParams,
    ) =>
      privateCloudsRotateNsxtPassword(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    listAdminCredentials: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: PrivateCloudsListAdminCredentialsOptionalParams,
    ) =>
      privateCloudsListAdminCredentials(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
  };
}

export function getPrivateCloudsOperations(
  context: AVSContext,
  subscriptionId: string,
): PrivateCloudsOperations {
  return {
    ...getPrivateClouds(context, subscriptionId),
  };
}
