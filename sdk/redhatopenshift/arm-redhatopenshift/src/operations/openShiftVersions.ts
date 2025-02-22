/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { OpenShiftVersions } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AzureRedHatOpenShiftClient } from "../azureRedHatOpenShiftClient.js";
import {
  OpenShiftVersion,
  OpenShiftVersionsListNextOptionalParams,
  OpenShiftVersionsListOptionalParams,
  OpenShiftVersionsListResponse,
  OpenShiftVersionsListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing OpenShiftVersions operations. */
export class OpenShiftVersionsImpl implements OpenShiftVersions {
  private readonly client: AzureRedHatOpenShiftClient;

  /**
   * Initialize a new instance of the class OpenShiftVersions class.
   * @param client Reference to the service client
   */
  constructor(client: AzureRedHatOpenShiftClient) {
    this.client = client;
  }

  /**
   * The operation returns the installable OpenShift versions as strings.
   * @param location The name of Azure region.
   * @param options The options parameters.
   */
  public list(
    location: string,
    options?: OpenShiftVersionsListOptionalParams,
  ): PagedAsyncIterableIterator<OpenShiftVersion> {
    const iter = this.listPagingAll(location, options);
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
        return this.listPagingPage(location, options, settings);
      },
    };
  }

  private async *listPagingPage(
    location: string,
    options?: OpenShiftVersionsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<OpenShiftVersion[]> {
    let result: OpenShiftVersionsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(location, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(location, continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    location: string,
    options?: OpenShiftVersionsListOptionalParams,
  ): AsyncIterableIterator<OpenShiftVersion> {
    for await (const page of this.listPagingPage(location, options)) {
      yield* page;
    }
  }

  /**
   * The operation returns the installable OpenShift versions as strings.
   * @param location The name of Azure region.
   * @param options The options parameters.
   */
  private _list(
    location: string,
    options?: OpenShiftVersionsListOptionalParams,
  ): Promise<OpenShiftVersionsListResponse> {
    return this.client.sendOperationRequest(
      { location, options },
      listOperationSpec,
    );
  }

  /**
   * ListNext
   * @param location The name of Azure region.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    location: string,
    nextLink: string,
    options?: OpenShiftVersionsListNextOptionalParams,
  ): Promise<OpenShiftVersionsListNextResponse> {
    return this.client.sendOperationRequest(
      { location, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.RedHatOpenShift/locations/{location}/openshiftversions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OpenShiftVersionList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OpenShiftVersionList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.location,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
