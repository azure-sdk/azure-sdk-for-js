// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RequestParameters } from "@azure-rest/core-client";
import {
  ReportResource,
  ReportResourcePatch,
  SyncCertRecordRequest,
  CheckNameAvailabilityRequest,
  WebhookResource,
  WebhookResourcePatch,
  SnapshotDownloadRequest,
  ScopingConfigurationResource,
  EvidenceResource,
  EvidenceFileDownloadRequest,
  GetCollectionCountRequest,
  GetOverviewStatusRequest,
  OnboardRequest,
  TriggerEvaluationRequest,
  ListInUseStorageAccountsRequest,
} from "./models.js";

export type ReportGetParameters = RequestParameters;

export interface ReportCreateOrUpdateBodyParam {
  /** Parameters for the create or update operation */
  body: ReportResource;
}

export type ReportCreateOrUpdateParameters = ReportCreateOrUpdateBodyParam &
  RequestParameters;

export interface ReportUpdateBodyParam {
  /** Parameters for the create or update operation */
  body: ReportResourcePatch;
}

export type ReportUpdateParameters = ReportUpdateBodyParam & RequestParameters;
export type ReportDeleteParameters = RequestParameters;

export interface ReportListQueryParamProperties {
  /** Skip over when retrieving results. */
  $skipToken?: string;
  /** Number of elements to return when retrieving results. */
  $top?: number;
  /** OData Select statement. Limits the properties on each entry to just those requested, e.g. ?$select=reportName,id. */
  $select?: string;
  /** The filter to apply on the operation. */
  $filter?: string;
  /** OData order by query option. */
  $orderby?: string;
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
  /** The tenant id of the report creator. */
  reportCreatorTenantId?: string;
}

export interface ReportListQueryParam {
  queryParameters?: ReportListQueryParamProperties;
}

export type ReportListParameters = ReportListQueryParam & RequestParameters;

export interface ReportSyncCertRecordBodyParam {
  /** Parameters for synchronize certification record operation */
  body: SyncCertRecordRequest;
}

export type ReportSyncCertRecordParameters = ReportSyncCertRecordBodyParam &
  RequestParameters;

export interface ReportCheckNameAvailabilityBodyParam {
  /** NameAvailabilityRequest object. */
  body: CheckNameAvailabilityRequest;
}

export type ReportCheckNameAvailabilityParameters =
  ReportCheckNameAvailabilityBodyParam & RequestParameters;
export type ReportFixParameters = RequestParameters;
export type ReportGetScopingQuestionsParameters = RequestParameters;
export type ReportVerifyParameters = RequestParameters;
export type WebhookGetParameters = RequestParameters;

export interface WebhookCreateOrUpdateBodyParam {
  /** Parameters for the create or update operation */
  body: WebhookResource;
}

export type WebhookCreateOrUpdateParameters = WebhookCreateOrUpdateBodyParam &
  RequestParameters;

export interface WebhookUpdateBodyParam {
  /** Parameters for the create or update operation */
  body: WebhookResourcePatch;
}

export type WebhookUpdateParameters = WebhookUpdateBodyParam &
  RequestParameters;
export type WebhookDeleteParameters = RequestParameters;

export interface WebhookListQueryParamProperties {
  /** Skip over when retrieving results. */
  $skipToken?: string;
  /** Number of elements to return when retrieving results. */
  $top?: number;
  /** OData Select statement. Limits the properties on each entry to just those requested, e.g. ?$select=reportName,id. */
  $select?: string;
  /** The filter to apply on the operation. */
  $filter?: string;
  /** OData order by query option. */
  $orderby?: string;
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
  /** The tenant id of the report creator. */
  reportCreatorTenantId?: string;
}

export interface WebhookListQueryParam {
  queryParameters?: WebhookListQueryParamProperties;
}

export type WebhookListParameters = WebhookListQueryParam & RequestParameters;
export type SnapshotGetParameters = RequestParameters;

export interface SnapshotListQueryParamProperties {
  /** Skip over when retrieving results. */
  $skipToken?: string;
  /** Number of elements to return when retrieving results. */
  $top?: number;
  /** OData Select statement. Limits the properties on each entry to just those requested, e.g. ?$select=reportName,id. */
  $select?: string;
  /** The filter to apply on the operation. */
  $filter?: string;
  /** OData order by query option. */
  $orderby?: string;
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
  /** The tenant id of the report creator. */
  reportCreatorTenantId?: string;
}

