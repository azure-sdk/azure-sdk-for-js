// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createHardwareSecurityModules,
  HardwareSecurityModulesContext,
  HardwareSecurityModulesClientOptionalParams,
} from "./api/index.js";
import {
  DedicatedHsmsOperations,
  _getDedicatedHsmsOperations,
} from "./classic/dedicatedHsms/index.js";
import {
  PrivateEndpointConnectionsOperations,
  _getPrivateEndpointConnectionsOperations,
} from "./classic/privateEndpointConnections/index.js";
import {
  CloudHsmClustersOperations,
  _getCloudHsmClustersOperations,
} from "./classic/cloudHsmClusters/index.js";
import { OperationsOperations, _getOperationsOperations } from "./classic/operations/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { HardwareSecurityModulesClientOptionalParams } from "./api/hardwareSecurityModulesContext.js";

export class HardwareSecurityModulesClient {
  private _client: HardwareSecurityModulesContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** The Azure management API provides a RESTful set of web services that interact with Hardware Security Modules. */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: HardwareSecurityModulesClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createHardwareSecurityModules(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.dedicatedHsms = _getDedicatedHsmsOperations(this._client);
    this.privateEndpointConnections = _getPrivateEndpointConnectionsOperations(this._client);
    this.cloudHsmClusters = _getCloudHsmClustersOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for dedicatedHsms */
  public readonly dedicatedHsms: DedicatedHsmsOperations;
  /** The operation groups for privateEndpointConnections */
  public readonly privateEndpointConnections: PrivateEndpointConnectionsOperations;
  /** The operation groups for cloudHsmClusters */
  public readonly cloudHsmClusters: CloudHsmClustersOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
