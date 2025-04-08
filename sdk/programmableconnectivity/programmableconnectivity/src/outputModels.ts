// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Response verifying location */
export interface DeviceLocationVerificationResultOutput {
  /** True if the location is in the specified area, False otherwise */
  verificationResult: boolean;
}

/** The network that the device is on. */
export interface NetworkRetrievalResultOutput {
  /** The identifier for the network. This can be used as the networkIdentifier for the service APIs. */
  networkCode: string;
}

/** Response verifying number of device */
export interface NumberVerificationResultOutput {
  /** True if number if the phone number matches the device, False otherwise */
  verificationResult: boolean;
}

/** Response with SimSwap date */
export interface SimSwapRetrievalResultOutput {
  /** Datetime of most recent swap for SIM */
  date?: string;
}

/** Response verifying SimSwap in period */
export interface SimSwapVerificationResultOutput {
  /** True if the SIM has swapped in the specified period, False otherwise */
  verificationResult: boolean;
}
