// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** The list of schema group names with server paging support. */
export interface _SchemaGroups {
  /** The collection of pageable schema group name items. */
  value: string[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The list of schema versions with server paging support. */
export interface _SchemaVersions {
  /** The collection of schema version pageable items. */
  value: number[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Known values of {@link SchemaContentTypeValues} that the service accepts. */
export enum KnownSchemaContentTypeValues {
  /** application/json; serialization=Avro */
  "application/json; serialization=Avro" = "application/json; serialization=Avro",
  /** application/json; serialization=Json */
  "application/json; serialization=Json" = "application/json; serialization=Json",
  /** text/plain; charset=utf-8 */
  "text/plain; charset=utf-8" = "text/plain; charset=utf-8",
  /** text/vnd.ms.protobuf */
  "text/vnd.ms.protobuf" = "text/vnd.ms.protobuf",
}

/**
 * Describes closed list of schema content type values. \
 * {@link KnownSchemaContentTypeValues} can be used interchangeably with SchemaContentTypeValues,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **application\/json; serialization=Avro** \
 * **application\/json; serialization=Json** \
 * **text\/plain; charset=utf-8** \
 * **text\/vnd.ms.protobuf**
 */
export type SchemaContentTypeValues =
  | "application/json; serialization=Avro"
  | "application/json; serialization=Json"
  | "text/plain; charset=utf-8"
  | "text/vnd.ms.protobuf";
/** Represents the Schema Registry API version to use for requests. */
export type ServiceVersion = "2021-10" | "2022-10" | "2023-07-01";
