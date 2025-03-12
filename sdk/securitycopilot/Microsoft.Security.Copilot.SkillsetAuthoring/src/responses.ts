// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import {
  SkillContextResponseOutput,
  OutputSkillVariableOutput,
  SkillDescriptorOutput,
  SkillsetDescriptorOutput,
  MedeinaExecutionContextOutput,
  PromptHistoryResponseOutput,
  AuthDetailsOutput,
  AccessTokenOutput,
  SkillVariableOutput,
  ChatCompletionResponseOutput,
  CompletionResponseOutput,
  EmbeddingResponseOutput,
  ECSFlightResponseOutput,
  DynamicPromptsSearchResponseOutput,
  DynamicPromptsFilterResponseOutput,
  DocumentCountResponseOutput,
  DynamicPromptsIndexFilterResponseOutput,
  PhysicalIndexExistsResponseOutput,
  SuggestedPromptsResponseOutput,
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
export interface GetSkillDescriptor200Response extends HttpResponse {
  status: "200";
  body: SkillDescriptorOutput;
}

/** The request has succeeded. */
export interface GetSkillDescriptors200Response extends HttpResponse {
  status: "200";
  body: Array<SkillDescriptorOutput>;
}

/** The request has succeeded. */
export interface GetSkillsetDescriptors200Response extends HttpResponse {
  status: "200";
  body: Array<SkillsetDescriptorOutput>;
}

/** The request has succeeded. */
export interface GetExecutionContext200Response extends HttpResponse {
  status: "200";
  body: MedeinaExecutionContextOutput;
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

/** There is no content to send for this request, but the headers may be useful. */
export interface AddSource204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface AddSuggestedPrompts204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface SetFinalResponseSettings204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface CreateChatCompletion200Response extends HttpResponse {
  status: "200";
  body: ChatCompletionResponseOutput;
}

/** The request has succeeded. */
export interface CreateCompletion200Response extends HttpResponse {
  status: "200";
  body: CompletionResponseOutput;
}

/** The request has succeeded. */
export interface CreateEmbedding200Response extends HttpResponse {
  status: "200";
  body: EmbeddingResponseOutput;
}

/** The request has succeeded. */
export interface GetEcsConfiguration200Response extends HttpResponse {
  status: "200";
  body: ECSFlightResponseOutput;
}

/** The request has succeeded. */
export interface IsEcsFlightEnabled200Response extends HttpResponse {
  status: "200";
  body: boolean;
}

/** The request has succeeded. */
export interface SearchAsync200Response extends HttpResponse {
  status: "200";
  body: DynamicPromptsSearchResponseOutput;
}

/** The request has succeeded. */
export interface HybridSearchAsync200Response extends HttpResponse {
  status: "200";
  body: DynamicPromptsSearchResponseOutput;
}

/** The request has succeeded. */
export interface FilterAsync200Response extends HttpResponse {
  status: "200";
  body: DynamicPromptsFilterResponseOutput;
}

/** The request has succeeded. */
export interface GetDocumentCountAsync200Response extends HttpResponse {
  status: "200";
  body: DocumentCountResponseOutput;
}

/** The request has succeeded. */
export interface IndexFilterAsync200Response extends HttpResponse {
  status: "200";
  body: DynamicPromptsIndexFilterResponseOutput;
}

/** The request has succeeded. */
export interface PhysicalIndexExistsAsync200Response extends HttpResponse {
  status: "200";
  body: PhysicalIndexExistsResponseOutput;
}

/** The request has succeeded. */
export interface GetSuggestedPromptsAsync200Response extends HttpResponse {
  status: "200";
  body: SuggestedPromptsResponseOutput;
}

/** The request has succeeded. */
export interface Render200Response extends HttpResponse {
  status: "200";
  body: string;
}
