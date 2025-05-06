// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ConnectedCacheContext } from "../../api/connectedCacheContext.js";
import {
  ConnectedCachePatchResource,
  IspCacheNodeResource,
  MccCacheNodeBgpCidrDetails,
  MccCacheNodeInstallDetails,
  MccCacheNodeAutoUpdateHistory,
  MccCacheNodeIssueHistory,
} from "../../models/models.js";
import {
  IspCacheNodesOperationsGetCacheNodeMccIssueDetailsHistoryOptionalParams,
  IspCacheNodesOperationsGetCacheNodeAutoUpdateHistoryOptionalParams,
  IspCacheNodesOperationsGetCacheNodeInstallDetailsOptionalParams,
  IspCacheNodesOperationsGetBgpCidrsOptionalParams,
  IspCacheNodesOperationsListByIspCustomerResourceOptionalParams,
  IspCacheNodesOperationsDeleteOptionalParams,
  IspCacheNodesOperationsUpdateOptionalParams,
  IspCacheNodesOperationsCreateOrUpdateOptionalParams,
  IspCacheNodesOperationsGetOptionalParams,
} from "../../api/ispCacheNodesOperations/options.js";
import {
  ispCacheNodesOperationsGetCacheNodeMccIssueDetailsHistory,
  ispCacheNodesOperationsGetCacheNodeAutoUpdateHistory,
  ispCacheNodesOperationsGetCacheNodeInstallDetails,
  ispCacheNodesOperationsGetBgpCidrs,
  ispCacheNodesOperationsListByIspCustomerResource,
  ispCacheNodesOperationsDelete,
  ispCacheNodesOperationsUpdate,
  ispCacheNodesOperationsCreateOrUpdate,
  ispCacheNodesOperationsGet,
} from "../../api/ispCacheNodesOperations/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a IspCacheNodesOperations operations. */
export interface IspCacheNodesOperationsOperations {
  /** This api gets ispCacheNode resource issues details histrory information */
  getCacheNodeMccIssueDetailsHistory: (
    resourceGroupName: string,
    customerResourceName: string,
    cacheNodeResourceName: string,
    options?: IspCacheNodesOperationsGetCacheNodeMccIssueDetailsHistoryOptionalParams,
  ) => Promise<MccCacheNodeIssueHistory>;
  /** This api gets ispCacheNode resource auto update histrory information */
  getCacheNodeAutoUpdateHistory: (
    resourceGroupName: string,
    customerResourceName: string,
    cacheNodeResourceName: string,
    options?: IspCacheNodesOperationsGetCacheNodeAutoUpdateHistoryOptionalParams,
  ) => Promise<MccCacheNodeAutoUpdateHistory>;
  /** This api gets secrets of the ispCacheNode resource install details */
  getCacheNodeInstallDetails: (
    resourceGroupName: string,
    customerResourceName: string,
    cacheNodeResourceName: string,
    options?: IspCacheNodesOperationsGetCacheNodeInstallDetailsOptionalParams,
  ) => Promise<MccCacheNodeInstallDetails>;
  /** This api gets ispCacheNode resource information */
  getBgpCidrs: (
    resourceGroupName: string,
    customerResourceName: string,
    cacheNodeResourceName: string,
    options?: IspCacheNodesOperationsGetBgpCidrsOptionalParams,
  ) => Promise<MccCacheNodeBgpCidrDetails>;
  /** This api retrieves information about all ispCacheNode resources under the given subscription and resource group */
  listByIspCustomerResource: (
    resourceGroupName: string,
    customerResourceName: string,
    options?: IspCacheNodesOperationsListByIspCustomerResourceOptionalParams,
  ) => PagedAsyncIterableIterator<IspCacheNodeResource>;
  /** This api deletes an existing ispCacheNode resource */
  delete: (
    resourceGroupName: string,
    customerResourceName: string,
    cacheNodeResourceName: string,
    options?: IspCacheNodesOperationsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** This api updates an existing ispCacheNode resource */
  update: (
    resourceGroupName: string,
    customerResourceName: string,
    cacheNodeResourceName: string,
    properties: ConnectedCachePatchResource,
    options?: IspCacheNodesOperationsUpdateOptionalParams,
  ) => Promise<IspCacheNodeResource>;
  /** This api creates an ispCacheNode with the specified create parameters */
  createOrUpdate: (
    resourceGroupName: string,
    customerResourceName: string,
    cacheNodeResourceName: string,
    resource: IspCacheNodeResource,
    options?: IspCacheNodesOperationsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<IspCacheNodeResource>, IspCacheNodeResource>;
  /** This api gets ispCacheNode resource information */
  get: (
    resourceGroupName: string,
    customerResourceName: string,
    cacheNodeResourceName: string,
    options?: IspCacheNodesOperationsGetOptionalParams,
  ) => Promise<IspCacheNodeResource>;
}

function _getIspCacheNodesOperations(context: ConnectedCacheContext) {
  return {
    getCacheNodeMccIssueDetailsHistory: (
      resourceGroupName: string,
      customerResourceName: string,
      cacheNodeResourceName: string,
      options?: IspCacheNodesOperationsGetCacheNodeMccIssueDetailsHistoryOptionalParams,
    ) =>
      ispCacheNodesOperationsGetCacheNodeMccIssueDetailsHistory(
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
      options?: IspCacheNodesOperationsGetCacheNodeAutoUpdateHistoryOptionalParams,
    ) =>
      ispCacheNodesOperationsGetCacheNodeAutoUpdateHistory(
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
      options?: IspCacheNodesOperationsGetCacheNodeInstallDetailsOptionalParams,
    ) =>
      ispCacheNodesOperationsGetCacheNodeInstallDetails(
        context,
        resourceGroupName,
        customerResourceName,
        cacheNodeResourceName,
        options,
      ),
    getBgpCidrs: (
      resourceGroupName: string,
      customerResourceName: string,
      cacheNodeResourceName: string,
      options?: IspCacheNodesOperationsGetBgpCidrsOptionalParams,
    ) =>
      ispCacheNodesOperationsGetBgpCidrs(
        context,
        resourceGroupName,
        customerResourceName,
        cacheNodeResourceName,
        options,
      ),
    listByIspCustomerResource: (
      resourceGroupName: string,
      customerResourceName: string,
      options?: IspCacheNodesOperationsListByIspCustomerResourceOptionalParams,
    ) =>
      ispCacheNodesOperationsListByIspCustomerResource(
        context,
        resourceGroupName,
        customerResourceName,
        options,
      ),
    delete: (
      resourceGroupName: string,
      customerResourceName: string,
      cacheNodeResourceName: string,
      options?: IspCacheNodesOperationsDeleteOptionalParams,
    ) =>
      ispCacheNodesOperationsDelete(
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
      options?: IspCacheNodesOperationsUpdateOptionalParams,
    ) =>
      ispCacheNodesOperationsUpdate(
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
      resource: IspCacheNodeResource,
      options?: IspCacheNodesOperationsCreateOrUpdateOptionalParams,
    ) =>
      ispCacheNodesOperationsCreateOrUpdate(
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
      options?: IspCacheNodesOperationsGetOptionalParams,
    ) =>
      ispCacheNodesOperationsGet(
        context,
        resourceGroupName,
        customerResourceName,
        cacheNodeResourceName,
        options,
      ),
  };
}

export function _getIspCacheNodesOperationsOperations(
  context: ConnectedCacheContext,
): IspCacheNodesOperationsOperations {
  return {
    ..._getIspCacheNodesOperations(context),
  };
}
