// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ErrorModel } from "@azure-rest/core-client";

/** The response for the Trial Matcher request. */
export interface TrialMatcherResultOutput {
  /** The unique ID of the operation. */
  readonly id: string;
  /** The status of the operation */
  readonly status: JobStatusOutput;
  /** The date and time when the processing job was created. */
  readonly createdDateTime?: string;
  /** The date and time when the processing job is set to expire. */
  readonly expirationDateTime?: string;
  /** The date and time when the processing job was last updated. */
  readonly lastUpdateDateTime?: string;
  /** Error object that describes the error when status is "Failed". */
  error?: ErrorModel;
  /** The result of the operation. */
  result?: TrialMatcherInferenceResultOutput;
}

/** The inference results for the Trial Matcher request. */
export interface TrialMatcherInferenceResultOutput {
  /** Results for the patients given in the request. */
  patientResults: Array<TrialMatcherPatientResultOutput>;
  /** The version of the model used for inference, expressed as the model date. */
  modelVersion: string;
  /** The date when the clinical trials knowledge graph was last updated. */
  knowledgeGraphLastUpdateDate?: string;
}

/** The results of the model's work for a single patient. */
export interface TrialMatcherPatientResultOutput {
  /** The identifier given for the patient in the request. */
  patientId: string;
  /** The inference results for the patient. */
  inferences: Array<TrialMatcherInferenceOutput>;
  /** Clinical information which is needed to provide better trial matching results for the patient. */
  neededClinicalInfo?: Array<ExtendedClinicalCodedElementOutput>;
}

/** An inference made by the Trial Matcher model regarding a patient. */
export interface TrialMatcherInferenceOutput {
  /** The type of the Trial Matcher inference. */
  type: TrialMatcherInferenceTypeOutput;
  /** The value of the inference, as relevant for the given inference type. */
  value: string;
  /** The description corresponding to the inference value. */
  description?: string;
  /** Confidence score for this inference. */
  confidenceScore?: number;
  /** The evidence corresponding to the inference value. */
  evidence?: Array<TrialMatcherInferenceEvidenceOutput>;
  /** The identifier of the clinical trial. */
  clinicalTrialId?: string;
  /** Possible sources of a clinical trial. */
  source?: ClinicalTrialSourceOutput;
  /** Trial data which is of interest to the potential participant. */
  metadata?: ClinicalTrialMetadataOutput;
}

/** A piece of evidence corresponding to a Trial Matcher inference. */
export interface TrialMatcherInferenceEvidenceOutput {
  /** A piece of evidence from the eligibility criteria text of a clinical trial. */
  eligibilityCriteriaEvidence?: string;
  /** A piece of evidence from a clinical note (text document). */
  patientDataEvidence?: ClinicalNoteEvidenceOutput;
  /**
   * A piece of clinical information, expressed as a code in a clinical coding
   * system.
   */
  patientInfoEvidence?: ClinicalCodedElementOutput;
  /** A value indicating how important this piece of evidence is for the inference. */
  importance?: number;
}

/** A piece of evidence from a clinical note (text document). */
export interface ClinicalNoteEvidenceOutput {
  /** The identifier of the document containing the evidence. */
  id: string;
  /** The actual text span which is evidence for the inference. */
  text?: string;
  /** The start index of the evidence text span in the document (0 based). */
  offset: number;
  /** The length of the evidence text span. */
  length: number;
}

/** A piece of clinical information, expressed as a code in a clinical coding system. */
export interface ClinicalCodedElementOutput {
  /** The clinical coding system, e.g. ICD-10, SNOMED-CT, UMLS. */
  system: string;
  /** The code within the given clinical coding system. */
  code: string;
  /** The name of this coded concept in the coding system. */
  name?: string;
  /** A value associated with the code within the given clinical coding system. */
  value?: string;
}

/** Trial data which is of interest to the potential participant. */
export interface ClinicalTrialMetadataOutput {
  /**
   * Phases which are relevant for the clinical trial.
   * Each clinical trial can be in a certain phase or in multiple phases.
   */
  phases?: ClinicalTrialPhaseOutput[];
  /** Possible study types of a clinical trial. */
  studyType?: ClinicalTrialStudyTypeOutput;
  /** Possible recruitment status of a clinical trial. */
  recruitmentStatus?: ClinicalTrialRecruitmentStatusOutput;
  /** Medical conditions and their synonyms which are relevant for the clinical trial, given as strings. */
  conditions: string[];
  /** Sponsors/collaborators involved with the trial. */
  sponsors?: string[];
  /** Contact details of the trial administrators, for patients that want to participate in the trial. */
  contacts?: Array<ContactDetailsOutput>;
  /** Research facilities where the clinical trial is conducted. */
  facilities?: Array<ClinicalTrialResearchFacilityOutput>;
}

/** A person's contact details. */
export interface ContactDetailsOutput {
  /** The person's name. */
  name?: string;
  /** The person's email. */
  email?: string;
  /** A person's phone number. */
  phone?: string;
}

