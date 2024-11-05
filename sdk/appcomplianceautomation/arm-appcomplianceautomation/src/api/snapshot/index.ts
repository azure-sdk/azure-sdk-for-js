// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  SnapshotResource,
  SnapshotDownloadRequest,
  DownloadResponse,
  _SnapshotResourceListResult,
} from "../../models/models.js";
import { AppComplianceAutomationContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  SnapshotGetOptionalParams,
  SnapshotListOptionalParams,
  SnapshotDownloadOptionalParams,
} from "../../models/options.js";

export function _snapshotGetSend(
  context: Client,
  reportName: string,
  snapshotName: string,
  options: SnapshotGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/snapshots/{snapshotName}",
      reportName,
      snapshotName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _snapshotGetDeserialize(
  result: PathUncheckedResponse,
): Promise<SnapshotResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
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
          snapshotName: result.body.properties?.["snapshotName"],
          createdAt:
            result.body.properties?.["createdAt"] !== undefined
              ? new Date(result.body.properties?.["createdAt"])
              : undefined,
          provisioningState: result.body.properties?.["provisioningState"],
          reportProperties: !result.body.properties?.reportProperties
            ? undefined
            : {
                triggerTime: new Date(
                  result.body.properties?.reportProperties?.["triggerTime"],
                ),
                timeZone:
                  result.body.properties?.reportProperties?.["timeZone"],
                resources: result.body.properties?.reportProperties?.[
                  "resources"
                ].map((p: any) => {
                  return {
                    resourceId: p["resourceId"],
                    resourceType: p["resourceType"],
                    resourceKind: p["resourceKind"],
                    resourceOrigin: p["resourceOrigin"],
                    accountId: p["accountId"],
                  };
                }),
                status: result.body.properties?.reportProperties?.["status"],
                errors: result.body.properties?.reportProperties?.["errors"],
                tenantId:
                  result.body.properties?.reportProperties?.["tenantId"],
                offerGuid:
                  result.body.properties?.reportProperties?.["offerGuid"],
                nextTriggerTime:
                  result.body.properties?.reportProperties?.[
                    "nextTriggerTime"
                  ] !== undefined
                    ? new Date(
                        result.body.properties?.reportProperties?.[
                          "nextTriggerTime"
                        ],
                      )
                    : undefined,
                lastTriggerTime:
                  result.body.properties?.reportProperties?.[
                    "lastTriggerTime"
                  ] !== undefined
                    ? new Date(
                        result.body.properties?.reportProperties?.[
                          "lastTriggerTime"
                        ],
                      )
                    : undefined,
                subscriptions:
                  result.body.properties?.reportProperties?.["subscriptions"],
                complianceStatus: !result.body.properties?.reportProperties
                  ?.complianceStatus
                  ? undefined
                  : {
                      m365: !result.body.properties?.reportProperties
                        ?.complianceStatus?.m365
                        ? undefined
                        : {
                            passedCount:
                              result.body.properties?.reportProperties
                                ?.complianceStatus?.m365?.["passedCount"],
                            failedCount:
                              result.body.properties?.reportProperties
                                ?.complianceStatus?.m365?.["failedCount"],
                            manualCount:
                              result.body.properties?.reportProperties
                                ?.complianceStatus?.m365?.["manualCount"],
                            notApplicableCount:
                              result.body.properties?.reportProperties
                                ?.complianceStatus?.m365?.[
                                "notApplicableCount"
                              ],
                            pendingCount:
                              result.body.properties?.reportProperties
                                ?.complianceStatus?.m365?.["pendingCount"],
                          },
                    },
                storageInfo: !result.body.properties?.reportProperties
                  ?.storageInfo
                  ? undefined
                  : {
                      subscriptionId:
                        result.body.properties?.reportProperties?.storageInfo?.[
                          "subscriptionId"
                        ],
                      resourceGroup:
                        result.body.properties?.reportProperties?.storageInfo?.[
                          "resourceGroup"
                        ],
                      accountName:
                        result.body.properties?.reportProperties?.storageInfo?.[
                          "accountName"
                        ],
                      location:
                        result.body.properties?.reportProperties?.storageInfo?.[
                          "location"
                        ],
                    },
                certRecords:
                  result.body.properties?.reportProperties?.["certRecords"] ===
                  undefined
                    ? result.body.properties?.reportProperties?.["certRecords"]
                    : result.body.properties?.reportProperties?.[
                        "certRecords"
                      ].map((p: any) => {
                        return {
                          offerGuid: p["offerGuid"],
                          certificationStatus: p["certificationStatus"],
                          ingestionStatus: p["ingestionStatus"],
                          controls:
                            p["controls"] === undefined
                              ? p["controls"]
                              : p["controls"].map((p: any) => {
                                  return {
                                    controlId: p["controlId"],
                                    controlStatus: p["controlStatus"],
                                  };
                                }),
                        };
                      }),
                provisioningState:
                  result.body.properties?.reportProperties?.[
                    "provisioningState"
                  ],
              },
          reportSystemData: !result.body.properties?.reportSystemData
            ? undefined
            : {
                createdBy:
                  result.body.properties?.reportSystemData?.["createdBy"],
                createdByType:
                  result.body.properties?.reportSystemData?.["createdByType"],
                createdAt:
                  result.body.properties?.reportSystemData?.["createdAt"] !==
                  undefined
                    ? new Date(
                        result.body.properties?.reportSystemData?.["createdAt"],
                      )
                    : undefined,
                lastModifiedBy:
                  result.body.properties?.reportSystemData?.["lastModifiedBy"],
                lastModifiedByType:
                  result.body.properties?.reportSystemData?.[
                    "lastModifiedByType"
                  ],
                lastModifiedAt:
                  result.body.properties?.reportSystemData?.[
                    "lastModifiedAt"
                  ] !== undefined
                    ? new Date(
                        result.body.properties?.reportSystemData?.[
                          "lastModifiedAt"
                        ],
                      )
                    : undefined,
              },
          complianceResults:
            result.body.properties?.["complianceResults"] === undefined
              ? result.body.properties?.["complianceResults"]
              : result.body.properties?.["complianceResults"].map((p: any) => {
                  return {
                    complianceName: p["complianceName"],
                    categories:
                      p["categories"] === undefined
                        ? p["categories"]
                        : p["categories"].map((p: any) => {
                            return {
                              categoryName: p["categoryName"],
                              categoryStatus: p["categoryStatus"],
                              controlFamilies:
                                p["controlFamilies"] === undefined
                                  ? p["controlFamilies"]
                                  : p["controlFamilies"].map((p: any) => {
                                      return {
                                        controlFamilyName:
                                          p["controlFamilyName"],
                                        controlFamilyStatus:
                                          p["controlFamilyStatus"],
                                        controls:
                                          p["controls"] === undefined
                                            ? p["controls"]
                                            : p["controls"].map((p: any) => {
                                                return {
                                                  controlId: p["controlId"],
                                                  controlName: p["controlName"],
                                                  controlFullName:
                                                    p["controlFullName"],
                                                  controlDescription:
                                                    p["controlDescription"],
                                                  controlDescriptionHyperLink:
                                                    p[
                                                      "controlDescriptionHyperLink"
                                                    ],
                                                  controlStatus:
                                                    p["controlStatus"],
                                                  responsibilities:
                                                    p["responsibilities"] ===
                                                    undefined
                                                      ? p["responsibilities"]
                                                      : p[
                                                          "responsibilities"
                                                        ].map((p: any) => {
                                                          return {
                                                            responsibilityId:
                                                              p[
                                                                "responsibilityId"
                                                              ],
                                                            responsibilityTitle:
                                                              p[
                                                                "responsibilityTitle"
                                                              ],
                                                            responsibilityDescription:
                                                              p[
                                                                "responsibilityDescription"
                                                              ],
                                                            responsibilityType:
                                                              p[
                                                                "responsibilityType"
                                                              ],
                                                            responsibilitySeverity:
                                                              p[
                                                                "responsibilitySeverity"
                                                              ],
                                                            responsibilityStatus:
                                                              p[
                                                                "responsibilityStatus"
                                                              ],
                                                            responsibilityEnvironment:
                                                              p[
                                                                "responsibilityEnvironment"
                                                              ],
                                                            failedResourceCount:
                                                              p[
                                                                "failedResourceCount"
                                                              ],
                                                            totalResourceCount:
                                                              p[
                                                                "totalResourceCount"
                                                              ],
                                                            resourceList:
                                                              p[
                                                                "resourceList"
                                                              ] === undefined
                                                                ? p[
                                                                    "resourceList"
                                                                  ]
                                                                : p[
                                                                    "resourceList"
                                                                  ].map(
                                                                    (
                                                                      p: any,
                                                                    ) => {
                                                                      return {
                                                                        resourceId:
                                                                          p[
                                                                            "resourceId"
                                                                          ],
                                                                        accountId:
                                                                          p[
                                                                            "accountId"
                                                                          ],
                                                                        resourceType:
                                                                          p[
                                                                            "resourceType"
                                                                          ],
                                                                        resourceOrigin:
                                                                          p[
                                                                            "resourceOrigin"
                                                                          ],
                                                                        resourceStatus:
                                                                          p[
                                                                            "resourceStatus"
                                                                          ],
                                                                        resourceStatusChangeDate:
                                                                          p[
                                                                            "resourceStatusChangeDate"
                                                                          ] !==
                                                                          undefined
                                                                            ? new Date(
                                                                                p[
                                                                                  "resourceStatusChangeDate"
                                                                                ],
                                                                              )
                                                                            : undefined,
                                                                        recommendationIds:
                                                                          p[
                                                                            "recommendationIds"
                                                                          ],
                                                                      };
                                                                    },
                                                                  ),
                                                            recommendationList:
                                                              p[
                                                                "recommendationList"
                                                              ] === undefined
                                                                ? p[
                                                                    "recommendationList"
                                                                  ]
                                                                : p[
                                                                    "recommendationList"
                                                                  ].map(
                                                                    (
                                                                      p: any,
                                                                    ) => {
                                                                      return {
                                                                        recommendationId:
                                                                          p[
                                                                            "recommendationId"
                                                                          ],
                                                                        recommendationShortName:
                                                                          p[
                                                                            "recommendationShortName"
                                                                          ],
                                                                        recommendationSolutions:
                                                                          p[
                                                                            "recommendationSolutions"
                                                                          ] ===
                                                                          undefined
                                                                            ? p[
                                                                                "recommendationSolutions"
                                                                              ]
                                                                            : p[
                                                                                "recommendationSolutions"
                                                                              ].map(
                                                                                (
                                                                                  p: any,
                                                                                ) => {
                                                                                  return {
                                                                                    recommendationSolutionIndex:
                                                                                      p[
                                                                                        "recommendationSolutionIndex"
                                                                                      ],
                                                                                    recommendationSolutionContent:
                                                                                      p[
                                                                                        "recommendationSolutionContent"
                                                                                      ],
                                                                                    isRecommendSolution:
                                                                                      p[
                                                                                        "isRecommendSolution"
                                                                                      ],
                                                                                  };
                                                                                },
                                                                              ),
                                                                      };
                                                                    },
                                                                  ),
                                                            guidance:
                                                              p["guidance"],
                                                            justification:
                                                              p[
                                                                "justification"
                                                              ],
                                                            evidenceFiles:
                                                              p[
                                                                "evidenceFiles"
                                                              ],
                                                          };
                                                        }),
                                                };
                                              }),
                                      };
                                    }),
                            };
                          }),
                  };
                }),
        },
  };
}

