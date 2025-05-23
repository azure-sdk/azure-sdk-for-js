/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  OutboundEndpoint,
  OutboundEndpointsListOptionalParams,
  OutboundEndpointsCreateOrUpdateOptionalParams,
  OutboundEndpointsCreateOrUpdateResponse,
  OutboundEndpointPatch,
  OutboundEndpointsUpdateOptionalParams,
  OutboundEndpointsUpdateResponse,
  OutboundEndpointsDeleteOptionalParams,
  OutboundEndpointsGetOptionalParams,
  OutboundEndpointsGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a OutboundEndpoints. */
export interface OutboundEndpoints {
  /**
   * Lists outbound endpoints for a DNS resolver.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsResolverName The name of the DNS resolver.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    dnsResolverName: string,
    options?: OutboundEndpointsListOptionalParams,
  ): PagedAsyncIterableIterator<OutboundEndpoint>;
  /**
   * Creates or updates an outbound endpoint for a DNS resolver.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsResolverName The name of the DNS resolver.
   * @param outboundEndpointName The name of the outbound endpoint for the DNS resolver.
   * @param parameters Parameters supplied to the CreateOrUpdate operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    dnsResolverName: string,
    outboundEndpointName: string,
    parameters: OutboundEndpoint,
    options?: OutboundEndpointsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<OutboundEndpointsCreateOrUpdateResponse>,
      OutboundEndpointsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates an outbound endpoint for a DNS resolver.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsResolverName The name of the DNS resolver.
   * @param outboundEndpointName The name of the outbound endpoint for the DNS resolver.
   * @param parameters Parameters supplied to the CreateOrUpdate operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    dnsResolverName: string,
    outboundEndpointName: string,
    parameters: OutboundEndpoint,
    options?: OutboundEndpointsCreateOrUpdateOptionalParams,
  ): Promise<OutboundEndpointsCreateOrUpdateResponse>;
  /**
   * Updates an outbound endpoint for a DNS resolver.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsResolverName The name of the DNS resolver.
   * @param outboundEndpointName The name of the outbound endpoint for the DNS resolver.
   * @param parameters Parameters supplied to the Update operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    dnsResolverName: string,
    outboundEndpointName: string,
    parameters: OutboundEndpointPatch,
    options?: OutboundEndpointsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<OutboundEndpointsUpdateResponse>,
      OutboundEndpointsUpdateResponse
    >
  >;
  /**
   * Updates an outbound endpoint for a DNS resolver.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsResolverName The name of the DNS resolver.
   * @param outboundEndpointName The name of the outbound endpoint for the DNS resolver.
   * @param parameters Parameters supplied to the Update operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    dnsResolverName: string,
    outboundEndpointName: string,
    parameters: OutboundEndpointPatch,
    options?: OutboundEndpointsUpdateOptionalParams,
  ): Promise<OutboundEndpointsUpdateResponse>;
  /**
   * Deletes an outbound endpoint for a DNS resolver. WARNING: This operation cannot be undone.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsResolverName The name of the DNS resolver.
   * @param outboundEndpointName The name of the outbound endpoint for the DNS resolver.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    dnsResolverName: string,
    outboundEndpointName: string,
    options?: OutboundEndpointsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes an outbound endpoint for a DNS resolver. WARNING: This operation cannot be undone.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsResolverName The name of the DNS resolver.
   * @param outboundEndpointName The name of the outbound endpoint for the DNS resolver.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    dnsResolverName: string,
    outboundEndpointName: string,
    options?: OutboundEndpointsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Gets properties of an outbound endpoint for a DNS resolver.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsResolverName The name of the DNS resolver.
   * @param outboundEndpointName The name of the outbound endpoint for the DNS resolver.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    dnsResolverName: string,
    outboundEndpointName: string,
    options?: OutboundEndpointsGetOptionalParams,
  ): Promise<OutboundEndpointsGetResponse>;
}
