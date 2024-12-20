// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  getAssociationsInterfaceOperations,
  AssociationsInterfaceOperations,
} from "./classic/associationsInterface/index.js";
import {
  getFrontendsInterfaceOperations,
  FrontendsInterfaceOperations,
} from "./classic/frontendsInterface/index.js";
import {
  getSecurityPoliciesInterfaceOperations,
  SecurityPoliciesInterfaceOperations,
} from "./classic/securityPoliciesInterface/index.js";
import {
  getTrafficControllerInterfaceOperations,
  TrafficControllerInterfaceOperations,
} from "./classic/trafficControllerInterface/index.js";
import {
  getOperationsOperations,
  OperationsOperations,
} from "./classic/operations/index.js";
import {
  createServiceNetworkingManagement,
  ServiceNetworkingManagementContext,
  ServiceNetworkingManagementClientOptionalParams,
} from "./api/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { ServiceNetworkingManagementClientOptionalParams } from "./api/serviceNetworkingManagementContext.js";

export class ServiceNetworkingManagementClient {
  private _client: ServiceNetworkingManagementContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Traffic Controller Provider management API. */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: ServiceNetworkingManagementClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createServiceNetworkingManagement(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.associationsInterface = getAssociationsInterfaceOperations(
      this._client,
      subscriptionId,
    );
    this.frontendsInterface = getFrontendsInterfaceOperations(
      this._client,
      subscriptionId,
    );
    this.securityPoliciesInterface = getSecurityPoliciesInterfaceOperations(
      this._client,
      subscriptionId,
    );
    this.trafficControllerInterface = getTrafficControllerInterfaceOperations(
      this._client,
      subscriptionId,
    );
    this.operations = getOperationsOperations(this._client);
  }

  /** The operation groups for AssociationsInterface */
  public readonly associationsInterface: AssociationsInterfaceOperations;
  /** The operation groups for FrontendsInterface */
  public readonly frontendsInterface: FrontendsInterfaceOperations;
  /** The operation groups for SecurityPoliciesInterface */
  public readonly securityPoliciesInterface: SecurityPoliciesInterfaceOperations;
  /** The operation groups for TrafficControllerInterface */
  public readonly trafficControllerInterface: TrafficControllerInterfaceOperations;
  /** The operation groups for Operations */
  public readonly operations: OperationsOperations;
}
