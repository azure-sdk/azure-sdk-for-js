// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface ProviderActionsListInUseStorageAccountsOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ProviderActionsTriggerEvaluationOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ProviderActionsOnboardOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ProviderActionsGetOverviewStatusOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ProviderActionsGetCollectionCountOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ProviderActionsCheckNameAvailabilityOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface OperationsListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface EvidenceDownloadOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface EvidenceListByReportOptionalParams extends OperationOptions {
  /** Skip over when retrieving results. */
  skipToken?: string;
  /** Number of elements to return when retrieving results. */
  top?: number;
  /** OData Select statement. Limits the properties on each entry to just those requested, e.g. ?$select=reportName,id. */
  select?: string;
  /** The filter to apply on the operation. */
  filter?: string;
  /** OData order by query option. */
  orderby?: string;
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
  /** The tenant id of the report creator. */
  reportCreatorTenantId?: string;
}

/** Optional parameters. */
export interface EvidenceDeleteOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface EvidenceCreateOrUpdateOptionalParams extends OperationOptions {
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
  /** The tenant id of the report creator. */
  reportCreatorTenantId?: string;
}

/** Optional parameters. */
export interface EvidenceGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ScopingConfigurationListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ScopingConfigurationDeleteOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ScopingConfigurationCreateOrUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ScopingConfigurationGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface SnapshotDownloadOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface SnapshotListOptionalParams extends OperationOptions {
  /** Skip over when retrieving results. */
  skipToken?: string;
  /** Number of elements to return when retrieving results. */
  top?: number;
  /** OData Select statement. Limits the properties on each entry to just those requested, e.g. ?$select=reportName,id. */
  select?: string;
  /** The filter to apply on the operation. */
  filter?: string;
  /** OData order by query option. */
  orderby?: string;
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
  /** The tenant id of the report creator. */
  reportCreatorTenantId?: string;
}

/** Optional parameters. */
export interface SnapshotGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface WebhookListOptionalParams extends OperationOptions {
  /** Skip over when retrieving results. */
  skipToken?: string;
  /** Number of elements to return when retrieving results. */
  top?: number;
  /** OData Select statement. Limits the properties on each entry to just those requested, e.g. ?$select=reportName,id. */
  select?: string;
  /** The filter to apply on the operation. */
  filter?: string;
  /** OData order by query option. */
  orderby?: string;
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
  /** The tenant id of the report creator. */
  reportCreatorTenantId?: string;
}

/** Optional parameters. */
export interface WebhookDeleteOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface WebhookUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface WebhookCreateOrUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface WebhookGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ReportVerifyOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ReportGetScopingQuestionsOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ReportFixOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ReportCheckNameAvailabilityOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ReportSyncCertRecordOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ReportListOptionalParams extends OperationOptions {
  /** Skip over when retrieving results. */
  skipToken?: string;
  /** Number of elements to return when retrieving results. */
  top?: number;
  /** OData Select statement. Limits the properties on each entry to just those requested, e.g. ?$select=reportName,id. */
  select?: string;
  /** The filter to apply on the operation. */
  filter?: string;
  /** OData order by query option. */
  orderby?: string;
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
  /** The tenant id of the report creator. */
  reportCreatorTenantId?: string;
}

/** Optional parameters. */
export interface ReportDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ReportUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ReportCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ReportGetOptionalParams extends OperationOptions {}
