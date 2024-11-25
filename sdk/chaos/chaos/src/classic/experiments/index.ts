// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ChaosContext } from "../../api/chaosContext.js";
import {
  experimentsGet,
  experimentsCreateOrUpdate,
  experimentsUpdate,
  experimentsDelete,
  experimentsList,
  experimentsListAll,
  experimentsCancelExperiment,
  experimentsStartExperiment,
} from "../../api/experiments/index.js";
import {
  ExperimentsGetOptionalParams,
  ExperimentsCreateOrUpdateOptionalParams,
  ExperimentsUpdateOptionalParams,
  ExperimentsDeleteOptionalParams,
  ExperimentsListOptionalParams,
  ExperimentsListAllOptionalParams,
  ExperimentsCancelExperimentOptionalParams,
  ExperimentsStartExperimentOptionalParams,
} from "../../api/options.js";
import {
  ChaosExperiment,
  ExperimentUpdate,
  PostActionResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Experiments operations. */
export interface ExperimentsOperations {
  /** Get a Experiment resource. */
  get: (
    resourceGroupName: string,
    experimentName: string,
    options?: ExperimentsGetOptionalParams,
  ) => Promise<ChaosExperiment>;
  /** Create or update a Experiment resource. */
  createOrUpdate: (
    resourceGroupName: string,
    experimentName: string,
    resource: ChaosExperiment,
    options?: ExperimentsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<ChaosExperiment>, ChaosExperiment>;
  /** The operation to update an experiment. */
  update: (
    resourceGroupName: string,
    experimentName: string,
    properties: ExperimentUpdate,
    options?: ExperimentsUpdateOptionalParams,
  ) => PollerLike<OperationState<ChaosExperiment>, ChaosExperiment>;
  /** Delete a Experiment resource. */
  delete: (
    resourceGroupName: string,
    experimentName: string,
    options?: ExperimentsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Get a list of Experiment resources in a resource group. */
  list: (
    resourceGroupName: string,
    options?: ExperimentsListOptionalParams,
  ) => PagedAsyncIterableIterator<ChaosExperiment>;
  /** Get a list of Experiment resources in a subscription. */
  listAll: (
    options?: ExperimentsListAllOptionalParams,
  ) => PagedAsyncIterableIterator<ChaosExperiment>;
  /** Cancel a running Experiment resource. */
  cancelExperiment: (
    resourceGroupName: string,
    experimentName: string,
    options?: ExperimentsCancelExperimentOptionalParams,
  ) => PollerLike<OperationState<PostActionResult>, PostActionResult>;
  /** Start a Experiment resource. */
  startExperiment: (
    resourceGroupName: string,
    experimentName: string,
    options?: ExperimentsStartExperimentOptionalParams,
  ) => PollerLike<OperationState<PostActionResult>, PostActionResult>;
}

export function getExperiments(context: ChaosContext, subscriptionId: string) {
  return {
    get: (
      resourceGroupName: string,
      experimentName: string,
      options?: ExperimentsGetOptionalParams,
    ) =>
      experimentsGet(
        context,
        subscriptionId,
        resourceGroupName,
        experimentName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      experimentName: string,
      resource: ChaosExperiment,
      options?: ExperimentsCreateOrUpdateOptionalParams,
    ) =>
      experimentsCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        experimentName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      experimentName: string,
      properties: ExperimentUpdate,
      options?: ExperimentsUpdateOptionalParams,
    ) =>
      experimentsUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        experimentName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      experimentName: string,
      options?: ExperimentsDeleteOptionalParams,
    ) =>
      experimentsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        experimentName,
        options,
      ),
    list: (
      resourceGroupName: string,
      options?: ExperimentsListOptionalParams,
    ) => experimentsList(context, subscriptionId, resourceGroupName, options),
    listAll: (options?: ExperimentsListAllOptionalParams) =>
      experimentsListAll(context, subscriptionId, options),
    cancelExperiment: (
      resourceGroupName: string,
      experimentName: string,
      options?: ExperimentsCancelExperimentOptionalParams,
    ) =>
      experimentsCancelExperiment(
        context,
        subscriptionId,
        resourceGroupName,
        experimentName,
        options,
      ),
    startExperiment: (
      resourceGroupName: string,
      experimentName: string,
      options?: ExperimentsStartExperimentOptionalParams,
    ) =>
      experimentsStartExperiment(
        context,
        subscriptionId,
        resourceGroupName,
        experimentName,
        options,
      ),
  };
}

export function getExperimentsOperations(
  context: ChaosContext,
  subscriptionId: string,
): ExperimentsOperations {
  return {
    ...getExperiments(context, subscriptionId),
  };
}
