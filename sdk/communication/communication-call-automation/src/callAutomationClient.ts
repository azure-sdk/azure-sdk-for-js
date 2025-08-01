// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type { KeyCredential, TokenCredential } from "@azure/core-auth";
import { isTokenCredential } from "@azure/core-auth";
import type { CommonClientOptions } from "@azure/core-client";
import type { InternalPipelineOptions } from "@azure/core-rest-pipeline";
import type {
  CommunicationIdentifier,
  CommunicationUserIdentifier,
} from "@azure/communication-common";
import {
  parseClientArguments,
  isKeyCredential,
  createCommunicationAuthPolicy,
} from "@azure/communication-common";
import { logger } from "./models/logger.js";
import {
  AnswerCallRequest,
  CallAutomationApiClient,
  CommunicationUserIdentifierModel,
  CreateCallRequest,
  RedirectCallRequest,
  RejectCallRequest,
  ConnectRequest,
} from "./generated/src/index.js";
import { CallConnection } from "./callConnection.js";
import { CallRecording } from "./callRecording.js";
import type {
  AnswerCallOptions,
  ConnectCallOptions,
  CreateCallOptions,
  RedirectCallOptions,
  RejectCallOptions,
} from "./models/options.js";
import type { AnswerCallResult, ConnectCallResult, CreateCallResult } from "./models/responses.js";
import {
  type CallConnectionProperties,
  type CallInvite,
  type CallLocator,
} from "./models/models.js";
import {
  communicationIdentifierConverter,
  communicationIdentifierModelConverter,
  communicationUserIdentifierConverter,
  communicationUserIdentifierModelConverter,
  phoneNumberIdentifierConverter,
  microsoftTeamsAppIdentifierModelConverter,
  PhoneNumberIdentifierModelConverter,
} from "./utli/converters.js";
import { randomUUID } from "@azure/core-util";
/**
 * Client options used to configure CallAutomation Client API requests.
 */
export interface CallAutomationClientOptions extends CommonClientOptions {
  /**
   * The identifier of the source of the call for call creating/answering/inviting operation.
   */
  sourceIdentity?: CommunicationUserIdentifier;
}

/**
 * Checks whether the type of a value is CallAutomationClientOptions or not.
 *
 * @param options - The value being checked.
 */
const isCallAutomationClientOptions = (options: any): options is CallAutomationClientOptions =>
  !!options && !isTokenCredential(options) && !isKeyCredential(options);

/**
 * A CallAutomationClient represents a Client to the Azure Communication CallAutomation service.
 */
export class CallAutomationClient {
  private readonly callAutomationApiClient: CallAutomationApiClient;
  private readonly sourceIdentity?: CommunicationUserIdentifierModel;
  private readonly credential: TokenCredential | KeyCredential;
  private readonly internalPipelineOptions: InternalPipelineOptions;
  /**
   * Initializes a new instance of the CallAutomationClient class.
   * @param connectionString - Connection string to connect to an Azure Communication Service resource.
   *                         Example: "endpoint=https://contoso.eastus.communications.azure.net/;accesskey=secret";
   * @param options - Optional. Options to configure the HTTP pipeline.
   */
  constructor(connectionString: string, options?: CallAutomationClientOptions);

  /**
   * Initializes a new instance of the CallAutomationClient class using a TokenCredential or KeyCredential.
   * @param endpoint - The endpoint of the service (ex: https://contoso.eastus.communications.azure.net).
   * @param credential - TokenCredential or KeyCredential that is used to authenticate requests to the service.
   * @param options - Optional. Options to configure the HTTP pipeline.
   */
  constructor(
    endpoint: string,
    credential: TokenCredential | KeyCredential,
    options?: CallAutomationClientOptions,
  );

