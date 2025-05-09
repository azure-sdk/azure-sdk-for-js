// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MaintenanceContext as Client } from "../index.js";
import {
  maintenanceErrorDeserializer,
  ApplyUpdate,
  applyUpdateSerializer,
  applyUpdateDeserializer,
  _ListApplyUpdate,
  _listApplyUpdateDeserializer,
} from "../../models/models.js";
import {
  ApplyUpdateOperationGroupListOptionalParams,
  ApplyUpdateOperationGroupCreateOrUpdateOrCancelOptionalParams,
  ApplyUpdateOperationGroupGetOptionalParams,
} from "./options.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _listSend(
  context: Client,
  options: ApplyUpdateOperationGroupListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Maintenance/applyUpdates{?api%2Dversion}",
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

export async function _listDeserialize(result: PathUncheckedResponse): Promise<_ListApplyUpdate> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = maintenanceErrorDeserializer(result.body);
    throw error;
  }

  return _listApplyUpdateDeserializer(result.body);
}

/** Get Configuration records within a subscription */
export function list(
  context: Client,
  options: ApplyUpdateOperationGroupListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ApplyUpdate> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _createOrUpdateOrCancelSend(
  context: Client,
  resourceGroupName: string,
  providerName: string,
  resourceType: string,
  resourceName: string,
  applyUpdateName: string,
  applyUpdate: ApplyUpdate,
  options: ApplyUpdateOperationGroupCreateOrUpdateOrCancelOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{providerName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/applyUpdates/{applyUpdateName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      providerName: providerName,
      resourceType: resourceType,
      resourceName: resourceName,
      applyUpdateName: applyUpdateName,
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
    body: applyUpdateSerializer(applyUpdate),
  });
}

export async function _createOrUpdateOrCancelDeserialize(
  result: PathUncheckedResponse,
): Promise<ApplyUpdate> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = maintenanceErrorDeserializer(result.body);
    throw error;
  }

  return applyUpdateDeserializer(result.body);
}

/** Apply maintenance updates to resource */
export async function createOrUpdateOrCancel(
  context: Client,
  resourceGroupName: string,
  providerName: string,
  resourceType: string,
  resourceName: string,
  applyUpdateName: string,
  applyUpdate: ApplyUpdate,
  options: ApplyUpdateOperationGroupCreateOrUpdateOrCancelOptionalParams = {
    requestOptions: {},
  },
): Promise<ApplyUpdate> {
  const result = await _createOrUpdateOrCancelSend(
    context,
    resourceGroupName,
    providerName,
    resourceType,
    resourceName,
    applyUpdateName,
    applyUpdate,
    options,
  );
  return _createOrUpdateOrCancelDeserialize(result);
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  providerName: string,
  resourceType: string,
  resourceName: string,
  applyUpdateName: string,
  options: ApplyUpdateOperationGroupGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{providerName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/applyUpdates/{applyUpdateName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      providerName: providerName,
      resourceType: resourceType,
      resourceName: resourceName,
      applyUpdateName: applyUpdateName,
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

export async function _getDeserialize(result: PathUncheckedResponse): Promise<ApplyUpdate> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = maintenanceErrorDeserializer(result.body);
    throw error;
  }

  return applyUpdateDeserializer(result.body);
}

/** Track maintenance updates to resource */
export async function get(
  context: Client,
  resourceGroupName: string,
  providerName: string,
  resourceType: string,
  resourceName: string,
  applyUpdateName: string,
  options: ApplyUpdateOperationGroupGetOptionalParams = { requestOptions: {} },
): Promise<ApplyUpdate> {
  const result = await _getSend(
    context,
    resourceGroupName,
    providerName,
    resourceType,
    resourceName,
    applyUpdateName,
    options,
  );
  return _getDeserialize(result);
}
