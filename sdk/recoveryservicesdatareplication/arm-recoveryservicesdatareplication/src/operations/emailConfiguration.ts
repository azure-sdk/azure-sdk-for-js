/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { EmailConfiguration } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AzureSiteRecoveryManagementServiceAPI } from "../azureSiteRecoveryManagementServiceAPI.js";
import {
  EmailConfigurationModel,
  EmailConfigurationListNextOptionalParams,
  EmailConfigurationListOptionalParams,
  EmailConfigurationListResponse,
  EmailConfigurationGetOptionalParams,
  EmailConfigurationGetResponse,
  EmailConfigurationCreateOptionalParams,
  EmailConfigurationCreateResponse,
  EmailConfigurationListNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing EmailConfiguration operations. */
export class EmailConfigurationImpl implements EmailConfiguration {
  private readonly client: AzureSiteRecoveryManagementServiceAPI;

  /**
   * Initialize a new instance of the class EmailConfiguration class.
   * @param client Reference to the service client
   */
  constructor(client: AzureSiteRecoveryManagementServiceAPI) {
    this.client = client;
  }

  /**
   * Gets the list of alert configuration settings for the given vault.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The vault name.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    vaultName: string,
    options?: EmailConfigurationListOptionalParams
  ): PagedAsyncIterableIterator<EmailConfigurationModel> {
    const iter = this.listPagingAll(resourceGroupName, vaultName, options);
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
          vaultName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    vaultName: string,
    options?: EmailConfigurationListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<EmailConfigurationModel[]> {
    let result: EmailConfigurationListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, vaultName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        vaultName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    vaultName: string,
    options?: EmailConfigurationListOptionalParams
  ): AsyncIterableIterator<EmailConfigurationModel> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      vaultName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the details of the alert configuration setting.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The vault name.
   * @param emailConfigurationName The email configuration name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vaultName: string,
    emailConfigurationName: string,
    options?: EmailConfigurationGetOptionalParams
  ): Promise<EmailConfigurationGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, emailConfigurationName, options },
      getOperationSpec
    );
  }

  /**
   * Creates an alert configuration setting for the given vault.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The vault name.
   * @param emailConfigurationName The email configuration name.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    vaultName: string,
    emailConfigurationName: string,
    options?: EmailConfigurationCreateOptionalParams
  ): Promise<EmailConfigurationCreateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, emailConfigurationName, options },
      createOperationSpec
    );
  }

  /**
   * Gets the list of alert configuration settings for the given vault.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The vault name.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    vaultName: string,
    options?: EmailConfigurationListOptionalParams
  ): Promise<EmailConfigurationListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The vault name.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    vaultName: string,
    nextLink: string,
    options?: EmailConfigurationListNextOptionalParams
  ): Promise<EmailConfigurationListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/alertSettings/{emailConfigurationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EmailConfigurationModel
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.emailConfigurationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/alertSettings/{emailConfigurationName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.EmailConfigurationModel
    },
    201: {
      bodyMapper: Mappers.EmailConfigurationModel
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.emailConfigurationName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/alertSettings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EmailConfigurationModelCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EmailConfigurationModelCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.vaultName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
