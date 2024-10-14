// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  inputDataUnionSerializer,
  evaluatorConfigurationSerializer,
  recurrenceSerializer,
  samplingStrategySerializer,
  Evaluation,
  UpdateEvaluationRequest,
  EvaluationSchedule,
  Frequency,
  _PagedEvaluation,
  _PagedEvaluationSchedule,
} from "../../models/models.js";
import { deserializeInputDataUnion } from "../../utils/deserializeUtil.js";
import { ClientContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  EvaluationsCreateOptionalParams,
  EvaluationsListOptionalParams,
  EvaluationsUpdateOptionalParams,
  EvaluationsGetOptionalParams,
  EvaluationsCreateScheduleOptionalParams,
  EvaluationsGetScheduleOptionalParams,
  EvaluationsListSchedulesOptionalParams,
  EvaluationsListScheduleEvaluationsOptionalParams,
  EvaluationsDeleteScheduleOptionalParams,
} from "../../models/options.js";

export function _createSend(
  context: Client,
  evaluation: Evaluation,
  options: EvaluationsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/evaluations/create")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        id: evaluation["id"],
        data: inputDataUnionSerializer(evaluation.data),
        displayName: evaluation["displayName"],
        description: evaluation["description"],
        tags: !evaluation.tags
          ? evaluation.tags
          : (serializeRecord(evaluation.tags as any) as any),
        properties: !evaluation.properties
          ? evaluation.properties
          : (serializeRecord(evaluation.properties as any) as any),
        evaluators: serializeRecord(
          evaluation.evaluators as any,
          evaluatorConfigurationSerializer,
        ) as any,
      },
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<Evaluation> {
  const expectedStatuses = ["201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    data: deserializeInputDataUnion(result.body.data),
    displayName: result.body["displayName"],
    description: result.body["description"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    status: result.body["status"],
    tags: result.body["tags"],
    properties: result.body["properties"],
    evaluators: result.body["evaluators"],
  };
}

/** Creates an evaluation. */
export async function create(
  context: Client,
  evaluation: Evaluation,
  options: EvaluationsCreateOptionalParams = { requestOptions: {} },
): Promise<Evaluation> {
  const result = await _createSend(context, evaluation, options);
  return _createDeserialize(result);
}

export function _listSend(
  context: Client,
  options: EvaluationsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/evaluations")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        top: options?.top,
        skip: options?.skip,
        maxpagesize: options?.maxpagesize,
      },
    });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedEvaluation> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        id: p["id"],
        data: deserializeInputDataUnion(p.data),
        displayName: p["displayName"],
        description: p["description"],
        systemData: !p.systemData
          ? undefined
          : {
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"],
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        status: p["status"],
        tags: p["tags"],
        properties: p["properties"],
        evaluators: p["evaluators"],
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List evaluations */
export function list(
  context: Client,
  options: EvaluationsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Evaluation> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _updateSend(
  context: Client,
  id: string,
  updateRequest: UpdateEvaluationRequest,
  options: EvaluationsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/evaluations/{id}", id)
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: serializeRecord(updateRequest.tags as any) as any,
        displayName: updateRequest["displayName"],
        description: updateRequest["description"],
      },
    });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<Evaluation> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    data: deserializeInputDataUnion(result.body.data),
    displayName: result.body["displayName"],
    description: result.body["description"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    status: result.body["status"],
    tags: result.body["tags"],
    properties: result.body["properties"],
    evaluators: result.body["evaluators"],
  };
}

/** Update an evaluation. */
export async function update(
  context: Client,
  id: string,
  updateRequest: UpdateEvaluationRequest,
  options: EvaluationsUpdateOptionalParams = { requestOptions: {} },
): Promise<Evaluation> {
  const result = await _updateSend(context, id, updateRequest, options);
  return _updateDeserialize(result);
}

export function _getSend(
  context: Client,
  id: string,
  options: EvaluationsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/evaluations/{id}", id)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<Evaluation> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    data: deserializeInputDataUnion(result.body.data),
    displayName: result.body["displayName"],
    description: result.body["description"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    status: result.body["status"],
    tags: result.body["tags"],
    properties: result.body["properties"],
    evaluators: result.body["evaluators"],
  };
}

/** Get an evaluation. */
export async function get(
  context: Client,
  id: string,
  options: EvaluationsGetOptionalParams = { requestOptions: {} },
): Promise<Evaluation> {
  const result = await _getSend(context, id, options);
  return _getDeserialize(result);
}

export function _createScheduleSend(
  context: Client,
  body: EvaluationSchedule,
  options: EvaluationsCreateScheduleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/evaluations/schedules/create")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        id: body["id"],
        data: inputDataUnionSerializer(body.data),
        displayName: body["displayName"],
        description: body["description"],
        tags: !body.tags
          ? body.tags
          : (serializeRecord(body.tags as any) as any),
        properties: !body.properties
          ? body.properties
          : (serializeRecord(body.properties as any) as any),
        evaluators: serializeRecord(
          body.evaluators as any,
          evaluatorConfigurationSerializer,
        ) as any,
        recurrence: !body.recurrence
          ? body.recurrence
          : recurrenceSerializer(body.recurrence),
        cronExpression: body["cronExpression"],
        samplingStrategy: samplingStrategySerializer(body.samplingStrategy),
      },
    });
}

