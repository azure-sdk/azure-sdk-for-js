
import { AbortSignalLike } from '@azure/abort-controller';
import { CancelOnProgress } from '@azure/core-lro';
import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { CreateHttpPollerOptions } from '@azure/core-lro';
import { ErrorModel } from '@azure-rest/core-client';
import { ErrorResponse } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { KeyCredential } from '@azure/core-auth';
import { OperationState } from '@azure/core-lro';
import { PathUncheckedResponse } from '@azure-rest/core-client';
import { RawHttpHeaders } from '@azure/core-rest-pipeline';
import { RawHttpHeadersInput } from '@azure/core-rest-pipeline';
import { RequestParameters } from '@azure-rest/core-client';
import { StreamableMethod } from '@azure-rest/core-client';
import { TokenCredential } from '@azure/core-auth';

// @public
export interface AddImageIncidentSamplesOptions {
    incidentSamples: Array<ImageIncidentSample>;
}

// @public
export interface AddImageIncidentSamplesResultOutput {
    incidentSamples: Array<ListImageIncidentSampleResultOutput>;
}

// @public
export interface AddOrUpdateTextBlocklistItemsOptions {
    blocklistItems: Array<TextBlocklistItem>;
}

// @public
export interface AddOrUpdateTextBlocklistItemsResultOutput {
    blocklistItems: Array<TextBlocklistItemOutput>;
}

// @public
export interface AddTextIncidentSamplesOptions {
    incidentSamples: Array<TextIncidentSample>;
}

// @public
export interface AddTextIncidentSamplesResultOutput {
    incidentSamples: Array<TextIncidentSampleOutput>;
}

// @public
export interface AnalyzeImageDetectIncidentsOptions {
    image: ImageData;
    incidentNames: string[];
}

// @public
export interface AnalyzeImageOptions {
    categories?: ImageCategory[];
    image: ImageData;
    outputType?: AnalyzeImageOutputType;
}

// @public
export type AnalyzeImageOutputType = string;

// @public
export interface AnalyzeImageResultOutput {
    categoriesAnalysis: Array<ImageCategoriesAnalysisOutput>;
}

// @public
export interface AnalyzeImageWithTextOptions {
    categories?: ImageWithTextCategory[];
    enableOcr: boolean;
    image: ImageData;
    text?: string;
}

// @public
export interface AnalyzeImageWithTextResultOutput {
    categoriesAnalysis: Array<ImageWithTextCategoriesAnalysisOutput>;
}

// @public
export interface AnalyzeTextCustomCategoryOption {
    categoryName: string;
    text: string;
    version?: number;
}

// @public
export interface AnalyzeTextCustomCategoryResultOutput {
    customCategoryAnalysis: TextCustomCategoryAnalysisOutput;
}

// @public
export interface AnalyzeTextDetectIncidentsOptions {
    incidentNames: string[];
    text: string;
}

// @public
export interface AnalyzeTextGroundednessOptions {
    correction?: boolean;
    domain?: GroundednessDomain;
    groundingSources: string[];
    llmResource?: LLMResource;
    qna?: QnAOptions;
    reasoning?: boolean;
    task?: GroundednessTask;
    text: string;
}

// @public
export interface AnalyzeTextGroundednessResultOutput {
    correctedText?: string;
    ungroundedDetails: Array<UngroundednessDetailsOutput>;
    ungroundedDetected: boolean;
    ungroundedPercentage: number;
}

// @public
export interface AnalyzeTextOptions {
    blocklistNames?: string[];
    categories?: TextCategory[];
    haltOnBlocklistHit?: boolean;
    outputType?: AnalyzeTextOutputType;
    text: string;
}

// @public
export type AnalyzeTextOutputType = string;

// @public
export interface AnalyzeTextResultOutput {
    blocklistsMatch?: Array<TextBlocklistMatchOutput>;
    categoriesAnalysis: Array<TextCategoriesAnalysisOutput>;
}

// @public
export interface AppliedFor {
    role: RoleType;
    source: SourceType;
}

// @public
export interface AppliedForOutput {
    role: RoleTypeOutput;
    source: SourceTypeOutput;
}

// @public
export interface BlockingCriteria {
    allowedRiskLevel: RiskLevel;
    allowedSeverity: number;
    enabled: boolean;
    isDetected: boolean;
    kind: BlockingCriteriaKind;
}

// @public
export type BlockingCriteriaKind = string;

// @public
export type BlockingCriteriaKindOutput = string;

// @public
export interface BlockingCriteriaOutput {
    allowedRiskLevel: RiskLevelOutput;
    allowedSeverity: number;
    enabled: boolean;
    isDetected: boolean;
    kind: BlockingCriteriaKindOutput;
}

// @public
export interface BlocklistTaskResultOutput {
    isDetected: boolean;
    name: string;
}

// @public
export interface BlocklistTaskSetting {
    name: string;
}

// @public
export interface BlocklistTaskSettingOutput {
    name: string;
}

// @public
export interface CodeCitationOutput {
    license: string;
    sourceUrls: string[];
}

// @public
export interface CodeProtectedMaterialAnalysisResultOutput {
    codeCitations: Array<CodeCitationOutput>;
    detected: boolean;
}

// @public (undocumented)
export type ContentSafetyClient = Client & {
    path: Routes;
};

// @public
export interface ContentSafetyClientOptions extends ClientOptions {
    apiVersion?: string;
}

// @public
function createClient(endpointParam: string, credentials: TokenCredential | KeyCredential, { apiVersion, ...options }?: ContentSafetyClientOptions): ContentSafetyClient;
export default createClient;

// @public
export interface CustomCategoryLongRunningOperationStatusResultOutput {
}

// @public
export interface CustomCategoryOperationDetailOutput {
    error?: ErrorModel;
    id: string;
    readonly status: CustomCategoryOperationStatusOutput;
}

// @public
export type CustomCategoryOperationStatusOutput = string;

// @public
export type CustomCategoryStatus = string;

// @public
export type CustomCategoryStatusOutput = string;

// @public
export interface CustomCategoryTaskResultOutput {
    isDetected: boolean;
    name: string;
}

// @public
export interface CustomHarmCategoryTaskSetting {
    name: string;
}

// @public
export interface CustomHarmCategoryTaskSettingOutput {
    name: string;
}

// @public
export interface DetectCodeProtectedMaterialOptions {
    code: string;
}

// @public
export interface DetectCodeProtectedMaterialResultOutput {
    protectedMaterialAnalysis: CodeProtectedMaterialAnalysisResultOutput;
}

// @public
export interface DetectImageProtectedMaterialOptions {
    image: ImageData;
}

// @public
export interface DetectImageProtectedMaterialResultOutput {
    protectedMaterialAnalysis: ImageProtectedMaterialAnalysisResultOutput;
}

// @public
export interface DetectIncidentsResultOutput {
    incidentMatches: Array<IncidentMatchOutput>;
}

// @public
export interface DetectTextProtectedMaterialOptions {
    text: string;
}

// @public
export interface DetectTextProtectedMaterialResultOutput {
    protectedMaterialAnalysis: TextProtectedMaterialAnalysisResultOutput;
}

// @public
export interface DocumentInjectionAnalysisResultOutput {
    attackDetected: boolean;
}

// @public
export type GetArrayType<T> = T extends Array<infer TData> ? TData : never;