/** Details of a research facility where a clinical trial is conducted. */
export interface ClinicalTrialResearchFacilityOutput {
  /** The facility's name. */
  name: string;
  /** City name. */
  city?: string;
  /** State name. */
  state?: string;
  /** Country/region name. */
  countryOrRegion: string;
}

/** A piece of clinical information, expressed as a code in a clinical coding system, extended by semantic information. */
export interface ExtendedClinicalCodedElementOutput {
  /** The clinical coding system, e.g. ICD-10, SNOMED-CT, UMLS. */
  system: string;
  /** The code within the given clinical coding system. */
  code: string;
  /** The name of this coded concept in the coding system. */
  name?: string;
  /** A value associated with the code within the given clinical coding system. */
  value?: string;
  /** The [UMLS semantic type](https://www.nlm.nih.gov/research/umls/META3_current_semantic_types.html) associated with the coded concept. */
  semanticType?: string;
  /** The bio-medical category related to the coded concept, e.g. Diagnosis, Symptom, Medication, Examination. */
  category?: string;
}

/** The body of the Trial Matcher request. */
export interface TrialMatcherDataOutput {
  /** The list of patients, including their clinical information and data. */
  patients: Array<PatientRecordOutput>;
  /** Configuration affecting the Trial Matcher model's inference. */
  configuration?: TrialMatcherModelConfigurationOutput;
}

/** A patient record, including their clinical information and data. */
export interface PatientRecordOutput {
  /** A given identifier for the patient. Has to be unique across all patients in a single request. */
  id: string;
  /** Patient structured information, including demographics and known structured clinical information. */
  info?: PatientInfoOutput;
  /** Patient encounters/visits. */
  encounters?: Array<EncounterOutput>;
  /** Patient unstructured clinical data, given as documents. */
  patientDocuments?: Array<PatientDocumentOutput>;
}

/** Patient structured information, including demographics and known structured clinical information. */
export interface PatientInfoOutput {
  /** The patient's sex. */
  sex?: PatientInfoSexOutput;
  /** The patient's date of birth. */
  birthDate?: string;
  /** Known clinical information for the patient, structured. */
  clinicalInfo?: Array<ResourceOutput>;
}

/**
 * Resource is the ancestor of DomainResource from which most resources are derived. Bundle, Parameters, and Binary extend Resource directly.
 * Based on [FHIR Resource](https://www.hl7.org/fhir/r4/resource.html
 */
export interface ResourceOutput extends Record<string, any> {
  /** The type of resource */
  resourceType: string;
  /** Resource Id */
  id?: string;
  /** Metadata about the resource */
  meta?: MetaOutput;
  /** A set of rules under which this content was created */
  implicitRules?: string;
  /** Language of the resource content */
  language?: string;
}

/**
 * Metadata about a resource
 * Based on [FHIR Meta](https://www.hl7.org/fhir/R4/resource.html#Meta)
 */
export interface MetaOutput {
  /** The version specific identifier, as it appears in the version portion of the URL. This value changes when the resource is created, updated, or deleted. */
  versionId?: string;
  /** When the resource last changed - e.g. when the version changed. */
  lastUpdated?: string;
  /** A uri that identifies the source system of the resource. This provides a minimal amount of Provenance information that can be used to track or differentiate the source of information in the resource. The source may identify another FHIR server, document, message, database, etc. */
  source?: string;
  /** A list of profiles (references to [StructureDefinition](https://www.hl7.org/fhir/structuredefinition.html) resources) that this resource claims to conform to. The URL is a reference to [StructureDefinition.url](https://www.hl7.org/fhir/structuredefinition-definitions.html#StructureDefinition.url). */
  profile?: string[];
  /** Security labels applied to this resource. These tags connect specific resources to the overall security policy and infrastructure. */
  security?: Array<CodingOutput>;
  /** Tags applied to this resource. Tags are intended to be used to identify and relate resources to process and workflow, and applications are not required to consider the tags when interpreting the meaning of a resource. */
  tag?: Array<CodingOutput>;
}

/**
 * A Coding is a representation of a defined concept using a symbol from a defined "code system".
 * Based on [FHIR Coding](https://www.hl7.org/fhir/R4/datatypes.html#Coding)
 */
export interface CodingOutput extends ElementOutput {
  /** Identity of the terminology system */
  system?: string;
  /** Version of the system - if relevant */
  version?: string;
  /** Symbol in syntax defined by the system */
  code?: string;
  /** Representation defined by the system */
  display?: string;
}

/**
 * The base definition for all elements contained inside a resource.
 * Based on [FHIR Element](https://www.hl7.org/fhir/R4/element.html)
 */
export interface ElementOutput {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Additional Content defined by implementations */
  extension?: Array<ExtensionOutput>;
}

/**
 * Base for all elements
 * Based on [FHIR Element](https://www.hl7.org/fhir/datatypes.html#Element)
 */
