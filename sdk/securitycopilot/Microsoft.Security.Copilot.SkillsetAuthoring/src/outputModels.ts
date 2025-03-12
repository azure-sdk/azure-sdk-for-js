// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** SkillContext object containing properties of the current session relevant to the invoked skill */
export interface SkillContextResponseOutput {
  /** Skill descriptor containing attributes that describe a skill (i.e. Inputs required to execute the skill) */
  descriptor: SkillDescriptorOutput;
  /** SkillContext Id */
  id: string;
  /** Array of feature flags */
  featureFlags: string[];
  /** Skill Variable Collection */
  inputs: Record<string, SkillVariableOutput>;
  /** Additional skill specific settings */
  properties: Record<string, string>;
  /** TODO */
  startTime: string;
  /** Tenant id of tenant in which skill invocation occured */
  tenantId: string;
  /** User id of user that invoked the skill */
  userId: string;
  /** Current session ID */
  sessionId: string;
  /** Current prompt ID */
  promptId: string;
  /** Current evaluation ID */
  evaluationId: string;
  /** Compliance flags for logging. */
  complianceFlags: ComplianceFlagsOutput;
  /** Fidelis Workspace Id */
  workspaceId: string;
  /** Originating source tag for the evaluation (i.e. Immersive, Logic Apps, etc.) */
  source: string;
  /**
   * Indicates whether the evaluation is user driven or automated
   *
   * Possible values: Manual, Automated
   */
  invocationType: string;
  /**
   * Indicates whether the evaluation is from a Prompt or a Promptbook
   *
   * Possible values: UserPrompt, Promptbooks
   */
  invocationCategory: string;
  /** Username of the user that invoked the skill */
  userName: string;
}

/** The desciptor of a skill */
export interface SkillDescriptorOutput {
  /** The skillset descriptor */
  skillset: SkillsetDescriptorOutput;
  /** The name of the skill */
  name: string;
  /** The format of the skill */
  format: string;
  /** The display name of the skill */
  displayName: string;
  /** An alternative name for the skill as some planners follow different naming convensions. This is set by the planner to map the name back to the skill */
  altName: string;
  /** The dependencies of the skill */
  dependencies: Array<SkillDependencyDescriptorOutput>;
  /** The description of the skill */
  description: string;
  /** A list of example prompts for the skill */
  examplePrompts: string[];
  /** Whether the skill is hidden TODO what does this mean */
  hidden: boolean;
  /** The inputs required for the skill */
  inputs: Array<SkillInputDescriptorOutput>;
  /** The outputs of the skill */
  outputs: Array<SkillOutputDescriptorOutput>;
  /** The prompt aligned name of the skill TODO what does this mean */
  promptAlignedName: string;
  /** A list of feature flags. At least one of the feature flags is required to enabled in the prompt context in order for the skillset to be available */
  userVisibilityFeatureFlags: string[];
  /**
   * Controls the conditions under which the users can see or use this skillset
   *
   * Possible values: Always, Never, IfFeatureFlagEnabled
   */
  userVisibility: string;
  /** Visibility flags required for the planner to user the skillset TODO confirm what this does */
  plannerVisibilityFeatureFlags: string[];
  /**
   * Controls the conditions under a prompt can use this skillset
   *
   * Possible values: Always, Never, IfFeatureFlagEnabled
   */
  plannerVisibility: string;
  /** The settings of the skill */
  settings: Record<string, string>;
  /** skillSummaryMetadata */
  skillSummaryMetadata: SkillSummaryDescriptorOutput;
  /** EnableVariableSubstitutionInCompose */
  enableVariableSubstitutionInCompose: boolean;
}

