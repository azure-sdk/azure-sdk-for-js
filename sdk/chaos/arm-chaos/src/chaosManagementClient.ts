// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { getCapabilitiesOperations, CapabilitiesOperations } from "./classic/capabilities/index.js";
import { getOperationsOperations, OperationsOperations } from "./classic/operations/index.js";
import { getTargetsOperations, TargetsOperations } from "./classic/targets/index.js";
import {
  getCapabilityTypesOperations,
  CapabilityTypesOperations,
} from "./classic/capabilityTypes/index.js";
import { getExperimentsOperations, ExperimentsOperations } from "./classic/experiments/index.js";
import {
  getExperimentExecutionsOperations,
  ExperimentExecutionsOperations,
} from "./classic/experimentExecutions/index.js";
import {
  getPrivateAccessesOperations,
  PrivateAccessesOperations,
} from "./classic/privateAccesses/index.js";
import {
  getPrivateEndpointConnectionsOperations,
  PrivateEndpointConnectionsOperations,
} from "./classic/privateEndpointConnections/index.js";
import { getTargetTypesOperations, TargetTypesOperations } from "./classic/targetTypes/index.js";
import {
  getOperationStatusesOperations,
  OperationStatusesOperations,
} from "./classic/operationStatuses/index.js";
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
    this._client = createChaosManagement(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.capabilities = getCapabilitiesOperations(this._client, subscriptionId);
    this.operations = getOperationsOperations(this._client);
    this.targets = getTargetsOperations(this._client, subscriptionId);
    this.capabilityTypes = getCapabilityTypesOperations(this._client, subscriptionId);
    this.experiments = getExperimentsOperations(this._client, subscriptionId);
    this.experimentExecutions = getExperimentExecutionsOperations(this._client, subscriptionId);
    this.privateAccesses = getPrivateAccessesOperations(this._client, subscriptionId);
    this.privateEndpointConnections = getPrivateEndpointConnectionsOperations(
      this._client,
      subscriptionId,
    );
    this.targetTypes = getTargetTypesOperations(this._client, subscriptionId);
    this.operationStatuses = getOperationStatusesOperations(this._client, subscriptionId);
  }

  /** The operation groups for Capabilities */
  public readonly capabilities: CapabilitiesOperations;
  /** The operation groups for Operations */
  public readonly operations: OperationsOperations;
  /** The operation groups for Targets */
  public readonly targets: TargetsOperations;
  /** The operation groups for CapabilityTypes */
  public readonly capabilityTypes: CapabilityTypesOperations;
  /** The operation groups for Experiments */
  public readonly experiments: ExperimentsOperations;
  /** The operation groups for ExperimentExecutions */
  public readonly experimentExecutions: ExperimentExecutionsOperations;
  /** The operation groups for PrivateAccesses */
  public readonly privateAccesses: PrivateAccessesOperations;
  /** The operation groups for PrivateEndpointConnections */
  public readonly privateEndpointConnections: PrivateEndpointConnectionsOperations;
  /** The operation groups for TargetTypes */
  public readonly targetTypes: TargetTypesOperations;
  /** The operation groups for OperationStatuses */
  public readonly operationStatuses: OperationStatusesOperations;
}
