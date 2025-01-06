// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AvsContext } from "../../api/avsContext.js";
import {
  addonsList,
  addonsGet,
  addonsCreateOrUpdate,
  addonsDelete,
} from "../../api/addons/index.js";
import { Addon } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  AddonsListOptionalParams,
  AddonsGetOptionalParams,
  AddonsCreateOrUpdateOptionalParams,
  AddonsDeleteOptionalParams,
} from "../../api/options.js";

/** Interface representing a Addons operations. */
export interface AddonsOperations {
  /** List Addon resources by PrivateCloud */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: AddonsListOptionalParams,
  ) => PagedAsyncIterableIterator<Addon>;
  /** Get a Addon */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    addonName: string,
    options?: AddonsGetOptionalParams,
  ) => Promise<Addon>;
  /** Create a Addon */
  createOrUpdate: (
    resourceGroupName: string,
    privateCloudName: string,
    addonName: string,
    addon: Addon,
    options?: AddonsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Addon>, Addon>;
  /** Delete a Addon */
  delete: (
    resourceGroupName: string,
    privateCloudName: string,
    addonName: string,
    options?: AddonsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getAddons(context: AvsContext, subscriptionId: string) {
  return {
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: AddonsListOptionalParams,
    ) =>
      addonsList(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      addonName: string,
      options?: AddonsGetOptionalParams,
    ) =>
      addonsGet(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        addonName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      privateCloudName: string,
      addonName: string,
      addon: Addon,
      options?: AddonsCreateOrUpdateOptionalParams,
    ) =>
      addonsCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        addonName,
        addon,
        options,
      ),
    delete: (
      resourceGroupName: string,
      privateCloudName: string,
      addonName: string,
      options?: AddonsDeleteOptionalParams,
    ) =>
      addonsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        addonName,
        options,
      ),
  };
}

export function getAddonsOperations(
  context: AvsContext,
  subscriptionId: string,
): AddonsOperations {
  return {
    ...getAddons(context, subscriptionId),
  };
}