export interface ExtensionOutput extends ElementOutput {
  /** Source of the definition for the extension code - a logical name or a URL. */
  url: string;
  /** Value as Quantity */
  valueQuantity?: QuantityOutput;
  /** Value as CodeableConcept */
  valueCodeableConcept?: CodeableConceptOutput;
  /** Value as string */
  valueString?: string;
  /** Value as boolean */
  valueBoolean?: boolean;
  /** Value as integer */
  valueInteger?: number;
  /** Value as Range. */
  valueRange?: RangeOutput;
  /** Value as Ratio. */
  valueRatio?: RatioOutput;
  /** Value as SampledData. */
  valueSampledData?: SampledDataOutput;
  /** Value as time (hh:mm:ss) */
  valueTime?: string;
  /** Value as dateTime. */
  valueDateTime?: string;
  /** Value as Period. */
  valuePeriod?: PeriodOutput;
  /** Value as reference. */
  valueReference?: ReferenceOutput;
}

/**
 * A measured or measurable amount
 * Based on [FHIR Quantity](https://www.hl7.org/fhir/R4/datatypes.html#Quantity)
 */
export interface QuantityOutput extends ElementOutput {
  /** Numerical value (with implicit precision) */
  value?: number;
  /** < | <= | >= | > - how to understand the value */
  comparator?: string;
  /** Unit representation */
  unit?: string;
  /** System that defines coded unit form */
  system?: string;
  /** Coded form of the unit */
  code?: string;
}

/**
 * Concept - reference to a terminology or just text
 * Based on [FHIR CodeableConcept](https://www.hl7.org/fhir/R4/datatypes.html#CodeableConcept)
 */
export interface CodeableConceptOutput extends ElementOutput {
  /** Code defined by a terminology system */
  coding?: Array<CodingOutput>;
  /** Plain text representation of the concept */
  text?: string;
}

/**
 * A set of ordered Quantities defined by a low and high limit
 * Based on [FHIR Range](https://www.hl7.org/fhir/R4/datatypes.html#Range)
 */
export interface RangeOutput extends ElementOutput {
  /** Low limit */
  low?: QuantityOutput;
  /** High limit */
  high?: QuantityOutput;
}

/**
 * A ratio of two Quantity values - a numerator and a denominator
 * Based on [FHIR Ratio](https://www.hl7.org/fhir/R4/datatypes.html#Ratio)
 */
export interface RatioOutput extends ElementOutput {
  /** Numerator value */
  numerator?: QuantityOutput;
  /** Denominator value */
  denominator?: QuantityOutput;
}

/**
 * A series of measurements taken by a device
 * Based on [FHIR SampledData](https://www.hl7.org/fhir/R4/datatypes.html#SampledData)
 */
export interface SampledDataOutput extends ElementOutput {
  /** Zero value and units */
  origin: QuantityOutput;
  /** Number of milliseconds between samples */
  period: number;
  /** Multiply data by this before adding to origin */
  factor?: number;
  /** Lower limit of detection */
  lowerLimit?: number;
  /** Upper limit of detection */
  upperLimit?: number;
  /** Number of sample points at each time point */
  dimensions: number;
  /** Decimal values with spaces, or "E" | "U" | "L" */
  data?: string;
}

/**
 * A time period defined by a start and end date and optionally time
 * Based on [FHIR Period](https://www.hl7.org/fhir/R4/datatypes.html#Period)
 */
export interface PeriodOutput extends ElementOutput {
  /** Starting time with inclusive boundary */
  start?: string;
  /** End time with inclusive boundary, if not ongoing */
  end?: string;
}

/**
 * A reference from one resource to another
 * Based on [FHIR Reference](https://www.hl7.org/fhir/R4/references.html)
 */
export interface ReferenceOutput extends ElementOutput {
  /** Literal reference, Relative, internal or absolute URL */
  reference?: string;
  /** Type the reference refers to (e.g. "Patient") */
  type?: string;
  /** Logical reference, when literal reference is not known */
  identifier?: IdentifierOutput;
  /** Text alternative for the resource */
  display?: string;
}

/**
 * An identifier intended for computation
 * Based on [FHIR Identifier](https://www.hl7.org/fhir/R4/identifier.html)
 */
export interface IdentifierOutput extends ElementOutput {
  /** usual | official | temp | secondary | old (If known) */
  use?: string;
  /** Description of identifier */
  type?: CodeableConceptOutput;
  /** The namespace for the identifier value */
  system?: string;
  /** The value that is unique */
  value?: string;
  /** Time period when id is/was valid for use */
  period?: PeriodOutput;
  /** Organization that issued id (may be just text) */
  assigner?: ReferenceOutput;
}

/**
 * Any resource that is a [DomainResource](https://www.hl7.org/fhir/domainresource.html) may include a human-readable narrative that contains a summary of the resource and may be used to represent the content of the resource to a human.
 * Based on [FHIR Narrative](https://www.hl7.org/fhir/R4/narrative.html#Narrative)
 */
