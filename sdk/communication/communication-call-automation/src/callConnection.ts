// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { CommunicationIdentifier } from "@azure/communication-common";
import { CallMedia } from "./callMedia.js";
import type {
  AddParticipantRequest,
  CallAutomationApiClient,
  CallAutomationApiClientOptionalParams,
  CustomCallingContextInternal,
  MoveParticipantsRequest,
  MuteParticipantsRequest,
  RemoveParticipantRequest,
  TransferToParticipantRequest,
} from "./generated/src/index.js";
import { CallConnectionImpl } from "./generated/src/operations/index.js";
import {
  type CallConnectionProperties,
  type CallInvite,
  type CallParticipant,
  type CustomCallingContext,
} from "./models/models.js";
import type {
  AddParticipantOptions,
  CancelAddParticipantOperationOptions,
  GetCallConnectionPropertiesOptions,
  GetParticipantOptions,
  HangUpOptions,
  MoveParticipantsOptions,
  MuteParticipantOption,
  RemoveParticipantsOption,
  TransferCallToParticipantOptions,
} from "./models/options.js";
import type {
  ListParticipantsResult,
  TransferCallResult,
  AddParticipantResult,
  RemoveParticipantResult,
  MoveParticipantsResult,
  MuteParticipantResult,
  CancelAddParticipantOperationResult,
} from "./models/responses.js";
import {
  callParticipantConverter,
  communicationIdentifierConverter,
  communicationIdentifierModelConverter,
  communicationUserIdentifierConverter,
  phoneNumberIdentifierConverter,
  PhoneNumberIdentifierModelConverter,
  teamsPhoneCallDetailsModelConverter,
} from "./utli/converters.js";
import { randomUUID } from "@azure/core-util";
import type { KeyCredential, TokenCredential } from "@azure/core-auth";
import type { CallAutomationEventProcessor } from "./eventprocessor/callAutomationEventProcessor.js";
import type {
  AddParticipantEventResult,
  CancelAddParticipantEventResult,
  RemoveParticipantEventResult,
  MoveParticipantEventResult,
  TransferCallToParticipantEventResult,
} from "./eventprocessor/eventResponses.js";
import { createCustomCallAutomationApiClient } from "./credential/callAutomationAuthPolicy.js";

/**
 * CallConnection class represents call connection based APIs.
 */
export class CallConnection {
  private readonly callConnectionId: string;
  private readonly callConnection: CallConnectionImpl;
  private readonly callAutomationApiClient: CallAutomationApiClient;
  private readonly endpoint: string;
  private readonly credential: TokenCredential | KeyCredential;
  private readonly callAutomationApiClientOptions?: CallAutomationApiClientOptionalParams;
  private readonly callAutomationEventProcessor: CallAutomationEventProcessor;
  constructor(
    callConnectionId: string,
    endpoint: string,
    credential: KeyCredential | TokenCredential,
    eventProcessor: CallAutomationEventProcessor,
    options?: CallAutomationApiClientOptionalParams,
  ) {
    this.callAutomationApiClient = createCustomCallAutomationApiClient(
      credential,
      options,
      endpoint,
    );
    this.callConnectionId = callConnectionId;
    this.callConnection = new CallConnectionImpl(this.callAutomationApiClient);
    this.endpoint = endpoint;
    this.credential = credential;
    this.callAutomationEventProcessor = eventProcessor;
    this.callAutomationApiClientOptions = options;
  }

  /**
   * Initializes a new instance of CallMedia.
   */
  public getCallMedia(): CallMedia {
    return new CallMedia(
      this.callConnectionId,
      this.endpoint,
      this.credential,
      this.callAutomationEventProcessor,
      this.callAutomationApiClientOptions,
    );
  }

