// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Response from the list and get connections operations */
export interface ConnectionOutput {
  /** The name of the resource */
  readonly name: string;
  /**
   * Category of the connection
   *
   * Possible values: "AzureOpenAI", "AzureBlob", "AzureStorageAccount", "CognitiveSearch", "CosmosDB", "ApiKey", "AppConfig", "AppInsights", "CustomKeys"
   */
  readonly type: ConnectionTypeOutput;
  /** The connection URL to be used for this service */
  readonly target: string;
  /** Whether the connection is tagged as the default connection of its type */
  readonly isDefault: boolean;
  /** The credentials used by the connection */
  readonly credentials: BaseCredentialsOutput;
  /** Metadata of the connection */
  readonly metadata: Record<string, string>;
}

/** A base class for connection credentials */
export interface BaseCredentialsOutputParent {
  authType: CredentialTypeOutput;
}

/** API Key Credential definition */
export interface ApiKeyCredentialsOutput extends BaseCredentialsOutputParent {
  /** The credentail type */
  readonly authType: "ApiKey";
  /** API Key */
  readonly apiKey?: string;
}

/** Entra ID credential definition */
export interface EntraIDCredentialsOutput extends BaseCredentialsOutputParent {
  /** The credential type */
  readonly authType: "AAD";
}

/** Custom credential defintion */
export interface CustomCredentialOutput extends BaseCredentialsOutputParent {
  /** The credential type */
  readonly authType: "CustomKeys";
}

/** Shared Access Signature (SAS) credential definition */
export interface SASCredentialsOutput extends BaseCredentialsOutputParent {
  /** The credential type */
  readonly authType: "SAS";
  /** SAS token */
  readonly sasToken?: string;
}

/** Credentials that do not require authentication */
export interface NoAuthenticationCredentialsOutput
  extends BaseCredentialsOutputParent {
  /** The credential type */
  readonly authType: "None";
}

