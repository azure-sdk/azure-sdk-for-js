// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  NetworkAnalyticsContext as Client,
  DataProductsAddUserRoleOptionalParams,
  DataProductsCreateOptionalParams,
  DataProductsDeleteOptionalParams,
  DataProductsGenerateStorageAccountSasTokenOptionalParams,
  DataProductsGetOptionalParams,
  DataProductsListByResourceGroupOptionalParams,
  DataProductsListBySubscriptionOptionalParams,
  DataProductsListRolesAssignmentsOptionalParams,
  DataProductsRemoveUserRoleOptionalParams,
  DataProductsRotateKeyOptionalParams,
  DataProductsUpdateOptionalParams,
} from "../index.js";
import {
  DataProduct,
  dataProductSerializer,
  dataProductDeserializer,
  DataProductUpdate,
  dataProductUpdateSerializer,
  AccountSas,
  accountSasSerializer,
  AccountSasToken,
  accountSasTokenDeserializer,
  KeyVaultInfo,
  keyVaultInfoSerializer,
  RoleAssignmentCommonProperties,
  roleAssignmentCommonPropertiesSerializer,
  RoleAssignmentDetail,
  roleAssignmentDetailSerializer,
  roleAssignmentDetailDeserializer,
  _listRolesAssignmentsRequestSerializer,
  ListRoleAssignments,
  listRoleAssignmentsDeserializer,
  _DataProductListResult,
  _dataProductListResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _dataProductsCreateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  resource: DataProduct,
  options: DataProductsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}",
      subscriptionId,
      resourceGroupName,
      dataProductName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: dataProductSerializer(resource),
    });
}

export async function _dataProductsCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<DataProduct> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return dataProductDeserializer(result.body);
}

/** Create data product resource. */
export function dataProductsCreate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  resource: DataProduct,
  options: DataProductsCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<DataProduct>, DataProduct> {
  return getLongRunningPoller(
    context,
    _dataProductsCreateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _dataProductsCreateSend(
          context,
          subscriptionId,
          resourceGroupName,
          dataProductName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<DataProduct>, DataProduct>;
}

export function _dataProductsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  options: DataProductsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}",
      subscriptionId,
      resourceGroupName,
      dataProductName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _dataProductsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<DataProduct> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return dataProductDeserializer(result.body);
}

/** Retrieve data product resource. */
export async function dataProductsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  options: DataProductsGetOptionalParams = { requestOptions: {} },
): Promise<DataProduct> {
  const result = await _dataProductsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    dataProductName,
    options,
  );
  return _dataProductsGetDeserialize(result);
}

export function _dataProductsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  properties: DataProductUpdate,
  options: DataProductsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}",
      subscriptionId,
      resourceGroupName,
      dataProductName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: dataProductUpdateSerializer(properties),
    });
}

export async function _dataProductsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<DataProduct> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return dataProductDeserializer(result.body);
}

/** Update data product resource. */
export function dataProductsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  properties: DataProductUpdate,
  options: DataProductsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<DataProduct>, DataProduct> {
  return getLongRunningPoller(
    context,
    _dataProductsUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _dataProductsUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          dataProductName,
          properties,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<DataProduct>, DataProduct>;
}

export function _dataProductsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  options: DataProductsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}",
      subscriptionId,
      resourceGroupName,
      dataProductName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _dataProductsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete data product resource. */
export function dataProductsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  options: DataProductsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _dataProductsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _dataProductsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          dataProductName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _dataProductsGenerateStorageAccountSasTokenSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  body: AccountSas,
  options: DataProductsGenerateStorageAccountSasTokenOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/generateStorageAccountSasToken",
      subscriptionId,
      resourceGroupName,
      dataProductName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: accountSasSerializer(body),
    });
}

export async function _dataProductsGenerateStorageAccountSasTokenDeserialize(
  result: PathUncheckedResponse,
): Promise<AccountSasToken> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return accountSasTokenDeserializer(result.body);
}

/** Generate sas token for storage account. */
export async function dataProductsGenerateStorageAccountSasToken(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  body: AccountSas,
  options: DataProductsGenerateStorageAccountSasTokenOptionalParams = {
    requestOptions: {},
  },
): Promise<AccountSasToken> {
  const result = await _dataProductsGenerateStorageAccountSasTokenSend(
    context,
    subscriptionId,
    resourceGroupName,
    dataProductName,
    body,
    options,
  );
  return _dataProductsGenerateStorageAccountSasTokenDeserialize(result);
}

