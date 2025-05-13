// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Response for the languages API. */
export interface GetSupportedLanguagesResultOutput {
  /** Languages that support translate API. */
  translation?: Record<string, TranslationLanguageOutput>;
  /** Languages that support transliteration API. */
  transliteration?: Record<string, TransliterationLanguageOutput>;
  /** Languages that support dictionary API. */
  dictionary?: Record<string, SourceDictionaryLanguageOutput>;
}

/**
 * The value of the translation property is a dictionary of (key, value) pairs. Each key is a BCP 47 language tag.
 * A key identifies a language for which text can be translated to or translated from.
 */
export interface TranslationLanguageOutput {
  /** Display name of the language in the locale requested via Accept-Language header. */
  name: string;
  /** Display name of the language in the locale native for this language. */
  nativeName: string;
  /** Directionality, which is rtl for right-to-left languages or ltr for left-to-right languages. */
  dir: LanguageDirectionalityOutput;
}

/**
 * The value of the transliteration property is a dictionary of (key, value) pairs.
 * Each key is a BCP 47 language tag. A key identifies a language for which text can be converted from one script
 * to another script.
 */
export interface TransliterationLanguageOutput {
  /** Display name of the language in the locale requested via Accept-Language header. */
  name: string;
  /** Display name of the language in the locale native for this language. */
  nativeName: string;
  /** List of scripts to convert from. */
  scripts: Array<TransliterableScriptOutput>;
}

/** Script definition with list of script into which given script can be translitered. */
export interface TransliterableScriptOutput extends LanguageScriptOutput {
  /** List of scripts available to convert text to. */
  toScripts: Array<LanguageScriptOutput>;
}

/** Common properties of language script */
export interface LanguageScriptOutput {
  /** Code identifying the script. */
  code: string;
  /** Display name of the script in the locale requested via Accept-Language header. */
  name: string;
  /** Display name of the language in the locale native for the language. */
  nativeName: string;
  /** Directionality, which is rtl for right-to-left languages or ltr for left-to-right languages. */
  dir: LanguageDirectionalityOutput;
}

/** Properties ot the source dictionary language */
export interface SourceDictionaryLanguageOutput {
  /** Display name of the language in the locale requested via Accept-Language header. */
  name: string;
  /** Display name of the language in the locale native for this language. */
  nativeName: string;
  /** Directionality, which is rtl for right-to-left languages or ltr for left-to-right languages. */
  dir: LanguageDirectionalityOutput;
  /** List of languages with alterative translations and examples for the query expressed in the source language. */
  translations: Array<TargetDictionaryLanguageOutput>;
}

/** Properties of the target dictionary language */
export interface TargetDictionaryLanguageOutput {
  /** Display name of the language in the locale requested via Accept-Language header. */
  name: string;
  /** Display name of the language in the locale native for this language. */
  nativeName: string;
  /** Directionality, which is rtl for right-to-left languages or ltr for left-to-right languages. */
  dir: LanguageDirectionalityOutput;
  /** Language code identifying the target language. */
  code: string;
}

/** Representation of the Error Response from Translator Service. */
export interface ErrorResponseOutput {
  /** Error details. */
  error: ErrorDetailsOutput;
}

/** Error details as returned by Translator Service. */
export interface ErrorDetailsOutput {
  /** Number identifier of the error. */
  code: number;
  /** Human readable error description. */
  message: string;
}

/** Element containing the translated text */
export interface TranslatedTextItemOutput {
  /** The detectedLanguage property is only present in the result object when language auto-detection is requested. */
  detectedLanguage?: DetectedLanguageOutput;
  /**
   * An array of translation results. The size of the array matches the number of target
   * languages specified through the to query parameter.
   */
  translations: Array<TranslationTextOutput>;
  /**
   * Input text in the default script of the source language. sourceText property is present only when
   * the input is expressed in a script that's not the usual script for the language. For example,
   * if the input were Arabic written in Latin script, then sourceText.text would be the same Arabic text
   * converted into Arab script.
   */
  sourceText?: SourceTextOutput;
}

/** An object describing the detected language. */
export interface DetectedLanguageOutput {
  /** A string representing the code of the detected language. */
  language: string;
  /**
   * A float value indicating the confidence in the result.
   * The score is between zero and one and a low score indicates a low confidence.
   */
  score: number;
}

/** Translation result */
export interface TranslationTextOutput {
  /** A string representing the language code of the target language. */
  to: string;
  /** A string giving the translated text. */
  text: string;
  /** An object giving the translated text in the script specified by the toScript parameter. */
  transliteration?: TransliteratedTextOutput;
}

/** Transliterated text element. */
export interface TransliteratedTextOutput {
  /** A string which is the result of converting the input string to the output script. */
  text: string;
  /** A string specifying the script used in the output. */
  script: string;
}

/** Input text in the default script of the source language. */
export interface SourceTextOutput {
  /** Input text in the default script of the source language. */
  text: string;
}

/** Language Directionality */
export type LanguageDirectionalityOutput = "ltr" | "rtl";
