// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { getOperationsOperations, OperationsOperations } from "./classic/operations/index.js";
import { getEmployeesOperations, EmployeesOperations } from "./classic/employees/index.js";
import { createContoso, ContosoContext, ContosoClientOptionalParams } from "./api/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { ContosoClientOptionalParams } from "./api/contosoContext.js";

export class ContosoClient {
  private _client: ContosoContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Microsoft.Contoso Resource Provider management API. */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: ContosoClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createContoso(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.operations = getOperationsOperations(this._client);
    this.employees = getEmployeesOperations(this._client, subscriptionId);
  }

  /** The operation groups for Operations */
  public readonly operations: OperationsOperations;
  /** The operation groups for Employees */
  public readonly employees: EmployeesOperations;
}
