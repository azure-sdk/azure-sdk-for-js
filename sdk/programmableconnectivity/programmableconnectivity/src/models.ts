// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Request to verify Location */
export interface DeviceLocationVerificationContent {
  /** Network to query for this device, or device information to enable network routing. */
  networkIdentifier: NetworkIdentifier;
  /** Latitude of location to be verified */
  latitude: number;
  /** Longitude of location to be verified */
  longitude: number;
  /** Accuracy expected for location verification in kilometers */
  accuracy: number;
  /** The device to find the location for. Exactly one of Network Access Code, Phone Number, IPv4 address, or IPv6 address */
  device: LocationDevice;
}

/** Identifier for the network to be queried */
export interface NetworkIdentifier {
  /** The type of identifier for the network. one of: 'IPv4', 'IPv6', 'MSISDN', 'NetworkCode' */
  identifierType: string;
  /**
   * The network identifier, based on the identifierType: an IPv4 address, an IPv6 address, an MSISDN, or a Network Code.
   * A Network Code may be obtained from APC documentation or from the APC /Network:retrieve endpoint.
   */
  identifier: string;
}

/** Device information needed by operator to provide location information. Include exactly one of these properties to identify your device. */
export interface LocationDevice {
  /** External identifier or network access identifier of the device */
  networkAccessIdentifier?: string;
  /** Phone number in E.164 format (starting with country code), and optionally prefixed with '+' */
  phoneNumber?: string;
  /** The Ipv4 address */
  ipv4Address?: Ipv4Address;
  /** The Ipv6 address */
  ipv6Address?: Ipv6Address;
}

/** IPv4 device indicator */
export interface Ipv4Address {
  /** An IPv4 address. This may be specified as an exact address, or as a subnet in CIDR notation. */
  ipv4: string;
  /** User equipment port. */
  port: number;
}

/** IPv6 device indicator */
export interface Ipv6Address {
  /** An IPv6 address. This may be specified as an exact address, or as a subnet in CIDR notation. */
  ipv6: string;
  /** User equipment port. */
  port: number;
}

/** Request to verify number of device - first call */
export interface NumberVerificationWithoutCodeContent {
  /** Identifier for the network to query for this device. */
  networkIdentifier: NetworkIdentifier;
  /** Phone number in E.164 format (starting with country code), and optionally prefixed with '+' */
  phoneNumber?: string;
  /** Hashed phone number. SHA-256 (in hexadecimal representation) of the mobile phone number in **E.164 format (starting with country code)**. Optionally prefixed with '+'. */
  hashedPhoneNumber?: string;
  /** Redirect URI to backend application. */
  redirectUri: string;
}

/** Request to verify number of device - second call */
export interface NumberVerificationWithCodeContent {
  /** The code provided by APC in exchange for the operator code. */
  apcCode: string;
}

/** Request to retrieve SimSwap date */
export interface SimSwapRetrievalContent {
  /** Phone number in E.164 format (starting with country code), and optionally prefixed with '+' */
  phoneNumber?: string;
  /** Network to query for this device */
  networkIdentifier: NetworkIdentifier;
}

/** Request to verify SimSwap in period */
export interface SimSwapVerificationContent {
  /** Phone number in E.164 format (starting with country code), and optionally prefixed with '+' */
  phoneNumber?: string;
  /** Maximum lookback for SimSwap verification */
  maxAgeHours?: number;
  /** Identifier for the network to query for this device. */
  networkIdentifier: NetworkIdentifier;
}
