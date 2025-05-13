// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MigrateContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  AvsAssessmentV2,
  avsAssessmentV2Serializer,
  avsAssessmentV2Deserializer,
  _AvsAssessmentV2ListResult,
  _avsAssessmentV2ListResultDeserializer,
  _downloadUrlRequestSerializer,
  DownloadUrl,
  downloadUrlDeserializer,
} from "../../models/models.js";
import {
  AvsAssessmentsV2OperationsDownloadUrlOptionalParams,
  AvsAssessmentsV2OperationsDeleteOptionalParams,
  AvsAssessmentsV2OperationsCreateOptionalParams,
  AvsAssessmentsV2OperationsListByParentOptionalParams,
  AvsAssessmentsV2OperationsGetOptionalParams,
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

export function _downloadUrlSend(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  assessmentName: string,
  body: Record<string, any>,
  options: AvsAssessmentsV2OperationsDownloadUrlOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/avsAssessments/{assessmentName}/downloadUrl{?api%2Dversion}",
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
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: _downloadUrlRequestSerializer(body),
  });
}

export async function _downloadUrlDeserialize(result: PathUncheckedResponse): Promise<DownloadUrl> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return downloadUrlDeserializer(result.body);
}

/** Get the URL for downloading the assessment in a report format. */
export function downloadUrl(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  assessmentName: string,
  body: Record<string, any>,
  options: AvsAssessmentsV2OperationsDownloadUrlOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<DownloadUrl>, DownloadUrl> {
  return getLongRunningPoller(context, _downloadUrlDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _downloadUrlSend(context, resourceGroupName, projectName, assessmentName, body, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<DownloadUrl>, DownloadUrl>;
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  assessmentName: string,
  options: AvsAssessmentsV2OperationsDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/avsAssessments/{assessmentName}{?api%2Dversion}",
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
  return context.path(path).delete({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _$deleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a AvsAssessmentV2 */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  assessmentName: string,
  options: AvsAssessmentsV2OperationsDeleteOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _$deleteSend(
    context,
    resourceGroupName,
    projectName,
    assessmentName,
    options,
  );
  return _$deleteDeserialize(result);
}

export function _createSend(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  assessmentName: string,
  resource: AvsAssessmentV2,
  options: AvsAssessmentsV2OperationsCreateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/avsAssessments/{assessmentName}{?api%2Dversion}",
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
  return context.path(path).put({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: avsAssessmentV2Serializer(resource),
  });
}

export async function _createDeserialize(result: PathUncheckedResponse): Promise<AvsAssessmentV2> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return avsAssessmentV2Deserializer(result.body);
}

/** Create a AvsAssessmentV2 */
export function create(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  assessmentName: string,
  resource: AvsAssessmentV2,
  options: AvsAssessmentsV2OperationsCreateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<AvsAssessmentV2>, AvsAssessmentV2> {
  return getLongRunningPoller(context, _createDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createSend(context, resourceGroupName, projectName, assessmentName, resource, options),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<AvsAssessmentV2>, AvsAssessmentV2>;
}

export function _listByParentSend(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  options: AvsAssessmentsV2OperationsListByParentOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/avsAssessments{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      projectName: projectName,
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
): Promise<_AvsAssessmentV2ListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _avsAssessmentV2ListResultDeserializer(result.body);
}

/** List AvsAssessmentV2 resources by AssessmentProject */
export function listByParent(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  options: AvsAssessmentsV2OperationsListByParentOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AvsAssessmentV2> {
  return buildPagedAsyncIterator(
    context,
    () => _listByParentSend(context, resourceGroupName, projectName, options),
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
  options: AvsAssessmentsV2OperationsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/avsAssessments/{assessmentName}{?api%2Dversion}",
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

export async function _getDeserialize(result: PathUncheckedResponse): Promise<AvsAssessmentV2> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return avsAssessmentV2Deserializer(result.body);
}

/** Get a AvsAssessmentV2 */
export async function get(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  assessmentName: string,
  options: AvsAssessmentsV2OperationsGetOptionalParams = { requestOptions: {} },
): Promise<AvsAssessmentV2> {
  const result = await _getSend(context, resourceGroupName, projectName, assessmentName, options);
  return _getDeserialize(result);
}
