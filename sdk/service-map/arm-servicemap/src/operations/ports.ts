/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { Ports } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { ServiceMap } from "../serviceMap.js";
import {
  Process,
  PortsListAcceptingProcessesNextOptionalParams,
  PortsListAcceptingProcessesOptionalParams,
  PortsListAcceptingProcessesResponse,
  Connection,
  PortsListConnectionsNextOptionalParams,
  PortsListConnectionsOptionalParams,
  PortsListConnectionsResponse,
  PortsGetOptionalParams,
  PortsGetResponse,
  PortsGetLivenessOptionalParams,
  PortsGetLivenessResponse,
  PortsListAcceptingProcessesNextResponse,
  PortsListConnectionsNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Ports operations. */
export class PortsImpl implements Ports {
  private readonly client: ServiceMap;

  /**
   * Initialize a new instance of the class Ports class.
   * @param client Reference to the service client
   */
  constructor(client: ServiceMap) {
    this.client = client;
  }

  /**
   * Returns a collection of processes accepting on the specified port
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineName Machine resource name.
   * @param portName Port resource name.
   * @param options The options parameters.
   */
  public listAcceptingProcesses(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    portName: string,
    options?: PortsListAcceptingProcessesOptionalParams
  ): PagedAsyncIterableIterator<Process> {
    const iter = this.listAcceptingProcessesPagingAll(
      resourceGroupName,
      workspaceName,
      machineName,
      portName,
      options
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
        return this.listAcceptingProcessesPagingPage(
          resourceGroupName,
          workspaceName,
          machineName,
          portName,
          options,
          settings
        );
      }
    };
  }

  private async *listAcceptingProcessesPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    portName: string,
    options?: PortsListAcceptingProcessesOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Process[]> {
    let result: PortsListAcceptingProcessesResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listAcceptingProcesses(
        resourceGroupName,
        workspaceName,
        machineName,
        portName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listAcceptingProcessesNext(
        resourceGroupName,
        workspaceName,
        machineName,
        portName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listAcceptingProcessesPagingAll(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    portName: string,
    options?: PortsListAcceptingProcessesOptionalParams
  ): AsyncIterableIterator<Process> {
    for await (const page of this.listAcceptingProcessesPagingPage(
      resourceGroupName,
      workspaceName,
      machineName,
      portName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Returns a collection of connections established via the specified port.
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineName Machine resource name.
   * @param portName Port resource name.
   * @param options The options parameters.
   */
  public listConnections(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    portName: string,
    options?: PortsListConnectionsOptionalParams
  ): PagedAsyncIterableIterator<Connection> {
    const iter = this.listConnectionsPagingAll(
      resourceGroupName,
      workspaceName,
      machineName,
      portName,
      options
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
        return this.listConnectionsPagingPage(
          resourceGroupName,
          workspaceName,
          machineName,
          portName,
          options,
          settings
        );
      }
    };
  }

  private async *listConnectionsPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    portName: string,
    options?: PortsListConnectionsOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Connection[]> {
    let result: PortsListConnectionsResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listConnections(
        resourceGroupName,
        workspaceName,
        machineName,
        portName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listConnectionsNext(
        resourceGroupName,
        workspaceName,
        machineName,
        portName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listConnectionsPagingAll(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    portName: string,
    options?: PortsListConnectionsOptionalParams
  ): AsyncIterableIterator<Connection> {
    for await (const page of this.listConnectionsPagingPage(
      resourceGroupName,
      workspaceName,
      machineName,
      portName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Returns the specified port. The port must be live during the specified time interval. If the port is
   * not live during the interval, status 404 (Not Found) is returned.
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineName Machine resource name.
   * @param portName Port resource name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    portName: string,
    options?: PortsGetOptionalParams
  ): Promise<PortsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, machineName, portName, options },
      getOperationSpec
    );
  }

  /**
   * Obtains the liveness status of the port during the specified time interval.
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineName Machine resource name.
   * @param portName Port resource name.
   * @param options The options parameters.
   */
  getLiveness(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    portName: string,
    options?: PortsGetLivenessOptionalParams
  ): Promise<PortsGetLivenessResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, machineName, portName, options },
      getLivenessOperationSpec
    );
  }

  /**
   * Returns a collection of processes accepting on the specified port
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineName Machine resource name.
   * @param portName Port resource name.
   * @param options The options parameters.
   */
  private _listAcceptingProcesses(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    portName: string,
    options?: PortsListAcceptingProcessesOptionalParams
  ): Promise<PortsListAcceptingProcessesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, machineName, portName, options },
      listAcceptingProcessesOperationSpec
    );
  }

  /**
   * Returns a collection of connections established via the specified port.
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineName Machine resource name.
   * @param portName Port resource name.
   * @param options The options parameters.
   */
  private _listConnections(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    portName: string,
    options?: PortsListConnectionsOptionalParams
  ): Promise<PortsListConnectionsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, machineName, portName, options },
      listConnectionsOperationSpec
    );
  }

  /**
   * ListAcceptingProcessesNext
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineName Machine resource name.
   * @param portName Port resource name.
   * @param nextLink The nextLink from the previous successful call to the ListAcceptingProcesses method.
   * @param options The options parameters.
   */
  private _listAcceptingProcessesNext(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    portName: string,
    nextLink: string,
    options?: PortsListAcceptingProcessesNextOptionalParams
  ): Promise<PortsListAcceptingProcessesNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        machineName,
        portName,
        nextLink,
        options
      },
      listAcceptingProcessesNextOperationSpec
    );
  }

  /**
   * ListConnectionsNext
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineName Machine resource name.
   * @param portName Port resource name.
   * @param nextLink The nextLink from the previous successful call to the ListConnections method.
   * @param options The options parameters.
   */
  private _listConnectionsNext(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    portName: string,
    nextLink: string,
    options?: PortsListConnectionsNextOptionalParams
  ): Promise<PortsListConnectionsNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        machineName,
        portName,
        nextLink,
        options
      },
      listConnectionsNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machines/{machineName}/ports/{portName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Port
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.startTime,
    Parameters.endTime
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.machineName,
    Parameters.portName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getLivenessOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machines/{machineName}/ports/{portName}/liveness",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Liveness
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.startTime,
    Parameters.endTime
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.machineName,
    Parameters.portName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAcceptingProcessesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machines/{machineName}/ports/{portName}/acceptingProcesses",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProcessCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.startTime,
    Parameters.endTime
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.machineName,
    Parameters.portName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listConnectionsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machines/{machineName}/ports/{portName}/connections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConnectionCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.startTime,
    Parameters.endTime
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.machineName,
    Parameters.portName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAcceptingProcessesNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProcessCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.machineName,
    Parameters.nextLink,
    Parameters.portName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listConnectionsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConnectionCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.machineName,
    Parameters.nextLink,
    Parameters.portName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
