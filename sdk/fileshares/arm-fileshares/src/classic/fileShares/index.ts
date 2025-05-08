// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FileSharesContext } from "../../api/fileSharesContext.js";
import {
  FileShare,
  FileShareUpdate,
  CheckNameAvailabilityRequest,
  CheckNameAvailabilityResponse,
  FileShareSnapshot,
  FileShareSnapshotUpdate,
} from "../../models/models.js";
import {
  FileSharesListByFileShareOptionalParams,
  FileSharesDeleteFileShareSnapshotOptionalParams,
  FileSharesUpdateFileShareSnapshotOptionalParams,
  FileSharesCreateOrUpdateFileShareSnapshotOptionalParams,
  FileSharesGetFileShareSnapshotOptionalParams,
  FileSharesCheckNameAvailabilityOptionalParams,
  FileSharesListByParentOptionalParams,
  FileSharesListBySubscriptionOptionalParams,
  FileSharesDeleteOptionalParams,
  FileSharesUpdateOptionalParams,
  FileSharesCreateOrUpdateOptionalParams,
  FileSharesGetOptionalParams,
} from "../../api/fileShares/options.js";
import {
  listByFileShare,
  deleteFileShareSnapshot,
  updateFileShareSnapshot,
  createOrUpdateFileShareSnapshot,
  getFileShareSnapshot,
  checkNameAvailability,
  listByParent,
  listBySubscription,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/fileShares/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a FileShares operations. */
export interface FileSharesOperations {
  /** List FileShareSnapshot by FileShare. */
  listByFileShare: (
    resourceGroupName: string,
    resourceName: string,
    options?: FileSharesListByFileShareOptionalParams,
  ) => PagedAsyncIterableIterator<FileShareSnapshot>;
  /** Delete a FileShareSnapshot. */
  deleteFileShareSnapshot: (
    resourceGroupName: string,
    resourceName: string,
    name: string,
    options?: FileSharesDeleteFileShareSnapshotOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a FileShareSnapshot. */
  updateFileShareSnapshot: (
    resourceGroupName: string,
    resourceName: string,
    name: string,
    properties: FileShareSnapshotUpdate,
    options?: FileSharesUpdateFileShareSnapshotOptionalParams,
  ) => PollerLike<OperationState<FileShareSnapshot>, FileShareSnapshot>;
  /** Create a FileShareSnapshot. */
  createOrUpdateFileShareSnapshot: (
    resourceGroupName: string,
    resourceName: string,
    name: string,
    resource: FileShareSnapshot,
    options?: FileSharesCreateOrUpdateFileShareSnapshotOptionalParams,
  ) => Promise<FileShareSnapshot>;
  /** Get a FileShareSnapshot */
  getFileShareSnapshot: (
    resourceGroupName: string,
    resourceName: string,
    name: string,
    options?: FileSharesGetFileShareSnapshotOptionalParams,
  ) => Promise<FileShareSnapshot>;
  /** Implements local CheckNameAvailability operations */
  checkNameAvailability: (
    location: string,
    body: CheckNameAvailabilityRequest,
    options?: FileSharesCheckNameAvailabilityOptionalParams,
  ) => Promise<CheckNameAvailabilityResponse>;
  /** List FileShare resources by resource group */
  listByParent: (
    resourceGroupName: string,
    options?: FileSharesListByParentOptionalParams,
  ) => PagedAsyncIterableIterator<FileShare>;
  /** List FileShare resources by subscription ID */
  listBySubscription: (
    options?: FileSharesListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<FileShare>;
  /** Delete a FileShare */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    resourceName: string,
    options?: FileSharesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a FileShare */
  update: (
    resourceGroupName: string,
    resourceName: string,
    properties: FileShareUpdate,
    options?: FileSharesUpdateOptionalParams,
  ) => PollerLike<OperationState<FileShare>, FileShare>;
  /** Create or update a file share. */
  createOrUpdate: (
    resourceGroupName: string,
    resourceName: string,
    resource: FileShare,
    options?: FileSharesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<FileShare>, FileShare>;
  /** Get a FileShare */
  get: (
    resourceGroupName: string,
    resourceName: string,
    options?: FileSharesGetOptionalParams,
  ) => Promise<FileShare>;
}

function _getFileShares(context: FileSharesContext) {
  return {
    listByFileShare: (
      resourceGroupName: string,
      resourceName: string,
      options?: FileSharesListByFileShareOptionalParams,
    ) => listByFileShare(context, resourceGroupName, resourceName, options),
    deleteFileShareSnapshot: (
      resourceGroupName: string,
      resourceName: string,
      name: string,
      options?: FileSharesDeleteFileShareSnapshotOptionalParams,
    ) => deleteFileShareSnapshot(context, resourceGroupName, resourceName, name, options),
    updateFileShareSnapshot: (
      resourceGroupName: string,
      resourceName: string,
      name: string,
      properties: FileShareSnapshotUpdate,
      options?: FileSharesUpdateFileShareSnapshotOptionalParams,
    ) =>
      updateFileShareSnapshot(context, resourceGroupName, resourceName, name, properties, options),
    createOrUpdateFileShareSnapshot: (
      resourceGroupName: string,
      resourceName: string,
      name: string,
      resource: FileShareSnapshot,
      options?: FileSharesCreateOrUpdateFileShareSnapshotOptionalParams,
    ) =>
      createOrUpdateFileShareSnapshot(
        context,
        resourceGroupName,
        resourceName,
        name,
        resource,
        options,
      ),
    getFileShareSnapshot: (
      resourceGroupName: string,
      resourceName: string,
      name: string,
      options?: FileSharesGetFileShareSnapshotOptionalParams,
    ) => getFileShareSnapshot(context, resourceGroupName, resourceName, name, options),
    checkNameAvailability: (
      location: string,
      body: CheckNameAvailabilityRequest,
      options?: FileSharesCheckNameAvailabilityOptionalParams,
    ) => checkNameAvailability(context, location, body, options),
    listByParent: (resourceGroupName: string, options?: FileSharesListByParentOptionalParams) =>
      listByParent(context, resourceGroupName, options),
    listBySubscription: (options?: FileSharesListBySubscriptionOptionalParams) =>
      listBySubscription(context, options),
    delete: (
      resourceGroupName: string,
      resourceName: string,
      options?: FileSharesDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, resourceName, options),
    update: (
      resourceGroupName: string,
      resourceName: string,
      properties: FileShareUpdate,
      options?: FileSharesUpdateOptionalParams,
    ) => update(context, resourceGroupName, resourceName, properties, options),
    createOrUpdate: (
      resourceGroupName: string,
      resourceName: string,
      resource: FileShare,
      options?: FileSharesCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, resourceName, resource, options),
    get: (resourceGroupName: string, resourceName: string, options?: FileSharesGetOptionalParams) =>
      get(context, resourceGroupName, resourceName, options),
  };
}

export function _getFileSharesOperations(context: FileSharesContext): FileSharesOperations {
  return {
    ..._getFileShares(context),
  };
}
