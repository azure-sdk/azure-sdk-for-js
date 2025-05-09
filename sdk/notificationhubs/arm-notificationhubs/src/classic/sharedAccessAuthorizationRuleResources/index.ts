// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NotificationHubsContext } from "../../api/notificationHubsContext.js";
import {
  SharedAccessAuthorizationRuleResource,
  ResourceListKeys,
  PolicyKeyResource,
} from "../../models/models.js";
import {
  SharedAccessAuthorizationRuleResourcesRegenerateKeysOptionalParams,
  SharedAccessAuthorizationRuleResourcesListKeysOptionalParams,
  SharedAccessAuthorizationRuleResourcesListAuthorizationRulesOptionalParams,
  SharedAccessAuthorizationRuleResourcesDeleteAuthorizationRuleOptionalParams,
  SharedAccessAuthorizationRuleResourcesCreateOrUpdateAuthorizationRuleOptionalParams,
  SharedAccessAuthorizationRuleResourcesGetAuthorizationRuleOptionalParams,
} from "../../api/sharedAccessAuthorizationRuleResources/options.js";
import {
  regenerateKeys,
  listKeys,
  listAuthorizationRules,
  deleteAuthorizationRule,
  createOrUpdateAuthorizationRule,
  getAuthorizationRule,
} from "../../api/sharedAccessAuthorizationRuleResources/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a SharedAccessAuthorizationRuleResources operations. */
export interface SharedAccessAuthorizationRuleResourcesOperations {
  /** Regenerates the Primary/Secondary Keys to the NotificationHub Authorization Rule */
  regenerateKeys: (
    resourceGroupName: string,
    namespaceName: string,
    notificationHubName: string,
    authorizationRuleName: string,
    parameters: PolicyKeyResource,
    options?: SharedAccessAuthorizationRuleResourcesRegenerateKeysOptionalParams,
  ) => Promise<ResourceListKeys>;
  /** Gets the Primary and Secondary ConnectionStrings to the NotificationHub */
  listKeys: (
    resourceGroupName: string,
    namespaceName: string,
    notificationHubName: string,
    authorizationRuleName: string,
    options?: SharedAccessAuthorizationRuleResourcesListKeysOptionalParams,
  ) => Promise<ResourceListKeys>;
  /** Gets the authorization rules for a NotificationHub. */
  listAuthorizationRules: (
    resourceGroupName: string,
    namespaceName: string,
    notificationHubName: string,
    options?: SharedAccessAuthorizationRuleResourcesListAuthorizationRulesOptionalParams,
  ) => PagedAsyncIterableIterator<SharedAccessAuthorizationRuleResource>;
  /** Deletes a notificationHub authorization rule */
  deleteAuthorizationRule: (
    resourceGroupName: string,
    namespaceName: string,
    notificationHubName: string,
    authorizationRuleName: string,
    options?: SharedAccessAuthorizationRuleResourcesDeleteAuthorizationRuleOptionalParams,
  ) => Promise<void>;
  /** Creates/Updates an authorization rule for a NotificationHub */
  createOrUpdateAuthorizationRule: (
    resourceGroupName: string,
    namespaceName: string,
    notificationHubName: string,
    authorizationRuleName: string,
    parameters: SharedAccessAuthorizationRuleResource,
    options?: SharedAccessAuthorizationRuleResourcesCreateOrUpdateAuthorizationRuleOptionalParams,
  ) => Promise<SharedAccessAuthorizationRuleResource>;
  /** Gets an authorization rule for a NotificationHub by name. */
  getAuthorizationRule: (
    resourceGroupName: string,
    namespaceName: string,
    notificationHubName: string,
    authorizationRuleName: string,
    options?: SharedAccessAuthorizationRuleResourcesGetAuthorizationRuleOptionalParams,
  ) => Promise<SharedAccessAuthorizationRuleResource>;
}

function _getSharedAccessAuthorizationRuleResources(context: NotificationHubsContext) {
  return {
    regenerateKeys: (
      resourceGroupName: string,
      namespaceName: string,
      notificationHubName: string,
      authorizationRuleName: string,
      parameters: PolicyKeyResource,
      options?: SharedAccessAuthorizationRuleResourcesRegenerateKeysOptionalParams,
    ) =>
      regenerateKeys(
        context,
        resourceGroupName,
        namespaceName,
        notificationHubName,
        authorizationRuleName,
        parameters,
        options,
      ),
    listKeys: (
      resourceGroupName: string,
      namespaceName: string,
      notificationHubName: string,
      authorizationRuleName: string,
      options?: SharedAccessAuthorizationRuleResourcesListKeysOptionalParams,
    ) =>
      listKeys(
        context,
        resourceGroupName,
        namespaceName,
        notificationHubName,
        authorizationRuleName,
        options,
      ),
    listAuthorizationRules: (
      resourceGroupName: string,
      namespaceName: string,
      notificationHubName: string,
      options?: SharedAccessAuthorizationRuleResourcesListAuthorizationRulesOptionalParams,
    ) =>
      listAuthorizationRules(
        context,
        resourceGroupName,
        namespaceName,
        notificationHubName,
        options,
      ),
    deleteAuthorizationRule: (
      resourceGroupName: string,
      namespaceName: string,
      notificationHubName: string,
      authorizationRuleName: string,
      options?: SharedAccessAuthorizationRuleResourcesDeleteAuthorizationRuleOptionalParams,
    ) =>
      deleteAuthorizationRule(
        context,
        resourceGroupName,
        namespaceName,
        notificationHubName,
        authorizationRuleName,
        options,
      ),
    createOrUpdateAuthorizationRule: (
      resourceGroupName: string,
      namespaceName: string,
      notificationHubName: string,
      authorizationRuleName: string,
      parameters: SharedAccessAuthorizationRuleResource,
      options?: SharedAccessAuthorizationRuleResourcesCreateOrUpdateAuthorizationRuleOptionalParams,
    ) =>
      createOrUpdateAuthorizationRule(
        context,
        resourceGroupName,
        namespaceName,
        notificationHubName,
        authorizationRuleName,
        parameters,
        options,
      ),
    getAuthorizationRule: (
      resourceGroupName: string,
      namespaceName: string,
      notificationHubName: string,
      authorizationRuleName: string,
      options?: SharedAccessAuthorizationRuleResourcesGetAuthorizationRuleOptionalParams,
    ) =>
      getAuthorizationRule(
        context,
        resourceGroupName,
        namespaceName,
        notificationHubName,
        authorizationRuleName,
        options,
      ),
  };
}

export function _getSharedAccessAuthorizationRuleResourcesOperations(
  context: NotificationHubsContext,
): SharedAccessAuthorizationRuleResourcesOperations {
  return {
    ..._getSharedAccessAuthorizationRuleResources(context),
  };
}
