// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  dataProductPropertiesSerializer,
  managedServiceIdentityV4Serializer,
  dataProductUpdatePropertiesSerializer,
  DataProduct,
  DataProductUpdate,
  AccountSas,
  AccountSasToken,
  KeyVaultInfo,
  RoleAssignmentCommonProperties,
  RoleAssignmentDetail,
  ListRoleAssignments,
  _DataProductListResult,
} from "../../models/models.js";
import { NetworkAnalyticsContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
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
} from "../../models/options.js";

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
      body: {
        tags: !resource.tags
          ? resource.tags
          : (serializeRecord(resource.tags as any) as any),
        location: resource["location"],
        properties: !resource.properties
          ? resource.properties
          : dataProductPropertiesSerializer(resource.properties),
        identity: !resource.identity
          ? resource.identity
          : managedServiceIdentityV4Serializer(resource.identity),
      },
    });
}

export async function _dataProductsCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<DataProduct> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    tags: result.body["tags"],
    location: result.body["location"],
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          resourceGuid: result.body.properties?.["resourceGuid"],
          provisioningState: result.body.properties?.["provisioningState"],
          publisher: result.body.properties?.["publisher"],
          product: result.body.properties?.["product"],
          majorVersion: result.body.properties?.["majorVersion"],
          owners: result.body.properties?.["owners"],
          redundancy: result.body.properties?.["redundancy"],
          purviewAccount: result.body.properties?.["purviewAccount"],
          purviewCollection: result.body.properties?.["purviewCollection"],
          privateLinksEnabled: result.body.properties?.["privateLinksEnabled"],
          publicNetworkAccess: result.body.properties?.["publicNetworkAccess"],
          customerManagedKeyEncryptionEnabled:
            result.body.properties?.["customerManagedKeyEncryptionEnabled"],
          customerEncryptionKey: !result.body.properties?.customerEncryptionKey
            ? undefined
            : {
                keyVaultUri:
                  result.body.properties?.customerEncryptionKey?.[
                    "keyVaultUri"
                  ],
                keyName:
                  result.body.properties?.customerEncryptionKey?.["keyName"],
                keyVersion:
                  result.body.properties?.customerEncryptionKey?.["keyVersion"],
              },
          networkacls: !result.body.properties?.networkacls
            ? undefined
            : {
                virtualNetworkRule: result.body.properties?.networkacls?.[
                  "virtualNetworkRule"
                ].map((p: any) => {
                  return {
                    id: p["id"],
                    action: p["action"],
                    state: p["state"],
                  };
                }),
                ipRules: result.body.properties?.networkacls?.["ipRules"].map(
                  (p: any) => {
                    return { value: p["value"], action: p["action"] };
                  },
                ),
                allowedQueryIpRangeList:
                  result.body.properties?.networkacls?.[
                    "allowedQueryIpRangeList"
                  ],
                defaultAction:
                  result.body.properties?.networkacls?.["defaultAction"],
              },
          managedResourceGroupConfiguration: !result.body.properties
            ?.managedResourceGroupConfiguration
            ? undefined
            : {
                name: result.body.properties
                  ?.managedResourceGroupConfiguration?.["name"],
                location:
                  result.body.properties?.managedResourceGroupConfiguration?.[
                    "location"
                  ],
              },
          availableMinorVersions:
            result.body.properties?.["availableMinorVersions"],
          currentMinorVersion: result.body.properties?.["currentMinorVersion"],
          documentation: result.body.properties?.["documentation"],
          consumptionEndpoints: !result.body.properties?.consumptionEndpoints
            ? undefined
            : {
                ingestionUrl:
                  result.body.properties?.consumptionEndpoints?.[
                    "ingestionUrl"
                  ],
                ingestionResourceId:
                  result.body.properties?.consumptionEndpoints?.[
                    "ingestionResourceId"
                  ],
                fileAccessUrl:
                  result.body.properties?.consumptionEndpoints?.[
                    "fileAccessUrl"
                  ],
                fileAccessResourceId:
                  result.body.properties?.consumptionEndpoints?.[
                    "fileAccessResourceId"
                  ],
                queryUrl:
                  result.body.properties?.consumptionEndpoints?.["queryUrl"],
                queryResourceId:
                  result.body.properties?.consumptionEndpoints?.[
                    "queryResourceId"
                  ],
              },
          keyVaultUrl: result.body.properties?.["keyVaultUrl"],
        },
    identity: !result.body.identity
      ? undefined
      : {
          principalId: result.body.identity?.["principalId"],
          tenantId: result.body.identity?.["tenantId"],
          type: result.body.identity?.["type"],
          userAssignedIdentities:
            result.body.identity?.["userAssignedIdentities"],
        },
  };
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

  return {
    tags: result.body["tags"],
    location: result.body["location"],
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          resourceGuid: result.body.properties?.["resourceGuid"],
          provisioningState: result.body.properties?.["provisioningState"],
          publisher: result.body.properties?.["publisher"],
          product: result.body.properties?.["product"],
          majorVersion: result.body.properties?.["majorVersion"],
          owners: result.body.properties?.["owners"],
          redundancy: result.body.properties?.["redundancy"],
          purviewAccount: result.body.properties?.["purviewAccount"],
          purviewCollection: result.body.properties?.["purviewCollection"],
          privateLinksEnabled: result.body.properties?.["privateLinksEnabled"],
          publicNetworkAccess: result.body.properties?.["publicNetworkAccess"],
          customerManagedKeyEncryptionEnabled:
            result.body.properties?.["customerManagedKeyEncryptionEnabled"],
          customerEncryptionKey: !result.body.properties?.customerEncryptionKey
            ? undefined
            : {
                keyVaultUri:
                  result.body.properties?.customerEncryptionKey?.[
                    "keyVaultUri"
                  ],
                keyName:
                  result.body.properties?.customerEncryptionKey?.["keyName"],
                keyVersion:
                  result.body.properties?.customerEncryptionKey?.["keyVersion"],
              },
          networkacls: !result.body.properties?.networkacls
            ? undefined
            : {
                virtualNetworkRule: result.body.properties?.networkacls?.[
                  "virtualNetworkRule"
                ].map((p: any) => {
                  return {
                    id: p["id"],
                    action: p["action"],
                    state: p["state"],
                  };
                }),
                ipRules: result.body.properties?.networkacls?.["ipRules"].map(
                  (p: any) => {
                    return { value: p["value"], action: p["action"] };
                  },
                ),
                allowedQueryIpRangeList:
                  result.body.properties?.networkacls?.[
                    "allowedQueryIpRangeList"
                  ],
                defaultAction:
                  result.body.properties?.networkacls?.["defaultAction"],
              },
          managedResourceGroupConfiguration: !result.body.properties
            ?.managedResourceGroupConfiguration
            ? undefined
            : {
                name: result.body.properties
                  ?.managedResourceGroupConfiguration?.["name"],
                location:
                  result.body.properties?.managedResourceGroupConfiguration?.[
                    "location"
                  ],
              },
          availableMinorVersions:
            result.body.properties?.["availableMinorVersions"],
          currentMinorVersion: result.body.properties?.["currentMinorVersion"],
          documentation: result.body.properties?.["documentation"],
          consumptionEndpoints: !result.body.properties?.consumptionEndpoints
            ? undefined
            : {
                ingestionUrl:
                  result.body.properties?.consumptionEndpoints?.[
                    "ingestionUrl"
                  ],
                ingestionResourceId:
                  result.body.properties?.consumptionEndpoints?.[
                    "ingestionResourceId"
                  ],
                fileAccessUrl:
                  result.body.properties?.consumptionEndpoints?.[
                    "fileAccessUrl"
                  ],
                fileAccessResourceId:
                  result.body.properties?.consumptionEndpoints?.[
                    "fileAccessResourceId"
                  ],
                queryUrl:
                  result.body.properties?.consumptionEndpoints?.["queryUrl"],
                queryResourceId:
                  result.body.properties?.consumptionEndpoints?.[
                    "queryResourceId"
                  ],
              },
          keyVaultUrl: result.body.properties?.["keyVaultUrl"],
        },
    identity: !result.body.identity
      ? undefined
      : {
          principalId: result.body.identity?.["principalId"],
          tenantId: result.body.identity?.["tenantId"],
          type: result.body.identity?.["type"],
          userAssignedIdentities:
            result.body.identity?.["userAssignedIdentities"],
        },
  };
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
      body: {
        identity: !properties.identity
          ? properties.identity
          : managedServiceIdentityV4Serializer(properties.identity),
        tags: !properties.tags
          ? properties.tags
          : (serializeRecord(properties.tags as any) as any),
        properties: !properties.properties
          ? properties.properties
          : dataProductUpdatePropertiesSerializer(properties.properties),
      },
    });
}