  constructor(
    connectionStringOrUrl: string,
    credentialOrOptions?: KeyCredential | TokenCredential | CallAutomationClientOptions,
    maybeOptions: CallAutomationClientOptions = {},
  ) {
    const options = isCallAutomationClientOptions(credentialOrOptions)
      ? credentialOrOptions
      : maybeOptions;

    if (!options?.userAgentOptions) {
      options.userAgentOptions = {};
    }

    this.internalPipelineOptions = {
      ...options,
      ...{
        loggingOptions: {
          logger: logger.info,
        },
      },
    };

    const { url, credential } = parseClientArguments(connectionStringOrUrl, credentialOrOptions);
    const authPolicy = createCommunicationAuthPolicy(credential);

    this.credential = credential;
    this.callAutomationApiClient = new CallAutomationApiClient(url, this.internalPipelineOptions);
    this.callAutomationApiClient.pipeline.addPolicy(authPolicy);

    this.sourceIdentity = communicationUserIdentifierModelConverter(options.sourceIdentity);
  }

  /**
   * Initializes a new instance of CallConnection.
   * @param callConnectionId - The CallConnection id for the CallConnection instance. (ex: 421CONTOSO-cRD6-4RDc-a078-99dRANDOMf).
   */
  public getCallConnection(callConnectionId: string): CallConnection {
    return new CallConnection(
      callConnectionId,
      this.callAutomationApiClient.endpoint,
      this.credential,
      this.internalPipelineOptions,
    );
  }

  /**
   * Initializes a new instance of CallRecording.
   */
  public getCallRecording(): CallRecording {
    return new CallRecording(
      this.callAutomationApiClient.endpoint,
      this.credential,
      this.internalPipelineOptions,
    );
  }

  /**
   * Get Source Identity that is used for create and answer call
   */
  public getSourceIdentity(): CommunicationUserIdentifier | undefined {
    return communicationUserIdentifierConverter(this.sourceIdentity);
  }

  private async createCallInternal(
    request: CreateCallRequest,
    options?: CreateCallOptions,
  ): Promise<CreateCallResult> {
    const optionsInternal = {
      ...options,
      repeatabilityFirstSent: new Date(),
      repeatabilityRequestID: randomUUID(),
    };
    const {
      callConnectionId,
      answeredBy,
      targets,
      sourceCallerIdNumber,
      source,
      answeredFor,
      ...result
    } = await this.callAutomationApiClient.createCall(request, optionsInternal);

    if (callConnectionId) {
      const callConnectionPropertiesDto: CallConnectionProperties = {
        ...result,
        callConnectionId: callConnectionId,
        source: source ? communicationIdentifierConverter(source) : undefined,
        answeredby: communicationUserIdentifierConverter(answeredBy),
        answeredFor: answeredFor ? phoneNumberIdentifierConverter(answeredFor) : undefined,
        targetParticipants: targets?.map((returnedTarget) =>
          communicationIdentifierConverter(returnedTarget),
        ),
        sourceCallerIdNumber: sourceCallerIdNumber
          ? phoneNumberIdentifierConverter(sourceCallerIdNumber)
          : undefined,
      };
      const callConnection = new CallConnection(
        callConnectionId,
        this.callAutomationApiClient.endpoint,
        this.credential,
        this.internalPipelineOptions,
      );
      const createCallResult: CreateCallResult = {
        callConnectionProperties: callConnectionPropertiesDto,
        callConnection: callConnection,
      };
      return createCallResult;
    }
    throw "callConnectionProperties / callConnectionId is missing in createCall result";
  }

  /**
   * Create an outgoing call from source to a target identity.
   * @param targetParticipant - A single target.
   * @param callbackUrl - The callback url.
   * @param options - Additional request options contains createCallConnection api options.
   */
  public async createCall(
    targetParticipant: CallInvite,
    callbackUrl: string,
    options: CreateCallOptions = {},
  ): Promise<CreateCallResult> {
    const request: CreateCallRequest = {
      source: this.sourceIdentity,
      targets: [communicationIdentifierModelConverter(targetParticipant.targetParticipant)],
      callbackUri: callbackUrl,
      operationContext: options.operationContext,
      callIntelligenceOptions: options.callIntelligenceOptions,
      mediaStreamingOptions: options.mediaStreamingOptions,
      transcriptionOptions: options.transcriptionOptions,
      sourceCallerIdNumber: PhoneNumberIdentifierModelConverter(
        targetParticipant.sourceCallIdNumber,
      ),
      sourceDisplayName: targetParticipant.sourceDisplayName,
      teamsAppSource: microsoftTeamsAppIdentifierModelConverter(options.teamsAppSource),
    };

    return this.createCallInternal(request, options);
  }

