// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export {
  createEdge,
  EdgeContext,
  EdgeClientOptionalParams,
} from "./edgeContext.js";
export {
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
} from "./options.js";
export {
  sitesGet,
  sitesCreateOrUpdate,
  sitesUpdate,
  sitesDelete,
  sitesListByResourceGroup,
} from "./sites/index.js";
export {
  sitesBySubscriptionList,
  sitesBySubscriptionGet,
  sitesBySubscriptionCreateOrUpdate,
  sitesBySubscriptionUpdate,
  sitesBySubscriptionDelete,
} from "./sitesBySubscription/index.js";
