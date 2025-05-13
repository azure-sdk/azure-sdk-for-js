// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticContext as Client } from "../index.js";
import {
  resourceProviderDefaultErrorResponseDeserializer,
  ElasticMonitorResource,
  elasticMonitorResourceSerializer,
  elasticMonitorResourceDeserializer,
  ElasticMonitorResourceUpdateParameters,
  elasticMonitorResourceUpdateParametersSerializer,
  errorResponseDeserializer,
  _ElasticMonitorResourceListResponse,
  _elasticMonitorResourceListResponseDeserializer,
  _MonitoredResourceListResponse,
  _monitoredResourceListResponseDeserializer,
  MonitoredResource,
  DeploymentInfoResponse,
  deploymentInfoResponseDeserializer,
  ExternalUserInfo,
  externalUserInfoSerializer,
  ExternalUserCreationResponse,
  externalUserCreationResponseDeserializer,
  BillingInfoResponse,
  billingInfoResponseDeserializer,
  _ConnectedPartnerResourcesListResponse,
  _connectedPartnerResourcesListResponseDeserializer,
  ConnectedPartnerResourcesListFormat,
  _VMHostListResponse,
  _vmHostListResponseDeserializer,
  VMResources,
  VMIngestionDetailsResponse,
  vmIngestionDetailsResponseDeserializer,
  VMCollectionUpdate,
  vmCollectionUpdateSerializer,
  UpgradableVersionsList,
  upgradableVersionsListDeserializer,
  ElasticMonitorUpgrade,
  elasticMonitorUpgradeSerializer,
  ElasticTrafficFilterResponse,
  elasticTrafficFilterResponseDeserializer,
  OkResponse,
  okResponseDeserializer,
  ResubscribeProperties,
  resubscribePropertiesSerializer,
  ArmResponseElasticMonitorResource,
  armResponseElasticMonitorResourceDeserializer,
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
} from "./options.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _resubscribeSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  body: {
    body?: ResubscribeProperties;
  },
  options: ElasticMonitorResourcesResubscribeOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/resubscribe{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: !options["body"] ? options["body"] : resubscribePropertiesSerializer(options["body"]),
  });
}

export async function _resubscribeDeserialize(
  result: PathUncheckedResponse,
): Promise<ArmResponseElasticMonitorResource> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return armResponseElasticMonitorResourceDeserializer(result.body);
}

/** Resubscribe the Elasticsearch Organization. */
export function resubscribe(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  body: {
    body?: ResubscribeProperties;
  },
  options: ElasticMonitorResourcesResubscribeOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<ArmResponseElasticMonitorResource>,
  ArmResponseElasticMonitorResource
> {
  return getLongRunningPoller(context, _resubscribeDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _resubscribeSend(context, resourceGroupName, monitorName, body, options),
    resourceLocationConfig: "location",
  }) as PollerLike<
    OperationState<ArmResponseElasticMonitorResource>,
    ArmResponseElasticMonitorResource
  >;
}

export function _trafficFiltersDeleteSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ElasticMonitorResourcesTrafficFiltersDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/deleteTrafficFilter{?api%2Dversion,rulesetId}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
      rulesetId: options?.rulesetId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _trafficFiltersDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = resourceProviderDefaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete traffic filter from the account. */
export async function trafficFiltersDelete(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ElasticMonitorResourcesTrafficFiltersDeleteOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _trafficFiltersDeleteSend(context, resourceGroupName, monitorName, options);
  return _trafficFiltersDeleteDeserialize(result);
}

export function _detachTrafficFilterUpdateSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ElasticMonitorResourcesDetachTrafficFilterUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/detachTrafficFilter{?api%2Dversion,rulesetId}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
      rulesetId: options?.rulesetId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _detachTrafficFilterUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = resourceProviderDefaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Detach traffic filter for the given deployment. */
