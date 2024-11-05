// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsContext } from "../../api/workloadsContext.js";
import { SAPInstance, SAPInstanceTagsUpdate } from "../../models/models.js";
import {
  sAPInstancesGet,
  sAPInstancesCreate,
  sAPInstancesUpdate,
  sAPInstancesDelete,
  sAPInstancesListBySapDiscoverySite,
} from "../../api/sAPInstances/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  SAPInstancesGetOptionalParams,
  SAPInstancesCreateOptionalParams,
  SAPInstancesUpdateOptionalParams,
  SAPInstancesDeleteOptionalParams,
  SAPInstancesListBySapDiscoverySiteOptionalParams,
} from "../../models/options.js";

/** Interface representing a SAPInstances operations. */
export interface SAPInstancesOperations {
  /** Gets the SAP Instance resource. */
  get: (
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    sapInstanceName: string,
    options?: SAPInstancesGetOptionalParams,
  ) => Promise<SAPInstance>;
  /** Creates the SAP Instance resource. <br><br>This will be used by service only. PUT operation on this resource by end user will return a Bad Request error. */
  create: (
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    sapInstanceName: string,
    resource: SAPInstance,
    options?: SAPInstancesCreateOptionalParams,
  ) => PollerLike<OperationState<SAPInstance>, SAPInstance>;
  /** Updates the SAP Instance resource. */
  update: (
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    sapInstanceName: string,
    properties: SAPInstanceTagsUpdate,
    options?: SAPInstancesUpdateOptionalParams,
  ) => Promise<SAPInstance>;
  /** Deletes the SAP Instance resource. <br><br>This will be used by service only. Delete operation on this resource by end user will return a Bad Request error. You can delete the parent resource, which is the SAP Migration discovery site resource, using the delete operation on it. */
  delete: (
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    sapInstanceName: string,
    options?: SAPInstancesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Lists the SAP Instance resources for the given SAP Migration discovery site resource. */
  listBySapDiscoverySite: (
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    options?: SAPInstancesListBySapDiscoverySiteOptionalParams,
  ) => PagedAsyncIterableIterator<SAPInstance>;
}

export function getSAPInstances(
  context: WorkloadsContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      sapDiscoverySiteName: string,
      sapInstanceName: string,
      options?: SAPInstancesGetOptionalParams,
    ) =>
      sAPInstancesGet(
        context,
        subscriptionId,
        resourceGroupName,
        sapDiscoverySiteName,
        sapInstanceName,
        options,
      ),
    create: (
      resourceGroupName: string,
      sapDiscoverySiteName: string,
      sapInstanceName: string,
      resource: SAPInstance,
      options?: SAPInstancesCreateOptionalParams,
    ) =>
      sAPInstancesCreate(
        context,
        subscriptionId,
        resourceGroupName,
        sapDiscoverySiteName,
        sapInstanceName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      sapDiscoverySiteName: string,
      sapInstanceName: string,
      properties: SAPInstanceTagsUpdate,
      options?: SAPInstancesUpdateOptionalParams,
    ) =>
      sAPInstancesUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        sapDiscoverySiteName,
        sapInstanceName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      sapDiscoverySiteName: string,
      sapInstanceName: string,
      options?: SAPInstancesDeleteOptionalParams,
    ) =>
      sAPInstancesDelete(
        context,
        subscriptionId,
        resourceGroupName,
        sapDiscoverySiteName,
        sapInstanceName,
        options,
      ),
    listBySapDiscoverySite: (
      resourceGroupName: string,
      sapDiscoverySiteName: string,
      options?: SAPInstancesListBySapDiscoverySiteOptionalParams,
    ) =>
      sAPInstancesListBySapDiscoverySite(
        context,
        subscriptionId,
        resourceGroupName,
        sapDiscoverySiteName,
        options,
      ),
  };
}

export function getSAPInstancesOperations(
  context: WorkloadsContext,
  subscriptionId: string,
): SAPInstancesOperations {
  return {
    ...getSAPInstances(context, subscriptionId),
  };
}
