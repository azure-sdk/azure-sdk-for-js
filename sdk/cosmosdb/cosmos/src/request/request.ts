// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { setAuthorizationHeader } from "../auth.js";
import {
  Constants,
  HTTPMethod,
  jsonStringifyAndEscapeNonASCII,
  OperationType,
  ResourceType,
  SDKSupportedCapabilities,
} from "../common/index.js";
import type { CosmosClientOptions } from "../CosmosClientOptions.js";
import type { PartitionKeyInternal } from "../documents/index.js";
import type { CosmosHeaders } from "../queryExecutionContext/index.js";
import { ErrorResponse, type FeedOptions, type RequestOptions } from "./index.js";
import { defaultLogger } from "../common/logger.js";
import { ChangeFeedMode } from "../client/ChangeFeed/index.js";
// ----------------------------------------------------------------------------
// Utility methods
//

/** @hidden */
function javaScriptFriendlyJSONStringify(s: unknown): string {
  // two line terminators (Line separator and Paragraph separator) are not needed to be escaped in JSON
  // but are needed to be escaped in JavaScript.
  return JSON.stringify(s)
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

/** @hidden */
export function bodyFromData(data: Buffer | string | Record<string, unknown>): string {
  if (typeof data === "object") {
    return javaScriptFriendlyJSONStringify(data);
  }
  return data;
}

/**
 * @hidden
 */
interface GetHeadersOptions {
  clientOptions: CosmosClientOptions;
  defaultHeaders: CosmosHeaders;
  verb: HTTPMethod;
  path: string;
  resourceId: string;
  resourceType: ResourceType;
  options: RequestOptions & FeedOptions;
  operationType?: OperationType;
  partitionKeyRangeId?: string;
  useMultipleWriteLocations?: boolean;
  partitionKey?: PartitionKeyInternal;
}

const JsonContentType = "application/json";

/**
 * @hidden
 */
export async function getHeaders({
  clientOptions,
  defaultHeaders,
  verb,
  path,
  resourceId,
  resourceType,
  options = {},
  operationType,
  partitionKeyRangeId,
  useMultipleWriteLocations,
  partitionKey,
}: GetHeadersOptions): Promise<CosmosHeaders> {
  const headers: CosmosHeaders = {
    [Constants.HttpHeaders.ResponseContinuationTokenLimitInKB]: 1,
    [Constants.HttpHeaders.EnableCrossPartitionQuery]: true,
    ...defaultHeaders,
  };

  // Adding SDKSupportedCapabilities header to hint that SDK supports partition merge
  headers[Constants.HttpHeaders.SDKSupportedCapabilities] = SDKSupportedCapabilities.PartitionMerge;

  if (useMultipleWriteLocations) {
    headers[Constants.HttpHeaders.ALLOW_MULTIPLE_WRITES] = true;
  }

  if (options.continuationTokenLimitInKB) {
    headers[Constants.HttpHeaders.ResponseContinuationTokenLimitInKB] =
      options.continuationTokenLimitInKB;
  }
  if (options.continuationToken) {
    headers[Constants.HttpHeaders.Continuation] = options.continuationToken;
  } else if (options.continuation) {
    headers[Constants.HttpHeaders.Continuation] = options.continuation;
  }

  if (options.preTriggerInclude) {
    headers[Constants.HttpHeaders.PreTriggerInclude] =
      options.preTriggerInclude.constructor === Array
        ? (options.preTriggerInclude as string[]).join(",")
        : (options.preTriggerInclude as string);
  }

  if (options.postTriggerInclude) {
    headers[Constants.HttpHeaders.PostTriggerInclude] =
      options.postTriggerInclude.constructor === Array
        ? (options.postTriggerInclude as string[]).join(",")
        : (options.postTriggerInclude as string);
  }

  if (options.offerType) {
    headers[Constants.HttpHeaders.OfferType] = options.offerType;
  }

  if (options.offerThroughput) {
    headers[Constants.HttpHeaders.OfferThroughput] = options.offerThroughput;
  }

  if (options.maxItemCount) {
    headers[Constants.HttpHeaders.PageSize] = options.maxItemCount;
  }

  if (options.accessCondition) {
    if (options.accessCondition.type === "IfMatch") {
      headers[Constants.HttpHeaders.IfMatch] = options.accessCondition.condition;
    } else {
      headers[Constants.HttpHeaders.IfNoneMatch] = options.accessCondition.condition;
    }
  }

  if (options.useAllVersionsAndDeletesFeed) {
    // headers required for reading feed in allVersionsAndDeletes mode
    headers[Constants.HttpHeaders.A_IM] = ChangeFeedMode.AllVersionsAndDeletes;
    headers[Constants.HttpHeaders.ChangeFeedWireFormatVersion] =
      Constants.AllVersionsAndDeletesChangeFeedWireFormatVersion;
  }

  if (options.useIncrementalFeed || options.useLatestVersionFeed) {
    headers[Constants.HttpHeaders.A_IM] = ChangeFeedMode.LatestVersion;
  }

  if (options.indexingDirective) {
    headers[Constants.HttpHeaders.IndexingDirective] = options.indexingDirective;
  }

  if (options.consistencyLevel) {
    headers[Constants.HttpHeaders.ConsistencyLevel] = options.consistencyLevel;
  }

  if (options.priorityLevel) {
    headers[Constants.HttpHeaders.PriorityLevel] = options.priorityLevel;
  }

  if (options.throughputBucket) {
    headers[Constants.HttpHeaders.ThroughputBucket] = options.throughputBucket;
  }

  if (options.maxIntegratedCacheStalenessInMs && resourceType === ResourceType.item) {
    if (typeof options.maxIntegratedCacheStalenessInMs === "number") {
      headers[Constants.HttpHeaders.DedicatedGatewayPerRequestCacheStaleness] =
        options.maxIntegratedCacheStalenessInMs.toString();
    } else {
      defaultLogger.error(
        `RangeError: maxIntegratedCacheStalenessInMs "${options.maxIntegratedCacheStalenessInMs}" is not a valid parameter.`,
      );
      headers[Constants.HttpHeaders.DedicatedGatewayPerRequestCacheStaleness] = "null";
    }
  }

  if (options.bypassIntegratedCache) {
    headers[Constants.HttpHeaders.DedicatedGatewayPerRequestBypassCache] =
      options.bypassIntegratedCache.toString();
  }

  if (options.resourceTokenExpirySeconds) {
    headers[Constants.HttpHeaders.ResourceTokenExpiry] = options.resourceTokenExpirySeconds;
  }

  if (options.sessionToken) {
    headers[Constants.HttpHeaders.SessionToken] = options.sessionToken;
  }

  if (options.enableScanInQuery) {
    headers[Constants.HttpHeaders.EnableScanInQuery] = options.enableScanInQuery;
  }

  if (options.populateQuotaInfo) {
    headers[Constants.HttpHeaders.PopulateQuotaInfo] = options.populateQuotaInfo;
  }

  if (options.populateQueryMetrics) {
    headers[Constants.HttpHeaders.PopulateQueryMetrics] = options.populateQueryMetrics;
  }

  if (
    options.maxDegreeOfParallelism !== undefined &&
    options.maxDegreeOfParallelism !== 0 &&
    options.maxDegreeOfParallelism !== 1
  ) {
    headers[Constants.HttpHeaders.ParallelizeCrossPartitionQuery] = true;
  }

  if (options.populateQuotaInfo) {
    headers[Constants.HttpHeaders.PopulateQuotaInfo] = true;
  }

  if (partitionKey !== undefined && !headers[Constants.HttpHeaders.PartitionKey]) {
    headers[Constants.HttpHeaders.PartitionKey] = jsonStringifyAndEscapeNonASCII(partitionKey);
  } else if (partitionKeyRangeId !== undefined) {
    headers[Constants.HttpHeaders.PartitionKeyRangeID] = partitionKeyRangeId;
  }

  if (clientOptions.key || clientOptions.tokenProvider) {
    headers[Constants.HttpHeaders.XDate] = new Date().toUTCString();
  }

  if (verb === HTTPMethod.post || verb === HTTPMethod.put) {
    if (!headers[Constants.HttpHeaders.ContentType]) {
      headers[Constants.HttpHeaders.ContentType] = JsonContentType;
    }
  }

  if (!headers[Constants.HttpHeaders.Accept]) {
    headers[Constants.HttpHeaders.Accept] = JsonContentType;
  }

  if (options.enableScriptLogging) {
    headers[Constants.HttpHeaders.EnableScriptLogging] = options.enableScriptLogging;
  }

  if (options.disableRUPerMinuteUsage) {
    headers[Constants.HttpHeaders.DisableRUPerMinuteUsage] = true;
  }

  if (options.populateIndexMetrics) {
    headers[Constants.HttpHeaders.PopulateIndexMetrics] = options.populateIndexMetrics;
  }

  if (clientOptions.clientEncryptionOptions) {
    headers[Constants.HttpHeaders.IsClientEncryptedHeader] = true;
    if (options.containerRid) {
      headers[Constants.HttpHeaders.IntendedCollectionHeader] = options.containerRid;
    }
  }

  if (
    clientOptions.key ||
    clientOptions.resourceTokens ||
    clientOptions.tokenProvider ||
    clientOptions.permissionFeed
  ) {
    await setAuthorizationHeader(clientOptions, verb, path, resourceId, resourceType, headers);
  }

  if (
    resourceType === ResourceType.item &&
    Object.prototype.hasOwnProperty.call(options, "contentResponseOnWriteEnabled") &&
    !options.contentResponseOnWriteEnabled
  ) {
    if (operationType === OperationType.Batch) {
      headers[Constants.HttpHeaders.Prefer] = Constants.HttpHeaders.PreferReturnMinimal;
    } else {
      throw new ErrorResponse(
        "Currently `contentResponseOnWriteEnabled` option is only supported for batch and bulk operations.",
      );
    }
  }
  return headers;
}
