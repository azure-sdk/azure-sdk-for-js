// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Represents the settings used to define the project behavior. */
export interface TextAnalysisAuthoringProjectSettings {
  /** The threshold of the class with the highest confidence, at which the prediction will automatically be changed to "None". The value of the threshold should be between 0 and 1 inclusive. */
  confidenceThreshold?: number;
  /** The path to the AML connected project. */
  amlProjectPath?: string;
  /** Indicates whether the labeling experience can be modified or not. */
  isLabelingLocked?: boolean;
  /** Indicates whether to run GPT predictions or not. */
  runGptPredictions?: boolean;
  /** The predictive lookahead for GPT predictions that is specified by the user. */
  gptPredictiveLookahead?: number;
}

/** Represents the options used to create or update a project. */
export interface TextAnalysisAuthoringCreateProjectOptions {
  /**
   * The project kind.
   *
   * Possible values: "CustomSingleLabelClassification", "CustomMultiLabelClassification", "CustomEntityRecognition", "CustomAbstractiveSummarization", "CustomHealthcare", "CustomTextSentiment"
   */
  projectKind: ProjectKind;
  /** The storage container name. */
  storageInputContainerName: string;
  /** The project settings. */
  settings?: TextAnalysisAuthoringProjectSettings;
  /** The new project name. */
  projectName: string;
  /** Whether the project would be used for multiple languages or not. */
  multilingual?: boolean;
  /** The project description. */
  description?: string;
  /** The project language. This is BCP-47 representation of a language. For example, use "en" for English, "en-gb" for English (UK), "es" for Spanish etc. */
  language: string;
}

/** Represents the options for authorizing a project copy to the current Azure resource. */
export interface TextAnalysisAuthoringCopyAuthorizationOptions {
  /**
   * Represents the project kind.
   *
   * Possible values: "CustomSingleLabelClassification", "CustomMultiLabelClassification", "CustomEntityRecognition", "CustomAbstractiveSummarization", "CustomHealthcare", "CustomTextSentiment"
   */
  projectKind: ProjectKind;
  /** The name of the storage container. */
  storageInputContainerName?: string;
  /** Whether to allow an existing project to be overwritten using the resulting copy authorization. */
  allowOverwrite?: boolean;
}

/** Represents the options for copying an existing project to another Azure resource. */
export interface TextAnalysisAuthoringCopyProjectOptions {
  /**
   * Represents the project kind.
   *
   * Possible values: "CustomSingleLabelClassification", "CustomMultiLabelClassification", "CustomEntityRecognition", "CustomAbstractiveSummarization", "CustomHealthcare", "CustomTextSentiment"
   */
  projectKind: ProjectKind;
  /** The project name to be copied-into. */
  targetProjectName: string;
  /** The access token. */
  accessToken: string;
  /** The expiration of the access token. */
  expiresAt: Date | string;
  /** Represents the target Azure resource ID. */
  targetResourceId: string;
  /** Represents the target Azure resource region. */
  targetResourceRegion: string;
}

/** Represents an exported project. */
export interface TextAnalysisAuthoringExportedProject {
  /** The version of the exported file. */
  projectFileVersion: string;
  /**
   * Specifies the method used to interpret string offsets. For additional information see https://aka.ms/text-analytics-offsets.
   *
   * Possible values: "Utf16CodeUnit"
   */
  stringIndexType: StringIndexType;
  /** Represents the project metadata. */
  metadata: TextAnalysisAuthoringCreateProjectOptions;
  /** Represents the project assets. */
  assets?: TextAnalysisAuthoringExportedProjectAssets;
}

/** Represents the assets of an exported project. */
export interface TextAnalysisAuthoringExportedProjectAssetsParent {
  projectKind: ProjectKind;
}

/** Represents the exported assets for an abstractive summarization project. */
export interface TextAnalysisAuthoringExportedCustomAbstractiveSummarizationProjectAssets
  extends TextAnalysisAuthoringExportedProjectAssetsParent {
  /** The list of documents belonging to this project. */
  documents?: Array<TextAnalysisAuthoringExportedCustomAbstractiveSummarizationDocument>;
  /** The type of the project the assets belong to. */
  projectKind: "CustomAbstractiveSummarization";
}

/** Represents an exported document for a custom abstractive summarization project. */
export interface TextAnalysisAuthoringExportedCustomAbstractiveSummarizationDocument {
  /** Represents the summary file location in the blob store container associated with the project. */
  summaryLocation: string;
  /** The location of the document in the storage. */
  location?: string;
  /** Represents the document language. This is BCP-47 representation of a language. For example, use "en" for English, "en-gb" for English (UK), "es" for Spanish etc. */
  language?: string;
  /** The dataset for this document. Allowed values are 'Train' and 'Test'. */
  dataset?: string;
}

