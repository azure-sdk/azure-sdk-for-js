// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Catalog. */
export interface Catalog {
  /** Links for referencing other objects. */
  links?: Array<Link>;
  /** Status of the resource. */
  status?: string;
  /** Source of the resource. */
  source?: string;
  /** Name to identify resource. */
  name?: string;
  /** Textual description of the resource. */
  description?: string;
  /**
   * A collection of key value pairs that belongs to the resource.
   * Each pair must not have a key greater than 50 characters
   * and must not have a value greater than 150 characters.
   * Note: A maximum of 25 key value pairs can be provided for a resource and only
   * string,
   * numeral and datetime (yyyy-MM-ddTHH:mm:ssZ) values are supported.
   */
  properties?: Record<string, unknown>;
}

/** Link. */
export interface Link {
  /**
   * Type of relationship.
   *
   * Possible values: "DerivedFrom", "Child", "Parent"
   */
  rel?: RelationshipType;
  /** Href. */
  href?: string;
  /**
   * DestinationType.
   *
   * Possible values: "Catalog", "Collection", "Item", "Asset"
   */
  type?: DestinationType;
}

/** Collection. */
export interface Collection {
  /** Links for referencing other objects. */
  links?: Array<Link>;
  /** Status of the resource. */
  status?: string;
  /** Source of the resource. */
  source?: string;
  /** Name to identify resource. */
  name?: string;
  /** Textual description of the resource. */
  description?: string;
  /**
   * A collection of key value pairs that belongs to the resource.
   * Each pair must not have a key greater than 50 characters
   * and must not have a value greater than 150 characters.
   * Note: A maximum of 25 key value pairs can be provided for a resource and only
   * string,
   * numeral and datetime (yyyy-MM-ddTHH:mm:ssZ) values are supported.
   */
  properties?: Record<string, unknown>;
  /** Schema Foreign Key. */
  schemaId: string;
}

/** File. */
export interface FileModel {
  /** FilePath. */
  filePath: string;
}

/** Asset. */
export interface Asset {
  /**
   * Type of dataset.
   *
   * Possible values: "Image", "Shapefile", "Binary"
   */
  type?: DataFormat;
  /** Name. */
  name?: string;
  /** Href. */
  href?: string;
}

/** Item. */
export interface Item {
  /** Links for referencing other objects. */
  links?: Array<Link>;
  /** Status of the resource. */
  status?: string;
  /** Source of the resource. */
  source?: string;
  /** Name to identify resource. */
  name?: string;
  /** Textual description of the resource. */
  description?: string;
  /**
   * A collection of key value pairs that belongs to the resource.
   * Each pair must not have a key greater than 50 characters
   * and must not have a value greater than 150 characters.
   * Note: A maximum of 25 key value pairs can be provided for a resource and only
   * string,
   * numeral and datetime (yyyy-MM-ddTHH:mm:ssZ) values are supported.
   */
  properties?: Record<string, unknown>;
  /** Schema for records under the dataset. */
  data: Record<string, unknown>;
  /** Owner Item Ids of the resource */
  ownerItemId?: string;
  /** Assets. */
  assets?: Array<Asset>;
}

/** CatalogQuery. */
export interface ItemQuery {
  /** Owner Item Ids of the resource. */
  ownerItemIds?: string[];
  /**
   * Filters on key-value pairs within the Data object.
   * e.g. "{testKey} eq {testValue}".
   */
  dataFilters?: string[];
  /**
   * GeoJSON (For more details: https://geojson.org/). Note: Coordinates are
   * expected in [Longitude, Latitude] format.
   */
  intersectsWithGeometry?: GeoJsonObject;
  /** Ids of the resource. */
  ids?: string[];
  /** Minimum creation date of resource (inclusive). */
  minCreatedDateTime?: Date | string;
  /** Maximum creation date of resource (inclusive). */
  maxCreatedDateTime?: Date | string;
  /** Minimum last modified date of resource (inclusive). */
  minLastModifiedDateTime?: Date | string;
  /** Maximum last modified date of resource (inclusive). */
  maxLastModifiedDateTime?: Date | string;
  /**
   * Maximum number of items needed (inclusive).
   * Minimum = 10, Maximum = 1000, Default value = 50.
   */
  maxPageSize?: number;
  /** Skip token for getting next set of results. */
  skipToken?: string;
}

/**
 * GeoJSON (For more details: https://geojson.org/). Note: Coordinates are
 * expected in [Longitude, Latitude] format.
 */
export interface GeoJsonObjectParent {
  type: GeoJsonObjectType;
}

