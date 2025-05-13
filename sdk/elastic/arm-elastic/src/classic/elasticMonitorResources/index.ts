// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticContext } from "../../api/elasticContext.js";
import {
  ElasticMonitorResource,
  ElasticMonitorResourceUpdateParameters,
  MonitoredResource,
  DeploymentInfoResponse,
  ExternalUserInfo,
  ExternalUserCreationResponse,
  BillingInfoResponse,
  ConnectedPartnerResourcesListFormat,
  VMResources,
  VMIngestionDetailsResponse,
  VMCollectionUpdate,
  UpgradableVersionsList,
  ElasticMonitorUpgrade,
  ElasticTrafficFilterResponse,
  OkResponse,
  ResubscribeProperties,
  ArmResponseElasticMonitorResource,
} from "../../models/models.js";
import {
  ElasticMonitorResourcesResubscribeOptionalParams,
  ElasticMonitorResourcesTrafficFiltersDeleteOptionalParams,
  ElasticMonitorResourcesDetachTrafficFilterUpdateOptionalParams,
  ElasticMonitorResourcesDetachAndDeleteTrafficFilterDeleteOptionalParams,
  ElasticMonitorResourcesAssociateOptionalParams,
  ElasticMonitorResourcesCreateAndAssociatePLFilterCreateOptionalParams,
  ElasticMonitorResourcesCreateAndAssociateIPFilterCreateOptionalParams,
  ElasticMonitorResourcesListAssociatedTrafficFiltersListOptionalParams,
  ElasticMonitorResourcesAllTrafficFiltersListOptionalParams,
  ElasticMonitorResourcesUpgradeOptionalParams,
  ElasticMonitorResourcesUpgradableVersionsDetailsOptionalParams,
  ElasticMonitorResourcesVMCollectionUpdateOptionalParams,
  ElasticMonitorResourcesDetailsOptionalParams,
  ElasticMonitorResourcesVMHostListOptionalParams,
  ElasticMonitorResourcesConnectedPartnerResourcesListOptionalParams,
  ElasticMonitorResourcesBillingInfoGetOptionalParams,
  ElasticMonitorResourcesCreateOrUpdateOptionalParams,
  ElasticMonitorResourcesDeploymentInfoListOptionalParams,
  ElasticMonitorResourcesMonitoredResourcesListOptionalParams,
  ElasticMonitorResourcesListOptionalParams,
  ElasticMonitorResourcesListByResourceGroupOptionalParams,
  ElasticMonitorResourcesDeleteOptionalParams,
  ElasticMonitorResourcesUpdateOptionalParams,
  ElasticMonitorResourcesCreateOptionalParams,
  ElasticMonitorResourcesGetOptionalParams,
} from "../../api/elasticMonitorResources/options.js";
import {
  resubscribe,
  trafficFiltersDelete,
  detachTrafficFilterUpdate,
  detachAndDeleteTrafficFilterDelete,
  associate,
  createAndAssociatePLFilterCreate,
  createAndAssociateIPFilterCreate,
  listAssociatedTrafficFiltersList,
  allTrafficFiltersList,
  upgrade,
  upgradableVersionsDetails,
  vMCollectionUpdate,
  details,
  vMHostList,
  connectedPartnerResourcesList,
  billingInfoGet,
  createOrUpdate,
  deploymentInfoList,
  monitoredResourcesList,
  list,
  listByResourceGroup,
  $delete,
  update,
  create,
  get,
} from "../../api/elasticMonitorResources/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a ElasticMonitorResources operations. */
export interface ElasticMonitorResourcesOperations {
  /** Resubscribe the Elasticsearch Organization. */
  resubscribe: (
    resourceGroupName: string,
    monitorName: string,
    body: {
      body?: ResubscribeProperties;
    },
    options?: ElasticMonitorResourcesResubscribeOptionalParams,
  ) => PollerLike<
    OperationState<ArmResponseElasticMonitorResource>,
    ArmResponseElasticMonitorResource
  >;
  /** Delete traffic filter from the account. */
  trafficFiltersDelete: (
    resourceGroupName: string,
    monitorName: string,
    options?: ElasticMonitorResourcesTrafficFiltersDeleteOptionalParams,
  ) => Promise<void>;
  /** Detach traffic filter for the given deployment. */
  detachTrafficFilterUpdate: (
    resourceGroupName: string,
    monitorName: string,
    options?: ElasticMonitorResourcesDetachTrafficFilterUpdateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Detach and Delete traffic filter from the given deployment. */
  detachAndDeleteTrafficFilterDelete: (
    resourceGroupName: string,
    monitorName: string,
    options?: ElasticMonitorResourcesDetachAndDeleteTrafficFilterDeleteOptionalParams,
  ) => Promise<void>;
  /** Associate traffic filter for the given deployment. */
  associate: (
    resourceGroupName: string,
    monitorName: string,
    options?: ElasticMonitorResourcesAssociateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create and Associate private link traffic filter for the given deployment. */
  createAndAssociatePLFilterCreate: (
    resourceGroupName: string,
    monitorName: string,
    options?: ElasticMonitorResourcesCreateAndAssociatePLFilterCreateOptionalParams,
  ) => PollerLike<OperationState<OkResponse>, OkResponse>;
  /** Create and Associate IP traffic filter for the given deployment. */
  createAndAssociateIPFilterCreate: (
    resourceGroupName: string,
    monitorName: string,
    options?: ElasticMonitorResourcesCreateAndAssociateIPFilterCreateOptionalParams,
  ) => PollerLike<OperationState<OkResponse>, OkResponse>;
  /** Get the list of all associated traffic filters for the given deployment. */
  listAssociatedTrafficFiltersList: (
    resourceGroupName: string,
    monitorName: string,
    options?: ElasticMonitorResourcesListAssociatedTrafficFiltersListOptionalParams,
  ) => Promise<ElasticTrafficFilterResponse>;
  /** Get the list of all traffic filters for the account. */
  allTrafficFiltersList: (
    resourceGroupName: string,
    monitorName: string,
    options?: ElasticMonitorResourcesAllTrafficFiltersListOptionalParams,
  ) => Promise<ElasticTrafficFilterResponse>;
  /** Upgradable version for a monitor resource. */
  upgrade: (
    resourceGroupName: string,
    monitorName: string,
    body: {
      body?: ElasticMonitorUpgrade;
    },
    options?: ElasticMonitorResourcesUpgradeOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List of upgradable versions for a given monitor resource. */
  upgradableVersionsDetails: (
    resourceGroupName: string,
    monitorName: string,
    options?: ElasticMonitorResourcesUpgradableVersionsDetailsOptionalParams,
  ) => Promise<UpgradableVersionsList>;
  /** Update the vm details that will be monitored by the Elastic monitor resource. */
  vMCollectionUpdate: (
    resourceGroupName: string,
    monitorName: string,
    body: {
      body?: VMCollectionUpdate;
    },
    options?: ElasticMonitorResourcesVMCollectionUpdateOptionalParams,
  ) => Promise<void>;
  /** List the vm ingestion details that will be monitored by the Elastic monitor resource. */
  details: (
    resourceGroupName: string,
    monitorName: string,
    options?: ElasticMonitorResourcesDetailsOptionalParams,
  ) => Promise<VMIngestionDetailsResponse>;
  /** List the vm resources currently being monitored by the Elastic monitor resource. */
  vMHostList: (
    resourceGroupName: string,
    monitorName: string,
    options?: ElasticMonitorResourcesVMHostListOptionalParams,
  ) => PagedAsyncIterableIterator<VMResources>;
  /** List of all active deployments that are associated with the marketplace subscription linked to the given monitor. */
  connectedPartnerResourcesList: (
    resourceGroupName: string,
    monitorName: string,
    options?: ElasticMonitorResourcesConnectedPartnerResourcesListOptionalParams,
  ) => PagedAsyncIterableIterator<ConnectedPartnerResourcesListFormat>;
  /** Get marketplace and organization info mapped to the given monitor. */
  billingInfoGet: (
    resourceGroupName: string,
    monitorName: string,
    options?: ElasticMonitorResourcesBillingInfoGetOptionalParams,
  ) => Promise<BillingInfoResponse>;
  /** Create User inside elastic deployment which are used by customers to perform operations on the elastic deployment */
  createOrUpdate: (
    resourceGroupName: string,
    monitorName: string,
    body: {
      body?: ExternalUserInfo;
    },
    options?: ElasticMonitorResourcesCreateOrUpdateOptionalParams,
  ) => Promise<ExternalUserCreationResponse>;
  /** Fetch information regarding Elastic cloud deployment corresponding to the Elastic monitor resource. */
  deploymentInfoList: (
    resourceGroupName: string,
    monitorName: string,
    options?: ElasticMonitorResourcesDeploymentInfoListOptionalParams,
  ) => Promise<DeploymentInfoResponse>;
  /** List the resources currently being monitored by the Elastic monitor resource. */
  monitoredResourcesList: (
    resourceGroupName: string,
    monitorName: string,
    options?: ElasticMonitorResourcesMonitoredResourcesListOptionalParams,
  ) => PagedAsyncIterableIterator<MonitoredResource>;
  /** List all monitors under the specified subscription. */
  list: (
    options?: ElasticMonitorResourcesListOptionalParams,
  ) => PagedAsyncIterableIterator<ElasticMonitorResource>;
  /** List all monitors under the specified resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: ElasticMonitorResourcesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<ElasticMonitorResource>;
  /** Delete a monitor resource. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    monitorName: string,
    options?: ElasticMonitorResourcesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a monitor resource. */
  update: (
    resourceGroupName: string,
    monitorName: string,
    body: ElasticMonitorResourceUpdateParameters,
    options?: ElasticMonitorResourcesUpdateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a monitor resource. */
  create: (
    resourceGroupName: string,
    monitorName: string,
    body: ElasticMonitorResource,
    options?: ElasticMonitorResourcesCreateOptionalParams,
  ) => PollerLike<OperationState<ElasticMonitorResource>, ElasticMonitorResource>;
  /** Get the properties of a specific monitor resource. */
  get: (
    resourceGroupName: string,
    monitorName: string,
    options?: ElasticMonitorResourcesGetOptionalParams,
  ) => Promise<ElasticMonitorResource>;
}

function _getElasticMonitorResources(context: ElasticContext) {
  return {
    resubscribe: (
      resourceGroupName: string,
      monitorName: string,
      body: {
        body?: ResubscribeProperties;
      },
      options?: ElasticMonitorResourcesResubscribeOptionalParams,
    ) => resubscribe(context, resourceGroupName, monitorName, body, options),
    trafficFiltersDelete: (
      resourceGroupName: string,
      monitorName: string,
      options?: ElasticMonitorResourcesTrafficFiltersDeleteOptionalParams,
    ) => trafficFiltersDelete(context, resourceGroupName, monitorName, options),
    detachTrafficFilterUpdate: (
      resourceGroupName: string,
      monitorName: string,
      options?: ElasticMonitorResourcesDetachTrafficFilterUpdateOptionalParams,
    ) => detachTrafficFilterUpdate(context, resourceGroupName, monitorName, options),
    detachAndDeleteTrafficFilterDelete: (
      resourceGroupName: string,
      monitorName: string,
      options?: ElasticMonitorResourcesDetachAndDeleteTrafficFilterDeleteOptionalParams,
    ) => detachAndDeleteTrafficFilterDelete(context, resourceGroupName, monitorName, options),
    associate: (
      resourceGroupName: string,
      monitorName: string,
      options?: ElasticMonitorResourcesAssociateOptionalParams,
    ) => associate(context, resourceGroupName, monitorName, options),
    createAndAssociatePLFilterCreate: (
      resourceGroupName: string,
      monitorName: string,
      options?: ElasticMonitorResourcesCreateAndAssociatePLFilterCreateOptionalParams,
    ) => createAndAssociatePLFilterCreate(context, resourceGroupName, monitorName, options),
    createAndAssociateIPFilterCreate: (
      resourceGroupName: string,
      monitorName: string,
      options?: ElasticMonitorResourcesCreateAndAssociateIPFilterCreateOptionalParams,
    ) => createAndAssociateIPFilterCreate(context, resourceGroupName, monitorName, options),
    listAssociatedTrafficFiltersList: (
      resourceGroupName: string,
      monitorName: string,
      options?: ElasticMonitorResourcesListAssociatedTrafficFiltersListOptionalParams,
    ) => listAssociatedTrafficFiltersList(context, resourceGroupName, monitorName, options),
    allTrafficFiltersList: (
      resourceGroupName: string,
      monitorName: string,
      options?: ElasticMonitorResourcesAllTrafficFiltersListOptionalParams,
    ) => allTrafficFiltersList(context, resourceGroupName, monitorName, options),
    upgrade: (
      resourceGroupName: string,
      monitorName: string,
      body: {
        body?: ElasticMonitorUpgrade;
      },
      options?: ElasticMonitorResourcesUpgradeOptionalParams,
    ) => upgrade(context, resourceGroupName, monitorName, body, options),
    upgradableVersionsDetails: (
      resourceGroupName: string,
      monitorName: string,
      options?: ElasticMonitorResourcesUpgradableVersionsDetailsOptionalParams,
    ) => upgradableVersionsDetails(context, resourceGroupName, monitorName, options),
    vMCollectionUpdate: (
      resourceGroupName: string,
      monitorName: string,
      body: {
        body?: VMCollectionUpdate;
      },
      options?: ElasticMonitorResourcesVMCollectionUpdateOptionalParams,
    ) => vMCollectionUpdate(context, resourceGroupName, monitorName, body, options),
    details: (
      resourceGroupName: string,
      monitorName: string,
      options?: ElasticMonitorResourcesDetailsOptionalParams,
    ) => details(context, resourceGroupName, monitorName, options),
    vMHostList: (
      resourceGroupName: string,
      monitorName: string,
      options?: ElasticMonitorResourcesVMHostListOptionalParams,
    ) => vMHostList(context, resourceGroupName, monitorName, options),
    connectedPartnerResourcesList: (
      resourceGroupName: string,
      monitorName: string,
      options?: ElasticMonitorResourcesConnectedPartnerResourcesListOptionalParams,
    ) => connectedPartnerResourcesList(context, resourceGroupName, monitorName, options),
    billingInfoGet: (
      resourceGroupName: string,
      monitorName: string,
      options?: ElasticMonitorResourcesBillingInfoGetOptionalParams,
    ) => billingInfoGet(context, resourceGroupName, monitorName, options),
    createOrUpdate: (
      resourceGroupName: string,
      monitorName: string,
      body: {
        body?: ExternalUserInfo;
      },
      options?: ElasticMonitorResourcesCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, monitorName, body, options),
    deploymentInfoList: (
      resourceGroupName: string,
      monitorName: string,
      options?: ElasticMonitorResourcesDeploymentInfoListOptionalParams,
    ) => deploymentInfoList(context, resourceGroupName, monitorName, options),
    monitoredResourcesList: (
      resourceGroupName: string,
      monitorName: string,
      options?: ElasticMonitorResourcesMonitoredResourcesListOptionalParams,
    ) => monitoredResourcesList(context, resourceGroupName, monitorName, options),
    list: (options?: ElasticMonitorResourcesListOptionalParams) => list(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: ElasticMonitorResourcesListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      monitorName: string,
      options?: ElasticMonitorResourcesDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, monitorName, options),
    update: (
      resourceGroupName: string,
      monitorName: string,
      body: ElasticMonitorResourceUpdateParameters,
      options?: ElasticMonitorResourcesUpdateOptionalParams,
    ) => update(context, resourceGroupName, monitorName, body, options),
    create: (
      resourceGroupName: string,
      monitorName: string,
      body: ElasticMonitorResource,
      options?: ElasticMonitorResourcesCreateOptionalParams,
    ) => create(context, resourceGroupName, monitorName, body, options),
    get: (
      resourceGroupName: string,
      monitorName: string,
      options?: ElasticMonitorResourcesGetOptionalParams,
    ) => get(context, resourceGroupName, monitorName, options),
  };
}

export function _getElasticMonitorResourcesOperations(
  context: ElasticContext,
): ElasticMonitorResourcesOperations {
  return {
    ..._getElasticMonitorResources(context),
  };
}
