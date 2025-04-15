// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Evaluation Definition */
export interface Evaluation {
  /** Data for evaluation. */
  data: InputData;
  /** Evaluation target specifying the model config and parameters */
  target?: EvaluationTarget;
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

/** Target for the evaluation process. */
export interface EvaluationTarget {
  /** System message related to the evaluation target. */
  systemMessage: string;
  /** Model configuration for the evaluation. */
  modelConfig: TargetModelConfig;
  /** A dictionary of parameters for the model. */
  modelParams?: Record<string, unknown>;
}

/** Abstract class for model configuration. */
export interface TargetModelConfigParent {
  type: string;
}

/** Azure OpenAI model configuration. The API version would be selected by the service for querying the model. */
export interface AoaiModelConfig extends TargetModelConfigParent {
  /** Endpoint targetURI for AOAI model. */
  azureEndpoint: string;
  /** API Key for AOAI model. */
  apiKey: string;
  /** Deployment name for AOAI model. */
  azureDeployment: string;
}

/** MaaS model configuration. The API version would be selected by the service for querying the model. */
export interface MaasModelConfig extends TargetModelConfigParent {
  /** Endpoint targetURI for MAAS model. */
  azureEndpoint: string;
  /** API Key for MAAS model. */
  apiKey: string;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {}

/** Evaluator Configuration */
export interface EvaluatorConfiguration {
  /** Identifier of the evaluator. */
  id: string;
  /** Initialization parameters of the evaluator. */
  initParams?: Record<string, unknown>;
  /** Data parameters of the evaluator. */
  dataMapping?: Record<string, string>;
}

/** Represents the data transfer object for an annotation. */
export interface AnnotationDTO {
  /** The task associated with the annotation. */
  AnnotationTask: string;
  /** The type of content being annotated. */
  ContentType: string;
  /** A list of user-provided text inputs. */
  UserTextList: string[];
  /** A collection of content objects related to the annotation. */
  Contents: Array<Content>;
  /** A list of metrics associated with the annotation. */
  MetricList: string[];
  /** The version of the prompt used for the annotation. */
  PromptVersion: string;
  /** The user agent information. */
  UserAgent: string;
  /** The partner identifier. */
  PartnerId: string;
  /** The model identifier. */
  ModelId: string;
  /** The type of inference performed. */
  InferenceType: string;
  /** The client request identifier. */
  ClientRequestId: string;
}

/** Message content. */
export interface Content {
  /** The type of content. */
  Messages: unknown[];
}

/** Upload a local SDK evaluation run. Currently update supports status, outputs, properties, and tags updates. */
export interface EvaluationUpload {
  /** Data for evaluation. */
  data?: InputData;
  /** Evaluation target specifying the model config and parameters */
  target?: EvaluationTarget;
  /** Display Name for evaluation. It helps to find the evaluation easily in AI Foundry. It does not need to be unique. */
  displayName?: string;
  /** Description of the evaluation. It can be used to store additional information about the evaluation and is mutable. */
  description?: string;
  /** Status of the evaluation. For upload: Failed or Completed. */
  status?: string;
  /** Evaluation's tags. Unlike properties, tags are fully mutable. */
  tags?: Record<string, string>;
  /** Evaluation's properties. Unlike tags, properties are add-only. Once added, a property cannot be removed. */
  properties?: Record<string, string>;
  /** Evaluators to be used for the evaluation. */
  evaluators?: Record<string, EvaluatorConfiguration>;
  /** Outputs of the evaluation as a dictionary of IDs. Example: { 'evaluationResultId': 'azureai://accounts/{AccountName}/projects/{myproject}/evaluationresults/{name}/versions/{version}'} */
  outputs?: Record<string, string>;
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
  scanName: string;
  /** Number of simulation rounds. */
  numTurns: number;
  /** List of attack strategies or nested lists of attack strategies. */
  attackStrategy: AttackStrategy[];
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

/** Red team details. */
export interface RedTeamUpload {
  /** Name of the red-team scan. */
  scanName?: string;
  /** Number of simulation rounds. */
  numTurns?: number;
  /** List of attack strategies or nested lists of attack strategies. */
  attackStrategy?: AttackStrategy[];
  /** Simulation-only or Simulation + Evaluation. Default false, if true the scan outputs conversation not evaluation result. */
  simulationOnly?: boolean;
  /** List of risk categories to generate attack objectives for. */
  riskCategories?: RiskCategory[];
  /** Application scenario for the red team operation, to generate scenario specific attacks. */
  applicationScenario?: string;
  /** Red team's tags. Unlike properties, tags are fully mutable. */
  tags?: Record<string, string>;
  /** Red team's properties. Unlike tags, properties are add-only. Once added, a property cannot be removed. */
  properties?: Record<string, string>;
}

/** Customization Parameters */
export interface SimulationDTO {
  /** Additional headers. */
  Headers?: Record<string, string>;
  /** Parameters. */
  Params?: Record<string, string>;
  /** Template parameters. */
  TemplateParameters?: Record<string, string>;
  /** Customization parameters. */
  CustomizationParameters?: CustomizationParameters;
  /** Json. */
  Json?: string;
  /** Url. */
  Url?: string;
  /** Template key. */
  TemplateKey?: string;
  /**
   * Type of Simulation.
   *
   * Possible values: "Default", "CustomPersona", "HarmTurnGenerator"
   */
  SimulationType?: SimulationType;
  /** 'True' if Microsoft internal tenant and 'False' otherwise. */
  IsMicrosoftTenant?: boolean;
  /** Azure subscription id. */
  SubscriptionId?: string;
  /** Resource group name. */
  ResourceGroupName?: string;
  /** Workspace name. */
  WorkspaceName?: string;
}

/** Customization Parameters */
export interface CustomizationParameters {
  /** Application scenario. */
  ApplicationScenario?: string;
  /** List of harm categories. */
  HarmCategories: string[];
}

/** Evaluation Result resource Definition */
export interface EvaluationResult {
  /**
   * Type of Evaluation result
   *
   * Possible values: "Benchmark", "Evaluation", "Redteam", "Simulation"
   */
  ResultType?: ResultType;
  /** Blob URI */
  BlobUri?: string;
  /** Asset stage */
  stage?: string;
  /** The asset description text. */
  description?: string;
  /** Tag dictionary. Tags can be added, removed, and updated. */
  tags?: Record<string, string>;
}

/** Asset Credential Request */
export interface AssetCredentialRequest {
  /** Blob URI */
  BlobUri: string;
}

/** Abstract data class. */
export type InputData = InputDataParent | InputDataset;
/** Abstract class for model configuration. */
export type TargetModelConfig =
  | TargetModelConfigParent
  | AoaiModelConfig
  | MaasModelConfig;
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
/** Alias for SimulationType */
export type SimulationType = string;
/** Alias for ResultType */
export type ResultType = string;