export interface NarrativeOutput extends ElementOutput {
  /** generated, extensions, additional, empty */
  status: string;
  /** xhtml */
  div: string;
}

/** Contact details (See: https://www.hl7.org/fhir/R4/metadatatypes.html#ContactDetail) */
export interface ContactDetailOutput extends ElementOutput {
  /** Name of an individual to contact */
  name?: string;
  /** Contact details for individual or organization */
  telecom?: Array<ContactPointOutput>;
}

/**
 * Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.
 * See https://www.hl7.org/fhir/R4/datatypes.html#ContactPoint
 */
export interface ContactPointOutput {
  /** phone | fax | email | pager | url | sms | other */
  system?: ContactPointSystemOutput;
  /** The actual contact point details */
  value?: string;
  /** home | work | temp | old | mobile - purpose of this contact point */
  use?: ContactPointUseOutput;
  /** Specify preferred order of use (1 = highest) */
  rank?: number;
  /** Time period when the contact point was/is in use */
  period?: PeriodOutput;
}

/**
 * A text note which also  contains information about who made the statement and when
 * Based on [FHIR Annotation](https://www.hl7.org/fhir/R4/datatypes.html#Annotation)
 */
export interface AnnotationOutput extends ElementOutput {
  /** Individual responsible for the annotation */
  authorString?: string;
  /** When the annotation was made */
  time?: string;
  /** The annotation - text content (as markdown) */
  text: string;
}

/**
 * Component results
 * Based on [FHIR Observation.component](https://www.hl7.org/fhir/R4/observation.html)
 */
export interface ObservationComponentOutput extends ElementOutput {
  /** Type of component observation (code / type) */
  code: CodeableConceptOutput;
  /** Value as Quantity */
  valueQuantity?: QuantityOutput;
  /** Value as CodeableConcept */
  valueCodeableConcept?: CodeableConceptOutput;
  /** Value as string */
  valueString?: string;
  /** Value as boolean */
  valueBoolean?: boolean;
  /** Value as integer */
  valueInteger?: number;
  /** Value as Range. */
  valueRange?: RangeOutput;
  /** Value as Ratio. */
  valueRatio?: RatioOutput;
  /** Value as SampledData. */
  valueSampledData?: SampledDataOutput;
  /** Value as time (hh:mm:ss) */
  valueTime?: string;
  /** Value as dateTime. */
  valueDateTime?: string;
  /** Value as Period. */
  valuePeriod?: PeriodOutput;
  /** Value as reference. */
  valueReference?: ReferenceOutput;
  /** Why the component result is missing */
  dataAbsentReason?: CodeableConceptOutput;
  /** High, low, normal, etc. */
  interpretation?: Array<CodeableConceptOutput>;
  /** Provides guide for interpretation of component result */
  referenceRange?: Array<ObservationReferenceRangeOutput>;
}

/**
 * Provides guide for interpretation of component result
 * Based on [FHIR Observation.referenceRange](https://www.hl7.org/fhir/R4/observation.html)
 */
export interface ObservationReferenceRangeOutput {
  /** Low Range, if relevant */
  low?: QuantityOutput;
  /** High Range, if relevant */
  high?: QuantityOutput;
  /** Reference range qualifier */
  type?: CodeableConceptOutput;
  /** Reference range population */
  appliesTo?: Array<CodeableConceptOutput>;
  /** Applicable age range, if relevant */
  age?: RangeOutput;
  /** Text based reference range in an observation */
  text?: string;
}

/**
 * A resource with narrative, extensions, and contained resources
 * Based on [FHIR DomainResource](https://www.hl7.org/fhir/domainresource.html)
 */
export interface DomainResourceOutputParent extends ResourceOutput {
  /** Text summary of the resource, for human interpretation */
  text?: NarrativeOutput;
  /** Contained, inline Resources */
  contained?: Array<ResourceOutput>;
  /** Additional Content defined by implementations */
  extension?: Array<ExtensionOutput>;
  /** Extensions that cannot be ignored */
  modifierExtension?: Array<ExtensionOutput>;
  resourceType: string;
}

/**
 * Detailed information about Research Study
 * Based on [FHIR ResearchStudy](https://www.hl7.org/fhir/R4/researchstudy.html)
 */
