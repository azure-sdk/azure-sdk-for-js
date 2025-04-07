// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createAzurePlaywrightService,
  AzurePlaywrightServiceContext,
  AzurePlaywrightServiceClientOptionalParams,
} from "./api/index.js";
import {
  AccountQuotasOperations,
  _getAccountQuotasOperations,
} from "./classic/accountQuotas/index.js";
import { QuotasOperations, _getQuotasOperations } from "./classic/quotas/index.js";
import { AccountsOperations, _getAccountsOperations } from "./classic/accounts/index.js";
import { OperationsOperations, _getOperationsOperations } from "./classic/operations/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { AzurePlaywrightServiceClientOptionalParams } from "./api/azurePlaywrightServiceContext.js";

export class AzurePlaywrightServiceClient {
  private _client: AzurePlaywrightServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Microsoft.AzurePlaywrightService Resource Provider Management API. */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: AzurePlaywrightServiceClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createAzurePlaywrightService(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.accountQuotas = _getAccountQuotasOperations(this._client);
    this.quotas = _getQuotasOperations(this._client);
    this.accounts = _getAccountsOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for accountQuotas */
  public readonly accountQuotas: AccountQuotasOperations;
  /** The operation groups for quotas */
  public readonly quotas: QuotasOperations;
  /** The operation groups for accounts */
  public readonly accounts: AccountsOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
