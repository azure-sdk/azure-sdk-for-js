// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetSkillContextParameters,
  InvokeSkillParameters,
  GetSkillDescriptorParameters,
  GetSkillDescriptorsParameters,
  GetSkillsetDescriptorsParameters,
  GetExecutionContextParameters,
  GetPromptHistoryParameters,
  LogProgressParameters,
  SetSkillOutputParameters,
  GetSkillsetSettingsParameters,
  SetSkillInvocationStartedParameters,
  SetSkillInvocationCompletedParameters,
  GetSkillsetAuthInfoParameters,
  GetTokenCredentialParameters,
  GetInputParameters,
  SetInputParameters,
  AddSourcesParameters,
  AddSourceParameters,
  AddSuggestedPromptsParameters,
  SetFinalResponseSettingsParameters,
  CreateChatCompletionParameters,
  CreateCompletionParameters,
  CreateEmbeddingParameters,
} from "./parameters";
import {
  GetSkillContext200Response,
  InvokeSkill200Response,
  GetSkillDescriptor200Response,
  GetSkillDescriptors200Response,
  GetSkillsetDescriptors200Response,
  GetExecutionContext200Response,
  GetPromptHistory200Response,
  LogProgress204Response,
  SetSkillOutput204Response,
  GetSkillsetSettings200Response,
  SetSkillInvocationStarted204Response,
  SetSkillInvocationCompleted204Response,
  GetSkillsetAuthInfo200Response,
  GetTokenCredential200Response,
  GetInput200Response,
  GetInput204Response,
  SetInput204Response,
  AddSources204Response,
  AddSource204Response,
  AddSuggestedPrompts204Response,
  SetFinalResponseSettings204Response,
  CreateChatCompletion200Response,
  CreateCompletion200Response,
  CreateEmbedding200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetSkillContext {
  /** Get the SkillContext for the current skill invocation */
  get(
    options: GetSkillContextParameters
  ): StreamableMethod<GetSkillContext200Response>;
}

export interface InvokeSkill {
  /** Invokes a skill. Allows current skill to invoke dependency skills. */
  post(
    options: InvokeSkillParameters
  ): StreamableMethod<InvokeSkill200Response>;
}

export interface GetSkillDescriptor {
  /** Get skill descriptor */
  get(
    options: GetSkillDescriptorParameters
  ): StreamableMethod<GetSkillDescriptor200Response>;
}

export interface GetSkillDescriptors {
  /** Get skill descriptors */
  get(
    options: GetSkillDescriptorsParameters
  ): StreamableMethod<GetSkillDescriptors200Response>;
}

export interface GetSkillsetDescriptors {
  /** Get skillset descriptors */
  get(
    options: GetSkillsetDescriptorsParameters
  ): StreamableMethod<GetSkillsetDescriptors200Response>;
}

export interface GetExecutionContext {
  /** Get execution context */
  get(
    options: GetExecutionContextParameters
  ): StreamableMethod<GetExecutionContext200Response>;
}

export interface GetPromptHistory {
  /** Get prompt history */
  get(
    options: GetPromptHistoryParameters
  ): StreamableMethod<GetPromptHistory200Response>;
}

export interface LogProgress {
  /** Log a progress message for a skill invocation */
  post(
    options: LogProgressParameters
  ): StreamableMethod<LogProgress204Response>;
}

export interface SetSkillOutput {
  /** Sets the skill output */
  post(
    options: SetSkillOutputParameters
  ): StreamableMethod<SetSkillOutput204Response>;
}

export interface GetSkillsetSettings {
  /** Gets the skillset settings */
  get(
    options: GetSkillsetSettingsParameters
  ): StreamableMethod<GetSkillsetSettings200Response>;
}

export interface SetSkillInvocationStarted {
  /** Notifies security copilot backend service that the skill has been invoked */
  post(
    options: SetSkillInvocationStartedParameters
  ): StreamableMethod<SetSkillInvocationStarted204Response>;
}

export interface SetSkillInvocationCompleted {
  /** Notifies security copilot backend service that the skill invocation has completed */
  post(
    options: SetSkillInvocationCompletedParameters
  ): StreamableMethod<SetSkillInvocationCompleted204Response>;
}

export interface GetSkillsetAuthInfo {
  /** Gets the skillset auth related information */
  get(
    options: GetSkillsetAuthInfoParameters
  ): StreamableMethod<GetSkillsetAuthInfo200Response>;
}

export interface GetTokenCredential {
  /** Gets the token credentials */
  get(
    options: GetTokenCredentialParameters
  ): StreamableMethod<GetTokenCredential200Response>;
}

export interface GetInput {
  /** Gets the skill input */
  get(
    options: GetInputParameters
  ): StreamableMethod<GetInput200Response | GetInput204Response>;
}

export interface SetInput {
  /** Sets the input for the skill */
  post(options: SetInputParameters): StreamableMethod<SetInput204Response>;
}

export interface AddSources {
  /** Adds a list of sources to the output */
  post(options: AddSourcesParameters): StreamableMethod<AddSources204Response>;
}

export interface AddSource {
  /** Adds a source to the output */
  post(options: AddSourceParameters): StreamableMethod<AddSource204Response>;
}

export interface AddSuggestedPrompts {
  /**  Adds a list of suggested prompts to the skill context */
  post(
    options: AddSuggestedPromptsParameters
  ): StreamableMethod<AddSuggestedPrompts204Response>;
}

export interface SetFinalResponseSettings {
  /** Sets the final response settings */
  post(
    options: SetFinalResponseSettingsParameters
  ): StreamableMethod<SetFinalResponseSettings204Response>;
}

export interface CreateChatCompletion {
  /** Executes an Open AI Chat completion request */
  post(
    options: CreateChatCompletionParameters
  ): StreamableMethod<CreateChatCompletion200Response>;
}

export interface CreateCompletion {
  /** Executes an Open AI completion request */
  post(
    options: CreateCompletionParameters
  ): StreamableMethod<CreateCompletion200Response>;
}

export interface CreateEmbedding {
  /** Creates Embedding for a prompt or message */
  post(
    options: CreateEmbeddingParameters
  ): StreamableMethod<CreateEmbedding200Response>;
}

export interface Routes {
  /** Resource for '/skillContext' has methods for the following verbs: get */
  (path: "/skillContext"): GetSkillContext;
  /** Resource for '/skillContext/invokeSkill' has methods for the following verbs: post */
  (path: "/skillContext/invokeSkill"): InvokeSkill;
  /** Resource for '/skillContext/skillDescriptor' has methods for the following verbs: get */
  (path: "/skillContext/skillDescriptor"): GetSkillDescriptor;
  /** Resource for '/skillContext/skillDescriptors' has methods for the following verbs: get */
  (path: "/skillContext/skillDescriptors"): GetSkillDescriptors;
  /** Resource for '/skillContext/skillsetDescriptors' has methods for the following verbs: get */
  (path: "/skillContext/skillsetDescriptors"): GetSkillsetDescriptors;
  /** Resource for '/skillContext/executionContext' has methods for the following verbs: get */
  (path: "/skillContext/executionContext"): GetExecutionContext;
  /** Resource for '/skillContext/promptHistory' has methods for the following verbs: get */
  (path: "/skillContext/promptHistory"): GetPromptHistory;
  /** Resource for '/skillContext/logProgress' has methods for the following verbs: post */
  (path: "/skillContext/logProgress"): LogProgress;
  /** Resource for '/skillContext/setOutputAsync' has methods for the following verbs: post */
  (path: "/skillContext/setOutputAsync"): SetSkillOutput;
  /** Resource for '/skillContext/skillsetSettings' has methods for the following verbs: get */
  (path: "/skillContext/skillsetSettings"): GetSkillsetSettings;
  /** Resource for '/skillContext/setSkillInvocationStarted' has methods for the following verbs: post */
  (path: "/skillContext/setSkillInvocationStarted"): SetSkillInvocationStarted;
  /** Resource for '/skillContext/setSkillInvocationCompleted' has methods for the following verbs: post */
  (
    path: "/skillContext/setSkillInvocationCompleted"
  ): SetSkillInvocationCompleted;
  /** Resource for '/skillContext/getSkillsetAuthInfoAsync' has methods for the following verbs: get */
  (path: "/skillContext/getSkillsetAuthInfoAsync"): GetSkillsetAuthInfo;
  /** Resource for '/skillContext/getTokenCredentialAsync' has methods for the following verbs: get */
  (path: "/skillContext/getTokenCredentialAsync"): GetTokenCredential;
  /** Resource for '/skillContext/getInputAsync' has methods for the following verbs: get */
  (path: "/skillContext/getInputAsync"): GetInput;
  /** Resource for '/skillContext/setInputAsync' has methods for the following verbs: post */
  (path: "/skillContext/setInputAsync"): SetInput;
  /** Resource for '/skillContext/AddSources' has methods for the following verbs: post */
  (path: "/skillContext/AddSources"): AddSources;
  /** Resource for '/skillContext/AddSource' has methods for the following verbs: post */
  (path: "/skillContext/AddSource"): AddSource;
  /** Resource for '/skillContext/AddSuggestedPrompts' has methods for the following verbs: post */
  (path: "/skillContext/AddSuggestedPrompts"): AddSuggestedPrompts;
  /** Resource for '/skillContext/SetFinalResponseSettings' has methods for the following verbs: post */
  (path: "/skillContext/SetFinalResponseSettings"): SetFinalResponseSettings;
  /** Resource for '/medeinaOpenAI/createChatCompletion' has methods for the following verbs: post */
  (path: "/medeinaOpenAI/createChatCompletion"): CreateChatCompletion;
  /** Resource for '/medeinaOpenAI/createCompletion' has methods for the following verbs: post */
  (path: "/medeinaOpenAI/createCompletion"): CreateCompletion;
  /** Resource for '/medeinaOpenAI/CreateEmbedding' has methods for the following verbs: post */
  (path: "/medeinaOpenAI/CreateEmbedding"): CreateEmbedding;
}

export type SkillContextClient = Client & {
  path: Routes;
};
