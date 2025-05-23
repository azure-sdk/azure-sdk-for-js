/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { PrivateDnsZoneGroups } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { NetworkManagementClient } from "../networkManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  PrivateDnsZoneGroup,
  PrivateDnsZoneGroupsListNextOptionalParams,
  PrivateDnsZoneGroupsListOptionalParams,
  PrivateDnsZoneGroupsListResponse,
  PrivateDnsZoneGroupsDeleteOptionalParams,
  PrivateDnsZoneGroupsGetOptionalParams,
  PrivateDnsZoneGroupsGetResponse,
  PrivateDnsZoneGroupsCreateOrUpdateOptionalParams,
  PrivateDnsZoneGroupsCreateOrUpdateResponse,
  PrivateDnsZoneGroupsListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing PrivateDnsZoneGroups operations. */
export class PrivateDnsZoneGroupsImpl implements PrivateDnsZoneGroups {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class PrivateDnsZoneGroups class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Gets all private dns zone groups in a private endpoint.
   * @param privateEndpointName The name of the private endpoint.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  public list(
    privateEndpointName: string,
    resourceGroupName: string,
    options?: PrivateDnsZoneGroupsListOptionalParams,
  ): PagedAsyncIterableIterator<PrivateDnsZoneGroup> {
    const iter = this.listPagingAll(
      privateEndpointName,
      resourceGroupName,
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
          privateEndpointName,
          resourceGroupName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    privateEndpointName: string,
    resourceGroupName: string,
    options?: PrivateDnsZoneGroupsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<PrivateDnsZoneGroup[]> {
    let result: PrivateDnsZoneGroupsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        privateEndpointName,
        resourceGroupName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        privateEndpointName,
        resourceGroupName,
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
    privateEndpointName: string,
    resourceGroupName: string,
    options?: PrivateDnsZoneGroupsListOptionalParams,
  ): AsyncIterableIterator<PrivateDnsZoneGroup> {
    for await (const page of this.listPagingPage(
      privateEndpointName,
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Deletes the specified private dns zone group.
   * @param resourceGroupName The name of the resource group.
   * @param privateEndpointName The name of the private endpoint.
   * @param privateDnsZoneGroupName The name of the private dns zone group.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    privateEndpointName: string,
    privateDnsZoneGroupName: string,
    options?: PrivateDnsZoneGroupsDeleteOptionalParams,
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
      args: {
        resourceGroupName,
        privateEndpointName,
        privateDnsZoneGroupName,
        options,
      },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes the specified private dns zone group.
   * @param resourceGroupName The name of the resource group.
   * @param privateEndpointName The name of the private endpoint.
   * @param privateDnsZoneGroupName The name of the private dns zone group.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    privateEndpointName: string,
    privateDnsZoneGroupName: string,
    options?: PrivateDnsZoneGroupsDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      privateEndpointName,
      privateDnsZoneGroupName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the private dns zone group resource by specified private dns zone group name.
   * @param resourceGroupName The name of the resource group.
   * @param privateEndpointName The name of the private endpoint.
   * @param privateDnsZoneGroupName The name of the private dns zone group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    privateEndpointName: string,
    privateDnsZoneGroupName: string,
    options?: PrivateDnsZoneGroupsGetOptionalParams,
  ): Promise<PrivateDnsZoneGroupsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        privateEndpointName,
        privateDnsZoneGroupName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates a private dns zone group in the specified private endpoint.
   * @param resourceGroupName The name of the resource group.
   * @param privateEndpointName The name of the private endpoint.
   * @param privateDnsZoneGroupName The name of the private dns zone group.
   * @param parameters Parameters supplied to the create or update private dns zone group operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    privateEndpointName: string,
    privateDnsZoneGroupName: string,
    parameters: PrivateDnsZoneGroup,
    options?: PrivateDnsZoneGroupsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<PrivateDnsZoneGroupsCreateOrUpdateResponse>,
      PrivateDnsZoneGroupsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<PrivateDnsZoneGroupsCreateOrUpdateResponse> => {
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
      args: {
        resourceGroupName,
        privateEndpointName,
        privateDnsZoneGroupName,
        parameters,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      PrivateDnsZoneGroupsCreateOrUpdateResponse,
      OperationState<PrivateDnsZoneGroupsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a private dns zone group in the specified private endpoint.
   * @param resourceGroupName The name of the resource group.
   * @param privateEndpointName The name of the private endpoint.
   * @param privateDnsZoneGroupName The name of the private dns zone group.
   * @param parameters Parameters supplied to the create or update private dns zone group operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    privateEndpointName: string,
    privateDnsZoneGroupName: string,
    parameters: PrivateDnsZoneGroup,
    options?: PrivateDnsZoneGroupsCreateOrUpdateOptionalParams,
  ): Promise<PrivateDnsZoneGroupsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      privateEndpointName,
      privateDnsZoneGroupName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets all private dns zone groups in a private endpoint.
   * @param privateEndpointName The name of the private endpoint.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  private _list(
    privateEndpointName: string,
    resourceGroupName: string,
    options?: PrivateDnsZoneGroupsListOptionalParams,
  ): Promise<PrivateDnsZoneGroupsListResponse> {
    return this.client.sendOperationRequest(
      { privateEndpointName, resourceGroupName, options },
      listOperationSpec,
    );
  }

  /**
   * ListNext
   * @param privateEndpointName The name of the private endpoint.
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    privateEndpointName: string,
    resourceGroupName: string,
    nextLink: string,
    options?: PrivateDnsZoneGroupsListNextOptionalParams,
  ): Promise<PrivateDnsZoneGroupsListNextResponse> {
    return this.client.sendOperationRequest(
      { privateEndpointName, resourceGroupName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateEndpoints/{privateEndpointName}/privateDnsZoneGroups/{privateDnsZoneGroupName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.privateEndpointName,
    Parameters.privateDnsZoneGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateEndpoints/{privateEndpointName}/privateDnsZoneGroups/{privateDnsZoneGroupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateDnsZoneGroup,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.privateEndpointName,
    Parameters.privateDnsZoneGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateEndpoints/{privateEndpointName}/privateDnsZoneGroups/{privateDnsZoneGroupName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateDnsZoneGroup,
    },
    201: {
      bodyMapper: Mappers.PrivateDnsZoneGroup,
    },
    202: {
      bodyMapper: Mappers.PrivateDnsZoneGroup,
    },
    204: {
      bodyMapper: Mappers.PrivateDnsZoneGroup,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.parameters72,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.privateEndpointName,
    Parameters.privateDnsZoneGroupName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateEndpoints/{privateEndpointName}/privateDnsZoneGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateDnsZoneGroupListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.privateEndpointName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateDnsZoneGroupListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.privateEndpointName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
