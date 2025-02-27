// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AppComplianceAutomationContext as Client,
  EvidenceCreateOrUpdateOptionalParams,
  EvidenceDeleteOptionalParams,
  EvidenceDownloadOptionalParams,
  EvidenceGetOptionalParams,
  EvidenceListByReportOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  EvidenceResource,
  evidenceResourceSerializer,
  evidenceResourceDeserializer,
  _EvidenceResourceListResult,
  _evidenceResourceListResultDeserializer,
  EvidenceFileDownloadRequest,
  evidenceFileDownloadRequestSerializer,
  EvidenceFileDownloadResponse,
  evidenceFileDownloadResponseDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _evidenceDownloadSend(
  context: Client,
  reportName: string,
  evidenceName: string,
  body: EvidenceFileDownloadRequest,
  options: EvidenceDownloadOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences/{evidenceName}/download",
      reportName,
      evidenceName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: evidenceFileDownloadRequestSerializer(body),
    });
}

export async function _evidenceDownloadDeserialize(
  result: PathUncheckedResponse,
): Promise<EvidenceFileDownloadResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return evidenceFileDownloadResponseDeserializer(result.body);
}

/** Download evidence file. */
export async function evidenceDownload(
  context: Client,
  reportName: string,
  evidenceName: string,
  body: EvidenceFileDownloadRequest,
  options: EvidenceDownloadOptionalParams = { requestOptions: {} },
): Promise<EvidenceFileDownloadResponse> {
  const result = await _evidenceDownloadSend(context, reportName, evidenceName, body, options);
  return _evidenceDownloadDeserialize(result);
}

export function _evidenceListByReportSend(
  context: Client,
  reportName: string,
  options: EvidenceListByReportOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences", reportName)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: {
        "api-version": context.apiVersion,
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

export async function _evidenceListByReportDeserialize(
  result: PathUncheckedResponse,
): Promise<_EvidenceResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _evidenceResourceListResultDeserializer(result.body);
}

/** Returns a paginated list of evidences for a specified report. */
export function evidenceListByReport(
  context: Client,
  reportName: string,
  options: EvidenceListByReportOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<EvidenceResource> {
  return buildPagedAsyncIterator(
    context,
    () => _evidenceListByReportSend(context, reportName, options),
    _evidenceListByReportDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _evidenceDeleteSend(
  context: Client,
  reportName: string,
  evidenceName: string,
  options: EvidenceDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences/{evidenceName}",
      reportName,
      evidenceName,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _evidenceDeleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete an existent evidence from a specified report */
export async function evidenceDelete(
  context: Client,
  reportName: string,
  evidenceName: string,
  options: EvidenceDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _evidenceDeleteSend(context, reportName, evidenceName, options);
  return _evidenceDeleteDeserialize(result);
}

export function _evidenceCreateOrUpdateSend(
  context: Client,
  reportName: string,
  evidenceName: string,
  properties: EvidenceResource,
  options: EvidenceCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences/{evidenceName}",
      reportName,
      evidenceName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: {
        "api-version": context.apiVersion,
        offerGuid: options?.offerGuid,
        reportCreatorTenantId: options?.reportCreatorTenantId,
      },
      body: evidenceResourceSerializer(properties),
    });
}

export async function _evidenceCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<EvidenceResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return evidenceResourceDeserializer(result.body);
}

/** Create or Update an evidence a specified report */
export async function evidenceCreateOrUpdate(
  context: Client,
  reportName: string,
  evidenceName: string,
  properties: EvidenceResource,
  options: EvidenceCreateOrUpdateOptionalParams = { requestOptions: {} },
): Promise<EvidenceResource> {
  const result = await _evidenceCreateOrUpdateSend(
    context,
    reportName,
    evidenceName,
    properties,
    options,
  );
  return _evidenceCreateOrUpdateDeserialize(result);
}

export function _evidenceGetSend(
  context: Client,
  reportName: string,
  evidenceName: string,
  options: EvidenceGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences/{evidenceName}",
      reportName,
      evidenceName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _evidenceGetDeserialize(
  result: PathUncheckedResponse,
): Promise<EvidenceResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return evidenceResourceDeserializer(result.body);
}

/** Get the evidence metadata */
export async function evidenceGet(
  context: Client,
  reportName: string,
  evidenceName: string,
  options: EvidenceGetOptionalParams = { requestOptions: {} },
): Promise<EvidenceResource> {
  const result = await _evidenceGetSend(context, reportName, evidenceName, options);
  return _evidenceGetDeserialize(result);
}