export interface SnapshotListQueryParam {
  queryParameters?: SnapshotListQueryParamProperties;
}

export type SnapshotListParameters = SnapshotListQueryParam & RequestParameters;

export interface SnapshotDownloadBodyParam {
  /** Parameters for the query operation */
  body: SnapshotDownloadRequest;
}

export type SnapshotDownloadParameters = SnapshotDownloadBodyParam &
  RequestParameters;
export type ScopingConfigurationGetParameters = RequestParameters;

export interface ScopingConfigurationCreateOrUpdateBodyParam {
  /** Parameters for the create or update operation, this is a singleton resource, so please make sure you're using 'default' as the name. */
  body: ScopingConfigurationResource;
}

export type ScopingConfigurationCreateOrUpdateParameters =
  ScopingConfigurationCreateOrUpdateBodyParam & RequestParameters;
export type ScopingConfigurationDeleteParameters = RequestParameters;
export type ScopingConfigurationListParameters = RequestParameters;
export type EvidenceGetParameters = RequestParameters;

export interface EvidenceCreateOrUpdateBodyParam {
  /** Parameters for the create or update operation */
  body: EvidenceResource;
}

export interface EvidenceCreateOrUpdateQueryParamProperties {
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
  /** The tenant id of the report creator. */
  reportCreatorTenantId?: string;
}

export interface EvidenceCreateOrUpdateQueryParam {
  queryParameters?: EvidenceCreateOrUpdateQueryParamProperties;
}

export type EvidenceCreateOrUpdateParameters =
  EvidenceCreateOrUpdateQueryParam &
    EvidenceCreateOrUpdateBodyParam &
    RequestParameters;
export type EvidenceDeleteParameters = RequestParameters;

export interface EvidenceListByReportQueryParamProperties {
  /** Skip over when retrieving results. */
  $skipToken?: string;
  /** Number of elements to return when retrieving results. */
  $top?: number;
  /** OData Select statement. Limits the properties on each entry to just those requested, e.g. ?$select=reportName,id. */
  $select?: string;
  /** The filter to apply on the operation. */
  $filter?: string;
  /** OData order by query option. */
  $orderby?: string;
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
  /** The tenant id of the report creator. */
  reportCreatorTenantId?: string;
}

export interface EvidenceListByReportQueryParam {
  queryParameters?: EvidenceListByReportQueryParamProperties;
}

export type EvidenceListByReportParameters = EvidenceListByReportQueryParam &
  RequestParameters;

export interface EvidenceDownloadBodyParam {
  /** Parameters for the query operation */
  body: EvidenceFileDownloadRequest;
}

export type EvidenceDownloadParameters = EvidenceDownloadBodyParam &
  RequestParameters;
export type OperationsListParameters = RequestParameters;

export interface ProviderActionsCheckNameAvailabilityBodyParam {
  /** The content of the action request */
  body: CheckNameAvailabilityRequest;
}

export type ProviderActionsCheckNameAvailabilityParameters =
  ProviderActionsCheckNameAvailabilityBodyParam & RequestParameters;

export interface ProviderActionsGetCollectionCountBodyParam {
  /** The content of the action request */
  body: GetCollectionCountRequest;
}

export type ProviderActionsGetCollectionCountParameters =
  ProviderActionsGetCollectionCountBodyParam & RequestParameters;

export interface ProviderActionsGetOverviewStatusBodyParam {
  /** The content of the action request */
  body: GetOverviewStatusRequest;
}

export type ProviderActionsGetOverviewStatusParameters =
  ProviderActionsGetOverviewStatusBodyParam & RequestParameters;

export interface ProviderActionsOnboardBodyParam {
  /** The content of the action request */
  body: OnboardRequest;
}

export type ProviderActionsOnboardParameters = ProviderActionsOnboardBodyParam &
  RequestParameters;

export interface ProviderActionsTriggerEvaluationBodyParam {
  /** The content of the action request */
  body: TriggerEvaluationRequest;
}

export type ProviderActionsTriggerEvaluationParameters =
  ProviderActionsTriggerEvaluationBodyParam & RequestParameters;

export interface ProviderActionsListInUseStorageAccountsBodyParam {
  /** The content of the action request */
  body: ListInUseStorageAccountsRequest;
}

export type ProviderActionsListInUseStorageAccountsParameters =
  ProviderActionsListInUseStorageAccountsBodyParam & RequestParameters;
