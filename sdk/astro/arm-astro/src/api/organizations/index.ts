// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  organizationPropertiesSerializer,
  managedServiceIdentityV4Serializer,
  organizationResourceUpdatePropertiesSerializer,
  OrganizationResource,
  OrganizationResourceUpdate,
  _OrganizationResourceListResult,
} from "../../models/models.js";
import { AstroContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  OrganizationsGetOptionalParams,
  OrganizationsCreateOrUpdateOptionalParams,
  OrganizationsUpdateOptionalParams,
  OrganizationsDeleteOptionalParams,
  OrganizationsListByResourceGroupOptionalParams,
  OrganizationsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _organizationsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  options: OrganizationsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Astronomer.Astro/organizations/{organizationName}",
      subscriptionId,
      resourceGroupName,
      organizationName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _organizationsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<OrganizationResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    tags: result.body["tags"],
    location: result.body["location"],
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          marketplace: {
            subscriptionId:
              result.body.properties?.marketplace["subscriptionId"],
            subscriptionStatus:
              result.body.properties?.marketplace["subscriptionStatus"],
            offerDetails: {
              publisherId:
                result.body.properties?.marketplace.offerDetails["publisherId"],
              offerId:
                result.body.properties?.marketplace.offerDetails["offerId"],
              planId:
                result.body.properties?.marketplace.offerDetails["planId"],
              planName:
                result.body.properties?.marketplace.offerDetails["planName"],
              termUnit:
                result.body.properties?.marketplace.offerDetails["termUnit"],
              termId:
                result.body.properties?.marketplace.offerDetails["termId"],
              renewalMode:
                result.body.properties?.marketplace.offerDetails["renewalMode"],
              endDate:
                result.body.properties?.marketplace.offerDetails["endDate"] !==
                undefined
                  ? new Date(
                      result.body.properties?.marketplace.offerDetails[
                        "endDate"
                      ],
                    )
                  : undefined,
            },
          },
          user: {
            firstName: result.body.properties?.user["firstName"],
            lastName: result.body.properties?.user["lastName"],
            emailAddress: result.body.properties?.user["emailAddress"],
            upn: result.body.properties?.user["upn"],
            phoneNumber: result.body.properties?.user["phoneNumber"],
          },
          provisioningState: result.body.properties?.["provisioningState"],
          partnerOrganizationProperties: !result.body.properties
            ?.partnerOrganizationProperties
            ? undefined
            : {
                organizationId:
                  result.body.properties?.partnerOrganizationProperties?.[
                    "organizationId"
                  ],
                workspaceId:
                  result.body.properties?.partnerOrganizationProperties?.[
                    "workspaceId"
                  ],
                organizationName:
                  result.body.properties?.partnerOrganizationProperties?.[
                    "organizationName"
                  ],
                workspaceName:
                  result.body.properties?.partnerOrganizationProperties?.[
                    "workspaceName"
                  ],
                singleSignOnProperties: !result.body.properties
                  ?.partnerOrganizationProperties?.singleSignOnProperties
                  ? undefined
                  : {
                      singleSignOnState:
                        result.body.properties?.partnerOrganizationProperties
                          ?.singleSignOnProperties?.["singleSignOnState"],
                      enterpriseAppId:
                        result.body.properties?.partnerOrganizationProperties
                          ?.singleSignOnProperties?.["enterpriseAppId"],
                      singleSignOnUrl:
                        result.body.properties?.partnerOrganizationProperties
                          ?.singleSignOnProperties?.["singleSignOnUrl"],
                      aadDomains:
                        result.body.properties?.partnerOrganizationProperties
                          ?.singleSignOnProperties?.["aadDomains"],
                      provisioningState:
                        result.body.properties?.partnerOrganizationProperties
                          ?.singleSignOnProperties?.["provisioningState"],
                    },
              },
        },
    identity: !result.body.identity
      ? undefined
      : {
          principalId: result.body.identity?.["principalId"],
          tenantId: result.body.identity?.["tenantId"],
          type: result.body.identity?.["type"],
          userAssignedIdentities:
            result.body.identity?.["userAssignedIdentities"],
        },
  };
}

