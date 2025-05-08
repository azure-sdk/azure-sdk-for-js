// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createSecretsStoreExtensionManagement,
  SecretsStoreExtensionManagementContext,
  SecretsStoreExtensionManagementClientOptionalParams,
} from "./api/index.js";
import { SecretSyncsOperations, _getSecretSyncsOperations } from "./classic/secretSyncs/index.js";
import {
  AzureKeyVaultSecretProviderClassesOperations,
  _getAzureKeyVaultSecretProviderClassesOperations,
} from "./classic/azureKeyVaultSecretProviderClasses/index.js";
import { OperationsOperations, _getOperationsOperations } from "./classic/operations/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { SecretsStoreExtensionManagementClientOptionalParams } from "./api/secretsStoreExtensionManagementContext.js";

export class SecretsStoreExtensionManagementClient {
  private _client: SecretsStoreExtensionManagementContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Microsoft.SecretSyncController resource provider. */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: SecretsStoreExtensionManagementClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createSecretsStoreExtensionManagement(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.secretSyncs = _getSecretSyncsOperations(this._client);
    this.azureKeyVaultSecretProviderClasses = _getAzureKeyVaultSecretProviderClassesOperations(
      this._client,
    );
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for secretSyncs */
  public readonly secretSyncs: SecretSyncsOperations;
  /** The operation groups for azureKeyVaultSecretProviderClasses */
  public readonly azureKeyVaultSecretProviderClasses: AzureKeyVaultSecretProviderClassesOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
