// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { EdgeClient } from "./edgeClient.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
export {
  Site,
  SiteProperties,
  KnownResourceProvisioningState,
  ResourceProvisioningState,
  ProxyResource,
  Resource,
  SystemData,
  KnownCreatedByType,
  CreatedByType,
  ErrorResponse,
  ErrorDetail,
  ErrorAdditionalInfo,
  SiteUpdate,
  SiteUpdateProperties,
  KnownVersions,
} from "./models/index.js";
export {
  EdgeClientOptionalParams,
  SitesBySubscriptionDeleteOptionalParams,
  SitesBySubscriptionUpdateOptionalParams,
  SitesBySubscriptionCreateOrUpdateOptionalParams,
  SitesBySubscriptionGetOptionalParams,
  SitesBySubscriptionListOptionalParams,
  SitesListByResourceGroupOptionalParams,
  SitesDeleteOptionalParams,
  SitesUpdateOptionalParams,
  SitesCreateOrUpdateOptionalParams,
  SitesGetOptionalParams,
} from "./api/index.js";
export { SitesOperations, SitesBySubscriptionOperations } from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
