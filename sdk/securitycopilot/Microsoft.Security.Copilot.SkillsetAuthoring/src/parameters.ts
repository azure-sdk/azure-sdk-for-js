// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import {
  InvokeSkillRequest,
  LogProgressRequest,
  OutputSkillVariable,
  GetTokenCredentialRequest,
  GetInputRequest,
  SetInputRequest,
  AddSourcesRequest,
} from "./models";

export interface GetSkillContextHeaders {
  "X-MS-SecurityCopilot-EvaluationToken": string;
}

export interface GetSkillContextHeaderParam {
  headers: RawHttpHeadersInput & GetSkillContextHeaders;
}

export type GetSkillContextParameters = GetSkillContextHeaderParam &
  RequestParameters;

export interface InvokeSkillHeaders {
  "X-MS-SecurityCopilot-EvaluationToken": string;
}

export interface InvokeSkillBodyParam {
  body: InvokeSkillRequest;
}

export interface InvokeSkillHeaderParam {
  headers: RawHttpHeadersInput & InvokeSkillHeaders;
}

export type InvokeSkillParameters = InvokeSkillHeaderParam &
  InvokeSkillBodyParam &
  RequestParameters;

export interface GetPromptHistoryHeaders {
  "X-MS-SecurityCopilot-EvaluationToken": string;
}

export interface GetPromptHistoryHeaderParam {
  headers: RawHttpHeadersInput & GetPromptHistoryHeaders;
}

export type GetPromptHistoryParameters = GetPromptHistoryHeaderParam &
  RequestParameters;

export interface LogProgressHeaders {
  "X-MS-SecurityCopilot-EvaluationToken": string;
}

export interface LogProgressBodyParam {
  body: LogProgressRequest;
}

export interface LogProgressHeaderParam {
  headers: RawHttpHeadersInput & LogProgressHeaders;
}

export type LogProgressParameters = LogProgressHeaderParam &
  LogProgressBodyParam &
  RequestParameters;

export interface SetSkillOutputHeaders {
  "X-MS-SecurityCopilot-EvaluationToken": string;
}

export interface SetSkillOutputBodyParam {
  body: OutputSkillVariable;
}

export interface SetSkillOutputHeaderParam {
  headers: RawHttpHeadersInput & SetSkillOutputHeaders;
}

export type SetSkillOutputParameters = SetSkillOutputHeaderParam &
  SetSkillOutputBodyParam &
  RequestParameters;

export interface GetSkillsetSettingsHeaders {
  "X-MS-SecurityCopilot-EvaluationToken": string;
}

export interface GetSkillsetSettingsHeaderParam {
  headers: RawHttpHeadersInput & GetSkillsetSettingsHeaders;
}

export type GetSkillsetSettingsParameters = GetSkillsetSettingsHeaderParam &
  RequestParameters;

export interface SetSkillInvocationStartedHeaders {
  "X-MS-SecurityCopilot-EvaluationToken": string;
}

export interface SetSkillInvocationStartedHeaderParam {
  headers: RawHttpHeadersInput & SetSkillInvocationStartedHeaders;
}

export type SetSkillInvocationStartedParameters =
  SetSkillInvocationStartedHeaderParam & RequestParameters;

export interface SetSkillInvocationCompletedHeaders {
  "X-MS-SecurityCopilot-EvaluationToken": string;
}

export interface SetSkillInvocationCompletedHeaderParam {
  headers: RawHttpHeadersInput & SetSkillInvocationCompletedHeaders;
}

export type SetSkillInvocationCompletedParameters =
  SetSkillInvocationCompletedHeaderParam & RequestParameters;

export interface GetSkillsetAuthInfoHeaders {
  "X-MS-SecurityCopilot-EvaluationToken": string;
}

export interface GetSkillsetAuthInfoHeaderParam {
  headers: RawHttpHeadersInput & GetSkillsetAuthInfoHeaders;
}

export type GetSkillsetAuthInfoParameters = GetSkillsetAuthInfoHeaderParam &
  RequestParameters;

export interface GetTokenCredentialHeaders {
  "X-MS-SecurityCopilot-EvaluationToken": string;
}

export interface GetTokenCredentialBodyParam {
  body: GetTokenCredentialRequest;
}

export interface GetTokenCredentialHeaderParam {
  headers: RawHttpHeadersInput & GetTokenCredentialHeaders;
}

export type GetTokenCredentialParameters = GetTokenCredentialHeaderParam &
  GetTokenCredentialBodyParam &
  RequestParameters;

export interface GetInputHeaders {
  "X-MS-SecurityCopilot-EvaluationToken": string;
}

export interface GetInputBodyParam {
  body: GetInputRequest;
}

export interface GetInputHeaderParam {
  headers: RawHttpHeadersInput & GetInputHeaders;
}

export type GetInputParameters = GetInputHeaderParam &
  GetInputBodyParam &
  RequestParameters;

export interface SetInputHeaders {
  "X-MS-SecurityCopilot-EvaluationToken": string;
}

export interface SetInputBodyParam {
  body: SetInputRequest;
}

export interface SetInputHeaderParam {
  headers: RawHttpHeadersInput & SetInputHeaders;
}

export type SetInputParameters = SetInputHeaderParam &
  SetInputBodyParam &
  RequestParameters;

export interface AddSourcesHeaders {
  "X-MS-SecurityCopilot-EvaluationToken": string;
}

export interface AddSourcesBodyParam {
  body: AddSourcesRequest;
}

export interface AddSourcesHeaderParam {
  headers: RawHttpHeadersInput & AddSourcesHeaders;
}

export type AddSourcesParameters = AddSourcesHeaderParam &
  AddSourcesBodyParam &
  RequestParameters;
