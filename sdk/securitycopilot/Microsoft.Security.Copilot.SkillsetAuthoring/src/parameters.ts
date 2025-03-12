// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import {
  InvokeSkillRequest,
  LogProgressRequest,
  EvaluationResultOutput,
  GetTokenCredentialRequest,
  GetInputRequest,
  SetInputRequest,
  AddSourcesRequest,
  AddSourceRequest,
  AddSuggestedPromptsRequest,
  SetFinalResponseSettingsRequest,
  CreateChatCompletionRequest,
  CreateCompletionRequest,
  CreateEmbeddingRequest,
  EcsConfigurationRequest,
  FlightEnabledRequest,
  DynamicPromptsSearchRequest,
  DynamicPromptsFilterRequest,
  DynamicPromptsBaseRequest,
  DynamicPromptsIndexFilterRequest,
  DynamicPromptsSuggestedPromptsRequest,
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

export interface GetSkillDescriptorHeaders {
  "X-MS-SecurityCopilot-EvaluationToken": string;
}

export interface GetSkillDescriptorBodyParam {
  body: string;
}

export interface GetSkillDescriptorHeaderParam {
  headers: RawHttpHeadersInput & GetSkillDescriptorHeaders;
}

export type GetSkillDescriptorParameters = GetSkillDescriptorHeaderParam &
  GetSkillDescriptorBodyParam &
  RequestParameters;

export interface GetSkillDescriptorsHeaders {
  "X-MS-SecurityCopilot-EvaluationToken": string;
}

export interface GetSkillDescriptorsHeaderParam {
  headers: RawHttpHeadersInput & GetSkillDescriptorsHeaders;
}

export type GetSkillDescriptorsParameters = GetSkillDescriptorsHeaderParam &
  RequestParameters;

export interface GetSkillsetDescriptorsHeaders {
  "X-MS-SecurityCopilot-EvaluationToken": string;
}

export interface GetSkillsetDescriptorsHeaderParam {
  headers: RawHttpHeadersInput & GetSkillsetDescriptorsHeaders;
}

export type GetSkillsetDescriptorsParameters =
  GetSkillsetDescriptorsHeaderParam & RequestParameters;

export interface GetExecutionContextHeaders {
  "X-MS-SecurityCopilot-EvaluationToken": string;
}

export interface GetExecutionContextHeaderParam {
  headers: RawHttpHeadersInput & GetExecutionContextHeaders;
}

export type GetExecutionContextParameters = GetExecutionContextHeaderParam &
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
  body: EvaluationResultOutput;
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

export interface AddSourceHeaders {
  "X-MS-SecurityCopilot-EvaluationToken": string;
}

export interface AddSourceBodyParam {
  body: AddSourceRequest;
}

export interface AddSourceHeaderParam {
  headers: RawHttpHeadersInput & AddSourceHeaders;
}

export type AddSourceParameters = AddSourceHeaderParam &
  AddSourceBodyParam &
  RequestParameters;

export interface AddSuggestedPromptsHeaders {
  "X-MS-SecurityCopilot-EvaluationToken": string;
}

export interface AddSuggestedPromptsBodyParam {
  body: AddSuggestedPromptsRequest;
}

export interface AddSuggestedPromptsHeaderParam {
  headers: RawHttpHeadersInput & AddSuggestedPromptsHeaders;
}

export type AddSuggestedPromptsParameters = AddSuggestedPromptsHeaderParam &
  AddSuggestedPromptsBodyParam &
  RequestParameters;

export interface SetFinalResponseSettingsHeaders {
  "X-MS-SecurityCopilot-EvaluationToken": string;
}

export interface SetFinalResponseSettingsBodyParam {
  body: SetFinalResponseSettingsRequest;
}

export interface SetFinalResponseSettingsHeaderParam {
  headers: RawHttpHeadersInput & SetFinalResponseSettingsHeaders;
}

export type SetFinalResponseSettingsParameters =
  SetFinalResponseSettingsHeaderParam &
    SetFinalResponseSettingsBodyParam &
    RequestParameters;

export interface CreateChatCompletionHeaders {
  "X-MS-SecurityCopilot-EvaluationToken": string;
}

export interface CreateChatCompletionBodyParam {
  body: CreateChatCompletionRequest;
}

export interface CreateChatCompletionHeaderParam {
  headers: RawHttpHeadersInput & CreateChatCompletionHeaders;
}

export type CreateChatCompletionParameters = CreateChatCompletionHeaderParam &
  CreateChatCompletionBodyParam &
  RequestParameters;

export interface CreateCompletionHeaders {
  "X-MS-SecurityCopilot-EvaluationToken": string;
}

export interface CreateCompletionBodyParam {
  body: CreateCompletionRequest;
}

export interface CreateCompletionHeaderParam {
  headers: RawHttpHeadersInput & CreateCompletionHeaders;
}

export type CreateCompletionParameters = CreateCompletionHeaderParam &
  CreateCompletionBodyParam &
  RequestParameters;

export interface CreateEmbeddingHeaders {
  "X-MS-SecurityCopilot-EvaluationToken": string;
}

