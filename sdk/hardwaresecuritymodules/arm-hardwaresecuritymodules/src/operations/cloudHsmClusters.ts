/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { CloudHsmClusters } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureHSMResourceProvider } from "../azureHSMResourceProvider";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  CloudHsmCluster,
  CloudHsmClustersListByResourceGroupNextOptionalParams,
  CloudHsmClustersListByResourceGroupOptionalParams,
  CloudHsmClustersListByResourceGroupResponse,
  CloudHsmClustersListBySubscriptionNextOptionalParams,
  CloudHsmClustersListBySubscriptionOptionalParams,
  CloudHsmClustersListBySubscriptionResponse,
  CloudHsmClustersCreateOrUpdateOptionalParams,
  CloudHsmClustersCreateOrUpdateResponse,
  CloudHsmClustersUpdateOptionalParams,
  CloudHsmClustersUpdateResponse,
  CloudHsmClustersGetOptionalParams,
  CloudHsmClustersGetResponse,
  CloudHsmClustersDeleteOptionalParams,
  CloudHsmClustersListByResourceGroupNextResponse,
  CloudHsmClustersListBySubscriptionNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing CloudHsmClusters operations. */
export class CloudHsmClustersImpl implements CloudHsmClusters {
  private readonly client: AzureHSMResourceProvider;

  /**
   * Initialize a new instance of the class CloudHsmClusters class.
   * @param client Reference to the service client
   */
  constructor(client: AzureHSMResourceProvider) {
    this.client = client;
  }

