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
  L3IsolationDomain,
  L3IsolationDomainsListByResourceGroupOptionalParams,
  L3IsolationDomainsListBySubscriptionOptionalParams,
  L3IsolationDomainsCreateOptionalParams,
  L3IsolationDomainsCreateResponse,
  L3IsolationDomainsGetOptionalParams,
  L3IsolationDomainsGetResponse,
  L3IsolationDomainPatch,
  L3IsolationDomainsUpdateOptionalParams,
  L3IsolationDomainsUpdateResponse,
  L3IsolationDomainsDeleteOptionalParams,
  UpdateAdministrativeState,
  L3IsolationDomainsUpdateAdministrativeStateOptionalParams,
  L3IsolationDomainsUpdateAdministrativeStateResponse,
  L3IsolationDomainsValidateConfigurationOptionalParams,
  L3IsolationDomainsValidateConfigurationResponse,
  L3IsolationDomainsCommitConfigurationOptionalParams,
  L3IsolationDomainsCommitConfigurationResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a L3IsolationDomains. */
export interface L3IsolationDomains {
  /**
   * Displays L3IsolationDomains list by resource group GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: L3IsolationDomainsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<L3IsolationDomain>;
  /**
   * Displays L3IsolationDomains list by subscription GET method.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: L3IsolationDomainsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<L3IsolationDomain>;
  /**
   * Create isolation domain resources for layer 3 connectivity between compute nodes and for
   * communication with external services .This configuration is applied on the devices only after the
   * creation of networks is completed and isolation domain is enabled.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param body Request payload.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    body: L3IsolationDomain,
    options?: L3IsolationDomainsCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<L3IsolationDomainsCreateResponse>,
      L3IsolationDomainsCreateResponse
    >
  >;
  /**
   * Create isolation domain resources for layer 3 connectivity between compute nodes and for
   * communication with external services .This configuration is applied on the devices only after the
   * creation of networks is completed and isolation domain is enabled.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param body Request payload.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    body: L3IsolationDomain,
    options?: L3IsolationDomainsCreateOptionalParams
  ): Promise<L3IsolationDomainsCreateResponse>;
  /**
   * Retrieves details of this L3 Isolation Domain.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    options?: L3IsolationDomainsGetOptionalParams
  ): Promise<L3IsolationDomainsGetResponse>;
  /**
   * API to update certain properties of the L3 Isolation Domain resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param body API to update certain properties of the L3 Isolation Domain resource.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    body: L3IsolationDomainPatch,
    options?: L3IsolationDomainsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<L3IsolationDomainsUpdateResponse>,
      L3IsolationDomainsUpdateResponse
    >
  >;
  /**
   * API to update certain properties of the L3 Isolation Domain resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param body API to update certain properties of the L3 Isolation Domain resource.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    body: L3IsolationDomainPatch,
    options?: L3IsolationDomainsUpdateOptionalParams
  ): Promise<L3IsolationDomainsUpdateResponse>;
  /**
   * Deletes layer 3 connectivity between compute nodes by managed by named L3 Isolation name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    options?: L3IsolationDomainsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes layer 3 connectivity between compute nodes by managed by named L3 Isolation name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    options?: L3IsolationDomainsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Enables racks for this Isolation Domain.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param body Request payload.
   * @param options The options parameters.
   */
  beginUpdateAdministrativeState(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    body: UpdateAdministrativeState,
    options?: L3IsolationDomainsUpdateAdministrativeStateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<L3IsolationDomainsUpdateAdministrativeStateResponse>,
      L3IsolationDomainsUpdateAdministrativeStateResponse
    >
  >;
  /**
   * Enables racks for this Isolation Domain.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param body Request payload.
   * @param options The options parameters.
   */
  beginUpdateAdministrativeStateAndWait(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    body: UpdateAdministrativeState,
    options?: L3IsolationDomainsUpdateAdministrativeStateOptionalParams
  ): Promise<L3IsolationDomainsUpdateAdministrativeStateResponse>;
  /**
   * Validates the configuration of the resources.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param options The options parameters.
   */
  beginValidateConfiguration(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    options?: L3IsolationDomainsValidateConfigurationOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<L3IsolationDomainsValidateConfigurationResponse>,
      L3IsolationDomainsValidateConfigurationResponse
    >
  >;
  /**
   * Validates the configuration of the resources.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param options The options parameters.
   */
  beginValidateConfigurationAndWait(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    options?: L3IsolationDomainsValidateConfigurationOptionalParams
  ): Promise<L3IsolationDomainsValidateConfigurationResponse>;
  /**
   * Commits the configuration of the given resources.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param options The options parameters.
   */
  beginCommitConfiguration(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    options?: L3IsolationDomainsCommitConfigurationOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<L3IsolationDomainsCommitConfigurationResponse>,
      L3IsolationDomainsCommitConfigurationResponse
    >
  >;
  /**
   * Commits the configuration of the given resources.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param options The options parameters.
   */
  beginCommitConfigurationAndWait(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    options?: L3IsolationDomainsCommitConfigurationOptionalParams
  ): Promise<L3IsolationDomainsCommitConfigurationResponse>;
}
