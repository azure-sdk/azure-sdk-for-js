// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  evidencePropertiesSerializer,
  EvidenceResource,
  EvidenceFileDownloadRequest,
  EvidenceFileDownloadResponse,
  _EvidenceResourceListResult,
} from "../../models/models.js";
import { AppComplianceAutomationContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  EvidenceGetOptionalParams,
  EvidenceCreateOrUpdateOptionalParams,
  EvidenceDeleteOptionalParams,
  EvidenceListByReportOptionalParams,
  EvidenceDownloadOptionalParams,
} from "../../models/options.js";

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
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _evidenceGetDeserialize(
  result: PathUncheckedResponse,
): Promise<EvidenceResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: {
      evidenceType: result.body.properties["evidenceType"],
      filePath: result.body.properties["filePath"],
      extraData: result.body.properties["extraData"],
      controlId: result.body.properties["controlId"],
      responsibilityId: result.body.properties["responsibilityId"],
      provisioningState: result.body.properties["provisioningState"],
    },
  };
}

/** Get the evidence metadata */
export async function evidenceGet(
  context: Client,
  reportName: string,
  evidenceName: string,
  options: EvidenceGetOptionalParams = { requestOptions: {} },
): Promise<EvidenceResource> {
  const result = await _evidenceGetSend(
    context,
    reportName,
    evidenceName,
    options,
  );
  return _evidenceGetDeserialize(result);
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
      queryParameters: {
        offerGuid: options?.offerGuid,
        reportCreatorTenantId: options?.reportCreatorTenantId,
      },
      body: { properties: evidencePropertiesSerializer(properties.properties) },
    });
}

export async function _evidenceCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<EvidenceResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: {
      evidenceType: result.body.properties["evidenceType"],
      filePath: result.body.properties["filePath"],
      extraData: result.body.properties["extraData"],
      controlId: result.body.properties["controlId"],
      responsibilityId: result.body.properties["responsibilityId"],
      provisioningState: result.body.properties["provisioningState"],
    },
  };
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
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _evidenceDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
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
  const result = await _evidenceDeleteSend(
    context,
    reportName,
    evidenceName,
    options,
  );
  return _evidenceDeleteDeserialize(result);
}

export function _evidenceListByReportSend(
  context: Client,
  reportName: string,
  options: EvidenceListByReportOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences",
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

export async function _evidenceListByReportDeserialize(
  result: PathUncheckedResponse,
): Promise<_EvidenceResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"],
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.["lastModifiedByType"],
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        properties: {
          evidenceType: p.properties["evidenceType"],
          filePath: p.properties["filePath"],
          extraData: p.properties["extraData"],
          controlId: p.properties["controlId"],
          responsibilityId: p.properties["responsibilityId"],
          provisioningState: p.properties["provisioningState"],
        },
      };
    }),
    nextLink: result.body["nextLink"],
  };
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
      body: {
        reportCreatorTenantId: body["reportCreatorTenantId"],
        offerGuid: body["offerGuid"],
      },
    });
}

export async function _evidenceDownloadDeserialize(
  result: PathUncheckedResponse,
): Promise<EvidenceFileDownloadResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    evidenceFile: !result.body.evidenceFile
      ? undefined
      : { url: result.body.evidenceFile?.["url"] },
  };
}

/** Download evidence file. */
export async function evidenceDownload(
  context: Client,
  reportName: string,
  evidenceName: string,
  body: EvidenceFileDownloadRequest,
  options: EvidenceDownloadOptionalParams = { requestOptions: {} },
): Promise<EvidenceFileDownloadResponse> {
  const result = await _evidenceDownloadSend(
    context,
    reportName,
    evidenceName,
    body,
    options,
  );
  return _evidenceDownloadDeserialize(result);
}
