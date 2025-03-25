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
  verify,
  getScopingQuestions,
  fix,
  checkNameAvailability,
  syncCertRecord,
  list,
  $delete,
  update,
  createOrUpdate,
  get,
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
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
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
      verify(context, reportName, options),
    getScopingQuestions: (reportName: string, options?: ReportGetScopingQuestionsOptionalParams) =>
      getScopingQuestions(context, reportName, options),
    fix: (reportName: string, options?: ReportFixOptionalParams) =>
      fix(context, reportName, options),
    checkNameAvailability: (
      reportName: string,
      body: CheckNameAvailabilityRequest,
      options?: ReportCheckNameAvailabilityOptionalParams,
    ) => checkNameAvailability(context, reportName, body, options),
    syncCertRecord: (
      reportName: string,
      body: SyncCertRecordRequest,
      options?: ReportSyncCertRecordOptionalParams,
    ) => syncCertRecord(context, reportName, body, options),
    list: (options?: ReportListOptionalParams) => list(context, options),
    delete: (reportName: string, options?: ReportDeleteOptionalParams) =>
      $delete(context, reportName, options),
    update: (
      reportName: string,
      properties: ReportResourcePatch,
      options?: ReportUpdateOptionalParams,
    ) => update(context, reportName, properties, options),
    createOrUpdate: (
      reportName: string,
      properties: ReportResource,
      options?: ReportCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, reportName, properties, options),
    get: (reportName: string, options?: ReportGetOptionalParams) =>
      get(context, reportName, options),
  };
}

export function _getReportOperations(context: AppComplianceAutomationContext): ReportOperations {
  return {
    ..._getReport(context),
  };
}
