// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsContext } from "../../api/workloadsContext.js";
import {
  sAPDiscoverySitesImportEntities,
  sAPDiscoverySitesListBySubscription,
  sAPDiscoverySitesListByResourceGroup,
  sAPDiscoverySitesDelete,
  sAPDiscoverySitesUpdate,
  sAPDiscoverySitesCreate,
  sAPDiscoverySitesGet,
} from "../../api/sapDiscoverySites/index.js";
import {
  SAPDiscoverySite,
  SAPDiscoverySiteTagsUpdate,
  OperationStatusResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  SAPDiscoverySitesImportEntitiesOptionalParams,
  SAPDiscoverySitesListBySubscriptionOptionalParams,
  SAPDiscoverySitesListByResourceGroupOptionalParams,
  SAPDiscoverySitesDeleteOptionalParams,
  SAPDiscoverySitesUpdateOptionalParams,
  SAPDiscoverySitesCreateOptionalParams,
  SAPDiscoverySitesGetOptionalParams,
} from "../../api/options.js";

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
    ) => sAPDiscoverySitesImportEntities(context, resourceGroupName, sapDiscoverySiteName, options),
    listBySubscription: (options?: SAPDiscoverySitesListBySubscriptionOptionalParams) =>
      sAPDiscoverySitesListBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: SAPDiscoverySitesListByResourceGroupOptionalParams,
    ) => sAPDiscoverySitesListByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      sapDiscoverySiteName: string,
      options?: SAPDiscoverySitesDeleteOptionalParams,
    ) => sAPDiscoverySitesDelete(context, resourceGroupName, sapDiscoverySiteName, options),
    update: (
      resourceGroupName: string,
      sapDiscoverySiteName: string,
      properties: SAPDiscoverySiteTagsUpdate,
      options?: SAPDiscoverySitesUpdateOptionalParams,
    ) =>
      sAPDiscoverySitesUpdate(
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
      sAPDiscoverySitesCreate(context, resourceGroupName, sapDiscoverySiteName, resource, options),
    get: (
      resourceGroupName: string,
      sapDiscoverySiteName: string,
      options?: SAPDiscoverySitesGetOptionalParams,
    ) => sAPDiscoverySitesGet(context, resourceGroupName, sapDiscoverySiteName, options),
  };
}

export function _getSAPDiscoverySitesOperations(
  context: WorkloadsContext,
): SAPDiscoverySitesOperations {
  return {
    ..._getSAPDiscoverySites(context),
  };
}
