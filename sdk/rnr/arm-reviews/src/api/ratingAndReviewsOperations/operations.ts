// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MarketplaceContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  UserHasReview,
  userHasReviewDeserializer,
} from "../../models/models.js";
import { RatingAndReviewsOperationsCheckUserHasReviewOptionalParams } from "./options.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _ratingAndReviewsOperationsCheckUserHasReviewSend(
  context: Client,
  uniqueProductId: string,
  options: RatingAndReviewsOperationsCheckUserHasReviewOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.Marketplace/products/{uniqueProductId}/checkUserHasReview{?api%2Dversion}",
    {
      uniqueProductId: uniqueProductId,
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

export async function _ratingAndReviewsOperationsCheckUserHasReviewDeserialize(
  result: PathUncheckedResponse,
): Promise<UserHasReview> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return userHasReviewDeserializer(result.body);
}

/** Check user has review. */
export async function ratingAndReviewsOperationsCheckUserHasReview(
  context: Client,
  uniqueProductId: string,
  options: RatingAndReviewsOperationsCheckUserHasReviewOptionalParams = {
    requestOptions: {},
  },
): Promise<UserHasReview> {
  const result = await _ratingAndReviewsOperationsCheckUserHasReviewSend(
    context,
    uniqueProductId,
    options,
  );
  return _ratingAndReviewsOperationsCheckUserHasReviewDeserialize(result);
}