  /**
   * Create an outgoing call from source to a group of targets identities.
   * @param targetParticipants - A group of targets identities.
   * @param callbackUrl - The callback url.
   * @param options - Additional request options contains createCallConnection api options.
   */
  public async createGroupCall(
    targetParticipants: CommunicationIdentifier[],
    callbackUrl: string,
    // eslint-disable-next-line @azure/azure-sdk/ts-naming-options
    options: CreateCallOptions = {},
  ): Promise<CreateCallResult> {
    const request: CreateCallRequest = {
      source: this.sourceIdentity,
      targets: targetParticipants.map((target) => communicationIdentifierModelConverter(target)),
      callbackUri: callbackUrl,
      operationContext: options.operationContext,
      callIntelligenceOptions: options.callIntelligenceOptions,
      mediaStreamingOptions: options.mediaStreamingOptions,
      transcriptionOptions: options.transcriptionOptions,
      sourceCallerIdNumber: PhoneNumberIdentifierModelConverter(options.sourceCallIdNumber),
      sourceDisplayName: options.sourceDisplayName,
      teamsAppSource: microsoftTeamsAppIdentifierModelConverter(options.teamsAppSource),
    };

    return this.createCallInternal(request, options);
  }

  /**
   * Answer the call.
   * @param incomingCallContext - The context associated with the call.
   * @param callbackUrl - The callback url.
   * @param options - Additional request options contains answerCall api options.
   */
  public async answerCall(
    incomingCallContext: string,
    callbackUrl: string,
    options: AnswerCallOptions = {},
  ): Promise<AnswerCallResult> {
    const {
      callIntelligenceOptions,
      mediaStreamingOptions,
      transcriptionOptions,
      operationContext,
      ...operationOptions
    } = options;
    const request: AnswerCallRequest = {
      incomingCallContext: incomingCallContext,
      mediaStreamingOptions: mediaStreamingOptions,
      transcriptionOptions: transcriptionOptions,
      callIntelligenceOptions: callIntelligenceOptions,
      operationContext: operationContext,
      callbackUri: callbackUrl,
      answeredBy: this.sourceIdentity,
    };
    const optionsInternal = {
      ...operationOptions,
      repeatabilityFirstSent: new Date(),
      repeatabilityRequestID: randomUUID(),
    };
    const {
      callConnectionId,
      targets,
      sourceCallerIdNumber,
      answeredBy,
      source,
      answeredFor,
      ...result
    } = await this.callAutomationApiClient.answerCall(request, optionsInternal);

    if (callConnectionId) {
      const callConnectionProperties: CallConnectionProperties = {
        ...result,
        callConnectionId: callConnectionId,
        source: source ? communicationIdentifierConverter(source) : undefined,
        answeredby: communicationUserIdentifierConverter(answeredBy),
        answeredFor: answeredFor ? phoneNumberIdentifierConverter(answeredFor) : undefined,
        targetParticipants: targets?.map((target) => communicationIdentifierConverter(target)),
        sourceCallerIdNumber: sourceCallerIdNumber
          ? phoneNumberIdentifierConverter(sourceCallerIdNumber)
          : undefined,
      };
      const callConnection = new CallConnection(
        callConnectionId,
        this.callAutomationApiClient.endpoint,
        this.credential,
        this.internalPipelineOptions,
      );
      const answerCallResult: AnswerCallResult = {
        callConnectionProperties: callConnectionProperties,
        callConnection: callConnection,
      };
      return answerCallResult;
    }
    throw "callConnectionProperties / callConnectionId is missing in createCall result";
  }

