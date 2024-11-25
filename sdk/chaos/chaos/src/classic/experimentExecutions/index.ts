// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ChaosContext } from "../../api/chaosContext.js";
import {
  experimentExecutionsGet,
  experimentExecutionsList,
  experimentExecutionsExecutionDetails,
} from "../../api/experimentExecutions/index.js";
import {
  ExperimentExecutionsGetOptionalParams,
  ExperimentExecutionsListOptionalParams,
  ExperimentExecutionsExecutionDetailsOptionalParams,
} from "../../api/options.js";
import {
  ChaosExperimentExecution,
  ExperimentExecutionDetails,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a ExperimentExecutions operations. */
export interface ExperimentExecutionsOperations {
  /** Get an execution of an Experiment resource. */
  get: (
    resourceGroupName: string,
    experimentName: string,
    executionId: string,
    options?: ExperimentExecutionsGetOptionalParams,
  ) => Promise<ChaosExperimentExecution>;
  /** Get a list of executions of an Experiment resource. */
  list: (
    resourceGroupName: string,
    experimentName: string,
    options?: ExperimentExecutionsListOptionalParams,
  ) => PagedAsyncIterableIterator<ChaosExperimentExecution>;
  /** Execution details of an experiment resource. */
  executionDetails: (
    resourceGroupName: string,
    experimentName: string,
    executionId: string,
    options?: ExperimentExecutionsExecutionDetailsOptionalParams,
  ) => Promise<ExperimentExecutionDetails>;
}

export function getExperimentExecutions(
  context: ChaosContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      experimentName: string,
      executionId: string,
      options?: ExperimentExecutionsGetOptionalParams,
    ) =>
      experimentExecutionsGet(
        context,
        subscriptionId,
        resourceGroupName,
        experimentName,
        executionId,
        options,
      ),
    list: (
      resourceGroupName: string,
      experimentName: string,
      options?: ExperimentExecutionsListOptionalParams,
    ) =>
      experimentExecutionsList(
        context,
        subscriptionId,
        resourceGroupName,
        experimentName,
        options,
      ),
    executionDetails: (
      resourceGroupName: string,
      experimentName: string,
      executionId: string,
      options?: ExperimentExecutionsExecutionDetailsOptionalParams,
    ) =>
      experimentExecutionsExecutionDetails(
        context,
        subscriptionId,
        resourceGroupName,
        experimentName,
        executionId,
        options,
      ),
  };
}

export function getExperimentExecutionsOperations(
  context: ChaosContext,
  subscriptionId: string,
): ExperimentExecutionsOperations {
  return {
    ...getExperimentExecutions(context, subscriptionId),
  };
}
