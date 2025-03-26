// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { DatabaseFleetManagerClient } from "./databaseFleetManagerClient.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
export {
  FleetTier,
  FleetTierProperties,
  KnownZoneRedundancy,
  ZoneRedundancy,
  KnownAzureProvisioningState,
  AzureProvisioningState,
  ProxyResource,
  Resource,
  SystemData,
  KnownCreatedByType,
  CreatedByType,
  ErrorResponse,
  ErrorDetail,
  ErrorAdditionalInfo,
  FirewallRule,
  FirewallRuleProperties,
  Fleet,
  FleetProperties,
  TrackedResource,
  FleetUpdate,
  Fleetspace,
  FleetspaceProperties,
  MainPrincipal,
  KnownPrincipalType,
  PrincipalType,
  RegisterServerProperties,
  DestinationTierOverride,
  KnownResourceType,
  ResourceType,
  FleetDatabase,
  FleetDatabaseProperties,
  KnownDatabaseCreateMode,
  DatabaseCreateMode,
  Identity,
  KnownIdentityType,
  IdentityType,
  DatabaseIdentity,
  TransparentDataEncryption,
  DatabaseChangeTierProperties,
  DatabaseRenameProperties,
  Operation,
  OperationDisplay,
  KnownOrigin,
  Origin,
  KnownActionType,
  ActionType,
  KnownVersions,
} from "./models/index.js";
export { DatabaseFleetManagerClientOptionalParams } from "./api/index.js";
export {
  FirewallRulesListByFleetspaceOptionalParams,
  FirewallRulesDeleteOptionalParams,
  FirewallRulesCreateOrUpdateOptionalParams,
  FirewallRulesGetOptionalParams,
} from "./api/firewallRules/index.js";
export {
  FleetDatabasesRevertOptionalParams,
  FleetDatabasesRenameOptionalParams,
  FleetDatabasesChangeTierOptionalParams,
  FleetDatabasesListByFleetspaceOptionalParams,
  FleetDatabasesDeleteOptionalParams,
  FleetDatabasesUpdateOptionalParams,
  FleetDatabasesCreateOrUpdateOptionalParams,
  FleetDatabasesGetOptionalParams,
} from "./api/fleetDatabases/index.js";
export {
  FleetsListOptionalParams,
  FleetsListByResourceGroupOptionalParams,
  FleetsDeleteOptionalParams,
  FleetsUpdateOptionalParams,
  FleetsCreateOrUpdateOptionalParams,
  FleetsGetOptionalParams,
} from "./api/fleets/index.js";
export {
  FleetspacesUnregisterOptionalParams,
  FleetspacesRegisterServerOptionalParams,
  FleetspacesListByFleetOptionalParams,
  FleetspacesDeleteOptionalParams,
  FleetspacesUpdateOptionalParams,
  FleetspacesCreateOrUpdateOptionalParams,
  FleetspacesGetOptionalParams,
} from "./api/fleetspaces/index.js";
export {
  FleetTiersDisableOptionalParams,
  FleetTiersListByFleetOptionalParams,
  FleetTiersDeleteOptionalParams,
  FleetTiersUpdateOptionalParams,
  FleetTiersCreateOrUpdateOptionalParams,
  FleetTiersGetOptionalParams,
} from "./api/fleetTiers/index.js";
export { OperationsListOptionalParams } from "./api/operations/index.js";
export {
  FirewallRulesOperations,
  FleetDatabasesOperations,
  FleetsOperations,
  FleetspacesOperations,
  FleetTiersOperations,
  OperationsOperations,
} from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
