// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticContext as Client } from "../index.js";
import {
  resourceProviderDefaultErrorResponseDeserializer,
  UserEmailId,
  userEmailIdSerializer,
  UserApiKeyResponse,
  userApiKeyResponseDeserializer,
  ElasticOrganizationToAzureSubscriptionMappingResponse,
  elasticOrganizationToAzureSubscriptionMappingResponseDeserializer,
} from "../../models/models.js";
import {
  OrganizationsOperationGroupGetElasticToAzureSubscriptionMappingOptionalParams,
  OrganizationsOperationGroupGetApiKeyOptionalParams,
} from "./options.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getElasticToAzureSubscriptionMappingSend(
  context: Client,
  options: OrganizationsOperationGroupGetElasticToAzureSubscriptionMappingOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Elastic/getElasticOrganizationToAzureSubscriptionMapping{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _getElasticToAzureSubscriptionMappingDeserialize(
  result: PathUncheckedResponse,
): Promise<ElasticOrganizationToAzureSubscriptionMappingResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = resourceProviderDefaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return elasticOrganizationToAzureSubscriptionMappingResponseDeserializer(result.body);
}

/**
 * >;
 *   /**
 * Get Elastic Organization To Azure Subscription Mapping details for the logged-in user.
 */
export async function getElasticToAzureSubscriptionMapping(
  context: Client,
  options: OrganizationsOperationGroupGetElasticToAzureSubscriptionMappingOptionalParams = {
    requestOptions: {},
  },
): Promise<ElasticOrganizationToAzureSubscriptionMappingResponse> {
  const result = await _getElasticToAzureSubscriptionMappingSend(context, options);
  return _getElasticToAzureSubscriptionMappingDeserialize(result);
}

export function _getApiKeySend(
  context: Client,
  body: UserEmailId,
  options: OrganizationsOperationGroupGetApiKeyOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Elastic/getOrganizationApiKey{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: userEmailIdSerializer(body),
  });
}

export async function _getApiKeyDeserialize(
  result: PathUncheckedResponse,
): Promise<UserApiKeyResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = resourceProviderDefaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return userApiKeyResponseDeserializer(result.body);
}

/** Fetch User API Key from internal database, if it was generated and stored while creating the Elasticsearch Organization. */
export async function getApiKey(
  context: Client,
  body: UserEmailId,
  options: OrganizationsOperationGroupGetApiKeyOptionalParams = {
    requestOptions: {},
  },
): Promise<UserApiKeyResponse> {
  const result = await _getApiKeySend(context, body, options);
  return _getApiKeyDeserialize(result);
}
