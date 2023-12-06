// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** SkillContext object containing properties of the current session relevant to the invoked skill */
export interface SkillContextResponseOutput {
  /** Skill descriptor containing attributes that describe a skill (i.e. Inputs required to execute the skill) */
  descriptor: SkillDescriptorOutput;
  /** SkillContext Id */
  id: string;
  /** Array of feature flags */
  featureFlags: string[];
  /** Skill Variable Collection */
  inputs: Record<string, SkillVariableOutput>;
  /** Additional skill specific settings */
  properties: Record<string, string>;
  /** TODO */
  startTime: string;
  /** Tenant id of tenant in which skill invocation occured */
  tenantId: string;
  /** User id of user that invoked the skill */
  userId: string;
}

/** The desciptor of a skill */
export interface SkillDescriptorOutput {
  /** The skillset descriptor */
  skillset: SkillsetDescriptorOutput;
  /** The name of the skill */
  name: string;
  /** The format of the skill */
  format: string;
  /** The display name of the skill */
  displayName: string;
  /** An alternative name for the skill as some planners follow different naming convensions. This is set by the planner to map the name back to the skill */
  altName: string;
  /** The dependencies of the skill */
  dependencies: Array<SkillDependencyDescriptorOutput>;
  /** The description of the skill */
  description: string;
  /** A list of example prompts for the skill */
  examplePrompts: string[];
  /** Whether the skill is hidden TODO what does this mean */
  hidden: boolean;
  /** The inputs required for the skill */
  inputs: Array<SkillInputDescriptorOutput>;
  /** The outputs of the skill */
  outputs: Array<SkillOutputDescriptorOutput>;
  /** The prompt aligned name of the skill TODO what does this mean */
  promptAlignedName: string;
  /** A list of feature flags. At least one of the feature flags is required to enabled in the prompt context in order for the skillset to be available */
  userVisibilityFeatureFlags: string[];
  /**
   * Controls the conditions under which the users can see or use this skillset
   *
   * Possible values: Always, Never, IfFeatureFlagEnabled
   */
  userVisibility: string;
  /** Visibility flags required for the planner to user the skillset TODO confirm what this does */
  plannerVisibilityFeatureFlags: string[];
  /**
   * Controls the conditions under a prompt can use this skillset
   *
   * Possible values: Always, Never, IfFeatureFlagEnabled
   */
  plannerVisibility: string;
  /** The settings of the skill */
  settings: Record<string, string>;
  /** skillSummaryMetadata */
  skillSummaryMetadata: SkillSummaryDescriptorOutput;
  /** EnableVariableSubstitutionInCompose */
  enableVariableSubstitutionInCompose: boolean;
}

/** Entity representing a Skillset. */
export interface SkillsetDescriptorOutput {
  /** Namespace for the skillset */
  namespace: string;
  /** The name of the Skillset */
  name: string;
  /** The description of the Skillset */
  description: string;
  /** The description of the skillset that's displayed TODO postman/dev figure out where this is displayed */
  descriptionDisplay: string;
  /** The Skillset name that's displayed in the portal */
  disaplyName: string;
  /** The icon displayed for the skillset in the console */
  icon: string;
  /**
   * The category of the Skillset
   *
   * Possible values: Hidden, Microsoft, Other, Web, Testing, Plugin
   */
  category: string;
  /**
   * CatalogScope of the Skillset
   *
   * Possible values: None, User, Workspace, Tenant, Global
   */
  catalogScope: string;
  /** Whether the skillset is enabled TODO how is this different than Hidden */
  enabled: boolean;
  /** Whether the skillset is hidden TODO how is this different than enabled */
  hidden: boolean;
  /** The prerequisites of a skillset TODO what does this mean */
  prerequisites: string[] | null;
  /** The settings of a skillset */
  settings: Array<SkillsetSettingOutput>;
  /** The settings of a skillset */
  authorization: SkillsetAuthOutput;
  /** The types of authentication supported by the skillset */
  supportedAuthTypes: string[];
  /** A list of feature flags. At least one of the feature flags is required to enabled in the prompt context in order for the skillset to be available */
  userVisibilityFeatureFlags: string[];
  /**
   * Controls the conditions under which the users can see or use this skillset
   *
   * Possible values: Always, Never, IfFeatureFlagEnabled
   */
  userVisibility: string;
  /** Visibility flags required for the planner to user the skillset TODO confirm what this does */
  plannerVisibilityFeatureFlags: string[];
  /**
   * Controls the conditions under a prompt can use this skillset
   *
   * Possible values: Always, Never, IfFeatureFlagEnabled
   */
  plannerVisibility: string;
  /** The user ID of the user who created this skillset. */
  creatorUserId: string;
  /** The ID of an Entra group that contains the owners for this Skillset */
  ownersGroupId: string;
}

