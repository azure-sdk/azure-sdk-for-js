// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  organizationPropertiesSerializer,
  organizationPropertiesCustomUpdateSerializer,
  InformaticaOrganizationResource,
  InformaticaOrganizationResourceUpdate,
  ServerlessMetadataResponse,
  InformaticaServerlessRuntimeResourceList,
  _InformaticaOrganizationResourceListResult,
} from "../../models/models.js";
import { DataManagementContext as Client } from "../index.js";
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
  OrganizationsGetServerlessMetadataOptionalParams,
  OrganizationsGetAllServerlessRuntimesOptionalParams,
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
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations/{organizationName}",
      subscriptionId,
      resourceGroupName,
      organizationName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _organizationsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<InformaticaOrganizationResource> {
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
          provisioningState: result.body.properties?.["provisioningState"],
          informaticaProperties: !result.body.properties?.informaticaProperties
            ? undefined
            : {
                organizationId:
                  result.body.properties?.informaticaProperties?.[
                    "organizationId"
                  ],
                organizationName:
                  result.body.properties?.informaticaProperties?.[
                    "organizationName"
                  ],
                informaticaRegion:
                  result.body.properties?.informaticaProperties?.[
                    "informaticaRegion"
                  ],
                singleSignOnUrl:
                  result.body.properties?.informaticaProperties?.[
                    "singleSignOnUrl"
                  ],
              },
          marketplaceDetails: !result.body.properties?.marketplaceDetails
            ? undefined
            : {
                marketplaceSubscriptionId:
                  result.body.properties?.marketplaceDetails?.[
                    "marketplaceSubscriptionId"
                  ],
                offerDetails: {
                  publisherId:
                    result.body.properties?.marketplaceDetails?.offerDetails[
                      "publisherId"
                    ],
                  offerId:
                    result.body.properties?.marketplaceDetails?.offerDetails[
                      "offerId"
                    ],
                  planId:
                    result.body.properties?.marketplaceDetails?.offerDetails[
                      "planId"
                    ],
                  planName:
                    result.body.properties?.marketplaceDetails?.offerDetails[
                      "planName"
                    ],
                  termUnit:
                    result.body.properties?.marketplaceDetails?.offerDetails[
                      "termUnit"
                    ],
                  termId:
                    result.body.properties?.marketplaceDetails?.offerDetails[
                      "termId"
                    ],
                },
              },
          userDetails: !result.body.properties?.userDetails
            ? undefined
            : {
                firstName: result.body.properties?.userDetails?.["firstName"],
                lastName: result.body.properties?.userDetails?.["lastName"],
                emailAddress:
                  result.body.properties?.userDetails?.["emailAddress"],
                upn: result.body.properties?.userDetails?.["upn"],
                phoneNumber:
                  result.body.properties?.userDetails?.["phoneNumber"],
              },
          companyDetails: !result.body.properties?.companyDetails
            ? undefined
            : {
                companyName:
                  result.body.properties?.companyDetails?.["companyName"],
                officeAddress:
                  result.body.properties?.companyDetails?.["officeAddress"],
                country: result.body.properties?.companyDetails?.["country"],
                domain: result.body.properties?.companyDetails?.["domain"],
                business: result.body.properties?.companyDetails?.["business"],
                numberOfEmployees:
                  result.body.properties?.companyDetails?.["numberOfEmployees"],
              },
          linkOrganization: !result.body.properties?.linkOrganization
            ? undefined
            : { token: result.body.properties?.linkOrganization?.["token"] },
        },
  };
}

/** Get a InformaticaOrganizationResource */
export async function organizationsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  options: OrganizationsGetOptionalParams = { requestOptions: {} },
): Promise<InformaticaOrganizationResource> {
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
  resource: InformaticaOrganizationResource,
  options: OrganizationsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations/{organizationName}",
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
      },
    });
}