// @public
export function getLongRunningPoller<TResult extends TextIncidentOperationsDeployLogicalResponse | TextIncidentOperationsDeployDefaultResponse>(client: Client, initialResponse: TextIncidentOperationsDeploy202Response | TextIncidentOperationsDeployDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;

// @public (undocumented)
export function getLongRunningPoller<TResult extends ImageIncidentOperationsDeployLogicalResponse | ImageIncidentOperationsDeployDefaultResponse>(client: Client, initialResponse: ImageIncidentOperationsDeploy202Response | ImageIncidentOperationsDeployDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;

// @public (undocumented)
export function getLongRunningPoller<TResult extends TextCustomizedCategoryOperationsBuildLogicalResponse | TextCustomizedCategoryOperationsBuildDefaultResponse>(client: Client, initialResponse: TextCustomizedCategoryOperationsBuild202Response | TextCustomizedCategoryOperationsBuildDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;

// @public
export type GetPage<TPage> = (pageLink: string) => Promise<{
    page: TPage;
    nextPageLink?: string;
}>;

// @public
export type GroundednessDomain = string;

// @public
export type GroundednessTask = string;

// @public
export type HarmCategory = string;

// @public
export type HarmCategoryOutput = string;

// @public
export interface HarmCategoryTaskResultOutput {
    details?: PromptInjectionDetailOutput;
    harmCategory: HarmCategoryOutput;
    harmConfigId: string;
    isDetected: boolean;
    riskLevel: RiskLevelOutput;
    severity: number;
}

// @public
export interface HarmCategoryTaskSetting {
    harmCategory: HarmCategory;
    harmConfigId: string;
}

// @public
export interface HarmCategoryTaskSettingOutput {
    harmCategory: HarmCategoryOutput;
    harmConfigId: string;
}

// @public
export interface ImageCategoriesAnalysisOutput {
    category: ImageCategoryOutput;
    severity?: number;
}

// @public
export type ImageCategory = string;

// @public
export type ImageCategoryOutput = string;

// @public
export interface ImageData {
    blobUrl?: string;
    content?: string;
}

// @public
export interface ImageDataResultOutput {
    content?: string;
}

// @public
export interface ImageIncident {
    created: Date | string;
    incidentName: string;
    lastUpdated: Date | string;
}

// @public
export interface ImageIncidentOperationResultOutput {
    error?: ErrorModel;
    id: string;
    readonly status: IncidentOperationStatusOutput;
}

// @public (undocumented)
export interface ImageIncidentOperationsAddIncidentSamples {
    post(options: ImageIncidentOperationsAddIncidentSamplesParameters): StreamableMethod<ImageIncidentOperationsAddIncidentSamples200Response | ImageIncidentOperationsAddIncidentSamplesDefaultResponse>;
}

// @public
export interface ImageIncidentOperationsAddIncidentSamples200Response extends HttpResponse {
    // (undocumented)
    body: AddImageIncidentSamplesResultOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface ImageIncidentOperationsAddIncidentSamplesBodyParam {
    // (undocumented)
    body: AddImageIncidentSamplesOptions;
}

// @public (undocumented)
export interface ImageIncidentOperationsAddIncidentSamplesDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface ImageIncidentOperationsAddIncidentSamplesDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & ImageIncidentOperationsAddIncidentSamplesDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type ImageIncidentOperationsAddIncidentSamplesParameters = ImageIncidentOperationsAddIncidentSamplesBodyParam & RequestParameters;

// @public
export interface ImageIncidentOperationsCreateOrUpdateIncident200Response extends HttpResponse {
    // (undocumented)
    body: ImageIncidentOutput;
    // (undocumented)
    status: "200";
}

// @public
export interface ImageIncidentOperationsCreateOrUpdateIncident201Response extends HttpResponse {
    // (undocumented)
    body: ImageIncidentOutput;
    // (undocumented)
    status: "201";
}

// @public (undocumented)
export interface ImageIncidentOperationsCreateOrUpdateIncidentBodyParam {
    body: ImageIncidentResourceMergeAndPatch;
}

// @public (undocumented)
export interface ImageIncidentOperationsCreateOrUpdateIncidentDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface ImageIncidentOperationsCreateOrUpdateIncidentDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & ImageIncidentOperationsCreateOrUpdateIncidentDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export interface ImageIncidentOperationsCreateOrUpdateIncidentMediaTypesParam {
    contentType: "application/merge-patch+json";
}

// @public (undocumented)
export type ImageIncidentOperationsCreateOrUpdateIncidentParameters = ImageIncidentOperationsCreateOrUpdateIncidentMediaTypesParam & ImageIncidentOperationsCreateOrUpdateIncidentBodyParam & RequestParameters;

// @public
export interface ImageIncidentOperationsDeleteIncident204Response extends HttpResponse {
    // (undocumented)
    status: "204";
}

// @public (undocumented)
export interface ImageIncidentOperationsDeleteIncidentDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface ImageIncidentOperationsDeleteIncidentDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & ImageIncidentOperationsDeleteIncidentDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type ImageIncidentOperationsDeleteIncidentParameters = RequestParameters;

// @public (undocumented)
export interface ImageIncidentOperationsDeploy {
    post(options?: ImageIncidentOperationsDeployParameters): StreamableMethod<ImageIncidentOperationsDeploy202Response | ImageIncidentOperationsDeployDefaultResponse>;
}

// @public (undocumented)
export interface ImageIncidentOperationsDeploy202Headers {
    "operation-id": string;
    "operation-location": string;
}

// @public
export interface ImageIncidentOperationsDeploy202Response extends HttpResponse {
    // (undocumented)
    body: ResourceOperationStatusOutput;
    // (undocumented)
    headers: RawHttpHeaders & ImageIncidentOperationsDeploy202Headers;
    // (undocumented)
    status: "202";
}

// @public (undocumented)
export interface ImageIncidentOperationsDeployDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface ImageIncidentOperationsDeployDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & ImageIncidentOperationsDeployDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export interface ImageIncidentOperationsDeployHeaderParam {
    // (undocumented)
    headers?: RawHttpHeadersInput & ImageIncidentOperationsDeployHeaders;
}

// @public (undocumented)
export interface ImageIncidentOperationsDeployHeaders {
    "Operation-Id"?: string;
}

// @public
export interface ImageIncidentOperationsDeployLogicalResponse extends HttpResponse {
    // (undocumented)
    body: ResourceOperationStatusOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export type ImageIncidentOperationsDeployParameters = ImageIncidentOperationsDeployHeaderParam & RequestParameters;

// @public (undocumented)
export interface ImageIncidentOperationsGetIncidents {
    delete(options?: ImageIncidentOperationsDeleteIncidentParameters): StreamableMethod<ImageIncidentOperationsDeleteIncident204Response | ImageIncidentOperationsDeleteIncidentDefaultResponse>;
    get(options?: ImageIncidentOperationsGetIncidentsParameters): StreamableMethod<ImageIncidentOperationsGetIncidents200Response | ImageIncidentOperationsGetIncidentsDefaultResponse>;
    patch(options: ImageIncidentOperationsCreateOrUpdateIncidentParameters): StreamableMethod<ImageIncidentOperationsCreateOrUpdateIncident200Response | ImageIncidentOperationsCreateOrUpdateIncident201Response | ImageIncidentOperationsCreateOrUpdateIncidentDefaultResponse>;
}

// @public
export interface ImageIncidentOperationsGetIncidents200Response extends HttpResponse {
    // (undocumented)
    body: ImageIncidentOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface ImageIncidentOperationsGetIncidentSample {
    get(options?: ImageIncidentOperationsGetIncidentSampleParameters): StreamableMethod<ImageIncidentOperationsGetIncidentSample200Response | ImageIncidentOperationsGetIncidentSampleDefaultResponse>;
}

// @public
export interface ImageIncidentOperationsGetIncidentSample200Response extends HttpResponse {
    // (undocumented)
    body: ImageIncidentSampleResultOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface ImageIncidentOperationsGetIncidentSampleDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface ImageIncidentOperationsGetIncidentSampleDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & ImageIncidentOperationsGetIncidentSampleDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type ImageIncidentOperationsGetIncidentSampleParameters = RequestParameters;

// @public (undocumented)
export interface ImageIncidentOperationsGetIncidentsDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface ImageIncidentOperationsGetIncidentsDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & ImageIncidentOperationsGetIncidentsDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type ImageIncidentOperationsGetIncidentsParameters = RequestParameters;

// @public (undocumented)
export interface ImageIncidentOperationsGetLongRunningOperation {
    get(options?: ImageIncidentOperationsGetLongRunningOperationParameters): StreamableMethod<ImageIncidentOperationsGetLongRunningOperation200Response | ImageIncidentOperationsGetLongRunningOperationDefaultResponse>;
}

// @public
export interface ImageIncidentOperationsGetLongRunningOperation200Response extends HttpResponse {
    // (undocumented)
    body: ImageIncidentOperationResultOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface ImageIncidentOperationsGetLongRunningOperationDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface ImageIncidentOperationsGetLongRunningOperationDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & ImageIncidentOperationsGetLongRunningOperationDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type ImageIncidentOperationsGetLongRunningOperationParameters = RequestParameters;

// @public (undocumented)
export interface ImageIncidentOperationsListIncidents {
    get(options?: ImageIncidentOperationsListIncidentsParameters): StreamableMethod<ImageIncidentOperationsListIncidents200Response | ImageIncidentOperationsListIncidentsDefaultResponse>;
}

// @public
export interface ImageIncidentOperationsListIncidents200Response extends HttpResponse {
    // (undocumented)
    body: PagedImageIncidentOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface ImageIncidentOperationsListIncidentSamples {
    get(options?: ImageIncidentOperationsListIncidentSamplesParameters): StreamableMethod<ImageIncidentOperationsListIncidentSamples200Response | ImageIncidentOperationsListIncidentSamplesDefaultResponse>;
}

// @public
export interface ImageIncidentOperationsListIncidentSamples200Response extends HttpResponse {
    // (undocumented)
    body: PagedListImageIncidentSampleResultOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface ImageIncidentOperationsListIncidentSamplesDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface ImageIncidentOperationsListIncidentSamplesDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & ImageIncidentOperationsListIncidentSamplesDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type ImageIncidentOperationsListIncidentSamplesParameters = ImageIncidentOperationsListIncidentSamplesQueryParam & RequestParameters;

// @public (undocumented)
export interface ImageIncidentOperationsListIncidentSamplesQueryParam {
    // (undocumented)
    queryParameters?: ImageIncidentOperationsListIncidentSamplesQueryParamProperties;
}

// @public (undocumented)
export interface ImageIncidentOperationsListIncidentSamplesQueryParamProperties {
    maxpagesize?: number;
    skip?: number;
    top?: number;
}

// @public (undocumented)
export interface ImageIncidentOperationsListIncidentsDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface ImageIncidentOperationsListIncidentsDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & ImageIncidentOperationsListIncidentsDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type ImageIncidentOperationsListIncidentsParameters = ImageIncidentOperationsListIncidentsQueryParam & RequestParameters;

// @public (undocumented)
export interface ImageIncidentOperationsListIncidentsQueryParam {
    // (undocumented)
    queryParameters?: ImageIncidentOperationsListIncidentsQueryParamProperties;
}

// @public (undocumented)
export interface ImageIncidentOperationsListIncidentsQueryParamProperties {
    maxpagesize?: number;
    skip?: number;
    top?: number;
}

// @public (undocumented)
export interface ImageIncidentOperationsRemoveIncidentSamples {
    post(options: ImageIncidentOperationsRemoveIncidentSamplesParameters): StreamableMethod<ImageIncidentOperationsRemoveIncidentSamples204Response | ImageIncidentOperationsRemoveIncidentSamplesDefaultResponse>;
}

// @public
export interface ImageIncidentOperationsRemoveIncidentSamples204Response extends HttpResponse {
    // (undocumented)
    status: "204";
}

// @public (undocumented)
export interface ImageIncidentOperationsRemoveIncidentSamplesBodyParam {
    // (undocumented)
    body: RemoveImageIncidentSamplesOptions;
}

// @public (undocumented)
export interface ImageIncidentOperationsRemoveIncidentSamplesDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface ImageIncidentOperationsRemoveIncidentSamplesDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & ImageIncidentOperationsRemoveIncidentSamplesDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type ImageIncidentOperationsRemoveIncidentSamplesParameters = ImageIncidentOperationsRemoveIncidentSamplesBodyParam & RequestParameters;

// @public
export interface ImageIncidentOutput {
    created: string;
    incidentName: string;
    lastUpdated: string;
}

// @public
export type ImageIncidentResourceMergeAndPatch = Partial<ImageIncident>;

// @public
export interface ImageIncidentSample {
    image?: ImageData;
}

// @public
export interface ImageIncidentSampleResultOutput {
    image?: ImageDataResultOutput;
    readonly incidentSampleId: string;
}

// @public (undocumented)
export interface ImageOperationsAnalyzeImage {
    post(options: ImageOperationsAnalyzeImageParameters): StreamableMethod<ImageOperationsAnalyzeImage200Response | ImageOperationsAnalyzeImageDefaultResponse>;
}

// @public
export interface ImageOperationsAnalyzeImage200Response extends HttpResponse {
    // (undocumented)
    body: AnalyzeImageResultOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface ImageOperationsAnalyzeImageBodyParam {
    body: AnalyzeImageOptions;
}

// @public (undocumented)
export interface ImageOperationsAnalyzeImageDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface ImageOperationsAnalyzeImageDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & ImageOperationsAnalyzeImageDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type ImageOperationsAnalyzeImageParameters = ImageOperationsAnalyzeImageBodyParam & RequestParameters;

// @public (undocumented)
export interface ImageOperationsDetectImageIncidents {
    post(options: ImageOperationsDetectImageIncidentsParameters): StreamableMethod<ImageOperationsDetectImageIncidents200Response | ImageOperationsDetectImageIncidentsDefaultResponse>;
}

// @public
export interface ImageOperationsDetectImageIncidents200Response extends HttpResponse {
    // (undocumented)
    body: DetectIncidentsResultOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface ImageOperationsDetectImageIncidentsBodyParam {
    body: AnalyzeImageDetectIncidentsOptions;
}

// @public (undocumented)
export interface ImageOperationsDetectImageIncidentsDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface ImageOperationsDetectImageIncidentsDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & ImageOperationsDetectImageIncidentsDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type ImageOperationsDetectImageIncidentsParameters = ImageOperationsDetectImageIncidentsBodyParam & RequestParameters;

// @public (undocumented)
export interface ImageOperationsDetectImageProtectedMaterial {
    post(options: ImageOperationsDetectImageProtectedMaterialParameters): StreamableMethod<ImageOperationsDetectImageProtectedMaterial200Response | ImageOperationsDetectImageProtectedMaterialDefaultResponse>;
}

// @public
export interface ImageOperationsDetectImageProtectedMaterial200Response extends HttpResponse {
    // (undocumented)
    body: DetectImageProtectedMaterialResultOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface ImageOperationsDetectImageProtectedMaterialBodyParam {
    body: DetectImageProtectedMaterialOptions;
}

// @public (undocumented)
export interface ImageOperationsDetectImageProtectedMaterialDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface ImageOperationsDetectImageProtectedMaterialDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & ImageOperationsDetectImageProtectedMaterialDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type ImageOperationsDetectImageProtectedMaterialParameters = ImageOperationsDetectImageProtectedMaterialBodyParam & RequestParameters;

// @public
export interface ImageProtectedMaterialAnalysisResultOutput {
    detected: boolean;
}

// @public
export interface ImageWithTextCategoriesAnalysisOutput {
    category: ImageWithTextCategoryOutput;
    severity?: number;
}

// @public
export type ImageWithTextCategory = string;

// @public
export type ImageWithTextCategoryOutput = string;

// @public (undocumented)
export interface ImageWithTextOperationsAnalyzeImageWithText {
    post(options: ImageWithTextOperationsAnalyzeImageWithTextParameters): StreamableMethod<ImageWithTextOperationsAnalyzeImageWithText200Response | ImageWithTextOperationsAnalyzeImageWithTextDefaultResponse>;
}

// @public
export interface ImageWithTextOperationsAnalyzeImageWithText200Response extends HttpResponse {
    // (undocumented)
    body: AnalyzeImageWithTextResultOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface ImageWithTextOperationsAnalyzeImageWithTextBodyParam {
    body: AnalyzeImageWithTextOptions;
}

// @public (undocumented)
export interface ImageWithTextOperationsAnalyzeImageWithTextDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface ImageWithTextOperationsAnalyzeImageWithTextDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & ImageWithTextOperationsAnalyzeImageWithTextDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type ImageWithTextOperationsAnalyzeImageWithTextParameters = ImageWithTextOperationsAnalyzeImageWithTextBodyParam & RequestParameters;

// @public
export interface IncidentLongRunningOperationStatusResultOutput {
}

// @public
export interface IncidentMatchOutput {
    incidentName: string;
}

// @public
export type IncidentOperationStatusOutput = string;

// @public
export interface IndexDetailsOutput {
    codePoint: number;
    utf16: number;
    utf8: number;
}

// @public (undocumented)
export function isUnexpected(response: ImageOperationsAnalyzeImage200Response | ImageOperationsAnalyzeImageDefaultResponse): response is ImageOperationsAnalyzeImageDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: ImageOperationsDetectImageIncidents200Response | ImageOperationsDetectImageIncidentsDefaultResponse): response is ImageOperationsDetectImageIncidentsDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: ImageOperationsDetectImageProtectedMaterial200Response | ImageOperationsDetectImageProtectedMaterialDefaultResponse): response is ImageOperationsDetectImageProtectedMaterialDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: TextOperationsAnalyzeText200Response | TextOperationsAnalyzeTextDefaultResponse): response is TextOperationsAnalyzeTextDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: TextOperationsShieldPrompt200Response | TextOperationsShieldPromptDefaultResponse): response is TextOperationsShieldPromptDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: TextOperationsDetectTextProtectedMaterial200Response | TextOperationsDetectTextProtectedMaterialDefaultResponse): response is TextOperationsDetectTextProtectedMaterialDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: TextOperationsDetectCodeProtectedMaterial200Response | TextOperationsDetectCodeProtectedMaterialDefaultResponse): response is TextOperationsDetectCodeProtectedMaterialDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: TextOperationsAnalyzeTextCustomCategory200Response | TextOperationsAnalyzeTextCustomCategoryDefaultResponse): response is TextOperationsAnalyzeTextCustomCategoryDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: TextOperationsDetectTextIncidents200Response | TextOperationsDetectTextIncidentsDefaultResponse): response is TextOperationsDetectTextIncidentsDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: TextOperationsDetectGroundednessOptions200Response | TextOperationsDetectGroundednessOptionsDefaultResponse): response is TextOperationsDetectGroundednessOptionsDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicy200Response | RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicyDefaultResponse): response is RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicyDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: TextBlocklistsGetTextBlocklist200Response | TextBlocklistsGetTextBlocklistDefaultResponse): response is TextBlocklistsGetTextBlocklistDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: TextBlocklistsCreateOrUpdateTextBlocklist200Response | TextBlocklistsCreateOrUpdateTextBlocklist201Response | TextBlocklistsCreateOrUpdateTextBlocklistDefaultResponse): response is TextBlocklistsCreateOrUpdateTextBlocklistDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: TextBlocklistsDeleteTextBlocklist204Response | TextBlocklistsDeleteTextBlocklistDefaultResponse): response is TextBlocklistsDeleteTextBlocklistDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: TextBlocklistsListTextBlocklists200Response | TextBlocklistsListTextBlocklistsDefaultResponse): response is TextBlocklistsListTextBlocklistsDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: TextBlocklistsAddOrUpdateBlocklistItems200Response | TextBlocklistsAddOrUpdateBlocklistItemsDefaultResponse): response is TextBlocklistsAddOrUpdateBlocklistItemsDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: TextBlocklistsRemoveBlocklistItems204Response | TextBlocklistsRemoveBlocklistItemsDefaultResponse): response is TextBlocklistsRemoveBlocklistItemsDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: TextBlocklistsGetTextBlocklistItem200Response | TextBlocklistsGetTextBlocklistItemDefaultResponse): response is TextBlocklistsGetTextBlocklistItemDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: TextBlocklistsListTextBlocklistItems200Response | TextBlocklistsListTextBlocklistItemsDefaultResponse): response is TextBlocklistsListTextBlocklistItemsDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: RaiPolicyManagementCreateOrUpdateRaiPolicy200Response | RaiPolicyManagementCreateOrUpdateRaiPolicy201Response | RaiPolicyManagementCreateOrUpdateRaiPolicyDefaultResponse): response is RaiPolicyManagementCreateOrUpdateRaiPolicyDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: RaiPolicyManagementDeleteRaiPolicy204Response | RaiPolicyManagementDeleteRaiPolicyDefaultResponse): response is RaiPolicyManagementDeleteRaiPolicyDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: RaiPolicyManagementGetRaiPolicy200Response | RaiPolicyManagementGetRaiPolicyDefaultResponse): response is RaiPolicyManagementGetRaiPolicyDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: RaiPolicyManagementListRaiPolicies200Response | RaiPolicyManagementListRaiPoliciesDefaultResponse): response is RaiPolicyManagementListRaiPoliciesDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: ImageWithTextOperationsAnalyzeImageWithText200Response | ImageWithTextOperationsAnalyzeImageWithTextDefaultResponse): response is ImageWithTextOperationsAnalyzeImageWithTextDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: TextIncidentOperationsDeploy202Response | TextIncidentOperationsDeployLogicalResponse | TextIncidentOperationsDeployDefaultResponse): response is TextIncidentOperationsDeployDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: TextIncidentOperationsGetLongRunningOperation200Response | TextIncidentOperationsGetLongRunningOperationDefaultResponse): response is TextIncidentOperationsGetLongRunningOperationDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: TextIncidentOperationsGetIncidents200Response | TextIncidentOperationsGetIncidentsDefaultResponse): response is TextIncidentOperationsGetIncidentsDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: TextIncidentOperationsCreateOrUpdateIncident200Response | TextIncidentOperationsCreateOrUpdateIncident201Response | TextIncidentOperationsCreateOrUpdateIncidentDefaultResponse): response is TextIncidentOperationsCreateOrUpdateIncidentDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: TextIncidentOperationsDeleteIncident204Response | TextIncidentOperationsDeleteIncidentDefaultResponse): response is TextIncidentOperationsDeleteIncidentDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: TextIncidentOperationsListIncidents200Response | TextIncidentOperationsListIncidentsDefaultResponse): response is TextIncidentOperationsListIncidentsDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: TextIncidentOperationsAddIncidentSamples200Response | TextIncidentOperationsAddIncidentSamplesDefaultResponse): response is TextIncidentOperationsAddIncidentSamplesDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: TextIncidentOperationsRemoveIncidentSamples204Response | TextIncidentOperationsRemoveIncidentSamplesDefaultResponse): response is TextIncidentOperationsRemoveIncidentSamplesDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: TextIncidentOperationsGetIncidentSample200Response | TextIncidentOperationsGetIncidentSampleDefaultResponse): response is TextIncidentOperationsGetIncidentSampleDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: TextIncidentOperationsListIncidentSamples200Response | TextIncidentOperationsListIncidentSamplesDefaultResponse): response is TextIncidentOperationsListIncidentSamplesDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: ImageIncidentOperationsDeploy202Response | ImageIncidentOperationsDeployLogicalResponse | ImageIncidentOperationsDeployDefaultResponse): response is ImageIncidentOperationsDeployDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: ImageIncidentOperationsGetLongRunningOperation200Response | ImageIncidentOperationsGetLongRunningOperationDefaultResponse): response is ImageIncidentOperationsGetLongRunningOperationDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: ImageIncidentOperationsGetIncidents200Response | ImageIncidentOperationsGetIncidentsDefaultResponse): response is ImageIncidentOperationsGetIncidentsDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: ImageIncidentOperationsCreateOrUpdateIncident200Response | ImageIncidentOperationsCreateOrUpdateIncident201Response | ImageIncidentOperationsCreateOrUpdateIncidentDefaultResponse): response is ImageIncidentOperationsCreateOrUpdateIncidentDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: ImageIncidentOperationsDeleteIncident204Response | ImageIncidentOperationsDeleteIncidentDefaultResponse): response is ImageIncidentOperationsDeleteIncidentDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: ImageIncidentOperationsListIncidents200Response | ImageIncidentOperationsListIncidentsDefaultResponse): response is ImageIncidentOperationsListIncidentsDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: ImageIncidentOperationsAddIncidentSamples200Response | ImageIncidentOperationsAddIncidentSamplesDefaultResponse): response is ImageIncidentOperationsAddIncidentSamplesDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: ImageIncidentOperationsRemoveIncidentSamples204Response | ImageIncidentOperationsRemoveIncidentSamplesDefaultResponse): response is ImageIncidentOperationsRemoveIncidentSamplesDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: ImageIncidentOperationsGetIncidentSample200Response | ImageIncidentOperationsGetIncidentSampleDefaultResponse): response is ImageIncidentOperationsGetIncidentSampleDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: ImageIncidentOperationsListIncidentSamples200Response | ImageIncidentOperationsListIncidentSamplesDefaultResponse): response is ImageIncidentOperationsListIncidentSamplesDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: TextCustomizedCategoryOperationsBuild202Response | TextCustomizedCategoryOperationsBuildLogicalResponse | TextCustomizedCategoryOperationsBuildDefaultResponse): response is TextCustomizedCategoryOperationsBuildDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: TextCustomizedCategoryOperationsGetLongRunningOperation200Response | TextCustomizedCategoryOperationsGetLongRunningOperationDefaultResponse): response is TextCustomizedCategoryOperationsGetLongRunningOperationDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: TextCustomizedCategoryOperationsCreateTextCustomCategoryVersion200Response | TextCustomizedCategoryOperationsCreateTextCustomCategoryVersion201Response | TextCustomizedCategoryOperationsCreateTextCustomCategoryVersionDefaultResponse): response is TextCustomizedCategoryOperationsCreateTextCustomCategoryVersionDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: TextCustomizedCategoryOperationsGetCustomizedCategory200Response | TextCustomizedCategoryOperationsGetCustomizedCategoryDefaultResponse): response is TextCustomizedCategoryOperationsGetCustomizedCategoryDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: TextCustomizedCategoryOperationsDeleteCustomizedCategory204Response | TextCustomizedCategoryOperationsDeleteCustomizedCategoryDefaultResponse): response is TextCustomizedCategoryOperationsDeleteCustomizedCategoryDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: TextCustomizedCategoryOperationsListCustomizedCategory200Response | TextCustomizedCategoryOperationsListCustomizedCategoryDefaultResponse): response is TextCustomizedCategoryOperationsListCustomizedCategoryDefaultResponse;

