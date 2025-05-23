/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import type { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import type { Operations } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import type { ConnectedKubernetesClient } from "../connectedKubernetesClient.js";
import type {
  Operation,
  OperationsGetNextOptionalParams,
  OperationsGetOptionalParams,
  OperationsGetResponse,
  OperationsGetNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Operations operations. */
export class OperationsImpl implements Operations {
  private readonly client: ConnectedKubernetesClient;

  /**
   * Initialize a new instance of the class Operations class.
   * @param client Reference to the service client
   */
  constructor(client: ConnectedKubernetesClient) {
    this.client = client;
  }

  /**
   * Lists all of the available API operations for Connected Cluster resource.
   * @param options The options parameters.
   */
  public list(options?: OperationsGetOptionalParams): PagedAsyncIterableIterator<Operation> {
    const iter = this.getPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.getPagingPage(options, settings);
      },
    };
  }

  private async *getPagingPage(
    options?: OperationsGetOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Operation[]> {
    let result: OperationsGetResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._get(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._getNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *getPagingAll(
    options?: OperationsGetOptionalParams,
  ): AsyncIterableIterator<Operation> {
    for await (const page of this.getPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists all of the available API operations for Connected Cluster resource.
   * @param options The options parameters.
   */
  private _get(options?: OperationsGetOptionalParams): Promise<OperationsGetResponse> {
    return this.client.sendOperationRequest({ options }, getOperationSpec);
  }

  /**
   * GetNext
   * @param nextLink The nextLink from the previous successful call to the Get method.
   * @param options The options parameters.
   */
  private _getNext(
    nextLink: string,
    options?: OperationsGetNextOptionalParams,
  ): Promise<OperationsGetNextResponse> {
    return this.client.sendOperationRequest({ nextLink, options }, getNextOperationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Kubernetes/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationList,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const getNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationList,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer,
};
