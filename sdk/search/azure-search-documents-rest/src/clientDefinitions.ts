// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  GetServiceStatisticsParameters,
  GetIndexStatsSummaryParameters,
  DataSourcesCreateOrUpdateParameters,
  DataSourcesDeleteParameters,
  DataSourcesGetParameters,
  DataSourcesListParameters,
  DataSourcesCreateParameters,
  IndexersResetParameters,
  IndexersResetDocsParameters,
  IndexersRunParameters,
  IndexersCreateOrUpdateParameters,
  IndexersDeleteParameters,
  IndexersGetParameters,
  IndexersListParameters,
  IndexersCreateParameters,
  IndexersGetStatusParameters,
  SkillsetsCreateOrUpdateParameters,
  SkillsetsDeleteParameters,
  SkillsetsGetParameters,
  SkillsetsListParameters,
  SkillsetsCreateParameters,
  SkillsetsResetSkillsParameters,
  SynonymMapsCreateOrUpdateParameters,
  SynonymMapsDeleteParameters,
  SynonymMapsGetParameters,
  SynonymMapsListParameters,
  SynonymMapsCreateParameters,
  IndexesCreateParameters,
  IndexesListParameters,
  IndexesCreateOrUpdateParameters,
  IndexesDeleteParameters,
  IndexesGetParameters,
  IndexesGetStatisticsParameters,
  IndexesAnalyzeParameters,
  AliasesCreateParameters,
  AliasesListParameters,
  AliasesCreateOrUpdateParameters,
  AliasesDeleteParameters,
  AliasesGetParameters,
  DocumentsCountParameters,
  DocumentsSearchGetParameters,
  DocumentsSearchPostParameters,
  DocumentsGetParameters,
  DocumentsSuggestGetParameters,
  DocumentsSuggestPostParameters,
  DocumentsIndexParameters,
  DocumentsAutocompleteGetParameters,
  DocumentsAutocompletePostParameters,
} from "./parameters.js";
import type {
  GetServiceStatistics200Response,
  GetServiceStatisticsDefaultResponse,
  GetIndexStatsSummary200Response,
  GetIndexStatsSummaryDefaultResponse,
  DataSourcesCreateOrUpdate200Response,
  DataSourcesCreateOrUpdate201Response,
  DataSourcesCreateOrUpdateDefaultResponse,
  DataSourcesDelete204Response,
  DataSourcesDelete404Response,
  DataSourcesDeleteDefaultResponse,
  DataSourcesGet200Response,
  DataSourcesGetDefaultResponse,
  DataSourcesList200Response,
  DataSourcesListDefaultResponse,
  DataSourcesCreate201Response,
  DataSourcesCreateDefaultResponse,
  IndexersReset204Response,
  IndexersResetDefaultResponse,
  IndexersResetDocs204Response,
  IndexersResetDocsDefaultResponse,
  IndexersRun202Response,
  IndexersRunDefaultResponse,
  IndexersCreateOrUpdate200Response,
  IndexersCreateOrUpdate201Response,
  IndexersCreateOrUpdateDefaultResponse,
  IndexersDelete204Response,
  IndexersDelete404Response,
  IndexersDeleteDefaultResponse,
  IndexersGet200Response,
  IndexersGetDefaultResponse,
  IndexersList200Response,
  IndexersListDefaultResponse,
  IndexersCreate201Response,
  IndexersCreateDefaultResponse,
  IndexersGetStatus200Response,
  IndexersGetStatusDefaultResponse,
  SkillsetsCreateOrUpdate200Response,
  SkillsetsCreateOrUpdate201Response,
  SkillsetsCreateOrUpdateDefaultResponse,
  SkillsetsDelete204Response,
  SkillsetsDelete404Response,
  SkillsetsDeleteDefaultResponse,
  SkillsetsGet200Response,
  SkillsetsGetDefaultResponse,
  SkillsetsList200Response,
  SkillsetsListDefaultResponse,
  SkillsetsCreate201Response,
  SkillsetsCreateDefaultResponse,
  SkillsetsResetSkills204Response,
  SkillsetsResetSkillsDefaultResponse,
  SynonymMapsCreateOrUpdate200Response,
  SynonymMapsCreateOrUpdate201Response,
  SynonymMapsCreateOrUpdateDefaultResponse,
  SynonymMapsDelete204Response,
  SynonymMapsDelete404Response,
  SynonymMapsDeleteDefaultResponse,
  SynonymMapsGet200Response,
  SynonymMapsGetDefaultResponse,
  SynonymMapsList200Response,
  SynonymMapsListDefaultResponse,
  SynonymMapsCreate201Response,
  SynonymMapsCreateDefaultResponse,
  IndexesCreate201Response,
  IndexesCreateDefaultResponse,
  IndexesList200Response,
  IndexesListDefaultResponse,
  IndexesCreateOrUpdate200Response,
  IndexesCreateOrUpdate201Response,
  IndexesCreateOrUpdateDefaultResponse,
  IndexesDelete204Response,
  IndexesDelete404Response,
  IndexesDeleteDefaultResponse,
  IndexesGet200Response,
  IndexesGetDefaultResponse,
  IndexesGetStatistics200Response,
  IndexesGetStatisticsDefaultResponse,
  IndexesAnalyze200Response,
  IndexesAnalyzeDefaultResponse,
  AliasesCreate201Response,
  AliasesCreateDefaultResponse,
  AliasesList200Response,
  AliasesListDefaultResponse,
  AliasesCreateOrUpdate200Response,
  AliasesCreateOrUpdate201Response,
  AliasesCreateOrUpdateDefaultResponse,
  AliasesDelete204Response,
  AliasesDelete404Response,
  AliasesDeleteDefaultResponse,
  AliasesGet200Response,
  AliasesGetDefaultResponse,
  DocumentsCount200Response,
  DocumentsCountDefaultResponse,
  DocumentsSearchGet200Response,
  DocumentsSearchGetDefaultResponse,
  DocumentsSearchPost200Response,
  DocumentsSearchPostDefaultResponse,
  DocumentsGet200Response,
  DocumentsGetDefaultResponse,
  DocumentsSuggestGet200Response,
  DocumentsSuggestGetDefaultResponse,
  DocumentsSuggestPost200Response,
  DocumentsSuggestPostDefaultResponse,
  DocumentsIndex200Response,
  DocumentsIndex207Response,
  DocumentsIndexDefaultResponse,
  DocumentsAutocompleteGet200Response,
  DocumentsAutocompleteGetDefaultResponse,
  DocumentsAutocompletePost200Response,
  DocumentsAutocompletePostDefaultResponse,
} from "./responses.js";
import type { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetServiceStatistics {
  /** Gets service level statistics for a search service. */
  get(
    options?: GetServiceStatisticsParameters,
  ): StreamableMethod<GetServiceStatistics200Response | GetServiceStatisticsDefaultResponse>;
}

export interface GetIndexStatsSummary {
  /** Retrieves a summary of statistics for all indexes in the search service. */
  get(
    options?: GetIndexStatsSummaryParameters,
  ): StreamableMethod<GetIndexStatsSummary200Response | GetIndexStatsSummaryDefaultResponse>;
}

export interface DataSourcesCreateOrUpdate {
  /** Creates a new datasource or updates a datasource if it already exists. */
  put(
    options: DataSourcesCreateOrUpdateParameters,
  ): StreamableMethod<
    | DataSourcesCreateOrUpdate200Response
    | DataSourcesCreateOrUpdate201Response
    | DataSourcesCreateOrUpdateDefaultResponse
  >;
  /** Deletes a datasource. */
  delete(
    options?: DataSourcesDeleteParameters,
  ): StreamableMethod<
    DataSourcesDelete204Response | DataSourcesDelete404Response | DataSourcesDeleteDefaultResponse
  >;
  /** Retrieves a datasource definition. */
  get(
    options?: DataSourcesGetParameters,
  ): StreamableMethod<DataSourcesGet200Response | DataSourcesGetDefaultResponse>;
}

export interface DataSourcesList {
  /** Lists all datasources available for a search service. */
  get(
    options?: DataSourcesListParameters,
  ): StreamableMethod<DataSourcesList200Response | DataSourcesListDefaultResponse>;
  /** Creates a new datasource. */
  post(
    options: DataSourcesCreateParameters,
  ): StreamableMethod<DataSourcesCreate201Response | DataSourcesCreateDefaultResponse>;
}

export interface IndexersReset {
  /** Resets the change tracking state associated with an indexer. */
  post(
    options?: IndexersResetParameters,
  ): StreamableMethod<IndexersReset204Response | IndexersResetDefaultResponse>;
}

export interface IndexersResetDocs {
  /**
   * Resets specific documents in the datasource to be selectively re-ingested by
   * the indexer.
   */
  post(
    options?: IndexersResetDocsParameters,
  ): StreamableMethod<IndexersResetDocs204Response | IndexersResetDocsDefaultResponse>;
}

export interface IndexersRun {
  /** Runs an indexer on-demand. */
  post(
    options?: IndexersRunParameters,
  ): StreamableMethod<IndexersRun202Response | IndexersRunDefaultResponse>;
}

export interface IndexersCreateOrUpdate {
  /** Creates a new indexer or updates an indexer if it already exists. */
  put(
    options: IndexersCreateOrUpdateParameters,
  ): StreamableMethod<
    | IndexersCreateOrUpdate200Response
    | IndexersCreateOrUpdate201Response
    | IndexersCreateOrUpdateDefaultResponse
  >;
  /** Deletes an indexer. */
  delete(
    options?: IndexersDeleteParameters,
  ): StreamableMethod<
    IndexersDelete204Response | IndexersDelete404Response | IndexersDeleteDefaultResponse
  >;
  /** Retrieves an indexer definition. */
  get(
    options?: IndexersGetParameters,
  ): StreamableMethod<IndexersGet200Response | IndexersGetDefaultResponse>;
}

export interface IndexersList {
  /** Lists all indexers available for a search service. */
  get(
    options?: IndexersListParameters,
  ): StreamableMethod<IndexersList200Response | IndexersListDefaultResponse>;
  /** Creates a new indexer. */
  post(
    options: IndexersCreateParameters,
  ): StreamableMethod<IndexersCreate201Response | IndexersCreateDefaultResponse>;
}

export interface IndexersGetStatus {
  /** Returns the current status and execution history of an indexer. */
  get(
    options?: IndexersGetStatusParameters,
  ): StreamableMethod<IndexersGetStatus200Response | IndexersGetStatusDefaultResponse>;
}

export interface SkillsetsCreateOrUpdate {
  /**
   * Creates a new skillset in a search service or updates the skillset if it
   * already exists.
   */
  put(
    options: SkillsetsCreateOrUpdateParameters,
  ): StreamableMethod<
    | SkillsetsCreateOrUpdate200Response
    | SkillsetsCreateOrUpdate201Response
    | SkillsetsCreateOrUpdateDefaultResponse
  >;
  /** Deletes a skillset in a search service. */
  delete(
    options?: SkillsetsDeleteParameters,
  ): StreamableMethod<
    SkillsetsDelete204Response | SkillsetsDelete404Response | SkillsetsDeleteDefaultResponse
  >;
  /** Retrieves a skillset in a search service. */
  get(
    options?: SkillsetsGetParameters,
  ): StreamableMethod<SkillsetsGet200Response | SkillsetsGetDefaultResponse>;
}

export interface SkillsetsList {
  /** List all skillsets in a search service. */
  get(
    options?: SkillsetsListParameters,
  ): StreamableMethod<SkillsetsList200Response | SkillsetsListDefaultResponse>;
  /** Creates a new skillset in a search service. */
  post(
    options: SkillsetsCreateParameters,
  ): StreamableMethod<SkillsetsCreate201Response | SkillsetsCreateDefaultResponse>;
}

export interface SkillsetsResetSkills {
  /** Reset an existing skillset in a search service. */
  post(
    options: SkillsetsResetSkillsParameters,
  ): StreamableMethod<SkillsetsResetSkills204Response | SkillsetsResetSkillsDefaultResponse>;
}

export interface SynonymMapsCreateOrUpdate {
  /** Creates a new synonym map or updates a synonym map if it already exists. */
  put(
    options: SynonymMapsCreateOrUpdateParameters,
  ): StreamableMethod<
    | SynonymMapsCreateOrUpdate200Response
    | SynonymMapsCreateOrUpdate201Response
    | SynonymMapsCreateOrUpdateDefaultResponse
  >;
  /** Deletes a synonym map. */
  delete(
    options?: SynonymMapsDeleteParameters,
  ): StreamableMethod<
    SynonymMapsDelete204Response | SynonymMapsDelete404Response | SynonymMapsDeleteDefaultResponse
  >;
  /** Retrieves a synonym map definition. */
  get(
    options?: SynonymMapsGetParameters,
  ): StreamableMethod<SynonymMapsGet200Response | SynonymMapsGetDefaultResponse>;
}

export interface SynonymMapsList {
  /** Lists all synonym maps available for a search service. */
  get(
    options?: SynonymMapsListParameters,
  ): StreamableMethod<SynonymMapsList200Response | SynonymMapsListDefaultResponse>;
  /** Creates a new synonym map. */
  post(
    options: SynonymMapsCreateParameters,
  ): StreamableMethod<SynonymMapsCreate201Response | SynonymMapsCreateDefaultResponse>;
}

export interface IndexesCreate {
  /** Creates a new search index. */
  post(
    options: IndexesCreateParameters,
  ): StreamableMethod<IndexesCreate201Response | IndexesCreateDefaultResponse>;
  /** Lists all indexes available for a search service. */
  get(
    options?: IndexesListParameters,
  ): StreamableMethod<IndexesList200Response | IndexesListDefaultResponse>;
}

export interface IndexesCreateOrUpdate {
  /** Creates a new search index or updates an index if it already exists. */
  put(
    options: IndexesCreateOrUpdateParameters,
  ): StreamableMethod<
    | IndexesCreateOrUpdate200Response
    | IndexesCreateOrUpdate201Response
    | IndexesCreateOrUpdateDefaultResponse
  >;
  /**
   * Deletes a search index and all the documents it contains. This operation is
   * permanent, with no recovery option. Make sure you have a master copy of your
   * index definition, data ingestion code, and a backup of the primary data source
   * in case you need to re-build the index.
   */
  delete(
    options?: IndexesDeleteParameters,
  ): StreamableMethod<
    IndexesDelete204Response | IndexesDelete404Response | IndexesDeleteDefaultResponse
  >;
  /** Retrieves an index definition. */
  get(
    options?: IndexesGetParameters,
  ): StreamableMethod<IndexesGet200Response | IndexesGetDefaultResponse>;
}

export interface IndexesGetStatistics {
  /**
   * Returns statistics for the given index, including a document count and storage
   * usage.
   */
  get(
    options?: IndexesGetStatisticsParameters,
  ): StreamableMethod<IndexesGetStatistics200Response | IndexesGetStatisticsDefaultResponse>;
}

export interface IndexesAnalyze {
  /** Shows how an analyzer breaks text into tokens. */
  post(
    options: IndexesAnalyzeParameters,
  ): StreamableMethod<IndexesAnalyze200Response | IndexesAnalyzeDefaultResponse>;
}

export interface AliasesCreate {
  /** Creates a new search alias. */
  post(
    options: AliasesCreateParameters,
  ): StreamableMethod<AliasesCreate201Response | AliasesCreateDefaultResponse>;
  /** Lists all aliases available for a search service. */
  get(
    options?: AliasesListParameters,
  ): StreamableMethod<AliasesList200Response | AliasesListDefaultResponse>;
}

export interface AliasesCreateOrUpdate {
  /** Creates a new search alias or updates an alias if it already exists. */
  put(
    options: AliasesCreateOrUpdateParameters,
  ): StreamableMethod<
    | AliasesCreateOrUpdate200Response
    | AliasesCreateOrUpdate201Response
    | AliasesCreateOrUpdateDefaultResponse
  >;
  /**
   * Deletes a search alias and its associated mapping to an index. This operation
   * is permanent, with no recovery option. The mapped index is untouched by this
   * operation.
   */
  delete(
    options?: AliasesDeleteParameters,
  ): StreamableMethod<
    AliasesDelete204Response | AliasesDelete404Response | AliasesDeleteDefaultResponse
  >;
  /** Retrieves an alias definition. */
  get(
    options?: AliasesGetParameters,
  ): StreamableMethod<AliasesGet200Response | AliasesGetDefaultResponse>;
}

export interface DocumentsCount {
  /** Queries the number of documents in the index. */
  get(
    options?: DocumentsCountParameters,
  ): StreamableMethod<DocumentsCount200Response | DocumentsCountDefaultResponse>;
}

export interface DocumentsSearchGet {
  /** Searches for documents in the index. */
  get(
    options?: DocumentsSearchGetParameters,
  ): StreamableMethod<DocumentsSearchGet200Response | DocumentsSearchGetDefaultResponse>;
}

export interface DocumentsSearchPost {
  /** Searches for documents in the index. */
  post(
    options: DocumentsSearchPostParameters,
  ): StreamableMethod<DocumentsSearchPost200Response | DocumentsSearchPostDefaultResponse>;
}

export interface DocumentsGet {
  /** Retrieves a document from the index. */
  get(
    options?: DocumentsGetParameters,
  ): StreamableMethod<DocumentsGet200Response | DocumentsGetDefaultResponse>;
}

export interface DocumentsSuggestGet {
  /** Suggests documents in the index that match the given partial query text. */
  get(
    options: DocumentsSuggestGetParameters,
  ): StreamableMethod<DocumentsSuggestGet200Response | DocumentsSuggestGetDefaultResponse>;
}

export interface DocumentsSuggestPost {
  /** Suggests documents in the index that match the given partial query text. */
  post(
    options: DocumentsSuggestPostParameters,
  ): StreamableMethod<DocumentsSuggestPost200Response | DocumentsSuggestPostDefaultResponse>;
}

export interface DocumentsIndex {
  /** Sends a batch of document write actions to the index. */
  post(
    options: DocumentsIndexParameters,
  ): StreamableMethod<
    DocumentsIndex200Response | DocumentsIndex207Response | DocumentsIndexDefaultResponse
  >;
}

export interface DocumentsAutocompleteGet {
  /**
   * Autocompletes incomplete query terms based on input text and matching terms in
   * the index.
   */
  get(
    options: DocumentsAutocompleteGetParameters,
  ): StreamableMethod<
    DocumentsAutocompleteGet200Response | DocumentsAutocompleteGetDefaultResponse
  >;
}

export interface DocumentsAutocompletePost {
  /**
   * Autocompletes incomplete query terms based on input text and matching terms in
   * the index.
   */
  post(
    options: DocumentsAutocompletePostParameters,
  ): StreamableMethod<
    DocumentsAutocompletePost200Response | DocumentsAutocompletePostDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/servicestats' has methods for the following verbs: get */
  (path: "/servicestats"): GetServiceStatistics;
  /** Resource for '/indexstats' has methods for the following verbs: get */
  (path: "/indexstats"): GetIndexStatsSummary;
  /** Resource for '/datasources('\{dataSourceName\}')' has methods for the following verbs: put, delete, get */
  (path: "/datasources('{dataSourceName}')", dataSourceName: string): DataSourcesCreateOrUpdate;
  /** Resource for '/datasources' has methods for the following verbs: get, post */
  (path: "/datasources"): DataSourcesList;
  /** Resource for '/indexers('\{indexerName\}')/search.reset' has methods for the following verbs: post */
  (path: "/indexers('{indexerName}')/search.reset", indexerName: string): IndexersReset;
  /** Resource for '/indexers('\{indexerName\}')/search.resetdocs' has methods for the following verbs: post */
  (path: "/indexers('{indexerName}')/search.resetdocs", indexerName: string): IndexersResetDocs;
  /** Resource for '/indexers('\{indexerName\}')/search.run' has methods for the following verbs: post */
  (path: "/indexers('{indexerName}')/search.run", indexerName: string): IndexersRun;
  /** Resource for '/indexers('\{indexerName\}')' has methods for the following verbs: put, delete, get */
  (path: "/indexers('{indexerName}')", indexerName: string): IndexersCreateOrUpdate;
  /** Resource for '/indexers' has methods for the following verbs: get, post */
  (path: "/indexers"): IndexersList;
  /** Resource for '/indexers('\{indexerName\}')/search.status' has methods for the following verbs: get */
  (path: "/indexers('{indexerName}')/search.status", indexerName: string): IndexersGetStatus;
  /** Resource for '/skillsets('\{skillsetName\}')' has methods for the following verbs: put, delete, get */
  (path: "/skillsets('{skillsetName}')", skillsetName: string): SkillsetsCreateOrUpdate;
  /** Resource for '/skillsets' has methods for the following verbs: get, post */
  (path: "/skillsets"): SkillsetsList;
  /** Resource for '/skillsets('\{skillsetName\}')/search.resetskills' has methods for the following verbs: post */
  (
    path: "/skillsets('{skillsetName}')/search.resetskills",
    skillsetName: string,
  ): SkillsetsResetSkills;
  /** Resource for '/synonymmaps('\{synonymMapName\}')' has methods for the following verbs: put, delete, get */
  (path: "/synonymmaps('{synonymMapName}')", synonymMapName: string): SynonymMapsCreateOrUpdate;
  /** Resource for '/synonymmaps' has methods for the following verbs: get, post */
  (path: "/synonymmaps"): SynonymMapsList;
  /** Resource for '/indexes' has methods for the following verbs: post, get */
  (path: "/indexes"): IndexesCreate;
  /** Resource for '/indexes('\{indexName\}')' has methods for the following verbs: put, delete, get */
  (path: "/indexes('{indexName}')", indexName: string): IndexesCreateOrUpdate;
  /** Resource for '/indexes('\{indexName\}')/search.stats' has methods for the following verbs: get */
  (path: "/indexes('{indexName}')/search.stats", indexName: string): IndexesGetStatistics;
  /** Resource for '/indexes('\{indexName\}')/search.analyze' has methods for the following verbs: post */
  (path: "/indexes('{indexName}')/search.analyze", indexName: string): IndexesAnalyze;
  /** Resource for '/aliases' has methods for the following verbs: post, get */
  (path: "/aliases"): AliasesCreate;
  /** Resource for '/aliases('\{aliasName\}')' has methods for the following verbs: put, delete, get */
  (path: "/aliases('{aliasName}')", aliasName: string): AliasesCreateOrUpdate;
  /** Resource for '/indexes('\{indexName\}')/docs/$count' has methods for the following verbs: get */
  (path: "/indexes('{indexName}')/docs/$count", indexName: string): DocumentsCount;
  /** Resource for '/indexes('\{indexName\}')/docs' has methods for the following verbs: get */
  (path: "/indexes('{indexName}')/docs", indexName: string): DocumentsSearchGet;
  /** Resource for '/indexes('\{indexName\}')/docs/search.post.search' has methods for the following verbs: post */
  (path: "/indexes('{indexName}')/docs/search.post.search", indexName: string): DocumentsSearchPost;
  /** Resource for '/indexes('\{indexName\}')/docs('\{key\}')' has methods for the following verbs: get */
  (path: "/indexes('{indexName}')/docs('{key}')", key: string, indexName: string): DocumentsGet;
  /** Resource for '/indexes('\{indexName\}')/docs/search.suggest' has methods for the following verbs: get */
  (path: "/indexes('{indexName}')/docs/search.suggest", indexName: string): DocumentsSuggestGet;
  /** Resource for '/indexes('\{indexName\}')/docs/search.post.suggest' has methods for the following verbs: post */
  (
    path: "/indexes('{indexName}')/docs/search.post.suggest",
    indexName: string,
  ): DocumentsSuggestPost;
  /** Resource for '/indexes('\{indexName\}')/docs/search.index' has methods for the following verbs: post */
  (path: "/indexes('{indexName}')/docs/search.index", indexName: string): DocumentsIndex;
  /** Resource for '/indexes('\{indexName\}')/docs/search.autocomplete' has methods for the following verbs: get */
  (
    path: "/indexes('{indexName}')/docs/search.autocomplete",
    indexName: string,
  ): DocumentsAutocompleteGet;
  /** Resource for '/indexes('\{indexName\}')/docs/search.post.autocomplete' has methods for the following verbs: post */
  (
    path: "/indexes('{indexName}')/docs/search.post.autocomplete",
    indexName: string,
  ): DocumentsAutocompletePost;
}

export type SearchClient = Client & {
  path: Routes;
};
