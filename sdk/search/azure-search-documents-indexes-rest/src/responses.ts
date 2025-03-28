// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { HttpResponse } from "@azure-rest/core-client";
import type {
  SearchServiceStatisticsOutput,
  ErrorResponseOutput,
  SearchIndexerDataSourceOutput,
  ListDataSourcesResultOutput,
  SearchIndexerOutput,
  ListIndexersResultOutput,
  SearchIndexerStatusOutput,
  SearchIndexerSkillsetOutput,
  ListSkillsetsResultOutput,
  SynonymMapOutput,
  ListSynonymMapsResultOutput,
  SearchIndexOutput,
  ListIndexesResultOutput,
  GetIndexStatisticsResultOutput,
  AnalyzeResultOutput,
} from "./outputModels.js";

/** The request has succeeded. */
export interface GetServiceStatistics200Response extends HttpResponse {
  status: "200";
  body: SearchServiceStatisticsOutput;
}

export interface GetServiceStatisticsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface DataSourcesCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: SearchIndexerDataSourceOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface DataSourcesCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: SearchIndexerDataSourceOutput;
}

export interface DataSourcesCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DataSourcesDelete204Response extends HttpResponse {
  status: "204";
}

/** The server cannot find the requested resource. */
export interface DataSourcesDelete404Response extends HttpResponse {
  status: "404";
}

export interface DataSourcesDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface DataSourcesGet200Response extends HttpResponse {
  status: "200";
  body: SearchIndexerDataSourceOutput;
}

export interface DataSourcesGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface DataSourcesList200Response extends HttpResponse {
  status: "200";
  body: ListDataSourcesResultOutput;
}

export interface DataSourcesListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface DataSourcesCreate201Response extends HttpResponse {
  status: "201";
  body: SearchIndexerDataSourceOutput;
}

export interface DataSourcesCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface IndexersReset204Response extends HttpResponse {
  status: "204";
}

export interface IndexersResetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface IndexersRun202Response extends HttpResponse {
  status: "202";
}

export interface IndexersRunDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface IndexersCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: SearchIndexerOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface IndexersCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: SearchIndexerOutput;
}

export interface IndexersCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface IndexersDelete204Response extends HttpResponse {
  status: "204";
}

/** The server cannot find the requested resource. */
export interface IndexersDelete404Response extends HttpResponse {
  status: "404";
}

export interface IndexersDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface IndexersGet200Response extends HttpResponse {
  status: "200";
  body: SearchIndexerOutput;
}

export interface IndexersGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface IndexersList200Response extends HttpResponse {
  status: "200";
  body: ListIndexersResultOutput;
}

export interface IndexersListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface IndexersCreate201Response extends HttpResponse {
  status: "201";
  body: SearchIndexerOutput;
}

export interface IndexersCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface IndexersGetStatus200Response extends HttpResponse {
  status: "200";
  body: SearchIndexerStatusOutput;
}

export interface IndexersGetStatusDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface SkillsetsCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: SearchIndexerSkillsetOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface SkillsetsCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: SearchIndexerSkillsetOutput;
}

export interface SkillsetsCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface SkillsetsDelete204Response extends HttpResponse {
  status: "204";
}

/** The server cannot find the requested resource. */
export interface SkillsetsDelete404Response extends HttpResponse {
  status: "404";
}

export interface SkillsetsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface SkillsetsGet200Response extends HttpResponse {
  status: "200";
  body: SearchIndexerSkillsetOutput;
}

export interface SkillsetsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface SkillsetsList200Response extends HttpResponse {
  status: "200";
  body: ListSkillsetsResultOutput;
}

export interface SkillsetsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface SkillsetsCreate201Response extends HttpResponse {
  status: "201";
  body: SearchIndexerSkillsetOutput;
}

export interface SkillsetsCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface SynonymMapsCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: SynonymMapOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface SynonymMapsCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: SynonymMapOutput;
}

export interface SynonymMapsCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface SynonymMapsDelete204Response extends HttpResponse {
  status: "204";
}

/** The server cannot find the requested resource. */
export interface SynonymMapsDelete404Response extends HttpResponse {
  status: "404";
}

export interface SynonymMapsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface SynonymMapsGet200Response extends HttpResponse {
  status: "200";
  body: SynonymMapOutput;
}

export interface SynonymMapsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface SynonymMapsList200Response extends HttpResponse {
  status: "200";
  body: ListSynonymMapsResultOutput;
}

export interface SynonymMapsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface SynonymMapsCreate201Response extends HttpResponse {
  status: "201";
  body: SynonymMapOutput;
}

export interface SynonymMapsCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface IndexesCreate201Response extends HttpResponse {
  status: "201";
  body: SearchIndexOutput;
}

export interface IndexesCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface IndexesList200Response extends HttpResponse {
  status: "200";
  body: ListIndexesResultOutput;
}

export interface IndexesListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface IndexesCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: SearchIndexOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface IndexesCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: SearchIndexOutput;
}

export interface IndexesCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface IndexesDelete204Response extends HttpResponse {
  status: "204";
}

/** The server cannot find the requested resource. */
export interface IndexesDelete404Response extends HttpResponse {
  status: "404";
}

export interface IndexesDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface IndexesGet200Response extends HttpResponse {
  status: "200";
  body: SearchIndexOutput;
}

export interface IndexesGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface IndexesGetStatistics200Response extends HttpResponse {
  status: "200";
  body: GetIndexStatisticsResultOutput;
}

export interface IndexesGetStatisticsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface IndexesAnalyze200Response extends HttpResponse {
  status: "200";
  body: AnalyzeResultOutput;
}

export interface IndexesAnalyzeDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
