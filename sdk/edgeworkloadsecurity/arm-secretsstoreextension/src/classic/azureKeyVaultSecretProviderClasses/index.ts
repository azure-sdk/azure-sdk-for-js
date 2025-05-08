// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SecretsStoreExtensionManagementContext } from "../../api/secretsStoreExtensionManagementContext.js";
import {
  AzureKeyVaultSecretProviderClass,
  AzureKeyVaultSecretProviderClassUpdate,
} from "../../models/models.js";
import {
  AzureKeyVaultSecretProviderClassesListBySubscriptionOptionalParams,
  AzureKeyVaultSecretProviderClassesListByResourceGroupOptionalParams,
  AzureKeyVaultSecretProviderClassesDeleteOptionalParams,
  AzureKeyVaultSecretProviderClassesUpdateOptionalParams,
  AzureKeyVaultSecretProviderClassesCreateOrUpdateOptionalParams,
  AzureKeyVaultSecretProviderClassesGetOptionalParams,
} from "../../api/azureKeyVaultSecretProviderClasses/options.js";
import {
  listBySubscription,
  listByResourceGroup,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/azureKeyVaultSecretProviderClasses/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a AzureKeyVaultSecretProviderClasses operations. */
export interface AzureKeyVaultSecretProviderClassesOperations {
  /** Lists the AzureKeyVaultSecretProviderClass instances within an Azure subscription. */
  listBySubscription: (
    options?: AzureKeyVaultSecretProviderClassesListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<AzureKeyVaultSecretProviderClass>;
  /** Lists the AzureKeyVaultSecretProviderClass instances within a resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: AzureKeyVaultSecretProviderClassesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<AzureKeyVaultSecretProviderClass>;
  /** Deletes an AzureKeyVaultSecretProviderClass instance. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    azureKeyVaultSecretProviderClassName: string,
    options?: AzureKeyVaultSecretProviderClassesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Updates an AzureKeyVaultSecretProviderClass instance. */
  update: (
    resourceGroupName: string,
    azureKeyVaultSecretProviderClassName: string,
    properties: AzureKeyVaultSecretProviderClassUpdate,
    options?: AzureKeyVaultSecretProviderClassesUpdateOptionalParams,
  ) => PollerLike<
    OperationState<AzureKeyVaultSecretProviderClass>,
    AzureKeyVaultSecretProviderClass
  >;
  /** Creates, or updates, an AzureKeyVaultSecretProviderClass instance. */
  createOrUpdate: (
    resourceGroupName: string,
    azureKeyVaultSecretProviderClassName: string,
    resource: AzureKeyVaultSecretProviderClass,
    options?: AzureKeyVaultSecretProviderClassesCreateOrUpdateOptionalParams,
  ) => PollerLike<
    OperationState<AzureKeyVaultSecretProviderClass>,
    AzureKeyVaultSecretProviderClass
  >;
  /** Gets the properties of an AzureKeyVaultSecretProviderClass instance. */
  get: (
    resourceGroupName: string,
    azureKeyVaultSecretProviderClassName: string,
    options?: AzureKeyVaultSecretProviderClassesGetOptionalParams,
  ) => Promise<AzureKeyVaultSecretProviderClass>;
}

function _getAzureKeyVaultSecretProviderClasses(context: SecretsStoreExtensionManagementContext) {
  return {
    listBySubscription: (
      options?: AzureKeyVaultSecretProviderClassesListBySubscriptionOptionalParams,
    ) => listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: AzureKeyVaultSecretProviderClassesListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      azureKeyVaultSecretProviderClassName: string,
      options?: AzureKeyVaultSecretProviderClassesDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, azureKeyVaultSecretProviderClassName, options),
    update: (
      resourceGroupName: string,
      azureKeyVaultSecretProviderClassName: string,
      properties: AzureKeyVaultSecretProviderClassUpdate,
      options?: AzureKeyVaultSecretProviderClassesUpdateOptionalParams,
    ) =>
      update(context, resourceGroupName, azureKeyVaultSecretProviderClassName, properties, options),
    createOrUpdate: (
      resourceGroupName: string,
      azureKeyVaultSecretProviderClassName: string,
      resource: AzureKeyVaultSecretProviderClass,
      options?: AzureKeyVaultSecretProviderClassesCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        azureKeyVaultSecretProviderClassName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      azureKeyVaultSecretProviderClassName: string,
      options?: AzureKeyVaultSecretProviderClassesGetOptionalParams,
    ) => get(context, resourceGroupName, azureKeyVaultSecretProviderClassName, options),
  };
}

export function _getAzureKeyVaultSecretProviderClassesOperations(
  context: SecretsStoreExtensionManagementContext,
): AzureKeyVaultSecretProviderClassesOperations {
  return {
    ..._getAzureKeyVaultSecretProviderClasses(context),
  };
}