export async function _organizationsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<InformaticaOrganizationResource> {
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
          provisioningState: result.body.properties?.["provisioningState"],
          informaticaProperties: !result.body.properties?.informaticaProperties
            ? undefined
            : {
                organizationId:
                  result.body.properties?.informaticaProperties?.[
                    "organizationId"
                  ],
                organizationName:
                  result.body.properties?.informaticaProperties?.[
                    "organizationName"
                  ],
                informaticaRegion:
                  result.body.properties?.informaticaProperties?.[
                    "informaticaRegion"
                  ],
                singleSignOnUrl:
                  result.body.properties?.informaticaProperties?.[
                    "singleSignOnUrl"
                  ],
              },
          marketplaceDetails: !result.body.properties?.marketplaceDetails
            ? undefined
            : {
                marketplaceSubscriptionId:
                  result.body.properties?.marketplaceDetails?.[
                    "marketplaceSubscriptionId"
                  ],
                offerDetails: {
                  publisherId:
                    result.body.properties?.marketplaceDetails?.offerDetails[
                      "publisherId"
                    ],
                  offerId:
                    result.body.properties?.marketplaceDetails?.offerDetails[
                      "offerId"
                    ],
                  planId:
                    result.body.properties?.marketplaceDetails?.offerDetails[
                      "planId"
                    ],
                  planName:
                    result.body.properties?.marketplaceDetails?.offerDetails[
                      "planName"
                    ],
                  termUnit:
                    result.body.properties?.marketplaceDetails?.offerDetails[
                      "termUnit"
                    ],
                  termId:
                    result.body.properties?.marketplaceDetails?.offerDetails[
                      "termId"
                    ],
                },
              },
          userDetails: !result.body.properties?.userDetails
            ? undefined
            : {
                firstName: result.body.properties?.userDetails?.["firstName"],
                lastName: result.body.properties?.userDetails?.["lastName"],
                emailAddress:
                  result.body.properties?.userDetails?.["emailAddress"],
                upn: result.body.properties?.userDetails?.["upn"],
                phoneNumber:
                  result.body.properties?.userDetails?.["phoneNumber"],
              },
          companyDetails: !result.body.properties?.companyDetails
            ? undefined
            : {
                companyName:
                  result.body.properties?.companyDetails?.["companyName"],
                officeAddress:
                  result.body.properties?.companyDetails?.["officeAddress"],
                country: result.body.properties?.companyDetails?.["country"],
                domain: result.body.properties?.companyDetails?.["domain"],
                business: result.body.properties?.companyDetails?.["business"],
                numberOfEmployees:
                  result.body.properties?.companyDetails?.["numberOfEmployees"],
              },
          linkOrganization: !result.body.properties?.linkOrganization
            ? undefined
            : { token: result.body.properties?.linkOrganization?.["token"] },
        },
  };
}

/** Create a InformaticaOrganizationResource */
export function organizationsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  resource: InformaticaOrganizationResource,
  options: OrganizationsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<
  OperationState<InformaticaOrganizationResource>,
  InformaticaOrganizationResource
> {
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
  ) as PollerLike<
    OperationState<InformaticaOrganizationResource>,
    InformaticaOrganizationResource
  >;
}

export function _organizationsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  properties: InformaticaOrganizationResourceUpdate,
  options: OrganizationsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations/{organizationName}",
      subscriptionId,
      resourceGroupName,
      organizationName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !properties.tags
          ? properties.tags
          : (serializeRecord(properties.tags as any) as any),
        properties: !properties.properties
          ? properties.properties
          : organizationPropertiesCustomUpdateSerializer(properties.properties),
      },
    });
}

export async function _organizationsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<InformaticaOrganizationResource> {
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
          provisioningState: result.body.properties?.["provisioningState"],
          informaticaProperties: !result.body.properties?.informaticaProperties
            ? undefined
            : {
                organizationId:
                  result.body.properties?.informaticaProperties?.[
                    "organizationId"
                  ],
                organizationName:
                  result.body.properties?.informaticaProperties?.[
                    "organizationName"
                  ],
                informaticaRegion:
                  result.body.properties?.informaticaProperties?.[
                    "informaticaRegion"
                  ],
                singleSignOnUrl:
                  result.body.properties?.informaticaProperties?.[
                    "singleSignOnUrl"
                  ],
              },
          marketplaceDetails: !result.body.properties?.marketplaceDetails
            ? undefined
            : {
                marketplaceSubscriptionId:
                  result.body.properties?.marketplaceDetails?.[
                    "marketplaceSubscriptionId"
                  ],
                offerDetails: {
                  publisherId:
                    result.body.properties?.marketplaceDetails?.offerDetails[
                      "publisherId"
                    ],
                  offerId:
                    result.body.properties?.marketplaceDetails?.offerDetails[
                      "offerId"
                    ],
                  planId:
                    result.body.properties?.marketplaceDetails?.offerDetails[
                      "planId"
                    ],
                  planName:
                    result.body.properties?.marketplaceDetails?.offerDetails[
                      "planName"
                    ],
                  termUnit:
                    result.body.properties?.marketplaceDetails?.offerDetails[
                      "termUnit"
                    ],
                  termId:
                    result.body.properties?.marketplaceDetails?.offerDetails[
                      "termId"
                    ],
                },
              },
          userDetails: !result.body.properties?.userDetails
            ? undefined
            : {
                firstName: result.body.properties?.userDetails?.["firstName"],
                lastName: result.body.properties?.userDetails?.["lastName"],
                emailAddress:
                  result.body.properties?.userDetails?.["emailAddress"],
                upn: result.body.properties?.userDetails?.["upn"],
                phoneNumber:
                  result.body.properties?.userDetails?.["phoneNumber"],
              },
          companyDetails: !result.body.properties?.companyDetails
            ? undefined
            : {
                companyName:
                  result.body.properties?.companyDetails?.["companyName"],
                officeAddress:
                  result.body.properties?.companyDetails?.["officeAddress"],
                country: result.body.properties?.companyDetails?.["country"],
                domain: result.body.properties?.companyDetails?.["domain"],
                business: result.body.properties?.companyDetails?.["business"],
                numberOfEmployees:
                  result.body.properties?.companyDetails?.["numberOfEmployees"],
              },
          linkOrganization: !result.body.properties?.linkOrganization
            ? undefined
            : { token: result.body.properties?.linkOrganization?.["token"] },
        },
  };
}

