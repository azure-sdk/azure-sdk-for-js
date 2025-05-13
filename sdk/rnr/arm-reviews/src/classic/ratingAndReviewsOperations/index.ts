// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MarketplaceContext } from "../../api/marketplaceContext.js";
import { UserHasReview } from "../../models/models.js";
import { RatingAndReviewsOperationsCheckUserHasReviewOptionalParams } from "../../api/ratingAndReviewsOperations/options.js";
import { ratingAndReviewsOperationsCheckUserHasReview } from "../../api/ratingAndReviewsOperations/operations.js";

/** Interface representing a RatingAndReviewsOperations operations. */
export interface RatingAndReviewsOperationsOperations {
  /** Check user has review. */
  checkUserHasReview: (
    uniqueProductId: string,
    options?: RatingAndReviewsOperationsCheckUserHasReviewOptionalParams,
  ) => Promise<UserHasReview>;
}

function _getRatingAndReviewsOperations(context: MarketplaceContext) {
  return {
    checkUserHasReview: (
      uniqueProductId: string,
      options?: RatingAndReviewsOperationsCheckUserHasReviewOptionalParams,
    ) => ratingAndReviewsOperationsCheckUserHasReview(context, uniqueProductId, options),
  };
}

export function _getRatingAndReviewsOperationsOperations(
  context: MarketplaceContext,
): RatingAndReviewsOperationsOperations {
  return {
    ..._getRatingAndReviewsOperations(context),
  };
}
