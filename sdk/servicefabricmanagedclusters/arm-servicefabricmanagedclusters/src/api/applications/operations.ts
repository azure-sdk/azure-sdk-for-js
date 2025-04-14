// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ServiceFabricContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  ApplicationResource,
  applicationResourceSerializer,
  applicationResourceDeserializer,
  ApplicationUpdateParameters,
  applicationUpdateParametersSerializer,
  _ApplicationResourceList,
  _applicationResourceListDeserializer,
  RuntimeResumeApplicationUpgradeParameters,
  runtimeResumeApplicationUpgradeParametersSerializer,
} from "../../models/models.js";
import {
  ApplicationsStartRollbackOptionalParams,
  ApplicationsResumeUpgradeOptionalParams,
  ApplicationsReadUpgradeOptionalParams,
  ApplicationsListOptionalParams,
  ApplicationsDeleteOptionalParams,
  ApplicationsUpdateOptionalParams,
  ApplicationsCreateOrUpdateOptionalParams,
  ApplicationsGetOptionalParams,
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

export function _applicationsStartRollbackSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  applicationName: string,
  options: ApplicationsStartRollbackOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applications/{applicationName}/startRollback{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
      applicationName: applicationName,
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

export async function _applicationsStartRollbackDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Send a request to start a rollback of the current application upgrade. This will start rolling back the application to the previous version. */
export function applicationsStartRollback(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  applicationName: string,
  options: ApplicationsStartRollbackOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _applicationsStartRollbackDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _applicationsStartRollbackSend(
        context,
        resourceGroupName,
        clusterName,
        applicationName,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _applicationsResumeUpgradeSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  applicationName: string,
  parameters: RuntimeResumeApplicationUpgradeParameters,
  options: ApplicationsResumeUpgradeOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applications/{applicationName}/resumeUpgrade{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
      applicationName: applicationName,
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
    body: runtimeResumeApplicationUpgradeParametersSerializer(parameters),
  });
}

export async function _applicationsResumeUpgradeDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Send a request to resume the current application upgrade. This will resume the application upgrade from where it was paused. */
export function applicationsResumeUpgrade(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  applicationName: string,
  parameters: RuntimeResumeApplicationUpgradeParameters,
  options: ApplicationsResumeUpgradeOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _applicationsResumeUpgradeDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _applicationsResumeUpgradeSend(
        context,
        resourceGroupName,
        clusterName,
        applicationName,
        parameters,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _applicationsReadUpgradeSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  applicationName: string,
  options: ApplicationsReadUpgradeOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applications/{applicationName}/fetchUpgradeStatus{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
      applicationName: applicationName,
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

export async function _applicationsReadUpgradeDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Get the status of the latest application upgrade. It will query the cluster to find the status of the latest application upgrade. */
export function applicationsReadUpgrade(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  applicationName: string,
  options: ApplicationsReadUpgradeOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _applicationsReadUpgradeDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _applicationsReadUpgradeSend(
        context,
        resourceGroupName,
        clusterName,
        applicationName,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _applicationsListSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  options: ApplicationsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applications{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
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

export async function _applicationsListDeserialize(
  result: PathUncheckedResponse,
): Promise<_ApplicationResourceList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _applicationResourceListDeserializer(result.body);
}

/** Gets all managed application resources created or in the process of being created in the Service Fabric cluster resource. */
export function applicationsList(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  options: ApplicationsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ApplicationResource> {
  return buildPagedAsyncIterator(
    context,
    () => _applicationsListSend(context, resourceGroupName, clusterName, options),
    _applicationsListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _applicationsDeleteSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  applicationName: string,
  options: ApplicationsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applications/{applicationName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
      applicationName: applicationName,
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

export async function _applicationsDeleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a Service Fabric managed application resource with the specified name. */
export function applicationsDelete(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  applicationName: string,
  options: ApplicationsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _applicationsDeleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _applicationsDeleteSend(context, resourceGroupName, clusterName, applicationName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _applicationsUpdateSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  applicationName: string,
  parameters: ApplicationUpdateParameters,
  options: ApplicationsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applications/{applicationName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
      applicationName: applicationName,
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
    body: applicationUpdateParametersSerializer(parameters),
  });
}

export async function _applicationsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ApplicationResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return applicationResourceDeserializer(result.body);
}

/** Updates the tags of an application resource of a given managed cluster. */
export async function applicationsUpdate(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  applicationName: string,
  parameters: ApplicationUpdateParameters,
  options: ApplicationsUpdateOptionalParams = { requestOptions: {} },
): Promise<ApplicationResource> {
  const result = await _applicationsUpdateSend(
    context,
    resourceGroupName,
    clusterName,
    applicationName,
    parameters,
    options,
  );
  return _applicationsUpdateDeserialize(result);
}

export function _applicationsCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  applicationName: string,
  parameters: ApplicationResource,
  options: ApplicationsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applications/{applicationName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
      applicationName: applicationName,
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
    body: applicationResourceSerializer(parameters),
  });
}

export async function _applicationsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ApplicationResource> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return applicationResourceDeserializer(result.body);
}

/** Create or update a Service Fabric managed application resource with the specified name. */
export function applicationsCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  applicationName: string,
  parameters: ApplicationResource,
  options: ApplicationsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ApplicationResource>, ApplicationResource> {
  return getLongRunningPoller(context, _applicationsCreateOrUpdateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _applicationsCreateOrUpdateSend(
        context,
        resourceGroupName,
        clusterName,
        applicationName,
        parameters,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<ApplicationResource>, ApplicationResource>;
}

export function _applicationsGetSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  applicationName: string,
  options: ApplicationsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applications/{applicationName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
      applicationName: applicationName,
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

export async function _applicationsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ApplicationResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return applicationResourceDeserializer(result.body);
}

/** Get a Service Fabric managed application resource created or in the process of being created in the Service Fabric cluster resource. */
export async function applicationsGet(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  applicationName: string,
  options: ApplicationsGetOptionalParams = { requestOptions: {} },
): Promise<ApplicationResource> {
  const result = await _applicationsGetSend(
    context,
    resourceGroupName,
    clusterName,
    applicationName,
    options,
  );
  return _applicationsGetDeserialize(result);
}
