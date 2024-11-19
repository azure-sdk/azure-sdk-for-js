// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationContext } from "../../api/appComplianceAutomationContext.js";
import {
  evidenceGet,
  evidenceCreateOrUpdate,
  evidenceDelete,
  evidenceListByReport,
  evidenceDownload,
} from "../../api/evidence/index.js";
import {
  EvidenceGetOptionalParams,
  EvidenceCreateOrUpdateOptionalParams,
  EvidenceDeleteOptionalParams,
  EvidenceListByReportOptionalParams,
  EvidenceDownloadOptionalParams,
} from "../../api/options.js";
import {
  EvidenceResource,
  EvidenceFileDownloadRequest,
  EvidenceFileDownloadResponse,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a Evidence operations. */
export interface EvidenceOperations {
  /** Get the evidence metadata */
  get: (
    reportName: string,
    evidenceName: string,
    options?: EvidenceGetOptionalParams,
  ) => Promise<EvidenceResource>;
  /** Create or Update an evidence a specified report */
  createOrUpdate: (
    reportName: string,
    evidenceName: string,
    properties: EvidenceResource,
    options?: EvidenceCreateOrUpdateOptionalParams,
  ) => Promise<EvidenceResource>;
  /** Delete an existent evidence from a specified report */
  delete: (
    reportName: string,
    evidenceName: string,
    options?: EvidenceDeleteOptionalParams,
  ) => Promise<void>;
  /** Returns a paginated list of evidences for a specified report. */
  listByReport: (
    reportName: string,
    options?: EvidenceListByReportOptionalParams,
  ) => PagedAsyncIterableIterator<EvidenceResource>;
  /** Download evidence file. */
  download: (
    reportName: string,
    evidenceName: string,
    body: EvidenceFileDownloadRequest,
    options?: EvidenceDownloadOptionalParams,
  ) => Promise<EvidenceFileDownloadResponse>;
}

export function getEvidence(context: AppComplianceAutomationContext) {
  return {
    get: (
      reportName: string,
      evidenceName: string,
      options?: EvidenceGetOptionalParams,
    ) => evidenceGet(context, reportName, evidenceName, options),
    createOrUpdate: (
      reportName: string,
      evidenceName: string,
      properties: EvidenceResource,
      options?: EvidenceCreateOrUpdateOptionalParams,
    ) =>
      evidenceCreateOrUpdate(
        context,
        reportName,
        evidenceName,
        properties,
        options,
      ),
    delete: (
      reportName: string,
      evidenceName: string,
      options?: EvidenceDeleteOptionalParams,
    ) => evidenceDelete(context, reportName, evidenceName, options),
    listByReport: (
      reportName: string,
      options?: EvidenceListByReportOptionalParams,
    ) => evidenceListByReport(context, reportName, options),
    download: (
      reportName: string,
      evidenceName: string,
      body: EvidenceFileDownloadRequest,
      options?: EvidenceDownloadOptionalParams,
    ) => evidenceDownload(context, reportName, evidenceName, body, options),
  };
}

export function getEvidenceOperations(
  context: AppComplianceAutomationContext,
): EvidenceOperations {
  return {
    ...getEvidence(context),
  };
}
