// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationContext } from "../../api/appComplianceAutomationContext.js";
import {
  ProviderActionsCheckNameAvailabilityOptionalParams,
  ProviderActionsGetCollectionCountOptionalParams,
  ProviderActionsGetOverviewStatusOptionalParams,
  ProviderActionsOnboardOptionalParams,
  ProviderActionsTriggerEvaluationOptionalParams,
  ProviderActionsListInUseStorageAccountsOptionalParams,
} from "../../api/options.js";
import {
  providerActionsCheckNameAvailability,
  providerActionsGetCollectionCount,
  providerActionsGetOverviewStatus,
  providerActionsOnboard,
  providerActionsTriggerEvaluation,
  providerActionsListInUseStorageAccounts,
} from "../../api/providerActions/index.js";
import {
  CheckNameAvailabilityRequest,
  CheckNameAvailabilityResponse,
  GetCollectionCountRequest,
  GetCollectionCountResponse,
  GetOverviewStatusRequest,
  GetOverviewStatusResponse,
  OnboardRequest,
  TriggerEvaluationRequest,
  ListInUseStorageAccountsRequest,
  ListInUseStorageAccountsResponse,
} from "../../models/models.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a ProviderActions operations. */
export interface ProviderActionsOperations {
  /** Check if the given name is available for a report. */
  checkNameAvailability: (
    body: CheckNameAvailabilityRequest,
    options?: ProviderActionsCheckNameAvailabilityOptionalParams,
  ) => Promise<CheckNameAvailabilityResponse>;
  /** Get the count of reports. */
  getCollectionCount: (
    body: GetCollectionCountRequest,
    options?: ProviderActionsGetCollectionCountOptionalParams,
  ) => Promise<GetCollectionCountResponse>;
  /** Get the resource overview status. */
  getOverviewStatus: (
    body: GetOverviewStatusRequest,
    options?: ProviderActionsGetOverviewStatusOptionalParams,
  ) => Promise<GetOverviewStatusResponse>;
  /** Onboard given subscriptions to Microsoft.AppComplianceAutomation provider. */
  onboard: (
    body: OnboardRequest,
    options?: ProviderActionsOnboardOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Trigger quick evaluation for the given subscriptions. */
  triggerEvaluation: (
    body: TriggerEvaluationRequest,
    options?: ProviderActionsTriggerEvaluationOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List the storage accounts which are in use by related reports */
  listInUseStorageAccounts: (
    body: ListInUseStorageAccountsRequest,
    options?: ProviderActionsListInUseStorageAccountsOptionalParams,
  ) => Promise<ListInUseStorageAccountsResponse>;
}

export function getProviderActions(context: AppComplianceAutomationContext) {
  return {
    checkNameAvailability: (
      body: CheckNameAvailabilityRequest,
      options?: ProviderActionsCheckNameAvailabilityOptionalParams,
    ) => providerActionsCheckNameAvailability(context, body, options),
    getCollectionCount: (
      body: GetCollectionCountRequest,
      options?: ProviderActionsGetCollectionCountOptionalParams,
    ) => providerActionsGetCollectionCount(context, body, options),
    getOverviewStatus: (
      body: GetOverviewStatusRequest,
      options?: ProviderActionsGetOverviewStatusOptionalParams,
    ) => providerActionsGetOverviewStatus(context, body, options),
    onboard: (
      body: OnboardRequest,
      options?: ProviderActionsOnboardOptionalParams,
    ) => providerActionsOnboard(context, body, options),
    triggerEvaluation: (
      body: TriggerEvaluationRequest,
      options?: ProviderActionsTriggerEvaluationOptionalParams,
    ) => providerActionsTriggerEvaluation(context, body, options),
    listInUseStorageAccounts: (
      body: ListInUseStorageAccountsRequest,
      options?: ProviderActionsListInUseStorageAccountsOptionalParams,
    ) => providerActionsListInUseStorageAccounts(context, body, options),
  };
}

export function getProviderActionsOperations(
  context: AppComplianceAutomationContext,
): ProviderActionsOperations {
  return {
    ...getProviderActions(context),
  };
}