export function detachTrafficFilterUpdate(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ElasticMonitorResourcesDetachTrafficFilterUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _detachTrafficFilterUpdateDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _detachTrafficFilterUpdateSend(context, resourceGroupName, monitorName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _detachAndDeleteTrafficFilterDeleteSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ElasticMonitorResourcesDetachAndDeleteTrafficFilterDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/detachAndDeleteTrafficFilter{?api%2Dversion,rulesetId}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
      rulesetId: options?.rulesetId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _detachAndDeleteTrafficFilterDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = resourceProviderDefaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Detach and Delete traffic filter from the given deployment. */
export async function detachAndDeleteTrafficFilterDelete(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ElasticMonitorResourcesDetachAndDeleteTrafficFilterDeleteOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _detachAndDeleteTrafficFilterDeleteSend(
    context,
    resourceGroupName,
    monitorName,
    options,
  );
  return _detachAndDeleteTrafficFilterDeleteDeserialize(result);
}

export function _associateSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ElasticMonitorResourcesAssociateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/associateTrafficFilter{?api%2Dversion,rulesetId}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
      rulesetId: options?.rulesetId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _associateDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = resourceProviderDefaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Associate traffic filter for the given deployment. */
export function associate(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ElasticMonitorResourcesAssociateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _associateDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _associateSend(context, resourceGroupName, monitorName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _createAndAssociatePLFilterCreateSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ElasticMonitorResourcesCreateAndAssociatePLFilterCreateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/createAndAssociatePLFilter{?api%2Dversion,name,privateEndpointGuid,privateEndpointName}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
      name: options?.name,
      privateEndpointGuid: options?.privateEndpointGuid,
      privateEndpointName: options?.privateEndpointName,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _createAndAssociatePLFilterCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<OkResponse> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = resourceProviderDefaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return okResponseDeserializer(result.body);
}

/** Create and Associate private link traffic filter for the given deployment. */
export function createAndAssociatePLFilterCreate(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ElasticMonitorResourcesCreateAndAssociatePLFilterCreateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<OkResponse>, OkResponse> {
  return getLongRunningPoller(
    context,
    _createAndAssociatePLFilterCreateDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _createAndAssociatePLFilterCreateSend(context, resourceGroupName, monitorName, options),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<OkResponse>, OkResponse>;
}

export function _createAndAssociateIPFilterCreateSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ElasticMonitorResourcesCreateAndAssociateIPFilterCreateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/createAndAssociateIPFilter{?api%2Dversion,ips,name}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
      ips: options?.ips,
      name: options?.name,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _createAndAssociateIPFilterCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<OkResponse> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = resourceProviderDefaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return okResponseDeserializer(result.body);
}

/** Create and Associate IP traffic filter for the given deployment. */
export function createAndAssociateIPFilterCreate(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ElasticMonitorResourcesCreateAndAssociateIPFilterCreateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<OkResponse>, OkResponse> {
  return getLongRunningPoller(
    context,
    _createAndAssociateIPFilterCreateDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _createAndAssociateIPFilterCreateSend(context, resourceGroupName, monitorName, options),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<OkResponse>, OkResponse>;
}

export function _listAssociatedTrafficFiltersListSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ElasticMonitorResourcesListAssociatedTrafficFiltersListOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/listAssociatedTrafficFilters{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _listAssociatedTrafficFiltersListDeserialize(
  result: PathUncheckedResponse,
): Promise<ElasticTrafficFilterResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = resourceProviderDefaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return elasticTrafficFilterResponseDeserializer(result.body);
}

/** Get the list of all associated traffic filters for the given deployment. */
export async function listAssociatedTrafficFiltersList(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ElasticMonitorResourcesListAssociatedTrafficFiltersListOptionalParams = {
    requestOptions: {},
  },
): Promise<ElasticTrafficFilterResponse> {
  const result = await _listAssociatedTrafficFiltersListSend(
    context,
    resourceGroupName,
    monitorName,
    options,
  );
  return _listAssociatedTrafficFiltersListDeserialize(result);
}

export function _allTrafficFiltersListSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ElasticMonitorResourcesAllTrafficFiltersListOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/listAllTrafficFilters{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _allTrafficFiltersListDeserialize(
  result: PathUncheckedResponse,
): Promise<ElasticTrafficFilterResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = resourceProviderDefaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return elasticTrafficFilterResponseDeserializer(result.body);
}

/** Get the list of all traffic filters for the account. */
export async function allTrafficFiltersList(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ElasticMonitorResourcesAllTrafficFiltersListOptionalParams = {
    requestOptions: {},
  },
): Promise<ElasticTrafficFilterResponse> {
  const result = await _allTrafficFiltersListSend(context, resourceGroupName, monitorName, options);
  return _allTrafficFiltersListDeserialize(result);
}

export function _upgradeSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  body: {
    body?: ElasticMonitorUpgrade;
  },
  options: ElasticMonitorResourcesUpgradeOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/upgrade{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: !options["body"] ? options["body"] : elasticMonitorUpgradeSerializer(options["body"]),
  });
}

export async function _upgradeDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = resourceProviderDefaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Upgradable version for a monitor resource. */
export function upgrade(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  body: {
    body?: ElasticMonitorUpgrade;
  },
  options: ElasticMonitorResourcesUpgradeOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _upgradeDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _upgradeSend(context, resourceGroupName, monitorName, body, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _upgradableVersionsDetailsSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ElasticMonitorResourcesUpgradableVersionsDetailsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/listUpgradableVersions{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _upgradableVersionsDetailsDeserialize(
  result: PathUncheckedResponse,
): Promise<UpgradableVersionsList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = resourceProviderDefaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return upgradableVersionsListDeserializer(result.body);
}

/** List of upgradable versions for a given monitor resource. */
export async function upgradableVersionsDetails(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ElasticMonitorResourcesUpgradableVersionsDetailsOptionalParams = {
    requestOptions: {},
  },
): Promise<UpgradableVersionsList> {
  const result = await _upgradableVersionsDetailsSend(
    context,
    resourceGroupName,
    monitorName,
    options,
  );
  return _upgradableVersionsDetailsDeserialize(result);
}

export function _vMCollectionUpdateSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  body: {
    body?: VMCollectionUpdate;
  },
  options: ElasticMonitorResourcesVMCollectionUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/vmCollectionUpdate{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: !options["body"] ? options["body"] : vmCollectionUpdateSerializer(options["body"]),
  });
}

export async function _vMCollectionUpdateDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = resourceProviderDefaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Update the vm details that will be monitored by the Elastic monitor resource. */
export async function vMCollectionUpdate(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  body: {
    body?: VMCollectionUpdate;
  },
  options: ElasticMonitorResourcesVMCollectionUpdateOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _vMCollectionUpdateSend(
    context,
    resourceGroupName,
    monitorName,
    body,
    options,
  );
  return _vMCollectionUpdateDeserialize(result);
}

export function _detailsSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ElasticMonitorResourcesDetailsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/vmIngestionDetails{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _detailsDeserialize(
  result: PathUncheckedResponse,
): Promise<VMIngestionDetailsResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = resourceProviderDefaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return vmIngestionDetailsResponseDeserializer(result.body);
}

/** List the vm ingestion details that will be monitored by the Elastic monitor resource. */
export async function details(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ElasticMonitorResourcesDetailsOptionalParams = {
    requestOptions: {},
  },
): Promise<VMIngestionDetailsResponse> {
  const result = await _detailsSend(context, resourceGroupName, monitorName, options);
  return _detailsDeserialize(result);
}

export function _vMHostListSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ElasticMonitorResourcesVMHostListOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/listVMHost{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _vMHostListDeserialize(
  result: PathUncheckedResponse,
): Promise<_VMHostListResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = resourceProviderDefaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return _vmHostListResponseDeserializer(result.body);
}

/** List the vm resources currently being monitored by the Elastic monitor resource. */
export function vMHostList(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ElasticMonitorResourcesVMHostListOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<VMResources> {
  return buildPagedAsyncIterator(
    context,
    () => _vMHostListSend(context, resourceGroupName, monitorName, options),
    _vMHostListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _connectedPartnerResourcesListSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ElasticMonitorResourcesConnectedPartnerResourcesListOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/listConnectedPartnerResources{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _connectedPartnerResourcesListDeserialize(
  result: PathUncheckedResponse,
): Promise<_ConnectedPartnerResourcesListResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = resourceProviderDefaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return _connectedPartnerResourcesListResponseDeserializer(result.body);
}

/** List of all active deployments that are associated with the marketplace subscription linked to the given monitor. */
export function connectedPartnerResourcesList(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ElasticMonitorResourcesConnectedPartnerResourcesListOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<ConnectedPartnerResourcesListFormat> {
  return buildPagedAsyncIterator(
    context,
    () => _connectedPartnerResourcesListSend(context, resourceGroupName, monitorName, options),
    _connectedPartnerResourcesListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _billingInfoGetSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ElasticMonitorResourcesBillingInfoGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/getBillingInfo{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _billingInfoGetDeserialize(
  result: PathUncheckedResponse,
): Promise<BillingInfoResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = resourceProviderDefaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return billingInfoResponseDeserializer(result.body);
}

/** Get marketplace and organization info mapped to the given monitor. */
export async function billingInfoGet(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ElasticMonitorResourcesBillingInfoGetOptionalParams = {
    requestOptions: {},
  },
): Promise<BillingInfoResponse> {
  const result = await _billingInfoGetSend(context, resourceGroupName, monitorName, options);
  return _billingInfoGetDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  body: {
    body?: ExternalUserInfo;
  },
  options: ElasticMonitorResourcesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/createOrUpdateExternalUser{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: !options["body"] ? options["body"] : externalUserInfoSerializer(options["body"]),
  });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ExternalUserCreationResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = resourceProviderDefaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return externalUserCreationResponseDeserializer(result.body);
}

/** Create User inside elastic deployment which are used by customers to perform operations on the elastic deployment */
export async function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  body: {
    body?: ExternalUserInfo;
  },
  options: ElasticMonitorResourcesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): Promise<ExternalUserCreationResponse> {
  const result = await _createOrUpdateSend(context, resourceGroupName, monitorName, body, options);
  return _createOrUpdateDeserialize(result);
}

export function _deploymentInfoListSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ElasticMonitorResourcesDeploymentInfoListOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/listDeploymentInfo{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _deploymentInfoListDeserialize(
  result: PathUncheckedResponse,
): Promise<DeploymentInfoResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = resourceProviderDefaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return deploymentInfoResponseDeserializer(result.body);
}

/** Fetch information regarding Elastic cloud deployment corresponding to the Elastic monitor resource. */
export async function deploymentInfoList(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ElasticMonitorResourcesDeploymentInfoListOptionalParams = {
    requestOptions: {},
  },
): Promise<DeploymentInfoResponse> {
  const result = await _deploymentInfoListSend(context, resourceGroupName, monitorName, options);
  return _deploymentInfoListDeserialize(result);
}

export function _monitoredResourcesListSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ElasticMonitorResourcesMonitoredResourcesListOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/listMonitoredResources{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _monitoredResourcesListDeserialize(
  result: PathUncheckedResponse,
): Promise<_MonitoredResourceListResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = resourceProviderDefaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return _monitoredResourceListResponseDeserializer(result.body);
}

/** List the resources currently being monitored by the Elastic monitor resource. */
export function monitoredResourcesList(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ElasticMonitorResourcesMonitoredResourcesListOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<MonitoredResource> {
  return buildPagedAsyncIterator(
    context,
    () => _monitoredResourcesListSend(context, resourceGroupName, monitorName, options),
    _monitoredResourcesListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listSend(
  context: Client,
  options: ElasticMonitorResourcesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Elastic/monitors{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_ElasticMonitorResourceListResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = resourceProviderDefaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return _elasticMonitorResourceListResponseDeserializer(result.body);
}

/** List all monitors under the specified subscription. */
export function list(
  context: Client,
  options: ElasticMonitorResourcesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ElasticMonitorResource> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: ElasticMonitorResourcesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _listByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_ElasticMonitorResourceListResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = resourceProviderDefaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return _elasticMonitorResourceListResponseDeserializer(result.body);
}

/** List all monitors under the specified resource group. */
export function listByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: ElasticMonitorResourcesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<ElasticMonitorResource> {
  return buildPagedAsyncIterator(
    context,
    () => _listByResourceGroupSend(context, resourceGroupName, options),
    _listByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ElasticMonitorResourcesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).delete({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _$deleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = resourceProviderDefaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a monitor resource. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ElasticMonitorResourcesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, ["200", "202", "204"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _$deleteSend(context, resourceGroupName, monitorName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _updateSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  body: ElasticMonitorResourceUpdateParameters,
  options: ElasticMonitorResourcesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).patch({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: elasticMonitorResourceUpdateParametersSerializer(body),
  });
}

export async function _updateDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Update a monitor resource. */
export function update(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  body: ElasticMonitorResourceUpdateParameters,
  options: ElasticMonitorResourcesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _updateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _updateSend(context, resourceGroupName, monitorName, body, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _createSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  body: ElasticMonitorResource,
  options: ElasticMonitorResourcesCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).put({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: elasticMonitorResourceSerializer(body),
  });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<ElasticMonitorResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = resourceProviderDefaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return elasticMonitorResourceDeserializer(result.body);
}

/** Create a monitor resource. */
export function create(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  body: ElasticMonitorResource,
  options: ElasticMonitorResourcesCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ElasticMonitorResource>, ElasticMonitorResource> {
  return getLongRunningPoller(context, _createDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _createSend(context, resourceGroupName, monitorName, body, options),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<ElasticMonitorResource>, ElasticMonitorResource>;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ElasticMonitorResourcesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<ElasticMonitorResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = resourceProviderDefaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return elasticMonitorResourceDeserializer(result.body);
}

/** Get the properties of a specific monitor resource. */
export async function get(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: ElasticMonitorResourcesGetOptionalParams = { requestOptions: {} },
): Promise<ElasticMonitorResource> {
  const result = await _getSend(context, resourceGroupName, monitorName, options);
  return _getDeserialize(result);
}
