// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MaintenanceContext as Client } from "../index.js";
import {
  maintenanceErrorDeserializer,
  ApplyUpdate,
  applyUpdateDeserializer,
} from "../../models/models.js";
import {
  ApplyUpdatesOperationGroupCreateOrUpdateOptionalParams,
  ApplyUpdatesOperationGroupCreateOrUpdateParentOptionalParams,
} from "./options.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  providerName: string,
  resourceType: string,
  resourceName: string,
  options: ApplyUpdatesOperationGroupCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/applyUpdates/default{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      providerName: providerName,
      resourceType: resourceType,
      resourceName: resourceName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).put({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _createOrUpdateDeserialize(
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
export async function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  providerName: string,
  resourceType: string,
  resourceName: string,
  options: ApplyUpdatesOperationGroupCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): Promise<ApplyUpdate> {
  const result = await _createOrUpdateSend(
    context,
    resourceGroupName,
    providerName,
    resourceType,
    resourceName,
    options,
  );
  return _createOrUpdateDeserialize(result);
}

export function _createOrUpdateParentSend(
  context: Client,
  resourceGroupName: string,
  providerName: string,
  resourceParentType: string,
  resourceParentName: string,
  resourceType: string,
  resourceName: string,
  options: ApplyUpdatesOperationGroupCreateOrUpdateParentOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceParentType}/{resourceParentName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/applyUpdates/default{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      providerName: providerName,
      resourceParentType: resourceParentType,
      resourceParentName: resourceParentName,
      resourceType: resourceType,
      resourceName: resourceName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).put({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _createOrUpdateParentDeserialize(
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

/** Apply maintenance updates to resource with parent */
export async function createOrUpdateParent(
  context: Client,
  resourceGroupName: string,
  providerName: string,
  resourceParentType: string,
  resourceParentName: string,
  resourceType: string,
  resourceName: string,
  options: ApplyUpdatesOperationGroupCreateOrUpdateParentOptionalParams = {
    requestOptions: {},
  },
): Promise<ApplyUpdate> {
  const result = await _createOrUpdateParentSend(
    context,
    resourceGroupName,
    providerName,
    resourceParentType,
    resourceParentName,
    resourceType,
    resourceName,
    options,
  );
  return _createOrUpdateParentDeserialize(result);
}
