/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import type { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import type { MaintenanceConfigurations } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import type { ContainerServiceClient } from "../containerServiceClient.js";
import type {
  MaintenanceConfiguration,
  MaintenanceConfigurationsListByManagedClusterNextOptionalParams,
  MaintenanceConfigurationsListByManagedClusterOptionalParams,
  MaintenanceConfigurationsListByManagedClusterResponse,
  MaintenanceConfigurationsGetOptionalParams,
  MaintenanceConfigurationsGetResponse,
  MaintenanceConfigurationsCreateOrUpdateOptionalParams,
  MaintenanceConfigurationsCreateOrUpdateResponse,
  MaintenanceConfigurationsDeleteOptionalParams,
  MaintenanceConfigurationsListByManagedClusterNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing MaintenanceConfigurations operations. */
export class MaintenanceConfigurationsImpl implements MaintenanceConfigurations {
  private readonly client: ContainerServiceClient;

  /**
   * Initialize a new instance of the class MaintenanceConfigurations class.
   * @param client Reference to the service client
   */
  constructor(client: ContainerServiceClient) {
    this.client = client;
  }

  /**
   * Gets a list of maintenance configurations in the specified managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param options The options parameters.
   */
  public listByManagedCluster(
    resourceGroupName: string,
    resourceName: string,
    options?: MaintenanceConfigurationsListByManagedClusterOptionalParams,
  ): PagedAsyncIterableIterator<MaintenanceConfiguration> {
    const iter = this.listByManagedClusterPagingAll(resourceGroupName, resourceName, options);
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
        return this.listByManagedClusterPagingPage(
          resourceGroupName,
          resourceName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByManagedClusterPagingPage(
    resourceGroupName: string,
    resourceName: string,
    options?: MaintenanceConfigurationsListByManagedClusterOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<MaintenanceConfiguration[]> {
    let result: MaintenanceConfigurationsListByManagedClusterResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByManagedCluster(resourceGroupName, resourceName, options);
      const page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByManagedClusterNext(
        resourceGroupName,
        resourceName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      const page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByManagedClusterPagingAll(
    resourceGroupName: string,
    resourceName: string,
    options?: MaintenanceConfigurationsListByManagedClusterOptionalParams,
  ): AsyncIterableIterator<MaintenanceConfiguration> {
    for await (const page of this.listByManagedClusterPagingPage(
      resourceGroupName,
      resourceName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of maintenance configurations in the specified managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param options The options parameters.
   */
  private _listByManagedCluster(
    resourceGroupName: string,
    resourceName: string,
    options?: MaintenanceConfigurationsListByManagedClusterOptionalParams,
  ): Promise<MaintenanceConfigurationsListByManagedClusterResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      listByManagedClusterOperationSpec,
    );
  }

  /**
   * Gets the specified maintenance configuration of a managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param configName The name of the maintenance configuration.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    configName: string,
    options?: MaintenanceConfigurationsGetOptionalParams,
  ): Promise<MaintenanceConfigurationsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, configName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates a maintenance configuration in the specified managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param configName The name of the maintenance configuration.
   * @param parameters The maintenance configuration to create or update.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    configName: string,
    parameters: MaintenanceConfiguration,
    options?: MaintenanceConfigurationsCreateOrUpdateOptionalParams,
  ): Promise<MaintenanceConfigurationsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, configName, parameters, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Deletes a maintenance configuration.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param configName The name of the maintenance configuration.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    resourceName: string,
    configName: string,
    options?: MaintenanceConfigurationsDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, configName, options },
      deleteOperationSpec,
    );
  }

  /**
   * ListByManagedClusterNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param nextLink The nextLink from the previous successful call to the ListByManagedCluster method.
   * @param options The options parameters.
   */
  private _listByManagedClusterNext(
    resourceGroupName: string,
    resourceName: string,
    nextLink: string,
    options?: MaintenanceConfigurationsListByManagedClusterNextOptionalParams,
  ): Promise<MaintenanceConfigurationsListByManagedClusterNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, nextLink, options },
      listByManagedClusterNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByManagedClusterOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/maintenanceConfigurations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MaintenanceConfigurationListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/maintenanceConfigurations/{configName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MaintenanceConfiguration,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.configName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/maintenanceConfigurations/{configName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.MaintenanceConfiguration,
    },
    201: {
      bodyMapper: Mappers.MaintenanceConfiguration,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.parameters5,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.configName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/maintenanceConfigurations/{configName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.configName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByManagedClusterNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MaintenanceConfigurationListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
