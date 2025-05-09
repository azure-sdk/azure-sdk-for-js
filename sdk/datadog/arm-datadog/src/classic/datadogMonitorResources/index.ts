// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatadogContext } from "../../api/datadogContext.js";
import {
  DatadogMonitorResource,
  DatadogMonitorResourceUpdateParameters,
  DatadogApiKey,
  DatadogHost,
  LinkedResource,
  MonitoredResource,
  DatadogSetPasswordLink,
  BillingInfoResponse,
} from "../../models/models.js";
import {
  DatadogMonitorResourcesBillingInfoGetOptionalParams,
  DatadogMonitorResourcesRefreshSetPasswordLinkOptionalParams,
  DatadogMonitorResourcesListMonitoredResourcesOptionalParams,
  DatadogMonitorResourcesListLinkedResourcesOptionalParams,
  DatadogMonitorResourcesListHostsOptionalParams,
  DatadogMonitorResourcesSetDefaultKeyOptionalParams,
  DatadogMonitorResourcesGetDefaultKeyOptionalParams,
  DatadogMonitorResourcesListApiKeysOptionalParams,
  DatadogMonitorResourcesListOptionalParams,
  DatadogMonitorResourcesListByResourceGroupOptionalParams,
  DatadogMonitorResourcesDeleteOptionalParams,
  DatadogMonitorResourcesUpdateOptionalParams,
  DatadogMonitorResourcesCreateOptionalParams,
  DatadogMonitorResourcesGetOptionalParams,
} from "../../api/datadogMonitorResources/options.js";
import {
  billingInfoGet,
  refreshSetPasswordLink,
  listMonitoredResources,
  listLinkedResources,
  listHosts,
  setDefaultKey,
  getDefaultKey,
  listApiKeys,
  list,
  listByResourceGroup,
  $delete,
  update,
  create,
  get,
} from "../../api/datadogMonitorResources/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a DatadogMonitorResources operations. */
export interface DatadogMonitorResourcesOperations {
  /** Get marketplace and organization info mapped to the given monitor. */
  billingInfoGet: (
    resourceGroupName: string,
    monitorName: string,
    options?: DatadogMonitorResourcesBillingInfoGetOptionalParams,
  ) => Promise<BillingInfoResponse>;
  /** Refresh the set password link and return a latest one. */
  refreshSetPasswordLink: (
    resourceGroupName: string,
    monitorName: string,
    options?: DatadogMonitorResourcesRefreshSetPasswordLinkOptionalParams,
  ) => Promise<DatadogSetPasswordLink>;
  /** List the resources currently being monitored by the Datadog monitor resource. */
  listMonitoredResources: (
    resourceGroupName: string,
    monitorName: string,
    options?: DatadogMonitorResourcesListMonitoredResourcesOptionalParams,
  ) => PagedAsyncIterableIterator<MonitoredResource>;
  /** List all Azure resources associated to the same Datadog organization as the target resource. */
  listLinkedResources: (
    resourceGroupName: string,
    monitorName: string,
    options?: DatadogMonitorResourcesListLinkedResourcesOptionalParams,
  ) => PagedAsyncIterableIterator<LinkedResource>;
  /** List the hosts for a given monitor resource. */
  listHosts: (
    resourceGroupName: string,
    monitorName: string,
    options?: DatadogMonitorResourcesListHostsOptionalParams,
  ) => PagedAsyncIterableIterator<DatadogHost>;
  /** Set the default api key. */
  setDefaultKey: (
    resourceGroupName: string,
    monitorName: string,
    body: {
      body?: DatadogApiKey;
    },
    options?: DatadogMonitorResourcesSetDefaultKeyOptionalParams,
  ) => Promise<void>;
  /** Get the default api key. */
  getDefaultKey: (
    resourceGroupName: string,
    monitorName: string,
    options?: DatadogMonitorResourcesGetDefaultKeyOptionalParams,
  ) => Promise<DatadogApiKey>;
  /** List the api keys for a given monitor resource. */
  listApiKeys: (
    resourceGroupName: string,
    monitorName: string,
    options?: DatadogMonitorResourcesListApiKeysOptionalParams,
  ) => PagedAsyncIterableIterator<DatadogApiKey>;
  /** List all monitors under the specified subscription. */
  list: (
    options?: DatadogMonitorResourcesListOptionalParams,
  ) => PagedAsyncIterableIterator<DatadogMonitorResource>;
  /** List all monitors under the specified resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: DatadogMonitorResourcesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<DatadogMonitorResource>;
  /** Delete a monitor resource. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    monitorName: string,
    options?: DatadogMonitorResourcesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a monitor resource. */
  update: (
    resourceGroupName: string,
    monitorName: string,
    body: DatadogMonitorResourceUpdateParameters,
    options?: DatadogMonitorResourcesUpdateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a monitor resource. */
  create: (
    resourceGroupName: string,
    monitorName: string,
    body: DatadogMonitorResource,
    options?: DatadogMonitorResourcesCreateOptionalParams,
  ) => PollerLike<OperationState<DatadogMonitorResource>, DatadogMonitorResource>;
  /** Get the properties of a specific monitor resource. */
  get: (
    resourceGroupName: string,
    monitorName: string,
    options?: DatadogMonitorResourcesGetOptionalParams,
  ) => Promise<DatadogMonitorResource>;
}

function _getDatadogMonitorResources(context: DatadogContext) {
  return {
    billingInfoGet: (
      resourceGroupName: string,
      monitorName: string,
      options?: DatadogMonitorResourcesBillingInfoGetOptionalParams,
    ) => billingInfoGet(context, resourceGroupName, monitorName, options),
    refreshSetPasswordLink: (
      resourceGroupName: string,
      monitorName: string,
      options?: DatadogMonitorResourcesRefreshSetPasswordLinkOptionalParams,
    ) => refreshSetPasswordLink(context, resourceGroupName, monitorName, options),
    listMonitoredResources: (
      resourceGroupName: string,
      monitorName: string,
      options?: DatadogMonitorResourcesListMonitoredResourcesOptionalParams,
    ) => listMonitoredResources(context, resourceGroupName, monitorName, options),
    listLinkedResources: (
      resourceGroupName: string,
      monitorName: string,
      options?: DatadogMonitorResourcesListLinkedResourcesOptionalParams,
    ) => listLinkedResources(context, resourceGroupName, monitorName, options),
    listHosts: (
      resourceGroupName: string,
      monitorName: string,
      options?: DatadogMonitorResourcesListHostsOptionalParams,
    ) => listHosts(context, resourceGroupName, monitorName, options),
    setDefaultKey: (
      resourceGroupName: string,
      monitorName: string,
      body: {
        body?: DatadogApiKey;
      },
      options?: DatadogMonitorResourcesSetDefaultKeyOptionalParams,
    ) => setDefaultKey(context, resourceGroupName, monitorName, body, options),
    getDefaultKey: (
      resourceGroupName: string,
      monitorName: string,
      options?: DatadogMonitorResourcesGetDefaultKeyOptionalParams,
    ) => getDefaultKey(context, resourceGroupName, monitorName, options),
    listApiKeys: (
      resourceGroupName: string,
      monitorName: string,
      options?: DatadogMonitorResourcesListApiKeysOptionalParams,
    ) => listApiKeys(context, resourceGroupName, monitorName, options),
    list: (options?: DatadogMonitorResourcesListOptionalParams) => list(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: DatadogMonitorResourcesListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      monitorName: string,
      options?: DatadogMonitorResourcesDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, monitorName, options),
    update: (
      resourceGroupName: string,
      monitorName: string,
      body: DatadogMonitorResourceUpdateParameters,
      options?: DatadogMonitorResourcesUpdateOptionalParams,
    ) => update(context, resourceGroupName, monitorName, body, options),
    create: (
      resourceGroupName: string,
      monitorName: string,
      body: DatadogMonitorResource,
      options?: DatadogMonitorResourcesCreateOptionalParams,
    ) => create(context, resourceGroupName, monitorName, body, options),
    get: (
      resourceGroupName: string,
      monitorName: string,
      options?: DatadogMonitorResourcesGetOptionalParams,
    ) => get(context, resourceGroupName, monitorName, options),
  };
}

export function _getDatadogMonitorResourcesOperations(
  context: DatadogContext,
): DatadogMonitorResourcesOperations {
  return {
    ..._getDatadogMonitorResources(context),
  };
}