// @public
export interface ListImageIncidentSampleResultOutput {
    readonly incidentSampleId: string;
}

// @public
export interface LLMResource {
    azureOpenAIDeploymentName: string;
    azureOpenAIEndpoint: string;
    resourceType?: LLMResourceType;
}

// @public
export type LLMResourceType = string;

// @public
export type Modality = string;

// @public
export type OperationStateOutput = string;

// @public
export interface PagedAsyncIterableIterator<TElement, TPage = TElement[], TPageSettings = PageSettings> {
    [Symbol.asyncIterator](): PagedAsyncIterableIterator<TElement, TPage, TPageSettings>;
    byPage: (settings?: TPageSettings) => AsyncIterableIterator<TPage>;
    next(): Promise<IteratorResult<TElement>>;
}

// @public
export interface PagedImageIncidentOutput {
    nextLink?: string;
    value: Array<ImageIncidentOutput>;
}

// @public
export interface PagedListImageIncidentSampleResultOutput {
    nextLink?: string;
    value: Array<ListImageIncidentSampleResultOutput>;
}

// @public
export interface PagedRaiPolicyOutput {
    nextLink?: string;
    value: Array<RaiPolicyOutput>;
}

// @public
export interface PagedTextBlocklistItemOutput {
    nextLink?: string;
    value: Array<TextBlocklistItemOutput>;
}