  /**
   * Get call connection properties of the call
   */
  public async getCallConnectionProperties(
    options: GetCallConnectionPropertiesOptions = {},
  ): Promise<CallConnectionProperties> {
    const { targets, sourceCallerIdNumber, answeredBy, source, answeredFor, ...result } =
      await this.callConnection.getCall(this.callConnectionId, options);
    const callConnectionProperties: CallConnectionProperties = {
      ...result,
      source: source ? communicationIdentifierConverter(source) : undefined,
      answeredby: communicationUserIdentifierConverter(answeredBy),
      answeredFor: answeredFor ? phoneNumberIdentifierConverter(answeredFor) : undefined,
      targetParticipants: targets?.map((target) => communicationIdentifierConverter(target)),
      sourceCallerIdNumber: sourceCallerIdNumber
        ? phoneNumberIdentifierConverter(sourceCallerIdNumber)
        : undefined,
    };
    return callConnectionProperties;
  }

  /**
   * Hang up the call for itself or terminate the whole call.
   *
   * @param isForEveryOne - Determine if every one in the call would be hung up or not.
   */
  public async hangUp(isForEveryone: boolean, options: HangUpOptions = {}): Promise<void> {
    if (isForEveryone) {
      const optionsInternal = {
        ...options,
        repeatabilityFirstSent: new Date(),
        repeatabilityRequestID: randomUUID(),
      };
      await this.callConnection.terminateCall(this.callConnectionId, optionsInternal);
    } else {
      await this.callConnection.hangupCall(this.callConnectionId, options);
    }
    return;
  }

  /**
   * Get a participant from the call
   *
   * @param targetParticipant - The communication identifier of requested participant.
   */
  public async getParticipant(
    targetParticipant: CommunicationIdentifier,
    options: GetParticipantOptions = {},
  ): Promise<CallParticipant> {
    let rawId: string | undefined = communicationIdentifierModelConverter(targetParticipant).rawId;
    rawId = rawId === undefined ? "" : rawId;

    const result = await this.callConnection.getParticipant(this.callConnectionId, rawId, options);
    const callParticipant: CallParticipant = {
      identifier: result.identifier
        ? communicationIdentifierConverter(result.identifier)
        : undefined,
      isMuted: result.isMuted,
      isOnHold: result.isOnHold,
    };
    return callParticipant;
  }

  /**
   * Get all participants from the call
   */
  public async listParticipants(
    options: GetParticipantOptions = {},
  ): Promise<ListParticipantsResult> {
    const result = this.callConnection.listParticipants(this.callConnectionId, options);
    const participants = [];
    const pages = result?.byPage();

    for await (const page of pages) {
      for (const participant of page) {
        participants.push(callParticipantConverter(participant));
      }
    }

    const listParticipantResponse: ListParticipantsResult = {
      ...result,
      values: participants,
    };
    return listParticipantResponse;
  }

  private createCustomCallingContextInternal(
    customCallingContext: CustomCallingContext,
  ): CustomCallingContextInternal {
    const sipHeaders: { [key: string]: string } = {};
    const voipHeaders: { [key: string]: string } = {};
    let teamsPhoneCallDetails: any = undefined;

    if (customCallingContext) {
      for (const header of customCallingContext) {
        if (header.kind === "sipuui") {
          sipHeaders[`User-To-User`] = header.value;
        } else if (header.kind === "sipx") {
          if (header.sipHeaderPrefix === "X-") {
            sipHeaders[`X-${header.key}`] = header.value;
          } else {
            sipHeaders[`X-MS-Custom-${header.key}`] = header.value;
          }
        } else if (header.kind === "voip") {
          voipHeaders[`${header.key}`] = header.value;
        } else if (header.kind === "teamsPhoneCallDetails") {
          teamsPhoneCallDetails = teamsPhoneCallDetailsModelConverter(header);
        }
      }
    }
    return {
      sipHeaders: sipHeaders,
      voipHeaders: voipHeaders,
      teamsPhoneCallDetails: teamsPhoneCallDetails,
    };
  }