/** Represents the exported assets for a entity recognition project. */
export interface TextAnalysisAuthoringExportedCustomEntityRecognitionProjectAssets
  extends TextAnalysisAuthoringExportedProjectAssetsParent {
  /** The list of entities belonging to the project. */
  entities?: Array<TextAnalysisAuthoringExportedEntity>;
  /** The list of documents belonging to the project. */
  documents?: Array<TextAnalysisAuthoringExportedCustomEntityRecognitionDocument>;
  /** The type of the project the assets belong to. */
  projectKind: "CustomEntityRecognition";
}

/** Represents an entity in an exported project. */
export interface TextAnalysisAuthoringExportedEntity {
  /** The entity category. */
  category?: string;
  /** Short description for entity category. Required when enabling synthetic data generation. */
  description?: string;
}

/** Represents an exported document for a custom entity recognition project. */
export interface TextAnalysisAuthoringExportedCustomEntityRecognitionDocument {
  /** The list of entity labels belonging to the document. */
  entities?: Array<TextAnalysisAuthoringExportedDocumentEntityRegion>;
  /** The location of the document in the storage. */
  location?: string;
  /** Represents the document language. This is BCP-47 representation of a language. For example, use "en" for English, "en-gb" for English (UK), "es" for Spanish etc. */
  language?: string;
  /** The dataset for this document. Allowed values are 'Train' and 'Test'. */
  dataset?: string;
}

/** Represents a region in a document for entity labeling. */
export interface TextAnalysisAuthoringExportedDocumentEntityRegion {
  /** Start position for the region. */
  regionOffset?: number;
  /** Length for the region text. */
  regionLength?: number;
  /** The list of entity labels belonging to this region. */
  labels?: Array<TextAnalysisAuthoringExportedDocumentEntityLabel>;
}

/** Represents an entity label for a document. */
export interface TextAnalysisAuthoringExportedDocumentEntityLabel {
  /** The entity category. */
  category?: string;
  /** Start position for the entity text. */
  offset?: number;
  /** Length for the entity text. */
  length?: number;
}

/** Represents the exported assets for a CustomHealthcare project. */
export interface TextAnalysisAuthoringExportedCustomHealthcareProjectAssets
  extends TextAnalysisAuthoringExportedProjectAssetsParent {
  /** The list of entities belonging to the project. */
  entities?: Array<TextAnalysisAuthoringExportedCompositeEntity>;
  /** The list of documents belonging to the project. */
  documents?: Array<TextAnalysisAuthoringExportedCustomHealthcareDocument>;
  /** The type of the project the assets belong to. */
  projectKind: "CustomHealthcare";
}

/** Represents an entity in an exported project with composite entities enabled. */
export interface TextAnalysisAuthoringExportedCompositeEntity {
  /**
   * The behavior to follow when the entity's components overlap with each other.
   *
   * Possible values: "separateComponents", "combineComponents"
   */
  compositionSetting?: CompositionSetting;
  /** The list component of the entity. */
  list?: TextAnalysisAuthoringExportedEntityList;
  /** The prebuilt entities components. */
  prebuilts?: Array<TextAnalysisAuthoringExportedPrebuiltEntity>;
  /** The entity category. */
  category?: string;
}

/** Represents a list component of an entity. */
export interface TextAnalysisAuthoringExportedEntityList {
  /** The sub-lists of the list component. */
  sublists?: Array<TextAnalysisAuthoringExportedEntitySublist>;
}

/** Represents a sub-list inside a list component. */
export interface TextAnalysisAuthoringExportedEntitySublist {
  /** The key of the sub-list. */
  listKey?: string;
  /** The phrases of that correspond to the sub-list. */
  synonyms?: Array<TextAnalysisAuthoringExportedEntityListSynonym>;
}

/** Represents a list of synonyms inside a list component */
export interface TextAnalysisAuthoringExportedEntityListSynonym {
  /** Represents the language of the synonyms. This is BCP-47 representation of a language. For example, use "en" for English, "en-gb" for English (UK), "es" for Spanish etc. */
  language?: string;
  /** The list of synonyms. */
  values?: string[];
}

/** Represents an exported prebuilt entity component */
export interface TextAnalysisAuthoringExportedPrebuiltEntity {
  /** The prebuilt entity category. */
  category: string;
}

/** Represents an exported document for a CustomHealthcare project. */
export interface TextAnalysisAuthoringExportedCustomHealthcareDocument {
  /** The list of entity labels belonging to the document. */
  entities?: Array<TextAnalysisAuthoringExportedDocumentEntityRegion>;
  /** The location of the document in the storage. */
  location?: string;
  /** Represents the document language. This is BCP-47 representation of a language. For example, use "en" for English, "en-gb" for English (UK), "es" for Spanish etc. */
  language?: string;
  /** The dataset for this document. Allowed values are 'Train' and 'Test'. */
  dataset?: string;
}

