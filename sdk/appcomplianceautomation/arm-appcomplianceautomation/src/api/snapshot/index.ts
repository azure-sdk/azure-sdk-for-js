// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AppComplianceAutomationContext as Client,
  SnapshotDownloadOptionalParams,
  SnapshotGetOptionalParams,
  SnapshotListOptionalParams,
} from "../index.js";
import {
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

export function _snapshotGetSend(
  context: Client,
  reportName: string,
  snapshotName: string,
  options: SnapshotGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/snapshots/{snapshotName}",
      reportName,
      snapshotName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _snapshotGetDeserialize(
  result: PathUncheckedResponse,
): Promise<SnapshotResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
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
  const result = await _snapshotGetSend(
    context,
    reportName,
    snapshotName,
    options,
  );
  return _snapshotGetDeserialize(result);
}

export function _snapshotListSend(
  context: Client,
  reportName: string,
  options: SnapshotListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/snapshots",
      reportName,
    )
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

export async function _snapshotListDeserialize(
  result: PathUncheckedResponse,
): Promise<_SnapshotResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
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

export function _snapshotDownloadSend(
  context: Client,
  reportName: string,
  snapshotName: string,
  body: SnapshotDownloadRequest,
  options: SnapshotDownloadOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/snapshots/{snapshotName}/download",
      reportName,
      snapshotName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: snapshotDownloadRequestSerializer(body),
    });
}

export async function _snapshotDownloadDeserialize(
  result: PathUncheckedResponse,
): Promise<DownloadResponse> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
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
  return getLongRunningPoller(
    context,
    _snapshotDownloadDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _snapshotDownloadSend(context, reportName, snapshotName, body, options),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<DownloadResponse>, DownloadResponse>;
}