/** Get a OrganizationResource */
export async function organizationsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  options: OrganizationsGetOptionalParams = { requestOptions: {} },
): Promise<OrganizationResource> {
  const result = await _organizationsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    organizationName,
    options,
  );
  return _organizationsGetDeserialize(result);
}

export function _organizationsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  resource: OrganizationResource,
  options: OrganizationsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Astronomer.Astro/organizations/{organizationName}",
      subscriptionId,
      resourceGroupName,
      organizationName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !resource.tags
          ? resource.tags
          : (serializeRecord(resource.tags as any) as any),
        location: resource["location"],
        properties: !resource.properties
          ? resource.properties
          : organizationPropertiesSerializer(resource.properties),
        identity: !resource.identity
          ? resource.identity
          : managedServiceIdentityV4Serializer(resource.identity),
      },
    });
}

export async function _organizationsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<OrganizationResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    tags: result.body["tags"],
    location: result.body["location"],
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          marketplace: {
            subscriptionId:
              result.body.properties?.marketplace["subscriptionId"],
            subscriptionStatus:
              result.body.properties?.marketplace["subscriptionStatus"],
            offerDetails: {
              publisherId:
                result.body.properties?.marketplace.offerDetails["publisherId"],
              offerId:
                result.body.properties?.marketplace.offerDetails["offerId"],
              planId:
                result.body.properties?.marketplace.offerDetails["planId"],
              planName:
                result.body.properties?.marketplace.offerDetails["planName"],
              termUnit:
                result.body.properties?.marketplace.offerDetails["termUnit"],
              termId:
                result.body.properties?.marketplace.offerDetails["termId"],
              renewalMode:
                result.body.properties?.marketplace.offerDetails["renewalMode"],
              endDate:
                result.body.properties?.marketplace.offerDetails["endDate"] !==
                undefined
                  ? new Date(
                      result.body.properties?.marketplace.offerDetails[
                        "endDate"
                      ],
                    )
                  : undefined,
            },
          },
          user: {
            firstName: result.body.properties?.user["firstName"],
            lastName: result.body.properties?.user["lastName"],
            emailAddress: result.body.properties?.user["emailAddress"],
            upn: result.body.properties?.user["upn"],
            phoneNumber: result.body.properties?.user["phoneNumber"],
          },
          provisioningState: result.body.properties?.["provisioningState"],
          partnerOrganizationProperties: !result.body.properties
            ?.partnerOrganizationProperties
            ? undefined
            : {
                organizationId:
                  result.body.properties?.partnerOrganizationProperties?.[
                    "organizationId"
                  ],
                workspaceId:
                  result.body.properties?.partnerOrganizationProperties?.[
                    "workspaceId"
                  ],
                organizationName:
                  result.body.properties?.partnerOrganizationProperties?.[
                    "organizationName"
                  ],
                workspaceName:
                  result.body.properties?.partnerOrganizationProperties?.[
                    "workspaceName"
                  ],
                singleSignOnProperties: !result.body.properties
                  ?.partnerOrganizationProperties?.singleSignOnProperties
                  ? undefined
                  : {
                      singleSignOnState:
                        result.body.properties?.partnerOrganizationProperties
                          ?.singleSignOnProperties?.["singleSignOnState"],
                      enterpriseAppId:
                        result.body.properties?.partnerOrganizationProperties
                          ?.singleSignOnProperties?.["enterpriseAppId"],
                      singleSignOnUrl:
                        result.body.properties?.partnerOrganizationProperties
                          ?.singleSignOnProperties?.["singleSignOnUrl"],
                      aadDomains:
                        result.body.properties?.partnerOrganizationProperties
                          ?.singleSignOnProperties?.["aadDomains"],
                      provisioningState:
                        result.body.properties?.partnerOrganizationProperties
                          ?.singleSignOnProperties?.["provisioningState"],
                    },
              },
        },
    identity: !result.body.identity
      ? undefined
      : {
          principalId: result.body.identity?.["principalId"],
          tenantId: result.body.identity?.["tenantId"],
          type: result.body.identity?.["type"],
          userAssignedIdentities:
            result.body.identity?.["userAssignedIdentities"],
        },
  };
}

