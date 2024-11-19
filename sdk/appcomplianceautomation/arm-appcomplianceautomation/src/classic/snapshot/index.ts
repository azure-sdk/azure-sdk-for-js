// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationContext } from "../../api/appComplianceAutomationContext.js";
import {
  SnapshotGetOptionalParams,
  SnapshotListOptionalParams,
  SnapshotDownloadOptionalParams,
} from "../../api/options.js";
import {
  snapshotGet,
  snapshotList,
  snapshotDownload,
} from "../../api/snapshot/index.js";
import {
  SnapshotResource,
  SnapshotDownloadRequest,
  DownloadResponse,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Snapshot operations. */
export interface SnapshotOperations {
  /** Get the AppComplianceAutomation snapshot and its properties. */
  get: (
    reportName: string,
    snapshotName: string,
    options?: SnapshotGetOptionalParams,
  ) => Promise<SnapshotResource>;
  /** Get the AppComplianceAutomation snapshot list. */
  list: (
    reportName: string,
    options?: SnapshotListOptionalParams,
  ) => PagedAsyncIterableIterator<SnapshotResource>;
  /** Download compliance needs from snapshot, like: Compliance Report, Resource List. */
  download: (
    reportName: string,
    snapshotName: string,
    body: SnapshotDownloadRequest,
    options?: SnapshotDownloadOptionalParams,
  ) => PollerLike<OperationState<DownloadResponse>, DownloadResponse>;
}

export function getSnapshot(context: AppComplianceAutomationContext) {
  return {
    get: (
      reportName: string,
      snapshotName: string,
      options?: SnapshotGetOptionalParams,
    ) => snapshotGet(context, reportName, snapshotName, options),
    list: (reportName: string, options?: SnapshotListOptionalParams) =>
      snapshotList(context, reportName, options),
    download: (
      reportName: string,
      snapshotName: string,
      body: SnapshotDownloadRequest,
      options?: SnapshotDownloadOptionalParams,
    ) => snapshotDownload(context, reportName, snapshotName, body, options),
  };
}

export function getSnapshotOperations(
  context: AppComplianceAutomationContext,
): SnapshotOperations {
  return {
    ...getSnapshot(context),
  };
}
