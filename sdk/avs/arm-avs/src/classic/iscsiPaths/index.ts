// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AVSContext } from "../../api/azureVMwareSolutionAPIContext.js";
import { IscsiPath } from "../../models/models.js";
import {
  iscsiPathsListByPrivateCloud,
  iscsiPathsGet,
  iscsiPathsCreateOrUpdate,
  iscsiPathsDelete,
} from "../../api/iscsiPaths/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  IscsiPathsListByPrivateCloudOptionalParams,
  IscsiPathsGetOptionalParams,
  IscsiPathsCreateOrUpdateOptionalParams,
  IscsiPathsDeleteOptionalParams,
} from "../../models/options.js";

/** Interface representing a IscsiPaths operations. */
export interface IscsiPathsOperations {
  /** List IscsiPath resources by PrivateCloud */
  listByPrivateCloud: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: IscsiPathsListByPrivateCloudOptionalParams,
  ) => PagedAsyncIterableIterator<IscsiPath>;
  /** Get a IscsiPath */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: IscsiPathsGetOptionalParams,
  ) => Promise<IscsiPath>;
  /** Create a IscsiPath */
  createOrUpdate: (
    resourceGroupName: string,
    privateCloudName: string,
    resource: IscsiPath,
    options?: IscsiPathsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<IscsiPath>, IscsiPath>;
  /** Delete a IscsiPath */
  delete: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: IscsiPathsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getIscsiPaths(context: AVSContext, subscriptionId: string) {
  return {
    listByPrivateCloud: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: IscsiPathsListByPrivateCloudOptionalParams,
    ) =>
      iscsiPathsListByPrivateCloud(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: IscsiPathsGetOptionalParams,
    ) =>
      iscsiPathsGet(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      privateCloudName: string,
      resource: IscsiPath,
      options?: IscsiPathsCreateOrUpdateOptionalParams,
    ) =>
      iscsiPathsCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        resource,
        options,
      ),
    delete: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: IscsiPathsDeleteOptionalParams,
    ) =>
      iscsiPathsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
  };
}

export function getIscsiPathsOperations(
  context: AVSContext,
  subscriptionId: string,
): IscsiPathsOperations {
  return {
    ...getIscsiPaths(context, subscriptionId),
  };
}