// @public
export interface PagedTextBlocklistOutput {
    nextLink?: string;
    value: Array<TextBlocklistOutput>;
}

// @public
export interface PagedTextCustomCategoryVersionOutput {
    nextLink?: string;
    value: Array<TextCustomCategoryVersionOutput>;
}

// @public
export interface PagedTextIncidentOutput {
    nextLink?: string;
    value: Array<TextIncidentOutput>;
}

// @public
export interface PagedTextIncidentSampleOutput {
    nextLink?: string;
    value: Array<TextIncidentSampleOutput>;
}

// @public
export interface PageSettings {
    continuationToken?: string;
}

// @public
export function paginate<TResponse extends PathUncheckedResponse>(client: Client, initialResponse: TResponse, options?: PagingOptions<TResponse>): PagedAsyncIterableIterator<PaginateReturn<TResponse>>;

// @public
export type PaginateReturn<TResult> = TResult extends {
    body: {
        value?: infer TPage;
    };
} ? GetArrayType<TPage> : Array<unknown>;

// @public
export interface PagingOptions<TResponse> {
    customGetPage?: GetPage<PaginateReturn<TResponse>[]>;
}

// @public
export interface PromptInjectionDetailOutput {
    crossDomain?: boolean;
    promptInjection?: boolean;
}

// @public
export interface QnAOptions {
    query: string;
}

// @public
export interface RaiPolicy {
    name: string;
    taskSettings: Array<TaskSetting>;
}

// @public (undocumented)
export interface RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicy {
    post(options: RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicyParameters): StreamableMethod<RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicy200Response | RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicyDefaultResponse>;
}

