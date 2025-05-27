// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createElasticSan,
  ElasticSanContext,
  ElasticSanClientOptionalParams,
} from "./api/index.js";
import {
  SkusOperationGroupOperations,
  _getSkusOperationGroupOperations,
} from "./classic/skusOperationGroup/index.js";
import {
  SnapshotsOperations,
  _getSnapshotsOperations,
} from "./classic/snapshots/index.js";
import {
  VolumesOperations,
  _getVolumesOperations,
} from "./classic/volumes/index.js";
import {
  VolumeGroupsOperations,
  _getVolumeGroupsOperations,
} from "./classic/volumeGroups/index.js";
import {
  PrivateEndpointConnectionsOperations,
  _getPrivateEndpointConnectionsOperations,
} from "./classic/privateEndpointConnections/index.js";
import {
  ElasticSansOperations,
  _getElasticSansOperations,
} from "./classic/elasticSans/index.js";
import {
  OperationsOperations,
  _getOperationsOperations,
} from "./classic/operations/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { ElasticSanClientOptionalParams } from "./api/elasticSanContext.js";

export class ElasticSanClient {
  private _client: ElasticSanContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** (missing-service-description) Add service description */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: ElasticSanClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createElasticSan(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.skusOperationGroup = _getSkusOperationGroupOperations(this._client);
    this.snapshots = _getSnapshotsOperations(this._client);
    this.volumes = _getVolumesOperations(this._client);
    this.volumeGroups = _getVolumeGroupsOperations(this._client);
    this.privateEndpointConnections = _getPrivateEndpointConnectionsOperations(
      this._client,
    );
    this.elasticSans = _getElasticSansOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for skusOperationGroup */
  public readonly skusOperationGroup: SkusOperationGroupOperations;
  /** The operation groups for snapshots */
  public readonly snapshots: SnapshotsOperations;
  /** The operation groups for volumes */
  public readonly volumes: VolumesOperations;
  /** The operation groups for volumeGroups */
  public readonly volumeGroups: VolumeGroupsOperations;
  /** The operation groups for privateEndpointConnections */
  public readonly privateEndpointConnections: PrivateEndpointConnectionsOperations;
  /** The operation groups for elasticSans */
  public readonly elasticSans: ElasticSansOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