  /**
   * Redirect the call.
   *
   * @param incomingCallContext - The context associated with the call.
   * @param targetParticipant - The target identity to redirect the call to.
   * @param options - Additional request options contains redirectCall api options.
   */
  public async redirectCall(
    incomingCallContext: string,
    targetParticipant: CallInvite,
    options: RedirectCallOptions = {},
  ): Promise<void> {
    const request: RedirectCallRequest = {
      incomingCallContext: incomingCallContext,
      target: communicationIdentifierModelConverter(targetParticipant.targetParticipant),
    };
    const optionsInternal = {
      ...options,
      repeatabilityFirstSent: new Date(),
      repeatabilityRequestID: randomUUID(),
    };

    return this.callAutomationApiClient.redirectCall(request, optionsInternal);
  }

  /**
   * Reject the call.
   *
   * @param incomingCallContext - The context associated with the call.
   * @param options - Additional request options contains rejectCall api options.
   */
  public async rejectCall(
    incomingCallContext: string,
    options: RejectCallOptions = {},
  ): Promise<void> {
    const request: RejectCallRequest = {
      incomingCallContext: incomingCallContext,
      callRejectReason: options.callRejectReason,
    };
    const optionsInternal = {
      ...options,
      repeatabilityFirstSent: new Date(),
      repeatabilityRequestID: randomUUID(),
    };

    return this.callAutomationApiClient.rejectCall(request, optionsInternal);
  }

  /**
   * Create connection to room call.
   * @param callLocator - Call locator to create connection.
   * @param callbackUrl - The callback url
   * @param options - Additional request options contains connect api options.
   */
  public async connectCall(
    callLocator: CallLocator,
    callbackUrl: string,
    options: ConnectCallOptions = {},
  ): Promise<ConnectCallResult> {
    const connectRequest: ConnectRequest = {
      callLocator: callLocator,
      callbackUri: callbackUrl,
      operationContext: options.operationContext,
      callIntelligenceOptions: options.callIntelligenceOptions,
      mediaStreamingOptions: options.mediaStreamingOptions,
      transcriptionOptions: options.transcriptionOptions,
    };

    if (callLocator.kind === "groupCallLocator") {
      connectRequest.callLocator.kind = "groupCallLocator";
      connectRequest.callLocator.groupCallId = callLocator.id;
    } else if (callLocator.kind === "roomCallLocator") {
      connectRequest.callLocator.kind = "roomCallLocator";
      connectRequest.callLocator.roomId = callLocator.id;
    } else {
      connectRequest.callLocator.kind = "serverCallLocator";
      connectRequest.callLocator.serverCallId = callLocator.id;
    }

    const optionsInternal = {
      ...options,
      repeatabilityFirstSent: new Date(),
      repeatabilityRequestID: randomUUID(),
    };

    const {
      callConnectionId,
      targets,
      sourceCallerIdNumber,
      answeredBy,
      source,
      answeredFor,
      ...result
    } = await this.callAutomationApiClient.connect(connectRequest, optionsInternal);

    if (callConnectionId) {
      const callConnectionProperties: CallConnectionProperties = {
        ...result,
        callConnectionId: callConnectionId,
        source: source ? communicationIdentifierConverter(source) : undefined,
        answeredby: answeredBy ? communicationUserIdentifierConverter(answeredBy) : undefined,
        targetParticipants: targets?.map((target) => communicationIdentifierConverter(target)),
        answeredFor: answeredFor ? phoneNumberIdentifierConverter(answeredFor) : undefined,
        sourceCallerIdNumber: sourceCallerIdNumber
          ? phoneNumberIdentifierConverter(sourceCallerIdNumber)
          : undefined,
      };
      const callConnection = new CallConnection(
        callConnectionId,
        this.callAutomationApiClient.endpoint,
        this.credential,
        this.internalPipelineOptions,
      );
      const connectResult: ConnectCallResult = {
        callConnectionProperties: callConnectionProperties,
        callConnection: callConnection,
      };
      return connectResult;
    }
    throw "callConnectionProperties / callConnectionId is missing in connect result";
  }
}