  /**
   * Add a participant to the call
   *
   * @param participant - The participant is going to be added.
   */
  public async addParticipant(
    targetParticipant: CallInvite,
    options: AddParticipantOptions = {},
  ): Promise<AddParticipantResult> {
    const addParticipantRequest: AddParticipantRequest = {
      participantToAdd: communicationIdentifierModelConverter(targetParticipant.targetParticipant),
      sourceCallerIdNumber: PhoneNumberIdentifierModelConverter(
        targetParticipant.sourceCallIdNumber,
      ),
      sourceDisplayName: targetParticipant.sourceDisplayName,
      invitationTimeoutInSeconds: options.invitationTimeoutInSeconds,
      operationContext: options.operationContext ? options.operationContext : randomUUID(),
      operationCallbackUri: options.operationCallbackUrl,
      customCallingContext: this.createCustomCallingContextInternal(
        targetParticipant.customCallingContext!,
      ),
    };
    const optionsInternal = {
      ...options,
      repeatabilityFirstSent: new Date(),
      repeatabilityRequestID: randomUUID(),
    };
    const result = await this.callConnection.addParticipant(
      this.callConnectionId,
      addParticipantRequest,
      optionsInternal,
    );
    const addParticipantsResult: AddParticipantResult = {
      ...result,
      participant: {
        ...result.participant,
        identifier: result.participant?.identifier
          ? communicationIdentifierConverter(result.participant?.identifier)
          : undefined,
      },
      waitForEventProcessor: async (abortSignal, timeoutInMs) => {
        const addParticipantEventResult: AddParticipantEventResult = {
          isSuccess: false,
        };
        await this.callAutomationEventProcessor.waitForEventProcessor(
          (event) => {
            if (
              event.callConnectionId === this.callConnectionId &&
              event.kind === "AddParticipantSucceeded" &&
              event.operationContext === addParticipantRequest.operationContext
            ) {
              addParticipantEventResult.isSuccess = true;
              addParticipantEventResult.successResult = event;
              return true;
            } else if (
              event.callConnectionId === this.callConnectionId &&
              event.kind === "AddParticipantFailed" &&
              event.operationContext === addParticipantRequest.operationContext
            ) {
              addParticipantEventResult.isSuccess = false;
              addParticipantEventResult.failureResult = event;
              return true;
            } else {
              return false;
            }
          },
          abortSignal,
          timeoutInMs,
        );
        return addParticipantEventResult;
      },
    };
    return addParticipantsResult;
  }

  /**
   * Transfer the call to a target participant
   *
   * @param targetParticipant - The target to be transferred to.
   */
  public async transferCallToParticipant(
    targetParticipant: CommunicationIdentifier,
    options: TransferCallToParticipantOptions = {},
  ): Promise<TransferCallResult> {
    const transferToParticipantRequest: TransferToParticipantRequest = {
      targetParticipant: communicationIdentifierModelConverter(targetParticipant),
      operationContext: options.operationContext ? options.operationContext : randomUUID(),
      operationCallbackUri: options.operationCallbackUrl,
      transferee: options.transferee && communicationIdentifierModelConverter(options.transferee),
      customCallingContext: this.createCustomCallingContextInternal(options.customCallingContext!),
      sourceCallerIdNumber: PhoneNumberIdentifierModelConverter(options.sourceCallIdNumber),
    };
    const optionsInternal = {
      ...options,
      repeatabilityFirstSent: new Date(),
      repeatabilityRequestID: randomUUID(),
    };
    const result = await this.callConnection.transferToParticipant(
      this.callConnectionId,
      transferToParticipantRequest,
      optionsInternal,
    );
    const transferCallResult: TransferCallResult = {
      ...result,
      waitForEventProcessor: async (abortSignal, timeoutInMs) => {
        const transferCallToParticipantEventResult: TransferCallToParticipantEventResult = {
          isSuccess: false,
        };
        await this.callAutomationEventProcessor.waitForEventProcessor(
          (event) => {
            if (
              event.callConnectionId === this.callConnectionId &&
              event.kind === "CallTransferAccepted" &&
              event.operationContext === transferToParticipantRequest.operationContext
            ) {
              transferCallToParticipantEventResult.isSuccess = true;
              transferCallToParticipantEventResult.successResult = event;
              return true;
            } else if (
              event.callConnectionId === this.callConnectionId &&
              event.kind === "CallTransferFailed" &&
              event.operationContext === transferToParticipantRequest.operationContext
            ) {
              transferCallToParticipantEventResult.isSuccess = false;
              transferCallToParticipantEventResult.failureResult = event;
              return true;
            } else {
              return false;
            }
          },
          abortSignal,
          timeoutInMs,
        );
        return transferCallToParticipantEventResult;
      },
    };
    return transferCallResult;
  }

