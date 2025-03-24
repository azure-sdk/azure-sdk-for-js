// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { _getFleetTiersOperations, FleetTiersOperations } from "./classic/fleetTiers/index.js";
import {
  _getFirewallRulesOperations,
  FirewallRulesOperations,
} from "./classic/firewallRules/index.js";
import { _getFleetsOperations, FleetsOperations } from "./classic/fleets/index.js";
import { _getFleetspacesOperations, FleetspacesOperations } from "./classic/fleetspaces/index.js";
import {
  _getFleetDatabasesOperations,
  FleetDatabasesOperations,
} from "./classic/fleetDatabases/index.js";
import { _getOperationsOperations, OperationsOperations } from "./classic/operations/index.js";
import {
  createDatabaseFleetManager,
  DatabaseFleetManagerContext,
  DatabaseFleetManagerClientOptionalParams,
} from "./api/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { DatabaseFleetManagerClientOptionalParams } from "./api/databaseFleetManagerContext.js";

export class DatabaseFleetManagerClient {
  private _client: DatabaseFleetManagerContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Database Fleet Client */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: DatabaseFleetManagerClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createDatabaseFleetManager(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.fleetTiers = _getFleetTiersOperations(this._client);
    this.firewallRules = _getFirewallRulesOperations(this._client);
    this.fleets = _getFleetsOperations(this._client);
    this.fleetspaces = _getFleetspacesOperations(this._client);
    this.fleetDatabases = _getFleetDatabasesOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for fleetTiers */
  public readonly fleetTiers: FleetTiersOperations;
  /** The operation groups for firewallRules */
  public readonly firewallRules: FirewallRulesOperations;
  /** The operation groups for fleets */
  public readonly fleets: FleetsOperations;
  /** The operation groups for fleetspaces */
  public readonly fleetspaces: FleetspacesOperations;
  /** The operation groups for fleetDatabases */
  public readonly fleetDatabases: FleetDatabasesOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
