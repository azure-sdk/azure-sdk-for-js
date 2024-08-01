// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  employeePropertiesSerializer,
  Employee,
  _EmployeeListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  ContosoContext as Client,
  EmployeesCreateOrUpdate200Response,
  EmployeesCreateOrUpdate201Response,
  EmployeesCreateOrUpdateDefaultResponse,
  EmployeesCreateOrUpdateLogicalResponse,
  EmployeesDelete202Response,
  EmployeesDelete204Response,
  EmployeesDeleteDefaultResponse,
  EmployeesDeleteLogicalResponse,
  EmployeesGet200Response,
  EmployeesGetDefaultResponse,
  EmployeesListByResourceGroup200Response,
  EmployeesListByResourceGroupDefaultResponse,
  EmployeesListBySubscription200Response,
  EmployeesListBySubscriptionDefaultResponse,
  EmployeesUpdate200Response,
  EmployeesUpdateDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { stringToUint8Array } from "@azure/core-util";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  EmployeesGetOptionalParams,
  EmployeesCreateOrUpdateOptionalParams,
  EmployeesUpdateOptionalParams,
  EmployeesDeleteOptionalParams,
  EmployeesListByResourceGroupOptionalParams,
  EmployeesListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  employeeName: string,
  options: EmployeesGetOptionalParams = { requestOptions: {} },
): StreamableMethod<EmployeesGet200Response | EmployeesGetDefaultResponse> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Contoso/employees/{employeeName}",
      subscriptionId,
      resourceGroupName,
      employeeName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: EmployeesGet200Response | EmployeesGetDefaultResponse,
): Promise<Employee> {
  if (isUnexpected(result)) {
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
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  employeeName: string,
  options: EmployeesGetOptionalParams = { requestOptions: {} },
): Promise<Employee> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    employeeName,
    options,
  );
  return _getDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  employeeName: string,
  resource: Employee,
  options: EmployeesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | EmployeesCreateOrUpdate200Response
  | EmployeesCreateOrUpdate201Response
  | EmployeesCreateOrUpdateDefaultResponse
  | EmployeesCreateOrUpdateLogicalResponse
> {
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

export async function _createOrUpdateDeserialize(
  result:
    | EmployeesCreateOrUpdate200Response
    | EmployeesCreateOrUpdate201Response
    | EmployeesCreateOrUpdateDefaultResponse
    | EmployeesCreateOrUpdateLogicalResponse,
): Promise<Employee> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const res = result as unknown as EmployeesCreateOrUpdateLogicalResponse;
  return {
    tags: res.body["tags"],
    location: res.body["location"],
    id: res.body["id"],
    name: res.body["name"],
    type: res.body["type"],
    systemData: !res.body.systemData
      ? undefined
      : {
          createdBy: res.body.systemData?.["createdBy"],
          createdByType: res.body.systemData?.["createdByType"],
          createdAt:
            res.body.systemData?.["createdAt"] !== undefined
              ? new Date(res.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: res.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: res.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            res.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(res.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !res.body.properties
      ? undefined
      : {
          age: res.body.properties?.["age"],
          city: res.body.properties?.["city"],
          profile:
            typeof res.body.properties?.["profile"] === "string"
              ? stringToUint8Array(
                  res.body.properties?.["profile"],
                  "base64url",
                )
              : res.body.properties?.["profile"],
          provisioningState: res.body.properties?.["provisioningState"],
        },
  };
}

/** Create a Employee */
export function createOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  employeeName: string,
  resource: Employee,
  options: EmployeesCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Employee>, Employee> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        subscriptionId,
        resourceGroupName,
        employeeName,
        resource,
        options,
      ),
  }) as PollerLike<OperationState<Employee>, Employee>;
}

export function _updateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  employeeName: string,
  properties: Employee,
  options: EmployeesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  EmployeesUpdate200Response | EmployeesUpdateDefaultResponse
> {
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
        location: properties["location"],
        properties: !properties.properties
          ? properties.properties
          : employeePropertiesSerializer(properties.properties),
      },
    });
}

export async function _updateDeserialize(
  result: EmployeesUpdate200Response | EmployeesUpdateDefaultResponse,
): Promise<Employee> {
  if (isUnexpected(result)) {
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
export async function update(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  employeeName: string,
  properties: Employee,
  options: EmployeesUpdateOptionalParams = { requestOptions: {} },
): Promise<Employee> {
  const result = await _updateSend(
    context,
    subscriptionId,
    resourceGroupName,
    employeeName,
    properties,
    options,
  );
  return _updateDeserialize(result);
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  employeeName: string,
  options: EmployeesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | EmployeesDelete202Response
  | EmployeesDelete204Response
  | EmployeesDeleteDefaultResponse
  | EmployeesDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Contoso/employees/{employeeName}",
      subscriptionId,
      resourceGroupName,
      employeeName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | EmployeesDelete202Response
    | EmployeesDelete204Response
    | EmployeesDeleteDefaultResponse
    | EmployeesDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a Employee */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  employeeName: string,
  options: EmployeesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(
        context,
        subscriptionId,
        resourceGroupName,
        employeeName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _listByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: EmployeesListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | EmployeesListByResourceGroup200Response
  | EmployeesListByResourceGroupDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Contoso/employees",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByResourceGroupDeserialize(
  result:
    | EmployeesListByResourceGroup200Response
    | EmployeesListByResourceGroupDefaultResponse,
): Promise<_EmployeeListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => {
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
export function listByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: EmployeesListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Employee> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _listByResourceGroupDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: EmployeesListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | EmployeesListBySubscription200Response
  | EmployeesListBySubscriptionDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Contoso/employees",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listBySubscriptionDeserialize(
  result:
    | EmployeesListBySubscription200Response
    | EmployeesListBySubscriptionDefaultResponse,
): Promise<_EmployeeListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => {
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
export function listBySubscription(
  context: Client,
  subscriptionId: string,
  options: EmployeesListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Employee> {
  return buildPagedAsyncIterator(
    context,
    () => _listBySubscriptionSend(context, subscriptionId, options),
    _listBySubscriptionDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
