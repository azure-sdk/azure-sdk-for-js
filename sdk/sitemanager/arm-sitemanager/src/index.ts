// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { EdgeClient, EdgeClientOptionalParams } from "./edgeClient.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
export {
  Resource,
  SystemData,
  KnownCreatedByType,
  CreatedByType,
  ProxyResource,
  Site,
  SiteProperties,
  KnownResourceProvisioningState,
  ResourceProvisioningState,
  ErrorResponse,
  ErrorDetail,
  ErrorAdditionalInfo,
  SiteUpdate,
  SiteUpdateProperties,
  Versions,
  SitesGetOptionalParams,
  SitesCreateOrUpdateOptionalParams,
  SitesUpdateOptionalParams,
  SitesDeleteOptionalParams,
  SitesListByResourceGroupOptionalParams,
  SitesBySubscriptionListOptionalParams,
  SitesBySubscriptionGetOptionalParams,
  SitesBySubscriptionCreateOrUpdateOptionalParams,
  SitesBySubscriptionUpdateOptionalParams,
  SitesBySubscriptionDeleteOptionalParams,
} from "./models/index.js";
export {
  SitesOperations,
  SitesBySubscriptionOperations,
} from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