  /**
   * Remove a participant from the call
   *
   * @param participant - The participant is going to be removed from the call.
   */
  public async removeParticipant(
    participant: CommunicationIdentifier,
    options: RemoveParticipantsOption = {},
  ): Promise<RemoveParticipantResult> {
    const removeParticipantRequest: RemoveParticipantRequest = {
      participantToRemove: communicationIdentifierModelConverter(participant),
      operationContext: options.operationContext ? options.operationContext : randomUUID(),
      operationCallbackUri: options.operationCallbackUrl,
    };
    const optionsInternal = {
      ...options,
      repeatabilityFirstSent: new Date(),
      repeatabilityRequestID: randomUUID(),
    };
    const result = await this.callConnection.removeParticipant(
      this.callConnectionId,
      removeParticipantRequest,
      optionsInternal,
    );
    const removeParticipantsResult: RemoveParticipantResult = {
      ...result,
      waitForEventProcessor: async (abortSignal, timeoutInMs) => {
        const removeParticipantEventResult: RemoveParticipantEventResult = {
          isSuccess: false,
        };
        await this.callAutomationEventProcessor.waitForEventProcessor(
          (event) => {
            if (
              event.callConnectionId === this.callConnectionId &&
              event.kind === "RemoveParticipantSucceeded" &&
              event.operationContext === removeParticipantRequest.operationContext
            ) {
              removeParticipantEventResult.isSuccess = true;
              removeParticipantEventResult.successResult = event;
              return true;
            } else if (
              event.callConnectionId === this.callConnectionId &&
              event.kind === "RemoveParticipantFailed" &&
              event.operationContext === removeParticipantRequest.operationContext
            ) {
              removeParticipantEventResult.isSuccess = false;
              removeParticipantEventResult.failureResult = event;
              return true;
            } else {
              return false;
            }
          },
          abortSignal,
          timeoutInMs,
        );
        return removeParticipantEventResult;
      },
    };
    return removeParticipantsResult;
  }

  /**
   * Move participants to the call
   *
   * @param targetParticipants - The participants to be moved to the call.
   * @param fromCall - The CallConnectionId for the call you want to move the participant from.
   * @param options - Additional attributes for move participants.
   */
  public async moveParticipants(
    targetParticipants: CommunicationIdentifier[],
    fromCall: string,
    options: MoveParticipantsOptions = {},
  ): Promise<MoveParticipantsResult> {
    const moveParticipantsRequest: MoveParticipantsRequest = {
      targetParticipants: targetParticipants.map((participant) =>
        communicationIdentifierModelConverter(participant),
      ),
      fromCall: fromCall,
      operationContext: options.operationContext ? options.operationContext : randomUUID(),
      operationCallbackUri: options.operationCallbackUrl,
    };
    const optionsInternal = {
      ...options,
      repeatabilityFirstSent: new Date(),
      repeatabilityRequestID: randomUUID(),
    };
    const result = await this.callConnection.moveParticipants(
      this.callConnectionId,
      moveParticipantsRequest,
      optionsInternal,
    );
    const moveParticipantsResult: MoveParticipantsResult = {
      ...result,
      participants: result.participants?.map((participant) =>
        callParticipantConverter(participant),
      ),
      fromCall: fromCall,
      waitForEventProcessor: async (abortSignal, timeoutInMs) => {
        const moveParticipantEventResult: MoveParticipantEventResult = {
          isSuccess: false,
        };
        await this.callAutomationEventProcessor.waitForEventProcessor(
          (event) => {
            if (
              event.callConnectionId === this.callConnectionId &&
              event.kind === "MoveParticipantSucceeded" &&
              event.operationContext === moveParticipantsRequest.operationContext
            ) {
              moveParticipantEventResult.isSuccess = true;
              moveParticipantEventResult.successResult = event;
              return true;
            } else if (
              event.callConnectionId === this.callConnectionId &&
              event.kind === "MoveParticipantFailed" &&
              event.operationContext === moveParticipantsRequest.operationContext
            ) {
              moveParticipantEventResult.isSuccess = false;
              moveParticipantEventResult.failureResult = event;
              return true;
            } else {
              return false;
            }
          },
          abortSignal,
          timeoutInMs,
        );
        return moveParticipantEventResult;
      },
    };
    return moveParticipantsResult;
  }

