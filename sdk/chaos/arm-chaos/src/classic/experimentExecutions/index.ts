// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ChaosManagementContext } from "../../api/chaosManagementContext.js";
import {
  experimentExecutionsGetExecution,
  experimentExecutionsListAllExecutions,
  experimentExecutionsGetExecutionDetails,
} from "../../api/experimentExecutions/index.js";
import {
  ExperimentExecutionsGetExecutionOptionalParams,
  ExperimentExecutionsListAllExecutionsOptionalParams,
  ExperimentExecutionsGetExecutionDetailsOptionalParams,
} from "../../api/options.js";
import { ExperimentExecution, ExperimentExecutionDetails } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a ExperimentExecutions operations. */
export interface ExperimentExecutionsOperations {
  /** Get an execution of an Experiment resource. */
  getExecution: (
    resourceGroupName: string,
    experimentName: string,
    executionId: string,
    options?: ExperimentExecutionsGetExecutionOptionalParams,
  ) => Promise<ExperimentExecution>;
  /** Get a list of executions of an Experiment resource. */
  listAllExecutions: (
    resourceGroupName: string,
    experimentName: string,
    options?: ExperimentExecutionsListAllExecutionsOptionalParams,
  ) => PagedAsyncIterableIterator<ExperimentExecution>;
  /** Execution details of an experiment resource. */
  getExecutionDetails: (
    resourceGroupName: string,
    experimentName: string,
    executionId: string,
    options?: ExperimentExecutionsGetExecutionDetailsOptionalParams,
  ) => Promise<ExperimentExecutionDetails>;
}

export function getExperimentExecutions(context: ChaosManagementContext, subscriptionId: string) {
  return {
    getExecution: (
      resourceGroupName: string,
      experimentName: string,
      executionId: string,
      options?: ExperimentExecutionsGetExecutionOptionalParams,
    ) =>
      experimentExecutionsGetExecution(
        context,
        subscriptionId,
        resourceGroupName,
        experimentName,
        executionId,
        options,
      ),
    listAllExecutions: (
      resourceGroupName: string,
      experimentName: string,
      options?: ExperimentExecutionsListAllExecutionsOptionalParams,
    ) =>
      experimentExecutionsListAllExecutions(
        context,
        subscriptionId,
        resourceGroupName,
        experimentName,
        options,
      ),
    getExecutionDetails: (
      resourceGroupName: string,
      experimentName: string,
      executionId: string,
      options?: ExperimentExecutionsGetExecutionDetailsOptionalParams,
    ) =>
      experimentExecutionsGetExecutionDetails(
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
  context: ChaosManagementContext,
  subscriptionId: string,
): ExperimentExecutionsOperations {
  return {
    ...getExperimentExecutions(context, subscriptionId),
  };
}
