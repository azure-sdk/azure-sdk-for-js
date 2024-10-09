// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  schemaVersionPropertiesSerializer,
  SchemaVersion,
  _SchemaVersionListResult,
} from "../../models/models.js";
import { DeviceRegistryContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  SchemaVersionsGetOptionalParams,
  SchemaVersionsCreateOrReplaceOptionalParams,
  SchemaVersionsDeleteOptionalParams,
  SchemaVersionsListBySchemaOptionalParams,
} from "../../models/options.js";

export function _schemaVersionsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schemaRegistryName: string,
  schemaName: string,
  schemaVersionName: string,
  options: SchemaVersionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/schemaRegistries/{schemaRegistryName}/schemas/{schemaName}/schemaVersions/{schemaVersionName}",
      subscriptionId,
      resourceGroupName,
      schemaRegistryName,
      schemaName,
      schemaVersionName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _schemaVersionsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<SchemaVersion> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
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
          uuid: result.body.properties?.["uuid"],
          description: result.body.properties?.["description"],
          schemaContent: result.body.properties?.["schemaContent"],
          hash: result.body.properties?.["hash"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a SchemaVersion */
export async function schemaVersionsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schemaRegistryName: string,
  schemaName: string,
  schemaVersionName: string,
  options: SchemaVersionsGetOptionalParams = { requestOptions: {} },
): Promise<SchemaVersion> {
  const result = await _schemaVersionsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    schemaRegistryName,
    schemaName,
    schemaVersionName,
    options,
  );
  return _schemaVersionsGetDeserialize(result);
}

export function _schemaVersionsCreateOrReplaceSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schemaRegistryName: string,
  schemaName: string,
  schemaVersionName: string,
  resource: SchemaVersion,
  options: SchemaVersionsCreateOrReplaceOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/schemaRegistries/{schemaRegistryName}/schemas/{schemaName}/schemaVersions/{schemaVersionName}",
      subscriptionId,
      resourceGroupName,
      schemaRegistryName,
      schemaName,
      schemaVersionName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? resource.properties
          : schemaVersionPropertiesSerializer(resource.properties),
      },
    });
}

export async function _schemaVersionsCreateOrReplaceDeserialize(
  result: PathUncheckedResponse,
): Promise<SchemaVersion> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
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
          uuid: result.body.properties?.["uuid"],
          description: result.body.properties?.["description"],
          schemaContent: result.body.properties?.["schemaContent"],
          hash: result.body.properties?.["hash"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Create a SchemaVersion */
export async function schemaVersionsCreateOrReplace(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schemaRegistryName: string,
  schemaName: string,
  schemaVersionName: string,
  resource: SchemaVersion,
  options: SchemaVersionsCreateOrReplaceOptionalParams = { requestOptions: {} },
): Promise<SchemaVersion> {
  const result = await _schemaVersionsCreateOrReplaceSend(
    context,
    subscriptionId,
    resourceGroupName,
    schemaRegistryName,
    schemaName,
    schemaVersionName,
    resource,
    options,
  );
  return _schemaVersionsCreateOrReplaceDeserialize(result);
}

export function _schemaVersionsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schemaRegistryName: string,
  schemaName: string,
  schemaVersionName: string,
  options: SchemaVersionsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/schemaRegistries/{schemaRegistryName}/schemas/{schemaName}/schemaVersions/{schemaVersionName}",
      subscriptionId,
      resourceGroupName,
      schemaRegistryName,
      schemaName,
      schemaVersionName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _schemaVersionsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a SchemaVersion */
export async function schemaVersionsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schemaRegistryName: string,
  schemaName: string,
  schemaVersionName: string,
  options: SchemaVersionsDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _schemaVersionsDeleteSend(
    context,
    subscriptionId,
    resourceGroupName,
    schemaRegistryName,
    schemaName,
    schemaVersionName,
    options,
  );
  return _schemaVersionsDeleteDeserialize(result);
}

export function _schemaVersionsListBySchemaSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schemaRegistryName: string,
  schemaName: string,
  options: SchemaVersionsListBySchemaOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/schemaRegistries/{schemaRegistryName}/schemas/{schemaName}/schemaVersions",
      subscriptionId,
      resourceGroupName,
      schemaRegistryName,
      schemaName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _schemaVersionsListBySchemaDeserialize(
  result: PathUncheckedResponse,
): Promise<_SchemaVersionListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
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
              uuid: p.properties?.["uuid"],
              description: p.properties?.["description"],
              schemaContent: p.properties?.["schemaContent"],
              hash: p.properties?.["hash"],
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List SchemaVersion resources by Schema */
export function schemaVersionsListBySchema(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schemaRegistryName: string,
  schemaName: string,
  options: SchemaVersionsListBySchemaOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<SchemaVersion> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _schemaVersionsListBySchemaSend(
        context,
        subscriptionId,
        resourceGroupName,
        schemaRegistryName,
        schemaName,
        options,
      ),
    _schemaVersionsListBySchemaDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
