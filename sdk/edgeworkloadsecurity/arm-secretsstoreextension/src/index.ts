// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { SecretsStoreExtensionManagementClient } from "./secretsStoreExtensionManagementClient.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
export {
  Operation,
  OperationDisplay,
  KnownOrigin,
  Origin,
  KnownActionType,
  ActionType,
  ErrorResponse,
  ErrorDetail,
  ErrorAdditionalInfo,
  AzureKeyVaultSecretProviderClass,
  AzureKeyVaultSecretProviderClassProperties,
  KnownProvisioningState,
  ProvisioningState,
  ExtendedLocation,
  KnownExtendedLocationType,
  ExtendedLocationType,
  TrackedResource,
  Resource,
  SystemData,
  KnownCreatedByType,
  CreatedByType,
  AzureKeyVaultSecretProviderClassUpdate,
  AzureKeyVaultSecretProviderClassUpdateProperties,
  SecretSync,
  SecretSyncProperties,
  KnownKubernetesSecretType,
  KubernetesSecretType,
  KubernetesSecretObjectMapping,
  SecretSyncStatus,
  SecretSyncCondition,
  KnownStatusConditionType,
  StatusConditionType,
  SecretSyncUpdate,
  SecretSyncUpdateProperties,
  KnownVersions,
} from "./models/index.js";
export { SecretsStoreExtensionManagementClientOptionalParams } from "./api/index.js";
export {
  AzureKeyVaultSecretProviderClassesListBySubscriptionOptionalParams,
  AzureKeyVaultSecretProviderClassesListByResourceGroupOptionalParams,
  AzureKeyVaultSecretProviderClassesDeleteOptionalParams,
  AzureKeyVaultSecretProviderClassesUpdateOptionalParams,
  AzureKeyVaultSecretProviderClassesCreateOrUpdateOptionalParams,
  AzureKeyVaultSecretProviderClassesGetOptionalParams,
} from "./api/azureKeyVaultSecretProviderClasses/index.js";
export { OperationsListOptionalParams } from "./api/operations/index.js";
export {
  SecretSyncsListBySubscriptionOptionalParams,
  SecretSyncsListByResourceGroupOptionalParams,
  SecretSyncsDeleteOptionalParams,
  SecretSyncsUpdateOptionalParams,
  SecretSyncsCreateOrUpdateOptionalParams,
  SecretSyncsGetOptionalParams,
} from "./api/secretSyncs/index.js";
export {
  AzureKeyVaultSecretProviderClassesOperations,
  OperationsOperations,
  SecretSyncsOperations,
} from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
