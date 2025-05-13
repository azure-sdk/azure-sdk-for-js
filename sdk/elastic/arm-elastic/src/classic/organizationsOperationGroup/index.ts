// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticContext } from "../../api/elasticContext.js";
import {
  UserEmailId,
  UserApiKeyResponse,
  ElasticOrganizationToAzureSubscriptionMappingResponse,
} from "../../models/models.js";
import {
  OrganizationsOperationGroupGetElasticToAzureSubscriptionMappingOptionalParams,
  OrganizationsOperationGroupGetApiKeyOptionalParams,
} from "../../api/organizationsOperationGroup/options.js";
import {
  getElasticToAzureSubscriptionMapping,
  getApiKey,
} from "../../api/organizationsOperationGroup/operations.js";

/** Interface representing a OrganizationsOperationGroup operations. */
export interface OrganizationsOperationGroupOperations {
  /**
   * >;
   *   /**
   * Get Elastic Organization To Azure Subscription Mapping details for the logged-in user.
   */
  getElasticToAzureSubscriptionMapping: (
    options?: OrganizationsOperationGroupGetElasticToAzureSubscriptionMappingOptionalParams,
  ) => Promise<ElasticOrganizationToAzureSubscriptionMappingResponse>;
  /** Fetch User API Key from internal database, if it was generated and stored while creating the Elasticsearch Organization. */
  getApiKey: (
    body: UserEmailId,
    options?: OrganizationsOperationGroupGetApiKeyOptionalParams,
  ) => Promise<UserApiKeyResponse>;
}

function _getOrganizationsOperationGroup(context: ElasticContext) {
  return {
    getElasticToAzureSubscriptionMapping: (
      options?: OrganizationsOperationGroupGetElasticToAzureSubscriptionMappingOptionalParams,
    ) => getElasticToAzureSubscriptionMapping(context, options),
    getApiKey: (body: UserEmailId, options?: OrganizationsOperationGroupGetApiKeyOptionalParams) =>
      getApiKey(context, body, options),
  };
}

export function _getOrganizationsOperationGroupOperations(
  context: ElasticContext,
): OrganizationsOperationGroupOperations {
  return {
    ..._getOrganizationsOperationGroup(context),
  };
}