// @public
export interface RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicy200Response extends HttpResponse {
    // (undocumented)
    body: RaiPolicyAnalyzeResponseOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicyBodyParam {
    body: RaiPolicyAnalyzeOption;
}

// @public (undocumented)
export interface RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicyDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicyDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicyDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicyParameters = RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicyBodyParam & RequestParameters;

// @public
export interface RaiPolicyAnalyzeOption {
    messages: Array<UnifyMessage>;
    raiPolicyInline?: RaiPolicy;
    raiPolicyName?: string;
}

// @public
export interface RaiPolicyAnalyzeResponseOutput {
    taskResults: Array<TaskResultOutput>;
}

// @public (undocumented)
export interface RaiPolicyManagementCreateOrUpdateRaiPolicy {
    delete(options?: RaiPolicyManagementDeleteRaiPolicyParameters): StreamableMethod<RaiPolicyManagementDeleteRaiPolicy204Response | RaiPolicyManagementDeleteRaiPolicyDefaultResponse>;
    get(options?: RaiPolicyManagementGetRaiPolicyParameters): StreamableMethod<RaiPolicyManagementGetRaiPolicy200Response | RaiPolicyManagementGetRaiPolicyDefaultResponse>;
    patch(options: RaiPolicyManagementCreateOrUpdateRaiPolicyParameters): StreamableMethod<RaiPolicyManagementCreateOrUpdateRaiPolicy200Response | RaiPolicyManagementCreateOrUpdateRaiPolicy201Response | RaiPolicyManagementCreateOrUpdateRaiPolicyDefaultResponse>;
}

// @public
export interface RaiPolicyManagementCreateOrUpdateRaiPolicy200Response extends HttpResponse {
    // (undocumented)
    body: RaiPolicyOutput;
    // (undocumented)
    status: "200";
}

// @public
export interface RaiPolicyManagementCreateOrUpdateRaiPolicy201Response extends HttpResponse {
    // (undocumented)
    body: RaiPolicyOutput;
    // (undocumented)
    status: "201";
}

// @public (undocumented)
export interface RaiPolicyManagementCreateOrUpdateRaiPolicyBodyParam {
    body: RaiPolicyResourceMergeAndPatch;
}

// @public (undocumented)
export interface RaiPolicyManagementCreateOrUpdateRaiPolicyDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface RaiPolicyManagementCreateOrUpdateRaiPolicyDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & RaiPolicyManagementCreateOrUpdateRaiPolicyDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export interface RaiPolicyManagementCreateOrUpdateRaiPolicyMediaTypesParam {
    contentType: "application/merge-patch+json";
}

// @public (undocumented)
export type RaiPolicyManagementCreateOrUpdateRaiPolicyParameters = RaiPolicyManagementCreateOrUpdateRaiPolicyMediaTypesParam & RaiPolicyManagementCreateOrUpdateRaiPolicyBodyParam & RequestParameters;

// @public
export interface RaiPolicyManagementDeleteRaiPolicy204Response extends HttpResponse {
    // (undocumented)
    status: "204";
}

// @public (undocumented)
export interface RaiPolicyManagementDeleteRaiPolicyDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface RaiPolicyManagementDeleteRaiPolicyDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & RaiPolicyManagementDeleteRaiPolicyDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type RaiPolicyManagementDeleteRaiPolicyParameters = RequestParameters;

// @public
export interface RaiPolicyManagementGetRaiPolicy200Response extends HttpResponse {
    // (undocumented)
    body: RaiPolicyOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface RaiPolicyManagementGetRaiPolicyDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface RaiPolicyManagementGetRaiPolicyDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & RaiPolicyManagementGetRaiPolicyDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type RaiPolicyManagementGetRaiPolicyParameters = RequestParameters;

// @public (undocumented)
export interface RaiPolicyManagementListRaiPolicies {
    get(options?: RaiPolicyManagementListRaiPoliciesParameters): StreamableMethod<RaiPolicyManagementListRaiPolicies200Response | RaiPolicyManagementListRaiPoliciesDefaultResponse>;
}

// @public
export interface RaiPolicyManagementListRaiPolicies200Response extends HttpResponse {
    // (undocumented)
    body: PagedRaiPolicyOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface RaiPolicyManagementListRaiPoliciesDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface RaiPolicyManagementListRaiPoliciesDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & RaiPolicyManagementListRaiPoliciesDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type RaiPolicyManagementListRaiPoliciesParameters = RequestParameters;

// @public
export interface RaiPolicyOutput {
    name: string;
    taskSettings: Array<TaskSettingOutput>;
}

// @public
export type RaiPolicyResourceMergeAndPatch = Partial<RaiPolicy>;

// @public
export interface RemoveImageIncidentSamplesOptions {
    incidentSampleIds: string[];
}

// @public
export interface RemoveTextBlocklistItemsOptions {
    blocklistItemIds: string[];
}

// @public
export interface RemoveTextIncidentSamplesOptions {
    incidentSampleIds: string[];
}

// @public
export interface ResourceOperationStatusOutput {
    error?: ErrorModel;
    id: string;
    result?: IncidentLongRunningOperationStatusResultOutput;
    status: OperationStateOutput;
}

// @public
export interface ResourceOperationStatusOutput {
    error?: ErrorModel;
    id: string;
    result?: CustomCategoryLongRunningOperationStatusResultOutput;
    status: OperationStateOutput;
}

// @public
export type ResultCodeOutput = string;

// @public
export type RiskLevel = string;

// @public
export type RiskLevelOutput = string;

// @public
export type RoleType = string;

// @public
export type RoleTypeOutput = string;

// @public (undocumented)
export interface Routes {
    (path: "/image:analyze"): ImageOperationsAnalyzeImage;
    (path: "/image:detectIncidents"): ImageOperationsDetectImageIncidents;
    (path: "/image:detectProtectedMaterial"): ImageOperationsDetectImageProtectedMaterial;
    (path: "/text:analyze"): TextOperationsAnalyzeText;
    (path: "/text:shieldPrompt"): TextOperationsShieldPrompt;
    (path: "/text:detectProtectedMaterial"): TextOperationsDetectTextProtectedMaterial;
    (path: "/text:detectProtectedMaterialForCode"): TextOperationsDetectCodeProtectedMaterial;
    (path: "/text:analyzeCustomCategory"): TextOperationsAnalyzeTextCustomCategory;
    (path: "/text:detectIncidents"): TextOperationsDetectTextIncidents;
    (path: "/text:detectGroundedness"): TextOperationsDetectGroundednessOptions;
    (path: "/analyzeWithRaiPolicy"): RaiPolicyAnalyzeOperationsAnalyzeByRaiPolicy;
    (path: "/text/blocklists/{blocklistName}", blocklistName: string): TextBlocklistsGetTextBlocklist;
    (path: "/text/blocklists"): TextBlocklistsListTextBlocklists;
    (path: "/text/blocklists/{blocklistName}:addOrUpdateBlocklistItems", blocklistName: string): TextBlocklistsAddOrUpdateBlocklistItems;
    (path: "/text/blocklists/{blocklistName}:removeBlocklistItems", blocklistName: string): TextBlocklistsRemoveBlocklistItems;
    (path: "/text/blocklists/{blocklistName}/blocklistItems/{blocklistItemId}", blocklistName: string, blocklistItemId: string): TextBlocklistsGetTextBlocklistItem;
    (path: "/text/blocklists/{blocklistName}/blocklistItems", blocklistName: string): TextBlocklistsListTextBlocklistItems;
    (path: "/raiPolicies/{raiPolicyName}", raiPolicyName: string): RaiPolicyManagementCreateOrUpdateRaiPolicy;
    (path: "/raiPolicies"): RaiPolicyManagementListRaiPolicies;
    (path: "/imageWithText:analyze"): ImageWithTextOperationsAnalyzeImageWithText;
    (path: "/text/incidents/{incidentName}:deploy", incidentName: string): TextIncidentOperationsDeploy;
    (path: "/text/incidents/operations/{operationId}", operationId: string): TextIncidentOperationsGetLongRunningOperation;
    (path: "/text/incidents/{incidentName}", incidentName: string): TextIncidentOperationsGetIncidents;
    (path: "/text/incidents"): TextIncidentOperationsListIncidents;
    (path: "/text/incidents/{incidentName}:addIncidentSamples", incidentName: string): TextIncidentOperationsAddIncidentSamples;
    (path: "/text/incidents/{incidentName}:removeIncidentSamples", incidentName: string): TextIncidentOperationsRemoveIncidentSamples;
    (path: "/text/incidents/{incidentName}/incidentSamples/{incidentSampleId}", incidentName: string, incidentSampleId: string): TextIncidentOperationsGetIncidentSample;
    (path: "/text/incidents/{incidentName}/incidentSamples", incidentName: string): TextIncidentOperationsListIncidentSamples;
    (path: "/image/incidents/{incidentName}:deploy", incidentName: string): ImageIncidentOperationsDeploy;
    (path: "/image/incidents/operations/{operationId}", operationId: string): ImageIncidentOperationsGetLongRunningOperation;
    (path: "/image/incidents/{incidentName}", incidentName: string): ImageIncidentOperationsGetIncidents;
    (path: "/image/incidents"): ImageIncidentOperationsListIncidents;
    (path: "/image/incidents/{incidentName}:addIncidentSamples", incidentName: string): ImageIncidentOperationsAddIncidentSamples;
    (path: "/image/incidents/{incidentName}:removeIncidentSamples", incidentName: string): ImageIncidentOperationsRemoveIncidentSamples;
    (path: "/image/incidents/{incidentName}/incidentSamples/{incidentSampleId}", incidentName: string, incidentSampleId: string): ImageIncidentOperationsGetIncidentSample;
    (path: "/image/incidents/{incidentName}/incidentSamples", incidentName: string): ImageIncidentOperationsListIncidentSamples;
    (path: "/text/categories/{categoryName}:build", categoryName: string): TextCustomizedCategoryOperationsBuild;
    (path: "/text/categories/operations/{operationId}", operationId: string): TextCustomizedCategoryOperationsGetLongRunningOperation;
    (path: "/text/categories/{categoryName}", categoryName: string): TextCustomizedCategoryOperationsCreateTextCustomCategoryVersion;
    (path: "/text/categories"): TextCustomizedCategoryOperationsListCustomizedCategory;
}

// @public
export interface SafetyIncidentTaskResultOutput {
    isDetected: boolean;
    name: string;
}

// @public
export interface SafetyIncidentTaskSetting {
    name: string;
}

// @public
export interface SafetyIncidentTaskSettingOutput {
    name: string;
}

// @public
export interface ShieldPromptOptions {
    documents?: string[];
    userPrompt?: string;
}

// @public
export interface ShieldPromptResultOutput {
    documentsAnalysis?: Array<DocumentInjectionAnalysisResultOutput>;
    userPromptAnalysis?: UserPromptInjectionAnalysisResultOutput;
}

// @public
export interface SimplePollerLike<TState extends OperationState<TResult>, TResult> {
    getOperationState(): TState;
    getResult(): TResult | undefined;
    isDone(): boolean;
    // @deprecated
    isStopped(): boolean;
    onProgress(callback: (state: TState) => void): CancelOnProgress;
    poll(options?: {
        abortSignal?: AbortSignalLike;
    }): Promise<TState>;
    pollUntilDone(pollOptions?: {
        abortSignal?: AbortSignalLike;
    }): Promise<TResult>;
    serialize(): Promise<string>;
    // @deprecated
    stopPolling(): void;
    submitted(): Promise<void>;
    // @deprecated
    toString(): string;
}

// @public
export type SourceType = string;

// @public
export type SourceTypeOutput = string;

// @public
export interface TaskResultOutput {
    blocklistTaskResult?: BlocklistTaskResultOutput;
    customCategoryTaskResult?: CustomCategoryTaskResultOutput;
    harmCategoryTaskResult?: HarmCategoryTaskResultOutput;
    isBlockingCriteriaMet: boolean;
    kind: TaskTypeOutput;
    resultCode: ResultCodeOutput;
    resultCodeDetail: string;
    safetyIncidentTaskResult?: SafetyIncidentTaskResultOutput;
    settingId: string;
}

// @public
export interface TaskSetting {
    appliedFor: Array<AppliedFor>;
    blockingCriteria: BlockingCriteria;
    blocklistTaskSetting?: BlocklistTaskSetting;
    customHarmCategoryTaskSetting?: CustomHarmCategoryTaskSetting;
    harmCategoryTaskSetting?: HarmCategoryTaskSetting;
    kind: TaskType;
    safetyIncidentTaskSetting?: SafetyIncidentTaskSetting;
    settingEnabled: boolean;
    settingId: string;
}

// @public
export interface TaskSettingOutput {
    appliedFor: Array<AppliedForOutput>;
    blockingCriteria: BlockingCriteriaOutput;
    blocklistTaskSetting?: BlocklistTaskSettingOutput;
    customHarmCategoryTaskSetting?: CustomHarmCategoryTaskSettingOutput;
    harmCategoryTaskSetting?: HarmCategoryTaskSettingOutput;
    kind: TaskTypeOutput;
    safetyIncidentTaskSetting?: SafetyIncidentTaskSettingOutput;
    settingEnabled: boolean;
    settingId: string;
}

// @public
export type TaskType = string;

// @public
export type TaskTypeOutput = string;

// @public
export interface TextBlocklist {
    blocklistName: string;
    description?: string;
}

// @public
export interface TextBlocklistItem {
    description?: string;
    isRegex?: boolean;
    text: string;
}

// @public
export interface TextBlocklistItemOutput {
    readonly blocklistItemId: string;
    description?: string;
    isRegex?: boolean;
    text: string;
}

// @public
export interface TextBlocklistMatchOutput {
    blocklistItemId: string;
    blocklistItemText: string;
    blocklistName: string;
}

// @public
export interface TextBlocklistOutput {
    blocklistName: string;
    description?: string;
}

// @public
export type TextBlocklistResourceMergeAndPatch = Partial<TextBlocklist>;

// @public (undocumented)
export interface TextBlocklistsAddOrUpdateBlocklistItems {
    post(options: TextBlocklistsAddOrUpdateBlocklistItemsParameters): StreamableMethod<TextBlocklistsAddOrUpdateBlocklistItems200Response | TextBlocklistsAddOrUpdateBlocklistItemsDefaultResponse>;
}

// @public
export interface TextBlocklistsAddOrUpdateBlocklistItems200Response extends HttpResponse {
    // (undocumented)
    body: AddOrUpdateTextBlocklistItemsResultOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface TextBlocklistsAddOrUpdateBlocklistItemsBodyParam {
    body: AddOrUpdateTextBlocklistItemsOptions;
}

// @public (undocumented)
export interface TextBlocklistsAddOrUpdateBlocklistItemsDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface TextBlocklistsAddOrUpdateBlocklistItemsDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & TextBlocklistsAddOrUpdateBlocklistItemsDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type TextBlocklistsAddOrUpdateBlocklistItemsParameters = TextBlocklistsAddOrUpdateBlocklistItemsBodyParam & RequestParameters;

// @public
export interface TextBlocklistsCreateOrUpdateTextBlocklist200Response extends HttpResponse {
    // (undocumented)
    body: TextBlocklistOutput;
    // (undocumented)
    status: "200";
}

// @public
export interface TextBlocklistsCreateOrUpdateTextBlocklist201Response extends HttpResponse {
    // (undocumented)
    body: TextBlocklistOutput;
    // (undocumented)
    status: "201";
}

// @public (undocumented)
export interface TextBlocklistsCreateOrUpdateTextBlocklistBodyParam {
    body: TextBlocklistResourceMergeAndPatch;
}

// @public (undocumented)
export interface TextBlocklistsCreateOrUpdateTextBlocklistDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface TextBlocklistsCreateOrUpdateTextBlocklistDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & TextBlocklistsCreateOrUpdateTextBlocklistDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export interface TextBlocklistsCreateOrUpdateTextBlocklistMediaTypesParam {
    contentType: "application/merge-patch+json";
}

// @public (undocumented)
export type TextBlocklistsCreateOrUpdateTextBlocklistParameters = TextBlocklistsCreateOrUpdateTextBlocklistMediaTypesParam & TextBlocklistsCreateOrUpdateTextBlocklistBodyParam & RequestParameters;

// @public
export interface TextBlocklistsDeleteTextBlocklist204Response extends HttpResponse {
    // (undocumented)
    status: "204";
}

// @public (undocumented)
export interface TextBlocklistsDeleteTextBlocklistDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface TextBlocklistsDeleteTextBlocklistDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & TextBlocklistsDeleteTextBlocklistDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type TextBlocklistsDeleteTextBlocklistParameters = RequestParameters;

// @public (undocumented)
export interface TextBlocklistsGetTextBlocklist {
    delete(options?: TextBlocklistsDeleteTextBlocklistParameters): StreamableMethod<TextBlocklistsDeleteTextBlocklist204Response | TextBlocklistsDeleteTextBlocklistDefaultResponse>;
    get(options?: TextBlocklistsGetTextBlocklistParameters): StreamableMethod<TextBlocklistsGetTextBlocklist200Response | TextBlocklistsGetTextBlocklistDefaultResponse>;
    patch(options: TextBlocklistsCreateOrUpdateTextBlocklistParameters): StreamableMethod<TextBlocklistsCreateOrUpdateTextBlocklist200Response | TextBlocklistsCreateOrUpdateTextBlocklist201Response | TextBlocklistsCreateOrUpdateTextBlocklistDefaultResponse>;
}

// @public
export interface TextBlocklistsGetTextBlocklist200Response extends HttpResponse {
    // (undocumented)
    body: TextBlocklistOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface TextBlocklistsGetTextBlocklistDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface TextBlocklistsGetTextBlocklistDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & TextBlocklistsGetTextBlocklistDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export interface TextBlocklistsGetTextBlocklistItem {
    get(options?: TextBlocklistsGetTextBlocklistItemParameters): StreamableMethod<TextBlocklistsGetTextBlocklistItem200Response | TextBlocklistsGetTextBlocklistItemDefaultResponse>;
}

// @public
export interface TextBlocklistsGetTextBlocklistItem200Response extends HttpResponse {
    // (undocumented)
    body: TextBlocklistItemOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface TextBlocklistsGetTextBlocklistItemDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface TextBlocklistsGetTextBlocklistItemDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & TextBlocklistsGetTextBlocklistItemDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type TextBlocklistsGetTextBlocklistItemParameters = RequestParameters;

// @public (undocumented)
export type TextBlocklistsGetTextBlocklistParameters = RequestParameters;

// @public (undocumented)
export interface TextBlocklistsListTextBlocklistItems {
    get(options?: TextBlocklistsListTextBlocklistItemsParameters): StreamableMethod<TextBlocklistsListTextBlocklistItems200Response | TextBlocklistsListTextBlocklistItemsDefaultResponse>;
}

// @public
export interface TextBlocklistsListTextBlocklistItems200Response extends HttpResponse {
    // (undocumented)
    body: PagedTextBlocklistItemOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface TextBlocklistsListTextBlocklistItemsDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface TextBlocklistsListTextBlocklistItemsDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & TextBlocklistsListTextBlocklistItemsDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type TextBlocklistsListTextBlocklistItemsParameters = TextBlocklistsListTextBlocklistItemsQueryParam & RequestParameters;

// @public (undocumented)
export interface TextBlocklistsListTextBlocklistItemsQueryParam {
    // (undocumented)
    queryParameters?: TextBlocklistsListTextBlocklistItemsQueryParamProperties;
}

// @public (undocumented)
export interface TextBlocklistsListTextBlocklistItemsQueryParamProperties {
    maxpagesize?: number;
    skip?: number;
    top?: number;
}

// @public (undocumented)
export interface TextBlocklistsListTextBlocklists {
    get(options?: TextBlocklistsListTextBlocklistsParameters): StreamableMethod<TextBlocklistsListTextBlocklists200Response | TextBlocklistsListTextBlocklistsDefaultResponse>;
}

// @public
export interface TextBlocklistsListTextBlocklists200Response extends HttpResponse {
    // (undocumented)
    body: PagedTextBlocklistOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface TextBlocklistsListTextBlocklistsDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface TextBlocklistsListTextBlocklistsDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & TextBlocklistsListTextBlocklistsDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type TextBlocklistsListTextBlocklistsParameters = RequestParameters;

// @public (undocumented)
export interface TextBlocklistsRemoveBlocklistItems {
    post(options: TextBlocklistsRemoveBlocklistItemsParameters): StreamableMethod<TextBlocklistsRemoveBlocklistItems204Response | TextBlocklistsRemoveBlocklistItemsDefaultResponse>;
}

// @public
export interface TextBlocklistsRemoveBlocklistItems204Response extends HttpResponse {
    // (undocumented)
    status: "204";
}

// @public (undocumented)
export interface TextBlocklistsRemoveBlocklistItemsBodyParam {
    body: RemoveTextBlocklistItemsOptions;
}

// @public (undocumented)
export interface TextBlocklistsRemoveBlocklistItemsDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface TextBlocklistsRemoveBlocklistItemsDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & TextBlocklistsRemoveBlocklistItemsDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type TextBlocklistsRemoveBlocklistItemsParameters = TextBlocklistsRemoveBlocklistItemsBodyParam & RequestParameters;

// @public
export interface TextCategoriesAnalysisOutput {
    category: TextCategoryOutput;
    severity?: number;
}

// @public
export type TextCategory = string;

// @public
export type TextCategoryOutput = string;

// @public
export interface TextCustomCategoryAnalysisOutput {
    detected: boolean;
}

// @public
export interface TextCustomCategoryVersion {
    categoryName: string;
    definition: string;
    sampleBlobUrl: string;
}

// @public
export interface TextCustomCategoryVersionListOutput {
    value: Array<TextCustomCategoryVersionOutput>;
}

// @public
export interface TextCustomCategoryVersionOutput {
    categoryName: string;
    readonly createdTime: string;
    definition: string;
    readonly errorMessage?: string;
    readonly sampleBlobSnapshotUrl: string;
    sampleBlobUrl: string;
    readonly status: CustomCategoryStatusOutput;
    readonly version: number;
}

// @public (undocumented)
export interface TextCustomizedCategoryOperationsBuild {
    post(options: TextCustomizedCategoryOperationsBuildParameters): StreamableMethod<TextCustomizedCategoryOperationsBuild202Response | TextCustomizedCategoryOperationsBuildDefaultResponse>;
}

// @public (undocumented)
export interface TextCustomizedCategoryOperationsBuild202Headers {
    "operation-id": string;
    "operation-location": string;
}

// @public
export interface TextCustomizedCategoryOperationsBuild202Response extends HttpResponse {
    // (undocumented)
    body: ResourceOperationStatusOutput;
    // (undocumented)
    headers: RawHttpHeaders & TextCustomizedCategoryOperationsBuild202Headers;
    // (undocumented)
    status: "202";
}

// @public (undocumented)
export interface TextCustomizedCategoryOperationsBuildDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface TextCustomizedCategoryOperationsBuildDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & TextCustomizedCategoryOperationsBuildDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export interface TextCustomizedCategoryOperationsBuildHeaderParam {
    // (undocumented)
    headers?: RawHttpHeadersInput & TextCustomizedCategoryOperationsBuildHeaders;
}

// @public (undocumented)
export interface TextCustomizedCategoryOperationsBuildHeaders {
    "Operation-Id"?: string;
}

// @public
export interface TextCustomizedCategoryOperationsBuildLogicalResponse extends HttpResponse {
    // (undocumented)
    body: ResourceOperationStatusOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export type TextCustomizedCategoryOperationsBuildParameters = TextCustomizedCategoryOperationsBuildQueryParam & TextCustomizedCategoryOperationsBuildHeaderParam & RequestParameters;

// @public (undocumented)
export interface TextCustomizedCategoryOperationsBuildQueryParam {
    // (undocumented)
    queryParameters: TextCustomizedCategoryOperationsBuildQueryParamProperties;
}

// @public (undocumented)
export interface TextCustomizedCategoryOperationsBuildQueryParamProperties {
    version: number;
}

// @public (undocumented)
export interface TextCustomizedCategoryOperationsCreateTextCustomCategoryVersion {
    delete(options?: TextCustomizedCategoryOperationsDeleteCustomizedCategoryParameters): StreamableMethod<TextCustomizedCategoryOperationsDeleteCustomizedCategory204Response | TextCustomizedCategoryOperationsDeleteCustomizedCategoryDefaultResponse>;
    get(options?: TextCustomizedCategoryOperationsGetCustomizedCategoryParameters): StreamableMethod<TextCustomizedCategoryOperationsGetCustomizedCategory200Response | TextCustomizedCategoryOperationsGetCustomizedCategoryDefaultResponse>;
    put(options: TextCustomizedCategoryOperationsCreateTextCustomCategoryVersionParameters): StreamableMethod<TextCustomizedCategoryOperationsCreateTextCustomCategoryVersion200Response | TextCustomizedCategoryOperationsCreateTextCustomCategoryVersion201Response | TextCustomizedCategoryOperationsCreateTextCustomCategoryVersionDefaultResponse>;
}

// @public
export interface TextCustomizedCategoryOperationsCreateTextCustomCategoryVersion200Response extends HttpResponse {
    // (undocumented)
    body: TextCustomCategoryVersionOutput;
    // (undocumented)
    status: "200";
}

// @public
export interface TextCustomizedCategoryOperationsCreateTextCustomCategoryVersion201Response extends HttpResponse {
    // (undocumented)
    body: TextCustomCategoryVersionOutput;
    // (undocumented)
    status: "201";
}

// @public (undocumented)
export interface TextCustomizedCategoryOperationsCreateTextCustomCategoryVersionBodyParam {
    body: TextCustomCategoryVersion;
}

// @public (undocumented)
export interface TextCustomizedCategoryOperationsCreateTextCustomCategoryVersionDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface TextCustomizedCategoryOperationsCreateTextCustomCategoryVersionDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & TextCustomizedCategoryOperationsCreateTextCustomCategoryVersionDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type TextCustomizedCategoryOperationsCreateTextCustomCategoryVersionParameters = TextCustomizedCategoryOperationsCreateTextCustomCategoryVersionBodyParam & RequestParameters;

// @public
export interface TextCustomizedCategoryOperationsDeleteCustomizedCategory204Response extends HttpResponse {
    // (undocumented)
    status: "204";
}

// @public (undocumented)
export interface TextCustomizedCategoryOperationsDeleteCustomizedCategoryDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface TextCustomizedCategoryOperationsDeleteCustomizedCategoryDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & TextCustomizedCategoryOperationsDeleteCustomizedCategoryDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type TextCustomizedCategoryOperationsDeleteCustomizedCategoryParameters = TextCustomizedCategoryOperationsDeleteCustomizedCategoryQueryParam & RequestParameters;

// @public (undocumented)
export interface TextCustomizedCategoryOperationsDeleteCustomizedCategoryQueryParam {
    // (undocumented)
    queryParameters?: TextCustomizedCategoryOperationsDeleteCustomizedCategoryQueryParamProperties;
}

// @public (undocumented)
export interface TextCustomizedCategoryOperationsDeleteCustomizedCategoryQueryParamProperties {
    version?: number;
}

// @public
export interface TextCustomizedCategoryOperationsGetCustomizedCategory200Response extends HttpResponse {
    // (undocumented)
    body: TextCustomCategoryVersionListOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface TextCustomizedCategoryOperationsGetCustomizedCategoryDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface TextCustomizedCategoryOperationsGetCustomizedCategoryDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & TextCustomizedCategoryOperationsGetCustomizedCategoryDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type TextCustomizedCategoryOperationsGetCustomizedCategoryParameters = TextCustomizedCategoryOperationsGetCustomizedCategoryQueryParam & RequestParameters;

// @public (undocumented)
export interface TextCustomizedCategoryOperationsGetCustomizedCategoryQueryParam {
    // (undocumented)
    queryParameters?: TextCustomizedCategoryOperationsGetCustomizedCategoryQueryParamProperties;
}

// @public (undocumented)
export interface TextCustomizedCategoryOperationsGetCustomizedCategoryQueryParamProperties {
    version?: number;
}

// @public (undocumented)
export interface TextCustomizedCategoryOperationsGetLongRunningOperation {
    get(options?: TextCustomizedCategoryOperationsGetLongRunningOperationParameters): StreamableMethod<TextCustomizedCategoryOperationsGetLongRunningOperation200Response | TextCustomizedCategoryOperationsGetLongRunningOperationDefaultResponse>;
}

// @public
export interface TextCustomizedCategoryOperationsGetLongRunningOperation200Response extends HttpResponse {
    // (undocumented)
    body: CustomCategoryOperationDetailOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface TextCustomizedCategoryOperationsGetLongRunningOperationDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface TextCustomizedCategoryOperationsGetLongRunningOperationDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & TextCustomizedCategoryOperationsGetLongRunningOperationDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type TextCustomizedCategoryOperationsGetLongRunningOperationParameters = RequestParameters;

// @public (undocumented)
export interface TextCustomizedCategoryOperationsListCustomizedCategory {
    get(options?: TextCustomizedCategoryOperationsListCustomizedCategoryParameters): StreamableMethod<TextCustomizedCategoryOperationsListCustomizedCategory200Response | TextCustomizedCategoryOperationsListCustomizedCategoryDefaultResponse>;
}

// @public
export interface TextCustomizedCategoryOperationsListCustomizedCategory200Response extends HttpResponse {
    // (undocumented)
    body: PagedTextCustomCategoryVersionOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface TextCustomizedCategoryOperationsListCustomizedCategoryDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface TextCustomizedCategoryOperationsListCustomizedCategoryDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & TextCustomizedCategoryOperationsListCustomizedCategoryDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type TextCustomizedCategoryOperationsListCustomizedCategoryParameters = TextCustomizedCategoryOperationsListCustomizedCategoryQueryParam & RequestParameters;

// @public (undocumented)
export interface TextCustomizedCategoryOperationsListCustomizedCategoryQueryParam {
    // (undocumented)
    queryParameters?: TextCustomizedCategoryOperationsListCustomizedCategoryQueryParamProperties;
}

// @public (undocumented)
export interface TextCustomizedCategoryOperationsListCustomizedCategoryQueryParamProperties {
    maxpagesize?: number;
    skip?: number;
    top?: number;
}

// @public
export interface TextIncident {
    created: Date | string;
    incidentDefinition?: string;
    incidentName: string;
    lastUpdated: Date | string;
}

// @public
export interface TextIncidentOperationResultOutput {
    errorMessage?: ErrorModel;
    id: string;
    readonly status: IncidentOperationStatusOutput;
}

// @public (undocumented)
export interface TextIncidentOperationsAddIncidentSamples {
    post(options: TextIncidentOperationsAddIncidentSamplesParameters): StreamableMethod<TextIncidentOperationsAddIncidentSamples200Response | TextIncidentOperationsAddIncidentSamplesDefaultResponse>;
}

// @public
export interface TextIncidentOperationsAddIncidentSamples200Response extends HttpResponse {
    // (undocumented)
    body: AddTextIncidentSamplesResultOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface TextIncidentOperationsAddIncidentSamplesBodyParam {
    // (undocumented)
    body: AddTextIncidentSamplesOptions;
}

// @public (undocumented)
export interface TextIncidentOperationsAddIncidentSamplesDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface TextIncidentOperationsAddIncidentSamplesDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & TextIncidentOperationsAddIncidentSamplesDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type TextIncidentOperationsAddIncidentSamplesParameters = TextIncidentOperationsAddIncidentSamplesBodyParam & RequestParameters;

// @public
export interface TextIncidentOperationsCreateOrUpdateIncident200Response extends HttpResponse {
    // (undocumented)
    body: TextIncidentOutput;
    // (undocumented)
    status: "200";
}

// @public
export interface TextIncidentOperationsCreateOrUpdateIncident201Response extends HttpResponse {
    // (undocumented)
    body: TextIncidentOutput;
    // (undocumented)
    status: "201";
}

// @public (undocumented)
export interface TextIncidentOperationsCreateOrUpdateIncidentBodyParam {
    body: TextIncidentResourceMergeAndPatch;
}

// @public (undocumented)
export interface TextIncidentOperationsCreateOrUpdateIncidentDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface TextIncidentOperationsCreateOrUpdateIncidentDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & TextIncidentOperationsCreateOrUpdateIncidentDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export interface TextIncidentOperationsCreateOrUpdateIncidentMediaTypesParam {
    contentType: "application/merge-patch+json";
}

// @public (undocumented)
export type TextIncidentOperationsCreateOrUpdateIncidentParameters = TextIncidentOperationsCreateOrUpdateIncidentMediaTypesParam & TextIncidentOperationsCreateOrUpdateIncidentBodyParam & RequestParameters;

// @public
export interface TextIncidentOperationsDeleteIncident204Response extends HttpResponse {
    // (undocumented)
    status: "204";
}

// @public (undocumented)
export interface TextIncidentOperationsDeleteIncidentDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface TextIncidentOperationsDeleteIncidentDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & TextIncidentOperationsDeleteIncidentDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type TextIncidentOperationsDeleteIncidentParameters = RequestParameters;

// @public (undocumented)
export interface TextIncidentOperationsDeploy {
    post(options?: TextIncidentOperationsDeployParameters): StreamableMethod<TextIncidentOperationsDeploy202Response | TextIncidentOperationsDeployDefaultResponse>;
}

// @public (undocumented)
export interface TextIncidentOperationsDeploy202Headers {
    "operation-id": string;
    "operation-location": string;
}

// @public
export interface TextIncidentOperationsDeploy202Response extends HttpResponse {
    // (undocumented)
    body: ResourceOperationStatusOutput;
    // (undocumented)
    headers: RawHttpHeaders & TextIncidentOperationsDeploy202Headers;
    // (undocumented)
    status: "202";
}

// @public (undocumented)
export interface TextIncidentOperationsDeployDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface TextIncidentOperationsDeployDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & TextIncidentOperationsDeployDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export interface TextIncidentOperationsDeployHeaderParam {
    // (undocumented)
    headers?: RawHttpHeadersInput & TextIncidentOperationsDeployHeaders;
}

// @public (undocumented)
export interface TextIncidentOperationsDeployHeaders {
    "Operation-Id"?: string;
}

// @public
export interface TextIncidentOperationsDeployLogicalResponse extends HttpResponse {
    // (undocumented)
    body: ResourceOperationStatusOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export type TextIncidentOperationsDeployParameters = TextIncidentOperationsDeployHeaderParam & RequestParameters;

// @public (undocumented)
export interface TextIncidentOperationsGetIncidents {
    delete(options?: TextIncidentOperationsDeleteIncidentParameters): StreamableMethod<TextIncidentOperationsDeleteIncident204Response | TextIncidentOperationsDeleteIncidentDefaultResponse>;
    get(options?: TextIncidentOperationsGetIncidentsParameters): StreamableMethod<TextIncidentOperationsGetIncidents200Response | TextIncidentOperationsGetIncidentsDefaultResponse>;
    patch(options: TextIncidentOperationsCreateOrUpdateIncidentParameters): StreamableMethod<TextIncidentOperationsCreateOrUpdateIncident200Response | TextIncidentOperationsCreateOrUpdateIncident201Response | TextIncidentOperationsCreateOrUpdateIncidentDefaultResponse>;
}

// @public
export interface TextIncidentOperationsGetIncidents200Response extends HttpResponse {
    // (undocumented)
    body: TextIncidentOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface TextIncidentOperationsGetIncidentSample {
    get(options?: TextIncidentOperationsGetIncidentSampleParameters): StreamableMethod<TextIncidentOperationsGetIncidentSample200Response | TextIncidentOperationsGetIncidentSampleDefaultResponse>;
}

// @public
export interface TextIncidentOperationsGetIncidentSample200Response extends HttpResponse {
    // (undocumented)
    body: TextIncidentSampleOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface TextIncidentOperationsGetIncidentSampleDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface TextIncidentOperationsGetIncidentSampleDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & TextIncidentOperationsGetIncidentSampleDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type TextIncidentOperationsGetIncidentSampleParameters = RequestParameters;

// @public (undocumented)
export interface TextIncidentOperationsGetIncidentsDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface TextIncidentOperationsGetIncidentsDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & TextIncidentOperationsGetIncidentsDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type TextIncidentOperationsGetIncidentsParameters = RequestParameters;

// @public (undocumented)
export interface TextIncidentOperationsGetLongRunningOperation {
    get(options?: TextIncidentOperationsGetLongRunningOperationParameters): StreamableMethod<TextIncidentOperationsGetLongRunningOperation200Response | TextIncidentOperationsGetLongRunningOperationDefaultResponse>;
}

// @public
export interface TextIncidentOperationsGetLongRunningOperation200Response extends HttpResponse {
    // (undocumented)
    body: TextIncidentOperationResultOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface TextIncidentOperationsGetLongRunningOperationDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface TextIncidentOperationsGetLongRunningOperationDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & TextIncidentOperationsGetLongRunningOperationDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type TextIncidentOperationsGetLongRunningOperationParameters = RequestParameters;

// @public (undocumented)
export interface TextIncidentOperationsListIncidents {
    get(options?: TextIncidentOperationsListIncidentsParameters): StreamableMethod<TextIncidentOperationsListIncidents200Response | TextIncidentOperationsListIncidentsDefaultResponse>;
}

// @public
export interface TextIncidentOperationsListIncidents200Response extends HttpResponse {
    // (undocumented)
    body: PagedTextIncidentOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface TextIncidentOperationsListIncidentSamples {
    get(options?: TextIncidentOperationsListIncidentSamplesParameters): StreamableMethod<TextIncidentOperationsListIncidentSamples200Response | TextIncidentOperationsListIncidentSamplesDefaultResponse>;
}

// @public
export interface TextIncidentOperationsListIncidentSamples200Response extends HttpResponse {
    // (undocumented)
    body: PagedTextIncidentSampleOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface TextIncidentOperationsListIncidentSamplesDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface TextIncidentOperationsListIncidentSamplesDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & TextIncidentOperationsListIncidentSamplesDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type TextIncidentOperationsListIncidentSamplesParameters = TextIncidentOperationsListIncidentSamplesQueryParam & RequestParameters;

// @public (undocumented)
export interface TextIncidentOperationsListIncidentSamplesQueryParam {
    // (undocumented)
    queryParameters?: TextIncidentOperationsListIncidentSamplesQueryParamProperties;
}

// @public (undocumented)
export interface TextIncidentOperationsListIncidentSamplesQueryParamProperties {
    maxpagesize?: number;
    skip?: number;
    top?: number;
}

// @public (undocumented)
export interface TextIncidentOperationsListIncidentsDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface TextIncidentOperationsListIncidentsDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & TextIncidentOperationsListIncidentsDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type TextIncidentOperationsListIncidentsParameters = TextIncidentOperationsListIncidentsQueryParam & RequestParameters;

// @public (undocumented)
export interface TextIncidentOperationsListIncidentsQueryParam {
    // (undocumented)
    queryParameters?: TextIncidentOperationsListIncidentsQueryParamProperties;
}

// @public (undocumented)
export interface TextIncidentOperationsListIncidentsQueryParamProperties {
    maxpagesize?: number;
    skip?: number;
    top?: number;
}

// @public (undocumented)
export interface TextIncidentOperationsRemoveIncidentSamples {
    post(options: TextIncidentOperationsRemoveIncidentSamplesParameters): StreamableMethod<TextIncidentOperationsRemoveIncidentSamples204Response | TextIncidentOperationsRemoveIncidentSamplesDefaultResponse>;
}

// @public
export interface TextIncidentOperationsRemoveIncidentSamples204Response extends HttpResponse {
    // (undocumented)
    status: "204";
}

// @public (undocumented)
export interface TextIncidentOperationsRemoveIncidentSamplesBodyParam {
    // (undocumented)
    body: RemoveTextIncidentSamplesOptions;
}

// @public (undocumented)
export interface TextIncidentOperationsRemoveIncidentSamplesDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface TextIncidentOperationsRemoveIncidentSamplesDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & TextIncidentOperationsRemoveIncidentSamplesDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type TextIncidentOperationsRemoveIncidentSamplesParameters = TextIncidentOperationsRemoveIncidentSamplesBodyParam & RequestParameters;

// @public
export interface TextIncidentOutput {
    created: string;
    incidentDefinition?: string;
    incidentName: string;
    lastUpdated: string;
}

// @public
export type TextIncidentResourceMergeAndPatch = Partial<TextIncident>;

// @public
export interface TextIncidentSample {
    text?: string;
}

// @public
export interface TextIncidentSampleOutput {
    readonly incidentSampleId: string;
    text?: string;
}

// @public (undocumented)
export interface TextOperationsAnalyzeText {
    post(options: TextOperationsAnalyzeTextParameters): StreamableMethod<TextOperationsAnalyzeText200Response | TextOperationsAnalyzeTextDefaultResponse>;
}

// @public
export interface TextOperationsAnalyzeText200Response extends HttpResponse {
    // (undocumented)
    body: AnalyzeTextResultOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface TextOperationsAnalyzeTextBodyParam {
    body: AnalyzeTextOptions;
}

// @public (undocumented)
export interface TextOperationsAnalyzeTextCustomCategory {
    post(options: TextOperationsAnalyzeTextCustomCategoryParameters): StreamableMethod<TextOperationsAnalyzeTextCustomCategory200Response | TextOperationsAnalyzeTextCustomCategoryDefaultResponse>;
}

// @public
export interface TextOperationsAnalyzeTextCustomCategory200Response extends HttpResponse {
    // (undocumented)
    body: AnalyzeTextCustomCategoryResultOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface TextOperationsAnalyzeTextCustomCategoryBodyParam {
    body: AnalyzeTextCustomCategoryOption;
}

// @public (undocumented)
export interface TextOperationsAnalyzeTextCustomCategoryDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface TextOperationsAnalyzeTextCustomCategoryDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & TextOperationsAnalyzeTextCustomCategoryDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type TextOperationsAnalyzeTextCustomCategoryParameters = TextOperationsAnalyzeTextCustomCategoryBodyParam & RequestParameters;

// @public (undocumented)
export interface TextOperationsAnalyzeTextDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface TextOperationsAnalyzeTextDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & TextOperationsAnalyzeTextDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type TextOperationsAnalyzeTextParameters = TextOperationsAnalyzeTextBodyParam & RequestParameters;

// @public (undocumented)
export interface TextOperationsDetectCodeProtectedMaterial {
    post(options: TextOperationsDetectCodeProtectedMaterialParameters): StreamableMethod<TextOperationsDetectCodeProtectedMaterial200Response | TextOperationsDetectCodeProtectedMaterialDefaultResponse>;
}

// @public
export interface TextOperationsDetectCodeProtectedMaterial200Response extends HttpResponse {
    // (undocumented)
    body: DetectCodeProtectedMaterialResultOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface TextOperationsDetectCodeProtectedMaterialBodyParam {
    body: DetectCodeProtectedMaterialOptions;
}

// @public (undocumented)
export interface TextOperationsDetectCodeProtectedMaterialDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface TextOperationsDetectCodeProtectedMaterialDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & TextOperationsDetectCodeProtectedMaterialDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type TextOperationsDetectCodeProtectedMaterialParameters = TextOperationsDetectCodeProtectedMaterialBodyParam & RequestParameters;

// @public (undocumented)
export interface TextOperationsDetectGroundednessOptions {
    post(options: TextOperationsDetectGroundednessOptionsParameters): StreamableMethod<TextOperationsDetectGroundednessOptions200Response | TextOperationsDetectGroundednessOptionsDefaultResponse>;
}

// @public
export interface TextOperationsDetectGroundednessOptions200Response extends HttpResponse {
    // (undocumented)
    body: AnalyzeTextGroundednessResultOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface TextOperationsDetectGroundednessOptionsBodyParam {
    body: AnalyzeTextGroundednessOptions;
}

// @public (undocumented)
export interface TextOperationsDetectGroundednessOptionsDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface TextOperationsDetectGroundednessOptionsDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & TextOperationsDetectGroundednessOptionsDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type TextOperationsDetectGroundednessOptionsParameters = TextOperationsDetectGroundednessOptionsBodyParam & RequestParameters;

// @public (undocumented)
export interface TextOperationsDetectTextIncidents {
    post(options: TextOperationsDetectTextIncidentsParameters): StreamableMethod<TextOperationsDetectTextIncidents200Response | TextOperationsDetectTextIncidentsDefaultResponse>;
}

// @public
export interface TextOperationsDetectTextIncidents200Response extends HttpResponse {
    // (undocumented)
    body: DetectIncidentsResultOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface TextOperationsDetectTextIncidentsBodyParam {
    body: AnalyzeTextDetectIncidentsOptions;
}

// @public (undocumented)
export interface TextOperationsDetectTextIncidentsDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface TextOperationsDetectTextIncidentsDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & TextOperationsDetectTextIncidentsDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type TextOperationsDetectTextIncidentsParameters = TextOperationsDetectTextIncidentsBodyParam & RequestParameters;

// @public (undocumented)
export interface TextOperationsDetectTextProtectedMaterial {
    post(options: TextOperationsDetectTextProtectedMaterialParameters): StreamableMethod<TextOperationsDetectTextProtectedMaterial200Response | TextOperationsDetectTextProtectedMaterialDefaultResponse>;
}

// @public
export interface TextOperationsDetectTextProtectedMaterial200Response extends HttpResponse {
    // (undocumented)
    body: DetectTextProtectedMaterialResultOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface TextOperationsDetectTextProtectedMaterialBodyParam {
    body: DetectTextProtectedMaterialOptions;
}

// @public (undocumented)
export interface TextOperationsDetectTextProtectedMaterialDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface TextOperationsDetectTextProtectedMaterialDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & TextOperationsDetectTextProtectedMaterialDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type TextOperationsDetectTextProtectedMaterialParameters = TextOperationsDetectTextProtectedMaterialBodyParam & RequestParameters;

// @public (undocumented)
export interface TextOperationsShieldPrompt {
    post(options: TextOperationsShieldPromptParameters): StreamableMethod<TextOperationsShieldPrompt200Response | TextOperationsShieldPromptDefaultResponse>;
}

// @public
export interface TextOperationsShieldPrompt200Response extends HttpResponse {
    // (undocumented)
    body: ShieldPromptResultOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface TextOperationsShieldPromptBodyParam {
    body: ShieldPromptOptions;
}

// @public (undocumented)
export interface TextOperationsShieldPromptDefaultHeaders {
    "x-ms-error-code"?: string;
}

// @public (undocumented)
export interface TextOperationsShieldPromptDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponse;
    // (undocumented)
    headers: RawHttpHeaders & TextOperationsShieldPromptDefaultHeaders;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type TextOperationsShieldPromptParameters = TextOperationsShieldPromptBodyParam & RequestParameters;

// @public
export interface TextProtectedMaterialAnalysisResultOutput {
    detected: boolean;
}

// @public
export interface UngroundednessDetailsOutput {
    length: IndexDetailsOutput;
    offset: IndexDetailsOutput;
    reason?: string;
    text: string;
}

// @public
export interface UnifyContent {
    imageBase64?: string;
    imageBlob?: string;
    kind: Modality;
    text?: string;
}

// @public
export interface UnifyMessage {
    contents: Array<UnifyContent>;
    role: RoleType;
    source: SourceType;
}

// @public
export interface UserPromptInjectionAnalysisResultOutput {
    attackDetected: boolean;
}

// (No @packageDocumentation comment for this package)
