// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export { createEdge, EdgeContext, EdgeClientOptionalParams } from "./edgeContext.js";
export {
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
} from "./options.js";
export {
  sitesListByResourceGroup,
  sitesDelete,
  sitesUpdate,
  sitesCreateOrUpdate,
  sitesGet,
} from "./sites/index.js";
export {
  sitesBySubscriptionDelete,
  sitesBySubscriptionUpdate,
  sitesBySubscriptionCreateOrUpdate,
  sitesBySubscriptionGet,
  sitesBySubscriptionList,
} from "./sitesBySubscription/index.js";
