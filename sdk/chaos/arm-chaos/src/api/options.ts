// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface CapabilitiesGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface CapabilitiesCreateOrUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface CapabilitiesDeleteOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface CapabilitiesListOptionalParams extends OperationOptions {
  /** String that sets the continuation token. */
  continuationToken?: string;
}

/** Optional parameters. */
export interface OperationsListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface TargetsGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface TargetsCreateOrUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface TargetsDeleteOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface TargetsListOptionalParams extends OperationOptions {
  /** String that sets the continuation token. */
  continuationToken?: string;
}

/** Optional parameters. */
export interface CapabilityTypesGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface CapabilityTypesListOptionalParams extends OperationOptions {
  /** String that sets the continuation token. */
  continuationToken?: string;
}

/** Optional parameters. */
export interface ExperimentsGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ExperimentsCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ExperimentsUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ExperimentsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ExperimentsListOptionalParams extends OperationOptions {
  /** Optional value that indicates whether to filter results based on if the Experiment is currently running. If null, then the results will not be filtered. */
  running?: boolean;
  /** String that sets the continuation token. */
  continuationToken?: string;
}

/** Optional parameters. */
export interface ExperimentsListAllOptionalParams extends OperationOptions {
  /** Optional value that indicates whether to filter results based on if the Experiment is currently running. If null, then the results will not be filtered. */
  running?: boolean;
  /** String that sets the continuation token. */
  continuationToken?: string;
}

/** Optional parameters. */
export interface ExperimentsCancelOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ExperimentsStartOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ExperimentExecutionsGetExecutionOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ExperimentExecutionsListAllExecutionsOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ExperimentExecutionsGetExecutionDetailsOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface PrivateAccessesGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface PrivateAccessesCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface PrivateAccessesUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface PrivateAccessesDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface PrivateAccessesListOptionalParams extends OperationOptions {
  /** String that sets the continuation token. */
  continuationToken?: string;
}

/** Optional parameters. */
export interface PrivateAccessesListAllOptionalParams extends OperationOptions {
  /** String that sets the continuation token. */
  continuationToken?: string;
}

/** Optional parameters. */
export interface PrivateAccessesPrivateLinkResourcesOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface PrivateEndpointConnectionsGetAPrivateEndpointConnectionOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface PrivateEndpointConnectionsDeleteAPrivateEndpointConnectionOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface PrivateEndpointConnectionsListPrivateEndpointConnectionsOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface TargetTypesGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface TargetTypesListOptionalParams extends OperationOptions {
  /** String that sets the continuation token. */
  continuationToken?: string;
}

/** Optional parameters. */
export interface OperationStatusesGetOptionalParams extends OperationOptions {}
