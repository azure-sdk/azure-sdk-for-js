// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext } from "../../api/azureVMwareSolutionAPIContext.js";
import { IscsiPath } from "../../models/models.js";
import {
  IscsiPathsDeleteOptionalParams,
  IscsiPathsCreateOrUpdateOptionalParams,
  IscsiPathsGetOptionalParams,
  IscsiPathsListByPrivateCloudOptionalParams,
} from "../../api/iscsiPaths/options.js";
import {
  $delete,
  createOrUpdate,
  get,
  listByPrivateCloud,
} from "../../api/iscsiPaths/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a IscsiPaths operations. */
export interface IscsiPathsOperations {
  /** Delete a IscsiPath */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    privateCloudName: string,
    iscsiPathName: string,
    options?: IscsiPathsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a IscsiPath */
  createOrUpdate: (
    resourceGroupName: string,
    privateCloudName: string,
    iscsiPathName: string,
    resource: IscsiPath,
    options?: IscsiPathsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<IscsiPath>, IscsiPath>;
  /** Get a IscsiPath */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    iscsiPathName: string,
    options?: IscsiPathsGetOptionalParams,
  ) => Promise<IscsiPath>;
  /** List IscsiPath resources by PrivateCloud */
  listByPrivateCloud: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: IscsiPathsListByPrivateCloudOptionalParams,
  ) => PagedAsyncIterableIterator<IscsiPath>;
}

function _getIscsiPaths(context: AzureVMwareSolutionAPIContext) {
  return {
    delete: (
      resourceGroupName: string,
      privateCloudName: string,
      iscsiPathName: string,
      options?: IscsiPathsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, privateCloudName, iscsiPathName, options),
    createOrUpdate: (
      resourceGroupName: string,
      privateCloudName: string,
      iscsiPathName: string,
      resource: IscsiPath,
      options?: IscsiPathsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        privateCloudName,
        iscsiPathName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      iscsiPathName: string,
      options?: IscsiPathsGetOptionalParams,
    ) => get(context, resourceGroupName, privateCloudName, iscsiPathName, options),
    listByPrivateCloud: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: IscsiPathsListByPrivateCloudOptionalParams,
    ) => listByPrivateCloud(context, resourceGroupName, privateCloudName, options),
  };
}

export function _getIscsiPathsOperations(
  context: AzureVMwareSolutionAPIContext,
): IscsiPathsOperations {
  return {
    ..._getIscsiPaths(context),
  };
}
