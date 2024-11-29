// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsContext } from "../../api/networkAnalyticsContext.js";
import {
  dataProductsCreate,
  dataProductsGet,
  dataProductsUpdate,
  dataProductsDelete,
  dataProductsGenerateStorageAccountSasToken,
  dataProductsRotateKey,
  dataProductsAddUserRole,
  dataProductsRemoveUserRole,
  dataProductsListRolesAssignments,
  dataProductsListByResourceGroup,
  dataProductsListBySubscription,
} from "../../api/dataProducts/index.js";
import {
  DataProduct,
  DataProductUpdate,
  AccountSas,
  AccountSasToken,
  KeyVaultInfo,
  RoleAssignmentCommonProperties,
  RoleAssignmentDetail,
  ListRoleAssignments,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  DataProductsCreateOptionalParams,
  DataProductsGetOptionalParams,
  DataProductsUpdateOptionalParams,
  DataProductsDeleteOptionalParams,
  DataProductsGenerateStorageAccountSasTokenOptionalParams,
  DataProductsRotateKeyOptionalParams,
  DataProductsAddUserRoleOptionalParams,
  DataProductsRemoveUserRoleOptionalParams,
  DataProductsListRolesAssignmentsOptionalParams,
  DataProductsListByResourceGroupOptionalParams,
  DataProductsListBySubscriptionOptionalParams,
} from "../../api/options.js";

/** Interface representing a DataProducts operations. */
export interface DataProductsOperations {
  /** Create data product resource. */
  create: (
    resourceGroupName: string,
    dataProductName: string,
    resource: DataProduct,
    options?: DataProductsCreateOptionalParams,
  ) => PollerLike<OperationState<DataProduct>, DataProduct>;
  /** Retrieve data product resource. */
  get: (
    resourceGroupName: string,
    dataProductName: string,
    options?: DataProductsGetOptionalParams,
  ) => Promise<DataProduct>;
  /** Update data product resource. */
  update: (
    resourceGroupName: string,
    dataProductName: string,
    properties: DataProductUpdate,
    options?: DataProductsUpdateOptionalParams,
  ) => PollerLike<OperationState<DataProduct>, DataProduct>;
  /** Delete data product resource. */
  delete: (
    resourceGroupName: string,
    dataProductName: string,
    options?: DataProductsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Generate sas token for storage account. */
  generateStorageAccountSasToken: (
    resourceGroupName: string,
    dataProductName: string,
    body: AccountSas,
    options?: DataProductsGenerateStorageAccountSasTokenOptionalParams,
  ) => Promise<AccountSasToken>;
  /** Initiate key rotation on Data Product. */
  rotateKey: (
    resourceGroupName: string,
    dataProductName: string,
    body: KeyVaultInfo,
    options?: DataProductsRotateKeyOptionalParams,
  ) => Promise<void>;
  /** Assign role to the data product. */
  addUserRole: (
    resourceGroupName: string,
    dataProductName: string,
    body: RoleAssignmentCommonProperties,
    options?: DataProductsAddUserRoleOptionalParams,
  ) => Promise<RoleAssignmentDetail>;
  /** Remove role from the data product. */
  removeUserRole: (
    resourceGroupName: string,
    dataProductName: string,
    body: RoleAssignmentDetail,
    options?: DataProductsRemoveUserRoleOptionalParams,
  ) => Promise<void>;
  /** List user roles associated with the data product. */
  listRolesAssignments: (
    resourceGroupName: string,
    dataProductName: string,
    body: Record<string, any>,
    options?: DataProductsListRolesAssignmentsOptionalParams,
  ) => Promise<ListRoleAssignments>;
  /** List data products by resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: DataProductsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<DataProduct>;
  /** List data products by subscription. */
  listBySubscription: (
    options?: DataProductsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<DataProduct>;
}

export function getDataProducts(
  context: NetworkAnalyticsContext,
  subscriptionId: string,
) {
  return {
    create: (
      resourceGroupName: string,
      dataProductName: string,
      resource: DataProduct,
      options?: DataProductsCreateOptionalParams,
    ) =>
      dataProductsCreate(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      dataProductName: string,
      options?: DataProductsGetOptionalParams,
    ) =>
      dataProductsGet(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        options,
      ),
    update: (
      resourceGroupName: string,
      dataProductName: string,
      properties: DataProductUpdate,
      options?: DataProductsUpdateOptionalParams,
    ) =>
      dataProductsUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      dataProductName: string,
      options?: DataProductsDeleteOptionalParams,
    ) =>
      dataProductsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        options,
      ),
    generateStorageAccountSasToken: (
      resourceGroupName: string,
      dataProductName: string,
      body: AccountSas,
      options?: DataProductsGenerateStorageAccountSasTokenOptionalParams,
    ) =>
      dataProductsGenerateStorageAccountSasToken(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        body,
        options,
      ),
    rotateKey: (
      resourceGroupName: string,
      dataProductName: string,
      body: KeyVaultInfo,
      options?: DataProductsRotateKeyOptionalParams,
    ) =>
      dataProductsRotateKey(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        body,
        options,
      ),
    addUserRole: (
      resourceGroupName: string,
      dataProductName: string,
      body: RoleAssignmentCommonProperties,
      options?: DataProductsAddUserRoleOptionalParams,
    ) =>
      dataProductsAddUserRole(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        body,
        options,
      ),
    removeUserRole: (
      resourceGroupName: string,
      dataProductName: string,
      body: RoleAssignmentDetail,
      options?: DataProductsRemoveUserRoleOptionalParams,
    ) =>
      dataProductsRemoveUserRole(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        body,
        options,
      ),
    listRolesAssignments: (
      resourceGroupName: string,
      dataProductName: string,
      body: Record<string, any>,
      options?: DataProductsListRolesAssignmentsOptionalParams,
    ) =>
      dataProductsListRolesAssignments(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        body,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: DataProductsListByResourceGroupOptionalParams,
    ) =>
      dataProductsListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listBySubscription: (
      options?: DataProductsListBySubscriptionOptionalParams,
    ) => dataProductsListBySubscription(context, subscriptionId, options),
  };
}

export function getDataProductsOperations(
  context: NetworkAnalyticsContext,
  subscriptionId: string,
): DataProductsOperations {
  return {
    ...getDataProducts(context, subscriptionId),
  };
}
