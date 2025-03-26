// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationContext } from "../../api/appComplianceAutomationContext.js";
import {
  SnapshotResource,
  SnapshotDownloadRequest,
  DownloadResponse,
} from "../../models/models.js";
import {
  SnapshotDownloadOptionalParams,
  SnapshotListOptionalParams,
  SnapshotGetOptionalParams,
} from "../../api/snapshot/options.js";
import { snapshotDownload, snapshotList, snapshotGet } from "../../api/snapshot/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Snapshot operations. */
export interface SnapshotOperations {
  /** Download compliance needs from snapshot, like: Compliance Report, Resource List. */
  download: (
    reportName: string,
    snapshotName: string,
    body: SnapshotDownloadRequest,
    options?: SnapshotDownloadOptionalParams,
  ) => PollerLike<OperationState<DownloadResponse>, DownloadResponse>;
  /** Get the AppComplianceAutomation snapshot list. */
  list: (
    reportName: string,
    options?: SnapshotListOptionalParams,
  ) => PagedAsyncIterableIterator<SnapshotResource>;
  /** Get the AppComplianceAutomation snapshot and its properties. */
  get: (
    reportName: string,
    snapshotName: string,
    options?: SnapshotGetOptionalParams,
  ) => Promise<SnapshotResource>;
}

function _getSnapshot(context: AppComplianceAutomationContext) {
  return {
    download: (
      reportName: string,
      snapshotName: string,
      body: SnapshotDownloadRequest,
      options?: SnapshotDownloadOptionalParams,
    ) => snapshotDownload(context, reportName, snapshotName, body, options),
    list: (reportName: string, options?: SnapshotListOptionalParams) =>
      snapshotList(context, reportName, options),
    get: (reportName: string, snapshotName: string, options?: SnapshotGetOptionalParams) =>
      snapshotGet(context, reportName, snapshotName, options),
  };
}

export function _getSnapshotOperations(
  context: AppComplianceAutomationContext,
): SnapshotOperations {
  return {
    ..._getSnapshot(context),
  };
}
