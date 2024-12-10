// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";
import { ListCredentialsRequest } from "../models/models.js";

/** Optional parameters. */
export interface OperationsListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface EndpointsGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface EndpointsCreateOrUpdateOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface EndpointsUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface EndpointsDeleteOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface EndpointsListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface EndpointsListCredentialsOptionalParams
  extends OperationOptions {
  /** The is how long the endpoint access token is valid (in seconds). */
  expiresin?: number;
  /** Object of type ListCredentialsRequest */
  listCredentialsRequest?: ListCredentialsRequest;
}

/** Optional parameters. */
export interface EndpointsListIngressGatewayCredentialsOptionalParams
  extends OperationOptions {
  /** The is how long the endpoint access token is valid (in seconds). */
  expiresin?: number;
}

/** Optional parameters. */
export interface EndpointsListManagedProxyDetailsOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface ServiceConfigurationsGetOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface ServiceConfigurationsCreateOrupdateOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface ServiceConfigurationsUpdateOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface ServiceConfigurationsDeleteOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface ServiceConfigurationsListByEndpointResourceOptionalParams
  extends OperationOptions {}