export async function _dataProductsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<DataProduct> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    tags: result.body["tags"],
    location: result.body["location"],
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          resourceGuid: result.body.properties?.["resourceGuid"],
          provisioningState: result.body.properties?.["provisioningState"],
          publisher: result.body.properties?.["publisher"],
          product: result.body.properties?.["product"],
          majorVersion: result.body.properties?.["majorVersion"],
          owners: result.body.properties?.["owners"],
          redundancy: result.body.properties?.["redundancy"],
          purviewAccount: result.body.properties?.["purviewAccount"],
          purviewCollection: result.body.properties?.["purviewCollection"],
          privateLinksEnabled: result.body.properties?.["privateLinksEnabled"],
          publicNetworkAccess: result.body.properties?.["publicNetworkAccess"],
          customerManagedKeyEncryptionEnabled:
            result.body.properties?.["customerManagedKeyEncryptionEnabled"],
          customerEncryptionKey: !result.body.properties?.customerEncryptionKey
            ? undefined
            : {
                keyVaultUri:
                  result.body.properties?.customerEncryptionKey?.[
                    "keyVaultUri"
                  ],
                keyName:
                  result.body.properties?.customerEncryptionKey?.["keyName"],
                keyVersion:
                  result.body.properties?.customerEncryptionKey?.["keyVersion"],
              },
          networkacls: !result.body.properties?.networkacls
            ? undefined
            : {
                virtualNetworkRule: result.body.properties?.networkacls?.[
                  "virtualNetworkRule"
                ].map((p: any) => {
                  return {
                    id: p["id"],
                    action: p["action"],
                    state: p["state"],
                  };
                }),
                ipRules: result.body.properties?.networkacls?.["ipRules"].map(
                  (p: any) => {
                    return { value: p["value"], action: p["action"] };
                  },
                ),
                allowedQueryIpRangeList:
                  result.body.properties?.networkacls?.[
                    "allowedQueryIpRangeList"
                  ],
                defaultAction:
                  result.body.properties?.networkacls?.["defaultAction"],
              },
          managedResourceGroupConfiguration: !result.body.properties
            ?.managedResourceGroupConfiguration
            ? undefined
            : {
                name: result.body.properties
                  ?.managedResourceGroupConfiguration?.["name"],
                location:
                  result.body.properties?.managedResourceGroupConfiguration?.[
                    "location"
                  ],
              },
          availableMinorVersions:
            result.body.properties?.["availableMinorVersions"],
          currentMinorVersion: result.body.properties?.["currentMinorVersion"],
          documentation: result.body.properties?.["documentation"],
          consumptionEndpoints: !result.body.properties?.consumptionEndpoints
            ? undefined
            : {
                ingestionUrl:
                  result.body.properties?.consumptionEndpoints?.[
                    "ingestionUrl"
                  ],
                ingestionResourceId:
                  result.body.properties?.consumptionEndpoints?.[
                    "ingestionResourceId"
                  ],
                fileAccessUrl:
                  result.body.properties?.consumptionEndpoints?.[
                    "fileAccessUrl"
                  ],
                fileAccessResourceId:
                  result.body.properties?.consumptionEndpoints?.[
                    "fileAccessResourceId"
                  ],
                queryUrl:
                  result.body.properties?.consumptionEndpoints?.["queryUrl"],
                queryResourceId:
                  result.body.properties?.consumptionEndpoints?.[
                    "queryResourceId"
                  ],
              },
          keyVaultUrl: result.body.properties?.["keyVaultUrl"],
        },
    identity: !result.body.identity
      ? undefined
      : {
          principalId: result.body.identity?.["principalId"],
          tenantId: result.body.identity?.["tenantId"],
          type: result.body.identity?.["type"],
          userAssignedIdentities:
            result.body.identity?.["userAssignedIdentities"],
        },
  };
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
      body: {
        startTimeStamp: body["startTimeStamp"].toISOString(),
        expiryTimeStamp: body["expiryTimeStamp"].toISOString(),
        ipAddress: body["ipAddress"],
      },
    });
}

