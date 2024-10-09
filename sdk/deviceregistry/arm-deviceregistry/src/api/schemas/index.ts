// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  schemaPropertiesSerializer,
  Schema,
  _SchemaListResult,
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
  SchemasGetOptionalParams,
  SchemasCreateOrReplaceOptionalParams,
  SchemasDeleteOptionalParams,
  SchemasListBySchemaRegistryOptionalParams,
} from "../../models/options.js";

export function _schemasGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schemaRegistryName: string,
  schemaName: string,
  options: SchemasGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/schemaRegistries/{schemaRegistryName}/schemas/{schemaName}",
      subscriptionId,
      resourceGroupName,
      schemaRegistryName,
      schemaName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _schemasGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Schema> {
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
          displayName: result.body.properties?.["displayName"],
          description: result.body.properties?.["description"],
          format: result.body.properties?.["format"],
          schemaType: result.body.properties?.["schemaType"],
          provisioningState: result.body.properties?.["provisioningState"],
          tags: result.body.properties?.["tags"],
        },
  };
}

/** Get a Schema */
export async function schemasGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schemaRegistryName: string,
  schemaName: string,
  options: SchemasGetOptionalParams = { requestOptions: {} },
): Promise<Schema> {
  const result = await _schemasGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    schemaRegistryName,
    schemaName,
    options,
  );
  return _schemasGetDeserialize(result);
}

export function _schemasCreateOrReplaceSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schemaRegistryName: string,
  schemaName: string,
  resource: Schema,
  options: SchemasCreateOrReplaceOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/schemaRegistries/{schemaRegistryName}/schemas/{schemaName}",
      subscriptionId,
      resourceGroupName,
      schemaRegistryName,
      schemaName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? resource.properties
          : schemaPropertiesSerializer(resource.properties),
      },
    });
}

export async function _schemasCreateOrReplaceDeserialize(
  result: PathUncheckedResponse,
): Promise<Schema> {
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
          displayName: result.body.properties?.["displayName"],
          description: result.body.properties?.["description"],
          format: result.body.properties?.["format"],
          schemaType: result.body.properties?.["schemaType"],
          provisioningState: result.body.properties?.["provisioningState"],
          tags: result.body.properties?.["tags"],
        },
  };
}

/** Create a Schema */
export async function schemasCreateOrReplace(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schemaRegistryName: string,
  schemaName: string,
  resource: Schema,
  options: SchemasCreateOrReplaceOptionalParams = { requestOptions: {} },
): Promise<Schema> {
  const result = await _schemasCreateOrReplaceSend(
    context,
    subscriptionId,
    resourceGroupName,
    schemaRegistryName,
    schemaName,
    resource,
    options,
  );
  return _schemasCreateOrReplaceDeserialize(result);
}

export function _schemasDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schemaRegistryName: string,
  schemaName: string,
  options: SchemasDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/schemaRegistries/{schemaRegistryName}/schemas/{schemaName}",
      subscriptionId,
      resourceGroupName,
      schemaRegistryName,
      schemaName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _schemasDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a Schema */
export async function schemasDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schemaRegistryName: string,
  schemaName: string,
  options: SchemasDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _schemasDeleteSend(
    context,
    subscriptionId,
    resourceGroupName,
    schemaRegistryName,
    schemaName,
    options,
  );
  return _schemasDeleteDeserialize(result);
}

export function _schemasListBySchemaRegistrySend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schemaRegistryName: string,
  options: SchemasListBySchemaRegistryOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/schemaRegistries/{schemaRegistryName}/schemas",
      subscriptionId,
      resourceGroupName,
      schemaRegistryName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _schemasListBySchemaRegistryDeserialize(
  result: PathUncheckedResponse,
): Promise<_SchemaListResult> {
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
              displayName: p.properties?.["displayName"],
              description: p.properties?.["description"],
              format: p.properties?.["format"],
              schemaType: p.properties?.["schemaType"],
              provisioningState: p.properties?.["provisioningState"],
              tags: p.properties?.["tags"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List Schema resources by SchemaRegistry */
export function schemasListBySchemaRegistry(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schemaRegistryName: string,
  options: SchemasListBySchemaRegistryOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Schema> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _schemasListBySchemaRegistrySend(
        context,
        subscriptionId,
        resourceGroupName,
        schemaRegistryName,
        options,
      ),
    _schemasListBySchemaRegistryDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
