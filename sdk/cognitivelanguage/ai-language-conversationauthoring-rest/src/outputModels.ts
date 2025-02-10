// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Paged collection of AnalyzeConversationAuthoringProjectMetadata items */
export interface PagedAnalyzeConversationAuthoringProjectMetadataOutput {
  /** The AnalyzeConversationAuthoringProjectMetadata items on this page */
  value: Array<AnalyzeConversationAuthoringProjectMetadataOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Represents the metadata of a project. */
export interface AnalyzeConversationAuthoringProjectMetadataOutput {
  /** Represents the project creation datetime. */
  createdDateTime: string;
  /** Represents the project creation datetime. */
  lastModifiedDateTime: string;
  /** Represents the project last trained datetime. */
  lastTrainedDateTime?: string;
  /** Represents the project last deployed datetime. */
  lastDeployedDateTime?: string;
  /**
   * Represents the project kind.
   *
   * Possible values: "Conversation", "Orchestration", "CustomConversationSummarization"
   */
  projectKind: ProjectKindOutput;
  /** The project settings. */
  settings?: AnalyzeConversationAuthoringProjectSettingsOutput;
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

/** Represents the settings used to define the project behavior. */
export interface AnalyzeConversationAuthoringProjectSettingsOutput {
  /** The threshold of the intent with the highest confidence, at which the prediction will automatically be changed to "None". The value of the threshold should be between 0 and 1 inclusive. */
  confidenceThreshold: number;
}

/** Error response. */
export interface ErrorResponseOutput {
  /** The error object. */
  error: ErrorModelOutput;
}

/** The error object. */
export interface ErrorModelOutput {
  /**
   * One of a server-defined set of error codes.
   *
   * Possible values: "InvalidRequest", "InvalidArgument", "Unauthorized", "Forbidden", "NotFound", "ProjectNotFound", "OperationNotFound", "AzureCognitiveSearchNotFound", "AzureCognitiveSearchIndexNotFound", "TooManyRequests", "AzureCognitiveSearchThrottling", "AzureCognitiveSearchIndexLimitReached", "InternalServerError", "ServiceUnavailable", "Timeout", "QuotaExceeded", "Conflict", "Warning"
   */
  code: ErrorCodeOutput;
  /** A human-readable representation of the error. */
  message: string;
  /** The target of the error. */
  target?: string;
  /** An array of details about specific errors that led to this reported error. */
  details?: Array<ErrorModelOutput>;
  /**
   * An object containing more specific information than the current object about
   * the error.
   */
  innererror?: InnerErrorModelOutput;
}

/** An object containing more specific information about the error. As per Microsoft One API guidelines - https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md#7102-error-condition-responses. */
export interface InnerErrorModelOutput {
  /**
   * One of a server-defined set of error codes.
   *
   * Possible values: "InvalidRequest", "InvalidParameterValue", "KnowledgeBaseNotFound", "AzureCognitiveSearchNotFound", "AzureCognitiveSearchThrottling", "ExtractionFailure", "InvalidRequestBodyFormat", "EmptyRequest", "MissingInputDocuments", "InvalidDocument", "ModelVersionIncorrect", "InvalidDocumentBatch", "UnsupportedLanguageCode", "InvalidCountryHint"
   */
  code: InnerErrorCodeOutput;
  /** Error message. */
  message: string;
  /** Error details. */
  details?: Record<string, string>;
  /** Error target. */
  target?: string;
  /** An object containing more specific information than the current object about the error. */
  innererror?: InnerErrorModelOutput;
}

/** Represents the options for copying an existing project to another Azure resource. */
export interface AnalyzeConversationAuthoringCopyProjectOptionsOutput {
  /**
   * Represents the project kind.
   *
   * Possible values: "Conversation", "Orchestration", "CustomConversationSummarization"
   */
  projectKind: ProjectKindOutput;
  /** The project name to be copied-into. */
  targetProjectName: string;
  /** The access token. */
  accessToken: string;
  /** The expiration of the access token. */
  expiresAt: string;
  /** Represents the target Azure resource ID. */
  targetResourceId: string;
  /** Represents the target Azure resource region. */
  targetResourceRegion: string;
}

/** Represents the options used running the evaluation. */
export interface AnalyzeConversationAuthoringEvaluationOptionsOutput {
  /**
   * Represents the evaluation kind. By default, the evaluation kind is set to percentage.
   *
   * Possible values: "percentage", "manual"
   */
  kind?: EvaluationKindOutput;
  /** Represents the training dataset split percentage. Only needed in case the evaluation kind is percentage. */
  trainingSplitPercentage?: number;
  /** Represents the testing dataset split percentage. Only needed in case the evaluation kind is percentage. */
  testingSplitPercentage?: number;
}

/** Represents the state of a copy job. */
export interface AnalyzeConversationAuthoringCopyProjectJobStateOutput {
  /** The job ID. */
  readonly jobId: string;
  /** The creation date time of the job. */
  createdDateTime: string;
  /** The last date time the job was updated. */
  lastUpdatedDateTime: string;
  /** The expiration date time of the job. */
  expirationDateTime?: string;
  /**
   * The job status.
   *
   * Possible values: "notStarted", "running", "succeeded", "failed", "cancelled", "cancelling", "partiallyCompleted"
   */
  status: JobStatusOutput;
  /** The warnings that were encountered while executing the job. */
  warnings?: Array<WarningOutput>;
  /** The errors encountered while executing the job. */
  errors?: Array<ErrorModelOutput>;
}

/** Represents a warning that was encountered while executing the request. */
export interface WarningOutput {
  /** The warning code. */
  code: string;
  /** The warning message. */
  message: string;
}

/** Paged collection of AnalyzeConversationAuthoringProjectDeployment items */
export interface PagedAnalyzeConversationAuthoringProjectDeploymentOutput {
  /** The AnalyzeConversationAuthoringProjectDeployment items on this page */
  value: Array<AnalyzeConversationAuthoringProjectDeploymentOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Represents a project deployment. */
export interface AnalyzeConversationAuthoringProjectDeploymentOutput {
  /** Represents deployment name. */
  readonly deploymentName: string;
  /** Represents deployment modelId. */
  modelId: string;
  /** Represents deployment last trained time. */
  lastTrainedDateTime: string;
  /** Represents deployment last deployed time. */
  lastDeployedDateTime: string;
  /** Represents deployment expiration date in the runtime. */
  deploymentExpirationDate: string;
  /** Represents model training config version. */
  modelTrainingConfigVersion: string;
  /** Represents the metadata of the assigned Azure resources. */
  assignedResources: Array<AnalyzeConversationAuthoringDeploymentResourceOutput>;
}

/** Represents an Azure resource assigned to a deployment. */
export interface AnalyzeConversationAuthoringDeploymentResourceOutput {
  /** Represents the Azure resource Id. */
  resourceId: string;
  /** Represents the resource region. */
  region: string;
}

/** Represents the state of an existing delete deployment from specific resources job. */
export interface AnalyzeConversationAuthoringDeploymentDeleteFromResourcesJobStateOutput {
  /** The job ID. */
  readonly jobId: string;
  /** The creation date time of the job. */
  createdDateTime: string;
  /** The last date time the job was updated. */
  lastUpdatedDateTime: string;
  /** The expiration date time of the job. */
  expirationDateTime?: string;
  /**
   * The job status.
   *
   * Possible values: "notStarted", "running", "succeeded", "failed", "cancelled", "cancelling", "partiallyCompleted"
   */
  status: JobStatusOutput;
  /** The warnings that were encountered while executing the job. */
  warnings?: Array<WarningOutput>;
  /** The errors encountered while executing the job. */
  errors?: Array<ErrorModelOutput>;
}

/** Represents the state of a deployment job. */
export interface AnalyzeConversationAuthoringDeploymentJobStateOutput {
  /** The job ID. */
  readonly jobId: string;
  /** The creation date time of the job. */
  createdDateTime: string;
  /** The last date time the job was updated. */
  lastUpdatedDateTime: string;
  /** The expiration date time of the job. */
  expirationDateTime?: string;
  /**
   * The job status.
   *
   * Possible values: "notStarted", "running", "succeeded", "failed", "cancelled", "cancelling", "partiallyCompleted"
   */
  status: JobStatusOutput;
  /** The warnings that were encountered while executing the job. */
  warnings?: Array<WarningOutput>;
  /** The errors encountered while executing the job. */
  errors?: Array<ErrorModelOutput>;
}

/** Represents the state of a deployment job. */
export interface AnalyzeConversationAuthoringSwapDeploymentsJobStateOutput {
  /** The job ID. */
  readonly jobId: string;
  /** The creation date time of the job. */
  createdDateTime: string;
  /** The last date time the job was updated. */
  lastUpdatedDateTime: string;
  /** The expiration date time of the job. */
  expirationDateTime?: string;
  /**
   * The job status.
   *
   * Possible values: "notStarted", "running", "succeeded", "failed", "cancelled", "cancelling", "partiallyCompleted"
   */
  status: JobStatusOutput;
  /** The warnings that were encountered while executing the job. */
  warnings?: Array<WarningOutput>;
  /** The errors encountered while executing the job. */
  errors?: Array<ErrorModelOutput>;
}

/** Represents the state of an export job. */
export interface AnalyzeConversationAuthoringExportProjectJobStateOutput {
  /** The job ID. */
  readonly jobId: string;
  /** The creation date time of the job. */
  createdDateTime: string;
  /** The last date time the job was updated. */
  lastUpdatedDateTime: string;
  /** The expiration date time of the job. */
  expirationDateTime?: string;
  /**
   * The job status.
   *
   * Possible values: "notStarted", "running", "succeeded", "failed", "cancelled", "cancelling", "partiallyCompleted"
   */
  status: JobStatusOutput;
  /** The warnings that were encountered while executing the job. */
  warnings?: Array<WarningOutput>;
  /** The errors encountered while executing the job. */
  errors?: Array<ErrorModelOutput>;
  /** The URL to use in order to download the exported project. */
  resultUrl?: string;
}

/** Represents the state of an import job. */
export interface AnalyzeConversationAuthoringImportProjectJobStateOutput {
  /** The job ID. */
  readonly jobId: string;
  /** The creation date time of the job. */
  createdDateTime: string;
  /** The last date time the job was updated. */
  lastUpdatedDateTime: string;
  /** The expiration date time of the job. */
  expirationDateTime?: string;
  /**
   * The job status.
   *
   * Possible values: "notStarted", "running", "succeeded", "failed", "cancelled", "cancelling", "partiallyCompleted"
   */
  status: JobStatusOutput;
  /** The warnings that were encountered while executing the job. */
  warnings?: Array<WarningOutput>;
  /** The errors encountered while executing the job. */
  errors?: Array<ErrorModelOutput>;
}

/** Paged collection of AnalyzeConversationAuthoringProjectTrainedModel items */
export interface PagedAnalyzeConversationAuthoringProjectTrainedModelOutput {
  /** The AnalyzeConversationAuthoringProjectTrainedModel items on this page */
  value: Array<AnalyzeConversationAuthoringProjectTrainedModelOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Represents a trained model. */
export interface AnalyzeConversationAuthoringProjectTrainedModelOutput {
  /** The trained model label. */
  readonly label: string;
  /** The model ID. */
  modelId: string;
  /** The last trained date time of the model. */
  lastTrainedDateTime: string;
  /** The duration of the model's last training request in seconds. */
  lastTrainingDurationInSeconds: number;
  /** The model expiration date. */
  modelExpirationDate: string;
  /** The model training config version. */
  modelTrainingConfigVersion: string;
  /** The flag to indicate if the trained model has a snapshot ready. */
  hasSnapshot: boolean;
}

/** Represents the state of a evaluation job. */
export interface AnalyzeConversationAuthoringEvaluationJobStateOutput {
  /** The job ID. */
  readonly jobId: string;
  /** The creation date time of the job. */
  createdDateTime: string;
  /** The last date time the job was updated. */
  lastUpdatedDateTime: string;
  /** The expiration date time of the job. */
  expirationDateTime?: string;
  /**
   * The job status.
   *
   * Possible values: "notStarted", "running", "succeeded", "failed", "cancelled", "cancelling", "partiallyCompleted"
   */
  status: JobStatusOutput;
  /** The warnings that were encountered while executing the job. */
  warnings?: Array<WarningOutput>;
  /** The errors encountered while executing the job. */
  errors?: Array<ErrorModelOutput>;
  /** Represents evaluation task detailed result. */
  result: AnalyzeConversationAuthoringEvaluationJobResultOutput;
}

export interface AnalyzeConversationAuthoringEvaluationJobResultOutput {
  /** Represents the options used running the evaluation. */
  evaluationOptions: AnalyzeConversationAuthoringEvaluationOptionsOutput;
  /** Represents trained model label. */
  modelLabel: string;
  /** Represents training config version. */
  trainingConfigVersion: string;
  /** Represents progress percentage. */
  percentComplete: number;
}

/** Paged collection of AnalyzeConversationAuthoringUtteranceEvaluationResult items */
export interface PagedAnalyzeConversationAuthoringUtteranceEvaluationResultOutput {
  /** The AnalyzeConversationAuthoringUtteranceEvaluationResult items on this page */
  value: Array<AnalyzeConversationAuthoringUtteranceEvaluationResultOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Represents the evaluation result for an utterance. */
export interface AnalyzeConversationAuthoringUtteranceEvaluationResultOutput {
  /** Represents the utterance text. */
  readonly text: string;
  /** Represents the utterance language. This is BCP-47 representation of a language. For example, use "en" for English, "en-gb" for English (UK), "es" for Spanish etc. */
  language: string;
  /** Represents the entities results for the utterance. */
  entitiesResult: AnalyzeConversationAuthoringUtteranceEntitiesEvaluationResultOutput;
  /** Represents the intents results for the utterance. */
  intentsResult: AnalyzeConversationAuthoringUtteranceIntentsEvaluationResultOutput;
}

/** Represents the comparison between the expected and predicted entities for an utterance. */
export interface AnalyzeConversationAuthoringUtteranceEntitiesEvaluationResultOutput {
  /** Represents the expected entity labels. */
  expectedEntities: Array<AnalyzeConversationAuthoringUtteranceEntityEvaluationResultOutput>;
  /** Represents the predicted entity labels. */
  predictedEntities: Array<AnalyzeConversationAuthoringUtteranceEntityEvaluationResultOutput>;
}

/** Represents the evaluation output of an entity label or prediction. */
export interface AnalyzeConversationAuthoringUtteranceEntityEvaluationResultOutput {
  /** Represents the entity category. */
  category: string;
  /** Represents the entity offset index relative to the original text. */
  offset: number;
  /** Represents the entity length. */
  length: number;
}

/** Represents the comparison between the expected and the predicted intent for an utterance. */
export interface AnalyzeConversationAuthoringUtteranceIntentsEvaluationResultOutput {
  /** Represents the utterance's expected intent. */
  expectedIntent: string;
  /** Represents the utterance's predicted intent. */
  predictedIntent: string;
}

/** Represents the evaluation result summary. */
export interface AnalyzeConversationAuthoringEvaluationSummaryOutput {
  /** Contains the data related to entities evaluation. */
  entitiesEvaluation: AnalyzeConversationAuthoringEntitiesEvaluationSummaryOutput;
  /** Contains the data related to intents evaluation. */
  intentsEvaluation: AnalyzeConversationAuthoringIntentsEvaluationSummaryOutput;
  /** The options that were used while running the evaluation. */
  evaluationOptions?: AnalyzeConversationAuthoringEvaluationOptionsOutput;
}

/** Represents the evaluation result summary for the project's entities. */
export interface AnalyzeConversationAuthoringEntitiesEvaluationSummaryOutput {
  /** Represents the confusion matrix between two entities (the two entities can be the same). The matrix is between the entity that was labelled and the entity that was predicted. */
  confusionMatrix: AnalyzeConversationAuthoringConfusionMatrixOutput;
  /** Represents the entities evaluation summary. */
  entities: Record<string, AnalyzeConversationAuthoringEntityEvaluationSummaryOutput>;
  /** Represents the micro F1. Expected value is a float between 0 and 1 inclusive. */
  microF1: number;
  /** Represents the micro precision. Expected value is a float between 0 and 1 inclusive. */
  microPrecision: number;
  /** Represents the micro recall. Expected value is a float between 0 and 1 inclusive. */
  microRecall: number;
  /** Represents the macro F1. Expected value is a float between 0 and 1 inclusive. */
  macroF1: number;
  /** Represents the macro precision. Expected value is a float between 0 and 1 inclusive. */
  macroPrecision: number;
  /** Represents the macro recall. Expected value is a float between 0 and 1 inclusive. */
  macroRecall: number;
}

export interface AnalyzeConversationAuthoringConfusionMatrixOutput
  extends Record<string, AnalyzeConversationAuthoringConfusionMatrixRowOutput> {}

export interface AnalyzeConversationAuthoringConfusionMatrixRowOutput
  extends Record<string, AnalyzeConversationAuthoringConfusionMatrixCellOutput> {}

/** Represents a cell in a confusion matrix. */
export interface AnalyzeConversationAuthoringConfusionMatrixCellOutput {
  /** Represents normalized value in percentages. */
  normalizedValue: number;
  /** Represents raw value. */
  rawValue: number;
}

/** Represents the evaluation result for an entity. */
export interface AnalyzeConversationAuthoringEntityEvaluationSummaryOutput {
  /** Represents the model precision */
  f1: number;
  /** Represents the model recall */
  precision: number;
  /** Represents the model F1 score */
  recall: number;
  /** Represents the count of true positive */
  truePositiveCount: number;
  /** Represents the count of true negative */
  trueNegativeCount: number;
  /** Represents the count of false positive */
  falsePositiveCount: number;
  /** Represents the count of false negative */
  falseNegativeCount: number;
}

/** Represents the evaluation summary for the project's intents. */
export interface AnalyzeConversationAuthoringIntentsEvaluationSummaryOutput {
  /** Represents the confusion matrix between two intents (the two intents can be the same). The matrix is between the intent that was labelled and the intent that was predicted. */
  confusionMatrix: AnalyzeConversationAuthoringConfusionMatrixOutput;
  /** Represents the intents evaluation summary. */
  intents: Record<string, AnalyzeConversationAuthoringIntentEvaluationSummaryOutput>;
  /** Represents the micro F1. Expected value is a float between 0 and 1 inclusive. */
  microF1: number;
  /** Represents the micro precision. Expected value is a float between 0 and 1 inclusive. */
  microPrecision: number;
  /** Represents the micro recall. Expected value is a float between 0 and 1 inclusive. */
  microRecall: number;
  /** Represents the macro F1. Expected value is a float between 0 and 1 inclusive. */
  macroF1: number;
  /** Represents the macro precision. Expected value is a float between 0 and 1 inclusive. */
  macroPrecision: number;
  /** Represents the macro recall. Expected value is a float between 0 and 1 inclusive. */
  macroRecall: number;
}

/** The evaluation summary for an intent. */
export interface AnalyzeConversationAuthoringIntentEvaluationSummaryOutput {
  /** Represents the model precision */
  f1: number;
  /** Represents the model recall */
  precision: number;
  /** Represents the model F1 score */
  recall: number;
  /** Represents the count of true positive */
  truePositiveCount: number;
  /** Represents the count of true negative */
  trueNegativeCount: number;
  /** Represents the count of false positive */
  falsePositiveCount: number;
  /** Represents the count of false negative */
  falseNegativeCount: number;
}

/** Represents the state of loading a snapshot job. */
export interface AnalyzeConversationAuthoringLoadSnapshotJobStateOutput {
  /** The job ID. */
  readonly jobId: string;
  /** The creation date time of the job. */
  createdDateTime: string;
  /** The last date time the job was updated. */
  lastUpdatedDateTime: string;
  /** The expiration date time of the job. */
  expirationDateTime?: string;
  /**
   * The job status.
   *
   * Possible values: "notStarted", "running", "succeeded", "failed", "cancelled", "cancelling", "partiallyCompleted"
   */
  status: JobStatusOutput;
  /** The warnings that were encountered while executing the job. */
  warnings?: Array<WarningOutput>;
  /** The errors encountered while executing the job. */
  errors?: Array<ErrorModelOutput>;
}

/** Paged collection of AnalyzeConversationAuthoringAssignedDeploymentResource items */
export interface PagedAnalyzeConversationAuthoringAssignedDeploymentResourceOutput {
  /** The AnalyzeConversationAuthoringAssignedDeploymentResource items on this page */
  value: Array<AnalyzeConversationAuthoringAssignedDeploymentResourceOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Represents the assigned deployment resource. */
export interface AnalyzeConversationAuthoringAssignedDeploymentResourceOutput {
  /** The resource ID. */
  readonly azureResourceId: string;
  /** The resource region. */
  region: string;
}

/** Represents the state of a deployment resources job. */
export interface AnalyzeConversationAuthoringDeploymentResourcesJobStateOutput {
  /** The job ID. */
  readonly jobId: string;
  /** The creation date time of the job. */
  createdDateTime: string;
  /** The last date time the job was updated. */
  lastUpdatedDateTime: string;
  /** The expiration date time of the job. */
  expirationDateTime?: string;
  /**
   * The job status.
   *
   * Possible values: "notStarted", "running", "succeeded", "failed", "cancelled", "cancelling", "partiallyCompleted"
   */
  status: JobStatusOutput;
  /** The warnings that were encountered while executing the job. */
  warnings?: Array<WarningOutput>;
  /** The errors encountered while executing the job. */
  errors?: Array<ErrorModelOutput>;
}

/** Paged collection of AnalyzeConversationAuthoringTrainingJobState items */
export interface PagedAnalyzeConversationAuthoringTrainingJobStateOutput {
  /** The AnalyzeConversationAuthoringTrainingJobState items on this page */
  value: Array<AnalyzeConversationAuthoringTrainingJobStateOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Represents the state of a training job. */
export interface AnalyzeConversationAuthoringTrainingJobStateOutput {
  /** The job ID. */
  readonly jobId: string;
  /** The creation date time of the job. */
  createdDateTime: string;
  /** The last date time the job was updated. */
  lastUpdatedDateTime: string;
  /** The expiration date time of the job. */
  expirationDateTime?: string;
  /**
   * The job status.
   *
   * Possible values: "notStarted", "running", "succeeded", "failed", "cancelled", "cancelling", "partiallyCompleted"
   */
  status: JobStatusOutput;
  /** The warnings that were encountered while executing the job. */
  warnings?: Array<WarningOutput>;
  /** The errors encountered while executing the job. */
  errors?: Array<ErrorModelOutput>;
  /** Represents training tasks detailed result. */
  result: AnalyzeConversationAuthoringTrainingJobResultOutput;
}

/** Represents the output of a training job. */
export interface AnalyzeConversationAuthoringTrainingJobResultOutput {
  /** Represents trained model label. */
  modelLabel: string;
  /** Represents training config version. */
  trainingConfigVersion: string;
  /**
   * Represents the mode of the training operation.
   *
   * Possible values: "advanced", "standard"
   */
  trainingMode?: TrainingModeOutput;
  /** Represents the model training status. */
  trainingStatus: AnalyzeConversationAuthoringSubTrainingJobStateOutput;
  /** Represents model evaluation status. */
  evaluationStatus?: AnalyzeConversationAuthoringSubTrainingJobStateOutput;
  /** Represents the estimated end date time for training and evaluation. */
  estimatedEndDateTime?: string;
}

/** Represents the detailed state of a training sub-operation. */
export interface AnalyzeConversationAuthoringSubTrainingJobStateOutput {
  /** Represents progress percentage. */
  percentComplete: number;
  /** Represents the start date time. */
  startDateTime?: string;
  /** Represents the end date time. */
  endDateTime?: string;
  /**
   * Represents the status of the sub-operation.
   *
   * Possible values: "notStarted", "running", "succeeded", "failed", "cancelled", "cancelling", "partiallyCompleted"
   */
  status: JobStatusOutput;
}

/** Represents the state of a project deletion job. */
export interface AnalyzeConversationAuthoringProjectDeletionJobStateOutput {
  /** The job ID. */
  readonly jobId: string;
  /** The creation date time of the job. */
  createdDateTime: string;
  /** The last date time the job was updated. */
  lastUpdatedDateTime: string;
  /** The expiration date time of the job. */
  expirationDateTime?: string;
  /**
   * The job status.
   *
   * Possible values: "notStarted", "running", "succeeded", "failed", "cancelled", "cancelling", "partiallyCompleted"
   */
  status: JobStatusOutput;
  /** The warnings that were encountered while executing the job. */
  warnings?: Array<WarningOutput>;
  /** The errors encountered while executing the job. */
  errors?: Array<ErrorModelOutput>;
}

/** Represents the metadata for deployments assigned to a resource. */
export interface AnalyzeConversationAuthoringAssignedResourceDeploymentsMetadataOutput {
  /** The list of retrieved assigned project deployments. */
  value: Array<AnalyzeConversationAuthoringAssignedProjectDeploymentsMetadataOutput>;
  /** The next page link. */
  nextLink?: string;
}

/** Represents the metadata for assigned deployments for a project. */
export interface AnalyzeConversationAuthoringAssignedProjectDeploymentsMetadataOutput {
  /** Represents the project name. */
  projectName: string;
  /** Represents the resource region. */
  deploymentsMetadata: Array<AnalyzeConversationAuthoringAssignedProjectDeploymentMetadataOutput>;
}

/** Represents the metadata for an assigned deployment */
export interface AnalyzeConversationAuthoringAssignedProjectDeploymentMetadataOutput {
  /** Represents the deployment name. */
  deploymentName: string;
  /** Represents deployment last deployed time. */
  lastDeployedDateTime: string;
  /** Represents deployment expiration date in the runtime. */
  deploymentExpirationDate: string;
}

/** Represents a list of retrieved languages. */
export interface AnalyzeConversationAuthoringSupportedLanguagesOutput {
  /** The list of the languages. */
  value: Array<AnalyzeConversationAuthoringSupportedLanguageOutput>;
  /** The next page link. */
  nextLink?: string;
}

/** Represents a supported language. */
export interface AnalyzeConversationAuthoringSupportedLanguageOutput {
  /** The language name. */
  languageName: string;
  /** The language code. This is BCP-47 representation of a language. For example, "en" for English, "en-gb" for English (UK), "es" for Spanish etc. */
  languageCode: string;
}

/** Represents a list of the retrieved supported prebuilt entities. */
export interface AnalyzeConversationAuthoringPrebuiltEntitiesOutput {
  /** The supported prebuilt entities. */
  value: Array<AnalyzeConversationAuthoringPrebuiltEntityOutput>;
  /** The next page link. */
  nextLink?: string;
}

/** Represents a supported prebuilt entity. */
export interface AnalyzeConversationAuthoringPrebuiltEntityOutput {
  /** The prebuilt entity category. */
  category: string;
  /** The description. */
  description: string;
  /** English examples for the entity. */
  examples: string;
}

/** Represents a list of training config versions. */
export interface AnalyzeConversationAuthoringTrainingConfigVersionsOutput {
  /** The list of the training config versions. */
  value: Array<AnalyzeConversationAuthoringTrainingConfigVersionOutput>;
  /** The next page link. */
  nextLink?: string;
}

/** Represents a training config version. */
export interface AnalyzeConversationAuthoringTrainingConfigVersionOutput {
  /** Represents the version of the config. */
  trainingConfigVersion: string;
  /** Represents the training config version expiration date. */
  modelExpirationDate: string;
}

/** Represents an exported trained model. */
export interface AnalyzeConversationAuthoringExportedTrainedModelOutput {
  /** The exported model name. */
  readonly exportedModelName: string;
  /** The model ID. */
  modelId: string;
  /** The last trained date time of the model. */
  lastTrainedDateTime: string;
  /** The last exported date time of the model. */
  lastExportedModelDateTime: string;
  /** The model expiration date. */
  modelExpirationDate: string;
  /** The model training config version. */
  modelTrainingConfigVersion: string;
}

/** Paged collection of AnalyzeConversationAuthoringExportedTrainedModel items */
export interface PagedAnalyzeConversationAuthoringExportedTrainedModelOutput {
  /** The AnalyzeConversationAuthoringExportedTrainedModel items on this page */
  value: Array<AnalyzeConversationAuthoringExportedTrainedModelOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Represents the state of a job to create or updated an exported model. */
export interface AnalyzeConversationAuthoringExportedModelJobStateOutput {
  /** The job ID. */
  readonly jobId: string;
  /** The creation date time of the job. */
  createdDateTime: string;
  /** The last date time the job was updated. */
  lastUpdatedDateTime: string;
  /** The expiration date time of the job. */
  expirationDateTime?: string;
  /**
   * The job status.
   *
   * Possible values: "notStarted", "running", "succeeded", "failed", "cancelled", "cancelling", "partiallyCompleted"
   */
  status: JobStatusOutput;
  /** The warnings that were encountered while executing the job. */
  warnings?: Array<WarningOutput>;
  /** The errors encountered while executing the job. */
  errors?: Array<ErrorModelOutput>;
}

/** Alias for ProjectKindOutput */
export type ProjectKindOutput = string;
/** Alias for ErrorCodeOutput */
export type ErrorCodeOutput = string;
/** Alias for InnerErrorCodeOutput */
export type InnerErrorCodeOutput = string;
/** Alias for TrainingModeOutput */
export type TrainingModeOutput = string;
/** Alias for EvaluationKindOutput */
export type EvaluationKindOutput = string;
/** Alias for JobStatusOutput */
export type JobStatusOutput = string;
