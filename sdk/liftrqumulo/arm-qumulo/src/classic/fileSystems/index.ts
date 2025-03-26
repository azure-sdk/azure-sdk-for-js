// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { StorageContext } from "../../api/storageContext.js";
import { FileSystemResource, FileSystemResourceUpdate } from "../../models/models.js";
import {
  FileSystemsListBySubscriptionOptionalParams,
  FileSystemsListByResourceGroupOptionalParams,
  FileSystemsDeleteOptionalParams,
  FileSystemsUpdateOptionalParams,
  FileSystemsCreateOrUpdateOptionalParams,
  FileSystemsGetOptionalParams,
} from "../../api/fileSystems/options.js";
import {
  fileSystemsListBySubscription,
  fileSystemsListByResourceGroup,
  fileSystemsDelete,
  fileSystemsUpdate,
  fileSystemsCreateOrUpdate,
  fileSystemsGet,
} from "../../api/fileSystems/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a FileSystems operations. */
export interface FileSystemsOperations {
  /** List FileSystemResource resources by subscription ID */
  listBySubscription: (
    options?: FileSystemsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<FileSystemResource>;
  /** List FileSystemResource resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: FileSystemsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<FileSystemResource>;
  /** Delete a FileSystemResource */
  delete: (
    resourceGroupName: string,
    fileSystemName: string,
    options?: FileSystemsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a FileSystemResource */
  update: (
    resourceGroupName: string,
    fileSystemName: string,
    properties: FileSystemResourceUpdate,
    options?: FileSystemsUpdateOptionalParams,
  ) => Promise<FileSystemResource>;
  /** Create a FileSystemResource */
  createOrUpdate: (
    resourceGroupName: string,
    fileSystemName: string,
    resource: FileSystemResource,
    options?: FileSystemsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<FileSystemResource>, FileSystemResource>;
  /** Get a FileSystemResource */
  get: (
    resourceGroupName: string,
    fileSystemName: string,
    options?: FileSystemsGetOptionalParams,
  ) => Promise<FileSystemResource>;
}

function _getFileSystems(context: StorageContext) {
  return {
    listBySubscription: (options?: FileSystemsListBySubscriptionOptionalParams) =>
      fileSystemsListBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: FileSystemsListByResourceGroupOptionalParams,
    ) => fileSystemsListByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      fileSystemName: string,
      options?: FileSystemsDeleteOptionalParams,
    ) => fileSystemsDelete(context, resourceGroupName, fileSystemName, options),
    update: (
      resourceGroupName: string,
      fileSystemName: string,
      properties: FileSystemResourceUpdate,
      options?: FileSystemsUpdateOptionalParams,
    ) => fileSystemsUpdate(context, resourceGroupName, fileSystemName, properties, options),
    createOrUpdate: (
      resourceGroupName: string,
      fileSystemName: string,
      resource: FileSystemResource,
      options?: FileSystemsCreateOrUpdateOptionalParams,
    ) => fileSystemsCreateOrUpdate(context, resourceGroupName, fileSystemName, resource, options),
    get: (
      resourceGroupName: string,
      fileSystemName: string,
      options?: FileSystemsGetOptionalParams,
    ) => fileSystemsGet(context, resourceGroupName, fileSystemName, options),
  };
}

export function _getFileSystemsOperations(context: StorageContext): FileSystemsOperations {
  return {
    ..._getFileSystems(context),
  };
}
