// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MigrateContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  AvsAssessedMachineV2,
  avsAssessedMachineV2Deserializer,
  _AvsAssessedMachineV2ListResult,
  _avsAssessedMachineV2ListResultDeserializer,
} from "../../models/models.js";
import {
  AvsAssessedMachinesV2OperationsListByParentOptionalParams,
  AvsAssessedMachinesV2OperationsGetOptionalParams,
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
  options: AvsAssessedMachinesV2OperationsListByParentOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/avsAssessments/{assessmentName}/avsAssessedMachines{?api%2Dversion,%24filter,pageSize,continuationToken,totalRecordCount}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      projectName: projectName,
      assessmentName: assessmentName,
      "api%2Dversion": context.apiVersion,
      "%24filter": options?.filter,
      pageSize: options?.pageSize,
      continuationToken: options?.continuationToken,
      totalRecordCount: options?.totalRecordCount,
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
): Promise<_AvsAssessedMachineV2ListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _avsAssessedMachineV2ListResultDeserializer(result.body);
}

/** List AvsAssessedMachineV2 resources by AvsAssessmentV2 */
export function listByParent(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  assessmentName: string,
  options: AvsAssessedMachinesV2OperationsListByParentOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AvsAssessedMachineV2> {
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
  avsAssessedMachineName: string,
  options: AvsAssessedMachinesV2OperationsGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/avsAssessments/{assessmentName}/avsAssessedMachines/{avsAssessedMachineName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      projectName: projectName,
      assessmentName: assessmentName,
      avsAssessedMachineName: avsAssessedMachineName,
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
): Promise<AvsAssessedMachineV2> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return avsAssessedMachineV2Deserializer(result.body);
}

/** Get a AvsAssessedMachineV2 */
export async function get(
  context: Client,
  resourceGroupName: string,
  projectName: string,
  assessmentName: string,
  avsAssessedMachineName: string,
  options: AvsAssessedMachinesV2OperationsGetOptionalParams = {
    requestOptions: {},
  },
): Promise<AvsAssessedMachineV2> {
  const result = await _getSend(
    context,
    resourceGroupName,
    projectName,
    assessmentName,
    avsAssessedMachineName,
    options,
  );
  return _getDeserialize(result);
}
