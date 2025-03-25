// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationContext as Client } from "../index.js";
import {
  CheckNameAvailabilityRequest,
  checkNameAvailabilityRequestSerializer,
  CheckNameAvailabilityResponse,
  checkNameAvailabilityResponseDeserializer,
  errorResponseDeserializer,
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
} from "./options.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _verifySend(
  context: Client,
  reportName: string,
  options: ReportVerifyOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/verify{?api-version}",
    {
      reportName: reportName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _verifyDeserialize(
  result: PathUncheckedResponse,
): Promise<ReportVerificationResult> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return reportVerificationResultDeserializer(result.body);
}

/** Verify the AppComplianceAutomation report health status. */
export function verify(
  context: Client,
  reportName: string,
  options: ReportVerifyOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ReportVerificationResult>, ReportVerificationResult> {
  return getLongRunningPoller(context, _verifyDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _verifySend(context, reportName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<ReportVerificationResult>, ReportVerificationResult>;
}

export function _getScopingQuestionsSend(
  context: Client,
  reportName: string,
  options: ReportGetScopingQuestionsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/getScopingQuestions{?api-version}",
    {
      reportName: reportName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _getScopingQuestionsDeserialize(
  result: PathUncheckedResponse,
): Promise<ScopingQuestions> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return scopingQuestionsDeserializer(result.body);
}

/** Fix the AppComplianceAutomation report error. e.g: App Compliance Automation Tool service unregistered, automation removed. */
export async function getScopingQuestions(
  context: Client,
  reportName: string,
  options: ReportGetScopingQuestionsOptionalParams = { requestOptions: {} },
): Promise<ScopingQuestions> {
  const result = await _getScopingQuestionsSend(context, reportName, options);
  return _getScopingQuestionsDeserialize(result);
}

export function _fixSend(
  context: Client,
  reportName: string,
  options: ReportFixOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/fix{?api-version}",
    {
      reportName: reportName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _fixDeserialize(result: PathUncheckedResponse): Promise<ReportFixResult> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return reportFixResultDeserializer(result.body);
}

/** Fix the AppComplianceAutomation report error. e.g: App Compliance Automation Tool service unregistered, automation removed. */
export function fix(
  context: Client,
  reportName: string,
  options: ReportFixOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ReportFixResult>, ReportFixResult> {
  return getLongRunningPoller(context, _fixDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _fixSend(context, reportName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<ReportFixResult>, ReportFixResult>;
}

export function _checkNameAvailabilitySend(
  context: Client,
  reportName: string,
  body: CheckNameAvailabilityRequest,
  options: ReportCheckNameAvailabilityOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/checkNameAvailability{?api-version}",
    {
      reportName: reportName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: checkNameAvailabilityRequestSerializer(body),
  });
}

export async function _checkNameAvailabilityDeserialize(
  result: PathUncheckedResponse,
): Promise<CheckNameAvailabilityResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return checkNameAvailabilityResponseDeserializer(result.body);
}

/** Checks the report's nested resource name availability, e.g: Webhooks, Evidences, Snapshots. */
export async function checkNameAvailability(
  context: Client,
  reportName: string,
  body: CheckNameAvailabilityRequest,
  options: ReportCheckNameAvailabilityOptionalParams = { requestOptions: {} },
): Promise<CheckNameAvailabilityResponse> {
  const result = await _checkNameAvailabilitySend(context, reportName, body, options);
  return _checkNameAvailabilityDeserialize(result);
}

export function _syncCertRecordSend(
  context: Client,
  reportName: string,
  body: SyncCertRecordRequest,
  options: ReportSyncCertRecordOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/syncCertRecord{?api-version}",
    {
      reportName: reportName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: syncCertRecordRequestSerializer(body),
  });
}

export async function _syncCertRecordDeserialize(
  result: PathUncheckedResponse,
): Promise<SyncCertRecordResponse> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return syncCertRecordResponseDeserializer(result.body);
}

/** Synchronize attestation record from app compliance. */
export function syncCertRecord(
  context: Client,
  reportName: string,
  body: SyncCertRecordRequest,
  options: ReportSyncCertRecordOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<SyncCertRecordResponse>, SyncCertRecordResponse> {
  return getLongRunningPoller(context, _syncCertRecordDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _syncCertRecordSend(context, reportName, body, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<SyncCertRecordResponse>, SyncCertRecordResponse>;
}

export function _listSend(
  context: Client,
  options: ReportListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/reports{?api-version,$skipToken,$top,$select,$filter,$orderby,offerGuid,reportCreatorTenantId}",
    {
      "api-version": context.apiVersion,
      $skipToken: options?.skipToken,
      $top: options?.top,
      $select: options?.select,
      $filter: options?.filter,
      $orderby: options?.orderby,
      offerGuid: options?.offerGuid,
      reportCreatorTenantId: options?.reportCreatorTenantId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_ReportResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _reportResourceListResultDeserializer(result.body);
}

/** Get the AppComplianceAutomation report list for the tenant. */
export function list(
  context: Client,
  options: ReportListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ReportResource> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _$deleteSend(
  context: Client,
  reportName: string,
  options: ReportDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}{?api-version}",
    {
      reportName: reportName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).delete({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _$deleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete an AppComplianceAutomation report. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  reportName: string,
  options: ReportDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _$deleteSend(context, reportName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _updateSend(
  context: Client,
  reportName: string,
  properties: ReportResourcePatch,
  options: ReportUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}{?api-version}",
    {
      reportName: reportName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).patch({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: reportResourcePatchSerializer(properties),
  });
}

export async function _updateDeserialize(result: PathUncheckedResponse): Promise<ReportResource> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return reportResourceDeserializer(result.body);
}

/** Update an exiting AppComplianceAutomation report. */
export function update(
  context: Client,
  reportName: string,
  properties: ReportResourcePatch,
  options: ReportUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ReportResource>, ReportResource> {
  return getLongRunningPoller(context, _updateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _updateSend(context, reportName, properties, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<ReportResource>, ReportResource>;
}

export function _createOrUpdateSend(
  context: Client,
  reportName: string,
  properties: ReportResource,
  options: ReportCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}{?api-version}",
    {
      reportName: reportName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).put({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: reportResourceSerializer(properties),
  });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ReportResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return reportResourceDeserializer(result.body);
}

/** Create a new AppComplianceAutomation report or update an exiting AppComplianceAutomation report. */
export function createOrUpdate(
  context: Client,
  reportName: string,
  properties: ReportResource,
  options: ReportCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ReportResource>, ReportResource> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _createOrUpdateSend(context, reportName, properties, options),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<ReportResource>, ReportResource>;
}

export function _getSend(
  context: Client,
  reportName: string,
  options: ReportGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}{?api-version}",
    {
      reportName: reportName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _getDeserialize(result: PathUncheckedResponse): Promise<ReportResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return reportResourceDeserializer(result.body);
}

/** Get the AppComplianceAutomation report and its properties. */
export async function get(
  context: Client,
  reportName: string,
  options: ReportGetOptionalParams = { requestOptions: {} },
): Promise<ReportResource> {
  const result = await _getSend(context, reportName, options);
  return _getDeserialize(result);
}
