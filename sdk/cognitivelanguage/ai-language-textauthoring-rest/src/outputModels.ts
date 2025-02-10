// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Paged collection of TextAnalysisAuthoringProjectMetadata items */
export interface PagedTextAnalysisAuthoringProjectMetadataOutput {
  /** The TextAnalysisAuthoringProjectMetadata items on this page */
  value: Array<TextAnalysisAuthoringProjectMetadataOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Represents the metadata of a project. */
export interface TextAnalysisAuthoringProjectMetadataOutput {
  /** Represents the project creation datetime. */
  createdDateTime: string;
  /** Represents the project last modification datetime. */
  lastModifiedDateTime: string;
  /** Represents the project last training datetime. */
  lastTrainedDateTime?: string;
  /** Represents the project last deployment datetime. */
  lastDeployedDateTime?: string;
  /**
   * The project kind.
   *
   * Possible values: "CustomSingleLabelClassification", "CustomMultiLabelClassification", "CustomEntityRecognition", "CustomAbstractiveSummarization", "CustomHealthcare", "CustomTextSentiment"
   */
  projectKind: ProjectKindOutput;
  /** The storage container name. */
  storageInputContainerName: string;
  /** The project settings. */
  settings?: TextAnalysisAuthoringProjectSettingsOutput;
  /** The new project name. */
  readonly projectName: string;
  /** Whether the project would be used for multiple languages or not. */
  multilingual?: boolean;
  /** The project description. */
  description?: string;
  /** The project language. This is BCP-47 representation of a language. For example, use "en" for English, "en-gb" for English (UK), "es" for Spanish etc. */
  language: string;
}

/** Represents the settings used to define the project behavior. */
export interface TextAnalysisAuthoringProjectSettingsOutput {
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
  /** An object containing more specific information than the current object about the error. */
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
export interface TextAnalysisAuthoringCopyProjectOptionsOutput {
  /**
   * Represents the project kind.
   *
   * Possible values: "CustomSingleLabelClassification", "CustomMultiLabelClassification", "CustomEntityRecognition", "CustomAbstractiveSummarization", "CustomHealthcare", "CustomTextSentiment"
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
export interface TextAnalysisAuthoringEvaluationOptionsOutput {
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
export interface TextAnalysisAuthoringCopyProjectJobStateOutput {
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
  warnings?: Array<TextAnalysisAuthoringWarningOutput>;
  /** The errors encountered while executing the job. */
  errors?: Array<ErrorModelOutput>;
}

/** Represents a warning that was encountered while executing the request. */
export interface TextAnalysisAuthoringWarningOutput {
  /** The warning code. */
  code: string;
  /** The warning message. */
  message: string;
}

/** Paged collection of TextAnalysisAuthoringProjectDeployment items */
export interface PagedTextAnalysisAuthoringProjectDeploymentOutput {
  /** The TextAnalysisAuthoringProjectDeployment items on this page */
  value: Array<TextAnalysisAuthoringProjectDeploymentOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Represents a project deployment. */
export interface TextAnalysisAuthoringProjectDeploymentOutput {
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
  assignedResources: Array<TextAnalysisAuthoringDeploymentResourceOutput>;
}

/** Represents an Azure resource assigned to a deployment. */
export interface TextAnalysisAuthoringDeploymentResourceOutput {
  /** Represents the Azure resource Id. */
  resourceId: string;
  /** Represents the resource region. */
  region: string;
}

/** Represents the state of an existing delete deployment from specific resources job. */
export interface TextAnalysisAuthoringDeploymentDeleteFromResourcesJobStateOutput {
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
  warnings?: Array<TextAnalysisAuthoringWarningOutput>;
  /** The errors encountered while executing the job. */
  errors?: Array<ErrorModelOutput>;
}

/** Represents the state of a deployment job. */
export interface TextAnalysisAuthoringDeploymentJobStateOutput {
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
  warnings?: Array<TextAnalysisAuthoringWarningOutput>;
  /** The errors encountered while executing the job. */
  errors?: Array<ErrorModelOutput>;
}

/** Represents the state of a deployment job. */
export interface TextAnalysisAuthoringSwapDeploymentsJobStateOutput {
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
  warnings?: Array<TextAnalysisAuthoringWarningOutput>;
  /** The errors encountered while executing the job. */
  errors?: Array<ErrorModelOutput>;
}

/** Represents the state of an export job. */
export interface TextAnalysisAuthoringExportProjectJobStateOutput {
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
  warnings?: Array<TextAnalysisAuthoringWarningOutput>;
  /** The errors encountered while executing the job. */
  errors?: Array<ErrorModelOutput>;
  /** The URL to use in order to download the exported project. */
  resultUrl?: string;
}

/** Paged collection of TextAnalysisAuthoringExportedTrainedModel items */
export interface PagedTextAnalysisAuthoringExportedTrainedModelOutput {
  /** The TextAnalysisAuthoringExportedTrainedModel items on this page */
  value: Array<TextAnalysisAuthoringExportedTrainedModelOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Represents an exported trained model. */
export interface TextAnalysisAuthoringExportedTrainedModelOutput {
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

/** Represents the state of a job to create or updated an exported model. */
export interface TextAnalysisAuthoringExportedModelJobStateOutput {
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
  warnings?: Array<TextAnalysisAuthoringWarningOutput>;
  /** The errors encountered while executing the job. */
  errors?: Array<ErrorModelOutput>;
}

/** Represents the properties for the exported model manifest. */
export interface TextAnalysisAuthoringExportedModelManifestOutput {
  /** The model files belonging to this model. */
  modelFiles: Array<TextAnalysisAuthoringModelFileOutput>;
}

/** Represents the properties for the model file. */
export interface TextAnalysisAuthoringModelFileOutput {
  /** The name of the file. */
  name: string;
  /** The URI to retrieve the content of the file. */
  contentUri: string;
}

/** Represents the state of an import job. */
export interface TextAnalysisAuthoringImportProjectJobStateOutput {
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
  warnings?: Array<TextAnalysisAuthoringWarningOutput>;
  /** The errors encountered while executing the job. */
  errors?: Array<ErrorModelOutput>;
}

/** Paged collection of TextAnalysisAuthoringProjectTrainedModel items */
export interface PagedTextAnalysisAuthoringProjectTrainedModelOutput {
  /** The TextAnalysisAuthoringProjectTrainedModel items on this page */
  value: Array<TextAnalysisAuthoringProjectTrainedModelOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Represents a trained model. */
export interface TextAnalysisAuthoringProjectTrainedModelOutput {
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
export interface TextAnalysisAuthoringEvaluationJobStateOutput {
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
  warnings?: Array<TextAnalysisAuthoringWarningOutput>;
  /** The errors encountered while executing the job. */
  errors?: Array<ErrorModelOutput>;
  /** Represents evaluation task detailed result. */
  result: TextAnalysisAuthoringEvaluationJobResultOutput;
}

export interface TextAnalysisAuthoringEvaluationJobResultOutput {
  /** Represents the options used running the evaluation. */
  evaluationOptions: TextAnalysisAuthoringEvaluationOptionsOutput;
  /** Represents trained model label. */
  modelLabel: string;
  /** Represents training config version. */
  trainingConfigVersion: string;
  /** Represents progress percentage. */
  percentComplete: number;
}

/** Paged collection of TextAnalysisAuthoringDocumentEvaluationResult items */
export interface PagedTextAnalysisAuthoringDocumentEvaluationResultOutput {
  /** The TextAnalysisAuthoringDocumentEvaluationResult items on this page */
  value: Array<TextAnalysisAuthoringDocumentEvaluationResultOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Represents the evaluation result of a document. */
export interface TextAnalysisAuthoringDocumentEvaluationResultOutputParent {
  /** Represents the document path. */
  location: string;
  /** Represents the document language. This is BCP-47 representation of a language. For example, use "en" for English, "en-gb" for English (UK), "es" for Spanish etc. */
  language: string;
  projectKind: ProjectKindOutput;
}

/** Represents the document evaluation result for a custom entity recognition project. */
export interface TextAnalysisAuthoringCustomEntityRecognitionDocumentEvaluationResultOutput
  extends TextAnalysisAuthoringDocumentEvaluationResultOutputParent {
  /** Represents the evaluation prediction for entity recognition. */
  customEntityRecognitionResult: TextAnalysisAuthoringDocumentEntityRecognitionEvaluationResultOutput;
  /** Represents the project kind. */
  projectKind: "CustomEntityRecognition";
}

/** Represents the entity recognition evaluation result for a document. */
export interface TextAnalysisAuthoringDocumentEntityRecognitionEvaluationResultOutput {
  /** Represents the document labelled entities. */
  entities: Array<TextAnalysisAuthoringDocumentEntityRegionEvaluationResultOutput>;
}

/** Represents the evaluation comparison between the expected and predicted entities of a document region. */
export interface TextAnalysisAuthoringDocumentEntityRegionEvaluationResultOutput {
  /** Represents the region's expected entity labels. */
  expectedEntities: Array<TextAnalysisAuthoringDocumentEntityLabelEvaluationResultOutput>;
  /** Represents the region's predicted entity labels. */
  predictedEntities: Array<TextAnalysisAuthoringDocumentEntityLabelEvaluationResultOutput>;
  /** Represents the region offset. */
  regionOffset: number;
  /** Represents the region length. */
  regionLength: number;
}

/** Represents an evaluation result entity label. */
export interface TextAnalysisAuthoringDocumentEntityLabelEvaluationResultOutput {
  /** Represents the entity category. */
  category: string;
  /** Represents the entity offset index relative to the original text. */
  offset: number;
  /** Represents the entity length. */
  length: number;
}

/** Represents the document evaluation result for a custom entity recognition project. */
export interface TextAnalysisAuthoringCustomHealthcareDocumentEvaluationResultOutput
  extends TextAnalysisAuthoringDocumentEvaluationResultOutputParent {
  /** Represents the evaluation prediction for entity recognition. */
  customHealthcareResult: TextAnalysisAuthoringDocumentHealthcareEvaluationResultOutput;
  /** Represents the project kind. */
  projectKind: "CustomHealthcare";
}

/** Represents the healthcare evaluation result for a document. */
export interface TextAnalysisAuthoringDocumentHealthcareEvaluationResultOutput {
  /** Represents the document labelled entities. */
  entities: Array<TextAnalysisAuthoringDocumentEntityRegionEvaluationResultOutput>;
}

/** Represents the document evaluation result for a custom multi-label classification project. */
export interface TextAnalysisAuthoringCustomMultiLabelClassificationDocumentEvaluationResultOutput
  extends TextAnalysisAuthoringDocumentEvaluationResultOutputParent {
  /** Represents the evaluation prediction for multi label classification. */
  customMultiLabelClassificationResult: TextAnalysisAuthoringDocumentMultiLabelClassificationEvaluationResultOutput;
  /** Represents the project kind. */
  projectKind: "CustomMultiLabelClassification";
}

/** Represents the comparison between the expected and predicted classes that are result from the evaluation operation. */
export interface TextAnalysisAuthoringDocumentMultiLabelClassificationEvaluationResultOutput {
  /** Represents the document's expected classes. */
  expectedClasses: string[];
  /** Represents the document's predicted classes. */
  predictedClasses: string[];
}

/** Represents the document evaluation result for a custom single-label classification project. */
export interface TextAnalysisAuthoringCustomSingleLabelClassificationDocumentEvaluationResultOutput
  extends TextAnalysisAuthoringDocumentEvaluationResultOutputParent {
  /** Represents the evaluation prediction for single label classification. */
  customSingleLabelClassificationResult: TextAnalysisAuthoringDocumentSingleLabelClassificationEvaluationResultOutput;
  /** Represents the project kind. */
  projectKind: "CustomSingleLabelClassification";
}

/** Represents the comparison between the expected and predicted class that result from an evaluation operation. */
export interface TextAnalysisAuthoringDocumentSingleLabelClassificationEvaluationResultOutput {
  /** Represents the document's expected class. */
  expectedClass: string;
  /** Represents the document's predicted class. */
  predictedClass: string;
}

/** Represents the document evaluation result for a custom sentiment project. */
export interface TextAnalysisAuthoringCustomTextSentimentDocumentEvaluationResultOutput
  extends TextAnalysisAuthoringDocumentEvaluationResultOutputParent {
  /** Represents the evaluation prediction for text sentiment. */
  customTextSentimentResult: TextAnalysisAuthoringDocumentTextSentimentEvaluationResultOutput;
  /** Represents the project kind. */
  projectKind: "CustomTextSentiment";
}

/** Represents the comparison between the expected and predicted sentiment that result from an evaluation operation. */
export interface TextAnalysisAuthoringDocumentTextSentimentEvaluationResultOutput {
  /** Represents the document's expected sentiment labels. */
  expectedSentimentSpans: Array<TextAnalysisAuthoringDocumentSentimentLabelEvaluationResultOutput>;
  /** Represents the document's predicted sentiment labels. */
  predictedSentimentSpans: Array<TextAnalysisAuthoringDocumentSentimentLabelEvaluationResultOutput>;
}

/** Represents an evaluation result Sentiment label. */
export interface TextAnalysisAuthoringDocumentSentimentLabelEvaluationResultOutput {
  /**
   * Represents the sentiment category.
   *
   * Possible values: "positive", "negative", "neutral"
   */
  category: SentimentOutput;
  /** Represents the sentiment offset index relative to the original text. */
  offset: number;
  /** Represents the sentiment length. */
  length: number;
}

/** Represents the summary for an evaluation operation. */
export interface TextAnalysisAuthoringEvaluationSummaryOutputParent {
  /** Represents the options used running the evaluation. */
  evaluationOptions: TextAnalysisAuthoringEvaluationOptionsOutput;
  projectKind: ProjectKindOutput;
}

/** Represents the evaluation summary for a custom entity recognition project. */
export interface TextAnalysisAuthoringCustomEntityRecognitionEvaluationSummaryOutput
  extends TextAnalysisAuthoringEvaluationSummaryOutputParent {
  /** Contains the data related to extraction evaluation. */
  customEntityRecognitionEvaluation: TextAnalysisAuthoringEntityRecognitionEvaluationSummaryOutput;
  /** Represents the project type that the evaluation ran on. */
  projectKind: "CustomEntityRecognition";
}

/** Represents the evaluation summary for a custom entity recognition project. */
export interface TextAnalysisAuthoringEntityRecognitionEvaluationSummaryOutput {
  /** Represents the confusion matrix between two entities (the two entities can be the same). The matrix is between the entity that was labelled and the entity that was predicted. */
  confusionMatrix: TextAnalysisAuthoringConfusionMatrixOutput;
  /** Represents the entities evaluation */
  entities: Record<string, TextAnalysisAuthoringEntityEvaluationSummaryOutput>;
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

export interface TextAnalysisAuthoringConfusionMatrixOutput
  extends Record<string, TextAnalysisAuthoringConfusionMatrixRowOutput> {}

export interface TextAnalysisAuthoringConfusionMatrixRowOutput
  extends Record<string, TextAnalysisAuthoringConfusionMatrixCellOutput> {}

/** Represents a cell in a confusion matrix. */
export interface TextAnalysisAuthoringConfusionMatrixCellOutput {
  /** Represents normalized value in percentages. */
  normalizedValue: number;
  /** Represents raw value. */
  rawValue: number;
}

/** Represents the evaluation summary for an entity. */
export interface TextAnalysisAuthoringEntityEvaluationSummaryOutput {
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

/** Represents the evaluation summary for a custom health care project. */
export interface TextAnalysisAuthoringCustomHealthcareEvaluationSummaryOutput
  extends TextAnalysisAuthoringEvaluationSummaryOutputParent {
  /** Contains the data related to health care evaluation. */
  customHealthcareEvaluation: TextAnalysisAuthoringEntityRecognitionEvaluationSummaryOutput;
  /** Represents the project type that the evaluation ran on. */
  projectKind: "CustomHealthcare";
}

/** Represents the evaluation summary for a custom multi-label classification project. */
export interface TextAnalysisAuthoringCustomMultiLabelClassificationEvaluationSummaryOutput
  extends TextAnalysisAuthoringEvaluationSummaryOutputParent {
  /** Contains the data related to multi label classification evaluation. */
  customMultiLabelClassificationEvaluation: TextAnalysisAuthoringMultiLabelClassificationEvaluationSummaryOutput;
  /** Represents the project type that the evaluation ran on. */
  projectKind: "CustomMultiLabelClassification";
}

/** Represents the evaluation summary for a multi-label classification project. */
export interface TextAnalysisAuthoringMultiLabelClassificationEvaluationSummaryOutput {
  /** Represents the classes evaluation */
  classes: Record<string, TextAnalysisAuthoringMultiLabelClassEvaluationSummaryOutput>;
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

/** Represents the evaluation summary of a class in a multi-label classification project. */
export interface TextAnalysisAuthoringMultiLabelClassEvaluationSummaryOutput {
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

/** Represents the evaluation summary for a custom single-label classification project. */
export interface TextAnalysisAuthoringCustomSingleLabelClassificationEvaluationSummaryOutput
  extends TextAnalysisAuthoringEvaluationSummaryOutputParent {
  /** Contains the data related to single label classification evaluation. */
  customSingleLabelClassificationEvaluation: TextAnalysisAuthoringSingleLabelClassificationEvaluationSummaryOutput;
  /** Represents the project type that the evaluation ran on. */
  projectKind: "CustomSingleLabelClassification";
}

/** Represents the evaluation summary for a custom single-label classification project. */
export interface TextAnalysisAuthoringSingleLabelClassificationEvaluationSummaryOutput {
  /** Represents the confusion matrix between two classes (the two classes can be the same). The matrix is between the class that was labelled and the class that was predicted. */
  confusionMatrix: TextAnalysisAuthoringConfusionMatrixOutput;
  /** Represents the classes evaluation */
  classes: Record<string, TextAnalysisAuthoringSingleLabelClassEvaluationSummaryOutput>;
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

/** Represents the evaluation summary for a class in a single-label classification project. */
export interface TextAnalysisAuthoringSingleLabelClassEvaluationSummaryOutput {
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

/** Represents the evaluation summary for a custom text sentiment project. */
export interface TextAnalysisAuthoringCustomTextSentimentEvaluationSummaryOutput
  extends TextAnalysisAuthoringEvaluationSummaryOutputParent {
  /** Contains the data related to custom sentiment evaluation. */
  customTextSentimentEvaluation: TextAnalysisAuthoringTextSentimentEvaluationSummaryOutput;
  /** Represents the project type that the evaluation ran on. */
  projectKind: "CustomTextSentiment";
}

/** Represents the evaluation summary for a custom text sentiment project. */
export interface TextAnalysisAuthoringTextSentimentEvaluationSummaryOutput {
  /** Represents evaluation of span level sentiments */
  spanSentimentsEvaluation: TextAnalysisAuthoringSpanSentimentEvaluationSummaryOutput;
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

/** Represents the evaluation summary for a custom sentiment project. */
export interface TextAnalysisAuthoringSpanSentimentEvaluationSummaryOutput {
  /** Represents the confusion matrix between two sentiments (the two sentiments can be the same). The matrix is between the sentiment that was labelled and the sentiment that was predicted. */
  confusionMatrix: TextAnalysisAuthoringConfusionMatrixOutput;
  /** Represents the sentiment evaluation */
  sentiments: Record<string, TextAnalysisAuthoringSentimentEvaluationSummaryOutput>;
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

/** Represents the evaluation summary for a sentiment in a custom sentiment project. */
export interface TextAnalysisAuthoringSentimentEvaluationSummaryOutput {
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
export interface TextAnalysisAuthoringLoadSnapshotJobStateOutput {
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
  warnings?: Array<TextAnalysisAuthoringWarningOutput>;
  /** The errors encountered while executing the job. */
  errors?: Array<ErrorModelOutput>;
}

/** Paged collection of TextAnalysisAuthoringAssignedDeploymentResource items */
export interface PagedTextAnalysisAuthoringAssignedDeploymentResourceOutput {
  /** The TextAnalysisAuthoringAssignedDeploymentResource items on this page */
  value: Array<TextAnalysisAuthoringAssignedDeploymentResourceOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Represents the assigned deployment resource. */
export interface TextAnalysisAuthoringAssignedDeploymentResourceOutput {
  /** The resource ID. */
  readonly azureResourceId: string;
  /** The resource region. */
  region: string;
}

/** Represents the state of a assign deployment resources job. */
export interface TextAnalysisAuthoringAssignDeploymentResourcesJobStateOutput {
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
  warnings?: Array<TextAnalysisAuthoringWarningOutput>;
  /** The errors encountered while executing the job. */
  errors?: Array<ErrorModelOutput>;
}

/** Represents the state of a unassign deployment resources job. */
export interface TextAnalysisAuthoringUnassignDeploymentResourcesJobStateOutput {
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
  warnings?: Array<TextAnalysisAuthoringWarningOutput>;
  /** The errors encountered while executing the job. */
  errors?: Array<ErrorModelOutput>;
}

/** Paged collection of TextAnalysisAuthoringTrainingJobState items */
export interface PagedTextAnalysisAuthoringTrainingJobStateOutput {
  /** The TextAnalysisAuthoringTrainingJobState items on this page */
  value: Array<TextAnalysisAuthoringTrainingJobStateOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Represents the state of a training job. */
export interface TextAnalysisAuthoringTrainingJobStateOutput {
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
  warnings?: Array<TextAnalysisAuthoringWarningOutput>;
  /** The errors encountered while executing the job. */
  errors?: Array<ErrorModelOutput>;
  /** Represents training tasks detailed result. */
  result: TextAnalysisAuthoringTrainingJobResultOutput;
}

/** Represents the output of a training job. */
export interface TextAnalysisAuthoringTrainingJobResultOutput {
  /** Represents trained model label. */
  modelLabel: string;
  /** Represents training config version. */
  trainingConfigVersion: string;
  /** Represents model train status. */
  trainingStatus: TextAnalysisAuthoringSubTrainingJobStateOutput;
  /** Represents model evaluation status. */
  evaluationStatus?: TextAnalysisAuthoringSubTrainingJobStateOutput;
  /** Represents the estimate end date time for training and evaluation. */
  estimatedEndDateTime?: string;
}

/** Represents the detailed state of a training sub-operation. */
export interface TextAnalysisAuthoringSubTrainingJobStateOutput {
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
export interface TextAnalysisAuthoringProjectDeletionJobStateOutput {
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
  warnings?: Array<TextAnalysisAuthoringWarningOutput>;
  /** The errors encountered while executing the job. */
  errors?: Array<ErrorModelOutput>;
}

/** Paged collection of TextAnalysisAuthoringAssignedProjectDeploymentsMetadata items */
export interface PagedTextAnalysisAuthoringAssignedProjectDeploymentsMetadataOutput {
  /** The TextAnalysisAuthoringAssignedProjectDeploymentsMetadata items on this page */
  value: Array<TextAnalysisAuthoringAssignedProjectDeploymentsMetadataOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Represents the metadata for assigned deployments for a project. */
export interface TextAnalysisAuthoringAssignedProjectDeploymentsMetadataOutput {
  /** Represents the project name. */
  readonly projectName: string;
  /** Represents the resource region. */
  deploymentsMetadata: Array<TextAnalysisAuthoringAssignedProjectDeploymentMetadataOutput>;
}

/** Represents the metadata for an assigned deployment */
export interface TextAnalysisAuthoringAssignedProjectDeploymentMetadataOutput {
  /** Represents the deployment name. */
  deploymentName: string;
  /** Represents deployment last deployed time. */
  lastDeployedDateTime: string;
  /** Represents deployment expiration date in the runtime. */
  deploymentExpirationDate: string;
}

/** Paged collection of TextAnalysisAuthoringSupportedLanguage items */
export interface PagedTextAnalysisAuthoringSupportedLanguageOutput {
  /** The TextAnalysisAuthoringSupportedLanguage items on this page */
  value: Array<TextAnalysisAuthoringSupportedLanguageOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Represents a supported language. */
export interface TextAnalysisAuthoringSupportedLanguageOutput {
  /** The language name. */
  readonly languageName: string;
  /** The language code. This is BCP-47 representation of a language. For example, "en" for English, "en-gb" for English (UK), "es" for Spanish etc. */
  languageCode: string;
}

/** Paged collection of TextAnalysisAuthoringPrebuiltEntity items */
export interface PagedTextAnalysisAuthoringPrebuiltEntityOutput {
  /** The TextAnalysisAuthoringPrebuiltEntity items on this page */
  value: Array<TextAnalysisAuthoringPrebuiltEntityOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Represents a supported prebuilt entity. */
export interface TextAnalysisAuthoringPrebuiltEntityOutput {
  /** The prebuilt entity category. */
  readonly category: string;
  /** The description. */
  description: string;
  /** English examples for the entity. */
  examples: string;
}

/** Paged collection of TextAnalysisAuthoringTrainingConfigVersion items */
export interface PagedTextAnalysisAuthoringTrainingConfigVersionOutput {
  /** The TextAnalysisAuthoringTrainingConfigVersion items on this page */
  value: Array<TextAnalysisAuthoringTrainingConfigVersionOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Represents a training config version. */
export interface TextAnalysisAuthoringTrainingConfigVersionOutput {
  /** Represents the version of the config. */
  readonly trainingConfigVersion: string;
  /** Represents the training config version expiration date. */
  modelExpirationDate: string;
}

/** Represents the evaluation result of a document. */
export type TextAnalysisAuthoringDocumentEvaluationResultOutput =
  | TextAnalysisAuthoringDocumentEvaluationResultOutputParent
  | TextAnalysisAuthoringCustomEntityRecognitionDocumentEvaluationResultOutput
  | TextAnalysisAuthoringCustomHealthcareDocumentEvaluationResultOutput
  | TextAnalysisAuthoringCustomMultiLabelClassificationDocumentEvaluationResultOutput
  | TextAnalysisAuthoringCustomSingleLabelClassificationDocumentEvaluationResultOutput
  | TextAnalysisAuthoringCustomTextSentimentDocumentEvaluationResultOutput;
/** Represents the summary for an evaluation operation. */
export type TextAnalysisAuthoringEvaluationSummaryOutput =
  | TextAnalysisAuthoringEvaluationSummaryOutputParent
  | TextAnalysisAuthoringCustomEntityRecognitionEvaluationSummaryOutput
  | TextAnalysisAuthoringCustomHealthcareEvaluationSummaryOutput
  | TextAnalysisAuthoringCustomMultiLabelClassificationEvaluationSummaryOutput
  | TextAnalysisAuthoringCustomSingleLabelClassificationEvaluationSummaryOutput
  | TextAnalysisAuthoringCustomTextSentimentEvaluationSummaryOutput;
/** Alias for ProjectKindOutput */
export type ProjectKindOutput = string;
/** Alias for ErrorCodeOutput */
export type ErrorCodeOutput = string;
/** Alias for InnerErrorCodeOutput */
export type InnerErrorCodeOutput = string;
/** Alias for SentimentOutput */
export type SentimentOutput = string;
/** Alias for EvaluationKindOutput */
export type EvaluationKindOutput = string;
/** Alias for JobStatusOutput */
export type JobStatusOutput = string;
