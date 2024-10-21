// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HttpResponse } from "@azure-rest/core-client";
import {
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
  SearchDocumentsResultOutput,
  SuggestDocumentsResultOutput,
  IndexDocumentsResultOutput,
  AutocompleteResultOutput,
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
export interface DataSourcesOperationsCreateOrUpdate200Response
  extends HttpResponse {
  status: "200";
  body: SearchIndexerDataSourceOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface DataSourcesOperationsCreateOrUpdate201Response
  extends HttpResponse {
  status: "201";
  body: SearchIndexerDataSourceOutput;
}

export interface DataSourcesOperationsCreateOrUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DataSourcesOperationsDelete204Response extends HttpResponse {
  status: "204";
}

export interface DataSourcesOperationsDeleteDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface DataSourcesOperationsGet200Response extends HttpResponse {
  status: "200";
  body: SearchIndexerDataSourceOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface DataSourcesOperationsGet201Response extends HttpResponse {
  status: "201";
  body: SearchIndexerDataSourceOutput;
}

export interface DataSourcesOperationsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface DataSourcesOperationsList200Response extends HttpResponse {
  status: "200";
  body: ListDataSourcesResultOutput;
}

export interface DataSourcesOperationsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface DataSourcesOperationsCreate200Response extends HttpResponse {
  status: "200";
  body: SearchIndexerDataSourceOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface DataSourcesOperationsCreate201Response extends HttpResponse {
  status: "201";
  body: SearchIndexerDataSourceOutput;
}

export interface DataSourcesOperationsCreateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface IndexersOperationsReset204Response extends HttpResponse {
  status: "204";
}

export interface IndexersOperationsResetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface IndexersOperationsRun204Response extends HttpResponse {
  status: "204";
}

export interface IndexersOperationsRunDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface IndexersOperationsCreateOrUpdate200Response
  extends HttpResponse {
  status: "200";
  body: SearchIndexerOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface IndexersOperationsCreateOrUpdate201Response
  extends HttpResponse {
  status: "201";
  body: SearchIndexerOutput;
}

export interface IndexersOperationsCreateOrUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface IndexersOperationsDelete204Response extends HttpResponse {
  status: "204";
}

export interface IndexersOperationsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface IndexersOperationsGet200Response extends HttpResponse {
  status: "200";
  body: SearchIndexerOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface IndexersOperationsGet201Response extends HttpResponse {
  status: "201";
  body: SearchIndexerOutput;
}

export interface IndexersOperationsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface IndexersOperationsList200Response extends HttpResponse {
  status: "200";
  body: ListIndexersResultOutput;
}

export interface IndexersOperationsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface IndexersOperationsCreate200Response extends HttpResponse {
  status: "200";
  body: SearchIndexerOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface IndexersOperationsCreate201Response extends HttpResponse {
  status: "201";
  body: SearchIndexerOutput;
}

export interface IndexersOperationsCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface IndexersOperationsGetStatus200Response extends HttpResponse {
  status: "200";
  body: SearchIndexerStatusOutput;
}

export interface IndexersOperationsGetStatusDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface SkillsetsOperationsCreateOrUpdate200Response
  extends HttpResponse {
  status: "200";
  body: SearchIndexerSkillsetOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface SkillsetsOperationsCreateOrUpdate201Response
  extends HttpResponse {
  status: "201";
  body: SearchIndexerSkillsetOutput;
}

export interface SkillsetsOperationsCreateOrUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface SkillsetsOperationsDelete204Response extends HttpResponse {
  status: "204";
}

export interface SkillsetsOperationsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface SkillsetsOperationsGet200Response extends HttpResponse {
  status: "200";
  body: SearchIndexerSkillsetOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface SkillsetsOperationsGet201Response extends HttpResponse {
  status: "201";
  body: SearchIndexerSkillsetOutput;
}

export interface SkillsetsOperationsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface SkillsetsOperationsList200Response extends HttpResponse {
  status: "200";
  body: ListSkillsetsResultOutput;
}

export interface SkillsetsOperationsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface SkillsetsOperationsCreate200Response extends HttpResponse {
  status: "200";
  body: SearchIndexerSkillsetOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface SkillsetsOperationsCreate201Response extends HttpResponse {
  status: "201";
  body: SearchIndexerSkillsetOutput;
}

export interface SkillsetsOperationsCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface SynonymMapsOperationsCreateOrUpdate200Response
  extends HttpResponse {
  status: "200";
  body: SynonymMapOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface SynonymMapsOperationsCreateOrUpdate201Response
  extends HttpResponse {
  status: "201";
  body: SynonymMapOutput;
}

export interface SynonymMapsOperationsCreateOrUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface SynonymMapsOperationsDelete204Response extends HttpResponse {
  status: "204";
}

export interface SynonymMapsOperationsDeleteDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface SynonymMapsOperationsGet200Response extends HttpResponse {
  status: "200";
  body: SynonymMapOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface SynonymMapsOperationsGet201Response extends HttpResponse {
  status: "201";
  body: SynonymMapOutput;
}

export interface SynonymMapsOperationsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface SynonymMapsOperationsList200Response extends HttpResponse {
  status: "200";
  body: ListSynonymMapsResultOutput;
}

export interface SynonymMapsOperationsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface SynonymMapsOperationsCreate200Response extends HttpResponse {
  status: "200";
  body: SynonymMapOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface SynonymMapsOperationsCreate201Response extends HttpResponse {
  status: "201";
  body: SynonymMapOutput;
}

export interface SynonymMapsOperationsCreateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface IndexesOperationsCreate200Response extends HttpResponse {
  status: "200";
  body: SearchIndexOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface IndexesOperationsCreate201Response extends HttpResponse {
  status: "201";
  body: SearchIndexOutput;
}

export interface IndexesOperationsCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface IndexesOperationsList200Response extends HttpResponse {
  status: "200";
  body: ListIndexesResultOutput;
}

export interface IndexesOperationsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface IndexesOperationsCreateOrUpdate200Response
  extends HttpResponse {
  status: "200";
  body: SearchIndexOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface IndexesOperationsCreateOrUpdate201Response
  extends HttpResponse {
  status: "201";
  body: SearchIndexOutput;
}

export interface IndexesOperationsCreateOrUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface IndexesOperationsDelete204Response extends HttpResponse {
  status: "204";
}

export interface IndexesOperationsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface IndexesOperationsGet200Response extends HttpResponse {
  status: "200";
  body: SearchIndexOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface IndexesOperationsGet201Response extends HttpResponse {
  status: "201";
  body: SearchIndexOutput;
}

export interface IndexesOperationsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface IndexesOperationsGetStatistics200Response
  extends HttpResponse {
  status: "200";
  body: GetIndexStatisticsResultOutput;
}

export interface IndexesOperationsGetStatisticsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface IndexesOperationsAnalyze200Response extends HttpResponse {
  status: "200";
  body: AnalyzeResultOutput;
}

export interface IndexesOperationsAnalyzeDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface DocumentsOperationsCount200Response extends HttpResponse {
  status: "200";
  body: number;
}

export interface DocumentsOperationsCountDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface DocumentsOperationsSearchGet200Response extends HttpResponse {
  status: "200";
  body: SearchDocumentsResultOutput;
}

export interface DocumentsOperationsSearchGetDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface DocumentsOperationsSearchPost200Response extends HttpResponse {
  status: "200";
  body: SearchDocumentsResultOutput;
}

export interface DocumentsOperationsSearchPostDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface DocumentsOperationsGet200Response extends HttpResponse {
  status: "200";
  body: Record<string, any>;
}

export interface DocumentsOperationsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface DocumentsOperationsSuggestGet200Response extends HttpResponse {
  status: "200";
  body: SuggestDocumentsResultOutput;
}

export interface DocumentsOperationsSuggestGetDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface DocumentsOperationsSuggestPost200Response
  extends HttpResponse {
  status: "200";
  body: SuggestDocumentsResultOutput;
}

export interface DocumentsOperationsSuggestPostDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface DocumentsOperationsIndex200Response extends HttpResponse {
  status: "200";
  body: IndexDocumentsResultOutput;
}

/** Successful */
export interface DocumentsOperationsIndex207Response extends HttpResponse {
  status: "207";
  body: IndexDocumentsResultOutput;
}

export interface DocumentsOperationsIndexDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface DocumentsOperationsAutocompleteGet200Response
  extends HttpResponse {
  status: "200";
  body: AutocompleteResultOutput;
}

export interface DocumentsOperationsAutocompleteGetDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface DocumentsOperationsAutocompletePost200Response
  extends HttpResponse {
  status: "200";
  body: AutocompleteResultOutput;
}

export interface DocumentsOperationsAutocompletePostDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