/** Create a OrganizationResource */
export function organizationsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  resource: OrganizationResource,
  options: OrganizationsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<OrganizationResource>, OrganizationResource> {
  return getLongRunningPoller(
    context,
    _organizationsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _organizationsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          organizationName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<OrganizationResource>, OrganizationResource>;
}

export function _organizationsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  properties: OrganizationResourceUpdate,
  options: OrganizationsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Astronomer.Astro/organizations/{organizationName}",
      subscriptionId,
      resourceGroupName,
      organizationName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        identity: !properties.identity
          ? properties.identity
          : managedServiceIdentityV4Serializer(properties.identity),
        tags: !properties.tags
          ? properties.tags
          : (serializeRecord(properties.tags as any) as any),
        properties: !properties.properties
          ? properties.properties
          : organizationResourceUpdatePropertiesSerializer(
              properties.properties,
            ),
      },
    });
}

export async function _organizationsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<OrganizationResource> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    tags: result.body["tags"],
    location: result.body["location"],
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          marketplace: {
            subscriptionId:
              result.body.properties?.marketplace["subscriptionId"],
            subscriptionStatus:
              result.body.properties?.marketplace["subscriptionStatus"],
            offerDetails: {
              publisherId:
                result.body.properties?.marketplace.offerDetails["publisherId"],
              offerId:
                result.body.properties?.marketplace.offerDetails["offerId"],
              planId:
                result.body.properties?.marketplace.offerDetails["planId"],
              planName:
                result.body.properties?.marketplace.offerDetails["planName"],
              termUnit:
                result.body.properties?.marketplace.offerDetails["termUnit"],
              termId:
                result.body.properties?.marketplace.offerDetails["termId"],
              renewalMode:
                result.body.properties?.marketplace.offerDetails["renewalMode"],
              endDate:
                result.body.properties?.marketplace.offerDetails["endDate"] !==
                undefined
                  ? new Date(
                      result.body.properties?.marketplace.offerDetails[
                        "endDate"
                      ],
                    )
                  : undefined,
            },
          },
          user: {
            firstName: result.body.properties?.user["firstName"],
            lastName: result.body.properties?.user["lastName"],
            emailAddress: result.body.properties?.user["emailAddress"],
            upn: result.body.properties?.user["upn"],
            phoneNumber: result.body.properties?.user["phoneNumber"],
          },
          provisioningState: result.body.properties?.["provisioningState"],
          partnerOrganizationProperties: !result.body.properties
            ?.partnerOrganizationProperties
            ? undefined
            : {
                organizationId:
                  result.body.properties?.partnerOrganizationProperties?.[
                    "organizationId"
                  ],
                workspaceId:
                  result.body.properties?.partnerOrganizationProperties?.[
                    "workspaceId"
                  ],
                organizationName:
                  result.body.properties?.partnerOrganizationProperties?.[
                    "organizationName"
                  ],
                workspaceName:
                  result.body.properties?.partnerOrganizationProperties?.[
                    "workspaceName"
                  ],
                singleSignOnProperties: !result.body.properties
                  ?.partnerOrganizationProperties?.singleSignOnProperties
                  ? undefined
                  : {
                      singleSignOnState:
                        result.body.properties?.partnerOrganizationProperties
                          ?.singleSignOnProperties?.["singleSignOnState"],
                      enterpriseAppId:
                        result.body.properties?.partnerOrganizationProperties
                          ?.singleSignOnProperties?.["enterpriseAppId"],
                      singleSignOnUrl:
                        result.body.properties?.partnerOrganizationProperties
                          ?.singleSignOnProperties?.["singleSignOnUrl"],
                      aadDomains:
                        result.body.properties?.partnerOrganizationProperties
                          ?.singleSignOnProperties?.["aadDomains"],
                      provisioningState:
                        result.body.properties?.partnerOrganizationProperties
                          ?.singleSignOnProperties?.["provisioningState"],
                    },
              },
        },
    identity: !result.body.identity
      ? undefined
      : {
          principalId: result.body.identity?.["principalId"],
          tenantId: result.body.identity?.["tenantId"],
          type: result.body.identity?.["type"],
          userAssignedIdentities:
            result.body.identity?.["userAssignedIdentities"],
        },
  };
}

