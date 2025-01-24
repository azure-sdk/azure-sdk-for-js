// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  _getOperationStatusesOperations,
  OperationStatusesOperations,
} from "./classic/operationStatuses/index.js";
import {
  _getTargetTypesOperations,
  TargetTypesOperations,
} from "./classic/targetTypes/index.js";
import {
  _getPrivateEndpointConnectionsOperations,
  PrivateEndpointConnectionsOperations,
} from "./classic/privateEndpointConnections/index.js";
import {
  _getPrivateAccessesOperations,
  PrivateAccessesOperations,
} from "./classic/privateAccesses/index.js";
import {
  _getExperimentExecutionsOperations,
  ExperimentExecutionsOperations,
} from "./classic/experimentExecutions/index.js";
import {
  _getExperimentsOperations,
  ExperimentsOperations,
} from "./classic/experiments/index.js";
import {
  _getCapabilityTypesOperations,
  CapabilityTypesOperations,
} from "./classic/capabilityTypes/index.js";
import {
  _getTargetsOperations,
  TargetsOperations,
} from "./classic/targets/index.js";
import {
  _getOperationsOperations,
  OperationsOperations,
} from "./classic/operations/index.js";
import {
  _getCapabilitiesOperations,
  CapabilitiesOperations,
} from "./classic/capabilities/index.js";
import {
  createChaosManagement,
  ChaosManagementContext,
  ChaosManagementClientOptionalParams,
} from "./api/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { ChaosManagementClientOptionalParams } from "./api/chaosManagementContext.js";

export class ChaosManagementClient {
  private _client: ChaosManagementContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Chaos Management Client */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: ChaosManagementClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createChaosManagement(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.operationStatuses = _getOperationStatusesOperations(this._client);
    this.targetTypes = _getTargetTypesOperations(this._client);
    this.privateEndpointConnections = _getPrivateEndpointConnectionsOperations(
      this._client,
    );
    this.privateAccesses = _getPrivateAccessesOperations(this._client);
    this.experimentExecutions = _getExperimentExecutionsOperations(
      this._client,
    );
    this.experiments = _getExperimentsOperations(this._client);
    this.capabilityTypes = _getCapabilityTypesOperations(this._client);
    this.targets = _getTargetsOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
    this.capabilities = _getCapabilitiesOperations(this._client);
  }

  /** The operation groups for operationStatuses */
  public readonly operationStatuses: OperationStatusesOperations;
  /** The operation groups for targetTypes */
  public readonly targetTypes: TargetTypesOperations;
  /** The operation groups for privateEndpointConnections */
  public readonly privateEndpointConnections: PrivateEndpointConnectionsOperations;
  /** The operation groups for privateAccesses */
  public readonly privateAccesses: PrivateAccessesOperations;
  /** The operation groups for experimentExecutions */
  public readonly experimentExecutions: ExperimentExecutionsOperations;
  /** The operation groups for experiments */
  public readonly experiments: ExperimentsOperations;
  /** The operation groups for capabilityTypes */
  public readonly capabilityTypes: CapabilityTypesOperations;
  /** The operation groups for targets */
  public readonly targets: TargetsOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
  /** The operation groups for capabilities */
  public readonly capabilities: CapabilitiesOperations;
}
