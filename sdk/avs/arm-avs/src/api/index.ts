// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export {
  createAzureVMwareSolutionAPI,
  AVSContext,
  AzureVMwareSolutionAPIClientOptionalParams,
} from "./azureVMwareSolutionAPIContext.js";
export {
  addonsList,
  addonsGet,
  addonsCreateOrUpdate,
  addonsDelete,
} from "./addons/index.js";
export {
  authorizationsList,
  authorizationsGet,
  authorizationsCreateOrUpdate,
  authorizationsDelete,
} from "./authorizations/index.js";
export {
  cloudLinksList,
  cloudLinksGet,
  cloudLinksCreateOrUpdate,
  cloudLinksDelete,
} from "./cloudLinks/index.js";
export {
  clustersList,
  clustersGet,
  clustersCreateOrUpdate,
  clustersUpdate,
  clustersDelete,
  clustersListZones,
} from "./clusters/index.js";
export {
  datastoresList,
  datastoresGet,
  datastoresCreateOrUpdate,
  datastoresDelete,
} from "./datastores/index.js";
export {
  globalReachConnectionsList,
  globalReachConnectionsGet,
  globalReachConnectionsCreateOrUpdate,
  globalReachConnectionsDelete,
} from "./globalReachConnections/index.js";
export {
  hcxEnterpriseSitesList,
  hcxEnterpriseSitesGet,
  hcxEnterpriseSitesCreateOrUpdate,
  hcxEnterpriseSitesDelete,
} from "./hcxEnterpriseSites/index.js";
export {
  iscsiPathsListByPrivateCloud,
  iscsiPathsGet,
  iscsiPathsCreateOrUpdate,
  iscsiPathsDelete,
} from "./iscsiPaths/index.js";
export {
  locationsCheckTrialAvailability,
  locationsCheckQuotaAvailability,
} from "./locations/index.js";
export { operationsList } from "./operations/index.js";
export {
  placementPoliciesList,
  placementPoliciesGet,
  placementPoliciesCreateOrUpdate,
  placementPoliciesUpdate,
  placementPoliciesDelete,
} from "./placementPolicies/index.js";
export {
  privateCloudsList,
  privateCloudsListInSubscription,
  privateCloudsGet,
  privateCloudsCreateOrUpdate,
  privateCloudsUpdate,
  privateCloudsDelete,
  privateCloudsRotateVcenterPassword,
  privateCloudsRotateNsxtPassword,
  privateCloudsListAdminCredentials,
} from "./privateClouds/index.js";
export { scriptCmdletsList, scriptCmdletsGet } from "./scriptCmdlets/index.js";
export {
  scriptExecutionsList,
  scriptExecutionsGet,
  scriptExecutionsCreateOrUpdate,
  scriptExecutionsDelete,
  scriptExecutionsGetExecutionLogs,
} from "./scriptExecutions/index.js";
export {
  scriptPackagesList,
  scriptPackagesGet,
} from "./scriptPackages/index.js";
export {
  virtualMachinesList,
  virtualMachinesGet,
  virtualMachinesRestrictMovement,
} from "./virtualMachines/index.js";
export {
  workloadNetworkDhcpConfigurationsList,
  workloadNetworkDhcpConfigurationsGet,
  workloadNetworkDhcpConfigurationsCreate,
  workloadNetworkDhcpConfigurationsUpdate,
  workloadNetworkDhcpConfigurationsDelete,
} from "./workloadNetworkDhcpConfigurations/index.js";
export {
  workloadNetworkDnsServicesList,
  workloadNetworkDnsServicesGet,
  workloadNetworkDnsServicesCreate,
  workloadNetworkDnsServicesUpdate,
  workloadNetworkDnsServicesDelete,
} from "./workloadNetworkDnsServices/index.js";
export {
  workloadNetworkDnsZonesList,
  workloadNetworkDnsZonesGet,
  workloadNetworkDnsZonesCreate,
  workloadNetworkDnsZonesUpdate,
  workloadNetworkDnsZonesDelete,
} from "./workloadNetworkDnsZones/index.js";
export {
  workloadNetworkGatewaysList,
  workloadNetworkGatewaysGet,
} from "./workloadNetworkGateways/index.js";
export {
  workloadNetworkPortMirroringProfilesList,
  workloadNetworkPortMirroringProfilesGet,
  workloadNetworkPortMirroringProfilesCreate,
  workloadNetworkPortMirroringProfilesUpdate,
  workloadNetworkPortMirroringProfilesDelete,
} from "./workloadNetworkPortMirroringProfiles/index.js";
export {
  workloadNetworkPublicIpsList,
  workloadNetworkPublicIpsGet,
  workloadNetworkPublicIpsCreate,
  workloadNetworkPublicIpsDelete,
} from "./workloadNetworkPublicIps/index.js";
export {
  workloadNetworksGet,
  workloadNetworksList,
} from "./workloadNetworks/index.js";
export {
  workloadNetworkSegmentsList,
  workloadNetworkSegmentsGet,
  workloadNetworkSegmentsCreate,
  workloadNetworkSegmentsUpdate,
  workloadNetworkSegmentsDeleteSegment,
} from "./workloadNetworkSegments/index.js";
export {
  workloadNetworkVirtualMachinesList,
  workloadNetworkVirtualMachinesGet,
} from "./workloadNetworkVirtualMachines/index.js";
export {
  workloadNetworkVmGroupsList,
  workloadNetworkVmGroupsGet,
  workloadNetworkVmGroupsCreate,
  workloadNetworkVmGroupsUpdate,
  workloadNetworkVmGroupsDelete,
} from "./workloadNetworkVmGroups/index.js";
