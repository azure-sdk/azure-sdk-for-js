// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DeviceRegistryContext } from "../../api/deviceRegistryContext.js";
import { SchemaVersion } from "../../models/models.js";
import {
  schemaVersionsGet,
  schemaVersionsCreateOrReplace,
  schemaVersionsDelete,
  schemaVersionsListBySchema,
} from "../../api/schemaVersions/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  SchemaVersionsGetOptionalParams,
  SchemaVersionsCreateOrReplaceOptionalParams,
  SchemaVersionsDeleteOptionalParams,
  SchemaVersionsListBySchemaOptionalParams,
} from "../../models/options.js";

/** Interface representing a SchemaVersions operations. */
export interface SchemaVersionsOperations {
  /** Get a SchemaVersion */
  get: (
    resourceGroupName: string,
    schemaRegistryName: string,
    schemaName: string,
    schemaVersionName: string,
    options?: SchemaVersionsGetOptionalParams,
  ) => Promise<SchemaVersion>;
  /** Create a SchemaVersion */
  createOrReplace: (
    resourceGroupName: string,
    schemaRegistryName: string,
    schemaName: string,
    schemaVersionName: string,
    resource: SchemaVersion,
    options?: SchemaVersionsCreateOrReplaceOptionalParams,
  ) => Promise<SchemaVersion>;
  /** Delete a SchemaVersion */
  delete: (
    resourceGroupName: string,
    schemaRegistryName: string,
    schemaName: string,
    schemaVersionName: string,
    options?: SchemaVersionsDeleteOptionalParams,
  ) => Promise<void>;
  /** List SchemaVersion resources by Schema */
  listBySchema: (
    resourceGroupName: string,
    schemaRegistryName: string,
    schemaName: string,
    options?: SchemaVersionsListBySchemaOptionalParams,
  ) => PagedAsyncIterableIterator<SchemaVersion>;
}

export function getSchemaVersions(
  context: DeviceRegistryContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      schemaRegistryName: string,
      schemaName: string,
      schemaVersionName: string,
      options?: SchemaVersionsGetOptionalParams,
    ) =>
      schemaVersionsGet(
        context,
        subscriptionId,
        resourceGroupName,
        schemaRegistryName,
        schemaName,
        schemaVersionName,
        options,
      ),
    createOrReplace: (
      resourceGroupName: string,
      schemaRegistryName: string,
      schemaName: string,
      schemaVersionName: string,
      resource: SchemaVersion,
      options?: SchemaVersionsCreateOrReplaceOptionalParams,
    ) =>
      schemaVersionsCreateOrReplace(
        context,
        subscriptionId,
        resourceGroupName,
        schemaRegistryName,
        schemaName,
        schemaVersionName,
        resource,
        options,
      ),
    delete: (
      resourceGroupName: string,
      schemaRegistryName: string,
      schemaName: string,
      schemaVersionName: string,
      options?: SchemaVersionsDeleteOptionalParams,
    ) =>
      schemaVersionsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        schemaRegistryName,
        schemaName,
        schemaVersionName,
        options,
      ),
    listBySchema: (
      resourceGroupName: string,
      schemaRegistryName: string,
      schemaName: string,
      options?: SchemaVersionsListBySchemaOptionalParams,
    ) =>
      schemaVersionsListBySchema(
        context,
        subscriptionId,
        resourceGroupName,
        schemaRegistryName,
        schemaName,
        options,
      ),
  };
}

export function getSchemaVersionsOperations(
  context: DeviceRegistryContext,
  subscriptionId: string,
): SchemaVersionsOperations {
  return {
    ...getSchemaVersions(context, subscriptionId),
  };
}