/** Represents the exported assets for a custom multi-label classification project. */
export interface TextAnalysisAuthoringExportedCustomMultiLabelClassificationProjectAssets
  extends TextAnalysisAuthoringExportedProjectAssetsParent {
  /** The list of classes in the project. */
  classes?: Array<TextAnalysisAuthoringExportedClass>;
  /** The list of documents in the project. */
  documents?: Array<TextAnalysisAuthoringExportedCustomMultiLabelClassificationDocument>;
  /** The type of the project the assets belong to. */
  projectKind: "CustomMultiLabelClassification";
}

/** Represents a class of an exported project. */
export interface TextAnalysisAuthoringExportedClass {
  /** The class category. */
  category?: string;
}

/** Represents an exported document of a custom multi-label classification project. */
export interface TextAnalysisAuthoringExportedCustomMultiLabelClassificationDocument {
  /** The document classes. */
  classes?: Array<TextAnalysisAuthoringExportedDocumentClass>;
  /** The location of the document in the storage. */
  location?: string;
  /** Represents the document language. This is BCP-47 representation of a language. For example, use "en" for English, "en-gb" for English (UK), "es" for Spanish etc. */
  language?: string;
  /** The dataset for this document. Allowed values are 'Train' and 'Test'. */
  dataset?: string;
}

/** Represents a classification label for a document. */
export interface TextAnalysisAuthoringExportedDocumentClass {
  category?: string;
}

/** Represents the exported assets for a single-label classification project. */
export interface TextAnalysisAuthoringExportedCustomSingleLabelClassificationProjectAssets
  extends TextAnalysisAuthoringExportedProjectAssetsParent {
  /** The list of classes belonging to this project. */
  classes?: Array<TextAnalysisAuthoringExportedClass>;
  /** The list of documents belonging to this project. */
  documents?: Array<TextAnalysisAuthoringExportedCustomSingleLabelClassificationDocument>;
  /** The type of the project the assets belong to. */
  projectKind: "CustomSingleLabelClassification";
}

/** Represents an exported document for a custom single-label classification project. */
export interface TextAnalysisAuthoringExportedCustomSingleLabelClassificationDocument {
  /** The class of the documents. */
  class?: TextAnalysisAuthoringExportedDocumentClass;
  /** The location of the document in the storage. */
  location?: string;
  /** Represents the document language. This is BCP-47 representation of a language. For example, use "en" for English, "en-gb" for English (UK), "es" for Spanish etc. */
  language?: string;
  /** The dataset for this document. Allowed values are 'Train' and 'Test'. */
  dataset?: string;
}

/** Represents the exported assets for a custom text sentiment project. */
export interface TextAnalysisAuthoringExportedCustomTextSentimentProjectAssets
  extends TextAnalysisAuthoringExportedProjectAssetsParent {
  /** The list of documents belonging to the project. */
  documents?: Array<TextAnalysisAuthoringExportedCustomTextSentimentDocument>;
  /** The type of the project the assets belong to. */
  projectKind: "CustomTextSentiment";
}

/** Represents an exported document for a custom text sentiment project. */
export interface TextAnalysisAuthoringExportedCustomTextSentimentDocument {
  sentimentSpans?: Array<TextAnalysisAuthoringExportedDocumentSentimentLabel>;
  /** The location of the document in the storage. */
  location?: string;
  /** Represents the document language. This is BCP-47 representation of a language. For example, use "en" for English, "en-gb" for English (UK), "es" for Spanish etc. */
  language?: string;
  /** The dataset for this document. Allowed values are 'Train' and 'Test'. */
  dataset?: string;
}

/** Represents an entity label for a document. */
export interface TextAnalysisAuthoringExportedDocumentSentimentLabel {
  /**
   * The sentiment category.
   *
   * Possible values: "positive", "negative", "neutral"
   */
  category?: Sentiment;
  /** Start position for the sentiment text. */
  offset?: number;
  /** Length for the sentiment text. */
  length?: number;
}

/** Represents the options for starting a new training job. */
export interface TextAnalysisAuthoringTrainingJobOptions {
  /** Represents the output model label. */
  modelLabel: string;
  /** Represents training config version. */
  trainingConfigVersion: string;
  /** Represents the evaluation options. By default, the evaluation kind is percentage, with training split percentage as 80, and testing split percentage as 20. */
  evaluationOptions?: TextAnalysisAuthoringEvaluationOptions;
  /** Represents the settings for using data generation as part of training a custom model. */
  dataGenerationSettings?: TextAnalysisAuthoringDataGenerationSettings;
}

