// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { StorageContext } from "../../api/storageContext.js";
import {
  fileSystemsGet,
  fileSystemsCreateOrUpdate,
  fileSystemsUpdate,
  fileSystemsDelete,
  fileSystemsListByResourceGroup,
  fileSystemsListBySubscription,
} from "../../api/fileSystems/index.js";
import {
  FileSystemResource,
  FileSystemResourceUpdate,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  FileSystemsGetOptionalParams,
  FileSystemsCreateOrUpdateOptionalParams,
  FileSystemsUpdateOptionalParams,
  FileSystemsDeleteOptionalParams,
  FileSystemsListByResourceGroupOptionalParams,
  FileSystemsListBySubscriptionOptionalParams,
} from "../../api/options.js";

/** Interface representing a FileSystems operations. */
export interface FileSystemsOperations {
  /** Get a FileSystemResource */
  get: (
    resourceGroupName: string,
    fileSystemName: string,
    options?: FileSystemsGetOptionalParams,
  ) => Promise<FileSystemResource>;
  /** Create a FileSystemResource */
  createOrUpdate: (
    resourceGroupName: string,
    fileSystemName: string,
    resource: FileSystemResource,
    options?: FileSystemsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<FileSystemResource>, FileSystemResource>;
  /** Update a FileSystemResource */
  update: (
    resourceGroupName: string,
    fileSystemName: string,
    properties: FileSystemResourceUpdate,
    options?: FileSystemsUpdateOptionalParams,
  ) => Promise<FileSystemResource>;
  /** Delete a FileSystemResource */
  delete: (
    resourceGroupName: string,
    fileSystemName: string,
    options?: FileSystemsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List FileSystemResource resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: FileSystemsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<FileSystemResource>;
  /** List FileSystemResource resources by subscription ID */
  listBySubscription: (
    options?: FileSystemsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<FileSystemResource>;
}

export function getFileSystems(
  context: StorageContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      fileSystemName: string,
      options?: FileSystemsGetOptionalParams,
    ) =>
      fileSystemsGet(
        context,
        subscriptionId,
        resourceGroupName,
        fileSystemName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      fileSystemName: string,
      resource: FileSystemResource,
      options?: FileSystemsCreateOrUpdateOptionalParams,
    ) =>
      fileSystemsCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        fileSystemName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      fileSystemName: string,
      properties: FileSystemResourceUpdate,
      options?: FileSystemsUpdateOptionalParams,
    ) =>
      fileSystemsUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        fileSystemName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      fileSystemName: string,
      options?: FileSystemsDeleteOptionalParams,
    ) =>
      fileSystemsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        fileSystemName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: FileSystemsListByResourceGroupOptionalParams,
    ) =>
      fileSystemsListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listBySubscription: (
      options?: FileSystemsListBySubscriptionOptionalParams,
    ) => fileSystemsListBySubscription(context, subscriptionId, options),
  };
}

export function getFileSystemsOperations(
  context: StorageContext,
  subscriptionId: string,
): FileSystemsOperations {
  return {
    ...getFileSystems(context, subscriptionId),
  };
}
