// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationContext } from "../../api/appComplianceAutomationContext.js";
import {
  EvidenceResource,
  EvidenceFileDownloadRequest,
  EvidenceFileDownloadResponse,
} from "../../models/models.js";
import {
  EvidenceDownloadOptionalParams,
  EvidenceListByReportOptionalParams,
  EvidenceDeleteOptionalParams,
  EvidenceCreateOrUpdateOptionalParams,
  EvidenceGetOptionalParams,
} from "../../api/evidence/options.js";
import {
  download,
  listByReport,
  $delete,
  createOrUpdate,
  get,
} from "../../api/evidence/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a Evidence operations. */
export interface EvidenceOperations {
  /** Download evidence file. */
  download: (
    reportName: string,
    evidenceName: string,
    body: EvidenceFileDownloadRequest,
    options?: EvidenceDownloadOptionalParams,
  ) => Promise<EvidenceFileDownloadResponse>;
  /** Returns a paginated list of evidences for a specified report. */
  listByReport: (
    reportName: string,
    options?: EvidenceListByReportOptionalParams,
  ) => PagedAsyncIterableIterator<EvidenceResource>;
  /** Delete an existent evidence from a specified report */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    reportName: string,
    evidenceName: string,
    options?: EvidenceDeleteOptionalParams,
  ) => Promise<void>;
  /** Create or Update an evidence a specified report */
  createOrUpdate: (
    reportName: string,
    evidenceName: string,
    properties: EvidenceResource,
    options?: EvidenceCreateOrUpdateOptionalParams,
  ) => Promise<EvidenceResource>;
  /** Get the evidence metadata */
  get: (
    reportName: string,
    evidenceName: string,
    options?: EvidenceGetOptionalParams,
  ) => Promise<EvidenceResource>;
}

function _getEvidence(context: AppComplianceAutomationContext) {
  return {
    download: (
      reportName: string,
      evidenceName: string,
      body: EvidenceFileDownloadRequest,
      options?: EvidenceDownloadOptionalParams,
    ) => download(context, reportName, evidenceName, body, options),
    listByReport: (reportName: string, options?: EvidenceListByReportOptionalParams) =>
      listByReport(context, reportName, options),
    delete: (reportName: string, evidenceName: string, options?: EvidenceDeleteOptionalParams) =>
      $delete(context, reportName, evidenceName, options),
    createOrUpdate: (
      reportName: string,
      evidenceName: string,
      properties: EvidenceResource,
      options?: EvidenceCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, reportName, evidenceName, properties, options),
    get: (reportName: string, evidenceName: string, options?: EvidenceGetOptionalParams) =>
      get(context, reportName, evidenceName, options),
  };
}

export function _getEvidenceOperations(
  context: AppComplianceAutomationContext,
): EvidenceOperations {
  return {
    ..._getEvidence(context),
  };
}
