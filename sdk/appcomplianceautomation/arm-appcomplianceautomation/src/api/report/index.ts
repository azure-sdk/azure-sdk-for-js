// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AppComplianceAutomationContext as Client,
  ReportCheckNameAvailabilityOptionalParams,
  ReportCreateOrUpdateOptionalParams,
  ReportDeleteOptionalParams,
  ReportFixOptionalParams,
  ReportGetOptionalParams,
  ReportGetScopingQuestionsOptionalParams,
  ReportListOptionalParams,
  ReportSyncCertRecordOptionalParams,
  ReportUpdateOptionalParams,
  ReportVerifyOptionalParams,
} from "../index.js";
import {
  CheckNameAvailabilityRequest,
  checkNameAvailabilityRequestSerializer,
  CheckNameAvailabilityResponse,
  checkNameAvailabilityResponseDeserializer,
  ReportResource,
  reportResourceSerializer,
  reportResourceDeserializer,
  ReportResourcePatch,
  reportResourcePatchSerializer,
  _ReportResourceListResult,
  _reportResourceListResultDeserializer,
  SyncCertRecordRequest,
  syncCertRecordRequestSerializer,
  SyncCertRecordResponse,
  syncCertRecordResponseDeserializer,
  ReportFixResult,
  reportFixResultDeserializer,
  ScopingQuestions,
  scopingQuestionsDeserializer,
  ReportVerificationResult,
  reportVerificationResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _reportGetSend(
  context: Client,
  reportName: string,
  options: ReportGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}",
      reportName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _reportGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ReportResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return reportResourceDeserializer(result.body);
}

/** Get the AppComplianceAutomation report and its properties. */
export async function reportGet(
  context: Client,
  reportName: string,
  options: ReportGetOptionalParams = { requestOptions: {} },
): Promise<ReportResource> {
  const result = await _reportGetSend(context, reportName, options);
  return _reportGetDeserialize(result);
}

export function _reportCreateOrUpdateSend(
  context: Client,
  reportName: string,
  properties: ReportResource,
  options: ReportCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}",
      reportName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: reportResourceSerializer(properties),
    });
}

export async function _reportCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ReportResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return reportResourceDeserializer(result.body);
}

/** Create a new AppComplianceAutomation report or update an exiting AppComplianceAutomation report. */
export function reportCreateOrUpdate(
  context: Client,
  reportName: string,
  properties: ReportResource,
  options: ReportCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ReportResource>, ReportResource> {
  return getLongRunningPoller(
    context,
    _reportCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _reportCreateOrUpdateSend(context, reportName, properties, options),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<ReportResource>, ReportResource>;
}

export function _reportUpdateSend(
  context: Client,
  reportName: string,
  properties: ReportResourcePatch,
  options: ReportUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}",
      reportName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: reportResourcePatchSerializer(properties),
    });
}

export async function _reportUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ReportResource> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return reportResourceDeserializer(result.body);
}

/** Update an exiting AppComplianceAutomation report. */
export function reportUpdate(
  context: Client,
  reportName: string,
  properties: ReportResourcePatch,
  options: ReportUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ReportResource>, ReportResource> {
  return getLongRunningPoller(
    context,
    _reportUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _reportUpdateSend(context, reportName, properties, options),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<ReportResource>, ReportResource>;
}

export function _reportDeleteSend(
  context: Client,
  reportName: string,
  options: ReportDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}",
      reportName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _reportDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete an AppComplianceAutomation report. */
export function reportDelete(
  context: Client,
  reportName: string,
  options: ReportDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _reportDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () => _reportDeleteSend(context, reportName, options),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _reportListSend(
  context: Client,
  options: ReportListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/providers/Microsoft.AppComplianceAutomation/reports")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        $skipToken: options?.skipToken,
        $top: options?.top,
        $select: options?.select,
        $filter: options?.filter,
        $orderby: options?.orderby,
        offerGuid: options?.offerGuid,
        reportCreatorTenantId: options?.reportCreatorTenantId,
      },
    });
}

export async function _reportListDeserialize(
  result: PathUncheckedResponse,
): Promise<_ReportResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _reportResourceListResultDeserializer(result.body);
}

