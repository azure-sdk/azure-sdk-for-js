// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AppComplianceAutomationContext } from "../../api/appComplianceAutomationContext.js";
import {
  CheckNameAvailabilityRequest,
  CheckNameAvailabilityResponse,
  ReportResource,
  ReportResourcePatch,
  SyncCertRecordRequest,
  SyncCertRecordResponse,
  ReportFixResult,
  ScopingQuestions,
  ReportVerificationResult,
} from "../../models/models.js";
import {
  reportGet,
  reportCreateOrUpdate,
  reportUpdate,
  reportDelete,
  reportListByTenant,
  reportSyncCertRecord,
  reportCheckNameAvailability,
  reportFix,
  reportGetScopingQuestions,
  reportVerify,
} from "../../api/report/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  ReportGetOptionalParams,
  ReportCreateOrUpdateOptionalParams,
  ReportUpdateOptionalParams,
  ReportDeleteOptionalParams,
  ReportListByTenantOptionalParams,
  ReportSyncCertRecordOptionalParams,
  ReportCheckNameAvailabilityOptionalParams,
  ReportFixOptionalParams,
  ReportGetScopingQuestionsOptionalParams,
  ReportVerifyOptionalParams,
} from "../../models/options.js";

/** Interface representing a Report operations. */
export interface ReportOperations {
  /** Get the AppComplianceAutomation report and its properties. */
  get: (
    reportName: string,
    options?: ReportGetOptionalParams,
  ) => Promise<ReportResource>;
  /** Create a new AppComplianceAutomation report or update an exiting AppComplianceAutomation report. */
  createOrUpdate: (
    reportName: string,
    parameters: ReportResource,
    options?: ReportCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<ReportResource>, ReportResource>;
  /** Update an exiting AppComplianceAutomation report. */
  update: (
    reportName: string,
    properties: ReportResourcePatch,
    options?: ReportUpdateOptionalParams,
  ) => PollerLike<OperationState<ReportResource>, ReportResource>;
  /** Delete an AppComplianceAutomation report. */
  delete: (
    reportName: string,
    options?: ReportDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Get the AppComplianceAutomation report list for the tenant. */
  listByTenant: (
    options?: ReportListByTenantOptionalParams,
  ) => PagedAsyncIterableIterator<ReportResource>;
  /** Synchronize attestation record from app compliance. */
  syncCertRecord: (
    reportName: string,
    body: SyncCertRecordRequest,
    options?: ReportSyncCertRecordOptionalParams,
  ) => PollerLike<
    OperationState<SyncCertRecordResponse>,
    SyncCertRecordResponse
  >;
  /** Checks the report's nested resource name availability, e.g: Webhooks, Evidences, Snapshots. */
  checkNameAvailability: (
    reportName: string,
    body: CheckNameAvailabilityRequest,
    options?: ReportCheckNameAvailabilityOptionalParams,
  ) => Promise<CheckNameAvailabilityResponse>;
  /** Fix the AppComplianceAutomation report error. e.g: App Compliance Automation Tool service unregistered, automation removed. */
  fix: (
    reportName: string,
    options?: ReportFixOptionalParams,
  ) => PollerLike<OperationState<ReportFixResult>, ReportFixResult>;
  /** Fix the AppComplianceAutomation report error. e.g: App Compliance Automation Tool service unregistered, automation removed. */
  getScopingQuestions: (
    reportName: string,
    options?: ReportGetScopingQuestionsOptionalParams,
  ) => Promise<ScopingQuestions>;
  /** Verify the AppComplianceAutomation report health status. */
  verify: (
    reportName: string,
    options?: ReportVerifyOptionalParams,
  ) => PollerLike<
    OperationState<ReportVerificationResult>,
    ReportVerificationResult
  >;
}

export function getReport(context: AppComplianceAutomationContext) {
  return {
    get: (reportName: string, options?: ReportGetOptionalParams) =>
      reportGet(context, reportName, options),
    createOrUpdate: (
      reportName: string,
      parameters: ReportResource,
      options?: ReportCreateOrUpdateOptionalParams,
    ) => reportCreateOrUpdate(context, reportName, parameters, options),
    update: (
      reportName: string,
      properties: ReportResourcePatch,
      options?: ReportUpdateOptionalParams,
    ) => reportUpdate(context, reportName, properties, options),
    delete: (reportName: string, options?: ReportDeleteOptionalParams) =>
      reportDelete(context, reportName, options),
    listByTenant: (options?: ReportListByTenantOptionalParams) =>
      reportListByTenant(context, options),
    syncCertRecord: (
      reportName: string,
      body: SyncCertRecordRequest,
      options?: ReportSyncCertRecordOptionalParams,
    ) => reportSyncCertRecord(context, reportName, body, options),
    checkNameAvailability: (
      reportName: string,
      body: CheckNameAvailabilityRequest,
      options?: ReportCheckNameAvailabilityOptionalParams,
    ) => reportCheckNameAvailability(context, reportName, body, options),
    fix: (reportName: string, options?: ReportFixOptionalParams) =>
      reportFix(context, reportName, options),
    getScopingQuestions: (
      reportName: string,
      options?: ReportGetScopingQuestionsOptionalParams,
    ) => reportGetScopingQuestions(context, reportName, options),
    verify: (reportName: string, options?: ReportVerifyOptionalParams) =>
      reportVerify(context, reportName, options),
  };
}

export function getReportOperations(
  context: AppComplianceAutomationContext,
): ReportOperations {
  return {
    ...getReport(context),
  };
}