/** Paged collection of Connection items */
export interface PagedConnectionOutput {
  /** The Connection items on this page */
  value: Array<ConnectionOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Evaluation Definition */
export interface EvaluationOutput {
  /** Identifier of the evaluation. */
  readonly id: string;
  /** Data for evaluation. */
  data: InputDataOutput;
  /** Evaluation target specifying the model config and parameters */
  target?: EvaluationTargetOutput;
  /** Display Name for evaluation. It helps to find the evaluation easily in AI Foundry. It does not need to be unique. */
  displayName?: string;
  /** Description of the evaluation. It can be used to store additional information about the evaluation and is mutable. */
  description?: string;
  /** Metadata containing createdBy and modifiedBy information. */
  readonly systemData?: SystemDataOutput;
  /** Status of the evaluation. It is set by service and is read-only. */
  readonly status?: string;
  /** Evaluation's tags. Unlike properties, tags are fully mutable. */
  tags?: Record<string, string>;
  /** Evaluation's properties. Unlike tags, properties are add-only. Once added, a property cannot be removed. */
  properties?: Record<string, string>;
  /** Evaluators to be used for the evaluation. */
  evaluators: Record<string, EvaluatorConfigurationOutput>;
  /** Read-only result outputs. Evaluation Results will have logs and results under the eval_results folder. Example: { 'evaluationResultId': 'azureai://accounts/{AccountName}/projects/{myproject}/evaluationresults/{name}/versions/{version}', 'evaluationMetrics': '{serialized-json-metrics}' } */
  readonly outputs: Record<string, string>;
}

/** Abstract data class. */
export interface InputDataOutputParent {
  type: string;
}

/** Dataset as source for evaluation. */
export interface InputDatasetOutput extends InputDataOutputParent {
  type: "dataset";
  /** Evaluation input data */
  id: string;
}

/** Target for the evaluation process. */
export interface EvaluationTargetOutput {
  /** System message related to the evaluation target. */
  systemMessage: string;
  /** Model configuration for the evaluation. */
  modelConfig: TargetModelConfigOutput;
  /** A dictionary of parameters for the model. */
  modelParams?: Record<string, any>;
}

/** Abstract class for model configuration. */
export interface TargetModelConfigOutputParent {
  type: string;
}

/** Azure OpenAI model configuration. The API version would be selected by the service for querying the model. */
export interface AoaiModelConfigOutput extends TargetModelConfigOutputParent {
  readonly type: "AOAI";
  /** Endpoint targetURI for AOAI model. */
  azureEndpoint: string;
  /** API Key for AOAI model. */
  apiKey: string;
  /** Deployment name for AOAI model. */
  azureDeployment: string;
}

/** MaaS model configuration. The API version would be selected by the service for querying the model. */
export interface MaasModelConfigOutput extends TargetModelConfigOutputParent {
  readonly type: "MAAS";
  /** Endpoint targetURI for MAAS model. */
  azureEndpoint: string;
  /** API Key for MAAS model. */
  apiKey: string;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemDataOutput {
  /** The timestamp the resource was created at. */
  readonly createdAt?: string;
  /** The identity that created the resource. */
  readonly createdBy?: string;
  /** The identity type that created the resource. */
  readonly createdByType?: string;
  /** The timestamp of resource last modification (UTC) */
  readonly lastModifiedAt?: string;
}

/** Evaluator Configuration */
export interface EvaluatorConfigurationOutput {
  /** Identifier of the evaluator. */
  id: string;
  /** Initialization parameters of the evaluator. */
  initParams?: Record<string, any>;
  /** Data parameters of the evaluator. */
  dataMapping?: Record<string, string>;
}

/** Paged collection of Evaluation items */
export interface PagedEvaluationOutput {
  /** The Evaluation items on this page */
  value: Array<EvaluationOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Paged collection of DatasetVersion items */
export interface PagedDatasetVersionOutput {
  /** The DatasetVersion items on this page */
  value: Array<DatasetVersionOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** DatasetVersion Definition */
export interface DatasetVersionOutputParent {
  /** [Required] Uri of the data. Example: https://go.microsoft.com/fwlink/?linkid=2202330 */
  datasetUri: string;
  /** Indicates if dataset is reference only or managed by dataset service. If true, the underlying data will be deleted when the dataset version is deleted */
  readonly isReference?: boolean;
  /** Asset stage */
  stage?: string;
  /** A unique identifier for the asset, assetId probably? */
  readonly id?: string;
  /** The name of the resource */
  readonly name: string;
  /** The version of the resource */
  readonly version: string;
  /** The asset description text. */
  description?: string;
  /** Tag dictionary. Tags can be added, removed, and updated. */
  tags?: Record<string, string>;
  type: DatasetTypeOutput;
}

/** FileDatasetVersion Definition */
export interface FileDatasetVersionOutput extends DatasetVersionOutputParent {
  /** Dataset type */
  type: "uri_file";
  /** Indicates OpenAI Purpose. FileDatasets created with this field will be compatible with OpenAI-specific features */
  openAIPurpose: string;
}

/** FileDatasetVersion Definition */
export interface FolderDatasetVersionOutput extends DatasetVersionOutputParent {
  /** Dataset type */
  type: "uri_folder";
}

/** Represents the response for a pending upload request */
export interface PendingUploadResponseOutput {
  /** Container-level read, write, list SAS. */
  blobReferenceForConsumption: BlobReferenceForConsumptionOutput;
  /** ID for this upload request. */
  pendingUploadId: string;
  /** Version of dataset to be created if user did not specify version when initially creating upload */
  datasetVersion?: string;
  /** TemporaryBlobReference is the only supported type */
  pendingUploadType: "TemporaryBlobReference";
}

/** Represents a reference to a blob for consumption */
export interface BlobReferenceForConsumptionOutput {
  /** Blob URI path for client to upload data. Example: https://blob.windows.core.net/Container/Path */
  blobUri: string;
  /** ARM ID of the storage account to use. */
  storageAccountArmId: string;
  /** Credential info to access the storage account. */
  credential: SasCredentialOutput;
}

/** SAS Credential definition */
export interface SasCredentialOutput {
  /** SAS uri */
  readonly sasUri: string;
  /** Type of credential */
  readonly type: "SAS";
}

/** Represents a reference to a blob for consumption */
export interface AssetCredentialResponseOutput {
  /** Credential info to access the storage account. */
  blobReferenceForConsumption: BlobReferenceForConsumptionOutput;
}

/** Paged collection of Index items */
export interface PagedIndexOutput {
  /** The Index items on this page */
  value: Array<IndexOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Index resource Definition */
export interface IndexOutputParent {
  /** Asset stage */
  stage?: string;
  /** A unique identifier for the asset, assetId probably? */
  readonly id?: string;
  /** The name of the resource */
  readonly name: string;
  /** The version of the resource */
  readonly version: string;
  /** The asset description text. */
  description?: string;
  /** Tag dictionary. Tags can be added, removed, and updated. */
  tags?: Record<string, string>;
  type: IndexTypeOutput;
}

/** Azure AI Search Index Definition */
export interface AzureAISearchIndexOutput extends IndexOutputParent {
  /** Type of index */
  type: "AzureSearch";
  /** Name of connection to Azure AI Search */
  connectionName: string;
  /** Name of index in Azure AI Search resource to attach */
  indexName: string;
}

/** Managed Azure AI Search Index Definition */
export interface ManagedAzureAISearchIndexOutput extends IndexOutputParent {
  /** Type of index */
  type: "ManagedAzureSearch";
  /** Vector store id of managed index */
  vectorStoreId: string;
}

/** CosmosDB Vector Store Index Definition */
export interface CosmosDBIndexOutput extends IndexOutputParent {
  /** Type of index */
  type: "CosmosDBNoSqlVectorStore";
  /** Name of connection to CosmosDB */
  connectionName: string;
  /** Name of the CosmosDB Database */
  databaseName: string;
  /** Name of CosmosDB Container */
  containerName: string;
  /** Embedding model configuration */
  embeddingConfiguration: EmbeddingConfigurationOutput;
}

/** Embedding configuration class */
export interface EmbeddingConfigurationOutput {
  /** Deployment name of embedding model. It can point to a model deployment either in the parent AIServices or a connection. */
  modelDeploymentName: string;
  /** Embedding field */
  embeddingField: string;
}

/** Model Deployment Definition */
export interface DeploymentOutputParent {
  /** Name of the deployment */
  readonly name: string;
  type: DeploymentTypeOutput;
}

/** Paged collection of Deployment items */
export interface PagedDeploymentOutput {
  /** The Deployment items on this page */
  value: Array<DeploymentOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Model Deployment Definition */
export interface ModelDeploymentOutput extends DeploymentOutputParent {
  /** The type of the deployment */
  type: "ModelDeployment";
  /** Publisher-specific name of the deployed model */
  readonly modelName: string;
  /** Publisher-specific version of the deployed model */
  readonly modelVersion: string;
  /** Name of the deployed model's publisher */
  readonly modelPublisher: string;
  /** Capabilities of deployed model */
  readonly capabilities: Record<string, string>;
  /** Sku of the model deployment */
  readonly sku: SkuOutput;
  /** Name of the connection the deployment comes from */
  readonly connectionName?: string;
}

/** Sku information */
export interface SkuOutput {
  /** Sku capacity */
  capacity: number;
  /** Sku family */
  family: string;
  /** Sku name */
  name: string;
  /** Sku size */
  size: string;
  /** Sku tier */
  tier: string;
}

/** Red team details. */
export interface RedTeamOutput {
  /** Identifier of the red team. */
  readonly id: string;
  /** Name of the red-team scan. */
  scanName: string;
  /** Number of simulation rounds. */
  numTurns: number;
  /** List of attack strategies or nested lists of attack strategies. */
  attackStrategy: AttackStrategyOutput[];
  /** Simulation-only or Simulation + Evaluation. Default false, if true the scan outputs conversation not evaluation result. */
  simulationOnly: boolean;
  /** List of risk categories to generate attack objectives for. */
  riskCategories: RiskCategoryOutput[];
  /** Application scenario for the red team operation, to generate scenario specific attacks. */
  applicationScenario?: string;
  /** Red team's tags. Unlike properties, tags are fully mutable. */
  tags?: Record<string, string>;
  /** Red team's properties. Unlike tags, properties are add-only. Once added, a property cannot be removed. */
  properties?: Record<string, string>;
  /** Status of the red-team. It is set by service and is read-only. */
  readonly status?: string;
  /** Read-only result outputs. Example: { 'evaluationResultId': 'azureai://accounts/{AccountName}/projects/{myproject}/evaluationresults/{name}/versions/{version}', 'logId': 'azureai://accounts/{AccountName}/projects/{myproject}/datasets/{dataset-name}/versions/{dataset-version}' } */
  readonly outputs: Record<string, string>;
  /** Metadata containing createdBy and modifiedBy information. */
  readonly systemData?: SystemDataOutput;
}

/** Paged collection of RedTeam items */
export interface PagedRedTeamOutput {
  /** The RedTeam items on this page */
  value: Array<RedTeamOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Attack Objective */
export interface AttackObjectiveOutput {
  /** The unique identifier. */
  Id: string;
  /** The metadata. */
  Metadata?: MetadataOutput;
  /** List of sources. */
  Source: string[];
  /** The modality. */
  Modality: string;
  /** The messages. */
  Messages: Array<MessageOutput>;
}

/** Metadata */
export interface MetadataOutput {
  /** List of target harms. */
  TargetHarms: Array<TargetHarmOutput>;
  /** The language */
  Language: string;
}

/** Target Harm */
export interface TargetHarmOutput {
  /** The risk type. */
  RiskType?: string;
  /** The risk sub type. */
  RiskSubType?: string;
}

/** Message */
export interface MessageOutput {
  /** The role. */
  Role?: string;
  /** The content. */
  Content?: string;
}

/** Long Running Response */
export interface LongRunningResponseOutput {
  /** The location. */
  Location: string;
  /** The OperationResult. */
  OperationResult: any;
}

/** Paged collection of EvaluationResult items */
export interface PagedEvaluationResultOutput {
  /** The EvaluationResult items on this page */
  value: Array<EvaluationResultOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Evaluation Result resource Definition */
export interface EvaluationResultOutput {
  /**
   * Type of Evaluation result
   *
   * Possible values: "Benchmark", "Evaluation", "Redteam", "Simulation"
   */
  ResultType?: ResultTypeOutput;
  /** Aggregated metrics */
  Metrics?: Record<string, number>;
  /** Blob URI */
  BlobUri?: string;
  /** Asset stage */
  stage?: string;
  /** A unique identifier for the asset, assetId probably? */
  readonly id?: string;
  /** The name of the resource */
  readonly name: string;
  /** The version of the resource */
  readonly version: string;
  /** The asset description text. */
  description?: string;
  /** Tag dictionary. Tags can be added, removed, and updated. */
  tags?: Record<string, string>;
}

/** A base class for connection credentials */
export type BaseCredentialsOutput =
  | BaseCredentialsOutputParent
  | ApiKeyCredentialsOutput
  | EntraIDCredentialsOutput
  | CustomCredentialOutput
  | SASCredentialsOutput
  | NoAuthenticationCredentialsOutput;
/** Abstract data class. */
export type InputDataOutput = InputDataOutputParent | InputDatasetOutput;
/** Abstract class for model configuration. */
export type TargetModelConfigOutput =
  | TargetModelConfigOutputParent
  | AoaiModelConfigOutput
  | MaasModelConfigOutput;
/** DatasetVersion Definition */
export type DatasetVersionOutput =
  | DatasetVersionOutputParent
  | FileDatasetVersionOutput
  | FolderDatasetVersionOutput;
/** Index resource Definition */
export type IndexOutput =
  | IndexOutputParent
  | AzureAISearchIndexOutput
  | ManagedAzureAISearchIndexOutput
  | CosmosDBIndexOutput;
/** Model Deployment Definition */
export type DeploymentOutput = DeploymentOutputParent | ModelDeploymentOutput;
/** Alias for ConnectionTypeOutput */
export type ConnectionTypeOutput = string;
/** Alias for CredentialTypeOutput */
export type CredentialTypeOutput = string;
/** Alias for DatasetTypeOutput */
export type DatasetTypeOutput = string;
/** Alias for IndexTypeOutput */
export type IndexTypeOutput = string;
/** Alias for DeploymentTypeOutput */
export type DeploymentTypeOutput = string;
/** Alias for AttackStrategyOutput */
export type AttackStrategyOutput = string;
/** Alias for RiskCategoryOutput */
export type RiskCategoryOutput = string;
/** Alias for ResultTypeOutput */
export type ResultTypeOutput = string;
