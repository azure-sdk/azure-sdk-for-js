// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createMigrate, MigrateContext, MigrateClientOptionalParams } from "./api/index.js";
import {
  AvsGraphAssessmentOptionsOperationsOperations,
  _getAvsGraphAssessmentOptionsOperationsOperations,
} from "./classic/avsGraphAssessmentOptionsOperations/index.js";
import {
  AvsAssessmentV2SummaryOperationsOperations,
  _getAvsAssessmentV2SummaryOperationsOperations,
} from "./classic/avsAssessmentV2SummaryOperations/index.js";
import {
  AvsAssessedMachinesV2OperationsOperations,
  _getAvsAssessedMachinesV2OperationsOperations,
} from "./classic/avsAssessedMachinesV2Operations/index.js";
import {
  AvsAssessmentsV2OperationsOperations,
  _getAvsAssessmentsV2OperationsOperations,
} from "./classic/avsAssessmentsV2Operations/index.js";
import { OperationsOperations, _getOperationsOperations } from "./classic/operations/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { MigrateClientOptionalParams } from "./api/migrateContext.js";

export class MigrateClient {
  private _client: MigrateContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Azure Migrate Resource Provider management API. */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: MigrateClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createMigrate(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.avsGraphAssessmentOptionsOperations = _getAvsGraphAssessmentOptionsOperationsOperations(
      this._client,
    );
    this.avsAssessmentV2SummaryOperations = _getAvsAssessmentV2SummaryOperationsOperations(
      this._client,
    );
    this.avsAssessedMachinesV2Operations = _getAvsAssessedMachinesV2OperationsOperations(
      this._client,
    );
    this.avsAssessmentsV2Operations = _getAvsAssessmentsV2OperationsOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for avsGraphAssessmentOptionsOperations */
  public readonly avsGraphAssessmentOptionsOperations: AvsGraphAssessmentOptionsOperationsOperations;
  /** The operation groups for avsAssessmentV2SummaryOperations */
  public readonly avsAssessmentV2SummaryOperations: AvsAssessmentV2SummaryOperationsOperations;
  /** The operation groups for avsAssessedMachinesV2Operations */
  public readonly avsAssessedMachinesV2Operations: AvsAssessedMachinesV2OperationsOperations;
  /** The operation groups for avsAssessmentsV2Operations */
  public readonly avsAssessmentsV2Operations: AvsAssessmentsV2OperationsOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
