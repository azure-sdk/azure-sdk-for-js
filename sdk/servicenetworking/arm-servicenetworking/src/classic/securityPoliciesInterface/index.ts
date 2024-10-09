// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ServiceNetworkingContext } from "../../api/serviceNetworkingContext.js";
import { SecurityPolicy, SecurityPolicyUpdate } from "../../models/models.js";
import {
  securityPoliciesInterfaceGet,
  securityPoliciesInterfaceCreateOrUpdate,
  securityPoliciesInterfaceUpdate,
  securityPoliciesInterfaceDelete,
  securityPoliciesInterfaceListByTrafficController,
} from "../../api/securityPoliciesInterface/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  SecurityPoliciesInterfaceGetOptionalParams,
  SecurityPoliciesInterfaceCreateOrUpdateOptionalParams,
  SecurityPoliciesInterfaceUpdateOptionalParams,
  SecurityPoliciesInterfaceDeleteOptionalParams,
  SecurityPoliciesInterfaceListByTrafficControllerOptionalParams,
} from "../../models/options.js";

/** Interface representing a SecurityPoliciesInterface operations. */
export interface SecurityPoliciesInterfaceOperations {
  /** Get a SecurityPolicy */
  get: (
    resourceGroupName: string,
    trafficControllerName: string,
    securityPolicyName: string,
    options?: SecurityPoliciesInterfaceGetOptionalParams,
  ) => Promise<SecurityPolicy>;
  /** Create a SecurityPolicy */
  createOrUpdate: (
    resourceGroupName: string,
    trafficControllerName: string,
    securityPolicyName: string,
    resource: SecurityPolicy,
    options?: SecurityPoliciesInterfaceCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<SecurityPolicy>, SecurityPolicy>;
  /** Update a SecurityPolicy */
  update: (
    resourceGroupName: string,
    trafficControllerName: string,
    securityPolicyName: string,
    properties: SecurityPolicyUpdate,
    options?: SecurityPoliciesInterfaceUpdateOptionalParams,
  ) => Promise<SecurityPolicy>;
  /** Delete a SecurityPolicy */
  delete: (
    resourceGroupName: string,
    trafficControllerName: string,
    securityPolicyName: string,
    options?: SecurityPoliciesInterfaceDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List SecurityPolicy resources by TrafficController */
  listByTrafficController: (
    resourceGroupName: string,
    trafficControllerName: string,
    options?: SecurityPoliciesInterfaceListByTrafficControllerOptionalParams,
  ) => PagedAsyncIterableIterator<SecurityPolicy>;
}

export function getSecurityPoliciesInterface(
  context: ServiceNetworkingContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      trafficControllerName: string,
      securityPolicyName: string,
      options?: SecurityPoliciesInterfaceGetOptionalParams,
    ) =>
      securityPoliciesInterfaceGet(
        context,
        subscriptionId,
        resourceGroupName,
        trafficControllerName,
        securityPolicyName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      trafficControllerName: string,
      securityPolicyName: string,
      resource: SecurityPolicy,
      options?: SecurityPoliciesInterfaceCreateOrUpdateOptionalParams,
    ) =>
      securityPoliciesInterfaceCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        trafficControllerName,
        securityPolicyName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      trafficControllerName: string,
      securityPolicyName: string,
      properties: SecurityPolicyUpdate,
      options?: SecurityPoliciesInterfaceUpdateOptionalParams,
    ) =>
      securityPoliciesInterfaceUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        trafficControllerName,
        securityPolicyName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      trafficControllerName: string,
      securityPolicyName: string,
      options?: SecurityPoliciesInterfaceDeleteOptionalParams,
    ) =>
      securityPoliciesInterfaceDelete(
        context,
        subscriptionId,
        resourceGroupName,
        trafficControllerName,
        securityPolicyName,
        options,
      ),
    listByTrafficController: (
      resourceGroupName: string,
      trafficControllerName: string,
      options?: SecurityPoliciesInterfaceListByTrafficControllerOptionalParams,
    ) =>
      securityPoliciesInterfaceListByTrafficController(
        context,
        subscriptionId,
        resourceGroupName,
        trafficControllerName,
        options,
      ),
  };
}

export function getSecurityPoliciesInterfaceOperations(
  context: ServiceNetworkingContext,
  subscriptionId: string,
): SecurityPoliciesInterfaceOperations {
  return {
    ...getSecurityPoliciesInterface(context, subscriptionId),
  };
}
