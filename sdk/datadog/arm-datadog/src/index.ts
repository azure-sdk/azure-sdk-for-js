// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { DatadogClient } from "./datadogClient.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
export {
  OperationResult,
  OperationDisplay,
  ErrorResponse,
  ErrorDetail,
  ErrorAdditionalInfo,
  DatadogMonitorResource,
  ResourceSku,
  MonitorProperties,
  KnownProvisioningState,
  ProvisioningState,
  KnownMonitoringStatus,
  MonitoringStatus,
  KnownMarketplaceSubscriptionStatus,
  MarketplaceSubscriptionStatus,
  DatadogOrganizationProperties,
  UserInfo,
  KnownLiftrResourceCategories,
  LiftrResourceCategories,
  IdentityProperties,
  KnownManagedIdentityTypes,
  ManagedIdentityTypes,
  TrackedResource,
  Resource,
  SystemData,
  KnownCreatedByType,
  CreatedByType,
  DatadogMonitorResourceUpdateParameters,
  MonitorUpdateProperties,
  DatadogApiKey,
  DatadogHost,
  DatadogHostMetadata,
  DatadogInstallMethod,
  DatadogLogsAgent,
  LinkedResource,
  MonitoredResource,
  DatadogSetPasswordLink,
  BillingInfoResponse,
  MarketplaceSaaSInfo,
  PartnerBillingEntity,
  MonitoringTagRules,
  MonitoringTagRulesProperties,
  LogRules,
  FilteringTag,
  KnownTagAction,
  TagAction,
  MetricRules,
  ProxyResource,
  DatadogSingleSignOnResource,
  DatadogSingleSignOnProperties,
  KnownSingleSignOnStates,
  SingleSignOnStates,
  MonitoredSubscriptionProperties,
  SubscriptionList,
  KnownOperation,
  Operation,
  MonitoredSubscription,
  KnownStatus,
  Status,
  DatadogAgreementResource,
  DatadogAgreementProperties,
  CreateResourceSupportedResponse,
  CreateResourceSupportedProperties,
  KnownVersions,
} from "./models/index.js";
export { DatadogClientOptionalParams } from "./api/index.js";
export {
  CreationSupportedOperationGroupGetOptionalParams,
  CreationSupportedOperationGroupListOptionalParams,
} from "./api/creationSupportedOperationGroup/index.js";
export {
  DatadogMonitorResourcesBillingInfoGetOptionalParams,
  DatadogMonitorResourcesRefreshSetPasswordLinkOptionalParams,
  DatadogMonitorResourcesListMonitoredResourcesOptionalParams,
  DatadogMonitorResourcesListLinkedResourcesOptionalParams,
  DatadogMonitorResourcesListHostsOptionalParams,
  DatadogMonitorResourcesSetDefaultKeyOptionalParams,
  DatadogMonitorResourcesGetDefaultKeyOptionalParams,
  DatadogMonitorResourcesListApiKeysOptionalParams,
  DatadogMonitorResourcesListOptionalParams,
  DatadogMonitorResourcesListByResourceGroupOptionalParams,
  DatadogMonitorResourcesDeleteOptionalParams,
  DatadogMonitorResourcesUpdateOptionalParams,
  DatadogMonitorResourcesCreateOptionalParams,
  DatadogMonitorResourcesGetOptionalParams,
} from "./api/datadogMonitorResources/index.js";
export {
  DatadogSingleSignOnResourcesListOptionalParams,
  DatadogSingleSignOnResourcesCreateOrUpdateOptionalParams,
  DatadogSingleSignOnResourcesGetOptionalParams,
} from "./api/datadogSingleSignOnResources/index.js";
export {
  MarketplaceAgreementsOperationGroupCreateOrUpdateOptionalParams,
  MarketplaceAgreementsOperationGroupListOptionalParams,
} from "./api/marketplaceAgreementsOperationGroup/index.js";
export {
  MonitoredSubscriptionsListOptionalParams,
  MonitoredSubscriptionsDeleteOptionalParams,
  MonitoredSubscriptionsUpdateOptionalParams,
  MonitoredSubscriptionsCreateorUpdateOptionalParams,
  MonitoredSubscriptionsGetOptionalParams,
} from "./api/monitoredSubscriptions/index.js";
export { OperationsListOptionalParams } from "./api/operations/index.js";
export {
  TagRulesListOptionalParams,
  TagRulesCreateOrUpdateOptionalParams,
  TagRulesGetOptionalParams,
} from "./api/tagRules/index.js";
export {
  CreationSupportedOperationGroupOperations,
  DatadogMonitorResourcesOperations,
  DatadogSingleSignOnResourcesOperations,
  MarketplaceAgreementsOperationGroupOperations,
  MonitoredSubscriptionsOperations,
  OperationsOperations,
  TagRulesOperations,
} from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
