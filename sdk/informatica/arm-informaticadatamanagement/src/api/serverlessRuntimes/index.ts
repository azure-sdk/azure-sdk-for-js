// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  DataManagementContext as Client,
  ServerlessRuntimesCheckDependenciesOptionalParams,
  ServerlessRuntimesCreateOrUpdateOptionalParams,
  ServerlessRuntimesDeleteOptionalParams,
  ServerlessRuntimesGetOptionalParams,
  ServerlessRuntimesListByInformaticaOrganizationResourceOptionalParams,
  ServerlessRuntimesServerlessResourceByIdOptionalParams,
  ServerlessRuntimesStartFailedServerlessRuntimeOptionalParams,
  ServerlessRuntimesUpdateOptionalParams,
} from "../index.js";
import {
  InformaticaServerlessRuntimeResource,
  informaticaServerlessRuntimeResourceSerializer,
  informaticaServerlessRuntimeResourceDeserializer,
  _InformaticaServerlessRuntimeResourceListResult,
  _informaticaServerlessRuntimeResourceListResultDeserializer,
  InformaticaServerlessRuntimeResourceUpdate,
  informaticaServerlessRuntimeResourceUpdateSerializer,
  CheckDependenciesResponse,
  checkDependenciesResponseDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _serverlessRuntimesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  serverlessRuntimeName: string,
  options: ServerlessRuntimesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations/{organizationName}/serverlessRuntimes/{serverlessRuntimeName}",
      subscriptionId,
      resourceGroupName,
      organizationName,
      serverlessRuntimeName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _serverlessRuntimesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<InformaticaServerlessRuntimeResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return informaticaServerlessRuntimeResourceDeserializer(result.body);
}

/** Get a InformaticaServerlessRuntimeResource */
export async function serverlessRuntimesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  serverlessRuntimeName: string,
  options: ServerlessRuntimesGetOptionalParams = { requestOptions: {} },
): Promise<InformaticaServerlessRuntimeResource> {
  const result = await _serverlessRuntimesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    organizationName,
    serverlessRuntimeName,
    options,
  );
  return _serverlessRuntimesGetDeserialize(result);
}

export function _serverlessRuntimesCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  serverlessRuntimeName: string,
  resource: InformaticaServerlessRuntimeResource,
  options: ServerlessRuntimesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations/{organizationName}/serverlessRuntimes/{serverlessRuntimeName}",
      subscriptionId,
      resourceGroupName,
      organizationName,
      serverlessRuntimeName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: informaticaServerlessRuntimeResourceSerializer(resource),
    });
}

export async function _serverlessRuntimesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<InformaticaServerlessRuntimeResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return informaticaServerlessRuntimeResourceDeserializer(result.body);
}

/** Create a InformaticaServerlessRuntimeResource */
export function serverlessRuntimesCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  serverlessRuntimeName: string,
  resource: InformaticaServerlessRuntimeResource,
  options: ServerlessRuntimesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<InformaticaServerlessRuntimeResource>,
  InformaticaServerlessRuntimeResource
> {
  return getLongRunningPoller(
    context,
    _serverlessRuntimesCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _serverlessRuntimesCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          organizationName,
          serverlessRuntimeName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<
    OperationState<InformaticaServerlessRuntimeResource>,
    InformaticaServerlessRuntimeResource
  >;
}

export function _serverlessRuntimesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  serverlessRuntimeName: string,
  options: ServerlessRuntimesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations/{organizationName}/serverlessRuntimes/{serverlessRuntimeName}",
      subscriptionId,
      resourceGroupName,
      organizationName,
      serverlessRuntimeName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _serverlessRuntimesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a InformaticaServerlessRuntimeResource */
export function serverlessRuntimesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  serverlessRuntimeName: string,
  options: ServerlessRuntimesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _serverlessRuntimesDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _serverlessRuntimesDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          organizationName,
          serverlessRuntimeName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _serverlessRuntimesListByInformaticaOrganizationResourceSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  options: ServerlessRuntimesListByInformaticaOrganizationResourceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations/{organizationName}/serverlessRuntimes",
      subscriptionId,
      resourceGroupName,
      organizationName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _serverlessRuntimesListByInformaticaOrganizationResourceDeserialize(
  result: PathUncheckedResponse,
): Promise<_InformaticaServerlessRuntimeResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _informaticaServerlessRuntimeResourceListResultDeserializer(
    result.body,
  );
}