export interface ResearchStudyOutput extends DomainResourceOutputParent {
  /** resourceType */
  resourceType: "ResearchStudy";
  /** Business Identifier for study */
  identifier?: Array<IdentifierOutput>;
  /** Name for this study */
  title?: string;
  /** Steps followed in executing study */
  protocol?: Array<ReferenceOutput>;
  /** Part of larger study */
  partOf?: Array<ReferenceOutput>;
  /** active | administratively-completed | approved | closed-to-accrual | closed-to-accrual-and-intervention | completed | disapproved | in-review | temporarily-closed-to-accrual | temporarily-closed-to-accrual-and-intervention | withdrawn */
  status: ResearchStudyStatusCodeTypeOutput;
  /** treatment | prevention | diagnostic | supportive-care | screening | health-services-research | basic-science | device-feasibility */
  primaryPurposeType?: CodeableConceptOutput;
  /** n-a | early-phase-1 | phase-1 | phase-1-phase-2 | phase-2 | phase-2-phase-3 | phase-3 | phase-4 */
  phase?: CodeableConceptOutput;
  /** Classifications for the study */
  category?: Array<CodeableConceptOutput>;
  /** Drugs, devices, etc. under study */
  focus?: Array<CodeableConceptOutput>;
  /** Condition being studied */
  condition?: Array<CodeableConceptOutput>;
  /** Contact details for the study */
  contact?: Array<ContactDetailOutput>;
  /** Used to search for the study */
  keyword?: Array<CodeableConceptOutput>;
  /** Geographic region(s) for study */
  location?: Array<CodeableConceptOutput>;
  /** What this is study doing */
  description?: string;
  /** Inclusion & exclusion criteria */
  enrollment?: Array<ReferenceOutput>;
  /** When the study began and ended */
  period?: PeriodOutput;
  /** Organization that initiates and is legally responsible for the study */
  sponsor?: ReferenceOutput;
  /** Researcher who oversees multiple aspects of the study */
  principalInvestigator?: ReferenceOutput;
  /** Facility where study activities are conducted */
  site?: Array<ReferenceOutput>;
  /** accrual-goal-met | closed-due-to-toxicity | closed-due-to-lack-of-study-progress | temporarily-closed-per-study-design */
  reasonStopped?: CodeableConceptOutput;
  /** Comments made about the study */
  note?: Array<AnnotationOutput>;
  /** Defined path through the study for a subject */
  arm?: { name: string; type?: CodeableConceptOutput; description?: string }[];
  /** A goal for the study */
  objective?: { name: string; type?: CodeableConceptOutput }[];
}

/**
 * Detailed information about conditions, problems or diagnoses
 * Based on [FHIR Condition](https://www.hl7.org/fhir/R4/condition.html)
 */
export interface ConditionOutput extends DomainResourceOutputParent {
  /** resourceType */
  resourceType: "Condition";
  /** External Ids for this condition */
  identifier?: Array<IdentifierOutput>;
  /** active | recurrence | relapse | inactive | remission | resolved */
  clinicalStatus?: CodeableConceptOutput;
  /** unconfirmed | provisional | differential | confirmed | refuted | entered-in-error */
  verificationStatus?: CodeableConceptOutput;
  /** problem-list-item | encounter-diagnosis */
  category?: Array<CodeableConceptOutput>;
  /** Subjective severity of condition */
  severity?: CodeableConceptOutput;
  /** Identification of the condition, problem or diagnosis */
  code?: CodeableConceptOutput;
  /** Anatomical location, if relevant */
  bodySite?: Array<CodeableConceptOutput>;
  /** Encounter created as part of */
  encounter?: ReferenceOutput;
  /** Estimated or actual date,  date-time, or age */
  onsetDateTime?: string;
  /** Estimated or actual date,  date-time, or age */
  onsetAge?: QuantityOutput;
  /** Estimated or actual date,  date-time, or age */
  onsetPeriod?: PeriodOutput;
  /** Estimated or actual date,  date-time, or age */
  onsetRange?: RangeOutput;
  /** Estimated or actual date,  date-time, or age */
  onsetString?: string;
  /** When in resolution/remission */
  abatementDateTime?: string;
  /** When in resolution/remission */
  abatementAge?: QuantityOutput;
  /** When in resolution/remission */
  abatementPeriod?: PeriodOutput;
  /** When in resolution/remission */
  abatementRange?: RangeOutput;
  /** When in resolution/remission */
  abatementString?: string;
  /** Date record was first recorded */
  recordedDate?: string;
  /** stge/grade, usually assessed formally */
  stage?: Array<ConditionStageOutput>;
  /** Additional information about the Condition */
  note?: Array<AnnotationOutput>;
}

/**
 * Stage/grade, usually assessed formally
 * Based on [FHIR Condition.Stage](https://www.hl7.org/fhir/R4/condition.html)
 */
export interface ConditionStageOutput {
  /** Simple summary (disease specific) */
  summary?: CodeableConceptOutput;
  /** Kind of staging */
  type?: CodeableConceptOutput;
}

/**
 * Detailed information about observations
 * Based on [FHIR Observation](https://www.hl7.org/fhir/R4/observation.html)
 */