/** MultiPolygon geometry. */
export interface MultiPolygon extends GeoJsonObjectParent {
  /**
   * Gets or sets Coordinates of GeoJSON Object.
   * It must be an array of polygons, each polygon contains list of linear rings.
   * For Polygons with more than one of these rings, the first MUST be the exterior
   * ring,
   * and any others MUST be interior rings.
   */
  coordinates: number[][][][];
  /** GeoJSON object type. */
  type: "MultiPolygon";
}

/** Point geometry. */
export interface Point extends GeoJsonObjectParent {
  /**
   * Gets or sets the coordinate of this point.
   * It must be an array of 2 or 3 elements for a 2D or 3D system.
   */
  coordinates: number[];
  /** GeoJSON object type. */
  type: "Point";
}

/** Polygon geometry. */
export interface Polygon extends GeoJsonObjectParent {
  /**
   * Gets or sets type of the GeoJSON Object.
   * It must be an array of linear ring coordinate arrays.
   * For Polygons with more than one of these rings, the first MUST be the exterior
   * ring,
   * and any others MUST be interior rings.
   */
  coordinates: number[][][];
  /** GeoJSON object type. */
  type: "Polygon";
}

/** CrossCatalogItemSearchQuery. */
export interface CrossCollectionItemSearchQuery {
  /** Owner Item Ids of the resource. */
  ownerItemIds?: string[];
  /**
   * Filters on key-value pairs within the Data object.
   * e.g. "{testKey} eq {testValue}".
   */
  dataFilters?: string[];
  /**
   * GeoJSON (For more details: https://geojson.org/). Note: Coordinates are
   * expected in [Longitude, Latitude] format.
   */
  intersectsWithGeometry?: GeoJsonObject;
  /** Ids of the resource. */
  ids?: string[];
  /** Minimum creation date of resource (inclusive). */
  minCreatedDateTime?: Date | string;
  /** Maximum creation date of resource (inclusive). */
  maxCreatedDateTime?: Date | string;
  /** Minimum last modified date of resource (inclusive). */
  minLastModifiedDateTime?: Date | string;
  /** Maximum last modified date of resource (inclusive). */
  maxLastModifiedDateTime?: Date | string;
  /**
   * Maximum number of items needed (inclusive).
   * Minimum = 10, Maximum = 1000, Default value = 50.
   */
  maxPageSize?: number;
  /** Skip token for getting next set of results. */
  skipToken?: string;
  /** Owner Item Ids of the resource. */
  collectionIds?: string[];
}

/** Satellite Fetch Request. */
export interface SatelliteFetchRequest {
  /** Start Date. */
  startDateTime?: Date | string;
  /** OAuthClientCredentials for clientId clientSecret auth. */
  credentials: OauthClientCredentials;
  /** End Date. */
  endDateTime?: Date | string;
  /** Provider of satellite data. Available Value: SentinelHub. */
  provider: string;
  /** ItemUri. */
  itemUri: string;
  /** Data Model for SatelliteIngestionJobRequest. */
  data: SatelliteData;
  /** Collection of satellite data. Available Value: sentinel-2-l2a, sentinel-2-l1c. */
  providerCollectionId: string;
  /** Feature Id. */
  featureId?: string;
}

/** OAuthClientCredentials for clientId clientSecret auth. */
export interface OauthClientCredentials extends AuthCredentialsParent {
  /** ClientId associated with the provider. */
  clientId: string;
  /** Properties of the key vault. */
  clientSecret: KeyVaultProperties;
  /** Type of AuthCredentials. */
  kind: "OAuthClientCredentials";
}

/** Properties of the key vault. */
export interface KeyVaultProperties {
  /** Uri of the key vault. */
  keyVaultUri: string;
  /** Name of Key Vault key. */
  keyName: string;
  /** Version of Key Vault key. */
  keyVersion: string;
}

/** AuthCredentials abstract base class for Auth Purpose. */
export interface AuthCredentialsParent {
  kind: AuthCredentialsKind;
}

/** Api Key Auth Credentials class for API Key based Auth. */
export interface ApiKeyAuthCredentials extends AuthCredentialsParent {
  /** Properties of the key vault. */
  apiKey: KeyVaultProperties;
  /** Enum for different types of AuthCredentials. */
  kind: "ApiKeyAuthCredentials";
}

/** Data Model for SatelliteIngestionJobRequest. */
export interface SatelliteData {
  /** List of ImageNames. */
  imageNames?: string[];
  /** List of ImageFormats. Available value: TIF. */
  imageFormats?: string[];
  /** List of ImageResolutions in meters. Available values: 10, 20, 60. */
  imageResolutions?: number[];
}