export async function _createScheduleDeserialize(
  result: PathUncheckedResponse,
): Promise<EvaluationSchedule> {
  const expectedStatuses = ["201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    data: deserializeInputDataUnion(result.body.data),
    displayName: result.body["displayName"],
    description: result.body["description"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    status: result.body["status"],
    tags: result.body["tags"],
    properties: result.body["properties"],
    evaluators: result.body["evaluators"],
    recurrence: !result.body.recurrence
      ? undefined
      : {
          frequency: result.body.recurrence?.["frequency"] as Frequency,
          interval: result.body.recurrence?.["interval"],
          schedule: {
            hours: result.body.recurrence?.schedule["hours"],
            minutes: result.body.recurrence?.schedule["minutes"],
            weekDays: result.body.recurrence?.schedule["weekDays"],
            monthDays: result.body.recurrence?.schedule["monthDays"],
          },
        },
    cronExpression: result.body["cronExpression"],
    samplingStrategy: { rate: result.body.samplingStrategy["rate"] },
  };
}

/** Creates an evaluation schedule. */
export async function createSchedule(
  context: Client,
  body: EvaluationSchedule,
  options: EvaluationsCreateScheduleOptionalParams = { requestOptions: {} },
): Promise<EvaluationSchedule> {
  const result = await _createScheduleSend(context, body, options);
  return _createScheduleDeserialize(result);
}

export function _getScheduleSend(
  context: Client,
  id: string,
  options: EvaluationsGetScheduleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/evaluations/schedules/{id}", id)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getScheduleDeserialize(
  result: PathUncheckedResponse,
): Promise<EvaluationSchedule> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    data: deserializeInputDataUnion(result.body.data),
    displayName: result.body["displayName"],
    description: result.body["description"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    status: result.body["status"],
    tags: result.body["tags"],
    properties: result.body["properties"],
    evaluators: result.body["evaluators"],
    recurrence: !result.body.recurrence
      ? undefined
      : {
          frequency: result.body.recurrence?.["frequency"] as Frequency,
          interval: result.body.recurrence?.["interval"],
          schedule: {
            hours: result.body.recurrence?.schedule["hours"],
            minutes: result.body.recurrence?.schedule["minutes"],
            weekDays: result.body.recurrence?.schedule["weekDays"],
            monthDays: result.body.recurrence?.schedule["monthDays"],
          },
        },
    cronExpression: result.body["cronExpression"],
    samplingStrategy: { rate: result.body.samplingStrategy["rate"] },
  };
}

/** Get an evaluation schedule along with runs. */
export async function getSchedule(
  context: Client,
  id: string,
  options: EvaluationsGetScheduleOptionalParams = { requestOptions: {} },
): Promise<EvaluationSchedule> {
  const result = await _getScheduleSend(context, id, options);
  return _getScheduleDeserialize(result);
}

export function _listSchedulesSend(
  context: Client,
  options: EvaluationsListSchedulesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/evaluations/schedules")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        top: options?.top,
        skip: options?.skip,
        maxpagesize: options?.maxpagesize,
      },
    });
}

export async function _listSchedulesDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedEvaluationSchedule> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        id: p["id"],
        data: deserializeInputDataUnion(p.data),
        displayName: p["displayName"],
        description: p["description"],
        systemData: !p.systemData
          ? undefined
          : {
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"],
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        status: p["status"],
        tags: p["tags"],
        properties: p["properties"],
        evaluators: p["evaluators"],
        recurrence: !p.recurrence
          ? undefined
          : {
              frequency: p.recurrence?.["frequency"] as Frequency,
              interval: p.recurrence?.["interval"],
              schedule: {
                hours: p.recurrence?.schedule["hours"],
                minutes: p.recurrence?.schedule["minutes"],
                weekDays: p.recurrence?.schedule["weekDays"],
                monthDays: p.recurrence?.schedule["monthDays"],
              },
            },
        cronExpression: p["cronExpression"],
        samplingStrategy: { rate: p.samplingStrategy["rate"] },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List evaluation schedules */
export function listSchedules(
  context: Client,
  options: EvaluationsListSchedulesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<EvaluationSchedule> {
  return buildPagedAsyncIterator(
    context,
    () => _listSchedulesSend(context, options),
    _listSchedulesDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listScheduleEvaluationsSend(
  context: Client,
  id: string,
  options: EvaluationsListScheduleEvaluationsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/evaluations/schedules/{id}/runs", id)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        top: options?.top,
        skip: options?.skip,
        maxpagesize: options?.maxpagesize,
      },
    });
}

export async function _listScheduleEvaluationsDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedEvaluation> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        id: p["id"],
        data: deserializeInputDataUnion(p.data),
        displayName: p["displayName"],
        description: p["description"],
        systemData: !p.systemData
          ? undefined
          : {
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"],
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        status: p["status"],
        tags: p["tags"],
        properties: p["properties"],
        evaluators: p["evaluators"],
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List evaluations under a schedule */
export function listScheduleEvaluations(
  context: Client,
  id: string,
  options: EvaluationsListScheduleEvaluationsOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<Evaluation> {
  return buildPagedAsyncIterator(
    context,
    () => _listScheduleEvaluationsSend(context, id, options),
    _listScheduleEvaluationsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _deleteScheduleSend(
  context: Client,
  id: string,
  options: EvaluationsDeleteScheduleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/evaluations/schedules/{id}", id)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteScheduleDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete an evaluation schedule. */
export async function deleteSchedule(
  context: Client,
  id: string,
  options: EvaluationsDeleteScheduleOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteScheduleSend(context, id, options);
  return _deleteScheduleDeserialize(result);
}