export interface ObservationOutput extends DomainResourceOutputParent {
  /** resourceType */
  resourceType: "Observation";
  /** Business Identifier for observation */
  identifier?: Array<IdentifierOutput>;
  /** registered | preliminary | final | amended + */
  status: ObservationStatusCodeTypeOutput;
  /** Classification of  type of observation */
  category?: Array<CodeableConceptOutput>;
  /** Type of observation (code / type) */
  code: CodeableConceptOutput;
  /** Who and/or what the observation is about */
  subject?: ReferenceOutput;
  /** Healthcare event during which this observation is made */
  encounter?: ReferenceOutput;
  /** Clinically relevant time/time-period for observation */
  effectiveDateTime?: string;
  /** Clinically relevant time/time-period for observation */
  effectivePeriod?: PeriodOutput;
  /** Clinically relevant time/time-period for observation */
  effectiveInstant?: string;
  /** Date/Time this version was made available */
  issued?: string;
  /** Actual result */
  valueQuantity?: QuantityOutput;
  /** Actual result */
  valueCodeableConcept?: CodeableConceptOutput;
  /** Actual result */
  valueString?: string;
  /** Actual result */
  valueBoolean?: boolean;
  /** Actual result */
  valueInteger?: number;
  /** Actual result */
  valueRange?: RangeOutput;
  /** Actual result */
  valueRatio?: RatioOutput;
  /** Actual result */
  valueSampledData?: SampledDataOutput;
  /** Actual result */
  valueTime?: string;
  /** Actual result */
  valueDateTime?: string;
  /** Actual result */
  valuePeriod?: PeriodOutput;
  /** Why the result is missing */
  dataAbsentReason?: CodeableConceptOutput;
  /** High, low, normal, etc. */
  interpretation?: Array<CodeableConceptOutput>;
  /** Comments about the observation */
  note?: Array<AnnotationOutput>;
  /** Observed body part */
  bodySite?: CodeableConceptOutput;
  /** How it was done */
  method?: CodeableConceptOutput;
  /** Provides guide for interpretation */
  referenceRange?: Array<ObservationReferenceRangeOutput>;
  /** Related resource that belongs to the Observation group */
  hasMember?: Array<ReferenceOutput>;
  /** Related measurements the observation is made from */
  derivedFrom?: Array<ReferenceOutput>;
  /** Component results */
  component?: Array<ObservationComponentOutput>;
}

/** visit/encounter information */
export interface EncounterOutput {
  /** The id of the visit. */
  id: string;
  /**
   * Time period of the visit.
   * In case of admission, use timePeriod.start to indicate the admission time and timePeriod.end to indicate the discharge time.
   */
  period?: TimePeriodOutput;
  /** The class of the encounter. */
  class?: EncounterClassOutput;
}

/** A duration of time during which an event is happening */
export interface TimePeriodOutput {
  /** Starting time with inclusive boundary */
  start?: string;
  /** End time with inclusive boundary, if not ongoing */
  end?: string;
}

/** A clinical document related to a patient. Document here is in the wide sense - not just a text document (note). */
export interface PatientDocumentOutput {
  /** The type of the patient document, such as 'note' (text document) or 'fhirBundle' (FHIR JSON document). */
  type: DocumentTypeOutput;
  /** The type of the clinical document. */
  clinicalType?: ClinicalDocumentTypeOutput;
  /** A given identifier for the document. Has to be unique across all documents for a single patient. */
  id: string;
  /** A 2 letter ISO 639-1 representation of the language of the document. */
  language?: string;
  /** The date and time when the document was created. */
  createdDateTime?: string;
  /** Document author(s) */
  authors?: Array<DocumentAuthorOutput>;
  /** specialty type the document */
  specialtyType?: SpecialtyTypeOutput;
  /** Administrative metadata for the document. */
  administrativeMetadata?: DocumentAdministrativeMetadataOutput;
  /** The content of the patient document. */
  content: DocumentContentOutput;
}

/** Document author */
export interface DocumentAuthorOutput {
  /** author id */
  id?: string;
  /** Text representation of the full name */
  fullName?: string;
}

/** Document administrative metadata */
export interface DocumentAdministrativeMetadataOutput {
  /** List of procedure information associated with the document. */
  orderedProcedures?: Array<OrderedProcedureOutput>;
  /** Reference to the encounter associated with the document. */
  encounterId?: string;
}

/** Procedure information */
export interface OrderedProcedureOutput {
  /** Additional Content defined by implementations */
  extension?: Array<ExtensionOutput>;
  /** Procedure code */
  code?: CodeableConceptOutput;
  /** Procedure description */
  description?: string;
}

/** The content of the patient document. */
export interface DocumentContentOutput {
  /**
   * The type of the content's source.
   * In case the source type is 'inline', the content is given as a string (for instance, text).
   * In case the source type is 'reference', the content is given as a URI.
   */
  sourceType: DocumentContentSourceTypeOutput;
  /** The content of the document, given either inline (as a string) or as a reference (URI). */
  value: string;
}

/** Configuration affecting the Trial Matcher model's inference. */
export interface TrialMatcherModelConfigurationOutput {
  /** An indication whether the model should produce verbose output. */
  verbose?: boolean;
  /** An indication whether the model's output should include evidence for the inferences. */
  includeEvidence?: boolean;
  /**
   * The clinical trials that the patient(s) should be matched to. <br />The trial
   * selection can be given as a list of custom clinical trials and/or a list of
   * filters to known clinical trial registries. In case both are given, the
   * resulting trial set is a union of the two sets.
   */
  clinicalTrials: ClinicalTrialsOutput;
}

