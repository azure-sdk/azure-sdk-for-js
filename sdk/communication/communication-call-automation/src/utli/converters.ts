// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  PhoneNumberIdentifier,
  CommunicationUserIdentifier,
  UnknownIdentifier,
  SerializedPhoneNumberIdentifier,
  CommunicationIdentifier,
  SerializedCommunicationIdentifier,
  MicrosoftTeamsUserIdentifier,
  MicrosoftTeamsAppIdentifier,
  TeamsExtensionUserIdentifier,
} from "@azure/communication-common";
import {
  serializeCommunicationIdentifier,
  isCommunicationUserIdentifier,
  isPhoneNumberIdentifier,
  isUnknownIdentifier,
  isMicrosoftTeamsUserIdentifier,
  isMicrosoftTeamsAppIdentifier,
  isTeamsExtensionUserIdentifier,
} from "@azure/communication-common";
import type {
  CallParticipantInternal,
  CommunicationIdentifierModel,
  CommunicationIdentifierModelKind,
  KnownCommunicationCloudEnvironmentModel,
  PhoneNumberIdentifierModel,
  CommunicationUserIdentifierModel,
  MicrosoftTeamsAppIdentifierModel,
} from "../generated/src/index.js";
import { KnownCommunicationIdentifierModelKind } from "../generated/src/index.js";
import type { CallParticipant } from "../models/models.js";

function extractKind(
  identifierModel: CommunicationIdentifierModel,
): CommunicationIdentifierModelKind {
  if (identifierModel.communicationUser !== undefined) {
    return KnownCommunicationIdentifierModelKind.CommunicationUser;
  }
  if (identifierModel.phoneNumber !== undefined) {
    return KnownCommunicationIdentifierModelKind.PhoneNumber;
  }
  if (identifierModel.microsoftTeamsUser !== undefined) {
    return KnownCommunicationIdentifierModelKind.MicrosoftTeamsUser;
  }
  if (identifierModel.microsoftTeamsApp !== undefined) {
    return KnownCommunicationIdentifierModelKind.MicrosoftTeamsApp;
  }
  if (identifierModel.teamsExtensionUser !== undefined) {
    return KnownCommunicationIdentifierModelKind.TeamsExtensionUser;
  }
  return KnownCommunicationIdentifierModelKind.Unknown;
}

/** Convert PhoneNumberIdentifier to PhoneNumberIdentifierModel(Internal usage class) */
export function PhoneNumberIdentifierModelConverter(
  phoneNumberIdentifier: PhoneNumberIdentifier | undefined,
): PhoneNumberIdentifierModel | undefined {
  if (phoneNumberIdentifier === undefined || phoneNumberIdentifier.phoneNumber === undefined) {
    return undefined;
  }

  const phoneNumberIdentifierModel =
    serializeCommunicationIdentifier(phoneNumberIdentifier).phoneNumber;
  return phoneNumberIdentifierModel;
}

/** Convert SerializedPhoneNumberIdentifier to PhoneNumberIdentifier(Public usage class) */
export function phoneNumberIdentifierConverter(
  serializedPhoneNumberIdentifier: SerializedPhoneNumberIdentifier | undefined,
): PhoneNumberIdentifier | undefined {
  if (
    serializedPhoneNumberIdentifier === undefined ||
    serializedPhoneNumberIdentifier?.value === null
  ) {
    return undefined;
  }

  const phoneNumberIdentifier: PhoneNumberIdentifier = {
    phoneNumber: serializedPhoneNumberIdentifier.value,
  };
  return phoneNumberIdentifier;
}

/** Convert CommunicationIdentifierModel to CommunicationIdentifier(Public usage class) */
export function communicationIdentifierConverter(
  identifierModel: CommunicationIdentifierModel,
): CommunicationIdentifier {
  const rawId = identifierModel.rawId;
  const kind =
    identifierModel.kind !== undefined ? identifierModel.kind : extractKind(identifierModel);

  if (
    kind === KnownCommunicationIdentifierModelKind.CommunicationUser &&
    identifierModel.communicationUser !== undefined
  ) {
    const communicationUserIdentifier: CommunicationUserIdentifier = {
      communicationUserId: identifierModel.communicationUser.id,
    };
    return communicationUserIdentifier;
  }

  if (
    kind === KnownCommunicationIdentifierModelKind.PhoneNumber &&
    identifierModel.phoneNumber !== undefined
  ) {
    const phoneNumberIdentifier: PhoneNumberIdentifier = {
      phoneNumber: identifierModel.phoneNumber.value,
      rawId: rawId,
    };
    return phoneNumberIdentifier;
  }

  if (
    kind === KnownCommunicationIdentifierModelKind.MicrosoftTeamsUser &&
    identifierModel.microsoftTeamsUser !== undefined
  ) {
    const microsoftTeamsUserIdentifier: MicrosoftTeamsUserIdentifier = {
      rawId: rawId,
      microsoftTeamsUserId: identifierModel.microsoftTeamsUser.userId,
      isAnonymous: identifierModel.microsoftTeamsUser.isAnonymous,
      cloud: identifierModel.microsoftTeamsUser.cloud as KnownCommunicationCloudEnvironmentModel,
    };
    return microsoftTeamsUserIdentifier;
  }

  if (
    kind === KnownCommunicationIdentifierModelKind.MicrosoftTeamsApp &&
    identifierModel.microsoftTeamsApp !== undefined
  ) {
    const microsoftTeamsAppIdentifier: MicrosoftTeamsAppIdentifier = {
      rawId: rawId,
      teamsAppId: identifierModel.microsoftTeamsApp.appId,
      cloud: identifierModel.microsoftTeamsApp.cloud as KnownCommunicationCloudEnvironmentModel,
    };
    return microsoftTeamsAppIdentifier;
  }

  if (
    kind === KnownCommunicationIdentifierModelKind.TeamsExtensionUser &&
    identifierModel.teamsExtensionUser !== undefined
  ) {
    const teamsExtensionUserIdentifier: TeamsExtensionUserIdentifier = {
      rawId: rawId,
      userId: identifierModel.teamsExtensionUser.userId,
      resourceId: identifierModel.teamsExtensionUser.resourceId,
      tenantId: identifierModel.teamsExtensionUser.tenantId,
      cloud: identifierModel.teamsExtensionUser.cloud as KnownCommunicationCloudEnvironmentModel,
    };
    return teamsExtensionUserIdentifier;
  }

  const unknownIdentifier: UnknownIdentifier = {
    id: rawId ? rawId : "",
  };
  return unknownIdentifier;
}