export function _dataProductsRotateKeySend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  body: KeyVaultInfo,
  options: DataProductsRotateKeyOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/rotateKey",
      subscriptionId,
      resourceGroupName,
      dataProductName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: keyVaultInfoSerializer(body),
    });
}

export async function _dataProductsRotateKeyDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Initiate key rotation on Data Product. */
export async function dataProductsRotateKey(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  body: KeyVaultInfo,
  options: DataProductsRotateKeyOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _dataProductsRotateKeySend(
    context,
    subscriptionId,
    resourceGroupName,
    dataProductName,
    body,
    options,
  );
  return _dataProductsRotateKeyDeserialize(result);
}

export function _dataProductsAddUserRoleSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  body: RoleAssignmentCommonProperties,
  options: DataProductsAddUserRoleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/addUserRole",
      subscriptionId,
      resourceGroupName,
      dataProductName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: roleAssignmentCommonPropertiesSerializer(body),
    });
}

export async function _dataProductsAddUserRoleDeserialize(
  result: PathUncheckedResponse,
): Promise<RoleAssignmentDetail> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return roleAssignmentDetailDeserializer(result.body);
}

/** Assign role to the data product. */
export async function dataProductsAddUserRole(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  body: RoleAssignmentCommonProperties,
  options: DataProductsAddUserRoleOptionalParams = { requestOptions: {} },
): Promise<RoleAssignmentDetail> {
  const result = await _dataProductsAddUserRoleSend(
    context,
    subscriptionId,
    resourceGroupName,
    dataProductName,
    body,
    options,
  );
  return _dataProductsAddUserRoleDeserialize(result);
}

export function _dataProductsRemoveUserRoleSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  body: RoleAssignmentDetail,
  options: DataProductsRemoveUserRoleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/removeUserRole",
      subscriptionId,
      resourceGroupName,
      dataProductName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: roleAssignmentDetailSerializer(body),
    });
}

export async function _dataProductsRemoveUserRoleDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Remove role from the data product. */
export async function dataProductsRemoveUserRole(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  body: RoleAssignmentDetail,
  options: DataProductsRemoveUserRoleOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _dataProductsRemoveUserRoleSend(
    context,
    subscriptionId,
    resourceGroupName,
    dataProductName,
    body,
    options,
  );
  return _dataProductsRemoveUserRoleDeserialize(result);
}

export function _dataProductsListRolesAssignmentsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  body: Record<string, any>,
  options: DataProductsListRolesAssignmentsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/listRolesAssignments",
      subscriptionId,
      resourceGroupName,
      dataProductName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: _listRolesAssignmentsRequestSerializer(body),
    });
}

export async function _dataProductsListRolesAssignmentsDeserialize(
  result: PathUncheckedResponse,
): Promise<ListRoleAssignments> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return listRoleAssignmentsDeserializer(result.body);
}

/** List user roles associated with the data product. */
export async function dataProductsListRolesAssignments(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  body: Record<string, any>,
  options: DataProductsListRolesAssignmentsOptionalParams = {
    requestOptions: {},
  },
): Promise<ListRoleAssignments> {
  const result = await _dataProductsListRolesAssignmentsSend(
    context,
    subscriptionId,
    resourceGroupName,
    dataProductName,
    body,
    options,
  );
  return _dataProductsListRolesAssignmentsDeserialize(result);
}

export function _dataProductsListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: DataProductsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _dataProductsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_DataProductListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _dataProductListResultDeserializer(result.body);
}

/** List data products by resource group. */
export function dataProductsListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: DataProductsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<DataProduct> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _dataProductsListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _dataProductsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _dataProductsListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: DataProductsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkAnalytics/dataProducts",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _dataProductsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_DataProductListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _dataProductListResultDeserializer(result.body);
}

/** List data products by subscription. */
export function dataProductsListBySubscription(
  context: Client,
  subscriptionId: string,
  options: DataProductsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<DataProduct> {
  return buildPagedAsyncIterator(
    context,
    () => _dataProductsListBySubscriptionSend(context, subscriptionId, options),
    _dataProductsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