/** Update a InformaticaOrganizationResource */
export async function organizationsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  properties: InformaticaOrganizationResourceUpdate,
  options: OrganizationsUpdateOptionalParams = { requestOptions: {} },
): Promise<InformaticaOrganizationResource> {
  const result = await _organizationsUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    organizationName,
    properties,
    options,
  );
  return _organizationsUpdateDeserialize(result);
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
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations/{organizationName}",
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

/** Delete a InformaticaOrganizationResource */
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
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _organizationsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_InformaticaOrganizationResourceListResult> {
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
              provisioningState: p.properties?.["provisioningState"],
              informaticaProperties: !p.properties?.informaticaProperties
                ? undefined
                : {
                    organizationId:
                      p.properties?.informaticaProperties?.["organizationId"],
                    organizationName:
                      p.properties?.informaticaProperties?.["organizationName"],
                    informaticaRegion:
                      p.properties?.informaticaProperties?.[
                        "informaticaRegion"
                      ],
                    singleSignOnUrl:
                      p.properties?.informaticaProperties?.["singleSignOnUrl"],
                  },
              marketplaceDetails: !p.properties?.marketplaceDetails
                ? undefined
                : {
                    marketplaceSubscriptionId:
                      p.properties?.marketplaceDetails?.[
                        "marketplaceSubscriptionId"
                      ],
                    offerDetails: {
                      publisherId:
                        p.properties?.marketplaceDetails?.offerDetails[
                          "publisherId"
                        ],
                      offerId:
                        p.properties?.marketplaceDetails?.offerDetails[
                          "offerId"
                        ],
                      planId:
                        p.properties?.marketplaceDetails?.offerDetails[
                          "planId"
                        ],
                      planName:
                        p.properties?.marketplaceDetails?.offerDetails[
                          "planName"
                        ],
                      termUnit:
                        p.properties?.marketplaceDetails?.offerDetails[
                          "termUnit"
                        ],
                      termId:
                        p.properties?.marketplaceDetails?.offerDetails[
                          "termId"
                        ],
                    },
                  },
              userDetails: !p.properties?.userDetails
                ? undefined
                : {
                    firstName: p.properties?.userDetails?.["firstName"],
                    lastName: p.properties?.userDetails?.["lastName"],
                    emailAddress: p.properties?.userDetails?.["emailAddress"],
                    upn: p.properties?.userDetails?.["upn"],
                    phoneNumber: p.properties?.userDetails?.["phoneNumber"],
                  },
              companyDetails: !p.properties?.companyDetails
                ? undefined
                : {
                    companyName: p.properties?.companyDetails?.["companyName"],
                    officeAddress:
                      p.properties?.companyDetails?.["officeAddress"],
                    country: p.properties?.companyDetails?.["country"],
                    domain: p.properties?.companyDetails?.["domain"],
                    business: p.properties?.companyDetails?.["business"],
                    numberOfEmployees:
                      p.properties?.companyDetails?.["numberOfEmployees"],
                  },
              linkOrganization: !p.properties?.linkOrganization
                ? undefined
                : { token: p.properties?.linkOrganization?.["token"] },
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List InformaticaOrganizationResource resources by resource group */
export function organizationsListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: OrganizationsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<InformaticaOrganizationResource> {
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
      "/subscriptions/{subscriptionId}/providers/Informatica.DataManagement/organizations",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _organizationsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_InformaticaOrganizationResourceListResult> {
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
              provisioningState: p.properties?.["provisioningState"],
              informaticaProperties: !p.properties?.informaticaProperties
                ? undefined
                : {
                    organizationId:
                      p.properties?.informaticaProperties?.["organizationId"],
                    organizationName:
                      p.properties?.informaticaProperties?.["organizationName"],
                    informaticaRegion:
                      p.properties?.informaticaProperties?.[
                        "informaticaRegion"
                      ],
                    singleSignOnUrl:
                      p.properties?.informaticaProperties?.["singleSignOnUrl"],
                  },
              marketplaceDetails: !p.properties?.marketplaceDetails
                ? undefined
                : {
                    marketplaceSubscriptionId:
                      p.properties?.marketplaceDetails?.[
                        "marketplaceSubscriptionId"
                      ],
                    offerDetails: {
                      publisherId:
                        p.properties?.marketplaceDetails?.offerDetails[
                          "publisherId"
                        ],
                      offerId:
                        p.properties?.marketplaceDetails?.offerDetails[
                          "offerId"
                        ],
                      planId:
                        p.properties?.marketplaceDetails?.offerDetails[
                          "planId"
                        ],
                      planName:
                        p.properties?.marketplaceDetails?.offerDetails[
                          "planName"
                        ],
                      termUnit:
                        p.properties?.marketplaceDetails?.offerDetails[
                          "termUnit"
                        ],
                      termId:
                        p.properties?.marketplaceDetails?.offerDetails[
                          "termId"
                        ],
                    },
                  },
              userDetails: !p.properties?.userDetails
                ? undefined
                : {
                    firstName: p.properties?.userDetails?.["firstName"],
                    lastName: p.properties?.userDetails?.["lastName"],
                    emailAddress: p.properties?.userDetails?.["emailAddress"],
                    upn: p.properties?.userDetails?.["upn"],
                    phoneNumber: p.properties?.userDetails?.["phoneNumber"],
                  },
              companyDetails: !p.properties?.companyDetails
                ? undefined
                : {
                    companyName: p.properties?.companyDetails?.["companyName"],
                    officeAddress:
                      p.properties?.companyDetails?.["officeAddress"],
                    country: p.properties?.companyDetails?.["country"],
                    domain: p.properties?.companyDetails?.["domain"],
                    business: p.properties?.companyDetails?.["business"],
                    numberOfEmployees:
                      p.properties?.companyDetails?.["numberOfEmployees"],
                  },
              linkOrganization: !p.properties?.linkOrganization
                ? undefined
                : { token: p.properties?.linkOrganization?.["token"] },
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List InformaticaOrganizationResource resources by subscription ID */
export function organizationsListBySubscription(
  context: Client,
  subscriptionId: string,
  options: OrganizationsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<InformaticaOrganizationResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _organizationsListBySubscriptionSend(context, subscriptionId, options),
    _organizationsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _organizationsGetServerlessMetadataSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  options: OrganizationsGetServerlessMetadataOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations/{organizationName}/getServerlessMetadata",
      subscriptionId,
      resourceGroupName,
      organizationName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _organizationsGetServerlessMetadataDeserialize(
  result: PathUncheckedResponse,
): Promise<ServerlessMetadataResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    type: result.body["type"],
    serverlessConfigProperties: !result.body.serverlessConfigProperties
      ? undefined
      : {
          platform: result.body.serverlessConfigProperties?.["platform"],
          applicationTypes:
            result.body.serverlessConfigProperties?.["applicationTypes"] ===
            undefined
              ? result.body.serverlessConfigProperties?.["applicationTypes"]
              : result.body.serverlessConfigProperties?.[
                  "applicationTypes"
                ].map((p: any) => {
                  return { name: p["name"], value: p["value"] };
                }),
          computeUnits:
            result.body.serverlessConfigProperties?.["computeUnits"] ===
            undefined
              ? result.body.serverlessConfigProperties?.["computeUnits"]
              : result.body.serverlessConfigProperties?.["computeUnits"].map(
                  (p: any) => {
                    return { name: p["name"], value: p["value"] };
                  },
                ),
          executionTimeout:
            result.body.serverlessConfigProperties?.["executionTimeout"],
          regions:
            result.body.serverlessConfigProperties?.["regions"] === undefined
              ? result.body.serverlessConfigProperties?.["regions"]
              : result.body.serverlessConfigProperties?.["regions"].map(
                  (p: any) => {
                    return { id: p["id"], name: p["name"] };
                  },
                ),
        },
    serverlessRuntimeConfigProperties: !result.body
      .serverlessRuntimeConfigProperties
      ? undefined
      : {
          cdiConfigProps:
            result.body.serverlessRuntimeConfigProperties?.[
              "cdiConfigProps"
            ] === undefined
              ? result.body.serverlessRuntimeConfigProperties?.[
                  "cdiConfigProps"
                ]
              : result.body.serverlessRuntimeConfigProperties?.[
                  "cdiConfigProps"
                ].map((p: any) => {
                  return {
                    engineName: p["engineName"],
                    engineVersion: p["engineVersion"],
                    applicationConfigs: p["applicationConfigs"].map(
                      (p: any) => {
                        return {
                          type: p["type"],
                          name: p["name"],
                          value: p["value"],
                          platform: p["platform"],
                          customized: p["customized"],
                          defaultValue: p["defaultValue"],
                        };
                      },
                    ),
                  };
                }),
          cdieConfigProps:
            result.body.serverlessRuntimeConfigProperties?.[
              "cdieConfigProps"
            ] === undefined
              ? result.body.serverlessRuntimeConfigProperties?.[
                  "cdieConfigProps"
                ]
              : result.body.serverlessRuntimeConfigProperties?.[
                  "cdieConfigProps"
                ].map((p: any) => {
                  return {
                    engineName: p["engineName"],
                    engineVersion: p["engineVersion"],
                    applicationConfigs: p["applicationConfigs"].map(
                      (p: any) => {
                        return {
                          type: p["type"],
                          name: p["name"],
                          value: p["value"],
                          platform: p["platform"],
                          customized: p["customized"],
                          defaultValue: p["defaultValue"],
                        };
                      },
                    ),
                  };
                }),
        },
  };
}

/** Gets Metadata of the serverless runtime environment. */
export async function organizationsGetServerlessMetadata(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  options: OrganizationsGetServerlessMetadataOptionalParams = {
    requestOptions: {},
  },
): Promise<ServerlessMetadataResponse> {
  const result = await _organizationsGetServerlessMetadataSend(
    context,
    subscriptionId,
    resourceGroupName,
    organizationName,
    options,
  );
  return _organizationsGetServerlessMetadataDeserialize(result);
}

export function _organizationsGetAllServerlessRuntimesSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  options: OrganizationsGetAllServerlessRuntimesOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Informatica.DataManagement/organizations/{organizationName}/getAllServerlessRuntimes",
      subscriptionId,
      resourceGroupName,
      organizationName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _organizationsGetAllServerlessRuntimesDeserialize(
  result: PathUncheckedResponse,
): Promise<InformaticaServerlessRuntimeResourceList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    informaticaRuntimeResources: result.body["informaticaRuntimeResources"].map(
      (p: any) => {
        return {
          name: p["name"],
          createdTime: p["createdTime"],
          updatedTime: p["updatedTime"],
          createdBy: p["createdBy"],
          updatedBy: p["updatedBy"],
          id: p["id"],
          type: p["type"],
          status: p["status"],
          statusLocalized: p["statusLocalized"],
          statusMessage: p["statusMessage"],
          serverlessConfigProperties: {
            subnet: p.serverlessConfigProperties["subnet"],
            applicationType: p.serverlessConfigProperties["applicationType"],
            resourceGroupName:
              p.serverlessConfigProperties["resourceGroupName"],
            advancedCustomProperties:
              p.serverlessConfigProperties["advancedCustomProperties"],
            supplementaryFileLocation:
              p.serverlessConfigProperties["supplementaryFileLocation"],
            platform: p.serverlessConfigProperties["platform"],
            tags: p.serverlessConfigProperties["tags"],
            vnet: p.serverlessConfigProperties["vnet"],
            executionTimeout: p.serverlessConfigProperties["executionTimeout"],
            computeUnits: p.serverlessConfigProperties["computeUnits"],
            tenantId: p.serverlessConfigProperties["tenantId"],
            subscriptionId: p.serverlessConfigProperties["subscriptionId"],
            region: p.serverlessConfigProperties["region"],
            serverlessArmResourceId:
              p.serverlessConfigProperties["serverlessArmResourceId"],
          },
          description: p["description"],
        };
      },
    ),
  };
}

/** Gets all serverless runtime resources in a given informatica organization resource. */
export async function organizationsGetAllServerlessRuntimes(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  organizationName: string,
  options: OrganizationsGetAllServerlessRuntimesOptionalParams = {
    requestOptions: {},
  },
): Promise<InformaticaServerlessRuntimeResourceList> {
  const result = await _organizationsGetAllServerlessRuntimesSend(
    context,
    subscriptionId,
    resourceGroupName,
    organizationName,
    options,
  );
  return _organizationsGetAllServerlessRuntimesDeserialize(result);
}
