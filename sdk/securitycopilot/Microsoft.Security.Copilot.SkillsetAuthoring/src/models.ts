// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Skill Variable */
export interface SkillVariable {
  /** Skill variable type */
  type?: string;
  /** Skill variable value */
  value?: string;
  /** Skill variable value is stored as json document */
  valueStoredAsJson: boolean;
}

/** Skill variable parent entity adding additional attribute 'skillsource' to provide visibility to users as to what data/information was used in generating the output of a skill */
export interface OutputSkillVariable extends SkillVariable {
  /** Array of cited sources that were fetched by a skill and that impacted the output of the skill evaluation */
  sources: Array<SkillSource> | null;
  /** Suggested prompts providing assistance to users in understanding what prompts work well with CFS */
  suggestedPrompts: Array<SuggestedPrompt> | null;
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
export interface SkillSource {
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
export interface SuggestedPrompt {
  /** Prompt text */
  prompt: string;
}

/** Invoke skill request including necessary inputs for invoking a skill */
export interface InvokeSkillRequest {
  /** Name of skillset in which desired skill to invoke resides */
  skillsetName?: string;
  /** Name of skill to be invoked */
  skillName: string;
  /** Skill inputs */
  inputs: Record<string, SkillVariable> | null;
}

/** Represents the Azure OpenAI execution context. */
export interface AzureOpenAIExecutionContext {
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

/** The progress message to log during a skill invocation */
export interface LogProgressRequest {
  /**
   * Log level
   *
   * Possible values: Error, Warning, Information, Verbose
   */
  level?: string;
  /** Log message */
  message: string;
}

export interface EvaluationResultOutput {
  /** Possible values: Primitive, StructuredComponents */
  skillOutputType: string;
  primitiveOutput?: OutputSkillVariable;
  structuredOutput?: SkillStructuredOutput;
  primitiveOutputValue?: string;
}

export interface SkillStructuredOutput {
  components: Array<SkillOutputComponent>;
}

export interface SkillOutputComponent extends OutputComponent {
  /** Possible values: None, Summarize, Substitute */
  action: string;
  includeInEvalResultAsRawComponent: boolean;
}

export interface OutputComponent {
  name: string;
  content: string;
  description?: string;
  /** Possible values: GptOutput, Text, Image */
  type: string;
}

/** TokenCredentialRequest */
export interface GetTokenCredentialRequest {
  /** Scopes */
  scopes: string[];
  /**
   * TokenCredential Type
   *
   * Possible values: None, UserTokenCredential, ServiceTokenCredential
   */
  tokenCredentialType: string;
  /** TenantId */
  tenantId?: string | null;
}

/** GetInputRequest */
export interface GetInputRequest {
  /** Input Name */
  inputName: string;
  /** Default value for the input */
  defaultValue?: SkillVariable | null;
}

/** SetInputRequest */
export interface SetInputRequest {
  /** Input Name */
  inputName: string;
  /** Default value for the input */
  defaultValue?: SkillVariable | null;
}

/** AddSourcesRequest */
export interface AddSourcesRequest {
  /** List of SkillSource */
  sources: Array<SkillSource>;
}

/** AddSourceRequest */
export interface AddSourceRequest {
  /** SkillSource */
  SkillSource: SkillSource;
}

/** AddSuggestedPromptsRequest */
export interface AddSuggestedPromptsRequest {
  /** List of SuggestedPrompt */
  suggestedPrompts: Array<SuggestedPrompt>;
}

/** SetFinalResponseSettingsRequest */
export interface SetFinalResponseSettingsRequest {
  /** FinalResponseBehavior */
  finalResponseBehavior: string;
  /** FinalResponseFormat */
  finalResponseFormat?: string;
  /** FinalResponsePersona */
  finalResponsePersona?: string;
  /** FinalResponseFallback */
  finalResponseFallback?: string;
}

/** Represents a request to create a chat completion. */
export interface CreateChatCompletionRequest {
  /** The deployment ID. */
  deploymentId?: string;
  /** The chat completion request details. */
  chatCompletionRequest: ChatCompletionRequest;
  /** The Azure OpenAI execution context. */
  openAiExecutionContext?: AzureOpenAIExecutionContext;
}

/** Represents a chat completion request. */
export interface ChatCompletionRequest extends BaseCompletionRequest {
  /** The messages associated with the request. */
  Messages: Array<Message>;
  /** The functions associated with the request. */
  Functions: Array<GPTFunction>;
  /** Specifies the function to call. */
  FunctionCall: string;
  /** The tools available for this request. */
  Tools?: Array<Tools>;
  /** The selected tool for execution. */
  ToolChoice?: string;
  /** Indicates whether tools can be called in parallel. */
  ParallelToolCalls?: boolean;
}

/** Represents a message in the chat. */
export interface Message {
  /** The content of the message. */
  Content?: string;
  /** The role of the message sender. */
  Role: string;
  /** The name of the message sender. */
  Name?: string;
  /** The function call information. */
  FunctionCall?: FunctionCall;
  /** The tool calls associated with the message. */
  ToolCalls?: Array<ToolCall>;
  /** The identifier for the tool call. */
  ToolCallId?: string;
}

/** Represents a function call. */
export interface FunctionCall {
  /** The name of the function. */
  Name: string;
  /** The arguments passed to the function. */
  Arguments?: Record<string, string>;
}

/** Represents a tool call. */
export interface ToolCall {
  /** The id of the tool call. */
  Id: string;
  /** The type of the tool call. */
  Type: string;
  /** The function for the tool call. */
  Function: ToolFunctionCall;
}

/** Represents a tool function call. */
export interface ToolFunctionCall {
  /** The name of the tool function. */
  Name: string;
  /** The arguments for the tool function. */
  Arguments: string;
}

/** Represents a GPT function definition. */
export interface GPTFunction {
  /** The name of the GPT function. */
  Name: string;
  /** The description of the GPT function. */
  Description: string;
  /** The parameters required by the GPT function. */
  Parameters: FunctionParameter;
  /** The result of the GPT function. */
  Result: FunctionResult;
}

/** Represents parameters for a function. */
export interface FunctionParameter {
  /** The type of the parameter. */
  Type: string;
  /** The properties of the parameter. */
  Properties: Record<string, FunctionParameterProperty>;
  /** The list of required properties. */
  Required: string[];
}

/** Represents parameters properties for a function. */
export interface FunctionParameterProperty {
  /** The type of the parameter property. */
  Type: string;
  /** The description of property of the parameter. */
  Description: string;
  /** The list of enums. */
  Enum: string[];
}

/** Represents the result of a function. */
export interface FunctionResult {
  /** The type of the result. */
  Type: string;
}

/** Represents a tool. */
export interface Tools {
  /** The type of the tool. */
  Type: string;
  /** The function definition for the tool. */
  Function: FunctionDefinition;
}

/** Represents the definition of a function. */
export interface FunctionDefinition {
  /** The description of the function. */
  Description: string;
  /** The name of the function. */
  Name: string;
  /** The parameters for the function. */
  Parameters: unknown;
}

/** Represents the base completion request with common parameters. */
export interface BaseCompletionRequest {
  /** The maximum number of tokens to generate. */
  MaxTokens?: number;
  /** The sampling temperature to use. */
  Temperature?: number;
  /** The nucleus sampling parameter. */
  TopP?: number;
  /** The number of completions to generate. */
  N?: number;
  /** Specifies whether to stream the response. */
  Stream?: boolean;
  /** The number of log probabilities to include. */
  Logprobs?: number;
  /** Whether to include the prompt in the output. */
  Echo?: boolean;
  /** Stop sequences to terminate generation. */
  Stop: string[];
  /** The penalty for repeating words in the presence. */
  PresencePenalty?: number;
  /** The penalty for repeating tokens. */
  FrequencyPenalty?: number;
  /** The number of completions to choose the best from. */
  BestOf?: number;
  /** Adjusts likelihood of specific tokens. */
  LogitBias: Record<string, number>;
  /** The response format specification. */
  ResponseFormat: unknown;
}

export interface CompletionRequest extends BaseCompletionRequest {
  Prompt: string;
}

/** Represents a request to create a chat completion. */
export interface CreateCompletionRequest {
  /** The deployment ID. */
  deploymentId?: string;
  /** The chat completion request details. */
  completionRequest: CompletionRequest;
  /** The Azure OpenAI execution context. */
  openAiExecutionContext?: AzureOpenAIExecutionContext;
}

/** Represents a request to create embedding. */
export interface CreateEmbeddingRequest {
  /** The deployment ID. */
  deploymentId?: string;
  /** The embedding request details. */
  embeddingRequest: EmbeddingRequest;
  /** The Azure OpenAI execution context. */
  openAiExecutionContext?: AzureOpenAIExecutionContext;
}

export interface EmbeddingRequest {
  /** The object to embed. */
  Input: unknown;
}
