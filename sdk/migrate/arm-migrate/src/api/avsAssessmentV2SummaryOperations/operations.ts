// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MigrateContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  AvsAssessmentV2Summary,
  avsAssessmentV2SummaryDeserializer,
  _AvsAssessmentV2SummaryListResult,
  _avsAssessmentV2SummaryListResultDeserializer,
} from "../../models/models.js";
import {
  AvsAssessmentV2SummaryOperationsListByParentOptionalParams,
  AvsAssessmentV2SummaryOperationsGetOptionalParams,
} from "./options.js";
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

export function _listByParentSend(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  assessmentName: string,
  options: AvsAssessmentV2SummaryOperationsListByParentOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/avsAssessments/{assessmentName}/summaries{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      projectName: projectName,
      assessmentName: assessmentName,
      "api%2Dversion": context.apiVersion,
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

export async function _listByParentDeserialize(
  result: PathUncheckedResponse,
): Promise<_AvsAssessmentV2SummaryListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _avsAssessmentV2SummaryListResultDeserializer(result.body);
}

/** List AvsAssessmentV2Summary resources by AvsAssessmentV2 */
export function listByParent(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  assessmentName: string,
  options: AvsAssessmentV2SummaryOperationsListByParentOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AvsAssessmentV2Summary> {
  return buildPagedAsyncIterator(
    context,
    () => _listByParentSend(context, resourceGroupName, projectName, assessmentName, options),
    _listByParentDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  assessmentName: string,
  summaryName: string,
  options: AvsAssessmentV2SummaryOperationsGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/avsAssessments/{assessmentName}/summaries/{summaryName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      projectName: projectName,
      assessmentName: assessmentName,
      summaryName: summaryName,
      "api%2Dversion": context.apiVersion,
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

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<AvsAssessmentV2Summary> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return avsAssessmentV2SummaryDeserializer(result.body);
}

/** Get a AvsAssessmentV2Summary */
export async function get(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  assessmentName: string,
  summaryName: string,
  options: AvsAssessmentV2SummaryOperationsGetOptionalParams = {
    requestOptions: {},
  },
): Promise<AvsAssessmentV2Summary> {
  const result = await _getSend(
    context,
    resourceGroupName,
    projectName,
    assessmentName,
    summaryName,
    options,
  );
  return _getDeserialize(result);
}