  /**
   * Mute participant from the call.
   *
   * @param participant - Participant to be muted from the call.
   * @param options - Additional attributes for mute participant.
   */
  public async muteParticipant(
    participant: CommunicationIdentifier,
    options: MuteParticipantOption = {},
  ): Promise<MuteParticipantResult> {
    const muteParticipantsRequest: MuteParticipantsRequest = {
      targetParticipants: [communicationIdentifierModelConverter(participant)],
      operationContext: options.operationContext,
    };
    const optionsInternal = {
      ...options,
      repeatabilityFirstSent: new Date(),
      repeatabilityRequestID: randomUUID(),
    };
    const result = await this.callConnection.mute(
      this.callConnectionId,
      muteParticipantsRequest,
      optionsInternal,
    );
    const muteParticipantResult: MuteParticipantResult = {
      ...result,
    };
    return muteParticipantResult;
  }

  /** Cancel add participant request.
   *
   * @param invitationId - Invitation ID used to cancel the add participant request.
   */
  public async cancelAddParticipantOperation(
    invitationId: string,
    options: CancelAddParticipantOperationOptions = {},
  ): Promise<CancelAddParticipantOperationResult> {
    const {
      operationContext,
      operationCallbackUrl: operationCallbackUri,
      ...operationOptions
    } = options;
    const cancelAddParticipantRequest = {
      invitationId,
      operationContext: operationContext ? operationContext : randomUUID(),
      operationCallbackUri,
    };
    const optionsInternal = {
      ...operationOptions,
      repeatabilityFirstSent: new Date(),
      repeatabilityRequestID: randomUUID(),
    };

    const result = await this.callConnection.cancelAddParticipant(
      this.callConnectionId,
      cancelAddParticipantRequest,
      optionsInternal,
    );

    const cancelAddParticipantResult: CancelAddParticipantOperationResult = {
      ...result,
      waitForEventProcessor: async (abortSignal, timeoutInMs) => {
        const cancelAddParticipantEventResult: CancelAddParticipantEventResult = {
          isSuccess: false,
        };
        await this.callAutomationEventProcessor.waitForEventProcessor(
          (event) => {
            if (
              event.callConnectionId === this.callConnectionId &&
              event.kind === "CancelAddParticipantSucceeded" &&
              event.operationContext === cancelAddParticipantRequest.operationContext
            ) {
              cancelAddParticipantEventResult.isSuccess = true;
              cancelAddParticipantEventResult.successResult = event;
              return true;
            } else if (
              event.callConnectionId === this.callConnectionId &&
              event.kind === "CancelAddParticipantFailed" &&
              event.operationContext === cancelAddParticipantRequest.operationContext
            ) {
              cancelAddParticipantEventResult.isSuccess = false;
              cancelAddParticipantEventResult.failureResult = event;
              return true;
            } else {
              return false;
            }
          },
          abortSignal,
          timeoutInMs,
        );
        return cancelAddParticipantEventResult;
      },
    };

    return cancelAddParticipantResult;
  }
}
