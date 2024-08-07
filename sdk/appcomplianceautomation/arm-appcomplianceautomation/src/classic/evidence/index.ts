// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AppComplianceAutomationContext } from "../../api/appComplianceAutomationContext.js";
import {
  EvidenceResource,
  EvidenceFileDownloadRequest,
  EvidenceFileDownloadResponse,
} from "../../models/models.js";
import {
  evidenceGet,
  evidenceCreateOrUpdate,
  evidenceDelete,
  evidenceListByReportResource,
  evidenceDownload,
} from "../../api/evidence/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  EvidenceGetOptionalParams,
  EvidenceCreateOrUpdateOptionalParams,
  EvidenceDeleteOptionalParams,
  EvidenceListByReportResourceOptionalParams,
  EvidenceDownloadOptionalParams,
} from "../../models/options.js";

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
    parameters: EvidenceResource,
    options?: EvidenceCreateOrUpdateOptionalParams,
  ) => Promise<EvidenceResource>;
  /** Delete an existent evidence from a specified report */
  delete: (
    reportName: string,
    evidenceName: string,
    options?: EvidenceDeleteOptionalParams,
  ) => Promise<void>;
  /** Returns a paginated list of evidences for a specified report. */
  listByReportResource: (
    reportName: string,
    options?: EvidenceListByReportResourceOptionalParams,
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
      parameters: EvidenceResource,
      options?: EvidenceCreateOrUpdateOptionalParams,
    ) =>
      evidenceCreateOrUpdate(
        context,
        reportName,
        evidenceName,
        parameters,
        options,
      ),
    delete: (
      reportName: string,
      evidenceName: string,
      options?: EvidenceDeleteOptionalParams,
    ) => evidenceDelete(context, reportName, evidenceName, options),
    listByReportResource: (
      reportName: string,
      options?: EvidenceListByReportResourceOptionalParams,
    ) => evidenceListByReportResource(context, reportName, options),
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
