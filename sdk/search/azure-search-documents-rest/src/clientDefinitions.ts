// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  GetServiceStatisticsParameters,
  DataSourcesOperationsCreateOrUpdateParameters,
  DataSourcesOperationsDeleteParameters,
  DataSourcesOperationsGetParameters,
  DataSourcesOperationsListParameters,
  DataSourcesOperationsCreateParameters,
  IndexersOperationsResetParameters,
  IndexersOperationsResetDocsParameters,
  IndexersOperationsRunParameters,
  IndexersOperationsCreateOrUpdateParameters,
  IndexersOperationsDeleteParameters,
  IndexersOperationsGetParameters,
  IndexersOperationsListParameters,
  IndexersOperationsCreateParameters,
  IndexersOperationsGetStatusParameters,
  SkillsetsOperationsCreateOrUpdateParameters,
  SkillsetsOperationsDeleteParameters,
  SkillsetsOperationsGetParameters,
  SkillsetsOperationsListParameters,
  SkillsetsOperationsCreateParameters,
  SkillsetsOperationsResetSkillsParameters,
  SynonymMapsOperationsCreateOrUpdateParameters,
  SynonymMapsOperationsDeleteParameters,
  SynonymMapsOperationsGetParameters,
  SynonymMapsOperationsListParameters,
  SynonymMapsOperationsCreateParameters,
  IndexesOperationsCreateParameters,
  IndexesOperationsListParameters,
  IndexesOperationsCreateOrUpdateParameters,
  IndexesOperationsDeleteParameters,
  IndexesOperationsGetParameters,
  IndexesOperationsGetStatisticsParameters,
  IndexesOperationsAnalyzeParameters,
  AliasesOperationsCreateParameters,
  AliasesOperationsListParameters,
  AliasesOperationsCreateOrUpdateParameters,
  AliasesOperationsDeleteParameters,
  AliasesOperationsGetParameters,
  DocumentsOperationsCountParameters,
  DocumentsOperationsSearchGetParameters,
  DocumentsOperationsSearchPostParameters,
  DocumentsOperationsGetParameters,
  DocumentsOperationsSuggestGetParameters,
  DocumentsOperationsSuggestPostParameters,
  DocumentsOperationsIndexParameters,
  DocumentsOperationsAutocompleteGetParameters,
  DocumentsOperationsAutocompletePostParameters,
} from "./parameters.js";
import type {
  GetServiceStatistics200Response,
  GetServiceStatisticsDefaultResponse,
  DataSourcesOperationsCreateOrUpdate200Response,
  DataSourcesOperationsCreateOrUpdate201Response,
  DataSourcesOperationsCreateOrUpdateDefaultResponse,
  DataSourcesOperationsDelete204Response,
  DataSourcesOperationsDelete404Response,
  DataSourcesOperationsDeleteDefaultResponse,
  DataSourcesOperationsGet200Response,
  DataSourcesOperationsGetDefaultResponse,
  DataSourcesOperationsList200Response,
  DataSourcesOperationsListDefaultResponse,
  DataSourcesOperationsCreate201Response,
  DataSourcesOperationsCreateDefaultResponse,
  IndexersOperationsReset204Response,
  IndexersOperationsResetDefaultResponse,
  IndexersOperationsResetDocs204Response,
  IndexersOperationsResetDocsDefaultResponse,
  IndexersOperationsRun202Response,
  IndexersOperationsRunDefaultResponse,
  IndexersOperationsCreateOrUpdate200Response,
  IndexersOperationsCreateOrUpdate201Response,
  IndexersOperationsCreateOrUpdateDefaultResponse,
  IndexersOperationsDelete204Response,
  IndexersOperationsDelete404Response,
  IndexersOperationsDeleteDefaultResponse,
  IndexersOperationsGet200Response,
  IndexersOperationsGetDefaultResponse,
  IndexersOperationsList200Response,
  IndexersOperationsListDefaultResponse,
  IndexersOperationsCreate201Response,
  IndexersOperationsCreateDefaultResponse,
  IndexersOperationsGetStatus200Response,
  IndexersOperationsGetStatusDefaultResponse,
  SkillsetsOperationsCreateOrUpdate200Response,
  SkillsetsOperationsCreateOrUpdate201Response,
  SkillsetsOperationsCreateOrUpdateDefaultResponse,
  SkillsetsOperationsDelete204Response,
  SkillsetsOperationsDelete404Response,
  SkillsetsOperationsDeleteDefaultResponse,
  SkillsetsOperationsGet200Response,
  SkillsetsOperationsGetDefaultResponse,
  SkillsetsOperationsList200Response,
  SkillsetsOperationsListDefaultResponse,
  SkillsetsOperationsCreate201Response,
  SkillsetsOperationsCreateDefaultResponse,
  SkillsetsOperationsResetSkills204Response,
  SkillsetsOperationsResetSkillsDefaultResponse,
  SynonymMapsOperationsCreateOrUpdate200Response,
  SynonymMapsOperationsCreateOrUpdate201Response,
  SynonymMapsOperationsCreateOrUpdateDefaultResponse,
  SynonymMapsOperationsDelete204Response,
  SynonymMapsOperationsDelete404Response,
  SynonymMapsOperationsDeleteDefaultResponse,
  SynonymMapsOperationsGet200Response,
  SynonymMapsOperationsGetDefaultResponse,
  SynonymMapsOperationsList200Response,
  SynonymMapsOperationsListDefaultResponse,
  SynonymMapsOperationsCreate201Response,
  SynonymMapsOperationsCreateDefaultResponse,
  IndexesOperationsCreate201Response,
  IndexesOperationsCreateDefaultResponse,
  IndexesOperationsList200Response,
  IndexesOperationsListDefaultResponse,
  IndexesOperationsCreateOrUpdate200Response,
  IndexesOperationsCreateOrUpdate201Response,
  IndexesOperationsCreateOrUpdateDefaultResponse,
  IndexesOperationsDelete204Response,
  IndexesOperationsDelete404Response,
  IndexesOperationsDeleteDefaultResponse,
  IndexesOperationsGet200Response,
  IndexesOperationsGetDefaultResponse,
  IndexesOperationsGetStatistics200Response,
  IndexesOperationsGetStatisticsDefaultResponse,
  IndexesOperationsAnalyze200Response,
  IndexesOperationsAnalyzeDefaultResponse,
  AliasesOperationsCreate201Response,
  AliasesOperationsCreateDefaultResponse,
  AliasesOperationsList200Response,
  AliasesOperationsListDefaultResponse,
  AliasesOperationsCreateOrUpdate200Response,
  AliasesOperationsCreateOrUpdate201Response,
  AliasesOperationsCreateOrUpdateDefaultResponse,
  AliasesOperationsDelete204Response,
  AliasesOperationsDelete404Response,
  AliasesOperationsDeleteDefaultResponse,
  AliasesOperationsGet200Response,
  AliasesOperationsGetDefaultResponse,
  DocumentsOperationsCount200Response,
  DocumentsOperationsCountDefaultResponse,
  DocumentsOperationsSearchGet200Response,
  DocumentsOperationsSearchGetDefaultResponse,
  DocumentsOperationsSearchPost200Response,
  DocumentsOperationsSearchPostDefaultResponse,
  DocumentsOperationsGet200Response,
  DocumentsOperationsGetDefaultResponse,
  DocumentsOperationsSuggestGet200Response,
  DocumentsOperationsSuggestGetDefaultResponse,
  DocumentsOperationsSuggestPost200Response,
  DocumentsOperationsSuggestPostDefaultResponse,
  DocumentsOperationsIndex200Response,
  DocumentsOperationsIndex207Response,
  DocumentsOperationsIndexDefaultResponse,
  DocumentsOperationsAutocompleteGet200Response,
  DocumentsOperationsAutocompleteGetDefaultResponse,
  DocumentsOperationsAutocompletePost200Response,
  DocumentsOperationsAutocompletePostDefaultResponse,
} from "./responses.js";
import type { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetServiceStatistics {
  /** Gets service level statistics for a search service. */
  get(
    options?: GetServiceStatisticsParameters,
  ): StreamableMethod<GetServiceStatistics200Response | GetServiceStatisticsDefaultResponse>;
}

export interface DataSourcesOperationsCreateOrUpdate {
  /** Creates a new datasource or updates a datasource if it already exists. */
  put(
    options: DataSourcesOperationsCreateOrUpdateParameters,
  ): StreamableMethod<
    | DataSourcesOperationsCreateOrUpdate200Response
    | DataSourcesOperationsCreateOrUpdate201Response
    | DataSourcesOperationsCreateOrUpdateDefaultResponse
  >;
  /** Deletes a datasource. */
  delete(
    options?: DataSourcesOperationsDeleteParameters,
  ): StreamableMethod<
    | DataSourcesOperationsDelete204Response
    | DataSourcesOperationsDelete404Response
    | DataSourcesOperationsDeleteDefaultResponse
  >;
  /** Retrieves a datasource definition. */
  get(
    options?: DataSourcesOperationsGetParameters,
  ): StreamableMethod<
    DataSourcesOperationsGet200Response | DataSourcesOperationsGetDefaultResponse
  >;
}

export interface DataSourcesOperationsList {
  /** Lists all datasources available for a search service. */
  get(
    options?: DataSourcesOperationsListParameters,
  ): StreamableMethod<
    DataSourcesOperationsList200Response | DataSourcesOperationsListDefaultResponse
  >;
  /** Creates a new datasource. */
  post(
    options: DataSourcesOperationsCreateParameters,
  ): StreamableMethod<
    DataSourcesOperationsCreate201Response | DataSourcesOperationsCreateDefaultResponse
  >;
}

export interface IndexersOperationsReset {
  /** Resets the change tracking state associated with an indexer. */
  post(
    options?: IndexersOperationsResetParameters,
  ): StreamableMethod<IndexersOperationsReset204Response | IndexersOperationsResetDefaultResponse>;
}

export interface IndexersOperationsResetDocs {
  /**
   * Resets specific documents in the datasource to be selectively re-ingested by
   * the indexer.
   */
  post(
    options?: IndexersOperationsResetDocsParameters,
  ): StreamableMethod<
    IndexersOperationsResetDocs204Response | IndexersOperationsResetDocsDefaultResponse
  >;
}

export interface IndexersOperationsRun {
  /** Runs an indexer on-demand. */
  post(
    options?: IndexersOperationsRunParameters,
  ): StreamableMethod<IndexersOperationsRun202Response | IndexersOperationsRunDefaultResponse>;
}

export interface IndexersOperationsCreateOrUpdate {
  /** Creates a new indexer or updates an indexer if it already exists. */
  put(
    options: IndexersOperationsCreateOrUpdateParameters,
  ): StreamableMethod<
    | IndexersOperationsCreateOrUpdate200Response
    | IndexersOperationsCreateOrUpdate201Response
    | IndexersOperationsCreateOrUpdateDefaultResponse
  >;
  /** Deletes an indexer. */
  delete(
    options?: IndexersOperationsDeleteParameters,
  ): StreamableMethod<
    | IndexersOperationsDelete204Response
    | IndexersOperationsDelete404Response
    | IndexersOperationsDeleteDefaultResponse
  >;
  /** Retrieves an indexer definition. */
  get(
    options?: IndexersOperationsGetParameters,
  ): StreamableMethod<IndexersOperationsGet200Response | IndexersOperationsGetDefaultResponse>;
}

export interface IndexersOperationsList {
  /** Lists all indexers available for a search service. */
  get(
    options?: IndexersOperationsListParameters,
  ): StreamableMethod<IndexersOperationsList200Response | IndexersOperationsListDefaultResponse>;
  /** Creates a new indexer. */
  post(
    options: IndexersOperationsCreateParameters,
  ): StreamableMethod<
    IndexersOperationsCreate201Response | IndexersOperationsCreateDefaultResponse
  >;
}

export interface IndexersOperationsGetStatus {
  /** Returns the current status and execution history of an indexer. */
  get(
    options?: IndexersOperationsGetStatusParameters,
  ): StreamableMethod<
    IndexersOperationsGetStatus200Response | IndexersOperationsGetStatusDefaultResponse
  >;
}

export interface SkillsetsOperationsCreateOrUpdate {
  /**
   * Creates a new skillset in a search service or updates the skillset if it
   * already exists.
   */
  put(
    options: SkillsetsOperationsCreateOrUpdateParameters,
  ): StreamableMethod<
    | SkillsetsOperationsCreateOrUpdate200Response
    | SkillsetsOperationsCreateOrUpdate201Response
    | SkillsetsOperationsCreateOrUpdateDefaultResponse
  >;
  /** Deletes a skillset in a search service. */
  delete(
    options?: SkillsetsOperationsDeleteParameters,
  ): StreamableMethod<
    | SkillsetsOperationsDelete204Response
    | SkillsetsOperationsDelete404Response
    | SkillsetsOperationsDeleteDefaultResponse
  >;
  /** Retrieves a skillset in a search service. */
  get(
    options?: SkillsetsOperationsGetParameters,
  ): StreamableMethod<SkillsetsOperationsGet200Response | SkillsetsOperationsGetDefaultResponse>;
}

export interface SkillsetsOperationsList {
  /** List all skillsets in a search service. */
  get(
    options?: SkillsetsOperationsListParameters,
  ): StreamableMethod<SkillsetsOperationsList200Response | SkillsetsOperationsListDefaultResponse>;
  /** Creates a new skillset in a search service. */
  post(
    options: SkillsetsOperationsCreateParameters,
  ): StreamableMethod<
    SkillsetsOperationsCreate201Response | SkillsetsOperationsCreateDefaultResponse
  >;
}

export interface SkillsetsOperationsResetSkills {
  /** Reset an existing skillset in a search service. */
  post(
    options: SkillsetsOperationsResetSkillsParameters,
  ): StreamableMethod<
    SkillsetsOperationsResetSkills204Response | SkillsetsOperationsResetSkillsDefaultResponse
  >;
}

export interface SynonymMapsOperationsCreateOrUpdate {
  /** Creates a new synonym map or updates a synonym map if it already exists. */
  put(
    options: SynonymMapsOperationsCreateOrUpdateParameters,
  ): StreamableMethod<
    | SynonymMapsOperationsCreateOrUpdate200Response
    | SynonymMapsOperationsCreateOrUpdate201Response
    | SynonymMapsOperationsCreateOrUpdateDefaultResponse
  >;
  /** Deletes a synonym map. */
  delete(
    options?: SynonymMapsOperationsDeleteParameters,
  ): StreamableMethod<
    | SynonymMapsOperationsDelete204Response
    | SynonymMapsOperationsDelete404Response
    | SynonymMapsOperationsDeleteDefaultResponse
  >;
  /** Retrieves a synonym map definition. */
  get(
    options?: SynonymMapsOperationsGetParameters,
  ): StreamableMethod<
    SynonymMapsOperationsGet200Response | SynonymMapsOperationsGetDefaultResponse
  >;
}

export interface SynonymMapsOperationsList {
  /** Lists all synonym maps available for a search service. */
  get(
    options?: SynonymMapsOperationsListParameters,
  ): StreamableMethod<
    SynonymMapsOperationsList200Response | SynonymMapsOperationsListDefaultResponse
  >;
  /** Creates a new synonym map. */
  post(
    options: SynonymMapsOperationsCreateParameters,
  ): StreamableMethod<
    SynonymMapsOperationsCreate201Response | SynonymMapsOperationsCreateDefaultResponse
  >;
}

export interface IndexesOperationsCreate {
  /** Creates a new search index. */
  post(
    options: IndexesOperationsCreateParameters,
  ): StreamableMethod<IndexesOperationsCreate201Response | IndexesOperationsCreateDefaultResponse>;
  /** Lists all indexes available for a search service. */
  get(
    options?: IndexesOperationsListParameters,
  ): StreamableMethod<IndexesOperationsList200Response | IndexesOperationsListDefaultResponse>;
}

export interface IndexesOperationsCreateOrUpdate {
  /** Creates a new search index or updates an index if it already exists. */
  put(
    options: IndexesOperationsCreateOrUpdateParameters,
  ): StreamableMethod<
    | IndexesOperationsCreateOrUpdate200Response
    | IndexesOperationsCreateOrUpdate201Response
    | IndexesOperationsCreateOrUpdateDefaultResponse
  >;
  /**
   * Deletes a search index and all the documents it contains. This operation is
   * permanent, with no recovery option. Make sure you have a master copy of your
   * index definition, data ingestion code, and a backup of the primary data source
   * in case you need to re-build the index.
   */
  delete(
    options?: IndexesOperationsDeleteParameters,
  ): StreamableMethod<
    | IndexesOperationsDelete204Response
    | IndexesOperationsDelete404Response
    | IndexesOperationsDeleteDefaultResponse
  >;
  /** Retrieves an index definition. */
  get(
    options?: IndexesOperationsGetParameters,
  ): StreamableMethod<IndexesOperationsGet200Response | IndexesOperationsGetDefaultResponse>;
}

export interface IndexesOperationsGetStatistics {
  /**
   * Returns statistics for the given index, including a document count and storage
   * usage.
   */
  get(
    options?: IndexesOperationsGetStatisticsParameters,
  ): StreamableMethod<
    IndexesOperationsGetStatistics200Response | IndexesOperationsGetStatisticsDefaultResponse
  >;
}

export interface IndexesOperationsAnalyze {
  /** Shows how an analyzer breaks text into tokens. */
  post(
    options: IndexesOperationsAnalyzeParameters,
  ): StreamableMethod<
    IndexesOperationsAnalyze200Response | IndexesOperationsAnalyzeDefaultResponse
  >;
}

export interface AliasesOperationsCreate {
  /** Creates a new search alias. */
  post(
    options: AliasesOperationsCreateParameters,
  ): StreamableMethod<AliasesOperationsCreate201Response | AliasesOperationsCreateDefaultResponse>;
  /** Lists all aliases available for a search service. */
  get(
    options?: AliasesOperationsListParameters,
  ): StreamableMethod<AliasesOperationsList200Response | AliasesOperationsListDefaultResponse>;
}

export interface AliasesOperationsCreateOrUpdate {
  /** Creates a new search alias or updates an alias if it already exists. */
  put(
    options: AliasesOperationsCreateOrUpdateParameters,
  ): StreamableMethod<
    | AliasesOperationsCreateOrUpdate200Response
    | AliasesOperationsCreateOrUpdate201Response
    | AliasesOperationsCreateOrUpdateDefaultResponse
  >;
  /**
   * Deletes a search alias and its associated mapping to an index. This operation
   * is permanent, with no recovery option. The mapped index is untouched by this
   * operation.
   */
  delete(
    options?: AliasesOperationsDeleteParameters,
  ): StreamableMethod<
    | AliasesOperationsDelete204Response
    | AliasesOperationsDelete404Response
    | AliasesOperationsDeleteDefaultResponse
  >;
  /** Retrieves an alias definition. */
  get(
    options?: AliasesOperationsGetParameters,
  ): StreamableMethod<AliasesOperationsGet200Response | AliasesOperationsGetDefaultResponse>;
}

export interface DocumentsOperationsCount {
  /** Queries the number of documents in the index. */
  get(
    options?: DocumentsOperationsCountParameters,
  ): StreamableMethod<
    DocumentsOperationsCount200Response | DocumentsOperationsCountDefaultResponse
  >;
}

export interface DocumentsOperationsSearchGet {
  /** Searches for documents in the index. */
  get(
    options?: DocumentsOperationsSearchGetParameters,
  ): StreamableMethod<
    DocumentsOperationsSearchGet200Response | DocumentsOperationsSearchGetDefaultResponse
  >;
}

export interface DocumentsOperationsSearchPost {
  /** Searches for documents in the index. */
  post(
    options: DocumentsOperationsSearchPostParameters,
  ): StreamableMethod<
    DocumentsOperationsSearchPost200Response | DocumentsOperationsSearchPostDefaultResponse
  >;
}

export interface DocumentsOperationsGet {
  /** Retrieves a document from the index. */
  get(
    options?: DocumentsOperationsGetParameters,
  ): StreamableMethod<DocumentsOperationsGet200Response | DocumentsOperationsGetDefaultResponse>;
}

export interface DocumentsOperationsSuggestGet {
  /** Suggests documents in the index that match the given partial query text. */
  get(
    options: DocumentsOperationsSuggestGetParameters,
  ): StreamableMethod<
    DocumentsOperationsSuggestGet200Response | DocumentsOperationsSuggestGetDefaultResponse
  >;
}

export interface DocumentsOperationsSuggestPost {
  /** Suggests documents in the index that match the given partial query text. */
  post(
    options: DocumentsOperationsSuggestPostParameters,
  ): StreamableMethod<
    DocumentsOperationsSuggestPost200Response | DocumentsOperationsSuggestPostDefaultResponse
  >;
}

export interface DocumentsOperationsIndex {
  /** Sends a batch of document write actions to the index. */
  post(
    options: DocumentsOperationsIndexParameters,
  ): StreamableMethod<
    | DocumentsOperationsIndex200Response
    | DocumentsOperationsIndex207Response
    | DocumentsOperationsIndexDefaultResponse
  >;
}

export interface DocumentsOperationsAutocompleteGet {
  /**
   * Autocompletes incomplete query terms based on input text and matching terms in
   * the index.
   */
  get(
    options: DocumentsOperationsAutocompleteGetParameters,
  ): StreamableMethod<
    | DocumentsOperationsAutocompleteGet200Response
    | DocumentsOperationsAutocompleteGetDefaultResponse
  >;
}

export interface DocumentsOperationsAutocompletePost {
  /**
   * Autocompletes incomplete query terms based on input text and matching terms in
   * the index.
   */
  post(
    options: DocumentsOperationsAutocompletePostParameters,
  ): StreamableMethod<
    | DocumentsOperationsAutocompletePost200Response
    | DocumentsOperationsAutocompletePostDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/servicestats' has methods for the following verbs: get */
  (path: "/servicestats"): GetServiceStatistics;
  /** Resource for '/datasources('\{dataSourceName\}')' has methods for the following verbs: put, delete, get */
  (
    path: "/datasources('{dataSourceName}')",
    dataSourceName: string,
  ): DataSourcesOperationsCreateOrUpdate;
  /** Resource for '/datasources' has methods for the following verbs: get, post */
  (path: "/datasources"): DataSourcesOperationsList;
  /** Resource for '/indexers('\{indexerName\}')/search.reset' has methods for the following verbs: post */
  (path: "/indexers('{indexerName}')/search.reset", indexerName: string): IndexersOperationsReset;
  /** Resource for '/indexers('\{indexerName\}')/search.resetdocs' has methods for the following verbs: post */
  (
    path: "/indexers('{indexerName}')/search.resetdocs",
    indexerName: string,
  ): IndexersOperationsResetDocs;
  /** Resource for '/indexers('\{indexerName\}')/search.run' has methods for the following verbs: post */
  (path: "/indexers('{indexerName}')/search.run", indexerName: string): IndexersOperationsRun;
  /** Resource for '/indexers('\{indexerName\}')' has methods for the following verbs: put, delete, get */
  (path: "/indexers('{indexerName}')", indexerName: string): IndexersOperationsCreateOrUpdate;
  /** Resource for '/indexers' has methods for the following verbs: get, post */
  (path: "/indexers"): IndexersOperationsList;
  /** Resource for '/indexers('\{indexerName\}')/search.status' has methods for the following verbs: get */
  (
    path: "/indexers('{indexerName}')/search.status",
    indexerName: string,
  ): IndexersOperationsGetStatus;
  /** Resource for '/skillsets('\{skillsetName\}')' has methods for the following verbs: put, delete, get */
  (path: "/skillsets('{skillsetName}')", skillsetName: string): SkillsetsOperationsCreateOrUpdate;
  /** Resource for '/skillsets' has methods for the following verbs: get, post */
  (path: "/skillsets"): SkillsetsOperationsList;
  /** Resource for '/skillsets('\{skillsetName\}')/search.resetskills' has methods for the following verbs: post */
  (
    path: "/skillsets('{skillsetName}')/search.resetskills",
    skillsetName: string,
  ): SkillsetsOperationsResetSkills;
  /** Resource for '/synonymmaps('\{synonymMapName\}')' has methods for the following verbs: put, delete, get */
  (
    path: "/synonymmaps('{synonymMapName}')",
    synonymMapName: string,
  ): SynonymMapsOperationsCreateOrUpdate;
  /** Resource for '/synonymmaps' has methods for the following verbs: get, post */
  (path: "/synonymmaps"): SynonymMapsOperationsList;
  /** Resource for '/indexes' has methods for the following verbs: post, get */
  (path: "/indexes"): IndexesOperationsCreate;
  /** Resource for '/indexes('\{indexName\}')' has methods for the following verbs: put, delete, get */
  (path: "/indexes('{indexName}')", indexName: string): IndexesOperationsCreateOrUpdate;
  /** Resource for '/indexes('\{indexName\}')/search.stats' has methods for the following verbs: get */
  (path: "/indexes('{indexName}')/search.stats", indexName: string): IndexesOperationsGetStatistics;
  /** Resource for '/indexes('\{indexName\}')/search.analyze' has methods for the following verbs: post */
  (path: "/indexes('{indexName}')/search.analyze", indexName: string): IndexesOperationsAnalyze;
  /** Resource for '/aliases' has methods for the following verbs: post, get */
  (path: "/aliases"): AliasesOperationsCreate;
  /** Resource for '/aliases('\{aliasName\}')' has methods for the following verbs: put, delete, get */
  (path: "/aliases('{aliasName}')", aliasName: string): AliasesOperationsCreateOrUpdate;
  /** Resource for '/indexes('\{indexName\}')/docs/$count' has methods for the following verbs: get */
  (path: "/indexes('{indexName}')/docs/$count", indexName: string): DocumentsOperationsCount;
  /** Resource for '/indexes('\{indexName\}')/docs' has methods for the following verbs: get */
  (path: "/indexes('{indexName}')/docs", indexName: string): DocumentsOperationsSearchGet;
  /** Resource for '/indexes('\{indexName\}')/docs/search.post.search' has methods for the following verbs: post */
  (
    path: "/indexes('{indexName}')/docs/search.post.search",
    indexName: string,
  ): DocumentsOperationsSearchPost;
  /** Resource for '/indexes('\{indexName\}')/docs('\{key\}')' has methods for the following verbs: get */
  (
    path: "/indexes('{indexName}')/docs('{key}')",
    key: string,
    indexName: string,
  ): DocumentsOperationsGet;
  /** Resource for '/indexes('\{indexName\}')/docs/search.suggest' has methods for the following verbs: get */
  (
    path: "/indexes('{indexName}')/docs/search.suggest",
    indexName: string,
  ): DocumentsOperationsSuggestGet;
  /** Resource for '/indexes('\{indexName\}')/docs/search.post.suggest' has methods for the following verbs: post */
  (
    path: "/indexes('{indexName}')/docs/search.post.suggest",
    indexName: string,
  ): DocumentsOperationsSuggestPost;
  /** Resource for '/indexes('\{indexName\}')/docs/search.index' has methods for the following verbs: post */
  (path: "/indexes('{indexName}')/docs/search.index", indexName: string): DocumentsOperationsIndex;
  /** Resource for '/indexes('\{indexName\}')/docs/search.autocomplete' has methods for the following verbs: get */
  (
    path: "/indexes('{indexName}')/docs/search.autocomplete",
    indexName: string,
  ): DocumentsOperationsAutocompleteGet;
  /** Resource for '/indexes('\{indexName\}')/docs/search.post.autocomplete' has methods for the following verbs: post */
  (
    path: "/indexes('{indexName}')/docs/search.post.autocomplete",
    indexName: string,
  ): DocumentsOperationsAutocompletePost;
}

export type SearchClient = Client & {
  path: Routes;
};
