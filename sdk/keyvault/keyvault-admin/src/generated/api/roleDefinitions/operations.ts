// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { KeyVaultContext as Client } from "../index.js";
import {
  keyVaultErrorDeserializer,
  RoleDefinition,
  roleDefinitionDeserializer,
  RoleDefinitionCreateParameters,
  roleDefinitionCreateParametersSerializer,
  _RoleDefinitionListResult,
  _roleDefinitionListResultDeserializer,
} from "../../models/models.js";
import {
  RoleDefinitionsListOptionalParams,
  RoleDefinitionsGetOptionalParams,
  RoleDefinitionsCreateOrUpdateOptionalParams,
  RoleDefinitionsDeleteOptionalParams,
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
  scope: string,
  options: RoleDefinitionsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+scope}/providers/Microsoft.Authorization/roleDefinitions{?api%2Dversion,%24filter}",
    {
      scope: scope,
      "api%2Dversion": context.apiVersion,
      "%24filter": options?.filter,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_RoleDefinitionListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = keyVaultErrorDeserializer(result.body);
    throw error;
  }

  return _roleDefinitionListResultDeserializer(result.body);
}

/** Get all role definitions that are applicable at scope and above. */
export function list(
  context: Client,
  scope: string,
  options: RoleDefinitionsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<RoleDefinition> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, scope, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getSend(
  context: Client,
  scope: string,
  roleDefinitionName: string,
  options: RoleDefinitionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+scope}/providers/Microsoft.Authorization/roleDefinitions/{roleDefinitionName}{?api%2Dversion}",
    {
      scope: scope,
      roleDefinitionName: roleDefinitionName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<RoleDefinition> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = keyVaultErrorDeserializer(result.body);
    throw error;
  }

  return roleDefinitionDeserializer(result.body);
}

/** Get the specified role definition. */
export async function get(
  context: Client,
  scope: string,
  roleDefinitionName: string,
  options: RoleDefinitionsGetOptionalParams = { requestOptions: {} },
): Promise<RoleDefinition> {
  const result = await _getSend(context, scope, roleDefinitionName, options);
  return _getDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  scope: string,
  roleDefinitionName: string,
  parameters: RoleDefinitionCreateParameters,
  options: RoleDefinitionsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+scope}/providers/Microsoft.Authorization/roleDefinitions/{roleDefinitionName}{?api%2Dversion}",
    {
      scope: scope,
      roleDefinitionName: roleDefinitionName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: roleDefinitionCreateParametersSerializer(parameters),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<RoleDefinition> {
  const expectedStatuses = ["201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = keyVaultErrorDeserializer(result.body);
    throw error;
  }

  return roleDefinitionDeserializer(result.body);
}

/** Creates or updates a custom role definition. */
export async function createOrUpdate(
  context: Client,
  scope: string,
  roleDefinitionName: string,
  parameters: RoleDefinitionCreateParameters,
  options: RoleDefinitionsCreateOrUpdateOptionalParams = { requestOptions: {} },
): Promise<RoleDefinition> {
  const result = await _createOrUpdateSend(
    context,
    scope,
    roleDefinitionName,
    parameters,
    options,
  );
  return _createOrUpdateDeserialize(result);
}

export function _$deleteSend(
  context: Client,
  scope: string,
  roleDefinitionName: string,
  options: RoleDefinitionsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+scope}/providers/Microsoft.Authorization/roleDefinitions/{roleDefinitionName}{?api%2Dversion}",
    {
      scope: scope,
      roleDefinitionName: roleDefinitionName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _$deleteDeserialize(
  result: PathUncheckedResponse,
): Promise<RoleDefinition> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = keyVaultErrorDeserializer(result.body);
    throw error;
  }

  return roleDefinitionDeserializer(result.body);
}

/** Deletes a custom role definition. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  scope: string,
  roleDefinitionName: string,
  options: RoleDefinitionsDeleteOptionalParams = { requestOptions: {} },
): Promise<RoleDefinition> {
  const result = await _$deleteSend(
    context,
    scope,
    roleDefinitionName,
    options,
  );
  return _$deleteDeserialize(result);
}
