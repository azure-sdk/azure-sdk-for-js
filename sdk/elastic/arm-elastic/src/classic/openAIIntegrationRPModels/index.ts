// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticContext } from "../../api/elasticContext.js";
import { OpenAIIntegrationRPModel, OpenAIIntegrationStatusResponse } from "../../models/models.js";
import {
  OpenAIIntegrationRPModelsGetStatusOptionalParams,
  OpenAIIntegrationRPModelsListOptionalParams,
  OpenAIIntegrationRPModelsDeleteOptionalParams,
  OpenAIIntegrationRPModelsCreateOrUpdateOptionalParams,
  OpenAIIntegrationRPModelsGetOptionalParams,
} from "../../api/openAIIntegrationRPModels/options.js";
import {
  getStatus,
  list,
  $delete,
  createOrUpdate,
  get,
} from "../../api/openAIIntegrationRPModels/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a OpenAIIntegrationRPModels operations. */
export interface OpenAIIntegrationRPModelsOperations {
  /** Get OpenAI integration status for a given integration. */
  getStatus: (
    resourceGroupName: string,
    monitorName: string,
    integrationName: string,
    options?: OpenAIIntegrationRPModelsGetStatusOptionalParams,
  ) => Promise<OpenAIIntegrationStatusResponse>;
  /** List OpenAI integration rule for a given monitor resource. */
  list: (
    resourceGroupName: string,
    monitorName: string,
    options?: OpenAIIntegrationRPModelsListOptionalParams,
  ) => PagedAsyncIterableIterator<OpenAIIntegrationRPModel>;
  /** Delete OpenAI integration rule for a given monitor resource. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    monitorName: string,
    integrationName: string,
    options?: OpenAIIntegrationRPModelsDeleteOptionalParams,
  ) => Promise<void>;
  /** Create or update a OpenAI integration rule for a given monitor resource. */
  createOrUpdate: (
    resourceGroupName: string,
    monitorName: string,
    integrationName: string,
    body: OpenAIIntegrationRPModel,
    options?: OpenAIIntegrationRPModelsCreateOrUpdateOptionalParams,
  ) => Promise<OpenAIIntegrationRPModel>;
  /** Get OpenAI integration rule for a given monitor resource. */
  get: (
    resourceGroupName: string,
    monitorName: string,
    integrationName: string,
    options?: OpenAIIntegrationRPModelsGetOptionalParams,
  ) => Promise<OpenAIIntegrationRPModel>;
}

function _getOpenAIIntegrationRPModels(context: ElasticContext) {
  return {
    getStatus: (
      resourceGroupName: string,
      monitorName: string,
      integrationName: string,
      options?: OpenAIIntegrationRPModelsGetStatusOptionalParams,
    ) => getStatus(context, resourceGroupName, monitorName, integrationName, options),
    list: (
      resourceGroupName: string,
      monitorName: string,
      options?: OpenAIIntegrationRPModelsListOptionalParams,
    ) => list(context, resourceGroupName, monitorName, options),
    delete: (
      resourceGroupName: string,
      monitorName: string,
      integrationName: string,
      options?: OpenAIIntegrationRPModelsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, monitorName, integrationName, options),
    createOrUpdate: (
      resourceGroupName: string,
      monitorName: string,
      integrationName: string,
      body: OpenAIIntegrationRPModel,
      options?: OpenAIIntegrationRPModelsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, monitorName, integrationName, body, options),
    get: (
      resourceGroupName: string,
      monitorName: string,
      integrationName: string,
      options?: OpenAIIntegrationRPModelsGetOptionalParams,
    ) => get(context, resourceGroupName, monitorName, integrationName, options),
  };
}

export function _getOpenAIIntegrationRPModelsOperations(
  context: ElasticContext,
): OpenAIIntegrationRPModelsOperations {
  return {
    ..._getOpenAIIntegrationRPModels(context),
  };
}
