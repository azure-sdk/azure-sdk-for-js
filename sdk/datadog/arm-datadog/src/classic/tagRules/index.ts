// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatadogContext } from "../../api/datadogContext.js";
import { MonitoringTagRules } from "../../models/models.js";
import {
  TagRulesListOptionalParams,
  TagRulesCreateOrUpdateOptionalParams,
  TagRulesGetOptionalParams,
} from "../../api/tagRules/options.js";
import { list, createOrUpdate, get } from "../../api/tagRules/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a TagRules operations. */
export interface TagRulesOperations {
  /** List the tag rules for a given monitor resource. */
  list: (
    resourceGroupName: string,
    monitorName: string,
    options?: TagRulesListOptionalParams,
  ) => PagedAsyncIterableIterator<MonitoringTagRules>;
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

function _getTagRules(context: DatadogContext) {
  return {
    list: (resourceGroupName: string, monitorName: string, options?: TagRulesListOptionalParams) =>
      list(context, resourceGroupName, monitorName, options),
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

export function _getTagRulesOperations(context: DatadogContext): TagRulesOperations {
  return {
    ..._getTagRules(context),
  };
}