export async function _dataProductsGenerateStorageAccountSasTokenDeserialize(
  result: PathUncheckedResponse,
): Promise<AccountSasToken> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    storageAccountSasToken: result.body["storageAccountSasToken"],
  };
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
      body: { keyVaultUrl: body["keyVaultUrl"] },
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
      body: {
        roleId: body["roleId"],
        principalId: body["principalId"],
        userName: body["userName"],
        dataTypeScope: body["dataTypeScope"],
        principalType: body["principalType"],
        role: body["role"],
      },
    });
}

export async function _dataProductsAddUserRoleDeserialize(
  result: PathUncheckedResponse,
): Promise<RoleAssignmentDetail> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    roleId: result.body["roleId"],
    principalId: result.body["principalId"],
    userName: result.body["userName"],
    dataTypeScope: result.body["dataTypeScope"],
    principalType: result.body["principalType"],
    role: result.body["role"],
    roleAssignmentId: result.body["roleAssignmentId"],
  };
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
      body: {
        roleId: body["roleId"],
        principalId: body["principalId"],
        userName: body["userName"],
        dataTypeScope: body["dataTypeScope"],
        principalType: body["principalType"],
        role: body["role"],
        roleAssignmentId: body["roleAssignmentId"],
      },
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
    .post({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _dataProductsListRolesAssignmentsDeserialize(
  result: PathUncheckedResponse,
): Promise<ListRoleAssignments> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    count: result.body["count"],
    roleAssignmentResponse: result.body["roleAssignmentResponse"].map(
      (p: any) => {
        return {
          roleId: p["roleId"],
          principalId: p["principalId"],
          userName: p["userName"],
          dataTypeScope: p["dataTypeScope"],
          principalType: p["principalType"],
          role: p["role"],
          roleAssignmentId: p["roleAssignmentId"],
        };
      },
    ),
  };
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

  return {
    value: result.body["value"].map((p: any) => {
      return {
        tags: p["tags"],
        location: p["location"],
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"],
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.["lastModifiedByType"],
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        properties: !p.properties
          ? undefined
          : {
              resourceGuid: p.properties?.["resourceGuid"],
              provisioningState: p.properties?.["provisioningState"],
              publisher: p.properties?.["publisher"],
              product: p.properties?.["product"],
              majorVersion: p.properties?.["majorVersion"],
              owners: p.properties?.["owners"],
              redundancy: p.properties?.["redundancy"],
              purviewAccount: p.properties?.["purviewAccount"],
              purviewCollection: p.properties?.["purviewCollection"],
              privateLinksEnabled: p.properties?.["privateLinksEnabled"],
              publicNetworkAccess: p.properties?.["publicNetworkAccess"],
              customerManagedKeyEncryptionEnabled:
                p.properties?.["customerManagedKeyEncryptionEnabled"],
              customerEncryptionKey: !p.properties?.customerEncryptionKey
                ? undefined
                : {
                    keyVaultUri:
                      p.properties?.customerEncryptionKey?.["keyVaultUri"],
                    keyName: p.properties?.customerEncryptionKey?.["keyName"],
                    keyVersion:
                      p.properties?.customerEncryptionKey?.["keyVersion"],
                  },
              networkacls: !p.properties?.networkacls
                ? undefined
                : {
                    virtualNetworkRule: p.properties?.networkacls?.[
                      "virtualNetworkRule"
                    ].map((p: any) => {
                      return {
                        id: p["id"],
                        action: p["action"],
                        state: p["state"],
                      };
                    }),
                    ipRules: p.properties?.networkacls?.["ipRules"].map(
                      (p: any) => {
                        return { value: p["value"], action: p["action"] };
                      },
                    ),
                    allowedQueryIpRangeList:
                      p.properties?.networkacls?.["allowedQueryIpRangeList"],
                    defaultAction: p.properties?.networkacls?.["defaultAction"],
                  },
              managedResourceGroupConfiguration: !p.properties
                ?.managedResourceGroupConfiguration
                ? undefined
                : {
                    name: p.properties?.managedResourceGroupConfiguration?.[
                      "name"
                    ],
                    location:
                      p.properties?.managedResourceGroupConfiguration?.[
                        "location"
                      ],
                  },
              availableMinorVersions: p.properties?.["availableMinorVersions"],
              currentMinorVersion: p.properties?.["currentMinorVersion"],
              documentation: p.properties?.["documentation"],
              consumptionEndpoints: !p.properties?.consumptionEndpoints
                ? undefined
                : {
                    ingestionUrl:
                      p.properties?.consumptionEndpoints?.["ingestionUrl"],
                    ingestionResourceId:
                      p.properties?.consumptionEndpoints?.[
                        "ingestionResourceId"
                      ],
                    fileAccessUrl:
                      p.properties?.consumptionEndpoints?.["fileAccessUrl"],
                    fileAccessResourceId:
                      p.properties?.consumptionEndpoints?.[
                        "fileAccessResourceId"
                      ],
                    queryUrl: p.properties?.consumptionEndpoints?.["queryUrl"],
                    queryResourceId:
                      p.properties?.consumptionEndpoints?.["queryResourceId"],
                  },
              keyVaultUrl: p.properties?.["keyVaultUrl"],
            },
        identity: !p.identity
          ? undefined
          : {
              principalId: p.identity?.["principalId"],
              tenantId: p.identity?.["tenantId"],
              type: p.identity?.["type"],
              userAssignedIdentities: p.identity?.["userAssignedIdentities"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
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

  return {
    value: result.body["value"].map((p: any) => {
      return {
        tags: p["tags"],
        location: p["location"],
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"],
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.["lastModifiedByType"],
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        properties: !p.properties
          ? undefined
          : {
              resourceGuid: p.properties?.["resourceGuid"],
              provisioningState: p.properties?.["provisioningState"],
              publisher: p.properties?.["publisher"],
              product: p.properties?.["product"],
              majorVersion: p.properties?.["majorVersion"],
              owners: p.properties?.["owners"],
              redundancy: p.properties?.["redundancy"],
              purviewAccount: p.properties?.["purviewAccount"],
              purviewCollection: p.properties?.["purviewCollection"],
              privateLinksEnabled: p.properties?.["privateLinksEnabled"],
              publicNetworkAccess: p.properties?.["publicNetworkAccess"],
              customerManagedKeyEncryptionEnabled:
                p.properties?.["customerManagedKeyEncryptionEnabled"],
              customerEncryptionKey: !p.properties?.customerEncryptionKey
                ? undefined
                : {
                    keyVaultUri:
                      p.properties?.customerEncryptionKey?.["keyVaultUri"],
                    keyName: p.properties?.customerEncryptionKey?.["keyName"],
                    keyVersion:
                      p.properties?.customerEncryptionKey?.["keyVersion"],
                  },
              networkacls: !p.properties?.networkacls
                ? undefined
                : {
                    virtualNetworkRule: p.properties?.networkacls?.[
                      "virtualNetworkRule"
                    ].map((p: any) => {
                      return {
                        id: p["id"],
                        action: p["action"],
                        state: p["state"],
                      };
                    }),
                    ipRules: p.properties?.networkacls?.["ipRules"].map(
                      (p: any) => {
                        return { value: p["value"], action: p["action"] };
                      },
                    ),
                    allowedQueryIpRangeList:
                      p.properties?.networkacls?.["allowedQueryIpRangeList"],
                    defaultAction: p.properties?.networkacls?.["defaultAction"],
                  },
              managedResourceGroupConfiguration: !p.properties
                ?.managedResourceGroupConfiguration
                ? undefined
                : {
                    name: p.properties?.managedResourceGroupConfiguration?.[
                      "name"
                    ],
                    location:
                      p.properties?.managedResourceGroupConfiguration?.[
                        "location"
                      ],
                  },
              availableMinorVersions: p.properties?.["availableMinorVersions"],
              currentMinorVersion: p.properties?.["currentMinorVersion"],
              documentation: p.properties?.["documentation"],
              consumptionEndpoints: !p.properties?.consumptionEndpoints
                ? undefined
                : {
                    ingestionUrl:
                      p.properties?.consumptionEndpoints?.["ingestionUrl"],
                    ingestionResourceId:
                      p.properties?.consumptionEndpoints?.[
                        "ingestionResourceId"
                      ],
                    fileAccessUrl:
                      p.properties?.consumptionEndpoints?.["fileAccessUrl"],
                    fileAccessResourceId:
                      p.properties?.consumptionEndpoints?.[
                        "fileAccessResourceId"
                      ],
                    queryUrl: p.properties?.consumptionEndpoints?.["queryUrl"],
                    queryResourceId:
                      p.properties?.consumptionEndpoints?.["queryResourceId"],
                  },
              keyVaultUrl: p.properties?.["keyVaultUrl"],
            },
        identity: !p.identity
          ? undefined
          : {
              principalId: p.identity?.["principalId"],
              tenantId: p.identity?.["tenantId"],
              type: p.identity?.["type"],
              userAssignedIdentities: p.identity?.["userAssignedIdentities"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
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