/** Convert CommunicationIdentifier to CommunicationIdentifierModel(Internal usage class) */
export function communicationIdentifierModelConverter(
  identifier: CommunicationIdentifier,
): CommunicationIdentifierModel {
  const serializedIdentifier: SerializedCommunicationIdentifier =
    serializeCommunicationIdentifier(identifier);
  if (isCommunicationUserIdentifier(identifier)) {
    const communicationUserIdentifierModel: CommunicationIdentifierModel = {
      kind: KnownCommunicationIdentifierModelKind.CommunicationUser,
      ...serializedIdentifier,
    };
    return communicationUserIdentifierModel;
  }

  if (isPhoneNumberIdentifier(identifier)) {
    const phoneNumberIdentifierModel: CommunicationIdentifierModel = {
      kind: KnownCommunicationIdentifierModelKind.PhoneNumber,
      ...serializedIdentifier,
    };
    return phoneNumberIdentifierModel;
  }

  if (isMicrosoftTeamsUserIdentifier(identifier)) {
    const microsoftTeamsUserIdentifierModel: CommunicationIdentifierModel = {
      kind: KnownCommunicationIdentifierModelKind.MicrosoftTeamsUser,
      ...serializedIdentifier,
    };
    return microsoftTeamsUserIdentifierModel;
  }

  if (isMicrosoftTeamsAppIdentifier(identifier)) {
    const microsoftTeamsAppIdentifierModel: CommunicationIdentifierModel = {
      kind: KnownCommunicationIdentifierModelKind.MicrosoftTeamsApp,
      ...serializedIdentifier,
    };
    return microsoftTeamsAppIdentifierModel;
  }

  if (isTeamsExtensionUserIdentifier(identifier)) {
    const teamsExtensionUserIdentifierModel: CommunicationIdentifierModel = {
      kind: KnownCommunicationIdentifierModelKind.TeamsExtensionUser,
      ...serializedIdentifier,
    };
    return teamsExtensionUserIdentifierModel;
  }

  if (isUnknownIdentifier(identifier)) {
    const unknownIdentifierModel: CommunicationIdentifierModel = {
      kind: KnownCommunicationIdentifierModelKind.Unknown,
      ...serializedIdentifier,
    };
    return unknownIdentifierModel;
  }

  throw new Error();
}

/** Convert CallParticipantInternal to CallParticipant */
export function callParticipantConverter(
  acsCallParticipant: CallParticipantInternal,
): CallParticipant {
  const callParticipant: CallParticipant = {
    ...acsCallParticipant,
    identifier: acsCallParticipant.identifier
      ? communicationIdentifierConverter(acsCallParticipant.identifier)
      : undefined,
  };
  return callParticipant;
}

/** Convert CommunicationUserIdentifier to CommunicationUserIdentifierModel (Internal usage class) */
export function communicationUserIdentifierModelConverter(
  identifier: CommunicationUserIdentifier | undefined,
): CommunicationUserIdentifierModel | undefined {
  if (!identifier || !identifier.communicationUserId) {
    return undefined;
  }

  return { id: identifier.communicationUserId };
}

/** Convert CommunicationUserIdentifierModel to CommunicationUserIdentifier (Public usage class) */
export function communicationUserIdentifierConverter(
  identifier: CommunicationUserIdentifierModel | undefined,
): CommunicationUserIdentifier | undefined {
  if (!identifier || !identifier.id) {
    return undefined;
  }

  return { communicationUserId: identifier.id };
}

/** Convert MicrosoftTeamsAppIdentifier to MicrosoftTeamsAppIdentifierModel (Internal usage class) */
export function microsoftTeamsAppIdentifierModelConverter(
  identifier: MicrosoftTeamsAppIdentifier | undefined,
): MicrosoftTeamsAppIdentifierModel | undefined {
  if (!identifier || !identifier.teamsAppId) {
    return undefined;
  }

  return { appId: identifier.teamsAppId };
}

/** Convert MicrosoftTeamsAppIdentifierModel to MicrosoftTeamsAppIdentifier (Public usage class) */
export function microsoftTeamsAppIdentifierConverter(
  identifier: MicrosoftTeamsAppIdentifierModel | undefined,
): MicrosoftTeamsAppIdentifier | undefined {
  if (!identifier || !identifier.appId) {
    return undefined;
  }

  return { teamsAppId: identifier.appId };
}
