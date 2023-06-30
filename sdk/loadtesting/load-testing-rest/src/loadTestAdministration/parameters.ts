// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { Test, TestAppComponents, TestServerMetricConfig } from "./models";

/** Load test model */
export type TestResourceMergeAndPatch = Partial<Test>;

export interface CreateOrUpdateTestBodyParam {
  /** Load test model */
  body: TestResourceMergeAndPatch;
}

export interface CreateOrUpdateTestMediaTypesParam {
  contentType: "application/merge-patch+json";
}

export type CreateOrUpdateTestParameters = CreateOrUpdateTestMediaTypesParam &
  CreateOrUpdateTestBodyParam &
  RequestParameters;
/** App Component model. */
export type TestAppComponentsResourceMergeAndPatch = Partial<TestAppComponents>;

export interface CreateOrUpdateAppComponentsBodyParam {
  /** App Component model. */
  body: TestAppComponentsResourceMergeAndPatch;
}

export interface CreateOrUpdateAppComponentsMediaTypesParam {
  contentType: "application/merge-patch+json";
}

export type CreateOrUpdateAppComponentsParameters =
  CreateOrUpdateAppComponentsMediaTypesParam &
    CreateOrUpdateAppComponentsBodyParam &
    RequestParameters;
/** Server metric configuration model. */
export type TestServerMetricConfigResourceMergeAndPatch =
  Partial<TestServerMetricConfig>;

export interface CreateOrUpdateServerMetricsConfigBodyParam {
  /** Server metric configuration model. */
  body: TestServerMetricConfigResourceMergeAndPatch;
}

export interface CreateOrUpdateServerMetricsConfigMediaTypesParam {
  contentType: "application/merge-patch+json";
}

export type CreateOrUpdateServerMetricsConfigParameters =
  CreateOrUpdateServerMetricsConfigMediaTypesParam &
    CreateOrUpdateServerMetricsConfigBodyParam &
    RequestParameters;
export type GetAppComponentsParameters = RequestParameters;
export type GetServerMetricsConfigParameters = RequestParameters;
export type GetTestParameters = RequestParameters;
export type GetTestFileParameters = RequestParameters;
export type ListTestFilesParameters = RequestParameters;

export interface ListTestsQueryParamProperties {
  /**
   * Sort on the supported fields in (field asc/desc) format. eg:
   * lastModifiedDateTime asc. Supported fields - lastModifiedDateTime
   */
  orderby?: string;
  /**
   * Prefix based, case sensitive search on searchable fields - displayName,
   * createdBy. For example, to search for a test, with display name is Login Test,
   * the search parameter can be Login.
   */
  search?: string;
  /**
   * Start DateTime(ISO 8601 literal format) of the last updated time range to
   * filter tests.
   */
  lastModifiedStartTime?: Date | string;
  /**
   * End DateTime(ISO 8601 literal format) of the last updated time range to filter
   * tests.
   */
  lastModifiedEndTime?: Date | string;
  /** Number of results in response. */
  maxpagesize?: number;
}

export interface ListTestsQueryParam {
  queryParameters?: ListTestsQueryParamProperties;
}

export type ListTestsParameters = ListTestsQueryParam & RequestParameters;

export interface UploadTestFileBodyParam {
  /**
   * The file content as application/octet-stream.
   *
   * Value may contain any sequence of octets
   */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface UploadTestFileQueryParamProperties {
  /**
   * File type
   *
   * Possible values: JMX_FILE, USER_PROPERTIES, ADDITIONAL_ARTIFACTS
   */
  fileType?: string;
}

export interface UploadTestFileQueryParam {
  queryParameters?: UploadTestFileQueryParamProperties;
}

export interface UploadTestFileMediaTypesParam {
  contentType: "application/octet-stream";
}

export type UploadTestFileParameters = UploadTestFileQueryParam &
  UploadTestFileMediaTypesParam &
  UploadTestFileBodyParam &
  RequestParameters;
export type DeleteTestFileParameters = RequestParameters;
export type DeleteTestParameters = RequestParameters;
