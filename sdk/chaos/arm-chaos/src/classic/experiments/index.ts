// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ChaosManagementContext } from "../../api/chaosManagementContext.js";
import {
  experimentsStart,
  experimentsCancel,
  experimentsListAll,
  experimentsList,
  experimentsDelete,
  experimentsUpdate,
  experimentsCreateOrUpdate,
  experimentsGet,
} from "../../api/experiments/index.js";
import {
  ExperimentsStartOptionalParams,
  ExperimentsCancelOptionalParams,
  ExperimentsListAllOptionalParams,
  ExperimentsListOptionalParams,
  ExperimentsDeleteOptionalParams,
  ExperimentsUpdateOptionalParams,
  ExperimentsCreateOrUpdateOptionalParams,
  ExperimentsGetOptionalParams,
} from "../../api/options.js";
import { Experiment, ExperimentUpdate } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Experiments operations. */
export interface ExperimentsOperations {
  /** Start a Experiment resource. */
  start: (
    resourceGroupName: string,
    experimentName: string,
    options?: ExperimentsStartOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Cancel a running Experiment resource. */
  cancel: (
    resourceGroupName: string,
    experimentName: string,
    options?: ExperimentsCancelOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Get a list of Experiment resources in a subscription. */
  listAll: (options?: ExperimentsListAllOptionalParams) => PagedAsyncIterableIterator<Experiment>;
  /** Get a list of Experiment resources in a resource group. */
  list: (
    resourceGroupName: string,
    options?: ExperimentsListOptionalParams,
  ) => PagedAsyncIterableIterator<Experiment>;
  /** Delete a Experiment resource. */
  delete: (
    resourceGroupName: string,
    experimentName: string,
    options?: ExperimentsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** The operation to update an experiment. */
  update: (
    resourceGroupName: string,
    experimentName: string,
    properties: ExperimentUpdate,
    options?: ExperimentsUpdateOptionalParams,
  ) => PollerLike<OperationState<Experiment>, Experiment>;
  /** Create or update a Experiment resource. */
  createOrUpdate: (
    resourceGroupName: string,
    experimentName: string,
    resource: Experiment,
    options?: ExperimentsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Experiment>, Experiment>;
  /** Get a Experiment resource. */
  get: (
    resourceGroupName: string,
    experimentName: string,
    options?: ExperimentsGetOptionalParams,
  ) => Promise<Experiment>;
}

function _getExperiments(context: ChaosManagementContext) {
  return {
    start: (
      resourceGroupName: string,
      experimentName: string,
      options?: ExperimentsStartOptionalParams,
    ) => experimentsStart(context, resourceGroupName, experimentName, options),
    cancel: (
      resourceGroupName: string,
      experimentName: string,
      options?: ExperimentsCancelOptionalParams,
    ) => experimentsCancel(context, resourceGroupName, experimentName, options),
    listAll: (options?: ExperimentsListAllOptionalParams) => experimentsListAll(context, options),
    list: (resourceGroupName: string, options?: ExperimentsListOptionalParams) =>
      experimentsList(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      experimentName: string,
      options?: ExperimentsDeleteOptionalParams,
    ) => experimentsDelete(context, resourceGroupName, experimentName, options),
    update: (
      resourceGroupName: string,
      experimentName: string,
      properties: ExperimentUpdate,
      options?: ExperimentsUpdateOptionalParams,
    ) => experimentsUpdate(context, resourceGroupName, experimentName, properties, options),
    createOrUpdate: (
      resourceGroupName: string,
      experimentName: string,
      resource: Experiment,
      options?: ExperimentsCreateOrUpdateOptionalParams,
    ) => experimentsCreateOrUpdate(context, resourceGroupName, experimentName, resource, options),
    get: (
      resourceGroupName: string,
      experimentName: string,
      options?: ExperimentsGetOptionalParams,
    ) => experimentsGet(context, resourceGroupName, experimentName, options),
  };
}

export function _getExperimentsOperations(context: ChaosManagementContext): ExperimentsOperations {
  return {
    ..._getExperiments(context),
  };
}
