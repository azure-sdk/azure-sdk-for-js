// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Skill Variable */
export interface SkillVariable {
  /** Skill variable type */
  type?: string;
  /** Skill variable value */
  value?: string;
  /** Skill variable value is stored as json document */
  valueStoredAsJson: boolean;
}

/** Skill variable parent entity adding additional attribute 'skillsource' to provide visibility to users as to what data/information was used in generating the output of a skill */
export interface OutputSkillVariable extends SkillVariable {
  /** Array of cited sources that were fetched by a skill and that impacted the output of the skill evaluation */
  sources: Array<SkillSource> | null;
}

/** Source that is fetched during the evaluation of a skill. Provides visibility to users as to what data/information was used in generating the output of a skill */
export interface SkillSource {
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

/** Invoke skill request including necessary inputs for invoking a skill */
export interface InvokeSkillRequest {
  /** Name of skillset in which desired skill to invoke resides */
  skillsetName?: string;
  /** Name of skill to be invoked */
  skillName: string;
  /** Skill inputs */
  inputs: Record<string, SkillVariable> | null;
}

/** The progress message to log during a skill invocation */
export interface LogProgressRequest {
  /**
   * Log level
   *
   * Possible values: Error, Warning, Information, Verbose
   */
  level?: string;
  /** Log message */
  message: string;
}

/** TokenCredentialRequest */
export interface GetTokenCredentialRequest {
  /** Scopes */
  scopes: string[];
  /**
   * TokenCredential Type
   *
   * Possible values: None, UserTokenCredential, ServiceTokenCredential
   */
  tokenCredentialType: string;
  /** TenantId */
  tenantId?: string | null;
}

/** GetInputRequest */
export interface GetInputRequest {
  /** Input Name */
  inputName: string;
  /** Default value for the input */
  defaultValue?: SkillVariable | null;
}

/** SetInputRequest */
export interface SetInputRequest {
  /** Input Name */
  inputName: string;
  /** Default value for the input */
  defaultValue?: SkillVariable | null;
}

/** AddSourcesRequest */
export interface AddSourcesRequest {
  /** List of SkillSource */
  sources: Array<SkillSource>;
}
