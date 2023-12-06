// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import {
  SkillContextResponseOutput,
  OutputSkillVariableOutput,
  PromptHistoryResponseOutput,
  AuthDetailsOutput,
  AccessTokenOutput,
  SkillVariableOutput,
} from "./outputModels";

/** The request has succeeded. */
export interface GetSkillContext200Response extends HttpResponse {
  status: "200";
  body: SkillContextResponseOutput;
}

/** The request has succeeded. */
export interface InvokeSkill200Response extends HttpResponse {
  status: "200";
  body: OutputSkillVariableOutput;
}

/** The request has succeeded. */
export interface GetPromptHistory200Response extends HttpResponse {
  status: "200";
  body: PromptHistoryResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface LogProgress204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface SetSkillOutput204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface GetSkillsetSettings200Response extends HttpResponse {
  status: "200";
  body: Record<string, string>;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface SetSkillInvocationStarted204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface SetSkillInvocationCompleted204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface GetSkillsetAuthInfo200Response extends HttpResponse {
  status: "200";
  body: AuthDetailsOutput;
}

/** The request has succeeded. */
export interface GetTokenCredential200Response extends HttpResponse {
  status: "200";
  body: AccessTokenOutput;
}

/** The request has succeeded. */
export interface GetInput200Response extends HttpResponse {
  status: "200";
  body: SkillVariableOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface GetInput204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface SetInput204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface AddSources204Response extends HttpResponse {
  status: "204";
}
