// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationContext } from "../../api/appComplianceAutomationContext.js";
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
import {
  ProviderActionsListInUseStorageAccountsOptionalParams,
  ProviderActionsTriggerEvaluationOptionalParams,
  ProviderActionsOnboardOptionalParams,
  ProviderActionsGetOverviewStatusOptionalParams,
  ProviderActionsGetCollectionCountOptionalParams,
  ProviderActionsCheckNameAvailabilityOptionalParams,
} from "../../api/providerActions/options.js";
import {
  listInUseStorageAccounts,
  triggerEvaluation,
  onboard,
  getOverviewStatus,
  getCollectionCount,
  checkNameAvailability,
} from "../../api/providerActions/operations.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a ProviderActions operations. */
export interface ProviderActionsOperations {
  /** List the storage accounts which are in use by related reports */
  listInUseStorageAccounts: (
    body: ListInUseStorageAccountsRequest,
    options?: ProviderActionsListInUseStorageAccountsOptionalParams,
  ) => Promise<ListInUseStorageAccountsResponse>;
  /** Trigger quick evaluation for the given subscriptions. */
  triggerEvaluation: (
    body: TriggerEvaluationRequest,
    options?: ProviderActionsTriggerEvaluationOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Onboard given subscriptions to Microsoft.AppComplianceAutomation provider. */
  onboard: (
    body: OnboardRequest,
    options?: ProviderActionsOnboardOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Get the resource overview status. */
  getOverviewStatus: (
    body: GetOverviewStatusRequest,
    options?: ProviderActionsGetOverviewStatusOptionalParams,
  ) => Promise<GetOverviewStatusResponse>;
  /** Get the count of reports. */
  getCollectionCount: (
    body: GetCollectionCountRequest,
    options?: ProviderActionsGetCollectionCountOptionalParams,
  ) => Promise<GetCollectionCountResponse>;
  /** Check if the given name is available for a report. */
  checkNameAvailability: (
    body: CheckNameAvailabilityRequest,
    options?: ProviderActionsCheckNameAvailabilityOptionalParams,
  ) => Promise<CheckNameAvailabilityResponse>;
}

function _getProviderActions(context: AppComplianceAutomationContext) {
  return {
    listInUseStorageAccounts: (
      body: ListInUseStorageAccountsRequest,
      options?: ProviderActionsListInUseStorageAccountsOptionalParams,
    ) => listInUseStorageAccounts(context, body, options),
    triggerEvaluation: (
      body: TriggerEvaluationRequest,
      options?: ProviderActionsTriggerEvaluationOptionalParams,
    ) => triggerEvaluation(context, body, options),
    onboard: (body: OnboardRequest, options?: ProviderActionsOnboardOptionalParams) =>
      onboard(context, body, options),
    getOverviewStatus: (
      body: GetOverviewStatusRequest,
      options?: ProviderActionsGetOverviewStatusOptionalParams,
    ) => getOverviewStatus(context, body, options),
    getCollectionCount: (
      body: GetCollectionCountRequest,
      options?: ProviderActionsGetCollectionCountOptionalParams,
    ) => getCollectionCount(context, body, options),
    checkNameAvailability: (
      body: CheckNameAvailabilityRequest,
      options?: ProviderActionsCheckNameAvailabilityOptionalParams,
    ) => checkNameAvailability(context, body, options),
  };
}

export function _getProviderActionsOperations(
  context: AppComplianceAutomationContext,
): ProviderActionsOperations {
  return {
    ..._getProviderActions(context),
  };
}
