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
  importEntities,
  listBySubscription,
  listByResourceGroup,
  $delete,
  update,
  create,
  get,
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
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
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
    ) => importEntities(context, resourceGroupName, sapDiscoverySiteName, options),
    listBySubscription: (options?: SAPDiscoverySitesListBySubscriptionOptionalParams) =>
      listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: SAPDiscoverySitesListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      sapDiscoverySiteName: string,
      options?: SAPDiscoverySitesDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, sapDiscoverySiteName, options),
    update: (
      resourceGroupName: string,
      sapDiscoverySiteName: string,
      properties: SAPDiscoverySiteTagsUpdate,
      options?: SAPDiscoverySitesUpdateOptionalParams,
    ) => update(context, resourceGroupName, sapDiscoverySiteName, properties, options),
    create: (
      resourceGroupName: string,
      sapDiscoverySiteName: string,
      resource: SAPDiscoverySite,
      options?: SAPDiscoverySitesCreateOptionalParams,
    ) => create(context, resourceGroupName, sapDiscoverySiteName, resource, options),
    get: (
      resourceGroupName: string,
      sapDiscoverySiteName: string,
      options?: SAPDiscoverySitesGetOptionalParams,
    ) => get(context, resourceGroupName, sapDiscoverySiteName, options),
  };
}

export function _getSAPDiscoverySitesOperations(
  context: WorkloadsContext,
): SAPDiscoverySitesOperations {
  return {
    ..._getSAPDiscoverySites(context),
  };
}
