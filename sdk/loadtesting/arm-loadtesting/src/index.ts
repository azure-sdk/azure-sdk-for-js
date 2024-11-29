// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { LoadTestMgmtClient } from "./loadTestMgmtClient.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
export {
  LoadTestResource,
  LoadTestProperties,
  KnownResourceState,
  ResourceState,
  EncryptionProperties,
  EncryptionPropertiesIdentity,
  KnownType,
  Type,
  ManagedServiceIdentity,
  KnownManagedServiceIdentityType,
  ManagedServiceIdentityType,
  UserAssignedIdentity,
  TrackedResource,
  Resource,
  SystemData,
  KnownCreatedByType,
  CreatedByType,
  ErrorResponse,
  ErrorDetail,
  ErrorAdditionalInfo,
  LoadTestResourceUpdate,
  LoadTestResourceUpdateProperties,
  OutboundEnvironmentEndpoint,
  EndpointDependency,
  EndpointDetail,
  QuotaResource,
  QuotaResourceProperties,
  ProxyResource,
  QuotaBucketRequest,
  QuotaBucketRequestProperties,
  QuotaBucketRequestPropertiesDimensions,
  CheckQuotaAvailabilityResponse,
  CheckQuotaAvailabilityResponseProperties,
  KnownAPIVersions,
} from "./models/index.js";
export {
  LoadTestMgmtClientOptionalParams,
  ListBySubscriptionOptionalParams,
  ListByResourceGroupOptionalParams,
  GetLoadtestOptionalParams,
  CreateOrUpdateLoadtestOptionalParams,
  UpdateLoadtestOptionalParams,
  DeleteLoadtestOptionalParams,
  OutboundNetworkDependenciesEndpointsOptionalParams,
  GetQuotaOptionalParams,
  ListQuotaOptionalParams,
  CheckAvailabilityQuotaOptionalParams,
} from "./api/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
