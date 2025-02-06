// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Represents the settings used to define the project behavior. */
export interface AnalyzeConversationAuthoringProjectSettings {
  /** The threshold of the intent with the highest confidence, at which the prediction will automatically be changed to "None". The value of the threshold should be between 0 and 1 inclusive. */
  confidenceThreshold: number;
}

/** Represents the options used to create or update a project. */
export interface AnalyzeConversationAuthoringCreateProjectOptions {
  /**
   * Represents the project kind.
   *
   * Possible values: "Conversation", "Orchestration", "CustomConversationSummarization"
   */
  projectKind: ProjectKind;
  /** The project settings. */
  settings?: AnalyzeConversationAuthoringProjectSettings;
  /** The storage container name in case of conversation summarization. */
  storageInputContainerName?: string;
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
export interface AnalyzeConversationAuthoringCopyAuthorizationOptions {
  /**
   * Represents the project kind.
   *
   * Possible values: "Conversation", "Orchestration", "CustomConversationSummarization"
   */
  projectKind: ProjectKind;
  /** The name of the storage container. */
  storageInputContainerName?: string;
  /** Whether to allow an existing project to be overwritten using the resulting copy authorization. */
  allowOverwrite?: boolean;
}

/** Represents the options for copying an existing project to another Azure resource. */
export interface AnalyzeConversationAuthoringCopyProjectOptions {
  /**
   * Represents the project kind.
   *
   * Possible values: "Conversation", "Orchestration", "CustomConversationSummarization"
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
export interface AnalyzeConversationAuthoringExportedProject {
  /** The version of the exported file. */
  projectFileVersion: string;
  /**
   * Specifies the method used to interpret string offsets. For additional information see https://aka.ms/text-analytics-offsets.
   *
   * Possible values: "Utf16CodeUnit"
   */
  stringIndexType: StringIndexType;
  /** Represents the project metadata. */
  metadata: AnalyzeConversationAuthoringCreateProjectOptions;
  /** Represents the project assets. */
  assets?: AnalyzeConversationAuthoringExportedProjectAssets;
}

/** Represents the assets of an exported project. */
export interface AnalyzeConversationAuthoringExportedProjectAssetsParent {
  projectKind: ProjectKind;
}

/** Represents the exported assets of a conversational project. */
export interface AnalyzeConversationAuthoringConversationExportedProjectAssets
  extends AnalyzeConversationAuthoringExportedProjectAssetsParent {
  /** The intents defined in the project. */
  intents?: Array<AnalyzeConversationAuthoringConversationExportedIntent>;
  /** The entities defined in the project. */
  entities?: Array<AnalyzeConversationAuthoringConversationExportedEntity>;
  /** The utterances defined in the project. */
  utterances?: Array<AnalyzeConversationAuthoringConversationExportedUtterance>;
  /** The type of project containing the assets. */
  projectKind: "Conversation";
}

/** Represents an exported intent of a conversational project. */
export interface AnalyzeConversationAuthoringConversationExportedIntent {
  /** The intent category. */
  category: string;
}

/** Represents an entity with its components. */
export interface AnalyzeConversationAuthoringConversationExportedEntity {
  /** The category of the entity. */
  category: string;
  /**
   * The behavior to follow when the entity's components overlap with each other.
   *
   * Possible values: "returnLongestOverlap", "requireExactOverlap", "separateComponents", "combineComponents"
   */
  compositionSetting?: CompositionSetting;
  /** The list component of the entity. */
  list?: AnalyzeConversationAuthoringExportedEntityList;
  /** The prebuilt entities components. */
  prebuilts?: Array<AnalyzeConversationAuthoringExportedPrebuiltEntity>;
  /** The regex component of the entity. */
  regex?: AnalyzeConversationAuthoringExportedEntityRegex;
  /** The required components. Allowed values are 'learned', 'list', 'prebuilts' and 'regex'. */
  requiredComponents?: string[];
}

/** Represents a list component of an entity. */
export interface AnalyzeConversationAuthoringExportedEntityList {
  /** The sub-lists of the list component. */
  sublists?: Array<AnalyzeConversationAuthoringExportedEntitySublist>;
}

/** Represents a sub-list inside a list component. */
export interface AnalyzeConversationAuthoringExportedEntitySublist {
  /** The key of the sub-list. */
  listKey?: string;
  /** The phrases of that correspond to the sub-list. */
  synonyms?: Array<AnalyzeConversationAuthoringExportedEntityListSynonym>;
}

/** Represents a list of synonyms inside a list component */
export interface AnalyzeConversationAuthoringExportedEntityListSynonym {
  /** Represents the language of the synonyms. This is BCP-47 representation of a language. For example, use "en" for English, "en-gb" for English (UK), "es" for Spanish etc. */
  language?: string;
  /** The list of synonyms. */
  values?: string[];
}

/** Represents an exported prebuilt entity component */
export interface AnalyzeConversationAuthoringExportedPrebuiltEntity {
  /** The prebuilt entity category. */
  category: string;
}

/** Represents a regex component of an entity. */
export interface AnalyzeConversationAuthoringExportedEntityRegex {
  /** The regex expressions of the regex component. These expressions follow the .NET regex syntax. For reference, check here: https://learn.microsoft.com/dotnet/standard/base-types/regular-expressions */
  expressions?: Array<AnalyzeConversationAuthoringExportedEntityRegexExpression>;
}

/** Represents a regex expression inside a regex component. This expression follows the .NET regex syntax. For reference, check here: https://learn.microsoft.com/dotnet/standard/base-types/regular-expressions */
export interface AnalyzeConversationAuthoringExportedEntityRegexExpression {
  /** The key of the regex expression. */
  regexKey?: string;
  /** Represents the language of the regex expression. This is BCP-47 representation of a language. For example, use "en" for English, "en-gb" for English (UK), "es" for Spanish etc. */
  language?: string;
  /** The regex pattern. */
  regexPattern?: string;
}

/** Represents an exported utterance for a conversational project. */
export interface AnalyzeConversationAuthoringConversationExportedUtterance {
  /** Represents the entity labels of the utterance. */
  entities?: Array<AnalyzeConversationAuthoringExportedUtteranceEntityLabel>;
  /** The utterance text. */
  text: string;
  /** Represents the utterance's language. This is BCP-47 representation of a language. For example, use "en" for English, "en-gb" for English (UK), "es" for Spanish etc. */
  language?: string;
  /** The intent of the utterance. */
  intent: string;
  /** The dataset for this utterance. Allowed values are 'Train' and 'Test'. */
  dataset?: string;
}

/** Represents an entity label for an utterance. */
export interface AnalyzeConversationAuthoringExportedUtteranceEntityLabel {
  /** The category of the entity label. */
  category: string;
  /** Start position for the entity text. */
  offset: number;
  /** Length for the entity text. */
  length: number;
}

/** Represents the assets of an orchestration project. */
export interface AnalyzeConversationAuthoringOrchestrationExportedProjectAssets
  extends AnalyzeConversationAuthoringExportedProjectAssetsParent {
  /** Represents the intents of the project. */
  intents?: Array<AnalyzeConversationAuthoringOrchestrationExportedIntent>;
  /** Represents the utterances of the project. */
  utterances?: Array<AnalyzeConversationAuthoringOrchestrationExportedUtterance>;
  /** The type of project containing the assets. */
  projectKind: "Orchestration";
}

/** Represents an exported intent for an orchestration project. */
export interface AnalyzeConversationAuthoringOrchestrationExportedIntent {
  /** Specifies the behavior of this intent in the orchestration flow. */
  orchestration?: AnalyzeConversationAuthoringExportedOrchestrationOptions;
  /** The intent category. */
  category: string;
}

/** Represents the options used to define the orchestration behavior of an intent. */
export interface AnalyzeConversationAuthoringExportedOrchestrationOptionsParent {
  targetProjectKind: OrchestrationTargetProjectKind;
}

/** Represents the orchestration options for a Conversational project target. */
export interface AnalyzeConversationAuthoringExportedConversationOrchestrationOptions
  extends AnalyzeConversationAuthoringExportedOrchestrationOptionsParent {
  /** The Conversational project target details. */
  conversationOrchestration: AnalyzeConversationAuthoringExportedConversationOrchestration;
  /** The kind of the target used in the orchestration flow. */
  targetProjectKind: "Conversation";
}

/** Defines the orchestration details for a Conversational project target. */
export interface AnalyzeConversationAuthoringExportedConversationOrchestration {
  /** The name of the targeted project. */
  projectName: string;
  /** The name of the targeted deployment. */
  deploymentName: string;
}

/** Represents the orchestration options for a LUIS application target. */
export interface AnalyzeConversationAuthoringExportedLuisOrchestrationOptions
  extends AnalyzeConversationAuthoringExportedOrchestrationOptionsParent {
  /** The LUIS application target details. */
  luisOrchestration: AnalyzeConversationAuthoringExportedLuisOrchestration;
  /** The kind of the target used in the orchestration flow. */
  targetProjectKind: "Luis";
}

/** Defines the orchestration details for a LUIS application target. */
export interface AnalyzeConversationAuthoringExportedLuisOrchestration {
  /** The LUIS application ID. */
  appId: string;
  /** The targeted version Id. */
  appVersion?: string;
  /** The targeted slot name. */
  slotName?: string;
}

/** Represents the orchestration options for a Question Answering project target. */
export interface AnalyzeConversationAuthoringExportedQuestionAnsweringOrchestrationOptions
  extends AnalyzeConversationAuthoringExportedOrchestrationOptionsParent {
  /** The Question Answering project details. */
  questionAnsweringOrchestration: AnalyzeConversationAuthoringExportedQuestionAnsweringOrchestration;
  /** The kind of the target used in the orchestration flow. */
  targetProjectKind: "QuestionAnswering";
}

/** Defines the orchestration details for a Question Answering project target. */
export interface AnalyzeConversationAuthoringExportedQuestionAnsweringOrchestration {
  /** The name of the target project. */
  projectName: string;
}

/** Represents an utterance of an orchestration project. */
export interface AnalyzeConversationAuthoringOrchestrationExportedUtterance {
  /** The utterance text. */
  text: string;
  /** Represents the utterance's language. This is BCP-47 representation of a language. For example, use "en" for English, "en-gb" for English (UK), "es" for Spanish etc. */
  language?: string;
  /** The intent of the utterance. */
  intent: string;
  /** The dataset for this utterance. Allowed values are 'Train' and 'Test'. */
  dataset?: string;
}

/** Represents the options for starting a new training job. */
export interface AnalyzeConversationAuthoringTrainingJobOptions {
  /** Represents the output model label. */
  modelLabel: string;
  /** Represents training config version. By default, "latest" value is used which uses the latest released training config version. */
  trainingConfigVersion?: string;
  /**
   * Represents the mode of the training operation.
   *
   * Possible values: "advanced", "standard"
   */
  trainingMode: TrainingMode;
  /** Represents the evaluation options. By default, the evaluation kind is percentage, with training split percentage as 80, and testing split percentage as 20. */
  evaluationOptions?: AnalyzeConversationAuthoringEvaluationOptions;
}

/** Represents the options used running the evaluation. */
export interface AnalyzeConversationAuthoringEvaluationOptions {
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

/** Represents the options for swapping two deployments together. */
export interface AnalyzeConversationAuthoringSwapDeploymentsOptions {
  /** Represents the first deployment name. */
  firstDeploymentName: string;
  /** Represents the second deployment name. */
  secondDeploymentName: string;
}

/** Represents the options for creating or updating a project deployment. */
export interface AnalyzeConversationAuthoringCreateDeploymentOptions {
  /** Represents the trained model label. */
  trainedModelLabel: string;
  /** Represents the resource IDs to be assigned to the deployment. If provided, the deployment will be rolled out to the resources provided here as well as the original resource in which the project is created. */
  assignedResourceIds?: string[];
}

/** Represents the options for deleting a project deployment. */
export interface AnalyzeConversationAuthoringDeleteDeploymentOptions {
  /** Represents the resource IDs to delete the deployment from. If not provided, the deployment will be rolled out from all the resources it is deployed to. If provided, it will delete the deployment only from the specified assigned resources, and leave it for the rest. */
  assignedResourceIds?: string[];
}

/** Represents the options for assigning Azure resources to a project. */
export interface AnalyzeConversationAuthoringAssignDeploymentResourcesOptions {
  /** Represents the metadata for the resources to be assigned. */
  resourcesMetadata: Array<AnalyzeConversationAuthoringResourceMetadata>;
}

/** Represents metadata for the Azure resource.. */
export interface AnalyzeConversationAuthoringResourceMetadata {
  /** Represents the Azure resource ID. */
  azureResourceId: string;
  /** Represents the Azure resource custom domain. */
  customDomain: string;
  /** Represents the Azure resource region. */
  region: string;
}

/** Represents the options to unassign Azure resources from a project. */
export interface AnalyzeConversationAuthoringUnassignDeploymentResourcesOptions {
  /** Represents the assigned resource IDs to be unassigned. */
  assignedResourceIds: string[];
}

/** Represents the options for creating or replacing an exported model. */
export interface ExportedModelOptions {
  /** The trained model label. */
  trainedModelLabel: string;
}

/** Represents the assets of an exported project. */
export type AnalyzeConversationAuthoringExportedProjectAssets =
  | AnalyzeConversationAuthoringExportedProjectAssetsParent
  | AnalyzeConversationAuthoringConversationExportedProjectAssets
  | AnalyzeConversationAuthoringOrchestrationExportedProjectAssets;
/** Represents the options used to define the orchestration behavior of an intent. */
export type AnalyzeConversationAuthoringExportedOrchestrationOptions =
  | AnalyzeConversationAuthoringExportedOrchestrationOptionsParent
  | AnalyzeConversationAuthoringExportedConversationOrchestrationOptions
  | AnalyzeConversationAuthoringExportedLuisOrchestrationOptions
  | AnalyzeConversationAuthoringExportedQuestionAnsweringOrchestrationOptions;
/** Alias for ProjectKind */
export type ProjectKind = string;
/** Alias for ExportedProjectFormat */
export type ExportedProjectFormat = string;
/** Alias for StringIndexType */
export type StringIndexType = string;
/** Alias for CompositionSetting */
export type CompositionSetting = string;
/** Alias for OrchestrationTargetProjectKind */
export type OrchestrationTargetProjectKind = string;
/** Alias for TrainingMode */
export type TrainingMode = string;
/** Alias for EvaluationKind */
export type EvaluationKind = string;
