// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DeviceRegistryContext } from "../../api/deviceRegistryContext.js";
import { Schema } from "../../models/models.js";
import {
  schemasGet,
  schemasCreateOrReplace,
  schemasDelete,
  schemasListBySchemaRegistry,
} from "../../api/schemas/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  SchemasGetOptionalParams,
  SchemasCreateOrReplaceOptionalParams,
  SchemasDeleteOptionalParams,
  SchemasListBySchemaRegistryOptionalParams,
} from "../../models/options.js";

/** Interface representing a Schemas operations. */
export interface SchemasOperations {
  /** Get a Schema */
  get: (
    resourceGroupName: string,
    schemaRegistryName: string,
    schemaName: string,
    options?: SchemasGetOptionalParams,
  ) => Promise<Schema>;
  /** Create a Schema */
  createOrReplace: (
    resourceGroupName: string,
    schemaRegistryName: string,
    schemaName: string,
    resource: Schema,
    options?: SchemasCreateOrReplaceOptionalParams,
  ) => Promise<Schema>;
  /** Delete a Schema */
  delete: (
    resourceGroupName: string,
    schemaRegistryName: string,
    schemaName: string,
    options?: SchemasDeleteOptionalParams,
  ) => Promise<void>;
  /** List Schema resources by SchemaRegistry */
  listBySchemaRegistry: (
    resourceGroupName: string,
    schemaRegistryName: string,
    options?: SchemasListBySchemaRegistryOptionalParams,
  ) => PagedAsyncIterableIterator<Schema>;
}

export function getSchemas(
  context: DeviceRegistryContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      schemaRegistryName: string,
      schemaName: string,
      options?: SchemasGetOptionalParams,
    ) =>
      schemasGet(
        context,
        subscriptionId,
        resourceGroupName,
        schemaRegistryName,
        schemaName,
        options,
      ),
    createOrReplace: (
      resourceGroupName: string,
      schemaRegistryName: string,
      schemaName: string,
      resource: Schema,
      options?: SchemasCreateOrReplaceOptionalParams,
    ) =>
      schemasCreateOrReplace(
        context,
        subscriptionId,
        resourceGroupName,
        schemaRegistryName,
        schemaName,
        resource,
        options,
      ),
    delete: (
      resourceGroupName: string,
      schemaRegistryName: string,
      schemaName: string,
      options?: SchemasDeleteOptionalParams,
    ) =>
      schemasDelete(
        context,
        subscriptionId,
        resourceGroupName,
        schemaRegistryName,
        schemaName,
        options,
      ),
    listBySchemaRegistry: (
      resourceGroupName: string,
      schemaRegistryName: string,
      options?: SchemasListBySchemaRegistryOptionalParams,
    ) =>
      schemasListBySchemaRegistry(
        context,
        subscriptionId,
        resourceGroupName,
        schemaRegistryName,
        options,
      ),
  };
}

export function getSchemasOperations(
  context: DeviceRegistryContext,
  subscriptionId: string,
): SchemasOperations {
  return {
    ...getSchemas(context, subscriptionId),
  };
}