/** Get the AppComplianceAutomation report list for the tenant. */
export function reportList(
  context: Client,
  options: ReportListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ReportResource> {
  return buildPagedAsyncIterator(
    context,
    () => _reportListSend(context, options),
    _reportListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _reportSyncCertRecordSend(
  context: Client,
  reportName: string,
  body: SyncCertRecordRequest,
  options: ReportSyncCertRecordOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/syncCertRecord",
      reportName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: syncCertRecordRequestSerializer(body),
    });
}

export async function _reportSyncCertRecordDeserialize(
  result: PathUncheckedResponse,
): Promise<SyncCertRecordResponse> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return syncCertRecordResponseDeserializer(result.body);
}

/** Synchronize attestation record from app compliance. */
export function reportSyncCertRecord(
  context: Client,
  reportName: string,
  body: SyncCertRecordRequest,
  options: ReportSyncCertRecordOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<SyncCertRecordResponse>, SyncCertRecordResponse> {
  return getLongRunningPoller(
    context,
    _reportSyncCertRecordDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _reportSyncCertRecordSend(context, reportName, body, options),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<
    OperationState<SyncCertRecordResponse>,
    SyncCertRecordResponse
  >;
}

export function _reportCheckNameAvailabilitySend(
  context: Client,
  reportName: string,
  body: CheckNameAvailabilityRequest,
  options: ReportCheckNameAvailabilityOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/checkNameAvailability",
      reportName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: checkNameAvailabilityRequestSerializer(body),
    });
}

export async function _reportCheckNameAvailabilityDeserialize(
  result: PathUncheckedResponse,
): Promise<CheckNameAvailabilityResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return checkNameAvailabilityResponseDeserializer(result.body);
}

/** Checks the report's nested resource name availability, e.g: Webhooks, Evidences, Snapshots. */
export async function reportCheckNameAvailability(
  context: Client,
  reportName: string,
  body: CheckNameAvailabilityRequest,
  options: ReportCheckNameAvailabilityOptionalParams = { requestOptions: {} },
): Promise<CheckNameAvailabilityResponse> {
  const result = await _reportCheckNameAvailabilitySend(
    context,
    reportName,
    body,
    options,
  );
  return _reportCheckNameAvailabilityDeserialize(result);
}

export function _reportFixSend(
  context: Client,
  reportName: string,
  options: ReportFixOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/fix",
      reportName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _reportFixDeserialize(
  result: PathUncheckedResponse,
): Promise<ReportFixResult> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return reportFixResultDeserializer(result.body);
}

/** Fix the AppComplianceAutomation report error. e.g: App Compliance Automation Tool service unregistered, automation removed. */
export function reportFix(
  context: Client,
  reportName: string,
  options: ReportFixOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ReportFixResult>, ReportFixResult> {
  return getLongRunningPoller(context, _reportFixDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _reportFixSend(context, reportName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<ReportFixResult>, ReportFixResult>;
}

export function _reportGetScopingQuestionsSend(
  context: Client,
  reportName: string,
  options: ReportGetScopingQuestionsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/getScopingQuestions",
      reportName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _reportGetScopingQuestionsDeserialize(
  result: PathUncheckedResponse,
): Promise<ScopingQuestions> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return scopingQuestionsDeserializer(result.body);
}

/** Fix the AppComplianceAutomation report error. e.g: App Compliance Automation Tool service unregistered, automation removed. */
export async function reportGetScopingQuestions(
  context: Client,
  reportName: string,
  options: ReportGetScopingQuestionsOptionalParams = { requestOptions: {} },
): Promise<ScopingQuestions> {
  const result = await _reportGetScopingQuestionsSend(
    context,
    reportName,
    options,
  );
  return _reportGetScopingQuestionsDeserialize(result);
}

export function _reportVerifySend(
  context: Client,
  reportName: string,
  options: ReportVerifyOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/verify",
      reportName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _reportVerifyDeserialize(
  result: PathUncheckedResponse,
): Promise<ReportVerificationResult> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return reportVerificationResultDeserializer(result.body);
}

/** Verify the AppComplianceAutomation report health status. */
export function reportVerify(
  context: Client,
  reportName: string,
  options: ReportVerifyOptionalParams = { requestOptions: {} },
): PollerLike<
  OperationState<ReportVerificationResult>,
  ReportVerificationResult
> {
  return getLongRunningPoller(
    context,
    _reportVerifyDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () => _reportVerifySend(context, reportName, options),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<
    OperationState<ReportVerificationResult>,
    ReportVerificationResult
  >;
}
