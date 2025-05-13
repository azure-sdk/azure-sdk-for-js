// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MigrateContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  AvsGraphAssessmentOptions,
  avsGraphAssessmentOptionsDeserializer,
  _AvsGraphAssessmentOptionsListResult,
  _avsGraphAssessmentOptionsListResultDeserializer,
} from "../../models/models.js";
import {
  AvsGraphAssessmentOptionsOperationsListByParentOptionalParams,
  AvsGraphAssessmentOptionsOperationsGetOptionalParams,
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
  options: AvsGraphAssessmentOptionsOperationsListByParentOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/avsAssessmentOptions{?api%2Dversion}",
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
): Promise<_AvsGraphAssessmentOptionsListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _avsGraphAssessmentOptionsListResultDeserializer(result.body);
}

/** List AvsGraphAssessmentOptions resources by AssessmentProject */
export function listByParent(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  options: AvsGraphAssessmentOptionsOperationsListByParentOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AvsGraphAssessmentOptions> {
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
  options: AvsGraphAssessmentOptionsOperationsGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/avsAssessmentOptions/default{?api%2Dversion}",
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

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<AvsGraphAssessmentOptions> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return avsGraphAssessmentOptionsDeserializer(result.body);
}

/** Get a AvsGraphAssessmentOptions */
export async function get(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  options: AvsGraphAssessmentOptionsOperationsGetOptionalParams = {
    requestOptions: {},
  },
): Promise<AvsGraphAssessmentOptions> {
  const result = await _getSend(context, resourceGroupName, projectName, options);
  return _getDeserialize(result);
}
