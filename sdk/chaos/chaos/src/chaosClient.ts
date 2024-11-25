// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  getOperationsOperations,
  OperationsOperations,
} from "./classic/operations/index.js";
import {
  getCapabilitiesOperations,
  CapabilitiesOperations,
} from "./classic/capabilities/index.js";
import {
  getTargetsOperations,
  TargetsOperations,
} from "./classic/targets/index.js";
import {
  getCapabilityTypesOperations,
  CapabilityTypesOperations,
} from "./classic/capabilityTypes/index.js";
import {
  getTargetTypesOperations,
  TargetTypesOperations,
} from "./classic/targetTypes/index.js";
import {
  getExperimentsOperations,
  ExperimentsOperations,
} from "./classic/experiments/index.js";
import {
  getExperimentExecutionsOperations,
  ExperimentExecutionsOperations,
} from "./classic/experimentExecutions/index.js";
import {
  getOperationStatusesOperations,
  OperationStatusesOperations,
} from "./classic/operationStatuses/index.js";
import {
  createChaos,
  ChaosContext,
  ChaosClientOptionalParams,
} from "./api/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { ChaosClientOptionalParams } from "./api/chaosContext.js";

export class ChaosClient {
  private _client: ChaosContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Chaos Management Client */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: ChaosClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createChaos(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.operations = getOperationsOperations(this._client);
    this.capabilities = getCapabilitiesOperations(this._client, subscriptionId);
    this.targets = getTargetsOperations(this._client, subscriptionId);
    this.capabilityTypes = getCapabilityTypesOperations(
      this._client,
      subscriptionId,
    );
    this.targetTypes = getTargetTypesOperations(this._client, subscriptionId);
    this.experiments = getExperimentsOperations(this._client, subscriptionId);
    this.experimentExecutions = getExperimentExecutionsOperations(
      this._client,
      subscriptionId,
    );
    this.operationStatuses = getOperationStatusesOperations(
      this._client,
      subscriptionId,
    );
  }

  /** The operation groups for Operations */
  public readonly operations: OperationsOperations;
  /** The operation groups for Capabilities */
  public readonly capabilities: CapabilitiesOperations;
  /** The operation groups for Targets */
  public readonly targets: TargetsOperations;
  /** The operation groups for CapabilityTypes */
  public readonly capabilityTypes: CapabilityTypesOperations;
  /** The operation groups for TargetTypes */
  public readonly targetTypes: TargetTypesOperations;
  /** The operation groups for Experiments */
  public readonly experiments: ExperimentsOperations;
  /** The operation groups for ExperimentExecutions */
  public readonly experimentExecutions: ExperimentExecutionsOperations;
  /** The operation groups for OperationStatuses */
  public readonly operationStatuses: OperationStatusesOperations;
}
