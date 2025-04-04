// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Request body parameters for the translate API. */
export interface TranslateBodyDetails {
  /** Specifies the text string to be translated in the translate API. */
  text: InputTextItem;
  /**
   * Specifies the language of the output text. The target language must be one of the supported languages included
   * in the translation scope. It's possible to translate to multiple languages simultaneously by including
   * multiple string values in the targetsLanguage array.
   */
  targetsLanguage: string[];
  /**
   * Defines whether the text being translated is plain text or HTML text. Any HTML needs to be a well-formed,
   * complete element. Possible values are: plain (default) or html.
   *
   * Possible values: "Plain", "Html"
   */
  targetsTextType?: TextType;
  /**
   * Specifies how profanities should be treated in translations.
   * Possible values are: NoAction (default), Marked or Deleted.
   */
  targetsProfanityAction?: ProfanityAction;
  /**
   * Specifies how profanities should be marked in translations.
   * Possible values are: Asterisk (default) or Tag.
   */
  targetsProfanityMarker?: ProfanityMarker;
  /** Specifies the script of the input text. */
  script?: string;
  /** Specifies the script of the translated text. */
  targetsScript?: string;
  /** Model that should be used for translation. */
  targetsdeploymentNameModel?: string;
  /**
   * In the case where a custom system is being used, specifies that the service is allowed to fall back to a
   * general system when a custom system doesn't exist.
   * In the case where a Large Language Model is being used, specifies that the service is allowed to fall
   * back to a Small Language Model if an error occurs.
   * Possible values are: true (default) or false.
   *
   * allowFallback=false specifies that the translation should only use systems trained for the category specified
   * by the request. If a translation for language X to language Y requires chaining through a pivot language E,
   * then all the systems in the chain (X → E and E → Y) will need to be custom and have the same category.
   * If no system is found with the specific category, the request will return a 400 status code. allowFallback=true
   * specifies that the service is allowed to fall back to a general system when a custom system doesn't exist.
   */
  targetsAllowFallback?: boolean;
  /** Defines complexity of LLM prompts to provide high accuracy translation. */
  targetsGrade?: string;
  /** Desired tone of target translation. */
  targetsTone?: string;
  /** Desired gender of target translation. */
  targetsGender?: string;
  /** Reference dataset ID having sentence pair to generate adaptive customized translation */
  targetsAdaptiveDatasetIds?: string[];
}

/** Element containing the text for translation. */
export interface InputTextItem {
  /** Text to translate. */
  text: string;
}

/** Alias for TextType */
export type TextType = string;
/** Translator profanity actions */
export type ProfanityAction = "NoAction" | "Marked" | "Deleted";
/** Translator profanity markers */
export type ProfanityMarker = "Asterisk" | "Tag";
