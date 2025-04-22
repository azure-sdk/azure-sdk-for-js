// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Evaluation Definition */
export interface Evaluation {
  /** Data for evaluation. */
  data: InputData;
  /** Display Name for evaluation. It helps to find the evaluation easily in AI Foundry. It does not need to be unique. */
  displayName?: string;
  /** Description of the evaluation. It can be used to store additional information about the evaluation and is mutable. */
  description?: string;
  /** Evaluation's tags. Unlike properties, tags are fully mutable. */
  tags?: Record<string, string>;
  /** Evaluation's properties. Unlike tags, properties are add-only. Once added, a property cannot be removed. */
  properties?: Record<string, string>;
  /** Evaluators to be used for the evaluation. */
  evaluators: Record<string, EvaluatorConfiguration>;
}

/** Abstract data class. */
export interface InputDataParent {
  type: string;
}

/** Dataset as source for evaluation. */
export interface InputDataset extends InputDataParent {
  type: "dataset";
  /** Evaluation input data */
  id: string;
}

/** Evaluator Configuration */
export interface EvaluatorConfiguration {
  /** Identifier of the evaluator. */
  id: string;
  /** Initialization parameters of the evaluator. */
  initParams?: Record<string, unknown>;
  /** Data parameters of the evaluator. */
  dataMapping?: Record<string, string>;
}

/** Evaluation request for agent run. */
export interface AgentEvaluationRequest {
  /** Identifier of the agent run. */
  runId: string;
  /** Identifier of the agent thread. This field is mandatory currently, but it will be optional in the future. */
  threadId?: string;
  /** Evaluators to be used for the evaluation. */
  evaluators: Record<string, EvaluatorConfiguration>;
  /** Sampling configuration for the evaluation. */
  samplingConfiguration?: AgentEvaluationSamplingConfiguration;
  /** Redaction configuration for the evaluation. */
  redactionConfiguration?: AgentEvaluationRedactionConfiguration;
  /** Optional and temporary way to pass the AppInsights connection string to the evaluator. When this string is not null, the evaluation results will be logged to Azure AppInsights. */
  appInsightsConnectionString?: string;
}

/** Definition for sampling strategy. */
export interface AgentEvaluationSamplingConfiguration {
  /** Name of the sampling strategy. */
  name: string;
  /** Percentage of sampling per hour (0-100). */
  samplingPercent: number;
  /** Maximum request rate per hour (0 to 1000). */
  maxRequestRate: number;
}

/** The redaction configuration will allow the user to control what is redacted. */
export interface AgentEvaluationRedactionConfiguration {
  /** Redact score properties. If not specified, the default is to redact in production. */
  redactScoreProperties?: boolean;
}

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

/** Red team details. */
export interface RedTeam {
  /** Name of the red-team scan. */
  scanName?: string;
  /** Number of simulation rounds. */
  numTurns: number;
  /** List of attack strategies or nested lists of attack strategies. */
  attackStrategies: AttackStrategy[];
  /** Simulation-only or Simulation + Evaluation. Default false, if true the scan outputs conversation not evaluation result. */
  simulationOnly: boolean;
  /** List of risk categories to generate attack objectives for. */
  riskCategories: RiskCategory[];
  /** Application scenario for the red team operation, to generate scenario specific attacks. */
  applicationScenario?: string;
  /** Red team's tags. Unlike properties, tags are fully mutable. */
  tags?: Record<string, string>;
  /** Red team's properties. Unlike tags, properties are add-only. Once added, a property cannot be removed. */
  properties?: Record<string, string>;
}

/** Abstract data class. */
export type InputData = InputDataParent | InputDataset;
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
/** Alias for AttackStrategy */
export type AttackStrategy = string;
/** Alias for RiskCategory */
export type RiskCategory = string;