/**
 * The clinical trials that the patient(s) should be matched to.
 * The trial selection can be given as a list of custom clinical trials and/or a list of filters to known clinical trial registries.
 * In case both are given, the resulting trial set is a union of the two sets.
 */
export interface ClinicalTrialsOutput {
  /** A list of clinical trials. */
  customTrials?: Array<ResearchStudyOutput>;
  /**
   * A list of filters, each one creating a selection of trials from a given
   * clinical trial registry.
   */
  registryFilters?: Array<ClinicalTrialRegistryFilterOutput>;
}

/** A filter defining a subset of clinical trials from a given clinical trial registry (e.g. clinicaltrials.gov). */
export interface ClinicalTrialRegistryFilterOutput {
  /**
   * Trials with any of the given medical conditions will be included in the selection (provided that other limitations are satisfied).
   * Leaving this list empty will not limit the medical conditions.
   */
  conditions?: string[];
  /**
   * Trials with any of the given study types will be included in the selection (provided that other limitations are satisfied).
   * Leaving this list empty will not limit the study types.
   */
  studyTypes?: ClinicalTrialStudyTypeOutput[];
  /**
   * Trials with any of the given recruitment statuses will be included in the selection (provided that other limitations are satisfied).
   * Leaving this list empty will not limit the recruitment statuses.
   */
  recruitmentStatuses?: ClinicalTrialRecruitmentStatusOutput[];
  /**
   * Trials with any of the given sponsors will be included in the selection (provided that other limitations are satisfied).
   * Leaving this list empty will not limit the sponsors.
   */
  sponsors?: string[];
  /**
   * Trials with any of the given phases will be included in the selection (provided that other limitations are satisfied).
   * Leaving this list empty will not limit the phases.
   */
  phases?: ClinicalTrialPhaseOutput[];
  /**
   * Trials with any of the given purposes will be included in the selection (provided that other limitations are satisfied).
   * Leaving this list empty will not limit the purposes.
   */
  purposes?: ClinicalTrialPurposeOutput[];
  /**
   * Trials with any of the given identifiers will be included in the selection (provided that other limitations are satisfied).
   * Leaving this list empty will not limit the trial identifiers.
   */
  ids?: string[];
  /**
   * Trials with any of the given sources will be included in the selection (provided that other limitations are satisfied).
   * Leaving this list empty will not limit the sources.
   */
  sources?: ClinicalTrialSourceOutput[];
  /**
   * Trials with any of the given facility names will be included in the selection (provided that other limitations are satisfied).
   * Leaving this list empty will not limit the trial facility names.
   */
  facilityNames?: string[];
  /**
   * Trials with any of the given facility locations will be included in the selection (provided that other limitations are satisfied).
   * Leaving this list empty will not limit the trial facility locations.
   */
  facilityLocations?: Array<GeographicLocationOutput>;
  /**
   * Trials with any of the given facility area boundaries will be included in the selection (provided that other limitations are satisfied).
   * Leaving this list empty will not limit the trial facility area boundaries.
   */
  facilityAreas?: Array<GeographicAreaOutput>;
}

/**
 * A location given as a combination of city, state and country/region. It could specify a city, a state or a country/region.
 * In case a city is specified, either state +country/region or country/region (for countries/regions where there are no states) should be added.
 * In case a state is specified (without a city), country/region should be added.
 */
export interface GeographicLocationOutput {
  /** City name. */
  city?: string;
  /** State name. */
  state?: string;
  /** Country/region name. */
  countryOrRegion: string;
}

/** A geographic area, expressed as a `Circle` geometry represented using a `GeoJSON Feature` (see [GeoJSON spec](https://tools.ietf.org/html/rfc7946)). */
export interface GeographicAreaOutput {
  /** `GeoJSON` type. */
  type: GeoJsonTypeOutput;
  /** `GeoJSON` geometry, representing the area circle's center. */
  geometry: AreaGeometryOutput;
  /** `GeoJSON` object properties. */
  properties: AreaPropertiesOutput;
}

/** `GeoJSON` geometry, representing the area circle's center. */
export interface AreaGeometryOutput {
  /** `GeoJSON` geometry type. */
  type: GeoJsonGeometryTypeOutput;
  /**
   * Coordinates of the area circle's center, represented according to the `GeoJSON` standard.
   * This is an array of 2 decimal numbers, longitude and latitude (precisely in this order).
   */
  coordinates: number[];
}

/** `GeoJSON` object properties. */
export interface AreaPropertiesOutput {
  /** `GeoJSON` object sub-type. */
  subType: GeoJsonPropertiesSubTypeOutput;
  /** The radius of the area's circle, in meters. */
  radius: number;
}

