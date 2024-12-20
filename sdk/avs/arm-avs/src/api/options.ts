// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";
import { Sku, ScriptOutputStreamType } from "../models/models.js";

/** Optional parameters. */
export interface OperationsListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface LocationsCheckTrialAvailabilityOptionalParams
  extends OperationOptions {
  /** Optionally, check for a specific SKU */
  sku?: Sku;
}

/** Optional parameters. */
export interface LocationsCheckQuotaAvailabilityOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface PrivateCloudsListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface PrivateCloudsListInSubscriptionOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface PrivateCloudsGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface PrivateCloudsCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface PrivateCloudsUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface PrivateCloudsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface PrivateCloudsRotateVcenterPasswordOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface PrivateCloudsRotateNsxtPasswordOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface PrivateCloudsListAdminCredentialsOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface ClustersListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ClustersGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ClustersCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ClustersUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ClustersDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ClustersListZonesOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface DatastoresListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface DatastoresGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface DatastoresCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface DatastoresDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface HcxEnterpriseSitesListOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface HcxEnterpriseSitesGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface HcxEnterpriseSitesCreateOrUpdateOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface HcxEnterpriseSitesDeleteOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface AuthorizationsListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface AuthorizationsGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface AuthorizationsCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface AuthorizationsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface GlobalReachConnectionsListOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface GlobalReachConnectionsGetOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface GlobalReachConnectionsCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface GlobalReachConnectionsDeleteOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface CloudLinksListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface CloudLinksGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface CloudLinksCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface CloudLinksDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface AddonsListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface AddonsGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface AddonsCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface AddonsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface VirtualMachinesListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface VirtualMachinesGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface VirtualMachinesRestrictMovementOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface PlacementPoliciesListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface PlacementPoliciesGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface PlacementPoliciesCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface PlacementPoliciesUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface PlacementPoliciesDeleteOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ScriptPackagesListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ScriptPackagesGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ScriptCmdletsListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ScriptCmdletsGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ScriptExecutionsListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ScriptExecutionsGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ScriptExecutionsCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ScriptExecutionsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ScriptExecutionsGetExecutionLogsOptionalParams
  extends OperationOptions {
  /** Name of the desired output stream to return. If not provided, will return all. An empty array will return nothing. */
  scriptOutputStreamType?: ScriptOutputStreamType[];
}

/** Optional parameters. */
export interface IscsiPathsListByPrivateCloudOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface IscsiPathsGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface IscsiPathsCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface IscsiPathsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworksListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworksGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworksListSegmentsOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworksGetSegmentOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworksCreateSegmentOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworksUpdateSegmentOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworksDeleteSegmentOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworksListDhcpOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworksGetDhcpOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworksCreateDhcpOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworksUpdateDhcpOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworksDeleteDhcpOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworksListGatewaysOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworksGetGatewayOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworksListPortMirroringOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworksGetPortMirroringOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworksCreatePortMirroringOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworksUpdatePortMirroringOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworksDeletePortMirroringOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworksListVMGroupsOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworksGetVMGroupOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworksCreateVMGroupOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworksUpdateVMGroupOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworksDeleteVMGroupOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworksListVirtualMachinesOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworksGetVirtualMachineOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworksListDnsServicesOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworksGetDnsServiceOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworksCreateDnsServiceOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworksUpdateDnsServiceOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworksDeleteDnsServiceOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworksListDnsZonesOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworksGetDnsZoneOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworksCreateDnsZoneOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworksUpdateDnsZoneOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworksDeleteDnsZoneOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworksListPublicIPsOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworksGetPublicIPOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworksCreatePublicIPOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworksDeletePublicIPOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}
