// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ProjectsContext } from "../../api/aIProjectContext.js";
import { Evaluation, EvaluationSchedule } from "../../models/models.js";
import {
  get,
  create,
  list,
  update,
  getSchedule,
  createOrReplaceSchedule,
  listSchedule,
  disableSchedule,
} from "../../api/evaluations/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  EvaluationsGetOptionalParams,
  EvaluationsCreateOptionalParams,
  EvaluationsListOptionalParams,
  EvaluationsUpdateOptionalParams,
  EvaluationsGetScheduleOptionalParams,
  EvaluationsCreateOrReplaceScheduleOptionalParams,
  EvaluationsListScheduleOptionalParams,
  EvaluationsDisableScheduleOptionalParams,
} from "../../models/options.js";

/** Interface representing a Evaluations operations. */
export interface EvaluationsOperations {
  /** Resource read operation template. */
  get: (
    id: string,
    options?: EvaluationsGetOptionalParams,
  ) => Promise<Evaluation>;
  /** Run the evaluation. */
  create: (
    evaluation: Evaluation,
    options?: EvaluationsCreateOptionalParams,
  ) => Promise<Evaluation>;
  /** Resource list operation template. */
  list: (
    options?: EvaluationsListOptionalParams,
  ) => PagedAsyncIterableIterator<Evaluation>;
  /** Resource update operation template. */
  update: (
    id: string,
    resource: Evaluation,
    options?: EvaluationsUpdateOptionalParams,
  ) => Promise<Evaluation>;
  /** Resource read operation template. */
  getSchedule: (
    name: string,
    options?: EvaluationsGetScheduleOptionalParams,
  ) => Promise<EvaluationSchedule>;
  /** Create or replace operation template. */
  createOrReplaceSchedule: (
    name: string,
    resource: EvaluationSchedule,
    options?: EvaluationsCreateOrReplaceScheduleOptionalParams,
  ) => Promise<EvaluationSchedule>;
  /** Resource list operation template. */
  listSchedule: (
    options?: EvaluationsListScheduleOptionalParams,
  ) => PagedAsyncIterableIterator<EvaluationSchedule>;
  /** Disable the evaluation schedule. */
  disableSchedule: (
    name: string,
    options?: EvaluationsDisableScheduleOptionalParams,
  ) => Promise<void>;
}

export function getEvaluations(context: ProjectsContext) {
  return {
    get: (id: string, options?: EvaluationsGetOptionalParams) =>
      get(context, id, options),
    create: (
      evaluation: Evaluation,
      options?: EvaluationsCreateOptionalParams,
    ) => create(context, evaluation, options),
    list: (options?: EvaluationsListOptionalParams) => list(context, options),
    update: (
      id: string,
      resource: Evaluation,
      options?: EvaluationsUpdateOptionalParams,
    ) => update(context, id, resource, options),
    getSchedule: (
      name: string,
      options?: EvaluationsGetScheduleOptionalParams,
    ) => getSchedule(context, name, options),
    createOrReplaceSchedule: (
      name: string,
      resource: EvaluationSchedule,
      options?: EvaluationsCreateOrReplaceScheduleOptionalParams,
    ) => createOrReplaceSchedule(context, name, resource, options),
    listSchedule: (options?: EvaluationsListScheduleOptionalParams) =>
      listSchedule(context, options),
    disableSchedule: (
      name: string,
      options?: EvaluationsDisableScheduleOptionalParams,
    ) => disableSchedule(context, name, options),
  };
}

export function getEvaluationsOperations(
  context: ProjectsContext,
): EvaluationsOperations {
  return {
    ...getEvaluations(context),
  };
}