  /**
   * The List operation gets information about the Cloud HSM Clusters associated with the subscription
   * and within the specified resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: CloudHsmClustersListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<CloudHsmCluster> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
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
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: CloudHsmClustersListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<CloudHsmCluster[]> {
    let result: CloudHsmClustersListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: CloudHsmClustersListByResourceGroupOptionalParams
  ): AsyncIterableIterator<CloudHsmCluster> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * The List operation gets information about the Cloud HSM Clusters associated with the subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: CloudHsmClustersListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<CloudHsmCluster> {
    const iter = this.listBySubscriptionPagingAll(options);
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
        return this.listBySubscriptionPagingPage(options, settings);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: CloudHsmClustersListBySubscriptionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<CloudHsmCluster[]> {
    let result: CloudHsmClustersListBySubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: CloudHsmClustersListBySubscriptionOptionalParams
  ): AsyncIterableIterator<CloudHsmCluster> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Create or Update a Cloud HSM Cluster in the specified subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudHsmClusterName The name of the Cloud HSM Cluster within the specified resource group.
   *                            Cloud HSM Cluster names must be between 3 and 24 characters in length.
   * @param location The geo-location where the resource lives
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    cloudHsmClusterName: string,
    location: string,
    options?: CloudHsmClustersCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<CloudHsmClustersCreateOrUpdateResponse>,
      CloudHsmClustersCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<CloudHsmClustersCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, cloudHsmClusterName, location, options },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      CloudHsmClustersCreateOrUpdateResponse,
      OperationState<CloudHsmClustersCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "original-uri"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or Update a Cloud HSM Cluster in the specified subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudHsmClusterName The name of the Cloud HSM Cluster within the specified resource group.
   *                            Cloud HSM Cluster names must be between 3 and 24 characters in length.
   * @param location The geo-location where the resource lives
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    cloudHsmClusterName: string,
    location: string,
    options?: CloudHsmClustersCreateOrUpdateOptionalParams
  ): Promise<CloudHsmClustersCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      cloudHsmClusterName,
      location,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update a Cloud HSM Cluster in the specified subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudHsmClusterName The name of the Cloud HSM Cluster within the specified resource group.
   *                            Cloud HSM Cluster names must be between 3 and 24 characters in length.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    cloudHsmClusterName: string,
    options?: CloudHsmClustersUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<CloudHsmClustersUpdateResponse>,
      CloudHsmClustersUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<CloudHsmClustersUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, cloudHsmClusterName, options },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      CloudHsmClustersUpdateResponse,
      OperationState<CloudHsmClustersUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update a Cloud HSM Cluster in the specified subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudHsmClusterName The name of the Cloud HSM Cluster within the specified resource group.
   *                            Cloud HSM Cluster names must be between 3 and 24 characters in length.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    cloudHsmClusterName: string,
    options?: CloudHsmClustersUpdateOptionalParams
  ): Promise<CloudHsmClustersUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      cloudHsmClusterName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the specified Cloud HSM Cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudHsmClusterName The name of the Cloud HSM Cluster within the specified resource group.
   *                            Cloud HSM Cluster names must be between 3 and 24 characters in length.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    cloudHsmClusterName: string,
    options?: CloudHsmClustersGetOptionalParams
  ): Promise<CloudHsmClustersGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, cloudHsmClusterName, options },
      getOperationSpec
    );
  }

  /**
   * Deletes the specified Cloud HSM Cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudHsmClusterName The name of the Cloud HSM Cluster within the specified resource group.
   *                            Cloud HSM Cluster names must be between 3 and 24 characters in length.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    cloudHsmClusterName: string,
    options?: CloudHsmClustersDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, cloudHsmClusterName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes the specified Cloud HSM Cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudHsmClusterName The name of the Cloud HSM Cluster within the specified resource group.
   *                            Cloud HSM Cluster names must be between 3 and 24 characters in length.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    cloudHsmClusterName: string,
    options?: CloudHsmClustersDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      cloudHsmClusterName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The List operation gets information about the Cloud HSM Clusters associated with the subscription
   * and within the specified resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: CloudHsmClustersListByResourceGroupOptionalParams
  ): Promise<CloudHsmClustersListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * The List operation gets information about the Cloud HSM Clusters associated with the subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: CloudHsmClustersListBySubscriptionOptionalParams
  ): Promise<CloudHsmClustersListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: CloudHsmClustersListByResourceGroupNextOptionalParams
  ): Promise<CloudHsmClustersListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: CloudHsmClustersListBySubscriptionNextOptionalParams
  ): Promise<CloudHsmClustersListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/cloudHsmClusters/{cloudHsmClusterName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.CloudHsmCluster
    },
    201: {
      bodyMapper: Mappers.CloudHsmCluster
    },
    202: {
      bodyMapper: Mappers.CloudHsmCluster
    },
    204: {
      bodyMapper: Mappers.CloudHsmCluster
    },
    default: {
      bodyMapper: Mappers.CloudHsmClusterError
    }
  },
  requestBody: {
    parameterPath: {
      tags: ["options", "tags"],
      location: ["location"],
      sku: ["options", "sku"],
      identity: ["options", "identity"],
      provisioningState: ["options", "provisioningState"],
      autoGeneratedDomainNameLabelScope: [
        "options",
        "autoGeneratedDomainNameLabelScope"
      ],
      securityDomain: ["options", "securityDomain"],
      hsms: ["options", "hsms"],
      publicNetworkAccess: ["options", "publicNetworkAccess"],
      privateEndpointConnections: ["options", "privateEndpointConnections"],
      restoreProperties: ["options", "restoreProperties"],
      backupProperties: ["options", "backupProperties"]
    },
    mapper: { ...Mappers.CloudHsmCluster, required: true }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.cloudHsmClusterName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/cloudHsmClusters/{cloudHsmClusterName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.CloudHsmCluster
    },
    201: {
      bodyMapper: Mappers.CloudHsmCluster
    },
    202: {
      bodyMapper: Mappers.CloudHsmCluster
    },
    204: {
      bodyMapper: Mappers.CloudHsmCluster
    },
    default: {
      bodyMapper: Mappers.CloudHsmClusterError
    }
  },
  requestBody: {
    parameterPath: {
      tags: ["options", "tags"],
      sku: ["options", "sku"],
      identity: ["options", "identity"],
      backupProperties: ["options", "backupProperties"]
    },
    mapper: { ...Mappers.CloudHsmClusterPatchParameters, required: true }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.cloudHsmClusterName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/cloudHsmClusters/{cloudHsmClusterName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CloudHsmCluster
    },
    default: {
      bodyMapper: Mappers.CloudHsmClusterError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.cloudHsmClusterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/cloudHsmClusters/{cloudHsmClusterName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudHsmClusterError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.cloudHsmClusterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/cloudHsmClusters",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CloudHsmClusterListResult
    },
    default: {
      bodyMapper: Mappers.CloudHsmClusterError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.skiptoken],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.HardwareSecurityModules/cloudHsmClusters",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CloudHsmClusterListResult
    },
    default: {
      bodyMapper: Mappers.CloudHsmClusterError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.skiptoken],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CloudHsmClusterListResult
    },
    default: {
      bodyMapper: Mappers.CloudHsmClusterError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CloudHsmClusterListResult
    },
    default: {
      bodyMapper: Mappers.CloudHsmClusterError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
