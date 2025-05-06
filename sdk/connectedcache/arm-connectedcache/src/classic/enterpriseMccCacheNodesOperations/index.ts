// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ConnectedCacheContext } from "../../api/connectedCacheContext.js";
import {
  ConnectedCachePatchResource,
  MccCacheNodeInstallDetails,
  MccCacheNodeAutoUpdateHistory,
  MccCacheNodeIssueHistory,
  EnterpriseMccCacheNodeResource,
  MccCacheNodeTlsCertificateHistory,
} from "../../models/models.js";
import {
  EnterpriseMccCacheNodesOperationsGetCacheNodeTlsCertificateHistoryOptionalParams,
  EnterpriseMccCacheNodesOperationsGetCacheNodeMccIssueDetailsHistoryOptionalParams,
  EnterpriseMccCacheNodesOperationsGetCacheNodeAutoUpdateHistoryOptionalParams,
  EnterpriseMccCacheNodesOperationsGetCacheNodeInstallDetailsOptionalParams,
  EnterpriseMccCacheNodesOperationsListByEnterpriseMccCustomerResourceOptionalParams,
  EnterpriseMccCacheNodesOperationsDeleteOptionalParams,
  EnterpriseMccCacheNodesOperationsUpdateOptionalParams,
  EnterpriseMccCacheNodesOperationsCreateOrUpdateOptionalParams,
  EnterpriseMccCacheNodesOperationsGetOptionalParams,
} from "../../api/enterpriseMccCacheNodesOperations/options.js";
import {
  enterpriseMccCacheNodesOperationsGetCacheNodeTlsCertificateHistory,
  enterpriseMccCacheNodesOperationsGetCacheNodeMccIssueDetailsHistory,
  enterpriseMccCacheNodesOperationsGetCacheNodeAutoUpdateHistory,
  enterpriseMccCacheNodesOperationsGetCacheNodeInstallDetails,
  enterpriseMccCacheNodesOperationsListByEnterpriseMccCustomerResource,
  enterpriseMccCacheNodesOperationsDelete,
  enterpriseMccCacheNodesOperationsUpdate,
  enterpriseMccCacheNodesOperationsCreateOrUpdate,
  enterpriseMccCacheNodesOperationsGet,
} from "../../api/enterpriseMccCacheNodesOperations/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a EnterpriseMccCacheNodesOperations operations. */
export interface EnterpriseMccCacheNodesOperationsOperations {
  /** This api gets ispCacheNode resource tls certificate histrory information */
  getCacheNodeTlsCertificateHistory: (
    resourceGroupName: string,
    customerResourceName: string,
    cacheNodeResourceName: string,
    options?: EnterpriseMccCacheNodesOperationsGetCacheNodeTlsCertificateHistoryOptionalParams,
  ) => Promise<MccCacheNodeTlsCertificateHistory>;
  /** This api gets ispCacheNode resource issues details histrory information */
  getCacheNodeMccIssueDetailsHistory: (
    resourceGroupName: string,
    customerResourceName: string,
    cacheNodeResourceName: string,
    options?: EnterpriseMccCacheNodesOperationsGetCacheNodeMccIssueDetailsHistoryOptionalParams,
  ) => Promise<MccCacheNodeIssueHistory>;
  /** This api gets ispCacheNode resource auto update histrory information */
  getCacheNodeAutoUpdateHistory: (
    resourceGroupName: string,
    customerResourceName: string,
    cacheNodeResourceName: string,
    options?: EnterpriseMccCacheNodesOperationsGetCacheNodeAutoUpdateHistoryOptionalParams,
  ) => Promise<MccCacheNodeAutoUpdateHistory>;
  /** This api gets secrets of the ispCacheNode resource install details */
  getCacheNodeInstallDetails: (
    resourceGroupName: string,
    customerResourceName: string,
    cacheNodeResourceName: string,
    options?: EnterpriseMccCacheNodesOperationsGetCacheNodeInstallDetailsOptionalParams,
  ) => Promise<MccCacheNodeInstallDetails>;
  /** This api retrieves information about all ispCacheNode resources under the given subscription and resource group */
  listByEnterpriseMccCustomerResource: (
    resourceGroupName: string,
    customerResourceName: string,
    options?: EnterpriseMccCacheNodesOperationsListByEnterpriseMccCustomerResourceOptionalParams,
  ) => PagedAsyncIterableIterator<EnterpriseMccCacheNodeResource>;
  /** This api deletes an existing ispCacheNode resource */
  delete: (
    resourceGroupName: string,
    customerResourceName: string,
    cacheNodeResourceName: string,
    options?: EnterpriseMccCacheNodesOperationsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** This api updates an existing ispCacheNode resource */
  update: (
    resourceGroupName: string,
    customerResourceName: string,
    cacheNodeResourceName: string,
    properties: ConnectedCachePatchResource,
    options?: EnterpriseMccCacheNodesOperationsUpdateOptionalParams,
  ) => Promise<EnterpriseMccCacheNodeResource>;
  /** This api creates an ispCacheNode with the specified create parameters */
  createOrUpdate: (
    resourceGroupName: string,
    customerResourceName: string,
    cacheNodeResourceName: string,
    resource: EnterpriseMccCacheNodeResource,
    options?: EnterpriseMccCacheNodesOperationsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<EnterpriseMccCacheNodeResource>, EnterpriseMccCacheNodeResource>;
  /** This api gets ispCacheNode resource information */
  get: (
    resourceGroupName: string,
    customerResourceName: string,
    cacheNodeResourceName: string,
    options?: EnterpriseMccCacheNodesOperationsGetOptionalParams,
  ) => Promise<EnterpriseMccCacheNodeResource>;
}

function _getEnterpriseMccCacheNodesOperations(context: ConnectedCacheContext) {
  return {
    getCacheNodeTlsCertificateHistory: (
      resourceGroupName: string,
      customerResourceName: string,
      cacheNodeResourceName: string,
      options?: EnterpriseMccCacheNodesOperationsGetCacheNodeTlsCertificateHistoryOptionalParams,
    ) =>
      enterpriseMccCacheNodesOperationsGetCacheNodeTlsCertificateHistory(
        context,
        resourceGroupName,
        customerResourceName,
        cacheNodeResourceName,
        options,
      ),
    getCacheNodeMccIssueDetailsHistory: (
      resourceGroupName: string,
      customerResourceName: string,
      cacheNodeResourceName: string,
      options?: EnterpriseMccCacheNodesOperationsGetCacheNodeMccIssueDetailsHistoryOptionalParams,
    ) =>
      enterpriseMccCacheNodesOperationsGetCacheNodeMccIssueDetailsHistory(
        context,
        resourceGroupName,
        customerResourceName,
        cacheNodeResourceName,
        options,
      ),
    getCacheNodeAutoUpdateHistory: (
      resourceGroupName: string,
      customerResourceName: string,
      cacheNodeResourceName: string,
      options?: EnterpriseMccCacheNodesOperationsGetCacheNodeAutoUpdateHistoryOptionalParams,
    ) =>
      enterpriseMccCacheNodesOperationsGetCacheNodeAutoUpdateHistory(
        context,
        resourceGroupName,
        customerResourceName,
        cacheNodeResourceName,
        options,
      ),
    getCacheNodeInstallDetails: (
      resourceGroupName: string,
      customerResourceName: string,
      cacheNodeResourceName: string,
      options?: EnterpriseMccCacheNodesOperationsGetCacheNodeInstallDetailsOptionalParams,
    ) =>
      enterpriseMccCacheNodesOperationsGetCacheNodeInstallDetails(
        context,
        resourceGroupName,
        customerResourceName,
        cacheNodeResourceName,
        options,
      ),
    listByEnterpriseMccCustomerResource: (
      resourceGroupName: string,
      customerResourceName: string,
      options?: EnterpriseMccCacheNodesOperationsListByEnterpriseMccCustomerResourceOptionalParams,
    ) =>
      enterpriseMccCacheNodesOperationsListByEnterpriseMccCustomerResource(
        context,
        resourceGroupName,
        customerResourceName,
        options,
      ),
    delete: (
      resourceGroupName: string,
      customerResourceName: string,
      cacheNodeResourceName: string,
      options?: EnterpriseMccCacheNodesOperationsDeleteOptionalParams,
    ) =>
      enterpriseMccCacheNodesOperationsDelete(
        context,
        resourceGroupName,
        customerResourceName,
        cacheNodeResourceName,
        options,
      ),
    update: (
      resourceGroupName: string,
      customerResourceName: string,
      cacheNodeResourceName: string,
      properties: ConnectedCachePatchResource,
      options?: EnterpriseMccCacheNodesOperationsUpdateOptionalParams,
    ) =>
      enterpriseMccCacheNodesOperationsUpdate(
        context,
        resourceGroupName,
        customerResourceName,
        cacheNodeResourceName,
        properties,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      customerResourceName: string,
      cacheNodeResourceName: string,
      resource: EnterpriseMccCacheNodeResource,
      options?: EnterpriseMccCacheNodesOperationsCreateOrUpdateOptionalParams,
    ) =>
      enterpriseMccCacheNodesOperationsCreateOrUpdate(
        context,
        resourceGroupName,
        customerResourceName,
        cacheNodeResourceName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      customerResourceName: string,
      cacheNodeResourceName: string,
      options?: EnterpriseMccCacheNodesOperationsGetOptionalParams,
    ) =>
      enterpriseMccCacheNodesOperationsGet(
        context,
        resourceGroupName,
        customerResourceName,
        cacheNodeResourceName,
        options,
      ),
  };
}

export function _getEnterpriseMccCacheNodesOperationsOperations(
  context: ConnectedCacheContext,
): EnterpriseMccCacheNodesOperationsOperations {
  return {
    ..._getEnterpriseMccCacheNodesOperations(context),
  };
}
