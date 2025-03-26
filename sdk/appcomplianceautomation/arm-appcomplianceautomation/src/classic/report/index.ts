// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

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
  ReportVerifyOptionalParams,
  ReportGetScopingQuestionsOptionalParams,
  ReportFixOptionalParams,
  ReportCheckNameAvailabilityOptionalParams,
  ReportSyncCertRecordOptionalParams,
  ReportListOptionalParams,
  ReportDeleteOptionalParams,
  ReportUpdateOptionalParams,
  ReportCreateOrUpdateOptionalParams,
  ReportGetOptionalParams,
} from "../../api/report/options.js";
import {
  reportVerify,
  reportGetScopingQuestions,
  reportFix,
  reportCheckNameAvailability,
  reportSyncCertRecord,
  reportList,
  reportDelete,
  reportUpdate,
  reportCreateOrUpdate,
  reportGet,
} from "../../api/report/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Report operations. */
export interface ReportOperations {
  /** Verify the AppComplianceAutomation report health status. */
  verify: (
    reportName: string,
    options?: ReportVerifyOptionalParams,
  ) => PollerLike<OperationState<ReportVerificationResult>, ReportVerificationResult>;
  /** Fix the AppComplianceAutomation report error. e.g: App Compliance Automation Tool service unregistered, automation removed. */
  getScopingQuestions: (
    reportName: string,
    options?: ReportGetScopingQuestionsOptionalParams,
  ) => Promise<ScopingQuestions>;
  /** Fix the AppComplianceAutomation report error. e.g: App Compliance Automation Tool service unregistered, automation removed. */
  fix: (
    reportName: string,
    options?: ReportFixOptionalParams,
  ) => PollerLike<OperationState<ReportFixResult>, ReportFixResult>;
  /** Checks the report's nested resource name availability, e.g: Webhooks, Evidences, Snapshots. */
  checkNameAvailability: (
    reportName: string,
    body: CheckNameAvailabilityRequest,
    options?: ReportCheckNameAvailabilityOptionalParams,
  ) => Promise<CheckNameAvailabilityResponse>;
  /** Synchronize attestation record from app compliance. */
  syncCertRecord: (
    reportName: string,
    body: SyncCertRecordRequest,
    options?: ReportSyncCertRecordOptionalParams,
  ) => PollerLike<OperationState<SyncCertRecordResponse>, SyncCertRecordResponse>;
  /** Get the AppComplianceAutomation report list for the tenant. */
  list: (options?: ReportListOptionalParams) => PagedAsyncIterableIterator<ReportResource>;
  /** Delete an AppComplianceAutomation report. */
  delete: (
    reportName: string,
    options?: ReportDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update an exiting AppComplianceAutomation report. */
  update: (
    reportName: string,
    properties: ReportResourcePatch,
    options?: ReportUpdateOptionalParams,
  ) => PollerLike<OperationState<ReportResource>, ReportResource>;
  /** Create a new AppComplianceAutomation report or update an exiting AppComplianceAutomation report. */
  createOrUpdate: (
    reportName: string,
    properties: ReportResource,
    options?: ReportCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<ReportResource>, ReportResource>;
  /** Get the AppComplianceAutomation report and its properties. */
  get: (reportName: string, options?: ReportGetOptionalParams) => Promise<ReportResource>;
}

function _getReport(context: AppComplianceAutomationContext) {
  return {
    verify: (reportName: string, options?: ReportVerifyOptionalParams) =>
      reportVerify(context, reportName, options),
    getScopingQuestions: (reportName: string, options?: ReportGetScopingQuestionsOptionalParams) =>
      reportGetScopingQuestions(context, reportName, options),
    fix: (reportName: string, options?: ReportFixOptionalParams) =>
      reportFix(context, reportName, options),
    checkNameAvailability: (
      reportName: string,
      body: CheckNameAvailabilityRequest,
      options?: ReportCheckNameAvailabilityOptionalParams,
    ) => reportCheckNameAvailability(context, reportName, body, options),
    syncCertRecord: (
      reportName: string,
      body: SyncCertRecordRequest,
      options?: ReportSyncCertRecordOptionalParams,
    ) => reportSyncCertRecord(context, reportName, body, options),
    list: (options?: ReportListOptionalParams) => reportList(context, options),
    delete: (reportName: string, options?: ReportDeleteOptionalParams) =>
      reportDelete(context, reportName, options),
    update: (
      reportName: string,
      properties: ReportResourcePatch,
      options?: ReportUpdateOptionalParams,
    ) => reportUpdate(context, reportName, properties, options),
    createOrUpdate: (
      reportName: string,
      properties: ReportResource,
      options?: ReportCreateOrUpdateOptionalParams,
    ) => reportCreateOrUpdate(context, reportName, properties, options),
    get: (reportName: string, options?: ReportGetOptionalParams) =>
      reportGet(context, reportName, options),
  };
}

export function _getReportOperations(context: AppComplianceAutomationContext): ReportOperations {
  return {
    ..._getReport(context),
  };
}
