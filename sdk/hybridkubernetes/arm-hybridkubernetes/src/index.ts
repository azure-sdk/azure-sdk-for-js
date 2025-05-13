// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { KubernetesClient } from "./kubernetesClient.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
export {
  Operation,
  OperationDisplay,
  KnownOrigin,
  Origin,
  KnownActionType,
  ActionType,
  ErrorResponse,
  ErrorDetail,
  ErrorAdditionalInfo,
  ConnectedCluster,
  ConnectedClusterIdentity,
  ResourceIdentityType,
  KnownConnectedClusterKind,
  ConnectedClusterKind,
  ConnectedClusterProperties,
  KnownProvisioningState,
  ProvisioningState,
  KnownConnectivityStatus,
  ConnectivityStatus,
  KnownPrivateLinkState,
  PrivateLinkState,
  KnownAzureHybridBenefit,
  AzureHybridBenefit,
  AadProfile,
  ArcAgentProfile,
  KnownAutoUpgradeOptions,
  AutoUpgradeOptions,
  SystemComponent,
  AgentError,
  SecurityProfile,
  SecurityProfileWorkloadIdentity,
  OidcIssuerProfile,
  Gateway,
  ArcAgentryConfigurations,
  TrackedResource,
  Resource,
  SystemData,
  KnownCreatedByType,
  CreatedByType,
  ConnectedClusterPatch,
  ConnectedClusterPatchProperties,
  ListClusterUserCredentialProperties,
  KnownAuthenticationMethod,
  AuthenticationMethod,
  CredentialResults,
  HybridConnectionConfig,
  CredentialResult,
  KnownVersions,
} from "./models/index.js";
export { KubernetesClientOptionalParams } from "./api/index.js";
export {
  ConnectedClustersListClusterUserCredentialOptionalParams,
  ConnectedClustersListBySubscriptionOptionalParams,
  ConnectedClustersListByResourceGroupOptionalParams,
  ConnectedClustersDeleteOptionalParams,
  ConnectedClustersUpdateOptionalParams,
  ConnectedClustersCreateOrReplaceOptionalParams,
  ConnectedClustersGetOptionalParams,
} from "./api/connectedClusters/index.js";
export { OperationsListOptionalParams } from "./api/operations/index.js";
export { ConnectedClustersOperations, OperationsOperations } from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
