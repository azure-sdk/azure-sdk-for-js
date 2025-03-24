// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ImpactContext as Client,
  ImpactCategoriesGetOptionalParams,
  ImpactCategoriesListBySubscriptionOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  ImpactCategory,
  impactCategoryDeserializer,
  _ImpactCategoryListResult,
  _impactCategoryListResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _impactCategoriesListBySubscriptionSend(
  context: Client,
  resourceType: string,
  options: ImpactCategoriesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Impact/impactCategories{?api-version,categoryName,resourceType}",
    {
      subscriptionId: context.subscriptionId,
      "api-version": context.apiVersion,
      categoryName: options?.categoryName,
      resourceType: resourceType,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _impactCategoriesListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_ImpactCategoryListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _impactCategoryListResultDeserializer(result.body);
}

/** List ImpactCategory resources by subscription */
export function impactCategoriesListBySubscription(
  context: Client,
  resourceType: string,
  options: ImpactCategoriesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<ImpactCategory> {
  return buildPagedAsyncIterator(
    context,
    () => _impactCategoriesListBySubscriptionSend(context, resourceType, options),
    _impactCategoriesListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _impactCategoriesGetSend(
  context: Client,
  impactCategoryName: string,
  options: ImpactCategoriesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Impact/impactCategories/{impactCategoryName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      impactCategoryName: impactCategoryName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _impactCategoriesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ImpactCategory> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return impactCategoryDeserializer(result.body);
}

/** Get a ImpactCategory */
export async function impactCategoriesGet(
  context: Client,
  impactCategoryName: string,
  options: ImpactCategoriesGetOptionalParams = { requestOptions: {} },
): Promise<ImpactCategory> {
  const result = await _impactCategoriesGetSend(context, impactCategoryName, options);
  return _impactCategoriesGetDeserialize(result);
}
