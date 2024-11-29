// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createLoadTestMgmt,
  LoadTestMgmtContext,
  LoadTestMgmtClientOptionalParams,
  listBySubscription,
  listByResourceGroup,
  getLoadtest,
  createOrUpdateLoadtest,
  updateLoadtest,
  deleteLoadtest,
  outboundNetworkDependenciesEndpoints,
  getQuota,
  listQuota,
  checkAvailabilityQuota,
  ListBySubscriptionOptionalParams,
  ListByResourceGroupOptionalParams,
  GetLoadtestOptionalParams,
  CreateOrUpdateLoadtestOptionalParams,
  UpdateLoadtestOptionalParams,
  DeleteLoadtestOptionalParams,
  OutboundNetworkDependenciesEndpointsOptionalParams,
  GetQuotaOptionalParams,
  ListQuotaOptionalParams,
  CheckAvailabilityQuotaOptionalParams,
} from "./api/index.js";
import {
  LoadTestResource,
  LoadTestResourceUpdate,
  OutboundEnvironmentEndpoint,
  QuotaResource,
  QuotaBucketRequest,
  CheckQuotaAvailabilityResponse,
} from "./models/models.js";
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
    options: LoadTestMgmtClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createLoadTestMgmt(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** List LoadTestResource resources by subscription ID */
  listBySubscription(
    subscriptionId: string,
    options: ListBySubscriptionOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<LoadTestResource> {
    return listBySubscription(this._client, subscriptionId, options);
  }

  /** List LoadTestResource resources by resource group */
  listByResourceGroup(
    subscriptionId: string,
    resourceGroupName: string,
    options: ListByResourceGroupOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<LoadTestResource> {
    return listByResourceGroup(
      this._client,
      subscriptionId,
      resourceGroupName,
      options,
    );
  }

  /** Get a LoadTestResource */
  getLoadtest(
    subscriptionId: string,
    resourceGroupName: string,
    loadTestName: string,
    options: GetLoadtestOptionalParams = { requestOptions: {} },
  ): Promise<LoadTestResource> {
    return getLoadtest(
      this._client,
      subscriptionId,
      resourceGroupName,
      loadTestName,
      options,
    );
  }

  /** Create a LoadTestResource */
  createOrUpdateLoadtest(
    subscriptionId: string,
    resourceGroupName: string,
    loadTestName: string,
    loadTestResource: LoadTestResource,
    options: CreateOrUpdateLoadtestOptionalParams = { requestOptions: {} },
  ): PollerLike<OperationState<LoadTestResource>, LoadTestResource> {
    return createOrUpdateLoadtest(
      this._client,
      subscriptionId,
      resourceGroupName,
      loadTestName,
      loadTestResource,
      options,
    );
  }

  /** Update a LoadTestResource */
  updateLoadtest(
    subscriptionId: string,
    resourceGroupName: string,
    loadTestName: string,
    loadTestResourcePatchRequestBody: LoadTestResourceUpdate,
    options: UpdateLoadtestOptionalParams = { requestOptions: {} },
  ): PollerLike<OperationState<void>, void> {
    return updateLoadtest(
      this._client,
      subscriptionId,
      resourceGroupName,
      loadTestName,
      loadTestResourcePatchRequestBody,
      options,
    );
  }

  /** Delete a LoadTestResource */
  deleteLoadtest(
    subscriptionId: string,
    resourceGroupName: string,
    loadTestName: string,
    options: DeleteLoadtestOptionalParams = { requestOptions: {} },
  ): PollerLike<OperationState<void>, void> {
    return deleteLoadtest(
      this._client,
      subscriptionId,
      resourceGroupName,
      loadTestName,
      options,
    );
  }

  /** Lists the endpoints that agents may call as part of load testing. */
  outboundNetworkDependenciesEndpoints(
    subscriptionId: string,
    resourceGroupName: string,
    loadTestName: string,
    options: OutboundNetworkDependenciesEndpointsOptionalParams = {
      requestOptions: {},
    },
  ): PagedAsyncIterableIterator<OutboundEnvironmentEndpoint> {
    return outboundNetworkDependenciesEndpoints(
      this._client,
      subscriptionId,
      resourceGroupName,
      loadTestName,
      options,
    );
  }

  /** Get the available quota for a quota bucket per region per subscription. */
  getQuota(
    subscriptionId: string,
    location: string,
    quotaBucketName: string,
    options: GetQuotaOptionalParams = { requestOptions: {} },
  ): Promise<QuotaResource> {
    return getQuota(
      this._client,
      subscriptionId,
      location,
      quotaBucketName,
      options,
    );
  }

  /** List quotas for a given subscription Id. */
  listQuota(
    subscriptionId: string,
    location: string,
    options: ListQuotaOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<QuotaResource> {
    return listQuota(this._client, subscriptionId, location, options);
  }

  /** Check Quota Availability on quota bucket per region per subscription. */
  checkAvailabilityQuota(
    subscriptionId: string,
    location: string,
    quotaBucketName: string,
    quotaBucketRequest: QuotaBucketRequest,
    options: CheckAvailabilityQuotaOptionalParams = { requestOptions: {} },
  ): Promise<CheckQuotaAvailabilityResponse> {
    return checkAvailabilityQuota(
      this._client,
      subscriptionId,
      location,
      quotaBucketName,
      quotaBucketRequest,
      options,
    );
  }
}
