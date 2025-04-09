// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createLoadTestMgmt,
  LoadTestMgmtContext,
  LoadTestMgmtClientOptionalParams,
} from "./api/index.js";
import {
  LoadTestResource,
  LoadTestResourceUpdate,
  OutboundEnvironmentEndpoint,
  QuotaResource,
  QuotaBucketRequest,
  CheckQuotaAvailabilityResponse,
} from "./models/models.js";
import {
  CheckAvailabilityQuotaOptionalParams,
  ListQuotaOptionalParams,
  GetQuotaOptionalParams,
  OutboundNetworkDependenciesEndpointsOptionalParams,
  DeleteLoadtestOptionalParams,
  UpdateLoadtestOptionalParams,
  CreateOrUpdateLoadtestOptionalParams,
  GetLoadtestOptionalParams,
  ListByResourceGroupOptionalParams,
  ListBySubscriptionOptionalParams,
} from "./api/options.js";
import {
  checkAvailabilityQuota,
  listQuota,
  getQuota,
  outboundNetworkDependenciesEndpoints,
  deleteLoadtest,
  updateLoadtest,
  createOrUpdateLoadtest,
  getLoadtest,
  listByResourceGroup,
  listBySubscription,
} from "./api/operations.js";
import { PagedAsyncIterableIterator } from "./static-helpers/pagingHelpers.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";
import { PollerLike, OperationState } from "@azure/core-lro";

export { LoadTestMgmtClientOptionalParams } from "./api/loadTestMgmtContext.js";

export class LoadTestMgmtClient {
  private _client: LoadTestMgmtContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: LoadTestMgmtClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createLoadTestMgmt(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Check Quota Availability on quota bucket per region per subscription. */
  checkAvailabilityQuota(
    location: string,
    quotaBucketName: string,
    quotaBucketRequest: QuotaBucketRequest,
    options: CheckAvailabilityQuotaOptionalParams = { requestOptions: {} },
  ): Promise<CheckQuotaAvailabilityResponse> {
    return checkAvailabilityQuota(
      this._client,
      location,
      quotaBucketName,
      quotaBucketRequest,
      options,
    );
  }

  /** List quotas for a given subscription Id. */
  listQuota(
    location: string,
    options: ListQuotaOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<QuotaResource> {
    return listQuota(this._client, location, options);
  }

  /** Get the available quota for a quota bucket per region per subscription. */
  getQuota(
    location: string,
    quotaBucketName: string,
    options: GetQuotaOptionalParams = { requestOptions: {} },
  ): Promise<QuotaResource> {
    return getQuota(this._client, location, quotaBucketName, options);
  }

  /** Lists the endpoints that agents may call as part of load testing. */
  outboundNetworkDependenciesEndpoints(
    resourceGroupName: string,
    loadTestName: string,
    options: OutboundNetworkDependenciesEndpointsOptionalParams = {
      requestOptions: {},
    },
  ): PagedAsyncIterableIterator<OutboundEnvironmentEndpoint> {
    return outboundNetworkDependenciesEndpoints(
      this._client,
      resourceGroupName,
      loadTestName,
      options,
    );
  }

  /** Delete a LoadTestResource */
  deleteLoadtest(
    resourceGroupName: string,
    loadTestName: string,
    options: DeleteLoadtestOptionalParams = { requestOptions: {} },
  ): PollerLike<OperationState<void>, void> {
    return deleteLoadtest(this._client, resourceGroupName, loadTestName, options);
  }

  /** Update a LoadTestResource */
  updateLoadtest(
    resourceGroupName: string,
    loadTestName: string,
    loadTestResourcePatchRequestBody: LoadTestResourceUpdate,
    options: UpdateLoadtestOptionalParams = { requestOptions: {} },
  ): PollerLike<OperationState<void>, void> {
    return updateLoadtest(
      this._client,
      resourceGroupName,
      loadTestName,
      loadTestResourcePatchRequestBody,
      options,
    );
  }

  /** Create a LoadTestResource */
  createOrUpdateLoadtest(
    resourceGroupName: string,
    loadTestName: string,
    loadTestResource: LoadTestResource,
    options: CreateOrUpdateLoadtestOptionalParams = { requestOptions: {} },
  ): PollerLike<OperationState<LoadTestResource>, LoadTestResource> {
    return createOrUpdateLoadtest(
      this._client,
      resourceGroupName,
      loadTestName,
      loadTestResource,
      options,
    );
  }

  /** Get a LoadTestResource */
  getLoadtest(
    resourceGroupName: string,
    loadTestName: string,
    options: GetLoadtestOptionalParams = { requestOptions: {} },
  ): Promise<LoadTestResource> {
    return getLoadtest(this._client, resourceGroupName, loadTestName, options);
  }

  /** List LoadTestResource resources by resource group */
  listByResourceGroup(
    resourceGroupName: string,
    options: ListByResourceGroupOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<LoadTestResource> {
    return listByResourceGroup(this._client, resourceGroupName, options);
  }

  /** List LoadTestResource resources by subscription ID */
  listBySubscription(
    options: ListBySubscriptionOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<LoadTestResource> {
    return listBySubscription(this._client, options);
  }
}