/** Get the AppComplianceAutomation snapshot and its properties. */
export async function snapshotGet(
  context: Client,
  reportName: string,
  snapshotName: string,
  options: SnapshotGetOptionalParams = { requestOptions: {} },
): Promise<SnapshotResource> {
  const result = await _snapshotGetSend(
    context,
    reportName,
    snapshotName,
    options,
  );
  return _snapshotGetDeserialize(result);
}

export function _snapshotListSend(
  context: Client,
  reportName: string,
  options: SnapshotListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/snapshots",
      reportName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        $skipToken: options?.skipToken,
        $top: options?.top,
        $select: options?.select,
        $filter: options?.filter,
        $orderby: options?.orderby,
        offerGuid: options?.offerGuid,
        reportCreatorTenantId: options?.reportCreatorTenantId,
      },
    });
}

export async function _snapshotListDeserialize(
  result: PathUncheckedResponse,
): Promise<_SnapshotResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
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
              snapshotName: p.properties?.["snapshotName"],
              createdAt:
                p.properties?.["createdAt"] !== undefined
                  ? new Date(p.properties?.["createdAt"])
                  : undefined,
              provisioningState: p.properties?.["provisioningState"],
              reportProperties: !p.properties?.reportProperties
                ? undefined
                : {
                    triggerTime: new Date(
                      p.properties?.reportProperties?.["triggerTime"],
                    ),
                    timeZone: p.properties?.reportProperties?.["timeZone"],
                    resources: p.properties?.reportProperties?.[
                      "resources"
                    ].map((p: any) => {
                      return {
                        resourceId: p["resourceId"],
                        resourceType: p["resourceType"],
                        resourceKind: p["resourceKind"],
                        resourceOrigin: p["resourceOrigin"],
                        accountId: p["accountId"],
                      };
                    }),
                    status: p.properties?.reportProperties?.["status"],
                    errors: p.properties?.reportProperties?.["errors"],
                    tenantId: p.properties?.reportProperties?.["tenantId"],
                    offerGuid: p.properties?.reportProperties?.["offerGuid"],
                    nextTriggerTime:
                      p.properties?.reportProperties?.["nextTriggerTime"] !==
                      undefined
                        ? new Date(
                            p.properties?.reportProperties?.["nextTriggerTime"],
                          )
                        : undefined,
                    lastTriggerTime:
                      p.properties?.reportProperties?.["lastTriggerTime"] !==
                      undefined
                        ? new Date(
                            p.properties?.reportProperties?.["lastTriggerTime"],
                          )
                        : undefined,
                    subscriptions:
                      p.properties?.reportProperties?.["subscriptions"],
                    complianceStatus: !p.properties?.reportProperties
                      ?.complianceStatus
                      ? undefined
                      : {
                          m365: !p.properties?.reportProperties
                            ?.complianceStatus?.m365
                            ? undefined
                            : {
                                passedCount:
                                  p.properties?.reportProperties
                                    ?.complianceStatus?.m365?.["passedCount"],
                                failedCount:
                                  p.properties?.reportProperties
                                    ?.complianceStatus?.m365?.["failedCount"],
                                manualCount:
                                  p.properties?.reportProperties
                                    ?.complianceStatus?.m365?.["manualCount"],
                                notApplicableCount:
                                  p.properties?.reportProperties
                                    ?.complianceStatus?.m365?.[
                                    "notApplicableCount"
                                  ],
                                pendingCount:
                                  p.properties?.reportProperties
                                    ?.complianceStatus?.m365?.["pendingCount"],
                              },
                        },
                    storageInfo: !p.properties?.reportProperties?.storageInfo
                      ? undefined
                      : {
                          subscriptionId:
                            p.properties?.reportProperties?.storageInfo?.[
                              "subscriptionId"
                            ],
                          resourceGroup:
                            p.properties?.reportProperties?.storageInfo?.[
                              "resourceGroup"
                            ],
                          accountName:
                            p.properties?.reportProperties?.storageInfo?.[
                              "accountName"
                            ],
                          location:
                            p.properties?.reportProperties?.storageInfo?.[
                              "location"
                            ],
                        },
                    certRecords:
                      p.properties?.reportProperties?.["certRecords"] ===
                      undefined
                        ? p.properties?.reportProperties?.["certRecords"]
                        : p.properties?.reportProperties?.["certRecords"].map(
                            (p: any) => {
                              return {
                                offerGuid: p["offerGuid"],
                                certificationStatus: p["certificationStatus"],
                                ingestionStatus: p["ingestionStatus"],
                                controls:
                                  p["controls"] === undefined
                                    ? p["controls"]
                                    : p["controls"].map((p: any) => {
                                        return {
                                          controlId: p["controlId"],
                                          controlStatus: p["controlStatus"],
                                        };
                                      }),
                              };
                            },
                          ),
                    provisioningState:
                      p.properties?.reportProperties?.["provisioningState"],
                  },
              reportSystemData: !p.properties?.reportSystemData
                ? undefined
                : {
                    createdBy: p.properties?.reportSystemData?.["createdBy"],
                    createdByType:
                      p.properties?.reportSystemData?.["createdByType"],
                    createdAt:
                      p.properties?.reportSystemData?.["createdAt"] !==
                      undefined
                        ? new Date(
                            p.properties?.reportSystemData?.["createdAt"],
                          )
                        : undefined,
                    lastModifiedBy:
                      p.properties?.reportSystemData?.["lastModifiedBy"],
                    lastModifiedByType:
                      p.properties?.reportSystemData?.["lastModifiedByType"],
                    lastModifiedAt:
                      p.properties?.reportSystemData?.["lastModifiedAt"] !==
                      undefined
                        ? new Date(
                            p.properties?.reportSystemData?.["lastModifiedAt"],
                          )
                        : undefined,
                  },
              complianceResults:
                p.properties?.["complianceResults"] === undefined
                  ? p.properties?.["complianceResults"]
                  : p.properties?.["complianceResults"].map((p: any) => {
                      return {
                        complianceName: p["complianceName"],
                        categories:
                          p["categories"] === undefined
                            ? p["categories"]
                            : p["categories"].map((p: any) => {
                                return {
                                  categoryName: p["categoryName"],
                                  categoryStatus: p["categoryStatus"],
                                  controlFamilies:
                                    p["controlFamilies"] === undefined
                                      ? p["controlFamilies"]
                                      : p["controlFamilies"].map((p: any) => {
                                          return {
                                            controlFamilyName:
                                              p["controlFamilyName"],
                                            controlFamilyStatus:
                                              p["controlFamilyStatus"],
                                            controls:
                                              p["controls"] === undefined
                                                ? p["controls"]
                                                : p["controls"].map(
                                                    (p: any) => {
                                                      return {
                                                        controlId:
                                                          p["controlId"],
                                                        controlName:
                                                          p["controlName"],
                                                        controlFullName:
                                                          p["controlFullName"],
                                                        controlDescription:
                                                          p[
                                                            "controlDescription"
                                                          ],
                                                        controlDescriptionHyperLink:
                                                          p[
                                                            "controlDescriptionHyperLink"
                                                          ],
                                                        controlStatus:
                                                          p["controlStatus"],
                                                        responsibilities:
                                                          p[
                                                            "responsibilities"
                                                          ] === undefined
                                                            ? p[
                                                                "responsibilities"
                                                              ]
                                                            : p[
                                                                "responsibilities"
                                                              ].map(
                                                                (p: any) => {
                                                                  return {
                                                                    responsibilityId:
                                                                      p[
                                                                        "responsibilityId"
                                                                      ],
                                                                    responsibilityTitle:
                                                                      p[
                                                                        "responsibilityTitle"
                                                                      ],
                                                                    responsibilityDescription:
                                                                      p[
                                                                        "responsibilityDescription"
                                                                      ],
                                                                    responsibilityType:
                                                                      p[
                                                                        "responsibilityType"
                                                                      ],
                                                                    responsibilitySeverity:
                                                                      p[
                                                                        "responsibilitySeverity"
                                                                      ],
                                                                    responsibilityStatus:
                                                                      p[
                                                                        "responsibilityStatus"
                                                                      ],
                                                                    responsibilityEnvironment:
                                                                      p[
                                                                        "responsibilityEnvironment"
                                                                      ],
                                                                    failedResourceCount:
                                                                      p[
                                                                        "failedResourceCount"
                                                                      ],
                                                                    totalResourceCount:
                                                                      p[
                                                                        "totalResourceCount"
                                                                      ],
                                                                    resourceList:
                                                                      p[
                                                                        "resourceList"
                                                                      ] ===
                                                                      undefined
                                                                        ? p[
                                                                            "resourceList"
                                                                          ]
                                                                        : p[
                                                                            "resourceList"
                                                                          ].map(
                                                                            (
                                                                              p: any,
                                                                            ) => {
                                                                              return {
                                                                                resourceId:
                                                                                  p[
                                                                                    "resourceId"
                                                                                  ],
                                                                                accountId:
                                                                                  p[
                                                                                    "accountId"
                                                                                  ],
                                                                                resourceType:
                                                                                  p[
                                                                                    "resourceType"
                                                                                  ],
                                                                                resourceOrigin:
                                                                                  p[
                                                                                    "resourceOrigin"
                                                                                  ],
                                                                                resourceStatus:
                                                                                  p[
                                                                                    "resourceStatus"
                                                                                  ],
                                                                                resourceStatusChangeDate:
                                                                                  p[
                                                                                    "resourceStatusChangeDate"
                                                                                  ] !==
                                                                                  undefined
                                                                                    ? new Date(
                                                                                        p[
                                                                                          "resourceStatusChangeDate"
                                                                                        ],
                                                                                      )
                                                                                    : undefined,
                                                                                recommendationIds:
                                                                                  p[
                                                                                    "recommendationIds"
                                                                                  ],
                                                                              };
                                                                            },
                                                                          ),
                                                                    recommendationList:
                                                                      p[
                                                                        "recommendationList"
                                                                      ] ===
                                                                      undefined
                                                                        ? p[
                                                                            "recommendationList"
                                                                          ]
                                                                        : p[
                                                                            "recommendationList"
                                                                          ].map(
                                                                            (
                                                                              p: any,
                                                                            ) => {
                                                                              return {
                                                                                recommendationId:
                                                                                  p[
                                                                                    "recommendationId"
                                                                                  ],
                                                                                recommendationShortName:
                                                                                  p[
                                                                                    "recommendationShortName"
                                                                                  ],
                                                                                recommendationSolutions:
                                                                                  p[
                                                                                    "recommendationSolutions"
                                                                                  ] ===
                                                                                  undefined
                                                                                    ? p[
                                                                                        "recommendationSolutions"
                                                                                      ]
                                                                                    : p[
                                                                                        "recommendationSolutions"
                                                                                      ].map(
                                                                                        (
                                                                                          p: any,
                                                                                        ) => {
                                                                                          return {
                                                                                            recommendationSolutionIndex:
                                                                                              p[
                                                                                                "recommendationSolutionIndex"
                                                                                              ],
                                                                                            recommendationSolutionContent:
                                                                                              p[
                                                                                                "recommendationSolutionContent"
                                                                                              ],
                                                                                            isRecommendSolution:
                                                                                              p[
                                                                                                "isRecommendSolution"
                                                                                              ],
                                                                                          };
                                                                                        },
                                                                                      ),
                                                                              };
                                                                            },
                                                                          ),
                                                                    guidance:
                                                                      p[
                                                                        "guidance"
                                                                      ],
                                                                    justification:
                                                                      p[
                                                                        "justification"
                                                                      ],
                                                                    evidenceFiles:
                                                                      p[
                                                                        "evidenceFiles"
                                                                      ],
                                                                  };
                                                                },
                                                              ),
                                                      };
                                                    },
                                                  ),
                                          };
                                        }),
                                };
                              }),
                      };
                    }),
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** Get the AppComplianceAutomation snapshot list. */
export function snapshotList(
  context: Client,
  reportName: string,
  options: SnapshotListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<SnapshotResource> {
  return buildPagedAsyncIterator(
    context,
    () => _snapshotListSend(context, reportName, options),
    _snapshotListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _snapshotDownloadSend(
  context: Client,
  reportName: string,
  snapshotName: string,
  body: SnapshotDownloadRequest,
  options: SnapshotDownloadOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/snapshots/{snapshotName}/download",
      reportName,
      snapshotName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        reportCreatorTenantId: body["reportCreatorTenantId"],
        downloadType: body["downloadType"],
        offerGuid: body["offerGuid"],
      },
    });
}

