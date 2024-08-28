// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  _SchemaGroups,
  _SchemaVersions,
  SchemaContentTypeValues,
} from "../models/models.js";
import { SchemaRegistryContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { stringToUint8Array, uint8ArrayToString } from "@azure/core-util";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../static-helpers/pagingHelpers.js";
import {
  ListSchemaGroupsOptionalParams,
  ListSchemaVersionsOptionalParams,
  GetSchemaByIdOptionalParams,
  GetSchemaByVersionOptionalParams,
  GetSchemaPropertiesByContentOptionalParams,
  RegisterSchemaOptionalParams,
} from "../models/options.js";

export function _listSchemaGroupsSend(
  context: Client,
  options: ListSchemaGroupsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/$schemaGroups")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listSchemaGroupsDeserialize(
  result: PathUncheckedResponse,
): Promise<_SchemaGroups> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["Value"],
    nextLink: result.body["NextLink"],
  };
}

/** Gets the list of schema groups user is authorized to access. */
export function listSchemaGroups(
  context: Client,
  options: ListSchemaGroupsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<string> {
  return buildPagedAsyncIterator(
    context,
    () => _listSchemaGroupsSend(context, options),
    _listSchemaGroupsDeserialize,
    ["200"],
    { itemName: "Value", nextLinkName: "NextLink" },
  );
}

export function _listSchemaVersionsSend(
  context: Client,
  groupName: string,
  schemaName: string,
  options: ListSchemaVersionsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/$schemaGroups/{groupName}/schemas/{schemaName}/versions",
      groupName,
      schemaName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listSchemaVersionsDeserialize(
  result: PathUncheckedResponse,
): Promise<_SchemaVersions> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["Value"],
    nextLink: result.body["NextLink"],
  };
}

/** Gets the list of all versions of one schema. */
export function listSchemaVersions(
  context: Client,
  groupName: string,
  schemaName: string,
  options: ListSchemaVersionsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<number> {
  return buildPagedAsyncIterator(
    context,
    () => _listSchemaVersionsSend(context, groupName, schemaName, options),
    _listSchemaVersionsDeserialize,
    ["200"],
    { itemName: "Value", nextLinkName: "NextLink" },
  );
}

export function _getSchemaByIdSend(
  context: Client,
  id: string,
  options: GetSchemaByIdOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/$schemaGroups/$schemas/{id}", id)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getSchemaByIdDeserialize(
  result: PathUncheckedResponse,
): Promise<Uint8Array> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return typeof result.body === "string"
    ? stringToUint8Array(result.body, "base64")
    : result.body;
}

/** Gets a registered schema by its unique ID.  Azure Schema Registry guarantees that ID is unique within a namespace. Operation response type is based on serialization of schema requested. */
export async function getSchemaById(
  context: Client,
  id: string,
  options: GetSchemaByIdOptionalParams = { requestOptions: {} },
): Promise<Uint8Array> {
  const result = await _getSchemaByIdSend(context, id, options);
  return _getSchemaByIdDeserialize(result);
}

export function _getSchemaByVersionSend(
  context: Client,
  groupName: string,
  schemaName: string,
  schemaVersion: number,
  options: GetSchemaByVersionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/$schemaGroups/{groupName}/schemas/{schemaName}/versions/{schemaVersion}",
      groupName,
      schemaName,
      schemaVersion,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getSchemaByVersionDeserialize(
  result: PathUncheckedResponse,
): Promise<Uint8Array> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return typeof result.body === "string"
    ? stringToUint8Array(result.body, "base64")
    : result.body;
}

/** Gets one specific version of one schema. */
export async function getSchemaByVersion(
  context: Client,
  groupName: string,
  schemaName: string,
  schemaVersion: number,
  options: GetSchemaByVersionOptionalParams = { requestOptions: {} },
): Promise<Uint8Array> {
  const result = await _getSchemaByVersionSend(
    context,
    groupName,
    schemaName,
    schemaVersion,
    options,
  );
  return _getSchemaByVersionDeserialize(result);
}

export function _getSchemaPropertiesByContentSend(
  context: Client,
  groupName: string,
  schemaName: string,
  contentType: SchemaContentTypeValues,
  schemaContent: Uint8Array,
  options: GetSchemaPropertiesByContentOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/$schemaGroups/{groupName}/schemas/{schemaName}:get-id",
      groupName,
      schemaName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: contentType,
      body: uint8ArrayToString(schemaContent, "base64"),
    });
}

export async function _getSchemaPropertiesByContentDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Gets the properties referencing an existing schema within the specified schema group, as matched by schema content comparison. */
export async function getSchemaPropertiesByContent(
  context: Client,
  groupName: string,
  schemaName: string,
  contentType: SchemaContentTypeValues,
  schemaContent: Uint8Array,
  options: GetSchemaPropertiesByContentOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _getSchemaPropertiesByContentSend(
    context,
    groupName,
    schemaName,
    contentType,
    schemaContent,
    options,
  );
  return _getSchemaPropertiesByContentDeserialize(result);
}

export function _registerSchemaSend(
  context: Client,
  groupName: string,
  schemaName: string,
  contentType: SchemaContentTypeValues,
  schemaContent: Uint8Array,
  options: RegisterSchemaOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/$schemaGroups/{groupName}/schemas/{schemaName}",
      groupName,
      schemaName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: contentType,
      body: uint8ArrayToString(schemaContent, "base64"),
    });
}

export async function _registerSchemaDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Register new schema. If schema of specified name does not exist in specified group, schema is created at version 1. If schema of specified name exists already in specified group, schema is created at latest version + 1. */
export async function registerSchema(
  context: Client,
  groupName: string,
  schemaName: string,
  contentType: SchemaContentTypeValues,
  schemaContent: Uint8Array,
  options: RegisterSchemaOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _registerSchemaSend(
    context,
    groupName,
    schemaName,
    contentType,
    schemaContent,
    options,
  );
  return _registerSchemaDeserialize(result);
}
