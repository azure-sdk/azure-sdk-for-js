/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { PrivateEndpoints } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { StreamAnalyticsManagementClient } from "../streamAnalyticsManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  PrivateEndpoint,
  PrivateEndpointsListByClusterNextOptionalParams,
  PrivateEndpointsListByClusterOptionalParams,
  PrivateEndpointsListByClusterResponse,
  PrivateEndpointsCreateOrUpdateOptionalParams,
  PrivateEndpointsCreateOrUpdateResponse,
  PrivateEndpointsGetOptionalParams,
  PrivateEndpointsGetResponse,
  PrivateEndpointsDeleteOptionalParams,
  PrivateEndpointsListByClusterNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing PrivateEndpoints operations. */
export class PrivateEndpointsImpl implements PrivateEndpoints {
  private readonly client: StreamAnalyticsManagementClient;

  /**
   * Initialize a new instance of the class PrivateEndpoints class.
   * @param client Reference to the service client
   */
  constructor(client: StreamAnalyticsManagementClient) {
    this.client = client;
  }

  /**
   * Lists the private endpoints in the cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  public listByCluster(
    resourceGroupName: string,
    clusterName: string,
    options?: PrivateEndpointsListByClusterOptionalParams,
  ): PagedAsyncIterableIterator<PrivateEndpoint> {
    const iter = this.listByClusterPagingAll(
      resourceGroupName,
      clusterName,
      options,
    );
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
        return this.listByClusterPagingPage(
          resourceGroupName,
          clusterName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByClusterPagingPage(
    resourceGroupName: string,
    clusterName: string,
    options?: PrivateEndpointsListByClusterOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<PrivateEndpoint[]> {
    let result: PrivateEndpointsListByClusterResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByCluster(
        resourceGroupName,
        clusterName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByClusterNext(
        resourceGroupName,
        clusterName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByClusterPagingAll(
    resourceGroupName: string,
    clusterName: string,
    options?: PrivateEndpointsListByClusterOptionalParams,
  ): AsyncIterableIterator<PrivateEndpoint> {
    for await (const page of this.listByClusterPagingPage(
      resourceGroupName,
      clusterName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Creates a Stream Analytics Private Endpoint or replaces an already existing Private Endpoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param privateEndpointName The name of the private endpoint.
   * @param privateEndpoint The definition of the private endpoint that will be used to create a new
   *                        cluster or replace the existing one.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    clusterName: string,
    privateEndpointName: string,
    privateEndpoint: PrivateEndpoint,
    options?: PrivateEndpointsCreateOrUpdateOptionalParams,
  ): Promise<PrivateEndpointsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        privateEndpointName,
        privateEndpoint,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Gets information about the specified Private Endpoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param privateEndpointName The name of the private endpoint.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    privateEndpointName: string,
    options?: PrivateEndpointsGetOptionalParams,
  ): Promise<PrivateEndpointsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, privateEndpointName, options },
      getOperationSpec,
    );
  }

  /**
   * Delete the specified private endpoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param privateEndpointName The name of the private endpoint.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    clusterName: string,
    privateEndpointName: string,
    options?: PrivateEndpointsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, clusterName, privateEndpointName, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete the specified private endpoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param privateEndpointName The name of the private endpoint.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    clusterName: string,
    privateEndpointName: string,
    options?: PrivateEndpointsDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      clusterName,
      privateEndpointName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists the private endpoints in the cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  private _listByCluster(
    resourceGroupName: string,
    clusterName: string,
    options?: PrivateEndpointsListByClusterOptionalParams,
  ): Promise<PrivateEndpointsListByClusterResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, options },
      listByClusterOperationSpec,
    );
  }

  /**
   * ListByClusterNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param nextLink The nextLink from the previous successful call to the ListByCluster method.
   * @param options The options parameters.
   */
  private _listByClusterNext(
    resourceGroupName: string,
    clusterName: string,
    nextLink: string,
    options?: PrivateEndpointsListByClusterNextOptionalParams,
  ): Promise<PrivateEndpointsListByClusterNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, nextLink, options },
      listByClusterNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/clusters/{clusterName}/privateEndpoints/{privateEndpointName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpoint,
    },
    201: {
      bodyMapper: Mappers.PrivateEndpoint,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  requestBody: Parameters.privateEndpoint,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.privateEndpointName,
  ],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
  ],
  mediaType: "json",
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/clusters/{clusterName}/privateEndpoints/{privateEndpointName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpoint,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.privateEndpointName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/clusters/{clusterName}/privateEndpoints/{privateEndpointName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.privateEndpointName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByClusterOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/clusters/{clusterName}/privateEndpoints",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByClusterNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.clusterName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
