// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsContext } from "../../api/workloadsContext.js";
import {
  SAPDiscoverySite,
  SAPDiscoverySiteTagsUpdate,
  OperationStatusResult,
} from "../../models/models.js";
import {
  SAPDiscoverySitesImportEntitiesOptionalParams,
  SAPDiscoverySitesListBySubscriptionOptionalParams,
  SAPDiscoverySitesListByResourceGroupOptionalParams,
  SAPDiscoverySitesDeleteOptionalParams,
  SAPDiscoverySitesUpdateOptionalParams,
  SAPDiscoverySitesCreateOptionalParams,
  SAPDiscoverySitesGetOptionalParams,
} from "../../api/sapDiscoverySites/options.js";
import {
  sapDiscoverySitesImportEntities,
  sapDiscoverySitesListBySubscription,
  sapDiscoverySitesListByResourceGroup,
  sapDiscoverySitesDelete,
  sapDiscoverySitesUpdate,
  sapDiscoverySitesCreate,
  sapDiscoverySitesGet,
} from "../../api/sapDiscoverySites/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a SAPDiscoverySites operations. */
export interface SAPDiscoverySitesOperations {
  /** Import your SAP systems' inventory using the [Discovery template](https://go.microsoft.com/fwlink/?linkid=2249111) into your SAP Migration discovery site resource and it's child resources, the SAP instances and Server instances. */
  importEntities: (
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    options?: SAPDiscoverySitesImportEntitiesOptionalParams,
  ) => PollerLike<OperationState<OperationStatusResult>, OperationStatusResult>;
  /** Gets all SAP Migration discovery site resources in a Subscription. */
  listBySubscription: (
    options?: SAPDiscoverySitesListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<SAPDiscoverySite>;
  /** Gets all SAP Migration discovery site resources in a Resource Group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: SAPDiscoverySitesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<SAPDiscoverySite>;
  /** Deletes a SAP Migration discovery site resource and its child resources, that is the associated SAP Instances and Server Instances. */
  delete: (
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    options?: SAPDiscoverySitesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Updates a SAP Migration discovery site resource. */
  update: (
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    properties: SAPDiscoverySiteTagsUpdate,
    options?: SAPDiscoverySitesUpdateOptionalParams,
  ) => Promise<SAPDiscoverySite>;
  /** Creates a discovery site resource for SAP Migration. This resource will be used to run system discovery and assessment with Azure Migrate. */
  create: (
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    resource: SAPDiscoverySite,
    options?: SAPDiscoverySitesCreateOptionalParams,
  ) => PollerLike<OperationState<SAPDiscoverySite>, SAPDiscoverySite>;
  /** Gets a SAP Migration discovery site resource. */
  get: (
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    options?: SAPDiscoverySitesGetOptionalParams,
  ) => Promise<SAPDiscoverySite>;
}

function _getSAPDiscoverySites(context: WorkloadsContext) {
  return {
    importEntities: (
      resourceGroupName: string,
      sapDiscoverySiteName: string,
      options?: SAPDiscoverySitesImportEntitiesOptionalParams,
    ) => sapDiscoverySitesImportEntities(context, resourceGroupName, sapDiscoverySiteName, options),
    listBySubscription: (options?: SAPDiscoverySitesListBySubscriptionOptionalParams) =>
      sapDiscoverySitesListBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: SAPDiscoverySitesListByResourceGroupOptionalParams,
    ) => sapDiscoverySitesListByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      sapDiscoverySiteName: string,
      options?: SAPDiscoverySitesDeleteOptionalParams,
    ) => sapDiscoverySitesDelete(context, resourceGroupName, sapDiscoverySiteName, options),
    update: (
      resourceGroupName: string,
      sapDiscoverySiteName: string,
      properties: SAPDiscoverySiteTagsUpdate,
      options?: SAPDiscoverySitesUpdateOptionalParams,
    ) =>
      sapDiscoverySitesUpdate(
        context,
        resourceGroupName,
        sapDiscoverySiteName,
        properties,
        options,
      ),
    create: (
      resourceGroupName: string,
      sapDiscoverySiteName: string,
      resource: SAPDiscoverySite,
      options?: SAPDiscoverySitesCreateOptionalParams,
    ) =>
      sapDiscoverySitesCreate(context, resourceGroupName, sapDiscoverySiteName, resource, options),
    get: (
      resourceGroupName: string,
      sapDiscoverySiteName: string,
      options?: SAPDiscoverySitesGetOptionalParams,
    ) => sapDiscoverySitesGet(context, resourceGroupName, sapDiscoverySiteName, options),
  };
}

export function _getSAPDiscoverySitesOperations(
  context: WorkloadsContext,
): SAPDiscoverySitesOperations {
  return {
    ..._getSAPDiscoverySites(context),
  };
}