/** List InformaticaServerlessRuntimeResource resources by InformaticaOrganizationResource */
export function serverlessRuntimesListByInformaticaOrganizationResource(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  options: ServerlessRuntimesListByInformaticaOrganizationResourceOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<InformaticaServerlessRuntimeResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _serverlessRuntimesListByInformaticaOrganizationResourceSend(
        context,
        subscriptionId,
        resourceGroupName,
        organizationName,
        options,
      ),
    _serverlessRuntimesListByInformaticaOrganizationResourceDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _serverlessRuntimesUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  serverlessRuntimeName: string,
  properties: InformaticaServerlessRuntimeResourceUpdate,
  options: ServerlessRuntimesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations/{organizationName}/serverlessRuntimes/{serverlessRuntimeName}",
      subscriptionId,
      resourceGroupName,
      organizationName,
      serverlessRuntimeName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: informaticaServerlessRuntimeResourceUpdateSerializer(properties),
    });
}

export async function _serverlessRuntimesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<InformaticaServerlessRuntimeResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return informaticaServerlessRuntimeResourceDeserializer(result.body);
}

/** Update a InformaticaServerlessRuntimeResource */
export async function serverlessRuntimesUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  serverlessRuntimeName: string,
  properties: InformaticaServerlessRuntimeResourceUpdate,
  options: ServerlessRuntimesUpdateOptionalParams = { requestOptions: {} },
): Promise<InformaticaServerlessRuntimeResource> {
  const result = await _serverlessRuntimesUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    organizationName,
    serverlessRuntimeName,
    properties,
    options,
  );
  return _serverlessRuntimesUpdateDeserialize(result);
}

export function _serverlessRuntimesCheckDependenciesSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  serverlessRuntimeName: string,
  options: ServerlessRuntimesCheckDependenciesOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations/{organizationName}/serverlessRuntimes/{serverlessRuntimeName}/checkDependencies",
      subscriptionId,
      resourceGroupName,
      organizationName,
      serverlessRuntimeName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _serverlessRuntimesCheckDependenciesDeserialize(
  result: PathUncheckedResponse,
): Promise<CheckDependenciesResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return checkDependenciesResponseDeserializer(result.body);
}

/** Checks all dependencies for a serverless runtime resource */
export async function serverlessRuntimesCheckDependencies(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  serverlessRuntimeName: string,
  options: ServerlessRuntimesCheckDependenciesOptionalParams = {
    requestOptions: {},
  },
): Promise<CheckDependenciesResponse> {
  const result = await _serverlessRuntimesCheckDependenciesSend(
    context,
    subscriptionId,
    resourceGroupName,
    organizationName,
    serverlessRuntimeName,
    options,
  );
  return _serverlessRuntimesCheckDependenciesDeserialize(result);
}

export function _serverlessRuntimesStartFailedServerlessRuntimeSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  serverlessRuntimeName: string,
  options: ServerlessRuntimesStartFailedServerlessRuntimeOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations/{organizationName}/serverlessRuntimes/{serverlessRuntimeName}/startFailedServerlessRuntime",
      subscriptionId,
      resourceGroupName,
      organizationName,
      serverlessRuntimeName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _serverlessRuntimesStartFailedServerlessRuntimeDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Starts a failed runtime resource */
export async function serverlessRuntimesStartFailedServerlessRuntime(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  serverlessRuntimeName: string,
  options: ServerlessRuntimesStartFailedServerlessRuntimeOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _serverlessRuntimesStartFailedServerlessRuntimeSend(
    context,
    subscriptionId,
    resourceGroupName,
    organizationName,
    serverlessRuntimeName,
    options,
  );
  return _serverlessRuntimesStartFailedServerlessRuntimeDeserialize(result);
}

export function _serverlessRuntimesServerlessResourceByIdSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  serverlessRuntimeName: string,
  options: ServerlessRuntimesServerlessResourceByIdOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations/{organizationName}/serverlessRuntimes/{serverlessRuntimeName}/serverlessResourceById",
      subscriptionId,
      resourceGroupName,
      organizationName,
      serverlessRuntimeName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _serverlessRuntimesServerlessResourceByIdDeserialize(
  result: PathUncheckedResponse,
): Promise<InformaticaServerlessRuntimeResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return informaticaServerlessRuntimeResourceDeserializer(result.body);
}

/** Returns a serverless runtime resource by ID */
export async function serverlessRuntimesServerlessResourceById(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  serverlessRuntimeName: string,
  options: ServerlessRuntimesServerlessResourceByIdOptionalParams = {
    requestOptions: {},
  },
): Promise<InformaticaServerlessRuntimeResource> {
  const result = await _serverlessRuntimesServerlessResourceByIdSend(
    context,
    subscriptionId,
    resourceGroupName,
    organizationName,
    serverlessRuntimeName,
    options,
  );
  return _serverlessRuntimesServerlessResourceByIdDeserialize(result);
}
