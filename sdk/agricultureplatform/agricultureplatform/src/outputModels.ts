// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Paged collection of Catalog items */
export interface PagedCatalogOutput {
  /** The Catalog items on this page */
  value: Array<CatalogOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Catalog. */
export interface CatalogOutput {
  /** Links for referencing other objects. */
  links?: Array<LinkOutput>;
  /** Id of the Catalog. */
  readonly id: string;
  /** The ETag value to implement optimistic concurrency. */
  readonly eTag?: string;
  /** Status of the resource. */
  status?: string;
  /** Date-time when resource was created, sample format: yyyy-MM-ddTHH:mm:ssZ. */
  readonly createdDateTime?: string;
  /** Date-time when resource was last modified, sample format: yyyy-MM-ddTHH:mm:ssZ. */
  readonly modifiedDateTime?: string;
  /** Source of the resource. */
  source?: string;
  /** Name to identify resource. */
  name?: string;
  /** Textual description of the resource. */
  description?: string;
  /** Created by user/tenant id. */
  readonly createdBy?: string;
  /** Modified by user/tenant id. */
  readonly modifiedBy?: string;
  /**
   * A collection of key value pairs that belongs to the resource.
   * Each pair must not have a key greater than 50 characters
   * and must not have a value greater than 150 characters.
   * Note: A maximum of 25 key value pairs can be provided for a resource and only
   * string,
   * numeral and datetime (yyyy-MM-ddTHH:mm:ssZ) values are supported.
   */
  properties?: Record<string, any>;
}

/** Link. */
export interface LinkOutput {
  /**
   * Type of relationship.
   *
   * Possible values: "DerivedFrom", "Child", "Parent"
   */
  rel?: RelationshipTypeOutput;
  /** Href. */
  href?: string;
  /**
   * DestinationType.
   *
   * Possible values: "Catalog", "Collection", "Item", "Asset"
   */
  type?: DestinationTypeOutput;
}

/** Paged collection of Collection items */
export interface PagedCollectionOutput {
  /** The Collection items on this page */
  value: Array<CollectionOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Collection. */
export interface CollectionOutput {
  /** Schema Foreign Key. */
  schemaId: string;
  /** Id of the Collection. */
  readonly collectionId: string;
  /** Links for referencing other objects. */
  links?: Array<LinkOutput>;
  /** Unique resource ID. */
  readonly id?: string;
  /** The ETag value to implement optimistic concurrency. */
  readonly eTag?: string;
  /** Status of the resource. */
  status?: string;
  /** Date-time when resource was created, sample format: yyyy-MM-ddTHH:mm:ssZ. */
  readonly createdDateTime?: string;
  /** Date-time when resource was last modified, sample format: yyyy-MM-ddTHH:mm:ssZ. */
  readonly modifiedDateTime?: string;
  /** Source of the resource. */
  source?: string;
  /** Name to identify resource. */
  name?: string;
  /** Textual description of the resource. */
  description?: string;
  /** Created by user/tenant id. */
  readonly createdBy?: string;
  /** Modified by user/tenant id. */
  readonly modifiedBy?: string;
  /**
   * A collection of key value pairs that belongs to the resource.
   * Each pair must not have a key greater than 50 characters
   * and must not have a value greater than 150 characters.
   * Note: A maximum of 25 key value pairs can be provided for a resource and only
   * string,
   * numeral and datetime (yyyy-MM-ddTHH:mm:ssZ) values are supported.
   */
  properties?: Record<string, any>;
}

/** File. */
export interface FileOutput {
  /** FilePath. */
  filePath: string;
}

/** Asset. */
export interface AssetOutput {
  /**
   * Type of dataset.
   *
   * Possible values: "Image", "Shapefile", "Binary"
   */
  type?: DataFormatOutput;
  /** Name. */
  name?: string;
  /** Href. */
  href?: string;
}

/** ItemResponse model for Items api. */
export interface ItemResponseOutput {
  /** Links. */
  links?: Array<LinkOutput>;
  /** Schema for records under the dataset. */
  data: Record<string, any>;
  /** OwnerItemId. */
  ownerItemId?: string;
  /** CatalogId. */
  readonly catalogId?: string;
  /** CollectionId. */
  readonly collectionId?: string;
  /** Assets. */
  assets?: Array<AssetOutput>;
  /** Unique resource ID. */
  readonly id?: string;
  /** The ETag value to implement optimistic concurrency. */
  readonly eTag?: string;
  /** Status of the resource. */
  status?: string;
  /** Date-time when resource was created, sample format: yyyy-MM-ddTHH:mm:ssZ. */
  readonly createdDateTime?: string;
  /** Date-time when resource was last modified, sample format: yyyy-MM-ddTHH:mm:ssZ. */
  readonly modifiedDateTime?: string;
  /** Source of the resource. */
  source?: string;
  /** Name to identify resource. */
  name?: string;
  /** Textual description of the resource. */
  description?: string;
  /** Created by user/tenant id. */
  readonly createdBy?: string;
  /** Modified by user/tenant id. */
  readonly modifiedBy?: string;
  /**
   * A collection of key value pairs that belongs to the resource.
   * Each pair must not have a key greater than 50 characters
   * and must not have a value greater than 150 characters.
   * Note: A maximum of 25 key value pairs can be provided for a resource and only
   * string,
   * numeral and datetime (yyyy-MM-ddTHH:mm:ssZ) values are supported.
   */
  properties?: Record<string, any>;
}

/** Item. */
export interface ItemOutput {
  /** Links. */
  links?: Array<LinkOutput>;
  /** Schema for records under the dataset. */
  data: Record<string, any>;
  /** Owner Item Ids of the resource */
  ownerItemId?: string;
  /** Id of the Catalog resource. */
  readonly catalogId?: string;
  /** Id of the Collection resource. */
  readonly collectionId?: string;
  /** Assets. */
  assets?: Array<AssetOutput>;
  /** Id of the Item. */
  readonly id: string;
  /** The ETag value to implement optimistic concurrency. */
  readonly eTag?: string;
  /** Status of the resource. */
  status?: string;
  /** Date-time when resource was created, sample format: yyyy-MM-ddTHH:mm:ssZ. */
  readonly createdDateTime?: string;
  /** Date-time when resource was last modified, sample format: yyyy-MM-ddTHH:mm:ssZ. */
  readonly modifiedDateTime?: string;
  /** Source of the resource. */
  source?: string;
  /** Name to identify resource. */
  name?: string;
  /** Textual description of the resource. */
  description?: string;
  /** Created by user/tenant id. */
  readonly createdBy?: string;
  /** Modified by user/tenant id. */
  readonly modifiedBy?: string;
  /**
   * A collection of key value pairs that belongs to the resource.
   * Each pair must not have a key greater than 50 characters
   * and must not have a value greater than 150 characters.
   * Note: A maximum of 25 key value pairs can be provided for a resource and only
   * string,
   * numeral and datetime (yyyy-MM-ddTHH:mm:ssZ) values are supported.
   */
  properties?: Record<string, any>;
}

/** Represents a response containing a list of items. */
export interface ItemListResponseOutput {
  /** List of Items. */
  value: Array<ItemOutput>;
  /** Skip token for getting next set of results. */
  skipToken?: string;
  /**
   * URL to do the POST request with same filters,
   * to get next set of items.
   */
  nextLink?: string;
}

/** Satellite Fetch Response. */
export interface SatelliteFetchResponseOutput {
  /** Value. */
  value?: Array<SatelliteFetchDataOutput>;
}

/** SatelliteFetchData. */
export interface SatelliteFetchDataOutput {
  /** Start Date. */
  dateTime?: string;
  /** Provider of satellite data. Available Value: SentinelHub. */
  provider?: string;
  /** Collection of satellite data. Available Value: sentinel-2-l2a, sentinel-2-l1c. */
  providerCollectionId: string;
  /** Feature Id. */
  featureId?: string;
  /** ImageFiles. */
  imageFiles?: Array<ImageFileOutput>;
  /** ItemUri. */
  itemUri?: string;
  /** Id. */
  id?: string;
}

/** Schema of image file resource. */
export interface ImageFileOutput {
  /** ADLS path of the image file. */
  filePath?: string;
  /** Name of the image file. */
  name: string;
  /**
   * Supported image formats for scene resource.
   *
   * Possible values: "TIF"
   */
  imageFormat?: ImageFormatOutput;
  /** Resolution of image file in meters. */
  resolution?: number;
}

/**
 * Paged response contains list of items and next property to get the next set of
 * results.
 */
export interface SearchFeaturesResponseOutput {
  /** List of items. */
  features: Array<StacItemOutput>;
  /**
   * URL to do the POST request with same filters,
   * to get next set of items.
   */
  readonly nextLink?: string;
}

/**
 * Schema of STAC Item.
 * Refer for spec:
 * https://github.com/radiantearth/stac-spec/blob/v1.0.0-beta.2/item-spec/item-spec.md#item-fields.
 */
export interface StacItemOutput {
  /** The STAC version the Stac Item implements. */
  stacVersion: string;
  /** A list of extensions the Stac Item implements. */
  stacExtensions?: string[];
  /** Provider identifier. Globally unique ID by Data provider. */
  id: string;
  /** Type of the GeoJSON Object. It's value is always Feature. */
  type: string;
  /**
   * Defines the full footprint of the asset represented by this item.
   * Its a GeoJSON geometry.
   */
  geometry?: any;
  /** Bounding box of the item. */
  bbox?: number[];
  /** A dictionary of additional metadata for the item. */
  properties: any;
  /** List of link objects to resources and related URLs. */
  links: Array<StacLinkOutput>;
  /** Dictionary of asset objects, each with a unique key. */
  assets: Record<string, StacAssetOutput>;
  /** The id of the STAC Collection this Stac Item references. */
  providerCollectionId?: string;
}

/** Link. */
export interface StacLinkOutput {
  /** The HREF of the link. */
  href?: string;
  /** The relation type of the link. */
  rel?: string;
  /** The type of the link. Optional. */
  type?: string;
  /** The title of the link. Optional. */
  title?: string;
}

/** Assets. */
export interface StacAssetOutput {
  /** The HREF of the asset. */
  href?: string;
  /** The title of the asset. */
  title?: string;
  /** The description of the asset. */
  description?: string;
  /** The type of the asset. */
  type?: string;
  /** The roles of the asset. */
  roles?: string[];
}

/** Paged collection of Schema items */
export interface PagedSchemaOutput {
  /** The Schema items on this page */
  value: Array<SchemaOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** SchemaModel. */
export interface SchemaOutput {
  /** Dependent Collections. */
  readonly dependentCollections?: Array<CatalogCollectionOutput>;
  /** Schema. */
  schemaModel: Record<string, any>;
  /** Id of the Schema. */
  readonly id: string;
  /** The ETag value to implement optimistic concurrency. */
  readonly eTag?: string;
  /** Status of the resource. */
  status?: string;
  /** Date-time when resource was created, sample format: yyyy-MM-ddTHH:mm:ssZ. */
  readonly createdDateTime?: string;
  /** Date-time when resource was last modified, sample format: yyyy-MM-ddTHH:mm:ssZ. */
  readonly modifiedDateTime?: string;
  /** Source of the resource. */
  source?: string;
  /** Name to identify resource. */
  name?: string;
  /** Textual description of the resource. */
  description?: string;
  /** Created by user/tenant id. */
  readonly createdBy?: string;
  /** Modified by user/tenant id. */
  readonly modifiedBy?: string;
  /**
   * A collection of key value pairs that belongs to the resource.
   * Each pair must not have a key greater than 50 characters
   * and must not have a value greater than 150 characters.
   * Note: A maximum of 25 key value pairs can be provided for a resource and only
   * string,
   * numeral and datetime (yyyy-MM-ddTHH:mm:ssZ) values are supported.
   */
  properties?: Record<string, any>;
}

/** Schema for storing catalog and collection id. */
export interface CatalogCollectionOutput {
  /** Catalog Id. */
  readonly catalogId?: string;
  /** Collection Id. */
  readonly collectionId?: string;
}

/** SamplePartnerResponse. */
export interface SamplePartnerResponseOutput {
  /** Id. */
  id?: string;
  /** Message. */
  message?: string;
  /** Status. */
  status?: string;
  /** JobCreatedDateTime. */
  jobCreatedDateTime?: string;
  /** JobLastActionDateTime. */
  jobLastActionDateTime?: string;
  /** E2eid. */
  e2eid?: string;
  /** SamplePartnerRequestBody. */
  partnerRequestBody?: SamplePartnerRequestBodyOutput;
}

/** SamplePartnerRequestBody. */
export interface SamplePartnerRequestBodyOutput {
  /** SolutionId. */
  solutionId?: string;
  /** PartyId. */
  partyId?: string;
  /** GddStartDate. */
  gddStartDate?: string;
  /** GddEndDate. */
  gddEndDate?: string;
  /** ResourceId. */
  resourceId?: string;
  /** ResourceType. */
  resourceType?: string;
  /** Crop. */
  crop?: string;
  /** TemperatureUnit. */
  temperatureUnit?: string;
  /** Method. */
  method?: string;
}

/** Schema of Location data. */
export interface WeatherLocationOutput {
  /** Location Type eg. LatLong/IataCode/IcaoCode/Placeid/PostalKey. */
  type: string;
  /** Location Value eg. "10,-25" for LocationType Type "LatLong". */
  value: string;
}

/** Schema of Weather Data Provider Response. */
export interface WeatherResponseOutput {
  /** Schema of Weather Metadata. */
  weatherMetadata: WeatherMetadataOutput;
  /** Indicates a Succeeded, Failed, or PartiallySucceeded response. */
  status?: string;
  /** List of weather data for all the weather locations. */
  locations?: Array<WeatherLocationDataOutput>;
  /** Model for errors encountered for all failed locations. */
  errors?: WeatherDataErrorsOutput;
}

/** Schema of Weather Metadata. */
export interface WeatherMetadataOutput {
  /** Type of weather data (forecast/historical). */
  weatherDataType: string;
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
}

/** Schema of WeatherLocationData data. */
export interface WeatherLocationDataOutput {
  /** Schema of Location data. */
  location?: WeatherLocationOutput;
  /** Request Completion Time in Utc of the location. */
  requestCompletionTime?: string;
  /** Date-time when resource was last requested, sample format: yyyy-MM-ddTHH:mm:ssZ. */
  lastRefreshedDateTime?: string;
  /** Schema of weather data. */
  data?: WeatherDataOutput;
}

/** Schema of weather data. */
export interface WeatherDataOutput {
  /**
   * A collection of key value pairs that belongs to the resource. Each pair must
   * not have a key greater than 50 characters and must not have a value greater
   * than 250 characters. Note: A maximum of 100 key value pairs can be provided for
   * a resource and only string and numeral values are supported.
   */
  additionalAttributes?: Record<string, any>;
  /** Schema for storing measurement readings and unit. */
  wetBulbTemperature?: MeasuresOutput;
  /** Schema for storing measurement readings and unit. */
  cloudCover?: MeasuresOutput;
  /** Day of week. */
  dayOfWeek?: string[];
  /**
   * This data field indicates whether it is daytime or nighttime based on the Local
   * Apparent Time of the location.
   */
  dayOrNight?: string[];
  /** Expiration time in Utc format. */
  expirationTime?: string[];
  /**
   * This number is the key to the weather icon lookup. The data field shows the
   * icon number that is matched to represent the observed weather conditions.
   */
  iconCode?: number[];
  /** Code representing full set sensible weather. */
  iconCodeExtend?: number[];
  /** Indicates whether there is precipitation or not. */
  hasPrecipitation?: boolean[];
  /** Schema for storing measurement readings and unit. */
  pressureMeanSeaLevel?: MeasuresOutput;
  /** Schema for storing measurement readings and unit. */
  relativeHumidity?: MeasuresOutput;
  /** Schema for storing measurement readings and unit. */
  temperature?: MeasuresOutput;
  /** Schema for storing measurement readings and unit. */
  temperatureDewPoint?: MeasuresOutput;
  /** Schema for storing measurement readings and unit. */
  temperatureFeelsLike?: MeasuresOutput;
  /** Schema for storing measurement readings and unit. */
  temperatureHeatIndex?: MeasuresOutput;
  /** Schema for storing measurement readings and unit. */
  temperatureWindChill?: MeasuresOutput;
  /**
   * The UV Index Description which complements the UV Index value by providing an
   * associated level of risk of skin damage due to exposure (-2 = Not Available, -1
   * = No Report, 0 to 2 = Low, 3 to 5 = Moderate, 6 to 7 = High, 8 to 10 = Very
   * High, 11 to 16 = Extreme).
   */
  uvDescription?: string[];
  /** Hourly maximum UV index. */
  uvIndex?: number[];
  /** Time forecast is valid in local apparent time. */
  validTimeLocal?: string[];
  /** Time forecast is valid in Utc format. */
  validTime?: string[];
  /** Schema for storing measurement readings and unit. */
  visibility?: MeasuresOutput;
  /** Schema for storing measurement readings and unit. */
  windDirection?: MeasuresOutput;
  /** Schema for storing measurement readings and unit. */
  windGust?: MeasuresOutput;
  /** Schema for storing measurement readings and unit. */
  windSpeed?: MeasuresOutput;
  /** Hourly sensible weather phrase containing longer description. */
  wxPhraseLong?: string[];
  /** Hourly sensible weather phrase containing short description. */
  wxPhraseShort?: string[];
}

/** Schema for storing measurement readings and unit. */
export interface MeasuresOutput {
  /** Data unit. */
  unit?: string;
  /** Data values. */
  value?: number[];
}

/** Model for errors encountered for all failed locations. */
export interface WeatherDataErrorsOutput {
  /** List of errors encountered for all failed locations. */
  locations?: Array<ErrorForLocationOutput>;
}

/** Model for error information for a failed location. */
export interface ErrorForLocationOutput {
  /** Schema of Location data. */
  location?: WeatherLocationOutput;
  /** Status code returned by data provider. */
  code?: number;
  /** Description of the error. */
  description?: string;
  /**
   * Flag suggesting if retry attempt with same request body should be made to fetch
   * required data.
   */
  retryable?: boolean;
}

/** Alias for RelationshipTypeOutput */
export type RelationshipTypeOutput = string;
/** Alias for DestinationTypeOutput */
export type DestinationTypeOutput = string;
/** Alias for DataFormatOutput */
export type DataFormatOutput = string;
/** Alias for ImageFormatOutput */
export type ImageFormatOutput = string;