/** Entity representing a Skillset. */
export interface SkillsetDescriptorOutput {
  /** Namespace for the skillset */
  namespace: string;
  /** The name of the Skillset */
  name: string;
  /** The description of the Skillset */
  description: string;
  /** The description of the skillset that's displayed TODO postman/dev figure out where this is displayed */
  descriptionDisplay: string;
  /** The Skillset name that's displayed in the portal */
  disaplyName: string;
  /** The icon displayed for the skillset in the console */
  icon: string;
  /**
   * The category of the Skillset
   *
   * Possible values: Hidden, Microsoft, Other, Web, Testing, Plugin
   */
  category: string;
  /**
   * CatalogScope of the Skillset
   *
   * Possible values: None, User, Workspace, Tenant, Global
   */
  catalogScope: string;
  /** Whether the skillset is enabled TODO how is this different than Hidden */
  enabled: boolean;
  /** Whether the skillset is hidden TODO how is this different than enabled */
  hidden: boolean;
  /** The prerequisites of a skillset TODO what does this mean */
  prerequisites: string[] | null;
  /** The settings of a skillset */
  settings: Array<SkillsetSettingOutput>;
  /** The settings of a skillset */
  authorization: SkillsetAuthOutput;
  /** The types of authentication supported by the skillset */
  supportedAuthTypes: string[];
  /** A list of feature flags. At least one of the feature flags is required to enabled in the prompt context in order for the skillset to be available */
  userVisibilityFeatureFlags: string[];
  /**
   * Controls the conditions under which the users can see or use this skillset
   *
   * Possible values: Always, Never, IfFeatureFlagEnabled
   */
  userVisibility: string;
  /** Visibility flags required for the planner to user the skillset TODO confirm what this does */
  plannerVisibilityFeatureFlags: string[];
  /**
   * Controls the conditions under a prompt can use this skillset
   *
   * Possible values: Always, Never, IfFeatureFlagEnabled
   */
  plannerVisibility: string;
  /** The user ID of the user who created this skillset. */
  creatorUserId: string;
  /** The ID of an Entra group that contains the owners for this Skillset */
  ownersGroupId: string;
}

/** Defines the settings of a skillset */
export interface SkillsetSettingOutput {
  /** The name of the skillset setting */
  name: string;
  /** The label of the skillset setting */
  label: string;
  /** The description of the skillset setting used to describe the setting to the user in an info text box */
  description: string;
  /** The hint text used to fill in the setting box */
  hintText: string;
  /**
   * The type of the skillset setting
   *
   * Possible values: SecretString, String
   */
  settingType: string;
  /** Whether the skillset setting is required */
  required: boolean;
  /** The default value of the skillset setting */
  defaultValue: string;
  /** The value of the skillset setting */
  value: string;
}

/** The authorization settings for the skillset */
export interface SkillsetAuthOutput {
  /**
   * SkillsetAuth Type
   *
   * Possible values: None, Basic, ApiKey, OAuthAuthorizationCodeFlow, OAuthClientCredentialsFlow, AAD, ServiceHttp, AADDelegated
   */
  type: string;
}

/** The descriptor of a skill dependency */
export interface SkillDependencyDescriptorOutput {
  /** The skillset name */
  skillsetName: string;
  /** The name of the skill */
  skillName: string;
}

/** The descriptor of a skill input */
export interface SkillInputDescriptorOutput {
  /** The name of the skill input */
  name?: string;
  /** The type of the skill input */
  type: SkillTypeDescriptorOutput;
  /** The description of the skill */
  description?: string;
  /** Whether a skill input is required */
  required: boolean;
  /** The default value of the skill input */
  defaultValue?: string;
  /** The placeholder value of the skill input TODO how is this different than the default */
  placeholderValue: string;
  /** Enum */
  enum: string[] | null;
}

/** The descriptor of a skill type */
export interface SkillTypeDescriptorOutput {
  /** The name of the skill type */
  name: string;
}

/** The descriptor of a skill output */
export interface SkillOutputDescriptorOutput {
  /** The name of the skill input */
  name?: string;
  /** The type of the skill input */
  type: SkillTypeDescriptorOutput;
  /** The description of the skill */
  description?: string;
}

/** SkillSummaryDescriptor */
export interface SkillSummaryDescriptorOutput {
  /** SummaryStartMessage */
  summaryStartMessage: string;
  /** SummaryEndMessage */
  summaryEndMessage: string;
}

/** Skill Variable */
export interface SkillVariableOutput {
  /** Skill variable type */
  type?: string;
  /** Skill variable value */
  value?: string;
  /** Skill variable value is stored as json document */
  valueStoredAsJson: boolean;
}

/** Skill variable parent entity adding additional attribute 'skillsource' to provide visibility to users as to what data/information was used in generating the output of a skill */
export interface OutputSkillVariableOutput extends SkillVariableOutput {
  /** Array of cited sources that were fetched by a skill and that impacted the output of the skill evaluation */
  sources: Array<SkillSourceOutput> | null;
  /** Suggested prompts providing assistance to users in understanding what prompts work well with CFS */
  suggestedPrompts: Array<SuggestedPromptOutput> | null;
  /** Skill name */
  skillName: string | null;
  /** Skill inputs that were used in generating the output of the skill evaluation */
  skillInputs: Record<string, string> | null;
  /** Skill output language */
  outputLanguage: string | null;
  /**
   * Enum indicating the output type of the skill. Supports StructuredOutput and Primitive
   *
   * Possible values: Primitive, StructuredComponents
   */
  outputType: string;
}