/** Update a OrganizationResource */
export function organizationsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  properties: OrganizationResourceUpdate,
  options: OrganizationsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<OrganizationResource>, OrganizationResource> {
  return getLongRunningPoller(
    context,
    _organizationsUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _organizationsUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          organizationName,
          properties,
          options,
        ),
    },
  ) as PollerLike<OperationState<OrganizationResource>, OrganizationResource>;
}

export function _organizationsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  options: OrganizationsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Astronomer.Astro/organizations/{organizationName}",
      subscriptionId,
      resourceGroupName,
      organizationName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _organizationsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a OrganizationResource */
export function organizationsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  options: OrganizationsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _organizationsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _organizationsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          organizationName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _organizationsListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: OrganizationsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Astronomer.Astro/organizations",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _organizationsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_OrganizationResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        tags: p["tags"],
        location: p["location"],
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"],
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.["lastModifiedByType"],
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        properties: !p.properties
          ? undefined
          : {
              marketplace: {
                subscriptionId: p.properties?.marketplace["subscriptionId"],
                subscriptionStatus:
                  p.properties?.marketplace["subscriptionStatus"],
                offerDetails: {
                  publisherId:
                    p.properties?.marketplace.offerDetails["publisherId"],
                  offerId: p.properties?.marketplace.offerDetails["offerId"],
                  planId: p.properties?.marketplace.offerDetails["planId"],
                  planName: p.properties?.marketplace.offerDetails["planName"],
                  termUnit: p.properties?.marketplace.offerDetails["termUnit"],
                  termId: p.properties?.marketplace.offerDetails["termId"],
                  renewalMode:
                    p.properties?.marketplace.offerDetails["renewalMode"],
                  endDate:
                    p.properties?.marketplace.offerDetails["endDate"] !==
                    undefined
                      ? new Date(
                          p.properties?.marketplace.offerDetails["endDate"],
                        )
                      : undefined,
                },
              },
              user: {
                firstName: p.properties?.user["firstName"],
                lastName: p.properties?.user["lastName"],
                emailAddress: p.properties?.user["emailAddress"],
                upn: p.properties?.user["upn"],
                phoneNumber: p.properties?.user["phoneNumber"],
              },
              provisioningState: p.properties?.["provisioningState"],
              partnerOrganizationProperties: !p.properties
                ?.partnerOrganizationProperties
                ? undefined
                : {
                    organizationId:
                      p.properties?.partnerOrganizationProperties?.[
                        "organizationId"
                      ],
                    workspaceId:
                      p.properties?.partnerOrganizationProperties?.[
                        "workspaceId"
                      ],
                    organizationName:
                      p.properties?.partnerOrganizationProperties?.[
                        "organizationName"
                      ],
                    workspaceName:
                      p.properties?.partnerOrganizationProperties?.[
                        "workspaceName"
                      ],
                    singleSignOnProperties: !p.properties
                      ?.partnerOrganizationProperties?.singleSignOnProperties
                      ? undefined
                      : {
                          singleSignOnState:
                            p.properties?.partnerOrganizationProperties
                              ?.singleSignOnProperties?.["singleSignOnState"],
                          enterpriseAppId:
                            p.properties?.partnerOrganizationProperties
                              ?.singleSignOnProperties?.["enterpriseAppId"],
                          singleSignOnUrl:
                            p.properties?.partnerOrganizationProperties
                              ?.singleSignOnProperties?.["singleSignOnUrl"],
                          aadDomains:
                            p.properties?.partnerOrganizationProperties
                              ?.singleSignOnProperties?.["aadDomains"],
                          provisioningState:
                            p.properties?.partnerOrganizationProperties
                              ?.singleSignOnProperties?.["provisioningState"],
                        },
                  },
            },
        identity: !p.identity
          ? undefined
          : {
              principalId: p.identity?.["principalId"],
              tenantId: p.identity?.["tenantId"],
              type: p.identity?.["type"],
              userAssignedIdentities: p.identity?.["userAssignedIdentities"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List OrganizationResource resources by resource group */
export function organizationsListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: OrganizationsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<OrganizationResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _organizationsListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _organizationsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _organizationsListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: OrganizationsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Astronomer.Astro/organizations",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _organizationsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_OrganizationResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        tags: p["tags"],
        location: p["location"],
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"],
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.["lastModifiedByType"],
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        properties: !p.properties
          ? undefined
          : {
              marketplace: {
                subscriptionId: p.properties?.marketplace["subscriptionId"],
                subscriptionStatus:
                  p.properties?.marketplace["subscriptionStatus"],
                offerDetails: {
                  publisherId:
                    p.properties?.marketplace.offerDetails["publisherId"],
                  offerId: p.properties?.marketplace.offerDetails["offerId"],
                  planId: p.properties?.marketplace.offerDetails["planId"],
                  planName: p.properties?.marketplace.offerDetails["planName"],
                  termUnit: p.properties?.marketplace.offerDetails["termUnit"],
                  termId: p.properties?.marketplace.offerDetails["termId"],
                  renewalMode:
                    p.properties?.marketplace.offerDetails["renewalMode"],
                  endDate:
                    p.properties?.marketplace.offerDetails["endDate"] !==
                    undefined
                      ? new Date(
                          p.properties?.marketplace.offerDetails["endDate"],
                        )
                      : undefined,
                },
              },
              user: {
                firstName: p.properties?.user["firstName"],
                lastName: p.properties?.user["lastName"],
                emailAddress: p.properties?.user["emailAddress"],
                upn: p.properties?.user["upn"],
                phoneNumber: p.properties?.user["phoneNumber"],
              },
              provisioningState: p.properties?.["provisioningState"],
              partnerOrganizationProperties: !p.properties
                ?.partnerOrganizationProperties
                ? undefined
                : {
                    organizationId:
                      p.properties?.partnerOrganizationProperties?.[
                        "organizationId"
                      ],
                    workspaceId:
                      p.properties?.partnerOrganizationProperties?.[
                        "workspaceId"
                      ],
                    organizationName:
                      p.properties?.partnerOrganizationProperties?.[
                        "organizationName"
                      ],
                    workspaceName:
                      p.properties?.partnerOrganizationProperties?.[
                        "workspaceName"
                      ],
                    singleSignOnProperties: !p.properties
                      ?.partnerOrganizationProperties?.singleSignOnProperties
                      ? undefined
                      : {
                          singleSignOnState:
                            p.properties?.partnerOrganizationProperties
                              ?.singleSignOnProperties?.["singleSignOnState"],
                          enterpriseAppId:
                            p.properties?.partnerOrganizationProperties
                              ?.singleSignOnProperties?.["enterpriseAppId"],
                          singleSignOnUrl:
                            p.properties?.partnerOrganizationProperties
                              ?.singleSignOnProperties?.["singleSignOnUrl"],
                          aadDomains:
                            p.properties?.partnerOrganizationProperties
                              ?.singleSignOnProperties?.["aadDomains"],
                          provisioningState:
                            p.properties?.partnerOrganizationProperties
                              ?.singleSignOnProperties?.["provisioningState"],
                        },
                  },
            },
        identity: !p.identity
          ? undefined
          : {
              principalId: p.identity?.["principalId"],
              tenantId: p.identity?.["tenantId"],
              type: p.identity?.["type"],
              userAssignedIdentities: p.identity?.["userAssignedIdentities"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List OrganizationResource resources by subscription ID */
export function organizationsListBySubscription(
  context: Client,
  subscriptionId: string,
  options: OrganizationsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<OrganizationResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _organizationsListBySubscriptionSend(context, subscriptionId, options),
    _organizationsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
