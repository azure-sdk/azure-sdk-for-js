// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  SnapshotResource,
  snapshotResourceDeserializer,
  _SnapshotResourceListResult,
  _snapshotResourceListResultDeserializer,
  SnapshotDownloadRequest,
  snapshotDownloadRequestSerializer,
  DownloadResponse,
  downloadResponseDeserializer,
} from "../../models/models.js";
import {
  SnapshotDownloadOptionalParams,
  SnapshotListOptionalParams,
  SnapshotGetOptionalParams,
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

export function _snapshotDownloadSend(
  context: Client,
  reportName: string,
  snapshotName: string,
  body: SnapshotDownloadRequest,
  options: SnapshotDownloadOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/snapshots/{snapshotName}/download{?api-version}",
    {
      reportName: reportName,
      snapshotName: snapshotName,
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
    body: snapshotDownloadRequestSerializer(body),
  });
}

export async function _snapshotDownloadDeserialize(
  result: PathUncheckedResponse,
): Promise<DownloadResponse> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return downloadResponseDeserializer(result.body);
}

/** Download compliance needs from snapshot, like: Compliance Report, Resource List. */
export function snapshotDownload(
  context: Client,
  reportName: string,
  snapshotName: string,
  body: SnapshotDownloadRequest,
  options: SnapshotDownloadOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<DownloadResponse>, DownloadResponse> {
  return getLongRunningPoller(context, _snapshotDownloadDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _snapshotDownloadSend(context, reportName, snapshotName, body, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<DownloadResponse>, DownloadResponse>;
}

export function _snapshotListSend(
  context: Client,
  reportName: string,
  options: SnapshotListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/snapshots{?api-version,$skipToken,$top,$select,$filter,$orderby,offerGuid,reportCreatorTenantId}",
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

export async function _snapshotListDeserialize(
  result: PathUncheckedResponse,
): Promise<_SnapshotResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _snapshotResourceListResultDeserializer(result.body);
}

/** Get the AppComplianceAutomation snapshot list. */
export function snapshotList(
  context: Client,
  reportName: string,
  options: SnapshotListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<SnapshotResource> {
  return buildPagedAsyncIterator(
    context,
    () => _snapshotListSend(context, reportName, options),
    _snapshotListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _snapshotGetSend(
  context: Client,
  reportName: string,
  snapshotName: string,
  options: SnapshotGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/snapshots/{snapshotName}{?api-version}",
    {
      reportName: reportName,
      snapshotName: snapshotName,
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

export async function _snapshotGetDeserialize(
  result: PathUncheckedResponse,
): Promise<SnapshotResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return snapshotResourceDeserializer(result.body);
}

/** Get the AppComplianceAutomation snapshot and its properties. */
export async function snapshotGet(
  context: Client,
  reportName: string,
  snapshotName: string,
  options: SnapshotGetOptionalParams = { requestOptions: {} },
): Promise<SnapshotResource> {
  const result = await _snapshotGetSend(context, reportName, snapshotName, options);
  return _snapshotGetDeserialize(result);
}
