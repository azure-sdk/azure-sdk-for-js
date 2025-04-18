// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ProvisioningState,
  ExtendedLocation,
  extendedLocationSerializer,
  extendedLocationDeserializer,
  systemDataDeserializer,
  ProxyResource,
} from "../models.js";

/** Instance diagnostic resource */
export interface DiagnosticResource extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: DiagnosticProperties;
  /** Edge location of the resource. */
  extendedLocation: ExtendedLocation;
}

export function diagnosticResourceSerializer(item: DiagnosticResource): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : diagnosticPropertiesSerializer(item["properties"]),
    extendedLocation: extendedLocationSerializer(item["extendedLocation"]),
  };
}

export function diagnosticResourceDeserializer(item: any): DiagnosticResource {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : diagnosticPropertiesDeserializer(item["properties"]),
    extendedLocation: extendedLocationDeserializer(item["extendedLocation"]),
  };
}

/** Diagnostic Resource properties */
export interface DiagnosticProperties {
  /** Remote Support Settings For Diagnostic. */
  remoteSupport?: RemoteSupportProperties;
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningState;
}

export function diagnosticPropertiesSerializer(item: DiagnosticProperties): any {
  return {
    remoteSupport: !item["remoteSupport"]
      ? item["remoteSupport"]
      : remoteSupportPropertiesSerializer(item["remoteSupport"]),
  };
}

export function diagnosticPropertiesDeserializer(item: any): DiagnosticProperties {
  return {
    remoteSupport: !item["remoteSupport"]
      ? item["remoteSupport"]
      : remoteSupportPropertiesDeserializer(item["remoteSupport"]),
    provisioningState: item["provisioningState"],
  };
}

/** RemoteSupport properties */
export interface RemoteSupportProperties {
  /** Activation state of Diagnostic. */
  state?: RemoteSupportActivationState;
  /** Access level for Diagnostic. */
  accessLevel?: RemoteSupportAccessLevels;
  /** Expiration timestamp for Diagnostic. */
  expirationTimestamp?: string;
}

export function remoteSupportPropertiesSerializer(item: RemoteSupportProperties): any {
  return {
    state: item["state"],
    accessLevel: item["accessLevel"],
    expirationTimestamp: item["expirationTimestamp"],
  };
}

export function remoteSupportPropertiesDeserializer(item: any): RemoteSupportProperties {
  return {
    state: item["state"],
    accessLevel: item["accessLevel"],
    expirationTimestamp: item["expirationTimestamp"],
  };
}

/** Represents the activation state of Diagnostic. */
export enum KnownRemoteSupportActivationState {
  /** Remote Support is enabled. */
  Enabled = "Enabled",
  /** Remote Support is disabled. */
  Disabled = "Disabled",
  /** Remote Support has Expired. */
  Expired = "Expired",
}

/**
 * Represents the activation state of Diagnostic. \
 * {@link KnownRemoteSupportActivationState} can be used interchangeably with RemoteSupportActivationState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled**: Remote Support is enabled. \
 * **Disabled**: Remote Support is disabled. \
 * **Expired**: Remote Support has Expired.
 */
export type RemoteSupportActivationState = string;

/** DiagnosticAccessLevels allowed */
export enum KnownRemoteSupportAccessLevels {
  /** Diagnose access level */
  Diagnose = "Diagnose",
  /** Diagnose And Repair Access Level */
  DiagnoseAndRepair = "DiagnoseAndRepair",
}

/**
 * DiagnosticAccessLevels allowed \
 * {@link KnownRemoteSupportAccessLevels} can be used interchangeably with RemoteSupportAccessLevels,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Diagnose**: Diagnose access level \
 * **DiagnoseAndRepair**: Diagnose And Repair Access Level
 */
export type RemoteSupportAccessLevels = string;

export function diagnosticResourceArraySerializer(result: Array<DiagnosticResource>): any[] {
  return result.map((item) => {
    return diagnosticResourceSerializer(item);
  });
}

export function diagnosticResourceArrayDeserializer(result: Array<DiagnosticResource>): any[] {
  return result.map((item) => {
    return diagnosticResourceDeserializer(item);
  });
}
