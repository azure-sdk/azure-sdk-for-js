// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsContext } from "../../api/workloadsContext.js";
import {
  sAPInstancesListBySapDiscoverySite,
  sAPInstancesDelete,
  sAPInstancesUpdate,
  sAPInstancesCreate,
  sAPInstancesGet,
} from "../../api/sapInstances/index.js";
import { SAPInstance, SAPInstanceTagsUpdate } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  SAPInstancesListBySapDiscoverySiteOptionalParams,
  SAPInstancesDeleteOptionalParams,
  SAPInstancesUpdateOptionalParams,
  SAPInstancesCreateOptionalParams,
  SAPInstancesGetOptionalParams,
} from "../../api/options.js";

/** Interface representing a SAPInstances operations. */
export interface SAPInstancesOperations {
  /** Lists the SAP Instance resources for the given SAP Migration discovery site resource. */
  listBySapDiscoverySite: (
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    options?: SAPInstancesListBySapDiscoverySiteOptionalParams,
  ) => PagedAsyncIterableIterator<SAPInstance>;
  /** Deletes the SAP Instance resource. <br><br>This will be used by service only. Delete operation on this resource by end user will return a Bad Request error. You can delete the parent resource, which is the SAP Migration discovery site resource, using the delete operation on it. */
  delete: (
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    sapInstanceName: string,
    options?: SAPInstancesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Updates the SAP Instance resource. */
  update: (
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    sapInstanceName: string,
    properties: SAPInstanceTagsUpdate,
    options?: SAPInstancesUpdateOptionalParams,
  ) => Promise<SAPInstance>;
  /** Creates the SAP Instance resource. <br><br>This will be used by service only. PUT operation on this resource by end user will return a Bad Request error. */
  create: (
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    sapInstanceName: string,
    resource: SAPInstance,
    options?: SAPInstancesCreateOptionalParams,
  ) => PollerLike<OperationState<SAPInstance>, SAPInstance>;
  /** Gets the SAP Instance resource. */
  get: (
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    sapInstanceName: string,
    options?: SAPInstancesGetOptionalParams,
  ) => Promise<SAPInstance>;
}

function _getSAPInstances(context: WorkloadsContext) {
  return {
    listBySapDiscoverySite: (
      resourceGroupName: string,
      sapDiscoverySiteName: string,
      options?: SAPInstancesListBySapDiscoverySiteOptionalParams,
    ) =>
      sAPInstancesListBySapDiscoverySite(context, resourceGroupName, sapDiscoverySiteName, options),
    delete: (
      resourceGroupName: string,
      sapDiscoverySiteName: string,
      sapInstanceName: string,
      options?: SAPInstancesDeleteOptionalParams,
    ) =>
      sAPInstancesDelete(
        context,
        resourceGroupName,
        sapDiscoverySiteName,
        sapInstanceName,
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
        resourceGroupName,
        sapDiscoverySiteName,
        sapInstanceName,
        properties,
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
        resourceGroupName,
        sapDiscoverySiteName,
        sapInstanceName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      sapDiscoverySiteName: string,
      sapInstanceName: string,
      options?: SAPInstancesGetOptionalParams,
    ) =>
      sAPInstancesGet(context, resourceGroupName, sapDiscoverySiteName, sapInstanceName, options),
  };
}

export function _getSAPInstancesOperations(context: WorkloadsContext): SAPInstancesOperations {
  return {
    ..._getSAPInstances(context),
  };
}
