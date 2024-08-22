// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  employeePropertiesSerializer,
  employeeUpdatePropertiesSerializer,
  Employee,
  EmployeeUpdate,
  _EmployeeListResult,
} from "../../models/models.js";
import { ContosoContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { stringToUint8Array } from "@azure/core-util";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  EmployeesGetOptionalParams,
  EmployeesCreateOrUpdateOptionalParams,
  EmployeesUpdateOptionalParams,
  EmployeesDeleteOptionalParams,
  EmployeesListByResourceGroupOptionalParams,
  EmployeesListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _employeesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  employeeName: string,
  options: EmployeesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Contoso/employees/{employeeName}",
      subscriptionId,
      resourceGroupName,
      employeeName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _employeesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Employee> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    tags: result.body["tags"],
    location: result.body["location"],
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          age: result.body.properties?.["age"],
          city: result.body.properties?.["city"],
          profile:
            typeof result.body.properties?.["profile"] === "string"
              ? stringToUint8Array(
                  result.body.properties?.["profile"],
                  "base64url",
                )
              : result.body.properties?.["profile"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a Employee */
export async function employeesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  employeeName: string,
  options: EmployeesGetOptionalParams = { requestOptions: {} },
): Promise<Employee> {
  const result = await _employeesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    employeeName,
    options,
  );
  return _employeesGetDeserialize(result);
}

export function _employeesCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  employeeName: string,
  resource: Employee,
  options: EmployeesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Contoso/employees/{employeeName}",
      subscriptionId,
      resourceGroupName,
      employeeName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !resource.tags
          ? resource.tags
          : (serializeRecord(resource.tags as any) as any),
        location: resource["location"],
        properties: !resource.properties
          ? resource.properties
          : employeePropertiesSerializer(resource.properties),
      },
    });
}

export async function _employeesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Employee> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    tags: result.body["tags"],
    location: result.body["location"],
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          age: result.body.properties?.["age"],
          city: result.body.properties?.["city"],
          profile:
            typeof result.body.properties?.["profile"] === "string"
              ? stringToUint8Array(
                  result.body.properties?.["profile"],
                  "base64url",
                )
              : result.body.properties?.["profile"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Create a Employee */
export function employeesCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  employeeName: string,
  resource: Employee,
  options: EmployeesCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Employee>, Employee> {
  return getLongRunningPoller(
    context,
    _employeesCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _employeesCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          employeeName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<Employee>, Employee>;
}

export function _employeesUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  employeeName: string,
  properties: EmployeeUpdate,
  options: EmployeesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Contoso/employees/{employeeName}",
      subscriptionId,
      resourceGroupName,
      employeeName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !properties.tags
          ? properties.tags
          : (serializeRecord(properties.tags as any) as any),
        properties: !properties.properties
          ? properties.properties
          : employeeUpdatePropertiesSerializer(properties.properties),
      },
    });
}

export async function _employeesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Employee> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    tags: result.body["tags"],
    location: result.body["location"],
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          age: result.body.properties?.["age"],
          city: result.body.properties?.["city"],
          profile:
            typeof result.body.properties?.["profile"] === "string"
              ? stringToUint8Array(
                  result.body.properties?.["profile"],
                  "base64url",
                )
              : result.body.properties?.["profile"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Update a Employee */
export async function employeesUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  employeeName: string,
  properties: EmployeeUpdate,
  options: EmployeesUpdateOptionalParams = { requestOptions: {} },
): Promise<Employee> {
  const result = await _employeesUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    employeeName,
    properties,
    options,
  );
  return _employeesUpdateDeserialize(result);
}

export function _employeesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  employeeName: string,
  options: EmployeesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Contoso/employees/{employeeName}",
      subscriptionId,
      resourceGroupName,
      employeeName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _employeesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a Employee */
export function employeesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  employeeName: string,
  options: EmployeesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _employeesDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _employeesDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          employeeName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _employeesListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: EmployeesListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Contoso/employees",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _employeesListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_EmployeeListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        tags: p["tags"],
        location: p["location"],
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"],
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.["lastModifiedByType"],
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        properties: !p.properties
          ? undefined
          : {
              age: p.properties?.["age"],
              city: p.properties?.["city"],
              profile:
                typeof p.properties?.["profile"] === "string"
                  ? stringToUint8Array(p.properties?.["profile"], "base64url")
                  : p.properties?.["profile"],
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List Employee resources by resource group */
export function employeesListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: EmployeesListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Employee> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _employeesListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _employeesListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _employeesListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: EmployeesListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Contoso/employees",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _employeesListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_EmployeeListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        tags: p["tags"],
        location: p["location"],
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"],
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.["lastModifiedByType"],
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        properties: !p.properties
          ? undefined
          : {
              age: p.properties?.["age"],
              city: p.properties?.["city"],
              profile:
                typeof p.properties?.["profile"] === "string"
                  ? stringToUint8Array(p.properties?.["profile"], "base64url")
                  : p.properties?.["profile"],
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List Employee resources by subscription ID */
export function employeesListBySubscription(
  context: Client,
  subscriptionId: string,
  options: EmployeesListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Employee> {
  return buildPagedAsyncIterator(
    context,
    () => _employeesListBySubscriptionSend(context, subscriptionId, options),
    _employeesListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