/** Represents the options used running the evaluation. */
export interface TextAnalysisAuthoringEvaluationOptions {
  /**
   * Represents the evaluation kind. By default, the evaluation kind is set to percentage.
   *
   * Possible values: "percentage", "manual"
   */
  kind?: EvaluationKind;
  /** Represents the training dataset split percentage. Only needed in case the evaluation kind is percentage. */
  trainingSplitPercentage?: number;
  /** Represents the testing dataset split percentage. Only needed in case the evaluation kind is percentage. */
  testingSplitPercentage?: number;
}

/** Represents the settings for using data generation as part of training a custom model. */
export interface TextAnalysisAuthoringDataGenerationSettings {
  /** If set to true, augment customer provided training data with synthetic data to improve model quality. */
  enableDataGeneration: boolean;
  /** Represents the connection info for the Azure resource to use during data generation as part of training a custom model. */
  dataGenerationConnectionInfo: TextAnalysisAuthoringDataGenerationConnectionInfo;
}

/** Represents the connection info for the Azure resource to use during data generation as part of training a custom model. */
export interface TextAnalysisAuthoringDataGenerationConnectionInfo {
  /** Connection type for data generation settings. Currently only supports Azure Open AI. */
  kind: "azureOpenAI";
  /** Resource ID for the data generation resource. Looks something like "/subscriptions/<SUBSCRIPTION-ID-GUID>/resourceGroups/<RG-NAME>/providers/Microsoft.CognitiveServices/accounts/<AOAI-ACCOUNT-NAME>". */
  resourceId: string;
  /** Deployment name of model to be used for synthetic data generation. */
  deploymentName: string;
}

/** Represents the options for creating or updating a project deployment. */
export interface TextAnalysisAuthoringCreateDeploymentOptions {
  /** Represents the trained model label. */
  trainedModelLabel: string;
  /** Represents the resource IDs to be assigned to the deployment. If provided, the deployment will be rolled out to the resources provided here as well as the original resource in which the project is created. */
  assignedResourceIds?: string[];
}

/** Represents the options for deleting a project deployment. */
export interface TextAnalysisAuthoringDeleteDeploymentOptions {
  /** Represents the resource IDs to delete the deployment from. If not provided, the deployment will be rolled out from all the resources it is deployed to. If provided, it will delete the deployment only from the specified assigned resources, and leave it for the rest. */
  assignedResourceIds?: string[];
}

/** Represents the options for swapping two deployments together. */
export interface TextAnalysisAuthoringSwapDeploymentsOptions {
  /** Represents the first deployment name. */
  firstDeploymentName: string;
  /** Represents the second deployment name. */
  secondDeploymentName: string;
}

/** Represents the options for creating or replacing an exported model. */
export interface TextAnalysisAuthoringExportedModelOptions {
  /** The trained model label. */
  trainedModelLabel: string;
}

/** Represents the options for assigning Azure resources to a project. */
export interface TextAnalysisAuthoringAssignDeploymentResourcesOptions {
  /** Represents the metadata for the resources to be assigned. */
  resourcesMetadata: Array<TextAnalysisAuthoringResourceMetadata>;
}

/** Represents metadata for the Azure resource.. */
export interface TextAnalysisAuthoringResourceMetadata {
  /** Represents the Azure resource ID. */
  azureResourceId: string;
  /** Represents the Azure resource custom domain. */
  customDomain: string;
  /** Represents the Azure resource region. */
  region: string;
}

/** Represents the options to unassign Azure resources from a project. */
export interface TextAnalysisAuthoringUnassignDeploymentResourcesOptions {
  /** Represents the assigned resource IDs to be unassigned. */
  assignedResourceIds: string[];
}

/** Represents the assets of an exported project. */
export type TextAnalysisAuthoringExportedProjectAssets =
  | TextAnalysisAuthoringExportedProjectAssetsParent
  | TextAnalysisAuthoringExportedCustomAbstractiveSummarizationProjectAssets
  | TextAnalysisAuthoringExportedCustomEntityRecognitionProjectAssets
  | TextAnalysisAuthoringExportedCustomHealthcareProjectAssets
  | TextAnalysisAuthoringExportedCustomMultiLabelClassificationProjectAssets
  | TextAnalysisAuthoringExportedCustomSingleLabelClassificationProjectAssets
  | TextAnalysisAuthoringExportedCustomTextSentimentProjectAssets;
/** Alias for ProjectKind */
export type ProjectKind = string;
/** Alias for StringIndexType */
export type StringIndexType = string;
/** Alias for CompositionSetting */
export type CompositionSetting = string;
/** Alias for Sentiment */
export type Sentiment = string;
/** Alias for EvaluationKind */
export type EvaluationKind = string;
