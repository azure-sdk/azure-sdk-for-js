// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsContext } from "../../api/workloadsContext.js";
import {
  SAPDiscoverySite,
  SAPDiscoverySiteTagsUpdate,
  OperationStatusResult,
} from "../../models/models.js";
import {
  sAPDiscoverySitesGet,
  sAPDiscoverySitesCreate,
  sAPDiscoverySitesUpdate,
  sAPDiscoverySitesDelete,
  sAPDiscoverySitesListByResourceGroup,
  sAPDiscoverySitesListBySubscription,
  sAPDiscoverySitesImportEntities,
} from "../../api/sAPDiscoverySites/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  SAPDiscoverySitesGetOptionalParams,
  SAPDiscoverySitesCreateOptionalParams,
  SAPDiscoverySitesUpdateOptionalParams,
  SAPDiscoverySitesDeleteOptionalParams,
  SAPDiscoverySitesListByResourceGroupOptionalParams,
  SAPDiscoverySitesListBySubscriptionOptionalParams,
  SAPDiscoverySitesImportEntitiesOptionalParams,
} from "../../models/options.js";

/** Interface representing a SAPDiscoverySites operations. */
export interface SAPDiscoverySitesOperations {
  /** Gets a SAP Migration discovery site resource. */
  get: (
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    options?: SAPDiscoverySitesGetOptionalParams,
  ) => Promise<SAPDiscoverySite>;
  /** Creates a discovery site resource for SAP Migration. This resource will be used to run system discovery and assessment with Azure Migrate. */
  create: (
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    resource: SAPDiscoverySite,
    options?: SAPDiscoverySitesCreateOptionalParams,
  ) => PollerLike<OperationState<SAPDiscoverySite>, SAPDiscoverySite>;
  /** Updates a SAP Migration discovery site resource. */
  update: (
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    properties: SAPDiscoverySiteTagsUpdate,
    options?: SAPDiscoverySitesUpdateOptionalParams,
  ) => Promise<SAPDiscoverySite>;
  /** Deletes a SAP Migration discovery site resource and its child resources, that is the associated SAP Instances and Server Instances. */
  delete: (
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    options?: SAPDiscoverySitesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Gets all SAP Migration discovery site resources in a Resource Group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: SAPDiscoverySitesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<SAPDiscoverySite>;
  /** Gets all SAP Migration discovery site resources in a Subscription. */
  listBySubscription: (
    options?: SAPDiscoverySitesListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<SAPDiscoverySite>;
  /** Import your SAP systems' inventory using the [Discovery template](https://go.microsoft.com/fwlink/?linkid=2249111) into your SAP Migration discovery site resource and it's child resources, the SAP instances and Server instances. */
  importEntities: (
    resourceGroupName: string,
    sapDiscoverySiteName: string,
    options?: SAPDiscoverySitesImportEntitiesOptionalParams,
  ) => PollerLike<OperationState<OperationStatusResult>, OperationStatusResult>;
}

export function getSAPDiscoverySites(
  context: WorkloadsContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      sapDiscoverySiteName: string,
      options?: SAPDiscoverySitesGetOptionalParams,
    ) =>
      sAPDiscoverySitesGet(
        context,
        subscriptionId,
        resourceGroupName,
        sapDiscoverySiteName,
        options,
      ),
    create: (
      resourceGroupName: string,
      sapDiscoverySiteName: string,
      resource: SAPDiscoverySite,
      options?: SAPDiscoverySitesCreateOptionalParams,
    ) =>
      sAPDiscoverySitesCreate(
        context,
        subscriptionId,
        resourceGroupName,
        sapDiscoverySiteName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      sapDiscoverySiteName: string,
      properties: SAPDiscoverySiteTagsUpdate,
      options?: SAPDiscoverySitesUpdateOptionalParams,
    ) =>
      sAPDiscoverySitesUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        sapDiscoverySiteName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      sapDiscoverySiteName: string,
      options?: SAPDiscoverySitesDeleteOptionalParams,
    ) =>
      sAPDiscoverySitesDelete(
        context,
        subscriptionId,
        resourceGroupName,
        sapDiscoverySiteName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: SAPDiscoverySitesListByResourceGroupOptionalParams,
    ) =>
      sAPDiscoverySitesListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listBySubscription: (
      options?: SAPDiscoverySitesListBySubscriptionOptionalParams,
    ) => sAPDiscoverySitesListBySubscription(context, subscriptionId, options),
    importEntities: (
      resourceGroupName: string,
      sapDiscoverySiteName: string,
      options?: SAPDiscoverySitesImportEntitiesOptionalParams,
    ) =>
      sAPDiscoverySitesImportEntities(
        context,
        subscriptionId,
        resourceGroupName,
        sapDiscoverySiteName,
        options,
      ),
  };
}

export function getSAPDiscoverySitesOperations(
  context: WorkloadsContext,
  subscriptionId: string,
): SAPDiscoverySitesOperations {
  return {
    ...getSAPDiscoverySites(context, subscriptionId),
  };
}
