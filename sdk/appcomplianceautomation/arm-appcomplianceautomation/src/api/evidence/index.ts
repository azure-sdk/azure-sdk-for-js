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
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
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
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences/{evidenceName}/download{?api-version}",
    {
      reportName: reportName,
      evidenceName: evidenceName,
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
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences{?api-version,$skipToken,$top,$select,$filter,$orderby,offerGuid,reportCreatorTenantId}",
    {
      reportName: reportName,
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
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences/{evidenceName}{?api-version}",
    {
      reportName: reportName,
      evidenceName: evidenceName,
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
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences/{evidenceName}{?api-version,offerGuid,reportCreatorTenantId}",
    {
      reportName: reportName,
      evidenceName: evidenceName,
      "api-version": context.apiVersion,
      offerGuid: options?.offerGuid,
      reportCreatorTenantId: options?.reportCreatorTenantId,
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
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences/{evidenceName}{?api-version}",
    {
      reportName: reportName,
      evidenceName: evidenceName,
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
