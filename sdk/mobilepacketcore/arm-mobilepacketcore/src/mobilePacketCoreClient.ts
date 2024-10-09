// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getOperationsOperations,
  OperationsOperations,
} from "./classic/operations/index.js";
import {
  getAmfDeploymentsOperations,
  AmfDeploymentsOperations,
} from "./classic/amfDeployments/index.js";
import {
  getSmfDeploymentsOperations,
  SmfDeploymentsOperations,
} from "./classic/smfDeployments/index.js";
import {
  getUpfDeploymentsOperations,
  UpfDeploymentsOperations,
} from "./classic/upfDeployments/index.js";
import {
  getNrfDeploymentsOperations,
  NrfDeploymentsOperations,
} from "./classic/nrfDeployments/index.js";
import {
  getNssfDeploymentsOperations,
  NssfDeploymentsOperations,
} from "./classic/nssfDeployments/index.js";
import {
  getClusterServicesOperations,
  ClusterServicesOperations,
} from "./classic/clusterServices/index.js";
import {
  getObservabilityServicesOperations,
  ObservabilityServicesOperations,
} from "./classic/observabilityServices/index.js";
import {
  createMobilePacketCore,
  MobilePacketCoreContext,
  MobilePacketCoreClientOptionalParams,
} from "./api/index.js";

export { MobilePacketCoreClientOptionalParams } from "./api/mobilePacketCoreContext.js";

export class MobilePacketCoreClient {
  private _client: MobilePacketCoreContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Mobile Packet Core Management API */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: MobilePacketCoreClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createMobilePacketCore(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.operations = getOperationsOperations(this._client);
    this.amfDeployments = getAmfDeploymentsOperations(
      this._client,
      subscriptionId,
    );
    this.smfDeployments = getSmfDeploymentsOperations(
      this._client,
      subscriptionId,
    );
    this.upfDeployments = getUpfDeploymentsOperations(
      this._client,
      subscriptionId,
    );
    this.nrfDeployments = getNrfDeploymentsOperations(
      this._client,
      subscriptionId,
    );
    this.nssfDeployments = getNssfDeploymentsOperations(
      this._client,
      subscriptionId,
    );
    this.clusterServices = getClusterServicesOperations(
      this._client,
      subscriptionId,
    );
    this.observabilityServices = getObservabilityServicesOperations(
      this._client,
      subscriptionId,
    );
  }

  /** The operation groups for Operations */
  public readonly operations: OperationsOperations;
  /** The operation groups for AmfDeployments */
  public readonly amfDeployments: AmfDeploymentsOperations;
  /** The operation groups for SmfDeployments */
  public readonly smfDeployments: SmfDeploymentsOperations;
  /** The operation groups for UpfDeployments */
  public readonly upfDeployments: UpfDeploymentsOperations;
  /** The operation groups for NrfDeployments */
  public readonly nrfDeployments: NrfDeploymentsOperations;
  /** The operation groups for NssfDeployments */
  public readonly nssfDeployments: NssfDeploymentsOperations;
  /** The operation groups for ClusterServices */
  public readonly clusterServices: ClusterServicesOperations;
  /** The operation groups for ObservabilityServices */
  public readonly observabilityServices: ObservabilityServicesOperations;
}
