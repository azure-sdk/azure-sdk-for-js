// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  _getProviderActionsOperations,
  ProviderActionsOperations,
} from "./classic/providerActions/index.js";
import { _getOperationsOperations, OperationsOperations } from "./classic/operations/index.js";
import { _getEvidenceOperations, EvidenceOperations } from "./classic/evidence/index.js";
import {
  _getScopingConfigurationOperations,
  ScopingConfigurationOperations,
} from "./classic/scopingConfiguration/index.js";
import { _getSnapshotOperations, SnapshotOperations } from "./classic/snapshot/index.js";
import { _getWebhookOperations, WebhookOperations } from "./classic/webhook/index.js";
import { _getReportOperations, ReportOperations } from "./classic/report/index.js";
import {
  createAppComplianceAutomation,
  AppComplianceAutomationContext,
  AppComplianceAutomationClientOptionalParams,
} from "./api/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { AppComplianceAutomationClientOptionalParams } from "./api/appComplianceAutomationContext.js";

export class AppComplianceAutomationClient {
  private _client: AppComplianceAutomationContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** App Compliance Automation Tool for Microsoft 365 API spec */
  constructor(
    credential: TokenCredential,
    options: AppComplianceAutomationClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createAppComplianceAutomation(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.providerActions = _getProviderActionsOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
    this.evidence = _getEvidenceOperations(this._client);
    this.scopingConfiguration = _getScopingConfigurationOperations(this._client);
    this.snapshot = _getSnapshotOperations(this._client);
    this.webhook = _getWebhookOperations(this._client);
    this.report = _getReportOperations(this._client);
  }

  /** The operation groups for providerActions */
  public readonly providerActions: ProviderActionsOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
  /** The operation groups for evidence */
  public readonly evidence: EvidenceOperations;
  /** The operation groups for scopingConfiguration */
  public readonly scopingConfiguration: ScopingConfigurationOperations;
  /** The operation groups for snapshot */
  public readonly snapshot: SnapshotOperations;
  /** The operation groups for webhook */
  public readonly webhook: WebhookOperations;
  /** The operation groups for report */
  public readonly report: ReportOperations;
}
