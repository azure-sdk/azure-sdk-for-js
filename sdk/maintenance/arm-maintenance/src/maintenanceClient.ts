// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createMaintenance,
  MaintenanceContext,
  MaintenanceClientOptionalParams,
} from "./api/index.js";
import {
  UpdatesOperationGroupOperations,
  _getUpdatesOperationGroupOperations,
} from "./classic/updatesOperationGroup/index.js";
import {
  ConfigurationAssignmentForResourceGroupOperationGroupOperations,
  _getConfigurationAssignmentForResourceGroupOperationGroupOperations,
} from "./classic/configurationAssignmentForResourceGroupOperationGroup/index.js";
import {
  ApplyUpdateForResourceGroupOperationGroupOperations,
  _getApplyUpdateForResourceGroupOperationGroupOperations,
} from "./classic/applyUpdateForResourceGroupOperationGroup/index.js";
import {
  ApplyUpdatesOperationGroupOperations,
  _getApplyUpdatesOperationGroupOperations,
} from "./classic/applyUpdatesOperationGroup/index.js";
import {
  ScheduledEventOperationGroupOperations,
  _getScheduledEventOperationGroupOperations,
} from "./classic/scheduledEventOperationGroup/index.js";
import {
  ConfigurationAssignmentsForResourceGroupOperations,
  _getConfigurationAssignmentsForResourceGroupOperations,
} from "./classic/configurationAssignmentsForResourceGroup/index.js";
import {
  ConfigurationAssignmentsForSubscriptionsOperations,
  _getConfigurationAssignmentsForSubscriptionsOperations,
} from "./classic/configurationAssignmentsForSubscriptions/index.js";
import {
  ConfigurationAssignmentOperationGroupOperations,
  _getConfigurationAssignmentOperationGroupOperations,
} from "./classic/configurationAssignmentOperationGroup/index.js";
import {
  ConfigurationAssignmentsOperations,
  _getConfigurationAssignmentsOperations,
} from "./classic/configurationAssignments/index.js";
import {
  ApplyUpdateOperationGroupOperations,
  _getApplyUpdateOperationGroupOperations,
} from "./classic/applyUpdateOperationGroup/index.js";
import {
  ApplyUpdatesOperations,
  _getApplyUpdatesOperations,
} from "./classic/applyUpdates/index.js";
import {
  MaintenanceConfigurationOperationGroupOperations,
  _getMaintenanceConfigurationOperationGroupOperations,
} from "./classic/maintenanceConfigurationOperationGroup/index.js";
import {
  MaintenanceConfigurationsOperations,
  _getMaintenanceConfigurationsOperations,
} from "./classic/maintenanceConfigurations/index.js";
import { OperationsOperations, _getOperationsOperations } from "./classic/operations/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { MaintenanceClientOptionalParams } from "./api/maintenanceContext.js";

export class MaintenanceClient {
  private _client: MaintenanceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Azure Maintenance Management Client */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: MaintenanceClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createMaintenance(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.updatesOperationGroup = _getUpdatesOperationGroupOperations(this._client);
    this.configurationAssignmentForResourceGroupOperationGroup =
      _getConfigurationAssignmentForResourceGroupOperationGroupOperations(this._client);
    this.applyUpdateForResourceGroupOperationGroup =
      _getApplyUpdateForResourceGroupOperationGroupOperations(this._client);
    this.applyUpdatesOperationGroup = _getApplyUpdatesOperationGroupOperations(this._client);
    this.scheduledEventOperationGroup = _getScheduledEventOperationGroupOperations(this._client);
    this.configurationAssignmentsForResourceGroup =
      _getConfigurationAssignmentsForResourceGroupOperations(this._client);
    this.configurationAssignmentsForSubscriptions =
      _getConfigurationAssignmentsForSubscriptionsOperations(this._client);
    this.configurationAssignmentOperationGroup =
      _getConfigurationAssignmentOperationGroupOperations(this._client);
    this.configurationAssignments = _getConfigurationAssignmentsOperations(this._client);
    this.applyUpdateOperationGroup = _getApplyUpdateOperationGroupOperations(this._client);
    this.applyUpdates = _getApplyUpdatesOperations(this._client);
    this.maintenanceConfigurationOperationGroup =
      _getMaintenanceConfigurationOperationGroupOperations(this._client);
    this.maintenanceConfigurations = _getMaintenanceConfigurationsOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for updatesOperationGroup */
  public readonly updatesOperationGroup: UpdatesOperationGroupOperations;
  /** The operation groups for configurationAssignmentForResourceGroupOperationGroup */
  public readonly configurationAssignmentForResourceGroupOperationGroup: ConfigurationAssignmentForResourceGroupOperationGroupOperations;
  /** The operation groups for applyUpdateForResourceGroupOperationGroup */
  public readonly applyUpdateForResourceGroupOperationGroup: ApplyUpdateForResourceGroupOperationGroupOperations;
  /** The operation groups for applyUpdatesOperationGroup */
  public readonly applyUpdatesOperationGroup: ApplyUpdatesOperationGroupOperations;
  /** The operation groups for scheduledEventOperationGroup */
  public readonly scheduledEventOperationGroup: ScheduledEventOperationGroupOperations;
  /** The operation groups for configurationAssignmentsForResourceGroup */
  public readonly configurationAssignmentsForResourceGroup: ConfigurationAssignmentsForResourceGroupOperations;
  /** The operation groups for configurationAssignmentsForSubscriptions */
  public readonly configurationAssignmentsForSubscriptions: ConfigurationAssignmentsForSubscriptionsOperations;
  /** The operation groups for configurationAssignmentOperationGroup */
  public readonly configurationAssignmentOperationGroup: ConfigurationAssignmentOperationGroupOperations;
  /** The operation groups for configurationAssignments */
  public readonly configurationAssignments: ConfigurationAssignmentsOperations;
  /** The operation groups for applyUpdateOperationGroup */
  public readonly applyUpdateOperationGroup: ApplyUpdateOperationGroupOperations;
  /** The operation groups for applyUpdates */
  public readonly applyUpdates: ApplyUpdatesOperations;
  /** The operation groups for maintenanceConfigurationOperationGroup */
  public readonly maintenanceConfigurationOperationGroup: MaintenanceConfigurationOperationGroupOperations;
  /** The operation groups for maintenanceConfigurations */
  public readonly maintenanceConfigurations: MaintenanceConfigurationsOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
