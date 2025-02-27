// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { ErrorModel } from "@azure-rest/core-client";

/** Response of entry submission containing the operationId. */
export interface CreateEntryResultOutput {
  /** String representing the operation id submitted */
  operationId: string;
}

/** The Response body of the GetOperationId API. */
export interface GetOperationResultOutput {
  /** ID of the transaction. Only if status is Succeeded. */
  entryId?: string;
  /** Error in json format. Only if Status is Failed. */
  error?: string;
  /** OperationId */
  operationId: string;
  /**
   * Status of the operation.
   *
   * Possible values: "running", "failed", "succeeded"
   */
  status: OperationStatusOutput;
}

/** The Response body of the ListOperations API */
export interface ListOperationResultOutput {
  /** List of operations */
  operations: Array<GetOperationResultOutput>;
}

/** A List of Entry IDs */
export interface EntryIdsOutput {
  /** List of entry ids */
  transactionIds: string[];
  /** Path to the next page of results */
  nextLink?: string;
}

/** Service temporarily unavailable */
export interface ServiceUnavailableErrorOutput {
  /** The error object. */
  error: ErrorModel;
}

/** The Response body of the service parameters */
export interface ParametersResultOutput {
  serviceCertificate: string;
  serviceId: string;
  signatureAlgorithm: string;
  treeAlgorithm: string;
}

/** A DID document */
export interface DidDocumentOutput {
  /** String representing a DID issuer. */
  id: string;
  /** List of public keys used for receipt endorsement verification. */
  assertionMethod: Array<DidDocumentKeyOutput>;
}

/** A DID document key */
export interface DidDocumentKeyOutput {
  /** Key identifier. */
  id: string;
  /** Key controller - similar to DID issuer. */
  controller: string;
  /** Key type. */
  type: "JsonWebKey2020";
  /** Serialized public key in JWK format. */
  publicKeyJwk: JsonWebKeyOutput;
}

/** rfc7517 JSON Web Key representation adapted from a shared swagger definition in the common types */
export interface JsonWebKeyOutput {
  /**
   * The "alg" (algorithm) parameter identifies the algorithm intended for
   * use with the key.  The values used should either be registered in the
   * IANA "JSON Web Signature and Encryption Algorithms" registry
   * established by [JWA] or be a value that contains a Collision-
   * Resistant Name.
   */
  alg?: string;
  /** The "crv" (curve) parameter identifies the curve type */
  crv?: string;
  /** RSA private exponent or ECC private key */
  d?: string;
  /** RSA Private Key Parameter */
  dp?: string;
  /** RSA Private Key Parameter */
  dq?: string;
  /** RSA public exponent, in Base64 */
  e?: string;
  /** Symmetric key */
  k?: string;
  /**
   * The "kid" (key ID) parameter is used to match a specific key.  This
   * is used, for instance, to choose among a set of keys within a JWK Set
   * during key rollover.  The structure of the "kid" value is
   * unspecified.  When "kid" values are used within a JWK Set, different
   * keys within the JWK Set SHOULD use distinct "kid" values.  (One
   * example in which different keys might use the same "kid" value is if
   * they have different "kty" (key type) values but are considered to be
   * equivalent alternatives by the application using them.)  The "kid"
   * value is a case-sensitive string.
   */
  kid?: string;
  /**
   * The "kty" (key type) parameter identifies the cryptographic algorithm
   * family used with the key, such as "RSA" or "EC". "kty" values should
   * either be registered in the IANA "JSON Web Key Types" registry
   * established by [JWA] or be a value that contains a Collision-
   * Resistant Name.  The "kty" value is a case-sensitive string.
   */
  kty: string;
  /** RSA modulus, in Base64 */
  n?: string;
  /** RSA secret prime */
  p?: string;
  /** RSA secret prime, with p < q */
  q?: string;
  /** RSA Private Key Parameter */
  qi?: string;
  /**
   * Use ("public key use") identifies the intended use of
   * the public key. The "use" parameter is employed to indicate whether
   * a public key is used for encrypting data or verifying the signature
   * on data. Values are commonly "sig" (signature) or "enc" (encryption).
   */
  use?: string;
  /** X coordinate for the Elliptic Curve point */
  x?: string;
  /**
   * The "x5c" (X.509 certificate chain) parameter contains a chain of one
   * or more PKIX certificates [RFC5280].  The certificate chain is
   * represented as a JSON array of certificate value strings.  Each
   * string in the array is a base64-encoded (Section 4 of [RFC4648] --
   * not base64url-encoded) DER [ITU.X690.1994] PKIX certificate value.
   * The PKIX certificate containing the key value MUST be the first
   * certificate.
   */
  x5c?: string[];
  /** Y coordinate for the Elliptic Curve point */
  y?: string;
}

/** The Response body of the Configuration API. */
export interface CodeTransparencyConfigurationOutput {
  policy?: CodeTransparencyConfigurationPolicyOutput;
  authentication?: CodeTransparencyConfigurationAuthenticationOutput;
  /** did:web identifier */
  service_identifier?: string;
}

/** Configuration of CCF Authentication policies. */
export interface CodeTransparencyConfigurationPolicyOutput {
  accepted_algorithms?: string[];
  accepted_did_issuers?: string[];
}

/** Configuration of CCF authentication. */
export interface CodeTransparencyConfigurationAuthenticationOutput {
  allow_unauthenticated: boolean;
  jwt?: CodeTransparencyConfigurationAuthenticationJwtOutput;
}

/** Configuration of JWT claims */
export interface CodeTransparencyConfigurationAuthenticationJwtOutput {
  required_claims: Record<string, string>;
}

/** The Response body of the Version API. */
export interface VersionResultOutput {
  /** Version of the CodeTransparency service */
  scitt_version: string;
}

/** Alias for OperationStatusOutput */
export type OperationStatusOutput = string;
