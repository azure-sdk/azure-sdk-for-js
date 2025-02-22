/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  CustomerSubscription,
  CustomerSubscriptionsListOptionalParams,
  CustomerSubscriptionsGetOptionalParams,
  CustomerSubscriptionsGetResponse,
  CustomerSubscriptionsDeleteOptionalParams,
  CustomerSubscriptionsCreateOptionalParams,
  CustomerSubscriptionsCreateResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a CustomerSubscriptions. */
export interface CustomerSubscriptions {
  /**
   * Returns a list of products.
   * @param resourceGroup Name of the resource group.
   * @param registrationName Name of the Azure Stack registration.
   * @param options The options parameters.
   */
  list(
    resourceGroup: string,
    registrationName: string,
    options?: CustomerSubscriptionsListOptionalParams
  ): PagedAsyncIterableIterator<CustomerSubscription>;
  /**
   * Returns the specified product.
   * @param resourceGroup Name of the resource group.
   * @param registrationName Name of the Azure Stack registration.
   * @param customerSubscriptionName Name of the product.
   * @param options The options parameters.
   */
  get(
    resourceGroup: string,
    registrationName: string,
    customerSubscriptionName: string,
    options?: CustomerSubscriptionsGetOptionalParams
  ): Promise<CustomerSubscriptionsGetResponse>;
  /**
   * Deletes a customer subscription under a registration.
   * @param resourceGroup Name of the resource group.
   * @param registrationName Name of the Azure Stack registration.
   * @param customerSubscriptionName Name of the product.
   * @param options The options parameters.
   */
  delete(
    resourceGroup: string,
    registrationName: string,
    customerSubscriptionName: string,
    options?: CustomerSubscriptionsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Creates a new customer subscription under a registration.
   * @param resourceGroup Name of the resource group.
   * @param registrationName Name of the Azure Stack registration.
   * @param customerSubscriptionName Name of the product.
   * @param customerCreationParameters Parameters use to create a customer subscription.
   * @param options The options parameters.
   */
  create(
    resourceGroup: string,
    registrationName: string,
    customerSubscriptionName: string,
    customerCreationParameters: CustomerSubscription,
    options?: CustomerSubscriptionsCreateOptionalParams
  ): Promise<CustomerSubscriptionsCreateResponse>;
}