/** Source that is fetched during the evaluation of a skill. Provides visibility to users as to what data/information was used in generating the output of a skill */
export interface SkillSourceOutput {
  /** User friendly name for the information source */
  displayName: string;
  /** Information source content (i.e. URL to article) */
  sourceContent: string;
  /**
   * The source type (i.e. URI)
   *
   * Possible values: Uri, StringType
   */
  sourceType: string;
  /** Source data serialized as string */
  sourceSerializedData?: string | null;
}

/** Suggested prompts providing assistance to users in understanding what prompts work well with CFS */
export interface SuggestedPromptOutput {
  /** Prompt text */
  prompt: string;
}

/** ComplianceFlags */
export interface ComplianceFlagsOutput {
  /** Whether to record logs in Geneva and Kusto for this user */
  recordLog: boolean;
  /** Locked down tables not required and non-customer content table does not have to be redacted */
  customerOptedInToEyesOnProductImprovement: boolean;
  /** When this is true, the data may be used for model improvement. This flag does not affect redaction. */
  customerOptedInToModelImprovement: boolean;
}

/** Represents the execution context for the current session. */
export interface MedeinaExecutionContextOutput {
  /** The session id. */
  SessionId: string;
  /** The prompt id. */
  PromptId: string;
  /** The evaluation id. */
  EvaluationId: string;
  /** The tenant id. */
  TenantId: string;
  /** The account id. */
  AccountId: string;
  /** The workspace id. */
  WorkspaceId: string;
  /** The display name of the user. */
  UserName: string;
  /** The Application Id that created the Session. */
  ApplicationId?: string;
  /** The Source tag i.e. 'immersive'. */
  Source: string;
  /** The source application ID. */
  UnauthenticatedSourceApplicationId: string;
  /** The selected skills. */
  SelectedSkills: string;
  /** The skillsets identified for execution during the evaluation process post skill selection. */
  SelectedSkillsets: string[];
  /** Indicates whether the context is for a user onboarded to Fidelis. */
  IsFidelisUser: boolean;
  /**
   * Indicates whether the evaluation is manually generated or user driven.
   *
   * Possible values: Manual, Automated
   */
  InvocationType: string;
  /**
   * Indicates whether the evaluation is from a Prompt or a Promptbook
   *
   * Possible values: UserPrompt, Promptbooks
   */
  InvocationCategory: string;
  /** The encrypted token used to authenticate the user. */
  EncryptedUserAccessToken: string;
  /** Compliance flags for logging. */
  ComplianceFlags: ComplianceFlagsOutput;
  /** Contains the context for the Azure OpenAI requests such as the deployment id. */
  AzureOpenAIExecutionContext: AzureOpenAIExecutionContextOutput;
  /**
   * Preview state of the execution context.
   *
   * Possible values: GA, Public, Private
   */
  PreviewState: string;
}

/** Represents the Azure OpenAI execution context. */
export interface AzureOpenAIExecutionContextOutput {
  /** The API version. */
  ApiVersion: string;
  /** The environment where the request is being made. */
  Environment: string;
  /** Determines if the GPU proxy is enabled. */
  IsGPUProxyEnabled: boolean;
  /** The geographic location where the GPU processing is being done. */
  GpuProcessingGeo?: string;
  /** Whether the customer allows cross-geo compute in their workspace capacity. */
  CustomerAllowCrossGeoCompute: boolean;
  /** ECS controlled flag to allow cross-geo compute. */
  EcsAllowCrossGeoCompute: boolean;
  /** Properties used to add content prompt and content filter details from the response. */
  ContentFilterProperties?: Record<string, string>;
  /** Properties used to report information about the skill invocation. Must not contain customer content. */
  ReportingProperties?: Record<string, string>;
}

/** The prompt history of the current session */
export interface PromptHistoryResponseOutput {
  /** List of prompts that have been evaluated in the current session */
  prompts: Array<SessionPromptOutput>;
}

/** A record for a prompt and response used in tracking session prompt history */
export interface SessionPromptOutput {
  /** The content of the prompt */
  prompt: string;
  /** Prompt response returned by the prompt evaluation */
  response: string | null;
  /**
   * Type of prompt
   *
   * Possible values: Unknown, Context, Prompt, Skill
   */
  promptType: string;
}

/** Auth Details */
export interface AuthDetailsOutput {
  /**
   * Auth Location
   *
   * Possible values: Header, QueryParams
   */
  authLocation: string;
  /** Auth Info */
  authInfo: Record<string, string>;
}

/** AccessToken */
export interface AccessTokenOutput {
  /** Token string */
  token: string;
  /** Expiry time */
  expiresOn: string;
}

