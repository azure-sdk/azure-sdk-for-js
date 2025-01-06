// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  getOperationsOperations,
  OperationsOperations,
} from "./classic/operations/index.js";
import {
  getLocationsOperations,
  LocationsOperations,
} from "./classic/locations/index.js";
import {
  getPrivateCloudsOperations,
  PrivateCloudsOperations,
} from "./classic/privateClouds/index.js";
import {
  getClustersOperations,
  ClustersOperations,
} from "./classic/clusters/index.js";
import {
  getDatastoresOperations,
  DatastoresOperations,
} from "./classic/datastores/index.js";
import {
  getHcxEnterpriseSitesOperations,
  HcxEnterpriseSitesOperations,
} from "./classic/hcxEnterpriseSites/index.js";
import {
  getAuthorizationsOperations,
  AuthorizationsOperations,
} from "./classic/authorizations/index.js";
import {
  getGlobalReachConnectionsOperations,
  GlobalReachConnectionsOperations,
} from "./classic/globalReachConnections/index.js";
import {
  getCloudLinksOperations,
  CloudLinksOperations,
} from "./classic/cloudLinks/index.js";
import {
  getAddonsOperations,
  AddonsOperations,
} from "./classic/addons/index.js";
import {
  getVirtualMachinesOperations,
  VirtualMachinesOperations,
} from "./classic/virtualMachines/index.js";
import {
  getPlacementPoliciesOperations,
  PlacementPoliciesOperations,
} from "./classic/placementPolicies/index.js";
import {
  getScriptPackagesOperations,
  ScriptPackagesOperations,
} from "./classic/scriptPackages/index.js";
import {
  getScriptCmdletsOperations,
  ScriptCmdletsOperations,
} from "./classic/scriptCmdlets/index.js";
import {
  getScriptExecutionsOperations,
  ScriptExecutionsOperations,
} from "./classic/scriptExecutions/index.js";
import {
  getIscsiPathsOperations,
  IscsiPathsOperations,
} from "./classic/iscsiPaths/index.js";
import {
  getWorkloadNetworksOperations,
  WorkloadNetworksOperations,
} from "./classic/workloadNetworks/index.js";
import { createAvs, AvsContext, AvsClientOptionalParams } from "./api/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { AvsClientOptionalParams } from "./api/avsContext.js";

export class AvsClient {
  private _client: AvsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: AvsClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createAvs(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.operations = getOperationsOperations(this._client);
    this.locations = getLocationsOperations(this._client, subscriptionId);
    this.privateClouds = getPrivateCloudsOperations(
      this._client,
      subscriptionId,
    );
    this.clusters = getClustersOperations(this._client, subscriptionId);
    this.datastores = getDatastoresOperations(this._client, subscriptionId);
    this.hcxEnterpriseSites = getHcxEnterpriseSitesOperations(
      this._client,
      subscriptionId,
    );
    this.authorizations = getAuthorizationsOperations(
      this._client,
      subscriptionId,
    );
    this.globalReachConnections = getGlobalReachConnectionsOperations(
      this._client,
      subscriptionId,
    );
    this.cloudLinks = getCloudLinksOperations(this._client, subscriptionId);
    this.addons = getAddonsOperations(this._client, subscriptionId);
    this.virtualMachines = getVirtualMachinesOperations(
      this._client,
      subscriptionId,
    );
    this.placementPolicies = getPlacementPoliciesOperations(
      this._client,
      subscriptionId,
    );
    this.scriptPackages = getScriptPackagesOperations(
      this._client,
      subscriptionId,
    );
    this.scriptCmdlets = getScriptCmdletsOperations(
      this._client,
      subscriptionId,
    );
    this.scriptExecutions = getScriptExecutionsOperations(
      this._client,
      subscriptionId,
    );
    this.iscsiPaths = getIscsiPathsOperations(this._client, subscriptionId);
    this.workloadNetworks = getWorkloadNetworksOperations(
      this._client,
      subscriptionId,
    );
  }

  /** The operation groups for Operations */
  public readonly operations: OperationsOperations;
  /** The operation groups for Locations */
  public readonly locations: LocationsOperations;
  /** The operation groups for PrivateClouds */
  public readonly privateClouds: PrivateCloudsOperations;
  /** The operation groups for Clusters */
  public readonly clusters: ClustersOperations;
  /** The operation groups for Datastores */
  public readonly datastores: DatastoresOperations;
  /** The operation groups for HcxEnterpriseSites */
  public readonly hcxEnterpriseSites: HcxEnterpriseSitesOperations;
  /** The operation groups for Authorizations */
  public readonly authorizations: AuthorizationsOperations;
  /** The operation groups for GlobalReachConnections */
  public readonly globalReachConnections: GlobalReachConnectionsOperations;
  /** The operation groups for CloudLinks */
  public readonly cloudLinks: CloudLinksOperations;
  /** The operation groups for Addons */
  public readonly addons: AddonsOperations;
  /** The operation groups for VirtualMachines */
  public readonly virtualMachines: VirtualMachinesOperations;
  /** The operation groups for PlacementPolicies */
  public readonly placementPolicies: PlacementPoliciesOperations;
  /** The operation groups for ScriptPackages */
  public readonly scriptPackages: ScriptPackagesOperations;
  /** The operation groups for ScriptCmdlets */
  public readonly scriptCmdlets: ScriptCmdletsOperations;
  /** The operation groups for ScriptExecutions */
  public readonly scriptExecutions: ScriptExecutionsOperations;
  /** The operation groups for IscsiPaths */
  public readonly iscsiPaths: IscsiPathsOperations;
  /** The operation groups for WorkloadNetworks */
  public readonly workloadNetworks: WorkloadNetworksOperations;
}
