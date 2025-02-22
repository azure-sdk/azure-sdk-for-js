/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { DefaultAccounts } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { PurviewManagementClient } from "../purviewManagementClient.js";
import {
  ScopeType,
  DefaultAccountsGetOptionalParams,
  DefaultAccountsGetResponse,
  DefaultAccountPayload,
  DefaultAccountsSetModelOptionalParams,
  DefaultAccountsSetModelResponse,
  DefaultAccountsRemoveOptionalParams
} from "../models/index.js";

/** Class containing DefaultAccounts operations. */
export class DefaultAccountsImpl implements DefaultAccounts {
  private readonly client: PurviewManagementClient;

  /**
   * Initialize a new instance of the class DefaultAccounts class.
   * @param client Reference to the service client
   */
  constructor(client: PurviewManagementClient) {
    this.client = client;
  }

  /**
   * Get the default account for the scope.
   * @param scopeTenantId The tenant ID.
   * @param scopeType The scope for the default account.
   * @param options The options parameters.
   */
  get(
    scopeTenantId: string,
    scopeType: ScopeType,
    options?: DefaultAccountsGetOptionalParams
  ): Promise<DefaultAccountsGetResponse> {
    return this.client.sendOperationRequest(
      { scopeTenantId, scopeType, options },
      getOperationSpec
    );
  }

  /**
   * Sets the default account for the scope.
   * @param defaultAccountPayload The payload containing the default account information and the scope.
   * @param options The options parameters.
   */
  set(
    defaultAccountPayload: DefaultAccountPayload,
    options?: DefaultAccountsSetModelOptionalParams
  ): Promise<DefaultAccountsSetModelResponse> {
    return this.client.sendOperationRequest(
      { defaultAccountPayload, options },
      setOperationSpec
    );
  }

  /**
   * Removes the default account from the scope.
   * @param scopeTenantId The tenant ID.
   * @param scopeType The scope for the default account.
   * @param options The options parameters.
   */
  remove(
    scopeTenantId: string,
    scopeType: ScopeType,
    options?: DefaultAccountsRemoveOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { scopeTenantId, scopeType, options },
      removeOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Purview/getDefaultAccount",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DefaultAccountPayload
    },
    default: {
      bodyMapper: Mappers.ErrorResponseModel
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.scopeTenantId,
    Parameters.scopeType,
    Parameters.scope
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const setOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Purview/setDefaultAccount",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DefaultAccountPayload
    },
    default: {
      bodyMapper: Mappers.ErrorResponseModel
    }
  },
  requestBody: Parameters.defaultAccountPayload,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const removeOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Purview/removeDefaultAccount",
  httpMethod: "POST",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponseModel
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.scopeTenantId,
    Parameters.scopeType,
    Parameters.scope
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
