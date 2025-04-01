// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** DatasetVersion Definition */
export interface DatasetVersionParent {
  /** [Required] Uri of the data. Example: https://go.microsoft.com/fwlink/?linkid=2202330 */
  datasetUri: string;
  /** Asset stage */
  stage?: string;
  /** The asset description text. */
  description?: string;
  /** Tag dictionary. Tags can be added, removed, and updated. */
  tags?: Record<string, string>;
  type: DatasetType;
}

/** FileDatasetVersion Definition */
export interface FileDatasetVersion extends DatasetVersionParent {
  /** Dataset type */
  type: "uri_file";
  /** Indicates OpenAI Purpose. FileDatasets created with this field will be compatible with OpenAI-specific features */
  openAIPurpose: string;
}

/** FileDatasetVersion Definition */
export interface FolderDatasetVersion extends DatasetVersionParent {
  /** Dataset type */
  type: "uri_folder";
}

/** Represents a request for a pending upload. */
export interface PendingUploadRequest {
  /** If PendingUploadId is not provided, a random GUID will be used. */
  pendingUploadId?: string;
  /** Name of Azure blob storage connection to use for generating temporary SAS token */
  connectionName?: string;
  /** TemporaryBlobReference is the only supported type. */
  pendingUploadType: "TemporaryBlobReference";
}

/** Index resource Definition */
export interface IndexParent {
  /** Asset stage */
  stage?: string;
  /** The asset description text. */
  description?: string;
  /** Tag dictionary. Tags can be added, removed, and updated. */
  tags?: Record<string, string>;
  type: IndexType;
}

/** Azure AI Search Index Definition */
export interface AzureAISearchIndex extends IndexParent {
  /** Type of index */
  type: "AzureSearch";
  /** Name of connection to Azure AI Search */
  connectionName: string;
  /** Name of index in Azure AI Search resource to attach */
  indexName: string;
}

/** Managed Azure AI Search Index Definition */
export interface ManagedAzureAISearchIndex extends IndexParent {
  /** Type of index */
  type: "ManagedAzureSearch";
  /** Vector store id of managed index */
  vectorStoreId: string;
}

/** CosmosDB Vector Store Index Definition */
export interface CosmosDBIndex extends IndexParent {
  /** Type of index */
  type: "CosmosDBNoSqlVectorStore";
  /** Name of connection to CosmosDB */
  connectionName: string;
  /** Name of the CosmosDB Database */
  databaseName: string;
  /** Name of CosmosDB Container */
  containerName: string;
  /** Embedding model configuration */
  embeddingConfiguration: EmbeddingConfiguration;
}

/** Embedding configuration class */
export interface EmbeddingConfiguration {
  /** Deployment name of embedding model. It can point to a model deployment either in the parent AIServices or a connection. */
  modelDeploymentName: string;
  /** Embedding field */
  embeddingField: string;
}

/** DatasetVersion Definition */
export type DatasetVersion =
  | DatasetVersionParent
  | FileDatasetVersion
  | FolderDatasetVersion;
/** Index resource Definition */
export type Index =
  | IndexParent
  | AzureAISearchIndex
  | ManagedAzureAISearchIndex
  | CosmosDBIndex;
/** Alias for ConnectionType */
export type ConnectionType = string;
/** Alias for ListViewType */
export type ListViewType = string;
/** Alias for DatasetType */
export type DatasetType = string;
/** Alias for IndexType */
export type IndexType = string;
