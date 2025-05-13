// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticContext } from "../../api/elasticContext.js";
import { MonitoringTagRules } from "../../models/models.js";
import {
  TagRulesListOptionalParams,
  TagRulesDeleteOptionalParams,
  TagRulesCreateOrUpdateOptionalParams,
  TagRulesGetOptionalParams,
} from "../../api/tagRules/options.js";
import { list, $delete, createOrUpdate, get } from "../../api/tagRules/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a TagRules operations. */
export interface TagRulesOperations {
  /** List the tag rules for a given monitor resource. */
  list: (
    resourceGroupName: string,
    monitorName: string,
    options?: TagRulesListOptionalParams,
  ) => PagedAsyncIterableIterator<MonitoringTagRules>;
  /** Delete a tag rule set for a given monitor resource. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    monitorName: string,
    ruleSetName: string,
    options?: TagRulesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create or update a tag rule set for a given monitor resource. */
  createOrUpdate: (
    resourceGroupName: string,
    monitorName: string,
    ruleSetName: string,
    body: MonitoringTagRules,
    options?: TagRulesCreateOrUpdateOptionalParams,
  ) => Promise<MonitoringTagRules>;
  /** Get a tag rule set for a given monitor resource. */
  get: (
    resourceGroupName: string,
    monitorName: string,
    ruleSetName: string,
    options?: TagRulesGetOptionalParams,
  ) => Promise<MonitoringTagRules>;
}

function _getTagRules(context: ElasticContext) {
  return {
    list: (resourceGroupName: string, monitorName: string, options?: TagRulesListOptionalParams) =>
      list(context, resourceGroupName, monitorName, options),
    delete: (
      resourceGroupName: string,
      monitorName: string,
      ruleSetName: string,
      options?: TagRulesDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, monitorName, ruleSetName, options),
    createOrUpdate: (
      resourceGroupName: string,
      monitorName: string,
      ruleSetName: string,
      body: MonitoringTagRules,
      options?: TagRulesCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, monitorName, ruleSetName, body, options),
    get: (
      resourceGroupName: string,
      monitorName: string,
      ruleSetName: string,
      options?: TagRulesGetOptionalParams,
    ) => get(context, resourceGroupName, monitorName, ruleSetName, options),
  };
}

export function _getTagRulesOperations(context: ElasticContext): TagRulesOperations {
  return {
    ..._getTagRules(context),
  };
}