/** Represents a message in the chat. */
export interface MessageOutput {
  /** The content of the message. */
  Content?: string;
  /** The role of the message sender. */
  Role: string;
  /** The name of the message sender. */
  Name?: string;
  /** The function call information. */
  FunctionCall?: FunctionCallOutput;
  /** The tool calls associated with the message. */
  ToolCalls?: Array<ToolCallOutput>;
  /** The identifier for the tool call. */
  ToolCallId?: string;
}

/** Represents a function call. */
export interface FunctionCallOutput {
  /** The name of the function. */
  Name: string;
  /** The arguments passed to the function. */
  Arguments?: Record<string, string>;
}

/** Represents a tool call. */
export interface ToolCallOutput {
  /** The id of the tool call. */
  Id: string;
  /** The type of the tool call. */
  Type: string;
  /** The function for the tool call. */
  Function: ToolFunctionCallOutput;
}

/** Represents a tool function call. */
export interface ToolFunctionCallOutput {
  /** The name of the tool function. */
  Name: string;
  /** The arguments for the tool function. */
  Arguments: string;
}

export interface ChatCompletionResponseOutput
  extends BaseCompletionResponseOutput {
  /** List of choices in the chat completion response. */
  Choices: Array<ChatChoiceOutput>;
}

export interface ChatChoiceOutput extends BaseChoiceOutput {
  /** The message associated with the chat choice. */
  Message: MessageOutput;
}

export interface BaseChoiceOutput {
  Index: number;
  /** Log probabilities for this choice. */
  LogProbs: any;
  /** The reason why the operation finished. */
  FinishReason: string;
  /** This object contains the list of content filter annotations. */
  ContentFilterResults?: any;
  /** This indicates when the content filtering system does not run on the chat completion. */
  ContentFilterError?: any;
}

export interface ChoiceOutput extends BaseChoiceOutput {
  Text: string;
}

/** Represents the base completion response. */
export interface BaseCompletionResponseOutput {
  /** The unique identifier for the response. */
  Id: string;
  /** The object type. */
  Object: string;
  /** The creation timestamp. */
  Created: string;
  /** The model used for completion. */
  Model: string;
  /** The usage statistics for the response. */
  Usage: any;
  /** The results of prompt filtering. */
  PromptFilterResults: any[];
}

export interface CompletionResponseOutput extends BaseCompletionResponseOutput {
  Choices: Array<ChoiceOutput>;
}

export interface EmbeddingResponseOutput {
  Data: Array<EmbeddingDataOutput>;
  Model: string;
  Object: string;
  Usage: any;
}

export interface EmbeddingDataOutput {
  Embedding: number[];
  Index: number;
  Object: string;
}

export interface ECSFlightResponseOutput {
  eTag?: string;
  ids?: string[];
  settings?: any;
}

export interface DynamicPromptsSearchResponseOutput {
  /** The search results. */
  results: Array<ScoredDocOutput>;
}

export interface DynamicPromptingSemanticIndexDocumentOutput {
  /** The document ID. */
  id: string;
  /** The document RowId. */
  rowId: number;
  /** The document UpdatedAt. */
  updatedAt: string;
  /** The document IndexId. */
  indexId: string;
  /** The document Filter1. */
  filter1: string;
  /** The document Filter2. */
  filter2: string;
  /** The document Filter3. */
  filter3: string;
  /** The document Filter4. */
  filter4: string;
  /** The document Filter5. */
  filter5: string;
  /** The document Filter6. */
  filter6: string;
  /** The document Filter7. */
  filter7: string;
  /** The document Filter8. */
  filter8: string;
  /** The document Filter9. */
  filter9: string;
  /** The document Filter10. */
  filter10: string;
  /** The document Content. */
  content: string;
  /** The document Description. */
  description: string;
  /** The document Embedding array. */
  embedding: number[];
}

export interface ScoredDocOutput {
  /** The score of the document. */
  score: number;
  /** The document. */
  document: DynamicPromptingSemanticIndexDocumentOutput;
}

export interface DynamicPromptsFilterResponseOutput {
  /** The filter results. */
  results: Array<ScoredDocOutput>;
}

export interface DocumentCountResponseOutput {
  /** The document count. */
  count: number;
}

export interface DynamicPromptsIndexFilterResponseOutput {
  /** The index filter results. */
  results: Array<ScoredDocOutput>;
}

export interface PhysicalIndexExistsResponseOutput {
  /** Indicates whether the physical index exists. */
  exists: boolean;
}

export interface SuggestedPromptsResponseOutput {
  /** The suggested prompts. */
  prompts: Array<SuggestedPromptOutput>;
}
