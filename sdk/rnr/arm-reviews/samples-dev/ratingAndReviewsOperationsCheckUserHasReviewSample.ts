// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MarketplaceClient } from "@azure/arm-reviews";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to check user has review.
 *
 * @summary check user has review.
 * x-ms-original-file: 2023-01-01-preview/RatingAndReviews_CreateUserHasReview.json
 */
async function ratingAndReviewsCheckUserHasReview(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new MarketplaceClient(credential, subscriptionId);
  const result = await client.ratingAndReviewsOperations.checkUserHasReview("WA123456789");
  console.log(result);
}

async function main(): Promise<void> {
  await ratingAndReviewsCheckUserHasReview();
}

main().catch(console.error);