export interface CreateEmbeddingBodyParam {
  body: CreateEmbeddingRequest;
}

export interface CreateEmbeddingHeaderParam {
  headers: RawHttpHeadersInput & CreateEmbeddingHeaders;
}

export type CreateEmbeddingParameters = CreateEmbeddingHeaderParam &
  CreateEmbeddingBodyParam &
  RequestParameters;

export interface GetEcsConfigurationHeaders {
  "X-MS-SecurityCopilot-EvaluationToken": string;
}

export interface GetEcsConfigurationBodyParam {
  body: EcsConfigurationRequest;
}

export interface GetEcsConfigurationHeaderParam {
  headers: RawHttpHeadersInput & GetEcsConfigurationHeaders;
}

export type GetEcsConfigurationParameters = GetEcsConfigurationHeaderParam &
  GetEcsConfigurationBodyParam &
  RequestParameters;

export interface IsEcsFlightEnabledHeaders {
  "X-MS-SecurityCopilot-EvaluationToken": string;
}

export interface IsEcsFlightEnabledBodyParam {
  body: FlightEnabledRequest;
}

export interface IsEcsFlightEnabledHeaderParam {
  headers: RawHttpHeadersInput & IsEcsFlightEnabledHeaders;
}

export type IsEcsFlightEnabledParameters = IsEcsFlightEnabledHeaderParam &
  IsEcsFlightEnabledBodyParam &
  RequestParameters;

export interface SearchAsyncHeaders {
  "X-MS-SecurityCopilot-EvaluationToken": string;
}

export interface SearchAsyncBodyParam {
  body: DynamicPromptsSearchRequest;
}

export interface SearchAsyncHeaderParam {
  headers: RawHttpHeadersInput & SearchAsyncHeaders;
}

export type SearchAsyncParameters = SearchAsyncHeaderParam &
  SearchAsyncBodyParam &
  RequestParameters;

export interface HybridSearchAsyncHeaders {
  "X-MS-SecurityCopilot-EvaluationToken": string;
}

export interface HybridSearchAsyncBodyParam {
  body: DynamicPromptsSearchRequest;
}

export interface HybridSearchAsyncHeaderParam {
  headers: RawHttpHeadersInput & HybridSearchAsyncHeaders;
}

export type HybridSearchAsyncParameters = HybridSearchAsyncHeaderParam &
  HybridSearchAsyncBodyParam &
  RequestParameters;

export interface FilterAsyncHeaders {
  "X-MS-SecurityCopilot-EvaluationToken": string;
}

export interface FilterAsyncBodyParam {
  body?: DynamicPromptsFilterRequest;
}

export interface FilterAsyncHeaderParam {
  headers: RawHttpHeadersInput & FilterAsyncHeaders;
}

export type FilterAsyncParameters = FilterAsyncHeaderParam &
  FilterAsyncBodyParam &
  RequestParameters;

export interface GetDocumentCountAsyncHeaders {
  "X-MS-SecurityCopilot-EvaluationToken": string;
}

export interface GetDocumentCountAsyncBodyParam {
  body: DynamicPromptsBaseRequest;
}

export interface GetDocumentCountAsyncHeaderParam {
  headers: RawHttpHeadersInput & GetDocumentCountAsyncHeaders;
}

export type GetDocumentCountAsyncParameters = GetDocumentCountAsyncHeaderParam &
  GetDocumentCountAsyncBodyParam &
  RequestParameters;

export interface IndexFilterAsyncHeaders {
  "X-MS-SecurityCopilot-EvaluationToken": string;
}

export interface IndexFilterAsyncBodyParam {
  body: DynamicPromptsIndexFilterRequest;
}

export interface IndexFilterAsyncHeaderParam {
  headers: RawHttpHeadersInput & IndexFilterAsyncHeaders;
}

export type IndexFilterAsyncParameters = IndexFilterAsyncHeaderParam &
  IndexFilterAsyncBodyParam &
  RequestParameters;

export interface PhysicalIndexExistsAsyncHeaders {
  "X-MS-SecurityCopilot-EvaluationToken": string;
}

export interface PhysicalIndexExistsAsyncHeaderParam {
  headers: RawHttpHeadersInput & PhysicalIndexExistsAsyncHeaders;
}

export type PhysicalIndexExistsAsyncParameters =
  PhysicalIndexExistsAsyncHeaderParam & RequestParameters;

export interface GetSuggestedPromptsAsyncHeaders {
  "X-MS-SecurityCopilot-EvaluationToken": string;
}

export interface GetSuggestedPromptsAsyncBodyParam {
  body: DynamicPromptsSuggestedPromptsRequest;
}

export interface GetSuggestedPromptsAsyncHeaderParam {
  headers: RawHttpHeadersInput & GetSuggestedPromptsAsyncHeaders;
}

export type GetSuggestedPromptsAsyncParameters =
  GetSuggestedPromptsAsyncHeaderParam &
    GetSuggestedPromptsAsyncBodyParam &
    RequestParameters;
export type RenderParameters = RequestParameters;
