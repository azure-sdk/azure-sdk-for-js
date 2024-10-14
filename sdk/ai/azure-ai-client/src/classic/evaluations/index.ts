// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ClientContext } from "../../api/azureAIContext.js";
import {
  Evaluation,
  UpdateEvaluationRequest,
  EvaluationSchedule,
} from "../../models/models.js";
import {
  create,
  list,
  update,
  get,
  createSchedule,
  getSchedule,
  listSchedules,
  listScheduleEvaluations,
  deleteSchedule,
} from "../../api/evaluations/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
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

/** Interface representing a Evaluations operations. */
export interface EvaluationsOperations {
  /** Creates an evaluation. */
  create: (
    evaluation: Evaluation,
    options?: EvaluationsCreateOptionalParams,
  ) => Promise<Evaluation>;
  /** List evaluations */
  list: (
    options?: EvaluationsListOptionalParams,
  ) => PagedAsyncIterableIterator<Evaluation>;
  /** Update an evaluation. */
  update: (
    id: string,
    updateRequest: UpdateEvaluationRequest,
    options?: EvaluationsUpdateOptionalParams,
  ) => Promise<Evaluation>;
  /** Get an evaluation. */
  get: (
    id: string,
    options?: EvaluationsGetOptionalParams,
  ) => Promise<Evaluation>;
  /** Creates an evaluation schedule. */
  createSchedule: (
    body: EvaluationSchedule,
    options?: EvaluationsCreateScheduleOptionalParams,
  ) => Promise<EvaluationSchedule>;
  /** Get an evaluation schedule along with runs. */
  getSchedule: (
    id: string,
    options?: EvaluationsGetScheduleOptionalParams,
  ) => Promise<EvaluationSchedule>;
  /** List evaluation schedules */
  listSchedules: (
    options?: EvaluationsListSchedulesOptionalParams,
  ) => PagedAsyncIterableIterator<EvaluationSchedule>;
  /** List evaluations under a schedule */
  listScheduleEvaluations: (
    id: string,
    options?: EvaluationsListScheduleEvaluationsOptionalParams,
  ) => PagedAsyncIterableIterator<Evaluation>;
  /** Delete an evaluation schedule. */
  deleteSchedule: (
    id: string,
    options?: EvaluationsDeleteScheduleOptionalParams,
  ) => Promise<void>;
}

export function getEvaluations(context: ClientContext) {
  return {
    create: (
      evaluation: Evaluation,
      options?: EvaluationsCreateOptionalParams,
    ) => create(context, evaluation, options),
    list: (options?: EvaluationsListOptionalParams) => list(context, options),
    update: (
      id: string,
      updateRequest: UpdateEvaluationRequest,
      options?: EvaluationsUpdateOptionalParams,
    ) => update(context, id, updateRequest, options),
    get: (id: string, options?: EvaluationsGetOptionalParams) =>
      get(context, id, options),
    createSchedule: (
      body: EvaluationSchedule,
      options?: EvaluationsCreateScheduleOptionalParams,
    ) => createSchedule(context, body, options),
    getSchedule: (id: string, options?: EvaluationsGetScheduleOptionalParams) =>
      getSchedule(context, id, options),
    listSchedules: (options?: EvaluationsListSchedulesOptionalParams) =>
      listSchedules(context, options),
    listScheduleEvaluations: (
      id: string,
      options?: EvaluationsListScheduleEvaluationsOptionalParams,
    ) => listScheduleEvaluations(context, id, options),
    deleteSchedule: (
      id: string,
      options?: EvaluationsDeleteScheduleOptionalParams,
    ) => deleteSchedule(context, id, options),
  };
}

export function getEvaluationsOperations(
  context: ClientContext,
): EvaluationsOperations {
  return {
    ...getEvaluations(context),
  };
}