/** Satellite  Stac Request. */
export interface SatelliteStacRequest {
  /** Start datetime of the time interval in which to search for Items. */
  startDateTime?: Date | string;
  /** OAuthClientCredentials for clientId clientSecret auth. */
  credentials: OauthClientCredentials;
  /** Provider of satellite data. Available Value: SentinelHub. */
  provider: string;
  /** End datetime of the time interval in which to search for Items. */
  endDateTime?: Date | string;
  /**
   * GeoJSON (For more details: https://geojson.org/). Note: Coordinates are
   * expected in [Longitude, Latitude] format.
   */
  intersects?: GeoJsonObject;
  /**
   * Only items that have a geometry that intersects the bounding box are selected.
   * The bounding box is provided as four numbers. The coordinate reference system
   * of the values is WGS84 longitude/latitude.
   */
  bbox?: number[];
  /** Array of feature ids to return. */
  featureIds?: string[];
  /** Collection of satellite data. Available Value: sentinel-2-l2a, sentinel-2-l1c. */
  providerCollectionId: string;
}

/** SchemaModel. */
export interface Schema {
  /** Links for referencing other objects. */
  links?: Array<Link>;
  /** Status of the resource. */
  status?: string;
  /** Source of the resource. */
  source?: string;
  /** Name to identify resource. */
  name?: string;
  /** Textual description of the resource. */
  description?: string;
  /**
   * A collection of key value pairs that belongs to the resource.
   * Each pair must not have a key greater than 50 characters
   * and must not have a value greater than 150 characters.
   * Note: A maximum of 25 key value pairs can be provided for a resource and only
   * string,
   * numeral and datetime (yyyy-MM-ddTHH:mm:ssZ) values are supported.
   */
  properties?: Record<string, unknown>;
  /** Schema. */
  schemaModel: Record<string, unknown>;
}

/** Schema for storing catalog and collection id. */
export interface CatalogCollection {}

/** Solution. */
export interface Solution {
  /** SolutionId. */
  solutionId: string;
  /** RequestPath. */
  requestPath: string;
  /** Properties. */
  partnerRequestBody: Record<string, unknown>;
  /** Properties. */
  partnerRequestHeaders: Record<string, unknown>;
}

/** SolutionData. */
export interface SolutionData {
  /** SolutionId. */
  solutionId: string;
  /** RequestPath. */
  requestPath: string;
  /** Properties. */
  partnerRequestBody: Record<string, unknown>;
  /** Properties. */
  partnerRequestHeaders: Record<string, unknown>;
  /** Input Data. */
  inputData: Record<string, unknown>;
}

/** WeatherRequest. */
export interface WeatherRequest {
  /** Weather provider name. */
  providerName: string;
  /** Provider's api name to which request is to be made. */
  providerApiName: string;
  /**
   * Language (IETF BCP 47 language tag) in which search results should be returned
   * by the data provider. Examples: 'en-US', 'es', 'es-MX', 'fr-FR'.
   */
  language?: string;
  /**
   * Units for which request to data provider is to be sent. Supported values are
   * 'e' for English units, 'm' for Metric units, 'h' for Hybrid units (UK) and 's'
   * for Metric SI units.
   */
  units: string;
  /** Api Key Auth Credentials class for API Key based Auth. */
  credentials?: ApiKeyAuthCredentials;
  /** List of locations for which weather data need to be fetched from the provider. */
  locations?: Array<WeatherLocation>;
}

/** Schema of Location data. */
export interface WeatherLocation {
  /** Location Type eg. LatLong/IataCode/IcaoCode/Placeid/PostalKey. */
  type: string;
  /** Location Value eg. "10,-25" for LocationType Type "LatLong". */
  value: string;
}

/**
 * GeoJSON (For more details: https://geojson.org/). Note: Coordinates are
 * expected in [Longitude, Latitude] format.
 */
export type GeoJsonObject = GeoJsonObjectParent | MultiPolygon | Point | Polygon;
/** AuthCredentials abstract base class for Auth Purpose. */
export type AuthCredentials =
  | AuthCredentialsParent
  | OauthClientCredentials
  | ApiKeyAuthCredentials;
/** Alias for RelationshipType */
export type RelationshipType = string;
/** Alias for DestinationType */
export type DestinationType = string;
/** Alias for AcceptHeaderEnum */
export type AcceptHeaderEnum = string;
/** Alias for DataFormat */
export type DataFormat = string;
/** Alias for GeoJsonObjectType */
export type GeoJsonObjectType = string;
/** Alias for AuthCredentialsKind */
export type AuthCredentialsKind = string;
