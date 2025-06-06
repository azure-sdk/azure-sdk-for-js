/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { tracingClient } from "../tracing.js";
import type { SqlPools } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import type { ArtifactsClient } from "../artifactsClient.js";
import type {
  SqlPoolsListOptionalParams,
  SqlPoolsListResponse,
  SqlPoolsGetOptionalParams,
  SqlPoolsGetResponse,
} from "../models/index.js";

// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/sqlPools",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlPoolInfoListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorContract,
    },
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/sqlPools/{sqlPoolName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlPool,
    },
    default: {
      bodyMapper: Mappers.ErrorContract,
    },
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [Parameters.endpoint, Parameters.sqlPoolName],
  headerParameters: [Parameters.accept],
  serializer,
};

/** Class containing SqlPools operations. */
export class SqlPoolsImpl implements SqlPools {
  private readonly client: ArtifactsClient;

  /**
   * Initialize a new instance of the class SqlPools class.
   * @param client - Reference to the service client
   */
  // eslint-disable-next-line @azure/azure-sdk/ts-use-interface-parameters
  constructor(client: ArtifactsClient) {
    this.client = client;
  }

  /**
   * List Sql Pools
   * @param options - The options parameters.
   */
  async list(options?: SqlPoolsListOptionalParams): Promise<SqlPoolsListResponse> {
    return tracingClient.withSpan("ArtifactsClient.list", options ?? {}, async (updatedOptions) => {
      return this.client.sendOperationRequest(
        { updatedOptions },
        listOperationSpec,
      ) as Promise<SqlPoolsListResponse>;
    });
  }

  /**
   * Get Sql Pool
   * @param sqlPoolName - The Sql Pool name
   * @param options - The options parameters.
   */
  async get(
    sqlPoolName: string,
    options?: SqlPoolsGetOptionalParams,
  ): Promise<SqlPoolsGetResponse> {
    return tracingClient.withSpan("ArtifactsClient.get", options ?? {}, async (updatedOptions) => {
      return this.client.sendOperationRequest(
        { sqlPoolName, updatedOptions },
        getOperationSpec,
      ) as Promise<SqlPoolsGetResponse>;
    });
  }
}