export async function _snapshotDownloadDeserialize(
  result: PathUncheckedResponse,
): Promise<DownloadResponse> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    resourceList:
      result.body["resourceList"] === undefined
        ? result.body["resourceList"]
        : result.body["resourceList"].map((p: any) => {
            return {
              subscriptionId: p["subscriptionId"],
              resourceGroup: p["resourceGroup"],
              resourceType: p["resourceType"],
              resourceId: p["resourceId"],
            };
          }),
    complianceReport:
      result.body["complianceReport"] === undefined
        ? result.body["complianceReport"]
        : result.body["complianceReport"].map((p: any) => {
            return {
              categoryName: p["categoryName"],
              controlFamilyName: p["controlFamilyName"],
              controlId: p["controlId"],
              controlName: p["controlName"],
              controlStatus: p["controlStatus"],
              responsibilityTitle: p["responsibilityTitle"],
              responsibilityDescription: p["responsibilityDescription"],
              resourceId: p["resourceId"],
              resourceType: p["resourceType"],
              resourceOrigin: p["resourceOrigin"],
              resourceStatus: p["resourceStatus"],
              resourceStatusChangeDate:
                p["resourceStatusChangeDate"] !== undefined
                  ? new Date(p["resourceStatusChangeDate"])
                  : undefined,
            };
          }),
    compliancePdfReport: !result.body.compliancePdfReport
      ? undefined
      : { sasUri: result.body.compliancePdfReport?.["sasUri"] },
    complianceDetailedPdfReport: !result.body.complianceDetailedPdfReport
      ? undefined
      : { sasUri: result.body.complianceDetailedPdfReport?.["sasUri"] },
  };
}

/** Download compliance needs from snapshot, like: Compliance Report, Resource List. */
export function snapshotDownload(
  context: Client,
  reportName: string,
  snapshotName: string,
  body: SnapshotDownloadRequest,
  options: SnapshotDownloadOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<DownloadResponse>, DownloadResponse> {
  return getLongRunningPoller(
    context,
    _snapshotDownloadDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _snapshotDownloadSend(context, reportName, snapshotName, body, options),
    },
  ) as PollerLike<OperationState<DownloadResponse>, DownloadResponse>;
}