/** Provides status details for long running operations. */
export interface HealthInsightsOperationStatusOutput {
  /** The unique ID of the operation. */
  readonly id: string;
  /** The status of the operation */
  readonly status: JobStatusOutput;
  /** The date and time when the processing job was created. */
  readonly createdDateTime?: string;
  /** The date and time when the processing job is set to expire. */
  readonly expirationDateTime?: string;
  /** The date and time when the processing job was last updated. */
  readonly lastUpdateDateTime?: string;
  /** Error object that describes the error when status is "Failed". */
  error?: ErrorModel;
  /** The result of the operation. */
  result?: TrialMatcherInferenceResultOutput;
}

/**
 * A resource with narrative, extensions, and contained resources
 * Based on [FHIR DomainResource](https://www.hl7.org/fhir/domainresource.html)
 */
export type DomainResourceOutput =
  | DomainResourceOutputParent
  | ResearchStudyOutput
  | ConditionOutput
  | ObservationOutput;
/** Alias for JobStatusOutput */
export type JobStatusOutput =
  | string
  | "notStarted"
  | "running"
  | "succeeded"
  | "failed"
  | "canceled";
/** Alias for TrialMatcherInferenceTypeOutput */
export type TrialMatcherInferenceTypeOutput = string | "trialEligibility";
/** Alias for ClinicalTrialSourceOutput */
export type ClinicalTrialSourceOutput =
  | string
  | "custom"
  | "clinicaltrials.gov";
/** Alias for ClinicalTrialPhaseOutput */
export type ClinicalTrialPhaseOutput =
  | string
  | "notApplicable"
  | "earlyPhase1"
  | "phase1"
  | "phase2"
  | "phase3"
  | "phase4";
/** Alias for ClinicalTrialStudyTypeOutput */
export type ClinicalTrialStudyTypeOutput =
  | string
  | "interventional"
  | "observational"
  | "expandedAccess"
  | "patientRegistries";
/** Alias for ClinicalTrialRecruitmentStatusOutput */
export type ClinicalTrialRecruitmentStatusOutput =
  | string
  | "unknownStatus"
  | "notYetRecruiting"
  | "recruiting"
  | "enrollingByInvitation";
/** Alias for PatientInfoSexOutput */
export type PatientInfoSexOutput = string | "female" | "male" | "unspecified";
/** Alias for ContactPointSystemOutput */
export type ContactPointSystemOutput =
  | string
  | "phone"
  | "fax"
  | "email"
  | "pager"
  | "url"
  | "sms"
  | "other";
/** Alias for ContactPointUseOutput */
export type ContactPointUseOutput =
  | string
  | "home"
  | "work"
  | "temp"
  | "old"
  | "mobile";
/** Alias for ResearchStudyStatusCodeTypeOutput */
export type ResearchStudyStatusCodeTypeOutput =
  | string
  | "active"
  | "administratively-completed"
  | "approved"
  | "closed-to-accrual"
  | "closed-to-accrual-and-intervention"
  | "completed"
  | "disapproved"
  | "in-review"
  | "temporarily-closed-to-accrual"
  | "temporarily-closed-to-accrual-and-intervention"
  | "withdrawn";
/** Alias for ObservationStatusCodeTypeOutput */
export type ObservationStatusCodeTypeOutput =
  | string
  | "registered"
  | "preliminary"
  | "final"
  | "amended"
  | "corrected"
  | "cancelled"
  | "entered-in-error"
  | "unknown";
/** Alias for EncounterClassOutput */
export type EncounterClassOutput =
  | string
  | "inpatient"
  | "ambulatory"
  | "observation"
  | "emergency"
  | "virtual"
  | "healthHome";
/** Alias for DocumentTypeOutput */
export type DocumentTypeOutput =
  | string
  | "note"
  | "fhirBundle"
  | "dicom"
  | "genomicSequencing";
/** Alias for ClinicalDocumentTypeOutput */
export type ClinicalDocumentTypeOutput =
  | string
  | "consultation"
  | "dischargeSummary"
  | "historyAndPhysical"
  | "radiologyReport"
  | "procedure"
  | "progress"
  | "laboratory"
  | "pathologyReport";
/** Alias for SpecialtyTypeOutput */
export type SpecialtyTypeOutput = string | "pathology" | "radiology";
/** Alias for DocumentContentSourceTypeOutput */
export type DocumentContentSourceTypeOutput = string | "inline" | "reference";
/** Alias for ClinicalTrialPurposeOutput */
export type ClinicalTrialPurposeOutput =
  | string
  | "notApplicable"
  | "screening"
  | "diagnostic"
  | "prevention"
  | "healthServicesResearch"
  | "treatment"
  | "deviceFeasibility"
  | "supportiveCare"
  | "basicScience"
  | "other";
/** Alias for GeoJsonTypeOutput */
export type GeoJsonTypeOutput = string | "Feature";
/** Alias for GeoJsonGeometryTypeOutput */
export type GeoJsonGeometryTypeOutput = string | "Point";
/** Alias for GeoJsonPropertiesSubTypeOutput */
export type GeoJsonPropertiesSubTypeOutput = string | "Circle";
/** Alias for RepeatabilityResultOutput */
export type RepeatabilityResultOutput = "accepted" | "rejected";
