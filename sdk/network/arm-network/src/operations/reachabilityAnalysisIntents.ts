/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { ReachabilityAnalysisIntents } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { NetworkManagementClient } from "../networkManagementClient.js";
import {
  ReachabilityAnalysisIntent,
  ReachabilityAnalysisIntentsListNextOptionalParams,
  ReachabilityAnalysisIntentsListOptionalParams,
  ReachabilityAnalysisIntentsListResponse,
  ReachabilityAnalysisIntentsGetOptionalParams,
  ReachabilityAnalysisIntentsGetResponse,
  ReachabilityAnalysisIntentsCreateOptionalParams,
  ReachabilityAnalysisIntentsCreateResponse,
  ReachabilityAnalysisIntentsDeleteOptionalParams,
  ReachabilityAnalysisIntentsListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing ReachabilityAnalysisIntents operations. */
export class ReachabilityAnalysisIntentsImpl
  implements ReachabilityAnalysisIntents
{
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class ReachabilityAnalysisIntents class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Gets list of Reachability Analysis Intents .
   * @param resourceGroupName The name of the resource group.
   * @param networkManagerName The name of the network manager.
   * @param workspaceName Workspace name.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    networkManagerName: string,
    workspaceName: string,
    options?: ReachabilityAnalysisIntentsListOptionalParams,
  ): PagedAsyncIterableIterator<ReachabilityAnalysisIntent> {
    const iter = this.listPagingAll(
      resourceGroupName,
      networkManagerName,
      workspaceName,
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
        return this.listPagingPage(
          resourceGroupName,
          networkManagerName,
          workspaceName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    networkManagerName: string,
    workspaceName: string,
    options?: ReachabilityAnalysisIntentsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ReachabilityAnalysisIntent[]> {
    let result: ReachabilityAnalysisIntentsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        networkManagerName,
        workspaceName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        networkManagerName,
        workspaceName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    networkManagerName: string,
    workspaceName: string,
    options?: ReachabilityAnalysisIntentsListOptionalParams,
  ): AsyncIterableIterator<ReachabilityAnalysisIntent> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      networkManagerName,
      workspaceName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets list of Reachability Analysis Intents .
   * @param resourceGroupName The name of the resource group.
   * @param networkManagerName The name of the network manager.
   * @param workspaceName Workspace name.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    networkManagerName: string,
    workspaceName: string,
    options?: ReachabilityAnalysisIntentsListOptionalParams,
  ): Promise<ReachabilityAnalysisIntentsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, networkManagerName, workspaceName, options },
      listOperationSpec,
    );
  }

  /**
   * Get the Reachability Analysis Intent.
   * @param resourceGroupName The name of the resource group.
   * @param networkManagerName The name of the network manager.
   * @param workspaceName Workspace name.
   * @param reachabilityAnalysisIntentName Reachability Analysis Intent name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    networkManagerName: string,
    workspaceName: string,
    reachabilityAnalysisIntentName: string,
    options?: ReachabilityAnalysisIntentsGetOptionalParams,
  ): Promise<ReachabilityAnalysisIntentsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkManagerName,
        workspaceName,
        reachabilityAnalysisIntentName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Creates Reachability Analysis Intent.
   * @param resourceGroupName The name of the resource group.
   * @param networkManagerName The name of the network manager.
   * @param workspaceName Workspace name.
   * @param reachabilityAnalysisIntentName Reachability Analysis Intent name.
   * @param body Reachability Analysis Intent object to create/update.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    networkManagerName: string,
    workspaceName: string,
    reachabilityAnalysisIntentName: string,
    body: ReachabilityAnalysisIntent,
    options?: ReachabilityAnalysisIntentsCreateOptionalParams,
  ): Promise<ReachabilityAnalysisIntentsCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkManagerName,
        workspaceName,
        reachabilityAnalysisIntentName,
        body,
        options,
      },
      createOperationSpec,
    );
  }

  /**
   * Deletes Reachability Analysis Intent.
   * @param resourceGroupName The name of the resource group.
   * @param networkManagerName The name of the network manager.
   * @param workspaceName Workspace name.
   * @param reachabilityAnalysisIntentName Reachability Analysis Intent name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    networkManagerName: string,
    workspaceName: string,
    reachabilityAnalysisIntentName: string,
    options?: ReachabilityAnalysisIntentsDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkManagerName,
        workspaceName,
        reachabilityAnalysisIntentName,
        options,
      },
      deleteOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param networkManagerName The name of the network manager.
   * @param workspaceName Workspace name.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    networkManagerName: string,
    workspaceName: string,
    nextLink: string,
    options?: ReachabilityAnalysisIntentsListNextOptionalParams,
  ): Promise<ReachabilityAnalysisIntentsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkManagerName,
        workspaceName,
        nextLink,
        options,
      },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkManagers/{networkManagerName}/verifierWorkspaces/{workspaceName}/reachabilityAnalysisIntents",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ReachabilityAnalysisIntentListResult,
    },
    default: {
      bodyMapper: Mappers.CommonErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skipToken,
    Parameters.skip,
    Parameters.top1,
    Parameters.sortKey,
    Parameters.sortValue,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkManagerName1,
    Parameters.workspaceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkManagers/{networkManagerName}/verifierWorkspaces/{workspaceName}/reachabilityAnalysisIntents/{reachabilityAnalysisIntentName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ReachabilityAnalysisIntent,
    },
    default: {
      bodyMapper: Mappers.CommonErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkManagerName1,
    Parameters.workspaceName,
    Parameters.reachabilityAnalysisIntentName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkManagers/{networkManagerName}/verifierWorkspaces/{workspaceName}/reachabilityAnalysisIntents/{reachabilityAnalysisIntentName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ReachabilityAnalysisIntent,
    },
    201: {
      bodyMapper: Mappers.ReachabilityAnalysisIntent,
    },
    default: {
      bodyMapper: Mappers.CommonErrorResponse,
    },
  },
  requestBody: Parameters.body3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkManagerName1,
    Parameters.workspaceName,
    Parameters.reachabilityAnalysisIntentName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkManagers/{networkManagerName}/verifierWorkspaces/{workspaceName}/reachabilityAnalysisIntents/{reachabilityAnalysisIntentName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CommonErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkManagerName1,
    Parameters.workspaceName,
    Parameters.reachabilityAnalysisIntentName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ReachabilityAnalysisIntentListResult,
    },
    default: {
      bodyMapper: Mappers.CommonErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.networkManagerName1,
    Parameters.workspaceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
