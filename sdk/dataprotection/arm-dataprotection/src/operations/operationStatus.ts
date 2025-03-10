/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { OperationStatus } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { DataProtectionClient } from "../dataProtectionClient.js";
import {
  OperationStatusGetOptionalParams,
  OperationStatusGetResponse,
} from "../models/index.js";

/** Class containing OperationStatus operations. */
export class OperationStatusImpl implements OperationStatus {
  private readonly client: DataProtectionClient;

  /**
   * Initialize a new instance of the class OperationStatus class.
   * @param client Reference to the service client
   */
  constructor(client: DataProtectionClient) {
    this.client = client;
  }

  /**
   * Gets the operation status for a resource.
   * @param location
   * @param operationId
   * @param options The options parameters.
   */
  get(
    location: string,
    operationId: string,
    options?: OperationStatusGetOptionalParams,
  ): Promise<OperationStatusGetResponse> {
    return this.client.sendOperationRequest(
      { location, operationId, options },
      getOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataProtection/locations/{location}/operationStatus/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationResource,
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
    Parameters.operationId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
