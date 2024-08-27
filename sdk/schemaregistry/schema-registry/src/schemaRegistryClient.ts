// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import { SchemaContentTypeValues } from "./models/models.js";
import {
  ListSchemaGroupsOptionalParams,
  ListSchemaVersionsOptionalParams,
  GetSchemaByIdOptionalParams,
  GetSchemaByVersionOptionalParams,
  GetSchemaPropertiesByContentOptionalParams,
  RegisterSchemaOptionalParams,
} from "./models/options.js";
import {
  listSchemaGroups,
  listSchemaVersions,
  getSchemaById,
  getSchemaByVersion,
  getSchemaPropertiesByContent,
  registerSchema,
  createSchemaRegistry,
  SchemaRegistryContext,
  SchemaRegistryClientOptionalParams,
} from "./api/index.js";
import { PagedAsyncIterableIterator } from "./static-helpers/pagingHelpers.js";

export { SchemaRegistryClientOptionalParams } from "./api/schemaRegistryContext.js";

export class SchemaRegistryClient {
  private _client: SchemaRegistryContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** SchemaRegistryClient is a client for registering and retrieving schemas from the Azure Schema Registry service. */
  constructor(
    fullyQualifiedNamespace: string,
    credential: TokenCredential,
    options: SchemaRegistryClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createSchemaRegistry(fullyQualifiedNamespace, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Gets the list of schema groups user is authorized to access. */
  listSchemaGroups(
    options: ListSchemaGroupsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<string> {
    return listSchemaGroups(this._client, options);
  }

  /** Gets the list of all versions of one schema. */
  listSchemaVersions(
    groupName: string,
    schemaName: string,
    options: ListSchemaVersionsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<number> {
    return listSchemaVersions(this._client, groupName, schemaName, options);
  }

  /** Gets a registered schema by its unique ID.  Azure Schema Registry guarantees that ID is unique within a namespace. Operation response type is based on serialization of schema requested. */
  getSchemaById(
    id: string,
    options: GetSchemaByIdOptionalParams = { requestOptions: {} },
  ): Promise<Uint8Array> {
    return getSchemaById(this._client, id, options);
  }

  /** Gets one specific version of one schema. */
  getSchemaByVersion(
    groupName: string,
    schemaName: string,
    schemaVersion: number,
    options: GetSchemaByVersionOptionalParams = { requestOptions: {} },
  ): Promise<Uint8Array> {
    return getSchemaByVersion(
      this._client,
      groupName,
      schemaName,
      schemaVersion,
      options,
    );
  }

  /** Gets the properties referencing an existing schema within the specified schema group, as matched by schema content comparison. */
  getSchemaPropertiesByContent(
    groupName: string,
    schemaName: string,
    contentType: SchemaContentTypeValues,
    schemaContent: Uint8Array,
    options: GetSchemaPropertiesByContentOptionalParams = {
      requestOptions: {},
    },
  ): Promise<void> {
    return getSchemaPropertiesByContent(
      this._client,
      groupName,
      schemaName,
      contentType,
      schemaContent,
      options,
    );
  }

  /** Register new schema. If schema of specified name does not exist in specified group, schema is created at version 1. If schema of specified name exists already in specified group, schema is created at latest version + 1. */
  registerSchema(
    groupName: string,
    schemaName: string,
    contentType: SchemaContentTypeValues,
    schemaContent: Uint8Array,
    options: RegisterSchemaOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return registerSchema(
      this._client,
      groupName,
      schemaName,
      contentType,
      schemaContent,
      options,
    );
  }
}
