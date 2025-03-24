// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  _getAutonomousDatabaseVersionsOperations,
  AutonomousDatabaseVersionsOperations,
} from "./classic/autonomousDatabaseVersions/index.js";
import {
  _getAutonomousDatabaseNationalCharacterSetsOperations,
  AutonomousDatabaseNationalCharacterSetsOperations,
} from "./classic/autonomousDatabaseNationalCharacterSets/index.js";
import {
  _getAutonomousDatabaseCharacterSetsOperations,
  AutonomousDatabaseCharacterSetsOperations,
} from "./classic/autonomousDatabaseCharacterSets/index.js";
import {
  _getAutonomousDatabaseBackupsOperations,
  AutonomousDatabaseBackupsOperations,
} from "./classic/autonomousDatabaseBackups/index.js";
import {
  _getAutonomousDatabasesOperations,
  AutonomousDatabasesOperations,
} from "./classic/autonomousDatabases/index.js";
import {
  _getDnsPrivateZonesOperations,
  DnsPrivateZonesOperations,
} from "./classic/dnsPrivateZones/index.js";
import {
  _getDnsPrivateViewsOperations,
  DnsPrivateViewsOperations,
} from "./classic/dnsPrivateViews/index.js";
import {
  _getDbSystemShapesOperations,
  DbSystemShapesOperations,
} from "./classic/dbSystemShapes/index.js";
import { _getGiVersionsOperations, GiVersionsOperations } from "./classic/giVersions/index.js";
import { _getDbNodesOperations, DbNodesOperations } from "./classic/dbNodes/index.js";
import {
  _getOracleSubscriptionsOperations,
  OracleSubscriptionsOperations,
} from "./classic/oracleSubscriptions/index.js";
import {
  _getSystemVersionsOperations,
  SystemVersionsOperations,
} from "./classic/systemVersions/index.js";
import {
  _getVirtualNetworkAddressesOperations,
  VirtualNetworkAddressesOperations,
} from "./classic/virtualNetworkAddresses/index.js";
import {
  _getCloudVmClustersOperations,
  CloudVmClustersOperations,
} from "./classic/cloudVmClusters/index.js";
import { _getDbServersOperations, DbServersOperations } from "./classic/dbServers/index.js";
import {
  _getCloudExadataInfrastructuresOperations,
  CloudExadataInfrastructuresOperations,
} from "./classic/cloudExadataInfrastructures/index.js";
import { _getOperationsOperations, OperationsOperations } from "./classic/operations/index.js";
import { createDatabase, DatabaseContext, DatabaseClientOptionalParams } from "./api/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { DatabaseClientOptionalParams } from "./api/databaseContext.js";

export class DatabaseClient {
  private _client: DatabaseContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: DatabaseClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createDatabase(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.autonomousDatabaseVersions = _getAutonomousDatabaseVersionsOperations(this._client);
    this.autonomousDatabaseNationalCharacterSets =
      _getAutonomousDatabaseNationalCharacterSetsOperations(this._client);
    this.autonomousDatabaseCharacterSets = _getAutonomousDatabaseCharacterSetsOperations(
      this._client,
    );
    this.autonomousDatabaseBackups = _getAutonomousDatabaseBackupsOperations(this._client);
    this.autonomousDatabases = _getAutonomousDatabasesOperations(this._client);
    this.dnsPrivateZones = _getDnsPrivateZonesOperations(this._client);
    this.dnsPrivateViews = _getDnsPrivateViewsOperations(this._client);
    this.dbSystemShapes = _getDbSystemShapesOperations(this._client);
    this.giVersions = _getGiVersionsOperations(this._client);
    this.dbNodes = _getDbNodesOperations(this._client);
    this.oracleSubscriptions = _getOracleSubscriptionsOperations(this._client);
    this.systemVersions = _getSystemVersionsOperations(this._client);
    this.virtualNetworkAddresses = _getVirtualNetworkAddressesOperations(this._client);
    this.cloudVmClusters = _getCloudVmClustersOperations(this._client);
    this.dbServers = _getDbServersOperations(this._client);
    this.cloudExadataInfrastructures = _getCloudExadataInfrastructuresOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for autonomousDatabaseVersions */
  public readonly autonomousDatabaseVersions: AutonomousDatabaseVersionsOperations;
  /** The operation groups for autonomousDatabaseNationalCharacterSets */
  public readonly autonomousDatabaseNationalCharacterSets: AutonomousDatabaseNationalCharacterSetsOperations;
  /** The operation groups for autonomousDatabaseCharacterSets */
  public readonly autonomousDatabaseCharacterSets: AutonomousDatabaseCharacterSetsOperations;
  /** The operation groups for autonomousDatabaseBackups */
  public readonly autonomousDatabaseBackups: AutonomousDatabaseBackupsOperations;
  /** The operation groups for autonomousDatabases */
  public readonly autonomousDatabases: AutonomousDatabasesOperations;
  /** The operation groups for dnsPrivateZones */
  public readonly dnsPrivateZones: DnsPrivateZonesOperations;
  /** The operation groups for dnsPrivateViews */
  public readonly dnsPrivateViews: DnsPrivateViewsOperations;
  /** The operation groups for dbSystemShapes */
  public readonly dbSystemShapes: DbSystemShapesOperations;
  /** The operation groups for giVersions */
  public readonly giVersions: GiVersionsOperations;
  /** The operation groups for dbNodes */
  public readonly dbNodes: DbNodesOperations;
  /** The operation groups for oracleSubscriptions */
  public readonly oracleSubscriptions: OracleSubscriptionsOperations;
  /** The operation groups for systemVersions */
  public readonly systemVersions: SystemVersionsOperations;
  /** The operation groups for virtualNetworkAddresses */
  public readonly virtualNetworkAddresses: VirtualNetworkAddressesOperations;
  /** The operation groups for cloudVmClusters */
  public readonly cloudVmClusters: CloudVmClustersOperations;
  /** The operation groups for dbServers */
  public readonly dbServers: DbServersOperations;
  /** The operation groups for cloudExadataInfrastructures */
  public readonly cloudExadataInfrastructures: CloudExadataInfrastructuresOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