/** Defines the settings of a skillset */
export interface SkillsetSettingOutput {
  /** The name of the skillset setting */
  name: string;
  /** The label of the skillset setting */
  label: string;
  /** The description of the skillset setting used to describe the setting to the user in an info text box */
  description: string;
  /** The hint text used to fill in the setting box */
  hintText: string;
  /**
   * The type of the skillset setting
   *
   * Possible values: SecretString, String
   */
  settingType: string;
  /** Whether the skillset setting is required */
  required: boolean;
  /** The default value of the skillset setting */
  defaultValue: string;
  /** The value of the skillset setting */
  value: string;
}

/** The authorization settings for the skillset */
export interface SkillsetAuthOutput {
  /**
   * SkillsetAuth Type
   *
   * Possible values: None, Basic, ApiKey, OAuthAuthorizationCodeFlow, OAuthClientCredentialsFlow, AAD, ServiceHttp, AADDelegated
   */
  type: string;
}

/** The descriptor of a skill dependency */
export interface SkillDependencyDescriptorOutput {
  /** The skillset name */
  skillsetName: string;
  /** The name of the skill */
  skillName: string;
}

/** The descriptor of a skill input */
export interface SkillInputDescriptorOutput {
  /** The name of the skill input */
  name?: string;
  /** The type of the skill input */
  type: SkillTypeDescriptorOutput;
  /** The description of the skill */
  description?: string;
  /** Whether a skill input is required */
  required: boolean;
  /** The default value of the skill input */
  defaultValue?: string;
  /** The placeholder value of the skill input TODO how is this different than the default */
  placeholderValue: string;
  /** Enum */
  enum: string[] | null;
}

/** The descriptor of a skill type */
export interface SkillTypeDescriptorOutput {
  /** The name of the skill type */
  name: string;
}

/** The descriptor of a skill output */
export interface SkillOutputDescriptorOutput {
  /** The name of the skill input */
  name?: string;
  /** The type of the skill input */
  type: SkillTypeDescriptorOutput;
  /** The description of the skill */
  description?: string;
}

/** SkillSummaryDescriptor */
export interface SkillSummaryDescriptorOutput {
  /** SummaryStartMessage */
  summaryStartMessage: string;
  /** SummaryEndMessage */
  summaryEndMessage: string;
}

/** Skill Variable */
export interface SkillVariableOutput {
  /** Skill variable type */
  type?: string;
  /** Skill variable value */
  value?: string;
  /** Skill variable value is stored as json document */
  valueStoredAsJson: boolean;
}

/** Skill variable parent entity adding additional attribute 'skillsource' to provide visibility to users as to what data/information was used in generating the output of a skill */
export interface OutputSkillVariableOutput extends SkillVariableOutput {
  /** Array of cited sources that were fetched by a skill and that impacted the output of the skill evaluation */
  sources: Array<SkillSourceOutput> | null;
}

/** Source that is fetched during the evaluation of a skill. Provides visibility to users as to what data/information was used in generating the output of a skill */
export interface SkillSourceOutput {
  /** User friendly name for the information source */
  displayName: string;
  /** Information source content (i.e. URL to article) */
  sourceContent: string;
  /**
   * The source type (i.e. URI)
   *
   * Possible values: Uri, StringType
   */
  sourceType: string;
  /** Source data serialized as string */
  sourceSerializedData?: string | null;
}

/** The prompt history of the current session */
export interface PromptHistoryResponseOutput {
  /** List of prompts that have been evaluated in the current session */
  prompts: Array<SessionPromptOutput>;
}

/** A record for a prompt and response used in tracking session prompt history */
export interface SessionPromptOutput {
  /** The content of the prompt */
  prompt: string;
  /** Prompt response returned by the prompt evaluation */
  response: string | null;
}

/** Auth Details */
export interface AuthDetailsOutput {
  /**
   * Auth Location
   *
   * Possible values: Header, QueryParams
   */
  authLocation: string;
  /** Auth Info */
  authInfo: Record<string, string>;
}

/** AccessToken */
export interface AccessTokenOutput {
  /** Token string */
  token: string;
  /** Expiry time */
  expiresOn: string;
}
