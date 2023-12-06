// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetSkillContextParameters,
  InvokeSkillParameters,
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
} from "./parameters";
import {
  GetSkillContext200Response,
  InvokeSkill200Response,
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

export interface Routes {
  /** Resource for '/skillContext' has methods for the following verbs: get */
  (path: "/skillContext"): GetSkillContext;
  /** Resource for '/skillContext/invokeSkill' has methods for the following verbs: post */
  (path: "/skillContext/invokeSkill"): InvokeSkill;
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
}

export type SkillContextClient = Client & {
  path: Routes;
};
