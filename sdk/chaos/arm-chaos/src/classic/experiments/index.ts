// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ChaosManagementContext } from "../../api/chaosManagementContext.js";
import {
  experimentsGet,
  experimentsCreateOrUpdate,
  experimentsUpdate,
  experimentsDelete,
  experimentsList,
  experimentsListAll,
  experimentsCancel,
  experimentsStart,
} from "../../api/experiments/index.js";
import {
  ExperimentsGetOptionalParams,
  ExperimentsCreateOrUpdateOptionalParams,
  ExperimentsUpdateOptionalParams,
  ExperimentsDeleteOptionalParams,
  ExperimentsListOptionalParams,
  ExperimentsListAllOptionalParams,
  ExperimentsCancelOptionalParams,
  ExperimentsStartOptionalParams,
} from "../../api/options.js";
import { Experiment, ExperimentUpdate } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Experiments operations. */
export interface ExperimentsOperations {
  /** Get a Experiment resource. */
  get: (
    resourceGroupName: string,
    experimentName: string,
    options?: ExperimentsGetOptionalParams,
  ) => Promise<Experiment>;
  /** Create or update a Experiment resource. */
  createOrUpdate: (
    resourceGroupName: string,
    experimentName: string,
    resource: Experiment,
    options?: ExperimentsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Experiment>, Experiment>;
  /** The operation to update an experiment. */
  update: (
    resourceGroupName: string,
    experimentName: string,
    properties: ExperimentUpdate,
    options?: ExperimentsUpdateOptionalParams,
  ) => PollerLike<OperationState<Experiment>, Experiment>;
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
  ) => PagedAsyncIterableIterator<Experiment>;
  /** Get a list of Experiment resources in a subscription. */
  listAll: (options?: ExperimentsListAllOptionalParams) => PagedAsyncIterableIterator<Experiment>;
  /** Cancel a running Experiment resource. */
  cancel: (
    resourceGroupName: string,
    experimentName: string,
    options?: ExperimentsCancelOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Start a Experiment resource. */
  start: (
    resourceGroupName: string,
    experimentName: string,
    options?: ExperimentsStartOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getExperiments(context: ChaosManagementContext, subscriptionId: string) {
  return {
    get: (
      resourceGroupName: string,
      experimentName: string,
      options?: ExperimentsGetOptionalParams,
    ) => experimentsGet(context, subscriptionId, resourceGroupName, experimentName, options),
    createOrUpdate: (
      resourceGroupName: string,
      experimentName: string,
      resource: Experiment,
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
    ) => experimentsDelete(context, subscriptionId, resourceGroupName, experimentName, options),
    list: (resourceGroupName: string, options?: ExperimentsListOptionalParams) =>
      experimentsList(context, subscriptionId, resourceGroupName, options),
    listAll: (options?: ExperimentsListAllOptionalParams) =>
      experimentsListAll(context, subscriptionId, options),
    cancel: (
      resourceGroupName: string,
      experimentName: string,
      options?: ExperimentsCancelOptionalParams,
    ) => experimentsCancel(context, subscriptionId, resourceGroupName, experimentName, options),
    start: (
      resourceGroupName: string,
      experimentName: string,
      options?: ExperimentsStartOptionalParams,
    ) => experimentsStart(context, subscriptionId, resourceGroupName, experimentName, options),
  };
}

export function getExperimentsOperations(
  context: ChaosManagementContext,
  subscriptionId: string,
): ExperimentsOperations {
  return {
    ...getExperiments(context, subscriptionId),
  };
}
